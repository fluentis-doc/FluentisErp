---
title: Recuperación de datos desde facturas de venta
sidebar_position: 2
ai_generated: true
---

El procedimiento ***Recuperación de datos desde facturas de venta<!-- Ripresa dati da fatture di vendita -->*** permite integrar nuestros datos de área<!-- area --> con dos tipos de datos presentes en la facturación de ventas: las comisiones y los descuentos.

## RECUPERACIÓN DE COMISIONES<!-- RIPRESA PROVVIGIONI -->
En cuanto a las comisiones, la necesidad es registrar en el periodo los costos de las comisiones<!-- provvigioni --> que, en cambio, la contabilidad reconocerá solo en el momento en que la comisión<!-- provvigione --> se haya devengado, es decir, tal vez solo al momento del cobro total de la factura. Configuraremos, como siempre,
- el [***Área<!-- Area -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- la ***Fecha<!-- Data -->***
- el ***Año<!-- Anno -->***
luego, a la derecha, ingresaremos
- la ***Causal<!-- Causale -->***
- el rango ***Desde fecha<!-- Da data -->*** y ***Hasta fecha<!-- A data -->*** de fechas de factura a filtrar para extraer los datos.

## RECUPERACIÓN DE DESCUENTOS<!-- RIPRESA SCONTI -->
Los descuentos, en cambio, suelen ser valores que normalmente la contabilidad analítica<!-- contabilità analitica --> no detecta en los asientos contables, que típicamente valoran el neto del ingreso y no el bruto menos el costo del descuento aplicado. En ciertos análisis, podría ser interesante mostrar este costo oculto que la empresa asume para vender, de ahí la elaboración de estos datos.

Configuraremos, como siempre,
- el [***Área<!-- Area -->***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)
- la ***Cuenta<!-- Conto -->*** en la que registrar estos costes comerciales
- la ***Fecha<!-- Data -->***
- el ***Año<!-- Anno -->***
luego, a la derecha, ingresaremos
- la ***Causal<!-- Causale -->***
- el rango ***Desde fecha<!-- Da data -->*** y ***Hasta fecha<!-- A data -->*** de fechas de factura a filtrar para extraer los datos.