---
title: ubicazioni
sidebar_position: 1
---

:::important ¿Para qué sirve? (A cosa serve)
La gestión de las ubicaciones en Fluentis es un elemento crucial para la optimización de las operaciones de almacén. Este módulo permite a los usuarios estructurar las ubicaciones de almacenamiento dentro de los almacenes según un esquema jerárquico, fácilmente modificable para adaptarse a las necesidades empresariales. Cada ubicación puede definirse en función de varios parámetros, incluidos el tipo de ubicación (por ejemplo, área, estante, estantería, sección) y sus características físicas, como ancho, altura y capacidad de carga.

Gracias a la creación de un árbol de ubicaciones, los operadores pueden insertar nuevas ramificaciones y visualizar el contenido de cada ubicación, con detalles sobre los artículos y las cantidades en existencia. La sección de atributos de la ubicación permite además una personalización, permitiendo definir requisitos específicos para las ubicaciones individuales.

Esta gestión eficiente de las ubicaciones no solo mejora el control de existencias, sino que también apoya la logística operativa, contribuyendo a una gestión más ágil y efectiva de los inventarios dentro de la empresa.
:::

El formulario permite al operador crear y gestionar el árbol de ubicaciones de almacén.

A través de los filtros, es posible realizar una búsqueda específica según los parámetros e visualizar el resultado de la consulta en las cuadrículas de resultados. Dichos resultados pueden agruparse por varios parámetros para facilitar la lectura de los datos. El único parámetro de filtro obligatorio es el del almacén.

Los resultados de la búsqueda se dividen en dos secciones: una primera sección que incluye la información relacionada con las ubicaciones del almacén, mientras que en la segunda se encuentra el detalle de los artículos y atributos relacionados con la ubicación seleccionada.

*Las informaciones relacionadas con la primera sección de la ventana son, en detalle:*

**Ubicación**: Indica la ubicación del almacén;  

**Código**: Indica el código de la ubicación del almacén;  

**Descripción**: Indica la descripción de la ubicación del almacén;  

**Tipo de ubicación**: Indica el código del tipo de la ubicación del almacén;  

**Descripción tipo de ubicación**: Indica la descripción del tipo de la ubicación del almacén;  

**Estado de ubicación**: Indica el código del estado de la ubicación del almacén;  

**Descripción estado de ubicación**: Indica la descripción del estado de la ubicación del almacén;  

**Grupo de ubicación**: Indica que se trata de una ubicación de grupo.

En la segunda parte de la ventana, en la pestaña *Atributos de la ubicación*, es posible ingresar una serie de datos relacionados con la ubicación.

**Ancho**: Indica el ancho de la ubicación;  

**Altura**: Indica la altura de la ubicación;  

**Profundidad**: Indica la profundidad de la ubicación;  

**Capacidad**: Indica la capacidad de la ubicación;  

**Prioridad**: Indica la prioridad de la ubicación;  

**Número de capas**: Indica el número máximo de capas que se pueden cargar en la ubicación;  

**Tipo de unidad de carga**: Indica el tipo de unidad de carga que se puede cargar en la ubicación;  

**Número de unidades de carga**: Indica el número de unidades de carga que se pueden cargar en la ubicación;  

**Stock mínimo**: Indica el stock mínimo para esa ubicación;  

**Stock máximo**: Indica el stock máximo para esa ubicación.

Además, en el expander *Parámetros*, también se pueden activar los siguientes indicadores relacionados con la ubicación individual:

**Mono artículo**: si está activo, indica que la ubicación es mono artículo; por lo tanto, no será posible mover un artículo diferente a aquel que ya está presente en esa ubicación;  

**Mono lote**: si está activo, indica que la ubicación es mono lote; por lo tanto, no será posible mover un mismo artículo con un lote diferente al que ya está presente en esa ubicación;  

**Activo**: si está activo, indica que la ubicación está activa;  

**Bloqueada**: si está activo, indica que la ubicación está bloqueada (por lo tanto, es una existencia no disponible);  

**Reservada**: si está activo, indica que la ubicación está reservada;  

**De stock**: si está activo, indica que la ubicación es de tipo stock (utilizado en personalizaciones);  

**De picking**: si está activo, indica que la ubicación es de tipo picking (utilizado en personalizaciones);  

**Obsoleta**: si está activo, indica que la ubicación está obsoleta.

En la pestaña **Artículos**, es posible ver cuáles son los artículos cargados en esa ubicación.

*Botones específicos*:

> **ricerca**: permite buscar los datos;   
> **cancella ubicazione**: permite eliminar una línea de las ubicaciones;   
> **inserisci ubicazione figlia**: este botón aparece en la barra de Ribbon después de realizar la búsqueda; permite ingresar una nueva ubicación hija respecto a la línea seleccionada;   
> **inserisci ubicazione padre**: este botón aparece en la barra de Ribbon después de realizar la búsqueda; permite ingresar una nueva ubicación padre respecto a la línea seleccionada;   
> **replica attributi**: este botón aparece en la barra de Ribbon después de realizar la búsqueda; permite replicar los atributos.

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).