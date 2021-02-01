var countDownDate = new Date("Jan 30, 2021 13:13:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance > 0) {
    var elements = document.getElementsByClassName("change");

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.color = "#ff0000";
    }
    elements[0].innerHTML = "32,5лв/месец";
    elements[1].innerHTML = "32,5лв/месец";
    elements[2].innerHTML = "37,5лв/месец";
    elements[3].innerHTML = "45лв/месец";
    elements[4].innerHTML = "25лв/месец";
    elements[5].innerHTML = "22,5лв/месец";
    elements[6].innerHTML = "7,5лв/месец";
    elements[7].innerHTML = "5лв/месец";
    elements[8].innerHTML = "10лв/месец";
  } else {
    clearInterval(x);
    document.getElementById("countdown").remove();
    document.getElementById("pdisc").remove();
  }
}, 10);
