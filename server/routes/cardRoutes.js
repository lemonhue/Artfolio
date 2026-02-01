const router = require("express").Router();
const cardController = require("../controllers/cardController");
const upload = require("../middleware/multer");
const ensureAuthenticated = require("../middleware/ensureAuth");


router.get("/card", cardController.getCard);
router.get("/card/:id", ensureAuthenticated, cardController.getCardbyId);
router.post("/card", ensureAuthenticated, upload.single("image"), cardController.createCard);
router.put("/card/:id", ensureAuthenticated, cardController.updateCard);
router.delete("/card/:id", ensureAuthenticated, cardController.deleteCard);


module.exports = router;