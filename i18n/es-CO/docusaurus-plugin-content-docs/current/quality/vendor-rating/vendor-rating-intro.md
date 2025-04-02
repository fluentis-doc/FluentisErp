---
title: Introducción (Introduzione)
sidebar_position: 1
---

La evaluación de proveedores se refiere al proceso de aprobación de proveedores potenciales y evaluación de proveedores históricos a través de evaluaciones cuantitativas y cualitativas. El objetivo principal es elaborar un ranking de los proveedores disponibles en relación con la calidad del producto/servicio.

## Los documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/initial-vendor-rating">Evaluaciones iniciales y periódicas (Valutazioni iniziali e periodiche)</Link>
        <p>Es un criterio de evaluación *subjetivo (soggettivo)* que se basa en preguntas (*Check-List*) predefinidas para *Clases de suministro (Classi di fornitura)* realizadas a proveedores potenciales o proveedores históricos.</p>
    </div>
    <div className="card">
###     <Link to="/docs/quality/vendor-rating/vendor-rating-on-nc">Evaluaciones periódicas sobre No conformidades (Valutazioni periodiche su Non conformità)</Link>
        <p>Es un criterio de evaluación *objektivo (oggettivo)* que se basa en las *non conformità* atribuidas a *fornitori* en un determinado período de tiempo.</p>
    </div>
</div>


## Para comenzar a utilizar (Per iniziare ad utilizzare)  

las **valutazioni iniziali e periodiche**:  
- debes definir: un [*Tipo de evaluación*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type), una cuenta [*Proveedor*](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) y una [*Evaluación de proveedor*](/docs/configurations/tables/quality/vendor-rating/vendor-ratings).  
- para facilitar la gestión de las *Evaluaciones iniciales y periódicas*, configurar los [*Parámetros de Calificación de Proveedor*](/docs/configurations/parameters/quality/vendor-ratings) en la sección *Evaluaciones iniciales*.  
- debes ingresar una nueva [*Evaluación inicial*](/docs/quality/vendor-rating/initial-vendor-rating).  

las **valutazioni periodiche su non conformità**:  
- debes definir un [*Tipo de evaluación*](/docs/configurations/tables/quality/vendor-rating/vendor-rating-type).  
- para facilitar la gestión de las *Evaluaciones periódicas sobre No conformidades*, configurar los [*Parámetros de Calificación de Proveedor*](/docs/configurations/parameters/quality/vendor-ratings) en la sección *Evaluaciones periódicas No conformidades*.  
- debes ingresar al menos una nueva [*No conformidad a proveedor*](/docs/quality/claims-and-non-compliance/non-compliances/non-compliance) con fecha comprendida en el período que deseas evaluar.  
- debes elaborar una [*Evaluación periódica sobre No conformidad*](/docs/quality/vendor-rating/vendor-rating-on-nc).  

## Conexiones con otros módulos (Collegamenti con altri moduli)  
El módulo de *Documentos de origen externo* no está conectado a ningún otro módulo.