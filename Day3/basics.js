function play(player) {
  var arr = ['rock', 'paper', 'scissors'];
  var computer = arr[Math.floor(Math.random() * 3)];
  document.getElementById('computer').innerHTML =
    "<b>Computer chose:</b> " + computer;
  var result = "";
  if (player === computer) result = "It's a <span style='color:gray'>tie</span>!";
  else if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) result = "<span style='color:green'>You win!</span>";
  else result = "<span style='color:red'>You lose!</span>";
  document.getElementById('result').innerHTML =
    "<b>Result:</b> " + result;
}
