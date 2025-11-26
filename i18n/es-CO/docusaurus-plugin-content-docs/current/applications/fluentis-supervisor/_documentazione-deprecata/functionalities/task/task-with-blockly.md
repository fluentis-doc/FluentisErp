:::info
Cuando se abre la formulario de detalle, por defecto se visualiza el editor Blockly y no el editor textual.  
Es posible cambiar de la modalidad Blockly al editor textual (o viceversa) a través del menú desplegable **Tipo Script**, que permite seleccionar el modo deseado.
:::<!-- Quando si apre la form di dettaglio, di default viene visualizzato l'editor Blockly e non l'editor testuale.  
E' possibile passare da modalità Blockly ad editor testuale (o viceversa) attraverso il drop-down **Tipo Script** che consente di selezionare la modalità desiderata. -->

**Supervisor** aprovecha los bloques personalizados de la librería Blockly de Google para crear scripts en C#. Además de las categorías estándar de Blockly (operadores lógicos, instrucciones de ciclo, operaciones matemáticas, textos, fechas, listas, colores, variables), las categorías personalizadas que se pueden encontrar en la **Toolbox** son:

- **Variables contextuales a Supervisor**, contiene bloques para seleccionar variables del contexto actual y para convertir un objeto genérico en una cadena/número/...;

- **Diccionario**, contiene todos los bloques necesarios para trabajar con la estructura de datos tipo <span style={{ fontFamily: 'Consolas' }}>Diccionario</span>;

- **Objetos Fluentis**, divididos en tres subcategorías:
     - **Commons**, contiene bloques para realizar operaciones comunes sobre los *Objetos Fluentis*<!-- Oggetti Fluentis -->;
     - **Read Only**, contiene bloques específicos para realizar operaciones de solo lectura sobre los *Objetos Fluentis*<!-- Oggetti Fluentis -->;
     - **Read Write**, contiene bloques específicos para operaciones de lectura y escritura sobre los *Objetos Fluentis*<!-- Oggetti Fluentis -->;

- **Acceso a la base de datos**, contiene bloques que permiten ejecutar operaciones directamente sobre la base de datos, como llamar a stored procedures o leer valores desde recordsets.

- **Actividades**, a su vez subdivididas en categorías que llevan el mismo nombre de los grupos (los mismos grupos que pueden consultarse desde la formulario principal de las actividades). Los grupos estándar son:
     - **Utilidades**, que contiene todas las [actividades](../activity/activity-intro) provistas por defecto (el usuario no puede añadir nuevas actividades ni modificar las existentes en este grupo);
     - **Ejemplos**, contiene todos los ejemplos de actividades que pueden guiar al usuario en la creación de un nuevo *Task*<!-- Task --> personalizado (el usuario no puede añadir nuevas actividades ni modificar las de este grupo, es necesario crear un nuevo grupo con sus propias actividades personalizadas)

- **Globals**, contiene bloques que pueden recuperar **Parametros**<!-- Parametri --> globales o [listas de distribución](../distribution-list/distribution-list-intro)

- **Utilidades de Task**, contiene scripts útiles para todas las *actividades*<!-- attività -->;

Para añadir código a una *Task*<!-- Task --> con *Blockly*, simplemente arrastre y suelte los bloques desde la *Toolbox* hasta el **Workspace**.

- **#STD** gestiona el código dentro del método del script <span style={{ fontFamily: 'Consolas' }}>ExecuteTask()</span>;

Terminada la inserción del código es necesario guardar el proyecto y proceder a su compilación utilizando el botón dedicado.

El código generado del script aparecerá entre las dos líneas comentadas (denominadas <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// START WIZARD CODE</span> y <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// END WIZARD CODE</span>).

![alt text](/img/it-it/applications/supervisor/supervisor10.png)