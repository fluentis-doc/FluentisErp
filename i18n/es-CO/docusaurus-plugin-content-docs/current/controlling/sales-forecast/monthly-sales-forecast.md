---
title: Previsiones de ventas mensuales
sidebar_position: 2
ai_generated: true
---

Podemos ejecutarlas desde el menú área Controlling > Previsiones de ventas mensuales<!-- Previsioni di vendita mensili -->.

:::note Nota<!-- Nota -->
Antes de proceder, consulte lo indicado respecto a las [Versiones de las previsiones de ventas<!-- Versioni delle previsioni di vendita -->](/docs/configurations/tables/controlling/forecast/pv-versions).
:::

El formulario está compuesto por 3 áreas:

- el área de filtro de datos (la superior): para la búsqueda de las previsiones ya ingresadas;
- el área intermedia: para la propuesta de información durante una inserción o actualización masiva;
- el área inferior: es una lista donde visualizar y modificar las previsiones ya insertadas con la posibilidad de ingresar nuevas.

El área de filtro permite filtrar las Previsiones de ventas<!-- Previsioni di vendita --> por: *Versión, Artículo, Variante, Año de previsión, Activas* (todas, activas o no activas) y *Consolidadas* (todas, consolidadas y no consolidadas).<!-- Versione, Articolo, Variante, Anno previsione, Attive, Consolidate -->

El área intermedia, denominada **Información a proponer<!-- Informazioni da proporre -->**, permite, durante la inserción o actualización masiva, proponer la información predefinida: *Versión* (considerada solo durante la inserción) y *Cantidades mensuales a proponer<!-- Quantità mensili da proporre -->*. La actualización solo es posible para las filas de previsiones que aún no han sido consolidadas<!-- consolidate -->.

El área inferior está compuesta por un listado que contiene la información de:

- **Versión, Año, Predeterminada y Activa**: son informaciones de solo lectura ya que se insertan al realizar la inserción de una nueva previsión copiándolas desde la Versión a proponer;
- **Consolidada**: indica si la fila ha sido “validada” y está lista para ser considerada en la Generación de las órdenes de producción<!-- commesse di produzione -->; la consolidación puede realizarse manualmente, fila por fila, o masivamente para todas las previsiones de una determinada Versión presionando el botón **Consolida versión**; la restauración de una versión consolidada puede efectuarse presionando el botón **Restaurar consolidación<!-- Ripristina consolidamento -->**;
-	**Clase, Código de artículo, Descripción de artículo, Variante y Descripción de variante**: son las informaciones objeto de la previsión, no modificables si la fila ya ha sido consolidada;
-	**Unidad de medida**: es la Unidad de medida principal asociada al artículo y no es modificable;
-	**Unidad de medida alternativa**: puedo expresar las Cantidades en una Unidad de medida alternativa (si se indica) diferente a la principal; esta no es modificable si la fila ya ha sido consolidada;
-	**Cantidades mensuales, de enero a diciembre**: son las cantidades de previsión mensuales expresadas en Unidad de medida principal del artículo o Unidad de medida alternativa (si se indica); las cantidades de una previsión consolidada de años anteriores al año en curso o del año en curso y meses previos al actual ya no pueden modificarse;
-	**Cantidad total**: información no editable ya que es la suma de las Cantidades mensuales.

**Ejemplo de ingreso de nuevas previsiones<!-- Esempio di inserimento nuove previsioni -->**

*Hacemos doble clic con el mouse en la celda Código de artículo de la fila de inserción; se muestra la ayuda de los artículos; presionamos el botón **Buscar<!-- Ricerca -->** aplicando o no un filtro, seleccionamos una decena de artículos visualizados en la lista y presionamos el botón **Seleccionar<!-- Seleziona -->**; los artículos seleccionados se insertarán masivamente en la lista de previsiones para la Versión y las Cantidades propuestas.*<!-- Effettuiamo un doppio click... -->

**Ejemplo de actualización de previsiones ya existentes y no consolidadas<!-- Esempio di aggiornamento previsioni già esistenti e non consolidate -->**

*Seleccionamos algunas filas de previsiones ya ingresadas y presionamos el botón **Proponer cantidades<!-- Proponi quantità -->**; tras un mensaje de confirmación (presionaremos el botón **Sí<!-- Si -->**) y un aviso de “Actualización realizada<!-- Aggiornamento effettuato -->”, encontraremos las filas seleccionadas previamente, todas con las nuevas cantidades.*<!-- Selezioniamo alcune righe... -->