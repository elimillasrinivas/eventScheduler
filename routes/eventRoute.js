const {createPost,getSpecificEvent,updateEvent,deleteEvent,allEvents}=require("../controllers/eventController")
const express=require("express")
const router=express.Router()

router.post("/events",createPost)
router.get("/events/:eventID",getSpecificEvent)
router.put("/events/:eventID",updateEvent)
router.delete("/events/:eventID",deleteEvent)

router.get("/events/all",allEvents)

module.exports=router