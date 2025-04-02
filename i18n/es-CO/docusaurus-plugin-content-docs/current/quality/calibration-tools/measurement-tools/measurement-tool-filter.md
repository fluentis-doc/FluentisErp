---
title: Búsqueda de Instrumentos de Medida (Ricerca Strumenti di misura)
sidebar_position: 1
---

El filtro se encuentra en la ruta **Calidad > Calibración de instrumentos > Instrumentos de medida (Qualità > Taratura strumenti > Strumenti di misura)**.

El filtro de datos permite insertar nuevos *strumenti di misura* o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

### ![](/img/neutral/common/search.png) Búsqueda de Instrumentos de Medida

El formulario consta de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

### ![](/img/neutral/common/new.png) Ingreso de Instrumentos de Medida

Para poder ingresar nuevos *strumenti di misura* es necesario presionar el botón **nuovo**.

### ![](/img/neutral/common/edit.png) Modificación o ![](/img/neutral/common/view.png) Visualización de Instrumentos de Medida

Para abrir la gestión de la cuadrícula de resultados, es necesario hacer doble clic en la fila de interés o, seleccionando una o más filas, presionar los botones **modifica** o **visualizza**.

*Botones específicos:*

### Planificar nuevas calibraciones

El botón está habilitado solamente si, desde la cuadrícula de resultados, se selecciona un solo *strumento di misura* y el *Instrumento* debe ser:  
> *attivo*;  
> *Sujeto a calibración (Soggetto a taratura)*;  
> de calibración periódica y de tipo temporal (expandir *proprietà di taratura* con *Período de calibración (Periodo di taratura)* diferente de *cero* y *unità di misura* de tipo *giorno* o *mese*).  

Para poder planificar nuevas *Calibraciones de instrumentos planificadas (Tarature strumento pianificate)* de un *Instrumento de medida*, es necesario hacer clic en la cuadrícula en el *Instrumento de medida* desde el cual se desea planificar las *Calibraciones* y presionar el botón **pianifica nuove tarature**. Se puede planificar un solo *Instrumento de medida* a la vez.  
Aparecerá una solicitud de:  
> **pianificare fino al**: es la fecha de fin del período de planificación (dato obligatorio), se propone un año de planificación a partir de la fecha actual.  

Presionar después el botón **OK** o el botón **cancel** si se desea continuar con la actividad de planificación o no.

*Método utilizado para la planificación:*  
Como primer paso, se eliminan todas las *Calibraciones (Tarature)* planificadas anteriormente y no llevadas a cabo para el *Instrumento*.  
A continuación, a partir de la fecha de la última *taratura*, se crean tantas *Calibraciones* como sea posible dentro del intervalo solicitado a partir de la fecha actual, y escalonadas según el *Período de calibración (Periodo di taratura)*. Si la fecha propuesta cae en un día no laborable especificado en el *calendario di fabbrica*, la fecha propuesta se pospondrá hasta la primera fecha laborable disponible.  
Si para el instrumento nunca se ha planificado o realizado una *taratura* o si la última fecha de *taratura* fue anterior a la fecha actual menos el *Período de calibración (Periodo di taratura)*, la primera *Calibración* se propondrá para la fecha actual y posteriormente las demás.

### Nueva calibración

El botón está habilitado solamente si, desde la cuadrícula de resultados, se selecciona un solo *strumento di misura* y el *Instrumento* debe estar *attivo*.  
Para poder crear una nueva *taratura strumento* de un *Instrumento de medida*, es necesario hacer clic en la cuadrícula en el *Instrumento de medida* desde el cual se desea crear las *Calibraciones* y presionar el botón **nuova taratura**. Se puede crear una *Calibración de instrumento* de un solo *Instrumento de medida* a la vez.  
Al finalizar el procesamiento, la nueva *Calibración de instrumento planificada (Taratura strumento pianificata)* se visualizará.

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).