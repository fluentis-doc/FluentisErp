---
title: tesoreria
sidebar_position: 1
---

## Funcionalidad (Funzionalità)

El área de Tesorería de **Fluentis ERP** presenta una serie de módulos y procedimientos que permiten a la empresa analizar el comportamiento de los flujos financieros previstos, evaluar su riesgo y gestionar la comunicación con las instituciones de crédito tanto entrantes como salientes.

A estas funcionalidades de monitoreo y análisis, se suman varios procedimientos para la gestión corriente y diaria de las operaciones de pago y cobro, de emisión y presentación al salvo buen fin o al cobro de efectos y recibos bancarios, de adelanto de facturas de venta con el banco.

El módulo comunica estrechamente con la Administración y, por lo tanto, permite leer las partidas abiertas del calendario de vencimientos con el fin de generar los pagos y transferencias a ejecutar, o bien emitir los efectos y recibos bancarios.

Cuando los datos son procesados, los mismos procedimientos permiten generar automáticamente las escrituras contables para la detección de varios cobros y pagos o para la emisión, presentación y cobro de efectos y Ri.Ba.

### Detalle de Funcionalidad (Dettaglio Funzionalità)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/cash-flow/general-overview/">Flujo de Caja (Cash Flow)</Link>
        <p>para realizar análisis preventivos del flujo de caja potencial, permitiendo crear diferentes escenarios incluyendo o excluyendo ciertos tipos de flujo financiero (ej. con o sin los pedidos de clientes, para un flujo de caja más o menos consolidado)</p>
        <p>Completo de</p>
        <p><Link to="/docs/treasury/cash-flow/off-balance-due-dates" className="bold-link">Vencimientos extracontables (Scadenze extracontabili)</Link></p>
        <p>para integrar manualmente el flujo de caja con flujos previsionales externos al sistema</p>
        <p><Link to="/docs/treasury/cash-flow/reports" className="bold-link">Impresión analítica de flujo de caja (Stampa analitica cashflow)</Link></p>
        <p>para la representación completa de los resultados futuros esperados</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/advance/advances-collections">Anticipo de Facturas (Anticipo Fatture)</Link>
        <p>Módulo específico para la anticipación bancaria sobre la facturación (generalmente del exterior)</p>
    </div>
</div>

<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bills-holding/general-overview">Cartera de Efectos (Portafoglio Effetti)</Link>
        <p>para la emisión, presentación, cobro de efectos y recibos bancarios y las respectivas registraciones contables, además de la gestión y las respectivas escrituras contables de los efectos impagos</p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-invoices/" className="bold-link">Creación de efectos de las Facturas (Creazione effetti dalle Fatture)</Link></p>
        <p><Link to="/docs/treasury/bills-holding/procedures/bills-acquisition-from-maturity-values/" className="bold-link">Creación de efectos de las Partidas (Creazione effetti dalle Partite)</Link></p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/vendors-payments/general-overview">Pagos a Proveedores (Pagamenti Fornitori)</Link>
        <p>para la gestión de las listas de Transferencias, SDD, y Avisos de Ri.Ba. pasivos y la respectiva registración contable de forma automática</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/block-passive-maturity-values" className="bold-link">Bloqueo de partidas pasivas (Blocco partite passive)</Link></p>
        <p>gestión masiva del bloqueo de la autorización al pago de las partidas pasivas</p>
        <p><Link to="/docs/treasury/vendors-payments/procedures/payments-support-management" className="bold-link">Gestión de apoyo a los pagos (Gestione appoggio pagamenti)</Link></p>
        <p>gestión de los datos de los apoyos bancarios previstos para los pagos</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###   <Link to="/docs/treasury/bank-account/bank-movements">Cuentas Corrientes Bancarias (Conti Correnti Bancari)</Link>
        <p>para la importación de las listas de movimientos bancarios telemáticas y su reconciliación con la contabilidad, o para aprovecharlas en la generación de las escrituras</p>
    </div>
    <div className="card">
###   <Link to="/docs/treasury/customer-risk/general-overview">Riesgo de Cliente (Rischio Cliente)</Link>
        <p>para la gestión del crédito sobre suministros a crédito y el monitoreo o bloqueo frente al exceso del límite impuesto, el análisis de la exposición al riesgo crediticio a través de varios paneles e índices</p>
        <p><Link to="/docs/treasury/customer-risk/procedures/lock-manager" className="bold-link">Gestor de bloqueo para autorizar el sobregiro (Lock manager per autorizzare lo sconfinamento)</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/customer-statement" className="bold-link">Exposición de clientes (Esposizione clienti)</Link></p>
        <p><Link to="/docs/treasury/customer-risk/procedures/remittances-check" className="bold-link">Gestión de Remesas (Gestione Rimesse)</Link></p>
        <p>Para el control de los tiempos medios en retraso de pagos</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/treasury/docfinance/general-overview">DocFinance y Piteco (DocFinance e Piteco)</Link>
        <p>para la gestión de la importación y exportación de datos hacia los principales y más utilizados software verticales para la tesorería.</p>
    </div>
</div>

## Datos Básicos (Dati di Base)
:::danger[Atención (Attenzione)]
Antes de utilizar las funcionalidades disponibles, es necesario gestionar una serie de datos básicos: estos se dividen en dos macro grupos, [**tabelle**](/docs/configurations/tables/finance/general-overview) y [**parametri**](/docs/configurations/parameters/finance/general-overview).

Alternativamente, está disponible el procedimiento de **Inicio Rápido (Fast Start)** descrito a continuación.
:::

## Procedimiento de Inicio Rápido (Procedura di Fast Start)

:::important[**Inicio Rápido (Fast Start)**]
También el área de Tesorería puede ser configurada como [**entorno *FastStart* totalmente listo para usar**](/docs/guide/fast-start) y permitir un uso inmediato.
:::

## Flujo de Inserción de Datos (Flusso di inserimento dei dati)

Aunque es posible la inserción manual de datos, como por ejemplo la creación de un recibo bancario o una lista de transferencias, generalmente se recurre a **procedimientos automáticos** de creación (ejemplo *creación de efectos de las partidas o de las facturas*) o de preparación de los pagos a partir de las partidas abiertas.

También se utilizan generalmente procedimientos automáticos de contabilización de la cartera o de las transferencias ejecutadas.

Otras funcionalidades son, en cambio, elaboraciones del software a partir de los datos presentes, ej. el flujo de caja con el procedimiento de creación automática, (aunque existe la posibilidad de crearlo manualmente llamando los flujos financieros uno a uno, lo cual rara vez se utiliza) o los datos extraídos del módulo de Riesgo de cliente.

## Flujo de Trabajo Típico en el Área de Tesorería (Flusso di lavoro tipico area tesoreria)

- Procedimientos "Corrientes": 
    - ejecución de pagos a proveedores leyendo las partidas abiertas y contabilización automática del pago mismo con cierre de partidas
    - emisión de efectos activos (frecuentemente recibos bancarios) leyendo las facturas o las partidas abiertas y contabilización automática de la emisión
    - creación de listas de presentación de efectos (Ri.Ba.) al salvo buen fin o al cobro y exportación del archivo telemático para el envío al banco; contabilización automática de la presentación
    - cobro de los efectos al salvo buen fin (traslado automático)
    - posible aparición de impagos con reapertura del crédito al cliente, contabilización automática
    - creación de listas de presentación de facturas al descuento leyendo los vencimientos de las facturas, contabilización automática del anticipo y del posterior cobro completo

- Procedimientos "A demanda (On demand)":
    - Elaboración de flujo de caja leyendo los datos presentes en el sistema (saldos, partidas, documentos de ciclo activo y pasivo, efectos, documentos de cuenta trabajo y producción)
    - Elaboración de estadísticas de uso de créditos de clientes o retraso en pagos