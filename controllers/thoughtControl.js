const { Thoughts, Users } = require('../models');

module.exports = {
// GET all thoughts, single thoughts
getThoughts(req, res) {
    Thoughts.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
},
getSingleThought(req, res) {
    Thoughts.findOne({_id: req.params.thoughtId})
        .then((thought) =>
            !thought
                ? res.status(404).json({message: 'Whoops! No thought with that ID'})
                : res.json(thought)
                )
        .catch((err) => res.status(500).json(err));        
},
// POST create a thought
createThought(req, res) {
    Thoughts.create(req.body)
        .then((thought) => {
            return Users.findOneAndUpdate(
                { _id: req.body.userId},
                { $addToSet: { thoughts: thought._id}},
                { new: true }
            );
        })
}
































}