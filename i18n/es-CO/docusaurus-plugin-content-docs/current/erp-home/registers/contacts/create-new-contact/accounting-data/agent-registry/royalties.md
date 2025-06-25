---
title: Gestión de Regalías
sidebar_position: 9
---

La gestión de las regalías es similar a la de las comisiones de agentes, de la cual comparte en parte las configuraciones.

### Configuración de registro de artículos

Los registros de los artículos que están sujetos a derechos de autor/regalías deben tener el correspondiente indicador (*Derechos de autor*) en la pestaña **Generalidades**.

Al ingresar el artículo marcado en los documentos de venta, solo para los artículos que tienen este indicador, Fluentis procederá a identificar al diseñador correspondiente (agente) que posee los derechos de autor sobre el mismo.

### Configuración de registro de agente 

La configuración del sujeto que posee los derechos de autor sobre los diferentes artículos se realiza mediante la definición de un registro de tipo agente.

Normalmente, estos sujetos no están sujetos a retención de impuestos ni a contribuciones de Enasarco, por lo tanto, será necesario crear una [**Categoría de agentes**](/docs/configurations/tables/sales/agent-category/) y un [**Tipo de impuesto de retención**](/docs/configurations/tables/finance/withholding-tax-types/) específicos que no prevean ni contribuciones ni porcentajes de retenciones.

En la pestaña **Acuerdo** indicaremos el tipo de retención (que se debe crear o seleccionar, como se mencionó anteriormente, un tipo con porcentaje cero) y luego el criterio de maduración de la comisión como ocurre para el agente.

:::tip ATENCIÓN
La especificidad de la configuración se encuentra dentro de la pestaña **Comisión directa**, donde codificaremos el tipo de comisión **23 – Regalías**.
:::

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/tipo23.png)

Al entrar en los detalles de este tipo (a través del botón **Detalle de porcentaje seleccionado**), será posible seguir dos caminos diferentes:

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/royalties/dettaglio.png)

- Ingresar la lista detallada de los artículos sujetos a derechos de autor (Fluentis no permitirá ingresar artículos que no tengan este indicador activado).

- O bien, la línea de producto que contiene los artículos sujetos a regalías, en la hipótesis de que la línea de producto identifique el diseño (o el elemento) sujeto a derecho: **solo los artículos que tienen el indicador de regalías estarán sujetos al porcentaje correspondiente**, no es suficiente que estén relacionados con la línea establecida en el registro del agente.

:::danger ATENCIÓN
No se permitirá ingresar en el agente X un artículo (o una línea) si el mismo artículo es gestionado en otro registro de agente (como artículo o como línea de pertenencia): no se permite, de hecho, que sobre el mismo artículo maduren regalías más de un diseñador.
:::

### Lógica de uso 

Una vez realizadas las configuraciones en el registro de artículos y en el agente, la lógica de funcionamiento es la siguiente: al ingresar un artículo en los documentos de venta, Fluentis verificará si está sujeto a regalías o no; en el primer caso, buscará cuál es el agente que tiene las configuraciones (específicas o para la línea de artículo correspondiente) de comisiones en los detalles del tipo '23 - Regalías' y añadirá la correspondiente línea de comisión en el documento.

La lógica posterior a esta valorización será la misma que la de cualquier agente, con los informes resumidos de agentes y cálculos de liquidaciones a maduración. 

:::tip Nota
La diferencia sustancial entre un agente y un titular de derechos de autor es que, para el segundo, no es necesario su ingreso en cada registro de cliente para que Fluentis identifique su porcentaje a aplicar a la venta, lo cual sí es obligatorio para los agentes ordinarios.
:::