---
sidebar_position: 1
title: amministrativa
---

## Funcionalidad (Funzionalità)

El área dedicada a la **gestión administrativa** de **Fluentis ERP** contempla las funcionalidades necesarias para la correcta **mantenimiento de los libros contables**, la redacción del **balance** de ejercicio y el cumplimiento de la **fiscalidad**, típicamente gestionada directamente por la empresa.

También se presentan funcionalidades para la gestión de **cespiti**, **leasing** y **préstamos** pasivos, además de las funcionalidades fundamentales para quienes operan con el extranjero, tales como la compilación automatizada de las listas **Intrastat** y las otras comunicaciones fiscales relacionadas con los intercambios con contrapartes extranjeras.

La gestión de la contabilidad está integrada con el ciclo pasivo y activo, la facturación electrónica, así como con el *magazzino* y el *Control de gestión (Controllo di gestione)*.

### Detalle de Funcionalidades (Dettaglio Funzionalità)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/ledger-records/intro/">Registros contables (Registrazioni contabili)</Link>
        <p>para la inserción de movimientos contables y movimientos de IVA asociados, así como los procedimientos automáticos relacionados (ajustes y cierres de cuentas).</p>
        <p>Complementado con los necesarios</p>
        <p><Link to="/docs/finance-area/ledger-records/accounting-report/trial-balance" className="bold-link">informes contables (stampe contabili)</Link></p>
        <p>Extractos de cuenta, balance de comprobación, etc.</p>
        <p><Link to="/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet" className="bold-link">informes fiscales (stampe fiscali)</Link></p>
        <p>diario contable, registros de IVA, liquidaciones de IVA, etc.</p>
         <p><Link to="/docs/finance-area/ledger-records/analytic-reports/cost-centres-analysis" className="bold-link">informes analíticos (stampe analitica)</Link></p>
        <p>para el control de los movimientos en los centros de costo de la contabilidad analítica.</p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/maturity-values/intro">Partidas (Partite)</Link>
        <p>módulo para la gestión de las partidas abiertas que alimentan los calendarios de vencimientos de clientes y proveedores, se alimenta principalmente de forma automática a través de movimientos contables y puede ser consultado de diversas maneras (en pantalla o mediante informes del módulo).</p>
        <p>Incluye</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/loans-management" className="bold-link">Gestión de préstamos pasivos (Gestione mutui passivi)</Link></p>
        <p>Para el cálculo de planes de amortización y contabilización automática de cuotas de préstamo.</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/dunned-maturity-values" className="bold-link">Gestión de recordatorios de pago (Gestione solleciti di pagamento)</Link></p>
        <p>Para la generación automática y el envío de recordatorios a los clientes.</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/commissions" className="bold-link">Comisiones de Agentes (Commissioni Agenti)</Link></p>
        <p>Para la gestión de comisiones directamente desde la contabilidad, como alternativa al módulo de Ventas.</p>
        <p><Link to="/docs/finance-area/maturity-values/procedures/cash-management" className="bold-link">Gestión de la Liquidez (Gestione della Liquidità)</Link></p>
        <p>Para verificar y gestionar la disponibilidad bancaria y, si es necesario, mover/retrasar el compromiso o cambiar el banco.</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/declarations/intro">Declaraciones (Dichiarazioni)</Link>
        <p>módulo para elaborar los informes fiscales, en particular los requisitos relacionados con el IVA y las retenciones a cuenta.</p>
        <p>Entre las diversas funcionalidades incluye</p>
        <p><Link to="/docs/finance-area/declarations/declarations/withholding-tax-certification" className="bold-link">Certificación de retenciones telemática (Certificazione ritenute telematica)</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/periodic-vat-calculation" className="bold-link">Comunicación de liquidaciones periódicas IVA (Comunicazione liquidazione periodiche IVA)</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/intent-declaration" className="bold-link">Declaraciones de intención (Dichiarazioni di intento)</Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/plafond/general-overview" className="bold-link">Plafond IVA (Plafond IVA)</Link></p>
        <p><Link to="/docs/finance-area/declarations/intrastat/general-overview" className="bold-link">Listas Intrastat (Elenchi Intrastat)</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/professional-men/general-overview">Perceptores (Percipienti)</Link>
        <p>módulo específicamente dedicado a la gestión de proveedores profesionales que emiten factura y están sujetos a retención a cuenta (incluyendo agentes comerciales).</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/model-f24/f24-management" className="bold-link">Modelo F24 (Modello F24)</Link></p>
        <p>Para la gestión automatizada de los pagos de IVA y retenciones.</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/calculate-commissions" className="bold-link">Cálculo de comisiones (Calcolo provvigioni)</Link></p>
        <p>Para la gestión de agentes directamente desde el área administrativa como alternativa al área de ventas.</p>
        <p><Link to="/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro" className="bold-link">Enasarco</Link></p>
        <p>Para la contabilización de las contribuciones previsionales de los agentes.</p>
        <p><Link to="/docs/finance-area/professional-men/reports/agent-reports" className="bold-link">Informes de agentes (Stampe agenti)</Link></p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/fixed-assets/general-overview">Activos fijos (Cespiti)</Link>
        <p>módulo para la gestión de bienes amortizables, con los procedimientos de amortización y los informes necesarios.</p>
        <p>Entre las diversas funcionalidades incluye</p>
        <p><Link to="/docs/finance-area/fixed-assets/depreciation-plans-simulation" className="bold-link">Simulación de planes de amortización (Simulazione piani ammortamento)</Link></p>
        <p><Link to="/docs/finance-area/fixed-assets/procedures/fixed-asset-depreciation/fixed-assets-depreciation" className="bold-link">Amortización ordinaria</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/leasing/intro">Leasing</Link>
        <p>módulo específico para la gestión y contabilización de leasing.</p>
        <p>También dotado de</p>
        <p><Link to="/docs/finance-area/leasing/procedures/maxifee-accrual-calculation" className="bold-link">Cálculo de prorrateo Maxicanone (Calcolo risconto Maxicanone)</Link></p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/e-invoice/intro">Facturación electrónica (Fatturazione elettronica)</Link>
        <p>módulo ubicado en esta sección de la guía, aunque transversal, con el fin de ilustrar los detalles necesarios desde el punto de vista administrativo y las posibilidades de gestión y contabilización automática de las facturas electrónicas.</p>
        <p><Link to="/docs/finance-area/sdi-documents/sdi-documents-intro" className="bold-link">Introducción</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/configuration_einvoice" className="bold-link">Configuraciones para etiquetas y campos específicos de la factura electrónica</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/bizlink-connection" className="bold-link">Configuraciones iniciales</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/auto-invoice/parameters" className="bold-link">Autofacturación automática</Link></p>
        <p>para algunos tipos de compra como reverse charge, intra UE y servicios extra UE.</p>
        <p><Link to="/docs/finance-area/sdi-documents/incoming-purchase-documents" className="bold-link">Gestión de facturas electrónicas de compra</Link></p>
        <p>Presentes sub-secciones para contabilización automática y creación de documentos del ciclo pasivo.</p>
    </div>
</div>

## Datos Básicos (Dati di Base)
:::danger[Atención (Attenzione)]
Antes de utilizar las funcionalidades disponibles, es necesario gestionar una serie de datos básicos: están divididos en dos macro grupos, [**tabelle**](/docs/configurations/tables/finance/general-overview) y [**parametri**](/docs/configurations/parameters/finance/general-overview).

Alternativamente, está disponible el procedimiento de **Inicio Rápido (Fast Start)** descrito a continuación.

Al activar el Inicio Rápido, solo será necesario gestionar un conjunto mínimo de datos como los [**anagrafiche**](/docs/erp-home/registers/registers-intro).
:::

## Procedimiento de Inicio Rápido (Procedura di Fast Start)

:::important[**Inicio Rápido (Fast Start)**]
La característica principal del área administrativa es su *Cumplimiento (Compliance)* con las normativas contables y fiscales y la posibilidad de inicializar un [**entorno *FastStart* totalmente listo para usar**](/docs/guide/fast-start) y configurado para cumplir con las normas y permitir un uso inmediato.

El usuario puede configurar en cualquier momento a su conveniencia esquemas contables, códigos de IVA, registros, etc.
:::

## Flujo de inserción de datos (Flusso di inserimento dei dati)

La flexibilidad del módulo permite la inserción de datos de diferentes maneras: 

- **Manual (Manualmente)**, a través de [**la entrada directa de asientos contables**](/docs/finance-area/ledger-records/records/ledger-record). Con este método, generalmente se ingresan los asientos de ajuste NO incluidos en los procedimientos automáticos (Acumulados y Prorrogas y Amortizaciones) tales como **dotaciones a fondos de riesgos y gastos, devaluación de créditos**, etc. así como asientos como **registro de salarios de empleados**, etc.
 
- **Automáticamente (Automaticamente)** gracias a la **interconexión con otros módulos del sistema**, como la tesorería, el control y los ciclos activo y pasivo. Típicamente, se registran automáticamente las **facturas activas y pasivas, los pagos mediante transferencia y Ri.Ba. pasivas, los cobros mediante la emisión de Ri.Ba. activas o pagarés, los cánones de leasing, las cuotas de préstamo**, etc.

- **Lanzamiento de procesos y procedimientos**: que leen los datos básicos para **realizar cálculos y producir documentos o flujos telemáticos** (como por ejemplo la elaboración de un **informe fiscal** que lee los datos de IVA generados por los asientos contables) o generan más asientos contables o, en general, más datos (como por ejemplo los procedimientos de cálculo y almacenamiento de los **asientos de ajuste** o los asientos de **cierre y reapertura de cuentas** a fin e inicio de año).

## Flujo de trabajo típico del área administrativa (Flusso di lavoro tipico area amministrativa)

Aunque los varios módulos permiten flexibilidad y la posibilidad de gestionar los datos de diferentes maneras, automáticamente o manualmente, ilustramos un flujo de trabajo típico completo que involucra el área administrativa y las otras áreas estrechamente relacionadas.

- [**Apertura inicial de saldos**](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new) de balance (asistente auxiliar en alternativa a la carga manual mediante asiento contable) o [importar](/docs/applications/bizlink/import-posting-ledgers) de otro sistema o reapertura automática de [cierre del año anterior](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing).
- [Importación de las partidas abiertas](/docs/applications/bizlink/import-open-matutities), necesaria solo en caso de migración desde un sistema anterior.
- [Importación de activos fijos](/docs/applications/bizlink/import-fixed-assets), necesaria solo en caso de migración desde un sistema anterior. Las compras en curso de año cargan automáticamente las fichas de activos fijos a través de los respectivos asientos contables (usando las causales contables apropiadas).
- **Registros contables** (procedimiento automático) del ciclo [**attivo**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) y **pasivo** (también desde [facturas electrónicas](/docs/finance-area/sdi-documents/incoming-purchase-documents) recibidas).
- Gestión de [**Partidas Abiertas**](/docs/finance-area/maturity-values/intro), automática, vinculada a la creación de movimientos contables tanto de facturación como de cobro y pago.
- Registros de **cobros** y **pagos** (procedimiento automático, en alternativa o para algunas tipologías se puede proceder con registros manuales). Para los cobros, típicamente se automatiza el flujo de [**Recibos bancarios**](/docs/treasury/bills-holding/accounting/bills-accounting). Para los pagos, típicamente se automatiza el flujo de los [**Transferencias**](/docs/treasury/vendors-payments/accounting/vendor-payments-accounting). Procedimientos ubicados en el [**área de tesorería (area tesoreria)**](/docs/treasury/treasury-intro).
- Informes contables corrientes de [extractos de cuenta](/docs/finance-area/ledger-records/accounting-report/account-statement) (*mastrini*), [balances de comprobación](/docs/finance-area/ledger-records/accounting-report/trial-balance), [de ejercicio](/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet) y [diario contable](/docs/finance-area/ledger-records/fiscal-report/journal).
- Informes [particulares](/docs/finance-area/maturity-values/reports/account-statement-on-open-maturity-values) de clientes-proveedores como [calendarios de vencimientos](/docs/finance-area/maturity-values/reports/customer-vendor-due-register), etc.
- [**Liquidación**](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement) periódica del **IVA**.
- Otros [requerimientos](/docs/finance-area/declarations/intro) fiscales periódicos.
- Gestión de la recepción de las [facturas (parcelle)](/docs/finance-area/professional-men/general-overview) de profesionales y [Agentes](/docs/sales/agents/procedures/create-professional-man-commission) comerciales (funcionalidad ubicada en el área de Ventas) y [certificación única](declarations/declarations/withholding-tax-certification) de las retenciones a cuenta anuales.
- Elaboración (opcional) a través de las funciones del área [Control (Controlling)](/docs/controlling/mid-year-closures/general-overview) de situaciones contables periódicas detalladas. El período objeto de la situación puede ser elegido libremente y pueden asociarse algunos procedimientos automáticos para generar, proporcionalmente al período objeto de análisis, los ajustes contables (acumulados y prorrateos de período), los amortizaciones de activos fijos (de período), los inventarios finales y las facturas a emitir y recibir.
- [**Asientos de ajuste**](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation) (acumulados y prorrateos y facturas a recibir) procedimiento automático de cálculo (leyendo las fechas de competencia económica en los movimientos contables ingresados) y contabilización; otros asientos de ajuste ingresados manualmente tales como devaluación de créditos, provisiones, etc.
- Cálculo y contabilización de [**amortizaciones**](/docs/finance-area/fixed-assets/accounting/depreciations-accounting): automático con procedimiento específico.
- Dotación de inventarios finales: asiento manual a ingresar apoyándose en los procedimientos del área logística para el cálculo de [existencias valoradas](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity).
- [**Cierre de cuentas**](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing): procedimiento automático con posibilidad de reapertura automática en el ejercicio siguiente, reapertura de los asientos de ajuste, traspaso automático de pérdidas del ejercicio.