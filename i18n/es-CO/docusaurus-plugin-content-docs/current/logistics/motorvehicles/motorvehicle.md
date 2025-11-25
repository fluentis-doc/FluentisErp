---
title: Nuevo vehículo
sidebar_position: 2
description: Guía para la gestión y codificación de vehículos en Fluentis ERP dentro del módulo de Logística.
schema: HowTo
tags:
  - logística
  - vehículos
  - codificación
last_update:
  author: Fluentis Documentation Team
  date: 12-11-2025
keywords:
  - vehículos
  - logística
  - dimensiones
  - plan de carga
ai_generated: true
---

# Nuevo vehículo<!-- Nuovo automezzo -->

La tabla para la gestión de vehículos<!-- automezzi --> se encuentra en la ruta **Logística > Vehículos > Nuevo vehículo<!-- Logistica > Automezzi > Nuovo automezzo -->**.  
En esta tabla es posible codificar los diferentes *Vehículos<!-- Automezzi -->* utilizados y definir sus dimensiones<!-- dimensioni -->.  
Un ejemplo de uso de los vehículos<!-- automezzi --> codificados está presente en los [Planes de Carga<!-- Piani di Carico -->](/docs/logistics/load-plans/create-plan/), en la pestaña *Preparación del plan de carga<!-- Preparazione piano di carico -->*.  
La tabla permite ingresar nuevos registros, buscar, visualizar, modificar o eliminar los ya existentes.

## Búsqueda de vehículos<!-- Ricerca automezzi -->

El formulario está compuesto por un área de filtro y una de resultados.  
Luego de establecer los filtros deseados, haga clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados en la cuadrícula de resultados.

## Inserción de vehículos<!-- Inserimento Automezzi -->

Para ingresar un nuevo vehículo<!-- automezzo -->:

1. Haga clic en la primera fila vacía de la cuadrícula o presione el botón **Nuevo<!-- Nuovo -->**.
2. Ingrese al menos los campos obligatorios requeridos:

   - **Tipo de vehículo<!-- Tipo automezzo -->**: tipo del vehículo<!-- mezzo --> seleccionado de la tabla *Tipo de vehículo<!-- Tipo automezzo -->*;
   - **Código<!-- Codice -->**: código identificativo del vehículo<!-- mezzo -->;
   - **Placa<!-- Targa -->**: número de placa del vehículo<!-- mezzo -->;
   - **Fecha de registro<!-- Data registrazione -->**: fecha de registro del vehículo<!-- mezzo -->;
   - **Tipo de combustible del vehículo<!-- Tipo carburanti autoveicolo -->**: tipo de combustible utilizado, definido en la tabla [Tipo de combustible<!-- Tipo di carburante -->](/docs/configurations/tables/logistics/motorvehicle-gas-type).

3. También es posible ingresar campos opcionales como:

   - **Marca**: marca del vehículo<!-- mezzo --> presente en la tabla [Marcas de vehículos<!-- Marchi automezzi -->](/docs/configurations/tables/logistics/motorvehicle-brands);
- **Modelo**: indica el modelo del vehículo<!-- mezzo --> presente en la tabla [Marcas de vehículos<!-- Marchi automezzi -->](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **Fecha de inicio<!-- Data inizio -->**: indica la fecha de inicio de uso del vehículo<!-- automezzo -->;     
- **Fecha de vencimiento de contrato<!-- Data scadenza contratto -->**: indica la fecha de vencimiento del contrato del vehículo<!-- automezzo -->;  
- **Fecha de cierre<!-- Data chiusura -->**: indica la fecha desde la cual ya no es posible utilizar el vehículo<!-- automezzo -->;  
- **Descripción<!-- Descrizione -->**: permite ingresar una descripción libre del vehículo<!-- automezzo -->;  
- **Cuenta<!-- Conto -->**: permite ingresar la cuenta<!-- conto --> del cliente del vehículo<!-- automezzo -->;   
- **Propiedad del vehículo<!-- Proprietà autoveicolo -->**: permite indicar el tipo de [Propiedad del vehículo<!-- Proprietà dell'autoveicolo -->](/docs/configurations/tables/logistics/motorvehicle-ownership); 
- **Conductor asignado<!-- Autista assegnato -->**: permite indicar el [Conductor asignado<!-- Autista assegnato -->](/docs/logistics/motorvehicles/motorvehicle-drivers) al vehículo<!-- automezzo -->; 
- **Sucursal de la empresa<!-- Filiale aziendale -->**: permite indicar la sucursal de la empresa;        
- **Proyecto<!-- Progetto -->**: permite indicar el proyecto asignado al vehículo<!-- automezzo -->.

## Detalles del vehículo<!-- Dettagli Automezzo -->

En la parte inferior del formulario están disponibles las siguientes pestañas:

### Detalles<!-- Dettagli -->

Campos relativos a las características físicas y capacidad del vehículo<!-- automezzo -->:

- **Compartimiento<!-- Vano -->**: compartimiento del vehículo<!-- automezzo -->;
- **Placa<!-- Targa -->**: placa identificativa;
- **Unidad de medida de capacidad<!-- Unità di misura portata -->**: unidad de medida para la capacidad de carga;
- **Capacidad máxima<!-- Portata massima -->**: capacidad máxima según la unidad de medida definida;
- **Unidad de medida de dimensiones<!-- Unità di misura dimensioni -->**: unidad utilizada para las dimensiones (altura, anchura, profundidad) y tolerancias respectivas;
- **Altura<!-- Altezza -->**: altura expresada en la unidad de medida de dimensiones;
- **Anchura<!-- Larghezza -->**: anchura expresada en la unidad de medida de dimensiones;
- **Profundidad<!-- Profondità -->**: profundidad expresada en la unidad de medida de dimensiones;
- **Tolerancia en altura<!-- Tolleranza in altezza -->**: tolerancia de altura;
- **Tolerancia en anchura<!-- Tolleranza in larghezza -->**: tolerancia de anchura;
- **UM volumen<!-- UM volume -->**: unidad de medida para el volumen;
- **Volumen<!-- Volume -->**: volumen expresado en la unidad de medida de volumen;
- **Cantidad máxima de unidades de carga transportables<!-- Numero unità di carico contenibili -->**: número máximo de unidades de carga transportables;
- **Número de capas<!-- Numero strati -->**: número de capas posibles de carga.

### Periodo de inactividad del vehículo<!-- Periodo inattività automezzo -->

Permite ingresar los períodos durante los cuales el vehículo<!-- automezzo --> no es utilizable.  
Estos datos se reflejan en el [Planificador<!-- Planning -->](/docs/logistics/shipping/calendar).

Los campos incluyen:

- **Descripción<!-- Descrizione -->**: permite indicar la descripción del período de inactividad del vehículo<!-- automezzo -->;          
- **Desde la fecha<!-- Da data -->**: permite indicar la fecha de inicio del período de inactividad del vehículo<!-- automezzo -->;          
- **Hasta la fecha<!-- A data -->**: permite indicar la fecha de fin del período de inactividad del vehículo<!-- automezzo -->;          
- **Motivo**: permite ingresar el motivo codificado en [Motivos de ausencia del conductor<!-- Motivi di assenza del conducente -->](/docs/configurations/tables/logistics/driver-off-time-reasons/).

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

En este documento se ha descrito el procedimiento completo para la codificación y gestión de nuevos vehículos<!-- automezzi --> en el módulo de Logística<!-- Logistica --> del sistema ERP<!-- ERP -->.

Para ampliar información:

- [Planes de Carga<!-- Piani di Carico -->](/docs/logistics/load-plans/create-plan/)
- [Conductor asignado<!-- Autista assegnato -->](/docs/logistics/motorvehicles/motorvehicle-drivers)
- [Planificador de envíos y calendario<!-- Planning spedizioni e calendar -->](/docs/logistics/shipping/calendar)
- [Guía general sobre funcionalidades, botones y campos comunes<!-- Guida generale su funzionalità, pulsanti e campi comuni -->](/docs/guide/common)