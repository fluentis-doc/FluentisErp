---
title: risorse di produzione
sidebar_position: 4
---

:::important ¿Para qué sirve? (A cosa serve)
Los recursos productivos en el sistema MES de Fluentis permiten gestionar todos los parámetros necesarios para la planificación y optimización de las operaciones de producción. A través de una interfaz intuitiva, los usuarios pueden importar diversos tipos de recursos, incluyendo artículos, máquinas, empleados, centros de trabajo y herramientas de medición.

Además, es posible personalizar el diseño y el comportamiento del centro de trabajo, adaptando el sistema a las necesidades específicas de la empresa, de manera sencilla, rápida y completamente autónoma.

Esta funcionalidad no solo simplifica la gestión de los recursos de producción, sino que también permite copiar fácilmente configuraciones predeterminadas de recursos existentes, garantizando que los datos estén siempre actualizados y consistentes.
:::

A través de esta ventana se configuran todos los parámetros relacionados con la gestión de los recursos de producción dentro del MES.

*Botón específico*:

> **importa**: permite importar en la tabla **risorse di produzione** los siguientes tipos de recursos: *articolo*, *macchina*, *dipendente*, *centro di lavoro* y *strumento di misura*; también es posible importar más de uno a la vez simplemente seleccionándolos a través del pop-up *importa*. 
En caso de que ya haya registros en la tabla y el operador seleccione uno con un cierto tipo de recurso, al presionar el botón *importa*, el procedimiento filtrará por ese mismo tipo de recurso y, además, copiará todas las configuraciones ingresadas en el recurso seleccionado (es decir, el que ya está presente en la cuadrícula de recursos) a los nuevos registros de los recursos insertados con el procedimiento de importación.

### risorse di produzione (Risorse di produzione)

El formulario se compone de una primera cuadrícula que contiene los datos relacionados con los recursos ingresados, entre los cuales: 
**codice**: indica el código del recurso de producción; 
**descrizione**: indica la descripción del código del recurso de producción; 
**tipo di risorsa**: indica el tipo de recurso entre: *dipendente*, *articolo*, *macchina*, *strumento di misura* y *centro di lavoro*; 
**macchina**: indica el código de la máquina asociada al recurso; está habilitado solo si el *tipo di risorsa* es *macchina*; 
**descrizione macchina**: indica la descripción de la máquina asociada al recurso; está habilitado solo si el *tipo di risorsa* es *macchina*; 
**centro di lavoro**: indica el código del centro de trabajo asociado al recurso; está habilitado solo si el *tipo di risorsa* es *centro di lavoro*; 
**descrizione centro di lavoro**: indica la descripción del centro de trabajo asociado al recurso; está habilitado solo si el *tipo di risorsa* es *centro di lavoro*; 
**dipendente**: indica el código del empleado asociado al recurso; está habilitado solo si el *tipo di risorsa* es *dipendente*; 
**cognome**: indica el apellido del empleado asociado al recurso; está habilitado solo si el *tipo di risorsa* es *dipendente*; 
**nome**: indica el nombre del empleado asociado al recurso; está habilitado solo si el *tipo di risorsa* es *dipendente*; 
**classe**: indica la clase del artículo asociado al recurso; está habilitado solo si el *tipo di risorsa* es *strumento di misura*; 
**codice articolo**: indica el código del artículo asociado al recurso; está habilitado solo si el *tipo di risorsa* es *strumento di misura*; 
**descrizione articolo**: indica la descripción del artículo asociado al recurso; está habilitado solo si el *tipo di risorsa* es *strumento di misura*; 
**strumento di misura**: indica el código de la herramienta asociada al recurso; está habilitado solo si el *tipo di risorsa* es *strumento di misura*; 
**secondi di refresh**: indica el número de segundos de refresco de los formularios del MES, por ejemplo: para el refresco de los datos en la pestaña *analisi* o el refresco del tiempo de trabajo automático.

A cada recurso ingresado en la cuadrícula superior se le asocian todas las informaciones presentes en las pestañas inferiores.

## Generales (Generali)

En esta pestaña hay una serie de informaciones que influyen en el comportamiento del recurso de producción durante las Declaraciones de producción.

**operatore obbligatorio**: si está activo, obliga al operador a ingresar en el campo *risorsa* del formulario principal de las Declaraciones de producción, un recurso del tipo empleado antes de poder continuar con el resto de las actividades. Este será el empleado que será indicado como operador que realiza la declaración; 
**password obbligatoria**: si está activo, obliga al operador a ingresar una contraseña para poder continuar; las contraseñas requeridas son en el siguiente orden: la contraseña presente en el formulario del [Empleado (Dipendente)](/docs/project-management/registers/employee/new-employee/) y si no está presente, se solicitará la contraseña del sistema. Si ambas no están presentes, se solicitará ingresar una. 
:::note Nota
En caso de que ambos indicadores **operatore obbligatorio** y **password obbligatoria** estén habilitados, el operador deberá ingresar primero al empleado y luego, a solicitud del procedimiento, la contraseña.
::: 
**squadra obbligatoria**: si está activo, habilita un control que obliga al operador a ingresar al menos un miembro del equipo antes de continuar con la actividad de declaración; 
**Permitir señalización superpuesta (Consenti segnalazione sovrapposta)**: si está activo, es posible declarar las fases de un pedido de producción sin seguir la secuencia prevista indicada en el ciclo; si no se activa, no se podrá realizar ninguna superposición de fases o declarar fases sin seguir la secuencia del ciclo; 
**abilita multi-fase**: si está activo, permite habilitar la posibilidad de realizar declaraciones de más fases simultáneamente; 
**numero massimo di fasi**: permite indicar el número máximo de fases que se pueden declarar simultáneamente; 
**inserimento tempo manuale**: si está activo, habilita la entrada del tiempo de trabajo por parte del operador; 
**tempo proposto**: si está activo, habilita que la entrada del tiempo de trabajo se proponga automáticamente; 
**Método de distribución de tiempo (Metodo di ripartizione tempo)**: indica la forma en que se distribuye el tiempo en caso de declaración simultánea de más fases de trabajo. Los métodos activos son: *sequenza*: el tiempo se distribuye entre las fases en trabajo según la secuencia planificada o de ingreso, *proporzionale*: el tiempo se distribuye proporcionalmente según la cantidad producida de la declaración y las cantidades a producir de cada fase; 
**metodo di ripartizione quantità**: indica la forma en que se distribuye la cantidad en caso de declaración simultánea de más fases de trabajo. Los métodos activos son: *sequenza*: la cantidad se distribuye entre las fases en trabajo según la secuencia planificada o de ingreso, *proporzionale*: la cantidad se distribuye proporcionalmente según la cantidad producida de la declaración y las cantidades a producir de cada fase; *manuale* permite indicar las cantidades producidas manualmente en cada fase; 
**dichiarazione quantità materiale obbligatoria**: si está activo, junto con el indicador **obbligo dichiarazione materiale manuale** presente en los [Parámetros MRP (Parametri MRP)](/docs/configurations/parameters/production/mrp-parameters/mrp-parameters-intro) del artículo, asegura que en la pestaña *materiali* de las Declaraciones de producción el artículo se proponga con cantidad cero y por lo tanto, el usuario estará obligado a ingresar manualmente un valor antes de poder continuar; 
**foglio di lavoro obbligatorio**: si está activo, habilita un control que impide al operador agregar una fase que aún no tenga habilitado el indicador "Impresión definitiva". Este indicador de "Impresión definitiva" puede ser habilitado por el procedimiento de impresión del [Hoja de trabajo (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet); 
**stampa etichette obbligatoria**: si está activo, habilita un control que obliga al operador a imprimir todas las etiquetas antes de continuar con la actividad de declaración; 
**difetto obbligatorio se dichiarato scarto**: si está activo, habilita un control que obliga al operador a ingresar el tipo de defecto en caso de que ingrese una cantidad desechada; 
**registrazione automatica**: si está activo, permite crear el registro de almacén automáticamente al confirmar la declaración. 

### *Gestión documental* (Gestione documentale)
**Tipo de origen de documento a excluir (Tipo origine documento da escludere)**: esta tabla está relacionada con la pestaña *documenti e istruzioni operative* de Fluentis MES y permite definir qué tipos de documentos deben ser excluidos; de esta manera, los archivos adjuntos a estos tipos de documentos no se visualizarán en la pestaña *documenti e istruzioni operative*. 
Los tipos de documentos que se pueden excluir son: 
> *nessuna*: ninguno de los tipos de documentos está excluido; 
> *articolo*: todos los documentos (archivos, imágenes,...) relacionados con el artículo no se visualizarán en la pestaña *documenti e istruzioni operative*; 
> *ordine cliente*: todos los documentos (archivos, imágenes,...) relacionados con el pedido del cliente no se visualizarán en la pestaña *documenti e istruzioni operative*; 
> *commessa*: todos los documentos (archivos, imágenes,...) relacionados con el trabajo no se visualizarán en la pestaña *documenti e istruzioni operative*; 
> *ordine di produzione*: todos los documentos (archivos, imágenes,...) relacionados con la orden de producción no se visualizarán en la pestaña *documenti e istruzioni operative*; 
> *fase ordine di produzione*: todos los documentos (archivos, imágenes,...) relacionados con una fase específica de una orden de producción (dentro de la pestaña *documenti allegati* relacionada con la fase) no se visualizarán en la pestaña *documenti e istruzioni operative*. 

### *Controles de calidad* (Controlli Qualità)
Contiene una serie de controles relacionados con la pestaña *Control de calidad (Controllo qualità)* de Fluentis MES. 
**tipo controllo da considerare**: es el documento de tipo de control de artículos donde se almacenarán los valores registrados; 
**dettaglio articolo da considerare**: es el máximo detalle del artículo que se considerará para realizar las pruebas (Ninguno, Lote, S.N., U.D.C.); 
**la fase è bloccabile**: al primer valor no conforme o a la media de los valores registrados no conformes, la fase misma y las fases siguientes se bloquean hasta que sean desbloqueadas por un operador habilitado. En este caso se utilizará la **causale di sospensione blocco fase** indicada en la sección dedicada a las causas de suspensión. 

### *Causas de suspensión* (Causali di sospensione)
**causali di sospensione da escludere**: en esta tabla se pueden indicar todas las causas de suspensión que se desean excluir dentro de Fluentis MES.

**causale di sospensione proposta**: indica la causa de suspensión que se utiliza por defecto en caso de que un operador cree una suspensión sin indicar una causa de suspensión en el campo correspondiente en la pestaña *produzione* de Fluentis MES.

**interruzione automatica**: si está habilitado, permite activar las interrupciones automáticas de las declaraciones según los horarios indicados en el centro de trabajo; 
**causale di sospensione pausa notturna**: indica la causa de suspensión que se utiliza para crear la suspensión por la pausa nocturna; 
**causale di sospensione pausa pranzo**: indica la causa de suspensión que se utiliza para crear la suspensión por la pausa de almuerzo; 
**causale di sospensione blocco fase**: indica la causa de suspensión que se utiliza para bloquear las fases en caso de no conformidad en los controles de calidad. 

## Diseño (Layout)

*Botones específicos*:

> **layout completo**: permite activar el diseño completo de la interfaz MES con un solo clic; 
> **layout minimo**: permite activar el diseño mínimo de la interfaz MES con un solo clic; 

En esta pestaña hay una serie de informaciones que influyen en el diseño del recurso de producción durante las Declaraciones de producción.

**sequenza tabulatori** 
Esta sección permite definir si una pestaña es visible o no, además, también se puede variar su secuencia; 

**non visualizzare**
Esta sección permite ocultar varias informaciones no necesarias dentro de Fluentis MES.

### **Generale (General)**
> *gruppo*: si está activo, oculta la información relacionada con el grupo; 
> *sequenza*: si está activo, oculta la información relacionada con la secuencia; 
> *sottofase*: si está activo, oculta la información relacionada con la subfase; 
> *centro di lavoro*: si está activo, oculta la información relacionada con el centro de trabajo; 
> *macchina*: si está activo, oculta la información relacionada con la máquina; 
> *gruppo manodopera*: si está activo, oculta la información relacionada con el grupo de mano de obra; 
> *date previste*: si está activo, oculta la información relacionada con las fechas previstas; 
> *variante*: si está activo, oculta la información relacionada con la variante; 
> *ordine di produzione*: si está activo, oculta la información relacionada con la orden de producción; 
> *commessa*: si está activo, oculta la información relacionada con el trabajo; 
> *progetto*: si está activo, oculta la información relacionada con el proyecto; 
> *lotti*: si está activo, oculta la información relacionada con la gestión de lotes; 
> *serial number*: si está activo, oculta la información relacionada con la gestión de números de serie; 
> *UDC*: si está activo, oculta la información relacionada con la gestión de UDC; 

### **articoli prodotti**
> *magazzino versamento*: si está activo, oculta la información relacionada con el almacén de ingreso de los artículos producidos en la pestaña *produzione*; 
> *causale versamento*: si está activo, oculta la información relacionada con la causa de ingreso de los artículos producidos en la pestaña *produzione*; 
> *ubicazione versamento*: si está activo, oculta la información relacionada con la ubicación de ingreso de los artículos producidos en la pestaña *produzione*; 
> *magazzino versamento scarto*: si está activo, oculta la información relacionada con el almacén de ingreso de desecho de los artículos producidos en la pestaña *produzione*; 
> *causale versamento scarto*: si está activo, oculta la información relacionada con la causa de ingreso de desecho de los artículos producidos en la pestaña *produzione*; 
> *ubicazione versamento scarto*: si está activo, oculta la información relacionada con la ubicación de ingreso de desecho de los artículos producidos en la pestaña *produzione*; 
> *quantità alternativa*: si está activo, oculta la información relacionada con la gestión de la cantidad alternativa; 

### **materiali**
> *magazzino prelievo*: si está activo, oculta la información relacionada con el almacén de extracción de materiales en la pestaña *materiali*; 
> *causale prelievo*: si está activo, oculta la información relacionada con la causa de extracción de materiales en la pestaña *materiali*; 
> *magazzino versamento scarto*: si está activo, oculta la información relacionada con el almacén de ingreso de desecho de los materiales en la pestaña *materiali*; 
> *causale versamento scarto*: si está activo, oculta la información relacionada con la causa de ingreso de desecho de los materiales en la pestaña *materiali*; 

### **controlli qualità**

> **sequenza**: si está activo, oculta la información relacionada con la secuencia en la pestaña *controlli qualità*; 
> **tipo di prova**: si está activo, oculta la información relacionada con el tipo de prueba en la pestaña *controlli qualità*; 
> **strumenti di misura**: si está activo, oculta la información relacionada con la categoría de herramienta de medición y las herramientas de medición en la pestaña *controlli qualità*; 
> **limiti tolleranze**: si está activo, oculta la información relacionada con los límites de tolerancia (L.min.(toll-), L.min.(toll+), L.max.(toll-) y L.max.(toll+)) en la pestaña *controlli qualità*; 
> **tipo controllo e frequenza**: si está activo, oculta la información relacionada con el tipo de control de prueba y la frecuencia en la pestaña *controlli qualità*; 
> **magazzino**: si está activo, oculta la información relacionada con el almacén en la pestaña *controlli qualità*; 
> **causale**: si está activo, oculta la información relacionada con la causa de almacén para artículos no conformes en la pestaña *controlli qualità*; 

### **altro**

*produzione*
> *widget macchina*: si está activo, oculta la información relacionada con la máquina en la pestaña *produzione*; 
> *difetto*: si está activo, oculta la información relacionada con el defecto en la pestaña *produzione*; 
> *causale sospensione*: si está activo, oculta la información relacionada con la causa de suspensión en la pestaña *produzione*; 

*squadra*
> *operatori non più attivi*: si está activo, oculta la cuadrícula relativa a la *elenco operatori non più attivi* en la pestaña *squadra*; 

*note*
> *elenco note*: si está activo, oculta la cuadrícula relativa a los *Documentos adjuntos a la señalización de la fase seleccionada* en la pestaña *documenti e istruzioni operative* en la pestaña *note*; 

*analisi* 
> *oee*: si está activo, oculta los gráficos OEE en la pestaña *analisi*; 
> *grafici*: si está activo, oculta los gráficos de barras (*analisi quantità*, *analisi tempo*) en la pestaña *analisi*; 
> *griglie*: si está activo, oculta las tablas (*valori quantità*, *Valores de tiempo (Valori tempo)*) en la pestaña *analisi*. 

*extra data*
> *elenco extra data*: si está activo, oculta la cuadrícula relativa a la *Lista de datos adicionales (selecione una fase)* en la pestaña *extra data*; 

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).