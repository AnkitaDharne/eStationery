const express = require("express");
const csrf = require("csurf");
const Product = require("../models/product");
const Category = require("../models/category");
const middleware = require("../middleware");
const path = require('path')
const router = express.Router();
const faker = require("faker");
const multer = require('multer');//new 
const { image } = require("faker");
//const upload = multer({dest: 'uploads/'});
const csrfProtection = csrf();
const storage = multer.diskStorage({//new 
  destination:(req, file, cb)=>{//new 
    cb(null, 'public/images/')//new 
  },//new 
  filename: (req, file, cb)=> {//new 
    console.log(req.body.title)//new 
    cb(null,req.body.title+req.body.manufacturer+".jpg")//new 
  }//new 
})//new 
const upload = multer({storage: storage})//new 
router.use(csrfProtection);

router.get("/", middleware.isAdminLoggedIn, async (req, res) => {
  res.redirect("/admin/new")
});

router.get("/new", middleware.isAdminLoggedIn, async (req, res) => {
  res.render("admin/new", { pageName: "Admin - Add Product", csrfToken: req.csrfToken(), });
});

router.post("/new",upload.single('productImage'),middleware.isAdminLoggedIn,async (req, res) => {
  try {
    const category = await Category.findOne({ title: req.body.category });
    const product = new Product({
      productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      manufacturer: req.body.manufacturer,
      available: req.body.available === "available",
      deleted: false,
      category: category._id,
      imagePath: "/images/"+req.body.title+req.body.manufacturer+".jpg",
    });
    product.save(async (err, newProduct) => {
      if (err) {
        console.log(err);
        return res.redirect("/");
      }
      req.flash("success", "Product successfully added");
      res.redirect("/");
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/edit/:id", middleware.isAdminLoggedIn, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId).populate("category");
    // const category = await Category.findById(product.category);
    res.render("admin/edit", { pageName: "Admin - Update Product", product, csrfToken: req.csrfToken(), });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.post("/edit", middleware.isAdminLoggedIn, async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    const category = await Category.findOne({ title: req.body.category });
    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.manufacturer = req.body.manufacturer;
    product.category = category._id;
    product.available = req.body.available === "available";
    product.save(async (err, newProduct) => {
      if (err) {
        console.log(err);
        return res.redirect("/");
      }
      req.flash("success", "Product successfully updated");
      res.redirect("/");
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/delete/:id", middleware.isAdminLoggedIn, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    product.deleted = true;
    product.save()
    req.flash("success", "Product successfully deleted");
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;
