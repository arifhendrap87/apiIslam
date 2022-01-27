const db = require("../config/db.config.js");
const categoryMenu = db.category_menu;

// Post a Book
// exports.create = (req, res) => {
//   // Save to MySQL database
//   Book.create({
//     name: req.body.name,
//     price: req.body.price,
//     language: req.body.language,
//     total_pages: req.body.total_pages,
//   }).then((book) => {
//     res.status(200).json({
//       status: true,
//       message: "Book created successfully",
//     });
//   });
// };

// Get all books
exports.findAll = (req, res) => {
    categoryMenu.findAll().then((result) => {
        // Send all books as response
        res.status(200).json({
            status: true,
            data: result,
        });
    });
};
