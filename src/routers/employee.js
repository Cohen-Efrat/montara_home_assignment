const express = require('express')
const moment = require('moment')
const router = new express.Router()
const logModel = require('../models/log')
const employeeModel = require('../models/employee')
const {sendEmails} = require('../utils')


router.post('/employees/entry', async (req, res) => {
    const {employeeId} = req.body;
    let log;
    try {
        log =new logModel({
            employeeId,
            entry: new Date()
            })
            await log.save()
        res.status(201).send(log)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})
router.patch('/employees/exit/:logId', async (req, res) => {
    try {
        const log = await logModel.findOneAndUpdate({_id:req.params.logId},{exit:new Date()},{new: true}) 
        res.status(200).send(log)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.get('/employees/notify/:employeeId', async (req, res) => {
    const {employeeId} = req.params
    var lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate()-7);
    try {
        const logs = await logModel.find({
            entry: {
                $gte:lastWeek,
                $lt: new Date()
            }
        })
        const infectedEmployee = [];
        const employees =[];
        logs.forEach(log => {
            if(log.employeeId===employeeId){
                infectedEmployee.push(log);
            }
            else{
                employees.push(log)
            }
        })
        const notifyIds=[]
        infectedEmployee.forEach(logA=>{
            employees.forEach(logB=>{
                if(notifyIds.indexOf(employeeId)>0){
                    return
                }
                const isEntry = moment(logB.entry).isBetween(logA.entry,logA.exit); 
                const isExit = moment(logB.exit).isBetween(logA.entry, logA.exit); 
                if(isEntry || isExit){
                    notifyIds.push(logB.employeeId)
                 }   
            })
        })
        const employeesToNotify = await employeeModel.find( { _id : { $in : notifyIds } } );
        sendEmails(employeesToNotify);
        res.send(employeesToNotify)
    } catch (e) {
        console.log(e)
        res.status(400).send()
    }
})





module.exports = router