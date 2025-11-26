---
title:  Búsqueda de Plafond
sidebar_position: 3
ai_generated: true
---

El formulario de búsqueda de Plafond

- se encuentra en Administración > Declaraciones > Plafond<!-- Amministrazione > Dichiarazioni > Plafond -->

- permite al usuario buscar los cálculos de Plafond creados previamente con el objetivo de visualizarlos, modificarlos y eventualmente eliminarlos.

Desde este formulario también es posible ingresar manualmente un nuevo cálculo de Plafond mediante el botón [**Nuevo plafond**](/docs/finance-area/declarations/declarations/plafond/plafond-management).



## Botones de la barra Ribbon<!-- Pulsanti della Ribbon Bar -->

> - **Buscar<!-- Ricerca -->:** Botón para buscar los cálculos de Plafond según los filtros de búsqueda configurados en el encabezado del formulario.
> - **Nuevo<!-- Nuovo -->:** Llama al formulario para ingresar un nuevo cálculo.
> - **Modificar<!-- Modifica -->:** Permite modificar un cálculo ingresado previamente.
> - **Visualización:** Permite visualizar un cálculo ingresado previamente.
> - **Eliminar<!-- Elimina -->:** Elimina un cálculo ingresado previamente.


## Tablas y parámetros preliminares para la gestión de Plafond<!-- Tabelle e Parametri preliminari per la gestione del Plafond -->

La configuración del cálculo de plafond<!-- calcolo plafond --> deriva únicamente de la tabla [**Tipos de IVA**](/docs/configurations/tables/finance/vat-rates)<!-- Aliquote modalità IVA -->: 

Los campos relevantes de la tabla son:

**Plafond**: la marca indica qué tipos de IVA<!-- aliquote --> están vinculados a las declaraciones de intención: esta opción identifica la tasa que "**consume**" mes a mes el plafond general disponible como exportador habitual.

**Venta exterior para Plafond<!-- Vendita Estera per Plafond -->**: con esta marca se identifican los tipos de IVA<!-- aliquote iva -->, presentes en los registros de ventas del año yyyy, que **incrementan** el plafond disponible para el año yyyy+1 en calidad de exportador habitual.

No tiene relevancia la causale<!-- causale --> contable ni el titular de la registrazione<!-- registrazione -->. Las notas de crédito revierten de los movimientos<!-- movimenti --> los importes relacionados.