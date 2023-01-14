INSERT INTO products (id, title, image, description, price) VALUES ('16c93d5b42d247afa02dc45013a2b8e1', 'title1', 'image1', 'descr1', 22.3)
    ON CONFLICT (id) DO NOTHING;