---
sidebar_position: 1
title: Régimen Especial del IVA Agrícola (Regime Speciale dell'IVA Agricola)
---

El IVA Agrícola prevé la no deducibilidad del IVA para las compras sujetas a este régimen y la aplicación de un porcentaje de compensación para las ventas del mismo régimen: en lugar de deducir el IVA de las compras como en el régimen normal, el IVA en las compras es siempre no deducible, mientras que el IVA aplicado a las ventas se debe pagar solo en parte con un cálculo fijo, sin relación alguna con las compras del período, aplicando porcentajes de compensación variables según el tipo de bienes vendidos.

### Gestión preliminar de las tablas (Gestione preliminare delle tabelle)

Para gestionar el porcentaje de compensación, primero definiremos las necesarias tasas de IVA en venta, en las cuales aprovecharemos la ‘porcentaje de no deducibilidad’ para realizar el cálculo:

![](/img/it-it/finance-area/other/agr1.png)

En esencia, si el IVA X tiene un porcentaje de compensación Y, se debe indicar Y en la columna ‘% IVA agr. detr.’ (como dato informativo que se muestra en la liquidación del IVA), mientras que se valorizará con el resultado de Y*100/X el porcentaje que se indicará en la columna ‘Perc. indetraibilità’.

Definiremos una cuenta específica en la que valorizar la parte de IVA compensada a través de la aplicación del porcentaje de no deducibilidad; por ejemplo:

![](/img/it-it/finance-area/other/agr2.png)

Definiremos causas específicas para dividir los dos IVAs en los registros de ventas en régimen agrícola, donde tendremos en particular:
- un tipo de movimiento ‘venta régimen agrícola’
- la cuenta de IVA específica para registrar la parte compensatoria del IVA
No es necesario definir un registro de IVA ad hoc para el registro de estas operaciones.

![](/img/it-it/finance-area/other/agr3.png)

Incluso las compras realizadas en régimen agrícola deberán ser gestionadas con una causa contable ad hoc, que tiene la particularidad de estar vinculada al régimen de IVA agrícola.

![](/img/it-it/finance-area/other/agr4.png)

Dado que el IVA de las compras registradas con esta causa siempre deberá tener un porcentaje de no deducibilidad del 100% (o un porcentaje de IVA del 0, si se trata de operaciones no imponibles/exentas/excluidas), se recomienda valorizar la pestaña ‘Control de tasas de IVA’ para evitar valoraciones erróneas.

![](/img/it-it/finance-area/other/agr5.png)

En caso de que también se realicen compras intracomunitarias sujetas a régimen agrícola, en lugar de las habituales causas con tipo de movimiento de compra intracomunitaria y su correspondiente contrapartida de IVA, se han previsto dos tipos de movimiento ad hoc: IVA de compras intracomunitarias agrícolas con la correspondiente contrapartida de IVA agrícola.  
La compra tendrá nuevamente IVA no deducible al 100%, mientras que en la venta se aplicará el IVA que se debe pagar: este cambio de tasa será gestionable a través de la configuración de la tasa de IVA automática en la cuadrícula de IVA, como en los casos de reverse charge mixto.

### Resultados para la liquidación periódica del IVA (Risultati per la liquidazione IVA periodica)

La liquidación del IVA mostrará el resumen de los movimientos en régimen agrícola de la siguiente manera:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger Atención (Attenzione)
El cierre de la cuenta ‘IVA ventas agrícolas’, utilizada para registrar la parte compensatoria del IVA de ventas, deberá ser gestionado **manualmente** por el usuario con una entrada contable específica.
:::