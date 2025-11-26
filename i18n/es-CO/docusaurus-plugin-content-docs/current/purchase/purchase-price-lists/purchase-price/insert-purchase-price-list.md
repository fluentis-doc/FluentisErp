---
title: Nuevo Lista de precios de proveedor
sidebar_position: 3
ai_generated: true
---

El formulario se abre mediante la ruta **Compras > Listas de precios de proveedor > Nueva lista de precios<!-- Acquisti > Listini Fornitore > Nuovo Listino -->**.  

El formulario está compuesto por tres partes: *Sección superior*, *Artículos* y *Detalles*.

## **1. Datos obligatorios<!-- Dati obbligatori -->**

Los campos de cabecera obligatorios para la introducción de una nueva lista de precios son:

- **Proveedor<!-- Fornitore -->** para quien se crea la lista de precios<!-- listino -->.  
- **Desde fecha de validez<!-- Da data validità -->**: por defecto se propone la fecha actual, pero puede modificarse.  
- **Divisa**: por defecto se sugiere la divisa de la empresa, pero puede modificarse.  

:::important Importante
Para que una lista de precios<!-- listino --> sea válida para un proveedor<!-- fornitore -->, es necesario asociarla en la ficha del contacto, pestaña *Listas de precios<!-- Listini -->*. Consulta la [documentación](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicada.
:::

### Campos opcionales

- **Hasta fecha de validez<!-- A data validità -->**: se utiliza en caso de que se desee definir una campaña promocional o dar una fecha de vencimiento a la lista de precios<!-- listino -->. Puede ser insertada masivamente en varias listas de precios<!-- listini --> desde el filtro de [Búsqueda de listas de precios<!-- Ricerca listini -->](/docs/purchase/purchase-price-lists/purchase-price/search-purchase-price-list) mediante el botón *Cerrar<!-- Chiudi -->*.
- **Descuento de lista desde ficha<!-- Sconto listino da anagrafica -->**: si en la [ficha del proveedor<!-- anagrafica fornitore -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) se ha asociado una estructura de descuento adicional, esta se mostrará en este campo de solo lectura.  
- **Notas**: para ingresar posibles notas asociadas a la lista de precios<!-- listino -->.   

Después de introducir los datos obligatorios de cabecera, es necesario pulsar el botón *Guardar<!-- Salva -->* para poder proceder con la inserción de artículos en la cuadrícula.


## **2. Artículos**

En esta sección se indicarán los artículos y eventuales descuentos asociados a esta lista de precios<!-- listino -->. Las columnas presentes en la cuadrícula son:

- **Clase/Artículo/Descripción**: contiene el código del artículo que se debe incluir en la lista de precios<!-- listino -->; para insertar un nuevo artículo en la cuadrícula basta posicionarse en la fila para completar los datos o utilizar el botón *Nuevo artículo* presente en la barra de herramientas.  
- **Código/Descripción Variante**: se utiliza si además del código de artículo, la variante distingue un artículo de otro.
- **Código/Descripción Artículo de proveedor<!-- Articolo fornitore -->**: se utiliza si el código de artículo del proveedor<!-- fornitore --> es diferente al código del artículo de la empresa.
- **Código/Descripción Variante de artículo de proveedor<!-- Variante articolo fornitore -->**: se utiliza si además del código, la variante distingue un artículo de proveedor<!-- fornitore --> de otro.
- **Unidad de medida**: puede ser la unidad de gestión del artículo<!-- articolo --> o cualquiera de sus unidades alternativas.
- **Marca del artículo** si está especificada.
- **Cantidad**: es la cantidad de referencia del precio y por defecto se sugiere igual a 1; si es diferente a 1, cuando se deba calcular el precio se divide por la cantidad de la lista de precios<!-- listino -->.
- **Precio** referido a la divisa de la lista de precios<!-- listino -->; esta columna es visible si la lista de precios<!-- listino --> no tiene *Precio con IVA incluido*, de lo contrario solo es visible el precio con IVA incluido.
- **Valor adicional** y **Porcentaje adicional**: se utilizan cuando se crean listas de ventas a partir de listas de proveedores<!-- fornitori -->; al precio del proveedor<!-- fornitore --> se le añade este valor.

### 2.1 Detalles

En esta sección, para cada artículo de la lista de precios<!-- listino -->, es posible ingresar diferentes tipos de descuento. En el **Tipo de tramo<!-- Tipo scaglione -->** es posible ingresar el tipo de descuento por defecto que se aplicará a la lista de precios<!-- listino -->. Al tipo de tramo insertado aquí, tiene prioridad el que eventualmente esté ingresado en la ficha.
En las pestañas de la derecha es posible ingresar los distintos descuentos para la lista de precios<!-- listino -->; de hecho, es posible que un mismo artículo de la lista de precios<!-- listino --> tenga varios descuentos asociados, pero será posible elegir el tramo a utilizar directamente en el documento.

A continuación se explican los tipos de descuento que se pueden ingresar.

### 2.2 Descuentos<!-- Sconti -->

Estos descuentos son fijos y se reportan en los documentos independientemente de la cantidad u otras variables indicadas en el pedido: el ejemplo típico son los descuentos comerciales.       
Los campos presentes en esta cuadrícula son:
- **Tipo de descuento/Descripción**: en este campo se debe seleccionar el tipo de descuento entre los codificados.        
- **Prioridad**: este valor se toma de la configuración ingresada en la tabla [Tipos de descuento<!-- Tipi sconto -->](/docs/configurations/tables/general-settings/discount-types) e indica la prioridad para la obtención del descuento.       
- **En cascada/Base imponible<!-- Cascata/Imponibile -->**: este dato también se toma de la configuración ingresada en la tabla [Tipos de descuento<!-- Tipi sconto -->](/docs/configurations/tables/general-settings/discount-types); si el descuento es en *Cascada*, se calcula sobre el imponible reducido ya con los descuentos previamente calculados. Si es sobre *Base imponible*, se calcula sobre el total imponible.         
- **Porcentaje**: configurar el porcentaje de descuento a aplicar.       

### 2.3 Descuentos por cantidad<!-- Sconti a quantità -->

Este tipo de descuento permite tener diferentes porcentajes de descuento según la cantidad comprada. Las columnas presentes son:      
- **Descuento<!-- Sconto -->**: en este campo se debe seleccionar el [Tipo de descuento<!-- Tipo sconto -->](/docs/configurations/tables/general-settings/discount-types) entre los codificados.         
- **Cantidad**: configurar la cantidad a partir de la cual se activará el descuento.          
- **Porcentaje**: ingresar el porcentaje de descuento al alcanzar la cantidad indicada.      

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

En el ejemplo mostrado, si se compran 2 unidades, se aplicará un 7% de descuento, con 3 unidades un 10% de descuento y así sucesivamente.

### 2.4 Descuentos por valor<!-- Sconti a Valore -->

En este tipo de descuento, el descuento se activa cuando se alcanza un determinado importe para la línea del documento. Las columnas son:     
- **Descuento<!-- Sconto -->**: en este campo se debe seleccionar el [Tipo de descuento<!-- Tipo sconto -->](/docs/configurations/tables/general-settings/discount-types) entre los codificados.            
- **Valor<!-- Valore -->**: configurar un valor que, al ser superado, activa el descuento.
- **Porcentaje**: ingresar el porcentaje de descuento a aplicar al alcanzar el valor.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

En el ejemplo mostrado, si para la línea del artículo el valor es inferior a 100 euros, no habrá descuentos. Con un valor entre 100 y 200 el descuento será del 2%. Si el valor está entre 200 y 300 se aplicará el 4%. Si el valor supera los 300 euros se aplicará un descuento del 6%.

### 2.5 Precio por cantidad

En este caso, al alcanzar cierta cantidad, el precio unitario cambia. Las columnas presentes son:      
- **Cantidad**: configurar un valor que, al ser superado, activa el precio "personalizado".      
- **Precio unitario**: ingresar el precio unitario correspondiente a la cantidad pedida.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

En el ejemplo mostrado, si la cantidad por línea es inferior a 100 euros, el precio será el de la lista de precios<!-- listino -->. Con una cantidad entre 100 y 120, el precio unitario será 10. Con una cantidad entre 100 y 120, el precio unitario será 9 y así sucesivamente.

### 2.6 Notas

El usuario puede definir notas con la fecha de validez de las mismas.

### 2.7 Extra data

Se muestra la lista de **Extra data** vinculados al artículo, con la posibilidad de añadir nuevos extra data útiles solo para el documento en cuestión. La casilla *Para imprimir* permite elegir cuáles extra data imprimir.

### 2.8 Documentos adjuntos

Se visualiza el detalle de un posible **Documento adjunto** (nombre, tipo de documento, notas, nuestra/vuestra referencia). Para instrucciones sobre cómo adjuntar un documento, se remite al artículo [Adjuntar documentos](/docs/guide/common/operations-with-data/attach-documents).