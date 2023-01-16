const reactionSchema = require('./Reaction');
const { Schema, model } = require("mongoose");
const moment = require("moment");

const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,

      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// creates a virtual that returns the number of reactions per thought
thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thoughts = model("Thoughts", thoughtsSchema);

module.exports = Thoughts;
