---
title: Entrega/Devolución de E.P.P.
sidebar_position: 1
---

La gestión se encuentra en la ruta **Inicio > Empleados > Entrega/Devolución de E.P.P. > Entrega/Devolución de E.P.P.**

:::important ¿Para qué sirve?
Este procedimiento permite registrar las entregas y devoluciones de *E.P.P.* a los *Empleados*.

El formulario se compone de un área de filtro, de un área de propuesta de datos y de una de resultados.  
Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca consegne** o **ricerca resi** para visualizar los resultados dentro de la cuadrícula de resultados.   
:::


## Botones específicos


### ![](/img/neutral/common/search.png) Buscar entregas 
La búsqueda de *E.P.P.* a entregar se basa en los *E.P.P.* activos previstos para la *Tarea* y los *Empleados* que ocupan la misma *Tarea*.  
En función del filtro establecido, se visualizan los resultados dentro de la cuadrícula de resultados. La *Fecha prevista*:  
- no se mostrará en caso de entregas de *E.P.P.* que nunca se hayan realizado para el *Empleado*;  
- se mostrará con un carácter *rojo* si la entrega prevista del *E.P.P.* está retrasada con respecto a la fecha actual;  
- se calcula en base a la fecha de la última entrega realizada sumada a los *mesi validità* indicados en la *Tarea* ocupada por el *Empleado*.  
- si el *Empleado* ocupa más de una *Tarea* y para más de una *Tarea* se necesita el mismo *E.P.P.* con *mesi validità* diferentes, los *mesi validità* considerados para el cálculo de la *Fecha prevista* serán los menores.


### Proponer entregas  
Botón habilitado solo si previamente se ha realizado la **buscar entregas**.  
Propone la *Cantidad entregada* a 1 (uno) en todas las filas visualizadas en el *Área de resultados*.


### Eliminar entregas 
Botón habilitado solo si previamente se ha realizado la **buscar entregas**.  
Propone la *Cantidad entregada* a 0 (cero) en todas las filas visualizadas en el *Área de resultados*.


### Buscar devoluciones 
La búsqueda de *E.P.P.* a devolver se basa en los *E.P.P.* entregados a los *Empleados*.  
En función del filtro establecido, se visualizan los resultados dentro de la cuadrícula de resultados.  
La *Fecha prevista* se mostrará con un carácter *rojo* si la devolución prevista del *E.P.P.* está retrasada con respecto a la fecha actual.  
No se realizan controles para asegurar que la *quantità resa* sea coherente con las *Cantidades entregadas (Quantità consegnate)* previamente.


### Proponer devoluciones 
Botón habilitado solo si previamente se ha realizado la **buscar devoluciones**.  
Propone la *Cantidad devuelta* a 1 (uno) en todas las filas visualizadas en el *Área de resultados*.


### Eliminar devoluciones 
Botón habilitado solo si previamente se ha realizado la **buscar devoluciones**.  
Propone la *Cantidad devuelta* a 0 (cero) en todas las filas visualizadas en el *Área de resultados*.


### ![](/img/neutral/common/save.png) Guardar 
Todas las filas presentes en el *Área de resultados* con *cantidad entregada* o *cantidad devuelta* mayor que *cero* serán insertadas en el *Histórico de entregas/devoluciones E.P.P.* a la fecha *entregado/devuelto en fecha* presentes en el área *Datos propuestos para las entregas/devoluciones*.


## Áreas de gestión 


### Filtro 
El filtro de datos está compuesto por la siguiente información:  
> **entregas/devoluciones para el empleado**: es el *Empleado* para el cual se desea buscar *E.P.P.* para entregar/recibir.  
> **entregas/devoluciones para E.P.P.**: es el *E.P.P.* que se desea entregar/recibir.


### Datos propuestos para las entregas/devoluciones  
La información contenida en este expander es obligatoria para el registro de las *entregas/devoluciones*.  
El expander está compuesto por la siguiente información:  
> **entregado por/devuelto a**: es la *persona* que entrega los *E.P.P.* a los *Empleados* / recibe los *E.P.P.* de los *Empleados*.  
> **entregado/devuelto en fecha**: es la fecha de entrega/devolución de los *E.P.P.* a los *Empleados*.


### Resultado 
La lista se compone de la siguiente información:  
> **Fecha estimada.**: es la fecha prevista de entrega/devolución del *E.P.P.* al *Empleado*.  
>
> **Empleado**  
>> **Código**: es el código del *Empleado* destinatario.  
>> **Apellido**: es el apellido del *Empleado* destinatario.  
>> **Nombre**: es el nombre del *Empleado* destinatario.  
>
> **E.P.P.**  
>> **Código**: es el código del *E.P.P.* a entregar/devolver.  
>> **Escripción**: es la descripción del *E.P.P.* a entregar/devolver.  
>
> **Cantidad**  
>> **Entregado**: es la *Cantidad entregada* del *E.P.P.* al *Empleado*.  
>> **Devuelto**: es la *Cantidad devuelta* del *E.P.P.* por el *Empleado*.  
>
> **Firmado**: indica si el *Empleado* ha firmado la *Ficha de entrega/devolución*, por aceptación.  
> **Usar**: anotaciones libres sobre el tema; se propone de la lista de *D.P.I.* previstos para la *Tarea* ocupada por el *Empleado*.  
> **Prescripciones**: anotaciones libres sobre el tema; se propone de la lista de *D.P.I.* previstos para la *Tarea* ocupada por el *Empleado*.  
> **Notas**: anotaciones libres.   


Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).