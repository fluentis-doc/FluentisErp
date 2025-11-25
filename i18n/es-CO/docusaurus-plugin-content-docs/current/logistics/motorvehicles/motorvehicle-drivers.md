---
title: Conductores de vehículos
description: Gestión y codificación de los conductores asociados a los vehículos en el módulo de Logística.
keywords:
  - vehículos
  - logística
  - envíos
  - Fluentis ERP
sidebar_position: 3
schema: HowTo
sidebar_label: Conductores de vehículos
tags:
  - logística
  - vehículos
  - envíos
last_update:
  author: Fluentis Documentation Team
  date: 10-11-2025
ai_generated: true
---

# Conductores de vehículos<!-- Autisti automezzi -->

Esta sección describe cómo gestionar y codificar a los **conductores asociados a los vehículos<!-- automezzi -->**, con detalles sobre la búsqueda, el ingreso y la gestión de los periodos de inactividad.

La tabla se encuentra en la ruta **Logística > Vehículos > Conductores de vehículos<!-- Logistica > Automezzi > Autisti automezzi -->**.

Los conductores codificados en esta tabla podrán ser seleccionados en los [Envíos<!-- Spedizioni -->](/docs/logistics/shipping/shippings).  
Es posible ingresar nuevos registros o buscar los existentes para visualizarlos, modificarlos o eliminarlos.

## Búsqueda de conductores de vehículos<!-- Ricerca Autisti automezzi -->

El formulario está compuesto por un área de **filtro** y un área de **resultado**.  
Después de configurar todos los filtros deseados, presione el botón **Buscar<!-- Ricerca -->** para visualizar los resultados en la cuadrícula.

## Ingreso de conductores de vehículos<!-- Inserimento Autisti automezzi -->

Para ingresar un nuevo conductor<!-- autista -->, puede hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Nuevo<!-- Nuovo -->**.  

Los campos obligatorios a completar son:
- **Nombre**
- **Apellido**

### Campos opcionales

- **Licencias de conducir**: permite seleccionar la licencia del conductor entre las presentes en [Licencias de conducir de vehículos<!-- Patenti di guida automezzi -->](/docs/configurations/tables/logistics/motorvehicle-driving-licences).  
- **Recurso asignado**: permite indicar el [Recurso de proyectos<!-- Risorsa progetti -->](/docs/configurations/tables/project-management/project-resources/) asignado al vehículo<!-- veicolo -->.  
- **Empleado**: permite asociar un empleado interno.  
- **Empleado externo asignado**: permite ingresar manualmente un empleado externo asociado al recurso.

### Botón disponible

- **Eliminar<!-- Cancella -->**: permite eliminar el registro seleccionado.

## Periodo de inactividad del conductor<!-- Periodo di inattività autista -->

En la cuadrícula *Periodo de inactividad del conductor*, es posible ingresar los periodos de inactividad, los cuales se reflejarán en el [Planificador<!-- Planning -->](/docs/logistics/shipping/calendar).

### Campos disponibles

- **Descripción**: descripción del periodo de inactividad del conductor.  
- **Desde la fecha<!-- Da data -->**: fecha de inicio del periodo de inactividad del conductor.  
- **Hasta la fecha<!-- A data -->**: fecha de finalización del periodo de inactividad del conductor.  
- **Motivo**: representa la motivación codificada en [Motivos de ausencia del conductor<!-- Motivi di assenza del conducente -->](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

Esta guía explica cómo ingresar, buscar y gestionar a los **conductores de vehículos<!-- autisti automezzi -->**, incluidos los periodos de inactividad y los referentes a envíos y recursos asociados.

Para ampliar información:
- [Envíos<!-- Spedizioni -->](/docs/logistics/shipping/shippings)
- [Licencias de conducir de vehículos<!-- Patenti di guida automezzi -->](/docs/configurations/tables/logistics/motorvehicle-driving-licences)
- [Motivos de ausencia del conductor<!-- Motivi di assenza del conducente -->](/docs/configurations/tables/logistics/driver-off-time-reasons/)