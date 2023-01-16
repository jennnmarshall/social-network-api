const connection = require("../config/connection");
const { Users, Thoughts } = require("../models");
const { getRandomUserName, getRandomReact, getRandomThought } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  //   await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 15; i++) {
    const username = getRandomUserName();
    const newUser = { username, email: username + "@jennsocial.com" };
    users.push(newUser);
  }

  await Users.collection.insertMany(users);

  const thoughts = [];
  for (let i = 0; i < 10; i++) {
    const thoughtFill = getRandomThought();
    const newThought = { thoughtText: thoughtFill, };
    thoughts.push(newThought);
  }

  await Thoughts.collection.insertMany(thoughts);

  // Display table of seeded users and thoughts
  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
