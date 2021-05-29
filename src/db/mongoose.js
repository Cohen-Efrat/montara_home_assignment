const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=> console.log("Successfully connected to DB")).catch((err)=>console.log(err))

