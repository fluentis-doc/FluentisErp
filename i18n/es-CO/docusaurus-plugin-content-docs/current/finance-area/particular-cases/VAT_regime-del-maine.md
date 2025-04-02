---
sidebar_position: 4
title: Régimen IVA del Margen (Regime iva del margine)
---

### CONFIGURACIONES (CONFIGURAZIONI)

Es necesario codificar (al menos) dos **registros específicos de IVA (specifici registri iva)** sobre los cuales registrar las compras relacionadas con el régimen del margen y las ventas del mismo régimen, asociándolos, en el campo **tipo de registro (tipo di registro)**:

- Compras régimen del margen (Acquisti regime del margine)
- Ventas régimen del margen (Vendite regime del margine)

En segundo lugar, debemos crear las [**tasas de IVA (aliquote iva)**](/docs/configurations/tables/finance/vat-rates) que serán utilizadas en estos registros de IVA específicos, identificándolas con el **indicador (flag)** **iva del margine***:

![](/img/it-it/finance-area/other/VATMargine.png)

Las tasas a utilizar en la compra tendrán la indicación de la tasa de IVA del margen de referencia, de modo que se sepa a qué tasa asignar proporcionalmente el valor del margen mismo.

Luego debemos codificar las causales contables que prevén la detección en estos registros específicos: la causal de las ventas, en particular, estará vinculada a un tipo de factura de venta específico, que permitirá emitir el documento en venta y enviarlo al Sdi. 
Puede ser útil, con el fin de evitar usos erróneos de tasas no previstas para la gestión del margen, habilitar en estas causales la sección de restricción a las tasas de IVA habilitadas (*Controllo Aliquote IVA*).

La causal de venta registrará la deuda por IVA del margen, con tipo de movimiento *ventas régimen normal (vendite regime normale)* y registro de ventas ordinario.

![](/img/it-it/finance-area/other/VATMargine2.png)

Dicha registración prevé contablemente la cuenta de la deuda de IVA y la cuenta de reversión del ingreso de venta por margen, que se establece en los parámetros de contabilidad general en esta sección:

![](/img/it-it/finance-area/other/VATMargine3.png)

Indicaremos el ingreso de venta y la causal por defecto. La fecha de última elaboración y el valor negativo del margen, en cambio, son dos valores actualizados automáticamente por Fluentis con la impresión definitiva de la elaboración del margen de período.

### ELABORACIÓN (ELABORAZIONE)

Dentro del menú *dichiarazioni* del módulo *amministrazione*, seleccionar **elaborazione iva del margine**:

Generando un nuevo cálculo tendremos:

![](/img/it-it/finance-area/other/VATMargine4.png)

El año de los parámetros de contabilidad, el registro a utilizar para registrar la posible deuda sobre el margen positivo, la causa de detección, el cliente a asignar a la registración de la deuda y a la derecha el rango de fechas objeto de elaboración. 
Una vez configurados estos datos, tendremos la posibilidad de ejecutar el cálculo a través del botón de la barra de herramientas, que actualizará los datos de los dos subpestañas:

En la primera tendremos los totales de las tasas registradas en los registros del margen de compra y venta, donde para la compra tendremos la exposición de las porcentajes relativas de distribución:

![](/img/it-it/finance-area/other/VATMargine5.png)

En la segunda pestaña, en cambio, tendremos la elaboración del cálculo del margen aplicando las porcentajes a las tasas de IVA vinculadas a las tasas de compra:

![](/img/it-it/finance-area/other/VATMargine6.png)

Esta segunda pestaña se valorizará solo si el margen del período, considerando posibles márgenes negativos anteriores, arrojará un saldo positivo del margen mismo. 
Tendremos luego algunos otros botones de gestión para usar: la impresión de la elaboración realizada, que si se realiza directamente requerirá establecer si se configura el indicador 'definitiva' haciendo que el cálculo no sea más modificable:

![](/img/it-it/finance-area/other/VATMargine7.png)

Esta operación actualizará, en los parámetros de contabilidad, la fecha de última elaboración y el monto almacenado en el saldo negativo del margen.

Una vez configurado el indicador 'definitivo', se habilitará la posibilidad de contabilizar la deuda de IVA:

![](/img/it-it/finance-area/other/VATMargine8.png)

![](/img/it-it/finance-area/other/VATMargine9.png)

:::tip Particularidad (Particolarità)
En la sección IVA tendremos solo el monto del IVA a cargo, **sin un imponible**.
:::

La procedimiento se completa con los botones para realizar el rollback de la contabilización y la cancelación de la impresión definitiva:

![](/img/it-it/finance-area/other/VATMargine10.png)