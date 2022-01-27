module.exports = function (app) {

    const categoryMenu = require("../controller/category_menu.controller.js");

    // // Create a new book
    // app.post("/api/book", book.create);

    // Retrieve all book
    app.get("/api/categorymenu", categoryMenu.findAll);

    // // Retrieve a single book by Id
    // app.get("/api/books/:bookId", book.findByPk);

    // // Update a book with Id
    // app.put("/api/books/:bookId", book.update);

    // // Delete a book with Id
    // app.delete("/api/books/:bookId", book.delete);
};
