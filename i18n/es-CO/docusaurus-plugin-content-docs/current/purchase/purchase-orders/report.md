---
title: stampe
sidebar_position: 5
---

Hay disponibles diferentes **stampe** estándar. Para visualizar una vista previa de cada impresión, es necesario configurar los filtros deseados y presionar el botón *anteprima* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento. Si es necesario proceder con la impresión en papel o guardarla en un archivo, es necesario hacer clic en el botón *stampa*.

### Confirmación del pedido de compra (Conferma Ordine di acquisto)

Esta impresión permite imprimir los pedidos como Confirmaciones de Pedido para enviar directamente al proveedor.        
La primera opción que se solicita es la elección entre la impresión *temporal* y la *definitiva*: la diferencia entre los dos tipos es que la temporal no tiene ningún efecto sobre el estado del pedido, mientras que la impresión en papel o digital realizada en definitiva lleva el documento al estado *stampato*.      
Los primeros filtros que se muestran son los relacionados con la información de encabezado de los documentos, tales como el *tipo ordine*, el *numero documento*, el *fornitore* y el *progetto*.  
En el grupo *ricerca avanzata* se pueden marcar los estados del pedido sobre los cuales realizar el filtro; por ejemplo, se pueden imprimir los pedidos cumplidos/no cumplidos, impresos, cancelados, etc.  
En el grupo *articolo* es posible filtrar, además del código del artículo, también sobre otra información relacionada con las líneas del cuerpo del documento, como el *barcode*, la *descrizione articolo*, el *fornitore preferenziale* o la *commessa di produzione*.  

Con esta impresión, cada pedido se paginará por separado, cada uno con las siguientes secciones:
- Encabezado con Logo e información empresarial
- Información del pedido (tipo, número, fecha, etc.)
- Información sobre el proveedor (número de identificación fiscal, condiciones de pago, banco, etc.)
- Detalles del pedido (código de artículo, cantidad, precio, etc.)
- Resumen del pedido (total mercancía, gastos, total impuestos, etc.)

### Etiquetas de órdenes de proveedor (Etichette da ordini fornitore)

La función de esta impresión es generar etiquetas físicas para la identificación y gestión de los productos o artículos que forman parte de un pedido.      
Con los filtros dispuestos, similares a los de la impresión anterior, es posible filtrar los documentos para realizar una búsqueda más dirigida; por ejemplo, puedo imprimir los pedidos confirmados solo desde una cierta fecha, aquellos no entregados, no cumplidos, etc.      

La impresión crea etiquetas con la siguiente información:
- Encabezado con Logo e información empresarial
- Etiqueta del artículo con código de barras, unidad de medida, cantidad y descripción del artículo
- Información sobre el proveedor y el pedido que contiene el artículo

### Lista de pedidos de proveedores (Lista Ordini Fornitori)

Con este reporte es posible imprimir un resumen detallado de los pedidos de proveedores ingresados en el sistema, en forma de lista.     
Con los filtros dispuestos (los mismos de la impresión anterior) es posible filtrar los documentos para realizar una búsqueda más dirigida; en esta impresión también es posible establecer un orden por Proveedor (default), Número o Tipo de pedido.       
En la impresión, bajo el mismo proveedor/número/tipo de pedido (según el orden elegido) se enumeran los pedidos con los siguientes datos: dividido, monto, artículo, IVA, etc.         

Cada línea del listado ocupa un artículo del pedido.        

### Cartera de pedidos por cantidad (Portafoglio Ordini a Quantità)

Esta impresión sirve para proporcionar una visión detallada y actualizada de los pedidos. Reporta una lista de los pedidos de proveedores destacando las cantidades ya entregadas y las restantes, es decir, ordenadas pero aún no entregadas; es especialmente útil para la coordinación logística, ya que permite ver de manera clara qué y cuántas unidades de productos aún deben ser entregadas.        
En el formulario inicial se muestran algunos filtros relacionados con el encabezado de los documentos a extraer, similares a los de los reports ya analizados. A estos se añade la posibilidad de realizar un *ordenamiento* por *Número*, *Artículo*, *Fecha*, *Proveedor* o *Fecha de mercancía lista*.   

El resultado es una lista de los pedidos, indicando cualquier documento de cumplimiento, si existen, y para cada artículo se indican las cantidades ordenadas, entregadas y restantes.      

### Cartera de pedidos por valor (Portafoglio Ordini a Valore)

Esta impresión proporciona un resumen de los pedidos recibidos pero no aún totalmente cumplidos, según el valor monetario de cada pedido. Este documento es particularmente útil para los departamentos de ventas, finanzas y gestión estratégica, ya que ofrece una visión clara del ingreso potencial relacionado con los pedidos en curso.      
En el formulario inicial se muestran algunos filtros relacionados con el encabezado de los documentos a extraer, similares a los de los reports ya analizados. A estos se añade la posibilidad de realizar un *ordenamiento* por *Número*, *Artículo*, *Fecha*, *Proveedor* o *Fecha de mercancía lista*.   

El resultado es una lista de los pedidos en los que, para cada artículo se indican los valores ordenados, entregados y restantes.       

### Calendario de pedidos (Scadenziario ordini)

Esta impresión proporciona una visión detallada de las fechas de vencimiento y de los plazos de entrega relacionados con los pedidos no totalmente cumplidos.      
Con los filtros dispuestos es posible filtrar los documentos para realizar una búsqueda más dirigida; también es posible establecer un orden por *Fecha de entrega* o *Proveedor*.       

En la impresión, bajo el mismo proveedor/fecha de entrega (según el orden elegido) se enumeran para cada artículo los pedidos con los siguientes datos: número, fecha de ingreso, estado de cumplimiento, cantidad restante, etc.      

Más detalles sobre este tema en los artículos: [Vista previa e impresión (Anteprima e stampa)](/docs/guide/common/operations-with-data/reports)