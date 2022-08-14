const asyncHandler = require('express-async-handler')
//@desc Get goals
//@route GET /api/goals
//@acess Private
const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: 'Get Goals'})
})
//@desc POST goals
//@route POST /api/goals
//@acess Private
const setGoal =  asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("please add a text field")
    }
    res.status(200).json({message: 'Set goals'})
    console.log(req.body);
})
//@desc Update goals
//@route PUT /api/goals
//@acess Private
const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
//@desc Delete goals
//@route DELETE /api/goals
//@acess Private
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}