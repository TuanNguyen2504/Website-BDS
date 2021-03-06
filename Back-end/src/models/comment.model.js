const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  // chủ comment
  author: { name: String, avt: String },
  // Cho sản phẩm nào
  houseId: { type: Schema.Types.ObjectId, required: true },
  // thời gian
  time: { type: Date, required: true, default: new Date().getTime() },
  // nội dung
  content: { type: String, trim: true, maxlength: 1000 },
  // comment reply
  replies: { type: [Schema.Types.ObjectId], default: [] },
});

const CommentModel = mongoose.model('comment', commentSchema, 'comments');

module.exports = CommentModel;
