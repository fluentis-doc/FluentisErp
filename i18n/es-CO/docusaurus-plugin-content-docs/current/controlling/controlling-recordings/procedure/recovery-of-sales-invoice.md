---
title: ripresa dati da fatture di vendita
sidebar_position: 2
---

El procedimiento **ripresa dati da fatture di vendita*** permite integrar nuestros datos de área con dos tipos de datos presentes en la facturación de ventas: las comisiones y los descuentos.

## RECUPERACIÓN DE COMISIONES (RIPRESA PROVVIGIONI)
Para las comisiones, la necesidad es registrar en el período los costos de las comisiones que, en cambio, la contabilidad registrará solo al momento en que se devengue la comisión, es decir, quizás solo en el momento del cobro total de la factura. Configuraremos como siempre:  
- el [**area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)  
- la **data***  
- el **anno***  
luego, a la derecha, ingresaremos:  
- la **causale***  
- el rango **da data*** y **a data*** de las fechas de factura a filtrar para extraer los datos.

## RECUPERACIÓN DE DESCUENTOS (RIPRESA SCONTI)
Los descuentos, por otro lado, son un valor que normalmente la contabilidad analítica no encuentra en los registros contables, que típicamente valoran el neto del ingreso y no el bruto menos el costo del descuento aplicado. En ciertos análisis podría ser interesante resaltar este costo oculto que la empresa asume para vender, de ahí la elaboración de estos datos.

Configuraremos como siempre:  
- el [**area***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)  
- la **conto*** en la que registrar estos costos comerciales  
- la **data***  
- el **anno***  
luego, a la derecha, ingresaremos:  
- la **causale***  
- el rango **da data*** y **a data*** de las fechas de factura a filtrar para extraer los datos.