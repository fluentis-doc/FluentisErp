---
title: Introducción (Introduzione)
sidebar_position: 1
---

Dentro del módulo de Contabilidad de gestión, tenemos todos los procedimientos de ingreso y procesamiento de datos contables por centro empresarial en las áreas de análisis diferentes a la de presupuesto: tendremos la primera nota de los movimientos físicos o los registros extra-contables de área, el histórico de los datos procesados (tanto físicos como a valor) para el año/período, las varias visualizaciones de control y de extracción de datos, y la visualización del estado final de los datos para la dimensión de análisis de proyecto.

## Configuración inicial del módulo (Configurazione iniziale del modulo)
Sugerimos referirse a la sección de la [*Visión General de Controlling*](/docs/controlling/general-overview-controlling/general-overview) para una visión general de las tablas y los pasos lógicos de la configuración, que debe comenzar con un análisis preciso de la estructura productiva de la empresa y los objetivos que se desean lograr implementando el Control de Gestión.

## Documentos gestionados (Documenti gestiti)
import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
        <p>El módulo está estructurado en las siguientes secciones:</p>
###     Primera nota (Prima nota)
        <p>Una primera nota de entrada de datos físicos o de registros del área de análisis:</p>
        <p>- *Registro de movimientos físicos (Registrazione movimenti fisici)*: valorado por producción/proyecto o manualmente</p>
        <p>- *registrazioni extracontabili di area*: valorizados automáticamente por amortizaciones o existencias, en lugar de manualmente</p>
        <p>- *Tarifas estándar de los centros (Tariffe standard dei centri)*: gestionadas manualmente</p>
###     Histórico de gestión (Storico gestionale)
        <p>En esta sección tenemos todos los históricos de las varias bases de datos procesadas:</p>
        <p>- *storico flusso fisico*: la base de datos histórica de los movimientos físicos</p>
        <p>- *storico ammortamenti*: la base de datos histórica de las amortizaciones procesadas</p>
        <p>- *storico registrazioni gestionali*: la base de datos mensualizada y reelaborada de todos los drivers</p>
        <p>- *storico indici*: la base de datos histórica de los índices de costo procesados en los varios centros</p>
###     Procedimientos (Procedure)
        <p>En esta sección encontramos los varios procedimientos de recuperación y procesamiento de datos:</p>
        <p>- *ripresa dati da produzione*: para recuperar tiempos y costos de los proyectos, tiempos de la producción y costos de los trabajos internos/externos</p>
        <p>- *ripresa dati da fatture di vendita*: para recuperar comisiones y descuentos aplicados</p>
        <p>- *elaborazione periodi*: para procesar datos físicos, amortizaciones y elaborar la base de datos aplicando drivers</p>
        <p>- *Actualización de tarifas de producción (Aggiornamento tariffe di produzione)*: para alinear las tarifas de los centros productivos</p>
        <p>- *consolidamento master*: para crear un control unificado de grupo</p>
###     Histórico de proyecto (Storico di progetto)
        <p>En esta sección tenemos todos los históricos de las varias bases de datos procesadas para quienes trabajan en proyecto/encargo:</p>
        <p>- *storico movimenti fisici di commessa*: la base de datos histórica de los tiempos y cantidades trabajadas en proyecto/encargo</p>
        <p>- *registrazioni gestionali*: la base de datos histórica de los costos y ingresos directos del proyecto</p>
        <p>- *valori da produzione*: materiales y trabajos directamente utilizados en proyecto/encargo</p>
        <p>- *consolidato di commessa*: la base de datos resultante con costos directos, indirectos y drivers de asignación de costos generales</p>
    </div>
</div>