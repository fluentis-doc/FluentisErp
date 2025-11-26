---
title: Recursos de producción
sidebar_position: 4
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
Los recursos productivos en el sistema MES de Fluentis permiten gestionar todos los parámetros necesarios para la planificación y optimización de las operaciones de producción<!-- operazioni produttive -->. A través de una interfaz intuitiva, los usuarios pueden importar diferentes tipos de recursos<!-- risorse -->, entre los que se encuentran artículos<!-- articoli -->, máquinas, empleados, centros de trabajo y herramientas de medición<!-- strumenti di misura -->.

Además, es posible personalizar el layout y el comportamiento del centro de trabajo<!-- centro di lavoro -->, adaptando el sistema a las necesidades empresariales específicas de manera sencilla, rápida y completamente autónoma.

Esta funcionalidad no solo simplifica la gestión de los recursos de producción, sino que también permite copiar fácilmente configuraciones predeterminadas desde recursos existentes, garantizando que los datos estén siempre actualizados y coherentes.
:::

A través de esta ventana se configuran todos los parámetros relativos a la gestión de los recursos de producción<!-- risorse di produzione --> dentro del MES.

*Botón específico*:  

> **Importar<!-- Importa -->**: permite importar dentro de la tabla **Recursos de producción<!-- Risorse di produzione -->** los siguientes tipos de recursos<!-- risorse -->: *Artículo<!-- Articolo -->*, *Máquina<!-- Macchina -->*, *Empleado<!-- Dipendente -->*, *Centro de trabajo<!-- Centro di lavoro -->* y *Herramienta de medición<!-- Strumento di misura -->*; es posible importar más de uno a la vez simplemente seleccionándolos a través del pop-up *Importar<!-- Importa -->*.
En el caso de que ya existan registros en la tabla y el usuario seleccione uno de cierto tipo de recurso<!-- risorsa -->, al pulsar el botón *Importar<!-- Importa -->* el procedimiento filtrará ya por ese mismo tipo de recurso<!-- risorsa -->, además copiará todas las configuraciones introducidas en el recurso<!-- risorsa --> seleccionado (es decir, el que ya está presente en la cuadrícula de recursos<!-- risorse -->) en los nuevos registros de recursos<!-- risorse --> añadidos con el procedimiento de importación.

### Recursos de producción<!-- Risorse di produzione -->

El formulario se compone de una primera cuadrícula que contiene los datos relativos a los recursos<!-- risorse --> añadidos, entre los que se encuentran:       
**Código**: indica el código de recurso de producción<!-- codice risorsa di produzione -->;       
**Descripción**: indica la descripción del código de recurso de producción<!-- descrizione del codice risorsa di produzione -->;      
**Tipo de recurso**: indica el tipo de recurso<!-- risorsa --> entre: *Empleado<!-- Dipendente -->*, *Artículo<!-- Articolo -->*, *Máquina<!-- Macchina -->*, *Herramienta de medición<!-- Strumento di misura -->* y *Centro de trabajo<!-- Centro di lavoro -->*;         
**Máquina**: indica el código de la máquina asociada al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Máquina<!-- Macchina -->*;       
**Descripción de la máquina**: indica la descripción de la máquina asociada al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Máquina<!-- Macchina -->*;     
**Centro de trabajo**: indica el código del centro de trabajo<!-- centro di lavoro --> asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Centro de trabajo<!-- Centro di lavoro -->*;      
**Descripción del centro de trabajo**: indica la descripción del centro de trabajo<!-- centro di lavoro --> asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Centro de trabajo<!-- Centro di lavoro -->*;     
**Empleado**: indica el código del empleado asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Empleado<!-- Dipendente -->*;     
**Apellido**: indica el apellido del empleado asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Empleado<!-- Dipendente -->*;     
**Nombre**: indica el nombre del empleado asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Empleado<!-- Dipendente -->*;     
**Clase**: indica la clase del artículo<!-- articolo --> asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Herramienta de medición<!-- Strumento di misura -->*;       
**Código de artículo**: indica el código del artículo<!-- articolo --> asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Herramienta de medición<!-- Strumento di misura -->*;       
**Descripción del artículo**: indica la descripción del artículo<!-- articolo --> asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Herramienta de medición<!-- Strumento di misura -->*;       
**Herramienta de medición**: indica el código del artículo de equipamiento<!-- articolo attrezzatura --> asociado al recurso<!-- risorsa -->; está habilitado solo si el *Tipo de recurso<!-- Tipo di risorsa -->* es *Herramienta de medición<!-- Strumento di misura -->*;        
**Segundos de refresco**: indica el número de segundos de refresco de los formularios del MES, por ejemplo: para el refresco de datos en la pestaña *Análisis<!-- Analisi -->* o el refresco del tiempo de trabajo automático.     

A cada recurso<!-- risorsa --> añadido en la cuadrícula superior se asocian todas las informaciones presentes en las pestañas inferiores.

## Generales<!-- Generali -->

En esta pestaña se encuentran una serie de informaciones que afectan el comportamiento del recurso de producción<!-- risorsa di produzione --> durante las Declaraciones de producción<!-- Dichiarazioni di produzione -->.    

**Operador obligatorio**: si está activo, obliga al operador a introducir en el campo *Recurso<!-- Risorsa -->* del formulario principal de las Declaraciones de producción<!-- Dichiarazioni di produzione -->, un recurso de tipo empleado<!-- dipendente --> antes de poder continuar con el resto de actividades. Este será el empleado<!-- dipendente --> que se indicará como operador que realiza la declaración;         
**Contraseña obligatoria**: si está activo, obliga al operador a introducir una contraseña para poder continuar; las contraseñas solicitadas son en el siguiente orden: la contraseña presente en el formulario del [Empleado<!-- Dipendente -->](/docs/project-management/registers/employee/new-employee/) y, si no existe, se solicita la contraseña del sistema. Si ninguna está presente, se solicita introducir una nueva.
:::note Nota
En el caso de que ambos flags **Operador obligatorio** y **Contraseña obligatoria** estén habilitados, el operador deberá introducir primero el empleado<!-- dipendente --> y después, cuando el procedimiento lo solicite, la contraseña.
:::
**Equipo obligatorio**: si está activo, activa un control que obliga al operador a introducir al menos un miembro del equipo antes de continuar con la actividad de declaración;     
**Permitir reporte superpuesto**: si está activo, es posible declarar las fases de una orden de producción<!-- ordine di produzione --> sin seguir la secuencia prevista indicada en el ciclo; si no está activo, no es posible realizar ninguna superposición de fases ni declarar fases sin seguir la secuencia del ciclo;    
**Habilitar multi-fase**: si está activo, permite habilitar la posibilidad de declarar varias fases simultáneamente.         
En este caso el tiempo se divide entre las distintas fases de la siguiente manera: si se declara una cantidad (producida o descartada), entonces el tiempo de cada fase se calcula con la siguiente fórmula:             
"**(Tiempo declarado / cantidad total (producida + descartada)) x cantidad declarada (producida + descartada) de cada fase = Tiempo de la fase**"           
si por el contrario no se declara ninguna cantidad, solo el tiempo, entonces se calcula con la fórmula:              
"**Tiempo declarado / número de fases = Tiempo de la fase**"       
**Número máximo de fases**: permite indicar el número máximo de fases que se pueden declarar simultáneamente;    
**Entrada de tiempo manual**: si está activo, habilita la entrada manual del tiempo de trabajo por parte del operador;     
**Tiempo propuesto**: si está activo, la entrada del tiempo de trabajo se sugiere automáticamente;         
**Método de reparto de cantidad**: indica la modalidad en la que se reparte la cantidad en caso de declaración simultánea de varias fases de trabajo. Las modalidades disponibles son: *Secuencia*: la cantidad se reparte sobre las fases en trabajo según la secuencia planificada o de inserción, *Proporcional*: la cantidad se reparte de forma proporcional según la cantidad producida de la declaración y las cantidades a producir de cada fase; *Manual* permite indicar las cantidades producidas manualmente en cada fase;     
**Segundos de refresco**: indica el tiempo de refresco del formulario, si no se indica, el formulario se actualizará solo manualmente por el operador.             
**Declaración de cantidad de material obligatoria**: si está activo, junto con el flag **Obligación de declaración manual de material** presente en los [Parámetros MRP](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo<!-- articolo -->, hace que en la pestaña *Materiales* de las Declaraciones de producción<!-- Dichiarazioni di produzione --> el artículo<!-- articolo --> aparezca con cantidad cero y por lo tanto el usuario estará obligado a introducir manualmente un valor antes de continuar;    
**Hoja de trabajo obligatoria**: si está activo, activa un control que impide al operador añadir una fase que todavía no tenga habilitado el flag de "Impresión definitiva". Este flag de "Impresión definitiva" puede habilitarse desde el procedimiento de impresión de la [Hoja de trabajo<!-- Foglio di lavoro -->](/docs/production/pp-production-in-progress/reports/worksheet);    
**Impresión de etiquetas obligatoria**: si está activo, se habilita un control que obliga al operador a imprimir todas las etiquetas antes de proceder con la actividad de declaración;    
**Defecto obligatorio si se declara descarte**: si está activo, se habilita un control que obliga al operador a introducir el tipo de defecto en caso de que se introduzca una cantidad descartada;    
**Registro automático**: si está activo, permite crear la registración de inventario<!-- registrazione di magazzino --> de forma automática al confirmar la declaración;    
**Importar todas las fases del grupo**: si está activo, también el flag homónimo presente en la *ayuda de fases* de la pestaña *producción* del MES queda activo por defecto. Así, si el usuario selecciona una fase perteneciente a un grupo y la añade, también se añadirán todas las demás fases pertenecientes al grupo.      

### *Gestión documental*<!-- Gestione documentale -->
**Tipo de origen de documento a excluir**: esta tabla está vinculada a la pestaña *Documentos e Instrucciones operativas* de Fluentis MES y permite definir qué tipos de documentos deben excluirse; de este modo, los archivos adjuntos a este tipo de documentos no aparecerán en la pestaña *Documentos e Instrucciones operativas*.     
Los tipos de documento que se pueden excluir son: 
> *Ninguno*: ninguno de los tipos de documento es excluido;   
> *Artículo<!-- Articolo -->*: todos los documentos (archivos, imágenes,...) relacionados con el artículo<!-- articolo --> no aparecerán en la pestaña *Documentos e Instrucciones operativas*;     
> *Orden de cliente*: todos los documentos (archivos, imágenes,...) relacionados con la orden de cliente no aparecerán en la pestaña *Documentos e Instrucciones operativas*;      
> *Orden de trabajo<!-- Commessa -->*: todos los documentos (archivos, imágenes,...) relacionados con la orden de trabajo<!-- commessa --> no aparecerán en la pestaña *Documentos e Instrucciones operativas*;   
> *Orden de producción*: todos los documentos (archivos, imágenes,...) relacionados con la orden de producción no aparecerán en la pestaña *Documentos e Instrucciones operativas*;
> *Fase de orden de producción*: todos los documentos (archivos, imágenes,...) relacionados con cada fase de una orden de producción (dentro de la pestaña *Documentos adjuntos* relativa a la fase) no aparecerán en la pestaña *Documentos e Instrucciones operativas*.          

### *Controles de Calidad*<!-- Controlli Qualità -->
Contiene una serie de controles vinculados a la pestaña *Control de calidad* de Fluentis MES.     
**Tipo de control a considerar**: es el tipo de documento para el control de artículos<!-- articoli --> en el que se guardarán los valores registrados;      
**Detalle de artículo a considerar**: es el máximo nivel de detalle del artículo<!-- articolo --> a considerar para los test (Ninguno, Lote, Nº de serie, UDC);     
**La fase es bloqueable**: ante el primer valor no conforme o al promedio de los valores detectados no conformes, la propia fase y las posteriores quedan bloqueadas hasta que un operador habilitado las desbloquee. En este caso se utilizará la **Causal de suspensión de bloqueo de fase** indicada en la sección dedicada a las causales de suspensión.        

### *Causas de suspensión*<!-- Causali di sospensione -->       
**Causas de suspensión<!-- causali di sospensione --> a excluir**: en esta tabla es posible indicar todas las causales de suspensión<!-- causali di sospensione --> que se quieran excluir dentro de Fluentis MES.

**Causal de suspensión sugerida**: indica la causal de suspensión<!-- causale di sospensione --> que se utiliza por defecto en caso de que un operador cree una suspensión sin indicar una causal de suspensión<!-- causale di sospensione --> en el campo correspondiente de la pestaña *Producción* de Fluentis MES.

**Interrupción automática**: si está habilitada, permite activar las interrupciones automáticas de las declaraciones según los horarios indicados en el centro de trabajo<!-- centro di lavoro -->;        
**Causal de suspensión por pausa nocturna**: indica la causal de suspensión<!-- causale di sospensione --> que se utiliza para generar la suspensión por pausa nocturna;      
**Causal de suspensión por pausa de almuerzo**: indica la causal de suspensión<!-- causale di sospensione --> para registrar la suspensión por pausa de almuerzo;      
**Causal de suspensión de bloqueo de fase**: indica la causal de suspensión<!-- causale di sospensione --> que se utiliza para bloquear las fases en caso de no conformidad en los controles de calidad.      

## Layout

*Botones específicos*:  

> **Layout completo**: permite activar el layout completo de la interfaz MES con un solo clic;           
> **Layout mínimo**: permite activar el layout mínimo de la interfaz MES con un solo clic;               

En esta pestaña se encuentran una serie de informaciones que afectan el layout del recurso de producción<!-- risorsa di produzione --> durante las Declaraciones de producción<!-- Dichiarazioni di produzione -->.      

**Secuencia de pestañas**       
Esta sección permite definir si una pestaña será visible o no, también es posible modificar su secuencia;    

**No mostrar**        
Esta sección permite ocultar varias informaciones innecesarias dentro de Fluentis MES.

### **General**
> *Grupo*: si está activo, oculta la información relativa al grupo;     
> *Secuencia*: si está activo, oculta la información relativa a la secuencia;     
> *Subfase*: si está activo, oculta la información relativa a la subfase;     
> *Centro de trabajo*: si está activo, oculta la información relativa al centro de trabajo<!-- centro di lavoro -->;     
> *Máquina*: si está activo, oculta la información relativa a la máquina;     
> *Grupo de mano de obra*: si está activo, oculta la información relativa al grupo de mano de obra;     
> *Fechas previstas*: si está activo, oculta la información relativa a las fechas previstas;     
> *Variante*: si está activo, oculta la información relativa a la variante;     
> *Orden de producción*: si está activo, oculta la información relativa a la orden de producción;    
> *Orden de trabajo<!-- Commessa -->*: si está activo, oculta la información relativa a la orden de trabajo<!-- commessa -->;    
> *Proyecto*: si está activo, oculta la información relativa al proyecto;    
> *Lotes*: si está activo, oculta la gestión de lotes;    
> *Serial number*: si está activo, oculta la gestión de números de serie;    
> *UDC*: si está activo, oculta la gestión de UDC;    
  
### **Artículos producidos**
> *Almacén de depósito*: si está activo, oculta la información relativa al almacén<!-- magazzino --> de depósito de los artículos<!-- articoli --> producidos en la pestaña *Producción*;    
> *Causal de depósito*: si está activo, oculta la información relativa a la causal<!-- causale --> de depósito de los artículos<!-- articoli --> producidos en la pestaña *Producción*;    
> *Ubicación de depósito*: si está activo, oculta la información relativa a la ubicación de depósito de los artículos<!-- articoli --> producidos en la pestaña *Producción*;    
> *Almacén de depósito de descarte*: si está activo, oculta la información relativa al almacén<!-- magazzino --> de depósito de descartes de los artículos<!-- articoli --> producidos en la pestaña *Producción*;     
> *Causal de depósito de descarte*: si está activo, oculta la información relativa a la causal<!-- causale --> de depósito de descartes de los artículos<!-- articoli --> producidos en la pestaña *Producción*;     
> *Ubicación de depósito de descarte*: si está activo, oculta la información relativa a la ubicación de depósito de descartes de los artículos<!-- articoli --> producidos en la pestaña *Producción*;     
> *Cantidad alternativa*: si está activo, oculta la gestión de la cantidad alternativa;  

### **Materiales**
> *Almacén de extracción*: si está activo, oculta la información relativa al almacén<!-- magazzino --> de descarga de materiales en la pestaña *Materiales*;    
> *Causal de extracción*: si está activo, oculta la información relativa a la causal<!-- causale --> de descarga de materiales en la pestaña *Materiales*;    
> *Almacén de descarga de descartes*: si está activo, oculta la información relativa al almacén<!-- magazzino --> de descarga de descartes de los materiales en la pestaña *Materiales*;    
> *Causal de descarga de descartes*: si está activo, oculta la información relativa a la causal<!-- causale --> de descarga de descartes de los materiales en la pestaña *Materiales*;    

### **Controles de calidad**

> **Secuencia**: si está activo, oculta la información relativa a la secuencia en la pestaña *Controles de calidad*;     
> **Tipo de prueba**: si está activo, oculta la información relativa al tipo de prueba en la pestaña *Controles de calidad*;     
> **Instrumentos de medición**: si está activo, oculta la información relativa a la categoría de instrumento de medición y a los instrumentos de medición<!-- strumenti di misura --> en la pestaña *Controles de calidad*;      
> **Límites de tolerancia**: si está activo, oculta la información relativa a los límites de tolerancia (L.min.(toll-), L.min.(toll+), L.max.(toll-) y L.max.(toll+)) en la pestaña *Controles de calidad*;     
> **Tipo de control y Frecuencia**: si está activo, oculta la información relativa al tipo de control de prueba y frecuencia en la pestaña *Controles de calidad*;        
> **Almacén**: si está activo, oculta la información relativa al almacén<!-- magazzino --> en la pestaña *Controles de calidad*;         
> **Causal**: si está activo, oculta la información relativa a la causal<!-- causale --> de inventario para artículos<!-- articoli --> no conformes en la pestaña *Controles de calidad*;       

### **Otro**

*Producción*
> *Widget de máquina*: si está activo, oculta la información relativa a la máquina en la pestaña *Producción*;    
> *Defecto*: si está activo, oculta la información relativa al defecto en la pestaña *Producción*;    
> *Causal de suspensión*: si está activo, oculta la información relativa a la causal de suspensión en la pestaña *Producción*;       

*Equipo*
> *Operadores ya no activos*: si está activo, oculta la cuadrícula relativa al *Listado de operadores ya no activos* en la pestaña *Equipo*;    

*Notas*
> *Listado de notas*: si está activo, oculta la cuadrícula relativa a los *Documentos adjuntos a la señalización de la fase seleccionada* en la pestaña *Documentos e Instrucciones operativas* dentro de la pestaña *Notas*;    

*Análisis*      
> *OEE*: si está activo, oculta los gráficos OEE en la pestaña *Análisis*;    
> *Gráficos*: si está activo, oculta los gráficos de barras (*Análisis de cantidad*, *Análisis de tiempo*) en la pestaña *Análisis*;    
> *Cuadrículas*: si está activo, oculta las tablas (*Valores de cantidad*, *Valores de tiempo*) en la pestaña *Análisis*.      

*Extra Data*
> *Listado extra data*: si está activo, oculta la cuadrícula relativa al *Listado extra data (seleccione una fase)* en la pestaña *Extra data*;     

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).