---
title: Uso de líneas de crédito
sidebar_position: 3
ai_generated: true
---

La pantalla **Uso de líneas de crédito<!-- Utilizzo fidi -->** permite crear y guardar un cálculo de uso de la línea de crédito<!-- fido --> del cliente para cada cuenta de cliente<!-- conto cliente --> y visualizar así una serie histórica de estos cálculos. En la lista de los cálculos visualizados en la pantalla, se mostrarán en rojo las filas con desvíos.

Para elaborar un nuevo cálculo, presione el botón **Nuevo<!-- Nuovo -->**.

Al abrir la pantalla de detalle, ingrese la cuenta del cliente<!-- conto del cliente --> a analizar.

Ingrese o modifique la fecha de inicio del cálculo, que representa la fecha desde la cual se leen los datos utilizados en el cálculo.

Luego presione el botón **Calcular<!-- Calcola -->**.

El cálculo se puede guardar con el comando **Guardar<!-- Salva -->**.

La **fecha de referencia<!-- data di riferimento -->** constituye el día respecto al cual se calcula la línea de crédito<!-- fido --> disponible.

ATENCIÓN: en el caso, por ejemplo, de recibos bancarios emitidos y presentados al cobro condicionado, incluso cuando estos hayan sido acreditados mediante el procedimiento contable correspondiente, a efectos de la línea de crédito<!-- fido cliente -->, el importe se considera aún comprometido hasta la fecha de vencimiento del documento que generó el recibo bancario. Por lo tanto, al modificar la fecha de referencia del cálculo más allá de dicha fecha, se podrá notar que el valor de la línea de crédito<!-- fido --> se libera por el importe correspondiente.

Dentro de los documentos de venta, como por ejemplo el pedido de cliente, el cálculo de la línea de crédito<!-- fido --> disponible (visible en el encabezado) siempre está vinculado a la fecha actual, sin poder modificar la fecha de referencia. Por lo tanto, un nuevo pedido, si excede el límite de la línea de crédito<!-- fuori fido -->, no podrá ser gestionado (salvo proceso de autorización) hasta el día del vencimiento del hipotético efecto que libere un valor suficiente.

El botón **Actualizar línea de crédito del cliente<!-- Aggiorna fido cliente -->** actualiza el registro maestro del cliente introducido en el encabezado del cálculo y establece en la ficha maestra el valor que lee en el campo **Línea de crédito estimada<!-- Fido stimato -->**.

Este campo, a su vez, se completa mediante el comando Calcular aplicando el valor del campo **Multiplicador de evaluación de crédito<!-- Moltiplicatore valutazione fido -->** (por ejemplo, 1) a un cálculo (ponderado) basado en la facturación del período considerado para ese cliente.

En detalle, el cálculo se desarrolla así:

Facturación 12M / 365 * “Multiplicador” * “Días promedio de plazo”, donde estos últimos a su vez se calculan sobre los vencimientos de las facturas de los últimos 12 meses, como “(suma(Importe vencimiento *DíasPlazo))/(suma total vencimientos)”.

**OTROS CAMPOS DEL FORMULARIO<!-- ALTRI CAMPI DELLA FORM: -->**

**Facturación 12 m**. = facturación de los doce meses anteriores

**Partidas** a cobrar y a pagar y el saldo correspondiente<!-- Partite dare avere e relativo saldo -->

**A cobrar / a pagar** = movimientos de cobro por registros provisionales (dato informativo)<!-- Dare / avere = movimenti di incasso da registrazioni provvisorie (dato informativo) -->

**Saldo a cobrar / a pagar** = movimiento contable si se ha elegido el modo contable<!-- Saldo dare / avere = movimento contabile se è stata scelta la modalità contabile -->

**Facturas por contabilizar** = aún no contabilizadas  (a pagar ya que existen Notas de Crédito) Anticipos es una parte para facturas con partidas de anticipos<!-- Fatt. da contabilizzare = non ancora contabilizzate,  (avere perché ci sono le Note di Credito) Acconti è un di cui per fatture con righe acconti -->

**Albaranes por facturar** (a pagar si el albarán es de devolución)<!-- DDT da fatturare (avere se DDT di reso) -->

**Valor y número de impagados** (estadístico, no entra en el cálculo)<!-- Valore e nr insoluti (statistico non entra nel calcolo) -->

**Vencido** = cuánto de las partidas abiertas se encuentran vencidas<!-- Scaduto = quanto delle partite aperte sono scadute -->