const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.send(req.user);
  //   res.json({
  //     posts: {
  //       title: "Dev Ed Tutorial",
  //       description: "Randome Data You Should Not Access",
  //     },
  //   });
});

module.exports = router;
