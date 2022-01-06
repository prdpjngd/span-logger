

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
        let tmp = {
            counter: this.counter,
            eventName: eventName,
            duration: Date.now() - this.startTime
        };
        console.log(`${tmp.counter} - ${tmp.eventName} - ${tmp.duration}ms`);
        this.getLogs.push(tmp);
        return tmp
    }

    /**
     * This a logger function that will record the event and the time it took to execute
     * Don't log in console
     * @param {*} eventName - optional parameter that will be logged
     */
    record (eventName){
        this.counter += 1;
        if(!eventName){
            eventName = `EVENT-${this.counter}`;
        }
        eventName = eventName.toUpperCase();
        let tmp = {
            counter: this.counter,
            eventName: eventName,
            duration: Date.now() - this.startTime
        };
        this.getLogs.push(tmp);
        return tmp
    }

}


module.exports = spanLogger;