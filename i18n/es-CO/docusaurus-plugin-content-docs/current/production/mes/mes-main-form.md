---
title: MES
sidebar_position: 5
---

:::important ¿Para qué sirve? (A cosa serve)
La forma principal del Módulo de Ejecución de la Producción (MES) de Fluentis está diseñada para optimizar y simplificar el proceso de declaración de las actividades productivas. Esta interfaz permite a los operadores monitorizar y gestionar en tiempo real los recursos de producción, facilitando la inserción de datos relacionados con las fases de trabajo y las cantidades producidas.

Los operadores pueden gestionar fácilmente la inserción y modificación de datos, gracias a funcionalidades como el *tokenizador de códigos de barras* y la habilitación de controles específicos para garantizar la exactitud de los registros. Además, el sistema soporta diferentes métodos de asignación del tiempo y las cantidades, permitiendo un análisis detallado del rendimiento productivo y asegurando una gestión eficiente de los recursos utilizados.

Este enfoque integrado no solo mejora la visibilidad de las operaciones, sino que también contribuye a optimizar los flujos de trabajo y la productividad general de la empresa.
:::

## *Botones específicos*:  

**Navegación**  
> *Anterior*: permite pasar a la pestaña anterior;  
> *Siguiente*: permite pasar a la pestaña siguiente;  
> *Actualizar*: permite actualizar todos los datos del formulario, a usar en caso de que se hagan modificaciones en el recurso utilizado;  
> *Cancelar selección*: permite anular la selección de las fases presentes en la cuadrícula principal.  

**Confirmar informe**  
> *Iniciar*: permite crear un informe de producción de apertura;  
> *Avanzar*: permite crear un informe de producción de avance;  
> *Suspender*: permite crear un informe de producción de suspensión;  
> *Reanudar*: permite crear un informe de producción de reanudación;  
> *Cerrar*: permite crear un informe de producción de cierre;  
> *Cancelar*: permite reiniciar todos los datos ingresados en Fluentis MES.  

## Formulario principal

El formulario principal se compone de una sección con los siguientes campos y una cuadrícula conteniendo las fases en trabajo: 

- **codice barcode**    
La mayor parte de las operaciones que pueden realizarse en Fluentis MES pueden ser facilitadas y aceleradas gracias al uso del campo *codice barcode*, que si está correctamente configurado, procesa de manera inteligente los datos adquiridos a través de la lectura del código de barras e inserta automáticamente los valores en los campos correspondientes.  
Esto brinda una gran ventaja al operador tanto en términos de velocidad de inserción como de eficiencia, dado que solo tendrá que leer los datos siempre en el mismo campo *codice barcode* sin tener el problema de tener que cambiar el enfoque.  
Los códigos de barras pueden ser configurados dentro del formulario *tokenizador de códigos de barras*, que se encuentra en: Tablas > Configuración general > Tokenizador de códigos de barras.  
Por lo tanto, este campo *codice barcode* en el MES puede ser utilizado por el operador para agregar fases individuales o grupos de fases, o, por ejemplo, también las fases de una orden de producción completa, o incluso cargar los lotes y/o números de serie de los materiales a descargar, todo simplemente leyendo los diferentes códigos de barras.  

Para toda la información sobre cómo codificar los códigos de barras a leer en el campo **codice barcode**, consulte la página relacionada con el [Tokenizador de códigos de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).

- **workstation**  
La procedimiento es capaz de reconocer la estación de trabajo en la que está trabajando y si se ha asociado un centro de trabajo, cargará automáticamente todas las fases que estaban en proceso en dicho centro de trabajo. En ese punto, el operador puede elegir si continuar con el informe de esas fases o, por ejemplo, agregar otras. Toda la información adicional se puede consultar en la sección dedicada a la [Estación de trabajo (Workstation)](/docs/production/mes/workstation).  

- **risorsa**  
El campo *risorsa* se utiliza para ingresar cualquier tipo de recurso de producción.  
En el caso de que se ingrese un recurso del tipo *centro di lavoro*, este se reemplazará automáticamente también en el campo correspondiente de *centro di lavoro*, cargando así las fases relacionadas con el nuevo centro recién insertado.  
En el caso de que, en cambio, se ingrese un recurso del tipo *dipendente*, este será utilizado como usuario de declaración. La inserción de un recurso de tipo empleado es obligatoria en caso de que esté activada la opción *Operador obligatorio* presente en la pestaña *generali* de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

- **centro di lavoro**  
Indica el centro de trabajo sobre el cual el operador está haciendo la declaración; es posible visualizar únicamente los centros de trabajo relacionados con la *workstation*. En caso de que no se haya ingresado la *workstation* o no se haya asociado ningún *centro di lavoro* a la *workstation*, será posible visualizar todos los *risorse di produzione* del tipo *centro di lavoro*.  

- **Fases en trabajo**  
Las fases pueden ser añadidas dentro de la cuadrícula a través del campo *codice barcode*, o utilizando el botón específico *seleziona nuove fasi* presente en el menú de la derecha. La cuadrícula contiene una serie de informaciones relacionadas con la orden, el pedido de producción, el proyecto, la variante, etc.  
Toda esta información puede ser visible u oculta a través de la gestión en la pestaña *layout* de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  
Para la línea seleccionada, en la parte derecha de la cuadrícula, es posible visualizar la imagen por defecto incluida en el [Registro de artículos (Anagrafica articolo)](/docs/erp-home/registers/items/create-new-item); además, al hacer doble clic se visualizará a pantalla completa.  

### Pestaña Producción  

*Botones específicos*:  

> *Limpiar recurso*: permite eliminar el valor ingresado en el campo *risorsa*;  
> *Seleccionar nuevas fases*: permite abrir una ayuda para seleccionar nuevas fases para agregar a las presentes en la cuadrícula principal;  
> *Eliminar fase*: permite eliminar la fase o fases seleccionadas de la cuadrícula principal.  

La pestaña **Producción** está dedicada a la inserción de información relativa a los tiempos de producción/puesta en marcha y a las cantidades producidas/descartadas. Este es el único que no puede hacerse invisible y se compone de los siguientes campos:  
> **macchina**: en este campo se propone por defecto la *macchina* que está indicada en el *centro di lavoro* si la fase debe comenzar, mientras que si ya se han ingresado declaraciones, propone la de la declaración anterior. Además, es posible variar manualmente, pero solo con una de las máquinas alternativas indicadas en el registro de la máquina principal;  
> **Tiempo de trabajo (Tempo lavoro)**: permite visualizar/modificar manualmente el tiempo de trabajo; se puede variar su comportamiento a través de las opciones *inserimento tempo manuale* y *tempo proposto* presentes en los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources). El tiempo se calcula automáticamente como la diferencia entre el tiempo de la declaración actual y la anterior;  
> **Tiempo de configuración (Tempo setup)**: permite ingresar/modificar manualmente el tiempo de trabajo;  
> **quantità prodotta**: permite ingresar la cantidad producida con esa declaración;  
> **quantità alternativa**: permite ingresar la cantidad alternativa producida con esa declaración;  
> **magazzino versamento**: indica el almacén de carga de los productos realizados con la declaración;  
> **causale versamento**: indica la causa de carga de los productos realizados con la declaración;  
> **ubicazione versamento**: indica la ubicación de carga de los productos realizados con la declaración;  
> **magazzino versamento scarto**: indica el almacén de descarga de los productos realizados y descartados con la declaración;  
> **causale versamento scarto**: indica la causa de descarga de los productos realizados y descartados con la declaración;  
> **ubicazione versamento scarto**: indica la ubicación de descarga de los productos realizados y descartados con la declaración;  
> **difetto**: indica el defecto de descarga de los productos realizados y descartados con la declaración; se puede activar un control dedicado a través de la opción *difetto obbligatorio se dichiarato scarto* presente en los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources);  
> **causale di sospensione**: indica la causa de suspensión que se utiliza en la declaración; en caso de que un operador cree una suspensión sin indicar la causa de suspensión, se utilizará la causa por defecto indicada en el campo *causale di sospensione proposta* presente en el formulario de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Controles de calidad

*Botones específicos*:  

> *Seleccionar artículos*: permite seleccionar qué artículos incluir en la tabla de controles de calidad entre los producidos o descartados;  
> *Importar todos*: permite insertar en la tabla de controles de calidad todos los artículos producidos o descartados;  
> *Eliminar control*: permite eliminar el control seleccionado;  
> *Duplicar prueba*: permite duplicar la prueba seleccionada;  
> *Eliminar prueba*: permite eliminar la prueba seleccionada.  

Esta pestaña permite gestionar los controles de calidad para los artículos producidos y/o descartados.  

Las líneas pueden ser insertadas dentro de la tabla *Controles de calidad* a través de los dos botones específicos.  
En esta tabla se reportan los siguientes datos:  
> *classe*: indica la clase del artículo;  
> *codice articolo*: indica el código del artículo;  
> *variante*: indica la variante del artículo;  
> *dettaglio articolo da considerare*: indica el máximo detalle del artículo que se considera para realizar las pruebas (Ninguno, Lote, S.N., U.D.C.). Esto se selecciona en la pestaña *Controles de Calidad* de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources);  
> *Referencia detalle (Rifer. dettaglio)*: indica el valor del *dettaglio articolo da considerare*, por ejemplo, el número del lote;  
> *u.m.*: indica la unidad de medida del artículo;  
> *quantità*: indica la cantidad del artículo;  
> *scarto*: si está activo, indica que la cantidad indicada es de tipo descarte; si no está activo, indica que es la cantidad producida y no descartada;  
> *descrizione articolo*: indica la descripción del artículo;  
> *descrizione variante*: indica la descripción de la variante.  

Si en el pedido de producción relacionado con esa fase, la fase está sujeta a control de calidad y ya hemos asociado un plan de control (que se hereda de la fase del ciclo de trabajo estándar, pero puede ser modificado manualmente tanto en el pedido planificado como en el pedido de producción), las pruebas relacionadas con el plan de control indicado se reportarán automáticamente dentro de la tabla *Pruebas*.  

La tabla *Pruebas* se compone de los siguientes campos:  
> *sequenza*: indica la secuencia de las pruebas a realizar;  
> *tipo di prova*: indica el código de la prueba a realizar;  
> *Descripción del tipo de prueba (Descrizione tipo di prova)*: indica la descripción de la prueba a realizar;  
> *categoria strumento*: indica la categoría del instrumento utilizado;  
> *tipo valore*: indica si el valor es de tipo *Texto*, de tipo *Sí/No* o de tipo *Numérico*;  
> *tipo limite*: permite indicar un *Tipo límite*; se habilita solo si el *Tipo valor* es *Numérico*;  
> *Valor Unidad de medida (Valore Unità di misura)*: indica la unidad de medida de los valores;  
> *valore nominale*: indica el valor numérico que debe tener la prueba;  
> *Límite mínimo (Limite minimo) / Límite máximo (Limite massimo)*: indican el límite mínimo y máximo de error que puede tener la prueba, en porcentaje o valor absoluto en base a la opción *%*; el *Límite mínimo* se resta del *Valor nominal*, mientras que el *Límite máximo* se suma;  
> *L. min (toll-/+) / L. Max (toll-/+)*: indica las tolerancias sobre los límites mínimo y máximo que se suman a las tolerancias anteriores; puede estar presente, por ejemplo, la incertidumbre sobre la unidad de medida; es un valor porcentual;  
> *%*: indica si los valores están expresados en porcentaje o son absolutos;  
> *tipo controllo prova*: indica el tipo de control de la prueba;  
> *frequenza*: indica la frecuencia del control;  
> *strumento di misura*: indica el instrumento utilizado, en caso de que haya valores por recoger; se compone de un Código/Categoría;  
> *valore rilevato*: indica el valor recogido (se utiliza si tengo un valor puntual);  
> *media valori rilevati*: indica la media de los valores recogidos (se valora en base a los valores ingresados en la tabla **Detección de valores múltiples**);  
> *esito*: indica el resultado de la prueba y se determina automáticamente según los parámetros ingresados;  
> *Cantidad no conforme (Quantità non conforme)*: indica la cantidad que ha sido detectada como no conforme;  
> *magazzino*: indica el almacén en el que se encuentran los artículos no conformes; este valor se reporta automáticamente en base a lo indicado en el *Tipo de control de artículo*;  
> *Causa de almacén para artículos no conformes (Causale magazzino per articoli non conformi)*: indica la causa con la cual serán descargados los artículos no conformes; este valor se reporta automáticamente en base a lo indicado en el *Tipo de control de artículo*. Esta movimentación se realiza al momento del registro de declaración de producción;  
> *note*: permite ingresar una nota libre.  

La tabla **Detección de valores múltiples** se utiliza en el caso de que se registren múltiples valores y estos contribuyan a determinar la *Media de valores recogidos*.  
Esta se compone de las siguientes columnas:  
> *sequenza*: indica la secuencia de los valores recogidos;  
> *posizione*: es un campo descriptivo que permite indicar en qué posición se realizó la medición;  
> *strumento di misura*: indica el instrumento utilizado para esa medición;  
> *valore rilevato*: indica el valor recogido;  
> *note*: permite ingresar una nota libre.  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

Más detalles sobre el área relacionada con la gestión de calidad están presentes en [Calidad (Qualità)](/docs/quality/quality-intro).  

### Pestaña Lotes y N/S

*Botones específicos*:  

> *Generar*: permite generar los lotes y los números de serie;  
> *Eliminar*: permite eliminar el lote/número de serie seleccionado.  

En esta pestaña es posible visualizar todos los artículos realizados con la indicación de las respectivas cantidades producidas y descartadas; además, a través de las cuadrículas adecuadas es posible ingresar/modificar la información relativa a los *lotti* y *serial number*.  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Etiquetas

*Botones específicos*:  

> *Nueva*: permite crear una línea para la inserción de una nueva etiqueta;  
> *Eliminar*: permite eliminar la línea de la etiqueta seleccionada;  
> *Nuevo UDC*: permite regenerar el código del UDC seleccionado;  
> *Imprimir selección*: permite imprimir solo las etiquetas seleccionadas;  
> *Imprimir todo*: permite imprimir todas las etiquetas.  

En la pestaña **Etiquetas** se crean automáticamente las etiquetas relacionadas con los artículos producidos.  
La cantidad de artículos por cada etiqueta es determinada por la información ingresada en el registro del artículo de la siguiente manera:  
1. Pestaña *confezionamento*: considera el UDC y la cantidad ingresada en la línea con la opción "Unidad de carga obligatoria" activada;  
2. Pestaña *Peso/Dimensiones (Peso/Dimensioni)*: considera el UDC y la cantidad ingresada en los campos *Tipo de unidad de carga* y *Número de artículos por unidad de carga*;  
3. Pestaña *Peso/Dimensiones* > *numero colli*: considera la cantidad ingresada en *Artículos presentes en un bulto*; en este caso no se propondrá el UDC.

Además, el operador podrá ingresar manualmente o mediante el campo *codice barcode* *Lotes* y *Números de serie* si son necesarios.  
El campo **stato stampa** puede asumir los valores de *No impreso*, *Impreso* o *Reimpreso* en base al número de veces que la etiqueta ha sido impresa.

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Materiales

En la pestaña **Materiales** se reportan automáticamente los materiales consumidos en base a la cantidad del artículo padre a producir y a su lista de materiales; solo en caso de que esté activada la opción **dichiarazione quantità materiale obbligatoria** presente en la pestaña *generali* de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources), el material se propondrá resaltado en amarillo con cantidad cero y el operador estará obligado a ingresarlo manualmente.  
Además, es posible indicar las cantidades descartadas de cada material individualmente, junto con el almacén y la causa de descarte; a través de las cuadrículas adecuadas se pueden ingresar/modificar las informaciones relacionadas a los *lotti* y *serial number* relativos al material seleccionado.  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Equipo

*Botones específicos*:  

> *entra in squadra*: permite insertar uno o más operadores dentro del equipo de trabajo;  
> *esci da squadra*: permite hacer salir a uno o más operadores del equipo de trabajo;  
> *Reemplazar operador (Sostituisce operatore)*: permite sustituir un operador (activo) por otro manteniendo las fechas/hours de entrada y salida del equipo;  
> *rimuovi da squadra*: permite eliminar la línea relativa al operador seleccionado.  

La pestaña **Equipo** se compone de dos secciones:  
> Lista de operadores activos: permite insertar y visualizar los operadores activos en la declaración de producción; el primer operador insertado asume el flag de *capo squadra* (que puede ser cambiado manualmente);  
> Lista de operadores inactivos: permite visualizar a los operadores que ya no son activos (que han trabajado en esta o esas fases en declaraciones anteriores).  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Análisis

La pestaña **Análisis** está dedicada a la visualización y consulta de datos relacionados con el rendimiento de la actividad de producción; se compone de tres secciones: 
- Diagramas OEE 
- Diagramas de barras: **analisi quantità** y **analisi tempo** 
- Tablas: **valori quantità** y **valori tempi** 

El **OEE**, **Overall Equipment Effectiveness (Eficiencia global del recurso productivo)** es un índice de rendimiento (KPI) para medir la capacidad productiva de una empresa de producción.

El valor **OEE** está constituido por los siguientes tres factores: 
- **Disponibilidad operativa (Availability)**: porcentaje del tiempo trabajado (B) con respecto al tiempo disponible (A). Se utiliza la relación entre el tiempo de disponibilidad de trabajo de la planta (A) con respecto al tiempo real en que la planta ha producido (B). 
- **Tiempos de procesamiento (Performance) - Eficiencia**: porcentaje entre los artículos realmente trabajados (D) con respecto a los artículos teóricamente trabajables (C). Durante la planificación, se calculan los artículos trabajables en régimen óptimo (C), cualquier reducción de dicha eficiencia indica una caída en la producción (D). 
- **Calidad del producto (Quality)**: es la relación porcentual entre los artículos conformes (F) con respecto a los artículos producidos (E). Se evidencian así las caídas productivas relativas a desperdicios o reprocesos que inciden en la ineficiencia general. 
- **oee**: deriva del cálculo de los tres análisis anteriores y está dada por:

OEE = Disponibilidad x Rendimiento x Calidad x 100 = B/A x D/C x F/E x 100

El índice de **Eficiencia global** puede ser calculado con o sin el montaje.

En la sección de diagramas de barras están presentes los diagramas de **Análisis de cantidades** y **Análisis de tiempo** en los cuales es posible visualizar los datos de cantidades y tiempos preventivos y los que se han declarado hasta ese momento.

En las tablas presentes en la última sección, también es posible visualizar los datos de cantidades y tiempos preventivos y aquellos que se han declarado hasta ese momento, pero en este caso en forma de datos tabulares.

Los datos reportados en todas las secciones de la pestaña **Análisis** son relativos a las fases seleccionadas, en caso de que no se seleccione ninguna de las fases, los datos reportados representarán el total de todas las fases presentes en la cuadrícula *Fases en trabajo*.

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Documentos e Instrucciones operativas

Esta pestaña se compone de las secciones **documenti** e **istruzioni operative**.

La sección **Documentos** se subdivide a su vez en:  
> **Documentos adjuntos a la fase seleccionada**: permite visualizar todos los documentos adjuntos al *anagrafica articolo*, al *ordine cliente*, a la *ordine di produzione*, en acuerdo con lo indicado en la pestaña *gestione documentale* presente en los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources);  
> **Documentos adjuntos a la declaración de la fase seleccionada**: permite consultar o adjuntar directamente a la declaración nuevos documentos incluso mediante arrastrar y soltar (drag & drop);  
> **Instrucciones operativas**: permite visualizar todos los documentos adjuntos a la fase del ciclo de producción.  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Notas

La pestaña se compone de dos secciones:  
> **Lista de notas (seleccionar una fase)**: permite consultar y visualizar las notas relativas a la fase seleccionada; las notas que se visualizan en esta tabla son tomadas directamente de las fases del ciclo de trabajo y más precisamente de la pestaña *annotazioni*;  
> **Lista de notas de declaración (Elenco note segnalazione)**: permite ingresar y consultar las notas relativas a la declaración en curso.  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña Informes anteriores

Esta pestaña permite visualizar todos los informes anteriores relacionados con la fase seleccionada.

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).  

### Pestaña ExtraData

Esta pestaña se compone de dos cuadrículas:  
> *Lista de datos extra (Elenco extra data) (seleccionar una fase)*: permite gestionar los datos extra relativos a la fase seleccionada;  
> *Lista de datos extra de declaración (Elenco extra data segnalazione)*: permite gestionar los datos extra relativos a la declaración que se está realizando.  

Es posible modificar el funcionamiento y el layout del formulario a través de la gestión de los [Recursos de producción (Risorse di produzione)](/docs/production/mes/production-resources).