//Get All Data
class Day {

    getSubject(weekday,period){
        let result;
        if(weekday==2){
            switch(period){
                case 1: result='Biology<br>NF(CH)';
                break;
                case 2: result='Design and Analysis of Algorithms <br>JP(CS)';
                break;
                case 3: result='Discrete Mathematics <br>SM(M)'
                break;
                case 4: result='Computer Architecture MK(CS) '
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Library'
                break;
                case 7: result='Remidial class'
                break;
                case 8: result='Remidial class'
                break;
                case 9: result='Remidial class'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==3){
            switch(period){
                case 1: result='Computer Architecture <br>MK(CS)'
                break;
                case 2: result='Biology <br>NF(CH)'
                break;
                case 3: result='Discrete Mathematics <br>SM(M)'
                break;
                case 4: result='Formal  Language & Automata  Theory <br>SB(CS)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Library'
                break;
                case 7: result='Remidial class'
                break;
                case 8: result='Remidial class'
                break;
                case 9: result='Remidial class'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==4){
            switch(period){
                case 1: result='Design & Analysis Algorithm Lab <br>JP(CS) + SB(CS) + NND(CS)'
                break;
                case 2: result='Design & Analysis Algorithm Lab <br>JP(CS) + SB(CS) + NND(CS)'
                break;
                case 3: result='Design & Analysis Algorithm Lab <br>JP(CS) + SB(CS) + NND(CS)'
                break;
                case 4: result='Design & Analysis Algorithm Lab <br>JP(CS) + SB(CS) + NND(CS)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Library'
                break;
                case 7: result='Remidial class'
                break;
                case 8: result='Remidial class'
                break;
                case 9: result='Remidial class'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==5){
            switch(period){
                case 1: result='Biology <br>NF(CH)'
                break;
                case 2: result='Environmental Sciences <br>PT(CH) '
                break;
                case 3: result='Discrete Mathematics <br>SM(M)'
                break;
                case 4: result='Computer Architecture <br>MK(CS)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Computer Architecture Lab <br>MK(CS) + SKB(CS) + MD(CS)'
                break;
                case 7: result='Computer Architecture Lab <br>MK(CS) + SKB(CS) + MD(CS)'
                break;
                case 8: result='Computer Architecture Lab <br>MK(CS) + SKB(CS) + MD(CS)'
                break;
                case 9: result='Computer Architecture Lab <br>MK(CS) + SKB(CS) + MD(CS)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==6){
            switch(period){
                case 1: result='Design and Analysis of Algorithms <br>JP(CS)'
                break;
                case 2: result='Design and Analysis of Algorithms <br>JP(CS)'
                break;
                case 3: result='Discrete Mathematics <br>SM(M)'
                break;
                case 4: result='Library'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='Library'
                break;
                case 7: result='Formal  Language & Automata  Theory <br>SB(CS)'
                break;
                case 8: result='Formal  Language & Automata  Theory <br>SB(CS)'
                break;
                case 9: result='Library'
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

