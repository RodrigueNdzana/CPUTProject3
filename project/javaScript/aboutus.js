// the date
function startTime() {
  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var ampm = "";
  minutes = checkTime(minutes);

  if (hours > 12) {
    hours = hours - 12;
    ampm = " PM";
  } else if (hours == 12) {
    hours = 12;
    ampm = " AM";
  } else if (hours < 12) {
    ampm = " AM";
  } else {
    ampm = "PM";
  }

  if (hours == 0) {
    hours = 12;
  }

  document.getElementById("display").innerHTML = hours + ":" + minutes + ampm;
  var t = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
//date
function startDate() {
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  document.getElementById("date").innerHTML =
    days[d.getDay()] +
    " | " +
    [d.getMonth() + 1] +
    "/" +
    d.getDate() +
    "/" +
    d.getFullYear();
}

// feedback and image sessions

var images = [
  "images/testomony1.jpg",
  "images/testomony5.jpg",
  "images/testomony2.jpg",
  "images/testomony4.jpg",
  "images/testomony6.jpg",
  "images/testomony3.jpg"
];

//quote array
var quotes = [
  '"This is more than a normal school, the way you learn is innovative and fun. The teachers are well prepared and they become your family."<br>-  Pietro, Student (Italy)',
  '"Either I will find a way, or I will make oneIt seemed that the teachers were doctors – they examined our situation and prescribed the correct medicine for the problems we had with the language."<br> - Racquel, Events Coordinator (Brazil)',
  '"I’ve visited many online programming schools and RodEduca were One of the best. I had a great experience and I’m happy that I could visit Cape Town."<br>- Alena, Lecturer (Slovakia)',
  '"When I arrived in Cape Town I was alone but they didn’t leave me like that, they were like my family."<br>- Khalied, Sales Rep (Saudi Arabia)',
  '"Never give up, for that is just the place and time that the tide will turn."<br>- Harriet Beecher Stowe',
  '"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them. That is what RodEduca were always reminding me"<br>- Bruce Lee(South Africa)'
];

function genQuote() {
  var randNum = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randNum];
  document.getElementById("imagescount").setAttribute("src", images[randNum]);
}
