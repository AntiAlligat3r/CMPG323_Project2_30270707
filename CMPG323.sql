DROP TABLE ACCOUNT;
CREATE TABLE ACCOUNT
(
    id char(8) NOT NULL,
    username varchar(20) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    CONSTRAINT id_pk PRIMARY KEY(id)
);

