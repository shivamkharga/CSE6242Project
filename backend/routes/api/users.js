const express = require("express");
const router = express.Router();


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req, res) =>
  res.json({
    msg: "Users Works"
  })
);

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test2", (req, res) =>
  res.json({
    msg: "Users-/test2 Works"
  })
);


module.exports = router;
