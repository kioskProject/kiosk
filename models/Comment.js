const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  picPath: String,
  picName: String,
  //kioskName: String,
  rate: Number,
  comments: String,
  date: { type: Date, default: Date.now },
  author: {type: Schema.Types.ObjectId, rel: "User"},
  kiosk: {type: Schema.Types.ObjectId, rel: "Kiosk"}
 
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
