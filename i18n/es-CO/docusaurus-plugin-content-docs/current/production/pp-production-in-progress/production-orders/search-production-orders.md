---
title: Búsqueda de Pedidos de Producción (Ricerca Ordini di Produzione)
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
El módulo para la gestión de los **ordini di produzione** de Fluentis es una solución dinámica y versátil, diseñada para apoyar de manera efectiva el control y la planificación de las actividades productivas. Directamente desde el formulario principal, los usuarios pueden gestionar órdenes en diferentes estados, incluyendo "Lanzado (Lanciato)" y "Ejecutivo (Esecutivo)", permitiendo una clara distinción entre los pedidos listos para el inicio y los que ya están en fase de ejecución.

Una de las principales funcionalidades es la posibilidad de crear varios lotes a partir de un solo pedido de producción, lo que permite una mayor flexibilidad y una gestión más precisa de las cantidades a producir. Cada lote puede ser asociado a detalles específicos, garantizando así una trazabilidad óptima. La gestión intuitiva de los pedidos no solo simplifica el seguimiento de las fases de producción, sino que también facilita la adaptación a los cambios en las necesidades operativas, convirtiendo a Fluentis en un aliado estratégico para la eficiencia productiva.
:::

El módulo **ordini di produzione** permite gestionar los pedidos de producción.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

*Botones específicos (Pulsanti specifici)*:

> **generazione lotti**: este botón, que solo se habilita después de haber seleccionado un pedido, permite crear lotes de producción a partir de la cantidad del mismo pedido de producción; por lo tanto, da la posibilidad de crear nuevos pedidos de producción con el mismo número principal, pero con un número de lote diferente y para cada uno de ellos permite indicar las cantidades a producir;    
:::note Nota
La cantidad del lote de origen no puede ser modificada si ya se han creado *Listas de recogida (Liste di prelievo)*, *dichiarazioni di produzione*, o si algunos materiales ya han sido consumidos. En estos casos es posible crear nuevos lotes de producción, pero sin poder modificar la cantidad del lote de origen.          
::: 
> **seleziona progetto**: este botón permite asociar un proyecto a los pedidos de producción seleccionados;    
> **ricalcola disponibilità**: este botón inicia el cálculo de la disponibilidad para los pedidos de producción seleccionados;    
> **modifica stato ordine**: este botón, que solo se habilita después de haber seleccionado uno o más pedidos, permite cambiar el estado de los pedidos seleccionados (Lanzado, Ejecutivo, Cumplido, Historizado);     
> **completamento dati ordine**: este botón, que solo se habilita después de haber seleccionado uno o más pedidos, permite regenerar los datos del pedido de producción, reemplazándolos con los que están en la lista de materiales y en el ciclo de trabajo presentes en el registro;    
> **ricalcolo costi ordine di produzione**: este botón permite realizar el recalculo de los costos de producción de los pedidos de producción seleccionados.