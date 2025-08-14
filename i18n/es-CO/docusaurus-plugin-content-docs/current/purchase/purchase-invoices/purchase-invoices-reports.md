---
title: Informes
sidebar_position: 6
---

Están disponibles diferentes **Informes** estándar. Para visualizar una vista previa de cada impresión, es necesario establecer los filtros deseados y presionar el botón *Vista previa* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento. Si es necesario proceder con la impresión en papel o guardarla en un archivo, se debe hacer clic en el botón *stampa*.

### Impresión de Facturas de Compra

Este informe sirve para imprimir masivamente las facturas de compra ya ingresadas en el sistema, según los filtros especificados en el formulario inicial. La primera opción que se solicita es la elección entre la impresión *Temporal (Temporanea)* y la impresión *definitiva*: la diferencia entre los dos tipos es que la temporal no tiene ningún efecto en el estado de la factura, mientras que la impresión en papel o digital realizada en definitiva lleva el documento al estado *controllato*.  
Los primeros filtros que se nos muestran son los relativos a la información del encabezado de los documentos, como el *tipo fattura*, el *numero documento*, el *fornitore* y el *progetto*.  
En el grupo de búsqueda *ricerca avanzata* se pueden seleccionar los estados de la factura sobre los cuales realizar el filtrado.  
En el grupo *articolo* se puede filtrar, además del código del artículo, también sobre otra información relativa a las líneas del cuerpo del documento, como el *bar code*, la *descrizione articolo* o si hay un proyecto vinculado a la línea del artículo.

Con esta impresión, cada factura se paginará por separado, cada una con las siguientes secciones:
- Encabezado con logo e información de la empresa
- Información de la factura (tipo, número, fecha, etc.)
- Información sobre el proveedor (número de identificación fiscal, condiciones de pago, etc.)
- Detalles de la factura (código de artículo, cantidad, precio, etc.)
- Resumen de la factura (total mercancía, gastos, total impuesto, etc.)

### Lista de Facturas de Compra (Lista Fatture di Acquisto)

Con esta impresión se puede imprimir una lista de las facturas ingresadas en el sistema.  
Los filtros presentados son los mismos que en la impresión anterior, a los que se suma la posibilidad de seleccionar un *ordinamento* de las facturas mostradas, a elegir entre *fornitore*, *numero fattura* y *tipo fattura*.

La impresión muestra el detalle de las líneas individuales de las facturas, con indicaciones relativas también a las cantidades y al valor de los diversos artículos contenidos en la factura.

### Facturación de Compras (Fatturato acquisti)

El informe analiza la facturación de compras producida por todos los [Tipos de factura (Tipi fattura)](/docs/configurations/tables/purchase/purchase-invoices-type/) con el indicador *in statistica* activo, mostrando el valor de la facturación y el porcentaje de incidencia sobre el total de cada línea de artículo impresa.  
En el formulario inicial se muestran algunos filtros relativos al encabezado de los documentos a extraer, análogos a los de los informes ya analizados, pero hay algunas posibilidades propias de este informe.  
En el grupo *opzioni* hay algunos indicadores con los cuales es posible mostrar ciertos datos e incluir o excluir ciertos tipos de líneas de artículo en el cálculo: al marcar la opción *quantità* se mostrarán en la impresión, además del valor, también las cantidades de las líneas individuales; *solo articoli codificati* hará que la impresión considere solo las líneas de tipo Artículo codificado, mientras que *anche articoli spese* incluirá en los cálculos también las líneas de tipo gasto.  
La caja combinada *modalità ordinamento* permite elegir el orden en que se mostrarán los datos entre: la *descrizione* del proveedor, el *codice* del proveedor o el importe de la *fatturato*.  
Finalmente, en la cuadrícula *raggruppa* es posible establecer los agrupamientos, de forma escalonada, con los que deberá mostrarse la impresión. Para llenar la tabla, basta con seleccionar el agrupamiento deseado en la tabla *proprietà* y arrastrarlo a la tabla de agrupamientos. En caso de querer vaciar la tabla de agrupamientos, simplemente presione el botón de la barra de herramientas *rimuovi raggruppamenti*.

### stampe Conai (Stampe Conai)

El documento de declaración **CONAI** (Consorcio Nacional de Envases) es un formulario que las empresas italianas deben completar para declarar los datos relativos a los envases que introducen en el mercado. Este documento es fundamental para calcular la contribución ambiental CONAI, que es un costo que las empresas deben pagar para apoyar la recolección selectiva y el reciclaje de los envases.  

Esta impresión presenta a su vez los filtros ya presentados con las otras impresiones, más otros nuevos: además, es posible filtrar por *Tipo de material*, *Tipo de socio Conai*, *Estado de la factura electrónica*; también se pueden agrupar los resultados por *Material*, *Proveedor* o *Artículo*.  

El documento comprende varias secciones:
- Período de referencia
- Datos de identificación
- Peso de los envases
- Contribución ambiental
- Exención

Más detalles sobre este tema en los artículos: [Vista previa e impresión (Anteprima e stampa)](/docs/guide/common/operations-with-data/reports)