---
title: riepiloghi
sidebar_position: 5
---

En los riepiloghi se presentan las principales informaciones del documento completo.

## Descuentos finales de artículos (Sconti finali articoli)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Gastos (Spese)

import SummariesExpenses from './../../../import/sections/summaries-expenses.md'

<SummariesExpenses />

## Totales del documento (Totali documento)

**importo lordo articoli**: representa la suma de los valores de todos los artículos;  
**acconto**: representa el valor del posible anticipo recibido para el documento;  
**importo omaggio**: representa el importe de los artículos de tipo obsequio incluidos en la pestaña *articoli*;  
**totale sconti applicati**: representa el valor total de los descuentos aplicados a los artículos, pero sin los descuentos finales;  
**importo netto articoli**: *importo lordo articoli* – *totale sconti applicati*;  
**totale sconti finali**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales (Importo netto sconti finali)**: *importo netto articoli* - *totale sconti finali*;  
**spese di incasso**: representa la suma de los gastos de recaudación incluidos en la cuadrícula de *spese*;  
**spese bollo**: representa la suma de los gastos de timbre incluidos en la cuadrícula de *spese*;  
**imponibile**: *importo netto articoli* – *sconti finali* + *Total de gastos no documentados (Totale spese non documentati)* + *Total de gastos documentados (Totale spese documentati)*;  
**imposta**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**totale**: *imponibile* + *IVA*.