---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo **Reporting** permite al usuario gestionar las reclasificaciones de balance<!-- riclassificazioni di bilancio -->, tanto sobre los datos de contabilidad general como sobre los datos de la contabilidad analítica por centro de costos<!-- centro di costo -->. Además de los reportes, existe un potente procedimiento de comparación de las reclasificaciones realizadas, tanto sobre los datos de contabilidad general como de contabilidad de gestión<!-- contabilità gestionale -->; en este segundo caso, es posible comparar libremente diferentes áreas de análisis y periodos (meses o semanas según la configuración inicial).
El módulo se encuentra en el área de *Controlling* y usa como fuente de datos aquellos elaborados en el *Cierre interanual<!-- Chiusura infrannuale -->* o en los *Registros de gestión<!-- Registrazioni gestionali -->*: esta segunda opción está disponible solo para las empresas que han activado y configurado el *Controlling*.

## Configuración inicial del módulo<!-- Configurazione iniziale del modulo -->
- [***Tipos de reclasificación***](/docs/configurations/tables/controlling/reporting/reclassification-types)<!-- Tipi riclassificazione -->: para definir los tipos de reclasificaciones<!-- riclassificazioni --> a gestionar.

- [***Modelos de reclasificación***](/docs/controlling/reclassifications/create-reclassification-model)<!-- Modelli di riclassificazione -->: verificar la integridad de los modelos precargados de Fast start, respecto a posibles codificaciones personalizadas a nivel del Plan de cuentas<!-- Piano dei conti -->.


## Documentos gestionados<!-- Documenti gestiti -->
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/create-reclassification-model">Modelos de reclasificación<!-- Modelli di riclassificazione --></Link>
        <p>- para definir la estructura lógica de visualización y valorización de los reportes<!-- reportistica --></p>
###     <Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reclasificaciones<!-- Riclassificazioni --></Link>
        <p>- para aplicar los datos de un cierre interanual<!-- chiusura infrannuale --> a un modelo de reclasificación<!-- riclassificazione --></p>
###     <Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Comparación de reclasificaciones<!-- Comparazione riclassificazioni --></Link>
        <p>- para comparar los datos reclasificados<!-- riclassificati -->, basados en el mismo modelo de reclasificación<!-- riclassificazione -->, entre diferentes años y periodos</p>
    </div>
</div>