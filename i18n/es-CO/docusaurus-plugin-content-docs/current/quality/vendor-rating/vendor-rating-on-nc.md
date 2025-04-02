---
title: valutazioni periodiche su non conformità
sidebar_position: 3
---

La gestión se encuentra en la ruta **Calidad > Evaluaciones de proveedor > valutazioni periodiche su non conformità (Qualità > Valutazioni fornitore > Valutazioni periodiche su Non conformità)**.

:::important ¿Para qué sirve? (A cosa serve)  
Las *valutazioni periodiche su non conformità* son uno de los métodos de evaluación de los proveedores que se ponen a disposición para su evaluación.  
Este método "objetivo" se basa en el peso de los defectos asignados a las *No conformidades de proveedor* y se utiliza habitualmente para las evaluaciones periódicas.  

La gestión permite insertar nuevas *valutazioni periodiche su non conformità* o buscar aquellas ya existentes para visualizarlas.  
:::

## Botones de comando (Pulsanti di comando)

### ![](/img/neutral/common/search.png) Buscar valutazioni periodiche su non conformità (Ricerca Valutazioni periodiche su Non conformità)

El formulario se compone de un área de filtro y de una de resultado. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.  

### ![](/img/neutral/common/accountant-search.png) Calificación periódica (Qualificazione periodica)

Para poder insertar nuevas *Evaluaciones iniciales y periódicas*, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **qualificazione periodica**.  

## Gestión de datos (Gestione dati)

### valutazioni periodiche su non conformità (Valutazioni periodiche su Non conformità)

Es la lista donde se visualizan las principales informaciones de la *Evaluación periódica sobre No conformidades*.  
La lista se compone de la siguiente información:  
> **da data valutazione**: es la fecha inicial del período de evaluación. La información es de solo lectura.  
> **a data valutazione**: es la fecha final del período de evaluación. La información es de solo lectura.  
> **fornitore**: es la razón social del *Proveedor* evaluado. La información es de solo lectura.  
> **bonus**: es el valor inicial de la *Bonificación* asociada al *Proveedor*. La información es de solo lectura.  
> **bonus residuo**: es el valor final de la *Bonificación* una vez realizada la evaluación. La información es de solo lectura.  
> **punteggio %**: es el valor porcentual entre *Bonificación residual* y *Bonificación inicial*. La información es de solo lectura.  
> **valutazione**: es la *Evaluación* dada al *Proveedor* en base al *Puntuación %* obtenida. La información es de solo lectura.  
> La celda se colorea con los colores de *fondo* y de *texto* previstos en la tabla de *Evaluaciones de proveedor*.  
> Si la *Evaluación* otorgada está asociada a una *Evaluación de proveedor* con *Suspensión automática*, el *Proveedor* evaluado será *Suspendido* desde la *Fecha de evaluación*.  
> La restauración de la suspensión debe hacerse manualmente por la *Función empresarial* correspondiente.  
> **note**: anotaciones libres.  

### Valores de No conformidades en el período (Valori Non conformità nel periodo)

Es la lista de las diferentes *Gravedad* encontradas en el período evaluado.  
La lista se compone de la siguiente información:  
> **gravità**: es el código de la *Gravedad*.  
> **descrizione gravità**: es la descripción de la *Gravedad*.  
> **conteggio**: es el número de *Gravidades* contabilizadas.  
> **punteggio gravità**: es el *Puntuación cálculo índice de calificación de proveedor* asociado a la *Gravedad*.  
> **totale punteggio calcolato**: es la suma de todos los *Puntuaciones cálculo índices de calificación de proveedor* (**IQF**) multiplicados entre sí.  

:::tip Método utilizado para el cálculo (Metodo utilizzato per il calcolo)  
*Método utilizado para el cálculo de:* **totale punteggio calcolato**, **bonus residuo**, **punteggio %** y **valutazione**.  
- Se considera cada fila *Defecto* de *No conformidad* ingresada en el período evaluado, y asignada al *Proveedor* en evaluación.  
- Para cada fila de *Defecto encontrado*, se multiplica cada *IQF* correspondiente: *Defecto encontrado*, *Causa efectiva* o *Causa presunta* (en ausencia de una *Causa efectiva* asociada), *Solución propuesta* y *Decisión tomada*. Si alguno de estos datos no se ingresa, el *IQF* es igual a **1,0**. Ejemplo:  
  - fila 1: *IQF Defecto encontrado* = **5,1**, *IQF Causa efectiva* = **1,5**, *IQF Solución propuesta* = **1,3** y *IQF Decisión tomada* = **2,1**;  
  el total fila es igual a: **5,1 * 1,5 * 1,3 * 2,1 = 20.8845** = *Total Fila 1*.  
  - fila 2: *IQF Defecto encontrado* = **2,1**, *IQF Causa presunta* = **4,2** (*Causa efectiva* no ingresada), *Solución propuesta* no ingresada, por lo que *IQF* = **1,0** y *IQF Decisión tomada* = **1,7**;  
  el total fila es igual a: **2,1 * 4,2 * 1,0 * 1,7 = 14,994** = *Total Fila 2*.  
- El Total de puntuación calculada por fila se suma a las otras filas consideradas que tienen la misma *Gravedad*. La suma de todas las puntuaciones por fila es el *Total de puntuación calculada* para esa *Gravedad*. Ejemplo:  
  - **Total de puntuación calculada** = *Total Fila 1* + *Total Fila 2* = **20,8845 + 14,994 = 35,8785**.  
- Para calcular la *Bonificación residual*, consideramos una *Bonificación* inicial del *Proveedor* igual a **500**. Entonces:  
    - **Bonificación residual** = **Bonificación** - suma de los **Totales de puntuaciones calculadas** para cada *Gravedad* = **500 - 35,8785 = 464,1215**.  
- Para calcular el *Puntuación %*, se aplica el porcentaje entre *Bonificación residual* y *Bonificación inicial*:  
    - **Bonificación residual** / **Bonificación** * 100 = **464,1215 / 500 * 100 = 92.8243%**.  
- La **Evaluación** se atribuye en base a los valores de *Puntuación desde* indicados en la lista *Intervalos de puntuación para la evaluación* presente en los *Parámetros de Calificación de proveedor*. Se considera la *Evaluación* con *Puntuación desde* inmediatamente inferior al **Puntuación %**.  
:::

### Datos extra (Extra data)

Es posible insertar [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Evaluación periódica sobre No conformidades*.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).