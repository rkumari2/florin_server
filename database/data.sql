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
    ('emptybagelman','sosecretomg'),
    ('ronmitchel','xadsa231jka'),
    ('danielwilliams','hf83hd62s'),
    ('camillejohnson91','324823hcsd7'),
    ('danhamill','jdhauwg4');

INSERT INTO tokens (user_id, token)
VALUES 
    (1,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'),
    (2,'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'),
    (3,'cccccccccccccccccccccccccccccccccccc'),
    (4,'dddddddddddddddddddddddddddddddddddd'),
    (5,'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

INSERT INTO suggestions (category_name,title,content,user_id) 
VALUES
    ('Public Services','Emergency Alert System','Implement a notification system that alerts residents about emergencies, road closures, severe weather, or other critical updates in real time.', 1), 
    ('Recycling','Recycling Collection Calendar!','Offer a personalized calendar that shows residents their recycling collection schedule, reducing confusion and missed pick-ups.!', 2),
    ('Landscape', 'Landscape Design Workshops','Organize workshops and seminars that teach residents about landscape design, gardening techniques, and sustainable landscaping practices.',3 ),
    ('Skills', 'Mentorship Programs', 'Establish mentorship opportunities where experienced individuals can offer guidance and advice to those seeking to develop specific skills.',4),
    ('Public Services','Public Transportation Updates','Provide real-time information on public transportation schedules, delays, route changes, and service disruptions to help residents plan their commutes better.', 1), 
    ('Recycling','Interactive Quizzes','Engage users with interactive quizzes to test their recycling knowledge and reinforce best practices.', 5),
    ('Landscape', 'Native Plant Recommendations','Offer guidance on incorporating native plants into residential and public landscapes, promoting biodiversity and conservation.',3 ),
    ('Skills', 'Creative Workshops', 'Organize workshops focused on creative skills like painting, writing, photography, and crafting, fostering artistic expression within the community.',4),
    ('Public Services','Volunteer Opportunities', 'Feature volunteer opportunities for residents who want to actively contribute to the community betterment through various initiatives and events.', 5), 
    ('Recycling','Community Success Stories','Share success stories of residents who have made significant changes in their recycling habits, inspiring others to do the same.', 1),
    ('Landscape', 'Flower Bed Adoption Program','Introduce a program where residents or local organizations can "adopt" and maintain flower beds or planters in public areas, enhancing the visual appeal of the community.',3 ),
    ('Skills', 'Virtual Skill Sharing Sessions', 'Host virtual skill sharing sessions via live streaming, allowing residents to participate and learn from the comfort of their homes.', 2),
    ('Public Services','Online Payment Services','Allow residents to pay utility bills, property taxes, or other fees online through the app, streamlining payment processes and reducing paperwork.', 1), 
    ('Recycling','Donate or Reuse Items','Offer suggestions on where residents can donate or repurpose items they no longer need, promoting a circular economy and reducing waste.', 5),
    ('Landscape', 'Seasonal Planting Calendar','Provide a calendar that offers guidance on optimal planting times for different types of plants, ensuring vibrant landscapes throughout the year.',3 ),
    ('Skills', 'Language Exchange', 'Connect residents interested in learning new languages, providing a platform for language exchange and cultural immersion.',4);

