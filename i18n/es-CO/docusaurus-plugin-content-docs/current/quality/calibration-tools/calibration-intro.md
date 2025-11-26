---
title: Introducción
sidebar_position: 1
ai_generated: true
---

Este módulo permite la catalogación y el mantenimiento periódico y extraordinario de los instrumentos de monitoreo y medición<!-- strumenti di monitoraggio e misurazione --> utilizados para garantizar la idoneidad de los productos y la prestación de los servicios ofrecidos.

## Los documentos gestionados<!-- I documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/measurement-tools/measurement-tool-management">Instrumentos de medición<!-- Strumenti di misura --></Link>
        <p>En este registro maestro<!-- anagrafica --> se almacenan los instrumentos de medición<!-- strumenti di misura --> utilizados para garantizar la idoneidad de los productos y la prestación de los servicios ofrecidos.</p>
        <p>Al instrumento de medición<!-- strumento di misura --> se puede asociar información de compra, de responsabilidad, propiedades técnicas/mecánicas, de ubicación y de calibración<!-- taratura -->.</p>
        <p>Si el instrumento está sujeto a calibración<!-- taratura --> y la calibración<!-- taratura --> es interna, es posible definir cuáles son las actividades que deben realizarse y los valores a registrar para que la calibración<!-- taratura --> tenga un resultado positivo.</p>
        <p>Si el instrumento está sujeto a calibración<!-- taratura --> y la calibración<!-- taratura --> es externa, es posible definir cuál es la entidad externa que efectuará la calibración<!-- taratura -->.</p>
        <p>Si se ingresa una periodicidad temporal de calibración<!-- taratura -->, el botón "Planificar nuevas calibraciones<!-- Pianifica nuove tarature -->" permite la creación automática, para un periodo deseado, de las calibraciones<!-- tarature --> planificadas.</p>
        <p>Como estándar están disponibles los reportes de: *Registro de instrumentos*<!-- Registro strumenti --> agrupados por: *Instrumento*<!-- Strumento -->, *Categoría*<!-- Categoria -->, *Proveedor*<!-- Fornitore -->, *Ubicación*<!-- Ubicazione -->, *Usuario*<!-- Utilizzatore -->, *Vencimiento de garantía*<!-- Scadenza garanzia --> y *Vencimiento de calibración*<!-- Scadenza taratura -->, *Registro de instrumentos no sujetos a calibración*<!-- Registro Strumenti non soggetti a taratura --> y *Ficha del instrumento de medición*<!-- Scheda Strumento di misura -->.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/calibration-tool/calibration-tool-management">Calibración de instrumentos<!-- Taratura strumenti --></Link>
        <p>En la gestión de Calibración de instrumentos<!-- Taratura strumenti --> es posible registrar las calibraciones<!-- Tarature --> internas y los certificados de calibración<!-- Certificati di taratura -->.</p>
        <p>Si el instrumento está sujeto a calibración<!-- taratura --> y la calibración<!-- taratura --> es interna, es posible ingresar, para las posiciones previstas, los valores recogidos. Fluentis asignará automáticamente un resultado positivo o negativo, por cada posición y en general.</p>
        <p>Si el instrumento está sujeto a calibración<!-- taratura --> y la calibración<!-- taratura --> es externa, es posible adjuntar el Certificado de calibración<!-- Certificato di taratura --> recibido de la entidad externa que ha realizado la calibración<!-- taratura -->. El resultado, en este caso, será atribuido manualmente por el operador.</p>
        <p>Como estándar están disponibles los reportes de: *Registro de calibraciones de instrumentos*<!-- Registro tarature strumenti --> agrupados por: *Informe*<!-- Rapporto -->, *Instrumento*<!-- Strumento --> y *Operador*<!-- Operatore -->.</p>
    </div>
</div>

## Para empezar a utilizar<!-- Per iniziare ad utilizzare -->

los **Instrumentos de medición**<!-- Strumenti di misura -->:
- debes definir una [*Categoría de instrumentos de medición*<!-- Categoria Strumenti di misura -->](/docs/configurations/tables/quality/calibration-tools/measurement-tool-categories)   
- debes ingresar un nuevo [*Instrumento de medición*<!-- Strumento di misura -->](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   

la **Calibración de instrumentos**<!-- Taratura strumenti -->:
- debes definir: un [*Tipo de calibración*<!-- Tipo taratura -->](/docs/configurations/tables/quality/calibration-tools/calibration-type), su *Numeración*<!-- Numerazione --> y un [*Instrumento de medición*<!-- Strumento di misura -->](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)   
- para facilitar la gestión de la *Calibración de instrumentos*<!-- Taratura strumenti -->, configurar los [*Parámetros de calibración de instrumentos*<!-- Parametri Taratura strumenti -->](/docs/configurations/parameters/quality/calibration-tools)   
- debes ingresar una nueva [*Calibración de instrumento*<!-- Taratura strumento -->](/docs/quality/calibration-tools/calibration-tool/calibration-tool-management)   

## Conexiones con otros módulos<!-- Collegamenti con altri moduli -->
El módulo de *Calibración de instrumentos*<!-- Taratura strumenti --> no está conectado con ningún otro módulo.