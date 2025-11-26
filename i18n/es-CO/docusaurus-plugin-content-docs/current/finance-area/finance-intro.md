---
sidebar_position: 1
title: ÁREA ADMINISTRATIVA
ai_generated: true
---

## Funcionalidades<!-- Funzionalità -->

El área dedicada a la **gestión administrativa** de **Fluentis ERP** contempla las funcionalidades necesarias para la correcta **gestión de los asientos contables<!-- scritture contabili -->**, la elaboración del **balance<!-- bilancio -->** del ejercicio y el cumplimiento de las obligaciones **fiscales<!-- fiscalità -->** que normalmente gestiona directamente la empresa.

Además, existen funcionalidades para la gestión de **activos fijos<!-- cespiti -->**, **leasing** y **préstamos pasivos<!-- mutui passivi -->**, así como funcionalidades fundamentales para quienes operan con el exterior, tales como la confección automatizada de los listados **Intrastat** y otras comunicaciones fiscales relacionadas con transacciones con contrapartes extranjeras.

La gestión de la contabilidad está integrada con el ciclo pasivo y activo, la facturación electrónica, con el *Almacén<!-- Magazzino -->* y el *Control de gestión<!-- Controllo di gestione -->*.

### Detalle de funcionalidades<!-- Dettaglio Funzionalità -->


import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/ledger-records/intro/">Asientos contables<!-- Registrazioni contabili --></Link>
        <p>para el ingreso de movimientos contables<!-- movimenti contabili --> y movimientos IVA relacionados, así como los procedimientos automáticos asociados (ajustes y cierres de cuentas).</p>
        <p>Incluye los necesarios</p>
        <p><Link to="/docs/finance-area/ledger-records/accounting-report/trial-balance" className="bold-link">reportes contables<!-- stampe contabili --></Link></p>
        <p>Extractos de cuenta, balance de comprobación<!-- Bilancio di verifica -->, etc.</p>
        <p><Link to="/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet" className="bold-link">reportes fiscales<!-- stampe fiscali --></Link></p>
        <p>libro diario<!-- giornale contabile -->, registros IVA, liquidaciones IVA, etc.</p>
        <p><Link to="/docs/finance-area/ledger-records/analytic-reports/cost-centres-analysis" className="bold-link">reportes analíticos<!-- stampe analitica --></Link></p>
        <p>para el control de movimientos en los centros de costo<!-- centri di costo --> de la contabilidad analítica</p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/maturity-values/intro">Cuentas por cobrar y pagar<!-- Partite --></Link>
        <p>módulo para la gestión de cuentas abiertas<!-- partite aperte --> que alimentan los calendarios de vencimientos de clientes y proveedores. Se alimenta principalmente de manera automática por los movimientos contables<!-- movimenti contabili --> y puede consultarse de varias maneras (en pantalla o mediante los reportes del módulo)</p>
        <p>Incluye</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/loans-management" className="bold-link">Gestión de préstamos pasivos<!-- Gestione mutui passivi --></Link></p>
        <p>Para el cálculo de planes de amortización y contabilización automática de cuotas de préstamo</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/dunned-maturity-values" className="bold-link">Gestión de recordatorios de pago<!-- Gestione solleciti di pagamento --></Link></p>
        <p>Para la generación automática y el envío de recordatorios a los clientes</p>
        <p><Link to="/docs/finance-area/maturity-values/maturity-values/commissions" className="bold-link">Comisiones de agentes<!-- Commissioni Agenti --></Link></p>
        <p>Para la gestión de comisiones directamente desde la contabilidad, como alternativa al módulo de Ventas</p>
        <p><Link to="/docs/finance-area/maturity-values/procedures/cash-management" className="bold-link">Gestión de liquidez<!-- Gestione della Liquidità --></Link></p>
        <p>Para la verificación y gestión de la disponibilidad bancaria<!-- disponibilità bancaria --> y eventualmente trasladar/posponer el compromiso o cambiar el banco</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/declarations/intro">Declaraciones<!-- Dichiarazioni --></Link>
        <p>módulo para la elaboración de declaraciones fiscales, en particular obligaciones relacionadas con el IVA y las retenciones</p>
        <p>Entre las varias funcionalidades contiene</p>
        <p><Link to="/docs/finance-area/declarations/declarations/withholding-tax-certification" className="bold-link">Certificación telemática de retenciones<!-- Certificazione ritenute telematica --></Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/periodic-vat-calculation" className="bold-link">Comunicación de liquidaciones periódicas de IVA<!-- Comunicazione liquidazione periodiche IVA --></Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/intent-declaration" className="bold-link">Declaraciones de intención<!-- Dichiarazioni di intento --></Link></p>
        <p><Link to="/docs/finance-area/declarations/declarations/plafond/general-overview" className="bold-link">Plafond IVA</Link></p>
        <p><Link to="/docs/finance-area/declarations/intrastat/general-overview" className="bold-link">Listados Intrastat<!-- Elenchi Intrastat --></Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/professional-men/general-overview">Perceptores<!-- Percipienti --></Link>
        <p>módulo específico para la gestión de proveedores profesionales<!-- fornitori professionisti --> que emiten facturas y están sujetos a retención (incluidos agentes comerciales)</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/model-f24/f24-management" className="bold-link">Modelo F24</Link></p>
        <p>Para la gestión automatizada de pagos IVA y retenciones</p>
        <p><Link to="/docs/finance-area/professional-men/procedures/calculate-commissions" className="bold-link">Cálculo de comisiones<!-- Calcolo provvigioni --></Link></p>
        <p>Para la gestión de agentes directamente desde el área administrativa como alternativa al área de ventas</p>
        <p><Link to="/docs/finance-area/professional-men/accounting/enasarco-accounting/enasarco-accounting-intro" className="bold-link">Enasarco</Link></p>
        <p>Para la contabilización de las contribuciones<!-- contributi previdenziali --> de los agentes</p>
        <p><Link to="/docs/finance-area/professional-men/reports/agent-reports" className="bold-link">Reportes de agentes<!-- Stampe agenti --></Link></p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/finance-area/fixed-assets/general-overview">Activos fijos<!-- Cespiti --></Link>
        <p>módulo para la gestión de bienes amortizables<!-- beni ammortizzabili -->, con los correspondientes procedimientos de amortización<!-- ammortamento --> y reportes necesarios</p>
        <p>Entre las varias funcionalidades contiene</p>
        <p><Link to="/docs/finance-area/fixed-assets/depreciation-plans-simulation" className="bold-link">Simulación de planes de amortización<!-- Simulazione piani ammortamento --></Link></p>
        <p><Link to="/docs/finance-area/fixed-assets/procedures/fixed-asset-depreciation/fixed-assets-depreciation" className="bold-link">Amortización ordinaria<!-- Ammortamento ordinario --></Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/finance-area/leasing/intro">Leasing</Link>
        <p>módulo específico para la gestión y contabilización de operaciones de leasing</p>
        <p>También incluye</p>
        <p><Link to="/docs/finance-area/leasing/procedures/maxifee-accrual-calculation" className="bold-link">Cálculo prorrateado de Maxicanone<!-- Calcolo risconto Maxicanone --></Link></p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/finance-area/e-invoice/intro">Facturación electrónica<!-- Fatturazione elettronica --></Link>
        <p>módulo ubicado en esta sección de la guía aunque es transversal, con el fin de ilustrar los detalles necesarios desde el punto de vista administrativo y las posibilidades de gestión y contabilización automática de las facturas electrónicas</p>
        <p><Link to="/docs/finance-area/sdi-documents/sdi-documents-intro" className="bold-link">Introducción</Link></p>
        <p><Link to="/docs/finance-area/e-invoice/configuration_einvoice" className="bold-link">Configuraciones para etiquetas y campos específicos de la factura electrónica<!-- Impostazioni per tag e campi specifici della fattura elettronica --></Link></p>
        <p><Link to="/docs/finance-area/e-invoice/bizlink-connection" className="bold-link">Configuraciones iniciales<!-- Configurazioni iniziali --></Link></p>
        <p><Link to="/docs/finance-area/e-invoice/auto-invoice/parameters" className="bold-link">Autofacturación automática<!-- Autofatturazione automatica --></Link></p>
        <p>para ciertos tipos de compras tales como reverse charge, intracomunitarias UE y servicios extra UE</p>
        <p><Link to="/docs/finance-area/sdi-documents/incoming-purchase-documents" className="bold-link">Gestión de facturas electrónicas de compra<!-- Gestione fatture elettroniche di acquisto --></Link></p>
        <p>Existen subsecciones para contabilización automática y creación de documentos del ciclo pasivo<!-- ciclo passivo -->.</p>
    </div>
</div>

## Datos básicos<!-- Dati di Base -->
:::danger[Atención<!-- Attenzione -->]
Antes de utilizar las funcionalidades disponibles es necesario gestionar una serie de datos básicos<!-- dati di base -->: estos están divididos en dos grandes grupos, [**Tablas<!-- Tabelle -->**](/docs/configurations/tables/finance/general-overview) y [**Parámetros<!-- Parametri -->**](/docs/configurations/parameters/finance/general-overview).

Alternativamente, está disponible el procedimiento de **Fast Start** que se describe a continuación.

Al activar Fast Start, solo será necesario gestionar un conjunto mínimo de datos como los [**Registros maestros<!-- Anagrafiche -->**](/docs/erp-home/registers/registers-intro).
:::

## Procedimiento Fast Start<!-- Procedura di Fast Start -->

:::important[**Fast Start**]
La principal característica del área administrativa es su *cumplimiento* con las normativas contables y fiscales y la posibilidad de inicializar un [**entorno *FastStart* totalmente listo para su uso**](/docs/guide/fast-start) y configurado para cumplir las normas y permitir un uso inmediato.

El usuario puede configurar en cualquier momento los esquemas contables<!-- schemi contabili -->, códigos IVA<!-- codici iva -->, libros<!-- registri -->, etc. según sus necesidades.
:::


## Flujo de ingreso de datos<!-- Flusso di inserimento dei dati -->

La flexibilidad del módulo permite el ingreso de datos de diferentes formas:

- **Manualmente**, mediante la [**introducción directa de asientos contables<!-- scritture contabili -->**](/docs/finance-area/ledger-records/records/ledger-record). Con este método generalmente se ingresan asientos de ajuste<!-- scritture di assestamento --> que NO están incluidos en los procedimientos automáticos (acumulaciones e imputaciones y amortizaciones<!-- Ratei e Risconti ed Ammortamenti -->) como **provisiones a fondos de riesgos y cargas, devaluación de créditos** y otros asientos como **registro de nómina de empleados**, etc.
 
- **Automáticamente**, gracias a la **interconexión con otros módulos del sistema de gestión**, tales como tesorería<!-- tesoreria -->, control de gestión<!-- controlling --> y los ciclos activos y pasivos. Típicamente se registran automáticamente las **facturas de venta y compra<!-- fatture attive e passive -->, pagos vía transferencia bancaria y efectos pasivos<!-- Ri.Ba. passive -->, cobros mediante efectos activos<!-- Ri.Ba. attive --> o pagarés, cánones de leasing, cuotas de préstamo<!-- rate mutuo -->, etc.

- **Procesamiento de procedimientos y elaboraciones**: que leen los datos básicos<!-- dati di base --> para **realizar cálculos y producir documentos o flujos telemáticos** (por ejemplo, la elaboración de una **declaración fiscal<!-- dichiarativo fiscale -->** que lee los datos IVA generados por los asientos contables<!-- scritture contabili -->), o bien generan nuevos asientos contables o, en general, nuevos datos (por ejemplo, los procedimientos de cálculo y almacenamiento de **asientos de ajuste<!-- scritture di assestamento -->** o de **cierres y reaperturas de cuentas<!-- scritture di chiusura e riapertura dei conti -->** al final y al inicio del año fiscal)


## Flujo de trabajo típico del área administrativa<!-- Flusso di lavoro tipico area amministrativa -->

Aunque los diferentes módulos permiten flexibilidad y la posibilidad de gestionar los datos de varias formas, automática o manualmente, a continuación se presenta un flujo de trabajo típico y completo que involucra el área administrativa y otras áreas estrechamente relacionadas.

- [**Apertura inicial de saldos**](/docs/finance-area/ledger-records/records/procedures/automatic-accounts-opening/new) del balance<!-- bilancio --> (asistente auxiliar como alternativa al ingreso manual mediante asiento contable<!-- scrittura contabile -->) o [importación<!-- import -->](/docs/applications/bizlink/template-example/import-posting-ledgers) desde otro sistema o reapertura automática de [cierre del año anterior<!-- chiusura anno precedente -->](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)
- [Importación de cuentas abiertas<!-- partite aperte -->](/docs/applications/bizlink/template-example/import-open-matutities), solo necesaria en caso de migración de otro sistema
- [Importación de activos fijos<!-- cespiti -->](/docs/applications/bizlink/template-example/import-fixed-assets), solo necesaria en caso de migración de otro sistema. Las adquisiciones en el año cargan automáticamente las fichas de activos fijos<!-- schede cespiti --> mediante los respectivos asientos contables<!-- registrazioni contabili --> (utilizando las causales contables<!-- causali contabili --> adecuadas)
- **Asientos contables<!-- Registrazioni contabili -->** (procedimiento automático) del ciclo [**activo**](/docs/sales/sales-invoices/accounting/sales-invoices-accounting) y **pasivo** (también a partir de [facturas electrónicas<!-- fatture elettroniche -->](/docs/finance-area/sdi-documents/incoming-purchase-documents) recibidas)
- Gestión de las [**Cuentas Abiertas<!-- Partite Aperte -->**](/docs/finance-area/maturity-values/intro), automática, vinculada a la creación de movimientos contables<!-- movimenti contabili --> tanto de facturación como de cobro y pago
- Registros de **cobros<!-- incassi -->** y **pagos<!-- pagamenti -->** (procedimiento automático, alternativamente o para algunos tipos se puede proceder con registros manuales<!-- registrazioni manuali -->). Para los cobros, típicamente se automatiza el flujo de [**efectos bancarios<!-- Ricevute bancarie -->**](/docs/treasury/bills-holding/accounting/bills-accounting). Para los pagos, típicamente se automatiza el flujo de [**transferencias bancarias<!-- Bonifici -->**](/docs/treasury/vendors-payments/accounting/vendor-payments-accounting). Procedimientos incluidos en el [**área de tesorería<!-- area tesoreria -->**](/docs/treasury/treasury-intro)
- Reportes contables corrientes de [extractos de cuenta<!-- estratti conto -->](/docs/finance-area/ledger-records/accounting-report/account-statement) (*mayores<!-- mastrini -->*), [balances de comprobación<!-- bilanci di verifica -->](/docs/finance-area/ledger-records/accounting-report/trial-balance), [del ejercicio<!-- d'esercizio -->](/docs/finance-area/ledger-records/fiscal-report/period-balance-sheet) y [libro diario<!-- giornale contabile -->](/docs/finance-area/ledger-records/fiscal-report/journal).
- Reportes de [partidas abiertas<!-- partitari -->](/docs/finance-area/maturity-values/reports/account-statement-on-open-maturity-values) clientes-proveedores como [vencimientos<!-- scadenzari -->](/docs/finance-area/maturity-values/reports/customer-vendor-due-register) etc.
- [**Liquidación<!-- Liquidazione -->**](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement) periódica del **IVA**
- Otras [obligaciones<!-- adempimenti -->](/docs/finance-area/declarations/intro) fiscales periódicas
- Gestión de la recepción de [honorarios<!-- parcelle -->](/docs/finance-area/professional-men/general-overview) de profesionales y [Agentes<!-- Agenti -->](/docs/sales/agents/procedures/create-professional-man-commission) comerciales (funcionalidad ubicada en el área de Ventas) y [certificado único<!-- certificazione unica -->](/docs/finance-area/declarations/declarations/withholding-tax-certification) de las retenciones anuales
- Elaboración (opcional) mediante las funciones del área de [Control de gestión<!-- Controlling -->](/docs/controlling/mid-year-closures/general-overview) de situaciones contables periódicas detalladas. El periodo objeto del informe puede elegirse libremente y pueden asociarse algunos procedimientos automáticos para generar, proporcionalmente al periodo analizado, los ajustes contables<!-- assestamenti contabili --> (acumulaciones e imputaciones de periodo<!-- ratei e risconti di periodo -->), amortizaciones de activos fijos (del periodo<!-- di periodo -->), inventarios finales y facturas por emitir y recibir.
- [**Asientos de ajuste<!-- Scritture di assestamento -->**](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation) (acumulaciones/imputaciones y facturas por recibir) con procedimiento automático de cálculo (leyendo las fechas de competencia económica en los movimientos contables<!-- movimenti contabili --> ingresados) y contabilización; otros asientos de ajuste ingresados manualmente, como devaluaciones de créditos, provisiones, etc.
- Cálculo y contabilización de [**amortizaciones<!-- ammortamenti -->**](/docs/finance-area/fixed-assets/accounting/depreciations-accounting): automático mediante procedimiento específico
- Provisión de inventarios finales: entrada manual mediante asiento con posible apoyo en los procedimientos del área de logística<!-- area logistica --> para el cálculo de [inventarios valorizados<!-- giacenze valorizzate -->](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity).
- [**Cierre de cuentas<!-- Chiusura dei conti -->**](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing): procedimiento automático con posibilidad de reapertura automática en el siguiente ejercicio, reapertura de los asientos de ajuste<!-- scritture di assestamento -->, cierre automático de resultados de utilidad o pérdida del ejercicio.