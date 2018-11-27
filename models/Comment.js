const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  picPath: String,
  picName: String,
  kioskName: String,
  rate: Number,
  comments: { type: String },
  date: { type: Date, default: Date.now },
  author: {type: Schema.Types.ObjectId, ref: "User"}
 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
