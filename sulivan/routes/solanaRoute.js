const express = require("express");
const router = express.Router();
const {balance, sendTransaction} = required('../controller/solanaContracts');

router.route('/balance/:address').get(balance);
router.route('/send-transaction').post(sendTransaction);