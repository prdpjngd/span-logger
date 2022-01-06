

class spanReport {


    constructor (){
        this.counter = 0;
        this.startTime = Date.now();
        this.finalData = []
    }
 
    logger (eventName){
        this.counter += 1;
        if(!eventName){
            eventName = `EVENT-${this.counter}`;
        }
        eventName = eventName.toUpperCase();
        this.finalData.push({
            counter: this.counter,
            eventName: eventName,
            time: Date.now() - this.startTime
        });
    }

    print (){
        console.log(this.finalData);
    }

}


module.exports = spanReport;