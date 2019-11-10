/* Your Code Here */

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

function createEmployeeRecord(employeeInfoArray) {
    return {
        firstName: employeeInfoArray[0], 
        familyName: employeeInfoArray[1], 
        title: employeeInfoArray[2], 
        payPerHour: employeeInfoArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(function(employee) {
        // console.log(createEmployeeRecord(employee))
        return createEmployeeRecord(employee)
    });
}

function createTimeInEvent(dateStamp) {
    // console.log(dateStamp.split(" "))
    let [date, hour] = dateStamp.split(" ")
    // console.log(date)
    // console.log(time)
    
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    })
    return this
}

function hoursWorkedOnDate(queryDate) {
    let clockIn = this.timeInEvents.find(function (e) {
        return e.date === queryDate
    });

    let clockOut = this.timeOutEvents.find(function(e) {
        return e.date === queryDate
    })
    return (clockOut.hour - clockIn.hour) / 100
}

function wagesEarnedOnDate(queryDate) {
        let wages = hoursWorkedOnDate.call(this, queryDate) 
        * this.payPerHour
        // console.log(parseFloat(wages.toString()) )
    return parseFloat(wages.toString()) 
}

function findEmployeeByFirstName(allEmployeeArray, firstNameQuery) {
    return allEmployeeArray.find(function(employee) {
        return employee.firstName == firstNameQuery
    })
}

function calculatePayroll (allEmployeeArray) {
    return allEmployeeArray.reduce(function(sum, el) {
        return sum + allWagesFor.call(el)
    }, 0)  // start at 0
}