---
title: Modificar - Recalcular riesgo cliente
sidebar_position: 1
ai_generated: true
---

Las dos pantallas gestionan fundamentalmente la visualización del estado general del riesgo frente a un cliente<!-- cliente --> determinado: el 'Recalcular riesgo cliente' es una simple consulta puntual de la situación actual del cliente<!-- cliente -->, mientras que la pantalla de modificación del procedimiento 'Uso de líneas de crédito<!-- Utilizzo fidi -->' permite almacenar cada cálculo realizado y visualizar así una serie histórica.

Veamos en detalle la lista de los campos visualizados, que es básicamente la misma presente también en la pantalla de exposición de clientes<!-- esposizione clienti -->.

En el encabezado se encuentran los parámetros de cálculo: el código del cliente<!-- cliente -->, la fecha de inicio del cálculo (definida por defecto desde los parámetros del módulo de riesgo cliente<!-- rischio cliente -->), la fecha final de referencia (definida hasta el día de hoy), el número de días de retraso para los efectos sbf y efectos después de cobro (definidos por los parámetros del módulo, que se detallan allí), el flag para considerar partidas<!-- partite --> vinculadas a registros provisionales<!-- registrazioni provvisorie -->. Al pulsar el botón de cálculo aparecerán los siguientes valores:

**Fact. 12M**: es la facturación (del área de ventas, facturas de venta) de los 12 meses anteriores a la fecha de referencia;

**Facturación anual**: es la facturación (del área de ventas, facturas de venta) desde el inicio del año;

En la sección **Situación de partidas abiertas<!-- Situazione partite aperte -->** serán visibles los totales debe/haber y el saldo relativo a las partidas abiertas<!-- partite aperte -->;

En la sección **Pagos desde registros provisionales<!-- Pagam da reg. provv. -->** se visualizarán los eventuales importes de pago ingresados en registros provisionales<!-- registrazioni provvisorie -->;

En la sección **Situación de saldo contable<!-- Situazione saldo contabile -->** serán visibles los totales debe/haber y el saldo del libro mayor<!-- mastrino --> de contabilidad general;

**Saldo partidas/contable<!-- Saldo partite/contabile -->**: reproduce los totales debe/haber calculados a partir de las partidas<!-- partite --> o del saldo tal como se muestra en las secciones anteriores;

**Facturas por contabilizar<!-- Fatture da contabilizzare -->**: son los importes de las facturas (de los tipos de factura relacionadas con la línea de crédito<!-- fido -->) impresas pero aún no contabilizadas;

**Remitos por facturar<!-- Ddt da fatturare -->**: son los importes de los remitos<!-- DDT --> (de los tipos de remitos relacionados con la línea de crédito<!-- fido -->) impresos pero aún no facturados;

**Órdenes por despachar<!-- Ordini da evadere -->**: son los importes de las órdenes<!-- ordini --> (de los tipos de órdenes relacionadas con la línea de crédito<!-- fido -->) impresas, confirmadas pero no despachadas aún;

**Efectos emitidos<!-- Effetti emessi -->**: son los importes de los efectos<!-- effetti --> (del módulo de cartera<!-- portafoglio effetti -->) emitidos y contabilizados, pero aún no presentados;

**Efectos presentados a descuento/a sbf/a cobro<!-- Effetti presentati allo sconto-al sbf-all'incasso -->**: son los importes de los efectos<!-- effetti --> presentados que tienen una fecha de vencimiento (más los días de los parámetros fijados en el encabezado del cálculo) posterior a la fecha de referencia;

Sección** impagos<!-- insoluti -->**: aquí se visualizan los impagos<!-- insoluti --> no contabilizados, o (si el flag está activado) también aquellos ya contabilizados, tanto por importe como por número correspondiente;

De la suma de los valores anteriores se calcula el 'Riesgo cliente<!-- Rischio cliente -->', que comparado con la línea de crédito<!-- fido --> concedida, mostrará el exceso sobre dicha línea.

El campo **Vencido<!-- Scaduto -->** visualiza el importe de las partidas<!-- partite --> abiertas pero ya vencidas, como otro elemento de análisis de la situación del cliente<!-- cliente -->.

| Función | Significado |
| --- | --- |
| Guardar<!-- Salva --> | El botón, presente al modificar una línea de crédito<!-- fido --> ya calculada, permite almacenar el resultado obtenido. |
| Calcular<!-- Calcola --> | Llama al procedimiento para calcular la situación completa de riesgo para el cliente<!-- cliente -->. |