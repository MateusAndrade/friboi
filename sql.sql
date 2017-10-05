DROP TABLE gados;

CREATE TABLE gados(
	codigo int not null auto_increment,
    descricao varchar(250) not null,
    informacoes varchar(3000) not null,
    peso decimal(6,2) not null,
    sexo char(1) not null,
    preco decimal (10,2) not null,
    avaliacao int not null,
    idade decimal (2,1) not null,
    foto varchar(3000),
    data date,
    primary key(codigo)
)


INSERT INTO gados(descricao,informacoes, peso, sexo, avaliacao, preco  ,idade, foto, data)
VALUES('Touro 1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae diam quis neque elementum lacinia. Curabitur sit amet aliquam elit, eget placerat dui.',400.00,'M',2 ,1500.00,2.0,'https://i.ytimg.com/vi/6uqPBZncL5Q/maxresdefault.jpg', CURDATE());

INSERT INTO gados(descricao,informacoes, peso, sexo, avaliacao, preco  ,idade, foto, data)
VALUES('Touro 2','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae diam quis neque elementum lacinia. Curabitur sit amet aliquam elit, eget placerat dui.',450.00,'F',3 ,1800.00,2.1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPu4WpaHnGLAoNryiSEDye-8KTIfre26qEbj_z6MXHdK2CJgXZ', CURDATE());

INSERT INTO gados(descricao,informacoes, peso, sexo, avaliacao, preco  ,idade, foto, data)
VALUES('Touro 3','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae diam quis neque elementum lacinia. Curabitur sit amet aliquam elit, eget placerat dui.',350.00,'F',5,1000.00,0.5,'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/12-understandin.jpg', CURDATE());

INSERT INTO gados(descricao,informacoes, peso, sexo, avaliacao, preco  ,idade, foto, data)
VALUES('Touro 4','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae diam quis neque elementum lacinia. Curabitur sit amet aliquam elit, eget placerat dui.',350.00,'F',1,1000.00,0.5,'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2013/12-understandin.jpg', CURDATE());

SELECT * FROM gados;