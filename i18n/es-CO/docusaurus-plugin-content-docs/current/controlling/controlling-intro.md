---
title: Controlling Fluentis ERP
description: Descubre el módulo de Controlling de Fluentis ERP - cierres intermedios, presupuestos, reclasificaciones, control de gestión e integración con producción, ventas y compras.
sidebar_position: 1
keywords: [Controlling ERP, Fluentis ERP, Contabilidad analítica, Presupuesto, Reclasificaciones de balance, Centro de costos, Reporting de gestión]
schema: TechArticle
tags:
  - Controlling
  - Fluentis ERP
last_update:
  author: Fluentis Documentation Team
  date: 2025-10-29
ai_generated: true
---

# Controlling Fluentis ERP

El módulo **Controlling de Fluentis ERP** permite a las empresas monitorear y gestionar la preparación de simulaciones de balance intermedio<!-- bilancio infrannuale -->, la gestión de reclasificaciones de balance sobre [*Modelos*](/docs/controlling/reclassifications/create-reclassification-model) libremente configurables, así como la inserción y el mantenimiento de todos los registros de gestión necesarios para la contabilidad directiva por centro de costos<!-- centro di costo -->.

También existen procedimientos de consolidación de balance dedicados a instalaciones multicompañía, así como la posibilidad de realizar comparaciones sobre los datos históricos procesados, las previsiones de ventas y el cálculo del costo del producto, los presupuestos por centro de empresa<!-- centro aziendale -->.

La gestión del controlling está naturalmente integrada con todas las áreas de **Fluentis ERP**: desde la recuperación de los documentos en tránsito dentro del ciclo pasivo y activo, hasta la valoración de los datos cuantitativos (*tiempos* y *cantidades*) insertados en los avisos de producción, así como la valorización de los costos de materiales y trabajos externos hasta la recolección de horas y costos de actividades e intervenciones del área de proyectos.

El usuario puede configurar libremente en cualquier momento, siguiendo la evolución de las necesidades de la empresa, la estructura de los [*Centros empresariales*<!-- Centri aziendali -->](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) a valorar en la contabilidad analítica<!-- contabilità analitica -->, contando además con su estructura [*multidimensional*<!-- multidimensionale -->](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) y multinivel, así como toda la lógica de los [*cost drivers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) para distribución de datos entre centros.

La flexibilidad del módulo permite recuperar datos desde las diferentes áreas de **Fluentis ERP** pero también la carga desde hojas de Excel externas o el ingreso manual.

## Módulos de Controlling ERP<!-- Moduli Controlling ERP -->

Las principales áreas funcionales son:

- **[Cierres intermedios](/docs/controlling/mid-year-closures/general-overview)**: simulación extracontable del balance, gestión de devengos, diferimientos, existencias y consolidación.
- **[Control de gestión](/docs/controlling/controlling-recordings/controlling-recording-intro)**: registro de movimientos físicos, históricos de gestión, procedimientos periódicos e histórico de proyectos.
- **[Reporting y Reclasificaciones](/docs/controlling/reclassifications/reclassification-overview)**: modelos de reclasificación, comparaciones y análisis de datos.
- **[Presupuestación](/docs/controlling/budget/general-overview)**: registros de presupuesto mensualizados, gestión de registros extracontables.
- **[Costo de producto](/docs/controlling/cost-calculation/product-cost-intro)**: valorización de las listas de materiales del producto.
- **[Previsiones de venta](/docs/controlling/sales-forecast/sales-forecast-intro)**: elaboración de previsiones basadas en datos históricos de ventas.

A continuación se describen todos los módulos principales con enlaces y una síntesis de los contenidos:

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/mid-year-closures/general-overview">Cierres intermedios<!-- Chiusure infrannuali --></Link>
        <p>Permite simular un cierre de balance intermedio extracontable<!-- chiusura di bilancio infrannuale extracontabile -->, que quedará almacenado en el sistema, aprovechando una serie de procedimientos automáticos que agilizan los pasos:</p>
            <p><Link to="/docs/controlling/mid-year-closures/create-mid-year-closures-intro" className="bold-link">Crear cierre intermedio<!-- Crea chiusura infrannuale --></Link></p>
            <p>- crea el set de datos inicial del periodo</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/adjusting-entry" className="bold-link">Asientos de ajuste<!-- Scritture di rettifica --></Link></p>
            <p>- gestiona los diferimientos<!-- risconti --></p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/integration-records" className="bold-link">Asientos de integración<!-- Scritture di integrazione --></Link></p>
            <p>- gestiona los devengos<!-- ratei --></p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/purchase-and-sales-area-valorization" className="bold-link">Valorización área compras y ventas<!-- Valorizzazione area acquisti e vendite --></Link></p>
            <p>- gestiona las facturas a recibir/emitir desde los documentos en tránsito en el ciclo activo/pasivo</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/warehouse-oddments" className="bold-link">Contabilización de existencias<!-- Contabilizzazione rimanenze --></Link></p>
            <p>- detecta las existencias iniciales/finales</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/fixed-assets-depreciation-retrieve" className="bold-link">Recuperación de amortización de activos fijos<!-- Ripresa ammortamento cespiti --></Link></p>
            <p>- crea los amortizamientos</p>
            <p><Link to="/docs/controlling/mid-year-closures/procedures/consolidation" className="bold-link">Consolidación<!-- Consolidamento --></Link></p>
            <p>- para crear un consolidado de balance</p>
            <p><Link to="/docs/controlling/mid-year-closures/search-off-balance-sheet-records" className="bold-link">Asientos extracontables de cierre<!-- Scritture extracontabili di chiusura --></Link></p>
            <p>- para gestiones manuales</p>
    </div>
<div className="card">
###     <Link to="/docs/controlling/controlling-recordings/controlling-recording-intro">Control de gestión<!-- Controllo di gestione --></Link>
        <p>En este módulo tenemos todos los procedimientos propios del Controlling</p>
        <p>**Primera nota**: una primera nota de entrada de datos físicos o de registros del área de análisis.</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/recording-physical-movements" className="bold-link">Registro de movimientos físicos<!-- Registrazione movimenti fisici --></Link>: valorizado por producción/proyecto o manualmente</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/extra-accounting-records-of-area" className="bold-link">Registros extracontables del área<!-- Registrazioni extracontabili di area --></Link>: valorizados automáticamente por amortizaciones o existencias, o bien manualmente</p>
        <p><Link to="/docs/controlling/controlling-recordings/first-note/corporate-centers-std-rates" className="bold-link">Tarifas estándar de los centros<!-- Tariffe standard dei centri --></Link>: gestión manual</p>
        <p>**Histórico de gestión**: en esta sección tenemos todos los históricos de las diversas bases de datos procesadas</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/physical-flux-history" className="bold-link">Histórico de flujo físico<!-- Storico flusso fisico --></Link>: la base histórica de datos de los movimientos físicos</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/depreciation-history" className="bold-link">Histórico de amortizaciones<!-- Storico ammortamenti --></Link>: la base de datos histórica de las amortizaciones procesadas</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Histórico de registros de gestión<!-- Storico registrazioni gestionali --></Link>: la base de datos mensualizada y reelaborada por todos los drivers</p>
        <p><Link to="/docs/controlling/controlling-recordings/history/index-history" className="bold-link">Histórico de índices<!-- Storico indici --></Link>: la base de datos histórica de los índices de costo procesados sobre los distintos centros</p>
        <p>**Procedimientos**: en esta sección encontramos los diferentes procedimientos de recuperación y procesamiento de datos</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-production-data" className="bold-link">Recuperación de datos de producción<!-- Ripresa dati da produzione --></Link>: para recuperar tiempos y costos de los proyectos, tiempos de la producción, costos de los trabajos internos/externos</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/recovery-of-sales-invoice" className="bold-link">Recuperación de datos de facturas de venta<!-- Ripresa dati da fatture di vendita --></Link>: para recuperar comisiones y descuentos aplicados</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/period-processing" className="bold-link">Procesamiento de periodos<!-- Elaborazione periodi --></Link>: para procesar datos físicos, amortizaciones, y elaborar la base de datos aplicando drivers</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/alignment-production-indexes" className="bold-link">Actualización de tarifas de producción<!-- Aggiornamento tariffe di produzione --></Link>: para alinear las tarifas de los centros productivos</p>
        <p><Link to="/docs/controlling/controlling-recordings/procedure/master-consolidation" className="bold-link">Consolidación master<!-- Consolidamento master --></Link>: para crear un controlling unificado de grupo</p>
        <p>**Histórico de proyectos**: en esta sección tenemos todos los históricos de las diferentes bases de datos procesadas para quienes trabajan por proyecto<!-- progetto -->/orden<!-- commessa --></p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-physical-history" className="bold-link">Histórico de movimientos físicos de orden<!-- Storico movimenti fisici di commessa --></Link>: la base de datos histórica de los tiempos y cantidades trabajadas en proyecto<!-- progetto -->/orden<!-- commessa --></p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/recording-project-history" className="bold-link">*Registros de gestión*<!-- Registrazioni gestionali --></Link>: la base histórica de datos de los costos e ingresos directos de proyectos</p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/production-values" className="bold-link">Valores desde la producción<!-- Valori da produzione --></Link>: materiales y trabajos utilizados directamente en proyecto<!-- progetto -->/orden<!-- commessa --></p>
        <p><Link to="/docs/controlling/controlling-recordings/project-history/project-consolidation" className="bold-link">Consolidado de orden<!-- Consolidato di commessa --></Link>: la base resultante con costos directos, indirectos y drivers de distribución de costos generales</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/reclassification-overview">Reporting</Link>
        <p>Módulo dedicado a la preparación y elaboración de modelos de representación de datos del área, tanto como datos contables como analíticos o de gestión.</p>
        <p><Link to="/docs/controlling/reclassifications/create-reclassification-model" className="bold-link">Modelos de reclasificación<!-- Modelli di riclassificazione --></Link>: para definir libremente la estructura de las reclasificaciones deseadas, aplicando cuentas y centros específicos a la realidad empresarial</p>
        <p><Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reclasificaciones<!-- Riclassificazioni --></Link>: son los resultados de la aplicación de los datos sobre los diferentes modelos, reclasificados y almacenados históricamente para análisis posteriores</p>
        <p><Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Comparaciones<!-- Comparazioni --></Link>: el procedimiento que permite comparar libremente varios reclasificados o diversas áreas, periodos y dimensiones de análisis de la contabilidad de gestión</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/budget/general-overview">Presupuestación<!-- Budgeting --></Link>
        <p>Gestión de los datos periódicos de presupuesto, en centros de costos y/o proyectos.</p>
        <p><Link to="/docs/controlling/budget/offbalance-records-search" className="bold-link">Registros extracontables de presupuesto<!-- Registrazioni extracontabili di budget --></Link></p>
        <p>- los registros de presupuesto para el año, quizá importados desde Excel</p>
        <p><Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Registros de presupuesto<!-- Registrazioni di budget --></Link></p>
        <p>- los registros del presupuesto trabajado y mensualizado en los diferentes periodos</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/cost-calculation/product-cost-intro">Costo de producto<!-- Costo prodotto --></Link>
        <p>En este módulo valorizamos los datos de las listas base de producto para verificar su margen.</p>
    </div>
    <div className="card">
###     <Link to="/docs/controlling/sales-forecast/sales-forecast-intro">Previsiones de venta<!-- Previsioni di vendita --></Link>
        <p>En este módulo podemos crear previsiones de venta para un año o periodo, partiendo por ejemplo de los datos históricos de los documentos presentes en el área de ventas para luego reelaborarlos.</p>
    </div>
</div>

## Integración de Controlling con otras áreas de Fluentis ERP<!-- Integrazione Controlling con altre aree di Fluentis ERP -->

- **[Contabilidad general](/docs/finance-area/finance-intro)**: recuperación de saldos de periodo, tanto de contabilidad general como analítica y de proyectos. Desde el módulo de activos fijos se valoran los datos de los amortizamientos correspondientes.
- **[Área logística](/docs/logistics/logistics-intro)**: desde la gestión de magazzino<!-- magazzino --> importamos la valorización de periodo de las existencias.
- **[Área de ventas](/docs/sales/sales-intro)**: detección de facturas a emitir y comisiones correspondientes al periodo antes de su devengo. Todos los documentos del área de ventas valorizan la contabilidad analítica<!-- contabilità analitica --> y de proyectos en cada línea de artículo.
- **[Área de compras y subcontratos](/docs/purchase/purchases-intro)**: detección de facturas a recibir, tanto para mercancía entrante como para trabajos externos aún no facturados. Todos los documentos del área de compras valorizan la contabilidad analítica<!-- contabilità analitica --> y de proyectos en cada línea de artículo.
- **[Gestión de proyectos](/docs/project-management/project-management-intro)**: para las horas de personal y datos de intervenciones externas.
- **[Área de producción](/docs/production/production-intro)**: provee los tiempos (mano de obra y máquina) y las cantidades utilizadas en las fases de producción.

## Datos de Base<!-- Dati di Base -->

:::danger[Atención<!-- Attenzione -->]
Antes de utilizar las funcionalidades disponibles del control de gestión, es necesario administrar una serie de configuraciones en las [**Tablas de base**](/docs/controlling/controlling-parametrization/general-overview), que dependen de los objetivos que se quieran alcanzar. Por su naturaleza, el controlling sólo permite marginalmente una configuración [**Fast start**](/docs/guide/fast-start).

## Flujo de trabajo típico del área de controlling<!-- Flusso di lavoro tipico area controlling -->
Para una empresa de producción que utilice por completo los procedimientos de controlling, el flujo operativo periódico será típicamente el siguiente:
- Creación del cierre intermedio del periodo, que contiene los definitivos
- Recuperación de datos desde producción
- Procesamiento de periodos
- Reclasificaciones de balance y Comparación de reclasificaciones de controlling
- Consolidado de proyecto<!-- progetto --> y/o costo de producto
- Evaluación de diferencias respecto al presupuesto