//Get All Data
class Day {
  getSubject(weekday, period) {
    let result;
    if (weekday == 2) {
      // TuesDay
      switch (period) {
        case 1:
          result = "E-Commerce and ERP<br>(KB)";
          break;
        case 2:
          result = "T & P ACTV<br>(KB)";
          break;
        case 3:
          result = "Cyber Law & Security<br>(PKP)";
          break;
        case 4:
          result = "Cryptography & Network Security<br>(SC)";
          break;
        case 5:
          result = "Lunch Time";
          break;
        case 6:
          result = "-";
          break;
        case 7:
          result = "-";
          break;
        case 8:
          result = "-";
          break;
        case 9:
          result = "-";
          break;
        default:
          result = "Something is Wrong";
      }
    } else if (weekday == 3) {
      // Wednesday
      switch (period) {
        case 1:
          result = "Cyber Law & Security<br>(PKP)";
          break;
        case 2:
          result = "E-Commerce and ERP<br>(KB)";
          break;
        case 3:
          result = "Cryptography & Network Security<br>(SC)";
          break;
        case 4:
          result = "T & P ACTV<br>(VKS)";
          break;
        case 5:
          result = "Lunch Time";
          break;
        case 6:
          result = "-";
          break;
        case 7:
          result = "-";
          break;
        case 8:
          result = "-";
          break;
        case 9:
          result = "-";
          break;
        default:
          result = "Something is Wrong";
      }
    } else if (weekday == 4) {
      // Thursday
      switch (period) {
        case 1:
          result = "T & P ACTV<br>(VKS+RD)";
          break;
        case 2:
          result = "T & P ACTV<br>(KB)";
          break;
        case 3:
          result = "Cryptography & Network Security<br>(SC)";
          break;
        case 4:
          result = "Cyber Law & Security<br>(PKP)";
          break;
        case 5:
          result = "Lunch Time";
          break;
        case 6:
          result = "-";
          break;
        case 7:
          result = "-";
          break;
        case 8:
          result = "-";
          break;
        case 9:
          result = "-";
          break;
        default:
          result = "Something is Wrong";
      }
    } else if (weekday == 5) {
      // Friday
      switch (period) {
        case 1:
          result = "-";
          break;
        case 2:
          result = "-";
          break;
        case 3:
          result = "-";
          break;
        case 4:
          result = "-";
          break;
        case 5:
          result = "Lunch Time";
          break;
        case 6:
          result = "-";
          break;
        case 7:
          result = "-";
          break;
        case 8:
          result = "-";
          break;
        case 9:
          result = "-";
          break;
        default:
          result = "Something is Wrong";
      }
    } else if (weekday == 6) {
      // Saturday
      switch (period) {
        case 1:
          result = "E-Commerce and ERP<br>(KB)";
          break;
        case 2:
          result = "Cyber Law & Security<br>(PKP)";
          break;
        case 3:
          result = "Cryptography & Network Security<br>(SC)";
          break;
        case 4:
          result = "T & P ACTV<br>(TP)";
          break;
        case 5:
          result = "Lunch Time";
          break;
        case 6:
          result = "-";
          break;
        case 7:
          result = "-";
          break;
        case 8:
          result = "-";
          break;
        case 9:
          result = "-";
          break;
        default:
          result = "Something is Wrong";
      }
    }
    return result;
  }
  getPeriodTime(period) {
    let time = "";
    switch (period) {
      case 1:
        time = "09:30 - 10:20";
        break;
      case 2:
        time = "10:20 - 11:10";
        break;
      case 3:
        time = "11:10 - 12:00";
        break;
      case 4:
        time = "12:00 - 12:50";
        break;
      case 5:
        time = "12:50 - 01:40";
        break;
      case 6:
        time = "01:40 - 02:30";
        break;
      case 7:
        time = "02:30 - 03:20";
        break;
      case 8:
        time = "03:20 - 04:10";
        break;
      case 9:
        time = "04:10 - 05:00";
        break;
      default:
        time = "something went wrong!in time";
    }
    return time;
  }
}
