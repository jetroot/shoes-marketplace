INSERT INTO products (id, title, image, description, price)
VALUES ('16c93d5b42d247afa02dc45013a2b8e1', 'Salli Shoe', 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.', 22.3)
    ON CONFLICT (id) DO NOTHING;

INSERT INTO products (id, title, image, description, price)
VALUES ('16c93d5b42d247afa02dc45013a2b8e2', 'Dark Yellow Shoe', 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 100)
ON CONFLICT (id) DO NOTHING;

INSERT INTO products (id, title, image, description, price)
VALUES ('16c93d5b42d247afa02dc45013a2b8e3', 'Different Shoes', 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.', 300.89)
ON CONFLICT (id) DO NOTHING;

INSERT INTO products (id, title, image, description, price)
VALUES ('16c93d5b42d247afa02dc45013a2b8e4', 'Girl with Shoe', 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 100)
ON CONFLICT (id) DO NOTHING;

INSERT INTO products (id, title, image, description, price)
VALUES ('16c93d5b42d247afa02dc45013a2b8e5', 'people shoes', 'https://images.pexels.com/photos/2731977/pexels-photo-2731977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled ', 99.9)
ON CONFLICT (id) DO NOTHING;