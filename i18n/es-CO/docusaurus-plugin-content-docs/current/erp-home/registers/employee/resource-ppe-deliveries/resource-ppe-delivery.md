---
title: consegne/resi d.p.i.
sidebar_position: 1
---

La gestión se encuentra en la ruta **Inicio > Empleados > consegne/resi d.p.i. > consegne/resi d.p.i.**

:::important ¿Para qué sirve? (A cosa serve)
Este procedimiento permite registrar las entregas y devoluciones de *D.P.I.* a los *Empleados*.

El formulario se compone de un área de filtro, de un área de propuesta de datos y de una de resultados.  
Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca consegne** o **ricerca resi** para visualizar los resultados dentro de la cuadrícula de resultados.   
:::


## Botones específicos (Pulsanti specifici)


### ![](/img/neutral/common/search.png) Buscar entregas (Ricerca consegne)  
La búsqueda de *D.P.I.* a entregar se basa en los *D.P.I.* activos previstos para la *mansione* y los *Empleados* que ocupan la misma *mansione*.  
En función del filtro establecido, se visualizan los resultados dentro de la cuadrícula de resultados. La *Fecha prevista*:  
- no se mostrará en caso de entregas de *D.P.I.* que nunca se hayan realizado para el *Empleado*;  
- se mostrará con un carácter *rojo* si la entrega prevista del *D.P.I.* está retrasada con respecto a la fecha actual;  
- se calcula en base a la fecha de la última entrega realizada sumada a los *mesi validità* indicados en la *mansione* ocupada por el *Empleado*.  
- si el *Empleado* ocupa más de una *mansione* y para más de una *mansione* se necesita el mismo *D.P.I.* con *mesi validità* diferentes, los *mesi validità* considerados para el cálculo de la *Fecha prevista* serán los menores.


### Proponer entregas (Proponi consegne)  
Botón habilitado solo si previamente se ha realizado la **ricerca consegne**.  
Propone la *Cantidad entregada* a 1 (uno) en todas las filas visualizadas en el *Área de resultados*.


### Eliminar entregas (Elimina consegne)  
Botón habilitado solo si previamente se ha realizado la **ricerca consegne**.  
Propone la *Cantidad entregada* a 0 (cero) en todas las filas visualizadas en el *Área de resultados*.


### Buscar devoluciones (Ricerca resi)  
La búsqueda de *D.P.I.* a devolver se basa en los *D.P.I.* entregados a los *Empleados*.  
En función del filtro establecido, se visualizan los resultados dentro de la cuadrícula de resultados.  
La *Fecha prevista* se mostrará con un carácter *rojo* si la devolución prevista del *D.P.I.* está retrasada con respecto a la fecha actual.  
No se realizan controles para asegurar que la *quantità resa* sea coherente con las *Cantidades entregadas (Quantità consegnate)* previamente.


### Proponer devoluciones (Proponi resi)  
Botón habilitado solo si previamente se ha realizado la **ricerca resi**.  
Propone la *Cantidad devuelta* a 1 (uno) en todas las filas visualizadas en el *Área de resultados*.


### Eliminar devoluciones (Elimina resi)  
Botón habilitado solo si previamente se ha realizado la **ricerca resi**.  
Propone la *Cantidad devuelta* a 0 (cero) en todas las filas visualizadas en el *Área de resultados*.


### ![](/img/neutral/common/save.png) Guardar (Salva)  
Todas las filas presentes en el *Área de resultados* con *quantità consegnata* o *quantità resa* mayor que *cero* serán insertadas en el *Histórico de entregas/devoluciones D.P.I.* a la fecha *consegnato/reso in data* presentes en el área *Datos propuestos para las entregas/devoluciones*.


## Áreas de gestión (Aree di gestione)


### Filtro (Filtro)  
El filtro de datos está compuesto por la siguiente información:  
> **consegne/resi per il dipendente**: es el *Empleado* para el cual se desea buscar *D.P.I.* para entregar/recibir.  
> **consegne/resi per il d.p.i.**: es el *D.P.I.* que se desea entregar/recibir.


### Datos propuestos para las entregas/devoluciones (Dati proposti per le consegne/resi)  
La información contenida en este expander es obligatoria para el registro de las *entregas/devoluciones*.  
El expander está compuesto por la siguiente información:  
> **consegnato da/reso a**: es la *persona* que entrega los *D.P.I.* a los *Empleados* / recibe los *D.P.I.* de los *Empleados*.  
> **consegnato/reso in data**: es la fecha de entrega/devolución de los *D.P.I.* a los *Empleados*.


### Resultado (Risultato)  
La lista se compone de la siguiente información:  
> **data prevista**: es la fecha prevista de entrega/devolución del *D.P.I.* al *Empleado*.  
>
> **dipendente**  
>> **codice**: es el código del *Empleado* destinatario.  
>> **cognome**: es el apellido del *Empleado* destinatario.  
>> **nome**: es el nombre del *Empleado* destinatario.  
>
> **D.P.I.**  
>> **codice**: es el código del *D.P.I.* a entregar/devolver.  
>> **descrizione**: es la descripción del *D.P.I.* a entregar/devolver.  
>
> **quantità**  
>> **consegnata**: es la *Cantidad entregada* del *D.P.I.* al *Empleado*.  
>> **resa**: es la *Cantidad devuelta* del *D.P.I.* por el *Empleado*.  
>
> **firmato**: indica si el *Empleado* ha firmado la *Ficha de entrega/devolución (Scheda consegna/reso)*, por aceptación.  
> **uso**: anotaciones libres sobre el tema; se propone de la lista de *D.P.I.* previstos para la *mansione* ocupada por el *Empleado*.  
> **prescrizioni**: anotaciones libres sobre el tema; se propone de la lista de *D.P.I.* previstos para la *mansione* ocupada por el *Empleado*.  
> **note**: anotaciones libres.   


Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).