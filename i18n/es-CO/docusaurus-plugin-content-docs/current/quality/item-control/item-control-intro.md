---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo permite registrar toda la información necesaria para garantizar una producción correcta y la prestación de servicios en condiciones controladas.   


## Documentos gestionados<!-- I documenti gestiti -->

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/data-sheets/data-sheet-management">Hojas técnicas<!-- Schede tecniche --></Link>
        <p>Las hojas técnicas<!-- Schede tecniche --> catalogan toda la información que describe las características de los productos asociados como aptos para un contrato, una especificación funcional o un determinado uso.</p>
        <p>Las hojas técnicas<!-- schede tecniche --> pueden personalizarse para el Cliente.</p>
        <p>Se gestionan las revisiones y la trazabilidad entre hojas técnicas<!-- Schede tecniche --> deseadas.</p>
        <p>Están disponibles de forma estándar los informes de: Hoja técnica<!-- Scheda tecnica --> (para uso interno) y Hoja de Producto (para uso comercial).</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/control-plans/control-plan-management">Planes de control<!-- Piani di controllo --></Link>
        <p>En los planes de control<!-- Piani di controllo --> se catalogan todas las pruebas planificadas, verificaciones, mediciones necesarias y los valores a obtener para garantizar que los materiales y productos asociados estén dentro de los límites de las propiedades requeridas.</p>
        <p>A través de los planes de control<!-- Piani di controllo --> es posible predefinir los controles a realizar durante el ciclo de vida de un artículo: desde los controles en la recepción de materiales, devoluciones de cuenta de trabajo<!-- conto lavoro -->, hasta los controles durante el ciclo productivo de un artículo: antes, durante y después de la creación del producto.</p>
        <p>Los planes de control<!-- Piani di controllo -->, así como las hojas técnicas<!-- Schede tecniche -->, pueden personalizarse para Cliente y/o Proveedor. También en este documento se gestionan las revisiones y la trazabilidad entre los planes de control<!-- Piani di controllo --> deseados.</p>
        <p>En cada prueba planificada es posible indicar: si la prueba se realiza internamente o en terceros, la categoría y el instrumento de medición a utilizar, los tipos de valores solicitados (Sí/No o Numéricos), el valor nominal, los límites inferior y superior configurables en porcentaje o valor absoluto, el número de mediciones a realizar y con qué frecuencia.</p>
        <p>Algunos ejemplos de tipos de planes de control<!-- Piani di controllo --> posibles: Controles en la recepción, Controles en la recepción para proveedores críticos, Controles de producción, Pruebas finales.</p>
        <p>Está disponible de forma estándar el informe de: Plan de control<!-- Piano di controllo -->.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/items-control/item-control-management">Control de artículos<!-- Controllo articoli --></Link>
        <p>Los controles de artículo<!-- Controlli articolo --> permiten el registro de las mediciones realizadas, los valores detectados y la consiguiente indicación de la conformidad o no del material, semielaborado o producto controlado.</p>
        <p>Indicamos los documentos desde los cuales es posible realizar controles sobre artículos<!-- articoli -->: Recepciones de mercancía, D.D.T. y Facturas de compra, Declaraciones de producción, Fases de órdenes de producción, Devoluciones de cuenta de trabajo<!-- Rientri da Conto lavoro --> y Movimientos de carga<!-- Movimentazioni di carico -->. Para cada tipo de documento es posible especificar para qué detalle del artículo<!-- articolo --> se desea realizar la verificación: Ninguno, por Lote, por Número de serie o por Unidad de carga, el tipo de control a generar y de qué tipo de plan de control<!-- Piano di controllo --> buscar prioritariamente las pruebas a realizar.</p>
        <p>Es posible establecer graduaciones de color para indicar diferentes estados de los controles visibles posteriormente en el filtro de Controles<!-- Controlli -->.</p>
        <p>Además, es posible configurar si el reconocimiento del resultado negativo de la prueba es propuesto automáticamente por el sistema: al primer valor detectado no conforme o sobre el promedio aritmético de los valores detectados.</p>
        <p>La gestión del ingreso y consulta de las mediciones reporta: el artículo<!-- articolo --> controlado, el plan de control<!-- Piano di controllo --> de origen, el resultado general de las mediciones, el detalle del documento de origen y, para cada prueba registrada, toda la información heredada del plan de control<!-- Piano di controllo --> de origen, el valor y el promedio de los valores detectados en la sesión de medición múltiple de valores, el resultado, el operador que ha registrado los valores y con qué instrumento de medición. Desde la gestión también es posible realizar los movimientos de transferencia de artículos<!-- articoli --> desde el almacén de control de calidad<!-- magazzino di controllo qualità --> a los almacenes de artículos conformes y no conformes<!-- magazzini articoli conformi e non conformi -->.</p>
        <p>A través de la solución M.E.S., integrada en Fluentis, es posible ingresar la información requerida de forma directa y simplificada.</p>
        <p>Están disponibles de forma estándar los informes de: Lista de controles de artículos<!-- Elenco Controlli articolo --> por Artículo, Lista de controles de artículos<!-- Elenco Controlli articolo --> por Cliente/Proveedor, Lista de controles de artículos<!-- Elenco Controlli articolo --> por Tipo de documento y Etiqueta de Artículo C y NC.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management">Certificados de análisis<!-- Certificati di analisi --></Link>
        <p>Los certificados de análisis<!-- Certificati di Analisi --> certifican las verificaciones realizadas sobre el producto, el respeto de los límites indicados en los planes de control<!-- Piani di controllo --> y en las hojas técnicas<!-- Schede tecniche --> relacionadas y acompañan la venta del producto.</p>
        <p>De forma estándar están disponibles los informes de: Certificado de análisis<!-- Certificato di analisi --> y Declaración de conformidad.</p>
    </div>
</div>


## Para empezar a utilizar<!-- Per iniziare ad utilizzare -->   

las **Hojas técnicas<!-- Schede tecniche -->**:
- debes definir un [*Tipo de hoja técnica<!-- Tipo scheda tecnica -->*](/docs/configurations/tables/quality/item-control/data-sheets-type)   
- debes definir un [*Tipo de prueba<!-- Tipo prova -->*](/docs/configurations/tables/quality/item-control/test-type) que se utilizará en la sesión/pestaña *Propiedades<!-- Proprietà -->* de las *Hojas técnicas<!-- Schede tecniche -->*   
- para facilitar la gestión de las *Hojas técnicas<!-- Schede tecniche -->* configurar los [*Parámetros Control de artículos<!-- Parametri Controllo articoli -->*](/docs/configurations/parameters/quality/item-control) en la sesión de las *Hojas técnicas<!-- Schede tecniche -->*   
- debes ingresar una nueva [*Hoja técnica<!-- Scheda tecnica -->*](/docs/quality/item-control/data-sheets/data-sheet-management)   

los **Planes de control<!-- Piani di controllo -->**:
- debes definir un [*Tipo de plan de control<!-- Tipo piano di controllo -->*](/docs/configurations/tables/quality/item-control/control-plan-type) y su *Numeración<!-- Numerazione -->*   
- debes definir un [*Tipo de prueba<!-- Tipo prova -->*](/docs/configurations/tables/quality/item-control/test-type) que se utilizará en la sesión/pestaña *Pruebas planificadas<!-- Prove pianificate -->* de los [*Planes de control<!-- Piani di controllo -->*](/docs/quality/item-control/control-plans/control-plan-management)   
- para facilitar la gestión de los *Planes de control<!-- Piani di controllo -->* configurar los [*Parámetros Control de artículos<!-- Parametri Controllo articoli -->*](/docs/configurations/parameters/quality/item-control) en la sesión de los *Planes de control<!-- Piani di controllo -->*   
- debes ingresar un nuevo [*Plan de control<!-- Piano di controllo -->*](/docs/quality/item-control/control-plans/control-plan-management)   

los **Controles de artículo<!-- Controlli articolo -->**:   
- debes definir: un [*Tipo de control de artículo<!-- Tipo controllo articolo -->*](/docs/configurations/tables/quality/item-control/item-control-type) y un [*Tipo de resultado<!-- Tipo esito -->*](/docs/configurations/tables/quality/general/result-type)   
- debes definir un [*Plan de control<!-- Piano di controllo -->*](/docs/quality/item-control/control-plans/control-plan-management) y asociarlo a un artículo<!-- articolo --> en la sesión/pestaña *Artículos asociados<!-- Articoli associati -->* o a una fase de un ciclo de trabajo sujeta a Control de calidad<!-- Controllo qualità -->   
- para facilitar la gestión de los *Controles de artículo<!-- Controlli articolo -->* configurar los [*Parámetros Control de artículos<!-- Parametri Controllo articoli -->*](/docs/configurations/parameters/quality/item-control) en la sesión/pestaña de *Controles de artículo<!-- Controlli articolo -->*   
- debes ingresar un nuevo [*Control de artículo<!-- Controllo articolo -->*](/docs/quality/item-control/items-control/item-control-management) mediante la funcionalidad de [*Importar artículos a controlar<!-- Importa articoli da controllare -->*](/docs/quality/item-control/items-control/item-control-import)    

los **Certificados de análisis<!-- Certificati di analisi -->**:   
- debes definir un [*Tipo de certificado de análisis<!-- Tipo certificati di analisi -->*](/docs/configurations/tables/quality/item-control/c-o-a-type) y su *Numeración<!-- Numerazione -->*   
- para facilitar la gestión de los *Certificados de análisis<!-- Certificati di analisi -->* configurar los [*Parámetros Control de artículos<!-- Parametri Controllo articoli -->*](/docs/configurations/parameters/quality/item-control) en la sesión de los *Certificados de análisis<!-- Certificati di analisi -->*   
- debes ingresar un nuevo [*Certificado de análisis<!-- Certificato di analisi -->*](/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management)