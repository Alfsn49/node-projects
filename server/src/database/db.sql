Create table if not exists personas.tb_usuario(
	int_usuario_id SERIAL not NULL,
	str_usuario_codigo VARCHAR(15),
	str_usuario_nombre VARCHAR(100),
	str_usuario_cedula Varchar(10),
	int_usuario_edad INT,
	str_usuario_telefono VARCHAR(10)	
);


select * from personas.tb_usuario;

insert into personas.tb_usuario(
	str_usuario_codigo, 
	str_usuario_nombre, 
	str_usuario_cedula, 
	int_usuario_edad, 
	str_usuario_telefono	
)Values(
'HNE6487', 'Edgar', '0705331403', 22, '0958623923'
),
(
'HNE6488', 'Carlos', '0604514000', 32, '0958623923'
);