const router = require("express").Router();
const aboutController = require("../controllers/aboutController");
const ensureAuthenticated = require("../middleware/ensureAuth");

router.get("/about", aboutController.getAbout);
router.post("/about", ensureAuthenticated, aboutController.addAbout);
router.put("/about/:id", ensureAuthenticated, aboutController.updateAbout);
router.delete("/about/:id", ensureAuthenticated, aboutController.deleteAbout);


module.exports = router;