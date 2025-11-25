---
title: "Creación del Plan de Carga"
sidebar_position: 2
sidebar_label: "Creación del Plan de Carga"
description: "Guía para la creación y gestión del Plan de Carga en Fluentis ERP."
schema: "TechArticle"
tags: ["Plan de Carga", "Logística", "ERP"]
keywords: ["Plan de Carga", "Creación", "Órdenes de Cliente", "Picking"]
ai_generated: true
---

# Creación del Plan de Carga<!-- Creazione Piano di Carico -->

El **Plan de carga<!-- Piano di carico -->** es un documento que se crea entre la orden de cliente<!-- ordine cliente --> y el picking.

## Búsqueda de órdenes de cliente<!-- Ricerca ordini cliente -->

El punto de partida para la creación de un plan de carga<!-- piano di carico --> es la búsqueda y selección de las órdenes de cliente<!-- ordini clienti --> a insertar en el plan<!-- piano -->. Desde la sección de filtro es posible realizar una búsqueda avanzada sobre las órdenes que se desean despachar entre aquellas *No despachadas<!-- Non evasi -->* o *Parcialmente despachadas<!-- Parzialmente evasi -->*.

**Configuración de búsqueda<!-- Impostazioni di ricerca -->**:
- Por defecto, se proponen como Desde fecha de entrega y Hasta fecha de entrega las fechas de inicio y fin de la semana actual, pero se pueden configurar de otra manera.
- En los [Parámetros de Planes de Carga<!-- Parametri Piani di Carico -->](/docs/configurations/parameters/logistics/load-plan-parameters) es posible:
  - Cambiar las fechas de entrega propuestas para la búsqueda.
  - Elegir si visualizar también filas de artículos presentes en planes de carga<!-- piani di carico --> abiertos.
  - Configurar diferentes colores por fila, según la disponibilidad<!-- disponibilità --> necesaria para despachar la orden.

**Filtros disponibles**:
- **Mostrar órdenes con fecha de entrega en día excluido<!-- Visualizza ordini con data consegna in giorno escluso -->**: permite visualizar en la cuadrícula también las órdenes que tienen una fecha bloqueada (ej. festiva) en el calendario.  
- **Mostrar órdenes con fecha de entrega correcta<!-- Visualizza ordini con data consegna corretta -->**: permite visualizar las órdenes con una fecha válida.
Se pueden abrir las órdenes con doble clic.

### Datos en la cuadrícula de resultados<!-- Dati nella griglia dei risultati -->

- **Tipo**: contiene la [tipología<!-- tipologia -->](/docs/configurations/tables/sales/sales-order-types) de la orden de cliente<!-- ordine cliente -->, seguido de los datos de la orden como el **Número**, la **Fecha**, el **Artículo**, etc.
- **Notas**: están disponibles las notas de las filas de la orden y las notas del plan de carga<!-- piano di carico -->.
- **Cantidad**: muestra la cantidad total de la fila del artículo en la orden.
- **Cantidad residual**: indica lo residual de la orden que aún no ha sido despachado.
- **Orden presente en otro plan de carga<!-- Ordine presente in altro piano carico -->**: indica que la orden ya está presente en otro plan<!-- piano -->.
- **Orden presente en otro plan de carga abierto<!-- Ordine presente in altro piano carico aperto -->**: indica que la orden ya está presente en otro plan<!-- piano --> abierto.
- **Disponibilidad<!-- Disponibilità -->**: visible solo si están activados los flags de la disponibilidad en los [Parámetros de planes de carga<!-- Parametri dei piani di carico -->](/docs/configurations/parameters/logistics/load-plan-parameters).  
La disponibilidad es la del almacén<!-- magazzino --> de la fila de la orden a la fecha prevista de entrega (si es en el futuro); si la fecha de entrega es en el pasado, la disponibilidad se calcula al día de hoy. Además, si la fila del artículo ya está incluida en otro plan de carga<!-- piano di carico --> para el cual aún no se han creado otros documentos (picking, guías o facturas), esta se excluye de la disponibilidad presente en la fila del mismo artículo. Por lo tanto, la disponibilidad presente en los planes de carga<!-- piani di carico --> puede diferir de la presente en **Análisis de disponibilidad<!-- Analisi disponibilità -->**.
- **Existencias<!-- Giacenza -->**: visible solo si están activados los flags de la disponibilidad en los [Parámetros de planes de carga<!-- Parametri dei piani di carico -->](/docs/configurations/parameters/logistics/load-plan-parameters).  
La existencia es la del almacén<!-- magazzino --> de la fila de la orden a la fecha prevista de entrega (si es en el futuro); si la fecha de entrega es en el pasado, la existencia se calcula al día de hoy.
- **Artículo**: permite insertar la cantidad del artículo a despachar.  
El valor *Artículos* se calcula para los artículos no gestionados por udc<!-- udc --> y mientras que se calcula el *Número de unidades de carga* para aquellos gestionados por udc<!-- udc -->; si el valor *Artículos* es igual a cero, significa que las filas de la orden están sin disponibilidad<!-- disponibilità --> para el plan de carga<!-- piano carico -->.

### Operaciones con los botones<!-- Operazioni con i pulsanti -->

Una vez seleccionadas las filas de la orden a procesar en el plan de carga<!-- piano di carico -->, es posible realizar diferentes operaciones con los botones de la ribbon bar. Si en los parámetros no se requiere disponibilidad<!-- disponibilità --> obligatoria, entonces se podrán despachar filas sin disponibilidad.

- **Insertar orden<!-- Inserisci ordine -->**: transfiere las filas seleccionadas a la pestaña **Preparación del plan de carga<!-- Preparazione piano di carico -->**.
- **Notas de envío<!-- Note spedizione -->**: muestra las *Notas de envío* presentes en la pestaña *Entrega* de la *Ficha del cliente*.
- **Propiedades de la orden<!-- Proprietà ordine -->**: abre el **Estado de despacho<!-- Stato evasione -->** de la orden seleccionada.
- **Editar notas del plan de carga<!-- Modifica Note piano di carico -->**: edita las **Notas del plan de carga<!-- Note piano di carico -->** en la pestaña *Artículos* de la orden de cliente.

## Preparación del plan de carga<!-- Preparazione piano carico -->

En esta pestaña se proponen los datos para la preparación del plan de carga<!-- piano di carico -->. Los datos mostrados por defecto son los configurados en la tabla [Tipos de plan de carga<!-- Tipi piano di carico -->](/docs/configurations/tables/logistics/load-plan-type); los demás pueden ser ingresados manualmente.

#### Botones específicos<!-- Pulsanti specifici -->
- **Guardar<!-- Salva -->**: permite guardar el plan de carga<!-- piano di carico -->.
- **Configurar transportista<!-- Imposta vettore -->**: abre la pantalla de búsqueda **Transportistas<!-- Vettori -->** para seleccionar uno a asociar al plan de carga<!-- piano di carico -->; este será reportado en la columna Transportista<!-- Vettore --> de la cuadrícula.
- **Editar notas de transportista<!-- Modifica note vettore -->**: edita las notas del transportista<!-- vettore --> y las muestra en la columna de la cuadrícula *Notas de transportista<!-- Note vettore -->*.
- **Editar número de transportista<!-- Modifica numero vettore -->**: permite dividir el envío si el mismo transportista llega con varios vehículos.
- **Liberar plan<!-- Rilascio piano -->**: hace que el plan<!-- piano --> esté disponible para la creación de otros documentos (ej. picking).
- **Mover a otro plan de carga<!-- Sposta in altro piano di carico -->**: mueve la fila a un plan de carga<!-- piano di carico --> ya existente, seleccionado desde la pantalla de búsqueda.
- **Crear picking<!-- Creazione picking -->**: crea el *Picking* a partir del plan de carga<!-- piano di carico -->; en la pantalla es necesario ingresar el **Tipo de picking<!-- Tipo picking -->**, el **Operador<!-- Operatore -->** y es posible elegir si crear un picking diferente para cada orden o no. El picking creado estará disponible en la Búsqueda de picking<!-- Ricerca picking -->.

### Gestión de lotes<!-- Gestione dei lotti -->

En caso de que los artículos presentes en el plan de carga<!-- Piano di carico --> se gestionen por lotes, los lotes en el picking creado se proponen según la configuración:
- Si están presentes, se proponen los de la orden de cliente<!-- ordine cliente -->, independientemente de los flags **Lotes / Número de serie obligatorios<!-- Lotti / Serial Number obbligatori -->** y **Propuesta lotes / Número de serie<!-- Proposta lotti / Serial Number -->**, presentes en los [Parámetros de picking<!-- Parametri picking -->](/docs/configurations/parameters/logistics/picking-parameters/).
- Si no están presentes en la orden de cliente<!-- ordine cliente --> y los flags **Lotes / Número de serie obligatorios<!-- Lotti / Serial Number obbligatori -->** y **Propuesta lotes / Número de serie<!-- Proposta lotti / Serial Number -->** presentes en los [Parámetros de picking<!-- Parametri picking -->](/docs/configurations/parameters/logistics/picking-parameters/) están activados, se proponen según la **Tipología de recolección<!-- Tipologia prelievo -->** (FIFO o Fecha de caducidad) presente en la pestaña Lotes y número de serie de la ficha del artículo (si la **Tipología de recolección<!-- Tipologia prelievo -->** es Manual, el picking se creará sin lotes ni número de serie incluso si la obligatoriedad está activa); si el flag **Lotes / Número de serie obligatorios<!-- Lotti / Serial Number obbligatori -->** está activo, pero el flag **Propuesta lotes / Número de serie<!-- Proposta lotti / Serial Number -->** no está activo, entonces no será posible crear el picking porque no se propondrán los lotes ni número de serie dado que la propuesta no está activa. En cambio, con el flag **Lotes / Número de serie obligatorios<!-- Lotti / Serial Number obbligatori -->** desactivado y el flag **Propuesta lotes / Número de serie<!-- Proposta lotti / Serial Number -->** activado, el picking se creará con los lotes propuestos según la **Tipología de recolección<!-- Tipologia prelievo -->** (FIFO o Fecha de caducidad) de la pestaña Lotes y número de serie de la ficha del artículo; si la *Tipología de recolección<!-- Tipologia prelievo -->** es *Manual* se creará sin.
- Si ambos flags **Lotes / Número de serie obligatorios<!-- Lotti / Serial Number obbligatori -->** y **Propuesta lotes / Número de serie<!-- Proposta lotti / Serial Number -->** no están activados, el picking se creará sin lotes ni número de serie.

## Leyenda<!-- Legenda -->

En esta pestaña se visualizan las posiciones y compartimientos<!-- vani --> por filas del plan de carga<!-- piano di carico -->; estos se configuran en la ficha del *Vehículo<!-- Automezzo -->*.

## Resumen de los planes de carga<!-- Riepilogo piani di carico -->

En esta pestaña se visualiza el resumen de los datos relativos al *Plan de carga<!-- Piano di carico -->*.

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

En síntesis, la creación de un Plan de Carga<!-- Piano di Carico --> requiere la búsqueda y selección cuidadosa de las órdenes de cliente<!-- ordini cliente --> no despachadas. Hay disponibles diversas operaciones para optimizar el proceso, incluida la preparación y gestión del picking.

Para mayor información, consulte los enlaces a los [Parámetros de Planes de Carga<!-- Parametri Piani di Carico -->](/docs/configurations/parameters/logistics/load-plan-parameters) y a los [Tipos de plan de carga<!-- Tipi piano di carico -->](/docs/configurations/tables/logistics/load-plan-type).