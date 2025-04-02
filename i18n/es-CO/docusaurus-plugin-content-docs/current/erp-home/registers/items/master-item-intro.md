---
title: Introducción (Introduzione)
sidebar_position: 0
---

:::important **Identificación de productos y sus partes (Identificazione dei prodotti e relative parti)**

Cada empresa manufacturera vende productos físicos comúnmente denominados productos terminados.  

Para realizarlos, se requieren materias primas y componentes disponibles en el mercado.  

Es evidente que cada empresa manufacturera tiene, como mínimo, la necesidad de identificar las mercancías entrantes y salientes para gestionar los procesos de compra, venta y contables relacionados.  

Cada producto se identifica de manera única a través de un código de artículo, normalmente de tipo alfanumérico, según las lógicas de codificación propias de cada empresa.  

Teóricamente, es siempre posible describir la estructura de los productos terminados simplemente a través de una lista de materiales en un nivel que incluya todas las materias primas y/o componentes de compra.  

Sin embargo, a menudo, lo expuesto es un método de representación demasiado simple y poco efectivo, y resulta necesario codificar también productos intermedios llamados semiterminados.  

¿Qué lógica se debe adoptar para determinar cuándo es necesario crear un código de artículo para un semiterminado?  

Dado un producto terminado, ¿cuántos semiterminados es necesario codificar para definir su estructura?  

Desde el punto de vista del diseño/ingeniería, es posible identificar muchas partes en un producto terminado, pero desde el punto de vista productivo, la necesidad de codificación puede ser muy diferente.  

En general, si un componente lógico de la estructura se reutiliza inmediatamente después de haber sido producido, no es recomendable crear un código de artículo (con algunas excepciones que se explican a continuación).  

Si, en cambio, el momento de la realización y el uso no son temporalmente coincidentes, entonces existe la necesidad de almacenar el elemento y, por lo tanto, debe codificarse para poder gestionar los procesos relacionados y las contabilizaciones de balance de fin de año.  

Por lo tanto, la necesidad de almacenar un elemento es una condición suficiente para solicitar su codificación mediante un código de artículo.  

Las motivaciones que llevan a la necesidad de almacenar un componente son típicamente las siguientes:
- La producción del componente implica un costo de ajuste de máquina no despreciable, por lo que se establecen lotes mínimos de producción para limitar los ajustes e incrementar la relación entre horas de producción efectiva y horas de trabajo disponibles. Por lo tanto, normalmente los lotes son de una entidad superior a las necesidades del momento, por lo que una parte de la producción se almacenará para ser consumida en el futuro.
- Algunos componentes deben producirse con anticipación respecto a las necesidades para poder entregar los productos terminados dentro de los plazos requeridos por el mercado, por lo que no se conocen las cantidades efectivamente necesarias en el momento de la producción; por esta razón, se crea un inventario en previsión del consumo futuro.
- Algunos procesos productivos tienen un rendimiento no constante, por lo que es necesario disponer de un inventario de los materiales a utilizar.
- Se desea crear un inventario de una recurso crítica (cuello de botella) para evitar el riesgo de que esta se detenga por falta de material para trabajar, ya que la tasa de producción de la fábrica está determinada precisamente por los cuellos de botella.
- Se quiere separar los procesos productivos de manera que se reduzca su interdependencia cuando estos no son sincronizables, como sucede en una producción de flujo continuo.

A veces, sin embargo, se elige codificar un elemento aunque no se mantenga un inventario del mismo.  

Esto sucede típicamente por las siguientes razones:
- El artículo sirve solo como agrupación lógica de un grupo de artículos que se utilizan juntos en otros productos o se venden en grupo.  
Esto permite agilizar y simplificar la creación de listas de materiales, gestionando un solo artículo en lugar de un grupo de artículos que, de otro modo, tendrían que ser ingresados y gestionados individualmente en las listas en las que se utilizan (en la literatura, a menudo denominadas kit bill).  
- Normalmente, el artículo se consume inmediatamente después de su uso, pero es necesario mantener un pequeño inventario como repuestos para asistencia técnica.  
- El ciclo de trabajo de un artículo ensamblado no se representa mediante una secuencia lineal de fases, ya que tiene una naturaleza reticulada (es decir, con múltiples ramificaciones).  
De hecho, la gran mayoría de los sistemas ERP permiten definir solo ciclos de trabajo secuenciales; por lo tanto, en caso de un ciclo reticulado, es necesario introducir códigos de artículo en correspondencia con cada ramificación del ciclo de trabajo.  
- Para identificar partes del producto desde el punto de vista lógico o porque se tiene la necesidad de calcular costos para partes del mismo.  
- Por razones de documentación técnica para intervenciones de reparación y mantenimiento.  

En los casos en que se crea un código de artículo pero nunca se tiene existencia del mismo, el artículo se identifica como artículo fantasma o ficticio; por lo tanto, para este no será posible emitir pedidos o realizar movimientos de almacén, y el sistema MRP considerará directamente sus componentes sin planificarlo, ya que no puede tener existencia ni pedidos.  
:::