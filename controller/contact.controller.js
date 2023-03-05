const Contact = require('./../model/contact.model')

// get all contact data 

const getallcontact = async(req,res)=>{
    try{
        const contactdata = await Contact.findById(req.params.id)
        return res.status(200).json(contactdata)
    }catch(err){
        return res.status(500).json(err.message)
    }
}

// add  contact

const addcontact = async(req,res)=>{
    
    try{
        let addcont = await Contact.findByIdAndUpdate(req.body._id,req.body)
        console.log(addcont,'uppppppdaaa')
        if(addcont==null){
            addcont = await Contact.create(req.body)
            await addcont.save()
        }
        
        return res.status(200).json(addcont)

    }catch(err){
        return res.status(500).json(err.message)

    }
}

// edit contact

const editcontact = async(req,res)=>{
    try{
        await Contact.findOneAndUpdate(
            {_id:req.params.id},
            {data:req.body.data}
        )
        const edit = await Contact.findById(req.params.id)
        return res.status(200).json(edit)
    }catch(err){
        return res.status(500).json(err.message)

    }
    

}

// delete contact

const deletecontact = async(req,res)=>{
    try{
        const delet = await Contact.findByIdAndDelete(req.params.id)
        return res.status(200).json(delet)

    }catch(err){
        return res.status(500).json(err.message)

    }
}

module.exports = {
    getallcontact,
    addcontact,
    editcontact,
    deletecontact
}