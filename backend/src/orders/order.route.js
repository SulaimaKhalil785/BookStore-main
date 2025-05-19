const express = require('express');
const { createAOrder, getOrderByEmail, getAllOrders, updateStatus } = require('./order.controller');

const router =  express.Router();

// create order endpoint
router.post("/", createAOrder);

router.get("/", getAllOrders);

// get orders by user email 
router.get("/email/:email", getOrderByEmail);

router.post("/:id", updateStatus);

module.exports = router;