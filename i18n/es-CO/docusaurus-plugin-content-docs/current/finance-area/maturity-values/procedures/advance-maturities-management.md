---
title: Gestión de partidas de anticipo
sidebar_position: 7
ai_generated: true
---

:::note Ruta<!-- Percorso -->
**Administración>Partidas>Procedimientos>Gestión partidas de Anticipo**

Nota:
Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consultar el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).
:::

---
Este procedimiento permite crear partidas de anticipo<!-- partite di anticipo --> que deben ser pagadas o cobradas al emitir la confirmación del pedido (o en la entrega) y posteriormente facturar y contabilizar el anticipo<!-- anticipo --> cobrado.
Se trata claramente de partidas<!-- partite --> extracontables ya que existen antes de la emisión de la factura.

Los comandos para la gestión de esta funcionalidad se encuentran tanto en este formulario como en la pestaña de ***Resúmenes<!-- Riepiloghi -->*** del pedido.

:::note Nota
Los ejemplos en las imágenes se refieren al área de ventas con una partida<!-- partita --> en el pedido, pero la gestión es especular para las compras y conceptualmente similar para las partidas<!-- partite --> a la entrega.

No está previsto ningún automatismo estándar para crear la partida de anticipo<!-- partita di anticipo --> en contabilidad en el momento de la confirmación del pedido o de algún evento vinculado a este o a los remitos. Cualquier vencimiento del pedido puede ser pasado a contabilidad para que esta tenga visibilidad de que hay una partida<!-- partita --> en el pedido pendiente de cobro. 

De la misma manera, no hay nada que detenga el inicio de la producción del pedido hasta el cobro de la partida de anticipo<!-- partita d’ anticipo -->. 

Ambos pasos pueden ser gestionados mediante flujos de trabajo personalizados a configurar expresamente.
:::

### Creación de partida en el pedido<!-- Creazione partita all'ordine -->

import FileName from './../../../import/sections/advance-maturities-creation-order.md'

<FileName />

---

### Gestión de las partidas de anticipo dentro del formulario<!-- Gestione delle partite di anticipo all'interno della form. -->

En este formulario, en la primera pestaña del lado de ventas, es posible crear partidas de anticipo<!-- partite di anticipo --> también para otros pedidos de clientes e independientemente de la creación realizada desde dentro del pedido del cliente, o partidas<!-- partite --> sobre entregas presentes en la segunda pestaña.

En la ***pestaña Gestión de anticipos<!-- tab Gestione anticipo -->*** es posible realizar el rollback de la partida de anticipo<!-- partita di anticipo --> recién creada.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-form.png)

En el pedido de venta de origen, si un usuario modifica algún valor que provoque el recálculo de vencimientos, aparecerá un mensaje de aviso que solicita si se desea anular la partida de anticipo<!-- partita di anticipo --> (si esta no está cobrada, de lo contrario no será posible).

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message.png)


### Cobro de la partida de anticipo<!-- Incasso partita di anticipo -->
Cuando se cobra la partida de anticipo<!-- partita di anticipo --> (anticipo) en el pedido (o en la entrega) y, por lo tanto, se guarda un asiento contable<!-- registrazione contabile --> en el libro diario con el cobro de una partida de anticipo<!-- partita d’ anticipo --> (cierre de partida<!-- chiusura partita -->), aparecerá un mensaje que avisa al usuario de la necesidad de facturar este anticipo.

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-message2.png)

Al confirmar la creación, se abrirá la pantalla de Gestión de partidas de anticipo<!-- Gestione partite di anticipo -->, donde el usuario podrá ingresar nuevamente a la sección de gestión de anticipos<!-- scheda di gestione anticipi --> para facturar la operación; si, en cambio, la operación no se confirma, será responsabilidad del usuario recordar ingresar posteriormente al procedimiento para facturar la operación.

Seleccionando la fila se activará el botón de creación de factura:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation.png)

Al presionarlo aparecerá una nueva ventana para solicitar datos de la factura:

![](/img/it-it/finance-area/maturity-values/maturity-values/advance-maturities/advance-maturities-invoice-creation-popup.png)

Los datos sugeridos por defecto son los de la fecha actual y la descripción que se incluirá en la línea del artículo, mientras que el tipo de factura, la tasa de IVA y el código contable de ventas facturadas serán gestionados ocasionalmente por el usuario.

### Facturación de anticipo cobrado y contabilización<!-- Fatturazione anticipo incassato e contabilizzazione -->
Una vez confirmada la creación se abrirá la factura:
el tipo de línea de artículo se establece automáticamente como tipo 6, es decir, factura de anticipo<!-- fattura d’ acconto -->, de modo que luego esté disponible para su reverso en la facturación de cierre del pedido.

:::tip **NOTA:**

Una vez contabilizada esta factura, lo particular es que no creará una nueva partida<!-- partita -->, sino que será la partida de anticipo<!-- partita di anticipo --> extracontable la que se recuperará (aunque ya esté en estado de "Cerrada<!-- Chiusa -->") y se asociará al asiento contable<!-- registrazione contabile --> de dicha factura:
:::