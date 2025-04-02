---
title: Gestión del impuesto de timbre (Gestione imposta di bollo)
sidebar_position: 2
---

La gestión de la correcta inclusión, en el archivo xml de la factura electrónica, del impuesto de timbre virtual por parte de Fluentis se realiza de forma automática, por lo tanto, será suficiente codificar e ingresar correctamente dicho gasto en la factura (como se resume a continuación).

- En la tabla de gastos, ingrese el gasto de tipo "timbre (bollo)" con un valor de 2 euros.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image01.png)

- En el registro del cliente, se debe agregar un gasto de tipo “timbre (bollo)” seleccionando el código previamente creado en la tabla Tipos de gasto.

   n.b. Para no cargar el timbre al cliente, en el gasto de timbre en el registro, el valor debe establecerse en "0".

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image02.png)

- En la tabla de la empresa, complete el campo "Gastos de timbre (Spese bollo)"=2 y "Techo mínimo de gastos (Roof minimo spese)"=77.47.

![](/img/it-it/finance-area/e-invoice/stamp-tax-management/image03.png)

Configuradas las siguientes configuraciones, en la factura de venta aparecerá automáticamente el gasto propuesto, por lo que en cada factura se podrá elegir si cargar o no el timbre virtual (para no cargar el timbre, ingrese el gasto con un importe = 0).

Al momento de la creación del archivo XML, si en los resúmenes de la factura figura un gasto de tipo timbre, la sección correspondiente se añade automáticamente en el archivo.