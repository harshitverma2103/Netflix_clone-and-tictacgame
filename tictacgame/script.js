console.log("Welcome Tic Tac Toe");
let audioTurn = new Audio("gamesound.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            let winningPlayer = document.getElementsByClassName('info')[0].innerText =
                boxtext[e[0]].innerText + ' won';
            isGameOver = true;
            if (isGameOver === true) {
                gameOver.play();
                setTimeout(function () {
                    alert("congratulation " + winningPlayer + " the game ❤️ !");
                }, 1500); // Display the alert after a 1.5-second delay

            }
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }

    });
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});


reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxes).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})