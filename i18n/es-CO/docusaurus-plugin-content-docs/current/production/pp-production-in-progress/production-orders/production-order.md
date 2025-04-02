---
title: ordini di produzione
sidebar_position: 3
---

Normalmente, las órdenes de producción se generan automáticamente a partir del procedimiento de *Liberación de órdenes planificadas*. Para crear manualmente una orden de producción, primero es necesario crear la orden planificada de producción y luego liberarla a través del procedimiento dedicado.

## Cabecera de la orden de producción (Testata ordine di produzione)

En la cabecera se resumen todos los datos referentes a la orden de producción, como: número de pedido y cliente de referencia, proyecto asociado, fecha de inicio/finalización, artículo, versión de la lista de materiales y ciclo, cantidad a producir, etc.

*Botón específico*:  

> **completamento dati ordine**: invoca el procedimiento que permite ingresar y/o actualizar, para el artículo ingresado en la orden de producción, todos los datos relacionados con materiales, fases, equipamiento, herramientas, atributos y notas varias, recuperándolos de la lista de materiales y ciclo de trabajo del artículo;  
> **ricalcola data inizio**: Invoca el procedimiento que permite realizar una actualización de la fecha de inicio de la orden de producción y, eventualmente, de las fases de trabajo debido a una modificación de los tiempos de procesamiento y/o de la cantidad a producir del artículo objeto de la orden de producción;  
> **Generar lista de materiales (Genera distinta base)**: permite generar la lista de materiales basándose en los datos ingresados en la orden de producción o actualizar los datos existentes con los ingresados en la orden;  
> **Generación del ciclo de trabajo (Generazione ciclo di lavoro)**: permite crear el ciclo de trabajo del artículo basándose en los datos ingresados en la orden, o actualizar los datos existentes con los ingresados en la orden;  

*Campos específicos*:  

**stato**: indica el estado de la orden de producción: *lanciato* es el estado inicial de la orden de producción recién generada por el procedimiento de liberación de órdenes planificadas, mientras que *esecutivo* es el estado que debe asignarse a la orden para luego poder proceder con los informes de producción.     

## Materiales

En esta pestaña se informan los materiales de primer nivel de la lista de materiales relativa al producto terminado a producir, pero el usuario puede modificar los datos y/o agregar materiales adicionales a la lista de componentes de la orden de producción. Para importar los datos directamente de la lista de materiales del artículo, es necesario hacer clic en el botón **completamento dati ordine** que se encuentra en la barra de ribbon.

*Botones específicos*:

> **inserisci materiale**: permite insertar un nuevo material en la cuadrícula;  
> **cancella materiale**: permite eliminar los materiales ingresados en la cuadrícula. 

*Campos específicos*:

**priorità**: aquí se muestra la prioridad del componente, si está presente, insertada en la lista de materiales. Puede ser modificada, al igual que todos los demás datos presentes en esta cuadrícula;  
**C/L**: en este campo se recupera el indicador presente en los *Parámetros MRP* del artículo llamado 'considerar en CL', es decir, indica si el artículo debe incluirse como material en las órdenes de trabajo;  
**unità di misura**: en este campo se ingresa la posible unidad de medida alternativa del artículo;  
**data impiego**: coincide con la fecha de inicio prevista de la orden de producción (al modificar la primera, también se cambia automáticamente esta última);  
**Cant. de uso (Q.tà impiego)**: representa la cantidad unitaria necesaria para este artículo (prevista por la lista de materiales) que puede ser modificada;  
**Cant. total (Q.tà totale)**: representa la cantidad que se obtiene multiplicando la *Cant. de uso (Q.tà d'impiego)* por la *Cant. a producir (Q.tà da produrre)*;   
**Cant. alternativa (Q.tà alternativa)**: representa la cantidad total pero expresada en la unidad de medida alternativa;  
**% scarto**: en esta casilla se inserta o se recupera de la lista de materiales el posible % de desperdicio para este artículo;  
**fase/stfase**: con un doble clic se abre una ayuda de fases de trabajo desde la cual se puede seleccionar la fase y subfase correspondientes, y, por lo tanto, asignar el material seleccionado a una determinada fase de trabajo del artículo;  
**Cant. disp (Q.tà disp)**: en este campo aparece la cantidad disponible del artículo a la fecha de uso;  
**A declarar en móvil (Da dichiarare su mobile)**: si está habilitado, se declarará en móvil.

## Fases

En esta pestaña se informan las fases del ciclo de trabajo relativo al producto terminado a producir, pero el usuario puede modificar los datos y/o agregar fases adicionales a la orden de producción. Para importar los datos directamente del ciclo de trabajo del artículo, es necesario hacer clic en el botón **completamento dati ordine** presente en la barra de ribbon. En la orden de producción es posible variar una fase de interna a externa, por lo que también será posible ingresar al subcontratista, y al guardar la misma, el procedimiento creará la orden de trabajo. Además, en caso de que una fase externa se convierta en interna, el procedimiento eliminará automáticamente la orden de trabajo asociada.

*Botones específicos*:
> **inserisci fase**: permite insertar una nueva fase en la cuadrícula;  
> **cancella fase**: permite eliminar las fases ingresadas en la cuadrícula. 

*Campos específicos*:

**Código fase/Fase/Sotto Fase (Codice fase/Fase/Sotto Fase)**: con un doble clic se abre la ayuda de fases de trabajo desde la cual se puede seleccionar la fase y subfase correspondiente;  
**ctrl. qual.**: este indicador indica si el material debe estar sujeto a control de calidad antes de su utilización;  
**Fase prod (Fase prod)**: si el indicador está marcado, identifica que la fase en cuestión es una fase productiva, y que, por lo tanto, deberá ser informada;  
**centro di lavoro**: desde esta combinación se establece el Centro de trabajo. Se propone automáticamente, recuperado de la fase que ha sido seleccionada e insertada previamente en la cuadrícula;  
**Fecha inicio/final prevista (Data inizio/fine prevista)**: se trata de las fechas de inicio y fin de la fase correspondiente; al cambiar las fechas previstas de inicio y fin de trabajo, estas también se modifican automáticamente. Se calculan en función de los tiempos ingresados en las fases de trabajo, y más precisamente en base al mayor entre el tiempo de operario y el tiempo de máquina total para la fase seleccionada;  
**tempo macchina**: es el tiempo que la máquina tarda en realizar la fase, en relación a la cantidad de piezas por fase;  
**numero macchine**: indica el número de máquinas involucradas en esta fase;  
**Cant. piezas por fase (Qtà pezzi per fase)**: indica el número de piezas por fase;  
**tempo operaio**: es el tiempo que el operario tarda en realizar esta fase, en relación a la cantidad de piezas por fase;  
**numero operai**: es el número de operarios involucrados en esta fase;  
**Cuenta subcontratista/descripción subcontratista (Conto terzista/descrizione terzista)**: al hacer doble clic en la casilla se abre la ayuda para poder seleccionar la cuenta y subcuenta del subcontratista correspondiente. Esta *casilla está activa solo* en caso de que la fase se designe como fase *esterna*. Cabe notar que el *subcontratista* también se recupera de la fase de trabajo insertada en el ciclo de trabajo del artículo;  
**Ord. CL creado (Ord. CL creato)**: si está marcado, indica que ya se ha creado la correspondiente orden de trabajo;  
**sequenza**: indica la secuencia con la que debe realizarse esa fase, es posible modificarlo directamente desde la orden de producción.   
**Costo operario (Costo operaio)**: se valora desde el inicio de la declaración de producción;    
**costo macchina**: se valora desde el inicio de la declaración de producción;    
**costo attrezzaggio**: se valora desde el inicio de la declaración de producción.   

### Fases - Propiedades (Fasi - Proprietà)

Contiene las propiedades relativas a la fase seleccionada.

**descrizione fase/sottofase**: en este campo aparece la descripción de la fase seleccionada;  
**tipo**: en esta combinación es posible establecer el tipo de trabajo (interna o externa);  
**Superposición (Sovrapp)**: a través de esta combinación se inserta el tipo de una posible superposición entre fases. Podemos tener superposición *totale* (en este caso, la fase objeto está totalmente superpuesta a la fase sucesiva indicada), *Por piezas (A pezzi)* (en este caso, es necesario indicar después de cuántas piezas producidas por esta fase comenzará la siguiente), *a tempo* (en este caso, es necesario indicar después de cuántos minutos desde que comenzó la fase objeto comenzará la siguiente);  
**um tempi**: en esta combinación aparece la Unidad de Medida de Tiempos de la Fase; se puede decidir gestionar los tiempos de la fase en segundos, minutos, horas y días. Generalmente, se gestionan en minutos los tiempos de las fases internas y en días los de las fases externas, pero obviamente depende mucho del tipo de empresa para la que se está configurando el trabajo;  
**macchina**: en esta combinación se puede seleccionar el código (y descripción) de la máquina correspondiente. Se propone automáticamente, recuperada del centro de trabajo que ha sido previamente insertado en la cuadrícula;  
**gruppo manodopera**: en esta combinación se puede seleccionar el código (y descripción) del grupo de mano de obra correspondiente. Se propone automáticamente, recuperado del centro de trabajo que ha sido previamente insertado en la cuadrícula;  
**Superposición referida a la fase/subfase (Sovrapposiz. riferita alla fase/sottofase)**: aquí se indica el código de la fase y subfase que presentan una superposición con la fase objeto. Generalmente se indica la fase siguiente, pero también aquí se trata solo de una costumbre;  
**valore**: aquí se indica el valor de la posible superposición, utilizando los criterios especificados anteriormente;  
**utilizzo**: si el indicador está activado, significa que se desea que el tiempo de espera/cola aumente el tiempo de compromiso del Centro de Trabajo en esa fase;  
**tempo di attesa o coda**: indica el posible tiempo de espera/cola previsto para esta máquina.  

### Fases - Datos Extra (Fasi - Extra Data)

Contiene los posibles datos extra relativos a la fase seleccionada.

## Equipamiento (Attrezzaggio)

En esta pestaña es posible definir los tiempos relativos al equipamiento de la fase seleccionada en la pestaña anterior. 

*Campos específicos*:

**fase/sottofase**: en estos campos se visualizan las informaciones relativas a la fase que está seleccionada en la pestaña *Fases*;  
**tipo**: indica la tipología de la fase (interna o externa);  
**tipo sovrapposizione**: indica la tipología de la superposición;  
**um tempi**: indica la unidad de medida temporal de la fase;  
**centro di lavoro**: en estos campos se inserta el código (y la descripción correspondiente) del Centro de Trabajo establecido para el equipamiento;  
**macchina**: en estos campos se inserta el código (y la descripción correspondiente) de la máquina para el equipamiento;  
**gruppo mdo**: en estos campos se inserta el código (y la descripción correspondiente) del Grupo de mano de obra para el equipamiento;  
**valore**: indica el valor de la posible superponibilidad;  
**cdl**: en estos campos se visualiza el código y la descripción del respectivo Centro de Trabajo de la fase seleccionada;  
**data inizio**: se muestra la fecha de inicio de la fase seleccionada en la pestaña *Fases*;  
**data fine**: se muestra la fecha de fin de la fase seleccionada en la pestaña *Fases*;  
**tempo attrezzaggio**: se inserta el tiempo del equipamiento. Se trata de un tiempo fijo, que no varía al cambiar las cantidades a producir en la fase seleccionada;  
**tempo riattrezzaggio**: se inserta el tiempo de re-equipamiento, que se suma al tiempo de equipamiento;  
**Num. de máquinas (Num. macchine)**: se indica el número de máquinas empleadas para el equipamiento;  
**Num. de operarios (Num. operai)**: se indica el número de operarios empleados para el equipamiento.

## Equipos (Attrezzature)

En esta pestaña, constituida principalmente por una cuadrícula, es posible definir cuáles y cuántas herramientas deberán ser utilizadas en la producción de la fase seleccionada en la pestaña *Fases*. 

*Campos específicos*:

**sequenza**: en este campo es posible indicar la secuencia con la que deben ser utilizadas las herramientas;  

**attrezzature**: con esta combinación es posible recuperar el código del equipo, recuperado de la tabla correspondiente [Herramientas](/docs/configurations/tables/production/equipments);  
**classe/codice articolo**: en estos campos es posible indicar la clase y el código del artículo (la ayuda filtra automáticamente solo los artículos que están identificados como *Herramientas* en el campo *Naturaleza Artículo* de la base de datos de inventario);  
**variante**: representa la variante del artículo;  
**quantità**: representa la cantidad del artículo.

## Control de calidad

En esta pestaña, constituida principalmente por una cuadrícula, es posible visualizar los detalles de las pruebas de control de calidad programadas para la fase/subfase.

## Nota fase

En esta pestaña se muestra la nota vinculada a la fase de trabajo seleccionada en la pestaña *Fases*. Esta es modificable por el usuario en relación con la orden de producción en cuestión.

## Instrucciones operativas

En esta pestaña es posible adjuntar y visualizar las *Instrucciones operativas* relacionadas con la fase de trabajo seleccionada en la pestaña *Fases*.

## Personal

En esta pestaña es posible ingresar a los operadores que deberán realizar las fases individuales del ciclo productivo.    

## Datos Extra

Para una descripción detallada sobre los datos extra, consulte el artículo [Datos extra (Extra data)](/docs/configurations/utility/extra-data/extradata/new-extradata).

Para más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).