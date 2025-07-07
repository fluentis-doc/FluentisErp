---
title: Editar componentes
sidebar_position: 4
---

Este formulario permite modificar masivamente los prototipos creados anteriormente, utilizando tres procedimientos diferentes según el tipo de modificación que se desee realizar: sustitución/modificación, inserción y anulación.

### Sustitución y modificación

Seleccionando en la combinación **Tipo de gestión** la opción **Sustituir/Editar**, es necesario ingresar en el área de filtro un componente, seleccionándolo con el correspondiente *help articoli* colocado cerca del campo **Componente**.

Filtrar por un solo artículo; no es posible ingresar como filtro de búsqueda solo la clase de artículo o solo una parte del código o de la descripción.  
Después de establecer el criterio de búsqueda, al hacer clic en el botón **búsqueda** ubicado en la barra de menú, el procedimiento mostrará en la cuadrícula todas las listas de materiales dentro de las cuales está presente el componente ingresado en el área de filtro, realizando así una *Implosión de componente*.

En la cuadrícula de resultados se mostrarán clase, código, descripción y variante del ensamblaje, versión de la lista de materiales, inicio y fin de validez tanto del artículo padre como del componente, además, se indicará la cantidad del componente y su unidad de medida de uso, siempre en relación con el vínculo ensamblaje/componente.

Elegir una de las listas mostradas, o seleccionar con la combinación *CTRL+click* del mouse, una lista de listas de materiales sobre las que realizar el procedimiento de **Sustitución/Modificación**.

Seleccionar, en la sección inferior de la ventana, el nuevo componente que reemplazará al seleccionado en la sección de filtro.  
Para seleccionar este nuevo componente se puede utilizar el *Ayuda artículos*, ingresando los campos de *clase, código, descripción* y eventualmente *variante* del nuevo componente, para el cual también debe ingresarse obligatoriamente la cantidad (y si la cantidad es *fija* o *variable*), la *cantidad de desecho*, inicio y fin de validez, los indicadores *prioridad* y las *notas* del nuevo componente.

A través del uso de los indicadores *Alternativas* es posible decidir si incluir en el nuevo vínculo también las alternativas relacionadas con el nuevo componente.

También es posible activar, si es necesario, el indicador *movimentabile* y el indicador *ficticio* (para la explicación detallada de los varios campos a completar se remite al artículo [Gestión de estructuras](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

A través de este procedimiento, se puede insertar, en la sección inferior, el mismo componente que se ingresó en la sección de filtro: en este caso simplemente se realizará una modificación de la información ya presente para ese componente dentro de las listas seleccionadas en la cuadrícula.

Una vez ingresada la información, realizar el procedimiento de **Sustitución/Modificación** mediante el uso del botón *esegui*.

### Inserción

Seleccionando en la combinación **Tipo de gestión** la opción **inserción**, es necesario ingresar en el área de filtro el ensamblaje, seleccionándolo con el correspondiente *help articoli* ubicado cerca del campo **asamblea**, dentro del cual se desea insertar un componente.

En este caso no es necesario filtrar por un solo artículo, por lo que es posible ingresar como filtro de búsqueda también solo la clase de artículo o solo una parte del código o de la descripción (los campos de filtro son los mismos que en el procedimiento de *Modificación/Sustitución*). Luego, al hacer clic en el botón **búsqueda** ubicado en la barra de menú, el procedimiento mostrará en la cuadrícula todas las listas de materiales correspondientes al filtro de búsqueda establecido. En la cuadrícula de resultados se mostrarán clase, código, descripción y variante del ensamblaje y de todos sus componentes.

Elegir una de las listas mostradas, o seleccionar con la combinación *CTRL+click* del mouse, una lista de listas de materiales sobre las que ejecutar el procedimiento de Inserción.

Seleccionar, en la sección inferior de la ventana, el nuevo componente a insertar dentro de las listas de materiales seleccionadas en la sección de filtro. Para seleccionar este nuevo componente, se puede utilizar el *Ayuda artículos*, ingresando los campos de *clase, código, descripción* y eventualmente *variante* del nuevo componente, para el cual también debe ingresarse obligatoriamente la *cantidad* (y si la cantidad es *fija* o *variable*), inicio y fin de validez, la prioridad y las notas del nuevo componente.

A través del uso de los indicadores *Alternativas* es posible decidir si incluir en el nuevo vínculo también las alternativas relacionadas con el nuevo componente.

Es posible activar, si es necesario, el indicador *movimentabile* y el indicador *ficticio* (para la explicación detallada de los varios campos a completar se remite al artículo [Gestión de estructuras](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Una vez ingresada la información, realizar el procedimiento de **Inserción** mediante el uso del botón *esegui*.

### Anulación

Seleccionando en la combinación **Tipo de gestión** la opción **cancelación**, es necesario ingresar en el área de filtro el componente que se desea eliminar de las listas de materiales, seleccionándolo con el correspondiente *help articoli* ubicado cerca del campo **Componente**, y opcionalmente también la **asamblea** (o su clase o parte del código o de la descripción) del cual se desea eliminar el componente.

Luego, al hacer clic en el botón **búsqueda**, ubicado en la barra de menú, el procedimiento mostrará en la cuadrícula todas las listas de materiales correspondientes al filtro de búsqueda establecido. En la cuadrícula de resultados se mostrarán clase, código, descripción y variante del ensamblaje, inicio y fin de validez del vínculo entre el componente seleccionado en el área de filtro y el ensamblaje mostrado en la cuadrícula, la cantidad del componente y su unidad de medida de uso, siempre en relación con el vínculo ensamblaje/componente.

Elegir una de las listas mostradas, o seleccionar con la combinación *CTRL+click* del mouse, una lista de listas de materiales sobre las que ejecutar el procedimiento de Anulación.

La sección en la parte inferior de la ventana queda desactivada en el caso de **Anulación**.

Una vez seleccionado el componente a eliminar, es posible, mediante el uso del botón *ejecutar*, llevar a cabo el procedimiento de **Anulación**.

*Botón específico*:

> **Ejecutar**: botón que permite activar el procedimiento seleccionado en la combinación inicial de la ventana (es decir, el procedimiento de *Sustitución/Modificación*, o el procedimiento de *Inserción* o el procedimiento de *Anulación*).

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, se remite al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).