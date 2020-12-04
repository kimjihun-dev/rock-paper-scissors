
let SCISSORS = "가위";
let ROCK = "바위";
let PAPER = "보";

function onButtonClick(userInput){
    console.log('사용자의 패 : ' + userInput);
    let comInput;
    let rnd = Math.random();
    

    if (rnd < 0.33) {
        comInput = SCISSORS;
    } else if (rnd < 0.66) {
        comInput = ROCK;
    } else {
        comInput = PAPER;
    }

    let result = '컴퓨터: ' + comInput;

    if (userInput === SCISSORS) {
        if (comInput === SCISSORS) {
            result += ' - 비겼습니다.';
        } else if (comInput === ROCK) {
            result += '- 졌습니다.';
        } else {
            result += '- 이겼습니다!';
        }
    } else if (userInput === ROCK) {
        if (comInput === SCISSORS) {
            result += '- 이겼습니다!';
        } else if (comInput === ROCK) {
            result += ' - 비겼습니다.';
        } else {
            result += '- 졌습니다.';
        }
    } else {
        if (comInput === SCISSORS) {
            result += '- 졌습니다.';
        } else if (comInput === ROCK) {
            result += '- 이겼습니다!';
        } else {
            result += ' - 비겼습니다.';
        }
    }

    alert(result);
}



