---
title: Consolidación (Groupage)
sidebar_position: 5
---

En esta pestaña se ingresan todas las informaciones relativas a la **consolidación (groupage)**.  
Esto consiste en agrupar varios envíos de mercancías provenientes de diferentes remitentes, pero destinados a la misma área geográfica, en una única carga o contenedor. De esta manera, es posible aprovechar al máximo el espacio disponible en los medios de transporte (como camiones, contenedores marítimos o aviones) y ofrecer un servicio más económico en comparación con el envío de partidas individuales de mercancías.

La pestaña se divide en dos secciones principales:

## Envíos de consolidación (Spedizioni groupage)

En esta cuadrícula se ingresan las informaciones relativas a los envíos contenidos en esta **consolidación (groupage)**, por lo que para ingresar un nuevo envío en la cuadrícula, basta con ubicarse en la fila para completar los diversos datos o utilizar el botón **Nuevo** (Nuovo) presente en la cinta de opciones.  

Las columnas disponibles son las siguientes y están agrupadas por:

Envío (Spedizione)  
- **numero riga**: indica el número de la fila del envío y se inserta automáticamente;  
- **data inizio**: indica la fecha/hora de inicio del envío;  
- **data fine**: indica la fecha/hora de fin del envío;  
- **ore pianificate**: indica la duración en horas del envío y se calcula automáticamente en función de la fecha de inicio y fin;  
- **Número de seguimiento (Numero di tracking)**: indica el número de seguimiento del envío individual; si se indica en el encabezado, el número de seguimiento se propone en todos los envíos creados, pero siempre puede ser modificado manualmente por el usuario.  

Dirección del lugar de carga (Indirizzo del luogo di carico)  
- **provenienza**: indica la razón social/nombre del lugar de carga;  
- **cap**: indica el código postal del lugar de carga;  
- **città**: indica la ciudad del lugar de carga;  
- **provincia**: indica la provincia del lugar de carga;  
- **Dirección del lugar de carga (Indirizzo del luogo di carico)**: indica la dirección del lugar de carga. Este se valora por defecto con la dirección de la empresa, desde donde normalmente deberían partir las mercancías, indicada también en el encabezado del documento.  

Dirección del lugar de destino (Indirizzo del luogo di destinazione)  
- **destinazione**: indica la razón social/nombre del lugar de destino;  
- **cap**: indica el código postal del lugar de destino;  
- **città**: indica la ciudad del lugar de destino;  
- **provincia**: indica la provincia del lugar de destino;  
- **Dirección del lugar de destino (Indirizzo del luogo di destinazione)**: indica la dirección del lugar de destino. Este se valora automáticamente tomándolo del registro del cliente, pero puede ser modificado manualmente por el usuario.  

Vehículo (Automezzo)  
- **automezzo**: indica el vehículo con el cual se realizará el envío;  
- **Conductor asignado (Autista assegnato)**: indica el conductor que realizará el envío.  

Además, para cada fila de la consolidación, es posible abrir el detalle de la fila correspondiente haciendo clic en el **+**, para poder gestionar también los siguientes campos relativos al lugar de carga:  
- **telefono**: permite ingresar el número de teléfono relativo al lugar de carga;  
- **E-mail**: permite ingresar la dirección de correo electrónico relativa al lugar de carga;  
- **note**: permite ingresar una nota libre relativa al lugar de carga;  
y al destino:  
- **telefono**: permite ingresar el número de teléfono relativo a la destinación;  
- **E-mail**: permite ingresar la dirección de correo electrónico relativa a la destinación;  
- **note**: permite ingresar una nota libre relativa a la destinación.  

## Artículos de envío (Articoli di spedizione)

En esta sección se visualizan todos los artículos contenidos en el envío seleccionado en la consolidación.  
Para agregar un **nuovo articolo** en la cuadrícula, basta con ubicarse en la fila para completar los diversos datos o utilizar el botón **nuovo** presente en la cinta de opciones.  
Alternativamente, también es posible agregar los artículos tomándolos directamente de los pedidos de clientes mediante el procedimiento **trasferimento articoli**.  
Al presionar el botón **trasferimento articoli**, se abre el formulario denominado **Conexión de pedidos de venta (Collegamento degli ordini di vendita)**, en el cual por defecto ya se propone el cliente del envío en el filtro correspondiente. Luego, al presionar el botón **ricerca**, se visualizarán en la cuadrícula de la derecha todos los artículos de los pedidos no cumplidos y parcialmente cumplidos de ese cliente.  
En la parte izquierda del formulario, se visualizan las cuadrículas relativas a los *envíos de consolidación (spedizioni goupage)* y a los *artículos de envío (articoli di spedizione)* con los datos ingresados en el formulario principal de la consolidación.  
En este punto, el usuario puede, con el drag & drop, arrastrar los artículos de la cuadrícula de la derecha directamente sobre el envío individual y se insertarán automáticamente en la cuadrícula *artículos de envío (articoli di spedizione)* correspondiente a ese envío.  
Además, también es posible agregar artículos provenientes de pedidos de otros clientes, simplemente cambiando el valor del filtro *Cliente* y presionando nuevamente **ricerca**.  
Una vez que se hayan agregado todos los artículos, al presionar el botón **acquisizione**, el usuario confirmará todos los cambios.  

Las columnas disponibles son las siguientes:   
- **numero riga**: indica el número de fila del artículo ingresado en la consolidación;  
- **classe**: indica la clase del artículo;  
- **articolo**: indica el código del artículo;  
- **variante articolo**: indica la variante del artículo;  
- **descrizione variante**: indica la descripción variante del artículo;  
- **unità di misura**: indica la unidad de medida del artículo;  
- **marca**: visualiza el valor de la marca ingresada en el registro de artículos;  
- **quantità**: indica la cantidad del artículo;  
- **unità di misura alternativa**: indica la unidad de medida alternativa del artículo;  
- **quantità alternativa**: indica la cantidad del artículo;  
- **volume**: indica el volumen del artículo;  
- **peso netto**: indica el peso neto del artículo;  
- **peso lordo**: indica el peso bruto del artículo;  
- **Cuenta del pedido del cliente (Conto ordine cliente)**: visualiza la cuenta del pedido del cliente al que pertenece el artículo;  
- **tipo ordine cliente**: visualiza el tipo del pedido del cliente al que pertenece el artículo;  
- **Fecha del pedido del cliente (Data ordine cliente)**: visualiza la fecha del pedido del cliente al que pertenece el artículo;  
- **Factura o DDT (Fattura o DDT)**: visualiza la referencia de la factura/ DDT respectivamente creados al presionar los botones **fattura** o **ddt**; el valor se visualiza en el formato tipo documento / fecha documento / número documento;  
- **riferimento picking**: visualiza la referencia del picking creado al presionar el botón **Picking**; el valor se visualiza en el formato tipo documento / fecha documento / número documento.  

*Botones específicos*  

- **Nueva consolidación (Nuova groupage)**: permite ingresar un nuevo envío en la consolidación;  
- **Eliminar consolidación (Elimina groupage)**: permite eliminar el envío seleccionado de la consolidación;  
- **trasferimento articoli**: permite agregar los artículos al envío tomándolos directamente de los pedidos de clientes;  
- **DDT**: permite crear automáticamente los [DDT](/docs/sales/sales-delivery-notes/general-overview) para los envíos seleccionados en la consolidación;  
- **fattura**: permite crear automáticamente las [Facturas](/docs/sales/sales-invoices/general-overview) para los envíos seleccionados en la consolidación;  
- **Picking**: permite crear automáticamente los [Picking](/docs/logistics/picking/picking-intro) para los envíos seleccionados en la consolidación.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).