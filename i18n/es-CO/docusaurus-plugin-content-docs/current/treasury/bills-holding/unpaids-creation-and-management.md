---
title: Creación y gestión de impagados
sidebar_position: 6
ai_generated: true
---

El formulario<!-- form --> se encuentra en la ruta **Tesorería > Efectos > Crear Impagado<!-- Tesoreria > Effetti > Crea Insoluto -->** y permite la creación de un *nuevo* impagado<!-- insoluto -->.

## Cómo crear un impagado<!-- Come creare un Insoluto -->

1. Tras abrir el formulario<!-- form -->, aunque es posible completar los campos manualmente, **utiliza** el comando ***Adquisición de datos<!-- Acquisizione dati -->*** (en la ribbon bar) para seleccionar el efecto que resultará impagado<!-- insoluto -->, utilizando la ventana de búsqueda y diálogo que se abre.

2. Desde la ventana de diálogo que se abre, selecciona el efecto. Después de utilizar si es necesario los filtros disponibles, pulsa **Seleccionar<!-- Seleziona -->**. Todos los detalles del impagado<!-- insoluto --> se completan automáticamente, como por ejemplo importe, deudor, número, tipo de efecto, etc., leyéndolos del efecto original.

3. **Agrega** manualmente los **Gastos<!-- Spese -->** bancarios y los demás valores en la pestaña **Nota de débito<!-- Nota di addebito -->** para poder posteriormente contabilizar y volver a cargar al deudor estos importes. Algunos de estos campos pueden automatizarse, como por ejemplo los intereses de demora y los gastos bancarios, configurando adecuadamente la ficha de la entidad bancaria de presentación y los [**parámetros generales del módulo**](/docs/configurations/parameters/treasury/unpaids-parameters) de impagados<!-- insoluti --> (campo Tipo Interés).

4. **Guarda** el impagado<!-- insoluto --> creado.

El formulario<!-- form --> **Gestión de impagados<!-- Gestione insoluto -->** muestra un encabezado fijo con los datos principales del impagado<!-- insoluto --> y en la parte inferior está dividido en 4 pestañas de detalle más una quinta para adjuntar documentos:

## 1. Encabezado fijo<!-- Testata fissa -->

Contiene los datos generales del impagado<!-- insoluto -->, en particular: 

- el campo de **gastos bancarios** para una posible modificación manual
- el **número** del impagado<!-- insoluto --> que es igual al número del efecto original
- varios **flags de estado** según las operaciones realizadas sobre el impagado<!-- insoluto -->, como por ejemplo la contabilización, impresión, el cobro definitivo de las cantidades adeudadas, etc.

### 1.1 Nota de débito<!-- Nota debito -->

Se gestiona respecto a: 
- el cálculo de intereses con el correspondiente **tipo** y **intereses de demora** (en base al tipo de tasa ingresado en los parámetros del módulo y la diferencia de **días** entre la fecha de vencimiento y la fecha de creación del impagado<!-- insoluto -->).
- **Gastos administrativos** repercutibles (a completar manualmente) que serán repercutidos con la emisión de la nota de débito
- **Recuperación de sellos** (a completar manualmente) que serán repercutidos con la emisión de la nota de débito

### 1.2 Presentación
Visualiza los detalles de la remesa de presentación asociada al efecto de origen.

### 1.3 Referencia de impagado<!-- Riferimento insoluto -->

Esta pestaña muestra los movimientos<!-- partite --> creados con la contabilización del impagado<!-- insoluto --> y los pagos asociados.

### 1.4 Ref. doc original<!-- Rif. doc originale -->

Visualiza las referencias de los documentos (movimientos<!-- partite -->/facturas) de origen de los efectos creados.