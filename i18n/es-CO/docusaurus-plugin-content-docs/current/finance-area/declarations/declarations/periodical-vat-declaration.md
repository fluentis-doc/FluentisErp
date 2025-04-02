---
title: Declaración de IVA periódica (Dichiarazione iva periodoca)
sidebar_position: 6
---

Desde este formulario es posible gestionar manualmente algunos valores que se mostrarán en la impresión de la liquidación de IVA periódica al momento de generar el reporte.

Típicamente, dos campos útiles y frecuentemente utilizados son:

- la indicación del crédito de IVA residual (porque no fue completamente compensado en el modelo F24 con otros tributos) que se debe insertar en la liquidación;

- la indicación del crédito de IVA que surge en la liquidación y que se desea excluir con el fin de compensarlo con otros tributos en el modelo F24.

Dado que al momento de la elaboración de la impresión de la liquidación periódica (en la que los valores son procesados por la aplicación para presentarlos en el reporte) los valores ingresados manualmente deben estar ya presentes, antes de generar la liquidación periódica se debe insertar una nueva fila (botón **nuovo**).

Al abrir el nuevo formulario, se propondrá el año en curso y el mes o trimestre siguiente al último registrado.

Se recuerda que, en caso de que la fila correspondiente al mes o trimestre de referencia no se cree manualmente (con el fin de gestionar los valores mencionados anteriormente) a través del botón Nuevo, se creará de todos modos en la fase de impresión definitiva de la liquidación periódica.

**CRÉDITO RESIDUAL A TRANSFERIR (CREDITO RESIDUO DA RIPORTARE)**:

Complete SIN INDICACIÓN DEL SIGNO el campo VP16

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image01.png)

De la misma manera, se pueden insertar otros importes que incrementen el crédito resultante en la liquidación, como el abono del anticipo de IVA de diciembre pagado (campo VP20).

**CRÉDITO IVA A COMPENSAR EN F24 (CREDITO IVA DA COMPENSARE IN F24)**:

Complete SIN INDICACIÓN DEL SIGNO el campo VP32

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image02.png)

En el momento de la elaboración de la impresión de la liquidación de IVA (tanto en provisional como en definitivo), los valores con signo negativo (VP16) incrementarán el crédito de IVA, mientras que aquellos con valor positivo (VP32) lo reducirán (o aumentarán el débito); estos valores se informan en el resumen después de los valores de débito y crédito derivados de las operaciones del mes o trimestre.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>