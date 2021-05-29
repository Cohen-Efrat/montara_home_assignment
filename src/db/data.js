// This is init data for this exercise purpose only
const mongoose = require('mongoose');
const employeesId1 = mongoose.Types.ObjectId();
const employeesId2 = mongoose.Types.ObjectId();

const employees=[
    {
        _id:employeesId1,
        name : "John Doe",
        email : "JohnDoe@gmail.com",
    },
    {
        _id:employeesId2,
        name : "Jane Doe",
        email : "JaneDoe@gmail.com"
    }
]

const logs=[
    {
        employeeId: employeesId1,
        entry:1621751955*1000, 	//Sun May 23 2021 09:39
        exit:1621784355*1000    //Sun May 23 2021 18:39
    },
    {
        employeeId: employeesId2,
        entry:1621780755*1000, //Sun May 23 2021 17:39
        exit:1621791555*1000, //Sun May 23 2021 20:39
    }
]

module.exports={
    employees,
    logs
}