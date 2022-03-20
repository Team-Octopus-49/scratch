const db = require('../models/itemModel');

const itemController = {};

itemController.addItem = (req, res, next) => {
    const values = [req.body.photo, req.body.name, req.body.category, req.body.color, req.body.brand, req.body.size, req.body.note];
    const query = `INSERT INTO ITEMS (photo, name, category, color, brand, size, note) VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    db.query(query, values)
    // .then((data) => {
    //     console.log('data: ', data);
    //     res.locals.item = data.row[0];
    //     console.log(res.locals.item);
    //     return next();})
    .then(() => {
        return next();
    })
    .catch(error => {
        const errorOjb = {};
        errorOjb.log = 'itemController.addItem ' + error;
        errorOjb.message = { err: 'itemController.addItem ERROR, Check server logs for details'};
        return next(errorOjb);
    });
};

itemController.updateItem = (req, res, next) => {
    const id = req.body.id; // double check later -> is it body or params?
    const values = [req.body.photo, req.body.name, req.body.category, req.body.color, req.body.brand, req.body.size, req.body.note];
    const query = `UPDATE ITEMS SET photo = $1, name = $2, category = $3, color = $4, brand = $5, size = $6, note = $7
    WHERE ID = $id RETURNING *`; // added returning to return all data of the updated item 

    db.query(query, values)
    .then((data) => {
        res.locals.item = data; // doese this work?
        return next();})
    .catch(error => {
        const errorOjb = {};
        errorOjb.log = 'itemController.updateItem ' + error;
        errorOjb.message = { err: 'itemController.updateItem ERROR, Check server logs for details'};
        return next(errorOjb);
    });
};

itemController.deleteItem = (req, res, next) => {
    const id = req.body.id;
    const values = [ id ]
    const query= `DELETE FROM ITEMS WHERE ID = $1`;

    db.query(query, values)
    .then(() => {
        return next();
    })
    .catch(error => {
        const errorOjb = {};
        errorOjb.log = 'itemController.deleteItem ' + error;
        errorOjb.message = { err: 'itemController.deleteItem ERROR, Check server logs for details'};
        return next(errorOjb);
    });
};

// getting all items
itemController.getItems = (req, res, next) => {
    const query= `SELECT name, brand, size, note FROM ITEMS`;

    db.query(query)
    .then(data => {
      res.locals.items = data.rows;
      return next(); 
    })
    .catch(error => {
        const errorOjb = {};
        errorOjb.log = 'itemController.getItems ' + error;
        errorOjb.message = { err: 'itemController.getItems ERROR, Check server logs for details'};
        return next(errorOjb);
    });
};

// getting items by category
itemController.getItemsByCategory = (req, res, next) => {
    const category = req.body.category;
    const values = [ category ];
    const query = `SELECT name, brand, size, note FROM ITEMS WHERE category = $1`;

    db.query(query, values)
    .then(data => {
      res.locals.items = data.rows;
      return next(); 
    })
    .catch(error => {
        const errorOjb = {};
        errorOjb.log = 'itemController.getItemsCategory ' + error;
        errorOjb.message = { err: 'itemController.getItemsCategory ERROR, Check server logs for details'};
        return next(errorOjb);
    });
};

// getting items by ID 
itemController.getItemsByID = (req, res, next) => {
    const category = req.body.category;
    const values = [ category ];
    const query = `SELECT name, brand, size, note FROM ITEMS WHERE category = $1`;

    db.query(query, values)
    .then(data => {
      res.locals.items = data.rows;
      return next(); 
    })
    .catch(error => {
        const errorOjb = {};
        errorOjb.log = 'itemController.getItemsCategory ' + error;
        errorOjb.message = { err: 'itemController.getItemsCategory ERROR, Check server logs for details'};
        return next(errorOjb);
    });
};


module.exports = itemController;