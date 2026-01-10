---
title: Pagos IVA
sidebar_position: 10
---

En este formulario se almacenan los resultados de las liquidaciones periódicas de IVA calculadas en definitivo.

Por cada liquidación procesada en definitivo, el programa agregará una línea correspondiente.

Desde esta posición es posible desbloquear la liquidación definitiva simplemente eliminando la fila correspondiente con el comando **Eliminar liquidaciones IVA**.

Se recuerda que, después de eliminar la fila relativa a la liquidación periódica deseada, es necesario proceder **también** al desbloqueo de la **impresión** definitiva del registro de IVA, en el que la misma ha sido impresa, desde la tabla [**Registros IVA**](/docs/configurations/tables/finance/vat-books).

:::tip[Info]
Si se utiliza un registro de IVA separado de los demás y específico para las liquidaciones, el desbloqueo de la impresión definitiva de dicho registro se vuelve innecesario. Por lo tanto, se recomienda adoptar esta solución que hace más cómodo gestionar la liquidación definitiva mes a mes, desvinculándola de la necesidad de imprimir también los registros, en particular aquel en el que se acumula la liquidación, evitando la necesidad de reimpresión cada vez que sea necesario desbloquear la liquidación.
:::

El campo Importe, resultado final del cálculo de la deuda / crédito de IVA, es editable y por tanto es posible, si se desea, redondear manualmente el valor para reflejar, por ejemplo, el redondeo requerido en la declaración anual de IVA.

![](/img/it-it/finance-area/declarations/declarations/vat-payment/image02.png)

**Liquidación de IVA de grupo:** indica que la liquidación se ha realizado a través de la modalidad y funcionalidad de grupo de IVA.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>
