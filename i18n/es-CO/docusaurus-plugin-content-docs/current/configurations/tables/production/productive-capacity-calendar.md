---
title: Calendario de capacidad productiva (Calendario capacità produttiva)
sidebar_position: 3
---

La ventana se presenta como una tabla dentro de la cual se visualizan tantas casillas como días tiene el mes seleccionado en la parte superior derecha.  
En el primer campo se encuentran el **mese** y el **anno** de referencia, que se pueden seleccionar mediante el combo y el campo editable a un lado o haciendo clic en los botones **Año anterior/Siguiente (Anno precedente/Successivo)** y **Mes anterior/siguiente (Mese precedente/successivo)**.

A continuación, hay una serie de combos, dentro de los cuales se seleccionará el **centro di lavoro** para el cual se desea crear el calendario, la **macchina** y el **gruppo manodopera**.

En cada casilla hay un indicador, que, si está activado, indica que el día en cuestión es *Festivo (Festivo)*.  
El hecho de que un determinado día esté designado como *Festivo (Festivo)* permite al usuario asegurarse de que al realizar la generación del *Calendario de capacidades productivas (Calendario delle capacità produttive)*, la aplicación genere automáticamente una disponibilidad de *Recursos productivos (Risorse produttiva)* solo para los días que en el [Calendario de Fábrica (Calendario di Fabbrica)](/docs/configurations/tables/production/factory-calendar) están identificados como no festivos.

Además de este indicador, dentro de cada casilla también se podrán visualizar y/o modificar las *horas de capacidad productiva (ore di capacità produttiva)* de ese centro de trabajo (cuántas horas al día puede trabajar).

Es posible establecer que el centro de trabajo funcione todos los días excepto los días festivos, y en caso de **Excepciones (Eccezioni)**, basta con situarse en el día que se desea modificar y agregar/quitar el indicador y aumentar/disminuir las horas de trabajo.

El calendario de capacidades productivas prevalece sobre el calendario de fábrica.

Una vez configurados los diferentes campos, solo hay que hacer clic en el botón **salva**.

Al presionar el botón de **generazione automatiche**, se abre un nuevo formulario dentro del cual se puede indicar el año para el cual se generará el calendario y el número de horas de capacidad diaria que se considerará solo para aquellos centros de trabajo que no hayan indicado los respectivos horarios de inicio y fin.

Con este procedimiento, se pueden generar los calendarios para todos los centros de trabajo simultáneamente, o bien desmarcando el indicador **generazione calendario per tutti i centri di lavoro** y al presionar el botón **ricerca**, será posible seleccionar manualmente los centros de trabajo para los cuales crear el calendario.

En la etapa de creación, también es posible decidir si considerar o no el porcentaje de utilización indicado dentro del centro de trabajo.

*Botón específico*:  
> **generazione automatiche**: permite acceder a la ventana donde establecer los diferentes parámetros para la generación de un calendario común para varios centros de trabajo y con parámetros fijos para todos los meses del año. Gracias a este botón, una vez que se ingresen los parámetros para el calendario común, se podrá proceder a su creación efectiva.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).