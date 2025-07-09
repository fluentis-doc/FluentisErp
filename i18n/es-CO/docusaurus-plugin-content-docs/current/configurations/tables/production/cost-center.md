---
title: Centros de costo
sidebar_position: 6
---

Esta es la tabla en la que se ingresan las tarifas a asociar a la máquina y al grupo de mano de obra para poder valorizar las fases de procesamiento de los diferentes centros de trabajo.

La tabla permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Buscar centros de costo**

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de centros de costo**

Para poder ingresar nuevas codificaciones es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**, y será posible seleccionar desde la combinación el centro de costo que se desea agregar. Para crear uno nuevo, será necesario ingresarlo en la tabla de [Centros corporativos](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers/) activando el indicador **Visible en producción**; de lo contrario, no será posible visualizarlo en la combinación de ingreso de los **Centros de costo**.

Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código** del centro de costo y la **Versión**, porque es posible tener costos diferentes para las distintas versiones manteniendo el mismo centro de costo.         
En este punto, es posible asociar al centro el **Costo**, que será utilizado para la costificación. Si no se especifica ninguna **UM**, la tarifa ingresada se interpretará como tarifa horaria.

Los centros de costo pueden asociarse a los siguientes recursos:  
- [Máquina](/docs/configurations/tables/production/machines)  
- [Grupo Laboral](/docs/configurations/tables/production/labour-group)  
- [Operador individual del grupo laboral](/docs/configurations/tables/production/labour-group)  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).