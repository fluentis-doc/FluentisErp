---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo **Activos fijos<!-- Cespiti -->** permite al operador gestionar los bienes de uso plurianual presentes en la empresa.  
El módulo está presente en el *Área administrativa<!-- Area amministrativa -->* y se actualiza en la compra/venta a partir de las registraciones<!-- registrazioni --> de contabilidad general con causales específicas que prevén su movimiento<!-- movimentazione -->, pero los datos maestros de este módulo también se pueden introducir y alinear manualmente. Desde este módulo se realizan los cálculos de las amortizaciones legales/fiscales, así como las simulaciones a varios años y los listados fiscales.  
Antes de proceder a la introducción o realización de un activo fijo<!-- cespite --> es necesario asegurarse de haber configurado correctamente todos los datos tabulares así como los parámetros del módulo.

*Listados específicos<!-- Stampe specifiche -->*  

> [Listado de compra anual de activos fijos<!-- Stampa Acquisto cespiti annuali -->](/docs/finance-area/fixed-assets/reports-fixed-assets/yearly-fixed-assets-purchase): invoca el procedimiento para imprimir la lista de los activos fijos<!-- cespiti --> comprados en el año.  
> [Listado de amortización de activos fijos<!-- Stampa Ammortamento cespiti -->](/docs/finance-area/fixed-assets/reports-fixed-assets/fixed-assets-depreciation): invoca el procedimiento para imprimir la lista de las amortizaciones de los activos fijos<!-- ammortamenti cespiti -->.  
> [Libro de activos fijos amortizables<!-- Stampa Libro Cespiti ammortizzabili -->](/docs/finance-area/fixed-assets/reports-fixed-assets/depreciable-fixed-assets-journal): invoca el procedimiento para imprimir el registro anual de los activos fijos<!-- cespiti -->.  
> [Listado de revalorizaciones<!-- Stampa Prospetto rivalutazioni -->](/docs/finance-area/fixed-assets/revaluations-prospect): invoca el procedimiento para imprimir el listado de las revalorizaciones.  
> [Resumen por tipo de operación<!-- Stampa Riepilogo per tipo operazione -->](/docs/finance-area/fixed-assets/reports-fixed-assets/summary-per-operation-type): invoca el procedimiento para imprimir un resumen por tipo de operación.  
> [Ficha de activos fijos<!-- Stampa Schede cespiti -->](/docs/finance-area/fixed-assets/reports-fixed-assets/fixed-assets-sheets): invoca el procedimiento para imprimir las fichas individuales de los activos fijos<!-- schede cespiti -->.  


*Procedimientos específicos<!-- Procedure specifiche -->*

> [Amortización de activo fijo<!-- Ammortamento cespite -->](/docs/finance-area/fixed-assets/procedures/fixed-asset-depreciation/fixed-assets-depreciation): invoca el procedimiento para calcular automáticamente las amortizaciones de los activos fijos<!-- ammortamenti dei cespiti -->.  
> [Contabilización de amortizaciones<!-- Contabilizzazione ammortamenti -->](/docs/finance-area/fixed-assets/accounting/depreciations-accounting): invoca el procedimiento para contabilizar automáticamente las amortizaciones.  
> [Simulación de planes de amortización<!-- Simulazione piani di ammortamento -->](/docs/finance-area/fixed-assets/depreciation-plans-simulation): invoca el procedimiento para realizar la simulación de los planes de amortización.  


**Tablas necesarias para gestionar el módulo**: 
[Plan de cuentas<!-- Piano dei conti -->](/docs/erp-home/registers/accounting/analytic-chart-of-accounts),  

[Tarifas de IVA<!-- Aliquote IVA -->](/docs/configurations/tables/finance/vat-rates),  

[Tipos de cambio fijo euro<!-- Cambi fissi euro -->](/docs/configurations/tables/finance/euro-fixed-exchanges),  

[Tipos de cambio de monedas<!-- Cambi valute -->](/docs/configurations/tables/finance/currency-exchange),  

[**Categoría de activo fijo<!-- Categoria cespite -->**](/docs/configurations/tables/finance/fixed-asset-category), 

[Planes de amortización alternativos<!-- Piani di ammortamento alternativi -->](/docs/configurations/tables/finance/alternative-depreciation-plans),  

[Precódigo de activo fijo<!-- Precodice cespite -->](/docs/configurations/tables/finance/fixed-asset-precode),  

[Propiedad del activo fijo<!-- Proprietà cespite -->](/docs/configurations/tables/finance/fixed-asset-property), Tipos de contabilización de activos fijos<!-- Tipi contabilizzazione cespiti -->,  

[Tipos de amortización objetiva<!-- Tipi ammortamenti oggetivi -->](/docs/configurations/tables/finance/objective-amortization-types),  

[Tipos de deducibilidad<!-- Tipi deducibilità -->](/docs/configurations/tables/finance/deductibility-types),  

[Tipos de revalorización<!-- Tipi rivalutazione -->](/docs/configurations/tables/finance/revaluation-types).


**Parámetros<!-- Parametri -->**:   [Parámetros de activos fijos<!-- Parametri cespiti -->](/docs/configurations/parameters/finance/fixed-assets-parameters).