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
    WHERE ID = $id RETURNING *;`;

    db.query(query, values)
    .then((data) => {
        res.locals.item = data; // doese this work?
        return next();})
    .catch(error => {
        const errorOjb = {};
        errorOjb.log = 'itemController.addItem ' + error;
        errorOjb.message = { err: 'itemController.addItem ERROR, Check server logs for details'};
        return next(errorOjb);
    });
};



module.exports = itemController;