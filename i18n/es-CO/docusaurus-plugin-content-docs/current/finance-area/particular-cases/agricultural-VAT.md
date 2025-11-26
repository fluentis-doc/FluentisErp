---
sidebar_position: 1
title: Régimen Especial del IVA Agrícola
ai_generated: true
---

El IVA Agrícola<!-- iva Agricola --> prevé la no deducibilidad del IVA<!-- iva --> para las compras realizadas bajo este régimen y la aplicación de un porcentaje de compensación para las ventas dentro del mismo régimen: en lugar de deducir el IVA<!-- iva --> de las compras como ocurre en el régimen normal, el IVA<!-- iva --> en las compras siempre es no deducible<!-- indetraibile --> mientras que el IVA<!-- iva --> aplicado a las ventas solo se debe pagar parcialmente mediante un cálculo fijo, sin que haya relación alguna con las compras del período, aplicando porcentajes de compensación variables dependiendo del tipo de bien vendido.

### Gestión preliminar de las tablas<!-- Gestione preliminare delle tabelle -->

Para gestionar el porcentaje de compensación definiremos primero los necesarios tipos impositivos de IVA<!-- aliquote iva --> en ventas, en los cuales utilizaremos el campo ‘porcentaje de no deducibilidad<!-- percentuale di indetraibilità -->’ para realizar el cálculo:

![](/img/it-it/finance-area/other/agr1.png)

En esencia, si el IVA<!-- iva --> X tiene un porcentaje de compensación Y, se indicará Y en la columna ‘% IVA agr. deducible<!-- % IVA agr. detr. -->’ (como dato informativo mostrado en la impresión de la liquidación de IVA<!-- iva -->) mientras que se indicará el resultado de Y*100/X como porcentaje en la columna ‘Porc. no deducibilidad<!-- Perc. indetraibilità -->’.

Definiremos una cuenta<!-- conto --> específica en la que contabilizar la parte de IVA<!-- iva --> compensada mediante la aplicación del porcentaje de no deducibilidad<!-- percentuale di indetraibilità -->, por ejemplo

![](/img/it-it/finance-area/other/agr2.png)

Definiremos causales<!-- causali --> específicas para dividir los dos IVA<!-- Iva --> en los asientos de ventas en régimen agrícola<!-- regime agricolo -->, donde en particular tendremos:
-	un tipo de movimiento<!-- tipo movimento --> ‘venta régimen agrícola<!-- vendita regime agricolo -->’
-	la cuenta<!-- conto --> de IVA<!-- iva --> específica para el registro de la parte compensativa de IVA<!-- iva -->
No es necesario definir un registro de IVA<!-- registro iva --> específico para el registro de estas operaciones.

![](/img/it-it/finance-area/other/agr3.png)

También las compras realizadas bajo régimen agrícola<!-- regime agricolo --> deberán gestionarse con una causal<!-- causale --> contable específica, cuya particularidad es estar vinculada precisamente al régimen de IVA agrícola<!-- regime iva agricolo -->.

![](/img/it-it/finance-area/other/agr4.png)

Dado que el IVA<!-- iva --> de las compras registrado con esta causal<!-- causale --> debe tener siempre un porcentaje de no deducibilidad<!-- percentuale di indetraibilità --> del 100% (o porcentaje de IVA<!-- iva --> 0, si se trata de operaciones no sujetas/exentas/excluidas), se recomienda completar la ficha ‘Control de tipos impositivos de IVA<!-- Controllo aliquote IVA -->’ para evitar valores incorrectos

![](/img/it-it/finance-area/other/agr5.png)

En caso de realizar también compras intracomunitarias sujetas al régimen agrícola<!-- regime agricolo -->, en vez de las causales<!-- causali --> habituales del tipo movimiento<!-- tipo movimento --> ‘compra intracomunitaria’ y su correspondiente traspaso de IVA<!-- giroconto iva -->, existen dos tipos de movimiento<!-- tipi movimento --> específicos: IVA<!-- iva --> compras intracomunitarias agrícolas con su respectivo traspaso de IVA<!-- giroconto iva agricolo -->.
La compra volverá a tener un IVA<!-- iva --> no deducible al 100%, mientras que en ventas se aplicará el IVA<!-- iva --> a ingresar: este cambio de tipo impositivo podrá gestionarse mediante la configuración del tipo de IVA<!-- aliquota iva --> automática en la cuadrícula de IVA<!-- griglia iva -->, como en los casos de reverse charge mixto.

### Resultados para la liquidación periódica del IVA<!-- Risultati per la liquidazione IVA periodica -->

La liquidación del IVA<!-- liquidazione iva --> mostrará un resumen de los movimientos en régimen agrícola<!-- regime agricolo --> de la siguiente manera:

![](/img/it-it/finance-area/other/agr6.png)

![](/img/it-it/finance-area/other/agr7.png)

:::danger Atención<!-- Attenzione -->
El cierre de la cuenta<!-- conto --> ‘IVA ventas agrícola<!-- IVA vendite agricola -->’, utilizada para registrar la parte compensativa del IVA<!-- iva --> ventas, deberá ser gestionado **manualmente** por el usuario con un registro contable específico.
:::