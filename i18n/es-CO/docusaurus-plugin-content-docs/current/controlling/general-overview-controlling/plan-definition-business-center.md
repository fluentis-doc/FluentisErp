---
title: Definición del plan de los centros empresariales
sidebar_position: 2.1
ai_generated: true
---

El plan de los [***Centros empresariales***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) es el primer punto a abordar y también el fundamental para una correcta configuración de la contabilidad analítica/gerencial<!-- contabilità analitica/gestionale -->: para poder codificar los centros, primero deberemos definir las ***Dimensiones*** de análisis y luego las ***Categorías de los centros empresariales***.

:::tip Nota<!-- Nota -->
En empresas sin la opción de *Controlling* activa, se permite la creación de Centros de costo<!-- Centri di costo --> sin una dimensión de referencia y sin una categoría de centro
:::

La [***Dimensión***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) es básicamente un criterio coherente de división de COSTOS y INGRESOS dentro de la empresa. La contabilidad analítica suele tener *siempre* una dimensión INDUSTRIAL/DIRECCIONAL, que es típica de todas las empresas, donde se divide la empresa en varias entidades funcionales: en esta dimensión, esencialmente, tendremos CENTRO EMPRESARIAL ADMINISTRATIVO, CENTRO DE DIRECCIÓN, CENTRO DE OFICINA TÉCNICA, CENTRO DEL COMERCIAL y luego los distintos CENTROS PRODUCTIVOS, es decir, los centros que identifican las máquinas individuales o agrupaciones de máquinas, así como los grupos de mano de obra.
Un caso típico de dimensión alternativa son los PROYECTOS o las empresas que trabajan por PROYECTO o por orden; los proyectos son una dimensión paralela a la dimensión direccional, y esta dimensión de los proyectos acoge todos los costes e ingresos DIRECTOS del proyecto, mientras que recibe desde la dimensión industrial/direccional aquellos que son los centros auxiliares y genéricos como los mencionados anteriormente (dirección, administración, etc.): de hecho, a través de los cost driver, es posible trasladar los datos de una dimensión a otra.
También podemos definir dimensiones alternativas cuando la empresa quiere asignar valores separándolos de la lógica normal, porque quiere tener en cuenta ciertos tipos de costes: por ejemplo, una dimensión para ferias, inversiones, o presupuestos de compras.

:::tip Nota<!-- Nota -->
Estas dimensiones alternativas, que no impactan en la lógica del modelo industrial/direccional o de proyecto, suelen ser elementos independientes que pueden surgir incluso después de la configuración inicial.
:::

La segunda característica obligatoria de los centros de costo<!-- centri di costo --> es la ***Categoría de los centros empresariales***: a nivel de *dimensión industrial/direccional*, los tipos que se pueden clasificar para la configuración de los centros son básicamente cinco

***1) CENTROS PRODUCTIVOS O DIRECTOS:*** son centros que intervienen directamente en la elaboración del producto y/o servicio, por lo tanto, son los verdaderos centros de transformación. Es fundamental una correcta identificación de estos centros ya que si se comete un error en la agregación de los costos de estos centros productivos, existe el riesgo de obtener tarifas paramétricas de los índices de costo de los respectivos centros a través de las cuales se “costearán” nuestros productos o pedidos y se determinará la respectiva rentabilidad, lo que puede distorsionar el análisis de la rentabilidad. No se puede, por ejemplo, agrupar máquinas o instalaciones de costos muy diferentes ya que se crearían promedios ponderados. Del mismo modo, no se pueden poner en el mismo centro máquinas e instalaciones operadas por personas junto con máquinas e instalaciones sólo parcialmente atendidas por mano de obra, ya que esto también produciría promedios que llevarían a obtener márgenes alterados;

***2) CENTROS INDIRECTOS AUXILIARES:*** son aquellos necesarios para el funcionamiento de los centros principales, por lo tanto, recogen todos aquellos costos que no se pueden imputar objetivamente a los centros productivos pero que son indispensables para su funcionamiento. Se asociarán a ***Cost driver*** de traslado hacia los centros productivos/directos, identificando un criterio adecuado de gestión;

***3) CENTROS INDIRECTOS COMUNES:*** son los centros estructurales, también llamados centros funcionales (por ejemplo, comercial, técnico, calidad, etc.);

***4) CENTROS DE BENEFICIO, DE INGRESO O DE RESULTADO ECONÓMICO:*** son los centros a través de los cuales se pueden relacionar INGRESOS y COSTOS relativos a un tipo de ingreso, que podría ser una familia de productos o un canal de distribución;

***5) CENTROS VIRTUALES/DE APOYO:*** sirven para gestionar todo el modelo, son centros de apoyo para los drivers de traslado, o centros donde descargar datos contables que no se utilizan en el modelo.

:::tip Nota<!-- Nota -->
La categorización de los centros, además de tener valor teórico sobre la estructura del modelo de análisis, también tiene una consecuencia operativa: cuando se definen las vinculaciones de los centros a nivel de plan de cuentas<!-- piano dei conti -->, es posible asociar a cada subcuenta<!-- sottoconto --> los distintos centros que pueden ser valorados, o más rápidamente, se puede indicar una categoría de centros, para que el usuario vea en el menú desplegable de selección sólo los que pertenecen a esa misma categoría.
:::

Posteriormente, deberemos identificar para cuáles de estos centros es necesario o interesante calcular una tarifa de costo, mediante la vinculación de cada uno a un [*Modelo de reclasificación*](/docs/controlling/reclassifications/create-reclassification-model) de acumulación de costos y una lógica de cálculo a cantidad sobre dos posibles [*Unidades de medida*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) o en porcentaje.