---
title: crea picking
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
La gestión de picking de Fluentis está diseñada para optimizar el proceso de selección de artículos del almacén. Esta funcionalidad permite a los usuarios generar listas de picking de manera eficiente, comenzando desde los diferentes tipos de picking configurables en el sistema. A través de la creación de un picking, los operadores pueden seleccionar los artículos a despachar, definiendo detalles cruciales como la cantidad y la ubicación de picking.

El procedimiento de gestión de picking consta de diferentes interfaces que permiten visualizar y filtrar los pedidos de clientes, facilitando el cumplimiento total o parcial de los pedidos a través de una gestión automatizada de la información relacionada con los artículos. Además, el sistema automatiza el número de identificación del picking, basándose en los parámetros preconfigurados, garantizando así la trazabilidad y el orden en las operaciones.

Gracias a funcionalidades como el monitoreo del estado de cumplimiento de las líneas, el registro de lotes y números de serie, y la integración con documentos de transporte como DDT y facturas, la gestión de picking de Fluentis ofrece una experiencia operativa completa y flexible. Esto permite a las empresas mejorar la eficiencia logística, reducir errores durante el picking y garantizar una mejor satisfacción del cliente.
:::

La forma se abre a través de:  
 -  la ruta **Logística > Picking > crea picking** 

o bien a través de 

 - el botón **Nuevo** que se encuentra en la forma [Búsqueda de picking](/docs/logistics/picking/search-picking).

## 1. Datos obligatorios

**Tipo de picking**:  predefinido en *Configuración > Tablas > Logística > Tipos de picking*. Este campo determina el rango de numeración del documento que se está ingresando y propone automáticamente el número de picking en base a la fecha de ingreso y al último número ingresado;  

**Cuenta**: representa al cliente/proveedor de referencia (no es obligatorio);  

**Número**: se propone automáticamente en función del tipo, pero se puede modificar manualmente siempre respetando la regla de progresión entre la fecha y el número;  

**Fecha/Hora**: se proponen automáticamente la fecha y hora actuales, pero pueden ser modificadas manualmente siempre cumpliendo con la regla de progresión entre la fecha y el número.

**Estado**: representa el estado del documento (que puede ser *Terminado*, *Por verificar* o *Suspendido*).

**Estado de cumplimiento**: puede asumir los siguientes valores: *No cumplido*, *Cumplido*, *Parcialmente cumplido* o *Forzado a cumplir*; este estado se refiere al estado de cumplimiento de las líneas individuales, por lo que, por ejemplo, si a través de la gestión de selección se cumple también una sola línea, el **Estado de cumplimiento** pasará de *No cumplido* a *Parcialmente cumplido*.    

:::note Nota
Cabe señalar que la columna *Documento* presente en [Búsqueda de picking](/docs/logistics/picking/search-picking), se refiere al estado del picking y no al de las líneas, por lo que solo pasará a estado cumplido cuando se haya creado el DDT o la factura.
:::

#### Botón específico

> **Cumplimiento por orden**: permite ingresar los artículos dentro del picking cumpliendo un pedido de cliente. Al presionar el botón, se abrirá una máscara donde es posible filtrar los pedidos de los clientes relacionados con el cliente en cuestión. Así es posible cumplir total o parcialmente un pedido completo o una línea.

## 2. Cabecera

#### Datos necesarios para la movimentación del almace (movimentazione del magazzino)  

**Fecha de picking de almacén**: representa la fecha en la que se debe hacer el registro de almacén;  
**Usuario**: representa el código de usuario de referencia para el picking actual. En el caso de los pickings de transferencia, es necesario especificar el **Almacén de salida y de destino**: información útil para los pickings de transferencia;  
**Ubicación**: representa el lugar donde cargar los artículos;  
**Cliente/proveedor**: representa la cuenta para la que realizar el movimiento a almacén.

## 3. Artículos

En la cuadrícula de ingreso se deben ingresar los artículos especificando **Clase**, **Código de artículo** y **Cantidad de picking**. También es posible ingresar una **Unidad de medida alternativa** con la cantidad correspondiente. En el campo **Almacén** se define el almacén de movimentación y en el campo **Causa** la causa correspondiente. Además, es posible especificar la **Ubicación** desde la cual se recogerá el artículo ingresado.

### Lotes

La pestaña, activa solo si el artículo seleccionado en la cuadrícula se gestiona por lotes, permite la entrada del número de lote y la cantidad correspondiente.

La sección Números de serie, activa solo si el artículo seleccionado en la cuadrícula se gestiona por número de serie, permite la entrada del número de serie que se asignará al artículo en cuestión.

### Datos adicionales de artículo

Permite ingresar y visualizar los *Datos adicionales* relacionados con la línea individual.           
Para una descripción más detallada sobre los datos adicionales, se remite al artículo [Datos adicionales (Extra data)](/docs/configurations/utility/extra-data/extradata/new-extradata).

### Órdenes de producción vinculadas

Si el artículo está vinculado a una orden de producción, esta pestaña permite ver toda la información relacionada con la orden en sí.

### Documentos adjuntos

Permite adjuntar y visualizar los documentos relacionados con los artículos individuales.  

### Selección

Esta pestaña permite visualizar las líneas seleccionadas a través de la [Gestión de selección (Gestione spunta)](/docs/logistics/wms/sales/check-row-management) del WMS.    
En caso de que no se utilice el **WMS**, también es posible ingresar nuevas líneas de artículos seleccionados manualmente. 
La **Gestión de selección** sirve para confirmar las líneas del picking realmente recogidas por el operador en el almacén; por lo tanto, si en esta tabla hay al menos una línea seleccionada, los procedimientos de creación del DDT y la Factura solo tomarán en cuenta estas líneas.         
Si no hay presente ni una línea en la tabla de **Gestión de selección**, entonces los procedimientos de creación del DDT y la Factura tomarán en cuenta todas las líneas presentes en el picking.

Para detalles sobre el funcionamiento común de las formas, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).