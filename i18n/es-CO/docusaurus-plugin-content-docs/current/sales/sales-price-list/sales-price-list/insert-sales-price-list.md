---
title: Nuevo catálogo de ventas (Nuovo listino di vendita)
sidebar_position: 2
---

Para crear un Nuevo Catálogo de ventas es necesario hacer clic en *nuovo* desde la máscara de Búsqueda de catálogos.  
El formulario se compone de tres partes: Sección superior, Artículos y Detalles. 

## **1. Datos obligatorios (Dati obbligatori)**

Los campos de encabezado obligatorios para la inserción de un nuevo catálogo son:  
- **listino**: un catálogo puede ser *generico* (potencialmente válido para todos los clientes) o *Personalizado (Personalizzato)* (válido para un cliente específico); es necesario seleccionar la opción apropiada para determinar el catálogo a crear.  
- **tipo listino**: este campo está activo solo si el catálogo es genérico y contiene el [Tipo de catálogo (Tipo listino)](/docs/configurations/tables/sales/sales-price-lists).  
- **cliente**: este campo está activo solo si el catálogo es personalizado y contiene el cliente para el cual se crea el catálogo. En esta modalidad se activa también el campo Contacto, que permite elegir a una de las personas de referencia registradas en el anáfora de clientes; aunque este campo no influye en los documentos, es útil para las restricciones de visualización, permitiendo limitar el acceso a solo documentos personales.  

:::important[Importante]
Para hacer que un catálogo sea válido para un cliente, es necesario ingresar el cliente en el anáfora de clientes. Consulte la [documentación](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicada. 
:::

- **divisa**: contiene la divisa que se utilizará; se propone por defecto la divisa de la empresa.  
- **data inizio validità**: contiene la fecha a partir de la cual el catálogo será considerado válido; se propone la fecha actual.  

#### Campos no obligatorios  
- **prezzo ivato**: si está activo, este indicador indica que el catálogo será creado con precio con IVA, por lo que en sus artículos no habrá columna Precio, sino solo la columna Precio con IVA que mostrará directamente la suma entre Precio e IVA; este indicador se propone si está presente en la tabla [Tipo de catálogo (Tipo listino)](/docs/configurations/tables/sales/sales-price-lists) pero es modificable. Para una gestión más flexible, en los [Parámetros de Catálogos de Venta (Parametri Listini di Vendita)](/docs/configurations/parameters/sales/price-list-parameters), es posible forzar la visualización tanto del precio como del precio con IVA a través del indicador visualiza precio y precio con IVA, independientemente de la configuración del tipo de catálogo.  
- **data fine validità**: si el catálogo ya no debe ser válido después de una cierta fecha, la fecha debe ingresarse en este campo.  
- **listino minimo**: este indicador informativo indica que el catálogo tiene precios mínimos de intento de venta.  
- **configurazione ricerche**: esta configuración tiene dos posibles funciones: mostrar algunos Datos Extras a nivel de catálogo, o controlar cierta información (por ejemplo, el tipo de pago) para diferentes tipos de operaciones.  
Finalmente, hay un **filtro articoli** que permite buscar rápidamente los artículos en el catálogo; se usa en caso de catálogos muy extensos. 

## **articoli**

En esta sección se indicarán los artículos y los posibles descuentos asociados a este catálogo. Las columnas presentes en la cuadrícula son:  
- **Clase/Artículo/Descripción (Classe/Articolo/Descrizione)**: contiene el código del artículo a incluir en el catálogo; para insertar un nuevo artículo en la cuadrícula, basta posicionarse en la fila para completar los varios datos o utilizar el botón *nuovo articolo* presente en la barra de herramientas.  
- **Código/Descripción variante (Codice/Descrizione variante)**: en las columnas dedicadas a la variante, se pueden asociar las variantes del artículo y a cada una el precio de venta correspondiente, que se propone en los documentos; solo gestionando los catálogos es posible gestionar la propuesta de precio por variante.  
- **unità di misura**: puede ser la de gestión del artículo o una de sus unidades de medida alternativas; al crear los documentos, según la unidad de medida especificada, se propondrá un catálogo válido para esa unidad de medida.  
- **marca**: si está especificada.  
- **quantità**: propuesta igual a 1, es la cantidad de referencia del precio; si es diferente de 1, cuando se calcule el precio, se dividirá por la cantidad del catálogo.  
- **prezzo**: referenciado a la divisa del catálogo, esta columna es visible si el catálogo no está a Precio con IVA.  
- **iva**: este campo se recupera del anáfora de clientes; si no está configurado en el cliente, será necesario completar este campo con el código de IVA.  
- **prezzo ivato**: el sistema calcula este precio como la suma entre el precio y la tasa del código de IVA ingresado.  
- **fascia di prezzo**: esta configuración se utiliza para seleccionar los catálogos de clientes en base a los rangos de precios que se pueden establecer en los datos extras relacionados con los artículos; es posible, para un mismo artículo, tener discriminantes por las cuales el precio de catálogo resulte diferente: pensemos en la ropa, donde al cambiar la talla también varía el precio de venta. 

### 2.1 Detalles (Dettagli)

En esta sección, para cada artículo del catálogo, es posible insertar diferentes tipos de descuento.  
En el **tipo scaglione** es posible ingresar el tipo de descuento por defecto que se aplicará al catálogo. El tipo de escalón ingresado aquí tiene prioridad sobre el que eventualmente se ingrese en el anáfora.  
En las pestañas inferiores es posible ingresar los distintos descuentos para el catálogo; de hecho, es posible que un mismo artículo de catálogo tenga diferentes descuentos asociados, pero será posible elegir el escalón a utilizar directamente en el documento.  

A continuación se explican los tipos de descuento que se pueden insertar.  

#### 2.1.1 Descuentos (Sconti)

Estos descuentos son fijos y se reflejan en los documentos independientemente de la cantidad u otras variables especificadas en el pedido: el ejemplo típico son los descuentos comerciales.  
Los campos presentes en esta cuadrícula son:  
- **priorità**: este valor se toma de las configuraciones ingresadas en la tabla [Tipos de descuento (Tipi sconto)](/docs/configurations/tables/general-settings/discount-types) y señala la prioridad para la obtención del descuento.  
- **Tipo de descuento/Descripción (Tipo sconto/Descrizione)**: en este campo se debe seleccionar el tipo de descuento entre los codificados.  
- **valore**: configurar el porcentaje de descuento a aplicar.  
- **cascata/imponibile**: también este dato se toma de las configuraciones ingresadas en la tabla [Tipos de descuento (Tipi sconto)](/docs/configurations/tables/general-settings/discount-types); si el descuento es en Cascada, se calcula sobre el imponible descontando los descuentos ya calculados, si en cambio es a Imponible, se calcula sobre el imponible.         

#### 2.1.2 Descuentos por cantidad (Sconti a quantità)

Este tipo de descuento permite tener diferentes porcentajes de descuento según la cantidad vendida. Las columnas presentes son:  
- **tipo**: en este campo se debe seleccionar el tipo de descuento entre los codificados.  
- **quantità**: establecer la cantidad para la cual se activará el descuento.  
- **percentuale**: ingresar el porcentaje de descuento al alcanzar la cantidad indicada.  

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

En el ejemplo mostrado, si se venden 2 unidades, tendremos un descuento del 7%, 3 unidades un descuento del 10%, y así sucesivamente.

#### 2.1.3 Descuentos por valor (Sconti a Valore)

En este tipo de descuento, se activa al alcanzar un determinado monto por línea de documento. Las columnas presentes son:  
- **tipo**: en este campo se debe seleccionar el tipo de descuento entre los codificados.  
- **valore**: establecer un valor a partir del cual se activa el descuento.  
- **percentuale**: ingresar el porcentaje de descuento a aplicar al alcanzar el valor.  

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

En el ejemplo mostrado, si por línea el valor es inferior a 100 euros, no habrá descuentos. Con un valor entre 100 y 200 tendremos un 2% de descuento. Si el valor está entre 200 y 300 se aplicará un 4%. Si el valor supera los 300 euros se aplicará un descuento del 6%.

#### 2.1.4 Precio por cantidad (Prezzo per quantità)

En este caso, al alcanzar una cierta cantidad, el precio unitario cambia. Las columnas presentes son:  
- **quantità**: establecer un valor a partir del cual se activa el precio "personalizado".  
- **prezzo unitario**: ingresar el precio unitario para la cantidad ordenada.  

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

En el ejemplo mostrado, si por línea la cantidad es inferior a 100 euros, el precio será el del catálogo. Con una cantidad entre 100 y 120 tendremos un precio unitario de 10. Con una cantidad entre 120 y 140, el precio unitario será de 9, y así sucesivamente.

#### 2.1.5 Notas (Note)

A nivel informativo, es posible insertar notas relacionadas con un tipo particular de descuentos.

#### 2.1.6 Destinaciones (Destinazioni)

Con este parámetro es posible decidir si para una destinación del cliente, el precio unitario debe ser diferente. Además, se puede gestionar este tipo particular de promoción para una fecha específica. Las columnas presentes son:  
- **destinazione**: debe ser una dirección del anáfora de contactos vinculada al cliente de facturación.  
- **Fecha De/A (Data DA/A)**: ingresar un rango de fechas para las cuales proponer un precio diferente al catálogo solo para la destinación indicada.  
- **prezzo**: ingresar el precio para la destinación.

## **extra data**

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## **documenti allegati**

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />