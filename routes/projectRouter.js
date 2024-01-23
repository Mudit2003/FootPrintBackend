const express = require('express');
const router = express.Router()
const createHOI=require('../controller/createHOI')
const {protectApplicant}=require('../middleware/authApplicant');
const {protectReviewer}= require('../middleware/authReviewer')
const {protectApprover}=require('../middleware/authApprover')
const editHOIreviewer=require('../controller/editHOIreviewer');
const editHOIapprover = require('../controller/editHOIapprover');
const createEOI=require('../controller/createEOI');
const createLOI=require('../controller/createLOI')
const editEOIreviewer=require('../controller/editEOIreviewer');
const editEOIapprover=require('../controller/editEOIapprover')
const editLOIapprover=require('../controller/editLOIapprover');
const editLOIreviewer=require('../controller/editLOIreviewer')
const getallHOIapplicant=require('../controller/getallHOIapplicant');
const getallEOIapplicant=require('../controller/getallEOIapplicant')
const getallLOIapplicant=require('../controller/getallLOIapplicant')
const getallHOIreviewer=require('../controller/getallHOIreviewer')
const getallEOIreviewer=require('../controller/getallEOIreviewer')
const getallLOIreviewer=require('../controller/getallLOIreviewer')
const getallHOIapprover=require('../controller/getallHOIapprover')
const getallEOIapprover=require('../controller/getallEOIapprover')
const getallLOIapprover=require('../controller/getallLOIapprover')

// done 
router.post('/createHOI',protectApplicant,createHOI);
router.post('/createEOI',protectApplicant,createEOI)
router.post('/createLOI',protectApplicant,createLOI)


router.put('/editreviewerHOI',protectReviewer,editHOIreviewer)
router.put('/editapproverHOI',protectApprover,editHOIapprover)

router.put('/editreviewerEOI',protectReviewer,editEOIreviewer)
router.put('/editapproverEOI',protectApprover,editEOIapprover)

router.put('/editreviewerLOI',protectReviewer,editLOIreviewer);
router.put('/editapproverLOI',protectApprover,editLOIapprover)

router.get('/getallHOIapplicant',protectApplicant,getallHOIapplicant)
router.get('/getallEOIapplicant',protectApplicant,getallEOIapplicant)
router.get('/getallLOIapplicant',protectApplicant,getallLOIapplicant)
router.get('/getallHOIreviewer',protectReviewer,getallHOIreviewer)
router.get('/getallEOIreviewer',protectReviewer,getallEOIreviewer)
router.get('/getallLOIreviewer',protectReviewer,getallLOIreviewer)

router.get('/getallHOIapprover',protectApprover,getallHOIapprover)
router.get('/getallEOIapprover',protectApprover,getallEOIapprover)
router.get('/getallLOIapprover',protectApprover,getallLOIapprover)



module.exports=router