---
title: flusso movimenti fisici
sidebar_position: 4
---

:::tip Nota (Nota)
Esta tabla es de uso exclusivo para las empresas que han configurado el *Controlling* (Controlling).
:::

El flujo de movimientos físicos permite interactuar con los movimientos cargados en la primera nota de movimientos físicos, permitiendo replicarlos o convertirlos aplicando un multiplicador o un porcentaje.

#### Campos específicos

- el **codice** del flujo

- la **descrizione** del flujo

- el [**area**](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas) de referencia

- el [**centro aziendale**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) para el cual buscar los datos cuantitativos a gestionar

- la [**dimensione centri destinazione**](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) para definir la dimensión de los centros a valorar

- la **data inizio** y **data fine** de validez de la regla

- el **tipo distribuzione** a aplicar, que puede ser solo *percentuale*

- la [**UNIDAD DE MEDIDA DE ORIGEN (UNITA' DI MISURA DI ORIGINE)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) y la [**UNIDAD DE MEDIDA DE DESTINO (UNITA' DI MISURA DI DESTINAZIONE)**](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units), para eventuales conversiones entre UM

- el **moltiplicatore** a aplicar a las cantidades de origen

En la cuadrícula inferior, iremos a insertar la lista de los centros de destino a valorar, completando los siguientes campos:  
- el [**centro aziendale**](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) de destino, precisamente  

- el **percentuale** a aplicar  

- el **valore** a utilizar  

- el indicador **percentuale / valore**: si está marcado, significa que se ingresará directamente el porcentaje; de lo contrario, se podrá ingresar una cantidad de línea (el campo anterior) que **FluentisERP** utilizará para derivar un porcentaje relativo  

- un eventual **progetto** a valorar  

:::tip Ejemplos (Esempi)
Una primera necesidad podría ser la de atribuir cantidades físicas a un centro para el que no se registran los tiempos, con el fin de poder calcular una tarifa de costo derivándola del total de horas replicadas de otros centros: por ejemplo, un auxiliar de producción podría recibir los totales de horas de otros centros utilizados en producción, para derivar una cantidad que se aproveche para su cálculo de tarifa.

Otra necesidad podría ser la de replicar movimientos físicos de la dimensión direccional en las otras dimensiones, con el fin de utilizarlos para aplicar controladores específicos de estas.

Una tercera necesidad podría ser la de convertir las horas que se reciben de la producción en minutos, para calcular una tarifa en una segunda unidad de medida sin necesidad de calcularla manualmente por afuera.

Si de un único dato de origen debiéramos duplicar la cantidad en dos centros adicionales, se podría aplicar una regla que duplica con un multiplicador el valor inicial y luego atribuye la mitad a uno y la mitad al otro, por ejemplo.
:::

:::tip Nota (Nota)
En la máscara hay un botón para duplicar el flujo seleccionado.
:::