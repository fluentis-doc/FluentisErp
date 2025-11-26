---
title: Introducción
sidebar_position: 1
ai_generated: true
---

A partir de la versión 2025 de Fluentis ERP es posible gestionar el presupuesto mediante dos modalidades diferentes.

1. El presupuesto por centro de costos<!-- centro di costo -->, que se integra con el control de gestión a fin de valorizar un área específica de análisis del presupuesto, y que puede ser valorizada con cost driver específicos. Luego se compara con los datos reales dentro de la Comparación de Reclasificaciones<!-- Comparazione Riclassificazioni -->.
El módulo permite la carga de datos detallados mediante una importación desde Excel de los datos previsionales del presupuesto.

2. Gestión del presupuesto también sin el uso completo del módulo de control de gestión: el procesamiento es posible por subcuentas contables<!-- sottoconti contabili -->, por centros de costos<!-- centri di costo -->, centros de beneficio<!-- centri di profitto --> y en modelos de reclasificación<!-- modello di riclassificazione -->.

## Configuración inicial del módulo<!-- Configurazione iniziale del modulo -->
Las tablas necesarias para la utilización del módulo son:
- En la tabla [**Tipos de área**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) se necesita un tipo específico para asociar a las áreas de presupuesto<!-- aree di Budget -->.
- En la tabla [**Área**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) se necesita al menos una área de presupuesto<!-- area Budget --> asociada al tipo de área de presupuesto<!-- tipo area di budget -->.
- La configuración de la estructura de los [**Centros de costos**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) de la empresa<!-- Centri di costo aziendali -->.
- Para quienes no utilizan el módulo completo de controlling (Budgeting no a través de registros extracontables) se puede configurar la tabla **Tipos de presupuesto<!-- Tipi Budget -->** (una tabla simple para codificar categorías y asignar una numeración) y la tabla [**Tipos de periodo**](/docs/configurations/tables/controlling/forecast/period-types).

## Documentos gestionados<!-- Documenti gestiti -->
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/budget/budget-excel-import">Importar presupuesto desde Excel con Bizlink</Link><!-- Importazione Budget da Excel con Bizlink -->
        <p>- para valorizar externamente en el controlling la elaboración de un presupuesto</p>
###     <Link to="/docs/controlling/budget/budgeting-records-search" className="bold-link">Registros de presupuesto</Link><!-- Scritture di budget -->
        <p>- para intervenir manualmente en los datos del presupuesto</p>
###     <Link to="/docs/controlling/controlling-recordings/history/recording-history" className="bold-link">Histórico de registros de gestión</Link><!-- Storico registrazioni gestionali -->
        <p>- para elaborar un presupuesto a partir de los datos de un real existente, aplicando [*Porcentajes de variación*](/docs/configurations/tables/controlling/analytical-accounting/variation-percentages)<!-- Percentuali di variazione --> a los datos</p>
    </div>
</div>