/* Your Code Here */
function createEmployeeRecord(card){
    return {
        firstName: card[0],
        familyName: card[1],
        title: card[2],
        payPerHour: card[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(emplCards){
    return emplCards.map((record) => createEmployeeRecord(record))
}

function createTimeInEvent(dateTime){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0]
    })
    return this
}

function createTimeOutEvent(dateTime){
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateTime.split(" ")[1]),
        date: dateTime.split(" ")[0]
    })
    return this
}

function hoursWorkedOnDate(date){
    let tIn = this.timeInEvents.find((timeIn) => timeIn.date === date)
    let tOut = this.timeOutEvents.find((timeOut) => timeOut.date === date)
    return (tOut.hour - tIn.hour) / 100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find((empl) => empl.firstName === firstName)
}

function calculatePayroll(emplArray){
    return emplArray.reduce((total, empl) => total + allWagesFor.call(empl), 0)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}