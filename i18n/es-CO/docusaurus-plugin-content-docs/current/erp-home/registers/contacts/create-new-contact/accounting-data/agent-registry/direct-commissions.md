---
title: Comisiones directas
sidebar_position: 4
---

![](/img/it-it/erp-home/registers/contacts/create-new-contact/accounting-data/agent-registry/direct-commissions/image01.png)

La ventana es fundamental para definir cuáles son los **criterios para determinar los porcentajes de comisión**.

## Campos generales
Los primeros dos campos permiten definir un **porcentaje general** y un **importe fijo**: el porcentaje general solo se utilizará si en la sección a la derecha, donde se definen en orden de prioridad los criterios de valoración, está presente la tipología ‘1 – Contacto del agente'.

## Cuadrícula con los criterios de cálculo (Griglia con i criteri di calcolo)

En la cuadrícula se pueden definir uno o más criterios simultáneamente (ver más adelante la gestión del campo *Prioridad*) y cada criterio puede asociarse a una *Categoría de comisión* (ver más abajo) que actúa como filtro para el criterio en función de información (propiedades del objeto) libremente configurables.

**Tipo de comisión**: La lista de opciones posibles (seleccionables en el cuadro combinado) es la siguiente:

**Contacto del agente**: según el porcentaje ingresado en el registro del agente mismo;  

**Contacto con el cliente**: según el porcentaje que el agente tiene en el registro del cliente;  

**Zona de clientes**: según la zona asociada al cliente;  

**Lista de precios para clientes**: según las listas aplicables a los clientes (por lo tanto, listas generales y/o listas personalizadas);  

**Clase**: según la clase del artículo vendido;  

**Artículo**: para cada artículo individual se define el porcentaje del agente en uso;  

**Lista de precios - clase de artículo**: según la combinación de la clase de artículo en las diversas listas;  

**Lista de precios - clase de artículo - artículo**: según la combinación de un solo artículo en las diversas listas;  

**Tipo de artículo**: según el tipo de artículo;  

**Contacto con el cliente - clase de artículo**: según la combinación de la clase de artículo para cada registro de cliente;  

**Contacto del cliente - clase de artículo - artículo**: según la combinación de la clase de artículo para cada cliente;  

**Intervalos de descuento**: según el tipo de tramo de descuento (Configuración > Tablas > Ventas > Rango de descuento), es decir, vinculando la comisión a los descuentos que el agente aplica al cliente. A su vez, los tramos de descuento pueden depender de las clases de artículo, listas, tipo de artículo, característica del artículo, categoría mercantil o ser una estructura de tramos fijos.

***Categoría de Comisión Cliente***: según la categoría de comisión asociada al cliente;  

**Línea de productos**: según la línea de producto asociada al artículo;  

***Clase Cliente y Línea de Producto**: según la combinación de la categoría de comisión y la línea de producto;  

***Derechos de Autor***: este tipo es específico para sujetos que no son verdaderos agentes sino Diseñadores o profesionales para quienes se calculan Regalías. El porcentaje de regalías puede estar vinculado al artículo individual o a la línea de producto;  

:::important[Importante]
La **lógica para determinar la comisión a aplicar**, por lo tanto, **depende de las prioridades asociadas a los tipos** que se desean utilizar: si, por ejemplo, se presentan con prioridades 1, 2, 3 los tipos ‘6 – artículo', ‘4 – lista de precios de cliente' y ‘1 – registro de agente', el sistema evaluará, al ingresar el artículo, si este está en la lista de artículos para los cuales el agente tiene un porcentaje de comisión establecido (si está entre estos, se toma este % de comisión), si no está entre estos, pasará a evaluar si la línea tiene un precio que proviene de una lista particular (p. ej., lista promocional) sobre la cual el agente tiene una comisión definida (si está entre estos, se toma este % de comisión), si no está entre estos, utilizará el porcentaje fijo del registro del agente.
:::

:::tip[Detalle]
Para algunas de estas opciones, es necesario presionar el botón **Detalle de porcentaje seleccionado** con el fin de abrir la ventana de definición de combinaciones válidas para el agente. En estas ventanas, que dependen del tipo de configuración inicial (p. ej., si se trata de artículos habrá un campo para definir el artículo, si se trata de listas habrá un campo para la lista, etc.), es **importante** ir a **definir** el **rango de fechas de validez** de esta configuración: para el mismo artículo, por ejemplo, podría haber varios porcentajes de comisión con rangos de fechas de validez diferentes.
:::

:::note[Nota]
Es importante hacer una explicación particular sobre el detalle de comisión de **Intervalos de descuento**: de hecho, es relevante definir cuál sea el [**Rango de descuentos**](/docs/configurations/tables/sales/discount-range) que se aplicará al agente y si las comisiones serán las estándar ingresadas en este o un porcentaje personalizado para el agente sobre los tramos de descuento definidos para ese rango; en segundo lugar, es fundamental establecer si el cálculo del descuento efectivo aplicado se define respecto al precio del registro del artículo, o según la relación precio bruto-neto de la línea de artículo individual (en este caso, no será posible automatizar las comisiones de agentes cuando se crean documentos directamente sobre precios netos).

Una anotación general adicional en relación a las listas: se asocian listas específicas, no un tipo de lista. En esencia, si en el módulo de listas de venta se crea una nueva lista del mismo tipo anterior pero con una nueva fecha de inicio de validez, esta debe asociarse nuevamente al registro del agente con sus porcentajes de comisión.
:::

**Categoría de comisión**: a los varios criterios de lectura de la comisión también se puede asociar una posible *Categoría de comisión*. Las categorías se definen en la tabla específica. El significado es vincular el criterio seleccionado también a una característica del documento (por ejemplo, el criterio es Registro de agente con lectura del valor de comisión general, pero basado en el tipo de pedido - configurando en la tabla de [**Categorías de Comisión**](/docs/configurations/tables/sales/commission-categories) el criterio de lectura según el objeto FSSalesOrder.TypeCode, por ejemplo, Código = OCIT. Es decir, la lectura de la comisión ocurre solo cuando el pedido del cliente es del tipo OCIT = Pedido Italia).

Si la condición (o las múltiples condiciones alternativas) no se cumplen, se pasa al criterio en la cuadrícula con la siguiente prioridad (siempre que haya sido definido).

En la ventana, por último, hay otro botón que permite ingresar las configuraciones de otro agente, seleccionado desde la ayuda de agentes que se abre, en el que está en uso.

*Botones específicos*:
> **Guardar Agente**: para guardar los cambios realizados en el agente.  
> **Eliminar Comisión**: para eliminar el detalle de las comisiones seleccionadas.  
> **Comisiones de agentes de copias**: permite insertar, en el agente actual, las configuraciones extraídas de otro agente que se selecciona con la ayuda que se abre.