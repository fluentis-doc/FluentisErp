---
title: Evaluaciones iniciales y periódicas
sidebar_position: 2
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > Evaluaciones de proveedor > Evaluaciones iniciales y periódicas<!-- Qualità > Valutazioni fornitore > Valutazioni iniziali e periodiche -->**


:::important ¿Para qué sirve<!-- A cosa serve -->
Las *Evaluaciones iniciales y periódicas<!-- Valutazioni iniziali e periodiche -->* son uno de los métodos de evaluación de proveedores<!-- fornitori --> que se ponen a disposición para la evaluación de los mismos.
Este método "subjetivo" es manual y se utiliza habitualmente para las primeras evaluaciones y las evaluaciones posteriores.

La gestión permite insertar nuevas *Evaluaciones iniciales y periódicas<!-- Valutazioni iniziali e periodiche -->* o buscar las ya existentes para visualizarlas, modificarlas o eliminarlas.
:::


## Botones de comando<!-- Pulsanti di comando -->


### ![](/img/neutral/common/search.png) Buscar Evaluaciones iniciales y periódicas<!-- Ricerca Valutazioni iniziali e periodiche -->

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados dentro de la cuadrícula de resultados.


### ![](/img/neutral/common/new.png) Insertar Evaluaciones iniciales y periódicas<!-- Inserimento Valutazioni iniziali e periodiche -->

Para poder ingresar nuevas *Evaluaciones iniciales y periódicas<!-- Valutazioni iniziali e periodiche -->* es necesario hacer clic en la cuadrícula en la primera fila vacía o bien presionar el botón **Nuevo<!-- Nuovo -->**.
Para el nuevo registro se deben ingresar al menos los campos obligatorios requeridos por el programa: La **Fecha de evaluación<!-- Data valutazione -->**, el **Proveedor<!-- Fornitore -->** y el **Tipo de evaluación<!-- Tipo valutazione -->**.


### ![](/img/neutral/common/select-all.png) Asociar Checklist<!-- Associa Check-list -->

Este botón solo está habilitado si se selecciona una sola *Evaluación inicial y periódica<!-- Valutazione iniziale e periodica -->* y el *Proveedor<!-- Fornitore -->* aún no ha sido evaluado.
Se muestra la *Ayuda de Checklists<!-- Help delle Check-list -->* desde donde es posible seleccionar solo una.
Si ya existe una *Checklist<!-- Check-list -->* asociada a la fila, se solicita si se desea sustituir la existente (y sus *Preguntas<!-- Domande -->*) por la nueva *Checklist<!-- Check-list -->* seleccionada.


## Gestión de datos<!-- Gestione dati -->


### Evaluaciones iniciales y periódicas<!-- Valutazioni iniziali e periodiche -->

Es el listado donde se ingresan los datos principales de la *Evaluación inicial y periódica<!-- Valutazione iniziale e periodica -->*.
El listado se compone de la siguiente información:
> **Fecha de evaluación<!-- Data valutazione -->**: (dato obligatorio) es la fecha en la que se realiza la evaluación.
> Al insertar una nueva evaluación se propone automáticamente la fecha actual.
>
> **Proveedor<!-- Fornitore -->**: (dato obligatorio) es la razón social del *Proveedor<!-- Fornitore -->* evaluado.
>
> **Tipo de evaluación<!-- Tipo valutazione -->**: (dato obligatorio) es el código del *Tipo de evaluación<!-- Tipo valutazione -->*.
> Al ingresar una nueva evaluación se propone el *Tipo de evaluación<!-- Tipo valutazione -->* indicado en los *Parámetros de calificación de proveedores<!-- Parametri qualificazione fornitore -->*.
>
> **Checklist<!-- Check-list -->**: es el código de la *Checklist<!-- Check-list -->*.
> Al ingresar un *Proveedor<!-- Fornitore -->* se propone automáticamente la *Checklist<!-- Check-list -->* presente en sus *Datos contables > Datos de calidad<!-- Dati contabili > Dati qualità -->* y sus respectivas *Preguntas<!-- Domande -->*.
> Modificar una *Checklist<!-- Check-list -->* implica sustituir las *Descripciones/Preguntas<!-- Descrizioni/Domande -->* presentes previa confirmación.
>
> **Inspector<!-- Ispettore -->**: es el código del *Inspector<!-- Ispettore -->* que realiza la evaluación.
>
> **Motivo de evaluación<!-- Motivo valutazione -->**: anotaciones libres sobre el tema, es una descripción del motivo de la evaluación.
>
> **Evaluación<!-- Valutazione -->**: es la *Evaluación<!-- Valutazione -->* dada al *Proveedor<!-- Fornitore -->* por el *Inspector<!-- Ispettore -->*.
> La celda se colorea con los colores de *fondo* y *texto* previstos en la tabla de *Evaluaciones de proveedores<!-- Valutazioni fornitore -->*.
> Si la *Evaluación<!-- Valutazione -->* asignada está asociada a una *Evaluación de proveedor<!-- Valutazione fornitore -->* con *Suspensión automática*, el *Proveedor<!-- Fornitore -->* evaluado será *Suspendido* desde la *Fecha de evaluación<!-- Data valutazione -->*.
> La restauración de la suspensión debe realizarse manualmente desde la *Función de la empresa<!-- Funzione aziendale -->* correspondiente.
> Una vez asociada una *Evaluación<!-- Valutazione -->*, la información de: *Fecha de evaluación<!-- Data valutazione -->*, *Proveedor<!-- Fornitore -->* y *Tipo de evaluación<!-- Tipo valutazione -->* ya no serán modificables.
>
> **Descripción del tipo de evaluación<!-- Descrizione tipo valutazione -->**: es la descripción del *Tipo de evaluación<!-- Tipo valutazione -->*.
> **Descripción de la checklist<!-- Descrizione check-list -->**: es la descripción de la *Checklist<!-- Check-list -->*.
> **Descripción del inspector<!-- Descrizione ispettore -->**: es la descripción del *Inspector<!-- Ispettore -->*.
> **Notas<!-- Note -->**: anotaciones libres.


### Descripciones/Preguntas<!-- Descrizioni/Domande -->

Es el listado de preguntas/actividades a utilizar/realizar para las evaluaciones de proveedores<!-- fornitori -->.
El listado se compone de la siguiente información:
> **Secuencia<!-- Sequenza -->**: es el orden de las *preguntas/actividades<!-- domande/attività -->*.
> **Descripción/Pregunta<!-- Descrizione/Domanda -->**: anotaciones libres sobre el tema.
> **Respuesta<!-- Risposta -->**: anotaciones libres sobre el tema.
> **Categoría<!-- Categoria -->**: es la *Categoría<!-- Categoria -->* asociada a la *Descripción/Pregunta<!-- Descrizione/Domanda -->* si proviene de la *Checklist<!-- Check-list -->*.
> **Evaluación esperada<!-- Valutazione attesa -->**: es el *Nivel de evaluación<!-- Livello di valutazione -->* mínimo requerido.
> **Peso (%)<!-- Peso (%) -->**: indica el *peso* (importancia) expresado en porcentaje asociado a la *Descripción/Pregunta<!-- Descrizione/Domanda -->* si proviene de la *Checklist<!-- Check-list -->*.
> **Evaluación detectada<!-- Valutazione rilevata -->**: es el *Nivel de evaluación<!-- Livello di valutazione -->* evaluado.
> El carácter se vuelve *Rojo<!-- Rosso -->* si la *Evaluación detectada<!-- Valutazione rilevata -->* es inferior a la *Evaluación esperada<!-- Valutazione attesa -->*.
> **Puntaje Peso<!-- Punteggio Peso -->**: es el *Puntaje<!-- Punteggio -->* asignado automáticamente por el sistema a la evaluación dada a la *Descripción/Pregunta<!-- Descrizione/Domanda -->* específica en base al *Nivel<!-- Livello -->* de la *Evaluación detectada<!-- Valutazione rilevata -->*;
> este puntaje se calcula (Puntaje Peso" = EvaluationLevelDetected.Level / 100 * CheckListQuestion.WeightPercentage).
> **Notas<!-- Note -->**: anotaciones libres.


:::tip Método utilizado para el cálculo del Puntaje Peso<!-- Metodo utilizzato per il calcolo del Punteggio Peso -->
Para cada *Descripción/Pregunta<!-- Descrizione/Domanda -->*, donde se han ingresado los datos de: *Peso (%)<!-- Peso (%) -->* y *Evaluación detectada<!-- Valutazione rilevata -->* se aplica la siguiente expresión:
- **Puntaje Peso<!-- Punteggio Peso -->** = **Nivel<!-- Livello -->** de la **Evaluación detectada<!-- Valutazione rilevata -->** / **100** * **Peso (%)<!-- Peso (%) -->**;
- **Puntaje Peso<!-- Punteggio Peso -->** = **15** / **100** * **20** = **3**.
:::


### Extra data

Es posible ingresar [Datos adicionales<!-- Extra Data -->](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Evaluación inicial y periódica<!-- Valutazione iniziale e periodica -->*.


Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidad, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).