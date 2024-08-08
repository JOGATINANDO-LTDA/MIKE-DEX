const express = require("express");
const {generateKeys, balance, sendTransaction} = require("../controllers/sulivanApiTestController");

const router = express.Router();

router.route("/generate-keypair").get(generateKeys);
router.route("/balance/:address").get(balance);
router.route("/send-transaction").post(sendTransaction);

module.exports = router;