CREATE TABLE usertest (
	userId INTEGER NOT NULL auto_increment PRIMARY KEY,
	userCompleteName VARCHAR(100) NOT NULL,
    userBirthDay date,
    userCidade VARCHAR(50) NOT NULL,
    userEstado  VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    userPassword  VARCHAR(50) NOT NULL
);


CREATE TABLE Livro (
	livroId INTEGER NOT NULL auto_increment PRIMARY KEY,
	tituloLivro VARCHAR(100) NOT NULL,
    autorLivro VARCHAR(100) NOT NULL,
    editora VARCHAR(100) NOT NULL,
    paisLivro VARCHAR(30) NOT NULL,
    anoLancamento INTEGER
);

CREATE TABLE Serie (
	serieId INTEGER NOT NULL auto_increment PRIMARY KEY,
	tituloSerie  VARCHAR(100) NOT NULL, 
    diretorSerie  VARCHAR(100) NOT NULL,
    elencoPrincipalSerie  VARCHAR(100) NOT NULL,
    paisSerie  VARCHAR(30) NOT NULL,
	anoSerie INTEGER,
    numTemp INTEGER
);

CREATE TABLE Filme (
	filmeId INTEGER NOT NULL auto_increment PRIMARY KEY,
    tituloFilme VARCHAR(100) NOT NULL,
    diretorFilme VARCHAR(100) NOT NULL,
    elencoPrincipalFilme VARCHAR(100) NOT NULL,
    paisFilme VARCHAR(30) NOT NULL,
    anoFilme INTEGER
)

SELECT * FROM usertest;
SELECT * FROM Livro;
SELECT * FROM Serie;
SELECT * FROM Filme;