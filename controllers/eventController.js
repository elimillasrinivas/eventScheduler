const EventSchema=require("../models/eventModel")

const createPost=(req,res)=>{
    const {title,description,location,startTime,endTime}={...req.body}
    if(title==="" || description=="" || location=="" || startTime=="" || endTime==""){
        return resizeBy.json({
            message:"All fields are mandatory"
        })
    }
    else{
        const newPost=new EventSchema({
            title,
            description,
            location,
            startTime:new Date(),
            endTime:new Date()
        })
        newPost.save().then((data)=>{
            res.json({
                message:"Event Created",
                result:data
            })
        })
    }

}
const allEvents=(req,res)=>{
    const events=EventSchema.find()
    const allEvents=events.map((event)=>({
        title:event.title,
        description:event.description,
        location:event.location,
        startTime:event.startTime,
        endTime:event.endTime
    }))
    res.json({
        messge:"All Events",
        result:allEvents
    })
}
const getSpecificEvent=(req,res)=>{
    const {eventID}=req.params
    const specificEvent=EventSchema.findById(eventID)
    if(specificEvent){
        res.json({
            event:specificEvent
        })
    }
    else{
        res.json({
            error:"There is no event with that ID"
        })
    }
}
const deleteEvent=(req,res)=>{
    const {eventID}=req.params
    const event=EventSchema.findByIdAndDelete(eventID)
    if(event){
        res.json({
            message:"Event Deleted"
        })

    }
    else{
        res.json({
            status:204
        })
    }
}
const updateEvent=(req,res)=>{
    const {eventID}=req.params;
    const {title,description,location,startTime,endTime}=req.body
    const event=EventSchema.findByIdAndUpdate(eventID,{title,description,location,startTime,endTime},{new:true})
    if(title==""){
        res.json({
            message:"Title is required"
        })
    }
    if(title.length>30){
        res.json({
            message:"Title should be below 30 characters"
        })
    }
    if(description==""){
        res.json({
            message:"Description is required"
        })
    }
    if(location==""){
        res.json({
            message:"Location is required"
        })
    }
    if(startTime==""){
        res.json({
            message:"startTime is required"
        })
    }
    if(endTime==""){
        res.json({
            message:"endTime is required"
        })
    }
    res.json({
        message:"Updated event",
        result:event
    })
}


module.exports={createPost,allEvents,getSpecificEvent,deleteEvent,updateEvent}