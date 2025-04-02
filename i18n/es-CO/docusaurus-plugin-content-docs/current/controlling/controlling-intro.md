---
title: controlling
sidebar_position: 1
---

El área dedicada al control en **Fluentis ERP** abarca todas las funcionalidades necesarias para la preparación de simulaciones de balances intermedios, la gestión de reclasificaciones de balance en [*Modelos*](/docs/controlling/reclassifications/create-reclassification-model) configurables libremente, así como la entrada y mantenimiento de todos los registros administrativos necesarios para la contabilidad directiva por centro de costos.

También hay procedimientos de consolidación de balance dedicados a instalaciones multisocietarias, así como la posibilidad de realizar comparaciones de datos históricos elaborados, previsiones de ventas y el cálculo del costo de productos, los presupuestos por centro empresarial.

La gestión del control está naturalmente integrada con todas las áreas de **Fluentis ERP**: desde la recuperación de documentos en tránsito dentro del ciclo pasivo y activo, hasta la valorización de los datos cuantitativos (*tiempos* y *cantidades*) ingresados en los informes de producción, así como la valorización de los costos de materiales y trabajos externos hasta la detección de horas y costos de actividades e intervenciones del área de proyectos.

El usuario puede configurar libremente en cualquier momento, siguiendo la evolución de las necesidades empresariales, la estructura de los [*Centros empresariales*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) que desea valorar en la contabilidad analítica, contando con su estructura [*multidimensional*](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) y multinivel, así como todas las lógicas de los [*cost driver*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) para la transferencia de datos entre centros.

La flexibilidad del módulo permite la recuperación de datos de varias áreas de **Fluentis ERP**, así como la carga desde hojas de Excel externas o la entrada manual.

## Módulos del área

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/mid-year-closures/general-overview">Cierres intermedios (Chiusure infrannuali)</Link>
        <p>Permite simular un cierre de balance intermedio extracontable, que quedará almacenado en el sistema, aprovechando una serie de procedimientos automáticos que aceleran los pasos:</p>
            <p><Link to="/docs/controlling/mid-year-closures/create-mid-year-closures-intro" className="bold-link">Crear cierre intermedio (Crea chiusura infrannuale)</Link></p>
            <p>- crea el conjunto de datos inicial del período</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/adjusting-entry" className="bold-link">Asientos de ajuste (Scritture di rettifica)</Link></p>
            <p>- gestiona los diferimientos</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/integration-records" className="bold-link">Asientos de integración (Scritture di integrazione)</Link></p>
            <p>- gestiona los devengos</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization" className="bold-link">Valorización área de compras y ventas (Valorizzazione area acquisti e vendite)</Link></p>
            <p>- gestiona las facturas por recibir/emitar de los documentos en tránsito en el ciclo activo/pasivo</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/warehouse-oddments" className="bold-link">Contabilización de existencias (Contabilizzazione rimanenze)</Link></p>
            <p>- registra las existencias iniciales/finales</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve" className="bold-link">Recupero de amortización de activos (Ripresa ammortamento cespiti)</Link></p>
            <p>- crea los amortizaciones</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/consolidation" className="bold-link">Consolidación (Consolidamento)</Link></p>
            <p>- para crear un consolidado de balance</p>
            <p><Link to="/docs/controlling/mid-year-closures/search-off-balance-sheet-records" className="bold-link">Asientos extracontables de cierre (Scritture extracontabili di chiusura)</Link></p>
            <p>- para gestiones manuales</p>
    </div>
<div className="card">
###     <Link to="/docs/controlling/controlling-recordings/controlling_recording_intro">controlling de gestión (controllinglo di gestione)</Link>
        <p>En este módulo tenemos todos los procedimientos del verdadero controlling.</p>
        <p>**prima nota**: un libro diario de entrada de datos físicos o registros del área de análisis.</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/recording-physical-movements" className="bold-link">Registro de movimientos físicos (Registrazione movimenti fisici)</Link>: valorizado por producción/proyecto o manualmente</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area" className="bold-link">Registros extracontables de área (Registrazioni extracontabili di area)</Link>: valorizados automáticamente por amortizaciones o existencias, en lugar de manualmente</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates" className="bold-link">Tarifas estándar de los centros (Tariffe standard dei centri)</Link>: gestión manual</p>
        <p>**storico gestionale**: En esta sección tenemos todos los históricos de las distintas bases de datos elaboradas.</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/physical-flux-history" className="bold-link">Histórico de flujo físico (Storico flusso fisico)</Link>: la base de datos histórica de movimientos físicos</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/depreciation-history" className="bold-link">Histórico de amortizaciones (Storico ammortamenti)</Link>: la base de datos histórica de amortizaciones elaboradas</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Histórico de registros de gestión (Storico registrazioni gestionali)</Link>: la base de datos mensualizada y reelaborada de todos los drivers</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/index-history" className="bold-link">Histórico de índices (Storico indici)</Link>: la base de datos histórica de índices de costo elaborados en los diversos centros</p>
        <p>**procedure**: En esta sección encontramos los diversos procedimientos de recuperación y elaboración de datos.</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-production-data" className="bold-link">Recupero de datos de producción (Ripresa dati da produzione)</Link>: para recuperar tiempos y costos de los proyectos, tiempos de producción, costos de trabajos internos/externos</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice" className="bold-link">Recupero de datos de facturas de venta (Ripresa dati da fatture di vendita)</Link>: para recuperar comisiones y descuentos aplicados</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/period-processing" className="bold-link">Elaboración de períodos (Elaborazione periodi)</Link>: para elaborar datos físicos, amortizaciones, y procesar la base de datos aplicando drivers</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/alignment-production-indexes" className="bold-link">Actualización de tarifas de producción (Aggiornamento tariffe di produzione)</Link>: para alinear las tarifas de los centros productivos</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/master-consolidation" className="bold-link">Consolidación maestra (Consolidamento master)</Link>: para crear un control unificado de grupo</p>
        <p>**storico di progetto**: en esta sección tenemos todos los históricos de las diversas bases de datos elaboradas para quienes trabajan en proyectos/comisiones.</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-physical-history" className="bold-link">Histórico de movimientos físicos de comisión (Storico movimenti fisici di commessa)</Link>: la base de datos histórica de tiempos y cantidades trabajadas en proyecto/comisión</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/recording-project-history" className="bold-link">*Registros de gestión*registrazioni gestionali*</Link>: la base de datos histórica de costos y ingresos directos de proyecto</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/production-values" className="bold-link">Valores de producción (Valori da produzione)</Link>: materiales y trabajos utilizados directamente en proyecto/comisión</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-consolidation" className="bold-link">Consolidado de comisión (Consolidato di commessa)</Link>: la base de datos resultante con costos directos, indirectos y drivers de transferencia de costos generales</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/reclassification-overview">Reportes (Reporting)</Link>
        <p>Módulo dedicado a la preparación y elaboración de modelos de representación de los datos del área, tanto como datos contables como analíticos o de gestión.</p>
        <p><Link to="/docs/controlling/reclassifications/create-reclassification-model" className="bold-link">Modelos de reclasificación (Modelli di riclassificazione)</Link>: para definir libremente la estructura de las reclasificaciones deseadas, aplicando cuentas y centros específicos de la realidad empresarial</p>
        <p><Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reclasificaciones (Riclassificazioni)</Link>: son los resultados de la aplicación de datos sobre los diversos modelos, reclasificados que permanecen historizados para análisis posteriores</p>
        <p><Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Comparaciones (Comparazioni)</Link>: el procedimiento que permite comparar libremente múltiples reclasificados o más áreas, períodos y dimensiones de análisis de la contabilidad de gestión</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/budget/general-overview">Presupuesto (Budgeting)</Link>
        <p>Gestión de datos periódicos de presupuesto, en centros de costos y/o proyectos.</p>
        <p><Link to="/docs/controlling/budget/offbalance-records-search" className="bold-link">Registros extracontables de presupuesto (Registrazioni extracontabili di budget)</Link></p>
        <p>- las registraciones de presupuesto para el año, tal vez importadas de Excel</p>
        <p><Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Registros de presupuesto (Registrazioni di budget)</Link></p>
        <p>- las registros del presupuesto elaborado y mensualizado en los periodos individuales</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/cost-calculation/product-cost-intro">Costo de producto (Costo prodotto)</Link>
        <p>En este módulo valoramos los datos de las listas de materiales de producto para verificar su rentabilidad.</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/sales-forecast/sales-forecast-intro">Previsiones de venta (Previsioni di vendita)</Link>
        <p>En este módulo podemos crear las previsiones de ventas del año o período, partiendo quizás de los datos históricos de los documentos presentes en el área de ventas para luego reelaborarlos.</p>
    </div>
</div>

## Integraciones con otras áreas

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/finance-area/finance-intro">Contabilidad general (Contabilità generale)</Link>
        <p>De la contabilidad general recuperamos los saldos del período, tanto de contabilidad general como analítica y de proyecto. Desde el módulo de activos se valoran los datos de los amortizaciones de competencia.</p>
    </div>
    <div className="card">
###     <Link to="/docs/logistics/logistics-intro">Área logística (Area logistica)</Link>
        <p>De la gestión de almacenes importamos la valorización del período de las existencias.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/sales/sales-intro">Área ventas (Area vendite)</Link>
        <p>Para registrar las facturas por emitir, las comisiones de competencia del período antes de su vencimiento. Todos los documentos del área de ventas valoran la contabilidad analítica y de proyecto en cada línea de artículo.</p>
    </div>
    <div className="card">
###     <Link to="/docs/purchase/purchases-intro">Área compras y trabajo (Area acquisti e c/lavoro)</Link>
        <p>Para registrar las facturas por recibir, tanto por mercancía entrante como por trabajos externos aún no facturados. Todos los documentos del área de compras valoran la contabilidad analítica y de proyecto en cada línea de artículo.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/project-management/project-management-intro">Gestión de proyectos (Gestione progetti)</Link>
        <p>Del área de proyectos recibimos las horas del personal y los datos de las intervenciones externas.</p>
    </div>
    <div className="card">
###     <Link to="/docs/production/production-intro">Área producción (Area produzione)</Link>
        <p>El área de producción proporciona al control los tiempos (mano de obra y máquina) y las cantidades utilizadas en las fases de producción.</p>
    </div>
</div>

## Datos básicos (Dati di Base)
:::danger[Atención (Attenzione)]
Antes de utilizar las funcionalidades disponibles del control de gestión, es necesario gestionar una serie de configuraciones en las [**Tablas básicas (Tabelle di base)**](/docs/controlling/controlling-parametrization/general-overview), que dependen de los objetivos que se pretenden alcanzar. Por su naturaleza, el control puede prever solo marginalmente una configuración [**Inicio rápido (Fast start)**](/docs/guide/fast-start).

## Flujo de trabajo típico del área de control
Para una empresa de producción que utilice en su totalidad los procedimientos de control, el flujo operativo periódico será típicamente el siguiente:
- Creación del Cierre intermedio del período, que contiene los resultados finales
- Recuperación de datos de producción
- Elaboración de períodos
- Reclasificaciones de balance y Comparación de reclasificaciones del control
- Consolidado de proyecto y/o costo de producto
- Evaluación de las desviaciones del presupuesto