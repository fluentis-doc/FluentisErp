---
title: riepiloghi
sidebar_position: 6
---

En los riepiloghi se presentan la información principal de todo el documento.

## Descuentos finales de artículos (Sconti finali articoli)

import SummariesFinalDiscount from './../../../import/sections/summaries-final-discount.md'

<SummariesFinalDiscount />

## Gastos (Spese)

Se proponen los gastos insertados en el registro de contacto, en la pestaña *spese/sconti*. En esta cuadrícula, los eventuales gastos deben ser ingresados como positivos, los eventuales descuentos como negativos.

Estos elementos se aplican a la totalidad del documento y no se distribuyen entre las líneas de los artículos. Pueden incluir costos adicionales, descuentos globales o recargos aplicados al documento completo. Si están configurados en el registro del artículo, se proponen automáticamente al momento de la creación del documento.

- **Tipo/Descripción (Tipo/Descrizione)**: permite elegir los tipos de gastos (predeterminados en la tabla [Tipos de gastos (Tipi spese)](/docs/configurations/tables/general-settings/expenses-types)), asignando a la tipología el porcentaje de gasto a aplicar.  
- **importo spesa**: indica el valor del gasto expresado en la moneda del documento.  
- **IVA**: indica el tipo de IVA a aplicar a los gastos insertados.  
- **percentuale/valore**: indica si calcular los gastos con un porcentaje o con un valor monetario predeterminado. Al seleccionar *valor*, el importe del gasto debe ser ingresado bajo la misma entrada.  
- **percentuale**: valor numérico del porcentaje de gasto.  

:::note Nota
Si el *tipo spesa* ingresado tiene el indicador [repartido (ripartito)](/docs/configurations/tables/general-settings/expenses-types) activo, durante la carga del regreso al almacén, el gasto será repartido entre todos los artículos según los importes totales de cada línea de artículo. El resultado de la repartición del gasto es visible en el [registro de almacén (registrazione di magazzino)](/docs/logistics/warehouse/stock-records/record).  
1. Si los artículos tienen un precio: el gasto total se repartirá proporcionalmente sobre los importes netos de cada artículo; el resultado se añadirá al precio inicial del artículo en el campo *totale importo* de la registración. Si para algunas líneas el importe es 0, se considerará como 1 para permitir la repartición del gasto entre todos los artículos.  
2. Si todos los artículos tienen un precio de 0: el gasto se distribuirá equitativamente entre todas las líneas de artículo y, a partir de esta distribución, se calculará el *importe del movimiento/importe de gestión (importo movimento/importo gestionale)* en la registración, teniendo en cuenta las cantidades de cada artículo.  
:::

## Totales del documento (Totali documento)

**importo lordo articoli**: representa la suma de los valores de todos los artículos;  
**acconto**: representa el valor del eventual anticipo recibido por el documento;  
**importo omaggio**: representa el importe de los artículos de tipo obsequio insertados en la pestaña *articoli*;  
**totale sconti applicati**: representa el valor total de los descuentos aplicados a los artículos, pero sin los descuentos finales;  
**importo netto articoli**: *importo lordo articoli* – *totale sconti applicati*;  
**totale sconti finali**: representa el valor de los descuentos finales expresados en porcentaje sobre el importe bruto de los artículos;  
**Importe neto de descuentos finales (Importo netto sconti finali)**: *importo netto articoli* - *totale sconti finali*;  
**spese di incasso**: representa la suma de los gastos de cobranza insertados en la cuadrícula de *spese*;  
**spese bollo**: representa la suma de los gastos de sello insertados en la cuadrícula de *spese*;  
**imponibile**: *importo netto articoli* – *sconti finali* + *Total de gastos no documentados (Totale spese non documentati)* + *Total de gastos documentados (Totale spese documentati)*;  
**imposta**: representa la suma de los valores contenidos en los resúmenes de IVA;  
**totale**: *imponibile* + *IVA*.