---
title: Nueva declaración
sidebar_position: 2
ai_generated: true
---

Normalmente las *Declaraciones de producción<!-- Dichiarazioni di produzione -->* se generan automáticamente a través del [MES](/docs/production/mes/mes-intro) de Fluentis, pero el usuario también tiene la posibilidad de generarlas manualmente utilizando este formulario.

Al abrir el formulario, es necesario ingresar la orden de producción<!-- ordine di produzione --> indicando el año, número y lote, ya sea manualmente o utilizando la ayuda dedicada, así como la fase y subfase que se desea declarar, siempre de manera manual o con la ayuda.         
De este modo, se cargan automáticamente los datos de la fase seleccionada en la parte superior del formulario, donde se pueden ver informaciones relativas al tipo de orden de producción, a la orden interna<!-- commessa --> con año, número y tipo, al proyecto asociado, el centro de trabajo y la máquina donde se está ejecutando la fase, la fecha prevista de finalización del trabajo, y la información del artículo con su posible variante.        
La indicación de la cantidad total a producir, la cantidad producida que corresponde a la suma de las cantidades declaradas por la última fase productiva y movible<!-- movimentabile --> del ciclo, es decir, la correspondiente al artículo terminado, y la cantidad de fase producida que corresponde a la suma de las cantidades presentes en la declaración de la propia fase.

El campo **barcode** presente en la cabecera, se utiliza para la inserción de la Orden de producción<!-- Ordine di produzione --> o de la Fase a declarar.    
El código de barras debe estar compuesto por un identificador fijo para reconocer la Orden de producción (707) o la Fase de una orden de producción (718), el carácter de separación "-" y el identificador de la Orden de producción o de la Fase que se desea declarar.   

Ejemplo: 707-1234 o 718-98765

En la cuadrícula central deben introducirse las filas de la declaración de producción<!-- dichiarazione di produzione -->.
El primer dato a insertar es el *Estado de la declaración* que puede asumir los siguientes valores:

- *Apertura*: permite crear una declaración de producción de apertura;    
- *Suspensión*: permite crear una declaración de producción de suspensión;    
- *Reanudación*: permite crear una declaración de producción de reanudación; se debe ingresar solo después de una *Suspensión*;          
- *Avance*: permite crear una declaración de producción de avance;    
- *Cierre*: permite crear una declaración de producción de cierre;    

Cada declaración de producción debe tener como primera fila una declaración de apertura que determina el momento en que inicia la labor.              
Esta puede ser seguida por un avance o directamente por una fase de cierre dependiendo del caso. La diferencia sustancial es que el cierre no permite ingresar más filas en la declaración, mientras que el avance sí lo permite.         
Además, también es posible insertar declaraciones de suspensión seguidas de una de reanudación, en caso de que sea necesario detener la producción por algún motivo.

*Botón específico*:  

> **Guardar**: permite guardar las modificaciones realizadas;        
> **Nueva declaración de producción**: permite añadir una nueva fila de la declaración;          
> **Recalcular tiempo de máquina**: permite recalcular el tiempo de máquina de todas las filas de la declaración;          
> **Recalcular tiempo de mano de obra**: permite recalcular el tiempo de mano de obra de todas las filas de la declaración;          
> **Insertar declaraciones**: permite insertar una nueva fila de declaración posterior a las ya insertadas;         
> **Nueva suspensión/reanudación**: permite insertar simultáneamente una fila de suspensión y una de reanudación, indicando en el pop-up fecha y hora para cada una; el botón se activa solo si el último estado de la declaración es de *Apertura* o *Avance*;                 
> **Eliminar declaraciones**: permite eliminar la fila de declaración seleccionada;            
> **Abrir UDC**: permite abrir la *Gestión de unidad de carga<!-- Gestione unità di carico -->* filtrando la unidad de carga relativa a la fila de declaración seleccionada;          
> **Crear UDC**: permite crear una unidad de carga<!-- unità di carico --> relativa a la fila de declaración seleccionada. Para crearla es necesario primero ingresar manualmente el *Tipo de unidad de carga* y el *Empleado*;       
> **Registro de declaraciones**: permite crear el asiento de movimiento de almacén<!-- registrazione del movimento di magazzino --> correspondiente a la fila de declaración seleccionada;          
> **Restaurar declaraciones**: permite anular el registro del movimiento de almacén<!-- registrazione del movimento di magazzino --> correspondiente a la fila de declaración seleccionada.                                     

*Campos específicos*: 

**Registrado**: indica que la fila de la declaración ha sido registrada y se ha creado el correspondiente movimiento de almacén<!-- movimento di magazzino -->;        
**Fecha**: indica la fecha de inicio relativa a la fila de la declaración;         
**Hora**: indica la hora de inicio relativa a la fila de la declaración;         
**Número**: es un número progresivo que se asigna a cada fila de la declaración (siempre comienza desde 1);        
**Estado de la declaración**: permite definir el estado relativo a la fila de la declaración. Puede asumir los siguientes valores: *Apertura*, *Suspensión*, *Reanudación*, *Avance* o *Cierre*;        
**Actividad de configuración**: en las Declaraciones de producción<!-- Dichiarazioni di produzione --> y en las Declaraciones MES se ha agregado un indicador de Actividad de configuración. La marca está habilitada (en las Declaraciones de producción) y visible (Declaraciones MES) solo si la fase declarada, o la primera fase de un grupo de fases, prevé el uso de una máquina. Activar la marca de una actividad de configuración comporta el incremento del contador de tiempo como **Tiempo de configuración**, de lo contrario el incremento se realizará sobre el contador de **Tiempo de trabajo**.     
**Motivo de suspensión**: permite indicar el motivo de suspensión a utilizar para la correspondiente fila de declaración. Se habilita solo si el *Estado de la declaración* es de tipo *Suspensión*;     
**Lote**: permite ingresar manualmente el número de lote relativo a la cantidad producida;    
**Cantidad producida**: indica la cantidad producida relativa a la fila de la declaración;         
**Unidad de medida alternativa**: indica la unidad de medida alternativa utilizada;     
**Cantidad alternativa**: indica la cantidad producida en la unidad de medida alternativa utilizada;       
**Almacén de depósito**: indica el almacén<!-- magazzino --> de depósito de la cantidad producida;         
**Motivo de depósito**: indica el motivo<!-- causale --> de depósito utilizado para la cantidad producida;         
**Ubicación de depósito**: indica la ubicación de depósito de la cantidad producida;         
**Cantidad descartada**: indica la cantidad descartada relativa a la fila de la declaración;        
**Almacén de descarte**: indica el almacén de depósito de la cantidad descartada;      
**Motivo de descarte**: indica el motivo de depósito utilizado para la cantidad descartada;       
**Ubicación de descarte**: indica la ubicación de depósito de la cantidad descartada;        
**Defecto**: permite ingresar el defecto relativo a la cantidad descartada. Se habilita solamente después de haber ingresado un valor mayor que cero en el campo de **Cantidad descartada**;       
**Almacén de consumo**: permite especificar el almacén de consumo del artículo (en cabecera de la declaración de producción<!-- dichiarazione di produzione -->) utilizado por la fase anterior;            
**Motivo de consumo**: permite especificar el motivo de consumo del artículo (en cabecera de la declaración de producción) utilizado por la fase anterior;       
**Ubicación de consumo**: permite especificar la ubicación de consumo del artículo (en cabecera de la declaración de producción) utilizado por la fase anterior;        
**Máquinas**: indica el número de máquinas, indica la descripción del motivo de depósito de la cantidad producida;             
**Número de máquinas**: indica el número de máquinas utilizadas relativo a la fila de la declaración;        
**Grupos de mano de obra**: indica el código del grupo de mano de obra utilizado relativo a la fila de la declaración;         
**Número de operarios**: indica el número de operarios utilizados relativo a la fila de la declaración;        
**Sitio de producción**: indica el código del sitio de producción relativo a la fila de la declaración;     
**Tiempo de máquina**: indica el tiempo de máquina relativo a la fila de la declaración; se calcula como la diferencia entre *fecha/hora* de la declaración actual y la de la declaración anterior. (La etiqueta del campo cambia según la unidad de medida del tiempo de la fase declarada);           
**Tiempo de mano de obra**: indica el tiempo de mano de obra relativo a la fila de la declaración; se calcula como la diferencia entre *fecha/hora* de la declaración actual y la de la declaración anterior. (La etiqueta del campo cambia según la unidad de medida del tiempo de la fase declarada);                    
**Tiempo de preparación**: indica el tiempo de preparación relativo a la fila de la declaración; se indica manualmente. (La etiqueta del campo cambia según la unidad de medida del tiempo de la fase declarada);             
**Empleado**: indica el código del usuario que está realizando la declaración;             
**Apellido**: indica el apellido del usuario que está realizando la declaración;            
**Nombre**: indica el nombre del usuario que está realizando la declaración;           
**Unidad de carga**: indica el número de la unidad de carga, compuesto por año, número de orden de producción y un consecutivo. Para que sea posible utilizar la unidad de carga en las declaraciones de producción, es necesario que el **Grupo**, configurado en el [Tipo grupo UDC](/docs/configurations/tables/logistics/loading-unit-group-type/) de la unidad de carga, sea de tipo *Orden interna de producción<!-- Commessa di produzione -->* u *Orden de producción*;       
**Tipo de unidad de carga**: indica el tipo de unidad de carga;     
**Descripción del tipo de unidad de carga**: indica la descripción del tipo de unidad de carga;         
**Número de unidad de carga**: indica el número de la unidad de carga;    
**Unidad de carga de descarga**: **Work in progress**       
**Altura**: indica la altura de la unidad de carga;    
**Anchura**: indica la anchura de la unidad de carga;    
**Profundidad**: indica la profundidad de la unidad de carga;    
**Descripción del motivo de suspensión**: indica la descripción del *Motivo de suspensión* utilizado en la fila de la declaración;                       
**Descripción del almacén de depósito**: indica la descripción del almacén de depósito de la cantidad producida;         
**Descripción del motivo de depósito**: indica la descripción del motivo de depósito de la cantidad producida;      
**Descripción del almacén de descarte**: indica la descripción del almacén de depósito de la cantidad descartada;      
**Descripción del motivo de descarte**: indica la descripción del motivo de depósito de la cantidad descartada;      
**Descripción de la máquina**: indica la descripción de la máquina utilizada;            
**Descripción del grupo de mano de obra**: indica la descripción del grupo de mano de obra utilizado;              
**Descripción del sitio de producción**: indica la descripción del sitio de producción utilizado.

La parte inferior del formulario está compuesta por una serie de pestañas relativas a la fila de la declaración seleccionada.

## Materiales

En esta pestaña se reportan automáticamente los materiales utilizados en la fase para la realización del artículo a producir, pero el usuario puede modificar los datos y/o añadir más materiales según sea necesario.      
Obviamente, para que los materiales se reporten automáticamente, la fase debe ser la última de tipo *Productiva* y *Movible<!-- Movimentabile -->* presente en el ciclo; en caso de que no sea la última, igualmente debe ser de tipo *Productiva* y *Movible* y haberle sido asignados materiales directamente.  

*Campos específicos*: 

**Registrado**: indica que el material de la fila de la declaración seleccionada ha sido registrado y se ha creado el correspondiente movimiento de almacén;        
**Unidad de carga de material**: permite indicar la unidad de carga desde la cual se toma el material;             
**Clase**: indica la clase del artículo;         
**Código del artículo**: indica el código del artículo;         
**Variante**: indica el código de variante del artículo;         
**Unidad de medida**: indica la unidad de medida principal del material;        
**Cantidad retirada**: indica la cantidad retirada a través del procedimiento [Lista de recogida de materiales](/docs/production/pp-production-in-progress/picking-materials-list);         
**Cantidad consumida**: indica la cantidad utilizada de material;         
**Unidad de medida alternativa**: indica la unidad de medida alternativa del material;        
**Cantidad alternativa**: indica la cantidad utilizada del material en la unidad de medida alternativa;        
**Almacén de consumo**: indica el código del almacén de consumo del material;         
**Motivo de consumo**: indica el código del motivo de consumo del material;         
**Ubicación de consumo**: indica el código de ubicación del almacén de consumo del material;         
**Cantidad descartada**: indica la cantidad descartada del material;     
**Almacén de descarte**: indica el código del almacén de descarte del material;     
**Ubicación de descarte**: indica el código de ubicación del almacén de descarte del material;        
**Motivo de descarte**: indica el código del motivo de descarte del material;     
**Descripción del artículo**: indica la descripción del artículo;        
**Descripción de la variante**: indica la descripción de la variante del artículo;        
**Descripción del almacén de consumo**: indica la descripción del almacén de consumo del material;        
**Descripción del motivo de consumo**: indica la descripción del motivo de consumo del material;        
**Descripción del almacén de descarte**: indica la descripción del almacén de descarte del material;        
**Descripción del motivo de descarte**: indica la descripción del motivo de descarte del material;        
**Prioridad**: indica la prioridad con la que se visualizan los materiales.        

Además, en la parte inferior es posible ingresar los lotes y también los números de serie en sus respectivas cuadrículas.

La cuadrícula de *Lotes* se compone de las siguientes columnas:

**Lote**: indica el número de lote del material seleccionado;        
**Código de lote proveedor**: indica el número de lote del proveedor del material seleccionado;         
**Cantidad**: indica la cantidad de material seleccionado para ese lote;         
**Ubicación**: indica la ubicación de ese lote del material seleccionado;     
**Fecha de inicio**: indica la fecha de inicio del lote del material seleccionado;         
**Fecha de caducidad**: indica la fecha de caducidad del lote del material seleccionado;         
**Cuenta/Subcuenta/Descripción de la cuenta**: indican respectivamente la cuenta, subcuenta y descripción del cliente/proveedor del material seleccionado.   

La cuadrícula de *Serial number* se compone de las siguientes columnas:

**Código de barras**: el código de barras muestra el número de número de serie y la otra información relativa. Para más información sobre cómo codificar los códigos de barras a leer en este campo, consulte la página relativa al [Tokenizador de códigos de barras<!-- Barcode tokenizer -->](/docs/configurations/tables/general-settings/barcode-tokenizer);          
**Tipo de número de serie**: indica el tipo de número de serie del material seleccionado;    
**Número de serie**: indica el número de serie del material seleccionado;    
**Fecha de inicio**: indica la fecha de inicio del número de serie del material seleccionado;    
**Anulado**: indica que el número de serie está en estado anulado;      
**Lote**: indica el código de lote del número de serie del material seleccionado.             

## Equipo

Esta pestaña permite gestionar los miembros del equipo que realizan la labor relativa a la fila de la declaración seleccionada, indicando para cada uno fecha y hora de inicio y fin del trabajo.

*Campos específicos*: 

**Código**: indica el código del operador que está trabajando en la declaración;             
**Apellido**: indica el apellido del operador que está trabajando en la declaración;     
**Nombre**: indica el nombre del operador que está trabajando en la declaración;        
**Jefe de equipo**: indica que ese operador también es jefe de equipo;      
**Actividad**: indica la actividad que está realizando el operador;        
**Descripción**: indica la descripción de la actividad que está realizando el operador;      
**Preparación**: indica que el tiempo trabajado por el operador se calculará como tiempo de preparación en los análisis posteriores;       
**Fecha de inicio**: indica la fecha de inicio del trabajo del operador;         
**Hora de inicio**: indica la hora de inicio del trabajo del operador;         
**Fecha de fin**: indica la fecha de fin del trabajo del operador;         
**Hora de fin**: indica la hora de fin del trabajo del operador;         
**Fecha de creación**: indica la fecha de creación del registro;         
**Fecha de última modificación**: indica la fecha de última modificación del registro;         
**Operador**: indica el usuario que ha creado el registro.

## Artículos alternativos

Esta pestaña permite añadir y gestionar todos aquellos artículos (spin-off) que se realizan como consecuencia de la producción de un artículo principal.       
Por tanto, es posible insertarlos en la cuadrícula dedicada con la posibilidad de gestionar también los correspondientes lotes y números de serie.      
Obviamente, los lotes y números de serie se refieren a la fila del artículo alternativo seleccionado.      
Los movimientos de carga de los artículos alternativos se efectuarán con el almacén<!-- magazzino -->, motivo<!-- causale --> y ubicación indicados en la fila.

La cuadrícula de *Lotes* se compone de las siguientes columnas:

**Lote**: indica el número de lote del artículo;  
**Tipo de código de lote**: indica el tipo de código de lote del artículo;         
**Tipo de lote**: indica el tipo de lote del artículo;         
**Código de lote proveedor**: indica el número de lote del proveedor del artículo;       
**Notas**: permite insertar una nota relativa al lote;                 
**Cantidad**: indica la cantidad del artículo para ese lote;         
**Ubicación**: indica la ubicación de ese lote del artículo;     
**Fecha de inicio**: indica la fecha de inicio del lote del artículo;         
**Fecha de caducidad**: indica la fecha de caducidad del lote del artículo;         
**Cuenta/Subcuenta/Descripción de la cuenta**: indican respectivamente la cuenta, subcuenta y descripción del cliente/proveedor del artículo.   

La cuadrícula de *Serial number* se compone de las siguientes columnas:
    
**Código de número de serie**: indica el número de serie del artículo;      
**Tipo de número de serie**: indica el tipo de número de serie del artículo;  
**Número de serie cliente**: indica el número de serie del cliente para ese artículo;      
**Número de serie proveedor**: indica el número de serie del proveedor para ese artículo;      
**Fecha de inicio**: indica la fecha de inicio del número de serie del artículo;    
**Anulado**: indica que el número de serie está en estado anulado;      
**Lote**: indica el código de lote del número de serie del artículo.             

## Suspensiones

Esta pestaña permite especificar varios motivos de suspensión con los minutos relativos y solo se activa en una fila con estado de declaración en *Suspensión*.  

## Descarte

Esta pestaña permite especificar varios almacenes<!-- magazzini --> y motivos de descarte<!-- causali di scarto --> con las respectivas cantidades y solo se activa si se declara una cantidad descartada.  

## Extra Data

Permite gestionar y visualizar los Extra Data relativos a la declaración.

Para una descripción detallada sobre los extra data se remite al artículo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Lotes y Serial Number

En la pestaña **Lotes y Serial numbers**, en la fase de registro de la declaración de producción, se reportan automáticamente los lotes y los números de serie de los artículos producidos según la lógica indicada en la pestaña [Lotes y Serial numbers](/docs/erp-home/registers/items/create-new-item) de la ficha del artículo.      
En caso de que se indique un lote en el campo lote de la fila de declaración, los artículos producidos se registrarán con ese número, que tiene prioridad sobre las reglas introducidas en la ficha.

La cuadrícula de *Lotes* se compone de las siguientes columnas:

**Lote**: indica el número de lote del artículo;  
**Tipo de código de lote**: indica el tipo de código de lote del artículo;         
**Tipo de lote**: indica el tipo de lote del artículo;         
**Código de lote proveedor**: indica el número de lote del proveedor del artículo;       
**Notas**: permite introducir una nota relativa al lote;                 
**Cantidad**: indica la cantidad del artículo para ese lote;         
**Ubicación**: indica la ubicación de ese lote del artículo;     
**Fecha de inicio**: indica la fecha de inicio del lote del artículo;         
**Fecha de caducidad**: indica la fecha de caducidad del lote del artículo;         
**Cuenta/Subcuenta/Descripción de la cuenta**: indican respectivamente la cuenta, subcuenta y descripción del cliente/proveedor del artículo.   

La cuadrícula de *Serial number* se compone de las siguientes columnas:
    
**Código de número de serie**: indica el número de serie del artículo;      
**Tipo de número de serie**: indica el tipo de número de serie del artículo;  
**Número de serie cliente**: indica el número de serie del cliente para ese artículo;      
**Número de serie proveedor**: indica el número de serie del proveedor para ese artículo;      
**Fecha de inicio**: indica la fecha de inicio del número de serie del artículo;    
**Anulado**: indica que el número de serie está en estado anulado;      
**Lote**: indica el código de lote del número de serie del artículo.             

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).