//Create a day
const day = new Day();
main();
//Call the main function after 1 minute
setInterval(main, 60000);
//Main Function
function main() {
  clearRoutine();

  //Get time and weekday
  let today = new Date();
  let hours = today.getHours();
  let minute = today.getMinutes().toFixed(2);
  let time = hours + minute / 100;
  let weekday = today.getDay();

  //Get ui's
  var tableBody = document.getElementById("table-body");
  var msg = document.querySelector(".msg");

  //Add Heading
  if (time >= 0.0 && time <= 9.29) {
    let msg = "Today's Class";
    let externalday = "Today";
    showRoutine(weekday, msg, externalday);
  } else if (time >= 9.3 && time <= 16.59) {
    let msg = "Upcoming Class";
    let externalday = "Today";
    showRoutine(weekday, msg, externalday);
    if (weekday != 0 && weekday !== 1) {
      if (time >= 10.2) {
        tableBody.firstElementChild.remove();
      }
      if (time >= 11.1) {
        tableBody.firstElementChild.remove();
      }
      if (time >= 12.0) {
        tableBody.firstElementChild.remove();
      }
      if (time >= 12.5) {
        tableBody.firstElementChild.remove();
      }
      if (time >= 13.4) {
        tableBody.firstElementChild.remove();
      }
      if (time >= 14.3) {
        tableBody.firstElementChild.remove();
      }
      if (time >= 15.2) {
        tableBody.firstElementChild.remove();
      }
      if (time >= 16.1) {
        tableBody.firstElementChild.remove();
      }
    }
  } else {
    let msg = "Tomorrow's Class";
    let nextweekday;
    if (weekday == 6) {
      nextweekday = 0;
    } else {
      nextweekday = weekday + 1;
    }
    let externalday = "Tomorrow";
    showRoutine(nextweekday, msg, externalday);
  }

  //check weekday is holiday or not
  function checkHoliday(weekday) {
    if (weekday == 0 || weekday == 1) {
      return true;
    }
    return false;
  }

  //show routine
  function showRoutine(weekday, msg, externalday) {
    document.querySelector(".heading").textContent = msg;
    if (checkHoliday(weekday)) {
      let p = document.createElement("p");
      p.className = " text-center display-4 alert alert-success";
      p.appendChild(
        document.createTextNode(externalday + " is Holiday! Enjoy...")
      );
      document.querySelector(".msg").appendChild(p);
    } else {
      for (let i = 1; i <= 9; i++) {
        let tr = document.createElement("tr");
        let periodtd = tr.appendChild(document.createElement("td"));
        periodtd.innerHTML = i;
        let timetd = tr.appendChild(document.createElement("td"));
        timetd.innerHTML = day.getPeriodTime(i);
        let subjecttd = tr.appendChild(document.createElement("td"));
        subjecttd.innerHTML = day.getSubject(weekday, i);
        tableBody.appendChild(tr);
      }
    }
  }
  //clear routine
  function clearRoutine() {
    document.getElementById("table-body").innerHTML = "";
    document.querySelector(".msg").innerHTML = "";
  }
}
