const mongoose = require('mongoose');
const workoutSchema = new mongoose.Schema({
    day: {type:Date, default:Date.now},
    exercises: [{
        exerciseType: {type:String},
        name: {type:String},
        duration: {type:Number},
        weight: {type:Number},
        reps: {type:Number},
        sets: {type:Number},
        distance: {type:Number}
    }]
})

const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout