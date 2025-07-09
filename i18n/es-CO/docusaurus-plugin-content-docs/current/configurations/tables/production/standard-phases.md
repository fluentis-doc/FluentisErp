---
title: Fases estándar
sidebar_position: 7
---

Esta tabla corresponde al registro de las fases que se utilizan en los ciclos de trabajo; en esta tabla se codifican todas las fases con sus respectivos datos con el fin de poder ser propuestas y seleccionadas dentro del ciclo de trabajo.

La tabla permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o borrarlos.

**Búsqueda de Fases estándar**

El formulario se compone de un área de filtro y de una de resultados. Una vez establecidos todos los filtros deseados, basta hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Fases estándar**

Para poder insertar nuevos códigos es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.

Para el nuevo registro se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código**, **Descripción de fase/subfase**, el **Centro de trabajo** y la **Unidad de medida de los tiempos**.  
Al ingresar el centro de trabajo, también se muestran las informaciones relacionadas con la máquina y el grupo de mano de obra ingresados en la tabla de centros de trabajo, los cuales pueden ser modificados manualmente en la fase misma por el usuario.  
Además, se debe tener cuidado de ingresar códigos de **Fase** y **Subfase** únicos, de lo contrario se mostrará un mensaje de advertencia.

Uno de los datos más importantes a ingresar en esta tabla es el **Tipo de fase/subfase**: *Interno* o *Externo*. Si es interna, significa que se produce internamente en la planta de producción, mientras que si se trata de una fase externa, significa que se subcontrata a un proveedor y esto generará directamente una orden de trabajo dedicada a su ejecución.

*Campos específicos:*

**Código**: indica el código de la fase estándar;  
**Fase**: indica el número progresivo de fase;  
**Subfase**: indica el número de bajo fase dentro del mismo número de fase;  
**Descripción de fase/subfase**: indica la descripción de la fase/sottofase;  
**Tipo fase/subfase**: indica si la fase/sottofase es interna o externa;  
**Fase productiva**: indica si se trata de una fase de tipo productivo;  
**Móvil**: indica que la fase generará movimientos de almacén (descargas y cargas);  
**Control de calidad**: si está activado, este indicador indica que esta fase está sujeta a una serie de análisis relacionados con el control de calidad;  
**Centro de trabajo**: indica el código del WKC;  
**Hora fija**: indica que el WKC trabaja a tiempo fijo, el tiempo de procesamiento del artículo no depende del número de piezas;  
**Tiempos M.U.**: indica la unidad de medida de los tiempos de la fase;  
**Tiempo de espera / cola**: indica el tiempo necesario que se debe esperar al final de la fase antes de poder ejecutarla nuevamente;  
**Tiempo de preparación**: indica el tiempo de preparación antes de comenzar el trabajo;  
**Tiempo de reestructuración**: indica el tiempo de reconfiguración, es decir, el tiempo necesario para volver a configurar la máquina entre la producción de una o más piezas;  
**Máquina**: indica el código de la máquina;  
**Tiempo de máquina**: indica el tiempo de uso de la máquina en esta fase;  
**Número de máquina**: indica el número de máquinas comprometidas simultáneamente en el trabajo;  
**Número de piezas**: indica el número de piezas producidas en cada ejecución de esa fase;  
**Grupo Laboral**: indica el código del grupo laboral;  
**Tiempo asignado**: indica el tiempo empleado por la mano de obra en esa fase;  
**Número de trabajadores**: indica el número de operarios trabajando en la fase;  
**Mantenimiento**: indica si la fase es de tipo mantenimiento;  
**Costo**: indica el costo de la fase para producir las piezas indicadas en el campo Número de piezas;  
**Descripción del subcontratista**: indica la descripción del subcontratista (solo se habilita si la fase es de tipo **Externo**);  
**Ubicación**: indica la ubicación de almacén asociada a esa fase; esto significa que todos los artículos utilizados en esa fase estarán presentes en esa ubicación;  
**Tipo de rotación de compras**: indica el tipo de facturación de compra reportado a nivel de la línea de artículo presente en la orden de trabajo (solo se habilita si la fase es de tipo **Externo**);  
**Descripción del tipo de rotación de compra**: indica la descripción del tipo de facturación de compra reportado a nivel de la línea de artículo presente en la orden de trabajo (solo se habilita si la fase es de tipo **Externo**);  
**Tipo de plan de control**: indica el tipo de plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**Plan de control anual**: indica el año del plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**Código del plan de control**: indica el código del plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**Descripción del plan de control**: indica la descripción del plan para el control de calidad (solo si se habilita el indicador **Control de calidad**);  
**Fecha de creación**: indica la fecha de creación del registro;  
**Fecha de modificación**: indica la fecha de última modificación del registro;  
**Notas**: Campo libre para la inserción de notas;  
**Descripción del centro de trabajo**: indica la descripción del WKC;  
**Descripción de la máquina**: indica la descripción de la máquina;  
**Descripción del grupo laboral**: indica la descripción del grupo laboral.

:::note Nota
Todas las fases externas deben tener siempre activados los indicadores **Fase productiva** y **Fase movible**.
:::

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).