---
title: Tipos de facturas de compra
sidebar_position: 6
---

Esta tabla es fundamental para definir los diferentes tipos de facturas de compra disponibles, cada una con sus propias características. Se puede acceder desde *Configuración > Tablas > Compras > Tipos de facturas de compra*.

Los campos presentes son:

**Código/Descripción**: son campos obligatorios necesarios para definir el tipo de factura.

**Numeración/Descripción**: determina la [Numeración](/docs/configurations/tables/fluentis-numerations) que está asociada al tipo de factura.

**Naturaleza de la factura**: este valor debe ser seleccionado de una lista e indica la naturaleza de la factura: factura, recibo fiscal, recibo fiscal resumido, nota de crédito de proveedor, nota de cargo de proveedor.

**Plantilla/Descripción de la Plantilla**: [Plantilla de libro mayor](/docs/configurations/tables/finance/ledger-records-templates/search-ledger-records-templates) utilizada para contabilizar la factura. Esta Plantilla será utilizada si no hay un ingreso por compras o una cuenta de contrapartida predeterminada ingresada en el registro del proveedor.

**Código de transacción**: sirve para indicar el código de agrupamiento de los documentos para la declaración Intrastat y debe ser completado en los casos de facturas o documentos de variación CEE.

**Almacén/Descripción** y **Plantilla del almacén/Descripción**: se proponen durante la inserción de las líneas de la factura acompañatoria, donde pueden ser modificados y determinan el almacén y la Plantilla con la que se cargará la mercancía en el momento de la recepción.

**Desde el pedido**: si está activo, la factura de este tipo puede cumplir pedidos de proveedores.

**Factura inmediata**: si está activo, la factura de este tipo es de tipo inmediato y deberán completarse, en la factura, también los datos para el transporte.

**Intracomunitario**: si está activo, el sistema verifica que el país del cliente sea un país CEE. Esta opción deberá configurarse solo en tipos de facturas intracomunitarias. Si no hay el vínculo entre cliente y tipo de factura intracomunitaria, el sistema devolverá un mensaje de aviso.

**En estadística**: si está activo, la factura de este tipo se incluirá en las estadísticas por lo que será visible en las impresiones de *Facturación*.

**Control de proveedor**: sirve para activar un control que, en el momento de seleccionar el sujeto a nombre de quien se emite la factura, la procedimiento permitirá seleccionar solo cuentas de tipo proveedor y no de tipo cliente.

**Agrupación por valor de vencimiento**: si está configurado, en la contabilización de la factura, los valores de madurez se agruparán y se utilizará por lo tanto el modo de agrupamiento de valores de madurez.

**Cantidad de pedido no consumida**: si está configurado, en el momento de cumplir líneas de pedido/nota de entrega con cantidades parciales dentro de la misma factura, este indicador permitirá reportar las cantidades cumplidas divididas por línea de artículo sin sumar las cantidades.

**Agrícola Compras IVA**: si está activo, en la creación de la factura, el sistema verifica si existe un código de IVA agrícola para el artículo utilizado. Si no existe, se toma el código de IVA presente en el artículo.

**Plantilla de acumulación económica**: está relacionada con la gestión de las facturas por recibir y, por lo tanto, con la posibilidad de registrar automáticamente los ajustes para posibles líneas de costo que tengan un rango de fechas de competencia fuera del ejercicio contable.

**Gestión de Matrices de Datos Adicionales**: si está activo, permite visualizar en el caso de gestión de artículos con matriz, una pestaña adicional para la imputación de los valores de la cantidad por cada celda de la matriz. Si no está activo, esta pestaña y la correspondiente matriz no se visualizarán.

**Facturas por recibir** y **Reversión de facturas por recibir**: se visualizan solo por retrocompatibilidad con versiones anteriores y están obsoletas y no se utilizan más.

**Imprimir Informe**: permite indicar el modelo de impresión que se utilizará en la fase de impresión de la factura y, mediante el campo **Número de copias**, el número de copias del documento que se propondrá de forma predeterminada para la impresión. La impresión de las facturas de compra en realidad no es de uso extendido, ya que la factura es recibida por el proveedor y, por lo tanto, no necesita ser impresa nuevamente por Fluentis.

**Gestión de Reciclaje**: este indicador permite activar la gestión de Reciclaje para cada tipo de factura. Para más detalles sobre la gestión de los gastos relacionados con el [Reciclaje](/docs/sales/sales-flow/conai), se remite a la página correspondiente de la documentación.

**Control de calidad**: si está activo, este indicador hace visibles los tipos de facturas en el formulario [Importar artículos para controlar](/docs/quality/item-control/items-control/item-control-import/) ubicado en el área *Calidad*.

**Gestión de activos fijos**: este indicador permite habilitar la [Gestión de activos fijos](/docs/finance-area/fixed-assets/general-overview) para ese tipo de pedido y seleccionar el **Tipo de operación**, que en el caso de las compras será siempre un *Valor de compra*.