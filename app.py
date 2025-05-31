from flask import Flask, render_template

app = Flask(__name__)

# 단일 퀴즈 데이터 (추후 여러 문제로 확장 가능)
quiz = {
    "code": 'print("Hello, world!")',
    "answer": "Hello, world!"
}

@app.route("/")
def index():
    return render_template("index.html", quiz=quiz)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
