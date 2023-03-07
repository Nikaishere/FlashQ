DROP TABLE IF EXISTS subjects;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(200) NOT NULL
)

CREATE TABLE subjects  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  subject VARCHAR(50),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE questions  (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  question VARCHAR(300) NOT NULL,
  answer VARCHAR(100) NOT NULL,
  subject_id INT NOT NULL,
  FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

ALTER TABLE questions
ADD FOREIGN KEY (subject_id) REFERENCES subjects(id);

INSERT INTO subjects (subject) VALUES ('Basic JS');
INSERT INTO questions (question, answer, subject_id) VALUES ('what is a function?', 'a set of statements that performs a task or calculates a value', 1);
