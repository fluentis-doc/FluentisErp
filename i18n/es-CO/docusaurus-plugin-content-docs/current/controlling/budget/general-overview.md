---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo de Presupuesto (Budget) permite al operador gestionar el presupuesto por centro de costos, que se integra con el control de gestión de ***Fluentis Erp*** para valorar una área específica de análisis del presupuesto, que puede ser valorada con controladores de costo específicos y se compara con los datos reales dentro de las Comparaciones de Reclasificación (Comparazione Riclassificazioni).  
El módulo está presente en el área de control (controlling) y prevé la carga de datos detallados mediante una importación desde Excel de los datos previsionales del presupuesto.

## Configuración inicial del módulo (Configurazione iniziale del modulo)  
Las tablas necesarias para el uso del módulo son:  
- En la tabla [**Tipos de área (Tipi area)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) se requiere un tipo específico para asociar a las áreas del presupuesto.  
- En la tabla [**area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) se necesita al menos un área de presupuesto asociada al tipo de área de presupuesto.  
- La configuración de la estructura de los [**centri di costo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) de la empresa.

## Documentos gestionados (Documenti gestiti)  
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/budget/budget-excel-import">Importación de Presupuesto desde Excel con Bizlink (Importazione Budget da Excel con Bizlink)</Link>
        <p>- para valorar en el control la elaboración externa de un presupuesto</p>
###     <Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Asientos de presupuesto (Scritture di budget)</Link>
        <p>- para intervenir manualmente en los datos del presupuesto</p>
###     <Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Historial de registros de gestión (Storico registrazioni gestionali)</Link>
        <p>- para elaborar un presupuesto a partir de los datos de un resultado existente, aplicando unas [*Porcentajes de variación*](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages) sobre los datos</p>
    </div>
</div>