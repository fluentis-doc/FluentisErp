---
title: TESORERÍA
sidebar_position: 1
ai_generated: true
---

## Funcionalidades<!-- Funzionalità -->

El área de Tesorería<!-- Tesoreria --> de **Fluentis ERP** presenta una serie de módulos y procedimientos que permiten a la empresa analizar la evolución de los flujos financieros previstos<!-- flussi finanziari previsti -->, evaluar el riesgo relacionado, y gestionar la comunicación tanto entrante como saliente con las instituciones de crédito.

A estas funcionalidades de monitoreo y análisis, se suman varios procedimientos para la gestión diaria y corriente de las operaciones de pago e ingreso<!-- incasso -->, de emisión y presentación al cobro de efectos y recibos bancarios, así como el anticipo de facturas de venta en el banco.

El módulo está estrechamente integrado con Administración<!-- Amministrazione --> y por lo tanto permite visualizar las partidas abiertas<!-- partite aperte --> del calendario de vencimientos para generar pagos y transferencias que se deben realizar, o bien emitir efectos y recibos bancarios.

Cuando la información es procesada, los mismos procedimientos permiten generar automáticamente los asientos contables<!-- scritture contabili --> para el registro de los diferentes cobros y pagos o para la emisión, presentación y cobro de efectos y Ri.Ba.

### Detalle de funcionalidades<!-- Dettaglio Funzionalità -->


import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Cash Flow</Link>
        <p>para realizar análisis preventivos del flujo de caja potencial, permitiendo crear diferentes escenarios incluyendo o excluyendo algunos tipos de flujo financiero (ej. con o sin órdenes de clientes, para un cash flow más o menos consolidado)</p>
        <p>Completo con</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Vencimientos extracontables<!-- Scadenze extracontabili --></Link></p>
        <p>para integrar manualmente el cashflow con flujos previsionales fuera del sistema</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Reporte analítico de cashflow<!-- Stampa analitica cashflow --></Link></p>
        <p>para la representación completa de los resultados futuros esperados</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Anticipo de facturas<!-- Anticipo Fatture --></Link>
        <p>Módulo específico para la anticipación bancaria sobre la facturación (habitualmente internacional)</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Cartera de efectos<!-- Portafoglio Effetti --></Link>
        <p>para la emisión, presentación y cobro de efectos y recibos bancarios y los respectivos registros contables, además de la gestión y contabilización de los efectos impagados</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Creación de efectos desde facturas<!-- Creazione effetti dalle Fatture --></Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Creación de efectos desde partidas<!-- Creazione effetti dalle Partite --></Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Pagos a proveedores<!-- Pagamenti Fornitori --></Link>
        <p>para la gestión de los lotes de transferencia, SDD y avisos de Ri.Ba. pasivos y el correcto registro contable de estas operaciones de forma automática</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Bloqueo de partidas pasivas<!-- Blocco partite passive --></Link></p>
        <p>gestión masiva para bloquear la autorización de pago de partidas pasivas</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Gestión de cuentas de pago<!-- Gestione appoggio pagamenti --></Link></p>
        <p>gestión de los datos de cuentas bancarias previstas para los pagos</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Cuentas bancarias<!-- Conti Correnti Bancari --></Link>
        <p>para la importación de las listas de movimientos bancarios telemáticos y su conciliación con la contabilidad, o para utilizarlas en la generación automática de asientos<!-- scritture --></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">Riesgo cliente<!-- Rischio Cliente --></Link>
        <p>para la gestión de líneas de crédito en suministros y el monitoreo o bloqueo ante el sobrepaso del límite impuesto, el análisis de la exposición al riesgo crediticio mediante varios paneles e indicadores</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Lock manager para autorizar el sobregiro<!-- Lock manager per autorizzare lo sconfinamento --></Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Exposición clientes<!-- Esposizione clienti --></Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Gestión de remesas<!-- Gestione Rimesse --></Link></p>
        <p>Para el control de tiempos medios ante pagos demorados</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/treasury/docfinance/general-overview">DocFinance y Piteco</Link>
        <p>para la gestión de importación y exportación de datos hacia y desde los principales y más difundidos softwares verticales para la tesorería<!-- tesoreria -->.</p>
    </div>
</div>

## Datos básicos<!-- Dati di Base -->
:::danger[Atención<!-- Attenzione -->]
Antes de utilizar las funcionalidades disponibles es necesario gestionar una serie de datos básicos: estos se dividen en dos grandes grupos, [**Tablas**](/docs/configurations/tables/finance/general-overview) y [**Parámetros**](/docs/configurations/parameters/finance/general-overview).

Alternativamente, está disponible el procedimiento de **Fast Start** que se describe a continuación.
:::

## Procedimiento Fast Start<!-- Procedura di Fast Start -->

:::important[**Fast Start**]
También el área de Tesorería<!-- Tesoreria --> puede configurarse como un [**entorno *FastStart* totalmente listo para usar**](/docs/guide/fast-start) y permitir un uso inmediato.
:::

## Flujo de ingreso de datos<!-- Flusso di inserimento dei dati -->

Aunque es posible la introducción manual de datos como por ejemplo la creación de un recibo bancario o de un lote de transferencia, normalmente se utilizan **procedimientos automáticos** de creación (por ejemplo *creación de efectos a partir de partidas o facturas<!-- creazione effetti dalle partite o dalle fatture -->*) o para la preparación de pagos a partir de las partidas abiertas<!-- partite aperte -->.

Además, por lo general se recurre a procedimientos automáticos de contabilización de cartera<!-- portafoglio --> o de transferencias ejecutadas<!-- bonifici eseguiti -->.

Otras funcionalidades resultan ser elaboraciones del software a partir de los datos presentes, por ejemplo el Cashflow con el proceso de creación automática (aunque existe la posibilidad de crearlo manualmente llamando a los flujos financieros uno por uno, opción raramente utilizada) o los datos extraídos del módulo de Riesgo cliente.

## Flujo de trabajo típico del área de tesorería<!-- Flusso di lavoro tipico area tesoreria -->

- Procedimientos "Corrientes":
    - ejecución de pagos a proveedores leyendo las partidas abiertas<!-- partite aperte --> y contabilización automática del pago con cierre de partidas<!-- partite -->
    - emisión de efectos activos (con frecuencia recibos bancarios) leyendo las facturas o partidas abiertas<!-- partite aperte --> y contabilización automática de la emisión
    - creación de lotes de presentación de efectos (Ri.Ba.) al cobro y exportación del archivo telemático para el envío al banco; contabilización automática de la presentación
    - cobro de los efectos al cobro (transferencia automática entre cuentas<!-- giroconto automatico -->)
    - posible aparición de impago con reapertura del crédito del cliente y contabilización automática
    - creación de lotes de presentación de facturas al descuento leyendo los vencimientos<!-- scadenze --> de facturas, contabilización automática del anticipo y posterior cobro total

- Procedimientos "A demanda":
    - Elaboración de cashflow leyendo los datos presentes en el sistema (saldos, partidas<!-- partite -->, documentos del ciclo activo y pasivo, efectos, documentos de cuenta trabajo<!-- conto lavoro --> y producción)
    - Elaboración de estadísticas de utilización de líneas de crédito de clientes<!-- fidi clienti --> o retraso de pagos