---
title: voci di costo
sidebar_position: 44
---

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

### Búsqueda de artículos de costo (Ricerca Voci di costo)

El formulario se compone de un área de filtro y una de resultado. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

### Inserción de artículos de costo (Inserimento Voci di costo)

Para poder insertar nuevos códigos, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **nuovo**.

#### Campos específicos (Campi specifici)

**codice**: indica el código del artículo de costo;  
**descrizione**: indica la descripción del artículo de costo;  
**Tipo de costo (Tipo di costo)**: indica la tipología del artículo de costo entre *costi diretti*, *costi generali* y *altri costi*;  
**applicazione su**: indica dónde se aplicará este costo:  
> *costo materiali*: el costo se aplica solo al costo de los materiales (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *costo macchina*: el costo se aplica solo al costo de la maquinaria (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *costo manodopera*: el costo se aplica solo al costo de la mano de obra (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *costo lavorazioni*: el costo se aplica solo al costo de los trabajos (total de los costos de maquinaria y mano de obra) (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *Costo industrial (Costo industrial)*: el costo se aplica solo al total del costo de los materiales y del costo de los trabajos (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos* o *Costos generales*);  
> *costo generale*: el costo se aplica al total de costos generales (aplicable solo en artículos con *Tipo de costo* igual a *Costos generales*);  
> *altri costi*: el costo se aplica al total de otros costos (aplicable solo en artículos con *Tipo de costo* igual a *Otros costos*);  

:::note Nota
Los artículos de costo creados con **Aplicación en** igual a *Costo de materiales*, *Costo de maquinaria*, *Costo de mano de obra*, *Costo de trabajos* o *Costo industrial* se incluirán todos en la sección dedicada a **Costos directos**, mientras que los artículos de costo creados con **Aplicación en** igual a *Costo general* o *Otros costos* se incluirán, respectivamente, en la sección dedicada a **Costos generales** o en la dedicada a **Otros costos** dentro de la [Valoración (Valorizzazione)](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).
:::

**percentuale/valore**: indica si el artículo de costo es de tipo: *porcentaje*, a *valor fijo* o a *valor variable* (activo solo para los artículos de costo con **Aplicación en** = *Otros costos*). En específico, el *porcentaje* se calcula sobre el total del costo indicado en el campo **Aplicación en**; el *valor fijo* se suma al total del costo indicado en el campo **Aplicación en**, mientras que el *valor variable* se multiplica por la cantidad presente en la gestión de *Otros costos* en la costificación.  
**valore**: indica el valor predeterminado del artículo de costo que luego se propondrá automáticamente.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).