const welfareHomeChildrenModel = require("../../../modals/WelfareHomeChildren");
const welfareHomeChildrenValidation = require("../validation/welfareHomeChildrenValidation");

// this time find all where applicant is the applicant

const getAllWHFCApprover = async (req, res) => {
  try {
    // validitiy of user will be checked from the token itself
    // you have to querry by project_in_charge.ref

    const approverId = req.user;

    // find by applicant
    const allWHFCProject = await welfareHomeChildrenModel
      .find({
        // don't need this complicated querry
        // "mailing_details.project_coordinators.ref" : approverId,
      })
      .populate(mailing_details.project_in_charge.ref)
      .populate(mailing_details.provincial_superior.ref);
    // I am not sure if populating is required , if it will be I'll put it there

    if (!allWHFCProject) {
      return res.status(400).json({
        status: false,
        message: `Unable to fetch any projects for the approver`,
      });
    }
    return res.status(200).json({
      status: true,
      message: "successfully got all projects",
      data: res,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Cannot fetch any projects",
      error: error.message,
    });
  }
};

module.exports = getAllWHFCApprover;
