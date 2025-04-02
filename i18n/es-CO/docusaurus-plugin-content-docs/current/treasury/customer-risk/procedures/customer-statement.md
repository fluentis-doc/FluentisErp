---
title: esposizione clienti
sidebar_position: 2
---

El formulario se encuentra en Tesorería > Riesgo Cliente > Procedimientos > esposizione clienti (Esposizione clienti).

Permite tener una visión general de toda la situación de riesgo con respecto a los diferentes clientes, con la posibilidad de obtener datos por agente, país, agrupando también por grupos corporativos. 

## Cómo verificar la exposición de clientes (Come verificare l'esposizione clienti)

1. Expandir, si es necesario, la sección de filtros para ingresar el intervalo de fechas de referencia dentro del cual verificar y el criterio de agrupamiento deseado (Por país, por agente o por cliente).

2. Presionar el botón **ricerca**: los clientes presentados en la máscara son aquellos para los cuales en el registro se ha activado el indicador *esposizione clienti*.

:::note[Nota]
La sección inicial de los *parametri rischio cliente* repite los mismos parámetros predeterminados de cálculo configurados para el módulo, además del rango de fechas de registro utilizado para el control de remesas (para más detalles, consulte el siguiente documento).
:::

:::note[Filtros adicionales disponibles]
Es posible filtrar por un responsable determinado (el empleado que ha sido asociado al registro del cliente, primera pestaña *amministrazione*), filtrar los clientes *esteri* o *Italia*, visualizar los datos agrupados por *grupo corporativo* (se mostrará un solo total para la subcuenta ingresada en el campo del *grupo corporativo* presente en la pestaña *administración* del registro del cliente en lugar de las subcuentas detalladas) y, finalmente, agrupar (y filtrar) los datos por agente o país. 

Está prevista la posibilidad de ordenar los datos por código de cuenta/subcuenta o por descripción (razón social) del cliente.
:::

### Datos visualizados en la cuadrícula (Dati visualizzati in griglia)

Se visualizarán en rojo las filas con desviaciones.

**insoluti**: se muestra aquí el importe de los impagos no contabilizados, o (si el indicador en encabezado está activado) también los ya contabilizados;  

**Fact. últimos 12 meses (Fatt. ultimi 12 mesi)**: es el volumen de negocio (desde el área de ventas, facturas de venta) de los 12 meses anteriores a la fecha de referencia;  

**Desviación de días (Scostamento giorni)**: indica el número de días de desviación entre la fecha de vencimiento media y la fecha media de cobro, según lo calculado con la lógica del formulario ‘Control de remesas' al que se remite para más detalles; La particularidad es que es un promedio ponderado sobre el importe de la partida. De hecho, el dato se expresa en números a favor (como en un extracto bancario).

**Desviación días de vencimiento (Scostamento GG scad.)**: indica los días de desviación media de la fecha de vencimiento respecto a la fecha del documento; considera solo las partidas vencidas = SUMA (residuo de la partida * días hasta hoy de retraso desde la fecha de vencimiento) / suma de los residuos de las partidas. Por lo tanto, calcula un valor medio de los retrasos.  

**fatturato**: es el volumen de negocio (desde el área de ventas, facturas de venta) desde el comienzo del año;  

**Días medios de cobro (Giorni medi incasso)**: equivale al indicador denominado DSO (Días de Ventas Pendientes), los días de rotación del crédito. La fórmula de cálculo es 365 * (Partidas a cobrar – Partidas a pagar + Efectos vencidos + Impagos + Facturas por contabilizar) / Volumen de negocio últimos 12 meses. En caso de que el volumen de negocio de los últimos 12 meses sea 0, entonces el DSO también será 0;  

**Crédito (Fido) y crédito asegurado (Fido assicurato)**: importe del crédito de gestión y del crédito asegurado;  

**Saldo por partida (Saldo partitario)**: repite los totales deudores/acreedores calculados a partir de las partidas o del saldo contable;  

**Pagos de registros provisionales (Pagam. da reg. provv.)**: importe de los pagos de partidas vinculados a registros provisionales;  

**Efectos en vencimiento (Effetti in scadenza)**: importe de los efectos en maduración (efectos emitidos + presentados);  

**da contabilizzare**: son los importes de las facturas (de los tipos de factura vinculados al crédito) generadas pero aún no contabilizadas;  

**da fatturare**: son los importes de los DDT (de los tipos de DDT vinculados al crédito) generados pero aún no facturados;  

**Total de exposición (Tot. Esposizione)**: suma de pedidos abiertos + DDT por facturar + facturas por contabilizar + saldo de partidas/cuentas + efectos pendientes + impagos no contabilizados;  

**scaduto**: importe de las partidas abiertas y ya vencidas;  

**Vencido de registros provisionales (Scaduto da reg. provv.)**: como el anterior, pero derivado de registros provisionales;  

**ordini**: son los importes de los pedidos (de los tipos de pedidos vinculados al crédito) generados, confirmados pero aún no cumplidos.

Desde la máscara de la exposición de clientes es posible: realizar una impresión de los datos visualizados, o pasar a la máscara de ‘Control de remesas' en relación con la fila del cliente seleccionado, a través del correspondiente botón de gestión.



**Botones específicos**

**calcola**: Botón para calcular el riesgo de los clientes según los filtros y las configuraciones indicadas.  

**controllo rimesse**: Invoca el procedimiento para abrir la máscara de control de remesas.