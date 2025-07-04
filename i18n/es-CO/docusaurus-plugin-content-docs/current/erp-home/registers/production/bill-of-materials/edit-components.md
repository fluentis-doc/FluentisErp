---
title: Modificar componentes 
sidebar_position: 6
---

Este formulario permite modificar masivamente ensambles creados anteriormente, utilizando tres procedimientos diferentes según el tipo de modificación que se desea realizar: sustitución/modificación, inserción y anulación.

### Sustitución y modificación

Al seleccionar en la combinación **tipo de gestión** la opción **sustituir/editar**, es necesario ingresar en el área de filtro un componente, seleccionándolo con la correspondiente *help articoli* ubicada cerca del campo **Componente**.

Filtrar solo por un artículo; no es posible ingresar como filtro de búsqueda solo la clase de artículo o solo una parte del código o de la descripción.  
Después de establecer el criterio de búsqueda, haciendo clic en el botón **ricerca** ubicado en la barra de herramientas, el procedimiento muestra en la cuadrícula todas las listas de materiales dentro de las cuales está presente el componente ingresado en el área de filtro, realizando así una *Implosión de componente (Implosione componente)*.

En la cuadrícula de resultados se visualizan la clase, el código, la descripción y la variante del ensamble, el inicio y fin de la validez del vínculo entre el componente seleccionado en el área de filtro y el ensamble mostrado en la cuadrícula, la cantidad del componente y su unidad de medida de uso, siempre en relación con el vínculo ensamble/componente.

Elegir una de las listas visibles, o bien, seleccionar con la combinación *CTRL+click* del mouse, una lista de listas de materiales sobre las cuales realizar el procedimiento de 'Sustitución/Modificación'.

Seleccionar, en la sección inferior de la ventana, el nuevo componente que reemplazará al seleccionado en la sección de filtro.  
Para seleccionar este nuevo componente, se puede utilizar la *help articoli*, ingresando los campos de *clase, código, descripción* y, opcionalmente, *variante* del nuevo componente, para el cual también debe ingresarse obligatoriamente la cantidad (y si la cantidad es *fija* o *variable*) y, opcionalmente, la *unidad de medida de uso*, la *cantidad de desperdicio*, el *% de desviación positiva y negativa*, el inicio y el fin de la validez, la *prioridad* y las *notas* del nuevo componente.

A través del uso de los indicadores *alternative* y *fasi*, es posible decidir si incluir en el nuevo vínculo también las alternativas y las fases de trabajo relacionadas con el nuevo componente.

También se puede activar, si es necesario, el indicador *movimentabile* y el indicador *fittizio* (para la explicación detallada de los varios campos a completar, se remite al artículo [Gestión de estructuras (Gestione strutture)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

A través de este procedimiento, es posible ingresar, en la sección inferior, el mismo componente que ingresó en la sección de filtro; en este caso, simplemente se modificará la información ya existente para ese componente dentro de las listas seleccionadas en la cuadrícula.

Una vez terminada la inserción de la información, ejecutar el procedimiento de **Sustitución/Modificación** utilizando el botón de procesamiento ![](/img/neutral/common/execute.png).

### Inserción (Inserimento)

Al seleccionar en la combinación **tipo gestione** la opción **inserimento**, es necesario ingresar en el área de filtro el ensamble, seleccionándolo con la correspondiente *help articoli* ubicada cerca del campo **assieme**, dentro del cual se desea insertar un componente.

En este caso, no es necesario filtrar por un solo artículo, por lo que es posible ingresar como filtro de búsqueda solo la clase de artículo o solo una parte del código o de la descripción los campos de filtro son los mismos que en el procedimiento de (*Modificación/Sustitución*). Luego, al hacer clic en el botón **búsqueda** en la barra de herramientas, el procedimiento muestra en la cuadrícula todas las listas de materiales correspondientes al filtro de búsqueda establecido. En la cuadrícula de resultados se muestran la clase, el código, la descripción y la variante del ensamble.

Elegir una de las listas visibles, o bien, seleccionando con la combinación *CTRL+click* del mouse, una lista de listas de materiales sobre las cuales realizar el procedimiento de Inserción.

Seleccionar, en la sección inferior de la ventana, el nuevo componente a insertar dentro de las listas de materiales seleccionadas en la sección de filtro. Para seleccionar este nuevo componente, se puede utilizar la *Artículos de ayuda*, ingresando los campos de *clase, código, descripción* y, opcionalmente, *variante* del nuevo componente, para el cual debe ingresarse obligatoriamente también la *cantidad* (y si la cantidad es *fija* o *variable*) y, opcionalmente, la unidad de medida de uso, la cantidad de desperdicio, el % de desviación positiva y negativa, el inicio y el fin de la validez, la prioridad y las notas del nuevo componente.

A través del uso de los indicadores *alternativas* y *fases*, es posible decidir si incluir en el nuevo vínculo también las alternativas y las fases de trabajo relacionadas con el nuevo componente.

Es posible activar, si es necesario, el indicador *móvil* y el indicador *ficticio* (para la explicación detallada de los varios campos a completar, se remite al artículo [Gestión de estructuras](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)).

Una vez completada la inserción de la información, ejecutar el procedimiento de **Inserción** utilizando el botón de procesamiento ![](/img/neutral/common/execute.png).

### Anulación 

Al seleccionar en la combinación **tipo de gestión** la opción **cancelación**, es necesario ingresar en el área de filtro el componente que se desea eliminar de las listas de materiales, seleccionándolo con la correspondiente *Artículos de ayuda* ubicada cerca del campo **componente**, y opcionalmente también el **asamblea** (o su clase o una parte del código o de la descripción) del cual se desea eliminar el componente.

Luego, al hacer clic en el botón **buscar**, ubicado en la barra de herramientas, el procedimiento muestra en la cuadrícula todas las listas de materiales correspondientes al filtro de búsqueda establecido. En la cuadrícula de resultados se visualizan la clase, el código, la descripción y la variante del ensamble, el inicio y fin de la validez del vínculo entre el componente seleccionado en el área de filtro y el ensamble visualizado en la cuadrícula, la cantidad del componente y su unidad de medida de uso, siempre en relación con el vínculo ensamble/componente.

Elegir una de las listas visibles, o bien, seleccionando con la combinación *CTRL+click* del mouse, una lista de listas de materiales sobre las cuales realizar el procedimiento de Anulación.

La sección inferior de la ventana queda desactivada en el caso de **Anulación**.

Una vez seleccionado el componente a eliminar, es posible proceder con la anulación utilizando el botón de procesamiento ![](/img/neutral/common/execute.png).

*Botón específico*:

> **Elaboración**: botón que permite activar el procedimiento seleccionado en la combinación inicial de la ventana (por lo tanto, el procedimiento de Sustitución/Modificación, el procedimiento de Inserción o el procedimiento de Anulación).

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).