---
title: Gestión del impuesto de timbre
sidebar_position: 2
ai_generated: true
---

La gestión de la correcta inclusión, en el archivo xml de la factura electrónica, del sello fiscal virtual por parte de Fluentis se realiza de manera automática, por lo que bastará con codificar e ingresar correctamente dicho gasto<!-- spesa --> en la factura (como se resume a continuación).

- en la tabla relativa a los gastos, ingrese el gasto<!-- spesa --> de tipo "timbre"<!-- bollo --> con valor de 2 euros

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image01.png)

- en la ficha del cliente se debe agregar un gasto<!-- spesa --> de tipo "timbre"<!-- bollo --> seleccionando el código previamente creado en la tabla Tipos de gasto<!-- Tipi spesa -->

   nota: para no cobrar el timbre al cliente en el gasto<!-- spesa --> de timbre en la ficha, el valor debe establecerse en "0"

 ![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image02.png)

- en la tabla de empresa<!-- società --> complete el campo "Gastos de timbre<!-- Spese bollo -->"=2 y "Límite mínimo de gastos<!-- Roof minimo spese -->"=77.47

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image03.png)

Con estos parámetros configurados, en la factura de venta aparecerá automáticamente el gasto<!-- spesa --> propuesto; en consecuencia, en cada factura individual se podrá elegir si se cobra o no el timbre virtual (para no cobrarlo, ingrese el gasto<!-- spesa --> con importe = 0).

Al momento de la creación del archivo XML, si en los resúmenes de la factura figura un gasto<!-- spesa --> tipo timbre, en el archivo se añade automáticamente la sección correspondiente.