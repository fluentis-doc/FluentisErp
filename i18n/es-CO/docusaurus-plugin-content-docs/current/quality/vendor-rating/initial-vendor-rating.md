---
title: valutazioni iniziali e periodiche
sidebar_position: 2
---

La gestión se encuentra en la ruta **Calidad > Evaluaciones de proveedores > valutazioni iniziali e periodiche** 

:::important ¿Para qué sirve? (A cosa serve)
Las *valutazioni iniziali e periodiche* son uno de los métodos de evaluación de los proveedores que se ponen a disposición para su valoración.  
Este método "subjetivo" es manual y se utiliza habitualmente para las primeras evaluaciones y evaluaciones posteriores.  

La gestión permite insertar nuevas *valutazioni iniziali e periodiche* o buscar las ya existentes para visualizarlas, modificarlas o eliminarlas.  
:::


## Botones de comando

### ![](/img/neutral/common/search.png) Buscar valutazioni iniziali e periodiche (Ricerca Valutazioni iniziali e periodiche)

El formulario se compone de una área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

### ![](/img/neutral/common/new.png) Ingreso de valutazioni iniziali e periodiche (Inserimento Valutazioni iniziali e periodiche)

Para poder insertar nuevas *valutazioni iniziali e periodiche*, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: **data valutazione**, **fornitore** y **tipo valutazione**.

### ![](/img/neutral/common/select-all.png) Asociar Check-list (Associa Check-list)

Botón habilitado únicamente si se selecciona una sola *Evaluación inicial y periódica* y el *Proveedor* no ha sido evaluado previamente.  
Se muestra la *Ayuda de las Check-lists* de la cual es posible seleccionar solo una.  
Si ya existe una *Check-list* asociada a la línea, se pedirá confirmar si se desea reemplazar la existente (y las *Preguntas* relacionadas) con la nueva *Check-list* seleccionada.

## Gestión de datos

### valutazioni iniziali e periodiche (Valutazioni iniziali e periodiche)

Es la lista donde se ingresan las principales informaciones de la *Evaluación inicial y periódica*.  
La lista se compone de la siguiente información:  
> **data valutazione**: (dato obligatorio) es la fecha en la que se realiza la evaluación.  
> Al ingresar una nueva evaluación, se propone automáticamente la fecha actual.  
>
> **fornitore**: (dato obligatorio) es la razón social del *Proveedor* que se está evaluando.  
>
> **tipo valutazione**: (dato obligatorio) es el código del *Tipo de evaluación*.  
> Al ingresar una nueva evaluación, se propone el *Tipo de evaluación* indicado en los *parametri qualificazione fornitore*.  
>
> **Check-list**: es el código de la *Check-list*.  
> Al ingresar un *Proveedor*, se propone automáticamente la *Check-list* presente en sus *Datos contables > Datos de calidad (Dati contabili > Dati qualità)* y las correspondientes *Preguntas*.  
> La modificación de una *Check-list* implica la sustitución de las *Descripciones/Preguntas* presentes, previo aviso.  
>
> **ispettore**: es el código del *Inspector* que realiza la evaluación.  
>
> **motivo valutazione**: anotaciones libres sobre el tema, es una descripción de la motivación de la evaluación.  
>
> **valutazione**: es la *Evaluación* dada al *Proveedor* por el *Inspector*.  
> La celda se colorea con los colores de *fondo* y de *texto* previstos en la tabla de *Evaluaciones de proveedores*.  
> Si la *Evaluación* atribuida está asociada a una *Evaluación de proveedor* con *Suspensión automática*, el *Proveedor* evaluado será *Suspendido* desde la *Fecha de evaluación*.  
> La restauración de la suspensión debe hacerse manualmente por la *Función organizativa* designada.  
> Una vez asociada una *Evaluación*, la información de *data valutazione*, *fornitore* y *tipo valutazione* no se podrá modificar más.  
>
> **descrizione tipo valutazione**: es la descripción del *Tipo de evaluación*.  
> **Descripción de la check-list (Descrizione check-list)**: es la descripción de la *Check-list*.  
> **descrizione ispettore**: es la descripción del *Inspector*.  
> **note**: anotaciones libres.  

### Descripciones/Preguntas (Descrizioni/Domande)

Es la lista de preguntas/actividades a utilizar/realizar para las evaluaciones a proveedores.  
La lista se compone de la siguiente información:  
> **sequenza**: es la secuencia de ejecución de las *preguntas/actividades*.  
> **descrizione/domanda**: anotaciones libres sobre el tema.  
> **risposta**: anotaciones libres sobre el tema.  
> **valutazione attesa**: es el *Nivel de evaluación* mínimo requerido para la evaluación.  
> **valutazione rilevata**: es el *Nivel de evaluación* evaluado.  
> El carácter se vuelve *Rojo* si la *Evaluación detectada* es inferior a la *Evaluación esperada*.  
> **note**: anotaciones libres.

### Datos adicionales (Extra data)

Es posible ingresar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/search-extradata) generales para la *Evaluación inicial y periódica*.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, puede referirse al siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).