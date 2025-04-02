---
title: Definición del plan de centros empresariales (Definizione piano dei centri aziendali)
sidebar_position: 2.1
---

El plan de [***Centros empresariales***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) es el primer punto a enfrentar y también el fundamental para una correcta configuración de la contabilidad analítica/gestional: para poder codificar los centros, primero debemos definir las ***Dimensiones*** de análisis y luego las ***Categorías de los centros empresariales***.

:::tip Nota
En empresas sin la opción *Controlling* activa, se permite la creación de Centros de costo sin una dimensión de referencia y sin una categoría de centro.
:::

La [***Dimensión***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) es esencialmente un criterio coherente de división de COSTOS y RICAVOS dentro de la empresa. La contabilidad analítica típicamente *siempre* tendrá una dimensión INDUSTRIAL/DIRECCIONAL, que es común a todas las empresas, donde se divide la empresa en las diversas entidades funcionales: en esta dimensión, esencialmente, tendremos el CENTRO EMPRESARIAL ADMINISTRATIVO, EL CENTRO DE DIRECCIÓN, EL CENTRO DE OFICINA TÉCNICA, EL CENTRO COMERCIAL y luego los varios CENTROS PRODUCTIVOS, es decir, los centros que identifican las máquinas individuales o agrupaciones de máquinas, así como los grupos de mano de obra. Un caso típico de dimensión alternativa son los PROYECTOS, es decir, las empresas que trabajan por PROYECTO o encargo; los proyectos son una dimensión paralela a la dimensión direccional, y esta dimensión de los proyectos incorporará todos los costos y ingresos DIRECTOS del proyecto, mientras que recibirá de la dimensión industrial/direccional aquellos que son los centros auxiliares y generales mencionados antes (dirección, administración, etc.): de hecho, podemos, a través de los *cost drivers*, trasladar los datos de una dimensión a otra. 
También podemos definir dimensiones alternativas donde la empresa desea asignar valores separándolos de las lógicas normales, porque quiere llevar un registro de ciertos tipos de costos: por ejemplo, una dimensión ferias en lugar de inversiones, o presupuesto de compra.

:::tip Nota
Estas dimensiones alternativas, que no impactan en las lógicas del modelo industrial/direccional o de proyecto, son normalmente elementos independientes que pueden surgir incluso después de la configuración inicial.
:::

La segunda característica obligatoria de los centros de costo es la ***Categoría de los centros empresariales***: a nivel de *dimensión industrial/direccional*, los tipos que podemos clasificar para la configuración de los centros son esencialmente cinco.

***1) CENTROS PRODUCTIVOS O DIRECTOS:*** son centros que intervienen directamente en la elaboración del producto y/o servicio, por lo que son los centros de transformación reales. Es fundamental una correcta identificación de estos centros, ya que si cometemos un error en la agregación de costos de estos centros productivos, corremos el riesgo de obtener tarifas paramétricas de los índices de costo de los centros correspondientes a través de los cuales luego vamos a "costificar" nuestros productos o nuestros encargos y determinar su respectiva marginalidad, lo que puede desviar el análisis de rentabilidad. Por ejemplo, no podemos agregar máquinas o instalaciones de costos muy diferentes, ya que crearíamos medias ponderadas. Del mismo modo, no podemos poner en el mismo centro máquinas e instalaciones gestionadas por personas junto a máquinas e instalaciones parcialmente gestionadas por mano de obra, ya que esto también generaría promedios que luego nos llevarían a obtener marginalidades alteradas; 

***2) CENTROS INDIRECTOS AUXILIARES:*** son aquellos necesarios para el funcionamiento de los centros principales, por lo que recogen todos esos costos que no se pueden imputar de manera objetiva a los centros productivos, pero que son imprescindibles para su funcionamiento. Tendrán el enlace a ***Cost drivers*** de traspaso a los centros productivos/directos, identificando un criterio adecuado de gestión;

***3) CENTROS INDIRECTOS COMUNES:*** son los centros de estructura, también llamados centros funcionales (por ejemplo, comercial, técnico, calidad, etc.);

***4) CENTROS DE BENEFICIO O DE INGRESO, O DE RESULTADO ECONÓMICO:*** son los centros a través de los cuales podemos relacionar INGRESOS y COSTOS relativos a una tipología de ingreso, que podría ser una familia de productos o un canal de venta;

***5) CENTROS VIRTUALES/COMODIDAD:*** nos sirven para gestionar todo el modelo, son centros de apoyo a los *drivers* de traspaso, así como centros donde descargar datos contables que no se utilizarán en el modelo.

:::tip Nota
La categorización de los centros, además de tener validez teórica sobre la estructura del modelo de análisis, también tiene una repercusión operativa: al definir los enlaces de los centros a nivel de plan de cuentas, es posible asociar a cada subcuenta los varios centros que pueden ser valorados, o más rápidamente indicar una categoría de centros, de manera que solo sean visibles para el usuario en el menú desplegable de selección aquellos que pertenecen a la misma categoría.
:::

Luego deberemos identificar para cuáles de estos centros necesitamos o nos interesa calcular una tarifa de costo, a través de la vinculación a cada uno de un [*Modelo de reclasificación*](/docs/controlling/reclassifications/create-reclassification-model) de acumulación de costos y una lógica de cálculo por cantidad sobre dos posibles [*Unidades de medida*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) o en porcentaje.