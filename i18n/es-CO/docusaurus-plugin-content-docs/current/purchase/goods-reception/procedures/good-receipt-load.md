---
title: Carga de Recepción de Mercancías
sidebar_position: 4
---

El procedimiento se abre a través de la ruta **Compras > Recepción de Mercancías > Carga de Recepción de Mercancías** y permite ejecutar/restaurar las operaciones de registro en almacén de los artículos presentes en el *Recepción de Mercancías*.

La máscara se compone de tres pestañas: *Filtro*, *Parámetro* y *Rollback*.

### 1. Filtro

En esta pestaña, el usuario tiene la posibilidad de insertar filtros para buscar el recepción de mercancías a cargar en almacén.  
Es posible filtrar por: *Proveedor*, *Número recepción*, *De/A fecha recepción*.

- **Fecha registro**: permite especificar la fecha relacionada con el registro en almacén.

:::important Recuerda 
Si en [Parámetros de pedidos de proveedores](/docs/configurations/parameters/purchase/purchase-orders-parameters) > pestaña Carga el flag **Crea registro con la fecha del documento** está activo, el registro de almacén siempre se ejecutará con la *Fecha recepción* insertada en la cabecera del documento, ignorando la *Fecha registro almacén* insertada en este formulario.  
Si la *Fecha carga* no está valorada, se creará el registro de almacén con la *Fecha registro almacén* insertada en este formulario o con la fecha actual, si el campo *Fecha registro* no está valorado.
:::

#### Botones específicos  
> **Búsqueda**: permite buscar los recepciones que se registrarán en almacén.  
> **Carga**: permite ejecutar la carga de los recepciones seleccionados, en base a los parámetros insertados en la pestaña siguiente.

### 2. Parámetros

En la pestaña *Parámetros* es posible elegir, con los flags correspondientes, cómo tratar los eventuales artículos no codificados o sin almacén y causal presentes dentro del documento. Las opciones disponibles son:

- **Ignora la recepción que contenga artículos no codificados**: no permite la carga parcial del documento si éste contiene al menos un artículo no codificado.  
- **Ignora los artículos no codificados de la recepción**: permite la carga parcial del documento omitiendo los artículos no codificados.

- **Ignora la recepción que contenga artículos sin alm./caus.**: no permite la carga parcial del documento si éste contiene al menos un artículo sin almacén y causal.  
- **Ignora los artículos de la recepción sin alm./caus.**: permite la carga parcial del documento omitiendo los artículos que no tengan almacén y causal.  
- **Utiliza los siguientes valores para los artículos sin alm./caus.**: asegura la carga completa del documento. Para todos los artículos encontrados sin almacén y causal en las recepciones seleccionadas, establece los datos insertados en los campos siguientes: *Almacén* y *Causal*.

:::important Recuerda
Si en [Parámetros de pedidos de proveedores](/docs/configurations/parameters/purchase/purchase-orders-parameters) > pestaña Carga el flag **Prioridad de almacén y causal de carga** está activo, siempre se utilizarán el *Almacén* y la *Causal* insertados en los parámetros, ignorando los presentes en el recepción de mercancías para cada línea de artículo; de lo contrario, tendrán prioridad los insertados en el documento.  
:::

### 3. Rollback 

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de registro ejecutadas.

Los datos en las cuadrículas inferiores, **Recepción de Mercancías** y **Registro**, corresponden al registro de carga seleccionado en la cuadrícula superior (después de filtrar los datos). Además, en estas dos cuadrículas, existe la posibilidad de visualizar el recepción de mercancías y su registro de almacén mediante doble clic en la fila.

#### Botones específicos  
> **Búsqueda**: permite buscar las facturas cargadas. El resultado de este procedimiento se visualiza en las cuadrículas de resultado.  
> **Rollback**: permite cancelar todo el registro de carga seleccionado.