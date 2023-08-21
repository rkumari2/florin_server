DROP TABLE IF EXISTS tokens;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS suggestions;

CREATE TABLE categories (
    id INT GENERATED ALWAYS AS IDENTITY,
    category VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
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

CREATE TABLE suggestions (
    id INT GENERATED ALWAYS AS IDENTITY,
    category_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    content VARCHAR(200) NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);



INSERT INTO categories (category)
VALUES 
    ('Public Services'),
    ('Recycling'),
    ('Landscape'),
    ('Skills');

INSERT INTO users (username,password)
VALUES
    ('emptybagelman','sosecretomg');

INSERT INTO tokens (user_id, token)
VALUES 
    (1,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

INSERT INTO suggestions (category_id,title,content,user_id) 
VALUES
    (1,'Rubbish!','Man it''s so bad!',1);
