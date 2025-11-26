---
title: Inserción de listas de precios de cuenta de terceros
sidebar_position: 1
ai_generated: true
---

Desde esta aplicación será posible ingresar las listas de precios de cuenta de terceros<!-- conto lavoro -->.

## Sección superior

En la sección superior es necesario ingresar el **Proveedor**.
En el formulario de ingreso se proponen automáticamente los valores de los campos **Desde fecha de validez** (se propone la fecha actual para el inicio de validez) y la [Divisa](/docs/guide/common/glossary/glossary-intro#currency) (se propone la divisa de la empresa, pero pueden ser modificados).
Se muestra un eventual **Descuento de lista desde maestro de datos** y es posible ingresar **Notas**.

En la sección superior también está presente el filtro para buscar los Artículos dentro de la lista de precios<!-- listino -->.

## Artículos

En este formulario se indicarán los artículos<!-- articoli --> y eventuales descuentos asociados a esta lista de precios<!-- listino -->.

**Clase/Artículo/Descripción**: indicar el código del artículo<!-- articolo --> a incluir en la lista de precios<!-- listino -->. La descripción se recuperará automáticamente gracias al código del artículo<!-- articolo -->. Para ingresar un nuevo artículo en la cuadrícula, simplemente posicionarse en la fila para completar los distintos datos o utilizar el botón *Nuevo artículo* presente en la barra de herramientas.

**Código/Descripción de variante**: se utiliza si, además del código de artículo<!-- articolo -->, la variante también distingue un artículo de otro.

**Código de fase**: es posible asociar al artículo<!-- articolo --> una eventual [Fase externa](/docs/configurations/tables/production/standard-phases) que será realizada por el tercero. De esta forma se puede definir un precio para cada fase del mismo artículo<!-- articolo -->; los campos **Fase** y **Subfase** se completarán automáticamente;

**Unidad de medida**: puede ser la utilizada en la gestión del artículo<!-- articolo --> o alguna de sus unidades de medida alternativas.

**Cantidad**: se propone igual a 1, es la cantidad de referencia para el precio; si es diferente de 1, al calcular el precio este se dividirá por la cantidad de la lista de precios<!-- listino -->.

**Precio** referente a la divisa de la lista de precios<!-- listino -->.

**IVA**: este campo se recupera automáticamente. Si en el cliente no está configurado, será necesario completar este campo con el código de IVA.

**Precio con IVA**: el sistema calcula este precio a partir del precio y del tipo de IVA ingresado.

**Altura/Anchura/Profundidad**: datos informativos relativos a la lista de precios<!-- listino -->. El sistema no utiliza estos campos para eventuales procesos.

Para cada artículo<!-- articolo --> de la lista de precios<!-- listino --> es posible ingresar algunos tipos de descuento, como se explica a continuación.

Se indica el **Tipo de tramo** en el campo con el mismo nombre, mientras que en los campos siguientes se mostrarán los datos relativos a los artículos<!-- articoli --> incluidos en la lista de precios<!-- listino -->.

Estos tramos se indican en la tabla *Tipos de Descuentos*.

En la parte derecha del formulario encontramos una cuadrícula en la que se indican todos los posibles descuentos para este artículo<!-- articolo -->. Estos solo se completan seleccionando un artículo<!-- articolo --> presente en la lista de precios<!-- listino -->.

### Descuentos<!-- Sconti -->

Estos descuentos son descuentos fijos que se reflejan en los documentos.

A continuación, la forma correcta de completar esta cuadrícula:

**N**: completado por el sistema, indica el orden en el que se consideran los descuentos.

**Tipo de descuento/Descripción**: seleccionar el tipo de descuento de entre los presentes. De forma estándar se contemplan 3 tipos diferentes: *Descuento comercial*, *Descuento por cantidad* y *Descuento por valor*.

**Valor**: establecer el porcentaje de descuento a aplicar.

**Prioridad**: esta prioridad se toma de las configuraciones realizadas en la tabla [Tipos de descuentos](/docs/configurations/tables/general-settings/discount-types).

**Casc./Imp.**: se completa a partir del valor ingresado en la tabla Tipos de descuentos.

### Descuentos por cantidad<!-- Sconti a quantità -->

Este tipo de descuento puede tener diferentes porcentajes según la cantidad.

**Tipo**: establecer el tipo de descuento que debe ser *Descuento por cantidad*. Esta denominación aparecerá posteriormente en la impresión.

**Cantidad**: establecer la cantidad a partir de la cual se activará el descuento.

**Porcentaje**: ingresar el porcentaje de descuento al alcanzar la cantidad indicada

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Descuentos por valor<!-- Sconti a Valore -->

En este tipo el descuento se aplica cuando se alcanza un determinado importe por línea.

**Tipo**: establecer el tipo de descuento que debe ser *Descuento por valor*.

**Valor**: establecer un valor a partir del cual se aplique el descuento.

**Porcentaje**: ingresar el porcentaje de descuento al alcanzar el valor.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Precio por cantidad

En este caso, al alcanzar cierta cantidad, el precio unitario cambia.

**Cantidad**: establecer un valor a partir del cual se aplique el precio "personalizado".

**Precio unitario**: ingresar el precio unitario para la cantidad ordenada.

Estos descuentos se sumarán a otros descuentos existentes.

### Notas

A nivel informativo es posible ingresar notas vinculadas a un tipo particular de descuentos.

### Documentos adjuntos

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />