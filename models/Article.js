// Article model
// ==============

// Require mongoose
const mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
const Schema = mongoose.Schema;

// Create the community survey with our schema class
var ArticleSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  date: {
      type: Date,
      default: Date.now
  },
  url: {
      type: String,
      required: true
  },
  note: {
      type: String
  },
  image: {
      type: String
  }
});

// Create the Article model using the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;




