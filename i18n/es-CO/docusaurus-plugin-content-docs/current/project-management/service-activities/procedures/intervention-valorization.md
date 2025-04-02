---
title: valorizzazione interventi
sidebar_position: 1
---

Este procedimiento permite facturar las Intervenciones que se encuentran en un estado de **controllato**. En el área de **Filtro**, es posible establecer una serie de filtros para poder buscar de manera más específica las intervenciones presentes en el sistema.

Una vez introducidos los filtros, basta con hacer clic en Buscar (Ricerca) en la barra de menú para que aparezcan los resultados en la cuadrícula de abajo. Para valorar una intervención, simplemente selecciónala y haz clic en Valorar (Valorizza) en la barra de menú.  
Es posible establecer algunos **parametri** para la valoración en la pestaña correspondiente: se puede elegir la Inserción de factura de intervenciones de año, tipo y/o cambios diferentes (recordemos que el registro debe tener activado el indicador **raggruppa per progetto** para permitir que las intervenciones y facturas sean separadas según el proyecto); se puede elegir si mantener los pagos de las intervenciones o restablecer los de registro; se puede elegir si agrupar los vencimientos; se pueden insertar referencias, etc.  
Recordemos que en la tabla [Tipos de intervención (Tipi intervento)](/docs/configurations/tables/project-management/intervention-type/) es necesario indicar un Tipo de factura correspondiente para que el procedimiento pueda completarse con éxito.

Las condiciones para que una intervención sea visible son las siguientes:  
- en el tipo de intervención debe estar indicado el Tipo de Factura;  
- el estado de la intervención debe ser "controlado" o "parcialmente facturado";  
- las líneas en el plan de facturación de la intervención deben tener indicado el código IVA.  

En la pestaña **riepiloghi**, es posible consultar los resultados de la valoración, presionando **ricerca** en la barra de menú. Seleccionando una fila de resultado, será posible visualizar la **Intervención** y la **Factura de venta** generada. Los botones específicos de la barra de menú son:

![](/img/neutral/common/preview.png) Vista previa de resultado: permite visualizar una vista previa de la factura generada;  

![](/img/neutral/common/execute-restore.png) Restablecimiento de valoración: ejecuta el revertir (Rollback) de la valoración;  

![](/img/neutral/common/rollback.png) Restablecimiento de factura: ejecuta el revertir (Rollback) de la factura seleccionada.