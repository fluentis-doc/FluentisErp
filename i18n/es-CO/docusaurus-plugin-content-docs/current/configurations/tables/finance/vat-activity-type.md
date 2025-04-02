---
title: tipo attività iva
sidebar_position: 22
---

En esta tabla es posible definir los tipos de actividad IVA realizadas por la empresa (si corresponde el caso) y asociar a cada tipo de actividad, en su caso, un prorrateo de deducción de IVA.

Los tipos configurados, a su vez, estarán asociados a los varios [**registri iva**](/docs/configurations/tables/finance/vat-books).

Es posible marcar la actividad principal que agrupará en las impresiones de las liquidaciones de IVA periódicas el crédito o débito de IVA.

En la impresión de la liquidación, se visualizarán automáticamente los detalles correspondientes a cada actividad individual y el resumen final.

**Código / Descripción (Codice / Descrizione):** libremente configurables para nombrar el tipo de actividad ingresado (ej. Producción... Inmobiliaria...)  

**Pro-rata:** campo para ingresar el porcentaje de deducción (100% deducción completa o porcentajes inferiores hasta 0 si la deducción es limitada); el campo tiene la misma lógica que el prorrateo general definible en los [**parametri di contabilità**](/docs/configurations/parameters/finance/accounting-parameters) y representa una posibilidad de detalle al poder establecerse en cada tipo de actividad individual.

**Actividad principal (Attività principale):** indicador para marcar el tipo de actividad realizada principalmente (en términos de facturación, ver las disposiciones fiscales).