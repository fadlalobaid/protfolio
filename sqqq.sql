
CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(20) NOT NULL,
    lastname VARCHAR(20),
    gander VARCHAR(20) CHECK
        (gander IN('male', 'female')),
        LANGUAGE VARCHAR(50) DEFAULT 'arabic' ,
    salary  int not null,
    
    )
