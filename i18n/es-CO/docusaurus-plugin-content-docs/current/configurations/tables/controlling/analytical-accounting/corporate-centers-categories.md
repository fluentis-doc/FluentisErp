---
title: Categoría de centros corporativos
sidebar_position: 3
---

El formulario se encuentra en la ruta: **Tablas > Control > Contabilidad analítica > Categoría de centros corporativos**

:::tip Nota
La tabla es de interés solo en las empresas con el indicador *control* activo.
:::

La segunda característica *obligatoria* de los centros de costos es la ***Categoría de los centros corporativos***: esta tabla representa una "etiqueta" asociada a los centros corporativos para poder gestionarlos en grupos lógicos homogéneos entre sí.

![Imagen](/img/it-it/configurations/tables/controlling/analytical-accounting/corporate-centers-categories.png)

La elección de las categorías y el "estilo" con el que puede ser poblada la presente tabla **puede depender de muchos factores** y de varias **teorías** sobre el control de gestión.  
Por lo tanto, podemos citar <u>sólo algunos ejemplos</u> para una mejor comprensión.

***1) CENTROS PRODUCTIVOS O DIRECTOS:*** son centros que intervienen directamente en la elaboración del producto y/o servicio, por lo que son los verdaderos centros de transformación. La correcta identificación de estos centros es fundamental, ya que si cometemos un error en la agregación de los costos de estos centros productivos corremos el riesgo de obtener tarifas paramétricas de los índices de costo de los centros correspondientes, a través de las cuales luego vamos a "costear" nuestros productos o nuestros pedidos y a determinar su respectiva marginalidad, lo que puede desviar el análisis de la rentabilidad. No podemos, por ejemplo, agregar máquinas o instalaciones con costos muy diferentes, ya que crearemos promedios ponderados. De igual manera, no podemos incluir en el mismo centro máquinas e instalaciones supervisadas por humanos junto a máquinas e instalaciones parcialmente supervisadas por mano de obra, ya que esto también generaría promedios que luego nos llevarían a obtener marginalidades alteradas;

***2) CENTROS INDIRECTOS AUXILIARES:*** son aquellos necesarios para el funcionamiento de los centros principales, por lo que recogen todos aquellos costos que no son imputables de manera objetiva a los centros productivos, pero son indispensables para su funcionamiento. Tendrán conexión a ***Cost driver*** de redistribución sobre los centros productivos/directos, identificando un criterio adecuado de gestión;

***3) CENTROS INDIRECTOS COMUNES:*** son los centros estructurales, también llamados centros funcionales (por ejemplo, comercial, técnico, calidad, etc.);

***4) CENTROS DE BENEFICIO O DE INGRESO, O DE RESULTADO ECONÓMICO:*** son los centros a través de los cuales podemos relacionar INGRESOS y COSTOS relativos a un tipo de ingreso, que podría ser una familia de productos, o un canal de venta;

***5) CENTROS VIRTUALES/CÓMODOS:*** nos sirven para gestionar todo el modelo, son centros de apoyo a los drivers de redistribución más que centros donde descargar datos contables que no se utilizarán en el modelo.

:::tip Nota
La categorización de los centros, además de tener validez teórica sobre la estructura del modelo de análisis, tiene también un aspecto operativo: al definir los enlaces de los centros a nivel de plan de cuentas, es posible asociar a cada cuenta detallada los varios centros que pueden ser valorados o, más rápidamente, se puede indicar una categoría de centros, de modo que solo sean visibles para el usuario en el menú desplegable de selección aquellos que pertenecen a esa categoría.
:::