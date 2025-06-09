---
title: spedizioni
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La gestión de los **spedizioni** en Fluentis representa un avance significativo en la gestión logística y operativa para las empresas que utilizan esta plataforma ERP. Esta ha sido diseñada para optimizar y simplificar el proceso de envío, ofreciendo un control más eficiente e integrado de todas las actividades logísticas.  
El sistema de gestión de envíos en Fluentis también introduce la posibilidad de crear groupage, un proceso logístico a través del cual los envíos de diferentes clientes o proveedores se agrupan en una única unidad de transporte.

Este método de consolidación ofrece varios beneficios:

- **Reducción de Costos (Riduzione dei Costi)**: La creación de groupage permite optimizar el uso de los espacios de carga y reducir los costos de transporte por unidad de mercancía enviada. Es particularmente ventajoso para las empresas que envían mercancías en cantidades inferiores a la carga completa.
- **Eficiencia Operativa (Efficienza Operativa)**: Consolidar más envíos en una única carga simplifica la gestión de las operaciones y reduce los tiempos de tránsito, mejorando la eficiencia general del proceso logístico.
- **Flexibilidad y Escalabilidad (Flessibilità e Scalabilità)**: Las empresas pueden adaptar fácilmente su estrategia de envío según la demanda y las variaciones del mercado, aprovechando la flexibilidad ofrecida por los groupages para gestionar picos de envío o tener más control sobre los tiempos de entrega.

En resumen, esta funcionalidad para la gestión de envíos de Fluentis ofrece a las empresas una herramienta poderosa para optimizar la logística, mejorar la eficiencia y reducir costos, manteniendo al mismo tiempo un alto nivel de servicio y satisfacción del cliente.
:::

El formulario **Nuevo Envío (Nuova Spedizione)** se abre a través de la ruta **Logística > spedizioni > Nuevo Envío (Logistica > Spedizioni > Nuova Spedizione)** o mediante el botón **nuovo** que se encuentra en el formulario [Buscar spedizioni (Ricerca Spedizioni)](/docs/logistics/shipping/search-shippings).

En el formulario de ingreso se proponen automáticamente la **data** y el **anno** actuales, pero pueden ser modificados.

## **1. Campos obligatorios

- **Tipo de envío (Tipo di spedizione)**: indica el tipo de envío y se inserta automáticamente también el *número* del envío. Este se predefine en *Configuración > Tablas > Logística > [Tipos de envío](/docs/configurations/tables/logistics/shipping-type)*.  
- **Estado de envío (Stato di spedizione)**: predefinido en *Configuración > Tablas > Logística > [Estados de envío](/docs/configurations/tables/logistics/shipping-states)*.  
- **Transporte a través de (Trasporto tramite)**: el usuario puede elegir entre las siguientes opciones: *mittente*, *destinatario* y *vettore*.  
- **numero**: a cada documento se le asigna un número según la numeración especificada por el usuario y al tipo de envío que contiene la numeración.  
- **vettore**: permite indicar el transportista que realizará el envío.  
- **cliente**: permite indicar el cliente del envío.

## **2. testata**

Después de haber seleccionado los datos obligatorios en la sección superior, el usuario puede continuar ingresando los siguientes datos:  
- **data inizio**: permite indicar la fecha de inicio del envío;  
- **data fine**: permite indicar la fecha de fin del envío;  
- **ore pianificate**: indica el total de horas necesarias para el envío. Se calcula automáticamente en función de la fecha de inicio y fin;  

La información relacionada con el vehículo y el conductor:  
- **automezzo**: permite seleccionar el vehículo con el que se realizará el envío entre los indicados en la tabla [Vehículos (Automezzi)](/docs/logistics/motorvehicles/motorvehicle);  
- **Conductor asignado (Autista assegnato)**: permite seleccionar el conductor que realizará el envío entre los indicados en la tabla [Conductores (Autisti)](//docs/logistics/motorvehicles/motorvehicle-drivers);  
- **volume**: permite indicar el volumen del envío y la unidad de medida correspondiente;  
- **peso netto**: permite indicar el peso neto del envío y la unidad de medida correspondiente;  
- **peso lordo**: permite indicar el peso bruto del envío y la unidad de medida correspondiente;  

La información relacionada con los bienes:  
- **aspetto esteriore dei beni**: permite seleccionar la apariencia exterior de la mercancía enviada entre las indicadas en la tabla [Apariencia exterior de bienes (Aspetto esteriore beni)](/docs/configurations/tables/logistics/type-of-packaging/);  
- **Número de seguimiento (Numero tracking)**: permite indicar el número de seguimiento del envío. Este se propone por defecto para todos los envíos ingresados en la pestaña **gruopage**;  
- **Número total de bultos (Numero totale di colli)**: permite indicar el número de bultos del envío.  

La información relacionada con la moneda:  
- **divisa**: sección que contiene los datos relativos a la [Moneda (Divisa)](/docs/guide/common/glossary/glossary-intro#currency);  
- **data valuta**: indica la [Fecha de moneda (Data valuta)](/docs/guide/common/glossary/glossary-intro#currency-date).  

La información relacionada con el destinatario y el destino:  
- **sito produttivo**: permite elegir el sitio de producción desde el cual se realizará el envío y muestra automáticamente la dirección asociada al *Contacto* (enviado en el *Sitio de Producción*) en la dirección del lugar de carga del envío;  
- **Dirección del lugar de carga (Indirizzo del luogo di carico)**: al abrir el formulario, este campo se valora por defecto con la dirección de la empresa desde la cual normalmente deberían partir las mercancías. También es posible modificarlo manualmente;  
- **Dirección del lugar de destino (Indirizzo del luogo di destinazione)**: permite indicar el lugar de destino del envío.  

La información relacionada con el envío:  
- **spedizione**: permite indicar los datos relativos al [Envío (Spedizione)](/docs/guide/common/glossary/glossary-intro#shipment);  
- **porto**: permite indicar los datos relativos al [Puerto (Porto)](/docs/guide/common/glossary/glossary-intro#carriage);  
- **imballo**: permite indicar los datos relativos al [Embalaje (Imballo)](/docs/guide/common/glossary/glossary-intro#packing).  

Cualquier nota:  
- **nota**: permite insertar una nota libre;  
- **Nota inicial (Nota iniziale)**: permite insertar una nota libre adicional.  

Y, por último, la información relacionada con el estado de cumplimiento del envío:  
- **stato evasione**: cuando el envío se cumple a través de los documentos DDT o facturas, su estado de cumplimiento cambia automáticamente de *non evaso* a *parzialmente evaso* o *evaso*; el usuario puede forzar el cumplimiento de un pedido no totalmente cumplido indicando el estado *Cumplido forzado (Evaso forzatamente)*;  
- **data chiusura**: indica la fecha de cumplimiento del documento.

## **3. Consolidación**

En esta pestaña se ingresan todas las informaciones relativas a la **consolidación (groupage)**.  
Esto consiste en agrupar varios envíos de mercancías provenientes de diferentes remitentes, pero destinados a la misma área geográfica, en una única carga o contenedor. De esta manera, es posible aprovechar al máximo el espacio disponible en los medios de transporte (como camiones, contenedores marítimos o aviones) y ofrecer un servicio más económico en comparación con el envío de partidas individuales de mercancías.

La pestaña se divide en dos secciones principales:

### Envíos de consolidación (Spedizioni groupage)

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

### Artículos de envío (Articoli di spedizione)

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

#### Botones específicos  
- **Nueva consolidación (Nuova groupage)**: permite ingresar un nuevo envío en la consolidación;  
- **Eliminar consolidación (Elimina groupage)**: permite eliminar el envío seleccionado de la consolidación;  
- **trasferimento articoli**: permite agregar los artículos al envío tomándolos directamente de los pedidos de clientes;  
- **DDT**: permite crear automáticamente los [DDT](/docs/sales/sales-delivery-notes/general-overview) para los envíos seleccionados en la consolidación;  
- **fattura**: permite crear automáticamente las [Facturas](/docs/sales/sales-invoices/general-overview) para los envíos seleccionados en la consolidación;  
- **Picking**: permite crear automáticamente los [Picking](/docs/logistics/picking/picking-intro) para los envíos seleccionados en la consolidación.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

## **4. riepiloghi

En los riepiloghi se presentan las informaciones relacionadas con los costos de todo el documento.

### spese

En esta cuadrícula es posible ingresar los gastos que deben ser introducidos de forma positiva y los descuentos de forma negativa.

Estos elementos se aplican a la totalidad del documento y no se distribuyen entre las líneas de los artículos. Pueden incluir costos adicionales, descuentos globales o recargos aplicados al documento completo.

Para ingresar un nuevo gasto, es necesario completar los siguientes datos:

- **numero riga**: indica el número de línea del gasto ingresado; se completa automáticamente;  
- **Tipo de gasto / Descripción (Tipo spesa / Descrizione)**: permite elegir las tipologías de gasto predefinidas en la tabla [Tipos de gastos (Tipi spese)](/docs/configurations/tables/general-settings/expenses-types/);  
- **importo spesa**: indica el valor del gasto expresado en la moneda del documento;  
- **descrizione spesa**: Detalle de declaraciones: se ingresa la posible declaración de intención válida para el cliente;  
- **imposta**: permite elegir la alícuota de IVA, predefinidas en la tabla [Alícuotas/Modalidades de IVA (Aliquote/Modalità IVA)](/docs/configurations/tables/finance/vat-rates/).  

A la derecha del formulario están presentes los siguientes campos:

- **note**: permite ingresar una nota libre;  
- **importo totale**: permite visualizar el importe total de la carga dado por la suma de los valores ingresados en la tabla *spese*.