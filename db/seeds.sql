CREATE database menu_manager_development;

use menu_manager_development;

INSERT into MenuItems (name, description, category, price)
VALUES ("Gyro Burger", "Delcious 1/4 pounder with tasty Gryos and spicy sauce.", "Sandwich",  8.99),
	   ("Fish Tacos", "2 Cruncy Mahi Mahi Fish Tacos in our special ocean spice sauce", "Sandwich", 11.99),
	   ("Cesar Salad", "omaine lettuce and croutons dressed with parmesan cheese, lemon juice, olive oil, egg, Worcestershire sauce, garlic, and black pepper.", "Salad", 6.99),
	   ("Cheese Sticks", "Deep fried yummy mozzarella sticks with marinara sauce on the side", "Appetizer", 4.99),
	   ("Tomato Soup", "Steaming hot tomato & cream soup with a touch of cilantro.", "Soup", 5.99),
	   ("Zinger Burger", "Delicious crispy chicken, tomatoes, lettuce, mayo & coleslaw sauce.", "Sandwich", 8.99),
	   ("Ice Cream Sundae", "Your choice of vanilla, chocolate or strawberry ice cream is smothered with hot fudge or cool strawberry topping and crowned with whipped topping", "Dessert", 5.00),
	   ("Bruschetta", "Sauteed Tomatoes on a crispy baguette., ", "Appetizer", 8.99),
	   ("Lava Cake", "Decadent Brownies with a molten chocolate filling and a scoop of french vanilla ice cream on the side", "Dessert", 6.50),
	   ("Chicken Soup", "Hearty shredded Chicken in a grandma-styled  soup", "Soup", 4.99),
	   ("Chilean Salad", "Contains tomato, onion, coriander and olive oil, and sometimes with chili peppers", "Salad", 8.99);

INSERT into users (userName, password)
VALUES ("admin", "admin");