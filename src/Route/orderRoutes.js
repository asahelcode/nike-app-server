const express = require("express");
const router = express.Router();
const { createOrder, getOrder } = require("../database/order");

router.get("/:reference", async (req, res) => {
  const order = await getOrder(req.params.reference);

  if (!order) {
    res.status(404).send({ status: "FAIL", error: "Order not found" });
  }

  res.send({ status: "OK", data: order });
});

router.post("/", async (req, res) => {
  const order = req.body;
  const ref = (Math.random() + 1).toString(36).substring(7);
  order.ref = ref;

  const newOrder = await createOrder(order);

  res.status(201).send({ status: "OK", data: newOrder });
});

module.exports = router;
