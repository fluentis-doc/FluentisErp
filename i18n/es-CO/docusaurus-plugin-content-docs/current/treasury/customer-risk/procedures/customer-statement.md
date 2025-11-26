---
title: Exposición de clientes
sidebar_position: 2
ai_generated: true
---

El formulario se encuentra en Tesorería > Riesgo Cliente > Procedimientos > Exposición de clientes<!-- Esposizione clienti -->.

Permite tener una visión general completa de toda la situación de riesgo frente a los distintos clientes<!-- clienti -->, con la posibilidad de obtener datos por agente, país o agrupando también por grupos societarios.

## Cómo verificar la exposición de clientes<!-- esposizione clienti -->

1. Expanda, si es necesario, la sección de filtros para ingresar el rango de fechas de referencia en el que verificar y el criterio de agrupación deseado (por país<!-- nazione -->, por agente o por cliente).

2. Presione el botón **Buscar<!-- Ricerca -->**: los clientes<!-- clienti --> presentados en la máscara son aquellos para los cuales en la anagráfica se ha insertado el flag *Exposición de clientes<!-- Esposizione clienti -->*.

:::note[Nota<!-- Nota -->]
La sección inicial de *parámetros de riesgo cliente<!-- parametri rischio cliente -->* muestra nuevamente los mismos parámetros por defecto de cálculo configurados para el módulo, con además el rango de fechas de registro utilizado para el control de remesas (para detalles, ver el documento siguiente).
:::

:::note[Filtros adicionales disponibles<!-- Ulteriori filtri disponibili -->]
Es posible filtrar por un determinado responsable (el empleado que ha sido asociado a la anagráfica de cliente, primera pestaña *Administración<!-- Amministrazione -->*), filtrar los clientes<!-- clienti --> *Extranjeros<!-- Esteri -->* o *Italia*, visualizar los datos agrupados por *grupo societario* (se visualizará un único total para la subcuenta<!-- sottoconto --> ingresada en el campo del *grupo societario* presente en la pestaña *administración* de la anagráfica de cliente en lugar de cada subcuenta<!-- sottoconto cliente --> individual de detalle) y finalmente agrupar (y filtrar) los datos por agente o país<!-- nazione -->.

Está prevista la posibilidad de ordenar los datos por código de cuenta/subcuenta<!-- conto/sottoconto --> o por descripción (razón social) del cliente.
:::

### Datos visualizados en la cuadrícula<!-- Dati visualizzati in griglia -->

Se mostrarán en rojo las filas con diferencia/desfase<!-- scostamento -->.

**Impagados<!-- Insoluti -->**: aquí se muestra el importe de los impagados no contabilizados, o (si el flag en la cabecera está activado) también aquellos ya contabilizados;

**Facturación últimos 12 meses<!-- Fatt. ultimi 12 mesi -->**: es la facturación (del área de ventas, facturas de ventas) de los 12 meses anteriores a la fecha de referencia;

**Desfase en días<!-- Scostamento giorni -->**: indica el número de días de desfase entre el vencimiento medio y la fecha de cobro media, según lo calculado con la lógica de la máscara ‘Control de remesas<!-- Controllo rimesse -->’ al que se remite para más detalles; La particularidad es que es un promedio ponderado sobre el importe de la partida. De hecho, el dato se expresa en números acreedores (como en el extracto de cuenta bancaria escalado)

**Desfase en días vencimiento<!-- Scostamento GG scad. -->**: indica los días de desfase promedio de la fecha de vencimiento con respecto a la fecha del documento; considera sólo las partidas vencidas = SUMA (residuo de partida * días hasta la fecha de retraso desde la fecha de vencimiento) / suma de los residuos de las partidas. Calcula así un valor promedio de los retrasos

**Facturación<!-- Fatturato -->**: es la facturación (del área de ventas, facturas de ventas) desde el inicio del año;

**Días promedio de cobro<!-- Giorni medi incasso -->**: Equivale al indicador denominado DSO (Days of Sales Outstanding), los días de rotación del crédito. La fórmula de cálculo es 365 * (Partidas Deudoras – Partidas Acreedoras + Efectos por vencer + Impagados + Facturas por contabilizar) / Facturación últimos 12 meses<!-- Fatt. Ultimi 12 Mesi -->. En el caso de que la facturación de los últimos 12 meses sea 0 entonces también el DSO será 0;

**Línea de crédito** y **Línea de crédito asegurada<!-- Fido e Fido assicurato -->**: importe de la línea de crédito de gestión y la línea de crédito asegurada;

**Saldo de partidas<!-- Saldo partitario -->**: vuelve a mostrar los totales deudores/acreedores calculados por las partidas o por el saldo contable;

**Pagos por registrar provisionalmente<!-- Pagam. da reg. provv. -->**: importe de los pagos de partidas vinculados a registros provisionales;

**Efectos por vencer<!-- Effetti in scadenza -->**: importe de los efectos en maduración (efectos emitidos + presentados);

**Por contabilizar<!-- Da contabilizzare -->**: son los importes de las facturas (de los Tipos de factura vinculados a la línea de crédito) impresas pero aún no contabilizadas;

**Por facturar<!-- Da fatturare -->**: son los importes de los DDT (de los Tipos DDT vinculados a la línea de crédito) impresos pero aún no facturados;

**Total Exposición<!-- Tot. Esposizione -->**: suma de pedidos abiertos + ddt por facturar + facturas por contabilizar + saldo de partidas/cuentas<!-- partite/cont --> + efectos por vencer + impagados no contabilizados;

**Vencido<!-- Scaduto -->**: importe de las partidas abiertas y ya vencidas;

**Vencido por registrar provisionalmente<!-- Scaduto da reg. provv. -->**: igual que el anterior, pero derivado de registros provisionales;

**Pedidos<!-- Ordini -->**: son los importes de los pedidos (de los Tipos de pedido vinculados a la línea de crédito) impresos, confirmados pero aún no despachados.

Desde la máscara de exposición de clientes<!-- esposizione clienti --> es posible: imprimir los datos visualizados, o bien acceder a la máscara de ‘Control de remesas<!-- Controllo rimesse -->’ con respecto a la fila del cliente seleccionado, a través del botón correspondiente.

**Botones específicos<!-- Pulsanti specifici -->**

**Calcular<!-- Calcola -->** Botón para calcular el riesgo cliente de acuerdo a los filtros y configuraciones indicadas.

**Control de remesas<!-- Controllo rimesse -->** Llama al procedimiento para abrir la máscara de control de remesas.