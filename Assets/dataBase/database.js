//Get All Data
class Day {

    getSubject(weekday,period){
        let result;
        if(weekday==2){
            switch(period){
                case 1: result='Analog & Digital Electronics<br>(SOS)'
                break;
                case 2: result='Economics For Engineers<br>(AD)'
                break;
                case 3: result='Data Structure & Algorithm<br>(SC)'
                break;
                case 4: result='Computer Organization<br>(CBD)'
                break;
                case 5: result='Lunch'
                break;
                case 6: result='Mathematics<br>(AG)'
                break;
                case 7: result='Economics For Engineers<br>(AD)'
                break;
                case 8: result='Aplitue<br>(NF)'
                break;
                case 9: result='Library'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==3){
            switch(period){
                case 1: result='Economics For Engineers<br>(AD)'
                break;
                case 2: result='Data Structure & Algorithm<br>(SC)'
                break;
                case 3: result='Computer Organization<br>(CBD)'
                break;
                case 4: result='Moocs<br>(NF)'
                break;
                case 5: result='Lunch Time'
                break;
                case 6: result='IT Workshop<br>(JP, AS, NF)'
                break;
                case 7: result='IT Workshop<br>(JP, AS, NF)'
                break;
                case 8: result='IT Workshop<br>(JP, AS, NF)'
                break;
                case 9: result='IT Workshop<br>(JP, AS, NF)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==4){
            switch(period){
                case 1: result='Data Structure & Algorithm<br>(SC)'
                break;
                case 2: result='Computer Organization<br>(CBD)'
                break;
                case 3: result='Analog & Digital Electronics<br>(SOS)'
                break;
                case 4: result='Moocs<br>(NF)'
                break;
                case 5: result='Lunch'
                break;
                case 6: result='Data Structure & Algorithm (Lab) <br>(SC, PM, NF)'
                break;
                case 7: result='Data Structure & Algorithm (Lab) <br>(SC, PM, NF)'
                break;
                case 8: result='Data Structure & Algorithm (Lab) <br>(SC, PM, NF)'
                break;
                case 9: result='Data Structure & Algorithm (Lab) <br>(SC, PM, NF)'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==5){
            switch(period){
                case 1: result='Analog & Digital Electronics (Lab) <br>(TB, MKS, MK, SOS)'
                break;
                case 2: result='Analog & Digital Electronics (Lab) <br>(TB, MKS, MK, SOS)'
                break;
                case 3: result='Analog & Digital Electronics (Lab) <br>(TB, MKS, MK, SOS)'
                break;
                case 4: result='Analog & Digital Electronics (Lab) <br>(TB, MKS, MK, SOS)'
                break;
                case 5: result='Lunch'
                break;
                case 6: result='Mathematics<br>(AG)'
                break;
                case 7: result='Computer Organization (T)<br>(CBD)'
                break;
                case 8: result='Aplitue<br>(NF)'
                break;
                case 9: result='Library'
                break;
                default: result='Somthing is Wrong';
            }
        } else if(weekday==6){
            switch(period){
                case 1: result='Economics For Engineers<br>(AD)'
                break;
                case 2: result='Data Structure & Algorithm<br>(SC)'
                break;
                case 3: result='Analog & Digital Electronics<br>(SOS)'
                break;
                case 4: result='Mathematics<br>(AG)'
                break;
                case 5: result='Lunch'
                break;
                case 6: result='Computer Organization (Lab)<br>(SG, SOB)'
                break;
                case 7: result='Computer Organization (Lab)<br>(SG, SOB)'
                break;
                case 8: result='Computer Organization (Lab)<br>(SG, SOB)'
                break;
                case 9: result='Computer Organization (Lab)<br>(SG, SOB)'
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

