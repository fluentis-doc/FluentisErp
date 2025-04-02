---
title: ricerca plafond
sidebar_position: 3
---

El formulario de búsqueda de Plafond 

- se encuentra en Administración (Amministrazione) > Declaraciones (Dichiarazioni) > Plafond

- permite al usuario buscar los cálculos de Plafond creados anteriormente con el propósito de visualizarlos, modificarlos y, eventualmente, eliminarlos.

Desde este formulario también es posible ingresar manualmente un nuevo cálculo de Plafond a través del botón [**nuovo plafond**](/docs/finance-area/declarations/declarations/plafond/plafond-management).

## Botones de la Ribbon Bar

> - **Buscar (Ricerca):** Botón para buscar los cálculos de Plafond según los filtros de búsqueda establecidos en el encabezado del formulario.  
> - **Nuevo (Nuovo):** Abre el formulario para ingresar un nuevo cálculo.  
> - **Modificar (Modifica):** Permite modificar un cálculo ingresado previamente.  
> - **Visualización (Visualizzazione):** Permite visualizar un cálculo ingresado previamente.  
> - **Eliminar (Elimina):** Elimina un cálculo ingresado previamente.  

## Tablas y parámetros preliminares para la gestión del Plafond

La configuración del cálculo del plafond deriva únicamente de la tabla [**Tasas de IVA (Aliquote modalità IVA)**](/docs/configurations/tables/finance/vat-rates):  

Los campos de la tabla que están involucrados son:

**Plafond**: el indicador define qué tasas están vinculadas a las declaraciones de intención: este indicador identifica la tasa que "**consume (consuma)**" mes a mes el plafond general disponible como exportadores habituales.  

**vendita estera per plafond**: con este indicador se identifican las tasas de IVA, presentes en los registros de ventas del año yyyy, que **incrementan (incrementano)** el plafond disponible para el año yyyy+1 como exportador habitual.  

No tiene relevancia la causa contable y el registro titular de la anotación. Las notas de crédito, deducen de los movimientos los montos relacionados.