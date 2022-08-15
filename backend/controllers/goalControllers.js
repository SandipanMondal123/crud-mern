const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//@desc Get goals
//@route GET /api/goals
//@acess Private
const getGoals = asyncHandler (async (req, res) => {
    const goals = await Goal.find()
    res.status(200).json(goals)
})
//@desc POST goals
//@route POST /api/goals
//@acess Private
const setGoal =  asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error("please add a text field")
    }
    const goal = await Goal.create({
        text:req.body.text
    })
    res.status(200).json(goal)
    //console.log(req.body);
})
//@desc Update goals
//@route PUT /api/goals
//@acess Private
const updateGoal = asyncHandler (async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal) {
        res.status(400)
        throw new Error('Goal not found for update')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updatedGoal)
})
//@desc Delete goals
//@route DELETE /api/goals
//@acess Private
const deleteGoal = asyncHandler (async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new error("Goal not found for deletion")
    }
    await goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}