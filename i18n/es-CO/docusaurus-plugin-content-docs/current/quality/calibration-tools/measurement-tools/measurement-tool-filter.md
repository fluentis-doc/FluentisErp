---
title: Búsqueda de Instrumentos de medición
sidebar_position: 1
ai_generated: true
---

El filtro se encuentra en la ruta **Calidad > Calibración de instrumentos<!-- Taratura strumenti --> > Instrumentos de medición<!-- Strumenti di misura -->**.

El filtro de datos permite ingresar nuevos *Instrumentos de medición<!-- Strumenti di misura -->* o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

### ![](/img/neutral/common/search.png) Búsqueda de Instrumentos de medición<!-- Ricerca Strumenti di misura -->

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.

### ![](/img/neutral/common/new.png) Inserción de Instrumentos de medición<!-- Inserimento Strumenti di misura -->

Para poder ingresar nuevos *Instrumentos de medición<!-- Strumenti di misura -->* es necesario presionar el botón **Nuevo<!-- Nuovo -->**.

### ![](/img/neutral/common/edit.png) Modificación o ![](/img/neutral/common/view.png) Visualización de Instrumentos de medición<!-- Modifica o Visualizzazione Strumenti di misura -->

Para abrir la gestión desde la cuadrícula de resultados, es necesario hacer doble clic en la fila de nuestro interés o, seleccionando una o más filas, presionar los botones **Modificar<!-- Modifica -->** o **Visualizar<!-- Visualizza -->**.

*Botones específicos*:

### Planificar nuevas calibraciones<!-- Pianifica nuove tarature -->

El botón está habilitado solo si, desde la cuadrícula de resultados, se selecciona un solo *Instrumento de medición<!-- Strumento di misura -->* y el *Instrumento* debe estar:
> *Activo*;  
> *Sujeto a calibración<!-- Soggetto a taratura -->*;  
> con calibración periódica y de tipo temporal (ampliar *Propiedades de calibración<!-- Proprietà di taratura -->* con *Periodo de calibración<!-- Periodo di taratura -->* diferente de *cero* y *Unidad de medida<!-- Unità di misura -->* de tipo *Día<!-- Giorno -->* o *Mes<!-- Mese -->*).

Para poder planificar nuevas *Calibraciones de instrumento planificadas<!-- Tarature strumento pianificate -->* desde un *Instrumento de medición<!-- Strumento di misura -->* es necesario hacer clic en la cuadrícula sobre el *Instrumento de medición<!-- Strumento di misura -->* desde el cual se desea planificar las *Calibraciones<!-- Tarature -->* y presionar el botón **Planificar nuevas calibraciones<!-- Pianifica nuove tarature -->**. Solo se puede planificar un *Instrumento de medición<!-- Strumento di misura -->* a la vez.  
Se mostrará una solicitud de:
> **Planificar hasta el<!-- Pianificare fino al -->**: es la fecha de fin del período de planificación (dato obligatorio), se propone un año de planificación a partir de la fecha actual.

Luego presione el botón **OK** o el botón **Cancelar<!-- Cancel -->** si desea continuar o no con la actividad de planificación.

*Método utilizado para la planificación*:  
Primero se eliminan todas las anteriores *Calibraciones<!-- Tarature -->* planificadas y no realizadas aún para el *Instrumento<!-- Strumento -->*.  
Posteriormente, a partir de la fecha de la última *Calibración<!-- Taratura -->*, se crean tantas *Calibraciones<!-- Tarature -->* como sea posible en el intervalo requerido a partir de la fecha actual y con la frecuencia del *Periodo de calibración<!-- Periodo di taratura -->*. Si la fecha propuesta cae en un día no laborable especificado en el *Calendario de fábrica*, la fecha propuesta se pospondrá al primer día laborable disponible.  
Si para el instrumento nunca se ha planificado o realizado una *Calibración<!-- Taratura -->* o la última fecha de *Calibración<!-- Taratura -->* corresponde a un periodo anterior a la fecha actual menos el *Periodo de calibración<!-- Periodo di taratura -->*, la primera *Calibración<!-- Taratura -->* se propondrá en la fecha actual y luego las demás.

### Nueva calibración<!-- Nuova taratura -->

El botón está habilitado solo si, desde la cuadrícula de resultados, se selecciona un solo *Instrumento de medición<!-- Strumento di misura -->* y el *Instrumento<!-- Strumento -->* debe estar *Activo*.  
Para poder crear una nueva *Calibración de instrumento<!-- Taratura strumento -->* desde un *Instrumento de medición<!-- Strumento di misura -->* es necesario hacer clic en la cuadrícula sobre el *Instrumento de medición<!-- Strumento di misura -->* desde el cual se desea crear la *Calibración<!-- Taratura -->* y presionar el botón **Nueva calibración<!-- Nuova taratura -->**. Sólo se puede crear una *Calibración de instrumento<!-- Taratura strumento -->* a partir de un solo *Instrumento de medición<!-- Strumento di misura -->* a la vez.  
Al finalizar el procesamiento, se mostrará la nueva *Calibración de instrumento planificada<!-- Taratura strumento pianificata -->*.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).