const Cart = require("../Model/Cart");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken
} = require("./verifyToken");
const router = require("express").Router();

// CREATE

router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error)
  }
});

// UPDATE

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const UpdatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(UpdatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// // Delete

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted.....");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET User Cart
router.get("/find/:userid",verifyTokenAndAuthorization, async (req, res) => {
  try {
    const cart = await Cart.findOne({userId: req.params.userid});
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

// //GET ALL PRODUCT


router.get("/",verifyTokenAndAdmin,async (req,res)=>{
    try {
        const carts = await Cart.find();
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
