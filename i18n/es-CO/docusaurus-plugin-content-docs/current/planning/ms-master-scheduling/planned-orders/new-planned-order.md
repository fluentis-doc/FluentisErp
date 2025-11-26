---
title: Orden planificado
sidebar_position: 4
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La función de los **Órdenes Planificados<!-- Ordini Pianificati -->** en el sistema Fluentis es un componente clave para la gestión de la planificación de la producción y de las compras<!-- acquisti -->. Los órdenes planificados<!-- ordini pianificati --> pueden ser generados automáticamente mediante la programación general o a través del procesamiento MRP (Manufacturing Resource Planning), o creados manualmente por el usuario. Estos órdenes se utilizan para gestionar las futuras necesidades de recursos y materiales de manera preventiva y organizada.

En la plataforma Fluentis, los órdenes planificados<!-- ordini pianificati --> pueden ser de diversos tipos: producción<!-- produzione -->, compra<!-- acquisto --> y trabajo externo<!-- conto lavoro -->; estos se visualizan con colores diferentes en la cuadrícula, según su tipología. El objetivo principal del uso de los órdenes planificados<!-- ordini pianificati --> es optimizar los procesos productivos y de aprovisionamiento, garantizando que los recursos necesarios estén disponibles cuando se requieran y que las operaciones se realicen sin interrupciones.
:::

Normalmente, los órdenes planificados<!-- ordini pianificati --> se generan automáticamente mediante el procedimiento de *Planificación general<!-- Pianificazione generale -->* o por el *Procesamiento MRP<!-- Elaborazione MRP -->*, pero el usuario tiene la posibilidad de generar manualmente un orden planificado<!-- ordine pianificato -->, ya sea de compra<!-- acquisto -->, de producción<!-- produzione --> o de trabajo externo<!-- conto lavoro -->.

El formulario se abre a través de:  
 -  la ruta **Planificación > MS Master scheduling > Órdenes planificados > Nuevo Orden planificado<!-- Pianificazione > MS Master scheduling > Ordini Pianificati > Nuovo Ordine Pianificato -->** 

o bien mediante

 - el botón **Insertar Orden<!-- Inserisci Ordine -->** que se encuentra en el formulario [Búsqueda Órdenes Planificados<!-- Ricerca Ordini Pianificati -->](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Encabezado del orden planificado<!-- Testata ordine pianificato -->

El formulario consta de una parte que contiene la información del encabezado y de una serie de pestañas debajo.          
Automáticamente se insertan el *número*, *año* y *fecha*, la indicación de si se trata de un *orden de compra<!-- acquisto -->*, *de producción<!-- produzione -->* o *de trabajo externo<!-- conto lavoro -->* y el *tipo de orden planificado<!-- tipo di ordine pianificato -->*. Este último y la numeración son tomados directamente de los datos ingresados en la tabla [Tipo de documentos<!-- Tipo documenti -->](/docs/configurations/tables/production/documents-types/) presente entre las tablas de producción. Al mismo tiempo también se insertan el *número del ciclo de trabajo<!-- numero del ciclo di lavoro -->* por defecto y la *versión* a utilizar.                   
Los datos obligatorios a ingresar son: el *artículo<!-- articolo -->* con la eventual variante, y la *fecha de inicio y de fin*; después bastará ingresar la *cantidad* a producir / comprar.             

*Botón específico*:  

> **Completar datos del orden<!-- Completamento dati ordine -->**: permite ejecutar el procedimiento que permite ingresar y/o actualizar, para el artículo<!-- articolo --> ingresado en el orden planificado<!-- ordine pianificato -->, todos los datos relativos a materiales, fases, preparación, equipos, atributos y notas varias, recuperándolos de la lista de materiales<!-- distinta base --> y el ciclo de trabajo<!-- ciclo di lavorazione --> del artículo<!-- articolo --> y **válidos a la fecha de ejecución de completar datos**.      
> **Recalcular fecha de inicio<!-- Ricalcola data inizio -->**: permite ejecutar un procedimiento para actualizar la fecha de inicio del orden planificado<!-- ordine pianificato --> y eventualmente las fases de trabajo del mismo tras una modificación de los tiempos de trabajo y/o la cantidad a producir del artículo<!-- articolo --> objeto del orden planificado<!-- ordine pianificato -->;  
> **[Parámetros MRP<!-- Parametri MRP -->](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters)**: permite abrir la ventana relativa a los parámetros MRP del artículo<!-- articolo -->;  
> **Generar lista de materiales<!-- Genera distinta base -->**: permite generar la lista de materiales<!-- distinta base --> en base a los datos ingresados en el orden de producción o actualizar los datos existentes con los ingresados en el orden;  
> **Generación de ciclo de trabajo<!-- Generazione ciclo di lavoro -->**: permite crear el ciclo de trabajo<!-- ciclo di lavoro --> del artículo<!-- articolo --> basándose en los datos ingresados en el orden, o actualizar los datos existentes con los ingresados en el orden;  
> **[Lista de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies)**: permite abrir la pantalla relativa a la lista de materiales<!-- distinta base --> del artículo<!-- articolo -->;  
> **[Ciclos de trabajo<!-- Cicli di lavoro -->](/docs/erp-home/registers/production/routes/new-route)**: permite visualizar el ciclo de trabajo<!-- ciclo di lavoro --> y las fases de producción relacionadas del artículo<!-- articolo -->.  

*Campos específicos*: 

**Tipo de Orden Planificado<!-- Tipo Ordine Pianificato -->**: se propone el tipo predeterminado como tipo por defecto;  
**Orden obligatorio<!-- Ordine tassativo -->**: si está activo, este campo indica que el orden planificado<!-- ordine pianificato --> tiene prioridad y no permite al usuario mover dicho orden fijando una fecha posterior respecto a la fecha final prevista por la programación general<!-- schedulazione generale -->;  
**Prioridad del orden<!-- Priorità dell'ordine -->**: permite establecer la prioridad asignada a este orden;  
**Generado por demanda<!-- Generato da domanda -->**: en este campo se visualiza *Manual* (si se trata de un orden planificado<!-- ordine pianificato --> creado manualmente), *Dependiente* (si es generado por programación y depende de otros órdenes planificados de nivel superior) o *Independiente* (si es generado por programación y no depende de ningún otro, siendo ya un orden de nivel 1);    
**Proyecto de producción<!-- Commessa prod -->**: en estos 3 campos se establecen el año, el número y la descripción del proyecto de producción<!-- commessa di produzione --> del cual fue generado el orden planificado<!-- ordine pianificato -->. Si el orden se generó manualmente, no es posible vincularlo a ningún proyecto de producción ya existente, por lo que este campo estará vacío;     
**Tipo de proyecto<!-- Tipo commessa -->**: este campo muestra el tipo del proyecto de producción<!-- commessa di produzione --> del que nació el orden planificado<!-- ordine pianificato -->. Si el orden es manual, este campo también estará vacío;     
**Proyecto<!-- Progetto -->**: con doble clic se abre la ayuda para poder vincular un proyecto al orden planificado<!-- ordine pianificato --> que se está ingresando;       
**Cliente**: indica el cliente del proyecto;      
**Proveedor/Externo<!-- Fornitore/Terzista -->**: estos campos están activos si el orden planificado<!-- ordine pianificato --> es de compra<!-- acquisto --> o de trabajo externo<!-- conto lavoro -->;     
**Artículo<!-- Articolo -->**: indica la clase, el código y la descripción del artículo<!-- articolo --> del proyecto;        
**Variante**: en esta lista se especifica la variante del artículo<!-- articolo -->;  
**Cantidad a producir<!-- Quantità da produrre -->**: indica la cantidad a producir;         
**UM de gestión<!-- UM Gestionale -->**: se indica la unidad de medida de gestión del artículo<!-- articolo -->;  
**Cantidad de uso<!-- Quantità utilizzo -->**: aquí se ingresa la cantidad a producir en la unidad alternativa de medida, si corresponde;  
**UM de uso<!-- UM Utilizzo -->**: se indica la unidad de medida alternativa del artículo<!-- articolo -->;  
**Fecha inicio y fin<!-- Data inizio e fine -->**: se establecen las fechas previstas de inicio y fin de la producción correspondiente. Si, después de completar los datos del ciclo de trabajo, el usuario modifica cualquiera de estas dos fechas, la otra se recalcula en consecuencia;  
**Audit trail**: sección que informa automáticamente la fecha de creación del orden y la fecha de la última modificación, informando para ambas el usuario que ha realizado la operación;  
**Notas<!-- Note -->**: es un campo libre donde se pueden ingresar notas.  

Después de guardar al menos los campos obligatorios, presione el botón **Completar datos del orden<!-- Completamento dati ordine -->** para actualizar todas las pestañas (Materiales, Fases, etc.) que toman los datos de la lista de materiales<!-- distinta base --> y el ciclo de trabajo<!-- ciclo di lavorazione --> del artículo<!-- articolo --> objeto del Orden Planificado<!-- Ordine Pianificato --> (solo si es de producción<!-- produzione -->).


## Materiales<!-- Materiali -->

Esta pestaña consta de una cuadrícula, dentro de la cual el usuario puede ingresar manualmente los materiales<!-- materiali --> que desea que se utilicen para la producción<!-- produzione --> del artículo<!-- articolo --> objeto del orden planificado<!-- ordine pianificato --> (solo si es de producción<!-- produzione -->). Después de la introducción manual, para importar los datos de la lista de materiales<!-- distinta base -->, es necesario hacer clic en el botón **Completar datos del orden<!-- Completamento dati ordine -->** presente en la barra superior.

La cuadrícula ya está rellena si el orden planificado<!-- ordine pianificato --> procede de la *Programación general<!-- Schedulazione generale -->* o del *Procesamiento MRP<!-- Elaborazione MRP -->*, pero el usuario puede modificar los datos y/o agregar otros materiales<!-- materiali --> a la lista de componentes del orden planificado<!-- ordine pianificato -->.  

:::note Nota
Si el orden planificado<!-- ordine pianificato --> es de compra<!-- acquisto -->, la pestaña *Materiales<!-- Materiali -->* estará desactivada.
:::

*Botones específicos*:
> **Insertar material<!-- Inserisci materiale -->**: permite ingresar un nuevo material<!-- materiale --> en la cuadrícula;  
> **Eliminar material<!-- Cancella materiale -->**: permite eliminar los materiales<!-- materiali --> ingresados en la cuadrícula. 

*Campos específicos*:

**Prioridad**: aquí se visualiza la prioridad del componente, si está presente, ingresada en la lista de materiales<!-- distinta base -->. Puede ser modificada, al igual que los demás datos de la cuadrícula;  
**C/L**: en este campo se recupera el flag presente en los *Parámetros MRP* del artículo<!-- articolo --> llamado *Considerar en CL* que indica si el artículo<!-- articolo --> debe ser incluido como material en las órdenes de trabajo externo<!-- ordini di conto lavoro -->;        
**UM de uso<!-- UM Utilizzo -->**: en este campo se ingresa la eventual unidad alternativa de medida del artículo<!-- articolo -->;  
**Fecha de uso<!-- Data impiego -->**: coincide con la fecha de inicio prevista del orden planificado<!-- ordine pianificato --> (al modificar la primera, esta se actualizará automáticamente);  
**Cantidad de uso<!-- Qtà impiego -->**: representa la cantidad unitaria necesaria para este artículo<!-- articolo --> (prevista en la lista de materiales<!-- distinta base -->), modificable;  
**Cantidad total<!-- Qtà totale -->**: representa la cantidad que se obtiene multiplicando la *Cantidad de uso<!-- Qtà d'impiego -->* por la *Cantidad a producir<!-- Qtà da produrre -->*;  
**% de desperdicio<!-- % scarto -->**: aquí se indica o recupera de la lista de materiales<!-- distinta base --> el eventual porcentaje de desperdicio para este artículo<!-- articolo -->;  
**Fase/Subfase<!-- Fase/Sottofase -->**: es posible ingresar manualmente la fase y subfase correspondientes y así asignar el material<!-- materiale --> seleccionado a una determinada fase de trabajo del artículo<!-- articolo -->; estas se asignan automáticamente desde el ciclo de trabajo<!-- ciclo di lavoro -->;            
**Cantidad disponible<!-- Q.tà disp -->**: en este campo aparece la cantidad disponible del artículo<!-- articolo --> en la fecha de uso<!-- impiego -->.

## Fases

Esta pestaña consta de una cuadrícula, en la que el usuario puede ingresar manualmente las fases<!-- fasi --> que desea utilizar para la producción<!-- produzione --> del artículo<!-- articolo --> objeto del orden planificado<!-- ordine pianificato --> (solo si es de producción<!-- produzione -->). Tras la introducción manual, para importar los datos del ciclo de trabajo<!-- ciclo di lavorazione --> del artículo<!-- articolo -->, haga clic en el botón **Completar datos del orden<!-- Completamento dati ordine -->** de la barra superior.

La cuadrícula ya está rellena si el orden planificado<!-- ordine pianificato --> proviene de la *Programación general<!-- Schedulazione generale -->* o del *Procesamiento MRP<!-- Elaborazione MRP -->*. 

*Botones específicos*:
> **Insertar fase<!-- Inserisci fase -->**: permite insertar una nueva fase<!-- fase --> en la cuadrícula;  
> **Eliminar fase<!-- Cancella fase -->**: permite eliminar las fases<!-- fasi --> ingresadas en la cuadrícula. 

*Campos específicos*:

**Código de fase/Fase/Subfase<!-- Codice fase/Fase/Sotto Fase -->**: con doble clic se abre la ayuda relacionada de fases<!-- fasi --> de trabajo desde la cual es posible seleccionar la fase y subfase deseada;  
**Control de calidad<!-- Controllo qualità -->**: este campo indica si el material<!-- materiale --> debe someterse a control de calidad antes de su uso;  
**Fase productiva<!-- Fase produttiva -->**: si la casilla está habilitada, identifica que la fase en cuestión es productiva y, por tanto, debe ser reportada; 
**Movible<!-- Movimentabile -->**:  si la casilla está habilitada indica que la fase en cuestión puede ser movida, por lo que generará un movimiento de almacén<!-- magazzino --> una vez registrada la declaración de producción<!-- produzione -->;         
**Centro de trabajo<!-- Centro di lavoro -->**: en esta lista se indica el Centro de trabajo<!-- Centro di lavoro -->, propuesto automáticamente desde la fase seleccionada e ingresada en la cuadrícula;  
**Fecha inicio/fin prevista<!-- Data inizio/fine prevista -->**: son las fechas de inicio y fin de la fase correspondiente; al cambiar las fechas previstas de inicio y fin del trabajo, también se actualizarán automáticamente estas. Se calculan según los tiempos ingresados en las fases de trabajo, concretamente según el mayor entre el tiempo de operario y el tiempo total de máquina para la fase seleccionada;  
**Tiempo de máquina<!-- Tempo macchina -->**: es el tiempo empleado por la máquina para ejecutar la fase, referido a la cantidad de piezas por fase;  
**Número de máquinas<!-- Numero macchine -->**: indica el número de máquinas implicadas en esta fase;  
**Cantidad de piezas por fase<!-- Qtà pezzi per fase -->**: indica el número de piezas por fase;  
**Tiempo operario<!-- Tempo operaio -->**: es el tiempo empleado por el operario para ejecutar esta fase, referido a la cantidad de piezas por fase;  
**Número de operarios<!-- Numero operai -->**: es el número de operarios implicados en esta fase;  
**Tercero/Cuenta de tercero<!-- Conto terzista/descrizione terzista -->**: con doble clic en la casilla se abre la ayuda para seleccionar la cuenta y subcuenta<!-- sottoconto --> del tercero correspondiente. Esta casilla está activa solo si la fase está designada como *Externa*. Es importante notar que el *tercero* también se toma de la fase de trabajo ingresada en el ciclo de trabajo<!-- ciclo di lavorazione --> del artículo<!-- articolo -->.  
**Descripción del centro de trabajo<!-- Decrizione centro di lavoro -->**: indica la descripción del centro de trabajo<!-- centro di lavoro -->.       

### Fases - Propiedades<!-- Fasi - Proprietà -->

Incluye las propiedades relacionadas con la fase seleccionada.

**Descripción de fase/subfase<!-- Descrizione fase/sottofase -->**: en este campo aparece la descripción de la fase seleccionada;  
**Tipo**: en esta lista es posible establecer el tipo de trabajo (interno o externo);  
**Superposición<!-- Sovrapposizione -->**: mediante esta lista se indica el tipo de una eventual superposición entre fases. Puede ser *Total* (en este caso la fase se superpone totalmente a la siguiente indicada), *Por piezas* (es necesario indicar después de cuántas piezas producidas en esta fase comenzará la siguiente), *Por tiempo* (hay que indicar después de cuántos minutos desde el inicio de la fase en cuestión dará inicio la fase siguiente);  
**UM de tiempos<!-- UM Tempi -->**: en esta lista aparece la *Unidad de Medida de Tiempos* de la Fase; se puede decidir gestionar los tiempos de la fase en segundos, minutos, horas o días. Generalmente se gestionan en minutos los tiempos de las fases internas y en días los de las externas, pero obviamente depende del tipo de empresa;  
**Máquina<!-- Macchina -->**: en esta lista puede seleccionarse el código (y descripción) de la máquina correspondiente. Se propone automáticamente a partir del centro de trabajo<!-- centro di lavoro --> previamente ingresado en la cuadrícula;  
**Grupo de mano de obra<!-- Gruppo manodopera -->**: puede seleccionarse el código y descripción del grupo de mano de obra correspondiente, propuesto automáticamente según el centro de trabajo<!-- centro di lavoro --> previamente ingresado;  
**Superposición referida a fase/subfase<!-- Sovrapposizione riferita alla fase/sottofase -->**: aquí se indica el código de la fase y subfase que se superponen con la fase en cuestión. Normalmente se indica la siguiente fase, pero esto es solo una convención; 
**Valor<!-- Valore -->**: aquí se indica el valor de la eventual superposición, usando los criterios arriba mencionados;  
**Utilización<!-- Utilizzo -->**: si está activo el flag, significa que se quiere que el tiempo de espera/cola aumente el tiempo de ocupación del Centro de trabajo<!-- Centro di Lavoro --> en esa fase;  
**Tiempo de espera o cola<!-- Tempo di attesa o coda -->**: indica el tiempo previsto de espera/cola para esta máquina.  

### Fases - Extra Data<!-- Fasi - Extra Data -->

Incluye los eventuales datos extra relativos a la fase seleccionada.

## Preparación<!-- Attrezzaggio -->

En esta pestaña se pueden definir los tiempos relativos a la preparación de la fase seleccionada en la pestaña anterior. 

*Campos específicos*:

**Fase/Subfase<!-- Fase/Sottofase -->**: en estos campos se visualiza la información relacionada con la fase seleccionada en la pestaña *Fases<!-- Fasi -->*;  
**Tipo**: indica el tipo de la fase (interna o externa);  
**Tipo de superposición<!-- Tipo sovrapposizione -->**: indica el eventual tipo de superposición;  
**UM de tiempos<!-- UM Tempi -->**: indica la unidad de medida temporal de la fase;  
**Centro de trabajo<!-- Centro di Lavoro -->**: en estos campos se ingresa el código y descripción del Centro de trabajo<!-- centro di lavoro --> definido para la preparación;  
**Máquina<!-- Macchina -->**: en estos campos se ingresa el código y descripción de la máquina para la preparación;  
**Grupo MDO<!-- Gruppo MDO -->**: en estos campos se ingresa el código y descripción del Grupo de mano de obra para la preparación;  
**Valor<!-- Valore -->**: indica el valor de la posible superponibilidad;  
**CdL**: en estos campos se visualiza el código y la descripción del correspondiente Centro de trabajo<!-- centro di lavoro --> de la fase seleccionada;  
**Fecha de inicio<!-- Data inizio -->**: se visualiza la fecha de inicio de la fase seleccionada en *Fases<!-- Fasi -->*;  
**Fecha de finalización<!-- Data fine -->**: se visualiza la fecha de fin de la fase seleccionada en *Fases<!-- Fasi -->*;  
**Tiempo de preparación<!-- Tempo attrezzaggio -->**: se ingresa el tiempo de preparación. Es un tiempo fijo, que no varía si se modifican las cantidades a producir en la fase seleccionada;  
**Tiempo de re-preparación<!-- Tempo riattrezzaggio -->**: se ingresa el tiempo de re-preparación, el cual se suma al tiempo de preparación;  
**Número de máquinas<!-- Num. macchine -->**: se indica el número de máquinas empleadas para la preparación;  
**Número de operarios<!-- Num. operai -->**: se indica el número de operarios empleados para la preparación.

## Equipos<!-- Attrezzature -->

En esta pestaña, principalmente compuesta por una cuadrícula, es posible definir qué equipos<!-- attrezzature --> y cuántos deberán ser utilizados en la producción<!-- produzione --> de la fase seleccionada en *Fases<!-- Fasi -->*. 

*Campos específicos*:

**Secuencia<!-- Sequenza -->**: en este campo es posible indicar la secuencia de utilización de los equipos<!-- attrezzature -->;      
**Equipos<!-- Attrezzature -->**: mediante esta lista es posible seleccionar el código del equipo<!-- attrezzatura -->, tomado de la tabla correspondiente [Equipos<!-- Attrezzature -->](/docs/configurations/tables/production/equipments);     
**Programado<!-- Schedulata -->**: si está activo, indica que el equipo<!-- attrezzatura --> estará comprometido durante la producción<!-- produzione -->; con esta bandera la [Programación F.C.S.](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) considerará, no el artículo<!-- articolo --> ingresado a través de la lista de equipos<!-- attrezzature -->, sino el artículo ingresado en los campos clase y código, el cual debe tener como *Naturaleza de artículo<!-- Natura articolo -->* el tipo *Equipo<!-- Attrezzatura -->* o *Herramienta<!-- Utensile -->*;          
**A reordenar<!-- Da riordinare -->**: si se activa, el procedimiento de [Programación F.C.S.](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) generará una orden planificada<!-- ordine pianificato --> para el aprovisionamiento de ese equipo si no estuviese disponible; si no está activo, significa que ese equipo<!-- attrezzatura --> no debe ser reordenado, pero puede ser utilizado repetidamente según su disponibilidad (por ejemplo un molde);            
**Clase / Código de artículo<!-- Classe / Codice articolo -->**: en estos campos es posible indicar la clase y el código del artículo<!-- articolo --> (la ayuda filtra solo los artículos<!-- articoli --> que estén identificados como *Equipos<!-- Attrezzature -->* en el campo *Naturaleza Artículo<!-- Natura articolo -->* de la ficha de almacén<!-- magazzino -->);  
**Variante**: indica la variante del artículo<!-- articolo -->;  
**Lote<!-- Lotto -->**: indica el lote del artículo<!-- articolo -->;  
**Número de serie<!-- Serial number -->**: indica el número de serie del artículo<!-- articolo -->;  
**Cantidad**: indica la cantidad del artículo<!-- articolo -->.

## Control de calidad<!-- Controllo qualità -->

En esta pestaña, compuesta principalmente por una cuadrícula, se pueden visualizar los detalles de las pruebas planificadas de control para la fase/subfase.

## Nota de fase<!-- Nota fase -->

En esta pestaña se visualiza la nota vinculada a la fase de trabajo seleccionada en la pestaña *Fases<!-- Fasi -->*. Puede ser modificada por el usuario al momento del orden planificado<!-- ordine pianificato --> en cuestión.

## Instrucciones operativas<!-- Istruzioni operative -->

En esta pestaña se visualizan las notas y documentos vinculados a la fase de trabajo seleccionada en *Fases<!-- Fasi -->*. Son editables por el usuario junto con el orden planificado<!-- ordine pianificato --> en cuestión. Estos documentos son visibles dentro del MES en la pestaña *Documentos e Instrucciones operativas<!-- Documenti e Istruzioni operative -->*.

## Extra Data

Para una descripción detallada sobre los datos extra puede consultar el artículo [Extra data](/docs/configurations/utility/extra-data/extradata/new-extradata).

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common).