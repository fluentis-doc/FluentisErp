---
title: Gestión de Unidades de Medida Principal y Alternativa (Gestione Unità di misura principale e alternativa)
sidebar_position: 4
---

Esta funcionalidad permite definir y utilizar diferentes **unidades de medida** para el mismo producto en contextos diferentes, como la venta, la compra o la gestión del almacén. 

:::note
Para habilitar la gestión de **unidades de medida alternativas**, es necesario activar el indicador **gestione doppia unità di misura** en los [Parámetros](/docs/configurations/parameters/sales/dn-parameters).
:::

La **unidad de medida principal (unità di misura principale)**, obligatoria, se define para cada artículo en su registro y no puede ser modificada después de que el artículo haya sido utilizado en documentos o movimientos de almacén. La **unità di misura alternativa**, en cambio, permite gestionar el producto en una unidad diferente a la principal y puede ser configurada en la pestaña [Unidad de Medida Alternativa (Unità di Misura Alternative)](/docs/erp-home/registers/items/create-new-item) del registro del artículo.

En los documentos, la unidad de medida principal se muestra en la cuadrícula de **Artículos**, mientras que el widget de la unidad de medida alternativa es visible en la pestaña **dati articolo**, que contiene los campos **quantità alternativa** y **Precio Unidad de Medida Alternativa (Prezzo Unità di Misura Alternativa)**, pero solo si el indicador **gestione doppia unità di misura** está activo en los parámetros del módulo.

Si el indicador **proposta automatica unità di misura alternativa** está habilitado, el sistema propondrá automáticamente la unidad de medida alternativa con el indicador **predefinito** activo en el registro del artículo, calculando e insertando automáticamente la cantidad alternativa utilizando el factor de conversión.

Los indicadores presentes en la pestaña **unità di misura alternative** del registro del artículo afectan la propuesta y el cálculo de cantidades en los documentos. Si el indicador **predefinito** está activo, esa será la unidad de medida utilizada para la propuesta automática. Si el indicador **tassativo** está activado, cualquier modificación de la cantidad principal o alternativa resultará en el recalculo automático de la contraparte, manteniendo el vínculo a través del factor de conversión. Con el indicador **Prioritaria (Prioritaria)** activo, la cantidad alternativa tiene prioridad, calculando la cantidad principal sin recalcular la alternativa.

El cálculo de la cantidad alternativa se basa en el **factor de conversión**, que puede multiplicarse o dividirse por la cantidad principal; esta elección se configura en los [Parámetros iniciales de almacén (Parametri iniziali di magazzino)](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) mediante indicadores específicos.

En los documentos, en la columna **unità di misura**, se propone la unidad de medida principal del artículo, pero el usuario puede reemplazarla con una de las unidades de medida alternativas disponibles. Si se selecciona una unidad de medida alternativa en esta columna, no será posible especificar otra en el widget homónimo, ya que en un movimiento de almacén pueden utilizarse solo dos unidades de medida: la gestionada (siempre la unidad de medida principal del artículo) y la alternativa, especificada en la columna **unità di misura** o en el widget de la Unidad de Medida Alternativa.