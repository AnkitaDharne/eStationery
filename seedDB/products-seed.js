const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Pens
  const pens_titles = [
    "Sharpie S-Gel Retractable Gel Pen",
    "Zebra Z-Grip Retractable Ballpoint Pen",
    "BIC Round Stic Xtra-Life Ballpoint Pens",
    "Pilot G2 Retractable Gel Pens",
    "BIC Soft Feel Retractable Ballpoint Pen",
    "Pilot G2 Retractable Gel Pens",
    "Quill Brand Rollerball Pens",
    "Pilot Precise V7 RT Retractable Rollerball Pens",
    "Paper Mate Profile Retractable Ballpoint Pens",
    "Pentel EnerGel RTX Retractable Gel Pen",
  ];
  const pens_imgs = [
    "https://www.quill.com/is/image/Quill/s1190314_s7?$img400$",
    "https://www.quill.com/is/image/Quill/sp41816264_s7?$156$",
    "https://www.quill.com/is/image/Quill/m006319137_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp138382946_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp91647841_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp130856217_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1192100_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp135695493_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp114502073_s7?$156$",
    "https://www.quill.com/is/image/Quill/s0817277_s7?$156$",

  ];

  //--------------------Notebook
  const notebooks_titles = [
    "TRU RED™ 1-Subject Notebooks, 8 x 10.5",
    "Mead Spiral 3-Subject Notebook, 5.5 x 9.5",
    "Quill Brand® Steno Pads, 6 x 9",
    "Mead 1 Subject Spiral Notebook, 10 1/2 x 7 1/2",
    "TRU RED™ 1-Subject Notebook, 8.5 x 11",
    "Five Star 5-Subject Notebook, 8.5 x 11",
    "Ampad Gold Fibre Professional Notebook, 7.25 x 9.5",
    "Oxford 1-Subject Notebook, 8 x 10 1/2",
    "Roaring Spring Composition Notebook, 9.75 x 7.5",
    "Mead® Five Star® Wirebound Notebook, 2-Subject, 9-1/2 x 6",
    "Staples 1-Subject Notebook, 8 x 10.5",
    "Xtreme 3-Subject Notebook, 6 x 9.5",
    "Ampad Memo Pads, 3 x 5, Narrow Ruled, Assorted",
    "Mead Five Star Advance 5 Subject Notebook, 8.5 x 11",
  ];

  const notebooks_imgs = [
    "https://www.quill.com/is/image/Quill/s1186181_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp38165411_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1034039_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp133960014_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1186101_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp125996312_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp42154768_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1120600_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp38165434_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp137856459_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp38165102_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp46038356_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp39612301_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp37727513_s7?$156$",
  ];

  //--------------------Folders
  const folders_titles = [
    "Quill Brand® File Folders, 1/3-Cut Assorted",
    "Quill Brand® Premium File Folders, Assorted Tabs",
    "TRU RED™ File Folders, 1/3 Cut, Letter Size",
    "Quill Brand® 2-Pocket Folders, Assorted",
    "Pendaflex Glow Twisted 3-Tab File Folder,",
    "Smead Recycled Heavy Duty Pressboard Classification Folder",
    "Pendaflex® SureHook® 5-Tab Hanging File Folders",
    "Quill Brand® Expanding File Pockets, 5-1/4",
    "Quill Brand® 2-Pocket Folders, Blue",
    "Quill Brand® 2-Pocket Folders With Fasteners",
    "Medical Arts Press® Heavy-Duty Colored End-Tab Folders",
    "TRU RED™ File Folder, 1/3 Cut, Letter Size",
  ];

  const folders_imgs = [
    "https://www.quill.com/is/image/Quill/173755_s7?$156$",
    "https://www.quill.com/is/image/Quill/s0820144_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1165283_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1196724_s7?$156$",
    "https://www.quill.com/is/image/Quill/m005168163_s7?$img400$",
    "https://www.quill.com/is/image/Quill/sp106969794_s7?$156$",
    "https://www.quill.com/is/image/Quill/m005168216_s7?$156$",
    "https://www.quill.com/is/image/Quill/96718_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1191987_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1193462_s7?$156$",
    "https://www.quill.com/is/image/Quill/m007016469_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp111086398_s7?$img400$",
  ];

  //--------------------Pencils
  const pencils_titles = [
    "Ticonderoga The World's Best Pencil Wooden Pencils",
    "BIC Xtra-Life Mechanical Pencils, No. 2 Medium Lead",
    "Quill Brand® Standard Grade Pencil",
    "BIC Xtra Sparkle Mechanical Pencils",
    "BIC Velocity Mechanical Pencils",
  ];
  const pencils_imgs = [
    "https://www.quill.com/is/image/Quill/sp94280117_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1120686_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1196986_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1069455_s7?$156$",
    "https://www.quill.com/is/image/Quill/s1069405_s7?$156$",
  ];

  //--------------------Crayons

  const crayons_titles = [
    "Crayola® Crayons, 24/Box",
    "Crayola Classpack Crayons, 800/Box (52-8016)",
    "Crayola Crayons Assorted Colors, 8/Box (52-0008)",
    "Crayola Crayons with Sharpener, 64 Crayons/Box ",
    "Prang® (Dixon Ticonderoga®) Crayons, Large, Master Pack",
    "Crayola Crayons Peggable Assorted Colors",
  ];
  const crayons_imgs = [
    "https://www.quill.com/is/image/Quill/sp59920510_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp36101878_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp72497585_s7?$156$",
    "https://www.quill.com/is/image/Quill/s0969303_s7?$156$",
    "https://www.quill.com/is/image/Quill/s0351396_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp64626997_s7?$156$",
  ];

  //-----------------------Erasers
  const erasers_titles = [
    "Paper Mate Pink Pearl Block Erasers",
    "Pentel Clic Eraser w/ Grip",
    "Pentel Hi-Polymer Latex Free Block Eraser",
    "Pentel Clic Eraser Refills, White, 2/Pack ",
  ];
  const erasers_imgs = [
    "https://www.quill.com/is/image/Quill/sp136010038_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp46934433_s7?$156$",
    "https://www.quill.com/is/image/Quill/s0814463_s7?$img400$",
    "https://www.quill.com/is/image/Quill/sp44844381_s7?$156$",
  ];

  //-----------------Markers

  const markers_titles = [
    "Crayola Kid's Markers, Broad Line, Assorted Colors, 10/Pack ",
    "Avery Marks-A-Lot Large Desk-Style Permanent Markers",
    "Sharpie Permanent Marker, Fine Tip",
    "Crayola Pip-Squeaks Markers, Telescoping Marker Tower",
    "Sharpie King Size Permanent Marker, Chisel Tip, Black, Dozen",
  ];
  const markers_imgs = [
    "https://www.quill.com/is/image/Quill/sp127455488_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp40286222_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp109436218_s7?$img400$",
    "https://www.quill.com/is/image/Quill/s0355350_s7?$img400$",
    "https://www.quill.com/is/image/Quill/s1209804_s7?$156$",
  ];

  //-----------------Glue

  const glues_titles = [
    "Elmer's® Washable School Glue, 1.25oz.",
    "Elmer's School Washable Glue, 4 Oz. (E304NR)",
    "Elmer's® Washable School Glue, Gallon",
    "Elmer's School Disappearing Purple Glue Sticks, 0.21 Oz., 8/Pack (E1591)",
    "",
  ];
  const glues_imgs = [
    "https://www.quill.com/is/image/Quill/s0346626_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp49507866_s7?$156$",
    "https://www.quill.com/is/image/Quill/s0218802_s7?$156$",
    "https://www.quill.com/is/image/Quill/sp48116566_s7?$156$",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          deleted: false,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(notebooks_titles, notebooks_imgs, "Notebooks");
  await seedProducts(pens_titles, pens_imgs, "Pens");
  await seedProducts(folders_titles, folders_imgs, "Folders");
  await seedProducts(pencils_titles, pencils_imgs, "Pencils");
  await seedProducts(crayons_titles, crayons_imgs, "Crayons");
  await seedProducts(erasers_titles,erasers_imgs,"Erasers");
  await seedProducts(glues_titles, glues_imgs, "Glue");
  await seedProducts(markers_titles, markers_imgs,"Markers");
  await closeDB();
}

seedDB();
