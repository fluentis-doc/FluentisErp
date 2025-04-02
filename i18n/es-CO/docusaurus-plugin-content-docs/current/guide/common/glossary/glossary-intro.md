---
title: Glosario (Glossario)
sidebar_position: 5
---

En esta sección se recopilarán las definiciones de los campos más utilizados y recurrentes presentes en los diversos formularios del sistema de gestión.

Para buscar la explicación detallada de un campo, basta con posicionarse sobre el artículo relativo a la letra inicial del campo que se desea buscar.

### A

#### Año (Anno)
Este campo es un campo genérico que se encontrará dentro de muchísimos formularios donde aparecerá el año en el que se crea el documento o en el que se lleva a cabo una determinada operación; en la mayoría de los formularios es un campo que se completa automáticamente.

#### Anulada/o (Annullata/o)  
El indicador activo permite anular el documento.

#### Artículo (Articolo)
Campo genérico que se encontrará en muchos formularios donde aparecerá la clase, el código y la descripción del artículo (material) que se desea crear, visualizar, mover, comprar, producir, vender.

#### Artículo codificado (Articolo codificato)
Es un tipo de línea que identifica los artículos codificados; por artículos codificados se entienden todos aquellos artículos que están codificados en el registro y pueden ser contabilizados en contabilidad analítica y registrados en el almacén.

#### Artículo no codificado (Articolo non codificato)
Es un tipo de línea que identifica los artículos no codificados; por artículos no codificados se entienden todos aquellos artículos que son descriptivos y que pueden ser contabilizados en contabilidad analítica, pero no pueden ser movidos en el almacén.

#### Artículo omaggio (Articolo omaggio)
Es un tipo de línea que identifica los artículos de obsequio; por artículo omaggio se entiende un artículo que se gestiona como un artículo codificado y no codificado a efectos fiscales y de almacén, pero dado que es un obsequio, se contabiliza por separado en los resúmenes del DDT.

#### Artículo note (Articolo note)
Es un tipo de línea que es una simple nota, no afecta la contabilidad y el almacén; en este campo se pueden escribir notas relativas a los artículos que se desea que se registren en los documentos de venta / compra.

#### Artículo spese (Articolo spese)
Es un tipo de línea que identifica los artículos codificados o no codificados que se resumen de manera distinta en los resúmenes de los documentos; si el artículo de gasto está codificado y tiene interés fiscal, se moverá en el almacén; si no está codificado o no tiene interés fiscal, no se moverá en el almacén.

#### Auditoría (Audit trail)
Esta sección se puede encontrar en diferentes formularios y sirve para la trazabilidad de las operaciones; normalmente en esta sección se puede ver el usuario que creó un documento y/o realizó la última modificación junto con las fechas de inserción / creación y modificación.

### B

### C

#### Cambio (Cambio) {#currency-exchange}
Si la moneda de la empresa es igual a la del documento, el valor informado será 1; de lo contrario, el valor será tomado de la tabla *Tipos de cambio* o de la tabla *Tipos fijos para el EURO* que se encuentran en la ruta *Configuración > Tablas > Administración*.

#### Cargada/o (Caricata/o)
Este indicador, si está activo, indica que los artículos del DDT y/o factura de compra se han cargado en almacén mediante el procedimiento de [Carga DDT de compra en almacén](/docs/purchase/purchase-delivery-note/procedures/load-delivery-notes-on-warehouse) y [Carga de facturas de compra en almacén](/docs/purchase/purchase-invoices/procedures/purchase-invoices-load-on-warehouse). Para los procedimientos de carga de documentos, se remite a los artículos correspondientes.

#### Causale de almacén (Causale di magazzino)
Este campo hace referencia a los valores precodificados en la tabla correspondiente que se encuentra en la ruta *Inicio > Tablas > Logística*; en este campo se encontrará la causa de almacén relativa a la operación de almacén que se quiere ejecutar; en los documentos, este campo, junto con el campo **Descripción de la causa de almacén**, se reporta automáticamente si están presentes en los Parámetros MRP del registro del artículo, en la pestaña **Almacenes**.

#### CIG
Código identificativo de la licitación; con el fin de rastrear la efectiva trazabilidad de los pagos por parte de las administraciones públicas, las facturas electrónicas emitidas a las administraciones públicas deben contener el código CIG y el código CUP; este es un código alfanumérico único que identifica un determinado contrato o lote y que se encuentra en las facturas de venta y en los pedidos de venta.

#### Clase artículo (Classe articolo) {#item-class}
Este campo comprende información obligatoria del artículo; con clase se entiende la clase a la que pertenece el artículo dentro de la base de datos (ejemplos de clase: Materia prima, Semilavorado, Prodotto finito, etc.); las clases en las que se decide agrupar los artículos y las que se pueden elegir al momento de crear / duplicar un artículo son precodificadas dentro de la tabla correspondiente **Clases** que se encuentra en la ruta **Tablas > Logística**. En todos los documentos, el artículo aparecerá con su clase y descripción.

#### Código artículo (Codice articolo) {#item-code}
Este campo representa un código alfanumérico específico que codifica el artículo en base a sus características específicas; el código junto con la clase constituyen el *nombre* del artículo que debe ser único.

#### Combo box
También definido como campo "desplegable", es un campo que impone elegir una opción de una lista desplegable. Las opciones que pueden ser seleccionadas pueden ser fijas (el usuario no puede agregar nuevas opciones, típicamente porque la tabla correspondiente está reservada para las lógicas básicas del sistema) o pueden ser agregadas y/o modificadas (el usuario puede acceder a la tabla que alimenta la combo box y que generalmente tiene el mismo nombre; para comodidad, en lugar de buscar la tabla, también puede hacer clic con el botón derecho y *Abrir formulario*).

#### Commessa
Este campo se refiere a la orden de venta; lo encontramos en los documentos de venta y compra y permite conectar el documento a una orden de venta existente.

#### Commessa di produzione
Este campo se refiere a las órdenes de producción; lo encontramos en el área de producción y en los documentos relacionados con la producción, y en la factura de compra.

#### Contabilizada (Contabilizzata)
Indicador que se encuentra en la cabecera de una factura de venta y de compra y que, si está activo, indica que esa factura ha sido contabilizada a través del procedimiento de [Contabilización de las facturas de venta](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) y 'Contabilización de facturas de compra'. Para la explicación de este procedimiento, se remite a los artículos correspondientes.

#### CUP
Código único de proyecto; con el fin de asegurar la efectiva trazabilidad de los pagos por parte de las administraciones públicas, las facturas electrónicas emitidas a las administraciones públicas deben contener el código CUP y el código CIG; este código se representa como una cadena alfanumérica de 15 caracteres generada a través del sistema CUP; esta cadena permanece inalterable ya que identifica y acompaña un proyecto público desde el momento de su creación. Lo encontramos junto con el código CIG en las facturas de venta y en los pedidos de venta.

**Cómo se obtiene la cantidad alternativa**: en lo que respecta al cálculo de la cantidad expresada en la unidad de medida alternativa, esto puede hacerse dividiendo o multiplicando la cantidad de gestión por el factor de conversión según la opción elegida. Este parámetro se define y es válido para todos los artículos. El factor de conversión se establece a nivel del registro de artículos para cada unidad de medida alternativa configurada en el propio registro.

### D

#### De número....A número (Da numero....A numero)
Estos campos comunes en muchas áreas de filtrado de los diversos formularios se utilizan para poder filtrar los documentos según su número identificativo; con estos campos se establece de qué número a qué número se desean visualizar los resultados.

#### Fecha de llegada (Data arrivo)
En este campo se indica la fecha de llegada de la mercancía comprada; encontramos este campo en los documentos de compra como facturas y DDT de compra, o DDT y facturas de retorno.

#### Fecha de carga (Data carico)
En este campo se indica la fecha en que se carga en almacén la mercancía recibida; encontramos este campo en los documentos de compra como facturas y DDT de compra o DDT y facturas de retorno.

#### De fecha de inserción...A fecha de inserción (Da data inserimento...A data inserimento)
Estos campos comunes en muchas áreas de filtrado de los diversos formularios se utilizan para poder filtrar los documentos según el periodo de inserción en el sistema; con estos campos se define el periodo de búsqueda.

#### Fecha documento (Data documento)
Fecha del documento (ejemplo, factura de compra); campo presente en los documentos del ciclo activo y pasivo y en las registraciones contables. También podría estar presente (con un significado más genérico) en documentos de tipo no fiscal.

#### Fecha mercancía lista (Data merce pronta)

#### Fecha inicio / fecha fin de validez (Data inizio/data fine validità) {#validity-date}
En estos dos campos encontraremos la fecha de inicio de validez de la lista de precios (por lo tanto desde cuándo los precios de esa lista entrarán en vigor en los diversos documentos) y la fecha de fin de validez (es decir, cuándo los precios de esa lista terminan su validez y serán sustituidos por nuevos precios en una nueva lista).

#### Fecha de vencimiento (Data scadenza)
Fecha de vencimiento del pago calculada a partir de las condiciones de pago o impuesta manualmente. Este campo está presente generalmente en los documentos del ciclo activo y pasivo (pedidos, DDT, facturas, etc.). El cálculo de la fecha verifica las condiciones de pago (insertadas en la cabecera) y, en particular, la solución de pago (por ejemplo, 30 días a partir de la fecha de la factura) y les suma el valor del campo **(Fecha) de inicio** (este último también presente en el documento - abriendo el expander 'Envío'). Ver también **Vencimiento**.

#### Fecha de moneda (Data valuta) {#currency-date}
Fecha en la que se calcula el valor del cambio como relación entre la moneda de la empresa y la del proveedor / cliente, de acuerdo con la configuración de la tabla *Tipos de cambio* que se encuentra en el recorrido *Configuración > Tablas > Administración*.

#### Inicio de validez (Decorrenza (data))
Campo presente en los documentos del ciclo activo y pasivo (ejemplo, facturas). Al momento de la creación del documento, se establece automáticamente igual a la fecha del documento, pero puede luego ser modificado manualmente. Según este campo se calcula el vencimiento (o vencimientos) de pago basado en las condiciones de pago (tipo y solución) establecidas para el documento.

#### Destinatario (Destinatario) {#recipient}
En los pedidos de clientes / proveedores, en las DDT de compra / venta y en las facturas de compra / venta, este campo se completa automáticamente con el destinatario por defecto que se insertó previamente en *Registros de contactos > pestaña Datos contables > pestaña Entrega*.  
En caso de que el destinatario sea diferente del por defecto, se podrá modificar la información directamente en el campo **Destinatario** de los documentos.

#### Destinación (Destinazione) {#destination}
En los pedidos de clientes / proveedores, en las DDT de compra / venta y en las facturas de compra / venta, este campo se completa automáticamente con la destinación por defecto que se chequeó previamente en *Registros de contactos > pestaña Datos contables > pestaña Entrega*.  
En caso de que la destinación sea diferente de la predeterminada, se podrá modificar la información directamente en el campo **Destinación** de los documentos.  
La destinación de la mercancía puede *coincidir* con el Destinatario, pero también puede ser diferente en caso de que el destinatario tenga, por ejemplo, más sedes o más almacenes.

#### Divisa (Divisa) {#currency}
Las divisas se codifican en la tabla correspondiente **Divisas** que se encuentra en la ruta *Configuración > Tablas > Configuración General*. En los documentos, se propone por defecto la información ingresada en *Registros de contactos > pestaña Datos contables > pestaña Administración* para indicar la divisa por defecto para los artículos relacionados con el sujeto.

#### Documentos adjuntos (Documenti allegati)
En esta sección, presente en diferentes formularios, se visualizan los documentos que han sido adjuntados y que son relativos al formulario en el que nos encontramos.

### E

#### EDI
El sistema EDI (Intercambio Electrónico de Datos) permite el intercambio de documentos entre los sistemas de información de diferentes empresas a través de un canal dedicado y en un formato definido de manera que no requiera la intervención humana, salvo en algunos casos excepcionales; por lo tanto, permite el envío a través de este sistema de documentos tales como pedidos de clientes, facturas, listas, etc., que antes se enviaban por correo electrónico, fax o correos.

#### Expander (Expander) {#expander}
Son representados por dos pequeñas flechas y permiten visualizar (abierto ![](/img/it-it/guide/glossary/e/image01.png)) o esconder (cerrado ![](/img/it-it/guide/glossary/e/image02.png)) los datos que los contienen.

### F

#### Fatturato acquisti (Fatturato acquisti)
En este campo se propone el dato ingresado en la pestaña 'Generalidades' del registro de artículos. Se propone así el tipo de facturación de compras que se conecta a los subcuentas contables para la contabilización de las facturas de compra. Si esto no está presente, no se propone ningún dato, pero, en el momento de la contabilización de la factura, se considerará el valor insertado en el campo 'Costo / Ingreso de contrapartida predeterminada del registro de proveedor).

#### Fatturato vendite (Fatturato vendite)
En este campo se propone el dato ingresado en la pestaña 'Generalidades' del registro de artículos. Se propone así el tipo de facturación de ventas que se conecta a los subcuentas contables para la contabilización de las facturas de venta. Si esto no está presente, no se propone ningún dato, pero, en el momento de la contabilización de la factura, se considerará el valor insertado en el campo 'Costo / Ingreso de contrapartida predeterminada del registro de clientes).

#### Form (Form)
Máscara operativa del programa.

### G

#### Giorni di pagamento merce deperibile (Giorni di pagamento merce deperibile)
Está relacionado con el artículo 62; para la mercancía perecedera, la factura debe ser creada y pagada dentro de un plazo de 30/60 días según el tipo de artículo. En este caso, este control se realiza tanto en el artículo como en el tipo de pago que se inserta, de modo que no se puedan emitir facturas con fecha de inicio mayor a la indicada.

### I

#### Imballo (Imballo) {#packing}
Los tipos de embalaje se codifican en la tabla correspondiente **Embalajes** que se encuentra en la ruta *Configuración > Tablas > Logística*. Además, este dato puede ser ingresado en *Registros de contactos > pestaña Datos contables > pestaña Entrega* para indicar el embalaje por defecto para los artículos relacionados con el sujeto.  
Si este dato está *presente* en el [Registro](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), se propondrá *por defecto* en todos los *documentos* relacionados con ese sujeto.

#### Importe línea (Importo riga)
Campo que encontramos en los documentos de venta y compra, donde se informa el importe 'simple' de la línea del artículo (cantidad x precio) que no tiene en cuenta el IVA y eventuales descuentos.

#### Imponible (Imponibile)

#### IVA
Es un dato obligatorio y lo encontramos en todos los documentos de venta / compra.

### L

#### Lingua (Lingua) {#language}
Los idiomas se codifican en la tabla correspondiente **Idiomas** que se encuentra en la ruta *Configuración > Tablas > Configuración General*.  
Este dato se puede insertar en *Registros de contactos > pestaña General* y corresponde al idioma de emisión de los documentos.  
Si este dato está *presente* en el registro, se propondrá *por defecto* en todos los *documentos* relacionados con ese sujeto.

#### Listino fornitore (Listino fornitore) {#purchase-price-list}
En los documentos de compras se propone la información ingresada en *Registro de proveedores > pestaña Listas*, pero solo si existe una lista por defecto (tabla de referencia 'Listas de proveedores').

#### Listino cliente (Listino cliente) {#sales-price-list}
En los documentos de venta se propone la información ingresada en *Registro de clientes > pestaña Listas*, pero solo si existe una lista por defecto (tabla de referencia 'Listas de venta').

#### Lotti (Lotti)
En este campo se informa el código de lote del artículo, si el artículo se gestiona a través de la Gestión de lotes que se establece en el registro del artículo en la pestaña 'Lotes y S/N'.

### M

#### Magazzino (Magazzino)
En este campo, presente en diversos formularios, se informará el código de almacén que se ha elegido establecer para ese artículo específico junto con la causa de almacén según el tipo de movimiento que se va a realizar.

### N

#### Natura articolo (Natura articolo) {#item-nature}
Se utiliza en algunos procedimientos. En la combo encontramos la lista de las diversas naturalezas que podemos atribuir al artículo:
 - *Equipo / herramienta / máquina* > grupo de artículos para la parte de producción;
 - *Familia de artículos* > define el artículo para las previsiones de venta;
 - *Embalaje* > sirve para la gestión de emprendimientos de devolución, para la contabilidad (para entender cuántos embalajes tengo en casa y cuántos he dado al cliente o proveedor y, por lo tanto, entender cuántos me deben devolver);
 - *Servicios* > para la gestión de las intervenciones post venta;
 - *Préstamo de uso / instalaciones / componente de instalación* > sirven para la gestión del mantenimiento.

#### Nazione (Nazione) {#country}
Los países se codifican en la tabla correspondiente **Países** que se encuentra en la ruta *Configuración > Tablas > Configuración General*. Este dato se puede insertar en *Registros de contactos > pestaña General* y indica el país de origen del sujeto.  
Si este dato está *presente* en el registro, se propondrá *por defecto* en todos los *documentos* relacionados con ese sujeto.

#### Nomenclatura (Nomenclatura)
En este campo se selecciona a través de la ayuda, la nomenclatura (es decir, el código arancelario del artículo) útil para fines intrastat para la declaración de mercancías en importación o exportación y también para fines estadísticos para el comercio de artículos dentro de la UE.

#### Nostro / Vostro riferimento (Nostro/Vostro riferimento)

#### Note iniziali (Note iniziali) {#initial-note}
Permite seleccionar las notas que se han ingresado anteriormente en la tabla homónima que se encuentra en la ruta *Configuración > Utilidades > Gestión de notas codificadas*. Para esto, el usuario debe hacer doble clic en el campo **Nota inicial** para abrir *Ayuda de notas codificadas* y seleccionar los datos, o con el botón derecho del ratón puede abrir una ventana para especificar un texto muy largo de nota. Si el campo contiene un valor, el color de fondo del campo se cambia.

**Número de línea**: este campo se completará automáticamente al ingresar los datos en la línea, de manera progresiva.

### O

#### Operador (Operatore) {#user}
import User from './../../../import/fields/user.md'

<User />

### P

#### Pago (Pagamento)
En este campo se informa el término de pago asociado al sujeto en el registro de clientes / proveedores / agentes en la pestaña 'Datos contables' en la sección Administración.

#### Porto (Porto) {#carriage}
Los tipos de flete se codifican en la tabla correspondiente **Flete** que se encuentra en la ruta *Configuración > Tablas > Configuración General*. Además, este dato puede ser ingresado en *Registros de contactos > pestaña Datos contables > pestaña Entrega* para indicar el flete por defecto para los artículos relacionados con el sujeto.  
Si este dato está *presente* en el [Registro](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), se propondrá *por defecto* en todos los *documentos* relacionados con ese sujeto.

#### Precio con IVA (Prezzo Ivato)
En este campo se muestra el precio que incluye la tasa de IVA.

### Q

### R

#### Riepiloghi IVA (Riepiloghi IVA)
Rejilla en la que se propone el resumen del IVA del documento, por cada código IVA.

#### Rivalsa IVA (Rivalsa IVA)
Si se configura, el IVA del artículo de obsequio se considera para el total del documento.

### S

#### Scadenza (Scadenza)
Fecha de vencimiento calculada a partir de las condiciones de pago o impuesta manualmente. Este campo está presente dentro de las partidas. Ver también la Fecha de vencimiento.

#### Scaricata (Scaricata)
Este indicador, presente en los documentos de venta / compra como facturas y DDT, representa uno de los tipos de estado del documento. Si está activo, este indicador indica que el material presente en el documento ha sido descargado en el almacén.

#### Serial Number (S/N) (Serial Number (S/N))
Campo en el que se informa el código de serie específico de ese artículo, en caso de que en la definición de ese artículo en Lotes y S/N se haya optado por la gestión del artículo por número de serie.

#### Spedizione (Spedizione) {#shipment}
Los tipos de envío se codifican en la tabla correspondiente **Envíos** que se encuentra en la ruta *Configuración > Tablas > Configuración General*. Además, este dato puede ser ingresado en *Registros de contactos > pestaña Datos contables > pestaña Entrega* para indicar el envío por defecto para los artículos relacionados con el sujeto.  
Si este dato está *presente* en el [Registro](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery), se propondrá *por defecto* en todos los *documentos* relacionados con ese sujeto.

#### Estado documento (Stato documento)
El dato se refiere a la tabla de estados de documento, y está presente en documentos de venta y compra. El estado del documento se define por una serie de indicadores que son configurados dentro del documento por el usuario o automáticamente cuando se inician ciertos procedimientos (ej. contabilización, cumplimiento de pedidos, etc.); los tipos de estado pueden ser diferentes según el documento en el que se encuentren (por ejemplo, impresa, autorizada, archivada, contabilizada, confirmada, etc.). Este campo puede ser utilizado por los procedimientos de replicación del sistema de gestión instalados para la gestión de una sede con puntos de venta.

#### Estado de cumplimiento (Stato evasione)
Este campo presente en los pedidos de compra / venta y trabajo por encargo, muestra el estado de cumplimiento del documento. El pedido se considerará cumplido cuando se creen los documentos DDT o facturas, y su estado de cumplimiento cambia automáticamente de no cumplido a parcialmente cumplido (si no se han cumplido todas las líneas del pedido) o cumplido. El usuario también tiene la opción de forzar el cumplimiento de un pedido no completamente cumplido cambiando manualmente el estado del pedido a 'Cumplido forzosamente'.

#### Stampata/o (Stampata/o)
El indicador se activa cuando se inicia la impresión del documento.

### T

#### Testata (Testata)
Con este término se entiende, alternativamente:
 1. En los formularios de búsqueda, la parte superior del formulario (justo debajo de la **Ribbon bar**) donde se encuentra la zona de filtro de búsqueda (delimitada gráficamente) con los campos relacionados para afinar la búsqueda. Cuantas más informaciones se ingresen, más precisa será la búsqueda, ya que los campos interactúan entre sí.
 2. En los formularios de ingreso (por ejemplo, de documentos o de registraciones contables, etc.) la parte superior del documento (en la parte alta del formulario justo debajo de la **Ribbon bar**) que acoge los datos generales y comunes del documento (o de la registración) como número, fecha, subcuenta del cliente o proveedor a quien se destina dicho documento, etc. Esta zona está bien definida (también gráficamente) en comparación con la zona central del documento (y por lo tanto del formulario) que acoge los datos de detalle como los artículos ingresados en el documento o las líneas de detalle de una registración, etc. Para ciertos tipos de documentos, la zona de cabecera puede ocupar el espacio total del formulario y, por lo tanto, se identifica, en comparación con el detalle, mediante una **Pestaña** adecuada.

#### Número de seguimiento (Tracking number)
Este campo lo podemos encontrar en la factura de venta, en la pestaña de transporte y sirve para indicar el número de seguimiento relacionado con el envío para facilitar la trazabilidad de la mercancía durante el envío.

#### Tipo línea (Tipo riga)
El tipo de línea identifica la tipología del artículo. Pueden ser de varios tipos:

1-*Artículo codificado*: artículos codificados en el registro que cargan / descargan el almacén y pueden ser contabilizados en contabilidad analítica;  
2-*Artículo no codificado*: son artículos descriptivos que pueden ser contabilizados en contabilidad analítica, pero NO mueven el almacén;  
4-*Notas de artículo*: son notas descriptivas que se reportan en la impresión del documento; no afectan la contabilidad y el almacén;  
5-*Artículo de obsequio*: el artículo de obsequio se gestiona como un artículo codificado o no codificado para fines fiscales y de almacén, pero al ser un obsequio se contabiliza por separado en los resúmenes del documento.

### U

#### Unità di misura (Unidad de medida) {#unit-of-measurement}
A través de esta combo se selecciona la unidad de medida de gestión relativa al artículo.

#### Usuario predeterminado (Utente predefinito)
Se encuentra en el formulario de conexión a la aplicación.

#### Usuario (Utente)
ver [Operador](#user)

### V

#### V.I.E.S. (V.I.E.S.)
El VIES (Sistema de Intercambio de Información sobre el IVA) es un sistema de intercambio de información entre los países de la UE para una correcta fiscalidad. En concreto, es un sistema informatizado que permite a las empresas obtener una verificación rápida del número de IVA de sus clientes. Obviamente, sólo se podrán verificar los números de IVA de los clientes que se han inscrito en este sistema (es probable que los pequeños artesanos y comerciantes que no tienen intercambios intracomunitarios de mercancías no hayan registrado su empresa en este sistema). Desde el registro de artículos, al ingresar el P.Iva y haciendo clic en el botón Proponer datos, se puede interrogar a este sistema que verificará la validez y corrección del número de IVA del sujeto en uso. Cualquier búsqueda sin resultados puede deberse a un fallo momentáneo del sistema que se está interrogando.

### Z

#### Zona (Zona) {#zone}
Las zonas se codifican en la tabla correspondiente **Zonas** que se encuentra en la ruta *Configuración > Tablas > Configuración General*. Además, este dato puede ser ingresado en *Registros de contactos > pestaña Datos contables > pestaña Entrega* para indicar la zona de origen del sujeto.  
Si este dato está *presente* en el Registro, se propondrá *por defecto* en todos los *documentos* relacionados con ese sujeto.

#### Zonas de entrega (Zone consegna) {#delivery-zone}
Las zonas de entrega se codifican en la tabla correspondiente **Zonas de entrega** que se encuentra en la ruta *Configuración > Tablas > Configuración General*. Además, este dato puede ser ingresado en *Registros de contactos > pestaña Datos contables > pestaña Entrega* para indicar la zona de entrega de la mercancía.  
Si este dato está *presente* en el Registro, se propondrá *por defecto* en todos los *documentos* relacionados con ese sujeto.