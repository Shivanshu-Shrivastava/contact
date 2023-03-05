const User = require('./../model/User.model')

// get all user

const getalluser = async(req,res)=>{
    try{
        const userdata = await User.find()
        return res.status(200).json(userdata)
    }catch(err){
        return res.status(500).json(err.message)
    }
}

// add user

const adduser = async(req,res)=>{
    try{
        const username = req.body.username
        const password = req.body.password
        const adduser = new User({username,password})
        await adduser.save()
        return res.status(200).json(adduser)

    }catch(err){
        return res.status(500).json(err.message)

    }
}
module.exports = {
    getalluser,
    adduser,
  
}