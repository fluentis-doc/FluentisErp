---
title: Nuevo consumo de materiales
description: Creación y gestión de los documentos de consumo de materiales asociados a los vehículos en el módulo Logística.
keywords:
  - consumo de materiales
  - vehículos
  - logística
  - almacén
  - Fluentis ERP
sidebar_position: 2
schema: HowTo
sidebar_label: Nuevo consumo de materiales
tags:
  - logística
  - vehículos
  - almacén
last_update:
  author: Fluentis Documentation Team
  date: 10-11-2025
ai_generated: true
---

# Nuevo consumo de materiales<!-- Nuovo consumo materiali -->

Esta sección describe el procedimiento para crear un nuevo documento de **consumo de materiales<!-- consumo materiali -->** asociado a un vehículo<!-- automezzo -->, especificando campos de cabecera, detalles operativos y gestión de lotes.

El formulario **Nuevo consumo de materiales<!-- Nuovo consumo materiali -->** se abre pulsando el botón **Nuevo<!-- Nuovo -->** en la sección **Logística > Vehículos > Consumo de materiales<!-- Logistica > Automezzi > Consumo materiali -->**.

## Datos de cabecera<!-- Dati di testata -->

La estructura del formulario es similar a un registro de almacén<!-- registrazione di magazzino --> y prevé la cumplimentación de los siguientes *datos de cabecera<!-- dati di testata -->*:

- **Vehículo<!-- Automezzo -->**: identifica el vehículo<!-- automezzo --> para el cual se consumen los materiales. Debe estar codificado en [Gestión de vehículos<!-- Gestione automezzo -->](/docs/logistics/motorvehicles/motorvehicle-management).
- **Número<!-- Numero -->**: permite introducir manualmente el número del documento.
- **Responsable**: indica el usuario que ha creado el documento y se rellena automáticamente.
- **Almacén<!-- Magazzino -->**: especifica el almacén<!-- magazzino --> en el que se registrará el movimiento<!-- movimento -->.
- **Causal<!-- Causale -->**: define la causal de almacén<!-- causale di magazzino --> con la que se realizará el movimiento<!-- movimento -->.

## Inserción de operaciones de consumo<!-- Inserimento operazioni di consumo -->

En la cuadrícula central **Listado de operaciones realizadas<!-- Elenco operazioni effettuate -->** se deben ingresar todos los artículos consumidos, completando los siguientes campos:

- **Clase / Código de artículo / Descripción de artículo<!-- Classe / Codice articolo / Descrizione articolo -->**: indican la clasificación, el código y la descripción del artículo.
- **Unidad de medida<!-- Unità di misura -->**: especifica la unidad de medida del artículo.
- **Cantidad<!-- Quantità -->**: indica la cantidad del artículo consumida.
- **Variante**: permite seleccionar la variante del artículo.
- **Descripción de la variante<!-- Descrizione variante -->**: describe la variante del artículo seleccionado.
- **Proyecto<!-- Progetto -->**: asocia el artículo a un proyecto específico.
- **Descripción<!-- Descrizione -->**: describe el proyecto vinculado al artículo.

:::important
Es necesario completar cuidadosamente todos los campos para garantizar la correcta trazabilidad de los movimientos de almacén<!-- movimenti di magazzino -->.
:::

## Gestión de lotes de los artículos<!-- Gestione lotti degli articoli -->

En la tabla inferior es posible ingresar los lotes relativos al artículo seleccionado en la cuadrícula principal.

**Campos específicos:**

- **Número de lote<!-- Numero lotto -->**: identifica el número del lote.
- **Código de lote del proveedor<!-- Codice lotto fornitore -->**: indica el código del lote proporcionado por el proveedor.
- **Fecha de inicio<!-- Data inizio -->**: especifica la fecha de inicio del lote.
- **Fecha de caducidad<!-- Data scadenza -->**: indica la fecha de caducidad del lote.
- **Cantidad<!-- Quantità -->**: define la cantidad asociada al lote.
- **Ubicación<!-- Ubicazione -->**: indica el código de ubicación del lote dentro del almacén<!-- magazzino -->.

:::important
Asegúrese de que los lotes introducidos sean correctos, ya que afectan la trazabilidad de los materiales y la gestión de las existencias<!-- scorte -->.
:::

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

Una vez completado el registro del **consumo de materiales<!-- consumo materiali -->**, el sistema actualiza automáticamente los movimientos de almacén<!-- movimenti di magazzino -->, garantizando la trazabilidad completa de los materiales asociados al vehículo<!-- automezzo -->.

Para ampliar información:
- [Gestión de vehículos<!-- Gestione automezzo -->](/docs/logistics/motorvehicles/motorvehicle-management)
- [Registros de almacén<!-- Registrazioni di magazzino -->](/docs/logistics/warehouse/stock-records/record)
- [Funcionalidades, botones y campos comunes<!-- Funzionalità, pulsanti e campi comuni -->](/docs/guide/common)