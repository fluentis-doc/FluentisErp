---
title: Evaluaciones periódicas sobre No conformidades
sidebar_position: 3
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > Evaluaciones de proveedor > Evaluaciones periódicas sobre No conformidades<!-- Non conformità -->**.

:::important ¿Para qué sirve?<!-- A cosa serve -->
Las *Evaluaciones periódicas sobre No conformidades<!-- Valutazioni periodiche su Non conformità -->* son uno de los métodos de evaluación de proveedores<!-- fornitori --> que están disponibles para su valoración.  
Este método "objetivo" se basa en el peso de las deficiencias asignadas a las *No conformidades al proveedor<!-- Non conformità a fornitore -->* y se utiliza habitualmente para las evaluaciones periódicas.

La gestión permite insertar nuevas *Evaluaciones periódicas sobre No conformidades<!-- Valutazioni periodiche su Non conformità -->* o buscar las ya existentes para visualizarlas.
:::

## Botones de comando<!-- Pulsanti di comando -->

### ![](/img/neutral/common/search.png) Búsqueda Evaluaciones periódicas sobre No conformidades<!-- Ricerca Valutazioni periodiche su Non conformità -->

El formulario se compone de un área de filtro y otra de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.

### ![](/img/neutral/common/accountant-search.png) Calificación periódica<!-- Qualificazione periodica -->

Para realizar la evaluación es necesario pulsar el botón **Calificación periódica<!-- Qualificazione periodica -->**.  
Aparecerá una solicitud de:
> **Fecha de finalización de la evaluación<!-- Data fine valutazione -->**: propuesta en la fecha actual, es la fecha desde la cual evaluar cada *Proveedor<!-- Fornitore -->*, yendo hacia el pasado, para el período asignado.  
> **Tipo de evaluación<!-- Tipo valutazione -->**: es el tipo atribuido a la evaluación de cada *Proveedor<!-- Fornitore -->*.  
> Se propone el *Tipo de evaluación<!-- Tipo valutazione -->* indicado en los *Parámetros de calificación de proveedor<!-- Parametri qualificazione fornitore -->*.
Ambos campos son obligatorios.

## Gestión de datos<!-- Gestione dati -->

### Evaluaciones periódicas sobre No conformidades<!-- Valutazioni periodiche su Non conformità -->

Es el listado donde se visualizan las informaciones principales de la *Evaluación periódica sobre No conformidades<!-- Valutazione periodiche su Non conformità -->*.  
El listado se compone de la siguiente información:  
> **Desde fecha de evaluación<!-- Da data valutazione -->**: es la fecha inicial del período de evaluación.  
> **Hasta fecha de evaluación<!-- A data valutazione -->**: es la fecha final del período de evaluación.  
> **Proveedor<!-- Fornitore -->**: es la razón social del *Proveedor<!-- Fornitore -->* evaluado.  
> **Bono<!-- Bonus -->**: es el valor inicial del *Bono<!-- Bonus -->* asociado al *Proveedor<!-- Fornitore -->*.  
> **Bono residual<!-- Bonus residuo -->**: es el valor final del *Bono<!-- Bonus -->* una vez realizada la evaluación.  
> **Puntaje %<!-- Punteggio % -->**: es el valor porcentual entre *Bono residual<!-- Bonus residuo -->* y *Bono inicial<!-- Bonus iniziale -->*.  
> **Evaluación<!-- Valutazione -->**: es la *Evaluación<!-- Valutazione -->* dada al *Proveedor<!-- Fornitore -->* en base al *Puntaje %<!-- Punteggio % -->* obtenido.  
> La celda se colorea con los colores de *fondo* y de *texto* previstos en la tabla de *Evaluaciones de proveedor<!-- Valutazioni fornitore -->*.  
> Si la *Evaluación<!-- Valutazione -->* atribuida está asociada a una *Evaluación de proveedor<!-- Valutazione fornitore -->* con *Suspensión automática<!-- Sospensione automatica -->*, el *Proveedor<!-- Fornitore -->* evaluado será *Suspendido<!-- Sospeso -->* desde la *Fecha de evaluación<!-- Data valutazione -->*.
> La reactivación de la suspensión debe hacerse manualmente desde la *Función empresarial<!-- Funzione aziendale -->* correspondiente.  
> **Notas<!-- Note -->**: anotaciones libres.  
Toda la información es de sólo lectura, excepto las Notas.

### Valores de No conformidad en el período<!-- Valori Non conformità nel periodo -->

Es el listado de las diferentes *Gravedades<!-- Gravità -->* detectadas durante el periodo evaluado.  
El listado se compone de la siguiente información:  
> **Gravedad<!-- Gravità -->**: es el código de la *Gravedad<!-- Gravità -->*.  
> **Descripción de gravedad<!-- Descrizione gravità -->**: es la descripción de la *Gravedad<!-- Gravità -->*.  
> **Conteo<!-- Conteggio -->**: es el número de *Gravedades<!-- Gravità -->* contabilizadas.  
> **Puntaje de gravedad<!-- Punteggio gravità -->**: es el *Puntaje para el cálculo del índice de calificación de proveedor<!-- Punteggio calcolo indice di qualificazione fornitore -->* asociado a la *Gravedad<!-- Gravità -->*.  
> **Total puntaje calculado<!-- Totale punteggio calcolato -->**: es la suma de todos los *Puntajes para el cálculo de índices de calificación de proveedor<!-- Punteggi calcolo indici di qualificazione fornitore -->* (**IQF**) y multiplicados entre sí.

### Extra data

Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Evaluación periódica sobre No conformidades<!-- Valutazione periodiche su Non conformità -->*.

:::tip Método utilizado para el cálculo<!-- Metodo utilizzato per il calcolo -->
*Método utilizado para el cálculo de:* **Total puntaje calculado<!-- Totale punteggio calcolato -->**, **Bono residual<!-- Bonus residuo -->**, **Puntaje %<!-- Punteggio % -->** y **Evaluación<!-- Valutazione -->**.  
- Se considera cada fila individual de *Defecto<!-- Difetto -->* de *No conformidad<!-- Non conformità -->* insertada en el periodo evaluado y atribuida al *Proveedor<!-- Fornitore -->* en evaluación.  
- Para cada fila de *Defecto detectado<!-- Difetto riscontrato -->* se multiplica cada uno de los *IQF* individuales de: *Defecto detectado<!-- Difetto riscontrato -->*, *Causa efectiva<!-- Causa effettiva -->* o *Causa presunta<!-- Causa presunta -->* (en ausencia de una *Causa efectiva<!-- Causa effettiva -->* asociada), *Solución propuesta<!-- Soluzione proposta -->* y *Decisión adoptada<!-- Decisione intrapresa -->*. Si uno de estos datos no se ingresa, el *IQF* es igual a **1,0**. Ejemplo:  
  - fila 1: *IQF Defecto detectado<!-- IQF Difetto riscontrato -->* = **5,1**, *IQF Causa efectiva<!-- IQF Causa effettiva -->* = **1,5**, *IQF Solución propuesta<!-- IQF Soluzione proposta -->* = **1,3** y *IQF Decisión adoptada<!-- IQF Decisione intrapresa -->* = **2,1**;  
  el total de la fila es igual a: **5,1 * 1,5 * 1,3 * 2,1 = 20,8845** = *Total Fila 1<!-- Totale Riga 1 -->*.  
  - fila 2: *IQF Defecto detectado<!-- IQF Difetto riscontrato -->* = **2,1**, *IQF Causa presunta<!-- IQF Causa presunta -->* = **4,2** (*Causa efectiva<!-- Causa effettiva -->* no ingresada), *Solución propuesta<!-- Soluzione proposta -->* no ingresada, por lo tanto *IQF* = **1,0** y *IQF Decisión adoptada<!-- IQF Decisione intrapresa -->* = **1,7**;  
  el total de la fila es igual a: **2,1 * 4,2 * 1,0 * 1,7 = 14,994** = *Total Fila 2<!-- Totale Riga 2 -->*.  
- El Total puntaje calculado<!-- Totale punteggio calcolato --> por cada fila se suma con las otras filas consideradas que tienen la misma *Gravedad<!-- Gravità -->*. La suma de todos los puntajes por fila es el *Total puntaje calculado<!-- Totale punteggio calcolato -->* para esa *Gravedad<!-- Gravità -->*. Ejemplo:  
  - **Total puntaje calculado<!-- Totale punteggio calcolato -->** = *Total Fila 1<!-- Totale Riga 1 -->* + *Total Fila 2<!-- Totale Riga 2 -->* = **20,8845 + 14,994 = 35,8785**.  
- Para calcular el *Bono residual<!-- Bonus residuo -->*, consideramos un *Bono<!-- Bonus -->* inicial del *Proveedor<!-- Fornitore -->* igual a **500**. Entonces:  
    - **Bono residual<!-- Bonus residuo -->** = **Bono<!-- Bonus -->** - suma de los **Totales de puntaje calculado<!-- Totale punteggi calcolati -->** para cada *Gravedad<!-- Gravità -->* = **500 - 35,8785 = 464,1215**.  
- Para calcular el *Puntaje %<!-- Punteggio % -->* se aplica el porcentaje entre *Bono residual<!-- Bonus residuo -->* y *Bono inicial<!-- Bonus iniziale -->*:  
    - **Bono residual<!-- Bonus residuo -->** / **Bono<!-- Bonus -->** * 100 = **464,1215 / 500 * 100 = 92,8243%**.  
- La **Evaluación<!-- Valutazione -->** se asigna en base a los valores de *Puntaje desde<!-- Punteggio da -->* indicados en la lista *Intervalos de puntaje para la evaluación<!-- Intervalli di punteggio per la valutazione -->* presente en los *Parámetros de calificación de proveedor<!-- Parametri Qualificazione fornitore -->*. Se considera la *Evaluación<!-- Valutazione -->* con *Puntaje desde<!-- Punteggio da -->* inmediatamente inferior al **Puntaje %<!-- Punteggio % -->**.
:::

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidad, botones y campos comunes](/docs/guide/common).