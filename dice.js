
   var myArray = [1,2,3,4,5,6]
   var player1 = myArray[Math.floor(Math.random() * 6)];
   var player2 = myArray[Math.floor(Math.random() * 6)]; 
   
   
    function dice() {
      if(player1 > player2) {
      document.querySelector("h1").innerHTML = "Player 1 Wins the game! 🎉"; 
      }else if(player2> player1) {
       document.querySelector("h1").innerHTML = "Player 2 Wins the game! 🎉";   
      }else if(player1 === player2){
      document.querySelector("h1").innerHTML = "its a draw!😫"; 
      }
   
    }
    dice();

    switch(player1) {
      case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.png");
        break;
      case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.png");
        break;
      case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.png");
        break;
      case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.png");
        break;
      case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.png");
        break;
      case  6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.png");
        break;
      default:
      document.querySelector(".img1").setAttribute("src", "images/player1.jpg");
    }

    switch(player2) {
      case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.png");
        break;
      case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.png");
        break;
      case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.png");
        break;
      case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.png");
        break;
      case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.png");
        break;
      case  6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.png");
        break;
      default:
      document.querySelector(".img2").setAttribute("src", "images/player2.jpg");
    }
    

