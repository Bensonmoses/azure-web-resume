from flask import Flask, jsonify

app = Flask(__name__)

# In-memory Visit Counter
visit_count = 0

@app.route('/')
def home():
    return "Flask API is running! Go to /visitcount to see the counter."

@app.route('/visitcount', methods=['GET'])
def get_visit_count():
    global visit_count
    visit_count += 1
    return jsonify({"count": visit_count})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)
