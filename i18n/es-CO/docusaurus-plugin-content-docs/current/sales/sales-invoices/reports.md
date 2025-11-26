---
title: Impresiones
sidebar_position: 5
ai_generated: true
---

Hay disponibles diferentes **impresiones** estándar<!-- Stampe -->. Para visualizar una vista previa de cada impresión, es necesario configurar los filtros deseados y presionar el botón *Vista previa<!-- Anteprima -->* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento. Si es necesario proceder con la impresión en papel o guardarla en un archivo, se debe hacer clic en el botón *Imprimir<!-- Stampa -->*.

## Impresión de facturas<!-- Stampa fatture -->

Esta impresión permite imprimir masivamente las facturas de venta ya ingresadas en el sistema<!-- a sistema -->, según los filtros especificados en el formulario inicial. La primera elección que se solicita es entre la impresión temporal y la definitiva: la diferencia entre los dos tipos es que la temporal no tiene ningún efecto sobre el estado de la factura, mientras que la impresión definitiva en papel o digital cambia el estado del documento a *Impresa<!-- Stampato -->*. Los primeros filtros que se muestran son los relativos a la cabecera de los documentos, como el tipo de factura, el número de documento y el cliente. En el *Búsqueda avanzada<!-- Ricerca avanzata -->* se pueden marcar los estados de la factura sobre los que aplicar el filtro y el proyecto indicado en la cabecera del documento.
En la sección *Artículo<!-- Articolo -->* es posible filtrar, además del código del artículo, sobre otras informaciones relativas a las filas del cuerpo del documento, como el código de barras, la descripción del artículo o si hay un proyecto relacionado con la línea del artículo.       
Se ofrecen dos diseños diferentes para esta impresión, seleccionables desde el combo box en la barra de herramientas. El primero se llama *factura acompañante<!-- fattura accompagnatoria -->* e incluye los datos relativos al transporte junto con los Detalles de la factura; el segundo se llama *factura de venta<!-- fattura di vendita -->* y no incluye los datos del transporte, por lo que se recomienda para facturas diferidas.     
Con esta impresión, cada factura se organiza por separado, cada una con las siguientes secciones:
- Encabezado con Logo e información de la empresa
- Información de la factura (tipo, número, fecha, etc.)
- Información del cliente (NIT, representante, etc.)
- Detalles de la factura (código de artículo, cantidad, precio, etc.)
- Resumen del remito<!-- DDT --> (total mercancía, gastos, total impuesto, etc.)        
En esta impresión se muestran, solo para las facturas EXTRA UE, las Nomenclaturas de los Artículos debajo del Código de artículo; además, en la columna de la descripción del artículo se reporta un cuadro con el Resumen de importes por nomenclatura.

## Resumen de facturación<!-- Bilancino di fatturazione -->

La impresión de resumen de facturación<!-- bilancino di fatturazione --> proporciona un resumen detallado de la facturación de la empresa, organizando las facturas de venta para facilitar el análisis y la gestión contable.      
Gracias a los filtros disponibles, es posible personalizar la impresión para incluir solo las facturas que satisfacen criterios específicos, como aquellas emitidas a partir de una cierta fecha, relacionadas con determinados artículos, etc.     
Esta impresión se divide en varias secciones para una visión profunda de los datos desde diferentes perspectivas.        
Al resaltar el debe, el haber y el total en las distintas secciones, permite tener una visión clara de los ingresos y egresos relacionados con las ventas.            
Las principales secciones son:
- Clientes: Muestra la facturación dividida por grupos de clientes. Bajo cada grupo, se listan los clientes junto con sus debe, haber y total. Al final de la sección se indica el total para el grupo.
- Cuentas de Ingreso: Presenta las facturas divididas por ingresos de venta. Solo se incluyen las facturas con ingreso de ventas especificado. Al final de la sección, se muestra el total para el ingreso de ventas.
- Pagos: Detalla la facturación dividida por tipo de pago (por ejemplo, efectivo, transferencia bancaria, tarjeta de crédito). Cada tipo de pago tiene su propio resumen de debe, haber y total, con el total de la sección indicado al final.
- Representantes: Proporciona, para cada representante, el neto de mercancía y la comisión generada. Esta sección permite evaluar el desempeño de los representantes y su impacto en la facturación.
- Gastos: Indica el debe, el haber y el total de los gastos adicionales, proporcionando una visión de los gastos asociados a las ventas.          
      
En la parte final hay un Resumen por código de IVA, donde para cada grupo de IVA se muestra la descripción, el total base imponible y el IVA.      

## Lista de facturas<!-- Lista fatture -->

Con esta impresión es posible imprimir una lista de las facturas ingresadas en el sistema<!-- a sistema -->.
Los filtros presentados son los mismos que en las impresiones anteriores, y se añade la posibilidad de seleccionar un orden para las facturas mostradas, eligiendo entre cliente, número de factura y tipo. También existe la posibilidad de elegir dos diferentes tipos de impresión: la impresión *Sintética* muestra una lista de las cabeceras de las facturas<!-- testate delle fatture -->, con la indicación de los importes totales y la división por vencimientos; la impresión *Completa* muestra el detalle de cada línea de factura, incluyendo cantidad y valor de las mismas.

## Facturación<!-- Fatturato -->

El reporte analiza la facturación de ventas producida por todos los [Tipos de factura<!-- Tipi fattura -->](/docs/configurations/tables/sales/invoices-type) con la marca *En estadística<!-- In statistica -->* activa, mostrando el valor de la facturación y el porcentaje de incidencia sobre el total de cada línea de artículo impresa.      
En el formulario inicial se muestran algunos filtros relativos a la cabecera de los documentos a extraer, similares a los ya analizados, pero existen algunas funciones propias de este reporte.
En el campo *Años para la comparación<!-- Anni per il confronto -->* es posible indicar los ejercicios que se desean comparar.  En el *Opciones<!-- Opzioni -->* hay algunas marcas que permiten mostrar ciertos datos e incluir o excluir algunos tipos de líneas de artículo en el cálculo: al seleccionar *Cantidad<!-- Quantità -->* se muestran, además del valor, las cantidades de cada línea; *Solo artículos codificados<!-- Solo articoli codificati -->* hará que la impresión tenga en cuenta solo las líneas de tipo *Artículo codificado<!-- Articolo codificato -->*; *También artículos de gastos<!-- Anche articoli spese -->* y *También artículos de obsequio<!-- Anche articoli omaggio -->* incluirán en los cálculos también las líneas de tipo gasto y/o obsequio. El combo box *Modo de ordenamiento<!-- Modalità ordinamento -->* permite elegir cómo se mostrarán los datos entre: la descripción del cliente, el código de cliente o el importe de la facturación. Finalmente, en la cuadrícula *Agrupar<!-- Raggruppa -->* es posible establecer los agrupamientos, de forma jerárquica, con los que debe mostrarse la impresión: para poblar la tabla basta seleccionar el agrupamiento deseado en la tabla *Propiedades<!-- Proprietà -->* y arrastrarlo a la tabla de los agrupamientos (en caso de que se desee vaciar la tabla de los agrupamientos, basta presionar el botón de la barra de herramientas *Eliminar agrupamientos<!-- Rimuovi raggruppamenti -->*).

## Estadísticas de ventas<!-- Statistiche di vendita -->

Esta sección permite analizar las ventas, enfocándose en los márgenes de ganancia calculados en función del costo de los productos o servicios vendidos.         
La impresión ofrece dos visualizaciones posibles de los datos, seleccionables desde el combo box en la barra de herramientas. La primera, *Márgenes sobre costo de compra de lista<!-- Margini sul costo di acquisto da listino -->*, compara el valor vendido con el costo a nivel de lista, indicando el valor del margen y el porcentaje correspondiente. La segunda, *Márgenes sobre costo de entrada de mercancía desde el remito<!-- Margini sul costo di entrata merce da DDT -->*, compara el valor vendido con el costo indicado en los movimientos de recibo de mercancía registrados en inventario<!-- magazzino -->.
En el formulario inicial se muestran algunos filtros relativos a la cabecera de los documentos a extraer, similares a los ya analizados, pero existen algunas funciones propias de este reporte.
En el *Opciones<!-- Opzioni -->* hay algunas marcas que permiten mostrar ciertos datos e incluir o excluir algunos tipos de líneas de artículo en el cálculo: al seleccionar *Cantidad<!-- Quantità -->* se muestran, además del valor, las cantidades de cada línea; *Solo artículos codificados<!-- Solo articoli codificati -->* hará que la impresión tenga en cuenta solo las líneas de tipo *Artículo codificado<!-- Articolo codificato -->*; *También artículos de gastos<!-- Anche articoli spese -->* y *También artículos de obsequio<!-- Anche articoli omaggio -->* incluirán en los cálculos también las líneas de tipo gasto y/o obsequio. El combo box *Modo de ordenamiento<!-- Modalità ordinamento -->* permite elegir cómo se mostrarán los datos entre: la descripción del cliente, el código de cliente o el importe de la facturación. Finalmente, en la cuadrícula *Agrupar<!-- Raggruppa -->* es posible establecer los agrupamientos con los que debe mostrarse la impresión: para poblar la tabla basta seleccionar el agrupamiento deseado en la tabla *Propiedades<!-- Proprietà -->* y arrastrarlo a la tabla de los agrupamientos.        

## Impresiones CONAI<!-- Stampe Conai -->

El documento de declaración CONAI (Consorzio Nazionale Imballaggi) es un formulario que las empresas italianas deben completar para declarar los datos relativos a los embalajes que colocan en el mercado. Este documento es fundamental para calcular la contribución ambiental CONAI, que es un costo que las empresas deben pagar para apoyar la recolección selectiva y el reciclaje de los embalajes.        
Gracias a los filtros disponibles, es posible personalizar la impresión para incluir solo los documentos que cumplen con criterios específicos; también es posible agrupar los resultados por Material, Cliente o Artículo.         
El documento incluye varias secciones:
- Periodo de referencia
- Datos de la empresa<!-- Dati anagrafici -->
- Peso de los embalajes
- Contribución ambiental
- Exención

Más detalles sobre este tema en los siguientes artículos: [Vista previa e impresión<!-- Anteprima e stampa -->](/docs/guide/common/operations-with-data/reports)