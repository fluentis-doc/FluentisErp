---
title: Gestión de Unidades de Medida Principal y Alternativa (Gestione Unità di misura principale e alternativa)
sidebar_position: 5
---

Esta funcionalidad permite definir y utilizar diferentes unidades de medida para el mismo producto en contextos distintos, como la venta, la compra o la gestión del inventario.

:::note
Para habilitar la gestión de unidades de medida alternativas, es necesario activar el indicador "Gestión de doble unidad de medida (Gestione doppia unità di misura)" en los [Parámetros (Parametri)](/docs/configurations/parameters/sales/dn-parameters).
:::

La unidad de medida principal, que es obligatoria, se define para cada artículo en su registro y no puede ser modificada después de que se haya utilizado el artículo en documentos o movimientos de inventario. La unidad de medida alternativa, en cambio, permite gestionar el producto en una unidad diferente a la principal y puede ser configurada en la pestaña "Unidades de Medida Alternativas (Unità di Misura Alternative)" del registro del artículo.

En los documentos, la unidad de medida principal se muestra en la cuadrícula de los [Artículos (Articoli)](/docs/sales/sales-delivery-notes/insert-delivery-notes/sales-dn), mientras que el widget de la unidad de medida alternativa es visible en la pestaña "Datos del Artículo (Dati articolo)", que contiene los campos "Cantidad Alternativa (Quantità Alternativa)" y "Precio Unidad de Medida Alternativa (Prezzo Unità di Misura Alternativa)", pero solo si el indicador "Gestión Doble Unidad de Medida" está activo en los parámetros del módulo.

Si el indicador "Propuesta Automática Unidad de Medida Alternativa" está habilitado, el sistema propondrá automáticamente la unidad de medida alternativa con el indicador "Predeterminado (Predefinito)" activo en el registro del artículo, calculando e insertando automáticamente la cantidad alternativa utilizando el factor de conversión.

Los indicadores presentes en la pestaña "Unidades de Medida Alternativas (Unità di Misura Alternative)" del registro del artículo influyen en la propuesta y el cálculo de las cantidades en los documentos. Si el indicador "Predeterminado (Predefinito)" está activo, esa será la unidad de medida utilizada para la propuesta automática. Si el indicador "Obligatorio (Tassativo)" está activado, cualquier modificación de la cantidad principal o alternativa dará lugar al recálculo automático de la contraparte, manteniendo el vínculo a través del factor de conversión. Con el indicador "Prioritaria (Prioritaria)" activo, la cantidad alternativa prevalece, calculando la cantidad principal sin el recálculo de la alternativa.

El cálculo de la cantidad alternativa se basa en el factor de conversión, que puede ser multiplicado o dividido por la cantidad principal; esta elección se configura en los [Parámetros iniciales de inventario (Parametri iniziali di magazzino)](/docs/configurations/parameters/logistics/warehouse-initial-parameters/warehouse-parameters) mediante indicadores específicos.

En los documentos, en la columna "Unidad de Medida (Unità di Misura)", se propone la unidad de medida principal del artículo, pero el usuario puede reemplazarla por una de las unidades de medida alternativas disponibles. Si se selecciona una unidad de medida alternativa en esta columna, no será posible especificar otra en el widget homónimo, ya que en un movimiento de inventario solo se pueden utilizar dos unidades de medida: la de gestión (siempre la unidad de medida principal del artículo) y la alternativa, especificada en la columna "Unidad de Medida" o en el widget de Unidad de Medida Alternativa.