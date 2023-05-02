const express = require("express");

const contactsController = require("../controllers/contacts");

const router = express.Router();

router.get("/", contactsController.getAll);
router.get("/:id", contactsController.getOne);
router.post("/", contactsController.createOne);
router.put("/:id", contactsController.updateOne);
router.delete("/:id", contactsController.deleteOne);

module.exports = router;
