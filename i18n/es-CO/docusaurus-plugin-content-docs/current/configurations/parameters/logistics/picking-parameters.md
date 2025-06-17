---
title: Seleccionar Parámetros
sidebar_position: 6
---

:::important ¿Para qué sirve? 
A través de esta funcionalidad, los usuarios pueden configurar y adaptar el sistema según las diferentes necesidades operativas, asegurando un funcionamiento fluido y coherente de las actividades logísticas.

En esta sección, es posible asignar almacenes y causas de descarga predeterminadas, decidir si controlar la disponibilidad de artículos y definir si la inserción de información como el código del operador debe ser obligatoria. Otras opciones incluyen la gestión de artículos por lotes o números de serie y el control de las cantidades al momento de la creación del picking. Este módulo de parametrización no solo facilita la operatividad, sino que también garantiza que los procedimientos cumplan con las políticas empresariales y las normativas vigentes, permitiendo una gestión efectiva y precisa del almacén.
:::

El formulario se abre a través de la ruta **Seleccionar Parámetros** y permite realizar todas las parametrizaciones relacionadas con el funcionamiento de los pickings o listas de recolección. Solo después de haber parametrizado adecuadamente esta máscara es posible utilizar el módulo de Picking.

#### Botón específico
> **Restaurar**: botón para restablecer el estado anterior de los parámetros.

## General 

En esta pestaña se pueden parametrizar las generalidades de la gestión de Picking. Es posible asignar un almacén y una causa para utilizar por defecto para la descarga de los Pickings. Para hacerlo, basta con marcar **Parámetros de selección por prioridad** e indicar un **Almacén** y una **Causal**.  
También es posible elegir si, al momento de la descarga, **Controlar la disponibilidad**, **Excluir órdenes de venta** de la disponibilidad y/o ser bloqueados en caso de que la disponibilidad no satisfaga la cantidad a mover (**Disponibilidad obligatoria**).

Si se elige controlar la disponibilidad, es posible determinar cómo debe calcularse esta última en función del **subcontratista**, la **producción planificada**, las **compras**, la **producción liberada**, las **ventas** y/o el **almacén**.

Como configuraciones generales, es posible elegir si al momento de la creación del picking es obligatorio ingresar el **código de usuario**, si la **Numeración progresiva para el año**, si el **Código de usuario que confirma el picking** es obligatorio.

En caso de que haya gestiones particulares de los artículos, se puede activar el **tamaño y color de la gestión**.

En la sección **gestión de lotes y números de serie** se pueden activar los siguientes indicadores:

**Gestión de Lotes / Número de serie**: habilita la posibilidad de gestionar lotes y números de serie a través de las respectivas cuadrículas.

**Proponer lotes/Número de serie**: si está activo, al modificar una cantidad en la línea de picking, si el artículo se gestiona por lotes con tipo de recolección FIFO o por fecha de vencimiento, los lotes se proponen automáticamente en la respectiva cuadrícula.

**Chequeo Automático de Movimiento**: si está activo, en el formulario *Gestión de Verificación* realiza la descarga automática de la línea.  

**Vista de cuadrícula de ejecución**: si está activo, el indicador habilita la modalidad de cuadrícula en el formulario de cumplimiento de picking.

**Vista del árbol de ejecución**: si está activo, el indicador habilita la modalidad de árbol en el formulario de cumplimiento de picking.      

## WMS Móvil 

En esta pestaña se pueden definir los parámetros para el funcionamiento de los Pickings en WMS Mobile.

**Tipo de cuenta de transportista**: representa el transportista que se incluirá en los pickings creados por WMS Mobile.

También se pueden elegir diferentes tipos de picking.

Además, es recomendable especificar las causas que se utilizarán para los siguientes movimientos:

- descarga UDC para confirmación de transferencia;

- causa propuesta para descarga Picking;

- descarga para almacén de salida;

- carga para almacén de destino;

- causa de descarga del almacén de trabajo en contra.

Para todo lo que no se detalle en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).