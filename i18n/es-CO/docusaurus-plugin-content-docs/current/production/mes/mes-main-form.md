---
title: MES
sidebar_position: 5
---

:::important ¿Para qué sirve? (A cosa serve)
La forma principal del Módulo de Ejecución de la Producción (MES) de Fluentis está diseñada para optimizar y simplificar el proceso de declaración de las actividades productivas. Esta interfaz permite a los operadores monitorear y gestionar en tiempo real los recursos de producción, facilitando la introducción de datos relacionados con las fases de trabajo y las cantidades producidas.

Los operadores pueden gestionar fácilmente la inserción y la modificación de datos, gracias a funcionalidades como el Tokenizador de códigos de barras y la habilitación de controles específicos para garantizar la corrección de los registros. Además, el sistema soporta diferentes métodos de reparto de tiempo y cantidades, permitiendo un análisis detallado del rendimiento productivo y garantizando una gestión eficiente de los recursos utilizados.

Este enfoque integrado no solo mejora la visibilidad de las operaciones, sino que también contribuye a optimizar los flujos de trabajo y la productividad general de la empresa.
:::

## *Botones específicos* (Pulsanti specifici):

**Navegabilidad (Navigabilità)**
> *Anterior (Precedente)*: permite pasar al tab anterior;     
> *Siguiente (Successivo)*: permite pasar al tab siguiente;     
> *Actualizar (Aggiorna)*: permite actualizar todos los datos del formulario, a usar en caso de que se realicen cambios en el recurso utilizado;      
> *Cancelar selección (Cancella selezione)*: permite anular la selección de las fases presentes en la cuadrícula principal.     

**Confirmación de informe (Conferma segnalazione)** 
> *Iniciar (Inizia)*: permite crear un informe de producción de apertura;    
> *Avanzar (Avanza)*: permite crear un informe de producción de avance;    
> *Suspender (Sospendi)*: permite crear un informe de producción de suspensión;    
> *Reanudar (Riprendi)*: permite crear un informe de producción de reanudación;    
> *Cerrar (Chiudi)*: permite crear un informe de producción de cierre;    
> *Anular (Annulla)*: permite reiniciar todos los datos ingresados en Fluentis MES.                   

## Formulario principal

El formulario principal se compone de una sección con los siguientes campos y una cuadrícula que contiene las fases en trabajo: 

- **Código de barras (Codice barcode)**      
Gran parte de las operaciones que pueden realizarse en Fluentis MES pueden ser facilitadas y aceleradas gracias al uso del campo *Código de barras*, que, si se configura adecuadamente, reestructura de manera inteligente los datos adquiridos a través de la lectura del código de barras e inserta automáticamente los valores en los campos correspondientes.    
Esto ofrece una gran ventaja al operador tanto en términos de velocidad de entrada como de eficiencia, ya que deberá leer los datos siempre en el mismo campo *Código de barras* sin tener el problema de tener que cambiar el enfoque.     
Los códigos de barras pueden ser configurados dentro del formulario de Tokenizador de códigos de barras, presente en: Tablas > Configuraciones generales > Tokenizador de códigos de barras.               
Por lo tanto, este campo *Código de barras*, en el MES, puede ser utilizado por el operador para agregar fases individuales o grupos de fases, o, por ejemplo, también las fases de todo un pedido de producción, o cargar lotes y/o números de serie de los materiales a descargar, todo simplemente leyendo los diferentes códigos de barras. 

Para toda la información sobre cómo codificar los códigos de barras para leer en el campo **Código de barras**, consulte la página relacionada con el [Tokenizador de códigos de barras](/docs/configurations/tables/general-settings/barcode-tokenizer).

- **Estación de trabajo (Workstation)**      
El procedimiento es capaz de reconocer la estación de trabajo en la que está trabajando y, si se ha asociado un centro de trabajo, cargará automáticamente todas las fases que estaban en proceso en ese centro de trabajo. En ese punto, el operador puede elegir continuar con la declaración de esas fases o agregar otras. Toda la información adicional se puede consultar en la sección dedicada a la [Estación de trabajo (Workstation)](/docs/production/mes/workstation).     

- **Recurso (Risorsa)**      
El campo *Recurso* se utiliza para ingresar cualquier tipo de recurso de producción.     
En caso de que se ingrese un recurso de tipo *Centro de trabajo*, este se reemplazará automáticamente también en el campo relacionado del *Centro de trabajo*, cargando así las fases relacionadas con el nuevo centro recién ingresado.    
En caso de que, en cambio, se ingrese un recurso de tipo *Empleado (Dipendente)*, este se utilizará como usuario de declaración. La inserción de un recurso de tipo empleado es obligatoria en caso de que esté activo el indicador *Operador obligatorio* presente en la pestaña *Generales* de los [Recursos de producción](/docs/production/mes/production-resources).        

- **Centro de trabajo (Centro di lavoro)** 
Indica el centro de trabajo en el que el operador está haciendo la declaración; es posible visualizar solo los centros de trabajo relacionados con la *Estación de trabajo (Workstation)*. En caso de que la *Estación de trabajo* no se haya ingresado o no se haya asociado ningún *Centro de trabajo* a la *Estación de trabajo*, será posible visualizar todos los *Recursos de producción* de tipo *Centro de trabajo*.    

- **Fases en trabajo (Fasi in lavoro)** 
Las fases pueden ser agregadas dentro de la cuadrícula a través del campo *Código de barras*, o utilizando el botón específico *Seleccionar nuevas fases (Seleziona nuove fasi)* presente en el menú de la derecha. La cuadrícula contiene una serie de información relacionada con la orden, el pedido de producción, el proyecto, la variante, etc. 
Toda esta información puede ser visible u oculta mediante la gestión en la pestaña *Diseño (Layout)* de los [Recursos de producción](/docs/production/mes/production-resources).   
Para la línea seleccionada, en la parte derecha de la cuadrícula, se puede visualizar la imagen por defecto insertada en la [Anagrafica artículo (Anagrafica articolo)](/docs/erp-home/registers/items/create-new-item); además, con un doble clic se visualizará a pantalla completa.       

### Pestaña Producción (Tab Produzione) 

*Botones específicos* (Pulsanti specifici):

> *Limpiar recurso (Pulisci risorsa)*: permite eliminar el valor ingresado en el campo *Recurso*;    
> *Seleccionar nuevas fases (Seleziona nuove fasi)*: permite abrir una ayuda para seleccionar nuevas fases para agregar a las presentes en la cuadrícula principal;      
> *Eliminar fase (Elimina fase)*: permite eliminar la fase o las fases seleccionadas de la cuadrícula principal.    

La pestaña **Producción** está dedicada a la inserción de información relacionada con los tiempos de producción/configuración y las cantidades producidas/descartadas. Esta es la única que no puede hacerse invisible y se compone de los siguientes campos:
> **Máquina (Macchina)**: en este widget, la máquina se propone de la siguiente manera: si la fase tiene una máquina asociada, esta se propone en el widget, solo si en la tabla de [Máquinas (Macchine)](/docs/configurations/tables/production/machines/) esa máquina tiene asociado el mismo centro de trabajo seleccionado en el MES. En este caso, el usuario puede cambiar la máquina, pero solo eligiéndola entre aquellas en la tabla de máquinas que tienen asociado ese centro de trabajo. Si la máquina presente en la fase no está entre las asociadas a ese centro de trabajo, no se propondrá ninguna máquina en el widget.           
Además, en este caso, si el usuario intenta crear una declaración, recibirá un mensaje que le obligará a ingresar una máquina para proceder. Si, en cambio, a la fase no se le ha asociado ninguna máquina, no habrá obligación de ingresarla para continuar con las declaraciones.        
En caso de que se seleccionen múltiples fases simultáneamente, la máquina se tomará de la primera fase seleccionada (o de aquella con la secuencia prioritaria en caso de que esté indicada) entre las que tengan el mismo centro de trabajo seleccionado en el MES.         
> **Tiempo de trabajo (Tempo lavoro)**: permite visualizar/modificar manualmente el tiempo de trabajo; es posible variar su comportamiento mediante los indicadores *Inserción de tiempo manual* y *Tiempo propuesto* presentes en los [Recursos de producción](/docs/production/mes/production-resources). El tiempo se calcula automáticamente como la diferencia entre el tiempo de la declaración actual y la anterior;                   
> **Tiempo de configuración (Tempo setup)**: permite ingresar/modificar manualmente el tiempo de configuración;         
> **Cantidad producida (Quantità prodotta)**: permite ingresar la cantidad producida con esa declaración;         
> **Cantidad alternativa (Quantità alternativa)**: permite ingresar la cantidad alternativa producida con esa declaración;      
> **Almacén de entrega (Magazzino versamento)**: indica el almacén de carga de los productos realizados con la declaración;       
> **Causa de entrega (Causale versamento)**: indica la causa de carga de los productos realizados con la declaración;       
> **Ubicación de entrega (Ubicazione versamento)**: indica la ubicación de carga de los productos realizados con la declaración;       
> **Almacén de entrega de desecho (Magazzino versamento scarto)**: indica el almacén de descarga de los productos realizados y desechados con la declaración;       
> **Causa de entrega de desecho (Causale versamento scarto)**: indica la causa de descarga de los productos realizados y desechados con la declaración;       
> **Ubicación de entrega de desecho (Ubicazione versamento scarto)**: indica la ubicación de descarga de los productos realizados y desechados con la declaración;       
> **Defecto (Difetto)**: indica el defecto de descarga de los productos realizados y desechados con la declaración; se puede activar un control dedicado mediante el indicador *Defecto obligatorio si declarado desecho* presente en los [Recursos de producción](/docs/production/mes/production-resources);           
> **Causa de suspensión (Causale di sospensione)**: indica la causa de suspensión que se utiliza en la declaración; en caso de que un operador cree una suspensión sin indicar la causa de suspensión, se utilizará la causa predeterminada indicada en el campo *Causa de suspensión propuesta* presente en el formulario de los [Recursos de producción](/docs/production/mes/production-resources).       

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).      

### Pestaña Controles de calidad (Tab Controlli qualità)

*Botones específicos* (Pulsanti specifici):

> *Seleccionar artículos (Seleziona articoli)*: permite seleccionar qué artículos incluir en la tabla de controles de calidad entre los producidos o desechados;       
> *Importar todos (Importa tutti)*: permite insertar en la tabla de controles de calidad todos los artículos producidos o desechados;     
> *Eliminar control (Elimina controllo)*: permite eliminar el control seleccionado;           
> *Duplicar prueba (Duplica prova)*: permite duplicar la prueba seleccionada;       
> *Eliminar prueba (Elimina prova)*: permite eliminar la prueba seleccionada.   

Esta pestaña permite gestionar los controles de calidad para los artículos producidos y/o desechados. 

Las filas pueden ser ingresadas dentro de la tabla *Controles de calidad* a través de los dos botones específicos.          
En esta tabla se reportan los siguientes datos:
> *Clase*: indica la clase del artículo;          
> *Código de artículo*: indica el código del artículo;          
> *Variante*: indica la variante del artículo;    
> *Detalle de artículo a considerar*: indica el máximo detalle del artículo que se va a considerar para realizar las pruebas (Ninguno, Lote, S.N., U.D.C.). Esto se selecciona en la pestaña *Controles de Calidad* de la gestión de los [Recursos de producción](/docs/production/mes/production-resources);             
> *Referencia detalle*: indica el valor del *Detalle de artículo a considerar*, por ejemplo, el número del lote;          
> *U.M.*: indica la unidad de medida del artículo;    
> *Cantidad*: indica cantidad del artículo;    
> *Desecho (Scarto)*: si está activo, indica que la cantidad indicada es de tipo desecho; si no está activo, indica que la cantidad es producida y no desechada;             
> *Descripción del artículo*: indica la descripción del artículo;          
> *Descripción variante*: indica la descripción de la variante.      

Si en el pedido de producción relacionado con esa fase, la fase está sujeta al control de calidad y ya hemos asociado un plan de control (que se hereda de la fase del ciclo de trabajo estándar, pero que puede variar manualmente tanto en la orden planificada como en la orden de producción), las pruebas relacionadas con el plan de control indicado se reportarán automáticamente dentro de la tabla *Pruebas*.      

La tabla *Pruebas* se compone de los siguientes campos:         
> *Secuencia*: indica la secuencia de las pruebas a realizar;          
> *Tipo de prueba*: indica el código de la prueba a realizar;         
> *Descripción tipo de prueba*: indica la descripción de la prueba a realizar;           
> *Categoría instrumento*: indica la categoría del instrumento utilizado;         
> *Tipo valor*: indica si el valor es de tipo *Texto*, de tipo *Sí/No* o de tipo *Numérico*;      
> *Tipo límite*: permite indicar un *Tipo límite*; se activa solo si el *Tipo valor* es *Numérico*;       
> *Valor Unidad de medida*: indica la unidad de medida de los valores;           
> *Valor nominal*: indica el valor numérico que debe tener la prueba;      
> *Límite mínimo* / *Límite máximo*: indican el límite mínimo y máximo de error que puede tener la prueba, en porcentaje o valor absoluto dependiendo del indicador *%*; el *Límite mínimo* se resta del *Valor nominal*, mientras que el *Límite máximo* se suma;       
> *L. min (toll-/+)* / *L. Max (toll-/+)*: indica las tolerancias sobre los límites mínimo y máximo que se añaden a las tolerancias anteriores; puede haber presencia, por ejemplo, de incertidumbre sobre la unidad de medida; es un valor porcentual;                
> *%*: indica si los valores están expresados en porcentaje o son absolutos;               
> *Tipo control prueba*: indica el tipo de control de la prueba;        
> *Frecuencia*: indica la frecuencia del control;       
> *Instrumento de medida*: indica el instrumento utilizado, en caso de que haya valores a registrar; está compuesto por un Código/Categoría;      
> *Valor registrado*: indica el valor registrado (se utiliza si tengo un valor puntual);      
> *Media de valores registrados*: indica la media de los valores registrados (se valora en función de los valores insertados en la tabla **Registro de valores múltiples**);      
> *Resultado (Esito)*: indica el resultado de la prueba y se determina automáticamente en función de los parámetros ingresados;       
> *Cantidad no conforme (Quantità non conforme)*: indica la cantidad que se ha detectado como no conforme;        
> *Almacén (Magazzino)*: indica el almacén en el que se encuentran los artículos no conformes; este valor se reporta automáticamente en función de lo indicado en el *Tipo de control de artículo*;                    
> *Causa almacén para artículos no conformes (Causale magazzino per articoli non conformi)*: indica la causa con la cual se descargarán los artículos no conformes; este valor se reporta automáticamente en función de lo indicado en el *Tipo de control de artículo*. Esta movimentación se realiza en el momento del registro de la declaración de producción;                    
> *Notas (Note)*: permite insertar una nota libre.       

La tabla **Registro de valores múltiples** se utiliza en caso de que se registren múltiples valores y estos contribuirán a determinar la *Media de valores registrados*. 
Esta se compone de las siguientes columnas:
> *Secuencia*: indica la secuencia de los valores registrados;      
> *Posición*: es un campo descriptivo que permite indicar en qué posición se realizó la medición;       
> *Instrumento de medida*: indica el instrumento utilizado para esa medición;            
> *Valor registrado*: indica el valor registrado;            
> *Notas*: permite ingresar una nota libre.  

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources). 

Más detalles sobre el área relativa a la gestión de calidad están presentes en [Calidad (Qualità)](/docs/quality/quality-intro).          

### Pestaña Lotes y S/N (Tab Lotti e S/N)

*Botones específicos* (Pulsanti specifici):

> *Generar (Genera)*: permite generar los lotes y los números de serie;        
> *Eliminar (Elimina)*: permite eliminar el lote/número de serie seleccionado.       

En esta pestaña es posible visualizar todos los artículos realizados con la indicación de las cantidades producidas y desechadas; además, a través de las cuadrículas adecuadas es posible insertar/modificar la información relativa a los *Lotes* y *Números de serie*.         

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).     

### Pestaña Etiquetas (Tab Etichette)

*Botones específicos* (Pulsanti specifici):

> *Nueva (Nuova)*: permite crear una línea para la inserción de una nueva etiqueta;          
> *Cancelar (Cancella)*: permite borrar la línea de la etiqueta seleccionada;       
> *Nuevo UDC (Nuova UDC)*: permite regenerar el código de la UDC seleccionada;      
> *Imprimir selección (Stampa selezione)*: permite imprimir solo las etiquetas seleccionadas;       
> *Imprimir todo (Stampa tutto)*: permite imprimir todas las etiquetas.          

En la pestaña **Etiquetas** se crean automáticamente las etiquetas relacionadas con los artículos producidos. 
La cantidad de artículos por cada etiqueta se determina por la información ingresada en la anagrafía artículo de la siguiente manera:
1. Pestaña *Embalaje (Confezionamento)*: considera la UDC y la cantidad ingresada en la línea con el indicador "Unidad de carga obligatoria" activo;       
2. Pestaña *Peso/Dimensiones (Peso/Dimensioni)*: considera la UDC y la cantidad ingresada en los campos *Tipo unidad de carga* y *Número de artículos por unidad de carga*;    
3. Pestaña *Peso/Dimensiones (Peso/Dimensioni)* > *Número de paquetes (Numero colli)*: considera la cantidad ingresada en *Artículos presentes en un paquete (Articoli presenti in un collo)*; en este caso, no se propondrá la UDC.

Además, el operador podrá ingresar manualmente o mediante el campo *Código de barras* *Lotes* y *Números de serie* si es necesario.      
El campo **Estado de impresión** puede asumir los valores de *No impreso (Non stampato)*, *Imprimido (Stampato)* o *Reimpreso (Ristampato)* en función de la cantidad de veces que se ha impreso la etiqueta.

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).     

### Pestaña Materiales (Tab Materiali)

En la pestaña **Materiales** se reportan automáticamente los materiales consumidos en función de la cantidad del artículo padre a producir y su lista de materiales; solo en caso de que esté activo el indicador **Declaración de cantidad de material obligatoria (Dichiarazione quantità materiale obbligatoria)** presente en la pestaña *Generales* de la gestión de los [Recursos de producción](/docs/production/mes/production-resources), el material será propuesto resaltado en amarillo con cantidad cero y el operador se verá obligado a ingresarlo manualmente.   
Además, es posible indicar las cantidades desechadas de cada material junto con el almacén y la causa de desecho; a través de las cuadrículas adecuadas es posible insertar/modificar la información relacionada con los *Lotes* y *Números de serie* relacionados con el material seleccionado.            

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).     

### Pestaña Equipo (Tab Squadra)

*Botones específicos* (Pulsanti specifici):

> *Entrar en el equipo (Entra in squadra)*: permite ingresar uno o más operadores dentro del equipo de trabajo;        
> *Salir del equipo (Esci da squadra)*: permite hacer salir a uno o más operadores del equipo de trabajo;      
> *Reemplazar operador (Sostituisce operatore)*: permite reemplazar un operador (activo) con otro manteniendo las fechas/horas de entrada y salida del equipo;        
> *Eliminar del equipo (Rimuovi da squadra)*: permite eliminar la línea relacionada con el operador seleccionado.        

La pestaña **Equipo** se compone de dos secciones:
> Lista de operadores activos: permite ingresar y visualizar los operadores activos en la declaración de producción; el primer operador ingresado asume el indicador de *Jefe de equipo (Capo squadra)* (que puede ser cambiado manualmente);            
> Lista de operadores no activos: permite visualizar a los operadores que ya no son activos (que han trabajado en esta o esas fases en las declaraciones anteriores).

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).  

### Pestaña Análisis (Tab Analisi)

La pestaña **Análisis** está dedicada a la visualización y consulta de los datos relativos al rendimiento de la actividad de producción; se compone de tres secciones:
- Diagramas OEE
- Diagramas de barras: **Análisis de cantidad (Analisi quantità)** y **Análisis de tiempo (Analisi tempo)**
- Tablas: **Valores cantidad (Valori quantità)** y **Valores tiempos (Valori tempi)** 

El **OEE**, **Overall Equipment Effectiveness** (Eficiencia general del recurso productivo) es un índice de rendimiento (KPI) para medir la capacidad productiva de una empresa de producción.

El valor **OEE** se compone de los siguientes tres factores:
- **Disponibilidad operativa (Availability)**: porcentaje del tiempo trabajado (B) respecto al tiempo disponible (A). Se utiliza la relación entre el tiempo disponible de trabajo de la planta (A) respectiva al tiempo real en que la planta ha producido (B).
- **Tiempos de trabajo (Performance) - Eficiencia**: porcentaje entre los artículos realmente trabajados (D) respecto a los artículos teóricamente trabajables (C). En la planificación se calculan los artículos trabajables a régimen óptimo (C), cualquier reducción de ese rendimiento indica una disminución productiva (D).
- **Calidad del producto (Quality)**: es la relación porcentual entre los artículos conformes (F) respecto a los artículos producidos (E). Se destacan así disminuciones productivas relacionadas con desechos o retrabajos que inciden en la ineficiencia general.
- **Eficiencia general (OEE)**: se calcula a partir de los tres análisis anteriores y se expresa como: 

OEE = Availability x Performance x Quality x 100 = B/A x D/C x F/E x 100

El índice de **Eficiencia general** puede ser calculado con o sin el ajuste.

En la sección de los diagramas de barras hay presentes los diagramas **Análisis de cantidad** y **Análisis de tiempo** en los que es posible visualizar los datos de cantidades y tiempos preventivos y los que se han declarado hasta ese momento.      

En las tablas presentes en la última sección, también es posible visualizar los datos de cantidades y tiempos preventivos y los que se han declarado hasta ese momento, pero en este caso en forma de datos tabulares.

Los datos reportados en todas las secciones de la pestaña **Análisis** son relativos a las fases seleccionadas; en caso de que no se seleccione ninguna de las fases, los datos reportados representarán el total de todas las fases presentes en la cuadrícula *Fases en trabajo*. 

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).  

### Pestaña Documentos e Instrucciones operativas (Tab Documenti e Istruzioni operative)

Esta pestaña se compone de las secciones **Documentos** e **Instrucciones operativas**.

La sección **Documentos**, a su vez, se divide en:
> **Documentos adjuntos a la fase seleccionada**: permite visualizar todos los documentos adjuntos a la *Anagrafia artículo*, al *Pedido del cliente*, a la *Orden de producción*, al *Pedido de producción*, de acuerdo con lo indicado en la pestaña *Gestión documental* presente en los [Recursos de producción](/docs/production/mes/production-resources);       
> **Documentos adjuntos al informe de la fase seleccionada**: permite consultar o adjuntar directamente nuevos documentos a la declaración también mediante drag & drop;       
> **Instrucciones operativas**: permite visualizar todos los documentos adjuntos a la fase del ciclo de producción.        

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).  

### Pestaña Notas (Tab Note)

La pestaña se compone de dos secciones:            
> **Lista de notas (seleccionar una fase)**: permite consultar y visualizar las notas relacionadas con la fase seleccionada; las notas que se visualizan en esta tabla son tomadas directamente de las fases del ciclo de trabajo y más precisamente de la pestaña *Anotaciones*;                
> **Lista de notas de la declaración**: permite ingresar y consultar las notas relacionadas con la declaración en curso.     

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).  

### Pestaña Informes anteriores (Tab Segnalazioni precedenti)

Esta pestaña permite visualizar todos los informes anteriores relacionados con la fase seleccionada.

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).  

### Pestaña ExtraData (Tab ExtraData)

Esta pestaña se compone de dos cuadrículas:
> *Lista de extra data (seleccionar una fase)*: permite gestionar los extra data relacionados con la fase seleccionada;       
> *Lista de extra data de la declaración*: permite gestionar los extra data relacionados con la declaración que se está realizando.       

Es posible modificar el funcionamiento y el diseño del formulario mediante la gestión de los [Recursos de producción](/docs/production/mes/production-resources).