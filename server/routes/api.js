const express = require('express');

const userController = require('../controllers/userController');
const itemController = require('../controllers/itemController');

const router = express.Router();


// this is triggerd when they click submit from sign in
router.get('/signin',
  userController.verifyUser,
  (req, res) => {
    res.status(200);
    console.log("IT WORKERED");
  }
);
//res.status(200).redirect('/home');
// router.get('/signup', (req, res) => {
//   res.render('./../client/signup', {error: null}); // .render may require and ejs file ?? should I just redirect ?
// });

// this is triggered when they click submit from signup
router.post('/signup', 
  userController.createUser,
  (req, res) => {
    // what should happen here on successful sign up? What if we try to sign up and we alrady have an acct ?
    res.status(200).json(res.locals.newUser)//.redirect('/home'); 
  });

router.get('/allusers',
  userController.getAllUsers,
  (req, res) => {
    res.status(200).json(res.locals.users);
  }
);


/* Shinhae is working on this */ 

// add new item
router.post('/item',
  itemController.addItem,
  (req, res) => res.status(200).json({ message: 'Item Saved!'}) // res.send('Item Saved!')
);

// update item
router.put('/item/:id', 
  itemController.updateItem,
  (req, res) => res.status(200).json({ message: 'Item Updated!'}) // res.send('Item Updated!')
); 

// delete item
router.delete('/item/:id', 
  itemController.deleteItem,
  (req, res) => res.status(200).json({ message: 'Item Deleted!'}) // res.send('Item Deleted!')
); 


// '/mycloset'

// get items by category
router.get('/mycloset/category', // incoming like: /mycloset/category?category=skirt
  itemController.getItemsByCategory,
  (req, res) => res.status(200).json(res.locals.items)
)

// get all items
router.get('/mycloset', 
  itemController.getItems,
  (req, res) => res.status(200).json(res.locals.items)
);


// get an item by id - still fixing 
router.get('/mycloset/:id', 
  itemController.getItemsByID,
  (req, res) => res.status(200).json(res.locals.item)
)




// '/fit'

module.exports = router;