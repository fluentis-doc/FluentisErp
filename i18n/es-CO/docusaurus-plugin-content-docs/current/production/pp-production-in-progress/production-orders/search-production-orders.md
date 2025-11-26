---
title: Búsqueda de Órdenes de Producción
sidebar_position: 2
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
El módulo para la gestión de las **Órdenes de Producción<!-- Ordini di Produzione -->** de Fluentis es una solución dinámica y versátil, pensada para apoyar de manera eficaz el control y la planificación de las actividades productivas. Directamente desde el formulario principal, los usuarios pueden gestionar órdenes en diferentes estados, entre los cuales "Lanzada<!-- Lanciato -->" y "Ejecutiva<!-- Esecutivo -->", permitiendo una clara distinción entre las órdenes listas para su inicio y aquellas ya en fase de ejecución.

Una de las funcionalidades principales es la posibilidad de crear varios lotes a partir de una sola orden de producción<!-- ordine di produzione -->, permitiendo así una mayor flexibilidad y una gestión más precisa de las cantidades a producir. Cada lote puede asociarse a detalles específicos, garantizando una trazabilidad óptima. La gestión intuitiva de las órdenes no solo simplifica el seguimiento de las fases de producción, sino que también facilita la adaptación a los cambios en las necesidades operativas, convirtiendo a Fluentis en un aliado estratégico para la eficiencia productiva.
:::

El módulo **Órdenes de Producción<!-- Ordini di Produzione -->** permite gestionar las órdenes de producción<!-- ordini di produzione -->.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Botones específicos<!-- Pulsanti specifici -->*:

> **Generación de lotes<!-- Generazione lotti -->**: este botón, que solo se habilita después de seleccionar una orden<!-- ordine -->, permite crear lotes de producción<!-- lotti di produzione --> partiendo de la cantidad de la propia orden de producción<!-- ordine di produzione -->; de esta manera, da la posibilidad de crear nuevas órdenes de producción<!-- ordini di produzione --> con el mismo número principal, pero con diferente número de lote; y para cada uno de ellos permite indicar las cantidades a producir. En el caso de que la orden de producción<!-- ordine di produzione --> esté en estado *Completada<!-- Evaso -->*, también se habilita la opción **Mantener la referencia al proyecto de producción<!-- Mantenere il riferimento alla commessa di produzione -->**, que permite decidir si el nuevo lote de la orden<!-- lotto dell'ordine --> debe crearse con la referencia al proyecto<!-- commessa --> de origen o no; en este caso es importante recordar que el proyecto<!-- commessa --> permanecerá en estado *Completado<!-- Evaso -->*, por lo tanto, si es necesario, el usuario deberá reabrirlo manualmente.     
:::note Nota
La cantidad del lote de origen no puede modificarse en caso de que ya se hayan creado *Listas de picking<!-- Liste di prelievo -->*, *Declaraciones de producción<!-- Dichiarazioni di produzione -->*, o si algunos materiales ya han sido consumidos. En estos casos, sigue siendo posible crear nuevos lotes de producción<!-- lotti di produzione -->, pero sin poder variar la cantidad del lote de origen.          
:::
> **Seleccionar proyecto<!-- Seleziona progetto -->**: este botón permite asociar un proyecto a las órdenes de producción<!-- ordini di produzione --> seleccionadas;    
> **Modificar estado de orden<!-- Modifica stato ordine -->**: este botón, que se habilita solo después de seleccionar una o más órdenes<!-- ordini -->, permite cambiar el estado de las órdenes<!-- ordini --> seleccionadas (Lanzada<!-- Lanciato -->, Ejecutiva<!-- Esecutivo -->, Completada<!-- Evaso -->, Historificada<!-- Storicizzato -->);     
> **Completar datos de orden<!-- Completamento dati ordine -->**: este botón, que se habilita solo después de seleccionar una o más órdenes<!-- ordini -->, permite regenerar los datos de la orden de producción<!-- ordine di produzione -->, sustituyéndolos por los presentes en la lista de materiales y en el ciclo de trabajo presentes en el registro maestro<!-- anagrafica -->;    
> **Recalcular costos de Orden de Producción<!-- Ricalcolo costi Ordine di Produzione -->**: este botón permite recalcular los costos de producción<!-- costi di produzione --> de las órdenes de producción<!-- ordini di produzione --> seleccionadas;            
> **Activar obligatorio<!-- Attiva tassativo -->**: permite activar la opción **Obligatorio<!-- Tassativo -->** dentro de todas las órdenes de producción<!-- ordini di produzione --> seleccionadas;       
> **Desactivar obligatorio<!-- Disattiva tassativo -->**: permite desactivar la opción **Obligatorio<!-- Tassativo -->** dentro de todas las órdenes de producción<!-- ordini di produzione --> seleccionadas.