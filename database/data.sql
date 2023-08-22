DROP TABLE IF EXISTS suggestions;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS users;



CREATE TABLE categories (
    id INT GENERATED ALWAYS AS IDENTITY,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY (category)
);

CREATE TABLE users (
    id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE tokens (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INT NOT NULL,
    token CHAR(36) UNIQUE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO categories (category)
VALUES 
    ('Public Services'),
    ('Recycling'),
    ('Landscape'),
    ('Skills');


CREATE TABLE suggestions (
    id INT GENERATED ALWAYS AS IDENTITY,
    category_name VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(200) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_name) REFERENCES categories(category),
    FOREIGN KEY (user_id) REFERENCES users(id)
);





INSERT INTO users (username,password)
VALUES
    ('emptybagelman','sosecretomg');

INSERT INTO tokens (user_id, token)
VALUES 
    (1,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

INSERT INTO suggestions (category_name,title,content,user_id) 
VALUES
    ('Public Services','Rubbish!','Man it''s so bad!', 1), ('Recycling','Trial Barbara!','Trial Barbara!',1);
