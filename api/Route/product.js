const Product = require("../Model/Product");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("./verifyToken");
const router = require("express").Router();

// CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  console.log(req.body);
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const UpdatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      { new: true }
    );
    res.status(200).json(UpdatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Prodcut has been deleted.....");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET Product
router.get("/find/:id", async (req, res) => {
  try {
    const Prodcut = await Product.findById(req.params.id);
    res.status(200).json(Prodcut);
  } catch (error) {
    res.status(500).json(error);
  }
});

// All PRODUCT

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory]
        }
      });
    } else {
      products = await Product.find();
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
