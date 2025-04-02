---
title: parametri piani di carico
sidebar_position: 5
---

Los indicadores que permiten la parametrización son:       

**controlla disponibilità**: este indicador permite insertar una columna para visualizar la disponibilidad de los artículos;      
**verifica disponibilità**: este indicador permite verificar la posible disponibilidad;       
**disponibilità obbligatoria**: este indicador impide el cumplimiento de una línea de artículo sin disponibilidad; se activa una vez que se ha configurado el indicador Verificar disponibilidad;                  
**visualizza disponibilità negativa**: este indicador permite visualizar posibles disponibilidades negativas; se activa una vez que se ha configurado el indicador Verificar disponibilidad;     
**Considerar disponibilidades provenientes de (Considera le disponibilità provenienti da):** es posible seleccionar estos indicadores si el indicador **controlla disponibilità** está activo; permite considerar la disponibilidad proveniente de los diferentes módulos;      
**Crear automáticamente lista de recogida desde los planes de carga (Crea in automatico lista di prelievo dal piani di carico)**: campo obsoleto;          
**non usare dimensioni**: este indicador no controla las dimensiones de artículos y UDC para la comparación con el [Vehículo (Automezzo)](/docs/logistics/motorvehicles/motorvehicle), evitando bloqueos en el envío. Sin este indicador, si el volumen de los artículos es mayor que el volumen del vehículo, el programa nos hará utilizar más vehículos.            
**Visualizar líneas de artículos presentes en planes de carga abiertos (Visualizza righe articcoli presenti in piani di carico aperti)**: este indicador permite visualizar (con un color configurado en el campo **Color de línea en otro plano de carga abierto (Colore riga in altro piano di carico aperto)**) las líneas asumidas por otro colega en los planes de carga abiertos guardados y no guardados;      
**proposta ricerca data consegna**: este campo establece, en el filtro de búsqueda de los planes de carga, las fechas de entrega a verificar, dando la posibilidad de elegir entre: la semana en curso, desde hoy en adelante, o ninguna fecha propuesta;         
**colore riga disponibile**: en este campo se puede ingresar el color con el que se visualizarán las líneas de artículos que tienen disponibilidad;       
**colore riga non disponibile**: en este campo se puede ingresar el color con el que se visualizarán las líneas de artículos que no tienen disponibilidad;      
**colore riga in altro piano carico**: este indicador colorea las líneas que ya han sido insertadas en otro plano de carga guardado;      
**colore riga in altro piano carico aperto**: este indicador colorea las líneas que han sido insertadas en otro plano de carga no guardado, posiblemente en uso por un colega.