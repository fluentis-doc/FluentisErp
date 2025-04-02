---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo permite registrar toda la información necesaria para garantizar una correcta producción y una entrega de servicios en condiciones controladas.   


## Documentos gestionados (I documenti gestiti)

import Link from '@docusaurus/Link';

<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/data-sheets/data-sheet-management">Hojas técnicas (Schede tecniche)</Link>
        <p>Las Hojas técnicas catalogan toda la información que describe las características de los productos asociados como aptas para un contrato, una especificación funcional o un determinado uso.</p>
        <p>Las hojas técnicas pueden ser personalizables para el Cliente.</p>
        <p>Se gestionan las revisiones y la trazabilidad entre las Hojas técnicas deseadas.</p>
        <p>Como estándar, están disponibles los informes de: Hoja técnica (para uso interno) y Hoja de Producto (para uso comercial).</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/control-plans/control-plan-management">Planes de control (Piani di controllo)</Link>
        <p>En los Planes de control se catalogan todas las pruebas planificadas, verificaciones, mediciones necesarias y los valores a obtener para garantizar que los materiales y productos asociados se encuentren dentro de los límites de las propiedades requeridas.</p>
        <p>A través de los Planes de control es posible predefinir los controles a realizar durante el ciclo de vida de un artículo: desde los controles en la aceptación de materiales, devoluciones de trabajo por cuenta, hasta los controles durante el ciclo productivo de un artículo: antes, durante y después de la creación del producto.</p>
        <p>Los Planes de control, al igual que las Hojas técnicas, pueden ser personalizables para el Cliente y/o Proveedor. También en este documento se gestionan las revisiones y la trazabilidad entre los Planes de control deseados.</p>
        <p>En cada prueba planificada es posible indicar: si la prueba se realiza internamente o en terceros, la categoría y el instrumento de medición a utilizar, los tipos de valor requeridos (Sí/No o Numéricos), el valor nominal, los límites inferior y superior especificables en porcentaje o en valor absoluto, el número de mediciones a realizar y con qué frecuencia.</p>
        <p>Enumeramos algunos ejemplos de tipos de Planes de control posibles: Controles en aceptación, Controles en aceptación para proveedores críticos, Controles de producción, Pruebas finales.</p>
        <p>Como estándar, está disponible el informe de: Plan de control.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/items-control/item-control-management">Control de artículos (Controllo articoli)</Link>
        <p>Los Controles de artículos permiten registrar las mediciones realizadas, los valores registrados y la correspondiente indicación de conformidad o no del material, semielaborado o producto controlado.</p>
        <p>Enumeramos los documentos desde los cuales es posible realizar controles sobre los artículos: Recepciones de mercancía, D.D.T. y Facturas de compra, Declaraciones de producción, Fases de órdenes de producción, Devoluciones de Cuenta de trabajo y Movimientos de carga. Para cada tipo de documento, es posible especificar para qué detalle de artículo se desea realizar la verificación: Ninguno, por Lote, por Número de serie o por Unidad de carga, el tipo de control a generar y desde qué tipo de Plan de control buscar, de manera prioritaria, las pruebas a realizar.</p>
        <p>Es posible establecer gradaciones de color para indicar diferentes estados de los controles, visibles posteriormente en el filtro de Controles.</p>
        <p>Además, es posible establecer si el reconocimiento del resultado negativo de la prueba es propuesto automáticamente por el sistema: al primer valor registrado no conforme o sobre la media aritmética de los valores registrados.</p>
        <p>La gestión de la inserción y consulta de las mediciones reporta: el artículo controlado, el Plan de control de origen, el resultado global de las mediciones, el detalle del documento de origen y, para cada prueba registrada, toda la información heredada del Plan de control de origen, el valor y la media de los valores registrados en la sesión de Medición múltiple de valores, el resultado, el operador que registró los valores y con qué instrumento de medición. Desde la gestión también es posible realizar los movimientos de transferencia de artículos del almacén de control de calidad a los almacenes de artículos conformes y no conformes.</p>
        <p>A través de la solución M.E.S., integrada en Fluentis, es posible ingresar la información requerida de manera directa y simplificada.</p>
        <p>Como estándar, están disponibles los informes de: Lista de Controles de artículo por Artículo, Lista de Controles de artículo por Cliente/Proveedor, Lista de Controles de artículo por Tipo de documento y Etiqueta de Artículo C y NC.</p>
    </div>
</div>
<div className="cardContainer">
    <div className="card">
###     <Link to="/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management">Certificados de análisis (Certificati di analisi)</Link>
        <p>Los Certificados de Análisis certifican las verificaciones realizadas sobre el producto, el cumplimiento de los límites indicados en los Planes de control y en las Hojas técnicas relacionadas, y acompañan la venta del producto.</p>
        <p>Como estándar, están disponibles los informes de: Certificado de análisis y Declaración de conformidad.</p>
    </div>
</div>


## Para empezar a utilizar (Per iniziare ad utilizzare)   

las **schede tecniche**:
- debes definir un [*Tipo de hoja técnica*](/docs/configurations/tables/quality/item-control/data-sheets-type)   
- debes definir un [*Tipo de prueba*](/docs/configurations/tables/quality/item-control/test-type) que será utilizado en la sesión/pestaña *Propiedades* de las *Hojas técnicas*   
- para facilitar la gestión de las *Hojas técnicas*, establece los [*Parámetros de Control de artículos*](/docs/configurations/parameters/quality/item-control) en la sesión de las *Hojas técnicas*   
- debes ingresar una nueva [*Hoja técnica*](/docs/quality/item-control/data-sheets/data-sheet-management)   

los **piani di controllo**:
- debes definir un [*Tipo de plan de control*](/docs/configurations/tables/quality/item-control/control-plan-type) y su correspondiente *Numeración*   
- debes definir un [*Tipo de prueba*](/docs/configurations/tables/quality/item-control/test-type) que será utilizado en la sesión/pestaña *Pruebas planificadas* de los [*Planes de control*](/docs/quality/item-control/control-plans/control-plan-management)   
- para facilitar la gestión de los *Planes de control*, establece los [*Parámetros de Control de artículos*](/docs/configurations/parameters/quality/item-control) en la sesión de los *Planes de control*   
- debes ingresar un nuevo [*Plan de control*](/docs/quality/item-control/control-plans/control-plan-management)   

los **controlli articolo**:   
- debes definir: un [*Tipo de control de artículo*](/docs/configurations/tables/quality/item-control/item-control-type) y un [*Tipo de resultado*](/docs/configurations/tables/quality/general/result-type)   
- debes definir un [*Plan de control*](/docs/quality/item-control/control-plans/control-plan-management) y asociarlo a un artículo en la sesión/pestaña *Artículos asociados* o a una fase de un Ciclo de trabajo sujeta a Control de calidad   
- para facilitar la gestión de los *Controles de artículo*, establece los [*Parámetros de Control de artículos*](/docs/configurations/parameters/quality/item-control) en la sesión/pestaña de los *Controles de artículo*   
- debes ingresar un nuevo [*Control de artículo*](/docs/quality/item-control/items-control/item-control-management) a través de la funcionalidad de [*Importar artículos a controlar*](/docs/quality/item-control/items-control/item-control-import)    

los **certificati di analisi**:   
- debes definir un [*Tipo de certificados de análisis*](/docs/configurations/tables/quality/item-control/c-o-a-type) y su correspondiente *Numeración*   
- para facilitar la gestión de los *Certificados de análisis*, establece los [*Parámetros de Control de artículos*](/docs/configurations/parameters/quality/item-control) en la sesión de los *Certificados de análisis*   
- debes ingresar un nuevo [*Certificado de análisis*](/docs/quality/item-control/certificates-of-analysis/certificate-of-analysis-management)