---
title: fasi standard
sidebar_position: 7
---

Esta tabla corresponde al registro de las fases que se utilizan en los ciclos de trabajo; en esta tabla se codifican todas las fases con sus respectivos datos con el fin de poder ser propuestas y seleccionadas dentro del ciclo de trabajo.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o borrarlos.

**Búsqueda de fasi standard (Ricerca Fasi standard)**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de fasi standard (Inserimento Fasi standard)**

Para poder insertar nuevos códigos es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.

Para el nuevo registro se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice**, **descrizione fase/sottofase**, el **centro di lavoro** y la **Unidad de medida de los tiempos (Unità di misura dei tempi)**.  
Al ingresar el centro de trabajo, también se muestran las informaciones relacionadas con la máquina y el grupo de mano de obra ingresados en la tabla de centros de trabajo, los cuales pueden ser modificados manualmente en la fase misma por el usuario.  
Además, se debe tener cuidado de ingresar códigos de **Fase** y **Sottofase** únicos, de lo contrario se mostrará un mensaje de advertencia.

Uno de los datos más importantes a ingresar en esta tabla es el **Tipo de fase/sottofase (Tipo di fase/sottofase)**: *interna* o *esterna*. Si es interna, significa que se produce internamente en la planta de producción, mientras que si se trata de una fase externa, significa que se subcontrata a un proveedor y esto generará directamente una orden de trabajo dedicada a su ejecución.

*Campos específicos:*

**codice**: indica el código de la fase estándar;  
**fase**: indica el número progresivo de fase;  
**sottofase**: indica el número de bajo fase dentro del mismo número de fase;  
**descrizione fase/sottofase**: indica la descripción de la fase/sottofase;  
**Tipo fase/sottofase (Tipo fase/sottofase)**: indica si la fase/sottofase es interna o externa;  
**Fase productiva (Fase produttiva)**: indica si se trata de una fase de tipo productivo;  
**movimentabile**: indica que la fase generará movimientos de almacén (descargas y cargas);  
**controllo qualità**: si está activado, este indicador indica que esta fase está sujeta a una serie de análisis relacionados con el control de calidad;  
**centro di lavoro**: indica el código del CdL;  
**tempo fisso**: indica que el CdL trabaja a tiempo fijo, el tiempo de procesamiento del artículo no depende del número de piezas;  
**u.m. tempi**: indica la unidad de medida de los tiempos de la fase;  
**tempo attesa/coda**: indica el tiempo necesario que se debe esperar al final de la fase antes de poder ejecutarla nuevamente;  
**tempo attrezzaggio**: indica el tiempo de preparación antes de comenzar el trabajo;  
**tempo riattrezzaggio**: indica el tiempo de reconfiguración, es decir, el tiempo necesario para volver a configurar la máquina entre la producción de una o más piezas;  
**macchina**: indica el código de la máquina;  
**tempo macchina**: indica el tiempo de uso de la máquina en esta fase;  
**numero macchine**: indica el número de máquinas comprometidas simultáneamente en el trabajo;  
**numero pezzi**: indica el número de piezas producidas en cada ejecución de esa fase;  
**gruppi manodopera**: indica el código del grupo de mano de obra;  
**tempo assegnato**: indica el tiempo empleado por la mano de obra en esa fase;  
**numero operai**: indica el número de operarios trabajando en la fase;  
**manutenzione**: indica si la fase es de tipo mantenimiento;  
**costo**: indica el costo de la fase para producir las piezas indicadas en el campo Número de piezas;  
**descrizione terzista**: indica la descripción del subcontratista (solo se habilita si la fase es de tipo **Externo**);  
**ubicazione**: indica la ubicación de almacén asociada a esa fase; esto significa que todos los artículos utilizados en esa fase estarán presentes en esa ubicación;  
**tipo fatturato acquisto**: indica el tipo de facturación de compra reportado a nivel de la línea de artículo presente en la orden de trabajo (solo se habilita si la fase es de tipo **Externo**);  
**Descripción del tipo de facturación de compra (Descrizione tipo fatturato acquisto)**: indica la descripción del tipo de facturación de compra reportado a nivel de la línea de artículo presente en la orden de trabajo (solo se habilita si la fase es de tipo **Externo**);  
**tipo piano di controllo**: indica el tipo de plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**anno del piano di controllo**: indica el año del plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**codice piano di controllo**: indica el código del plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**Descripción del plan de control (Descrizione del piano di controllo)**: indica la descripción del plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**data creazione**: indica la fecha de creación del registro;  
**data modifica**: indica la fecha de última modificación del registro;  
**note**: Campo libre para la inserción de notas;  
**descrizione centro di lavoro**: indica la descripción del CdL;  
**descrizione macchina**: indica la descripción de la máquina;  
**descrizione gruppo mdo**: indica la descripción del grupo de mano de obra.

:::note Nota
Todas las fases externas deben tener siempre activados los indicadores **Fase productiva** y **Fase movible**.
:::

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).