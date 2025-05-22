---
title: carico ricevimento merci
sidebar_position: 4
---

El procedimiento se abre a través de la ruta **Compras > Recepción de mercancías > Carga recepción de mercancías** y permite ejecutar/restaurar las operaciones de registro en el almacén de los artículos presentes en la *Recepción de mercancías*.  

La máscara se compone de tres pestañas: *Filtro*, *Parámetro* y *Rollback*.     

### 1. Filtro

En esta pestaña, el usuario tiene la posibilidad de ingresar filtros para buscar la recepción de mercancías que se cargará en el almacén.  
Es posible filtrar por: *fornitore*, *Número de recepción (Numero ricevimento)*, *Desde/Hasta fecha de recepción (Da/A data ricevimento)*.

- **data registrazione**: permite especificar la fecha relacionada con el registro en el almacén.

:::important Recuerda
Si en los [Parámetros de pedidos a proveedores (Parametri ordini fornitori)](/docs/configurations/parameters/purchase/purchase-orders-parameters) > pestaña Carga el indicador **crea registrazione con la data del documento** está activo, el registro en el almacén siempre se realizará con la *data ricevimento* ingresada en el encabezado del documento, ignorando la *data registrazione magazzino* ingresada en este formulario.  
Si la *data carico* no está valorada, el registro en el almacén se creará con la *data registrazione magazzino* ingresada en este formulario o con la fecha actual, si el campo *data registrazione* no está valorado.
:::

#### Botones específicos  
> **ricerca**: permite buscar las recepciones para registrar en el almacén.  
> **carico**: permite ejecutar la carga de las recepciones seleccionadas, según los parámetros ingresados en la pestaña siguiente.


### 2. Parámetros

En la pestaña *Parámetros*, es posible elegir, con los indicadores correspondientes, cómo tratar los posibles artículos no codificados o sin almacén y causal presentes dentro del documento. Las opciones disponibles son:  

- **ignora il ricevimento contenente articoli non codificati**: no permite el cargue parcial del documento si este contiene al menos un artículo no codificado.  
- **ignora gli articoli non codificati del ricevimento**: permite el cargue parcial del documento dejando de lado los artículos no codificados.  

- **ignora il ricevimento contenente articoli senza mag./caus.**: no permite el cargue parcial del documento si este contiene al menos un artículo sin almacén y causal.  
- **ignora gli articoli del ricevimento senza mag./caus.**: permite el cargue parcial del documento dejando de lado los artículos que no tienen almacén y causal.  
- **utilizza i seguenti valori per gli articoli senza mag./caus.**: asegura el cargue completo del documento. Para todos los artículos encontrados sin almacén y causal en las recepciones seleccionadas, establece los datos ingresados en los campos inferiores: *magazzino* y *causale*.

:::important Recuerda
Si en los [Parámetros de pedidos a proveedores (Parametri ordini fornitori)](/docs/configurations/parameters/purchase/purchase-orders-parameters) > pestaña Carga el indicador **priorità magazzino e causale di carico** está activo, siempre se utilizarán el *magazzino* y la *causale* ingresados en los parámetros, ignorando los que están presentes en la recepción de mercancías para cada línea de artículo; de lo contrario, tendrán prioridad los ingresados en el documento.  
:::

### 3. Rollback

En esta pestaña, el usuario tiene la posibilidad de buscar, visualizar y anular las operaciones de registro realizadas.

Los datos en las cuadrículas en la parte inferior, **ricevimento merci** y **registrazione**, corresponden al registro de carga seleccionado en la cuadrícula superior (después de haber filtrado los datos). Además, en estas dos últimas cuadrículas, hay la posibilidad de visualizar la recepción de mercancías y su registro en el almacén mediante doble clic en la fila.

#### Botones específicos  
> **ricerca**: permite buscar las facturas cargadas. El resultado de este procedimiento se visualiza en las cuadrículas de resultados.  
> **Rollback**: permite eliminar el registro completo de carga seleccionado.