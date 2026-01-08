---
sidebar_position: 1
title: ÁREA ADMINISTRATIVA
---

## Funcionalidades

El área dedicada a la **gestión administrativa** de **Fluentis ERP** contempla las funcionalidades necesarias para la correcta **gestión de los asientos contables**, la elaboración del **balance** del ejercicio y el cumplimiento de las obligaciones **fiscales** que normalmente gestiona directamente la empresa.

Además, existen funcionalidades para la gestión de **activos fijos**, **leasing** y **préstamos pasivos**, así como funcionalidades fundamentales para quienes operan con el exterior, tales como la confección automatizada de los listados **Intrastat** y otras comunicaciones fiscales relacionadas con transacciones con contrapartes extranjeras.

La gestión de la contabilidad está integrada con el ciclo pasivo y activo, la facturación electrónica, con el *Almacén* y el *Control de gestión*.

### Detalle de funcionalidades


import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/ledger-records/intro/">Asientos contables</Link>
        <p>para el ingreso de movimientos contables y movimientos IVA relacionados, así como los procedimientos automáticos asociados (ajustes y cierres de cuentas).</p>
        <p>Incluye los necesarios</p>
        <p><Link to="/docs/finance-area/ledger-records/accounting-report/trial-balance" className="bold-link">Informes contables</Link></p>
        <p>Extractos de cuenta, balance de prueba, etc.</p>
        <p><Link to="/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet" className="bold-link">Informes fiscales</Link></p>
        <p>libro diario, registros IVA, liquidaciones IVA, etc.</p>
        <p><Link to="/docs/finance-area/ledger-records/analytic-reports/cost-centres-analysis" className="bold-link">Informes analíticos</Link></p>
        <p>para el control de movimientos en los centros de costo de la contabilidad analítica</p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/maturity-values/intro">Cuentas por cobrar y pagar</Link>
        <p>módulo para la gestión de cuentas abiertas que alimentan los calendarios de vencimientos de clientes y proveedores. Se alimenta principalmente de manera automática por los movimientos contables y puede consultarse de varias maneras (en pantalla o mediante los reportes del módulo)</p>
        <p>Incluye</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/loans-management" className="bold-link">Gestión de préstamos pasivos</Link></p>
        <p>Para el cálculo de planes de amortización y contabilización automática de cuotas de préstamo</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/dunned-maturity-values" className="bold-link">Gestión de recordatorios de pago</Link></p>
        <p>Para la generación automática y el envío de recordatorios a los clientes</p> 
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/commissions" className="bold-link">Comisiones de agentes</Link></p>
        <p>Para la gestión de comisiones directamente desde la contabilidad, como alternativa al módulo de Ventas</p>
        <p><Link to="/docs/finance-area/maturity-values/procedures/cash-management" className="bold-link">Gestión de liquidez</Link></p>
        <p>Para la verificación y gestión de la disponibilidad bancaria y eventualmente trasladar/posponer el compromiso o cambiar el banco</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/declarations/intro">Declaraciones</Link>
        <p>módulo para la elaboración de declaraciones fiscales, en particular obligaciones relacionadas con el IVA y las retenciones</p>
        <p>Entre las varias funcionalidades contiene</p>
        <p><Link to="/docs/finance-area/declarations/declarations/withholding-tax-certification" className="bold-link">Certificación electrónica de retenciones</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/periodic-vat-calculation" className="bold-link">Comunicación de liquidaciones periódicas de IVA</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/intent-declaration" className="bold-link">Declaraciones de intención</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/plafond/general-overview" className="bold-link">Plafond IVA</Link></p>
        <p><Link to="/docs/finance-area/declarations/intrastat/general-overview" className="bold-link">Listados Intrastat</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/professional-men/general-overview">Perceptores</Link>
        <p>módulo específico para la gestión de proveedores profesionales que emiten facturas y están sujetos a retención (incluidos agentes comerciales)</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/model-f24/f24-management" className="bold-link">Modelo F24</Link></p>
        <p>Para la gestión automatizada de pagos IVA y retenciones</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/calculate-commissions" className="bold-link">Cálculo de comisiones</Link></p>
        <p>Para la gestión de agentes directamente desde el área administrativa como alternativa al área de ventas</p>
        <p><Link to="/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro" className="bold-link">Enasarco</Link></p>
        <p>Para la contabilización de las contribuciones de los agentes</p>
        <p><Link to="/docs/finance-area/professional-men/reports/agent-reports" className="bold-link">Informes de agentes</Link></p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/fixed-assets/general-overview">Activos fijos</Link>
        <p>módulo para la gestión de bienes amortizables, con los correspondientes procedimientos de depreciación y reportes necesarios</p>
        <p>Entre las varias funcionalidades contiene</p>
        <p><Link to="/docs/finance-area/fixed-assets/depreciation-plans-simulation" className="bold-link">Simulación de planes de depreciación --></Link></p>
        <p><Link to="/docs/finance-area/fixed-assets/procedures/fixed-asset-depreciation/fixed-assets-depreciation" className="bold-link">Depreciación ordinaria</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/leasing/intro">Leasing</Link>
        <p>módulo específico para la gestión y contabilización de operaciones de leasing</p>
        <p>También incluye</p>
        <p><Link to="/docs/finance-area/leasing/procedures/maxifee-accrual-calculation" className="bold-link">Cálculo prorrateado de Maxicanone</Link></p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/finance-area/e-invoice/intro">Facturación electrónica</Link>
        <p>módulo ubicado en esta sección de la guía aunque es transversal, con el fin de ilustrar los detalles necesarios desde el punto de vista administrativo y las posibilidades de gestión y contabilización automática de las facturas electrónicas</p>
        <p><Link to="/docs/finance-area/sdi-documents/sdi-documents-intro" className="bold-link">Introducción</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/configuration_einvoice" className="bold-link">Configuraciones para etiquetas y campos específicos de la factura electrónica</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/bizlink-connection" className="bold-link">Configuraciones iniciales</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/auto-invoice/parameters" className="bold-link">Autofacturación automática</Link></p>
        <p>para ciertos tipos de compras tales como reverse charge, intracomunitarias UE y servicios extra UE</p>
        <p><Link to="/docs/finance-area/sdi-documents/incoming-purchase-documents" className="bold-link">Gestión de facturas electrónicas de compra</Link></p>
        <p>Existen subsecciones para contabilización automática y creación de documentos del ciclo pasivo.</p>
    </div>
</div>

## Datos básicos
:::danger[Atención]
Antes de utilizar las funcionalidades disponibles es necesario gestionar una serie de datos básicos: estos están divididos en dos grandes grupos, [**Tablas**](/docs/configurations/tables/finance/general-overview) y [**Parámetros**](/docs/configurations/parameters/finance/general-overview).

Alternativamente, está disponible el procedimiento de **Fast Start** que se describe a continuación.

Al activar Fast Start, solo será necesario gestionar un conjunto mínimo de datos como los [**Registros maestros**](/docs/erp-home/registers/registers-intro).
:::

## Procedimiento Fast Start

:::important[**Fast Start**]
La principal característica del área administrativa es su *cumplimiento* con las normativas contables y fiscales y la posibilidad de inicializar un [**entorno *FastStart* totalmente listo para su uso**](/docs/guide/fast-start) y configurado para cumplir las normas y permitir un uso inmediato.

El usuario puede configurar en cualquier momento los esquemas contables, códigos IVA, libros, etc. según sus necesidades.
:::


## Flujo de ingreso de datos

La flexibilidad del módulo permite el ingreso de datos de diferentes formas:

- **Manualmente**, mediante la [**introducción directa de asientos contables**](/docs/finance-area/ledger-records/records/ledger-record). Con este método generalmente se ingresan asientos de ajuste que NO están incluidos en los procedimientos automáticos (cuentas por cobrar, cuentas por pagar y depreciaciones) como **provisiones a fondos de riesgos y gastos, depreciación de créditos** y otros asientos como **registro de nómina de empleados**, etc.
 
- **Automáticamente**, gracias a la **interconexión con otros módulos del sistema de gestión**, tales como tesorería, control de gestión y los ciclos activos y pasivos. Típicamente se registran automáticamente las **facturas de venta y compra, pagos vía transferencia bancaria y efectos pasivos, cobros mediante efectos activos o pagarés, cánones de leasing, cuotas de préstamo, etc.

- **Procesamiento de procedimientos y elaboraciones**: que leen los datos básicos para **realizar cálculos y producir documentos o flujos telemáticos** (por ejemplo, la elaboración de una **declaración fiscal** que lee los datos IVA generados por los asientos contables), o bien generan nuevos asientos contables o, en general, nuevos datos (por ejemplo, los procedimientos de cálculo y almacenamiento de **asientos de ajuste** o de **cierres y reaperturas de cuentas** al final y al inicio del año fiscal)


## Flujo de trabajo típico del área administrativa

Aunque los diferentes módulos permiten flexibilidad y la posibilidad de gestionar los datos de varias formas, automática o manualmente, a continuación se presenta un flujo de trabajo típico y completo que involucra el área administrativa y otras áreas estrechamente relacionadas.

- [**Apertura inicial de saldos**](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new) del balance (asistente auxiliar como alternativa al ingreso manual mediante asiento contable) o [importación<!-- import -->](/docs/applications/bizlink/template-example/import-posting-ledgers) desde otro sistema o reapertura automática de [cierre del año anterior<!-- chiusura anno precedente -->](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)
- [Importación de partidas abiertas](/docs/applications/bizlink/template-example/import-open-matutities), solo necesaria en caso de migración de otro sistema
- [Importación de activos fijos](/docs/applications/bizlink/template-example/import-fixed-assets), solo necesaria en caso de migración de otro sistema. Las adquisiciones en el año cargan automáticamente las fichas de activos fijos mediante los respectivos asientos contables (utilizando las plantillas contables adecuadas)
- **Asientos contables** (procedimiento automático) del ciclo [**activo**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) y **pasivo** (también a partir de [facturas electrónicas](/docs/finance-area/sdi-documents/incoming-purchase-documents) recibidas)
- Gestión de las [**Partidas Abiertas**](/docs/finance-area/maturity-values/intro), automática, vinculada a la creación de movimientos contables tanto de facturación como de cobro y pago
- Registros de **cobros** y **pagos** (procedimiento automático, alternativamente o para algunos tipos se puede proceder con registros manuales). Para los cobros, típicamente se automatiza el flujo de [**efectos bancarios<!-- Ricevute bancarie -->**](/docs/treasury/bills-holding/accounting/bills-accounting). Para los pagos, típicamente se automatiza el flujo de [**transferencias bancarias**](/docs/treasury/vendors-payments/accounting/vendor-payments-accounting). Procedimientos incluidos en el [**área de tesorería**](/docs/treasury/treasury-intro)
- Reportes contables corrientes de [extractos de cuenta](/docs/finance-area/ledger-records/accounting-report/account-statement) (*mayores*), [balances de comprobación](/docs/finance-area/ledger-records/accounting-report/trial-balance), [del ejercicio](/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet) y [libro diario](/docs/finance-area/ledger-records/fiscal-report/journal).
- Reportes de [partidas abiertas](/docs/finance-area/maturity-values/reports/account-statement-on-open-maturity-values) clientes-proveedores como [vencimientos](/docs/finance-area/maturity-values/reports/customer-vendor-due-register) etc.
- [**Liquidación**](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement) periódica del **IVA**
- Otras [obligaciones](/docs/finance-area/declarations/intro) fiscales periódicas
- Gestión de la recepción de [honorarios](/docs/finance-area/professional-men/general-overview) de profesionales y [Agentes](/docs/sales/agents/procedures/create-professional-man-commission) comerciales (funcionalidad ubicada en el área de Ventas) y [certificado único](/docs/finance-area/declarations/declarations/withholding-tax-certification) de las retenciones anuales
- Elaboración (opcional) mediante las funciones del área de [Control de gestión](/docs/controlling/mid-year-closures/general-overview) de situaciones contables periódicas detalladas. El periodo objeto del informe puede elegirse libremente y pueden asociarse algunos procedimientos automáticos para generar, proporcionalmente al periodo analizado, los ajustes contables (acumulaciones e imputaciones de periodo), depreciaciones de activos fijos (del periodo), inventarios finales y facturas por emitir y recibir.
- [**Asientos de ajuste**](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation) (cuentas pro cobrar/cuentas por pagar y facturas por recibir) con procedimiento automático de cálculo (leyendo las fechas de competencia económica en los movimientos contables ingresados) y contabilización; otros asientos de ajuste ingresados manualmente, como devaluaciones de créditos, provisiones, etc.
- Cálculo y contabilización de [**depreciaciones**](/docs/finance-area/fixed-assets/accounting/depreciations-accounting): automático mediante procedimiento específico
- Provisión de inventarios finales: entrada manual mediante asiento con posible apoyo en los procedimientos del área de logística para el cálculo de [inventarios valorizados](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity).
- [**Cierre de cuentas**](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing): procedimiento automático con posibilidad de reapertura automática en el siguiente ejercicio, reapertura de los asientos de ajuste, cierre automático de resultados de utilidad o pérdida del ejercicio.