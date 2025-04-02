---
title: Inserción de Listas de Trabajo (Inserimento Listini di Conto lavoro)
sidebar_position: 1
---

Desde esta aplicación será posible ingresar las listas de trabajo. 

## Sección superior

En la sección superior es necesario ingresar el **fornitore**.  
En el formulario de ingreso se proponen automáticamente los valores de los campos **da data validità** (se sugiere la fecha actual para el inicio de validez) y la [Moneda (Divisa)](/docs/guide/common/glossary/glossary-intro#currency) (se sugiere la moneda de la empresa, pero puede ser modificada).  
Se reporta un eventual **sconto listino da anagrafica** y es posible ingresar **note**.

En la sección superior también está el filtro para buscar los Artículos dentro de la lista.

## Artículos

En este formulario se indicarán los artículos y eventuales descuentos asociados a esta lista.

**Clase/Artículo/Descripción (Classe/Articolo/Descrizione)**: indicar el código del artículo a incluir en la lista. La descripción se recuperará automáticamente gracias al código del artículo. Para insertar un nuevo artículo en la cuadrícula, basta con posicionarse sobre la fila para completar los diversos datos o utilizar el botón *nuovo articolo* presente en la barra de cinta.

**Código/Descripción variante (Codice/Descrizione variante)**: sirve si además del código del artículo, la variante distingue un artículo de otro.

**codice fase**: es posible asociar al artículo una eventual [Fase externa (Fase esterna)](/docs/configurations/tables/production/standard-phases) que será realizada por el contratista. De este modo, se puede definir un precio para cada fase del mismo artículo; se completarán automáticamente los campos **fase** y **sottofase**.

**unità di misura**: puede ser la de gestión del artículo o una de sus unidades de medida alternativas.

**quantità**: propuesta igual a 1, es la cantidad de referencia del precio; si es diferente de 1, cuando se debe calcular el precio, se divide por la cantidad de la lista.

**prezzo**: referido a la moneda de la lista.

**iva**: este campo se recupera. Si no está configurado en el cliente, será necesario completar este campo con el código de IVA.

**prezzo ivato**: el sistema calcula este precio a partir del precio y de la tasa del código de IVA ingresado.

**Altura/Anchura/Profundidad (Altezza/Larghezza/Profondità)**: datos informativos relativos a la lista. El sistema no utiliza estos campos para eventuales elaboraciones.

Para cada artículo de la lista es posible ingresar algunas tipologías de descuento como se explica a continuación.

Se indica el **tipo scaglione** en el campo homónimo, mientras que en los campos siguientes se reportarán los datos relativos a los artículos ingresados en la lista.

Estos escalones están indicados en la tabla *Tipos de Descuentos (Tipi Sconti)*.

En la parte derecha del formulario encontramos una cuadrícula en la que están indicados todos los posibles descuentos para este artículo. Estas se completan solo al seleccionar un artículo presente en la lista.

### Descuentos

Estos descuentos son descuentos fijos que se reportan en los documentos.

A continuación, la correcta cumplimentación de esta cuadrícula:

**N**: poblado por el sistema, indica el orden en que se consideran los descuentos.

**Tipo de descuento/Descripción (Tipo sconto/Descrizione)**: seleccionar el tipo de descuento entre los presentes. Estándar se prevén 3 tipologías diferentes: *Descuento comercial (Sconto commerciale)*, *sconto a quantità* y *sconto a valore*.

**valore**: establecer el porcentaje de descuento a aplicar.

**priorità**: esta prioridad se reporta desde las configuraciones ejecutadas en la tabla [Tipos de descuentos (Tipi sconti)](/docs/configurations/tables/general-settings/discount-types).

**casc./imp.**: se poblado a partir del valor ingresado en la tabla Tipos de descuentos.

### Descuentos por cantidad

Esta tipología de descuento puede tener diferentes porcentajes dependiendo de la cantidad.

**tipo**: establecer el tipo de descuento que deberá ser *sconto a quantità*. Esta descripción se reportará luego en la impresión.

**quantità**: establecer la cantidad para la cual se activará el descuento.

**percentuale**: ingresar el porcentaje de descuento al alcanzar la cantidad indicada.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image07.png)

### Descuentos por Valor

En esta tipología, el descuento se activa cuando se alcanza un determinado importe por línea.

**tipo**: establecer el tipo de descuento que deberá ser *sconto a valore*.

**valore**: establecer un valor superado el cual se activa el descuento.

**percentuale**: ingresar el porcentaje de descuento al alcanzar el valor.

![](/img/it-it/sales/sales-price-list/insert-sales-price-list/image09.png)

### Precio por cantidad

En este caso, al alcanzar una cierta cantidad, el precio unitario cambia.

**quantità**: establecer un valor superado el cual se activa el precio "personalizado".

**prezzo unitario**: ingresar el precio unitario para la cantidad ordenada.

Estos descuentos se sumarán a otros eventuales descuentos presentes.

### Notas

A nivel informativo es posible ingresar notas relacionadas con un tipo particular de descuentos.

### Documentos adjuntos

import DocAttachDocument from './../../import/sections/doc-attach-document.md'

<DocAttachDocument />