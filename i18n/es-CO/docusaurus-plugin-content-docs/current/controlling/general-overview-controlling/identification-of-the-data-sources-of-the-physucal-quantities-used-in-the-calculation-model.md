---
title: Identificación de las fuentes de datos de las magnitudes físicas utilizadas en el modelo de cálculo
sidebar_position: 2.4
ai_generated: true
---

:::tip Nota<!-- Nota -->
esta sección está estrechamente relacionada con la aplicación de los drivers extendidos de controlling<!-- driver estesi del controlling -->
:::

Una vez que se ha identificado la necesidad de gestionar drivers de reasignación sobre cantidades físicas<!-- driver di ribaltamento su quantità fisiche -->, surge la necesidad, como quinto paso, de identificar las fuentes de donde obtener los valores de estas magnitudes físicas<!-- grandezze fisiche -->: si hablamos de horas máquina<!-- ore macchina -->, horas hombre<!-- ore uomo -->, toneladas u otras unidades, también debemos identificar de dónde vamos a extraerlas, así como las [*Unidades de medida*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units)<!-- *Unità di misura* --> que se desean utilizar. Generalmente el entorno es el de producción y, si hablamos de horas máquina<!-- ore macchina --> y horas hombre<!-- ore uomo -->, la fuente son los avances de producción mediante los cuales podemos detectar mensualmente las horas hombre<!-- ore uomo --> y horas máquina<!-- ore macchina --> utilizadas en nuestros centros. Pero también podría tratarse de un dato disponible en un sistema externo, del cual obtener un archivo excel para importar fácilmente en ***FluentisERP*** mediante el procedimiento específico; o bien, podría obtenerse a través del registro de horas del personal de oficinas mediante la carga de horas en la Declaración de horas de proyectos; o bien una carga manual genérica a principios de año, a replicar o distribuir proporcionalmente según la *distribución de periodos*<!-- distribuzione periodi --> asociada al movimiento físico<!-- movimento fisico -->.

:::tip Nota<!-- Nota -->
El procesamiento de los [*Cost driver*](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers)<!-- *Cost driver* --> basados en cantidades, como todos los cost driver, prevé por defecto el bloqueo del procesamiento cuando la cantidad necesaria para la distribución del dato de origen no está presente en alguno de los periodos que se están procesando. Esta configuración es útil para no olvidar la valorización del dato de origen, especialmente cuando está vinculado a una inserción manual y no a la recuperación de datos desde producción<!-- produzione -->.
Sin embargo, es posible desactivar el bloqueo para aplicar un promedio de los valores existentes (ver la *gestión de errores*<!-- gestione errori --> en los cost driver) en casos donde efectivamente pueda faltar una cantidad en un periodo (por ejemplo, en periodos de cierre de la empresa como agosto).
:::