---
title: gestione cespiti
sidebar_position: 3
---

ENLACE:

**[Detalle (Dettaglio)](/docs/finance-area/fixed-assets/fixed-assets-management/detail)**

**[Operaciones Patrimoniales (Operazioni Patrimoniali)](/docs/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations)**

**[Operaciones Económicas (Operazioni Economiche)](/docs/finance-area/fixed-assets/fixed-assets-management/economical-operations)**

**[Activos Fijos Vinculados (Cespiti collegati)](/docs/finance-area/fixed-assets/fixed-assets-management/linked-fixed-assets)**

**[Propiedad de Activos Fijos (Proprietà cespiti)](/docs/finance-area/fixed-assets/fixed-assets-management/fixed-assets-property)**

 

Desde este formulario es posible ingresar manualmente una nueva ficha de activo fijo (este tipo de operación no es normalmente previsto, un ejemplo práctico puede ser la inclusión de activos fijos anteriores de los cuales no se pretende cargar el registro contable ya presente, tal vez, en un software anterior).

Este procedimiento es alternativo a la inserción de la ficha directamente desde el registro contable de la factura de compra configurada especialmente para la gestión de activos fijos (procedimiento, este último, recomendado).

 

**testata**

Configuración de la **categoria cespite**: seleccionar la categoría del cuadro combinado (conectada a la tabla **[categoría de activo fijo (categoria cespite)](/docs/configurations/tables/finance/fixed-asset-category)**);  

**tipo proprietà**: normalmente de propiedad como se propone por defecto; también se prevén los activos fijos en leasing y en alquiler, que están numerados por separado de los demás y no aparecen en las impresiones del libro de activos fijos amortizables. Esta gestión permite simular el cálculo de las amortizaciones de fin de año para la comparación con el canon de leasing pagado, a fin de calcular los impuestos. En caso de activo fijo no propietario, será posible ingresar alguna nota de referencia al contrato correspondiente.

**divisione**: configurada por defecto en la división en uso, puede variar si es necesario. El campo solo se puede configurar en el momento de la inserción del nuevo activo fijo, no pudiendo ser modificado después.  

**tipo contab.**: campo normalmente no completado en la fase de inserción manual de la ficha, se completa en el registro contable para imponer una cuenta de contrapartida particular (definida en la tabla Tipos de contabilización de activos fijos) en comparación con la que se define en la categoría de activo fijo a la que pertenece.  

 

**precodice**: puede ser atribuido a la numeración del activo fijo; si no se inserta, la numeración propuesta será única sobre todos los activos fijos de la empresa/división activa, al insertar un precódigo, el número del activo fijo será único para cada uno de los precódigos existentes.


**Mat./Inmat. (Mat./Immat.)**: naturaleza del activo fijo (material o inmaterial); se propone automáticamente en función de los datos contenidos en la categoría de activo fijo a la que pertenece.


**note propr.**: campo de notas libre
 

**numero cespite**: propuesto automáticamente en orden progresivo, puede ser forzado manualmente respetando la unicidad (también en relación con el precódigo).


**descrizione del cespite**: campo obligatorio, será visualizada y registrada en las diversas impresiones y procedimientos del módulo. 

 

Dependiendo de la configuración de las categorías de activos fijos y de los parámetros del módulo, también puede ser visible el tipo de amortización objetiva asignado al activo fijo, con, eventualmente, un porcentaje específico a utilizar para el activo mismo en lugar del estándar del tipo.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/image01.png)