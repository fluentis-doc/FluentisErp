---
title: compensazione partite
sidebar_position: 2
---

:::note Ruta (Percorso)
**Administración>Partidas>Procedimientos>compensazione partite (Amministrazione>Partite>Procedure>Compensazione partite)**

Nota (Nota):  
Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).

:::

---

El presente procedimiento, similar al *compensazione veloce* (este último ha sido simplificado y, por ciertos aspectos, es preferible), presenta un formulario de búsqueda en el cual también se pueden buscar y revisar las maniobras realizadas (a diferencia de la *Compensación rápida*).

Para realizar una compensación, es necesario presionar el botón **nuovo** para continuar.

El primer campo obligatorio a establecer es el **tipo compensazione**, que debe seleccionarse a través del cuadro combinado que remite a la tabla correspondiente.

En dicha tabla, además del habitual código y descripción del tipo en cuestión, se puede configurar una numeración específica y otros parámetros que son fundamentales cuando la compensación involucra no solo las partidas abiertas, sino también los saldos contables (como por ejemplo una posición de cliente y proveedor respecto al mismo sujeto). Es obligatorio, además, seleccionar uno de los tres tipos posibles de compensación del cuadro combinado correspondiente:
- Facturas - notas de crédito (Fatture - note di accredito)
- Cliente - proveedor (Cliente - fornitore): (tipología que, típicamente, da lugar también a una compensación de saldos contables)
- Pagos - documentos (Pagamenti - documenti): utilizada para cerrar posiciones de partidas abiertas a cambio de cobros o pagos anticipados

Los parámetros a establecer son los de la causa contable que se utilizará en la escritura contable generada automáticamente por la compensación, así como los eventuales cuentas a utilizar para generar abatimientos activos o pasivos (en caso de que se desee gestionar un residual con respecto a importes que no coincidan exactamente).

El procedimiento de selección de las partidas es muy similar a la *compensación rápida* y, por lo tanto, se remite a las instrucciones correspondientes.

Aquí también están presentes los "cajones" ocultos (pestañas laterales) donde se visualizan las partidas (a diferencia del procedimiento análogo) y una vez seleccionadas (con un doble clic o botón correspondiente de la barra de ribbon) se trasladan a las grillas principales del formulario para luego proceder con la maniobra de compensación.

ATENCIÓN, la maniobra se finaliza cuando es contabilizada. El botón de contabilización (que actuará solo sobre el cierre de partidas en caso de que el tipo de compensación no contemple la parte contable) se habilita cuando los valores de las partidas a compensar coinciden. Por lo tanto, si el valor (o residual) de las partidas a compensar no coincide, es necesario modificar el valor de la partida en la columna **importo**; de esta manera, la partida se cerrará por compensación solo por ese valor (por ejemplo, una partida de 2.000 se compensa solo por 1.000 que es el valor de la partida de signo opuesto) y, por lo tanto, permanecerá abierta por el residual. Verifique que el campo **differenza**, en la parte inferior del formulario, quede en cero.

Al presionar el botón de contabilización (con la posibilidad de realizar la restauración), se generarán en la pestaña siguiente (***Contabilización***) los pagos para el cierre de las partidas y, si el tipo lo prevé, las escrituras contables de compensación.