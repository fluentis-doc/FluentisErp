---
title: Parámetros del Plan de Carga
sidebar_position: 5
---

Los indicadores que permiten la parametrización son:       

**Control de disponibilidad**: este indicador permite insertar una columna para visualizar la disponibilidad de los artículos;      
**Verificar disponibilidad**: este indicador permite verificar la posible disponibilidad;       
**Disponibilidad obligatoria**: este indicador impide el cumplimiento de una línea de artículo sin disponibilidad; se activa una vez que se ha configurado el indicador Verificar disponibilidad;                  
**Ver disponibilidad negativa**: este indicador permite visualizar posibles disponibilidades negativas; se activa una vez que se ha configurado el indicador Verificar disponibilidad;     
**Considere las disponibilidades desde:** es posible seleccionar estos indicadores si el indicador **control de disponibilidad** está activo; permite considerar la disponibilidad proveniente de los diferentes módulos;      
**Crear automáticamente lista de recogida desde los planes de carga**: campo obsoleto;          
**No usar dimensiones**: este indicador no controla las dimensiones de artículos y UDC para la comparación con el [Vehículo motorizado](/docs/logistics/motorvehicles/motorvehicle), evitando bloqueos en el envío. Sin este indicador, si el volumen de los artículos es mayor que el volumen del vehículo, el programa nos hará utilizar más vehículos.            
**Mostrar filas de artículos ya insertadas en el Plan de Carga abierto**: este indicador permite visualizar (con un color configurado en el campo **Color de línea en otro plan de carga abierto**) las líneas asumidas por otro colega en los planes de carga abiertos guardados y no guardados;      
**Propuesta de búsqueda para la fecha de entrega**: este campo establece, en el filtro de búsqueda de los planes de carga, las fechas de entrega a verificar, dando la posibilidad de elegir entre: la semana en curso, desde hoy en adelante, o ninguna fecha propuesta;         
**Color de línea disponible**: en este campo se puede ingresar el color con el que se visualizarán las líneas de artículos que tienen disponibilidad;       
**Color de línea no disponible**: en este campo se puede ingresar el color con el que se visualizarán las líneas de artículos que no tienen disponibilidad;      
**En otra línea del plan de carga, color**: este indicador colorea las líneas que ya han sido insertadas en otro plano de carga guardado;      
**En otro plan de carga abierto, color de línea**: este indicador colorea las líneas que han sido insertadas en otro plano de carga no guardado, posiblemente en uso por un colega.