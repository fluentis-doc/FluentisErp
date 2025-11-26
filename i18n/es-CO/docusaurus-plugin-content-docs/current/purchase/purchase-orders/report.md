---
title: Impresiones
sidebar_position: 5
ai_generated: true
---

Se encuentran disponibles varias **Impresiones<!-- Stampe -->** estándar. Para visualizar una vista previa de cada impresión, es necesario configurar los filtros deseados y presionar el botón *Vista previa<!-- Anteprima -->* en la barra de herramientas. Esta operación mostrará la impresión en pantalla sin modificar el estado del documento<!-- documento -->. Si se requiere proceder con la impresión en papel o guardarla en archivo, hay que hacer clic en el botón *Imprimir<!-- Stampa -->*.

### Confirmación de orden de compra<!-- Conferma Ordine di acquisto -->

Esta impresión permite imprimir las Órdenes<!-- Ordini --> como Confirmaciones de Orden<!-- Conferme d'Ordine --> para enviar directamente al proveedor<!-- fornitore -->.          
La primera elección que se solicita es entre impresión *temporal* y *definitiva*: la diferencia entre ambas es que la temporal no tiene ningún efecto sobre el estado de la orden, mientras que la impresión definitiva en papel o digital cambia el estado del documento<!-- documento --> a *Impreso<!-- Stampato -->*.     
Los primeros filtros que se muestran son los relativos a la información de cabecera de los documentos<!-- documenti -->, como el *tipo de orden<!-- tipo ordine -->*, el *número de documento<!-- numero documento -->*, el *proveedor<!-- fornitore -->* y el *proyecto<!-- progetto -->*.   
En el grupo *Búsqueda avanzada<!-- Ricerca avanzata -->* se pueden marcar los estados de la orden sobre los que filtrar; por ejemplo, se pueden imprimir las órdenes completadas/no completadas<!-- evasi/non evasi -->, impresas<!-- stampati -->, anuladas<!-- annullati -->, etc.   
En el grupo *Artículo<!-- Articolo -->* es posible filtrar, además del código del artículo, otros datos relativos a las filas del cuerpo del documento<!-- documento -->, como el *código de barras<!-- barcode -->*, la *descripción del artículo<!-- descrizione articolo -->*, el *proveedor preferente<!-- fornitore preferenziale -->* o el *proyecto de producción<!-- commessa di produzione -->*.    

Con esta impresión, cada orden se organiza por separado, cada una con las siguientes secciones:
- Cabecera con Logo e información de la empresa
- Información de la orden (tipo, número, fecha, etc.)
- Información del proveedor (NIT, condiciones de pago, banco, etc.)
- Detalles de la orden (código del artículo, cantidad, precio, etc.)
- Resumen de la orden (total de mercancía, gastos, total impuestos, etc.)

### Etiquetas de órdenes de proveedor<!-- Etichette da ordini fornitore -->

La función de esta impresión es la de generar etiquetas físicas para la identificación y gestión de los productos<!-- prodotti --> o artículos<!-- articoli --> que conforman una orden<!-- ordine -->.      
Con los filtros disponibles, semejantes a los de la impresión anterior, es posible filtrar los documentos<!-- documenti --> para realizar una búsqueda más específica; por ejemplo, se pueden imprimir solamente las órdenes confirmadas desde cierta fecha, las no entregadas, no completadas<!-- non evasi -->, etc.       

La impresión crea etiquetas con la siguiente información:
- Cabecera con Logo e información de la empresa
- Etiqueta del artículo con código de barras, unidad de medida, cantidad y descripción
- Información del proveedor y de la orden que contiene el artículo

### Lista de órdenes de proveedores<!-- Lista Ordini Fornitori -->

Con este informe es posible imprimir un resumen detallado de las órdenes de proveedor<!-- ordini fornitore --> registradas en el sistema, en forma de lista.     
Con los filtros disponibles (los mismos que la impresión anterior), es posible filtrar los documentos<!-- documenti --> para una búsqueda más específica; en esta impresión también es posible ordenar por Proveedor (por defecto), Número o Tipo de orden.       
En la impresión, bajo el mismo proveedor/número/tipo de orden (según el ordenamiento elegido) se listan las órdenes con los siguientes datos: moneda, importe, artículo, IVA, etc.         

Cada fila del listado corresponde a un artículo de la orden<!-- ordine -->.        

### Cartera de órdenes por cantidad<!-- Portafoglio Ordini a Quantità -->

Esta impresión sirve para proporcionar una visión detallada y actualizada de las órdenes. Incluye una lista de las órdenes de proveedor<!-- ordini fornitore --> evidenciando las cantidades ya entregadas y las que quedan por entregar, es decir, ordenadas pero aún no suministradas; es particularmente útil para la coordinación logística<!-- logistica -->, ya que permite ver claramente qué y cuántas unidades de productos<!-- prodotti --> quedan por entregar.       
En el formulario inicial se muestran algunos filtros relativos a la cabecera de los documentos<!-- documenti --> a extraer, similares a los ya analizados en otros reportes. A estos se suma la posibilidad de realizar un *ordenamiento* por *Número*, *Artículo*, *Fecha*, *Proveedor* o *Fecha de mercancía lista*.   

El resultado es una lista de órdenes<!-- ordini -->, indicando eventuales documentos<!-- documenti --> de cumplimiento, si existen, y para cada artículo las cantidades ordenadas, entregadas y pendientes.      

### Cartera de órdenes por valor<!-- Portafoglio Ordini a Valore -->

Esta impresión proporciona un resumen de las órdenes recibidas pero aún no totalmente entregadas, de acuerdo al valor monetario de cada orden<!-- ordine -->. Este documento<!-- documento --> es particularmente útil para los departamentos de ventas, finanzas y gestión estratégica, ya que ofrece una visión clara de la facturación potencial vinculada a las órdenes en curso.      
En el formulario inicial se muestran algunos filtros relativos a la cabecera de los documentos<!-- documenti --> a extraer, similares a los ya analizados en otros informes. A estos se suma la posibilidad de realizar un *ordenamiento* por *Número*, *Artículo*, *Fecha*, *Proveedor* o *Fecha de mercancía lista*.   

El resultado es un listado de órdenes<!-- ordini --> donde, para cada artículo, se indican los valores ordenados, entregados y pendientes.       

### Calendario de vencimientos de órdenes<!-- Scadenziario ordini -->

Esta impresión proporciona un panorama detallado de las fechas de vencimiento y los plazos de entrega relativos a las órdenes aún no completamente cumplidas.      
Con los filtros disponibles es posible filtrar los documentos<!-- documenti --> para realizar una búsqueda más específica; también es posible ordenar por *Fecha de entrega* o *Proveedor*.       

En la impresión, bajo el mismo proveedor/fecha de entrega (según el ordenamiento elegido) se listan, para cada artículo, las órdenes con los siguientes datos: número, fecha de inserción, estado de cumplimiento, cantidad pendiente, etc.      

Más detalles sobre este tema en los artículos: [Vista previa e impresión<!-- Anteprima e stampa -->](/docs/guide/common/operations-with-data/reports)