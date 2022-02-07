// Math.floor()
// Math.ceil()
// Math.round()
// Math.random()
// let rand = Math.random() * 10;
// console.log(Math.floor(rand));



// *** ROUND 1 ***
// JA  3 : 5 VI  (3:5) 


// console.log(`*** ROUND 1 ***`);
// player1Score = player1Score + k1;
// player2Score = player2Score + k2;
// console.log(`JA ${k1} : ${k2}    (${player1Score}:${player2Score})`);

// k1 = Math.floor(Math.random()*6) + 1;
// k2 = Math.floor(Math.random()*6) + 1;

// console.log(`*** ROUND 2 ***`);
// player1Score = player1Score + k1;
// player2Score = player2Score + k2;
// console.log(`JA ${k1} : ${k2}    (${player1Score}:${player2Score})`);



let player1Score = 0;
let player2Score = 0;

let p1 = prompt("Player 1 name")
let p2 = prompt("Player 2 name")

let round = 1;

bacanjeKockice();
checkWinner();

function bacanjeKockice(){
    for (let i = 0; i < 10; i++) {
        let k1 = Math.floor(Math.random()*6) + 1;  //5
        let k2 = Math.floor(Math.random()*6) + 1;  //3
    
        console.log(`*** ROUND ${round} ***`);
        round++;
        player1Score = player1Score + k1;
        player2Score = player2Score + k2;
        console.log(`${p1} ${k1} : ${k2} ${p2}   (${player1Score}:${player2Score})`);
    }
}

function checkWinner(){
    if(player1Score < player2Score){
        console.log(`*** POBEDNIK ${p1} ***`);
    }
    if(player1Score > player2Score){
        console.log(`*** POBEDNIK ${p2} ***`);
    }
    if(player1Score == player2Score){
        console.log(`*** NEMA POBEDNIKA ***`);
    }
}


