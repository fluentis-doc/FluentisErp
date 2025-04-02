---
title: tipi tasso
sidebar_position: 28
---

La definición de esta tabla permite codificar y establecer los diversos tipos de tasas a gestionar en la empresa activa.

 

### Grilla superior (Griglia superiore)

**codice**: código identificativo de la tasa de interés.

**descrizione**: descripción de la tasa de interés.

**da data documento**: fecha del documento a partir de la cual se debe gestionar el cálculo de intereses (la referencia es al DECRETO LEGISLATIVO 9 de octubre de 2002, n. 231). El objetivo del campo es evitar que se calculen intereses sobre documentos con fecha anterior a la de promulgación de la ley.

**da data scadenza**: fecha de vencimiento a partir de la cual se debe gestionar el cálculo de intereses (la referencia es al DECRETO LEGISLATIVO 9 de octubre de 2002, n. 231). El objetivo del campo es evitar que se calculen intereses sobre documentos con vencimiento anterior a la de promulgación de la ley.

**Interés mín. (Interesse min.)**: importe mínimo de los intereses por debajo del cual no se debe valorar ningún importe.

**giorni franchigia**: número de días de franquicia que serán descontados del conteo de días de retraso.

**calcolo anche sconto**: indicador de gestión también en descuento en caso de pago anticipado.  

:::tip nota
EJEMPLO: en caso de pago anticipado por parte del cliente y posterior retraso en el pago, si el importe de los intereses calculados por el retraso es superior al valor establecido en el campo Interés mín. , al valor de los intereses calculados se le descontará el valor (negativo) calculado en base a los días transcurridos entre la fecha de pago y la fecha de vencimiento. En cualquier caso, el resultado del cálculo nunca podrá ser un interés negativo.
:::

### Grilla inferior (Griglia inferiore)  

**codice**: código identificativo de la tasa.

**da data**: fecha a partir de la cual se debe gestionar la tasa indicada en la fila.

**a data**: fecha hasta la cual se gestionará la tasa indicada en la fila.

**percentuale**: porcentaje de tasa de interés aplicable.

Los campos relacionados con las fechas de validez referidos al porcentaje permiten definir la evolución de la política de la tasa de interés que, como es conocido, está sujeta a revisiones periódicas relativas a la tasa legal.

![](/img/it-it/configurations/tables/finance/rate-types/image01.png)