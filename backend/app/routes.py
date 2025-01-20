from flask import Blueprint, request, jsonify
import pandas as pd
import io

api_bp = Blueprint("api", __name__)

@api_bp.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]

    try:
        # Parse CSV file using Pandas
        df = pd.read_csv(io.StringIO(file.stream.read().decode("utf-8")))
        # Limit rows for simplicity in the MVP
        data = df.head(10).to_dict(orient="records")
        columns = df.columns.tolist()
        return jsonify({"columns": columns, "data": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
