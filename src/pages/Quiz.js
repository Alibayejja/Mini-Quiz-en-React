import { useState } from "react";
import { questions } from "../data/questions";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
    const navigate = useNavigate();
    const [indexQuestion, setIndexQuestion] = useState(0);
    const currentQuestion = questions[indexQuestion];
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    function handleAnswerClick(option) {
        setSelectedAnswer(option);
    }

    function handleNextQuestion() {
        if (selectedAnswer === null) {
            return;
        }

        // نحسبو السكور الجديد
        let newScore = score;
        if (selectedAnswer === currentQuestion.answer) {
            newScore = score + 1;
            setScore(newScore);
        }

        // إلى مازالين مزال ماوصلناش لآخر سؤال
        if (indexQuestion < questions.length - 1) {
            setIndexQuestion(indexQuestion + 1);
            setSelectedAnswer(null);
        } else {
            // آخر سؤال: نمشيو للـ Résultat بهاذ السكور النهائي
            navigate("/result", {
            state: { score: newScore, total: questions.length },
        });
    }
}

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "60px",
                backgroundColor:"#ffffff",
            }}
        >
            <h1 style={{marginBottom: "20px"}}>Quiz</h1>
            
            <p style={{ fontSize: "20px", marginBottom: "20px"}}>
               {currentQuestion.question}
            </p>

            {/* الاختيار 1 */}
            <button
                style={{
                    padding: "10px 20px",
                    marginBlock: "10px",
                    cursor: "pointer",
                    border: selectedAnswer === currentQuestion.options[0] ? "2px solid #9500ffff" : "1px solid #333",
                    borderRadius: "8px",
                    background: selectedAnswer === currentQuestion.options[0] ? "#e0f7fa" : "#ffffff",
                    width: "300px",
                    textAlign: "left",
                }}
                onClick={() => handleAnswerClick(currentQuestion.options[0])}
            >
                {currentQuestion.options[0]}
            </button>

            {/* الاختيار 2 */}
            <button
                style={{
                    padding: "10px 20px",
                    marginBlock: "10px",
                    cursor: "pointer",
                    border: selectedAnswer === currentQuestion.options[1] ? "2px solid #9500ffff" : "1px solid #333",
                    borderRadius: "8px",
                    background: selectedAnswer === currentQuestion.options[1] ? "#e0f7fa" : "#ffffff",
                    width: "300px",
                    textAlign: "left",
                }}
                onClick={() => handleAnswerClick(currentQuestion.options[1])}
            >
                {currentQuestion.options[1]}
            </button>

            {/* الاختيار 3 */}
            <button
                style={{
                    padding: "10px 20px",
                    marginBlock: "10px",
                    cursor: "pointer",
                    border: selectedAnswer === currentQuestion.options[2] ? "2px solid #9500ffff" : "1px solid #333",
                    borderRadius: "8px",
                    background: selectedAnswer === currentQuestion.options[2] ? "#e0f7fa" : "#ffffff",
                    width: "300px",
                    textAlign: "left",
                }}
                onClick={() => handleAnswerClick(currentQuestion.options[2])}
            >
                {currentQuestion.options[2]}
            </button>

            {/* الاختيار 4 */}
              <button
                style={{
                    padding: "10px 20px",
                    marginBlock: "10px",
                    cursor: "pointer",
                    border: selectedAnswer === currentQuestion.options[3] ? "2px solid #9500ffff" : "1px solid #333",
                    borderRadius: "8px",
                    background: selectedAnswer === currentQuestion.options[3] ? "#e0f7fa" : "#ffffff",
                    width: "300px",
                    textAlign: "left",
                }}
                onClick={() => handleAnswerClick(currentQuestion.options[3])}
            >
                {currentQuestion.options[3]}
            </button>

            {/*suivant*/}
            <button
                style={{
                    marginTop: "25px",
                    padding: "10px 25px",
                    fontSize: "16px",
                    cursor: "pointer",
                    background: "#00bcd4",
                    border: "none",
                    borderRadius: "8px",
                    color: "white",
                }}
                onClick={handleNextQuestion}
            >
                Suivant
            </button>

        </main>
    );
}