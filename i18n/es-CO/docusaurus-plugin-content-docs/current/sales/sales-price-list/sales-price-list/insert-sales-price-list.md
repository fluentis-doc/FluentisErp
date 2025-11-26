---
title: Nueva lista de precios de venta
sidebar_position: 2
ai_generated: true
---

Para crear una Nueva Lista de precios de venta<!-- Nuovo Listino di vendita --> es necesario hacer clic en *Nuevo<!-- Nuovo -->* desde la pantalla de Búsqueda de listas de precios<!-- Ricerca listini -->.
El formulario se compone de tres partes: Sección superior, Artículos y Detalles.

## **1. Datos obligatorios<!-- Dati obbligatori -->**

Los campos de cabecera obligatorios para la inserción de una nueva lista de precios<!-- listino --> son:
- **Lista de precios<!-- Listino -->**: una lista de precios<!-- listino --> puede ser *Genérica<!-- Generico -->* (potencialmente válida para todos los clientes) o *Personalizada<!-- Personalizzato -->* (válida para un cliente específico); es necesario seleccionar la opción apropiada para determinar la lista de precios<!-- listino --> a crear.
- **Tipo de lista de precios<!-- Tipo listino -->**: este campo está activo solo si la lista es genérica y contiene el [Tipo de lista de precios<!-- Tipo listino -->](/docs/configurations/tables/sales/sales-price-lists).
- **Cliente**: este campo está activo solo si la lista de precios<!-- listino --> es personalizada y contiene el cliente para el cual se crea la lista de precios<!-- listino -->. En este modo, también se activa el campo Contacto, que permite elegir una de las personas de referencia ingresadas en la ficha del cliente; aunque este campo no influye en los documentos, es útil para las restricciones de visualización, permitiendo limitar el acceso solo a los documentos personales.

:::important[Importante]
Para hacer que una lista de precios<!-- listino --> sea válida para un cliente, es necesario ingresarla en la ficha del cliente. Consulte la [documentación](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/price-list) dedicada.
:::

- **Moneda<!-- Divisa -->**: contiene la moneda a utilizar; por defecto se propone la moneda de la compañía.
- **Fecha de inicio de validez<!-- Data inizio validità -->**: contiene la fecha a partir de la cual la lista de precios<!-- listino --> será considerada válida; se propondrá la fecha actual.

#### Campos no obligatorios
- **Precio con IVA<!-- Prezzo ivato -->**: si está activo, este indicador señala que la lista de precios<!-- listino --> será creada con precios con IVA incluido, por lo que en sus artículos no estará presente la columna Precio, sino solo la columna Precio con IVA, que reportará directamente la suma entre precio e IVA; este indicador se propone si está presente en la tabla [Tipo de lista de precios<!-- Tipo listino -->](/docs/configurations/tables/sales/sales-price-lists) pero es modificable. Para una gestión más flexible, en los [Parámetros de Listas de Precios de Venta<!-- Parametri Listini di Vendita -->](/docs/configurations/parameters/sales/price-list-parameters), es posible forzar la visualización tanto del precio como del precio con IVA a través del indicador mostrar precio y precio con IVA, independientemente del ajuste del tipo de lista de precios<!-- tipo listino -->.
- **Fecha de fin de validez<!-- Data fine validità -->**: si la lista de precios<!-- listino --> no debe ser válida después de cierta fecha, la fecha se debe ingresar en este campo.
- **Lista mínima<!-- Listino minimo -->**: este indicador informativo señala que la lista de precios<!-- listino --> es de precios mínimos de venta tentativa.
- **Configuración de búsquedas<!-- Configurazione ricerche -->**: esta configuración tiene dos posibles funciones: mostrar algunos Extra Data a nivel de lista de precios<!-- listino -->, o dirigir cierta información (por ejemplo el tipo de pago) para diferentes tipos de operaciones.
Al final hay un **Filtro de artículos<!-- Filtro articoli -->** que permite buscar rápidamente artículos en la lista de precios<!-- listino -->; se utiliza en caso de listas de precios<!-- listini --> muy extensas.

## **2. Artículos<!-- Articoli -->**

En esta sección se indicarán los artículos y posibles descuentos asociados a esta lista de precios<!-- listino -->. Las columnas presentes en la cuadrícula son:
- **Clase/Artículo/Descripción**: contiene el código del artículo a incluir en la lista de precios<!-- listino -->; para ingresar un nuevo artículo en la cuadrícula bastará con posicionarse en la fila para completar los distintos datos o bien utilizar el botón *Nuevo artículo<!-- Nuovo articolo -->* presente en la barra de herramientas.
- **Código/Descripción de variante**: en las columnas dedicadas a la variante podemos asociar las variantes del artículo y a cada una su respectivo precio de venta, que se propondrá en los documentos; solo gestionando las listas de precios<!-- listini --> es posible gestionar la propuesta del precio por variante.
- **Unidad de medida**: puede ser la unidad administrativa del artículo o una de sus unidades de medida alternativas; al crear los documentos, en base a la unidad de medida especificada, se propondrá una lista de precios<!-- listino --> válida para esa unidad de medida.
- **Marca**: si se ha especificado.
- **Cantidad**: propuesta igual a 1, es la cantidad de referencia del precio; si es diferente de 1, al calcular el precio se dividirá por la cantidad de la lista de precios<!-- listino -->.
- **Precio** referido a la moneda de la lista de precios<!-- listino -->, esta columna es visible si la lista no es de Precio con IVA<!-- Prezzo ivato -->.
- **IVA**: este campo se recupera de los datos principales del cliente; si no está configurado en el cliente, será necesario llenar este campo con el código de IVA correspondiente.
- **Precio con IVA<!-- Prezzo Ivato -->**: el sistema calcula este precio como la suma entre el precio y el porcentaje de IVA ingresado.
- **Rango de precios<!-- Fascia di prezzo -->**: esta configuración se utiliza para seleccionar la lista de precios<!-- listini cliente --> en base a los rangos de precio que se pueden configurar en los extra data relativos a los artículos; es posible que, para el mismo artículo, existan discriminantes por las cuales el precio de lista<!-- listino --> sea diferente: basta pensar en las prendas de vestir para las que al cambiar de talla también cambia el precio de venta.

### 2.1 Detalles

En esta sección, para cada artículo de la lista de precios<!-- listino -->, es posible ingresar diferentes tipos de descuento.
En el **Tipo de tramo<!-- Tipo scaglione -->** es posible ingresar el tipo de descuento por defecto a aplicar a la lista de precios<!-- listino -->. El tipo de tramo<!-- scaglione --> ingresado aquí tiene prioridad sobre el eventualmente ingresado en la ficha principal.
En las pestañas siguientes se pueden ingresar los diferentes descuentos para la lista de precios<!-- listino -->; de hecho, es posible que un mismo artículo de la lista tenga varios descuentos asociados, pero será posible elegir el tramo<!-- scaglione --> a utilizar directamente en el documento.

A continuación, se detallan los tipos de descuento que se pueden ingresar.

#### 2.1.1 Descuentos<!-- Sconti -->

Estos descuentos son fijos y se reflejan en los documentos independientemente de la cantidad u otras variables especificadas en el pedido: el ejemplo típico son los descuentos comerciales.
Los campos presentes en esta cuadrícula son:
- **Prioridad**: este valor se toma de la configuración ingresada en la tabla [Tipos de descuento<!-- Tipi sconto -->](/docs/configurations/tables/general-settings/discount-types) y señala la prioridad para encontrar el descuento.
- **Tipo de descuento/Descripción**: en este campo debe seleccionarse el tipo de descuento entre los codificados.
- **Valor**: establecer el porcentaje de descuento a aplicar.
- **Cascada/Base imponible<!-- Cascata/Imponibile -->**: este dato también se toma de la configuración ingresada en la tabla [Tipos de descuento<!-- Tipi sconto -->](/docs/configurations/tables/general-settings/discount-types); si el descuento es en Cascada<!-- Cascata -->, se calcula sobre la base imponible reducida por los descuentos ya calculados, si es en Base imponible<!-- Imponibile --> se calcula sobre la base imponible.

#### 2.1.2 Descuentos por cantidad<!-- Sconti a quantità -->

Este tipo de descuento permite tener diferentes porcentajes de descuento según la cantidad vendida. Las columnas presentes son:
- **Tipo**: en este campo debe seleccionarse el tipo de descuento entre los codificados.
- **Cantidad**: especificar la cantidad para la cual se activará el descuento.
- **Porcentaje<!-- Percentuale -->**: ingresar el porcentaje de descuento al alcanzar la cantidad indicada.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

En el ejemplo indicado, si se venden 2 unidades, tendremos un 7% de descuento, 3 unidades un 10% de descuento y así sucesivamente.

#### 2.1.3 Descuentos por valor<!-- Sconti a Valore -->

En este tipo el descuento se aplica cuando se alcanza un importe determinado por línea de documento. Las columnas presentes son:
- **Tipo**: en este campo debe seleccionarse el tipo de descuento entre los codificados.
- **Valor**: ingresar un valor a partir del cual se activa el descuento.
- **Porcentaje**: ingresar el porcentaje de descuento a aplicar al alcanzar ese valor.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

En el ejemplo indicado, si por línea el valor es inferior a 100 euros, no habrá descuento. Con un valor entre 100 y 200 se obtendrá un 2% de descuento. Si el valor está entre 200 y 300 se aplicará un 4%. Si el valor supera los 300 euros, se aplicará un descuento del 6%.

#### 2.1.4 Precio por cantidad<!-- Prezzo per quantità -->

En este caso, al alcanzar cierta cantidad, el precio unitario cambia. Las columnas presentes son:
- **Cantidad**: establecer un valor a partir del cual se activa el precio "personalizado".
- **Precio unitario**: ingresar el precio unitario para la cantidad ordenada.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image11.png)

En el ejemplo indicado, si por línea la cantidad es inferior a 100 unidades, el precio será el de la lista de precios<!-- listino -->. Con una cantidad entre 100 y 120, el precio unitario será 10. Con una cantidad entre 100 y 120, el precio unitario será 9 y así sucesivamente.

#### 2.1.5 Notas<!-- Note -->

A modo informativo es posible ingresar notas relacionadas con un tipo particular de descuento.

#### 2.1.6 Destinos<!-- Destinazioni -->

Con este parámetro es posible decidir si para un destino del cliente, el precio unitario debe ser diferente. Además, es posible gestionar este tipo especial de promoción para una fecha específica. Las columnas presentes son:
- **Destino**: debe ser una dirección de los contactos vinculada al cliente de facturación.
- **Fecha DE/A<!-- Data DA/A -->**: ingresar un rango de fechas para las cuales proponer un precio diferente de la lista solo para el destino indicado.
- **Precio**: ingresar el precio para el destino.

## **3. Extra data**

import DocItemExtraData from './../../../import/sections/doc-item-extradata.md'

<DocItemExtraData />

## **4. Documentos adjuntos<!-- Documenti allegati -->**

import DocAttachDocument from './../../../import/sections/doc-attach-document.md'

<DocAttachDocument />