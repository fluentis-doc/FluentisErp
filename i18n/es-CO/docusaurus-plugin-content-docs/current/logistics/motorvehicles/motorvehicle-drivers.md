---
title: Conductores vehículos (Autisti automezzi)
sidebar_position: 3
---

La tabla se encuentra en la ruta **Logística > Vehículos > Conductores vehículos (Logistica > Automezzi > Autisti automezzi)**.

En esta tabla es posible codificar a los *Conductores vehículos (Autisti automezzi)* que podrán ser seleccionados en las [Envíos (Spedizioni)](/docs/logistics/shipping/shippings).

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Conductores vehículos (Ricerca Autisti automezzi)**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **ricerca** para ver los resultados dentro de la cuadrícula de resultados.

**Inserción de Conductores vehículos (Inserimento Autisti automezzi)**

Para poder insertar nuevos, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **nome** y el **cognome**.  
Además, también se pueden ingresar los siguientes valores:  
- **Licencia de conducir (Licenza di guida)**: permite ingresar la licencia de conducir del conductor entre las que están registradas en [*Licencias de conducir vehículos (Licenze di guida automezzo)*](/docs/configurations/tables/logistics/motorvehicle-driving-licences);  
- **Recurso asignado (Risorsa assegnata)**: permite indicar el [Recurso de proyectos (Risorsa progetti)](/docs/configurations/tables/project-management/project-resources/) asignado al vehículo;  
- **dipendente**: permite indicar el empleado interno asociado;  
- **Empleado externo asignado (Dipendente esterno assegnato)**: permite indicar manualmente el empleado externo asociado al recurso.

Con el botón **cancella** es posible borrar el registro seleccionado.

En la cuadrícula *Periodo de inactividad del conductor (Periodo di inattività autista)*, es posible ingresar los períodos de inactividad del conductor, los cuales se reportarán en el [Planificador (Planning)](/docs/logistics/shipping/calendar).  
Por lo tanto, se pueden ingresar los siguientes valores:
- **descrizione**: permite indicar la descripción del período de inactividad del conductor;  
- **da data**: permite indicar la fecha de inicio del período de inactividad del conductor;  
- **a data**: permite indicar la fecha de finalización del período de inactividad del conductor;  
- **motivo**: permite ingresar la razón codificada en [Motivos de ausencia del conductor (Motivi di assenza del conducente)](/docs/configurations/tables/logistics/driver-off-time-reasons/).

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).