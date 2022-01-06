

class spanLogger {

    constructor (){
        this.counter = 0;
        this.startTime = Date.now();
        this.getLogs = []
    }

    /**
     * This a logger function that will log the event and the time it took to execute
     * @param {*} eventName - optional parameter that will be logged
     */
    log (eventName){
        this.counter += 1;
        if(!eventName){
            eventName = `EVENT-${this.counter}`;
        }
        eventName = eventName.toUpperCase();
        this.getLogs.push({
            counter: this.counter,
            eventName: eventName,
            duration: Date.now() - this.startTime
        });
    }

}


module.exports = spanLogger;