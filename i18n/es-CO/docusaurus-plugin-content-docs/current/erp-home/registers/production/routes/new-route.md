---
title: Nuevo ciclo (Nuovo ciclo)
sidebar_position: 2
---

Después de crear las listas de materiales de los artículos, se debe proceder con la definición de los ciclos de trabajo, es decir, el conjunto de las distintas fases de producción de un producto.

El procedimiento para crear un **Nuevo ciclo** se abre a través de la ruta:

**Producción > Ciclos de trabajo > Ciclos de trabajo**, haciendo clic en el botón **Nuevo**

o

**Producción > Ciclos de trabajo > Nuevo ciclo de trabajo**.

Con ambos procedimientos se abrirá el formulario **Gestión de ciclos de trabajo** compuesto por una sección en la que se determinarán las características obligatorias del ciclo y por una sección compuesta por varias pestañas que agrupan sus características específicas.

### Sección superior

Aquí se ingresan la información básica relacionada con el ciclo:

**ciclo**: se ingresará el código y la descripción del ciclo de trabajo;  

**articolo e variante**: a través de la ayuda se ingresará el artículo relacionado con el ciclo y la variante en caso de que exista la variante del artículo seleccionado;  

**versione**: se seleccionará a través del combo correspondiente la versión de la lista para la cual se desea ingresar un nuevo ciclo de trabajo;  

**ciclo**: se define si se trata de un ciclo *operativo* o *non operativo*, y en este último caso no es utilizable;  

**tipo ciclo**: puede ser *standard* para el ciclo principal, que se propondrá como default para ese artículo y tendrá como número de ciclo 1, o en el caso de que haya más ciclos para el mismo artículo, se activará la opción *alternativo* y se habilitará también la posibilidad de variar el número de ciclo. Para cada artículo, solo es posible tener un ciclo *estándar*;  

**Fecha de ingreso / Fecha de modificación (Data inserimento / Data modifica)**: las fechas *Fecha de ingreso / Fecha de modificación* se completarán automáticamente, respectivamente, con la fecha de ingreso del ciclo y, si se realiza alguna modificación, también con la fecha de última modificación del ciclo;  

### Fases

En la cuadrícula se ingresan las fases de trabajo del ciclo; para cada ciclo podemos tener múltiples fases de trabajo. Las fases se codifican dentro de la tabla [Fases Estándar (Fasi Standard)](/docs/configurations/tables/production/standard-phases) que se encuentra entre las tablas de la sección *produzione*.

Las informaciones importantes que conciernen a la fase y que son relevantes a nivel productivo son:

**codice**: indica el código de la fase estándar; una vez seleccionada la fase, la cuadrícula se completará con los datos establecidos en la tabla;  

**fase**: indica el número progresivo de fase; que se propone automáticamente en base al valor del parámetro *proposta sequenza fase*, presente en configuración; *Parámetros > Producción > Parámetros de pedidos de producción (Parametri > Produzione > Parametri ordini di produzione)*. Este parámetro permite elegir, durante la creación de un ciclo de trabajo, el número de secuencia de la fase que se propone, que puede ser tomado del número de secuencia de la fase estándar o como progresivo del orden de ingreso, indicando también el valor progresivo de ingreso en el campo paso.  

**sottofase**: indica el número de subfase para diferenciarlas dentro del mismo número de fase;  

**Descripción fase / subfase (Descrizione fase / sottofase)**: indica la descripción de la fase / subfase;  

**tipo**: permite definir si se trata de una fase interna, implicando únicamente la creación de órdenes de producción internas, o si es una fase externa, generando también una orden de trabajo;  

**centro di lavoro**: indica el centro de trabajo, es decir, la máquina en la que se llevará a cabo esa fase específica;  

**tempo fisso**: si está habilitado, indica que el tiempo de esa fase es fijo y, por lo tanto, no variable según la cantidad; esto se hereda del centro de trabajo ingresado;  

**controllo qualità**: si está activado, este indicador indica que esta fase está sujeta a control de calidad y en la pestaña específica se puede indicar el *piano di controllo* que se utilizará para verificar el artículo una vez realizada la declaración de producción;  

**Fase productiva (Fase produttiva)**: si está activo, indica que la fase es productiva y se puede proceder a ingresar las señales de producción (por lo tanto, al activarlo, se desea que la producción para esta fase sea registrada); si no está activo, no será posible declarar la fase misma;  

**Fase movilizable (Fase movimentabile)**: si está activo, indica que en el momento en que se registre la fase de producción, también se crearán movimientos de almacén; esto significa que al proceder con la señalización de producción, también se procederá al ingreso del producto terminado en el almacén y a la salida de la materia prima utilizada para la producción en esa fase;  

:::note Nota
Todas las fases externas deben tener siempre los indicadores **Fase productiva (Fase produttiva)** y **Fase movilizable (Fase movimentabile)** activos.
:::

**Máquina / Grupo de mano de obra (Macchina/Gruppo manodopera)**: en estos campos se seleccionará, a través de la combo box, el código de la *máquina* en la que se lleva a cabo la fase y el código *grupo de mano de obra* que se utilizará; estos dos códigos provienen de las respectivas tablas previamente codificadas: [Grupos de mano de obra (Gruppi manodopera)](/docs/configurations/tables/production/labour-group) y [Máquinas (Macchine)](/docs/configurations/tables/production/machines), que siempre se encuentran entre las tablas de la sección *produzione*;  

**unità di misura tempo**: permite especificar la unidad de medida de los tiempos de la fase, que puede expresarse en días, horas, minutos y segundos;    

**Inicio / Fin validez (Inizio/Fine validità)**: permiten indicar la fecha de inicio y la fecha final de validez de una fase en caso de que se decida que esa fase específica será válida solo por un período determinado;  

**tipo di sovrapposizione**: en este campo, por defecto se establece el valor *nessuna*. Si existe una fase que se superpone a otra, se indicará el tipo de superposición entre los propuestos en el combo: *totale*, *Por pieza (A pezzo)* y *a tempo*. Al ingresar el valor *Total*, significa que la fase y subfase seleccionadas pueden comenzar al mismo tiempo que la fase indicada en los campos *Fase y subfase Superposición (Fase e sottofase Sovrapposizione)*. Mientras que al elegir la opción *a quantità* o *a tempo*, la fase seleccionada solo podrá comenzar a ser trabajada al alcanzar, respectivamente, el valor de cantidad producida o el tiempo de la fase indicada en los campos *Fase y subfase Superposición (Fase e sottofase Sovrapposizione)* que se ha indicado en el campo *valor*.

**valore**: permite indicar el valor relativo al tipo de superposición y no tiene relación con el valor económico (por ejemplo, si la superposición es *Por piezas (A pezzi)*, entonces en el campo *Valor* es necesario indicar cuántas piezas deben producirse antes de poder comenzar la fase, mientras que si la superposición es *a tempo* se debe ingresar en el campo *Valor* el tiempo que debe transcurrir para poder comenzar con la fase); 

**Fase de superposición / subfase de superposición (Fase sovrapposizione / sottofase sovrapposizione)**: en estos dos campos, en caso de superposición, se indicará la fase que se pretende superponer a la fase principal;  

**costo unitario**: en este campo se ingresará el costo de la fase cuando se decide no valorar con la valorización de la máquina y grupo de mano de obra;  

**ubicazione**: permite asociar una ubicación de almacén a la fase; esto significa que todos los artículos utilizados en esa fase estarán presentes en esa ubicación.

**descrizione terzista**: en caso de que la fase sea externa, se podrá indicar en este campo el contratista que se encargará de la fase externa;  

**descrizione centro di lavoro**, **descrizione macchina**, **descrizione gruppo manodopera**: en estos campos se encontrará las descripciones de los códigos relacionados con las diferentes secciones enumeradas.

Luego hay una tercera sección donde se indicarán los datos más precisos en referencia a la máquina, a los trabajadores y a los tiempos:

**numero macchine**: indica el número de máquinas necesarias para la ejecución de la fase;  

**Tiempos de máquina (Tempi macchina)**: permite indicar los tiempos de máquina expresados en la unidad de medida de referencia seleccionada anteriormente en la cuadrícula de fases, expresada en la unidad de medida indicada en el campo **unità di misura tempo**;  

**quantità fase**: indica la cantidad de producto que se estima producir durante la fase seleccionada (en cada ejecución de esa fase);  

**numero operai**: indica el número de trabajadores necesarios para la ejecución de la fase;  

**Tiempo de Trabajadores (Tempo Operai)**: el tiempo de empleo necesario para la ejecución de la fase, expresado en la unidad de medida indicada en el campo **unità di misura tempo**;  

**Tiempo de espera de cola (Tempo attesa coda)**: indica el tiempo de espera/cola que se sumará a la duración de la fase; es el tiempo de espera al final de cada ejecución de esa fase;  

**Tiempo de espera-Cola crea compromiso (Tempo attesa-Coda crea impegno)**: si está activo, indica que el tiempo de espera/cola crea un compromiso, por lo que no es posible comenzar una nueva fase ya que el centro de trabajo está ocupado hasta que expire el tiempo de espera/cola.

### Las pestañas (I tab)

**attrezzaggio**: en esta pestaña se indicarán los tiempos de equipamiento de la máquina para iniciar la fase y los tiempos de reajuste en caso de que sea necesario reajustar el centro de trabajo entre una ejecución y otra de la misma fase, respectivamente en los campos *tempo attrezzaggio* y *tempo riattrezzaggio*. Se podrá indicar el número de máquinas y trabajadores necesarios para la fase de equipamiento en los campos *numero macchine* y *numero operai*. Además, en caso de que el equipamiento se realice con *Centro de trabajo / Máquina / Grupo de mano de obra* diferente al de la fase, será posible especificar los nuevos datos a través de los combos respectivos.

**materiali**: en esta pestaña se indicarán los materiales que se desean descargar no al final de las fases de producción de ese producto terminado, sino al final de la fase específica. Al asociar un material a una determinada fase, este ya no se visualiza en la ayuda entre los materiales que quedan por asociar a las fases individuales. Se recuerda que todos los materiales no asociados a una fase específica se descargarán junto con la última fase *productiva* y *movilizable* del ciclo;          

**attrezzature**: en esta pestaña se ingresarán los equipos que se utilizarán dentro de la fase; se ingresará el equipo seleccionándolo a través del combo correspondiente entre los equipos codificados dentro de la tabla [Equipos (Attrezzature)](/docs/configurations/tables/production/equipments) que se encuentra en la sección de tablas dedicadas a la *produzione*. Si está activo, el indicador *schedulata* indicará que el equipo estará ocupado durante la producción; con este indicador la programación tomará en cuenta, no el artículo ingresado a través del combo de equipos, sino el artículo ingresado en los campos clase y código, el cual debe tener como *natura articolo* la tipología *attrezzatura* o *utensile*;  

**utensili**: en esta pestaña se ingresarán las herramientas eventuales, seleccionándolas a través del combo entre las que están codificadas dentro de la tabla [Herramientas (Utensili)](/docs/configurations/tables/production/tools) que se encuentra en la sección de tablas dedicadas a la *produzione*;  

**controllo qualità**: si se ha activado el indicador **controllo qualità** relacionado con la fase seleccionada, en esta pestaña se seleccionará el *piano di controllo*. Automáticamente se propondrán las *prove pianificate* que deben realizarse para el control del artículo. Para la comprensión de las columnas de esta cuadrícula se remite a la documentación relacionada con los Planes de control;     

**disegni**: en esta pestaña se ingresarán los diseños técnicos del artículo relacionados con las operaciones específicas de la fase; 

**annotazioni**: en estos campos se podrán ingresar anotaciones técnicas o de otro tipo relacionadas con la fase;  

**istruzioni operative**: permite cargar documentos de diversos tipos relacionados con la fase, los cuales luego también se visualizarán dentro de Fluentis MES;  

**alternative**: en esta pestaña se podrán ingresar fases alternativas que serán consideradas, en función de la prioridad asignada, por los procedimientos de la [Programación general (Pianificazione generale)](/docs/planning/ms-master-scheduling/general-schedule) o por el [M.R.P. (M.R.P.)](/docs/planning/ms-master-scheduling/mrp/), si los indicadores respectivos **Considerar las fases alternativas (Considera la fasi alternative)**, presentes en los parámetros de los procedimientos están activos durante su ejecución;      

**Datos extra de fases / Datos extra (Extra data fasi / Extra data)**: en estas dos pestañas se ingresarán, respectivamente, los datos extra para cada fase y los datos extra relacionados con el ciclo mismo, seleccionándolos a través del combo entre los que están precodificados en la tabla respectiva *Extradata* (Utility > Extradata). Para ingresar un dato extra se debe hacer clic con el botón derecho del ratón y seleccionar la opción agregar nuevo dato extra con la posibilidad de elegir si insertarlo en el primer nivel, o si ya hay datos extra ingresados, elegir si se desea insertar un dato extra hijo al dato extra ya existente; de esta manera aparecerá una nueva fila en la que se podrá proceder con la inserción.

*Botones específicos*:

> **inserisci fasi**: permite insertar nuevas fases en la cuadrícula relacionada con las fases;  
> **cancella fase**: permite eliminar una o varias fases seleccionadas;  
> **Actualizar de fase / Borrar datos de equipamiento (Aggiorna da fase / Cancella i dati attrezzaggio)**: aparecen en la Ribbon bar cuando nos posicionamos en la pestaña *Equipamiento*: a través del botón *Actualizar de fase* se actualizarán los datos de equipamiento tomándolos de la fase; a través del botón *Borrar datos de equipamiento* se eliminarán los datos relacionados con el equipamiento;  
> **aggiorna materiali da distinta base**: este botón aparece en la Ribbon bar cuando nos posicionamos en la pestaña *Materiales*: a través de este botón se agregarán en la pestaña los materiales tomándolos de la lista de materiales del artículo;  
> **Insertar / Borrar equipo (Inserisci / Cancella attrezzatura)**: estos botones aparecen en la Ribbon cuando nos posicionamos en la pestaña *Equipamiento*: a través de estos botones se pueden insertar los equipos o eliminar los equipos seleccionados;  
> **Insertar / Borrar herramientas (Inserisci / Cancella utensili)**: estos botones aparecen en la Ribbon cuando nos posicionamos en la pestaña *Herramientas*: a través de estos botones se pueden insertar las herramientas o eliminar las herramientas seleccionadas.  

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funciones, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).