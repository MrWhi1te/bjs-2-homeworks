class AlarmClock{
    constructor(alarmCollection,intervalId){
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time,callback){
        if(time.length === 0 & callback.length === 0){
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if(this.alarmCollection.find(timer => timer.time === time)){
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({time,callback,canCall:true});
    }
    removeClock(time){
        let alarm = this.alarmCollection.filter(timer => timer.time === time);
        this.alarmCollection.splice(alarm,alarm.length);
    }
    getCurrentFormattedTime(){
        let nowH = new Date();
        let nowM = new Date();
        return String(("0" + nowH.getHours()).slice(-2) + ":" + ("0" + nowM.getMinutes()).slice(-2));
    }
    start(){
        if(this.intervalId === null){
            setInterval(() => {
                this.alarmCollection.forEach((alarm) => {
                    if(alarm.time === this.getCurrentFormattedTime() & alarm.canCall){
                        alarm.canCall = false;
                        alarm.callback();
                    }
                });
            }, 1000);
            this.intervalId = setInterval;
        }
    }
    stop(){
        clearInterval();
        this.intervalId = null;
    }
    resetAllCalls(){
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }
    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}