module.exports = function (app) {

    const worshipMain = require("../controller/worshipMain.controller.js");

    // // Create a new book
    // app.post("/api/book", book.create);

    // Retrieve all book


    // // Retrieve a single book by Id
    // app.get("/api/books/:bookId", book.findByPk);

    // // Update a book with Id
    // app.put("/api/books/:bookId", book.update);

    // // Delete a book with Id
    // app.delete("/api/books/:bookId", book.delete);

    app.post("/api/worshipmain", worshipMain.findAll);

};
