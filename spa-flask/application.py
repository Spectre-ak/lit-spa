from flask import Flask, jsonify

app = Flask(__name__, static_folder='', static_url_path="/")


@app.route("/hello")
def hello():
    return "Hello World!"


@app.route("/heartbeat")
def heartbeat():
    return jsonify({"status": "healthy"})


@app.route('/', defaults={'path': ''})
@app.route("/<string:path>") 
@app.route('/<path:path>')
def catch_all(path):
    print("404")
    return app.send_static_file("index_test_spa.html")



if __name__ == "__main__":
    app.run(port=5000, debug=True)