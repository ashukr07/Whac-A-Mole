let score=0;
let currMoleTile;
let currPlantTile;
let gameStart=false;
let gameOver=false;

$(document).keydown(setGame);

function setGame(){
    gameStart=true;
    setInterval(generateMole,1000);
    setInterval(generatePlant,1200);
}

function generateMole(){
    if(gameOver)
    return;
    if(currMoleTile){
        $("#"+currMoleTile).css("background-image","url(./pipe.png)");
    }

    let moleNum=1+Math.floor(9*Math.random());
    if(currPlantTile==moleNum){
        return;
    }
    $("#"+moleNum).css("background-image","url(./monty-mole.png)");
    currMoleTile=moleNum;
   
}

function generatePlant(){
    if(gameOver)
    return;

    if(currPlantTile){
        $("#"+currPlantTile).css("background-image","url(./pipe.png)");
    }
    let plantNum=1+Math.floor(9*Math.random());
    if(plantNum==currMoleTile){
        return;
    }
    $("#"+plantNum).css("background-image","url(./plant.png)");
    currPlantTile=plantNum;
}





function check(userClicked){

    if(userClicked==currPlantTile.toString()){
        $("#title").text("Game Over");
        gameOver=true;
        restartGame();
        
    }
    else if(userClicked==currMoleTile.toString()){
        score+=10;
        $("#score").text(score);
    }
}

function restartGame(){
    score=0;
    currMoleTile=null;
    currPlantTile=null;
    gameStart=false;
    $("#title").text("Press any to start the game");
}

$(".box").click((event)=>{
    if(gameStart&&!gameOver){
    let boxClicked=event.target.id;
    check(boxClicked);
    }
   
})
