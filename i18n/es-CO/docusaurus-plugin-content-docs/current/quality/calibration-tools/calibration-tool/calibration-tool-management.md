---
title: taratura strumenti
sidebar_position: 2
---

La gestión se encuentra en la ruta **Calidad > taratura strumenti > taratura strumenti > Nueva calibración de instrumento** o se puede realizar desde la **Búsqueda de taratura strumenti**.

:::important ¿Para qué sirve? (A cosa serve)
En la gestión de taratura strumenti es posible registrar las Calibraciones internas y los Certificados de calibración.  
Si el instrumento está sujeto a calibración y la calibración es interna, es posible ingresar, para las posiciones previstas, los valores detectados. Fluentis asignará automáticamente un resultado positivo o negativo, para cada posición y en general.  
Si el instrumento está sujeto a calibración y la calibración es externa, es posible adjuntar el Certificado de calibración recibido del organismo tercero que realizó la calibración. En este caso, el resultado será atribuido manualmente por el operador.  
Las reportes estándar disponibles son: Registro de calibraciones de instrumentos agrupadas por: Informe, Instrumento y Operador.  

Las reportes estándar disponibles son:  
> **Registro de Calibración de Instrumentos**: lista de *Calibraciones de instrumentos* agrupables por: *Informe*, *Instrumento* y *effettuata da*.   
:::

## Botones de comando (Pulsanti di comando)


### Guardar (Salva)

Al presionar este botón se almacenan toda la información modificada de la *Calibración de instrumento* mostrada.


## Gestión de datos (Gestione dati)


### Datos de encabezado (Dati di testata)

Las informaciones gestionadas son:  
> **tipo taratura**: es el *Tipo de calibración* (dato obligatorio).  
> Al ingresar manualmente una nueva *Calibración*, se propone el *Tipo de calibración manual* indicado en los *Parámetros de taratura strumenti*.  
>
> **Año/Número (Anno/Numero)**: son el *Año* y el *Número* de la *Calibración de instrumento* (ambos datos son obligatorios).  
> Al ingresar una nueva *Calibración de instrumento*:  
> - la *Fecha de calibración efectiva* se propone igual a la fecha actual;  
> - el *Año* y el *Número* se proponen en función de la *Fecha de calibración efectiva* y de la *Numeración* asociada al *Tipo de calibración*.  
>
> **taratura effettuata da**: expander donde es posible ingresar:  
>
>> **taratura interna**: indica que el *Instrumento de medida* es calibrado por un sujeto interno a la empresa.  
>> **laboratorio esterno**: es la razón social del *Proveedor* que realiza la calibración externa.  
>> **funzione**: es la *Función empresarial* que realiza la calibración interna.  
>> **dipendente**: es el *Empleado* que realiza la calibración interna.  
>
> **schedulata**: indica que la *Calibración de instrumento* ha sido planificada.  
> **esito taratura**: es el *Resultado* general de la calibración.  
> Se calcula automáticamente, en base a los *Resultados* de los *Valores detectados*, si es una *Calibración interna*.  
> Se atribuye manualmente si es una *Calibración externa*.  
> **osservazioni**: anotaciones libres sobre el tema.  
> **note**: anotaciones libres.  
>
> **Fecha de calibración prevista (Data taratura prevista)**: es la fecha de calibración prevista.  
> Se propone desde la *Planificación de nuevas calibraciones* y no es modificable.  
> **Fecha de calibración efectiva (Data taratura effettiva)**: es la fecha de la calibración efectiva.  
> Al ingresar manualmente una nueva calibración, se propone igual a la fecha actual.  
> Se propone desde la *Planificación de nuevas calibraciones* igual a la *Fecha de calibración prevista* y es posteriormente modificable.  
> **strumento di misura**: es la referencia al *Instrumento de medida* sujeto a la *Calibración*.  
>
> **proprietà dello strumento**: expander donde es posible visualizar:  
>
>> **proprietà dello strumento**: es el *Modelo* del *Instrumento de medida*.  
>> **attivo**: indica que el *Instrumento de medida* sigue siendo *activo*.  
>> **classificazione**: es la *Clasificación*; ejemplos: Mecánico, Eléctrico, Electrónico, etc.  
>> **unità di misura**: es la *Unidad de medida* de los valores detectados por el *Instrumento de medida*.  
>> **Rango de medida (Intervallo di misura)**: es el rango medible por el *Instrumento de medida*.  
>> **precisione**: es la *Precisión de medida* mínima.  
>> **limiti**: son los *Límites de aceptabilidad* del *Instrumento de medida* para poder utilizarlo; ejemplos: eventuales límites de precisión, entornos donde no utilizarlo, etc.  
>
> **audit trail**: expander de solo lectura donde son visibles las siguientes informaciones:  
>
>> **Fecha de creación/Nombre (Data creazione/Nome)**: es la fecha y el *Usuario A.R.M.* que ha ingresado la *Acción correctiva*.  
>> **Fecha de última modificación/Nombre (Data ultima modifica/Nome)**: es la fecha y el *Usuario A.R.M.* que ha realizado la última modificación a la *Acción correctiva*.


### Valores detectados (Valori rilevati)
La pestaña es visible solo si el *Instrumento de medida* está sujeto a *Calibración interna*.  
En esta lista es posible indicar los valores que se deben registrar durante las actividades de *Calibración interna*.  
Si el *Instrumento de medida* está *Activo*, es *Sujeto a calibración* y es de *Calibración interna*, estos valores se heredan de la base de datos del *Instrumento de medida*.  
Toda la información está deshabilitada, excepto: *dato rilevato*, *esito*, *osservazioni* y *nota*.  
La lista se compone de la siguiente información:  
> **sequenza**: es la secuencia de medición.  
> **posizione**: anotaciones libres sobre el tema.  
> **intervallo lettura**: anotaciones libres sobre el tema.  
> **dato richiesto**: es el valor nominal requerido.  
> **Incertidumbre (-) (Incertezza (-))**: es el valor de la incertidumbre negativa (expresada en porcentaje) que se aplicará al *Valor detectado*.  
> **Incertidumbre (+) (Incertezza (+))**: es el valor de la incertidumbre positiva (expresada en porcentaje) que se aplicará al *Valor detectado*.  
> **dato rilevato**: es el valor detectado a partir de la lectura del instrumento en la *posición* indicada.  
> **scostamento**: es el valor calculado a partir de la diferencia entre el *Valor detectado* y el *Valor requerido*.  
> Si la desviación es superior al *Valor requerido* sumado a la *Incertidumbre (±)* (aplicación en porcentaje), el *Resultado* de la medición será negativo.  
> Con el primer valor negativo del *Resultado* en la lista de *Valores detectados*, también el *Resultado* general de la *Calibración* será negativo.  
> **osservazioni**: anotaciones libres sobre el tema.  
> **nota**: anotaciones libres.


### Historial de Informes y Certificados de calibración (Storico Rapporti e Certificati di taratura)
En esta lista es posible visualizar el historial de las *Calibraciones* y los *Certificados de calibración* planificados y realizados para el *Instrumento de medida* asociado a la *Calibración* mostrada.  
Mediante un doble clic del mouse en la fila deseada se puede realizar la gestión de la *Calibración* seleccionada.  
La lista se compone de la siguiente información:  
> **tipo taratura**: es el código del *Tipo de calibración*.  
> **descrizione tipo taratura**: es la descripción del *Tipo de calibración*.  
> **anno**: es el *Año* del documento.  
> **numero**: es el *Número* del documento.  
> **taratura interna**: indica si se ha emitido una *Calibración interna*.  
> **schedulata**: indica si el documento ha sido programado (planificado).  
> **data prevista**: es la fecha de calibración prevista.  
> **data taratura**: es la fecha de calibración efectiva.  
> **esito**: es el código del *Resultado* de la calibración.  
> **descrizione esito**: es la descripción del *Resultado* de la calibración.  
> **categoria**: es el código de la *Categoría de instrumento*.  
> **descrizione categoria**: es la descripción de la *Categoría de instrumento*.  
> **codice**: es el código del *Instrumento de medida*.  
> **matricola**: es el número de serie del *Instrumento de medida*.  
> **modello**: es el modelo del *Instrumento de medida*.  
> **laboratorio esterno**: es la razón social del *Proveedor* que realiza la calibración externa.  
> **funzione**: es el código de la *Función empresarial* que realiza la calibración interna.  
> **descrizione funzione**: es la descripción de la *Función empresarial* que realiza la calibración interna.  
> **codice**: es el código del *Empleado* que realiza la calibración interna.  
> **cognome**: es el apellido del *Empleado* que realiza la calibración interna.  
> **nome**: es el nombre del *Empleado* que realiza la calibración interna.


### Datos adicionales (Extra data)
Es posible ingresar [Datos Adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Calibración de instrumento*.


### Imagen (Immagine)
Se muestra la imagen asociada en la gestión del *Instrumento de medida*.


Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).