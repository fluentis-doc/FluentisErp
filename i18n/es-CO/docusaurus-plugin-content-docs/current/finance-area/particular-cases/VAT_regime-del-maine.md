---
sidebar_position: 4
title: Régimen IVA del margen
ai_generated: true
---

### CONFIGURACIONES<!-- CONFIGURAZIONI -->

Es necesario codificar (al menos) dos **registros de IVA específicos<!-- registri iva -->** sobre los cuales registrar las compras relacionadas con el régimen del margen y las ventas bajo el mismo régimen, asociándolos en el campo **tipo de registro<!-- tipo di registro -->**:

- Compras régimen del margen
- Ventas régimen del margen

En segundo lugar, debemos crear las [**tasas de IVA<!-- aliquote iva -->**](/docs/configurations/tables/finance/vat-rates) que se utilizarán en estos registros de IVA<!-- registri iva --> específicos, identificándolas con la **marca** ***IVA del margen<!-- Iva del margine -->***:

![](/img/it-it/finance-area/other/VATMargine.png)

Las tasas a usar en las compras deben indicar la tasa de IVA del margen de referencia, de modo que se sepa a qué tasa asignar proporcionalmente el valor del propio margen<!-- margine -->.

Después, debemos codificar las causales contables que prevén la contabilización sobre estos registros<!-- registri --> específicos: la causal de ventas, en particular, estará vinculada a un tipo de factura de venta específico, que permitirá emitir el documento de venta y enviarlo al Sdi.
Puede ser útil, para evitar el uso erróneo de tasas no previstas para la gestión del margen<!-- margine -->, habilitar en estas causales la sección de restricción a las tasas de IVA habilitadas (*Control de Tasas de IVA<!-- Controllo Aliquote IVA -->*).

La causal de venta contabilizará la deuda por IVA del margen<!-- iva del margine -->, con tipo de movimiento *ventas régimen normal* y registro de ventas ordinario.

![](/img/it-it/finance-area/other/VATMargine2.png)

Dicho registro prevé contablemente la cuenta de deuda por IVA y la cuenta de reversión del ingreso de ventas por margen<!-- margine -->, que se establece en los parámetros de contabilidad general en esta sección:

![](/img/it-it/finance-area/other/VATMargine3.png)

indicaremos el ingreso por venta y la causal predeterminada. La fecha de última elaboración y el valor negativo del margen<!-- margine -->, en cambio, son dos valores que se actualizan automáticamente por Fluentis con la impresión definitiva de la elaboración del margen de periodo.

### PROCESAMIENTO<!-- ELABORAZIONE -->

Dentro del menú *Declaraciones<!-- Dichiarazioni -->* del módulo *Administración<!-- Amministrazione -->* seleccione **Procesamiento IVA del margen<!-- Elaborazione iva del margine -->**:

Al generar un nuevo cálculo tendremos:

![](/img/it-it/finance-area/other/VATMargine4.png)

El año de los parámetros de contabilidad, el registro a utilizar para registrar la eventual deuda sobre el margen positivo, la causal de contabilización, el cliente a asignar al registro de deuda y, a la derecha, el rango de fechas objeto de la elaboración.
Una vez configurados estos datos, tendremos la posibilidad de ejecutar el cálculo mediante el botón de la ribbon bar, el cual valorará los datos de las dos subpestañas:

En la primera tendremos los totales de las tasas movidas en los registros del margen de compra y venta, donde para la compra tendremos la exposición de los porcentajes relativos de reparto:

![](/img/it-it/finance-area/other/VATMargine5.png)

En la segunda pestaña, en cambio, se procesará el cálculo del margen aplicando los porcentajes a las tasas de IVA vinculadas a las tasas de compra:

![](/img/it-it/finance-area/other/VATMargine6.png)

Esta segunda pestaña solo se valorará si el margen del periodo, considerando posibles márgenes negativos previos, lleva a un saldo positivo del propio margen.
Luego tendremos algunos otros botones de gestión que se pueden utilizar: la impresión del procesamiento realizado, que si se realiza directamente requerirá establecer el flag 'definitivo', haciendo que el cálculo no sea más modificable:

![](/img/it-it/finance-area/other/VATMargine7.png)

Esta operación actualizará, en los parámetros de contabilidad, la fecha de última elaboración y el importe almacenado en el saldo negativo del margen<!-- margine -->.

Una vez establecido el flag 'definitivo' se habilitará la posibilidad de contabilizar la deuda de IVA:

![](/img/it-it/finance-area/other/VATMargine8.png)

![](/img/it-it/finance-area/other/VATMargine9.png)

:::tip Particularidad<!-- Particolarità -->
En la sección de IVA solo tendremos el importe del IVA a pagar, **sin base imponible**.
:::

La operación se completa con los botones para realizar el rollback de la contabilización y cancelar la impresión definitiva:

![](/img/it-it/finance-area/other/VATMargine10.png)