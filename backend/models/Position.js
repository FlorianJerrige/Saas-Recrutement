const mongoose = require('mongoose');


const positionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    experienceRequired: Number,
    skills: [String],
    location: String,
    salary: Number,
    contractType: String,
    partner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Partner',
      required: true,
    },
    datePosted: { type: Date, default: Date.now },
    applicationLink: String,
  });
  
  module.exports = mongoose.model('Position', positionSchema);
  