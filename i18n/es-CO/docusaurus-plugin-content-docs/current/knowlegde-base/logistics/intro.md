---
title: FAQ Logística
sidebar_position: 1
ai_generated: true
---

<details>

  <summary>1. En la *Visualización de existencias*<!-- Visualizzazione giacenze --> ¿cómo se utilizan los filtros de la UM alternativa?</summary>
  
Este filtro se utiliza en caso de que el cliente habitualmente cambie el factor de conversión de los artículos por varios motivos.
El filtro *suma de los movimientos*<!-- somma dei movimenti --> considera la UM alternativa como suma de los movimientos de entrada/salida realizados y toma como valores los presentes en las *registraciones de almacén*<!-- registrazioni di magazzino -->.
El filtro *factor de conversión*<!-- fattore di conversione --> en cambio realiza un recálculo para todos los movimientos insertando el factor de conversión activo al momento de la búsqueda, ignorando así el valor interno de las *registraciones de almacén*<!-- registrazioni di magazzino --> e ingresando la nueva conversión según el nuevo factor.

</details>