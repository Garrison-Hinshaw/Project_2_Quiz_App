const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
});

const Comments = mongoose.model("comments", commentsSchema);


module.exports.Router 

module.exports = Comments;

