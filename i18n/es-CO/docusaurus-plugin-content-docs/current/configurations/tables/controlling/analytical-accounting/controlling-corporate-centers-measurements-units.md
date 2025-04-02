---
title: unità di misura dei centri aziendali per il controlling
sidebar_position: 8
---

El formulario se encuentra en la ruta: **Tablas > Controlling > Contabilidad analítica > unità di misura dei centri aziendali per il controlling**

En esta tabla podemos especificar, por ejemplo, que en el área de ANÁLISIS *consuntivo*, la maquinaria *X*, lee los datos de producción, para costos directos y costos de pedido, en base a la unidad de medida especificada, para cada centro empresarial, en relación a:

- EL TIEMPO DE RE-ADORNO (RI-ATTREZZAGGIO)
- EL TIEMPO HOMBRE (TEMPO UOMO)
- EL TIEMPO MÁQUINA (TEMPO MACCHINA)

Las tres medidas no son obligatorias, pero, dependiendo del centro, se valorizará una, dos o tres dimensiones.

También hay una indicación de validez de la regla.

Para un área de análisis diferente, por ejemplo *PRESUPUESTO (BUDGET)*, es posible trabajar con otras reglas y otras fechas de validez.

#### Campos de la tabla

**ÁREA / DESCRIPCIÓN (AREA / DESCRIZIONE)**: Necesarios para definir a qué área de análisis se referirán las diversas lógicas que se están codificando.  

**CENTRO EMPRESARIAL / DESCRIPCIÓN (CENTRO AZIENDALE / DESCRIZIONE)**: Necesarios para definir a qué centro empresarial se referirán las diversas lógicas que se están codificando.  

**TIEMPO DE RE-ADORNO (TEMPO DI RI-ATTREZZAGGIO)**: Combo box que permite seleccionar la unidad de medida a utilizar. El campo está vinculado a la Tabla general de Unidades de medida.  

**tempo uomo**: Combo box que permite seleccionar la unidad de medida a utilizar. El campo está vinculado a la Tabla general de Unidades de medida.  

**tempo macchina**: Combo box que permite seleccionar la unidad de medida a utilizar. El campo está vinculado a la Tabla general de Unidades de medida.  

**DE FECHA / A FECHA (DA DATA / A DATA)**: rango de fechas de validez de la regla que se está estableciendo.  

**FLAG Usa Readorno / Tiempo Hombre / Tiempo máquina en cálculo de productividad (FLAG Usa Riattrezzaggio / Tempo Uomo / Tempo macchina in calcolo produttività)**: Actúan como "interruptores" para habilitar o deshabilitar la lógica establecida en la fila correspondiente para fines del cálculo de productividad del centro.