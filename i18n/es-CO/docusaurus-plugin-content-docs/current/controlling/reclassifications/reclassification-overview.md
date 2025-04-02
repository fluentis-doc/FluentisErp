---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo **reporting** permite al operador gestionar las reclasificaciones de balance, tanto en los datos de contabilidad general como en los datos de contabilidad analítica por centro de costos. Además de los informes, hay un potente procedimiento de comparación de las reclasificaciones elaboradas, tanto en los datos generales como en los de contabilidad de gestión, en este segundo caso pudiendo comparar libremente áreas de análisis y periodos (meses o semanas según la configuración inicial) diferentes.  
El módulo está presente en el área *controlling* y utiliza como datos de origen los procesados en el *chiusura infrannuale* o en los *registrazioni gestionali*: esta segunda opción solo está disponible para las empresas que han activado y configurado el *controlling*.

## Configuración inicial del módulo (Configurazione iniziale del modulo)
- [**tipi riclassificazione***](/docs/configurations/tables/controlling/reporting/reclassification-types): para definir los tipos de reclasificaciones a gestionar.

- [**modelli di riclassificazione***](/docs/controlling/reclassifications/create-reclassification-model): verificar la completitud de los modelos precargados por Fast start, en comparación con las posibles codificaciones personalizadas a nivel de Plan de cuentas.

## Documentos gestionados (Documenti gestiti)  
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/controlling/reclassifications/create-reclassification-model">Modelos de reclasificación (Modelli di riclassificazione)</Link>
        <p>- para definir la estructura lógica de visualización y valorización de la reportística</p>
###     <Link to="/docs/controlling/reclassifications/reclassifications-management" className="bold-link">Reclasificaciones (Riclassificazioni)</Link>
        <p>- para aplicar los datos de un cierre interanual a un modelo de reclasificación</p>
###     <Link to="/docs/controlling/reclassifications/comparations" className="bold-link">Comparación de reclasificaciones (Comparazione riclassificazioni)</Link>
        <p>- para comparar los datos de los reclasificados, basados en el mismo modelo de reclasificación, entre años y periodos diferentes</p>
    </div>
</div>