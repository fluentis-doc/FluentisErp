---
title: Declaración periódica de IVA
sidebar_position: 6
ai_generated: true
---

Desde este formulario es posible gestionar manualmente algunos valores que se incluirán en la impresión de la liquidación periódica de IVA<!-- liquidazione iva periodica --> al momento de la generación del informe.

Típicamente, dos campos útiles y frecuentemente utilizados son:

- la indicación del crédito de IVA<!-- credito iva --> residual (porque no se ha compensado completamente en el modelo F24 con otros tributos) que se debe incluir en la liquidación<!-- liquidazione -->;

- la indicación del crédito de IVA<!-- credito iva --> que surge en la liquidación<!-- liquidazione --> y que se desea excluir para compensarlo con otros tributos en el modelo F24.

Ya que en el momento de la elaboración de la impresión de la liquidación periódica<!-- liquidazione periodica --> (en la cual los valores son procesados por la aplicación para exponerlos en el informe) los valores ingresados manualmente deben estar ya presentes, antes de generar la liquidación periódica<!-- liquidazione periodica --> es necesario ingresar una nueva fila (botón **Nuevo<!-- Nuovo -->**).

Al abrir el nuevo formulario, se propondrá el año en curso y el mes o trimestre siguiente al último registrado.

Se recuerda que, en caso de que la fila correspondiente al mes o trimestre de referencia no sea creada manualmente (para gestionar los valores antes mencionados) mediante el botón Nuevo<!-- Nuovo -->, será igualmente creada en la fase de impresión definitiva de la liquidación periódica<!-- liquidazione periodica -->.

**CRÉDITO RESIDUAL A REPORTAR<!-- CREDITO RESIDUO DA RIPORTARE -->**:

Completar SIN INDICAR EL SIGNO el campo VP16

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image01.png)

De la misma manera, se pueden ingresar otros importes que aumentarán el crédito resultante en la liquidación<!-- liquidazione -->, como por ejemplo la deducción del anticipo de IVA<!-- acconto iva --> de diciembre pagado (campo VP20).

**CRÉDITO DE IVA A COMPENSAR EN F24<!-- CREDITO IVA DA COMPENSARE IN F24 -->**:

Completar SIN INDICAR EL SIGNO el campo VP32

![](/img/it-it/finance-area/declarations/declarations/periodical-vat-declaration/image02.png)

Al momento de la elaboración de la impresión de la liquidación de IVA<!-- liquidazione iva --> (tanto provisional como definitiva), los valores con signo negativo (VP16) aumentarán el crédito de IVA<!-- credito iva -->, mientras que aquellos con valor positivo (VP32) lo reducirán (o aumentarán la deuda); tales valores son reportados en el resumen después de los valores de deuda y crédito derivados de las operaciones del mes o trimestre.

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>