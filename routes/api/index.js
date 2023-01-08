const router = require("express").Router();
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

// api/x
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;
