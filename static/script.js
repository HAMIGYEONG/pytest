document.getElementById('submit-btn').addEventListener('click', function () {
    // 학생 입력값
    const userInput = document.getElementById('user-answer').value.trim();

    // 서버에서 받은 정답 (숨겨진 input의 value)
    const correctAnswer = document.getElementById('correct-answer').value.trim();

    // 결과 출력 영역
    const resultMessage = document.getElementById('result-message');

    // 정답 비교
    if (userInput === correctAnswer) {
        resultMessage.textContent = '🎉 정답입니다! 멋져요!';
        resultMessage.style.color = 'green';
    } else {
        resultMessage.textContent = `❌ 오답입니다! 다시 도전해보세요.`;
        resultMessage.style.color = 'red';
    }
});
