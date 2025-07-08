---
title: Órdenes de Producción (Ordini di Produzione)
sidebar_position: 3
---

Normalmente las órdenes de producción se generan automáticamente mediante el procedimiento de *Liberación de órdenes planificadas (Rilascio ordini di pianificati)*.  
Para crear manualmente una orden de producción, es necesario crear primero la orden planificada de producción y luego liberarla mediante el procedimiento dedicado. 

## Cabecera de la orden de producción (Testata ordine di produzione)

En la cabecera se resumen todos los datos relativos a la orden de producción, como: número, lote y año, los datos de la orden y del cliente de referencia, el proyecto vinculado, la fecha de inicio y fin, la información relativa al artículo que se va a producir, con la versión de la lista de materiales (distinta base) y el ciclo, la cantidad que se va a producir y la producida.  
También es posible indicar el almacén y la causal, que se utilizarán para la entrada del producto terminado en el almacén; estas tendrán máxima prioridad respecto a todos los demás parámetros, como se explica en detalle en [Parámetros de producción (Parametri di produzione)](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

*Botón específico (Pulsante specifico)*:  

> **Finalización de datos del orden (Completamento dati ordine)**: invoca el procedimiento que permite insertar y/o actualizar, para el artículo incluido en la orden de producción, todos los datos relativos a materiales, fases, preparación, equipamientos, atributos y notas varias, tomándolos de la lista de materiales (distinta base) y del ciclo de trabajo del artículo y **válidos en la fecha de ejecución de la finalización de datos**.         
> **Recalcular fecha de inicio (Ricalcola data inizio)**: Llama al procedimiento que permite ejecutar una actualización de la fecha de inicio de la orden de producción y eventualmente de las fases de trabajo de la misma, como resultado de una modificación de los tiempos de trabajo y/o de la cantidad a producir del artículo objeto de la orden de producción.  
> **Generar lista de materiales (Genera distinta base)**: permite generar la lista de materiales (distinta base) con base en los datos introducidos en la orden de producción o actualizar los datos existentes con los introducidos en la orden.  
> **Generación del ciclo de trabajo (Generazione ciclo di lavoro)**: permite crear el ciclo de trabajo del artículo basándose en los datos introducidos en la orden, o actualizar los datos existentes con los datos de la orden. 

*Campos específicos (Campi specifici)*: 

**Estado (Stato)**: indica el estado de la orden de producción: *Lanzado (Lanciato)* es el estado inicial de la orden de producción recién generada por el procedimiento de liberación de órdenes planificadas, mientras que *Ejecutivo (Esecutivo)* es el estado que se debe asignar a la orden para poder proceder con las notificaciones de producción.     

**Obligatorio (Tassativo)**: al habilitar esta bandera, la orden de producción se vuelve obligatoria, por lo tanto, la [Planificación con capacidad finita (Schedulazione a capacità finita)](/docs/planning/ms-master-scheduling/finite-capacityscheduling) no la recolocará en el tiempo y la mantendrá fija en esas fechas. Además, esto también se tendrá en cuenta en el procedimiento [M.R.P.](/docs/planning/ms-master-scheduling/mrp) cuando esté activada la bandera *Diferenciar demanda de producción confirmada (Differenzia domanda di produzione confermata)*.

## Materiales (Materiali)

En esta pestaña se muestran los materiales de primer nivel de la lista de materiales (distinta base) correspondiente al producto terminado que se va a producir, pero el usuario puede modificar los datos y/o añadir otros materiales a la lista de componentes de la orden de producción.  
Para importar los datos directamente de la lista de materiales (distinta base) del artículo, es necesario hacer clic en el botón **Finalización de datos del orden (Completamento dati ordine)** presente en la barra de herramientas (ribbon bar).

*Botones específicos (Pulsanti specifici)*:

> **Insertar material (Inserisci materiale)**: permite insertar un nuevo material en la cuadrícula;  
> **Borrar material (Cancella materiale)**: permite borrar los materiales insertados en la cuadrícula. 

*Campos específicos (Campi specifici)*:

**Clase (Classe)**: Indica la clase del artículo;       
**Código de artículo (Codice articolo)**: indica el código del artículo;          
**Variante (Variante)**: en este campo se introduce la posible variante del artículo;           
**UM (UM)**: en este campo se muestra la unidad de medida principal del artículo;        
**Unidad de medida (Unità di misura)**: en este campo se introduce la posible unidad de medida alternativa del artículo;  
**Fecha de uso (Data impiego)**: coincide con la fecha de inicio prevista de la fase de la orden de producción a la que se asocia ese material; si no se asocia a ninguna fase, coincide con el inicio de la primera fase del ciclo;      
**Cantidad de uso (Quantità impiego)**: representa la cantidad unitaria necesaria para este artículo (prevista por la [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)) que puede modificarse igualmente;  
**Cantidad total (Quantità totale)**: representa la cantidad que se obtiene multiplicando la *Cantidad de uso (Quantità d'impiego)* por la *Cantidad a producir (Quantità da produrre)*;      
**Cantidad alternativa (Quantità alternativa)**: representa la cantidad total pero expresada en la unidad de medida alternativa;        
**Cantidad retirada (Quantità prelevata)**: representa la cantidad retirada mediante la [Lista de retiro de materiales (Lista di prelievo)](/docs/production/pp-production-in-progress/picking-materials-list);      
**Fija / Variable (Fissa / Variabile)**: indica si la cantidad del material es fija o variable; esto se hereda de la [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management);              
**Porcentaje de desperdicio (Percentuale scarto)**: en este campo se introduce o se toma de la [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) el porcentaje de desperdicio eventual para este artículo;  
**Fase / Subfase (Fase / Sotto Fase)**: con doble clic se abre una ayuda de fases de trabajo desde la cual se puede seleccionar la fase y la subfase correspondientes y, por tanto, asignar el material seleccionado a una determinada fase de trabajo del artículo;     
**Almacén (Magazzino)**: indica el almacén desde el cual se descargará este artículo;       
**Causal (Causale)**: indica la causal de almacén con la cual se descargará este artículo;    
**Prioridad (Priorità)**: aquí se visualiza la prioridad del componente, si está presente, introducida en la [Lista de materiales (Distinta base)](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management). Esta contribuye a la unicidad del material, por lo que el mismo material puede insertarse más veces con diferentes prioridades. Además, puede modificarse manualmente, como todos los demás datos presentes en esta cuadrícula;      
**Cantidad disponible (Quantità disponibile)**: en este campo aparece la cantidad disponible del artículo proporcionada por el procedimiento **Recalcular viabilidad (Ricalcola fattibilità)** presente en [Secuencia de fases (Sequenza fasi)](/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown);           
**A declarar en móvil (Da dichiarare su mobile)**: si está habilitado, el material se propondrá automáticamente en el formulario de declaración de producción presente en el WMS.

## Fases (Fasi)

En esta pestaña se muestran las fases del ciclo de trabajo relativas al producto terminado que se va a producir, pero el usuario puede modificar los datos y/o añadir otras fases a la orden de producción.  
Para importar los datos directamente del ciclo de trabajo del artículo, es necesario hacer clic en el botón **Finalización de datos del orden (Completamento dati ordine)** presente en la barra de herramientas.  
En la orden de producción es posible modificar una fase de interna a externa, por lo que será posible introducir también el subcontratista y, al guardar la misma, el procedimiento creará la orden de trabajo externo (orden de conto lavoro). Además, en el caso de que una fase externa pase a ser interna, el procedimiento eliminará automáticamente la orden de trabajo externo asociada.

*Botones específicos (Pulsanti specifici)*:
> **Insertar fase (Inserisci fase)**: permite insertar una nueva fase en la cuadrícula;  
> **Borrar fase (Cancella fase)**: permite borrar las fases insertadas en la cuadrícula. 

*Campos específicos (Campi specifici)*:

**Código de fase / Fase / Subfase (Codice fase / Fase / Sotto Fase)**: haciendo doble clic se abre la ayuda correspondiente a fases de trabajo desde la cual se puede seleccionar la fase y subfase relativas;  
**Control de calidad (Controllo qualità)**: si está activada, esta bandera indica que la fase está sujeta a control de calidad y en la pestaña específica se puede indicar el *Plan de control (Piano di controllo)* que se utilizará para verificar el artículo una vez realizada la declaración de producción;     
**Fase productiva (Fase produttiva)**: si está activo, indica que la fase es productiva y se puede proceder con la inserción de las notificaciones de producción (por lo tanto, al habilitarlo, se desea que haya registro de la producción para esta fase); si no está activo, no será posible declarar la fase en sí;         
**Fase movilizable (Fase movimentabile)**: si está activo, indica que en el momento en que se registra la fase de producción también se crean movimientos de almacén; esto significa que al proceder con la notificación de producción se procederá también con la entrada en el almacén del producto terminado y la salida de la materia prima empleada para la producción en esa fase;     
**Centro de trabajo (Centro di lavoro)**: indica el centro de trabajo, es decir, la máquina en la que se llevará a cabo esa fase específica;     
**Tiempo fijo (Tempo fisso)**: si está habilitado, indica que el tiempo de esa fase es fijo y, por lo tanto, no varía en función de la cantidad; esto se hereda del centro de trabajo introducido;     
**Cantidad de la fase (Quantità fase)**: indica la cantidad total de piezas que se producirán en esa fase;        
**Fecha de inicio / fin prevista (Data inizio / fine prevista)**: se trata de las fechas de inicio y fin de la fase correspondiente; al cambiar las fechas previstas de inicio y fin de trabajo, también se modifican automáticamente estas últimas. Se calculan basándose en los tiempos introducidos en las fases de trabajo, y más precisamente en función del mayor valor entre el tiempo total de operario y el tiempo total de máquina para la fase seleccionada;          
**Tiempo total de máquina (Totale tempo macchina)**: indica el tiempo total de máquina, dado por el producto de *tiempo de máquina (tempo macchina)* por el *número de máquinas (numero di macchine)*;       
**Tiempo de máquina (Tempo macchina)**: indica el tiempo de trabajo de esa máquina para esa fase;      
**Número de máquinas (Numero macchine)**: indica el número de máquinas utilizadas en esa fase;     
**Tiempo total de operario (Totale tempo operaio)**: indica el tiempo total de operario, dado por el producto de *tiempo de operario (tempo operaio)* por el *número de operarios (numero di operai)*;     
**Tiempo de operario (Tempo operaio)**: indica el tiempo de trabajo de la mano de obra para esa fase;        
**Número de operarios (Numero operai)**: indica el número de operarios empleados en esa fase;     
**Fase / Subfase superpuesta (Fase / Sotto fase sovrapposta)**: en estos dos campos, en el caso de superposición, se indicará la fase que se desea superponer a la fase seleccionada;  
**Ubicación (Ubicazione)**: permite asociar también una ubicación de almacén a la fase; esto significa que todos los artículos empleados en esa fase estarán presentes en esa ubicación;     
**Descripción del subcontratista (Descrizione terzista)**: con doble clic en la casilla se abre la ayuda para poder seleccionar la cuenta y la subcon cuenta del subcontratista correspondiente. Esta casilla está activa solo cuando la fase está designada como fase *Externa (Esterna)*. Cabe destacar que el *subcontratista (terzista)* también se toma de la fase de trabajo introducida en el ciclo de trabajo del artículo;  
**Orden de trabajo externo creado (Ordine conto lavoro creato)**: indica que se ha creado la orden de trabajo externo (orden de conto lavoro). Solo funciona para fases externas;        
**Descripción del centro de trabajo (Descrizione centro lavoro)**: indica la descripción del centro de trabajo de la fase;       
**Impresión definitiva (Stampa definitivo)**: indica que se ha impreso el [Parte de trabajo (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet) de manera definitiva;   
**Fecha de impresión del parte de trabajo (Data stampa foglio di lavoro)**: indica la fecha de impresión del [Parte de trabajo (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet) de manera definitiva;      
**Número progresivo del parte de trabajo (Numero progressivo foglio lavoro)**: indica el número progresivo del [Parte de trabajo (Foglio di lavoro)](/docs/production/pp-production-in-progress/reports/worksheet) impreso de manera definitiva.      

### Fases - Propiedades (Fasi - Proprietà)

En la pestaña **Propiedades (Proprietà)** se visualizan los siguientes datos relativos a la fase seleccionada en la cuadrícula:

**Descripción de la fase (Descrizione fase)**: indica la descripción de la fase y subfase seleccionadas;      
**Tipo (Tipo)**: en este cuadro combinado es posible configurar el tipo de trabajo (interno o externo);  
**Superposición (Sovrapposizione)**: mediante este cuadro combinado se introduce el tipo de superposición entre fases, en caso de que exista. Podemos tener superposición *Total (Totale)* (en este caso la fase en cuestión se superpone totalmente a la fase indicada), *Por piezas (A pezzi)* (en este caso es necesario indicar después de cuántas piezas producidas por esta fase comenzará la fase siguiente), *Por tiempo (A tempo)* (en este caso es necesario indicar después de cuántos minutos desde que comenzó la fase indicada iniciará la fase siguiente);  
**UM Tiempos (UM Tempi)**: en este cuadro combinado aparece la Unidad de Medida de los Tiempos de la Fase; se puede decidir gestionar los tiempos de la fase en segundos, minutos, horas o días. Normalmente se gestionan en minutos los tiempos de las fases internas y en días los de las fases externas, pero depende mucho del tipo de empresa para la que se está configurando el trabajo;  
**Máquina (Macchina)**: en este cuadro combinado se puede seleccionar el código (y descripción) de la máquina relativa. Se propone automáticamente, tomado del centro de trabajo que se ha introducido previamente en la cuadrícula;     
**Sitio productivo (Sito produttivo)**: indica el sitio de producción en el que se producirá el artículo; esto se hereda de la orden de producción;       
**Grupo de mano de obra (Gruppo manodopera)**: en este cuadro combinado se puede seleccionar el código (y descripción) del grupo de mano de obra correspondiente. Se propone automáticamente, tomado del centro de trabajo que se haya introducido previamente en la cuadrícula;  
**Cantidad de piezas por fase (Quantità pezzi per fase)**: indica el número de piezas producidas por cada ejecución de esa fase;         
**Valor (Valore)**: aquí se indica el valor de la posible superposición, utilizando los criterios especificados arriba;  
**Uso (Utilizzo)**: si la bandera está activada, significa que se desea que el tiempo de espera / cola aumente el tiempo de compromiso del centro de trabajo en esa fase;  
**Tiempo de espera o cola (Tempo di attesa o coda)**: indica el tiempo que es necesario esperar al finalizar la ejecución de la fase antes de poder ejecutarla de nuevo. Además, habilitando la bandera **Uso (Utilizzo)**, este tiempo de espera se considerará como un compromiso adicional del tiempo del centro de trabajo en esa fase.

### Fases - Extra Data (Fasi - Extra Data)

Contiene los posibles datos adicionales (extra data) relativos a la fase seleccionada.

### Fases - Documentos adjuntos (Fasi - Documenti allegati)

Permite adjuntar documentos a la fase seleccionada, los cuales serán visibles también en el [MES (MES)](/docs/production/mes/mes-intro).

## Preparación (Attrezzaggio)

En esta pestaña es posible definir los tiempos relativos a la preparación de la fase seleccionada en la pestaña anterior.      
Es importante recordar que los datos relativos al centro de trabajo, máquina y mano de obra, se deben introducir solo si son diferentes de los utilizados para la fase; de lo contrario, si quedan vacíos, se considerarán automáticamente los de la fase principal.  

*Campos específicos (Campi specifici)*:

**Fase / Subfase / Descripción (Fase / Sottofase / Descrizione)**: en estos campos se muestran las informaciones relativas a la fase que está seleccionada en la pestaña *Fases (Fasi)*;  
**Tipo (Tipo)**: indica el tipo de la fase (interna o externa);  
**Tipo de superposición (Tipo sovrapposizione)**: indica la posible tipología de superposición;  
**UM Tiempos (UM Tempi)**: indica la unidad de medida temporal de la fase;  
**Centro de trabajo (Centro di Lavoro)**: en estos campos se introduce el código (y descripción) del centro de trabajo configurado para la preparación; (solo se usa si el centro de trabajo de preparación es diferente del centro de trabajo utilizado en la fase seleccionada);      
**Máquina (Macchina)**: en estos campos se introduce el código (y descripción) de la máquina para la preparación; (solo se usa si la máquina utilizada para la preparación es diferente de la máquina utilizada en la fase seleccionada);        
**Grupo de mano de obra (Gruppo Manodopera)**: en estos campos se introduce el código (y descripción) del grupo de mano de obra para la preparación; (solo se usa si el grupo de mano de obra utilizado para la preparación es diferente del grupo de mano de obra utilizado en la fase seleccionada);         
**Valor (Valore)**: indica el valor de la posible superponibilidad;  
**Centro de trabajo (Centro di lavoro)**: en estos campos se muestra el código y la descripción del centro de trabajo relativo a la fase seleccionada;  
**Fecha de inicio (Data inizio)**: se muestra la fecha de inicio de la fase seleccionada en la pestaña *Fases (Fasi)*;  
**Fecha de fin (Data fine)**: se muestra la fecha de fin de la fase seleccionada en la pestaña *Fases (Fasi)*;  
**Tiempo de preparación (Tempo attrezzaggio)**: se introduce el tiempo de preparación. Se trata de un tiempo fijo, que no varía en función de la cantidad que se vaya a producir en la fase seleccionada;  
**Tiempo de re-preparación (Tempo riattrezzaggio)**: se introduce el tiempo de re-preparación. Se utiliza en caso de que sea necesario volver a preparar el centro de trabajo entre una ejecución y otra de la misma fase y se suma al tiempo de preparación;           
**Núm. máquinas (Num. macchine)**: se indica el número de máquinas empleadas para la preparación;  
**Núm. operarios (Num. operai)**: se indica el número de operarios empleados para la preparación.

## Equipamientos (Attrezzature)

En esta pestaña, compuesta principalmente por una cuadrícula, es posible definir qué equipamientos y cuántos se utilizarán en la producción de la fase seleccionada en la pestaña *Fases (Fasi)*. 

*Campos específicos (Campi specifici)*:

**Secuencia (Sequenza)**: en este campo es posible indicar la secuencia con la que deben usarse los equipamientos;  

**Equipamientos (Attrezzature)**: con este cuadro combinado se puede llamar al código del equipamiento, tomado de la tabla correspondiente [Equipamientos (Attrezzature)](/docs/configurations/tables/production/equipments);  
**Clase/Código de artículo (Classe/Codice articolo)**: en estos campos es posible indicar la clase y el código del artículo (la ayuda filtra automáticamente solo los artículos que están identificados como *Equipamientos (Attrezzature)* en el campo *Naturaleza del artículo (Natura Articolo)* de la ficha de almacén);  
**Variante (Variante)**: representa la variante del artículo;  
**Cantidad (Quantità)**: representa la cantidad del artículo.

## Control de calidad (Controllo qualità)

En esta pestaña, compuesta principalmente por una cuadrícula, es posible visualizar los detalles de las pruebas planificadas de [control de calidad (controllo qualità)](/docs/quality/quality-intro) para la fase / subfase.

## Nota de la fase (Nota fase)

En esta pestaña se muestra la nota vinculada a la fase de trabajo seleccionada en la pestaña *Fases (Fasi)*. Es modificable por el usuario al mismo tiempo que la orden de producción correspondiente.

## Instrucciones operativas (Istruzioni operative)

En esta pestaña es posible adjuntar y visualizar las *Instrucciones operativas (Istruzioni operative)* vinculadas a la fase de trabajo seleccionada en la pestaña *Fases (Fasi)*. Estas serán visibles también en [Fluentis MES (Fluentis MES)](/docs/production/mes/mes-intro). 

## Personal (Personale)

En esta pestaña es posible introducir a los operadores que deberán desempeñar las distintas fases del ciclo productivo. (*Se utiliza solo para personalizaciones*).    

## Extra Data (Extra Data)

Para una descripción detallada sobre los datos adicionales (extra data), consúltese el artículo [Extra data (Extra data)](/docs/configurations/utility/extra-data/extradata/new-extradata).

Para más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common). 