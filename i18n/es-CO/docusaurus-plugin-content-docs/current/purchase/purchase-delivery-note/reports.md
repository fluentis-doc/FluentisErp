---
title: stampe
sidebar_position: 6
---

Están disponibles diversas **stampe** estándar. Para visualizar una vista previa de cada impresión, es necesario configurar los filtros deseados y presionar el botón *anteprima* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento. Si es necesario proceder a la impresión en papel o guardar en archivo, se debe hacer clic en el botón *stampa*.

### Impresión DDT de compra (Stampa DDT di acquisto)

Esta impresión sirve para imprimir los DDT de compra ya ingresados en el sistema, según los filtros especificados en el formulario inicial.  
Los primeros filtros que se muestran son los relacionados con la información de encabezado de los documentos, tales como el *tipo documento*, el *numero documento*, el *fornitore* y el *proyecto (progeto)*.  
En el *cuadro de búsqueda avanzada (groupbox Ricerca avanzata)* se pueden marcar los estados del DDT sobre los que realizar el filtro.  
En el *cuadro de artículo (groupbox Articolo)*, además de filtrar por el código del artículo, también se pueden utilizar otras informaciones relacionadas con las líneas del cuerpo del documento, como el *barcode*, la *descrizione articolo* o si hay un proyecto asociado a la línea del artículo.  

Con esta impresión, cada DDT se paginará por separado, cada uno con las siguientes secciones:
- Encabezado con logo e información de la empresa
- Información sobre el DDT (tipo, número, fecha, etc.)
- Información sobre el proveedor (NIT, agente, etc.)
- Detalles del DDT (código de artículo, cantidad, precio, etc.)
- Resumen del DDT (total mercancía, gastos, total impuesto, etc.)


### Lista DDT (Lista DDT)

Con este informe es posible imprimir un listado de los DDT ingresados en el sistema. Los filtros presentados son los mismos que en la impresión anterior, a los que se añade la posibilidad de seleccionar un *ordinamento* de las facturas mostradas a elegir entre *fornitore*, *numero fattura* y *tipo fattura*.  

En la impresión, bajo el mismo *proveedor (fornitore) / número (numero) / tipo de factura (tipologia fattura)* (según el orden seleccionado), se enumeran los DDT con los siguientes datos: divisa, monto, artículo, cantidad, precio, IVA, etc.  
Cada línea de la lista corresponde a un artículo del DDT.