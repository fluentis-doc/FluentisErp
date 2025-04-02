---
title: utilizzo fidi
sidebar_position: 3
---

La máscara **utilizzo fidi** permite crear y almacenar un cálculo de uso del crédito del cliente para cada cuenta cliente y visualizar, por lo tanto, una serie histórica. En la lista de cálculos visualizada en la máscara, las filas con desvío se mostrarán en rojo.

Para elaborar un nuevo cálculo, presione el botón **nuovo**.

Al abrir la máscara de detalle, ingrese la cuenta del cliente a analizar.

Ingrese o modifique la fecha de inicio del cálculo que representa la fecha desde la cual se leen los datos utilizados en el cálculo.

Presione entonces el botón **calcola**.

El cálculo se puede guardar con el comando **salva**.

La **data di riferimento** constituye el día respecto al cual se calcula el crédito disponible.

ATENCIÓN: en el caso, por ejemplo, de recibos bancarios emitidos y presentados para su aceptación, incluso cuando estos se hayan acreditado con el procedimiento contable correspondiente, a efectos del crédito del cliente, el monto se considera aún comprometido hasta la fecha de vencimiento de la partida que generó el recibo bancario. Por lo tanto, al modificar la fecha de referencia del cálculo más allá de dicha fecha, se podrá notar que el valor del crédito se libera por el monto correspondiente.

Dentro de los documentos de venta, como en el pedido del cliente, sin embargo, el cálculo del crédito disponible (visible en el encabezado) siempre está vinculado a la fecha de hoy, sin poder realizar modificaciones a la fecha de referencia, por lo que un nuevo pedido, si excede el crédito, no podrá ser cumplido (salvo por procedimiento de autorización) hasta el día de vencimiento del hipotético efecto que libere un valor suficiente.

El botón **aggiorna fido cliente** actualiza el registro del cliente ingresado en el encabezado del cálculo y establece en la base de datos el valor que se lee en el campo **fido stimato**.

Este campo, a su vez, se poblado por el comando Calcular aplicando el valor del campo **moltiplicatore valutazione fido** (por ejemplo, 1) a un cálculo (ponderado) basado en el facturado del período considerado para ese cliente.

En detalle, el cálculo se desarrolla de la siguiente manera:

Facturado 12M” / 365 * “Multiplicador” * “Días de dilación promedio”, donde estos últimos se calculan a partir de los vencimientos de las facturas de los últimos 12 meses, como “(suma(Importe vencimiento *DíasDilacion))/(suma total vencimientos).

**OTROS CAMPOS DEL FORMULARIO:**

**Fact. 12 m (Fatt 12 m)**: facturado de los doce meses anteriores.

**partite**: deudor y respectivo saldo.

**Deber / Haber (Dare / avere)**: movimientos de cobro de registros provisionales (dato informativo).

**Saldo Deber / Haber (Saldo dare / avere)**: movimiento contable si se ha elegido el modo contable.

**Fact. por contabilizar (Fatt. da contabilizzare)**: no contabilizadas (haber porque hay Notas de Crédito). Adelantos es un deudor para facturas con líneas de adelanto.

**DDT por facturar (DDT da fatturare)**: (haber si DDT de devolución).

**Valor y número de impagos (Valore e nr insoluti)**: estadístico que no entra en el cálculo.

**scaduto**: cuánto de las partidas abiertas ha vencido.