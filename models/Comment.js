const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  rate: Number,
  comments: String,
  date: { type: Date, default: Date.now },
  author: {type: Schema.Types.ObjectId, ref: "User"},
  kiosk: {type: Schema.Types.ObjectId, ref: "Kiosk"}
 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
