---
title: centri di costo
sidebar_position: 6
---

Esta es la tabla en la que se ingresan las tarifas a asociar a la máquina y al grupo de mano de obra para poder valorizar las fases de procesamiento de los diferentes centros de trabajo.

La tabla permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**ricerca centri di costo**

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Ingreso de centri di costo (Inserimento Centri di costo)**

Para poder ingresar nuevas codificaciones es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**, y será posible seleccionar desde la combinación el centro de costo que se desea agregar. Para crear uno nuevo, será necesario ingresarlo en la tabla de [Centros empresariales (Centri aziendali)](/docs/configurations/tables/controlling/analytical-accounting/corporate-centers/) activando el indicador **visibile in produzione**; de lo contrario, no será posible visualizarlo en la combinación de ingreso de los **centri di costo**.

Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** del centro de costo y la **versione**, porque es posible tener costos diferentes para las distintas versiones manteniendo el mismo centro de costo.         
En este punto, es posible asociar al centro el **Costo**, que será utilizado para la costificación. Si no se especifica ninguna **UM**, la tarifa ingresada se interpretará como tarifa horaria.

Los centros de costo pueden asociarse a los siguientes recursos:  
- [Máquina (Macchina)](/docs/configurations/tables/production/machines)  
- [Grupo de mano de obra (Gruppo manodopera)](/docs/configurations/tables/production/labour-group)  
- [Operador individual del grupo de mano de obra (Singolo operatore del gruppo manodopera)](/docs/configurations/tables/production/labour-group)  

Para todo lo que no está detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).