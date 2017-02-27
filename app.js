var time = {
  work: 1500,
  break: 300,
};
var timeOutput;

var count = time.work;
var timer ;
$('p.type').html('Work');
$('#start-stop').html('Start');
///

function timeDisplay(timeInput){
  var minCon = timeInput/60;
  var min = (Math.floor(minCon)).toString();
  var sec = (timeInput%60).toString();
  if(min.length == 1 && sec.length != 1){
    var paddedMin = "0" + min;
    timeOutput =  paddedMin + ":" + sec;
  }else if(sec.length == 1 && min.length != 1){
    var paddedSec= "0" + sec;
    timeOutput =  min + ":" + paddedSec;
  } else if(min.length == 1 && sec.length == 1){
    var paddedMin = "0" + min;
    var paddedSec= "0" + sec;
    timeOutput =  paddedMin + ":" + paddedSec;
  }else {
    timeOutput =  min + ":" + sec;
  };
  console.log(timeOutput);
  return timeOutput;
}

$("p.counter").html(timeDisplay(count));
$("p.workInt").html(timeDisplay(time.work));
$("p.breakInt").html(timeDisplay(time.break));

function addWork() {
  time.work += 60;
  count = time.work;
  $("p.workInt").html(timeDisplay(count));
  $("p.counter").html(timeDisplay(count));
};

function minusWork() {
  if(time.work > 60) {
  time.work -= 60;
  count = time.work;
  $("p.counter").html(timeDisplay(count));
  $("p.workInt").html(timeDisplay(count));
    $("p.workInt").html(timeDisplay(count));
  } else {
    time.work = 60;
    count = time.work;
  }
};

function addBreak() {
  time.break += 60;
  $("p.breakInt").html(timeDisplay(time.break));
};

function minusBreak() {
  if (time.break > 60) {
  time.break -= 60;
    $("p.breakInt").html(timeDisplay(time.break));
  } else {
    time.break = 60;
  }
};

function reset() {
  if($("#clock").hasClass("workTime") == false){
    $("#clock").addClass("workTime");
  }
  count = time.work;
  console.log("timer reset");
  $("p.counter").html(timeDisplay(count));
};


function checkStatus() {
  if($("#clock").hasClass("workTime") == true) {
    $("p.type").html("Work");
    count = time.work;
    $("p.counter").html(timeDisplay(time.work));
  } else {
    $("p.type").html("Break");
    count = time.break;
    $("p.counter").html(timeDisplay(time.break));
  };
};

//
function countDown(){
  if (count >= 1) {
    count -= 1;
    console.log(count);
    $("p.counter").html(timeDisplay(count));
  } else if(count == 0)  {
    console.log("switch");
    console.log(count);
    $("#clock").toggleClass("workTime");
    checkStatus();
  }
};

$('#addWork').click(function(){
  addWork();
});

$('#minusWork').click(function() {
  minusWork();
});

$('#addBreak').click(function() {
  addBreak();
});

$('#minusBreak').click(function() {
  minusBreak();
});

$("#reset").click(function() {
  reset();

});

$("#start-stop").click(function() {
  $("#start-stop").toggleClass("running");
  console.log("timer toggled");
  if ($("#start-stop").hasClass("running") == true) {
    timer = setInterval(function(){ countDown()}, 1000);
    $("#start-stop").html("Stop");
  } else {
    clearInterval(timer);
    $("#start-stop").html("Start");
  };
});