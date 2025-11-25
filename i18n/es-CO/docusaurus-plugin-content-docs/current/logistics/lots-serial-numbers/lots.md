---
title: Búsqueda de lotes
sidebar_position: 2
description: Guía sobre la función de búsqueda y gestión de lotes dentro del módulo de Logística de Fluentis ERP.
schema: HowTo
tags: [Fluentis ERP, Logística, Lotes, Gestión de almacén]
last_update:
  author: Fluentis Documentation Team
  date: 2025-11-07
keywords: [búsqueda de lotes, Logística, Lotes, Gestión de almacén]
ai_generated: true
---

# Búsqueda de lotes<!-- Ricerca lotti -->

El formulario se abre a través del recorrido **Logística > Anagrafica lotes<!-- Anagrafica lotti -->** y permite buscar, visualizar y modificar los lotes<!-- lotti --> presentes en el sistema.

## Cómo realizar una búsqueda<!-- Come effettuare una ricerca -->

1. Configure los filtros deseados en la pantalla de búsqueda.  
2. Haga clic en el botón **Buscar<!-- Ricerca -->** presente en la *Ribbon bar* para visualizar los resultados en la cuadrícula.  
3. Para abrir los detalles de un lote<!-- lotto -->, selecciónelo y haga doble clic con el ratón o haga clic en el botón **Modificar<!-- Modifica -->**.

:::important
Solo es posible modificar o eliminar los lotes<!-- lotti --> que no están referenciados en otros documentos.
:::

## Botones específicos<!-- Pulsanti specifici -->

> **Modificar<!-- Modifica -->**: el botón permite [Modificar un lote ingresado<!-- Modificare un lotto inserito -->](/docs/logistics/lots-serial-numbers/lots-register);    
> **Eliminar<!-- Cancella -->**: permite la eliminación del lote<!-- lotto --> si este no está referenciado en ningún documento.

## Filtros específicos<!-- Filtri specifici -->

- **Todos<!-- Tutti -->**: al activar esta opción, el usuario puede filtrar todos los lotes<!-- lotti --> presentes en la base de datos;  
- **No cerrados<!-- Non chiusi -->**: al activar esta opción, el usuario puede filtrar solo los lotes<!-- lotti --> abiertos, es decir, aquellos que todavía tienen existencia en el almacén<!-- magazzino -->;  
- **Cerrados<!-- Chiusi -->**: al activar esta opción, el usuario puede filtrar solo los lotes<!-- lotti --> cerrados, es decir, aquellos cuya existencia es igual a cero.

## Campos específicos<!-- Campi specifici -->

> *Nota*: haga clic en el signo **+** para abrir el detalle de la fila.

- **Cerrado<!-- Chiuso -->**: el indicador, si está activo, resalta que la existencia es igual a cero;  
-**Cantidad<!-- Quantità -->**: muestra la cantidad inicial del lote<!-- lotto --> para cada almacén<!-- magazzino -->;  
-**Cantidad disponible<!-- Quantità disponibile -->**: muestra la cantidad disponible para cada almacén<!-- magazzino --> del lote<!-- lotto -->, es decir, la cantidad en existencia menos la cantidad comprometida en los distintos documentos. La cantidad disponible también puede visualizarse como igual a cero en caso de que el lote<!-- lotto --> se encuentre en un estado 'no disponible para retiros automáticos';  
- **Estado del lote<!-- Stato lotto -->**: muestra el estado del lote<!-- lotto -->. Es un dato que podría no ser gestionado;  
- **Almacén<!-- Magazzino -->**: muestra el código del almacén<!-- magazzino --> en el que se encuentra el lote<!-- lotto -->.

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

La función **Búsqueda de lotes<!-- Ricerca lotti -->** permite encontrar rápidamente los lotes<!-- lotti --> registrados, filtrándolos según su estado y disponibilidad.  
Se puede acceder a los detalles de cada lote<!-- lotto -->, modificar su información o eliminarlo, respetando las condiciones de referenciación.

Para ampliar información:
- [Registro y modificación de lotes<!-- Registrazione e modifica dei lotti -->](/docs/logistics/lots-serial-numbers/lots-register)  
- [Funcionalidades comunes de los formularios<!-- Funzionalità comuni delle form -->](/docs/guide/common)