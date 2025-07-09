---
title: Calendario de capacidad de producción 
sidebar_position: 3
---

La ventana se presenta como una tabla dentro de la cual se visualizan tantas casillas como días tiene el mes seleccionado en la parte superior derecha.  
En el primer campo se encuentran el **mes** y el **año** de referencia, que se pueden seleccionar mediante el combo y el campo editable a un lado o haciendo clic en los botones **Año anterior/Siguiente** y **Mes anterior/siguiente**.

A continuación, hay una serie de combos, dentro de los cuales se seleccionará el **Centro de trabajo** para el cual se desea crear el calendario, la **Máquina** y el **Grupo laboral**.

En cada casilla hay un indicador, que, si está activado, indica que el día en cuestión es *Festivo*.  
El hecho de que un determinado día esté designado como *Festivo* permite al usuario asegurarse de que al realizar la generación del *Calendario de capacidades de producción*, la aplicación genere automáticamente una disponibilidad de *Recursos de producción* solo para los días que en el [Calendario de Fábrica](/docs/configurations/tables/production/factory-calendar) están identificados como no festivos.

Además de este indicador, dentro de cada casilla también se podrán visualizar y/o modificar las *horas de capacidad de producción* de ese centro de trabajo (cuántas horas al día puede trabajar).

Es posible establecer que el centro de trabajo funcione todos los días excepto los días festivos, y en caso de **Excepciones**, basta con situarse en el día que se desea modificar y agregar/quitar el indicador y aumentar/disminuir las horas de trabajo.

El calendario de capacidades de produccións prevalece sobre el calendario de fábrica.

Una vez configurados los diferentes campos, solo hay que hacer clic en el botón **Guardar**.

Al presionar el botón de **Generación automática**, se abre un nuevo formulario dentro del cual se puede indicar el año para el cual se generará el calendario y el número de horas de capacidad diaria que se considerará solo para aquellos centros de trabajo que no hayan indicado los respectivos horarios de inicio y fin.

Con este procedimiento, se pueden generar los calendarios para todos los centros de trabajo simultáneamente, o bien desmarcando el indicador **Generación de calendario para todos los centros de trabajo** y al presionar el botón **Buscar**, será posible seleccionar manualmente los centros de trabajo para los cuales crear el calendario.

En la etapa de creación, también es posible decidir si considerar o no el porcentaje de utilización indicado dentro del centro de trabajo.

*Botón específico*:  
> **Generación automática**: permite acceder a la ventana donde establecer los diferentes parámetros para la generación de un calendario común para varios centros de trabajo y con parámetros fijos para todos los meses del año. Gracias a este botón, una vez que se ingresen los parámetros para el calendario común, se podrá proceder a su creación efectiva.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).