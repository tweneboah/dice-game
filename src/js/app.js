//UI CONTROLLER
const appUIController = (function () {
    //Select the DOM Strings
    //Player1
    let player1LifeLeftDOM = document.querySelector('#player1LifeLeft');
    let player1TotalScoreDOM = document.querySelector('#player1TotalScore');
    let player1CurrentScoreDOM = document.querySelector('#player1CurrentScore');
    let player1ContainerDOM = document.querySelector('#player1Container')
    //Player 2
    let player2LifeLeftDOM = document.querySelector('#player2LifeLeft');
    let player2TotalScoreDOM = document.querySelector('#player2TotalScore');
    let player2CurrentScoreDOM = document.querySelector('#player2CurrentScore');
    let player2ContainerDOM = document.querySelector('#player2Container');
    //DICE IMAGE
    const diceImage = document.querySelector('#dice-image');
    const resultMsg = document.querySelector('#resultMsg');
    const player1BtnDOM = document.querySelector('#player1Btn');
    const parentDivDOM = document.querySelector('#parent');
    const titleDOM = document.querySelector('#title');
    return {
        player1TotalScoreDOM,
        player1LifeLeftDOM,
        player1CurrentScoreDOM,
        player1ContainerDOM,
        player2LifeLeftDOM,
        player2TotalScoreDOM,
        player2CurrentScoreDOM,
        player2ContainerDOM,
        diceImage,
        resultMsg,
        player1BtnDOM,
        parentDivDOM,
        titleDOM

    }
})();

//Game 
const gameController = (function () {
    const appData = {
        player1: {
            lifeLeft: 6,
            totalScore: 0,
            currentScore: 0
        },
        player2: {
            lifeLeft: 6,
            totalScore: 0,
            currentScore: 0
        }
    }


    return {
        getGameData: function () {
            return {
                appData
            }
        },

    }

})();


//App contrl

const appController = (function (gameCtrl, UICtrl) {

    //DOMStrings
    const player1ContainerDOM = UICtrl.player1ContainerDOM;
    const player1CurrentScoreDOM = UICtrl.player1CurrentScoreDOM
    const player1TotalScoreDOM = UICtrl.player1TotalScoreDOM;
    const player1LifeLeft = UICtrl.player1LifeLeftDOM;
    //player2
    const player2ContainerDOM = UICtrl.player2ContainerDOM;
    const player2CurrentScoreDOM = UICtrl.player2CurrentScoreDOM
    const player2TotalScoreDOM = UICtrl.player2TotalScoreDOM;
    const player2LifeLeft = UICtrl.player2LifeLeftDOM;
    //
    const diceImage = UICtrl.diceImage;
    const resultMsgDOM = UICtrl.resultMsg;
    const player1BtnDOM = UICtrl.player1BtnDOM;
    const parentDivDOM = UICtrl.parentDivDOM;
    const titleDOM = UICtrl.titleDOM;
    //Reset Game DOMstring
    let resetGameDOM = document.querySelector('#resetGame');
    //Data
    let data = gameCtrl.getGameData();
    resultMsgDOM.style.display = 'none'

    //PLAYER 1 ROLL DICE FUNCTION
    const player1RollDice = function () {
        let diceTossedValue = Math.floor(Math.random() * 6) + 1;
        player1ContainerDOM.classList.remove('bg-red-800');
        //Current Score
        player1CurrentScoreDOM.innerHTML = diceTossedValue
        //TotalScore
        data.appData.player1.totalScore += diceTossedValue
        player1TotalScoreDOM.innerHTML = data.appData.player1.totalScore
        data.appData.player1.lifeLeft--
        // let lifeLeftForPlayer1 = data.appData.player1.lifeLeft--
        // console.log(lifeLeftForPlayer1)
        player1LifeLeft.innerHTML = data.appData.player1.lifeLeft
        player2ContainerDOM.classList.add('bg-red-800');
        //Change image of the dice
        diceImage.src = `/src/img/dice-${diceTossedValue}.png`
        //HIDE THE BUTTON
        player1BtnDOM.style.display = 'none'
    }

    const player2RollDice = function () {
        let diceTossedValue2 = Math.floor(Math.random() * 6) + 1;
        player2ContainerDOM.classList.remove('bg-red-800');
        //Current Score
        player2CurrentScoreDOM.innerHTML = diceTossedValue2
        //TotalScore
        data.appData.player2.totalScore += diceTossedValue2
        player2TotalScoreDOM.innerHTML = data.appData.player2.totalScore
        //Total Life left
        data.appData.player2.lifeLeft--
        player2LifeLeft.innerHTML = data.appData.player2.lifeLeft
        console.log('p2', data.appData.player2.lifeLeft);
        console.log('p1', data.appData.player1.lifeLeft)
        //show the play Button 
        player1BtnDOM.style.display = 'block'
        player1ContainerDOM.classList.add('bg-red-800');
        //Change image of the dice
        diceImage.src = `/src/img/dice-${diceTossedValue2}.png`
        if (data.appData.player2.lifeLeft == 0) {


            titleDOM.innerHTML = 'Game Over'
            resultMsgDOM.style.display = 'block';


            //hide the play Button 
            player1BtnDOM.style.display = 'none'

            if (data.appData.player1.totalScore > data.appData.player2.totalScore) {
                titleDOM.innerHTML = 'Game Over'
                const audio = new Audio('/src/audio/track1.mp3');
                parentDivDOM.classList.add('bg-red-900');

                resultMsgDOM.innerHTML = `You won with ${data.appData.player1.totalScore} score`
                audio.play();
                diceImage.src = `/src/img/winner.jpg`
            } else if (data.appData.player1.totalScore < data.appData.player2.totalScore) {
                titleDOM.innerHTML = 'Game Over'
                const audio = new Audio('/src/audio/track1.mp3');
                audio.play();
                resultMsgDOM.innerHTML = `Computer won with ${data.appData.player2.totalScore}`
                parentDivDOM.classList.add('bg-red-900');
                diceImage.src = `/src/img/winner.jpg`
            } else {
                const audio = new Audio('/src/audio/track1.mp3');
                titleDOM.innerHTML = 'Game Over'
                audio.play();
                parentDivDOM.classList.add('bg-red-900');
                resultMsgDOM.innerHTML = `Draw game`
                diceImage.src = `/src/img/winner.jpg`
            }
        }
    }

    //RESET GAME
    let resetGame = function () {
        //======Player 1======
        //reset DATA
        data.appData.player1.currentScore = 0;
        data.appData.player1.lifeLeft = 6;
        data.appData.player1.totalScore = 0;
        //Reset DOM
        player1CurrentScoreDOM.innerHTML = 0
        player1TotalScoreDOM.innerHTML = 0
        player1LifeLeft.innerHTML = data.appData.player1.lifeLeft
        //======Player 2======
        //reset DATA
        data.appData.player2.currentScore = 0;
        data.appData.player2.lifeLeft = 6;
        data.appData.player2.totalScore = 0;
        //Reset DOM
        player2CurrentScoreDOM.innerHTML = 0
        player2TotalScoreDOM.innerHTML = 0
        player2LifeLeft.innerHTML = data.appData.player2.lifeLeft;
        //show the play Button 
        player1BtnDOM.style.display = 'block';
        //Remove red bg
        parentDivDOM.classList.remove('bg-red-900');
        diceImage.src = `/src/img/dice-4.png`
    }

    //Event Listeners
    player1BtnDOM.addEventListener('click', () => {
        if (player1ContainerDOM.classList.contains('bg-red-800')) {
            player1RollDice();
            setTimeout(() => {
                player2RollDice()
            }, 2000);

        } else if (player2ContainerDOM.classList.contains('bg-red-800')) {

        }
    });

    resetGameDOM.addEventListener('click', function () {
        resetGame()
    })
    //RESET GAME ON APP LOAD

})(gameController, appUIController)