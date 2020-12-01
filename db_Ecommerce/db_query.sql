CREATE TABLE USUARIO (
	Id_user BIGINT NOT NULL AUTO_INCREMENT,
	nome_user varchar(255) NOT NULL,
	email_user varchar(255) NOT NULL,
	password_user varchar(12) NOT NULL,
	FK_pedidos varchar(255) NOT NULL,
	PRIMARY KEY (iD_user)
);

CREATE TABLE CATEGORIA_PRODUTO (
	Id_categoria BIGINT NOT NULL AUTO_INCREMENT,
	nome_cat varchar(255) NOT NULL,
	regiao varchar(255) NOT NULL,
	PRIMARY KEY (Id_categoria)
);

CREATE TABLE PRODUTO (
	Id_produto BIGINT NOT NULL AUTO_INCREMENT,
	nome_produto varchar(255) NOT NULL,
	preco_produto FLOAT(6.2) NOT NULL,
	estoque INT(500) NOT NULL,
	descricao_produto varchar(255) NOT NULL,
	fK_categoria INT NOT NULL,
	fK_animais INT NOT NULL,
	PRIMARY KEY (Id_produto)
);

CREATE TABLE PEDIDOS (
	ID_pedido BIGINT NOT NULL,
	qnt_pedida INT NOT NULL,
	valor_pedido FLOAT(8.2) NOT NULL,
	data_pedido DATE NOT NULL,
	status BOOLEAN NOT NULL DEFAULT false,
	FK_produto INT NOT NULL,
	PRIMARY KEY (ID_pedido)
);

CREATE TABLE ANIMAIS (
	ID_animal INT NOT NULL,
	nome_animal varchar(255) NOT NULL,
	descricao_animal varchar(255) NOT NULL,
	PRIMARY KEY (ID_animal)
);

CREATE TABLE LOCATION_USER (
	nome_endereco varchar(255) NOT NULL,
	numero_endereco INT NOT NULL,
	cep INT NOT NULL,
	cidade varchar(50) NOT NULL,
	uF varchar(50) NOT NULL,
	fK_usuario varchar(50) NOT NULL
);

ALTER TABLE USUARIO ADD CONSTRAINT USUARIO_fk0 FOREIGN KEY (fK_pedidos) REFERENCES PEDIDOS(dD_pedido);

ALTER TABLE PRODUTO ADD CONSTRAINT PRODUTO_fk0 FOREIGN KEY (fK_categoria) REFERENCES CATEGORIA_PRODUTO(iD_categoria);

ALTER TABLE PRODUTO ADD CONSTRAINT PRODUTO_fk1 FOREIGN KEY (fK_animais) REFERENCES ANIMAIS(iD_animal);

ALTER TABLE PEDIDOS ADD CONSTRAINT PEDIDOS_fk0 FOREIGN KEY (fK_produto) REFERENCES PRODUTO(iD_produto);

ALTER TABLE LOCATION_USER ADD CONSTRAINT LOCATION_USER_fk0 FOREIGN KEY (fK_usuario) REFERENCES USUARIO(iD_user);

