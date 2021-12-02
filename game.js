function game(){
  var p1 = document.getElementById("player1");
  var p2 = document.getElementById("player2");
  var result = document.getElementById("result");
  var p1_num = Math.round(Math.random()*5)+1;
  var p2_num = Math.round(Math.random()*5)+1;
  if(p2_num>p1_num){
    result.innerHTML = "Player 2 wins!";
  }else if(p2_num<p1_num){
    result.innerHTML = "Player 1 wins!";
  }else result.innerHTML = "Tie!";
  p1.innerHTML = '<p>Player 1</p><img src="img/dice'+p1_num+'.jpeg"/>';
  p2.innerHTML = '<p>Player 2</p><img src="img/dice'+p2_num+'.jpeg"/>';
}
