---
title: Redondeos de tiempo
sidebar_position: 24
---

La tabla está ubicada en **Configuración > tablas > Gestión de proyectos > Redondeos de tiempo**.

En esta tabla se configuran los redondeos que se aplicarán en el plan de facturación a las horas de servicio declaradas en las intervenciones.

**Minutos** indica el intervalo a partir del cual comienza el redondeo, utilizado para encontrar el redondeo que se aplicará según las horas de servicio de la intervención realizada.  
**Redondeo** número de minutos a los que redondear.  
**Tolerancia** minutos de tolerancia antes de activar el redondeo o el posible intervalo siguiente.

La tabla opera en “intervalos”.

Si, por ejemplo, se desea redondear todas las intervenciones de 2 horas a 2 horas, es suficiente con configurar:

>> minutos 0 > redondeo en minutos 120 > tolerancia 0

>> esto indica que de 0 al infinito, las horas se redondearán siempre de 2 en 2. La tolerancia indica el intervalo de tiempo después del cual se activa el siguiente intervalo.

>> Ej.  
- intervención A: 1 h y 30 minutos > facturado 2 horas  
- intervención B: 2 h y 10 minutos > facturado 4 horas  
- intervención C: 8 h y 30 minutos > facturado 10 horas  

Al añadir la tolerancia de, por ejemplo, 15 minutos, la intervención B se facturará a 2 horas.  
Añadiendo otro intervalo, se puede, por ejemplo, ajustar el redondeo para las horas posteriores a las 8:

>> minutos 0 > redondeo en minutos 120 > tolerancia 0  

>> minutos 480 > redondeo en minutos 30 > tolerancia 0  

Por lo que en el ejemplo anterior, la intervención C se facturará 8 h y 30 minutos. Si la intervención C hubiera sido de 8 h y 15 minutos, aún así se habrían facturado 8 h y 30 minutos, dado que se prevé el redondeo a la media hora.

Si se desea facturar, por ejemplo, 4 o 8 horas, se puede configurar:

>> Minutos 0 > redondeo 240 minutos > tolerancia 0  

>> Minutos 240 > redondeo 240 minutos > tolerancia 0  

>> Minutos 480 > redondeo 1 minuto > tolerancia 0, de modo que después de las 8 horas no se realicen redondeos.