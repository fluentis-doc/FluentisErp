---
title: classi articolo
sidebar_position: 12
---

:::important ¿Para qué sirve? (A cosa serve)  
La Clase de Artículo en Fluentis es un elemento crucial para la gestión eficiente de los artículos. Permite agrupar artículos homogéneos, facilitando así su trazabilidad y permitiendo análisis detallados.  
Cada artículo se identifica de manera única gracias a la combinación entre la Clase (un dato precodificado) y un Código alfanumérico. En algunos casos, la clase de artículo puede configurarse para generar automáticamente tanto el código como la descripción de los artículos pertenecientes a esa clase, facilitando así los procesos de codificación.  
Además, es posible gestionar las clases de artículo, personalizándolas según las necesidades operativas. Este enfoque garantiza una mayor eficiencia en la clasificación y gestión de los productos.    
:::

La tabla se encuentra en la ruta **Tablas > Logística > classi articolo**.  

La tabla permite gestionar la codificación de las diferentes clases de artículo para poder realizar el agrupamiento de los artículos.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de classi articolo (Ricerca Classi articolo)**

El formulario se compone de un área de filtro y de una de resultados. Una vez que se hayan establecido todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados en la cuadrícula de resultados.

**Inserción de classi articolo (Inserimento Classi articolo)**

Para poder insertar nuevas codificaciones, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.

#### Campos específicos 

> **codice**: indica el código de la clase de artículos;  
> **descrizione**: indica la descripción de la clase de artículos;  
> **cambiamento classe**: si está activo, permite modificar la clase de artículo de un artículo ya movido;   
> **famiglia prodotti**: indica el código de la familia de productos que incluye la clase de artículo;   
> **descrizione famiglia prodotti**: indica la descripción de la familia de productos que incluye la clase de artículo.  

*Nueva parte de la forma a la derecha contiene tres pestañas adicionales:*

- **codificatore articolo**: permite guiar al operador en la codificación de un nuevo artículo para esa clase de artículo; será posible definir reglas de codificación utilizando los siguientes campos:  
> **ordinamento**: indica el orden del componente individual de la codificación;  
> **tipo**: indica el tipo de dato a utilizar en la codificación;  
> **ExtraData**: indica el código de dato extra utilizado en la codificación;   
> **utilizza in codice**: si está activo, este elemento se utilizará en el código del artículo;  
> **utilizza in descrizione**: si está activo, este elemento se utilizará en la descripción del artículo;  
> **proprietà codice**: indica la propiedad del objeto de negocio;  
> **descrizione proprietà**: indica la descripción de la propiedad del objeto de negocio;  
> **lunghezza**: indica la longitud del componente del código;  
> **separatore**: indica el carácter a utilizar como separador;  
> **char riempimento progressivo**: indica el carácter a utilizar como relleno del progresivo;  
> **valore iniziale progressivo**: indica el valor inicial del progresivo de la codificación;  
> **valore fisso**: indica el valor fijo a insertar en la codificación;  
> **propagazione**: indica que está activa la propagación del dato;  
> **obbligatorio**: indica que el dato es obligatorio.   

- **extra data**: permite gestionar los datos extra relacionados con esa clase de artículo;  
*En cuanto a las funcionalidades presentes en los Datos Extra, se hace referencia al artículo sobre Datos Extra (Extradata).*

- **descrizione in lingua**: permite insertar la traducción de la descripción de la clase de artículo en un nuevo idioma.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).