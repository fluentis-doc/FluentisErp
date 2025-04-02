---
title: stampe
sidebar_position: 5
---

Están disponibles diferentes **stampe** estándar. Para visualizar una vista previa de cada impresión, es necesario establecer los filtros deseados y presionar el botón *anteprima* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento. Si es necesario proceder con la impresión en papel o guardarla en archivo, en cambio, se debe hacer clic en el botón *stampa*.

## Impresión de facturas (Stampa fatture)

Esta impresión se utiliza para imprimir masivamente las facturas de venta ya ingresadas en el sistema, según los filtros especificados en el formulario inicial. La primera elección que se solicita es entre la impresión temporal y la definitiva: la diferencia entre las dos tipologías es que la temporal no tiene ningún efecto sobre el estado de la factura, mientras que la impresión en papel o digital realizada de manera definitiva lleva al documento al estado *stampato*. Los primeros filtros que se muestran son los relacionados con la información de encabezado de los documentos, como el tipo de factura, el número de documento y el cliente. En el grupo *ricerca avanzata* se pueden marcar los estados de la factura sobre los cuales realizar el filtro y el proyecto indicado en el encabezado del documento.  
En el grupo *articolo* es posible filtrar, además del código del artículo, también sobre otras informaciones relacionadas con las líneas del cuerpo del documento, tales como el código de barras, la descripción del artículo o si existe un proyecto vinculado a la línea del artículo.  
Se ofrecen dos diseños diferentes para esta impresión, seleccionables desde la caja combinada de la barra de herramientas. El primero se llama *fattura accompagnatoria* e incluye también los datos relativos al transporte junto con los Detalles de la factura; el segundo se llama *fattura di vendita* y no incluye los datos sobre el transporte, por lo que se recomienda para las facturas diferidas.  
Con esta impresión, cada factura se organiza por separado, cada una con las siguientes secciones:  
- Encabezado con Logo e información de la empresa  
- Información sobre la factura (tipo, número, fecha, etc.)  
- Información sobre el cliente (número de identificación fiscal, agente, etc.)  
- Detalles de la factura (código del artículo, cantidad, precio, etc.)  
- Resumen del DDT (total de mercancía, gastos, total impuesto, etc.)  
En esta impresión se imprimen, solo para las facturas EXTRA UE, las Nomenclaturas de los Artículos bajo el Código artículo; además, en la columna de la descripción del artículo se incluye un cuadro con el Resumen de los importes por nomenclatura.

## Balanceo de facturación (Bilancino di fatturazione)

La impresión de balanceo de facturación proporciona un resumen detallado de la facturación empresarial, organizando las facturas de venta de manera que facilite el análisis y la gestión contable.  
Gracias a los filtros disponibles, es posible personalizar la impresión para incluir solo las facturas que cumplan criterios específicos, como aquellas emitidas a partir de una cierta fecha, las relativas a ciertos artículos, etc.  
Esta impresión se divide en diferentes secciones para una visión más profunda de los datos, desde distintos aspectos.  
Evidenciando dar, haber y total en las diversas secciones, permite tener una visión clara de los ingresos y los gastos relacionados con las ventas.  
Las principales secciones son:  
- Clientes: Muestra la facturación dividida por grupos de clientes. Bajo cada grupo, se enumeran los clientes con su respectivo dar, haber y total. Al final de la sección, se indica el total para el grupo.  
- Cuentas de Ingreso: Reporta las facturas divididas por facturación de ventas. Solo se incluyen las facturas con facturación de ventas especificada. Al final de la sección, hay un total para la facturación de ventas.  
- Pagos: Detalla la facturación dividida por tipo de pago (por ejemplo, efectivo, transferencia, tarjeta de crédito). Cada tipo de pago tiene su propio resumen de dar, haber y total, con el total de la sección reportado al final.  
- Agentes: Proporciona, para cada agente, el neto de mercancía y la comisión acumulada. Esta sección permite evaluar el desempeño de los agentes y su impacto en la facturación.  
- Gastos: Reporta el dar, el haber y el total de los gastos accesorios, proporcionando una visión de los gastos asociados a las ventas.  

En la parte final hay un Resumen por código de IVA, donde para cada grupo de IVA se indica la descripción, el total imponible y el IVA.

## Lista de facturas (Lista fatture)

Con esta impresión es posible imprimir una lista de las facturas ingresadas en el sistema.  
Los filtros presentados son los mismos que en las impresiones anteriores, a los cuales se agrega la posibilidad de seleccionar un orden de las facturas mostradas a elección entre cliente, número de factura y tipología. También hay posibilidad de seleccionar dos tipos diferentes de impresión: la impresión *sintetica* muestra una lista de los encabezados de las facturas, con la indicación de los importes totales y la división por vencimientos; la impresión *completa* muestra, en cambio, el detalle de cada línea de las facturas, con indicaciones relativas también a las cantidades y al valor de las mismas.

## Facturación (Fatturato)

El informe analiza la facturación de ventas producida por todos los [Tipos de factura (Tipi fattura)](/docs/configurations/tables/sales/invoices-type) con el indicador *in statistica* activo, mostrando el valor de la facturación y el porcentaje de incidencia sobre el total de cada línea de artículo impresa.  
En el formulario inicial se muestran algunos filtros relacionados con el encabezado de los documentos a extraer, análogos a los de los informes ya analizados, pero hay algunas posibilidades propias de este informe.  
En el campo *Años para la comparación (Anni per il confronto)* es posible indicar los ejercicios para los cuales se desea realizar una comparación. En el grupo *opzioni* hay algunos indicadores con los cuales es posible mostrar algunos datos e incluir o excluir ciertos tipos de líneas de artículo en el cálculo: marcando la opción *quantità* se mostrarán, además del valor, también las cantidades de las líneas individuales; *solo articoli codificati* hará que la impresión tome en cuenta solo las líneas del tipo *articolo codificato*; *anche articoli spese* y *anche articoli omaggio* incluirán en los conteos también las líneas de tipo gasto y/o obsequio. La caja combinada *modalità ordinamento* permite elegir el orden en que se mostrarán los datos entre: la descripción del cliente, el código del cliente o el importe de la facturación. Finalmente, en la cuadrícula *raggruppa* es posible establecer los agrupamientos, en escala, con los que se deberá mostrar la impresión: para poblar la tabla, basta con seleccionar el agrupamiento deseado en la tabla *proprietà* y arrastrarlo a la tabla de agrupamientos (en caso de que se quiera vaciar la tabla de agrupamientos, basta con presionar el botón de la barra de herramientas *rimuovi raggruppamenti*).

## Estadísticas de ventas (Statistiche di vendita)

Esta sección permite analizar las ventas enfocándose en los márgenes de beneficio calculados sobre el costo de los productos o servicios vendidos.  
La impresión prevé dos posibles visualizaciones de los datos, seleccionables desde la caja combinada en la barra de herramientas. La primera visualización, *margini sul costo di acquisto da listino*, realiza una comparación entre el valor vendido y su costo a nivel de lista, con la indicación del valor del margen y su porcentaje correspondiente. La segunda visualización, *margini sul costo di entrata merce da ddt*, muestra en cambio la comparación entre el valor vendido y el costo indicado en los movimientos de recepción de mercancías registrados en el almacén.  
En el formulario inicial se muestran algunos filtros relacionados con el encabezado de los documentos a extraer, análogos a los de los informes ya analizados, pero hay algunas posibilidades propias de este informe.  
En el grupo *opzioni* hay algunos indicadores con los cuales es posible mostrar algunos datos e incluir o excluir ciertos tipos de líneas de artículo en el cálculo: marcando la opción *quantità* se mostrarán, además del valor, también las cantidades de las líneas individuales; *solo articoli codificati* hará que la impresión tome en cuenta solo las líneas de tipo *articolo codificato*; *anche articoli spese* y *anche articoli omaggio* incluirán en los conteos también las líneas de tipo gasto y/o obsequio. La caja combinada *modalità ordinamento* permite elegir el orden en que se mostrarán los datos entre: la descripción del cliente, el código del cliente o el importe de la facturación. Finalmente, en la cuadrícula *raggruppa* es posible establecer los agrupamientos, en escala, que se deberán mostrar en la impresión: para poblar la tabla, basta con seleccionar el agrupamiento deseado en la tabla *proprietà* y arrastrarlo a la tabla de agrupamientos.

## stampe CONAI (Stampe Conai)

El documento de declaración CONAI (Consorcio Nacional de Envases) es un formulario que las empresas italianas deben completar para declarar los datos relacionados con los envases que introducen en el mercado. Este documento es fundamental para calcular la contribución ambiental CONAI, que es un costo que las empresas deben pagar para apoyar la recolección selectiva y el reciclaje de los envases.  
Gracias a los filtros disponibles, es posible personalizar la impresión para incluir solo los documentos que cumplen criterios específicos; también se puede agrupar los resultados por Material, Cliente o Artículo.  
El documento incluye varias secciones:  
- Período de referencia  
- Datos de identificación  
- Peso de los envases  
- Contribución ambiental  
- Exención  

Más detalles sobre este tema en los artículos: [Vista previa e impresión (Anteprima e stampa)](/docs/guide/common/operations-with-data/reports)