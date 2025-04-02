---
title: nuova dichiarazione
sidebar_position: 2
---

Normalmente, las *Declaraciones de producción* se generan automáticamente a través de Fluentis [MES](/docs/production/mes/mes-intro), pero el usuario también tiene la opción de generarlas manualmente utilizando este formulario.

Al abrir el formulario, es necesario ingresar la orden de producción y la fase/sotofase correspondiente que se desea declarar, de este modo se cargarán automáticamente los datos relativos en la parte superior del formulario.

En la cuadrícula central se deben ingresar las líneas de la declaración de producción.  
El primer dato a ingresar es el *Estado de la declaración* que puede tener los siguientes valores:

- *apertura*: permite crear un informe de producción de apertura;    
- *sospensione*: permite crear un informe de producción de suspensión;    
- *ripresa*: permite crear un informe de producción de reanudación; se debe ingresar solo después de una *Suspensión*;          
- *avanzamento*: permite crear un informe de producción de avance;    
- *chiusura*: permite crear un informe de producción de cierre;    

Cada declaración de producción debe tener como primera línea una declaración de apertura que determina el momento en que comienza el trabajo.              
Esta puede ser seguida por un avance o directamente por una fase de cierre, según el caso. La diferencia sustancial es que el cierre no permite ingresar más líneas de declaración, mientras que el avance sí.         
Además, también es posible ingresar declaraciones de suspensión seguidas de una de reanudación, en caso de que sea necesario detener la producción por algún motivo.

*Botones específicos*:  

> **nuova dichiarazione**: permite ingresar una nueva línea de la declaración;          
> **nuova sospensione/ripresa**: permite ingresar simultáneamente una línea de suspensión y una línea de reanudación, indicando en el pop-up la fecha y la hora para cada una; el botón se activa solo si el último estado de la declaración es *Apertura* o *Avanzamento*;                 
> **Recalcular tiempo máquina (Ricalcola tempo macchina)**: permite recalcular el tiempo máquina de todas las líneas de la declaración;          
> **Recalcular tiempo hombre (Ricalcola tempo uomo)**: permite recalcular el tiempo de mano de obra de todas las líneas de la declaración;          
> **inserisci dichiarazione**: permite insertar una nueva línea de declaración después de las ya ingresadas;         
> **Eliminar declaración (Cancella dichiarazione)**: permite eliminar la línea de declaración seleccionada;             
> **gestione udc**: permite abrir la *Gestión de unidad de carga* filtrando la unidad de carga relacionada con la línea de la declaración seleccionada;          
> **crea udc**: permite crear una unidad de carga relacionada con la línea de la declaración seleccionada. Para crearla, es necesario primero ingresar manualmente el *Tipo de unidad de carga* y el *Empleado*;  
> **Registro de declaración (Registrazione dichiarazione)**: permite crear el registro del movimiento de almacén relacionado con la línea de declaración seleccionada;          
> **Restaurar declaración (Ripristino dichiarazione)**: permite anular el registro del movimiento de almacén relacionado con la línea de declaración seleccionada.                                     

*Campos específicos*: 

**registrato**: indica que la línea de la declaración ha sido registrada y se ha creado el movimiento de almacén correspondiente;        
**data**: indica la fecha de inicio relativa a la línea de la declaración;         
**ora**: indica la hora de inicio relativa a la línea de la declaración;         
**numero**: es un número secuencial que se asigna a cada línea de la declaración (siempre comienza desde 1);        
**stato dichiarazione**: permite definir el estado relativo a la línea de la declaración. Puede asumir los siguientes valores: *Apertura*, *Sospensione*, *Ripresa*, *Avanzamento* o *Chiusura*;        
**causale di sospensione**: permite indicar la causa de suspensión a utilizar para la línea de declaración correspondiente. Se habilita solo si el *Estado de declaración* es de tipo *Sospensione*;     
**lotto**: permite ingresar manualmente el número de lote relativo a la cantidad producida;    
**quantità prodotta**: indica la cantidad producida relativa a la línea de la declaración;         
**unità di misura alternativa**: indica la unidad de medida alternativa utilizada;     
**quantità alternativa**: indica la cantidad producida en la unidad de medida alternativa utilizada;       
**magazzino versamento**: indica el almacén de depósito de la cantidad producida;         
**causale versamento**: indica la causa de depósito utilizada para la cantidad producida;         
**versamento ubicazione**: indica la ubicación de depósito de la cantidad producida;         
**quantità scartata**: indica la cantidad descartada relativa a la línea de la declaración;        
**Almacén de descarte (Magazzino di scarto)**: indica el almacén de depósito de la cantidad descartada;      
**Causa de descarte (Causale di scarto)**: indica la causa de depósito utilizada para la cantidad descartada;       
**scarto ubicazione**: indica la ubicación de depósito de la cantidad descartada;        
**macchine**: indica el número de las máquinas que indica la descripción de la causa de depósito de la cantidad producida;             
**numero macchine**: indica el número de máquinas utilizadas relacionadas con la línea de la declaración;        
**gruppi manodopera**: indica el código del grupo de mano de obra utilizado relacionado con la línea de la declaración;         
**numero operai**: indica el número de operarios utilizados relacionados con la línea de la declaración;        
**sito produttivo**: indica el código del sitio productivo relacionado con la línea de la declaración;     
**Minutos de máquina (Minuti macchina)**: indica el tiempo de máquina en minutos relativo a la línea de la declaración; se calcula como la diferencia entre la *fecha/hora* de la declaración actual y la de la declaración anterior;           
**Minutos de mano de obra (Minuti manodopera)**: indica el tiempo de mano de obra en minutos relativo a la línea de la declaración; se calcula como la diferencia entre la *fecha/hora* de la declaración actual y la de la declaración anterior;              
**Minutos de equipamiento (Minuti attrezzaggio)**: indica el tiempo de equipamiento en minutos relativo a la línea de la declaración; se indica manualmente;           
**dipendente**: indica el código del usuario que está realizando la declaración;             
**cognome**: indica el apellido del usuario que está realizando la declaración;            
**nome**: indica el nombre del usuario que está realizando la declaración;           
**unità di carico**: indica el número de la unidad de carga, compuesto por el año, número de orden de producción y un número secuencial;                
**Tipo de unidad de carga (Tipo unità di carico)**: indica el tipo de unidad de carga;     
**Descripción del tipo de unidad de carga (Descrizione tipo unità di carico)**: indica la descripción del tipo de unidad de carga;         
**numero unità di carico**: indica el número de la unidad de carga;    
**Unidad de carga de descarga (Unità di carico di scarico)**: **Trabajo en progreso (Work in progress)**       
**altezza**: indica la altura de la unidad de carga;    
**larghezza**: indica la anchura de la unidad de carga;    
**profondità**: indica la profundidad de la unidad de carga;    
**Descripción de la causa de suspensión (Descrizione causale di sospensione)**: indica la descripción de la *Causa de suspensión* utilizada en la línea de la declaración;                       
**Descripción del almacén de depósito (Descrizione magazzino di versamento)**: indica la descripción del almacén de depósito de la cantidad producida;         
**Descripción de la causa de depósito (Descrizione causale di versamento)**: indica la descripción de la causa de depósito de la cantidad producida;      
**Descripción del almacén de descarte (Descrizione magazzino di scarto)**: indica la descripción del almacén de depósito de la cantidad descartada;      
**Descripción de la causa de descarte (Descrizione causale di scarto)**: indica la descripción de la causa de depósito de la cantidad descartada;      
**descrizione macchina**: indica la descripción de la máquina utilizada;            
**descrizione gruppo manodopera**: indica la descripción del grupo de mano de obra utilizado;              
**Descripción del sitio de producción (Descrizione sito produzione)**: indica la descripción del sitio productivo utilizado.

La parte inferior del formulario se compone de una serie de pestañas relativas a la línea de la declaración seleccionada.

## Materiales

En esta pestaña se presentan automáticamente los materiales utilizados en la fase para la realización del artículo a producir, pero el usuario puede modificar los datos y/o agregar más materiales según las necesidades.      
Por supuesto, para que los materiales se muestren automáticamente, la fase debe ser la última de tipo *Productivo* y *Movible* presente en el ciclo; si no es la última, debe ser de tipo *Productivo* y *Movible* y se le deben haber asignado materiales directamente.  

*Campos específicos*: 

**Unidad de carga material (Unità di carico materiale)**: permite indicar la unidad de carga de la que se toma el material;             
**classe**: indica la clase del artículo;         
**codice articolo**: indica el código del artículo;         
**variante**: indica el código variante del artículo;         
**unità di misura**: indica la unidad de medida principal del material;        
**quantità consumata**: indica la cantidad utilizada del material;         
**unità di misura alternativa**: indica la unidad de medida alternativa del material;        
**quantità alternativa**: indica la cantidad utilizada del material en la unidad de medida alternativa;        
**Almacén de consumo (Magazzino consumo)**: indica el código del almacén de consumo del material;         
**Causa de consumo (Causale consumo)**: indica el código de la causa de consumo del material;         
**quantità scartata**: indica la cantidad descartada del material;     
**Almacén de descarte (Magazzino di scarto)**: indica el código del almacén de descarte del material;     
**Causa de descarte (Causale di scarco)**: indica el código de la causal de descarte del material;     
**descrizione articolo**: indica la descripción del artículo;        
**descrizione variante**: indica la descripción de la variante del artículo;        
**Descripción del almacén de consumo (Descrizione magazzino consumo)**: indica la descripción del almacén de consumo del material;        
**Descripción de la causa de consumo (Descrizione causale consumo)**: indica la descripción de la causa de consumo del material;        
**Descripción del almacén de descarte (Descrizione magazzino di scarto)**: indica la descripción del almacén de descarte del material;        
**Descripción de la causa de descarte (Descrizione causale di scarto)**: indica la descripción de la causa de descarte del material;        
**priorità**: indica la prioridad con la que se visualizan los materiales,        

Además, en la parte inferior es posible ingresar los lotes y también los números de serie en las respectivas cuadrículas.

La cuadrícula de *Lotes* se compone de las siguientes columnas:

**lotto**: indica el número de lote del material seleccionado;        
**codice lotto fornitore**: indica el número de lote del proveedor del material seleccionado;         
**quantità**: indica la cantidad de material seleccionado para ese lote;         
**ubicazione**: indica la ubicación de ese lote del material seleccionado;     
**data inizio**: indica la fecha de inicio del lote del material seleccionado;         
**data scadenza**: indica la fecha de caducidad del lote del material seleccionado;         
**Cuenta/Subcuenta/Descripción de la cuenta (Conto/Sottoconto/Descrizione conto)**: indican respectivamente cuenta, subcuenta y descripción del cliente/proveedor del material seleccionado.   

La cuadrícula de *Números de serie* se compone de las siguientes columnas:

**barcode**: el código de barras presenta el número de serie y la otra información relativa. Para toda la información sobre cómo codificar los códigos de barras para leer en este campo, consulte la página relativa al [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer);          
**tipo serial number**: indica el tipo de número de serie del material seleccionado;    
**serial number**: indica el número de serie del material seleccionado;    
**data inizio**: indica la fecha de inicio del número de serie del material seleccionado;    
**annullato**: indica que el número de serie está en estado anulado;      
**lotto**: indica el código de lote del número de serie del material seleccionado.             

## Empleado

Esta pestaña permite gestionar a los miembros del equipo que realizan el trabajo relativo a la línea de la declaración seleccionada, indicando para cada uno la fecha de inicio y fin del trabajo.

*Campos específicos*: 

**codice**: indica el código del operador que está trabajando en la declaración;             
**cognome**: indica el apellido del operador que está trabajando en la declaración;     
**nome**: indica el nombre del operador que está trabajando en la declaración;        
**Jefe de equipo (Capo squdra)**: indica que ese operador es también jefe de equipo;      
**attività**: indica la actividad que está realizando el operador;        
**Descripción (Descrzione)**: indica la descripción de la actividad que está realizando el operador;      
**attrezzaggio**: indica que el tiempo trabajado por el operador se considerará como tiempo de equipamiento en los análisis posteriores;       
**data inizio**: indica la fecha de inicio del trabajo del operador;         
**ora inizio**: indica la hora de inicio del trabajo del operador;         
**data fine**: indica la fecha de fin del trabajo del operador;         
**ora fine**: indica la hora de fin del trabajo del operador;         
**data creazione**: indica la fecha de creación del registro;         
**data ultima modifica**: indica la fecha de última modificación del registro;         
**operatore**: indica el usuario que creó el registro.

## Artículos alternativos

Esta pestaña permite agregar y gestionar todos aquellos artículos (spin-off) que se producen como consecuencia de la producción de un artículo principal.       
Por lo tanto, es posible ingresarlos en la cuadrícula dedicada con la posibilidad de gestionar también sus lotes y números de serie. Por supuesto, los lotes y números de serie están relacionados con la línea del artículo alternativo seleccionado.

La cuadrícula de *Lotes* se compone de las siguientes columnas:

**lotto**: indica el número de lote del artículo;  
**tipo codice lotto**: indica el tipo del código de lote del artículo;         
**Tipo de lote (Tipo lotto)**: indica el tipo del lote del artículo;         
**codice lotto fornitore**: indica el número de lote del proveedor del artículo;       
**note**: permite ingresar una nota relativa al lote;                 
**quantità**: indica la cantidad del artículo para ese lote;         
**ubicazione**: indica la ubicación de ese lote del artículo;     
**data inizio**: indica la fecha de inicio del lote del artículo;         
**data scadenza**: indica la fecha de caducidad del lote del artículo;         
**Cuenta/Subcuenta/Descripción de la cuenta (Conto/Sottoconto/Descrizione conto)**: indican respectivamente cuenta, subcuenta y descripción del cliente/proveedor del artículo.   

La cuadrícula de *Números de serie* se compone de las siguientes columnas:
    
**codice serial number**: indica el número de serie del artículo;      
**Tipo de número de serie (Tipo Serial numnber)**: indica el tipo de número de serie del artículo;  
**serial number cliente**: indica el número de serie del cliente para ese artículo;      
**serial number fornitore**: indica el número de serie del proveedor para ese artículo;      
**data inizio**: indica la fecha de inicio del número de serie del artículo;    
**annullato**: indica que el número de serie está en estado anulado;      
**lotto**: indica el código de lote del número de serie del artículo.             

## Suspensiones

Esta pestaña permite especificar múltiples causas de suspensión con los minutos correspondientes y se habilita únicamente en correspondencia con una línea con estado de declaración *Suspensión*.  

## Descarte

Esta pestaña permite especificar múltiples almacenes y causas de descarte con las cantidades correspondientes y se habilita únicamente si se declara una cantidad descartada.  

## Datos Extra

Permite gestionar y visualizar los Datos Extra relacionados con la declaración.

Para una descripción detallada sobre los datos extra, consulte el artículo [Datos extra](/docs/configurations/utility/extra-data/extradata/new-extradata).

## Lotes y Números de Serie

Esta pestaña permite gestionar los lotes y números de serie de los artículos principales producidos a través de las cuadrículas adecuadas.

La cuadrícula de *Lotes* se compone de las siguientes columnas:

**lotto**: indica el número de lote del artículo;  
**tipo codice lotto**: indica el tipo del código de lote del artículo;         
**Tipo de lote (Tipo lotto)**: indica el tipo del lote del artículo;         
**codice lotto fornitore**: indica el número de lote del proveedor del artículo;       
**note**: permite ingresar una nota relativa al lote;                 
**quantità**: indica la cantidad del artículo para ese lote;         
**ubicazione**: indica la ubicación de ese lote del artículo;     
**data inizio**: indica la fecha de inicio del lote del artículo;         
**data scadenza**: indica la fecha de caducidad del lote del artículo;         
**Cuenta/Subcuenta/Descripción de la cuenta (Conto/Sottoconto/Descrizione conto)**: indican respectivamente cuenta, subcuenta y descripción del cliente/proveedor del artículo.   

La cuadrícula de *Números de serie* se compone de las siguientes columnas:
    
**codice serial number**: indica el número de serie del artículo;      
**Tipo de número de serie (Tipo Serial numnber)**: indica el tipo de número de serie del artículo;  
**serial number cliente**: indica el número de serie del cliente para ese artículo;      
**serial number fornitore**: indica el número de serie del proveedor para ese artículo;      
**data inizio**: indica la fecha de inicio del número de serie del artículo;    
**annullato**: indica que el número de serie está en estado anulado;      
**lotto**: indica el código de lote del número de serie del artículo.             

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).