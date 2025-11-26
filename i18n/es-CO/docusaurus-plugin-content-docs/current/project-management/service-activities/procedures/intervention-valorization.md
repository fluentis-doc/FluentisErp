---
title: Valorización de Intervenciones
sidebar_position: 1
ai_generated: true
---

Este procedimiento permite facturar las Intervenciones<!-- Interventi --> que se encuentran en estado **Controlado<!-- Controllato -->**. En el área de **Filtro**, es posible configurar una serie de filtros para buscar de manera más precisa las intervenciones<!-- interventi --> presentes en el sistema.

Una vez insertados los filtros, basta con hacer clic en Buscar<!-- Ricerca --> en la ribbon bar para mostrar los resultados en la cuadrícula inferior. Para valorizar una Intervención<!-- Intervento -->, solo hay que seleccionarla y hacer clic en Valorizar<!-- Valorizza --> en la ribbon bar.
Es posible configurar **Parámetros<!-- Parametri -->** para la valorización en la pestaña correspondiente: se puede elegir la Inserción de factura de intervenciones<!-- fattura di interventi --> de año, tipo y/o monedas diferentes (recordamos que la ficha maestra<!-- anagrafica --> debe tener activada la opción **Agrupar por proyecto<!-- Raggruppa per progetto -->** para permitir que intervenciones<!-- interventi --> y facturas<!-- fatture --> se separen según el proyecto); se puede elegir si mantener los pagos de las intervenciones<!-- pagamenti degli interventi --> o restablecer los de la ficha maestra<!-- anagrafica -->; se puede elegir si agrupar los vencimientos<!-- raggruppare le scadenze -->; se pueden ingresar referencias, etc. 
Recordamos que en la tabla [Tipos de intervención<!-- Tipi intervento -->](/docs/configurations/tables/project-management/intervention-type/) es necesario indicar un Tipo de factura<!-- Tipo fattura --> correspondiente para que el procedimiento se complete correctamente.

Las condiciones para que una intervención<!-- intervento --> sea visualizada son las siguientes: 
- en el tipo de intervención<!-- tipo intervento --> debe estar indicado el Tipo de factura<!-- Tipo Fattura -->
- el estado de la intervención<!-- stato dell'intervento --> debe ser "controlado<!-- controllato -->" o "parcialmente facturado<!-- parzialmente fatturato -->"
- las líneas en el invoice plan de la intervención<!-- righe nell'invoice plan dell'intervento --> deben tener indicado el código de IVA<!-- codice iva -->
    
En la pestaña **Resúmenes<!-- Riepiloghi -->** es posible consultar los resultados de la valorización, presionando **Buscar<!-- Ricerca -->** en la ribbon bar. Seleccionando una fila de resultado, será posible visualizar la **Intervención<!-- Intervento -->** y la **Factura de venta<!-- Fattura di vendita -->** generada. Los botones específicos de la ribbon bar son:

![](/img/neutral/common/preview.png) Vista previa del resultado<!-- Anteprima esito -->: permite visualizar una vista previa de la factura<!-- fattura --> generada;

![](/img/neutral/common/execute-restore.png) Restablecer valorización<!-- Ripristino valorizzazione -->: ejecuta el rollback de la valorización;

![](/img/neutral/common/rollback.png) Restablecer factura<!-- Ripristino fattura -->: ejecuta el rollback de la factura<!-- fattura --> individual seleccionada.