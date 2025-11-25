---
title: Ubicaciones
sidebar_position: 1
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La gestión de ubicaciones<!-- ubicazioni --> en Fluentis es un elemento crucial para la optimización de las operaciones de almacén<!-- magazzino -->. Este módulo permite a los usuarios estructurar las ubicaciones de almacenamiento dentro de los almacenes<!-- magazzini --> según un esquema jerárquico, fácilmente modificable para adaptarse a las necesidades de la empresa. Cada ubicación<!-- ubicazione --> puede definirse en base a varios parámetros, incluyendo el tipo de ubicación<!-- tipo di ubicazione --> (por ejemplo, área, estante, anaquel, sección) y sus características físicas como ancho, alto y capacidad de carga.

Gracias a la creación de un árbol de ubicaciones<!-- ubicazioni -->, los operarios pueden agregar nuevas ramas y visualizar el contenido de cada ubicación<!-- ubicazione -->, con detalles sobre los artículos y las cantidades en stock<!-- giacenza -->. La sección de atributos de la ubicación<!-- ubicazione --> permite una mayor personalización, posibilitando definir requisitos específicos para ubicaciones<!-- ubicazioni --> individuales.

Esta gestión eficiente de las ubicaciones<!-- ubicazioni --> no solo mejora el control de inventario<!-- giacenze -->, sino que también respalda la logística operativa, contribuyendo a una administración más ágil y eficaz de los inventarios dentro de la empresa.
:::

El formulario permite al operador crear y gestionar el árbol de ubicaciones de almacén<!-- magazzino -->.

Mediante los filtros es posible efectuar una búsqueda dirigida según los parámetros y visualizar el resultado de la consulta en las tablas de resultados. Estos resultados pueden agruparse por varios parámetros para facilitar la lectura de los datos. El único parámetro de filtro obligatorio es el del almacén<!-- magazzino -->.

Los resultados de la búsqueda se dividen en dos secciones: una primera sección en la que se insertan las informaciones relativas a las ubicaciones<!-- ubicazioni --> del almacén<!-- magazzino -->, mientras que en la segunda está el detalle de los artículos y atributos relacionados con la ubicación<!-- ubicazione --> seleccionada.

*La información relativa a la primera sección de la ventana, en detalle, es:*<!-- Le informazioni relative alla prima sezione della finestra, nel dettaglio sono:-->

**Ubicación<!-- Ubicazione -->**: Indica la ubicación de almacén<!-- ubicazione di magazzino -->;

**Código**: indica el código de la ubicación de almacén<!-- ubicazione di magazzino -->;

**Descripción**: indica la descripción de la ubicación de almacén<!-- ubicazione di magazzino -->;

**Tipo de ubicación<!-- Tipo ubicazione -->**: indica el código del tipo de ubicación de almacén<!-- ubicazione di magazzino -->;

**Descripción del tipo de ubicación<!-- Descrizione tipo ubicazione -->**: indica la descripción del tipo de ubicación de almacén<!-- ubicazione di magazzino -->;

**Estado de la ubicación<!-- Stato ubicazione -->**: indica el código del estado de la ubicación de almacén<!-- ubicazione di magazzino -->;

**Descripción del estado de ubicación<!-- Descrizione stato ubicazione -->**: indica la descripción del estado de la ubicación de almacén<!-- ubicazione di magazzino -->;

**Ubicación de grupo<!-- Ubicazione gruppo -->**: indica que se trata de una ubicación de grupo.

En la segunda parte de la ventana, en la pestaña *Atributos de la ubicación<!-- Attributi dell’ubicazione -->*, es posible ingresar una serie de datos relativos a la ubicación<!-- ubicazione -->.

**Ancho<!-- Larghezza -->**: indica el ancho de la ubicación<!-- ubicazione -->; 

**Alto<!-- Altezza -->**: indica el alto de la ubicación<!-- ubicazione -->; 

**Profundidad**: indica la profundidad de la ubicación<!-- ubicazione -->; 

**Capacidad de carga<!-- Portata -->**: indica la capacidad de carga de la ubicación<!-- ubicazione -->; 

**Prioridad**: indica la prioridad de la ubicación<!-- ubicazione -->; 

**Número de niveles<!-- Numero strati -->**: indica el número máximo de niveles que es posible cargar en la ubicación<!-- ubicazione -->; 

**Tipo de unidad de carga<!-- Tipo unità di carico -->**: indica el tipo de unidad de carga que es posible cargar en la ubicación<!-- ubicazione -->;

**Número de unidades de carga<!-- Numero unità di carico -->**: indica el número de unidades de carga que es posible cargar en la ubicación<!-- ubicazione -->;

**Stock mínimo<!-- Scorta minima -->**: indica el stock mínimo para esa ubicación<!-- ubicazione -->;

**Stock máximo<!-- Scorta massima -->**: indica el stock máximo para esa ubicación<!-- ubicazione -->.
  
Además, en el expander *Parámetros<!-- Parametri -->* también pueden activarse las siguientes banderas relativas a la ubicación<!-- ubicazione --> individual:

**Mono artículo<!-- Mono articolo -->**: si está activo indica que la ubicación<!-- ubicazione --> es mono artículo; por lo tanto, no será posible mover un artículo diferente al ya presente a esa ubicación<!-- ubicazione -->;

**Mono lote<!-- Mono lotto -->**: si está activo indica que la ubicación<!-- ubicazione --> es mono lote; por lo tanto, no será posible mover en esa ubicación<!-- ubicazione --> un mismo artículo con lote diferente al ya presente;

**Activa<!-- Attiva -->**: si está activo, indica que la ubicación<!-- ubicazione --> está activa;

**Bloqueada<!-- Bloccata -->**: si está activo, indica que la ubicación<!-- ubicazione --> está bloqueada (por lo tanto, es una cantidad no disponible<!-- giacenza non disponibile -->);

**Reservada<!-- Prenotata -->**: si está activo, indica que la ubicación<!-- ubicazione --> está reservada;

**De stock<!-- Di stock -->**: si está activo, indica que la ubicación<!-- ubicazione --> es de tipo stock (utilizado en personalizaciones);

**De picking<!-- Di pick -->**: si está activo, indica que la ubicación<!-- ubicazione --> es de tipo picking (utilizado en personalizaciones);

**Obsoleta<!-- Obsoleta -->**: si está activo, indica que la ubicación<!-- ubicazione --> es obsoleta.

En la pestaña **Artículos** es posible ver qué artículos están almacenados en esa ubicación<!-- ubicazione -->.

*Botones específicos*:

> **Buscar<!-- Ricerca -->**: permite buscar los datos;   
> **Eliminar ubicación<!-- Cancella ubicazione -->**: permite eliminar una fila de ubicaciones<!-- ubicazioni -->;   
> **Insertar ubicación hija<!-- Inserisci ubicazione figlia -->**: este botón aparece en la Ribbon bar después de realizar la búsqueda; permite ingresar una nueva ubicación hija en relación con la fila seleccionada;   
> **Insertar ubicación padre<!-- Inserisci ubicazione padre -->**: este botón aparece en la Ribbon bar después de realizar la búsqueda; permite ingresar una nueva ubicación padre en relación con la fila seleccionada;   
> **Replicar atributos<!-- Replica attributi -->**: este botón aparece en la Ribbon bar después de realizar la búsqueda; permite replicar los atributos.   

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).