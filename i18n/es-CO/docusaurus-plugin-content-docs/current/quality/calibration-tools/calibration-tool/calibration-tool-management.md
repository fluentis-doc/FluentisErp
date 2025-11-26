---
title: Calibración de instrumentos
sidebar_position: 2
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > Calibración de instrumentos > Calibración de instrumentos > Nueva calibración de instrumento<!-- Taratura strumenti > Taratura strumenti > Nuovo taratura strumento -->** o también se puede ejecutar desde la **Búsqueda Calibración de instrumentos<!-- Ricerca Taratura strumenti -->**.   

:::important Para qué sirve<!-- A cosa serve -->
En la gestión de Calibración de instrumentos<!-- Taratura strumenti --> es posible el registro de las calibraciones internas y de los Certificados de calibración<!-- Tarature interne e Certificati di taratura -->.  
Si el instrumento está sujeto a calibración y la calibración es interna, es posible ingresar, para las posiciones previstas, los valores relevados. Fluentis asignará automáticamente un resultado positivo o negativo, tanto para cada posición como en general.  
Si el instrumento está sujeto a calibración y la calibración es externa, se puede adjuntar el Certificado de calibración<!-- Certificato di taratura --> recibido de la entidad externa que realizó la calibración. El resultado, en este caso, será atribuido manualmente por el operador.  
Están disponibles de forma estándar los reportes de: Registro de calibraciones de instrumentos<!-- Registro tarature strumenti --> agrupados por: Informe<!-- Rapporto -->, Instrumento<!-- Strumento --> y Operador<!-- Operatore -->.  

De forma estándar está disponible el reporte de:  
> **Registro de Calibraciones de Instrumentos<!-- Registro Tarature Strumenti -->**: listado de las *Calibraciones de instrumentos<!-- Tarature strumenti -->* agrupables por: *Informe<!-- Rapporto -->*, *Instrumento<!-- Strumento -->* y *Realizado por<!-- Effettuata da -->*.  
:::


## Botones de comando<!-- Pulsanti di comando -->


### Guardar<!-- Salva -->

Al presionar este botón se guardan todas las informaciones modificadas de la *Calibración de instrumento<!-- Taratura strumento -->* visualizada.  


## Gestión de datos<!-- Gestione dati -->


### Datos de cabecera<!-- Dati di testata -->

La información gestionada es:  
> **Tipo de calibración<!-- Tipo taratura -->**: es el *Tipo de calibración<!-- Tipo taratura -->* (dato obligatorio).  
> Al ingresar manualmente una nueva *Calibración<!-- Taratura -->* se propone el *Tipo de calibración manual<!-- Tipo taratura manuale -->* indicado en los *Parámetros de Calibración de instrumentos<!-- Parametri Taratura strumenti -->*.  
>
> **Año/Número<!-- Anno/Numero -->**: son el *Año<!-- Anno -->* y el *Número<!-- Numero -->* de la *Calibración de instrumento<!-- Taratura strumento -->* (ambos datos obligatorios).  
>  Al ingresar una nueva *Calibración de instrumento<!-- Taratura strumento -->*:  
> - La *Fecha de calibración efectiva<!-- Data taratura effettiva -->* se propone igual a la fecha actual;  
> - El *Año<!-- Anno -->* y el *Número<!-- Numero -->* se proponen en base a la *Fecha de calibración efectiva<!-- Data taratura effettiva -->* y la *Numeración<!-- Numerazione -->* asociada al *Tipo de calibración<!-- Tipo taratura -->*.  
>
> **Calibración realizada por<!-- Taratura effettuata da -->**: expander donde es posible ingresar:  
>
>> **Calibración interna<!-- Taratura interna -->**: indica que el *Instrumento de medición<!-- Strumento di misura -->* es calibrado por un sujeto interno a la empresa.  
>> **Laboratorio externo**: es la razón social del *Proveedor<!-- Fornitore -->* que realiza la calibración externa.  
>> **Función<!-- Funzione -->**: es la *Función empresarial<!-- Funziona aziendale -->* que realiza la calibración interna.  
>> **Empleado<!-- Dipendente -->**: es el *Empleado<!-- Dipendente -->* que realiza la calibración interna.  
>
> **Programada<!-- Schedulata -->**: indica que la *Calibración de instrumento<!-- Taratura strumento -->* ha sido planificada.  
> **Resultado de calibración<!-- Esito taratura -->**: es el *Resultado<!-- Esito -->* global de la calibración.  
> Se calcula automáticamente, en base a los *Resultados<!-- Esiti -->* de los *Valores relevados<!-- Valori rilevati -->*, si es una *Calibración interna<!-- Taratura interna -->*.
> Se atribuye manualmente si es una *Calibración externa<!-- Taratura esterna -->*.  
> **Observaciones<!-- Osservazioni -->**: anotaciones libres sobre el tema.  
> **Notas**: anotaciones libres.  
>
> **Fecha de calibración prevista<!-- Data taratura prevista -->**: es la fecha de calibración prevista.  
> Se propone desde la función *Planificar nuevas calibraciones<!-- Pianifica nuove tarature -->* y no es modificable.  
> **Fecha de calibración efectiva<!-- Data taratura effettiva -->**: es la fecha de calibración real.  
> Al ingresar manualmente una nueva calibración se propone igual a la fecha actual.
> Se propone desde la función *Planificar nuevas calibraciones<!-- Pianifica nuove tarature -->* igual a la *Fecha de calibración prevista<!-- Data taratura prevista -->* y luego puede modificarse.  
> **Instrumento de medición<!-- Strumento di misura -->**: es la referencia al *Instrumento de medición<!-- Strumento di misura -->* sujeto a la *Calibración<!-- Taratura -->*.  
>
> **Propiedades del instrumento<!-- Proprietà dello strumento -->**: expander donde es posible visualizar:  
>
>> **Propiedades del instrumento<!-- Proprietà dello strumento -->**: es el *Modelo<!-- Modello -->* del *Instrumento de medición<!-- Strumento di misura -->*.  
>> **Activo**: indica que el *Instrumento de medición<!-- Strumento di misura -->* aún está *activo*.  
>> **Clasificación<!-- Classificazione -->**: es la *Clasificación<!-- Classificazione -->*; ejemplos: Mecánico, Eléctrico, Electrónico, etc.  
>> **Unidad de medida<!-- Unità di misura -->**: es la *Unidad de medida<!-- Unità di misura -->* de los valores capturados por el *Instrumento de medición<!-- Strumento di misura -->*.  
>> **Rango de medición<!-- Intervallo di misura -->**: es el rango medible por el *Instrumento de medición<!-- Strumento di misura -->*.  
>> **Precisión<!-- Precisione -->**: es la *Precisión de medición<!-- Precisione di misura -->* mínima.  
>> **Límites<!-- Limiti -->**: son los *Límites de aceptabilidad<!-- Limiti di accettabilitò -->* del *Instrumento de medición<!-- Strumento di misura -->* para poder usarlo; ejemplos: eventuales límites de precisión, ambientes en que no usarlo, etc.  
>
> **Audit Trail**: expander de solo lectura donde son visibles la siguiente información:  
>
>> **Fecha de creación/Nombre<!-- Data creazione/Nome -->**: es la fecha y el *Usuario A.R.M.* que insertó la *Acción correctiva<!-- Azione correttiva -->*.  
>> **Fecha de última modificación/Nombre<!-- Data ultima modifica/Nome -->**: es la fecha y el *Usuario A.R.M.* que realizó la última modificación a la *Acción correctiva<!-- Azione correttiva -->*.  


### Valores relevados<!-- Valori rilevati -->
La pestaña es visible solo si el *Instrumento de medición<!-- Strumento di misura -->* está sujeto a *Calibración interna<!-- Taratura interna -->*.  
En esta lista es posible indicar los valores recolectados durante las actividades de *Calibración interna<!-- Taratura interna -->*.  
Si el *Instrumento de medición<!-- Strumento di misura -->* está *Activo*, está *Sujeto a calibración<!-- Soggetto a taratura -->* y si es de *Calibración interna<!-- Taratura interna -->* estos valores se heredan del registro maestro del *Instrumento de medición<!-- Strumento di misura -->*.  
Toda la información está deshabilitada con excepción de: *Dato relevado*, *Resultado*, *Observaciones* y *Notas*  
La lista se compone de la siguiente información:  
> **Secuencia<!-- Sequenza -->**: es la secuencia de relevamiento.  
> **Posición**: anotaciones libres sobre el tema.  
> **Rango de lectura<!-- Intervallo lettura -->**: anotaciones libres sobre el tema.  
> **Dato solicitado<!-- Dato richiesto -->**: es el valor nominal solicitado.  
> **Incertidumbre (-)<!-- Incertezza (-) -->**: es el valor de la incertidumbre negativa (expresada en porcentaje) que será aplicada al *Dato relevado<!-- Dato rilevato -->*.  
> **Incertidumbre (+)<!-- Incertezza (+) -->**: es el valor de la incertidumbre positiva (expresada en porcentaje) que será aplicada al *Dato relevado<!-- Dato rilevato -->*.  
> **Dato relevado<!-- Dato rilevato -->**: es el valor medido en la lectura del instrumento en la *posición* indicada.  
> **Desviación<!-- Scostamento -->**: es el valor calculado por la diferencia entre el *Dato relevado<!-- Dato rilevato -->* y el *Dato solicitado<!-- Dato richiesto -->*.  
Si la desviación es superior al *Dato solicitado<!-- Dato richiesto -->* sumado a la *Incertidumbre (±)<!-- Incertezza (±) -->* (aplicada en porcentaje) el *Resultado<!-- Esito -->* del relevamiento será negativo.  
A la primer valor negativo del *Resultado<!-- Esito -->* en la lista de *Valores relevados<!-- Valori rilevati -->* también el *Resultado<!-- Esito -->* global de la *Calibración<!-- Taratura -->* será negativo.  
> **Observaciones<!-- Osservazioni -->**: anotaciones libres sobre el tema.  
> **Notas<!-- Nota -->**: anotaciones libres.  


### Historial de Informes y Certificados de calibración<!-- Storico Rapporti e Certificati di taratura -->
En esta lista es posible visualizar el historial de las *Calibraciones<!-- Tarature -->* y de los *Certificados de calibración<!-- Certificati di taratura -->* planificados y realizados para el *Instrumento de medición<!-- Strumento di misura -->* asociado a la *Calibración<!-- Taratura -->* visualizada.  
Mediante doble clic del ratón sobre la fila deseada es posible gestionar la *Calibración<!-- Taratura -->* seleccionada.  
La lista se compone de la siguiente información:  
> **Tipo de calibración<!-- Tipo taratura -->**: es el código del *Tipo de calibración<!-- Tipo taratura -->*.  
> **Descripción tipo de calibración<!-- Descrizione tipo taratura -->**: es la descripción del *Tipo de calibración<!-- Tipo taratura -->*.  
> **Año<!-- Anno -->**: es el *Año<!-- Anno -->* del documento.  
> **Número<!-- Numero -->**: es el *Número<!-- Numero -->* del documento.  
> **Calibración interna<!-- Taratura interna -->**: indica si se ha emitido una *Calibración interna<!-- Taratura interna -->*.  
> **Programada<!-- Schedulata -->**: indica si el documento ha sido programado (planificado).  
> **Fecha prevista<!-- Data prevista -->**: es la fecha de calibración prevista.  
> **Fecha de calibración<!-- Data taratura -->**: es la fecha de calibración efectiva.  
> **Resultado<!-- Esito -->**: es el código del *Resultado<!-- Esito -->* de la calibración.  
> **Descripción del resultado<!-- Descrizione esito -->**: es la descripción del *Resultado<!-- Esito -->* de la calibración.  
> **Categoría<!-- Categoria -->**: es el código de la *Categoría de instrumento<!-- Categoria strumento -->*.  
> **Descripción de la categoría<!-- Descrizione categoria -->**: es la descripción de la *Categoría de instrumento<!-- Categoria strumento -->*.  
> **Código<!-- Codice -->**: es el código del *Instrumento de medición<!-- Strumento di misura -->*.  
> **Matrícula<!-- Matricola -->**: es la matrícula del *Instrumento de medición<!-- Strumento di misura -->*.  
> **Modelo<!-- Modello -->**: es el modelo del *Instrumento de medición<!-- Strumento di misura -->*.  
> **Laboratorio externo**: es la razón social del *Proveedor<!-- Fornitore -->* que realiza la calibración externa.  
> **Función<!-- Funzione -->**: es el código de la *Función empresarial<!-- Funziona aziendale -->* que realiza la calibración interna.  
> **Descripción de la función<!-- Descrizione funzione -->**: es la descripción de la *Función empresarial<!-- Funziona aziendale -->* que realiza la calibración interna.  
> **Código<!-- Codice -->**: es el código del *Empleado<!-- Dipendente -->* que realiza la calibración interna.  
> **Apellido<!-- Cognome -->**: es el apellido del *Empleado<!-- Dipendente -->* que realiza la calibración interna.  
> **Nombre<!-- Nome -->**: es el nombre del *Empleado<!-- Dipendente -->* que realiza la calibración interna.  


### Extra data
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Calibración de instrumento<!-- Taratura strumento -->*.  


### Imagen<!-- Immagine -->
Se muestra la imagen asociada en la gestión del *Instrumento de medición<!-- Strumento di misura -->*.  


Para todo lo no detallado en este documento respecto al funcionamiento común de los formularios consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).