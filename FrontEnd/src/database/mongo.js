const mongoose = require('mongoose');
const {MONGO_URI} = process.env

const dbConnect = ()=>{
try{
    mongoose.connect(MONGO_URI)
    console.log('DB Connected', MONGO_URI)
}
catch(e){
    console.log(e)
}
}

export default dbConnect;
