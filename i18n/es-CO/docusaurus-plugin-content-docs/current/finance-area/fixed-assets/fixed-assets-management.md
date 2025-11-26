---
title: Gestión de Activos Fijos
sidebar_position: 3
ai_generated: true
---

ENLACE:<!-- LINK: -->

**[Detalle](/docs/finance-area/fixed-assets/fixed-assets-management/detail)<!-- Dettaglio -->**

**[Operaciones Patrimoniales](/docs/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations)<!-- Operazioni Patrimoniali -->**

**[Operaciones Económicas](/docs/finance-area/fixed-assets/fixed-assets-management/economical-operations)<!-- Operazioni Economiche -->**

**[Activos Fijos Vinculados](/docs/finance-area/fixed-assets/fixed-assets-management/linked-fixed-assets)<!-- Cespiti collegati -->**

**[Propiedad de activos fijos](/docs/finance-area/fixed-assets/fixed-assets-management/fixed-assets-property)<!-- Proprietà cespiti -->**

 

Desde este formulario es posible ingresar manualmente una nueva ficha de activo fijo<!-- scheda cespite --> (este tipo de operación normalmente no está prevista; un ejemplo práctico puede ser el ingreso de activos fijos previos<!-- cespiti pregressi --> de los cuales no se desea cargar la contabilización ya existente, quizá, en un software anterior).

Este procedimiento es alternativo al ingreso del registro directamente desde la contabilización<!-- registrazione contabile --> de la factura de compra configurada específicamente para la gestión de activos fijos<!-- gestione cespiti --> (este último procedimiento es el recomendado).

 

**Cabecera**<!-- Testata -->

Configuración de la **Categoría del activo fijo<!-- Categoria cespite -->** de pertenencia: seleccionar la categoría desde el cuadro combinado (relacionado a la tabla **[categoría activo fijo](/docs/configurations/tables/finance/fixed-asset-category)<!-- categoria cespite -->**);

**Tipo de propiedad<!-- Tipo proprietà -->**: normalmente de propiedad como propuesto por defecto; también están previstos los activos fijos en leasing y en alquiler<!-- cespiti in leasing e a noleggio -->, que son numerados por separado y no aparecen en las impresiones del libro de activos fijos amortizables. Esta gestión permite simular el cálculo de las amortizaciones de fin de año para comparar con la tasa del leasing pagada con fines de cálculo impositivo. En caso de activo fijo no de propiedad, será posible ingresar alguna nota referente al contrato correspondiente.

**División**: configurada por defecto en la división en uso, puede ser modificada si es necesario. El campo puede ser establecido únicamente al momento de ingresar el nuevo activo fijo<!-- cespite -->, ya que no podrá ser cambiado posteriormente.

**Tipo de contabiliz. <!-- Tipo contab. ** -->**: (tipo de contabilización): campo normalmente no se rellena al insertar manualmente la ficha, se rellena en la contabilización<!-- registrazione contabile --> para imponer una cuenta de contrapartida particular (definida en la tabla Tipos de contabilización de activos fijos<!-- Tipi contabilizzazione cespiti -->) respecto a la definida en la categoría del activo fijo correspondiente.

 

**Pre-código<!-- Precodice -->**: puede ser asignado a la numeración del activo fijo<!-- cespite -->; si no se ingresa, la numeración propuesta será única para todos los activos fijos<!-- cespiti --> de la empresa/división activa; ingresando un pre-código, el número del activo fijo será único para cada uno de los pre-códigos existentes.

**Mat./Inmat.<!-- Mat./Immat. -->**: naturaleza del activo fijo<!-- cespite --> (material o inmaterial); se propone automáticamente con base en el dato contenido en la categoría del activo fijo correspondiente.

**Notas de propiedad<!-- Note propr. -->**: campo de notas libre
 

**Número de activo fijo<!-- Numero cespite -->**: propuesto automáticamente en orden progresivo, puede ser forzado manualmente respetando la unicidad (también en relación con el pre-código).

**Descripción del activo fijo<!-- Descrizione del cespite -->**: campo obligatorio, será visualizado e impreso en los distintos informes y procedimientos del módulo.

 

Según la configuración de las categorías de activos fijos<!-- categorie cespiti --> y de los parámetros del módulo, también puede ser visible el tipo de amortización objetiva asignada al activo fijo<!-- cespite -->, con, eventualmente, un porcentaje específico a utilizar para ese activo fijo en lugar del estándar del tipo.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/image01.png)