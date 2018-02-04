DROP TABLE IF EXISTS Spirits;

CREATE TABLE Spirits (
    spiritId serial PRIMARY KEY,
	spiritName varchar (50) NOT NULL,
    createdAt timestamp,
    updatedAt timestamp
);

INSERT INTO Spirits (spiritName, createdAt, updatedAt) VALUES ('Vodka', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO Spirits (spiritName, createdAt, updatedAt) VALUES ('Rum', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);