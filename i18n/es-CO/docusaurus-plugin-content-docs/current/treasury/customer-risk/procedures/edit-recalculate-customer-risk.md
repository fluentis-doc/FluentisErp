---
title: Modificar - Recalcular riesgo cliente (Modifica - Ricalcola rischio cliente)
sidebar_position: 1
---

Las dos pantallas gestionan esencialmente la visualización del estado general del riesgo en relación con un cliente en particular: la ‘Recalcular riesgo cliente (Ricalcola rischio cliente)' es una simple solicitud puntual de la situación actual del cliente, mientras que la pantalla de modificación del procedimiento ‘Uso de créditos (Utilizzo fidi)' permite almacenar cada cálculo realizado y visualizar así una serie histórica.

Veamos en detalle la lista de campos visualizada, que es esencialmente la misma que está presente en la pantalla de exposición de clientes.

En la cabecera están los parámetros de cálculo: el código del cliente, la fecha de inicio del cálculo (establecida por defecto por los parámetros del módulo de riesgo cliente), la fecha final de referencia (establecida hasta hoy), el número de días de retraso para los efectos SBF y efectos al cobro (establecidos por los parámetros del módulo, a los que se remite), el indicador de consideración de las partidas relacionadas con registros provisionales. Al presionar el botón de cálculo aparecerán los siguientes valores:

**Fatt. 12M (Facturación 12 meses)**: es la facturación (del área de ventas, facturas de venta) de los 12 meses anteriores a la fecha de referencia;

**Fatturato anno (Facturación del año)**: es la facturación (del área de ventas, facturas de venta) desde el inicio del año;

En la sección **situazione partite aperte** serán visibles los totales deudores/acreedores y el saldo correspondiente a las partidas abiertas;

En la sección **Pagos de registros provisionales (Pagam da reg. provv.)** se visualizarán los posibles importes de pago ingresados en registros provisionales;

En la sección **situazione saldo contabile** serán visibles los totales deudores/acreedores y el saldo del libro mayor de contabilidad general;

**saldo partite/contabile**: repite los totales deudores/acreedores calculados a partir de las partidas o del saldo tal como se visualizó en las secciones anteriores;

**Fatture da contabilizzare (Facturas a contabilizar)**: son los importes de las facturas (de los Tipos de factura asociados al crédito) impresas pero no contabilizadas;

**Ddt da fatturare (DDT a facturar)**: son los importes de los DDT (de los Tipos de DDT asociados al crédito) impresos pero no facturados;

**Ordini da evadere (Órdenes a cumplir)**: son los importes de los pedidos (de los Tipos de orden asociados al crédito) impresos, confirmados pero no cumplidos;

**Effetti emessi (Efectos emitidos)**: son los importes de los efectos (del módulo de cartera de efectos) emitidos y contabilizados, pero no presentados;

**Effetti presentati allo sconto-al sbf-all'incasso (Efectos presentados al descuento-al SBF-al cobro)**: son los importes de los efectos presentados pero que tienen una fecha de vencimiento (más los días de los parámetros ingresados en la cabecera del cálculo) superior a la fecha de referencia;

Sección **insoluti (incobrables)**: aquí se visualizan los incobrables no contabilizados, o (si el indicador está activado) también aquellos ya contabilizados, tanto como importo como número relativo;

De la suma de los valores anteriores se calcula el ‘Riesgo cliente (Rischio cliente)', que comparado con el crédito concedido, dará el exceso sobre el crédito.

El campo **Scaduto (Vencido)** muestra el importe de las partidas abiertas pero ya vencidas, como un elemento adicional para analizar la situación del cliente.

| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Salvar (Salva) | El botón, presente en la modificación de un crédito ya calculado, permite almacenar el resultado obtenido. |
| Calcular (Calcola) | Llama al procedimiento para calcular la situación general de riesgo para el cliente. |