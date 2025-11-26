---
title: Creación automática de avisos de vencimiento
sidebar_position: 2
ai_generated: true
---

El presente procedimiento, alternativo respecto al análogo *Generación de avisos de vencimiento<!-- Generazione solleciti -->*, actúa de manera masiva generando los avisos de vencimiento<!-- solleciti --> para todas las partidas<!-- partite --> vencidas según los parámetros (días de retraso, etc.) previstos por el tipo de aviso de vencimiento<!-- sollecito --> que se seleccione.
Por lo tanto, no se realiza ningún control ni selección detallada de las partidas<!-- partite -->, como sí ocurre en el procedimiento de *Generación de avisos de vencimiento<!-- Generazione solleciti -->*.

En esta ventana es posible configurar una lista de clientes a no avisar, una lista de partidas<!-- partite --> excluidas de los avisos y el tipo de aviso de vencimiento<!-- sollecito --> predeterminado a crear.

Una vez guardadas estas configuraciones, se activará el botón de creación automática: con este, la aplicación procederá a crear los avisos de vencimiento<!-- solleciti --> para todas las partidas<!-- partite --> que cumplan con los criterios de selección establecidos.

Dichos criterios se configuran en la sección de Parámetros utilizando los flags. Además, es posible filtrar los clientes por ***Categoría administrativa*** (campo que se encuentra en la ficha de clientes para crear agrupaciones).

Al finalizar la creación, las partidas<!-- partite --> con aviso de vencimiento<!-- sollecitate --> son visibles en el formulario correspondiente, mientras que las cartas de aviso pueden ser impresas y enviadas mediante la impresión apropiada (Administración>Partidas<!-- Partite --> >Impresiones>Cartas de aviso de vencimiento<!-- Lettere di sollecito -->)

:::danger[Atención<!-- Attenzione -->]
A diferencia del procedimiento de generación manual de avisos de vencimiento<!-- solleciti -->, **en el presente procedimiento NO es posible gestionar** avisos de vencimiento<!-- solleciti --> con un Número de **Días de retraso negativos**. Típicamente, los días negativos se configuran para crear un aviso antes del vencimiento. En este caso, **es necesario utilizar** el procedimiento manual [***Generación de avisos de vencimiento***](/docs/finance-area/maturity-values/procedures/generation-of-dunning-letters/generation-of-dunning-letters-intro)<!-- ***Generazione solleciti*** -->.
:::

| Función | Significado |
| --- | --- |
| Guardar<!-- Salva --> | Botón para guardar la generación de avisos de vencimiento<!-- generazione solleciti -->. |
| Generación de avisos de vencimiento<!-- Generazione solleciti --> | Botón para ejecutar la generación de avisos de vencimiento<!-- solleciti --> de las partidas<!-- partite --> que cumplen con los criterios de selección configurados. |
| Búsqueda de cliente para excluir<!-- Ricerca cliente da escludere --> | Botón para la búsqueda de clientes que se deseen excluir de la generación automática de avisos de vencimiento<!-- solleciti -->. |
| Eliminar clientes<!-- Cancella clienti --> | Botón para eliminar clientes de la sección de lista de clientes excluidos de los avisos de vencimiento<!-- solleciti -->. |
| Búsqueda de partidas para excluir<!-- Ricerca partite da escludere --> | Botón para la búsqueda de partidas<!-- partite --> que se deseen excluir. |
| Eliminar partidas<!-- Cancella partite --> | Botón para eliminar las partidas<!-- partite --> seleccionadas previamente para ser excluidas. |