const express = require('express');
const app = express();

const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}

// send RESTAURANT data from server.js to home.ejs
app.get('/', (req, res) => {
  res.render('home.ejs', {RESTAURANT : RESTAURANT});
});

// send menu data from server.js to menu.ejs
app.get('/menu', (req, res) => {
  res.render('menu.ejs', {menu : RESTAURANT.menu});
  // menu (ejs file): RESTAURANT.menu (array inside server.js)
});

app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const categoryName = RESTAURANT.menu.filter((type) => type.category === category);
  //type.category is array, category is parameter
  console.log(categoryName);
  res.render('category.ejs', { categoryName : categoryName });
  // we can use {banana: categoryName}
  // banana is the variable name in category.js
  // categoryName is the variable name we are sending from server.js
  });

app.listen(3000);
