---
title: Gestión de partidas de anticipo (Gestione partite di anticipo)
sidebar_position: 7
---

:::note Ruta
**Administración>Partidas>Procedimientos>Gestión de partidas de Anticipo (Amministrazione>Partite>Procedure>Gestione partite d'Anticipo)**

Nota:
Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

:::

---
Este procedimiento permite crear partidas de anticipo para ser pagadas o cobradas al emitir la confirmación del pedido (o a la entrega) y luego facturar y contabilizar el anticipo cobrado. 
Se trata, claramente, de partidas extracontables ya que existen antes de la emisión de la factura.

Los comandos para gestionar esta funcionalidad están distribuidos en este formulario, además de en la pestaña de **riepiloghi*** del pedido.

:::note Nota
Los ejemplos en las imágenes se refieren al área de ventas con una partida en el pedido, pero la gestión es similar para las compras y conceptualmente similar para las partidas a la entrega.

No se prevé ninguna automatización estándar para crear la partida de anticipo en contabilidad al momento de la confirmación del pedido o de algún evento relacionado con él o con los DDT. Cualquier vencimiento del pedido puede ser pasado a contabilidad para que esta tenga visibilidad de que hay una partida en el pedido por cobrar.

De igual manera, no hay nada que detenga el inicio de la producción del pedido hasta que se cobre la partida de anticipo.

Ambos pasos podrían ser gestionados a través de flujos de trabajo personalizados que se configuren específicamente.

:::

### Creación de partida en el pedido

import FileName from './../../../import/sections/advance-maturities-creation-order.md'

<FileName />

---

### Gestión de las partidas de anticipo dentro del formulario.

En este formulario, en la primera pestaña del lado de ventas, es posible crear partidas de anticipo también para otros pedidos de clientes e independientemente de la creación realizada desde el pedido del cliente, o partidas sobre entregas presentes en la segunda pestaña.

En la ***pestaña Gestión de anticipos*** se puede realizar el retroceso de la partida de anticipo recién creada.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-form.png)

En el pedido de venta de origen, si un usuario entra a modificar algún valor que cause el recálculo de vencimientos, se devolverá un mensaje de advertencia que pregunta si se desea anular la partida de anticipo (si esta no ha sido cobrada; de lo contrario, esto no es posible).

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message.png)


### Cobro de la partida de anticipo
Cuando se cobra la partida de anticipo (aconto) en el pedido (o a la entrega) y, por lo tanto, se guarda un registro contable de primera nota con el cobro de una partida de anticipo (cierre de partida), aparecerá un mensaje que alerta al usuario sobre la necesidad de facturar este anticipo.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message2.png)

Al confirmar la creación, se abrirá la máscara de Gestión de partidas de anticipo, donde el usuario podrá ir nuevamente a la pestaña de gestión de anticipos para facturar la operación; si, en cambio, la operación no se confirma, el usuario deberá recordar ir al procedimiento más tarde para facturar la operación.

Al seleccionar la fila, se activará el botón de creación de la factura:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation.png)

Al presionarlo, aparecerá una nueva máscara de solicitud de datos para la factura:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation-popup.png)

Los datos ya propuestos son los de la fecha actual y la descripción que se reflejará en la línea del artículo, mientras que el tipo de factura, tasa de IVA y código contable de facturación de ventas deberán ser gestionados por el usuario en cada ocasión.

### Facturación del anticipo cobrado y contabilización
Una vez confirmada la creación se abrirá la factura:  
el tipo de línea del artículo se establece automáticamente como tipo 6, es decir, factura de anticipo, de tal manera que esta luego esté disponible para anulación en la facturación de cierre del pedido.

:::tip **NOTA:**

Una vez contabilizada esta factura, la particularidad es que no creará una nueva partida, sino que será la partida de anticipo extracontable la que será recuperada (incluso si ya está en estado de "Cerrada") y se asociará al registro contable de esta factura.
:::