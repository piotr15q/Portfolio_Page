import torch
import torch.nn as nn
import os
import pymupdf
import re
import transformers
from sentence_transformers import SentenceTransformer
from sklearn import preprocessing
import tempfile
import traceback
from django.http import JsonResponse

device = "cuda" if torch.cuda.is_available() else "cpu"

class CV_Classificator(nn.Module):
    def __init__(self, input_layer: int, hidden_layer: int, output_layer: int):
        super().__init__()

        self.seq = nn.Sequential(
            nn.Linear(in_features=input_layer,
                      out_features=hidden_layer),
            nn.ReLU(),
            nn.Linear(in_features=hidden_layer,
                      out_features=hidden_layer),
            nn.ReLU(),
            nn.Linear(in_features=hidden_layer,
                      out_features=output_layer)
        )

    def forward(self, x):
        x = self.seq(x)
        return x

def load_model():
    model = model_cv = CV_Classificator(input_layer=768, hidden_layer=256, output_layer=25).to(device)
    try:
        model.load_state_dict(torch.load('models/CV_checker.pth', map_location=torch.device('cpu')))
        model.eval()
        return model
    except FileNotFoundError:
        print("Model Not Found")
        return None

def predict_cv(file):
    model = load_model()
    if model is None:
        return {"error": "Model not loaded."}  # W przypadku problemów z ładowaniem modelu, zwróć komunikat o błędzie.

    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
            tmp_file.write(file.read())
            tmp_file_path = tmp_file.name

        tmp_file.close()

        doc = pymupdf.open(tmp_file_path)
        text = ""
        for page in doc:
            text += page.get_text()  # Zbieramy tekst z każdej strony

        # Usuwamy zbędne znaki
        text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
        text = text.replace("\n", "").replace("\r\n", "")

        # Pobieramy embeddingi tekstu
        embedding_model = SentenceTransformer(model_name_or_path="all-mpnet-base-v2", device=device)
        text_embeddings = embedding_model.encode(text, convert_to_tensor=True)

        # Predykcja modelu
        with torch.inference_mode():
            test_logits = model(text_embeddings)
            test_pred = torch.argmax(test_logits, dim=0)

        predicted_index = test_pred.item()

        return {"prediction": predicted_index}  # Zwracamy predykcję w odpowiednim formacie

    except Exception as e:
        print("Błąd podczas przetwarzania pliku:")
        traceback.print_exc()
        return {"error": str(e)}  # Zwracamy błąd w formacie JSON

    finally:
        # Zawsze próbujemy usunąć plik tymczasowy
        if os.path.exists(tmp_file_path):
            try:
                os.remove(tmp_file_path)
            except PermissionError:
                print(f"Nie udało się usunąć pliku: {tmp_file_path}")

