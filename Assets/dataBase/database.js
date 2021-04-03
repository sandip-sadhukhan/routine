//Get All Data
class Day {

    getSubject(weekday,period){
        let result;
        if(weekday==2){
            // TuesDay
            switch(period){
                case 1: result='Database Management Systems<br>(RPC)';
                break;
                case 2: result='Research Methodology<br>(TB)';
                break;
                case 3: result='Numerical Methods<br>(BR)';
                break;
                case 4: result='Data Mining<br>(HB)';
                break;
                case 5: result='Lunch Time';
                break;
                case 6: result='Numerical Methods (T)<br>(BR)';
                break;
                case 7: result='Database Management Systems (T)<br>(RPC)';
                break;
                case 8: result='REMEDIAL CLASS';
                break;
                case 9: result='REMEDIAL CLASS';
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==3){
            // Wednesday
            switch(period){
                case 1: result='Database Management Systems<br>(RPC)'
                break;
                case 2: result='Research Methodology<br>(TB)'
                break;
                case 3: result='Data Mining<br>(HB)'
                break;
                case 4: result='Image Processing<br>(DS)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Computer Networks Lab<br>(VKS, PKP)'
                break;
                case 7: result='Computer Networks Lab<br>(VKS, PKP)'
                break;
                case 8: result='Computer Networks Lab<br>(VKS, PKP)'
                break;
                case 9: result='Computer Networks Lab<br>(VKS, PKP)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==4){
            // Thursday
            switch(period){
                case 1: result='Database Management Systems<br>(RPC)'
                break;
                case 2: result='Computer Networks<br>(VKS)'
                break;
                case 3: result='Data Mining<br>(HB)'
                break;
                case 4: result='Image Processing<br>(DS)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Image Processing (T)<br>(DS)'
                break;
                case 7: result='Library'
                break;
                case 8: result='REMEDIAL CLASS'
                break;
                case 9: result='REMEDIAL CLASS'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==5){
            // Friday
            switch(period){
                case 1: result='Computer Networks<br>(VKS)'
                break;
                case 2: result='Image Processing<br>(DS)'
                break;
                case 3: result='Numerical Methods<br>(BR)'
                break;
                case 4: result='MOOCS<br>(RKN)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Database Management System Lab<br>(RPC, AC)'
                break;
                case 7: result='Database Management System Lab<br>(RPC, AC)'
                break;
                case 8: result='Database Management System Lab<br>(RPC, AC)'
                break;
                case 9: result='Database Management System Lab<br>(RPC, AC)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==6){
            // Saturday
            switch(period){
                case 1: result='Research Methodology<br>(TB)'
                break;
                case 2: result='Computer Networks<br>(VKS)'
                break;
                case 3: result='Numerical Methods<br>(BR)'
                break;
                case 4: result='Computer Networks (T)<br>(VKS)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Data Mining (T)<br>(HB)'
                break;
                case 7: result='Library'
                break;
                case 8: result='Library'
                break;
                case 9: result='MOOCS<br>(RPC)'
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

