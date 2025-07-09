---
title: Carico Ricevimento Merci
sidebar_position: 4
---

El procedimiento se abre a través de la ruta **Compras (Acquisti) > Recepción de Mercancías (Ricevimento merci) > Carga de Recepción de Mercancías (Carico ricevimento merci)** y permite ejecutar/restaurar las operaciones de registro en almacén de los artículos presentes en el *Recepción de Mercancías (Ricevimento merci)*.

La máscara se compone de tres pestañas: *Filtro (Filtro)*, *Parámetro (Parametro)* y *Rollback (Rollback)*.

### 1. Filtro (Filtro)

En esta pestaña, el usuario tiene la posibilidad de insertar filtros para buscar el recepción de mercancías a cargar en almacén.  
Es posible filtrar por: *Proveedor (Fornitore)*, *Número (Numero) recepción*, *De/A fecha (Data) recepción*.

- **Fecha (Data) registro**: permite especificar la fecha relacionada con el registro en almacén.

:::important Ricorda (Ricorda)
Si en [Parámetros de pedidos de proveedores (Parametri ordini fornitori)](/docs/configurations/parameters/purchase/purchase-orders-parameters) > pestaña Carga (Carico) el flag **Crea registro con la fecha del documento (Crea registrazione con la data del documento)** está activo, el registro de almacén siempre se ejecutará con la *Fecha (Data) recepción* insertada en la cabecera del documento, ignorando la *Fecha (Data) registro almacén* insertada en este formulario.  
Si la *Fecha (Data) carga* no está valorada, se creará el registro de almacén con la *Fecha (Data) registro almacén* insertada en este formulario o con la fecha actual, si el campo *Fecha (Data) registro* no está valorado.
:::

#### Botones específicos  
> **Búsqueda (Ricerca)**: permite buscar los recepciones que se registrarán en almacén.  
> **Carga (Carico)**: permite ejecutar la carga de los recepciones seleccionados, en base a los parámetros insertados en la pestaña siguiente.

### 2. Parámetros (Parametri)

En la pestaña *Parámetros (Parametri)* es posible elegir, con los flags correspondientes, cómo tratar los eventuales artículos no codificados o sin almacén y causal presentes dentro del documento. Las opciones disponibles son:

- **Ignora la recepción que contenga artículos no codificados (Ignora il ricevimento contenente articoli non codificati)**: no permite la carga parcial del documento si éste contiene al menos un artículo no codificado.  
- **Ignora los artículos no codificados de la recepción (Ignora gli articoli non codificati del ricevimento)**: permite la carga parcial del documento omitiendo los artículos no codificados.

- **Ignora la recepción que contenga artículos sin alm./caus. (Ignora il ricevimento contenente articoli senza mag./caus.)**: no permite la carga parcial del documento si éste contiene al menos un artículo sin almacén y causal.  
- **Ignora los artículos de la recepción sin alm./caus. (Ignora gli articoli del ricevimento senza mag./caus.)**: permite la carga parcial del documento omitiendo los artículos que no tengan almacén y causal.  
- **Utiliza los siguientes valores para los artículos sin alm./caus. (Utilizza i seguenti valori per gli articoli senza mag./caus.)**: asegura la carga completa del documento. Para todos los artículos encontrados sin almacén y causal en las recepciones seleccionadas, establece los datos insertados en los campos siguientes: *Almacén (Magazzino)* y *Causal (Causale)*.

:::important Ricorda (Ricorda)
Si en [Parámetros de pedidos de proveedores (Parametri ordini fornitori)](/docs/configurations/parameters/purchase/purchase-orders-parameters) > pestaña Carga (Carico) el flag **Prioridad de almacén y causal de carga (Priorità magazzino e causale di carico)** está activo, siempre se utilizarán el *Almacén (Magazzino)* y la *Causal (Causale)* insertados en los parámetros, ignorando los presentes en el recepción de mercancías para cada línea de artículo; de lo contrario, tendrán prioridad los insertados en el documento.  
:::

### 3. Rollback (Rollback)

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de registro ejecutadas.

Los datos en las cuadrículas inferiores, **Recepción de Mercancías (Ricevimento merci)** y **Registro (Registrazione)**, corresponden al registro de carga seleccionado en la cuadrícula superior (después de filtrar los datos). Además, en estas dos cuadrículas, existe la posibilidad de visualizar el recepción de mercancías y su registro de almacén mediante doble clic en la fila.

#### Botones específicos  
> **Búsqueda (Ricerca)**: permite buscar las facturas cargadas. El resultado de este procedimiento se visualiza en las cuadrículas de resultado.  
> **Rollback (Rollback)**: permite cancelar todo el registro de carga seleccionado.