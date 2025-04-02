---
title: codici paghe
sidebar_position: 4
---

#### Campos específicos (Campi specifici)

**codice** / **descrizione**: código y descripción para identificar el código de nómina.  

**intervento**: indicador utilizado en algún archivo exportado por el procesamiento de nómina para gestiones externas a Fluentis.  

**esterno**: si está habilitado, verifica la configuración del tipo de intervención relacionada con la declaración de actividad, verificando si en el tipo de intervención el indicador externo está habilitado, para configurarlo en consecuencia en el recibo de nómina.  

**codice unità di misura**: unidad de medida utilizada en el archivo exportado por el procesamiento de nómina para gestiones externas a Fluentis.  

**ordinario**: si está habilitado, se utiliza como código predeterminado para las horas ordinarias de trabajo, en caso de falta de configuraciones más específicas.  

**valori finali**: si está habilitado, el valor asociado a este código de nómina se insertará en el recuadro "Valores" del Resumen para recibos de nómina y se excluirá de los movimientos.  

**rimborso viaggio**: si está habilitado, las horas de viaje identificadas con este código se sumarán a las horas ordinarias. Si la suma resulta ser mayor a 8 horas, se insertará una línea con cantidad 1 en los movimientos como identificador de 1 traslado independientemente de las horas de viaje declaradas. Si está deshabilitado, las horas de viaje se insertarán por separado según las horas efectivamente declaradas.  

Se utilizará para identificar los días de traslado en el recuadro "Movimientos" del Resumen para recibos de nómina. Con el indicador habilitado, si las horas ordinarias se suman a las horas de viaje.  

**festività**: si está habilitado, se utilizará para identificar los días de festividad en el recuadro "Movimientos" del Resumen para recibos de nómina - configurados en el Calendario de días festivos.  

**straordinario**: si está habilitado, se utilizará para identificar las horas de extraordinario en el recuadro "Movimientos" del Resumen para recibos de nómina - calculadas según los horarios establecidos para el recurso.  

**straordinari festivi**: si está habilitado, se utilizará para identificar las horas de extraordinario realizadas el sábado/domingo en el recuadro "Movimientos" del Resumen para recibos de nómina - calculadas según los horarios establecidos para el recurso.  

**ferie**: si está habilitado, se utilizará para identificar los días de vacaciones en el recuadro "Movimientos" del Resumen para recibos de nómina - basado en la categoría de actividad ingresada en la declaración de actividad.  

**permessi**: si está habilitado, se utilizará para identificar las horas de permisos en el recuadro "Movimientos" del Resumen para recibos de nómina - basado en la categoría de actividad ingresada en la declaración de actividad.  

**ROL**: si está habilitado, se utilizará para identificar las horas de ROL en el recuadro "Movimientos" del Resumen para recibos de nómina - basado en la categoría de actividad ingresada en la declaración de actividad.  

**smart working**: si está habilitado, se utilizará para identificar los días de trabajo remoto en el recuadro "Movimientos" del Resumen para recibos de nómina - identificados según las declaraciones de actividad con el indicador "Trabajo remoto" habilitado, reemplazará el código de nómina asociado a la categoría de actividad.  

**non viene esportato**: bloquea la exportación en el archivo para gestiones externas a Fluentis.  

**codice esportato**: código utilizado en el archivo para gestiones externas a Fluentis.