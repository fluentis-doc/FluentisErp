---
title: riepiloghi
sidebar_position: 5
---

En los riepiloghi se presentan las informaciones principales de todo el documento.

## Descuentos finales (Sconti finali)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Gastos/Descuentos/Aumentos finales (Spese/Sconti/Maggiorazioni finali)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

## Otros campos (Altri campi)

**volume**: se propone el volumen acumulativo, resultado de la suma de los volúmenes de los artículos (el valor se toma de '*Registro de artículos (Anagrafica articolo) > pestaña Pesos/Dimensiones (tab Pesi/Dimensioni)*'), cuando la unidad de medida del volumen de los artículos corresponde a la que se inserta en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**peso netto**: se propone el peso neto acumulativo, resultado de la suma de los pesos de los artículos (el valor se toma de '*Registro de artículos (Anagrafica articolo) > pestaña Pesos/Dimensiones (tab Pesi/Dimensioni)*'), cuando la unidad de medida del peso de los artículos corresponde a la que se inserta en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**peso lordo**: se propone el peso bruto acumulativo, resultado de la suma de los pesos de los artículos (el valor se toma de '*Registro de artículos (Anagrafica articolo) > pestaña Pesos/Dimensiones (tab Pesi/Dimensioni)*'), cuando la unidad de medida del peso de los artículos corresponde a la que se inserta en los parámetros de la factura. Solo se consideran los artículos que tienen este campo completado;  
**colli**: se propone el número de bultos, basándose en los datos ingresados en '*Registro de artículos (Anagrafica articolo) > pestaña Pesos/Dimensiones (tab Pesi/Dimensioni)*', en los campos *articoli presenti in un collo* o *colli per formare l'articolo*. Solo se consideran los artículos que tienen este campo completado.  

## Transporte (Trasporto)

Se propone automáticamente el *trasporto a cura del* presente en '*Registro del contacto (Anagrafica del contatto) > pestaña [Entrega (Consegna)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/delivery)*' (botón de opción: Remitente/Destinatario/Transportista), pero los datos pueden ser modificados.

## Totales del documento (Totali documento)

**importo lordo articoli**: representa la suma de los valores de todos los artículos;  
**acconto**: representa el valor del eventual anticipo recibido por el documento;  
**importo omaggio**: representa el importe de los artículos tipo obsequio incluidos en la pestaña *Artículos*;  
**totale sconti applicati**: representa el valor total de los descuentos aplicados a los artículos, pero sin los descuentos finales;  
**importo netto articoli**: *Importe bruto de artículos* – *Total de descuentos aplicados*;  
**totale sconti finali**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales (Importo netto sconti finali)**: *Importe neto de artículos* - *Total de descuentos finales*;  
**spese di incasso**: representa la suma de los gastos de cobro ingresados en la cuadrícula de *Gastos*;  
**spese bollo**: representa la suma de los gastos de impuestos ingresados en la cuadrícula de *Gastos*;  
**imponibile**: *Importe neto de artículos* – *Descuentos finales* + *Total de gastos no documentados* + *Total de gastos documentados*;  
**imposta**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**totale**: *Base imponible* + *IVA*.