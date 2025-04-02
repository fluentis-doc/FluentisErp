---
title: Creación y gestión de impagos (Creazione e gestione insoluti)
sidebar_position: 6
---

El formulario se encuentra en la ruta **Tesorería > Efectos > Crear Impago** y permite la creación de un *nuevo* impago.

## Cómo crear un Impago

1. Después de abrir el formulario, aunque es posible completar los campos manualmente, **utiliza** el comando ***Adquisición de datos*** (en la barra de la cinta) para recuperar el efecto que resultará impago, a través de la ventana de diálogo y búsqueda correspondiente que se abre.

2. En la ventana de diálogo que se ha abierto, selecciona el efecto, después de haber utilizado, si es necesario, los filtros disponibles, y presiona **Seleccionar**. Todos los detalles del impago se completan automáticamente, como por ejemplo el importe, el deudor, el número, el tipo de efecto, etc., leyéndolos del propio efecto.

3. **Agrega** manualmente los **Gastos** Bancarios y otros valores en la pestaña **Nota de cargo** para poder proceder posteriormente a la contabilización y al recobro al deudor también de estos importes. Algunos de estos campos pueden automatizarse, como por ejemplo los intereses moratorios y los gastos bancarios, configurando adecuadamente el registro del banco de presentación y los [**parámetros generales del módulo**](/docs/configurations/parameters/treasury/unpaids-parameters) de impagos (campo Tipo de Interés).

4. **Guarda** el impago creado.

El formulario **Gestión de impago** presenta un encabezado fijo con los datos principales del impago y luego, en la parte inferior, está dividido en 4 pestañas de detalle más una quinta para adjuntar documentos:

## 1. Encabezado fijo

Contiene los datos generales del impago, en particular: 

- el campo de **gastos bancarios** para una posible modificación manual  
- el **número** del impago que es igual al número del efecto de origen.  
- varios **indicadores de estado** dependiendo de las operaciones realizadas sobre el impago, tales como la contabilización, la impresión, el cobro definitivo de las sumas adeudadas, etc.

### 1.1 Nota de cargo

Se gestiona en cuanto a:  
- el cálculo de intereses con su respectivo **tasa** y **intereses moratorios** (en base al tipo de interés ingresado en los parámetros del módulo y la diferencia de **días** entre la fecha de vencimiento y la fecha de creación del impago).  
- **Gastos administrativos** de reembolso (que deben completar manualmente) que se volverán a cargar con la emisión de la nota de cargo.  
- **Recupero de sellos** (que deben completar manualmente) que se volverán a cargar con la emisión de la nota de cargo.

### 1.2 Presentación

Visualiza los datos de la lista de presentación asociada al efecto de origen.

### 1.3 Referencia del impago

Esta pestaña muestra las partidas creadas con la contabilización del impago, con los pagos asociados.

### 1.4 Ref. doc original

Visualiza las referencias de los documentos (partidas/facturas) de origen de los efectos creados.