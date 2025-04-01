from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB Atlas
client = MongoClient("your_mongodb_connection_string")
db = client["mydatabase"]
collection = db["users"]

@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json
    if not data.get("name") or not data.get("email"):
        return jsonify({"error": "Missing fields"}), 400

    collection.insert_one({"name": data["name"], "email": data["email"]})
    return jsonify({"message": "Data saved successfully"}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
