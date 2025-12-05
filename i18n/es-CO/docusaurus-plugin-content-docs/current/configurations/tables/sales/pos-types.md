---
title: Tipos de POS
sidebar_position: 25
---

:::tip[FAst Start]
La tabla está contemplada en el procedimiento de [**Fast Start**](/docs/guide/fast-start)

En caso de que desee configurar manualmente, consulte la lista de verificación en la página enlazada.
:::

La tabla se abre a través de la ruta **Tablas > Ventas > Tipos de POS**.

### Búsqueda de POS

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, simplemente haga clic en el botón **Buscar** para ver los resultados dentro de la cuadrícula de resultados.

Para modificar/visualizar un tipo POS, basta con hacer doble clic en la fila deseada o presionar el botón **Modificar**.

Para insertar nuevos registros es necesario presionar el botón **Nuevo**, que abrirá un nuevo formulario de inserción.

### Inserción/Modificación POS

En este formulario se deben ingresar todos los datos relativos al nuevo tipo de POS que se desea crear, como:

**Tipo y descripción**: en estos campos se debe definir el tipo y la descripción del POS;

**Numeración**: en este campo se debe ingresar el código de numeración apropiado. Para información detallada sobre la numeración del sistema de gestión, consulte el artículo [Numeraciones Fluentis](/docs/configurations/tables/fluentis-numerations);

**Predeterminado**: si está activo, este indicador marca el tipo de POS predeterminado que se propone al crear un nuevo POS;

**Notas**: este es un campo de texto libre en el que se pueden ingresar notas descriptivas que luego se visualizarán en las respectivas impresiones;

**Precio incluido IVA**: si está activo, los precios presentes en la oferta se mostrarán incluyendo el IVA;

**A cuenta**: si está activo, este indicador indica que el POS es de tipo anticipo y podrá ser anulado con una transacción de un tipo de POS ordinario;

**Servidor P.O.S/Base de datos/Tabla**: en estos campos se debe seleccionar el servidor, la base de datos y la tabla donde leer y/o escribir los datos de los POS;

**Tabla enlaces documentos**: tabla donde leer y/o escribir los datos de los documentos vinculados a los POS;

**UM arr.**: Unidad de medida utilizada en la creación de DN y facturas desde POS;

**IVA de llegada/Descripción IVA**: código de IVA utilizado en la creación de DN y facturas desde POS;

**Punto de venta**: punto de venta en el que se crean los POS;

**Contador**: en este campo se debe indicar el código de la caja a asociar a los POS;

**Cat. merc.**: en este campo se indica la categoría de mercancía registrada en el orden;

**IVA**: código de IVA a utilizar en los POS;

**Almacén**: en este campo debe indicarse el almacén de compromiso de la mercancía contenida en POS de este tipo;

**Causal**: en este campo debe indicarse la razón de movimiento de la mercancía comprometida contenida en POS de este tipo;

**Tipo de pago**: en este campo se propone el tipo de pago propuesto en los POS de este tipo;

**Término de Pago**: en este campo debe indicarse la solución de pago propuesta en los POS de este tipo;

**Lista de precios**: en este campo se indica el código general de lista de precios del que se extraen los precios de los artículos a ingresar en el POS;

**Fecha de validez**: aquí se mostrará la fecha de validez de la lista de precios general;

**Descarga automática al cerrar la consideración**: si está activo, cuando el POS es impreso también se descargará automáticamente del almacén, de lo contrario deberá hacerse la descarga manual;

**Es necesaria la caja registradora**: si está activo, este indicador señala que para utilizar los POS es necesario conectar un registrador de caja para la impresión del recibo fiscal;

**Ver variantes**: si está activo, también se pueden usar las variantes de artículo;

**Ver atributos**: si está activo, también se pueden usar los atributos del artículo.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace: [Funcionalidades, botones y campos comunes](/docs/guide/common).