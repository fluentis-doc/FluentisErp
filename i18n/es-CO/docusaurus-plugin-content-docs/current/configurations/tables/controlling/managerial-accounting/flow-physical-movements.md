---
title: Flujo de movimientos físicos
sidebar_position: 4
---

:::tip Nota 
Esta tabla es de uso exclusivo para las empresas que han configurado el *Control*.
:::

El flujo de movimientos físicos permite interactuar con los movimientos cargados en la primera nota de movimientos físicos, permitiendo replicarlos o convertirlos aplicando un multiplicador o un porcentaje.

#### Campos específicos

- el **código** del flujo

- la **descripción** del flujo

- el [**área**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia

- el [**centro corporativo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) para el cual buscar los datos cuantitativos a gestionar

- los [**centros de destino de tamaño**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) para definir la dimensión de los centros a valorar

- la **Fecha de inicio** y **Fecha de finalización** de validez de la regla

- el **Tipo de distribución** a aplicar, que puede ser solo *Porcentaje*

- la [**UNIDAD DE MEDIDA DE ORIGEN**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) y la [**UNIDAD DE MEDIDA DE DESTINO**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), para eventuales conversiones entre UM

- el **Multiplicador** a aplicar a las cantidades de origen

En la cuadrícula inferior, iremos a insertar la lista de los centros de destino a valorar, completando los siguientes campos:  
- el [**centro corporativo**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) de destino, precisamente  

- la **porcentaje** a aplicar  

- el **valor** a utilizar  

- el indicador **porcentaje / valor**: si está marcado, significa que se ingresará directamente el porcentaje; de lo contrario, se podrá ingresar una cantidad de línea (el campo anterior) que **FluentisERP** utilizará para derivar un porcentaje relativo  

- un eventual **proyecto** a valorar  

:::tip Ejemplos 
Una primera necesidad podría ser la de atribuir cantidades físicas a un centro para el que no se registran los tiempos, con el fin de poder calcular una tarifa de costo derivándola del total de horas replicadas de otros centros: por ejemplo, un auxiliar de producción podría recibir los totales de horas de otros centros utilizados en producción, para derivar una cantidad que se aproveche para su cálculo de tarifa.

Otra necesidad podría ser la de replicar movimientos físicos de la dimensión direccional en las otras dimensiones, con el fin de utilizarlos para aplicar controladores específicos de estas.

Una tercera necesidad podría ser la de convertir las horas que se reciben de la producción en minutos, para calcular una tarifa en una segunda unidad de medida sin necesidad de calcularla manualmente por afuera.

Si de un único dato de origen debiéramos duplicar la cantidad en dos centros adicionales, se podría aplicar una regla que duplica con un multiplicador el valor inicial y luego atribuye la mitad a uno y la mitad al otro, por ejemplo.
:::

:::tip Nota 
En la máscara hay un botón para duplicar el flujo seleccionado.
:::