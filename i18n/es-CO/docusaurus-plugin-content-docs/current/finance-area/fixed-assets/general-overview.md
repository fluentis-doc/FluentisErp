---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo **cespiti** permite al operador gestionar los bienes de uso plurianual presentes en la empresa.  
El módulo se encuentra en el *Área administrativa* y se actualiza en compra/venta a través de los registros de contabilidad general basados en causales específicas que prevean su movimiento, pero los registros de este módulo también se pueden introducir y alinear manualmente. Desde este módulo se realizan los cálculos de la depreciación contable/fiscal, así como las simulaciones plurianuales y las impresiones fiscales.  
Antes de proceder con la introducción o la creación de un activo, es necesario asegurarse de que se han configurado correctamente todos los datos tabulares y los parámetros del módulo.

*Impresiones específicas (Stampe specifiche)*  

> [Impresión de compra de activos anuales (Stampa Acquisto cespiti annuali)](/docs/finance-area/fixed-assets/reports-fixed-assets/yearly-fixed-assets-purchase): llama al procedimiento para imprimir la lista de los activos comprados en el año.  
> [Impresión de depreciación de activos (Stampa Ammortamento cespiti)](/docs/finance-area/fixed-assets/reports-fixed-assets/fixed-assets-depreciation): llama al procedimiento para imprimir la lista de depreciaciones de activos.  
> [Impresión de libro de activos depreciables (Stampa Libro Cespiti ammortizzabili)](/docs/finance-area/fixed-assets/reports-fixed-assets/depreciable-fixed-assets-journal): llama al procedimiento para imprimir el registro anual de los activos.  
> [Impresión de resumen de revalorizaciones (Stampa Prospetto rivalutazioni)](/docs/finance-area/fixed-assets/revaluations-prospect): llama al procedimiento para imprimir el resumen de revalorizaciones.  
> [Impresión de resumen por tipo de operación (Stampa Riepilogo per tipo operazione)](/docs/finance-area/fixed-assets/reports-fixed-assets/summary-per-operation-type): llama al procedimiento para imprimir un resumen por tipo de operación.  
> [Impresión de fichas de activos (Stampa Schede cespiti)](/docs/finance-area/fixed-assets/reports-fixed-assets/fixed-assets-sheets): llama al procedimiento para imprimir las fichas individuales de activos.  

*Procedimientos específicos (Procedure specifiche)*

> [Depreciación de activos (Ammortamento cespite)](/docs/finance-area/fixed-assets/procedures/fixed-asset-depreciation/fixed-assets-depreciation): llama al procedimiento para calcular automáticamente las depreciaciones de los activos.  
> [Contabilización de depreciaciones (Contabilizzazione ammortamenti)](/docs/finance-area/fixed-assets/accounting/depreciations-accounting): llama al procedimiento para contabilizar automáticamente las depreciaciones.  
> [Simulación de planes de depreciación (Simulazione piani di ammortamento)](/docs/finance-area/fixed-assets/depreciation-plans-simulation): llama al procedimiento para realizar la simulación de los planes de depreciación.  

**Tablas necesarias para gestionar el módulo (Tabelle necessarie per gestire il modulo)**:  
[Piano de cuentas (Piano dei conti)](/docs/erp-home/registers/accounting/analytic-chart-of-accounts),  

[Tipos de IVA (Aliquote IVA)](/docs/configurations/tables/finance/vat-rates),  

[Tasas de cambio fijas en euros (Cambi fissi euro)](/docs/configurations/tables/finance/euro-fixed-exchanges),  

[Tasas de cambio de divisas (Cambi valute)](/docs/configurations/tables/finance/currency-exchange),  

[**categoria cespite**](/docs/configurations/tables/finance/fixed-asset-category),  

[Planes de depreciación alternativos (Piani di ammortamento alternativi)](/docs/configurations/tables/finance/alternative-depreciation-plans),  

[Código precursor de activos (Precodice cespite)](/docs/configurations/tables/finance/fixed-asset-precode),  

[Propiedad del activo (Proprietà cespite)](/docs/configurations/tables/finance/fixed-asset-property), Tipos de contabilización de activos,  

[Tipos de depreciación objetivas (Tipi ammortamenti oggetivi)](/docs/configurations/tables/finance/objective-amortization-types),  

[Tipos de deducción (Tipi deducibilità)](/docs/configurations/tables/finance/deductibility-types),  

[Tipos de revalorización (Tipi rivalutazione)](/docs/configurations/tables/finance/revaluation-types).

**parametri**: [Parámetros de activos (Parametri cespiti)](/docs/configurations/parameters/finance/fixed-assets-parameters).