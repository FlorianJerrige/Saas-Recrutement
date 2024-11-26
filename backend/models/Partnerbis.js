const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contacts: [
    {
      name: String,
      email: String,
      phone: String,
    },
  ],
  city: String,
  internalManager: String,
  contract: String, // URL ou autre référence au contrat signé
  openPositions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Position',
    },
  ],
});

module.exports = mongoose.model('Partner', partnerSchema);
