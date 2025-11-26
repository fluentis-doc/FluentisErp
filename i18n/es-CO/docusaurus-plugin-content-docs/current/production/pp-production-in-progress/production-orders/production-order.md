---
title: Órdenes de Producción
sidebar_position: 3
ai_generated: true
---

Normalmente, las órdenes de producción<!-- ordini di produzione --> se generan automáticamente mediante el procedimiento de *Lanzamiento de órdenes planificadas<!-- Rilascio ordini di pianificati -->*.
Para crear una orden de producción<!-- ordine di produzione --> manualmente, es necesario crear primero la orden planificada de producción<!-- ordine pianificato di produzione --> y luego lanzarla mediante el procedimiento dedicado.

## Cabecera de la orden de producción<!-- Testata ordine di produzione -->

En la cabecera se resumen todos los datos relacionados con la orden de producción<!-- ordine di produzione -->, tales como: número, lote y año, los datos de la orden de trabajo<!-- commessa --> y del cliente de referencia, el proyecto asociado, la fecha de inicio y fin, la información relativa al artículo a producir, con versión del listado de materiales<!-- distinta base --> y del ciclo, cantidad a producir y producida.
También es posible indicar el almacén<!-- magazzino --> y la causal<!-- causale -->, que se utilizarán para la recepción del producto terminado en el almacén<!-- magazzino -->; estos tendrán máxima prioridad respecto a todos los demás parámetros, como se explica en detalle en los [Parámetros de producción](/docs/configurations/parameters/production/production-orders-parameters/production-orders-parameters-intro).

*Botón específico*:

> **Completar datos de orden<!-- Completamento dati ordine -->**: llama al procedimiento que permite insertar y/o actualizar, para el artículo ingresado en la orden de producción<!-- ordine di produzione -->, todos los datos relativos a materiales, fases, equipamiento, equipos, atributos y notas varias, tomándolos del listado de materiales<!-- distinta base --> y ciclo de fabricación del artículo y **válidos a la fecha de ejecución de la completación de datos**.
> **Recalcular fecha de inicio<!-- Ricalcola data inizio -->**: llama al procedimiento que permite actualizar la fecha de inicio de la orden de producción<!-- ordine di produzione --> y, si corresponde, de las fases de producción tras una modificación de los tiempos de trabajo y/o de la cantidad a producir del artículo objeto de la orden de producción<!-- ordine di produzione -->.
> **Generar listado de materiales<!-- Genera distinta base -->**: permite generar el listado de materiales<!-- distinta base --> en base a los datos ingresados en la orden de producción<!-- ordine di produzione --> o actualizar los datos existentes con los ingresados en la orden.
> **Generar ciclo de trabajo<!-- Generazione ciclo di lavoro -->**: permite crear el ciclo de trabajo del artículo basándose en los datos ingresados en la orden, o actualizar los datos existentes con los ingresados en la orden.

*Campos específicos*:

**Estado<!-- Stato -->**: indica el estado de la orden de producción<!-- ordine di produzione -->: *Lanzada<!-- Lanciato -->* es el estado inicial de una orden de producción<!-- ordine di produzione --> recién generada desde el procedimiento de lanzamiento de órdenes planificadas<!-- rilascio ordini pianificati -->, mientras que *Ejecutiva<!-- Esecutivo -->* es el estado que debe asignarse a la orden para poder continuar con los reportes de producción.

**Obligatoria<!-- Tassativo -->**: al activar este indicador, la orden de producción<!-- ordine di produzione --> se vuelve obligatoria, por lo tanto, la [Programación a capacidad finita](/docs/planning/ms-master-scheduling/finite-capacityscheduling) no la reprogramará en el tiempo y la mantendrá fija en esas fechas. Además, esto también se tendrá en cuenta en el procedimiento [M.R.P.](/docs/planning/ms-master-scheduling/mrp) cuando esté activa la opción *Diferenciar demanda de producción confirmada<!-- Differenzia domanda di produzione confermata -->*.

## Materiales

En esta pestaña se muestran los materiales de primer nivel del listado de materiales<!-- distinta base --> relativo al producto terminado a fabricar, aunque el usuario puede modificar los datos y/o agregar más materiales a la lista de componentes de la orden de producción<!-- ordine di produzione -->.
Para importar los datos directamente desde el listado de materiales<!-- distinta base --> del artículo, es necesario hacer clic en el botón **Completar datos de orden<!-- Completamento dati ordine -->** presente en la barra ribbon.

*Botones específicos*:

> **Insertar material<!-- Inserisci materiale -->**: permite insertar un nuevo material en la cuadrícula;
> **Eliminar material<!-- Cancella materiale -->**: permite eliminar materiales insertados en la cuadrícula.

*Campos específicos*:

**Clase**: Indica la clase del artículo;
**Código de artículo<!-- Codice articolo -->**: indica el código del artículo;
**Variante**: en este campo se inserta una posible variante del artículo;
**UM**: en este campo se muestra la unidad de medida principal del artículo;
**Unidad de medida<!-- Unità di misura -->**: en este campo se ingresa la posible unidad de medida alternativa del artículo;
**Fecha de uso<!-- Data impiego -->**: coincide con la fecha de inicio prevista de la fase de la orden de producción<!-- ordine di produzione --> a la que está asociado ese material; si no está asociado a ninguna fase, coincide con el inicio de la primera fase del ciclo;
**Cantidad de uso<!-- Quantità impiego -->**: representa la cantidad unitaria necesaria para este artículo (prevista por el [Listado de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management)), la cual puede ser modificada;
**Cantidad total<!-- Quantità totale -->**: representa la cantidad obtenida multiplicando la *Cantidad de uso<!-- Quantità d'impiego -->* por la *Cantidad a producir<!-- Quantità da produrre -->*;
**Cantidad alternativa<!-- Quantità alternativa -->**: representa la cantidad total pero expresada en la unidad de medida alternativa;
**Cantidad retirada<!-- Quantità prelevata -->**: representa la cantidad retirada a través de la [Lista de retiro<!-- Lista di prelievo -->](/docs/production/pp-production-in-progress/picking-materials-list);
**Fija / Variable<!-- Fissa / Variabile -->**: indica si la cantidad del material es fija o variable, esto se hereda del [Listado de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management));
**Porcentaje de desperdicio<!-- Percentuale scarto -->**: en esta casilla se ingresa o se toma del [Listado de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management) el posible porcentaje de desperdicio para este artículo;
**Fase / Subfase<!-- Fase / Sotto Fase -->**: con doble clic se abre una ayuda de fases de producción desde la cual se puede seleccionar la fase y subfase correspondiente y así asignar el material seleccionado a una determinada fase de producción del artículo;
**Almacén<!-- Magazzino -->**: indica el almacén<!-- magazzino --> desde el cual se descargará este artículo;
**Causal<!-- Causale -->**: indica la causal de almacén<!-- causale di magazzino --> con la que se descargará este artículo;
**Prioridad**: aquí se muestra la prioridad del componente, si está presente, ingresada en el [Listado de materiales<!-- Distinta base -->](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management). Esto contribuye a la unicidad del material, por lo que el mismo material puede ser ingresado varias veces con prioridad diferente. Además puede ser modificada manualmente, como todos los demás datos presentes en esta cuadrícula;
**Cantidad disponible<!-- Quantità disponibile -->**: en este campo aparece la cantidad disponible del artículo calculada por el procedimiento de **Recalcular factibilidad<!-- Ricalcola fattibilità -->** presente en [Secuencia de fases](/docs/planning/capacity-requirements-planning/phase-sequences/phase-sequence-topdown);
**A declarar en móvil<!-- Da dichiarare su mobile -->**: si está habilitado, el material se propondrá automáticamente en el formulario de declaración de producción presente en el WMS.

## Fases

En esta pestaña se muestran las fases del ciclo de trabajo relativo al producto terminado a fabricar, pero el usuario puede modificar los datos y/o agregar fases adicionales a la orden de producción<!-- ordine di produzione -->.
Para importar los datos directamente desde el ciclo de producción del artículo, es necesario hacer clic en el botón **Completar datos de orden<!-- Completamento dati ordine -->** presente en la barra ribbon.
En la orden de producción<!-- ordine di produzione --> es posible convertir una fase de interna a externa, por lo que será posible ingresar también el proveedor externo<!-- terzista -->, y al guardar la orden el procedimiento creará la orden de trabajo externo<!-- ordine di conto lavoro -->. Además, si una fase externa se convierte en interna, el procedimiento eliminará automáticamente la orden de trabajo externo<!-- ordine di conto lavoro --> vinculada.

*Botones específicos*:
> **Insertar fase<!-- Inserisci fase -->**: permite insertar una nueva fase en la cuadrícula;
> **Eliminar fase<!-- Cancella fase -->**: permite eliminar las fases insertadas en la cuadrícula.

*Campos específicos*:

**Código de fase / Fase / Subfase<!-- Codice fase / Fase / Sotto Fase -->**: con doble clic se abre la ayuda correspondiente desde la que se puede seleccionar la fase y subfase correspondiente;
**Control de calidad<!-- Controllo qualità -->**: si está activado, este indicador indica que la fase está sujeta a control de calidad y en la pestaña específica se puede indicar el *Plan de control* que se utilizará para verificar el artículo una vez declarada la producción;
**Fase productiva**: si está activada, indica que la fase es productiva y se pueden insertar reportes de producción (por lo tanto, al activarlo se desea que la producción para esta fase sea registrada); si no está activada, no será posible declarar esa fase;
**Fase transferible<!-- Fase movimentabile -->**: si está activada, indica que en el momento en que se reporta la fase de producción también se generan movimientos de almacén<!-- magazzino -->; esto significa que al reportar la producción se procederá tanto a la recepción del producto terminado en almacén<!-- magazzino --> como a la descarga de la materia prima utilizada para la producción en esa fase;
**Centro de trabajo<!-- Centro di lavoro -->**: indica el centro de trabajo<!-- centro di lavoro -->, es decir, la máquina en la que se desarrollará esa fase;
**Tiempo fijo**: si está habilitado, indica que el tiempo de esa fase es fijo y por lo tanto no varía según la cantidad; esto se hereda del centro de trabajo<!-- centro di lavoro --> ingresado;
**Cantidad de la fase**: indica la cantidad total de piezas a producir en esa fase;
**Fecha de inicio / fin estimada**: son las fechas de inicio y fin de la fase correspondiente; al cambiar las fechas previstas de inicio y fin de la producción también se actualizan estas últimas. Se calculan en base a los tiempos ingresados en las fases de producción, y más precisamente según el mayor entre el tiempo total de operario y el tiempo total de máquina para la fase seleccionada;
**Tiempo total de máquina<!-- Totale tempo macchina -->**: indica el tiempo total de máquina, obtenido multiplicando el *tiempo de máquina<!-- tempo macchina -->* por el *número de máquinas<!-- numero di macchine -->*;
**Tiempo de máquina<!-- Tempo macchina -->**: indica el tiempo de trabajo de esa máquina para esa fase;
**Número de máquinas<!-- Numero macchine -->**: indica el número de máquinas utilizadas en esa fase;
**Tiempo total de operario<!-- Totale tempo operaio -->**: indica el tiempo total de operario, obtenido multiplicando el *tiempo de operario<!-- tempo operaio -->* por el *número de operarios<!-- numero di operai -->*;
**Tiempo de operario<!-- Tempo operaio -->**: indica el tiempo de trabajo de la mano de obra para esa fase;
**Número de operarios<!-- Numero operai -->**: indica el número de operarios empleados en esa fase;
**Fase / Subfase superpuesta<!-- Fase / Sotto fase sovrapposta -->**: en estos dos campos, en caso de superposición, se indicará la fase que se pretende superponer a la fase seleccionada;
**Ubicación<!-- Ubicazione -->**: permite asociar también una ubicación de almacén<!-- magazzino --> a la fase; esto significa que todos los artículos usados en esa fase estarán presentes en esa ubicación;
**Descripción del proveedor externo<!-- Descrizione terzista -->**: haciendo doble clic en la casilla se abre el selector para poder seleccionar la cuenta y subcuenta<!-- conto e sottoconto --> del proveedor externo<!-- terzista --> correspondiente. Esta casilla solo está activa si la fase está designada como *Externa<!-- Esterna -->*. Se debe notar que el *proveedor externo<!-- terzista -->* también se toma de la fase de trabajo ingresada en el ciclo de producción del artículo;
**Orden de trabajo externo creada<!-- Ordine conto lavoro creato -->**: indica que se ha creado la orden de trabajo externo<!-- ordine di conto lavoro -->. Solo funciona para fases externas;
**Descripción del centro de trabajo<!-- Descrizione centro lavoro -->**: indica la descripción del centro de trabajo<!-- centro di lavoro --> de la fase;
**Impresión definitiva<!-- Stampa definitivo -->**: indica que el [Parte de trabajo<!-- Foglio di lavoro -->](/docs/production/pp-production-in-progress/reports/worksheet) se ha impreso de forma definitiva;
**Fecha de impresión del parte de trabajo<!-- Data stampa foglio di lavoro -->**: indica la fecha de impresión definitiva del [Parte de trabajo<!-- Foglio di lavoro -->](/docs/production/pp-production-in-progress/reports/worksheet);
**Número progresivo parte de trabajo<!-- Numero progressivo foglio lavoro -->**: indica el número progresivo del [Parte de trabajo<!-- Foglio di lavoro -->](/docs/production/pp-production-in-progress/reports/worksheet) impreso de manera definitiva.

### Fases - Propiedades<!-- Fasi - Proprietà -->

En la pestaña **Propiedades<!-- Proprietà -->** se muestran los siguientes datos relativos a la fase seleccionada en la cuadrícula:

**Descripción de la fase**: indica la descripción de la fase y subfase seleccionada;
**Tipo**: en esta lista desplegable es posible definir el tipo de producción (interna o externa);
**Superposición**: mediante esta lista desplegable se introduce la tipología de una eventual superposición entre fases. Podemos tener superposición *Total* (en este caso la fase está totalmente superpuesta a la fase indicada), *Por piezas* (en este caso es necesario indicar después de cuántas piezas producidas por esta fase iniciará la siguiente fase), *Por tiempo* (en este caso se debe indicar después de cuántos minutos desde el inicio de la fase indicada iniciará la siguiente fase);
**UM Tiempos<!-- UM Tempi -->**: en esta caja se muestra la Unidad de Medida de Tiempos de la Fase; se puede decidir gestionar los tiempos por segundos, minutos, horas y días. Generalmente, los tiempos de fases internas se gestionan por minutos y los de fases externas por días, aunque normalmente depende mucho del tipo de empresa para la que se está configurando el trabajo;
**Máquina**: en esta lista se puede seleccionar el código (y descripción) de la máquina asociada. Se propone automáticamente, tomada del centro de trabajo<!-- centro di lavoro --> previamente ingresado en la cuadrícula;
**Sitio de producción<!-- Sito produttivo -->**: indica el sitio de producción en el que se fabricará el artículo; esto se hereda de la orden de trabajo<!-- commessa di produzione -->;
**Grupo de mano de obra<!-- Gruppo manodopera -->**: en esta lista se puede seleccionar el código (y descripción) del grupo de mano de obra asociado. También se propone automáticamente, tomado del centro de trabajo<!-- centro di lavoro --> previamente ingresado en la cuadrícula;
**Cantidad de piezas por fase<!-- Quantità pezzi per fase -->**: indica el número de piezas producidas por cada ejecución de esa fase;
**Valor**: se indica el valor de la eventual superposición, utilizando los criterios especificados arriba;
**Utilización<!-- Utilizzo -->**: si este indicador está activado, significa que se desea que el tiempo de espera/cola aumente el tiempo de ocupación del Centro de Trabajo<!-- Centro di Lavoro --> en esa fase;
**Tiempo de espera o cola<!-- Tempo di attesa o coda -->**: indica el tiempo que se debe esperar al final de la ejecución de la fase antes de poder volver a ejecutarla. Además, al activar el indicador **Utilización<!-- Utilizzo -->**, este tiempo de espera se considerará como un compromiso adicional del tiempo del Centro de Trabajo<!-- Centro di Lavoro --> en esa fase.

### Fases - Datos extras<!-- Fasi - Extra Data -->

Contiene los posibles datos extra relacionados con la fase seleccionada.

### Fases - Documentos adjuntos<!-- Fasi - Documenti allegati -->

Permite adjuntar documentos a la fase seleccionada, los cuales también serán visibles en el [MES](/docs/production/mes/mes-intro).

## Equipamiento<!-- Attrezzaggio -->

En esta pestaña es posible definir los tiempos relativos al equipamiento de la fase seleccionada en la pestaña anterior.
Es importante recordar que los datos ingresados sobre el centro de trabajo<!-- centro di lavoro -->, máquina y mano de obra, deben ingresarse solo si son diferentes de los usados para la fase, de lo contrario, si se dejan vacíos, automáticamente se tomarán los de la fase principal.

*Campos específicos*:

**Fase / Subfase / Descripción**: en estos campos se visualizan las informaciones relativas a la fase seleccionada en la pestaña *Fases*;
**Tipo**: indica el tipo de fase (interna o externa);
**Tipo de superposición**: indica la tipología de la superposición;
**UM Tiempos<!-- UM Tempi -->**: indica la unidad de medida temporal de la fase;
**Centro de Trabajo<!-- Centro di Lavoro -->**: en estos campos se ingresa el código (y la descripción) del Centro de Trabajo<!-- Centro di Lavoro --> configurado para el equipamiento; (utilizar solo si el centro de trabajo<!-- centro di lavoro --> de equipamiento es diferente al de la fase seleccionada);
**Máquina**: en estos campos se ingresa el código (y la descripción) de la máquina para equipamiento; (utilizar solo si la máquina de equipamiento es diferente a la de la fase seleccionada);
**Grupo de mano de obra<!-- Gruppo Manodopera -->**: en estos campos se ingresa el código (y descripción) del grupo de mano de obra para el equipamiento; (utilizar solo si el grupo de mano de obra para equipamiento es diferente al de la fase seleccionada);
**Valor**: indica el valor de la posible superposición;
**Centro de trabajo<!-- Centro di lavoro -->**: en estos campos se muestra el código y la descripción del Centro de Trabajo<!-- Centro di lavoro --> de la fase seleccionada;
**Fecha de inicio**: se muestra la fecha de inicio de la fase seleccionada en la pestaña *Fases*;
**Fecha de fin**: se muestra la fecha de fin de la fase seleccionada en la pestaña *Fases*;
**Tiempo de equipamiento<!-- Tempo attrezzaggio -->**: se indica el tiempo de equipamiento. Es un tiempo fijo, que no varía según la cantidad a producir en la fase seleccionada;
**Tiempo de re-equipamiento<!-- Tempo riattrezzaggio -->**: se indica el tiempo de re-equipamiento. Se utiliza en el caso de que sea necesario re-equipar el centro de trabajo<!-- centro di lavoro --> entre una ejecución y la otra de la misma fase, y se suma al tiempo de equipamiento;
**Núm. de máquinas**: se indica el número de máquinas empleadas para el equipamiento;
**Núm. de operarios**: se indica el número de operarios empleados en el equipamiento.

## Equipos<!-- Attrezzature -->

En esta pestaña, compuesta principalmente por una cuadrícula, se puede definir qué y cuántos equipos deben utilizarse en la producción de la fase seleccionada en la pestaña *Fases*.

*Campos específicos*:

**Secuencia**: en este campo se puede indicar la secuencia con la que deben utilizarse los equipos;
**Equipos<!-- Attrezzature -->**: con esta lista se puede llamar el código del equipo, tomado de la tabla [Equipos<!-- Attrezzature -->](/docs/configurations/tables/production/equipments);
**Programado<!-- Schedulata -->**: Si está activado, indica que el equipo estará ocupado durante la producción; con este indicador la [Programación F.C.S.<!-- Schedulazione F.C.S. -->](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) considerará, no el artículo ingresado mediante la lista de equipos, sino el artículo ingresado en los campos clase y código, el cual debe tener como *Naturaleza de artículo* la tipología *Equipo<!-- Attrezzatura -->* o *Herramienta<!-- Utensile -->*;
**Para reordenar<!-- Da riordinare -->**: si está activado, permitirá que el procedimiento de [Programación F.C.S.<!-- Schedulazione F.C.S. -->](https://docs.fluentis.com/FluentisErp/docs/planning/ms-master-scheduling/fcs-scheduling) cree una orden planificada para el aprovisionamiento de ese mismo equipo en caso de que no esté disponible; si no está activado, significa que ese equipo no debe ser reordenado, sino que puede ser utilizado repetidamente según su disponibilidad (por ejemplo, un molde);
**Clase / Código de artículo<!-- Classe / Codice articolo -->**: en estos campos se puede indicar la clase y el código del artículo (la ayuda filtra automáticamente solo los artículos identificados como *Equipos<!-- Attrezzature -->* en el campo *Naturaleza de artículo<!-- Natura Articolo -->* del registro de almacén<!-- anagrafica di magazzino -->);
**Variante**: indica la variante del artículo;
**Lote**: indica el lote del artículo;
**Serial number**: indica el número de serie del artículo;
**Cantidad**: indica la cantidad del artículo.

## Control de calidad<!-- Controllo qualità -->

En esta pestaña, compuesta principalmente por una cuadrícula, es posible visualizar los detalles de las pruebas planificadas de [control de calidad](/docs/quality/quality-intro) para la fase/subfase.

## Nota de fase<!-- Nota fase -->

En esta pestaña se muestra la nota vinculada a la fase de trabajo seleccionada en la pestaña *Fases*. Esta nota puede ser modificada por el usuario dentro del contexto de la orden de producción<!-- ordine di produzione --> en cuestión.

## Instrucciones operativas<!-- Istruzioni operative -->

En esta pestaña es posible adjuntar y visualizar las *Instrucciones operativas* asociadas a la fase de trabajo seleccionada en la pestaña *Fases*. Estas instrucciones también serán visibles en [Fluentis MES](/docs/production/mes/mes-intro).

## Personal

En esta pestaña es posible añadir los operadores que deberán realizar las distintas fases del ciclo de producción. (*Se utiliza solo para personalizaciones*).

## Datos extras<!-- Extra Data -->

Para una descripción detallada sobre los datos extras, consulte el artículo [Datos extras<!-- Extra data -->](/docs/configurations/utility/extra-data/extradata/new-extradata).

Para más detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).