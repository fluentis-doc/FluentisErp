---
title: MES
sidebar_position: 5
ai_generated: true
---

:::important ¿Para qué sirve?<!-- A cosa serve -->
La pantalla principal del Módulo de Ejecución de Producción (MES) de Fluentis está diseñada para optimizar y simplificar el proceso de declaración de actividades productivas. Esta interfaz permite a los operarios monitorizar y gestionar en tiempo real los recursos de producción, facilitando el ingreso de datos relacionados con las fases de fabricación y las cantidades producidas.

Los operadores pueden gestionar fácilmente la inserción y modificación de datos, gracias a funcionalidades como el "barcode Tokenizer" y la habilitación de controles específicos para garantizar la correcta registración de los movimientos<!-- registrazioni -->. Además, el sistema soporta diferentes métodos de asignación de tiempo y cantidades, permitiendo un análisis detallado del rendimiento productivo y garantizando una gestión eficiente de los recursos empleados.

Este enfoque integrado no solo mejora la visibilidad de las operaciones, sino que contribuye también a optimizar los flujos de trabajo y la productividad general de la empresa.
:::

## *Botones específicos*<!-- Pulsanti specifici -->:  

**Navegabilidad**<!-- Navigabilità -->
> *Anterior*: permite pasar a la pestaña anterior;     
> *Siguiente*: permite pasar a la pestaña siguiente;     
> *Actualizar*: permite actualizar todos los datos de la pantalla, a usar en caso de que se realicen modificaciones en el recurso utilizado;      
> *Borrar selección*: permite anular la selección de fases presentes en la cuadrícula principal.     

**Confirmación de señalización**<!-- Conferma segnalazione -->
> *Iniciar*: permite crear una señalización de inicio de producción;    
> *Avanzar*: permite crear una señalización de avance de producción;    
> *Suspender*: permite crear una señalización de suspensión de producción;    
> *Reanudar*: permite crear una señalización de reanudación de producción;    
> *Cerrar*: permite crear una señalización de cierre de producción;    
> *Anular*: permite eliminar todos los datos ingresados en Fluentis MES.                   

## Formulario principal<!-- Form principale -->

El formulario principal se compone de una sección con los siguientes campos y una cuadrícula que contiene las fases en trabajo: 

- **Código de barras**<!-- Codice barcode -->      
Gran parte de las operaciones que se pueden realizar en Fluentis MES pueden ser facilitadas y agilizadas gracias al uso del campo *Código de barras*, que si está configurado adecuadamente, reinterpreta de forma inteligente los datos adquiridos mediante la lectura del código de barras e inserta automáticamente los valores en sus campos correspondientes.    
Esto otorga una gran ventaja al operador tanto en velocidad de ingreso como en eficiencia, ya que solo tendrá que leer los datos siempre en el mismo campo *Código de barras*, sin preocuparse de cambiar el foco.     
Los códigos de barras pueden configurarse dentro del formulario Barcode tokenizer, ubicado en: Tablas > Configuración general > Barcode tokenizer.               
Por lo tanto, este campo *Código de barras*, en el MES, puede ser utilizado por el operador para agregar fases individuales, grupos de fases, o por ejemplo incluso las fases de toda una orden de producción<!-- ordine di produzione -->, o también cargar los lotes y/o números de serie de los materiales a descargar, todo simplemente leyendo los diferentes códigos de barras. 

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **Código de barras**, consulte la página correspondiente de [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

- **Workstation**      
El procedimiento es capaz de reconocer la workstation desde la que se está trabajando y, si a esta le ha sido asociado un centro de trabajo, se cargarán automáticamente todas las fases que estaban en proceso en ese centro de trabajo; en ese punto el operador puede elegir si continuar con la señalización de esas fases o, por ejemplo, agregar otras. Toda la información adicional puede consultarse en la sección dedicada a la [Workstation](/docs/production/mes/workstation).     

- **Recurso**<!-- Risorsa -->      
El campo *Recurso*, se utiliza para ingresar cualquier tipo de recurso de producción.    
Si se introduce un recurso de tipo *Centro de trabajo*, este será reemplazado automáticamente también en el campo correspondiente de *Centro de trabajo*, cargando por tanto las fases relacionadas con el nuevo centro recién ingresado.    
En caso de que se ingrese un recurso de tipo *Empleado*, este será utilizado como usuario de la declaración. El ingreso de un recurso de tipo empleado es obligatorio si está activada la casilla *Operador obligatorio* presente en la pestaña *Generales* de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).        

- **Centro de trabajo**<!-- Centro di lavoro -->
Indica el centro de trabajo en el que el operador está haciendo la declaración; es posible visualizar solo los centros de trabajo asociados a la *Workstation*. Si la *Workstation* no se ha ingresado, o no se ha asociado ningún *Centro de trabajo* a la *Workstation*, será posible ver todos los *Recursos de producción* de tipo *Centro de trabajo*.    

- **Fases en trabajo**<!-- Fasi in lavoro -->
Las fases pueden agregarse dentro de la cuadrícula mediante el campo *Código de barras*, o utilizando el botón específico *Seleccionar nuevas fases* presente en el menú de la derecha. La cuadrícula contiene una serie de información relativa a la orden<!-- commessa -->, a la orden de producción<!-- ordine di produzione -->, al proyecto, a la variante, etc... 
Toda esta información puede hacerse visible u oculta a través de la gestión en la pestaña *Layout* de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).   
Para la fila seleccionada, en la parte derecha de la cuadrícula, es posible visualizar la imagen por defecto ingresada en la [Ficha del artículo<!-- Anagrafica articolo -->](/docs/erp-home/registers/items/create-new-item); además, al hacer doble clic se visualizará a pantalla completa.       
                
### Pestaña Producción<!-- Tab Produzione -->      

*Botones específicos*:

> *Limpiar recurso*: permite quitar el valor ingresado en el campo *Recurso*;    
> *Seleccionar nuevas fases*: permite abrir una ayuda para seleccionar nuevas fases a agregar a las presentes en la cuadrícula principal.          
En caso de un centro multifase, si ya existen fases (ya iniciadas), es posible agregar otras solo si las fases previamente ingresadas se encuentran en estado *Iniciada* o *En suspensión*; de lo contrario, primero será necesario poner las fases en suspensión y luego se podrán agregar otras.
Si, por ejemplo, hay una fase en estado de suspensión y el usuario agrega una fase aún no iniciada, el procedimiento creará automáticamente la declaración de inicio y suspensión para la fase recién agregada con la misma fecha y hora; a partir de ahí, el usuario, mediante el botón *Reanudar*, podrá continuar el trabajo para todas las fases. Si, en cambio, las fases añadidas se encuentran en un estado diferente de "no iniciada", estas se alinearán al estado *En suspensión*. Al *Reanudar* las nuevas fases añadidas adquirirán la información del Centro de trabajo y Máquina utilizadas para las fases originales.           
> *Eliminar fase*: permite eliminar la fase o las fases seleccionadas de la cuadrícula principal.    

La pestaña **Producción** está dedicada al ingreso de información relativa a los tiempos de producción / ajuste y cantidades producidas / desechadas. Esta es la única que no puede ser ocultada y se compone de los siguientes campos:
> **Máquina**: en este widget la máquina se muestra de la siguiente manera: si la fase tiene una máquina asociada, esta se propone en el widget solo si en la tabla [Máquinas](/docs/configurations/tables/production/machines/), esa máquina tiene asociado el mismo centro de trabajo seleccionado en el MES. En ese caso, el usuario puede cambiar la máquina, pero solo eligiéndola entre las de la tabla de máquinas que tengan asociado ese centro de trabajo. Si la máquina presente en la fase no se encuentra entre las asociadas a ese centro de trabajo, no se mostrará ninguna máquina en el widget.           
Además, en ese caso, si el usuario intenta crear una declaración recibirá un mensaje que le obligará a introducir una máquina para poder continuar. Si, por el contrario, a la fase no se le ha asociado máquina alguna, no será obligatorio introducirla para poder continuar con las declaraciones.        
Si se seleccionan varias fases al mismo tiempo, la máquina será tomada de la primera fase seleccionada (o de la prioritaria, en caso de que así lo indique la secuencia) entre las que tengan el mismo centro de trabajo seleccionado en el MES.         
> **Tiempo de ajuste**: permite ingresar / modificar manualmente el tiempo de preparación;   
> **Actividad de ajuste**: En las Declaraciones de producción y en las Declaraciones M.E.S. se ha añadido un indicador de Actividad de ajuste. La casilla está habilitada (en Declaraciones de producción) y visible (en Declaraciones M.E.S.) solo si la fase declarada, o la primera de un grupo de fases, prevé el uso de una máquina. Activar la casilla de actividad de ajuste provoca el aumento del contador como **Tiempo de ajuste**, de lo contrario, el aumento será en el contador del **Tiempo de trabajo**.        
> **Tiempo de trabajo**: permite visualizar / modificar manualmente el tiempo de trabajo; es posible variar su comportamiento mediante las opciones *Ingreso de tiempo manual* y *Tiempo propuesto* presentes en [Recursos de producción](/docs/production/mes/production-resources). El tiempo se calcula automáticamente como la diferencia entre el tiempo de la declaración actual y el de la anterior;                   
> **Cantidad producida**: permite ingresar la cantidad producida con esa declaración;         
> **Cantidad alternativa**: permite ingresar la cantidad alternativa producida con esa declaración;      
> **Almacén de ingreso**: indica el almacén<!-- magazzino --> de carga de los productos realizados con la declaración;       
> **Causal de ingreso**: indica la causal<!-- causale --> de carga de los productos realizados con la declaración;       
> **Ubicación de ingreso**: indica la ubicación de carga de los productos realizados con la declaración;       
> **Almacén de ingreso de desecho**: indica el almacén de descarga de los productos realizados y descartados con la declaración;       
> **Causal de ingreso de desecho**: indica la causal de descarga de los productos realizados y descartados con la declaración;       
> **Ubicación de ingreso de desecho**: indica la ubicación de descarga de los productos realizados y descartados con la declaración;       
> **Defecto**: indica el defecto de descarga de los productos realizados y descartados con la declaración; está habilitable un control dedicado mediante la casilla *Defecto obligatorio si se declara desecho* presente en [Recursos de producción](/docs/production/mes/production-resources);           
> **Causal de suspensión**: indica la causal de suspensión que se utiliza en la declaración; si un operador crea una suspensión, sin indicar la causal de suspensión, se utilizará la causal por defecto indicada en el campo *Causal de suspensión propuesta* presente en el formulario de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).       

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).      

### Pestaña Controles de calidad<!-- Tab Controlli qualità -->

*Botones específicos*:

> *Seleccionar artículos*: permite seleccionar qué artículos insertar en la tabla de controles de calidad entre los producidos o desechados;       
> *Importar todos*: permite insertar en la tabla de controles de calidad todos los artículos producidos o desechados;     
> *Eliminar control*: permite eliminar el control seleccionado;           
> *Duplicar prueba*: permite duplicar la prueba seleccionada;       
> *Eliminar prueba*: permite eliminar la prueba seleccionada.   

Esta pestaña permite gestionar los controles de calidad para los artículos producidos y/o descartados. 

Las filas pueden ser insertadas dentro de la tabla *Controles de calidad* usando ambos botones específicos.          
En esta tabla se reportan los siguientes datos:
> *Clase*: indica la clase del artículo;          
> *Código del artículo*: indica el código del artículo;          
> *Variante*: indica la variante del artículo;    
> *Detalle del artículo a considerar*: indica el máximo detalle del artículo a considerar para efectuar los tests (Ninguno, Lote, S.N., U.D.C.). Esto se selecciona en la pestaña *Controles de Calidad* de la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources);             
> *Referencia detalle*: indica el valor del *Detalle artículo a considerar*, por ejemplo el número de lote;          
> *U.M.*: indica la unidad de medida del artículo;    
> *Cantidad*: indica la cantidad del artículo;    
> *Desecho*: si está activo, indica que la cantidad indicada es de tipo desecho; si no está activo, indica que es la cantidad producida y no desechada;             
> *Descripción del artículo*: indica la descripción del artículo;          
> *Descripción de la variante*: indica la descripción de la variante.      

Si en la orden de producción relacionada con esa fase, la fase está sujeta a control de calidad y ya hemos asociado un plan de control (que se hereda de la fase del ciclo de trabajo estándar, pero puede modificarse manualmente tanto en la orden planificada como en la orden de producción), las pruebas asociadas al plan de control indicado serán trasladadas automáticamente dentro de la tabla *Pruebas*.      

La tabla *Pruebas* se compone de los siguientes campos:         
> *Secuencia*: indica la secuencia de las pruebas a realizar;          
> *Tipo de Prueba*: indica el código de la prueba a realizar;         
> *Descripción del tipo de prueba*: indica la descripción de la prueba a realizar;           
> *Categoría instrumento*: indica la categoría del instrumento utilizado;         
> *Tipo de valor*: indica si el valor es *Texto*, de tipo *Sí/No* o de tipo *Numérico*;      
> *Tipo de límite*: permite indicar un *Tipo de límite*; solo se habilita si el *Tipo de valor* es *Numérico*;       
> *Valor de unidad de medida*: indica la unidad de medida de los valores;           
> *Valor nominal*: indica el valor numérico que debe tener la prueba;      
> *Límite mínimo* / *Límite máximo*: indica el límite mínimo y máximo de error permitido de la prueba, en porcentaje o valor absoluto según la opción *%*; el *Límite mínimo* se resta al *Valor nominal*, y el *Límite máximo* se suma;       
> *L. mín (toll-/+)* / *L. máx (toll-/+)*: indica las tolerancias sobre los límites mínimo y máximo que se suman a las anteriores tolerancias; por ejemplo, puede estar presente la incertidumbre sobre la unidad de medida; es un valor porcentual;                
> *%*: indica si los valores están expresados en porcentaje o en valores absolutos;               
> *Tipo de control de prueba*: indica el tipo de control de la prueba;        
> *Frecuencia*: indica la frecuencia del control;       
> *Instrumento de medición*: indica el instrumento utilizado, en caso de que haya valores a detectar; está compuesto por un Código/Categoría;      
> *Valor detectado*: indica el valor detectado (se utiliza si hay un valor puntual);      
> *Promedio de valores detectados*: indica el promedio de los valores detectados (se valora según los valores introducidos en la tabla **Detección de valores múltiples**);      
> *Resultado*: indica el resultado de la prueba y se determina automáticamente según los parámetros ingresados;       
> *Cantidad no conforme*: indica la cantidad que se ha detectado como no conforme;        
> *Almacén*: indica el almacén donde se encuentran los artículos no conformes; este valor se transfiere automáticamente según lo indicado en el *Tipo de control de artículo*;                    
> *Causal de almacén para artículos no conformes*: indica la causal<!-- causale --> con la cual se descargarán los artículos no conformes; este valor se transfiere automáticamente según lo indicado en el *Tipo de control de artículo*. Este movimiento<!-- movimentazione --> se realiza al momento de registrar la declaración de producción;                    
> *Notas*: permite ingresar una nota libremente.       

La tabla **Detección de valores múltiples** se utiliza en caso de que se detecten varios valores y estos contribuyan a determinar el *Promedio de valores detectados*.
Está compuesta por las siguientes columnas:
> *Secuencia*: indica la secuencia de los valores detectados;      
> *Posición*: es un campo descriptivo que permite indicar la posición en la que se ha realizado la medición;       
> *Instrumento de medición*: indica el instrumento utilizado para esa medición;            
> *Valor detectado*: indica el valor detectado;            
> *Notas*: permite ingresar una nota libremente.  

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources). 

Más detalles sobre el área relativa a la gestión de la calidad se encuentran en [Calidad](/docs/quality/quality-intro).          

### Pestaña Lotes y S/N<!-- Tab Lotti e S/N -->

*Botones específicos*:

> *Generar*: permite generar los lotes y los números de serie;        
> *Eliminar*: permite eliminar el lote / número de serie seleccionado.       

En esta pestaña es posible visualizar todos los artículos realizados con la indicación de las correspondientes cantidades producidas y desechadas; además, a través de las cuadrículas específicas es posible ingresar / modificar la información relativa a los *Lotes* y *Números de serie*.         

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).     

### Pestaña Etiquetas<!-- Tab Etichette -->

*Botones específicos*:

> *Nueva*: permite crear una fila para el ingreso de una nueva etiqueta;          
> *Borrar*: permite borrar la fila de la etiqueta seleccionada;       
> *Nueva UDC*: permite regenerar el código de la UDC seleccionada;      
> *Imprimir selección*: permite imprimir solo las etiquetas seleccionadas;       
> *Imprimir todo*: permite imprimir todas las etiquetas.          

En la pestaña **Etiquetas** se generan automáticamente las etiquetas relativas a los artículos producidos.
La cantidad de artículos por cada etiqueta está determinada por la información ingresada en la ficha del artículo como sigue:
1. Pestaña *Empaquetado*: considera la UDC y la cantidad ingresadas en la fila con el parámetro "Unidad de carga obligatoria" activo;       
2. Pestaña *Peso/Dimensiones*: considera la UDC y la cantidad ingresada en los campos *Tipo unidad de carga* y *Número de artículos por unidad de carga*;    
3. Pestaña *Peso/Dimensiones* > *Número de bultos*: considera la cantidad ingresada en *Artículos presentes en un bulto*; en este caso no se propondrá la UDC.

Además, el operador podrá ingresar manualmente o mediante el campo *Código de barras* *Lotes* y *Números de serie* si es necesario.      
El campo **Estado de impresión** puede tener los valores de *No impreso*, *Impreso* o *Reimpreso* según el número de veces que la etiqueta haya sido impresa.

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).     

### Pestaña Materiales<!-- Tab Materiali -->

En la pestaña **Materiales** se reportan automáticamente los materiales consumidos según la cantidad del artículo padre a producir y su lista de materiales; solo si está activa la casilla **Declaración de cantidad de material obligatoria** presente en la pestaña *Generales* de la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources), el material se mostrará resaltado en amarillo con cantidad cero y el operador estará obligado a ingresarlo manualmente.   
Además, es posible indicar las cantidades desechadas de cada material individual, así como almacén<!-- magazzino --> y causal<!-- causale --> de desecho; a través de las cuadrículas correspondientes se puede ingresar / modificar la información relativa a los *Lotes* y *Números de serie* de cada material seleccionado.            

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).     

### Pestaña Equipo<!-- Tab Squadra -->

*Botones específicos*:

> *Entrar en equipo*: permite ingresar uno o varios operadores dentro del equipo de trabajo;        
> *Salir de equipo*: permite sacar uno o varios operadores del equipo de trabajo;      
> *Sustituir operador*: permite sustituir un operador (activo) por otro manteniendo las fechas/horas de entrada y salida del equipo;        
> *Eliminar de equipo*: permite eliminar la fila relativa al operador seleccionado.        

La pestaña **Equipo** se compone de dos secciones:
> Lista de operadores activos: permite ingresar y visualizar los operadores activos en la declaración de producción; el primer operador ingresado asume el rol de *Jefe de equipo* (puede cambiarse manualmente);            
> Lista de operadores no activos: permite visualizar los operadores que ya no están activos (que han trabajado en esta o estas fases en declaraciones anteriores).

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).  

### Pestaña Análisis<!-- Tab Analisi -->

La pestaña **Análisis** está dedicada a la visualización y consulta de los datos relativos al rendimiento de la actividad de producción; ésta se compone de tres secciones:
- Diagramas OEE
- Diagramas de barras: **Análisis cantidades** y **Análisis tiempos**
- Tablas: **Valores cantidad** y **Valores tiempo** 

El **OEE**, **Overall Equipment Effectiveness** (Eficiencia global del recurso productivo) es un índice de rendimiento (KPI) para medir la capacidad productiva de una empresa de manufactura.

El valor **OEE** está compuesto por los siguientes tres factores:
- **Disponibilidad operativa (Availability)**: porcentaje del tiempo trabajado (B) respecto al tiempo disponible (A).
Se utiliza la relación entre el tiempo disponible de trabajo del equipo (A) respecto al tiempo real en que el equipo ha producido (B).
- **Tiempos de producción (Performance) - Eficiencia**: porcentaje entre los artículos realmente procesados (D) respecto a los artículos teóricamente procesables (C).
En la planificación se calculan los artículos procesables a ritmo óptimo (C), cualquier reducción de estas performances indica una caída productiva (D).
- **Calidad del producto (Quality)**: es la relación porcentual entre los artículos conformes (F) respecto a los artículos producidos (E).
Se ponen así de manifiesto pérdidas productivas relativas a desechos o retrabajos que afectan a la ineficiencia general.
- **oee**: se deriva del cálculo de los tres análisis anteriores y se calcula así: 

OEE = Availability x Performance x Quality x 100 = B/A x D/C x F/E x 100

El índice de **Eficiencia global** puede calcularse con o sin ajuste.

En la sección de diagramas de barras están los diagramas **Análisis cantidades** y **Análisis tiempos** en los que es posible visualizar los datos de cantidades y tiempos previstos y los  
reales declarados hasta ese momento.      

En las tablas presentes en la última sección, también es posible visualizar los datos de cantidades y tiempos previstos y los reales declarados hasta ese momento, pero aquí en forma de tabla.

Los datos mostrados en todas las secciones de la pestaña **Análisis** son relativos a las fases seleccionadas. Si no se selecciona ninguna de las fases, los datos mostrados corresponderán al total de todas las fases presentes en la cuadrícula *Fases en trabajo*.<!-- Fasi in lavoro -->

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).  

### Pestaña Documentos e Instrucciones operativas<!-- Tab Documenti e Istruzioni operative -->

Esta pestaña se compone de las secciones **Documentos** e **Instrucciones operativas**.

La sección **Documentos** a su vez se divide en:
> **Documentos adjuntos a la fase seleccionada**: permite visualizar todos los documentos adjuntos a la *Ficha del artículo<!-- Anagrafica articolo -->*, a la *Orden de cliente<!-- Ordine cliente -->*, a la *Orden de producción<!-- Commessa di produzione, Ordine di produzione -->*, según lo indicado en la pestaña *Gestión documental* presente en las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources);       
> **Documentos adjuntos a la señalización de la fase seleccionada**: permite consultar o adjuntar directamente a la declaración nuevos documentos también mediante "arrastrar y soltar";       
> **Instrucciones operativas**: permite visualizar todos los documentos adjuntos a la fase del ciclo de producción.          

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).  

### Pestaña Notas<!-- Tab Note -->

La pestaña se compone de dos secciones:            
> **Lista de notas (seleccione una fase)**: permite consultar y visualizar las notas relativas a la fase seleccionada; las notas visualizadas en esta tabla son tomadas directamente de las fases del ciclo de trabajo y más concretamente de la pestaña *Anotaciones*;                
> **Lista de notas de la señalización**: permite ingresar y consultar las notas relativas a la declaración en curso.     

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).  

### Pestaña Señalizaciones anteriores<!-- Tab Segnalazioni precedenti -->

Esta pestaña permite visualizar todas las señalizaciones anteriores relativas a la fase seleccionada.

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).  

### Pestaña ExtraData<!-- Tab ExtraData -->

Esta pestaña se compone de dos cuadrículas:
> *Lista extra data (seleccione una fase)*: permite gestionar los datos extra relativos a la fase seleccionada;       
> *Lista extra data de la señalización*: permite gestionar los datos extra relativos a la declaración que se está ejecutando.       

Es posible modificar el funcionamiento y el diseño de la pantalla mediante la gestión de las [Recursos de producción<!-- Risorse di produzione -->](/docs/production/mes/production-resources).