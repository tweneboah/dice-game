// //Selections
// //Player 1
// const player1TotalScore = document.querySelector('#player1TotalScore');
// const player1Btn = document.querySelector('#player1Btn');
// const player1CurrentScore = document.querySelector('#player1CurrentScore');
// const player1LifeLeft = document.querySelector('#player1LifeLeft')
// const player1Bg = document.querySelector('#player1-bg')
// const player1TossingMsg = document.querySelector('#player1TossingMsg')


// const diceImage = document.querySelector('#dice-image')
// const parentDiv = document.querySelector('#parent');
// const resetGame = document.querySelector('#resetGame');

// // Player 2
// const player2TotalScore = document.querySelector('#player2TotalScore');
// const player2Btn = document.querySelector('#player2Btn');
// const player2CurrentScore = document.querySelector('#player2CurrentScore');
// const player2LifeLeft = document.querySelector('#player2LifeLeft')
// const player2Bg = document.querySelector('#player2-bg');
// const player2TossingMsg = document.querySelector('#player2TossingMsg')
// //Player 1 variables
// let player1CurrentScoreValue = 0
// let player1TotalScoreValue = 0
// let player1LifeLeftValue = 6;


// //Player 2 variables
// let player2CurrentScoreValue = 0
// let player2TotalScoreValue = 0
// let player2LifeLeftValue = 6;


// //intitial values for player 1
// player1TotalScore.innerHTML = player1TotalScoreValue
// player1LifeLeft.innerHTML = player1LifeLeftValue;

// //intitial values for player 2
// player2TotalScore.innerHTML = player2TotalScoreValue
// player2LifeLeft.innerHTML = player2LifeLeftValue;


// //Reset
// const resetGameFn = () => {
//     //Player reset
//     player1CurrentScoreValue = 0
//     player1TotalScoreValue = 0
//     player1LifeLeftValue = 6;
//     player1LifeLeft.innerHTML = player1LifeLeftValue;
//     player1TotalScore.innerHTML = player1TotalScoreValue;
//     player1CurrentScore.innerHTML = player1CurrentScoreValue;
//     //player 2 reset
//     player2CurrentScoreValue = 0
//     player2TotalScoreValue = 0
//     player2LifeLeftValue = 6;
//     player2LifeLeft.innerHTML = player2LifeLeftValue;
//     player2CurrentScore.innerHTML = player2CurrentScoreValue;
//     player2TotalScore.innerHTML = player2TotalScoreValue

//     //display results
// }

// const player2RollDiceFn = () => {
//     //rand btn 1-6
//     const diceRandomNumber = Math.floor(Math.random() * 6) + 1;
//     //Change the image base on the random
//     diceImage.src = `./img/dice-${diceRandomNumber}.png` //know the path of your image. you can check the path in your html
//     //update the score value
//     player2TotalScoreValue += diceRandomNumber
//     //reduce the life left by one
//     player2LifeLeftValue--

//     //check and reset to 6 if the total life left is ===0
//     if (player2LifeLeftValue === -1) {
//         player2LifeLeftValue = 6
//         player2LifeLeft.innerHTML = player2LifeLeftValue;
//     }
//     //update the life left
//     player2LifeLeft.innerHTML = player2LifeLeftValue;
//     //update the score value

//     //remove class
//     player2Bg.classList.remove('bg-red-800')
//     player2Bg.classList.add('bg-transparent-800')

//     player1Bg.classList.remove('bg-transparent-800');
//     player1Bg.classList.add('bg-red-800');


//     player2TotalScore.innerHTML = player2TotalScoreValue;
//     //update the current value
//     player2CurrentScore.innerHTML = diceRandomNumber;
//     //Hide the button 
//     player1Btn.style.display = 'block';
//     //hide the tossing msg
//     //show the other player btn
//     // player2Btn.style.display = 'none'


//     //Reset the game to zero if game is over

//     //Calling the final result fn
//     //Call this fn after 5 seconds


// }

// //Player 1 roll dice fn
// const player1RollDiceFn = () => {
//     console.log(player1Bg.classList.contains('bg-red-800'))
//     //rand btn 1-6
//     const diceRandomNumber = Math.floor(Math.random() * 6) + 1;
//     //Change the image base on the random
//     diceImage.src = `./img/dice-${diceRandomNumber}.png` //know the path of your image. you can check the path in your html
//     //update the score value
//     player1TotalScoreValue += diceRandomNumber
//     //reduce the life left by one
//     player1LifeLeftValue--
//     //update the life left
//     player1LifeLeft.innerHTML = player1LifeLeftValue;
//     //update the score value
//     console.log()
//     //check and reset to 6 if the total life left is ===0
//     if (player1LifeLeftValue === -1) {
//         player1LifeLeftValue = 6
//         player1LifeLeft.innerHTML = player1LifeLeftValue;
//     }
//     //remove class
//     player2Bg.classList.remove('bg-green-800')
//     player2Bg.classList.add('bg-red-800')
//     player1Bg.classList.remove('bg-red-800')
//     player1Bg.classList.add('bg-transparent');


//     if (player1LifeLeftValue === 0) {
//         player1TotalScore.innerHTML = 0;
//         player1TotalScoreValue = 0
//         player1LifeLeftValue = 6
//         player1LifeLeft.innerHTML = player1LifeLeftValue;
//         diceImage.src = `./img/work.jpg`
//         const audio = new Audio('./audio/track1.mp3');
//         audio.play();
//         parentDiv.classList.add('bg-green-900')
//     }


//     player1TotalScore.innerHTML = player1TotalScoreValue;
//     //update the current value
//     player1CurrentScore.innerHTML = diceRandomNumber;
//     //Hide the button 
//     player1Btn.style.display = 'none'
//     //show the other player btn
//     // player2Btn.style.display = 'block'

//     //Call the player2 fn after 3 seconds
//     setTimeout(() => {
//         player2RollDiceFn()
//     }, 2000);




// }

// //calc final result fn
// const finalResultsCal = () => {
//     if (player1TotalScoreValue > player2TotalScoreValue) {
//         alert('p1 is winner')
//     } else if (player1TotalScoreValue === player2TotalScoreValue) {
//         alert('Draw')
//     } else {
//         alert('p2 is the winner')
//     }
// }





// //Trigering the fn
// player1Btn.addEventListener('click', player1RollDiceFn);
// // player2Btn.addEventListener('click', player2RollDiceFn)
// resetGame.addEventListener('click', resetGameFn);



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

            player2LifeLeft.innerHTML = 'OVER';
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
                diceImage.src = `/src/img/winner.jpg-${diceTossedValue}.png`
            } else if (data.appData.player1.totalScore < data.appData.player2.totalScore) {
                titleDOM.innerHTML = 'Game Over'
                const audio = new Audio('/src/audio/track1.mp3');
                audio.play();
                resultMsgDOM.innerHTML = `Computer won with ${data.appData.player2.totalScore}`
                parentDivDOM.classList.add('bg-red-900');
            } else {
                const audio = new Audio('/src/audio/track1.mp3');
                titleDOM.innerHTML = 'Game Over'
                audio.play();
                parentDivDOM.classList.add('bg-red-900');
                resultMsgDOM.innerHTML = `Draw game`
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
        parentDivDOM.classList.remove('bg-red-900')
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