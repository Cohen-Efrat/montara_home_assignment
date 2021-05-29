const express = require('express')
require('dotenv').config() 
require('./db/mongoose')

const employeeRouter = require('./routers/employee')

const employee = require('./models/employee')
const log = require('./models/log')
const {employees,logs} = require('./db/data')


const initData =async ()=>{
    await employee.insertMany(employees);
    await log.insertMany(logs);
}
initData() 

const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(employeeRouter)

app.listen(port, () => {
    console.log('Server is listening on port: ' + port)
})

