---
title: Compensación de partidas
sidebar_position: 2
ai_generated: true
---

:::note Ruta<!-- Percorso -->
**Administración>Partidas<!-- Amministrazione>Partite --> >Procedimientos<!-- Procedure --> >Compensación de partidas<!-- Compensazione partite -->**

Nota:
Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).<!-- Funzionalità, pulsanti e campi comuni -->

:::

---

Este procedimiento, similar al *Compensación rápida<!-- Compensazione veloce -->* (esta última ha sido simplificada y, por ciertos aspectos, por tanto es preferible), presenta un formulario de búsqueda en el cual también es posible buscar y revisar los movimientos realizados (a diferencia de la *Compensación rápida<!-- Compensazione veloce -->*).

Para realizar una compensación, es necesario presionar el botón **Nuevo<!-- Nuovo -->** para proceder.

El primer campo obligatorio a configurar es el **Tipo de compensación<!-- Tipo compensazione -->**, que se llama mediante el combo box que enlaza con la tabla correspondiente.

En esa tabla, además del acostumbrado código y descripción del tipo en cuestión, se puede configurar una numeración específica y otros parámetros que son fundamentales cuando la compensación involucra no sólo partidas<!-- partite --> abiertas, sino también saldos contables (como por ejemplo, una posición de cliente y proveedor respecto al mismo sujeto).
Es obligatorio, además, seleccionar uno de los tres tipos posibles de compensación desde el combo box respectivo:
- Facturas - notas de crédito
- Cliente - proveedor: (tipología que, típicamente, también da lugar a una compensación de saldos contables)
- Pagos - documentos: utilizada para cerrar posiciones de partidas<!-- partitario --> abiertas frente a cobros o pagos anticipados

Los parámetros a configurar son los de la causa contable<!-- causale contabile --> que será utilizada en el asiento contable<!-- scrittura contabile --> generado automáticamente por la compensación y las cuentas<!-- conti --> eventuales a utilizar para generar descuentos activos o pasivos (en caso de que se quiera gestionar un residuo respecto a importes que no coinciden perfectamente).

El procedimiento para la selección de las partidas<!-- partite --> es muy similar al de la *compensación rápida<!-- compensazione veloce -->* y por lo tanto se remite a las instrucciones relativas.

También aquí están presentes los "cajones" retráctiles (pestañas laterales) donde también se visualizan las partidas<!-- partite --> (a diferencia del procedimiento análogo) y una vez seleccionadas (con doble click o botón correspondiente de la ribbon bar) se reportan en las cuadrículas principales del formulario para luego proceder con la maniobra de compensación

ATENCIÓN, la maniobra se finaliza cuando está contabilizada. El botón de contabilización (que actuará sólo sobre el cierre de partidas<!-- partite --> en el caso de que el tipo de compensación no contemple la parte contable) se habilita cuando los valores de las partidas<!-- partite --> a compensar coinciden. Por lo tanto, en el caso de que el valor (o el residuo) de las partidas<!-- partite --> a compensar no coincida, es necesario modificar el valor de la partida<!-- partita --> en la columna **Importe<!-- Importo -->**, de este modo la partida<!-- partita --> se cerrará por compensación sólo por ese valor (por ejemplo, una partida<!-- partita --> de 2.000 se compensa solo por 1.000 que es el valor de la partida<!-- partita --> de signo opuesto) y por tanto permanecerá abierta por el residuo.
Verifique que el campo **Diferencia<!-- Differenza -->**, en la parte inferior del formulario, llegue a cero.

Al presionar el botón de contabilización (con posibilidad de realizar la restauración), se generarán en la siguiente pestaña (***Contabilización<!-- Contabilizzazione -->***) los pagos al cierre de las partidas<!-- partite --> y, si el tipo lo prevé, los asientos contables<!-- scritture contabili --> de compensación.