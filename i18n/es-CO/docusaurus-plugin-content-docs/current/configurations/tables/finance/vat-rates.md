---
title: Tarifas de IVA 
sidebar_position: 1
---

:::tip[Inicio Rápido]
La tabla está sujeta al procedimiento de [**Inicio Rápido**](/docs/guide/fast-start)

Si se desea configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

Esta tabla es común a todas las empresas presentes en la base de datos y presenta la lista de las tarifas de IVA aplicables en todo el sistema de gestión.

Se trata de una tabla precargada sobre la cual el usuario autorizado puede operar para modificar o agregar lo necesario para la actividad de la empresa.

### Cuadrícula principal 

**Código / Descripción**: código y su respectiva descripción para llamar a la tarifa de IVA que se está parametrizando, numérico, de identificación de la tarifa.

**Descripción secundaria**: descripción adicional que puede ser utilizada para reportes de impresión personalizados, etc. (normalmente no necesaria).

**Porcentaje**: define el porcentaje de IVA a aplicar. Para los códigos de exención, exclusión y no imponibilidad, se debe establecer en 0.

**Categoría de IVA**: llama a los tipos de IVA fijos previstos por el sistema de gestión. La tipología es muy importante, por ejemplo, para la totalización de los diversos movimientos en la comunicación trimestral de liquidaciones de IVA y, más en general, para todos los declaranos de IVA. Las opciones disponibles para la localización italiana son:
- *Tasa de IVA*
- *No imponible*
- *Exento*
- *Excluido*
- *74 ter CEE*, para las agencias de viaje
- *74 ter FUORI CEE*, para las agencias de viaje
- *74 ter PARTE CEE*, para las agencias de viaje
- *74 ter PARTE FUORI CEE*, para las agencias de viaje

**Porcentaje no deducible**: define el porcentaje no deducible que se aplicará al impuesto. Se registrará en la contabilidad dentro de la sección de IVA para el cálculo efectivo de la parte indeducible; se puede modificar o forzar directamente en el registro. 

**Techo**: el indicador define qué tarifas están vinculadas a las declaraciones de intención: solo las tarifas que tienen este indicador activo hacen visible, en la rejilla de IVA del registro contable, el combo box de vinculación de las declaraciones de intención. 

ATENCIÓN: el indicador es irrelevante para la gestión de las declaraciones de intención en el ciclo documental de compra/venta: aquí solo es relevante lo que se establece dentro de su respectivo registro de declaraciones de intención emitidas / recibidas.

A efectos del cálculo del plafón general, además, este indicador identifica la tarifa que "**consume**" mes a mes nuestro plafón general disponible en calidad de exportadores habituales (dentro del procedimiento de gestión de plafón), por lo tanto, en el lado de compras.

**Venta exterior para plafond**: con este indicador se identifican las tarifas de IVA, presentes en los registros de venta del año yyyy, que **incrementan** nuestro plafón disponible para el año yyyy+1 en calidad de exportador habitual.

**En declaración de IVA**: el indicador establece qué tarifas deben ser gestionadas en la declaración/comunicación trimestral de liquidaciones de IVA y más en general en todos los declaraciones de IVA. Por ejemplo: típicamente, los códigos correspondientes a la categoría de IVA *Excluido* tendrán este indicador <u>no</u> activo, mientras que las *tarifas*, los *exentos* y los *no imponibles* tendrán el indicador activo dado que deben ser incluidos en las declaraciones de IVA. (Consulte las instrucciones ministeriales de la declaración anual de IVA o de la comunicación trimestral de liquidaciones).

**No intra**: el indicador establece las tarifas que, aunque se utilicen en documentos (en los formularios de facturas de compras/ventas) o en registros de tipo intra-CEE, no deben considerarse tales. Se lee en la creación automática de los resúmenes Intrastat.

**Rep. San Marino**: el indicador determina cuáles son las tarifas utilizadas en las operaciones con San Marino (Obsoleto, comunicación abrogada).

**% IVA Agrícola Detr.**: el campo establece el porcentaje no deducible compensativa fija de la tarifa en caso de movimiento en régimen agrícola.

**Consentir IVA 0 en el diario**: el indicador obliga al registro de líneas de IVA con un monto de 0 tanto en debe como en haber en el Libro diario. La [**Plantilla de libro mayor**](/docs/configurations/tables/finance/ledger-records-templates/insert-ledger-records-templates) de uso contable, debe prever el mismo tipo de autorización para las líneas a 0.

**Cantidad de oro/plata**: el indicador permite establecer qué tarifas deben ser resumidas en los campos previstos en la Comunicación anual de IVA. (Considerar actualmente obsoleto).

**Importe chatarra**: el indicador permite establecer qué tarifas deben ser resumidas en los campos previstos en la Comunicación anual de IVA. (Considerar actualmente obsoleto).

**No en cliente/proveedor**: el indicador permite excluir de la *Spesómetro* los movimientos de IVA vinculados a esta tarifa. (Considerar actualmente obsoleto).

**Código PA**: En este campo debe ingresarse el código previsto para la facturación electrónica entre privados y hacia la administración pública en casos en los que no esté presente el IVA (exención, exclusión, no imponibilidad). Para el detalle de los códigos previstos, consulte las especificaciones técnicas de la factura electrónica publicadas en el sitio de la Agencia de Ingresos.

**Excluir de la declaración de intención**: indicador actualmente no utilizado en concreto por ningún procedimiento. Desarrollado para establecer que la tarifa de IVA correspondiente, con el indicador activo, no puede ser sobrescrita por el código de IVA establecido en el registro de declaraciones de intención como código a utilizar para operaciones en exención en función de la declaración de intención.

**Excluir del template automático**: al activar este indicador, el código de IVA correspondiente no se incluye en los registros contables generados automáticamente ya que están vinculados a la causal contable principal a través del campo *Causal automática*.

:::note Nota
El uso del indicador se vuelve **fundamental** en un caso particular: pensemos en la recepción de una **factura de compra "mixta"**, en la que el proveedor ha facturado parte **en inversión del cargo** y parte en régimen ordinario. Por lo tanto, en la parte ordinaria se tendrá la deducción del IVA en la compra, mientras que la parte en inversión del cargo resultará neutra ya que se registra tanto en el registro de compras como en el registro de ventas. Al diferenciar adecuadamente los códigos de IVA utilizados, por ejemplo creando un código "inversión del cargo mixto cuota deducible" y activando este indicador en dicho código, si en el registro principal del lado de compra se imputan las cantidades correspondientes a los dos códigos (ej. 22 para la parte en inversión del cargo y "inversión del cargo misto...."), en la contrapartida creada automáticamente solo se informará el código 22, generando automáticamente la deducción solo sobre la parte excluida del mecanismo de inversión del cargo.
:::

**IVA para causales automáticas**: este campo se utiliza para forzar un código de IVA particular en el registro contable generado automáticamente (por ejemplo, un giroconto para inversión del cargo) en comparación con el que se utiliza en el registro principal (por ejemplo, el del lado de compra en el inversión del cargo).

:::note Nota
El uso del campo se vuelve **fundamental** en un caso en particular: pensemos en la recepción de una **factura de compra en inversión del cargo con IVA parcialmente o totalmente indetrachable**. De forma predeterminada, el software establecería el mismo código de IVA también en el giroconto del lado de la venta, y el porcentaje no deducible determina de hecho una "no imponibilidad" para la parte proporcional. Por lo tanto, el efecto sería siempre neutro. Para ejercer la deducción limitada, es necesario que todo el IVA del lado de las ventas sea imponible, dejando así un costo la parte indetrachable en el lado de las compras. Para evitar tener que ingresar manualmente en el registro de giroconto generado automáticamente para corregir el código de IVA (por ejemplo, el 2250 que presenta una deducción limitada al 50%) volviendo a establecer un código 22, se puede establecer este campo que automáticamente realizará la corrección.
:::

**Fecha de validez final**: el código no será más utilizable después de la fecha establecida, útil para bloquear el uso de códigos que ya no están vigentes.

**Base para el conteo de sellos**: dado que el impuesto en factura se inserta automáticamente solo cuando hay códigos de IVA exentos, excluidos o no imponibles (se considera la *Categoría IVA* del código mismo) y la factura supera un cierto monto (establecido en la tabla del registro de la empresa), el significado de este indicador es gestionar algunos casos que, aunque exentos o no imponibles o excluidos, son excepcionales y no prevén la aplicación del impuesto. En estos casos, por lo tanto, el indicador debe desactivarse.

NOTA: en caso de activación incorrecta del indicador en códigos de tipo Tarifa, prevalece la lectura de la categoría de IVA y, por lo tanto, el impuesto NO se inserta.

**Inversión del cargo**: ver [**aquí**](/docs/finance-area/particular-cases/mixed-reverse-charge).

**IVA del margen / IVA del margen de referencia**: ver [**aquí**](/docs/finance-area/particular-cases/VAT_regime-del-maine).

### Tipo de contabilidad de IVA   

En esta sección es posible definir para cada tarifa de IVA una o más cuentas detalladas para el IVA de compras/ventas (necesidad típicamente conectada a localizaciones no italianas, por ejemplo, de los países del este de Europa, donde hay la obligación de contabilizar separadamente la aplicación de IVA reducida, en comparación con la normal o aumentada). 
También es posible asociar dichas cuentas a un *Tipo de contabilidad de IVA* que se codificará en la correspondiente [**tabla**](/docs/configurations/tables/finance/vat-accounting-types), asignado al cliente/proveedor dentro del registro, o previsto por defecto en los [**parámetros generales de contabilidad**](/docs/configurations/parameters/finance/accounting-parameters).

**Tipo / Descripción de contabilidad de IVA**: código / descripción del tipo de contabilidad de IVA (campo no obligatorio).

**Cuenta de compras**: la cuenta de compras a proponer para este tipo de contabilidad de IVA.

**Cuenta detallada de compras**: la cuenta detallada de compras a proponer para este tipo de contabilidad de IVA.

**Descripción**: descripción de la cuenta detallada de compras a proponer para este tipo de contabilidad de IVA.

**Cuenta de ventas**: la cuenta de ventas a proponer para este tipo de contabilidad de IVA.

**Cuenta de detalle de ventas**: la cuenta detallada de ventas a proponer para este tipo de contabilidad de IVA.

**Descripción**: descripción de la cuenta detallada de ventas a proponer para este tipo de contabilidad de IVA.

### Notas 

**Código**: código, numérico, de identificación de la tarifa.

**Notas**: notas adicionales para agregar. 

### Especificaciones para la Declaración 

En esta sección es posible parametrizar los diversos códigos de IVA, utilizados en los registros contables, de manera que se obtenga un reporte de impresión (a crear cuando sea necesario a través del diseñador de reportes integrado en Fluentis) que represente un facsímil de la Declaración anual de IVA.
El reporte agregará los diversos códigos de IVA utilizados durante el año para exponer los diversos totales a reportar en los renglones de la declaración fiscal.
Por lo tanto, es necesario asociar a cada código de IVA la fila correcto de la declaración donde debe ser insertado, refiriéndose a las instrucciones ministeriales y a las lógicas específicas de la declaración en cuestión.

**Operaciones**: Llamar a través del combo box el tipo de operación: Activa, pasiva o inversión del cargo para distinguir la parte de operaciones de IVA ingresadas con el código correspondiente que se incluirá en los renglones del formulario referidos a compras, ventas o inversión del cargo.

**Fila de declaración fiscal / Descripción**: Llamar a través del combo box la fila (código y descripción) de la declaración de IVA para asociar (la lista está precargada y no es modificable por el usuario).

### VIDEO TUTORIALES

:::important Ver También 
[**VIDEO TUTORIALES TARIFAS DE IVA**](/docs/video/finance/intro)
:::