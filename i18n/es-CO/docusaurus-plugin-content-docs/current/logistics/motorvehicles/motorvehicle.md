---
title: Nuevo vehículo (Nuovo automezzo)
sidebar_position: 2
---

La tabla se encuentra en la ruta **Logística > Vehículos > Nuevo vehículo** (Logistica > Automezzi > Nuovo automezzo).

En esta tabla es posible codificar los diferentes *Vehículos* utilizados y las dimensiones de cada uno de ellos.

Un ejemplo de uso de los vehículos codificados en esta tabla se encuentra en los [Planes de Carga](/docs/logistics/load-plans/create-plan/), en la pestaña *Preparación del plan de carga* (Preparazione piano di carico).

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Vehículos (Ricerca Automezzi)**

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Vehículos (Inserimento Automezzi)**

Para poder insertar nuevos *Vehículos*, es necesario hacer clic en la primera línea vacía de la cuadrícula o presionar el botón **nuovo**. 
Para el nuevo registro se deben ingresar al menos los campos obligatorios solicitados por el programa: 

- **tipo automezzo**: indica la tipología del medio ingresada en la tabla [Tipo de vehículo](/docs/configurations/tables/logistics/motorvehicle-Type);          
- **codice**: indica el código del vehículo;       
- **targa**: indica el número de matrícula del vehículo;      
- **data registrazione**: indica la fecha de registro del vehículo;          
- **Tipo de combustible del vehículo (Tipo carburanti autoveicolo)**: indica el [Tipo de combustible](/docs/configurations/tables/logistics/motorvehicle-gas-type) utilizado por el vehículo.

Además, se pueden ingresar otros campos no obligatorios, entre los que se incluyen:

- **marca**: indica la marca del vehículo presente en la tabla [Marcas de vehículos](/docs/configurations/tables/logistics/motorvehicle-brands);             
- **modello**: indica el modelo del vehículo presente en la tabla [Marcas de vehículos](/docs/configurations/tables/logistics/motorvehicle-brands);        
- **data inizio**: indica la fecha de inicio de uso del vehículo;     
- **Fecha de vencimiento del contrato (Data scadenza contratto)**: indica la fecha de vencimiento del contrato del vehículo;     
- **data chiusura**: indica la fecha a partir de la cual no es posible utilizar el vehículo;     
- **descrizione**: permite ingresar una descripción libre del vehículo;       
- **conto**: permite ingresar la cuenta del cliente del vehículo;        
- **Propiedad del vehículo (Proprietà autoveicolo)**: permite indicar la tipología [Propiedad del vehículo](/docs/configurations/tables/logistics/motorvehicle-ownership);        
- **Conductor asignado (Autista assegnato)**: permite indicar el [Conductor asignado](/docs/logistics/motorvehicles/motorvehicle-drivers) al vehículo;        
- **filiale aziendale**: permite indicar la sucursal empresarial;        
- **progetto**: permite indicar el proyecto asignado al vehículo.        

Una vez terminado el ingreso de los valores de encabezado, en la parte inferior del formulario están presentes las siguientes pestañas:

**dettagli** del vehículo, que contiene los siguientes valores:

- **vano**: indica el uso del vehículo;                  
- **targa**: indica la matrícula del vehículo;             
- **Unidad de medida de capacidad (Unità di misura portata)**: indica la capacidad máxima del vehículo expresada en **Unidad de medida de capacidad**;         
- **portata massima**: indica la capacidad máxima del vehículo expresada en **Unidad de medida de capacidad**;                  
- **Unidad de medida de dimensiones (Unità di misura dimensioni)**: indica la unidad de medida con la que se expresan **Altura**, **Anchura**, **Profundidad** y las respectivas tolerancias;      
- **altezza**: indica la altura del vehículo expresada en **Unidad de medida de dimensiones**;         
- **larghezza**: indica la anchura del vehículo expresada en **Unidad de medida de dimensiones**;                 
- **profondità**: indica la profundidad del vehículo expresada en **Unidad de medida de dimensiones**;                 
- **tolleranza in altezza**: indica la tolerancia en altura del vehículo expresada en **Unidad de medida de dimensiones**;           
- **tolleranza in larghezza**: indica la tolerancia en anchura del vehículo expresada en **Unidad de medida de dimensiones**;       
- **um volume**: indica la unidad de medida con la que se expresa el **Volumen**;                    
- **volume**: indica el volumen del vehículo expresado en **Unidad de medida de volumen**;                 
- **Número de unidades de carga contenibles (Numero unità di carico contenibili)**: indica el número máximo de unidades de carga que pueden ser contenidas en el vehículo; 
- **numero strati**: indica el número de capas que pueden ser cargadas en el vehículo.

**Periodo de inactividad del vehículo (Periodo inattività automezzo)** que permite ingresar los períodos de inactividad del medio, los cuales se informarán en el [Planificación](/docs/logistics/shipping/calendar). 
Por lo tanto, se pueden ingresar los siguientes valores:

- **descrizione**: permite indicar la descripción del período de inactividad del vehículo;          
- **da data**: permite indicar la fecha de inicio del período de inactividad del vehículo;          
- **a data**: permite indicar la fecha de fin del período de inactividad del vehículo;          
- **motivo**: permite ingresar la motivación codificada en [Motivos de ausencia del conductor](/docs/configurations/tables/logistics/driver-off-time-reasons/)

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).