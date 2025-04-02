---
title: ordine pianificato
sidebar_position: 4
---

:::important ¿Para qué sirve? (A cosa serve)
La función de los **ordini pianificati** en el sistema Fluentis es una componente clave para la gestión de la planificación de la producción y de las compras. Los pedidos planificados pueden generarse automáticamente a través de la programación general o mediante la elaboración MRP (Planificación de Recursos de Manufactura), o bien ser creados manualmente por el usuario. Estos pedidos se utilizan para gestionar las necesidades futuras de recursos y materiales de manera preventiva y organizada.

En la plataforma Fluentis, los pedidos planificados pueden estar relacionados con diferentes tipos: producción, compra y trabajo por encargo; estos se visualizan con diferentes colores en la cuadrícula, según su tipo. El principal objetivo del uso de los pedidos planificados es optimizar los procesos productivos y de aprovisionamiento, garantizando que los recursos necesarios estén disponibles cuando se requieran y que las operaciones puedan proceder sin interrupciones.
:::

Normalmente, los pedidos planificados se generan automáticamente a partir del procedimiento de *Programación general* o de la *Elaboración MRP*, pero el usuario tiene la posibilidad de generar manualmente un pedido planificado, ya sea de compra, de producción o de trabajo por encargo.

El formulario se abre a través de:  
- la ruta **Programación > MS Planificación Maestra > Pedidos Planificados > Nuevo Pedido Planificado**

o mediante

- el botón **Insertar Pedido** que se encuentra en el formulario [Búsqueda de Pedidos Planificados](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Encabezado del pedido planificado

El formulario consta de una parte que contiene la información del encabezado y de una serie de pestañas subyacentes.  
Automáticamente se rellenan el *número*, *año* y *fecha*, la indicación de si se trata de un *pedido de compra, de producción o de trabajo por encargo*, y el *tipo de pedido planificado*. Este último y la numeración se toman directamente de los datos ingresados en la tabla [Tipo de documentos](/docs/configurations/tables/production/documents-types/) presente entre las tablas de producción. Al mismo tiempo, también se insertan el *número de ciclo de trabajo* por defecto y la *versión* a utilizar.  
Los datos obligatorios a ingresar son: el *artículo* con la posible variante, y la *fecha de inicio y fin*; después de esto, será suficiente ingresar la *cantidad* a producir/comprar.  

*Botón específico*:  

> **Completación de datos del pedido**: invoca el procedimiento que permite ingresar y/o actualizar, para el artículo ingresado en el pedido planificado, todos los datos relacionados con materiales, fases, equipamiento, herramientas, atributos y notas varias, tomándolos de la lista de materiales y del ciclo de trabajo del artículo.  
> **Recalcular fecha de inicio**: invoca el procedimiento que permite realizar una actualización de la fecha de inicio del pedido planificado y, eventualmente, de las fases de trabajo correspondientes como resultado de una modificación de los tiempos de trabajo y/o de la cantidad a producir del artículo objeto del pedido planificado;  
> **[Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: permite abrir la ventana relacionada con los parámetros MRP del artículo;  
> **Generar lista de materiales**: permite generar la lista de materiales basada en los datos ingresados dentro del pedido de producción o actualizar los datos existentes con los que se han ingresado en el pedido;  
> **Generación de ciclo de trabajo**: permite crear el ciclo de trabajo del artículo en base a los datos ingresados en el pedido, o actualizar los datos existentes con los que se han ingresado en el pedido;  
> **[Lista de materiales](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: permite abrir la pantalla relacionada con la lista de materiales del artículo;  
> **[Ciclos de trabajo](/docs/erp-home/registers/production/routes/new-route)**: permite visualizar el ciclo de trabajo y las fases de producción relacionadas del artículo.  

*Campos específicos*:  

**Tipo de Pedido Planificado**: se propone el tipo predefinido como tipo por defecto;  
**Pedido obligatorio**: si está activo, este indicador indica que el pedido planificado tiene una importancia prioritaria y no permite al usuario mover el pedido al establecer una fecha posterior a la fecha de finalización prevista por la programación general;  
**Prioridad del pedido**: permite establecer la prioridad que se le da a este pedido;  
**Generado por demanda**: en este campo se muestra *Manual* (si se trata de un pedido planificado creado manualmente), *Dependiente* (si se trata de un pedido planificado creado por programación y que depende de otros pedidos planificados de nivel superior) o *Independiente* (si se trata de un pedido planificado creado por programación y que no depende de otros pedidos planificados de nivel superior, ya que este es un pedido de nivel 1);    
**Orden de producción**: en estos 3 campos se establecen el año, el número y la descripción de la orden de producción de la cual se generó el pedido planificado. Obviamente, si se generó manualmente, no será posible vincularlo a ninguna orden de producción ya existente y por lo tanto este campo estará vacío;    
**Tipo de orden**: en este campo se muestra el tipo de orden de producción de la cual se generó el pedido planificado. Obviamente, si se generó manualmente, no será posible vincularlo a ninguna orden de producción ya existente y por lo tanto este campo estará vacío;    
**Proyecto**: con un doble clic se abre la ayuda que permite vincular un proyecto al pedido planificado que se está ingresando;       
**Cliente**: indica el cliente de la orden;      
**Proveedor/Tercerista**: estos campos están activos en caso de que el pedido planificado sea de compra o de trabajo por encargo;     
**Artículo**: indica la clase, código y descripción del artículo de la orden;        
**Variante**: en este combo se especifica la variante del artículo;  
**Cantidad a producir**: indica la cantidad a producir;         
**UM de Gestión (UM Gestionale)**: se indica la unidad de medida de gestión del artículo;  
**Cantidad de uso**: en este campo se establece la cantidad a producir en la posible unidad de medida alternativa;  
**um utilizzo**: se indica la unidad de medida alternativa del artículo;  
**Fecha de inicio y fin**: se establecen las fechas previstas de inicio y fin de la correspondiente producción. Si después de completar los datos del ciclo de trabajo el usuario modifica una de estas 2 fechas, la otra se recalculará en consecuencia;  
**audit trail**: sección que registra automáticamente la fecha de creación del pedido y la fecha de la última modificación, registrando para ambas al usuario que realizó la operación;  
**Notas**: es un campo libre en el que pueden ingresarse notas.  

Después de guardar al menos los campos obligatorios, presione el botón **Completación de datos del pedido** para actualizar todas las pestañas (Materiales, Fases, etc.) que toman los datos de la lista de materiales y del ciclo de trabajo del artículo objeto del Pedido Planificado (solo si es de producción).

## Materiales

Esta pestaña está constituida por una cuadrícula, dentro de la cual el usuario puede ingresar manualmente los materiales que desea que se utilicen para la producción del artículo objeto del pedido planificado (solo si es de producción). Después de la entrada manual, es necesario, para importar los datos desde la lista de materiales, hacer clic en el botón **Completación de datos del pedido** presente en la barra de ribbons.

La cuadrícula ya está preenchida en caso de que el pedido planificado provenga de *Programación general* o de *Elaboración MRP*, pero el usuario puede modificar los datos y/o agregar más materiales a la lista de componentes del pedido planificado.  

:::note Nota
Si el pedido planificado es de compra, la pestaña *Materiales* no está activa.
:::

*Botones específicos*:  
> **Insertar material**: permite insertar un nuevo material en la cuadrícula;  
> **Eliminar material**: permite eliminar los materiales ingresados en la cuadrícula. 

*Campos específicos*:  

**Prioridad**: aquí se muestra la prioridad del componente, si está presente, ingresada en la lista de materiales. Puede ser modificada, al igual que todos los demás datos presentes en esta cuadrícula;  
**C/L**: en este campo se toma el indicador presente en los *Parámetros MRP* del artículo llamado *Considera en CL* que indica si el artículo debe incluirse como material en los pedidos de trabajo por encargo;        
**um utilizzo**: en este campo se ingresa la posible unidad de medida alternativa del artículo;  
**Fecha de uso**: coincide con la fecha de inicio prevista del pedido planificado (al modificar la primera, esta última se cambia automáticamente);  
**Qtà de uso**: representa la cantidad unitaria necesaria para este artículo (prevista por la DB) que de todas formas puede ser modificada;  
**Qtà total**: representa la cantidad que se obtiene multiplicando la *Qtà de uso* por la *Qtà a producir*;  
**% Descarte**: en este campo se ingresa o se toma de la lista de materiales el posible % de descarte para este artículo;  
**Fase/Subo fase**: es posible ingresar manualmente la fase y subfase correspondientes y asignar el material seleccionado a una determinada fase de trabajo del artículo; estas son propuestas automáticamente por el ciclo de trabajo;            
**Qtà disp**: en este campo aparece la cantidad disponible del artículo a la fecha de uso.

## Fases

Esta pestaña está constituida por una cuadrícula, dentro de la cual el usuario puede ingresar manualmente las fases que desea que se utilicen para la producción del artículo objeto del pedido planificado (solo si es de producción). Después de la entrada manual, es necesario, para importar los datos del ciclo de trabajo del artículo, hacer clic en el botón **Completación de datos del pedido** presente en la barra de ribbons.

La cuadrícula ya está rellenada en caso de que el pedido planificado provenga de *Programación general* o de *Elaboración MRP*. 

*Botones específicos*:  
> **Insertar fase**: permite insertar una nueva fase en la cuadrícula;  
> **Eliminar fase**: permite eliminar las fases ingresadas en la cuadrícula. 

*Campos específicos*:  

**Código de fase/Fase/Subo fase**: con un doble clic se abre la ayuda correspondiente de fases de trabajo desde la cual se puede seleccionar la fase y subfase correspondiente;  
**Control de calidad**: este indicador indica si el material debe someterse a control de calidad antes de su uso;  
**Fase productiva**: si el indicador está seleccionado, identifica que la fase en cuestión es una fase productiva, y que por lo tanto debe ser señalada; 
**Movible**: si el indicador está seleccionado, identifica que la fase en cuestión es una fase movible, por lo que generará un movimiento de almacén una vez registrada la declaración de producción;         
**Centro de trabajo**: desde este combo se establece el Centro de trabajo. Este se propone automáticamente, tomado de la fase que ha sido seleccionada e ingresada en la cuadrícula;  
**Fecha de inicio/final prevista**: se trata de las fechas de inicio y fin de la fase correspondiente; al cambiar las fechas previstas de inicio y fin de trabajo, estas también se modifican automáticamente. Se calculan en función de los tiempos ingresados en las fases de trabajo, y más precisamente en base al mayor entre el tiempo del operario y el tiempo de máquina total para la fase seleccionada;  
**Tiempo máquina**: es el tiempo empleado por la máquina para realizar la fase, referida a la cantidad de piezas por fase;  
**Número de máquinas**: indica el número de máquinas involucradas en esta fase;  
**Qtà de piezas por fase**: indica el número de piezas por fase;  
**Tiempo del operario**: es el tiempo empleado por el operario para realizar esta fase, referido a la cantidad de piezas por fase;  
**Número de operarios**: es el número de operarios involucrados en esta fase;  
**Cuenta tercerista/Descripción tercerista**: con un doble clic en la casilla se abre la ayuda para poder seleccionar la cuenta y subcuenta del tercerista correspondiente. Esta casilla está activa solo en caso de que la fase esté designada como fase *Externa*. Cabe señalar que el *tercerista* también se toma de la fase de trabajo ingresada en el ciclo de trabajo del artículo.  
**Descripción del centro de trabajo**: indica la descripción del centro de trabajo.       

### Fases - Propiedades

Contiene las propiedades relacionadas con la fase seleccionada.

**Descripción fase/subfase**: en este campo aparece la descripción de la fase seleccionada;  
**Tipo**: en este combo es posible establecer el tipo de trabajo (interna o externa);  
**Superposición**: a través de este combo ingreso el tipo de una posible superposición entre fases. Podemos tener superposición *Total* (en este caso la fase en cuestión está superpuesta totalmente a la fase siguiente indicada), *Por piezas* (en este caso es necesario indicar después de cuántas piezas producidas por esta fase comenzará la fase siguiente), *Por tiempo* (en este caso es necesario indicar después de cuántos minutos desde que comenzó la fase en cuestión comenzará la fase siguiente);  
**UM Tiempos**: en este combo aparece la *Unidad de Medida de Tiempos* de la Fase; se puede decidir gestionar los tiempos de la fase en segundos, minutos, horas y días. Generalmente, se gestionan en minutos los tiempos de las fases internas y en días los de las fases externas, pero, obviamente, depende mucho del tipo de empresa para la que se está configurando el trabajo;  
**Máquina**: en este combo puede seleccionarse el código (y descripción) de la máquina correspondiente. Esta se propone automáticamente, tomada del centro de trabajo que ha sido ingresado previamente en la cuadrícula;  
**Grupo de mano de obra**: en este combo puede seleccionarse el código (y descripción) del grupo de mano de obra correspondiente. Este se propone automáticamente, tomado del centro de trabajo que ha sido ingresado previamente en la cuadrícula;  
**Superposición referente a la fase/subfase**: aquí se indica el código de la fase y subfase que presentan una superposición con la fase en cuestión. Generalmente se indica la fase siguiente, pero aquí también solo se trata de una costumbre; 
**Valor**: aquí se indica el valor de la posible superposición, utilizando los criterios especificados anteriormente;  
**Uso**: si el indicador está activado, significa que se desea que el tiempo de espera/cola aumente el tiempo de compromiso del Centro de Trabajo en esa fase;  
**Tiempo de espera o cola**: indica el posible tiempo de espera/cola previsto para esta máquina.  

### Fases - Datos Extra

Contiene los posibles datos extra relativos a la fase seleccionada.

## Equipamiento

En esta pestaña es posible definir los tiempos relativos al equipamiento de la fase seleccionada en la pestaña anterior. 

*Campos específicos*:  

**Fase/Subfase**: en estos campos se visualizan las informaciones relativas a la fase que está seleccionada en la pestaña *Fases*;  
**Tipo**: indica la tipología de la fase (interna o externa);  
**Tipo de superposición**: indica el posible tipo de superposición;  
**UM Tiempos**: indica la unidad de medida temporal de la fase;  
**Centro de Trabajo**: en estos campos se inserta el código (y descripción relativa) del Centro de Trabajo establecido para el equipamiento;  
**Máquina**: en estos campos se inserta el código (y descripción relativa) de la máquina para el equipamiento;  
**Grupo MDO**: en estos campos se inserta el código (y descripción relativa) del Grupo de mano de obra para el equipamiento;  
**Valor**: indica el valor de la posible superponibilidad;  
**CdL**: en estos campos se visualiza el código y la descripción del respectivo Centro de Trabajo de la fase seleccionada;  
**Fecha de inicio**: se visualiza la fecha de inicio de la fase seleccionada en la pestaña *Fases*;  
**Fecha de fin**: se visualiza la fecha de fin de la fase seleccionada en la pestaña *Fases*;  
**Tiempo de equipamiento**: se inserta el tiempo del equipamiento. Se trata de un tiempo fijo, que no varía con la variación de las cantidades a producir en la fase seleccionada;  
**Tiempo de reajuste**: se inserta el tiempo de reajuste, que se suma al tiempo de equipamiento;  
**Num. máquinas**: se indica el número de máquinas empleadas para el equipamiento;  
**Num. operarios**: se indica el número de operarios empleados para el equipamiento.

## Equipos

En esta pestaña, constituida principalmente por una cuadrícula, es posible definir cuáles y cuántas herramientas deberán ser utilizadas en la producción de la fase seleccionada en la pestaña *Fases*. 

*Campos específicos*:  

**Secuencia**: en este campo es posible indicar la secuencia con la que deben ser utilizadas las herramientas;      
**Herramientas**: con este combo se puede invocar el código de la herramienta, tomado de la tabla correspondiente [Herramientas](/docs/configurations/tables/production/equipments);  
**Clase/Código artículo**: en estos campos es posible indicar la clase y el código del artículo (la ayuda filtra automáticamente solo los artículos que están identificados como *Herramientas* en el campo *Naturaleza de Artículo* del registro de almacén);  
**Variante**: representa la variante del artículo;  
**Cantidad**: representa la cantidad del artículo.

## Control de calidad

En esta pestaña, constituida principalmente por una cuadrícula, es posible visualizar los detalles de las pruebas planificadas de control para la fase/subfases.

## Nota de fase

En esta pestaña se visualiza la nota vinculada a la fase de trabajo seleccionada en la pestaña *Fases*. Esta es modificable por el usuario en conjunto con el pedido planificado en cuestión.

## Instrucciones operativas

En esta pestaña se visualizan las notas y los documentos relacionados con la fase de trabajo seleccionada en la pestaña *Fases*. Estos son modificables por el usuario en conjunto con el pedido planificado en cuestión. Estos documentos son visibles dentro del MES en la pestaña *Documentos e Instrucciones operativas*. 

## Datos Extra

Para una descripción detallada sobre los datos extra se remite al artículo [Datos extra](/docs/configurations/utility/extra-data/extradata/new-extradata).

Para detalles sobre el funcionamiento común de los formularios, haga referencia al enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).