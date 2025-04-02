---
title: versamenti iva
sidebar_position: 10
---

En este formulario se almacenan los resultados de las liquidaciones de IVA periódicas calculadas de forma definitiva.

Para cada liquidación elaborada de manera definitiva, se añadirá una fila correspondiente desde el programa.

Desde esta posición, es posible proceder al desbloqueo de la liquidación en definitiva simplemente eliminando la fila correspondiente con el comando **cancella liquidazioni iva**.

Se recuerda que, después de haber eliminado la fila relativa a la liquidación periódica deseada, es necesario proceder **también** al desbloqueo de la **impresión** en definitiva del registro de IVA, en el cual se ha impreso, desde la tabla [**registri iva**](/docs/configurations/tables/finance/vat-books).

:::tip[Info]
Si se utiliza un registro de IVA separado de los otros y específico para las liquidaciones, el desbloqueo de la impresión definitiva de dicho registro se vuelve innecesario. Por lo tanto, se recomienda adoptar esta solución que facilita la gestión de la liquidación en definitiva mes a mes, desvinculándola de la necesidad de imprimir también los registros, en particular el que se debe acumular la liquidación, con la necesidad de reimpresión cada vez que se deba desbloquear la liquidación.
:::

El campo Importe (Importo), resultado final del cálculo de la deuda / crédito de IVA, es editable y, por lo tanto, es posible, si se desea, proceder a redondear manualmente el valor para ajustar, por ejemplo, el redondeo que es necesario realizar en la declaración anual de IVA.

![](/img/it-it/finance-area/declarations/declarations/vat-payment/image02.png)

**liquidazione iva di gruppo**: indica que se ha realizado la liquidación a través del modo y la funcionalidad del grupo de IVA.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>