---
title: Calendario de fábrica
sidebar_position: 4
---

A través de esta ventana es posible generar y/o modificar el *Calendario de fábrica* de la empresa, un elemento fundamental que se tiene en cuenta en los procedimientos de **Planificación general**, **Programación de Capacidad Finita** y **MRP**.

La ventana se presenta como una tabla dentro de la cual se visualizan tantas casillas como días tiene el mes seleccionado en la parte superior derecha.  
En el primer campo se encontrará el **Mes** y el **Año** de referencia, que pueden seleccionarse a través de la combinación y el campo editable al lado o haciendo clic en los botones **Año anterior/Siguiente** y **Mes anterior/Siguiente**.

En cada casilla hay un indicador, que, si está activado, indica que el día en cuestión es *Festivo*.  
El hecho de que un día determinado esté designado como *Festivo* permite al usuario asegurarse de que, al generar el [Calendario de capacidad productiva](/docs/configurations/tables/production/productive-capacity-calendar), la aplicación genere automáticamente una disponibilidad de la *Recursos de producción produttiva* solo para los días que en el *Calendario de fábrica* están identificados como no festivos.  
Además, la indicación relacionada con la festividad es importante también al definir los *Tiempo de adquisición de proveedores preferenciales*, que deben indicarse considerando el *Calendario de fábrica*.  
*Ejemplo*:  
Si se consideran festivos el sábado y el domingo, al establecer un valor de 10 días como tiempo de aprovisionamiento, se entiende un tiempo total de alrededor de 2 semanas, considerando que la semana laboral en este caso está compuesta solo por 5 días de calendario.

Una vez configurados los diversos campos, basta con hacer clic en el botón **Guardar**.

Los indicadores que indican la festividad pueden establecerse:  
- **manualmente** por el usuario  
o, como suele ser el caso,  
- utilizando el botón de la cinta llamado **Generación de Calendario de Fábrica**. Al presionar este botón se abre una ventana emergente llamada **Generación de calendarios**.

En esta ventana emergente, el usuario puede decidir generar automáticamente el calendario de fábrica para un determinado año, que puede configurar en el campo correspondiente **Generación de calendario para el año**.  
Después de decidir qué días de la semana serán festivos y si considerar o no las configuraciones realizadas en la tabla *Festividades anuales*, se puede hacer clic en el botón **OK** para ejecutar automáticamente la creación del calendario de fábrica para el año indicado.

Una vez generado el calendario, el usuario deberá hacer clic de nuevo en el botón Guardar y cerrar la ventana relacionada con el calendario de fábrica.

*Botón específico*:  
> **Generación de Calendario de Fábrica**: permite abrir la ventana emergente para la generación automática del calendario de fábrica para todo el año.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).