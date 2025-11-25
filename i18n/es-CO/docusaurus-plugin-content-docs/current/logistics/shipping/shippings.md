---
title: Envíos
sidebar_position: 3
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La gestión de las **Envíos<!-- Spedizioni -->** en Fluentis representa un avance significativo en la gestión logística y operativa para las empresas que utilizan esta plataforma ERP<!-- ERP -->. Esta función está diseñada para optimizar y simplificar el proceso de envío, ofreciendo un control más eficiente e integrado de todas las actividades logísticas<!-- logistiche -->.
El sistema de gestión de envíos en Fluentis también introduce la posibilidad de crear groupage, un proceso logístico mediante el cual los envíos<!-- spedizioni --> de diferentes clientes o proveedores se agrupan en una sola unidad de transporte.

Este método de consolidación ofrece varios beneficios:

- **Reducción de Costos<!-- Riduzione dei Costi -->**: La creación de groupage permite optimizar el uso de los espacios de carga y reducir los costos de transporte por unidad de mercancía enviada. Es especialmente ventajosa para las empresas que envían mercancías en cantidades menores a la carga completa.
- **Eficiencia Operativa<!-- Efficienza Operativa -->**: Consolidar múltiples envíos en una sola carga simplifica la gestión de las operaciones y reduce los tiempos de tránsito, mejorando la eficiencia general del proceso logístico<!-- processo logistico -->.
- **Flexibilidad y Escalabilidad<!-- Flessibilità e Scalabilità -->**: Las empresas pueden adaptar fácilmente su estrategia de envío según la demanda y las variaciones del mercado, aprovechando la flexibilidad ofrecida por las groupage para gestionar picos de envío o tener mayor control sobre los tiempos de entrega.

En resumen, esta funcionalidad para la gestión de envíos de Fluentis ofrece a las empresas una potente herramienta para optimizar la logística<!-- logistica -->, mejorar la eficiencia y reducir los costos, manteniendo al mismo tiempo un alto nivel de servicio y satisfacción del cliente.
:::

El formulario **Nuevo Envío<!-- Nuova Spedizione -->** se abre:  
- a través de la ruta **Logística<!-- Logistica --> > Envíos<!-- Spedizioni --> > Nuevo Envío<!-- Nuova Spedizione -->**  
o bien  
- mediante el botón **Nuevo<!-- Nuovo -->** que se encuentra en el formulario [Búsqueda de Envíos<!-- Ricerca Spedizioni -->](/docs/logistics/shipping/search-shippings).

En el formulario de inserción, se proponen automáticamente la **Fecha** y el **Año** actual, pero se pueden modificar.

## **1. Datos obligatorios<!-- Dati obbligatori -->**

- **Tipo de envío<!-- Tipo di spedizione -->**: indica el tipo de envío y automáticamente también se inserta el *número* del envío. Esto está predefinido en *Configuración > Tablas > Logística<!-- Logistica --> > [Tipos de envío<!-- Tipi di spedizione -->](/docs/configurations/tables/logistics/shipping-type)*.
- **Estado de envío<!-- Stato di spedizione -->**: predefinido en *Configuración > Tablas > Logística<!-- Logistica --> > [Estados de envío<!-- Stati di spedizione -->](/docs/configurations/tables/logistics/shipping-states)*.
- **Transporte por medio de<!-- Trasporto tramite -->**: el usuario puede elegir entre las siguientes opciones: *Remitente*, *Destinatario* y *Transportista*.
- **Número<!-- Numero -->**: a cada documento se le asigna un número según la numeración especificada por el usuario y al tipo de envío que contiene la numeración.
- **Transportista<!-- Vettore -->**: permite indicar el transportista que realizará el envío.
- **Cliente**: permite indicar el cliente del envío.

## **2. Cabecera<!-- Testata -->**

Después de seleccionar los datos obligatorios en la sección superior, el usuario puede continuar introduciendo los siguientes datos:
- **Fecha de inicio<!-- Data inizio -->**: permite indicar la fecha de inicio del envío;
- **Fecha de finalización<!-- Data fine -->**: permite indicar la fecha de finalización del envío;
- **Horas planificadas<!-- Ore pianificate -->**: indica el total de horas necesarias para el envío. Se calcula automáticamente en base a la fecha de inicio y fin;

La información relativa al vehículo y al conductor:
- **Vehículo<!-- Automezzo -->**: permite seleccionar el vehículo con el que se realizará el envío, de entre los indicados en la tabla [Vehículos<!-- Automezzi -->](/docs/logistics/motorvehicles/motorvehicle);
- **Conductor asignado<!-- Autista assegnato -->**: permite seleccionar el conductor que realizará el envío, de entre los indicados en la tabla [Conductores<!-- Autisti -->](//docs/logistics/motorvehicles/motorvehicle-drivers);
- **Volumen**: permite indicar el volumen del envío y la unidad de medida relativa;
- **Peso neto**: permite indicar el peso neto del envío y su unidad de medida correspondiente;
- **Peso bruto**: permite indicar el peso bruto del envío y su unidad de medida correspondiente;

La información relativa a los bienes:
- **Aspecto exterior de los bienes<!-- Aspetto esteriore dei beni -->**: permite seleccionar el aspecto exterior de la mercancía enviada de entre los indicados en la tabla [Aspecto exterior bienes<!-- Aspetto esteriore beni -->](/docs/configurations/tables/logistics/type-of-packaging/);
- **Número de seguimiento<!-- Numero tracking -->**: permite indicar el número de seguimiento del envío. Esto se propondrá por defecto para todos los envíos insertados en la pestaña **groupage**;
- **Número total de bultos<!-- Numero totale di colli -->**: permite indicar el número total de bultos del envío.

La información relativa a la moneda:
- **Moneda<!-- Divisa -->**: sección que contiene los datos relativos a la [Moneda](/docs/guide/common/glossary/glossary-intro#currency)
- **Fecha de moneda<!-- Data valuta -->**: indica la [Fecha de moneda](/docs/guide/common/glossary/glossary-intro#currency-date)

La información relativa al destinatario y destino:
- **Planta de producción<!-- Sito produttivo -->**: permite elegir la planta de producción desde donde se realizará el envío y asigna automáticamente la dirección asociada al *Contacto* (introducido en la *Planta de Producción<!-- Sito di Produzione -->*) en la dirección del lugar de carga del envío;
- **Dirección del lugar de carga<!-- Indirizzo del luogo di carico -->**: al abrir el formulario, este campo se rellena por defecto con la dirección de la empresa, desde donde normalmente deberían salir las mercancías. También es posible modificarlo manualmente;
- **Dirección del lugar de destino<!-- Indirizzo del luogo di destinazione -->**: permite indicar el lugar de destino del envío.

La información relativa al envío:
- **Envío<!-- Spedizione -->**: permite indicar los datos relativos al [Envío](/docs/guide/common/glossary/glossary-intro#shipment);
- **Flete<!-- Porto -->**: permite indicar los datos relativos al [Flete<!-- Porto -->](/docs/guide/common/glossary/glossary-intro#carriage);
- **Embalaje<!-- Imballo -->**: permite indicar los datos relativos al [Embalaje<!-- Imballo -->](/docs/guide/common/glossary/glossary-intro#packing).

Notas opcionales:
- **Nota**: permite insertar una nota libre;
- **Nota inicial**: permite insertar una nota libre adicional.

Información relativa al estado de cumplimiento del envío:
- **Estado de cumplimiento<!-- Stato evasione -->**: cuando el envío se liquida mediante los documentos DDT o facturas, su estado de cumplimiento cambia automáticamente de *No cumplido<!-- Non evaso -->* a *Parcialmente cumplido<!-- Parzialmente evaso -->* o *Cumplido<!-- Evaso -->*; el usuario puede forzar el cumplimiento de un pedido no totalmente cumplido indicando el estado *Cumplido forzadamente<!-- Evaso forzatamente -->*;
- **Fecha de cierre<!-- Data chiusura -->**: indica la fecha de cumplimiento del documento.

## **3. Groupage**

En esta pestaña se insertan todos los datos relativos a la **groupage**.
Esto consiste en agrupar varios envíos de mercancías procedentes de diferentes remitentes, pero destinados a la misma zona geográfica, en una sola carga o contenedor. De este modo, se puede aprovechar al máximo el espacio disponible en los medios de transporte (como camiones, contenedores marítimos o aéreos) y ofrecer un servicio más económico que el envío individual de partidas de mercancías.

### Envíos groupage<!-- Spedizioni groupage -->

En esta cuadrícula se ingresan los datos relativos a los envíos contenidos en este **groupage**, por lo que para insertar un nuevo envío en la cuadrícula, basta con posicionarse en la fila correspondiente para rellenar los datos o utilizar el botón **Nuevo<!-- Nuovo -->** disponible en la cinta de opciones.

Las columnas disponibles son las siguientes y están agrupadas por:

Envío<!-- Spedizione -->
- **Número de línea<!-- Numero riga -->**: indica el número de línea del envío, que se introduce automáticamente;
- **Fecha de inicio<!-- Data inizio -->**: indica la fecha/hora de inicio del envío;
- **Fecha de finalización<!-- Data fine -->**: indica la fecha/hora de finalización del envío;
- **Horas planificadas<!-- Ore pianificate -->**: indica la duración en horas del envío y se calcula automáticamente en función de la fecha de inicio y fin;
- **Número de seguimiento<!-- Numero di tracking -->**: indica el número de seguimiento del envío individual; si se indica en la pestaña cabecera, el número de seguimiento se propone en todos los envíos creados, aunque siempre puede ser modificado manualmente por el usuario.

Dirección del lugar de carga
- **Procedencia<!-- Provenienza -->**: indica la razón social/nombre del lugar de carga;
- **Código Postal<!-- CAP -->**: indica el código postal del lugar de carga;
- **Ciudad<!-- Città -->**: indica la ciudad del lugar de carga;
- **Provincia**: indica la provincia del lugar de carga;
- **Dirección del lugar de carga<!-- Indirizzo del luogo di carico -->**: indica la dirección del lugar de carga. Este campo se rellena por defecto con la dirección de la empresa, desde donde normalmente deberían partir las mercancías, indicando también la cabecera del documento.

Dirección del lugar de destino
- **Destino<!-- Destinazione -->**: indica la razón social/nombre del lugar de destino;
- **Código Postal<!-- CAP -->**: indica el código postal del lugar de destino;
- **Ciudad<!-- Città -->**: indica la ciudad del lugar de destino;
- **Provincia**: indica la provincia del lugar de destino;
- **Dirección del lugar de destino<!-- Indirizzo del luogo di destinazione -->**: indica la dirección del lugar de destino. Esta se rellena automáticamente desde la ficha del cliente, pero igualmente puede ser modificada manualmente por el usuario.

Vehículo<!-- Automezzo -->
- **Vehículo<!-- Automezzo -->**: indica el vehículo con el que se realizará el envío;
- **Conductor asignado<!-- Autista assegnato -->**: indica el conductor que realizará el envío.

Además, para cada fila del groupage, se puede expandir el detalle de la fila haciendo clic en **+**, para gestionar también los siguientes campos respecto al lugar de carga:
- **Teléfono**: permite introducir el número de teléfono referente al lugar de carga;
- **Correo electrónico**: permite introducir la dirección de correo electrónico referente al lugar de carga;
- **Notas**: permite introducir una nota libre referente al lugar de carga;
y al destino:
- **Teléfono**: permite introducir el número de teléfono referente al destino;
- **Correo electrónico**: permite introducir la dirección de correo electrónico referente al destino;
- **Notas**: permite introducir una nota libre referente al destino.

### Artículos del envío<!-- Articoli di spedizione -->

En esta sección se visualizan todos los artículos contenidos dentro del envío seleccionado en el groupage.
Para añadir un **Nuevo artículo** en la cuadrícula basta posicionarse en la fila correspondiente para rellenar los datos o utilizar el botón **Nuevo<!-- Nuovo -->** de la cinta de opciones.
Alternativamente, también es posible añadir los artículos seleccionándolos directamente de los pedidos de los clientes mediante la función **Transferencia de artículos<!-- Trasferimento articoli -->**.
Al presionar el botón **Transferencia de artículos<!-- Trasferimento articoli -->**, se abre el formulario llamado **Enlace de pedidos de venta<!-- Collegamento degli ordini di vendita -->**, en el cual por defecto ya se propone el cliente del envío en el filtro correspondiente. Entonces, presionando el botón **Buscar<!-- Ricerca -->** se mostrarán en la cuadrícula de la derecha todos los artículos de los pedidos no cumplidos o parcialmente cumplidos de ese cliente.
En la parte izquierda del formulario, se visualizan las cuadrículas relativas a *envíos groupage<!-- spedizioni goupage -->* y *artículos de envío* con los datos introducidos en el formulario principal del groupage.
En este punto el usuario puede, mediante drag & drop, arrastrar los artículos desde la cuadrícula de la derecha directamente al envío individual y automáticamente se introducirán en la cuadrícula de *artículos de envío* relativa a ese envío.
Además, es posible añadir artículos procedentes de pedidos de otros clientes, simplemente cambiando el valor del filtro *Cliente* y volviendo a pulsar **Buscar<!-- Ricerca -->**.
Una vez añadidos todos los artículos, el usuario pulsando el botón **Adquirir<!-- Acquisizione -->** confirmará todas las modificaciones.

#### Campos específicos
- **Número de línea<!-- Numero riga -->**: indica el número de línea del artículo introducido en el groupage;
- **Clase**: indica la clase del artículo;
- **Artículo<!-- Articolo -->**: indica el código del artículo;
- **Variante de artículo<!-- Variante articolo -->**: indica la variante del artículo;
- **Descripción de variante<!-- Descrizione variante -->**: indica la descripción de la variante del artículo;
- **Unidad de medida<!-- Unità di misura -->**: indica la unidad de medida del artículo;
- **Marca**: muestra el valor de la marca introducida en la ficha de artículos;
- **Cantidad**: indica la cantidad del artículo;
- **Unidad de medida alternativa<!-- Unità di misura alternativa -->**: indica la unidad de medida alternativa del artículo;
- **Cantidad alternativa**: indica la cantidad alternativa del artículo;
- **Volumen**: indica el volumen del artículo;
- **Peso neto<!-- Peso netto -->**: indica el peso neto del artículo;
- **Peso bruto<!-- Peso lordo -->**: indica el peso bruto del artículo;
- **Cuenta pedido cliente<!-- Conto ordine cliente -->**: muestra la cuenta del pedido cliente al que pertenece el artículo;
- **Tipo pedido cliente<!-- Tipo ordine cliente -->**: muestra el tipo de pedido cliente al que pertenece el artículo;
- **Fecha pedido cliente<!-- Data ordine cliente -->**: muestra la fecha del pedido cliente al que pertenece el artículo;
- **Factura o DDT**: muestra la referencia de la factura / DDT creada respectivamente al pulsar los botones **Factura<!-- Fattura -->** o **DDT**; el valor se muestra en el formato tipo de documento / fecha del documento / número de documento;
- **Referencia picking**: muestra la referencia del picking creado presionando el botón **Picking**; el valor se muestra en el formato tipo de documento / fecha del documento / número de documento.

#### Botones específicos
> - **Nueva groupage<!-- Nuova groupage -->**: permite insertar un nuevo envío en el groupage;
> - **Eliminar groupage<!-- Elimina groupage -->**: permite eliminar el envío seleccionado del groupage;
> - **Transferencia de artículos<!-- Trasferimento articoli -->**: permite añadir los artículos al envío tomándolos directamente de los pedidos de clientes;
> - **DDT**: permite crear automáticamente los [DDT](/docs/sales/sales-delivery-notes/general-overview) para los envíos seleccionados en el groupage;
> - **Factura<!-- Fattura -->**: permite crear automáticamente las [Facturas](/docs/sales/sales-invoices/general-overview) para los envíos seleccionados en el groupage;
> - **Picking**: permite crear automáticamente los [Picking](/docs/logistics/picking/picking-intro) para los envíos seleccionados en el groupage.

## **4. Resúmenes<!-- Riepiloghi -->**

En los Resúmenes<!-- Riepiloghi --> se presentan los datos relativos a los costos de todo el documento.

### Gastos<!-- Spese -->

En esta cuadrícula es posible introducir los gastos que deben ser registrados como positivos y los descuentos eventuales como negativos.

Estos elementos se aplican a la totalidad del documento y no se distribuyen entre las líneas de los artículos. Pueden incluir costos adicionales, descuentos globales o incrementos aplicados a todo el documento.

Para insertar un nuevo gasto es necesario completar los siguientes datos:

- **Número de línea<!-- Numero riga -->**: indica el número de línea del gasto introducido, que se rellena automáticamente;
- **Tipo de gasto / Descripción<!-- Tipo spesa / Descrizione -->**: permite elegir los tipos de gasto predefinidos en la tabla [Tipos de gastos<!-- Tipi spese -->](/docs/configurations/tables/general-settings/expenses-types/);
- **Importe gasto<!-- Importo spesa -->**: indica el valor del gasto expresado en la moneda del documento;
- **Descripción de gasto<!-- Descrizione spesa -->**: detalle de declaraciones: se introduce la posible declaración de intención válida para el cliente;
- **Impuesto<!-- Imposta -->**: permite elegir el porcentaje de IVA, predefinido en la tabla [Porcentajes/Modalidades de IVA<!-- Aliquote/Modalità IVA -->](/docs/configurations/tables/finance/vat-rates/).

En la parte derecha del formulario están disponibles los siguientes campos:

- **Notas<!-- Note -->**: permite introducir una nota libre;
- **Importe total<!-- Importo totale -->**: permite visualizar el importe total del envío generado por la suma de los valores introducidos en la tabla *Gastos<!-- Spese -->*.