:::important ¿Para qué sirve?<!-- A cosa serve -->
Elaboración para la generación automática de los datos de ventas y, si se solicita, de las Previsiones de venta<!-- Previsioni di vendita --> basadas en datos históricos provenientes de los documentos del área de Ventas; en particular de los documentos: Pedidos de cliente<!-- Ordini clienti -->, DDT y Facturas de venta<!-- Fatture di vendita -->.
:::

Podemos ejecutar la Recuperación de datos<!-- Ripresa dati --> desde el menú área Controlling > Previsiones de venta mensuales<!-- Previsioni di vendita mensili -->.

La gestión se compone de un formulario de filtro para buscar las Recuperaciones de datos<!-- Riprese dati --> previamente realizadas y, mediante el botón **Nuevo**, para poder crear nuevas, y de un formulario de **Gestión de recuperación de datos<!-- Gestione ripresa dati -->** donde se puede indicar de qué tipos de documentos de venta<!-- documenti di vendita -->, y para qué periodo, se recuperarán los datos que servirán como base de partida para las Previsiones de venta<!-- Previsioni di vendita --> para una [Versión de Previsión de venta<!-- Versione di Previsione di vendita -->](/docs/configurations/tables/controlling/forecast/pv-versions) predefinida.

A continuación, detallamos cada una de las informaciones presentes:

- **Versión<!-- Versione -->**: es un dato obligatorio y sirve para almacenar los datos recuperados en esa versión específica;
- **Agrupar por variante<!-- Raggruppa per variante -->**: permite o no considerar el detalle por Variante de artículo;
- **Fecha de última recuperación<!-- Data ultima ripresa -->**: se sugiere por defecto la fecha actual y se actualiza al presionar el botón **Recuperación de datos<!-- Ripresa dati -->** con la fecha de la elaboración;
- **Considerar fecha prevista de entrega<!-- Considera data prevista consegna -->**: si se indica, para la recuperación de solo Pedidos de cliente<!-- Ordini cliente -->, el mes de competencia será el mes de la Fecha prevista de entrega y no el de la Fecha de mercancía lista;
- **Generación de Previsiones<!-- Generazione Previsioni -->**: si se indica, la **Recuperación de datos<!-- Ripresa dati -->** generará también las Previsiones de venta<!-- Previsioni di vendita --> por Artículo, Variante y Versión;
- **Facturas de venta<!-- Fatture di vendita -->**: en la primera lista podemos indicar de qué Tipos de factura recuperar la información y para qué periodo (*Desde fecha, Hasta fecha*); el Tipo de factura seleccionado propondrá automáticamente si es un Tipo de factura de devolución o no;
- **DDT de venta<!-- DDT di vendita -->**: en la segunda lista podemos indicar de qué Tipos de DDT recuperar la información y para qué periodo (*Desde fecha, Hasta fecha*); el Tipo de DDT seleccionado propondrá automáticamente si es un Tipo de DDT de devolución o no;
- **Pedidos de cliente<!-- Ordini cliente -->**: en la tercera lista podemos indicar de qué Tipos de pedido recuperar la información y para qué periodo (*Desde fecha, Hasta fecha*).

Para los periodos de los tipos facturas y DDT de venta<!-- tipi fatture e DDT di vendita -->, al insertar un nuevo tipo de documento, se proponen: *Desde fecha* igual al primero de enero del año en curso y *Hasta fecha* igual a hoy; para el periodo de los tipos de pedido de cliente<!-- tipi ordine cliente -->, se proponen: *Desde fecha* igual al primero de enero del año en curso y *Hasta fecha* igual al 31 de diciembre del año en curso, todos editables por parte del operador.

Los botones presentes son:

- **Guardar<!-- Salva -->**: se almacenan las informaciones ingresadas en el formulario para la recuperación de datos<!-- ripresa dei dati -->;
- **Insertar un nuevo tipo de factura**, **Eliminar los tipos de factura seleccionados**, **Insertar un nuevo tipo de DDT**, **Eliminar los tipos de DDT seleccionados**, **Insertar un nuevo tipo de pedido**, **Eliminar los tipos de pedido seleccionados**: son todos botones para posicionarse en la fila de inserción de un nuevo tipo de documento o eliminar los tipos de documento seleccionados;
- **Recuperación de datos<!-- Ripresa dati -->**: mediante esta elaboración, todas las filas de documento que satisfagan los tipos de documento y los periodos solicitados (fecha de factura para las facturas, fecha de DDT para los DDT y fecha de mercancía lista o fecha prevista de entrega para los pedidos) generarán las previsiones para la versión solicitada.