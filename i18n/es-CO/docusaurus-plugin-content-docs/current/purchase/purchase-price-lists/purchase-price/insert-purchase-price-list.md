---
title: Nuevo Listado de Proveedores (Nuovo Listino fornitore)
sidebar_position: 3
---

El formulario se abre a través de la ruta **Compras > Listados de Proveedores > Nuevo Listado**.

El formulario se compone de tres partes: *Sección superior*, *Artículos* y *Detalles*.

## **1. Datos obligatorios**

Los campos obligatorios para la inserción de un nuevo listado son:

- **fornitore** para el cual se crea el listado.  
- **da data validità**: se propone automáticamente la fecha actual, pero puede ser modificada.  
- **divisa**: se propone automáticamente la divisa de la empresa, pero puede ser modificada.  

:::important Importante
Para que un listado sea válido para un proveedor, es necesario ingresarlo en el registro de contacto, en la pestaña *listini*. Consulte la [documentación](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicada.
:::

### Campos opcionales

- **a data validità**: se utiliza en caso de que se desee definir una campaña promocional o dar una fecha de caducidad al listado. Puede ser ingresada masivamente en múltiples listados desde el filtro de [Búsqueda de listados (Ricerca listini)](/docs/purchase/purchase-price-lists/purchase-price/search-purchase-price-list) mediante el botón *chiudi*.
- **sconto listino da anagrafica**: si en el [registro del proveedor (anagrafica fornitore)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) se ha asociado una estructura de descuentos adicional, esta será mostrada en este campo de solo lectura.  
- **note**: para ingresar posibles notas asociadas al listado.   

Después de haber insertado los datos obligatorios de encabezado, es necesario presionar el botón *salva* para poder proceder con la inserción de los artículos en la cuadrícula.

## **2. Artículos**

En esta sección se indicarán los artículos y eventuales descuentos asociados a este listado. Las columnas presentes en la cuadrícula son:

- **Clase/Artículo/Descripción (Classe/Articolo/Descrizione)**: contiene el código del artículo que se incluirá en el listado; para insertar un nuevo artículo en la cuadrícula, basta posicionarse en la línea para completar los diversos datos o utilizar el botón *nuovo articolo* presente en la barra de ribbon.  
- **Código/Descripción Variante (Codice/Descrizione Variante)**: es necesario si además del código del artículo, la variante distingue un artículo de otro.
- **Código/Descripción Artículo proveedor (Codice/Descrizione Articolo fornitore)**: es necesario si el código del artículo del proveedor es diferente al código del artículo de la empresa.
- **Código/Descripción Variante artículo proveedor (Codice/Descrizione Variante articolo fornitore)**: es necesario si además del código del artículo, la variante distingue un artículo proveedor de otro.
- **unità di misura**: puede ser la unidad de medida de gestión del artículo o una de sus unidades de medida alternativas.
- **Marca del artículo (Marca dell'articolo)** si está especificada.
- **quantità**: es la cantidad de referencia del precio y se propone igual a 1; si es diferente de 1, cuando se debe calcular el precio, se divide por la cantidad del listado.
- **prezzo** referido a la divisa del listado; esta columna es visible si el listado no está a *prezzo ivato*, de lo contrario, solo es visible el precio con IVA.
- **valore aggiuntivo** y **percentuale aggiuntiva**: se utilizan cuando se crean listados de venta a partir de listados de proveedores; a el precio proveedor se le añade este valor.

### 2.1 Detalles

En esta sección, para cada artículo del listado, es posible ingresar diferentes tipos de descuentos. En el **tipo scaglione** es posible ingresar el tipo de descuento predeterminado que se aplicará al listado. El tipo de escalón ingresado aquí tiene prioridad sobre el que eventualmente se ingrese en el registro.
En las pestañas de la derecha, es posible ingresar los diversos descuentos para el listado; de hecho, es posible que un mismo artículo de listado tenga diferentes descuentos asociados, pero será posible elegir el escalón a utilizar directamente en el documento.

A continuación se explican los tipos de descuento que se pueden ingresar.

### 2.2 Descuentos

Estos descuentos son fijos y se reportan en los documentos independientemente de la cantidad o de otras variables explícitas en el pedido: el ejemplo típico son los descuentos comerciales.       
Los campos presentes en esta cuadrícula son:
- **Tipo descuento/Descripción (Tipo sconto/Descrizione)**: en este campo se debe seleccionar el tipo de descuento entre los codificados.        
- **priorità**: este valor se toma de las configuraciones ingresadas en la tabla [Tipos de descuento (Tipi sconto)](/docs/configurations/tables/general-settings/discount-types) e indica la prioridad para la obtención del descuento.       
- **cascata/imponibile**: también este dato se retoma de las configuraciones ingresadas en la tabla [Tipos de descuento (Tipi sconto)](/docs/configurations/tables/general-settings/discount-types); si el descuento es a *cascata*, se calcula sobre el imponible descontando los descuentos ya calculados, si en cambio es a *imponibile*, se calcula sobre el imponible.         
- **percentuale**: establecer el porcentaje de descuento a aplicar.       

### 2.3 Descuentos por cantidad

Este tipo de descuento permite tener diferentes porcentajes de descuento según la cantidad comprada. Las columnas presentes son:      
- **sconto**: en este campo se debe seleccionar el [Tipo de descuento (Tipo sconto)](/docs/configurations/tables/general-settings/discount-types) entre los codificados.         
- **quantità**: establecer la cantidad para la cual se activará el descuento.          
- **percentuale**: ingresar el porcentaje de descuento al alcanzar la cantidad indicada.      

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

En el ejemplo mostrado, si se compran 2 unidades, tendremos un descuento del 7%, con 3 unidades un descuento del 10% y así sucesivamente.

### 2.4 Descuentos por Valor

En este tipo de descuento, este se activa al alcanzar un importe determinado por línea de documento. Las columnas presentes son:     
- **sconto**: en este campo se debe seleccionar el [Tipo de descuento (Tipo sconto)](/docs/configurations/tables/general-settings/discount-types) entre los codificados.            
- **valore**: establecer un valor superado el cual se activa el descuento.
- **percentuale**: ingresar el porcentaje de descuento a aplicar al alcanzar el valor.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

En el ejemplo mostrado, si para la línea del artículo el valor es inferior a 100 euros, no tendremos descuentos. Con un valor comprendido entre 100 y 200, tendremos el 2% de descuento. Si el valor está entre 200 y 300, se aplicará el 4%. Si el valor supera los 300 euros, se aplicará un descuento del 6%.

### 2.5 Precio por cantidad

En este caso, al alcanzar una cierta cantidad, el precio unitario cambia. Las columnas presentes son:      
- **quantità**: establecer un valor superado el cual se activa el "precio personalizado".      
- **prezzo unitario**: ingresar el precio unitario para la cantidad ordenada.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

En el ejemplo mostrado, si para la línea la cantidad es inferior a 100 euros, el precio será el del listado. Con una cantidad comprendida entre 100 y 120, tendremos un precio unitario de 10. Con una cantidad comprendida entre 120 y 140, tendremos un precio unitario de 9 y así sucesivamente.

### 2.6 Notas

El usuario puede definir notas con la fecha de validez de las mismas.

### 2.7 Datos extra

Se mostrará la lista de **extra data** asociados al artículo, con la posibilidad de agregar nuevos datos extra útiles solo para el documento en cuestión. El indicador *da stampare* permite elegir qué datos extra imprimir.

### 2.8 Documentos adjuntos

Se visualizará el detalle de un eventual **Documento adjunto (Documento allegato)** (nombre, tipo de documento, notas, referencia ns/vs). Para las instrucciones relacionadas con cómo adjuntar un documento, se remite al artículo [Adjuntar documentos (Allega documenti)](/docs/guide/common/operations-with-data/attach-documents).