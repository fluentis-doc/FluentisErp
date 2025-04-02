---
title: Identificación de las fuentes de datos de las magnitudes físicas utilizadas en el modelo de cálculo (Individuazione delle fonti dati delle grandezze fisiche utilizzate nel modello di calcolo)
sidebar_position: 2.4
---

:::tip Nota
esta sección está estrechamente relacionada con la aplicación de los drivers extendidos de controlling
:::

Una vez que hemos identificado la necesidad de gestionar drivers de asignación sobre cantidades físicas, surgirá la necesidad de identificar, como quinto paso, las fuentes de las que podemos extraer los valores de estas magnitudes físicas: si hablamos de horas máquina, horas hombre, ton Mladas u otras unidades, también debemos determinar de dónde vamos a extraerlas, así como las [*Unidades de medida*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) que se desean utilizar. Generalmente, el entorno es el de producción y, si hablamos de horas máquina y horas hombre, la fuente son los avances de producción a través de los cuales podemos mensualmente registrar las horas hombre y las horas máquina utilizadas en nuestros centros. Pero también podría ser un dato disponible en un sistema externo, del cual obtener un archivo excel para importarlo fácilmente en ***FluentisERP*** mediante el procedimiento adecuado; o podría obtenerse a través del registro de las horas del personal de oficina mediante la carga de horas en la Declaración de horas de proyecto; o una carga manual genérica a principios de año, a replicar o distribuir de manera proporcional según la *distribución de períodos* asociada al movimiento físico.

:::tip Nota
El procesamiento de los [*Cost drivers*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) basados en las cantidades, como todos los cost drivers, prevé por defecto el bloqueo del procesamiento cuando la cantidad necesaria para la división del dato de origen no está presente en uno de los períodos que se está procesando. Esta configuración es útil para no olvidar la valorización del dato de origen, especialmente cuando está vinculada a una entrada manual y no a la recuperación de datos de producción. Sin embargo, es posible deshabilitar el bloqueo para aplicar un promedio de los valores existentes (ver *gestión de errores* en los cost drivers) en casos donde efectivamente pueda faltar una cantidad en un período (por ejemplo, en períodos de cierre de la empresa como agosto).
:::