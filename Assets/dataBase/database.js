//Get All Data
class Day {

    getSubject(weekday,period){
        let result;
        if(weekday==2){
            // TuesDay
            switch(period){
                case 1: result='Complier Design<br>(MD)';
                break;
                case 2: result='Operating Systems<br>(SS)';
                break;
                case 3: result='Object Oriented Programming<br>(JP)'
                break;
                case 4: result='Artificial Intelligence<br>(PKP)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Operating System Lab<br>(SS, VKD)'
                break;
                case 7: result='Operating System Lab<br>(SS, VKD)'
                break;
                case 8: result='Operating System Lab<br>(SS, VKD)'
                break;
                case 9: result='Operating System Lab<br>(SS, VKD)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==3){
            // Wednesday
            switch(period){
                case 1: result='Software Engineering<br>(SAR)'
                break;
                case 2: result='Object Oriented Programming<br>(JP)'
                break;
                case 3: result='Operating Systems<br>(SS)'
                break;
                case 4: result='Complier Design<br>(MD)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Constitution of India<br>(MR)'
                break;
                case 7: result='Complier Design<br>T - (MD)'
                break;
                case 8: result='Industrial Management<br>(NF)'
                break;
                case 9: result='Library'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==4){
            // Thrusday
            switch(period){
                case 1: result='Software Engineering Lab<br>(SAR, SB)'
                break;
                case 2: result='Software Engineering Lab<br>(SAR, SB)'
                break;
                case 3: result='Software Engineering Lab<br>(SAR, SB)'
                break;
                case 4: result='Software Engineering Lab<br>(SAR, SB)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Artificial Intelligence<br>(PKP)'
                break;
                case 7: result='Industrial Management<br>(NF)'
                break;
                case 8: result='Software Engineering<br>(SAR)'
                break;
                case 9: result='Software Engineering<br>T - (SAR)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==5){
            // Friday
            switch(period){
                case 1: result='Software Engineering<br>(SAR)'
                break;
                case 2: result='Complier Design<br>(MD)'
                break;
                case 3: result='Operating Systems<br>(SS)'
                break;
                case 4: result='Industrial Management<br>(NF)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Object Oriented Programming Lab<br>(JP, SKB)'
                break;
                case 7: result='Object Oriented Programming Lab<br>(JP, SKB)'
                break;
                case 8: result='Object Oriented Programming Lab<br>(JP, SKB)'
                break;
                case 9: result='Object Oriented Programming Lab<br>(JP, SKB)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==6){
            // Saturday
            switch(period){
                case 1: result='Object Oriented Programming<br>(JP)'
                break;
                case 2: result='Constitution of India<br>(MR)'
                break;
                case 3: result='Operating Systems<br>T - (SS)'
                break;
                case 4: result='Artificial Intelligence<br>(PKP)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Constitution of India<br>(MR)'
                break;
                case 7: result='Object Oriented Programming<br>T - (JP)'
                break;
                case 8: result='REMEDIAL CLASS'
                break;
                case 9: result='REMEDIAL CLASS'
                break;
                default: result='Somthing is Wrong';
            }
        }
        return result;
    }
    getPeriodTime(period){
        let time='';
        switch(period){
            case 1: time="09:30 - 10:20";
            break;
            case 2: time="10:20 - 11:10";
            break;
            case 3: time="11:10 - 12:00";
            break;
            case 4: time="12:00 - 12:50";
            break;
            case 5: time="12:50 - 01:40";
            break;
            case 6: time="01:40 - 02:30";
            break;
            case 7: time="02:30 - 03:20";
            break;
            case 8: time="03:20 - 04:10";
            break;
            case 9: time="04:10 - 05:00";
            break;
            default:time="something went wrong!in time";
        }
        return time;
    }
}

