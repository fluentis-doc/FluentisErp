---
title: controllo rimesse
sidebar_position: 1
---

El formulario se encuentra en Tesorería > Riesgo Cliente > Procedimientos > controllo rimesse (Controllo rimesse).

La máscara presenta el detalle de los registros de cobro registrados a nombre del cliente, dentro de los rangos de fechas y filtros ingresados en el encabezado.

## Cómo verificar la situación de remesas de un cliente

1. Expande, si es necesario, la sección de filtros para ingresar (obligatorio) la cuenta del cliente a verificar.
2. Utiliza los otros filtros para buscar los registros de cobro pertinentes.
3. Presiona el botón de Búsqueda y lee los resultados en la cuadrícula central y los resultados para la media referida al cliente en general, en la zona inferior del formulario.

## Cómo se leen e interpretan los resultados

- Los registros de cobro para el cliente seleccionado en el intervalo de fechas establecido se presentan en orden de fecha de la primera a la última. En el formulario, están representados del más reciente en la parte superior al menos reciente en la parte inferior, y se reporta la **data scadenza** presente en la partida abierta que ha sido cobrada.

- El cálculo es **escalar (scalare)**, por lo tanto, las filas se comparan para calcular las diferencias en días desde la primera hasta las filas siguientes. Se calculan los **Números (Numeri)**, es decir, el importe multiplicado por el número de días (como sucede en los extractos de cuenta escalonados enviados por los bancos y relativos a las cuentas corrientes).

- También se considera una **Divisa bancaria (Valuta banca)**, es decir, en el movimiento contable de cobro podrían haberse agregado días de divisa bancaria entre la disposición de pago por parte del cliente y el efectivo cobro. Estos días de divisa son visibles en la escritura contable activando el indicador *giorni banca* en la [causal contable](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) y pueden ser propuestos a través de [la ficha (anagrafica)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry) (pestaña *giorni banca*) de la cuenta bancaria de cobranza, o valorados manualmente en el registro.

Si esta fecha de divisa no se completa, por defecto, se considera la fecha del registro contable del cobro, por lo tanto, el número de **Días de Divisa (Giorni Valuta)** añadidos respecto a la fecha del cobro será igual a cero.

Por lo tanto, el campo **Divisa de cobro (Valuta incasso)** será igual a la fecha de registro, y los campos **Días de Divisa (Giorni Valuta)** y **Números de divisa (Numeri valuta)** serán igual a cero.

- El cálculo prevé un conteo de los **Días de Vencimiento (Giorni Scadenza)** como comparación entre la primera fila (donde el cálculo siempre será cero) y las filas siguientes. Por ejemplo, si la primera fecha de vencimiento era el 9 de febrero y la siguiente el 20 de febrero, los días de vencimiento respecto a la segunda fila serán 11.

- El cálculo de los **Números de Vencimiento (Numeri Scadenza)** se da por el producto de los Días de vencimiento por el importe de la remesa.

<details>

  <summary>**Los otros campos de la cuadrícula de detalle**: Click to expand!</summary>
 
 - **Fecha / Número de Registro (Data / Numero Registrazione)**: Recuperados del encabezado del registro de cobro de la partida del cliente.
 - **descrizione causale**: causal contable utilizada en la escritura de cobro.
 - **tipo documento**: recuperado de la partida abierta que ha sido cobrada y referido generalmente al tipo de factura.
 - **numero documento**: referido a la factura que ha abierto la partida cobrada.
 - **data documento**: referido a la factura que ha abierto la partida cobrada.
 - **divisa**: referido a la partida cobrada.
 - **Importe original en divisa (Importo originario in divisa)**: referido a la partida cobrada, si es diferente de la divisa de la empresa (es decir, si es diferente de Euro).
 - **Importe original en divisa de la Empresa (Importo originario in divisa della Società)**: referido a la partida cobrada, en la divisa de la empresa (es decir, en general Euro).
 - **Importe residual en divisa / en divisa de la empresa (Importo residuo in divisa / in divisa della società)**: referido a la partida, en caso de que esté parcialmente cobrada (valor expresado en la divisa original si es diferente de la divisa de la empresa, es decir, si es diferente de Euro, o en Euro).
 - **Importe de remesa en divisa (Importo rimessa in divisa)**: valor del cobro realizado referido a la partida cobrada, si es diferente de la divisa de la empresa (es decir, si es diferente de Euro, o en Euro).

</details>

### En la parte inferior del formulario se realiza el cálculo final de los <u>valores medios</u>.

Los datos medios calculados por el formulario son:

- **Fecha de divisa media de cobro (Data valuta media di incasso)**: calculada sumando todos los importes de las remesas (es decir, de los cobros) visibles en el formulario y sumando todos los *números de Divisa (numeri Valuta)* visibles en el formulario y haciendo la relación entre las dos sumas (Sommatoria Numeri valuta / Sommatoria Importo rimesse) para encontrar el **número de días medios de divisa (numero di giorni medi valuta)**. Finalmente, sumando el número de días medios de divisa a la primera fecha de divisa de cobro (es decir, la menos reciente).

- **Fecha de vencimiento media (Data scadenza media)**: calculada sumando todos los importes de las remesas (es decir, de los cobros) visibles en el formulario y sumando todos los *números de Vencimiento (Numeri Scadenza)* visibles en el formulario y haciendo la relación entre las dos sumas (Sommatoria Numeri scadenza / Sommatoria Importo rimesse) para encontrar el **número de días medios de vencimiento (numero di giorni medi scadenza)**. Finalmente, sumando el número de días medios de vencimiento a la primera fecha de vencimiento (es decir, la menos reciente).

:::note[Nota]
en caso de efectos, la fecha de divisa se establece igual a la fecha de vencimiento, independientemente de la fecha de contabilización del efecto.
:::

<details>

  <summary>**El cálculo de la media en la práctica**: Click to expand!</summary>
 
 del cociente entre suma de importes y suma de días *importes se obtiene un número de días medios que se añade a la primera fecha para obtener la fecha media.

</details>

- **scostamento**, es decir, la diferencia entre la fecha de vencimiento media y la fecha de divisa media de cobro, que representa el retraso medio en el cobro entre el vencimiento y la divisa: este número de días puede ser almacenado, a través del botón **aggiorna gg. ritardo**, en la ficha del cliente en el campo *Días medios de retraso (Giorni medi ritardo)*, campo utilizado en las simulaciones de flujo de caja para obtener la fecha de vencimiento prevista del flujo financiero.

<details>

  <summary>**Los otros campos calculados de la zona de resumen**: Click to expand!</summary>
 
 - **totale importo originario in divisa**: Suma del importe en divisa de las partidas cobradas.
 - **Total Importe Original en Euro (Totale Importo Originario in Euro)**: contravalor en euro del campo anterior.
 - **totale importo residuo divisa**: suma de los valores residuales de las partidas cobradas; si las partidas han sido cobradas completamente, el valor será cero; de lo contrario, será útil para las partidas parcialmente cobradas.
 - **totale importo residuo euro**: contravalor en euro del campo anterior.
 - **totale rimesse divisa**: suma del valor en divisa de los cobros realizados.
 - **totale rimesse euro**: contravalor en euro del campo anterior.
 - **totale numeri valuta**: suma del campo *Números de Divisa* de las filas de la cuadrícula, utilizado en los cálculos de las medias finales.
 - **totale numeri scadenza**: suma del campo *Números de Vencimiento* de las filas de la cuadrícula, utilizado en los cálculos de las medias finales.

</details>

El formulario prevé una impresión del detalle del cálculo.