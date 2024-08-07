const express = require("express");
const {generateKeys, balance, sendTransaction} = require("../controllers/sulivanApiTestController");

const router = express.Router();

router.route("/solana/generate-keypair").get(generateKeys);
router.route("/solana/balance/:address").get(balance);
router.route("/solana/send-transaction").post(sendTransaction);

module.exports = router;