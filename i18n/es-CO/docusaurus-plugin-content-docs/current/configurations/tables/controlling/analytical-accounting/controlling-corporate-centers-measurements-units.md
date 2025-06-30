---
title: Unidades de medida de centros corporativos para el control
sidebar_position: 8
---

El formulario se encuentra en la ruta: **Tablas > Controlling > Contabilidad analítica > Unidades de medida de centros corporativos para el control**

En esta tabla podemos especificar, por ejemplo, que en el área de ANÁLISIS *Final*, la maquinaria *X*, lee los datos de producción, para costos directos y costos de pedido, en base a la unidad de medida especificada, para cada centro empresarial, en relación a:

- EL TIEMPO DE RECONFIGURACIÓN 
- EL TIEMPO DE HOMBRE 
- EL TIEMPO DE MÁQUINA 

Las tres medidas no son obligatorias, pero, dependiendo del centro, se valorizará una, dos o tres dimensiones.

También hay una indicación de validez de la regla.

Para un área de análisis diferente, por ejemplo *PRESUPUESTO*, es posible trabajar con otras reglas y otras fechas de validez.

#### Campos de la tabla

**ÁREA / DESCRIPCIÓN**: Necesarios para definir a qué área de análisis se referirán las diversas lógicas que se están codificando.  

**CENTRO CORPORATIVO / DESCRIPCIÓN**: Necesarios para definir a qué centro corportativo se referirán las diversas lógicas que se están codificando.  

**TIEMPO DE RECONFIGURACIÓN**: Combo box que permite seleccionar la unidad de medida a utilizar. El campo está vinculado a la Tabla general de Unidades de medida.  

**TIEMPO DE HOMBRE**: Combo box que permite seleccionar la unidad de medida a utilizar. El campo está vinculado a la Tabla general de Unidades de medida.  

**TIEMPO DE MÁQUINA**: Combo box que permite seleccionar la unidad de medida a utilizar. El campo está vinculado a la Tabla general de Unidades de medida.  

**DE FECHA / A FECHA**: rango de fechas de validez de la regla que se está estableciendo.  

**FLAG Usa Reconfiguración / Tiempo de Hombre / Tiempo de máquina en el cálculo de productividad**: Actúan como "interruptores" para habilitar o deshabilitar la lógica establecida en la fila correspondiente para fines del cálculo de productividad del centro.