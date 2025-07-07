---
title: Tipos de tarifas
sidebar_position: 28
---

La definición de esta tabla permite codificar y establecer los diversos tipos de tasas a gestionar en la empresa activa.

 

### Cuadrícula superior 

**Código**: código identificativo de la tasa de interés.

**Descripción**: descripción de la tasa de interés.

**Desde la fecha del documento**: fecha del documento a partir de la cual se debe gestionar el cálculo de intereses (la referencia es al DECRETO LEGISLATIVO 9 de octubre de 2002, n. 231). El objetivo del campo es evitar que se calculen intereses sobre documentos con fecha anterior a la de promulgación de la ley.

**Desde la fecha de vencimiento**: fecha de vencimiento a partir de la cual se debe gestionar el cálculo de intereses (la referencia es al DECRETO LEGISLATIVO 9 de octubre de 2002, n. 231). El objetivo del campo es evitar que se calculen intereses sobre documentos con vencimiento anterior a la de promulgación de la ley.

**Interés mín.**: importe mínimo de los intereses por debajo del cual no se debe valorar ningún importe.

**Días de franquicia**: número de días de franquicia que serán descontados del conteo de días de retraso.

**Calcule también el descuento**: indicador de gestión también en descuento en caso de pago anticipado.  

:::tip nota
EJEMPLO: en caso de pago anticipado por parte del cliente y posterior retraso en el pago, si el importe de los intereses calculados por el retraso es superior al valor establecido en el campo Interés mín. , al valor de los intereses calculados se le descontará el valor (negativo) calculado en base a los días transcurridos entre la fecha de pago y la fecha de vencimiento. En cualquier caso, el resultado del cálculo nunca podrá ser un interés negativo.
:::

### Cuadrícula inferior   

**Código**: código identificativo de la tasa.

**Desde la fecha**: fecha a partir de la cual se debe gestionar la tasa indicada en la fila.

**Hasta la fecha**: fecha hasta la cual se gestionará la tasa indicada en la fila.

**Porcentaje**: porcentaje de tasa de interés aplicable.

Los campos relacionados con las fechas de validez referidos al porcentaje permiten definir la evolución de la política de la tasa de interés que, como es conocido, está sujeta a revisiones periódicas relativas a la tasa legal.

![](/img/it-it/configurations/tables/finance/rate-types/image01.png)