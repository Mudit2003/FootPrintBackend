const HOI = require("../modals/HealthOngoingIndividual");
// const Applicant = require("../modals/Applicant");

const getallHOIreviewer=async(req,res)=>{
try {
    const reviewer=req.user;
    const HOIreviewer=await HOI.find({ reviewer: reviewer}).populate('applicant')
    if(HOIreviewer.length===0){
        return res.json({success:false, msg:'No project for this reviewer'})
    }

    return res.json({success:true, data:HOIreviewer})

} catch (error) {
    console.log(error);
    res.json({ success: false });
}
}
module.exports=getallHOIreviewer