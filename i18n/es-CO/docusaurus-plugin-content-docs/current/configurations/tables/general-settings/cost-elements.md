---
title: Elementos de costo
sidebar_position: 44
---

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

### Búsqueda de elementos de costo

El formulario se compone de un área de filtro y una de resultado. Una vez configurados todos los filtros deseados, basta hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

### Inserción de elementos de costo 

Para poder insertar nuevos códigos, es necesario hacer clic en la primera fila vacía de la cuadrícula o presionar el botón **Nuevo**.

#### Campos específicos 

**Código**: indica el código del elemento de costo;  
**Descripción**: indica la descripción del elemento de costo;  
**Tipo de costo**: indica la tipología del elemento de costo entre *Costos directos*, *Costos generales* y *Otros costos*;  
**Aplicación en...**: indica dónde se aplicará este costo:  
> *Costo de materiales*: el costo se aplica solo al costo de los materiales (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *Costo de máquina*: el costo se aplica solo al costo de la maquinaria (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *Costos laborales*: el costo se aplica solo al costo de la mano de obra (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *Costo de trabajo*: el costo se aplica solo al costo de los trabajos (total de los costos de maquinaria y mano de obra) (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos*);  
> *Costo industrial*: el costo se aplica solo al total del costo de los materiales y del costo de los trabajos (aplicable solo en artículos con *Tipo de costo* igual a *Costos directos* o *Costos generales*);  
> *Costo general*: el costo se aplica al total de costos generales (aplicable solo en artículos con *Tipo de costo* igual a *Costos generales*);  
> *Otros costos*: el costo se aplica al total de otros costos (aplicable solo en artículos con *Tipo de costo* igual a *Otros costos*);  

:::note Nota
Los artículos de costo creados con **Aplicación en** igual a *Costo de materiales*, *Costo de máquina*, *Costos laborales*, *Costo de trabajo* o *Costo industrial* se incluirán todos en la sección dedicada a **Costos directos**, mientras que los artículos de costo creados con **Aplicación en** igual a *Costo general* o *Otros costos* se incluirán, respectivamente, en la sección dedicada a **Costos generales** o en la dedicada a **Otros costos** dentro de la [Valorización](/docs/planning/mps-master-production-scheduling/production-job-orders/valorization).
:::

**Porcentaje/Valor**: indica si el elemento de costo es de tipo: *porcentaje*, a *valor fijo* o a *valor variable* (activo solo para los artículos de costo con **Aplicación en** = *Otros costos*). En específico, el *porcentaje* se calcula sobre el total del costo indicado en el campo **Aplicación en**; el *valor fijo* se suma al total del costo indicado en el campo **Aplicación en**, mientras que el *valor variable* se multiplica por la cantidad presente en la gestión de *Otros costos* en la costificación.  
**Valor**: indica el valor predeterminado del elemento de costo que luego se propondrá automáticamente.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).