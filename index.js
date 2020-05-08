/* Your Code Here */
array = []
function createEmployeeRecord(array) {
    let object = {
        firstName: array[0], 
        familyName: array[1], 
        title: array[2], 
        payPerHour: array[3], 
        timeInEvents: [], 
        timeOutEvents: []
    }

    return object 

}

twoRows = [] 

function createEmployeeRecords (twoRows) {

   let newArray =  twoRows.map(function(array) {
       return  createEmployeeRecord(array)
    })

    return newArray
}

function createTimeInEvent (dateStamp) {
    
    let times = dateStamp.split(" ")

    
  
    this.timeInEvents.push({
        type: "TimeIn", 
        hour: parseInt(times[1]), 
        date: times[0]
    })

    return this

}

function createTimeOutEvent (dateStamp) {
    
    let times = dateStamp.split(" ")

    
  
    this.timeOutEvents.push({
        type: "TimeOut", 
        hour: parseInt(times[1]), 
        date: times[0]
    })

    return this

}

function hoursWorkedOnDate(dateStamp) {
    let times = dateStamp.split(" ")
    
    let date = times[0]
    let hour = times[1]
    
    let timeInTime = this.timeInEvents.find(function(event) {
        return event.date === dateStamp
    })

    let outTime = this.timeOutEvents.find(function(event) {
        return event.date === dateStamp
    })

    return (outTime.hour - timeInTime.hour) / 100

}


function wagesEarnedOnDate(dateStamp) {
    let hours =  hoursWorkedOnDate.call(this, dateStamp)
    let rate = parseInt(this.payPerHour)
    return hours*rate
 }

function allWagesFor () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName (srcArray, firstName) {
    let search = srcArray.find(function (record) {
        return record.firstName === firstName
    })

    return search 
}


function  calculatePayroll(array) {
    let sum =  array.reduce(function(total, record) {
        return total + allWagesFor.call(record)
    }, 0)

    return sum 

}





/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

