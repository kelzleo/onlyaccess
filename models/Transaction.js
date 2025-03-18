const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Who paid
  creator: { type: Schema.Types.ObjectId, ref: 'User', default: null }, // Who earned
  post: { type: Schema.Types.ObjectId, ref: 'Post', default: null },   // For special content
  subscriptionBundle: { type: Schema.Types.ObjectId, ref: 'SubscriptionBundle', default: null },
  type: { type: String, enum: ['special', 'subscription'], required: true },
  amount: { type: Number, required: true },
  description: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);
