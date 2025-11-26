---
title: Control de remesas
sidebar_position: 1
ai_generated: true
---

El formulario se encuentra en Tesorería<!-- Tesoreria --> > Riesgo Cliente > Procedimientos > Control de remesas<!-- Controllo rimesse -->

La pantalla presenta el detalle de los registros de cobro detectados a cargo del cliente<!-- cliente -->, dentro de los rangos de fechas y filtros ingresados en el encabezado.

## Cómo verificar la situación de remesas<!-- situazione rimesse --> de un cliente<!-- cliente -->

1. Expanda, si es necesario, la sección de filtros para ingresar (obligatorio) la cuenta del cliente<!-- cliente --> que se desea verificar
2. Utilice los demás filtros para buscar los registros de cobro que le interesan
3. Presione el botón Buscar<!-- Ricerca --> y lea los resultados en la cuadrícula central y los resultados, para el promedio referido al cliente<!-- cliente --> en su conjunto, en la parte inferior del formulario.

## Cómo leer e interpretar los resultados

- Los registros de cobro para el cliente<!-- cliente --> seleccionado en el intervalo de fechas configurado se muestran en orden de fecha, desde el primero hasta el último. En el formulario se representan desde el más reciente en la parte superior hasta el menos reciente en la inferior, y se reporta la **Fecha de vencimiento<!-- Data scadenza -->** presente en la partida abierta que ha sido cobrada.

- El cálculo es de tipo **escalonado<!-- scalare -->**, por lo tanto las filas se comparan para calcular las diferencias en días desde la primera hasta las siguientes filas. Se calculan los **Números<!-- Numeri -->**, es decir, el importe multiplicado por el número de días (como ocurre en los extractos de cuenta escalonados enviados por los bancos y relativos a cuentas corrientes<!-- conti correnti -->)

- También se considera un **Valor banco<!-- Valuta banca -->**, es decir, en el movimiento contable de cobro pueden haberse añadido días de valor de banco entre la disposición de pago por parte del cliente<!-- cliente --> y el cobro efectivo. Estos días valor son visibles en el registro contable activando el flag *Días Banco<!-- Giorni Banca -->* en la [causal contable<!-- causale contabile -->](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) y pueden ser propuestos a través de [el registro<!-- anagrafica -->](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/bank-registry) (Pestaña *Días Banco<!-- Giorni Banca -->*) del banco de cobro, o bien ingresados manualmente en el registro.

Si esta fecha valor no se completa, por defecto, se considera la fecha del registro contable del cobro, por lo tanto el número de **Días Valor<!-- Giorni Valuta -->** añadidos respecto a la fecha de cobro será igual a cero.

Entonces el campo **Valor de cobro<!-- Valuta incasso -->** será igual a la fecha de registro, los campos **Días Valor<!-- Giorni Valuta -->** y **Números valor<!-- Numeri valuta -->** serán igual a cero.

- El cálculo prevé un conteo de los **Días de Vencimiento<!-- Giorni Scadenza -->** comparando la primera fila (donde el cálculo será siempre cero) y las sucesivas. Por ejemplo, si el primer vencimiento era el día 9 de febrero y el siguiente el 20 de febrero, los días de vencimiento respecto a la segunda fila serán 11.

- El cálculo de los **Números de Vencimiento<!-- Numeri Scadenza -->** resulta del producto de los Días de vencimiento<!-- Giorni scadenza --> por el importe de la remesa<!-- rimessa -->.

<details>

  <summary>**Los demás campos de la cuadrícula de detalle<!-- Gli altri campi della griglia di dettaglio -->**: Click to expand!</summary>
 
 - **Fecha / Número de Registro<!-- Data / Numero Registrazione -->**: Recuperados del encabezado del registro de cobro de la partida de cliente<!-- partita cliente -->
 - **Descripción de la causal<!-- Descrizione causale -->**: causal contable<!-- causale contabile --> utilizada en el asiento de cobro
 - **Tipo de documento<!-- Tipo documento -->**: tomado de la partida abierta que se ha cobrado y normalmente se refiere al tipo de factura
 - **Número de documento<!-- Numero documento -->**: referido a la factura que abrió la partida cobrada
 - **Fecha del Documento<!-- Data Documento -->**: referido a la factura que abrió la partida cobrada
 - **Divisa**: referido a la partida cobrada
 - **Importe original en divisa<!-- Importo originario in divisa -->**: relativo a la partida cobrada, si es diferente de la divisa de la empresa (es decir, si no es Euro)
 - **Importe original en la divisa de la empresa<!-- Importo originario in divisa della Società -->**: relativo a la partida cobrada, en la divisa de la empresa (habitualmente en euros)
 - **Importe residual en divisa / en la divisa de la empresa<!-- Importo residuo in divisa / in divisa della società -->**: relativo a la partida, si ha sido cobrada parcialmente, (valor expresado en la divisa original si es diferente de la de la empresa, es decir, si no es euro, o bien en euros)
 - **Importe remesa en divisa<!-- Importo rimessa in divisa -->**: importe del cobro realizado relacionado con la partida cobrada, si es diferente de la divisa de la empresa (es decir, si no es euro o bien en euros)

</details>

### En la parte inferior del formulario se realiza el cálculo final de los <u>valores promedio</u>.

Los datos promedio calculados por el formulario son:

- **Fecha valor promedio de cobro<!-- Data valuta media di incasso -->**: calculada sumando todos los importes de las remesas<!-- rimesse --> (es decir, de los cobros) visibles en el formulario y sumando todos los *números Valor<!-- numeri Valuta -->* visibles en el formulario y obteniendo la relación entre ambas sumas (Suma de Números valor / Suma de Importe de remesas<!-- Sommatoria Numeri valuta / Sommatoria Importo rimesse -->) para encontrar el **número promedio de días de valor<!-- numero di giorni medi valuta -->.** Finalmente sumando el número promedio de días de valor a la primera Fecha Valor de cobro<!-- prima data Valuta incasso --> (es decir, la menos reciente).

- **Fecha promedio de vencimiento<!-- Data scadenza media -->**: calculada sumando todos los importes de las remesas<!-- rimesse --> (es decir, de los cobros) visibles en el formulario y sumando todos los *números de Vencimiento<!-- numeri Scadenza -->* visibles en el formulario y obteniendo la relación entre ambas sumas (Suma de Números de Vencimiento / Suma de Importe de remesas<!-- Sommatoria Numeri scadenza / Sommatoria Importo rimesse -->) para encontrar el **número promedio de días de vencimiento<!-- numero di giorni medi scadenza -->.** Finalmente sumando el número promedio de días de vencimiento a la primera fecha de vencimiento<!-- prima data Scadenza --> (es decir, la menos reciente).

:::note[Nota]
en caso de efectos la fecha valor se configura igual a la fecha de vencimiento, independientemente de la fecha de contabilización del efecto.
:::

<details>

  <summary>**El cálculo del promedio en la práctica<!-- Il calcolo della media in pratica -->**: Click to expand!</summary>
 
 de la relación entre la suma de importes y la suma de días*importes se obtiene un número de días promedio que añadir a la primera fecha para obtener la fecha promedio.

</details>

- **Desviación<!-- Scostamento -->** o sea la diferencia entre la fecha promedio de vencimiento<!-- data scadenza media --> y la fecha valor promedio de cobro<!-- data valuta media incasso -->, que representa el retraso promedio en el cobro entre el vencimiento y el valor: este número de días puede almacenarse, mediante el botón **Actualizar días de retraso<!-- Aggiorna gg. ritardo -->**, en el registro del cliente<!-- anagrafica cliente --> en el campo *Días promedio de retraso<!-- Giorni medi ritardo -->*, campo utilizado en las simulaciones de cash flow para obtener la fecha de vencimiento prevista del flujo financiero.

<details>

  <summary>**Los demás campos calculados en la zona de resumen<!-- Gli altri campi calcolai della zona di riepilogo -->**: Click to expand!</summary>
 
 - **Total Importe Original en divisa<!-- Totale Importo Originario in divisa -->**: suma del importe en divisa de las partidas cobradas
 - **Total Importe Original en Euro<!-- Totale Importo Originario in Euro -->**: contravalor en euro del campo anterior
 - **Total Importe Residual Divisa<!-- Totale importo Residuo Divisa -->**: suma de los valores residuales de las partidas cobradas, si las partidas se han cobrado completamente el valor será cero, en caso contrario será útil para las partidas parcialmente cobradas
 - **Total Importe Residual Euro<!-- Totale importo Residuo Euro -->**: contravalor en euro del campo anterior
 - **Total Remesas divisa<!-- Totale Rimesse divisa -->**: suma del valor en divisa de los cobros realizados
 - **Total Remesas Euro<!-- Totale Rimesse Euro -->**: contravalor en euro del campo anterior
 - **Total Números Valor<!-- Totale Numeri Valuta -->**: suma del campo *Números Valor<!-- Numeri Valuta -->* de las filas de la cuadrícula, utilizado en los cálculos de los promedios finales
 - **Total Números de Vencimiento<!-- Totale Numeri Scadenza -->**: suma del campo *Números de Vencimiento<!-- Numeri Scadenza -->* de las filas de la cuadrícula, utilizado en los cálculos de los promedios finales

</details>

La pantalla prevé una impresión del detalle del cálculo.