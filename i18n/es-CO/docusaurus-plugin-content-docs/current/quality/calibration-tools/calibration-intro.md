---
title: Introducción (Introduzione)
sidebar_position: 1
---

Este módulo permite la catalogación y el mantenimiento periódico y extraordinario de los instrumentos de monitoreo y medición utilizados para garantizar la idoneidad de los productos y la prestación de los servicios ofrecidos.


## Documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/measurement-tools/measurement-tool-management">Instrumentos de medida (Strumenti di misura)</Link>
        <p>En este registro se almacenan los instrumentos de medida utilizados para garantizar la idoneidad de los productos y la prestación de los servicios ofrecidos.</p>
        <p>Al instrumento de medida se le pueden asociar las informaciones de compra, de responsabilidad, las propiedades técnicas/mecánicas, de ubicación y de calibración.</p>
        <p>Si el instrumento está sujeto a calibración y la calibración es interna, es posible definir qué actividades deben realizarse y los valores a registrar para que la calibración sea exitosa.</p>
        <p>Si el instrumento está sujeto a calibración y la calibración es externa, es posible definir cuál es el ente externo que realizará la calibración.</p>
        <p>Si se ha establecido una periodicidad temporal de calibración, el botón de "Planificar nuevas calibraciones" permite la creación automática, por un período deseado, de las calibraciones programadas.</p>
        <p>Por defecto, están disponibles los reportes de: *Registro de instrumentos (Registro strumenti)* agrupados por: *strumento*, *categoria*, *fornitore*, *ubicazione*, *utilizzatore*, *scadenza garanzia* y *scadenza taratura*, *registro strumenti non soggetti a taratura* y *scheda strumento di misura*.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/calibration-tools/calibration-tool/calibration-tool-management">Calibración de instrumentos (Taratura strumenti)</Link>
        <p>En la gestión de Calibración de instrumentos es posible registrar las Calibraciones internas y los Certificados de calibración.</p>
        <p>Si el instrumento está sujeto a calibración y la calibración es interna, es posible ingresar, para las posiciones previstas, los valores registrados. Fluentis asignará automáticamente un resultado positivo o negativo para cada posición y en general.</p>
        <p>Si el instrumento está sujeto a calibración y la calibración es externa, es posible adjuntar el Certificado de calibración recibido del ente externo que realizó la calibración. El resultado, en este caso, será atribuido manualmente por el operador.</p>
        <p>Por defecto, están disponibles los reportes de: *registro tarature strumenti* agrupados por: *rapporto*, *strumento* y *operatore*.</p>
    </div>
</div>


## Para comenzar a utilizar (Per iniziare ad utilizzare)

los **strumenti di misura**:
- debes definir una [*Categoría de instrumentos de medida*](/docs/configurations/tables/quality/calibration-tools/measurement-tool-categories)  
- debes ingresar un nuevo [*Instrumento de medida*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)  

la **taratura strumenti**:
- debes definir: un [*Tipo de calibración*](/docs/configurations/tables/quality/calibration-tools/calibration-type), su *Numeración* y un [*Instrumento de medida*](/docs/quality/calibration-tools/measurement-tools/measurement-tool-management)  
- para facilitar la gestión de las *Calibraciones de instrumentos (Taratura strumenti)*, configura los [*Parámetros de calibración de instrumentos*](/docs/configurations/parameters/quality/calibration-tools)  
- debes ingresar una nueva [*Calibración de instrumento*](/docs/quality/calibration-tools/calibration-tool/calibration-tool-management)  

## Vínculos con otros módulos (Collegamenti con altri moduli)
El módulo de *Calibración de instrumentos (Taratura strumenti)* no está vinculado a ningún otro módulo.