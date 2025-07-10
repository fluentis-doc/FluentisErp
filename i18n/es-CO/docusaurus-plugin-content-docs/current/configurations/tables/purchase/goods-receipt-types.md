---
title: Tipos de Recepción de Mercancías
sidebar_position: 4
---

La tabla se abre a través de la ruta **Tablas > Compras > Tipos de Recepción de Mercancías** y se utiliza para determinar las propiedades de una recepción de mercancías.

Los campos presentes son:

**Código**: código del tipo de recepción de mercancías.  

**Descripción**: descripción del tipo de recepción de mercancías.  

**Nota de Entrega**: si está activo, el sistema permite la generación de una nota de entrega a partir de la recepción de mercancías. Si no está activo, no será posible generar la nota de entrega a partir de la recepción de mercancías, por lo que las operaciones de carga en almacén y registro de notas de entrega permanecerán no vinculadas.  

**Factura **: si está activo, el sistema permite la generación de una factura a partir de la recepción de mercancías. Si no está activo, no será posible generar la factura a partir de la recepción de mercancías, por lo que la operación de carga en almacén quedará no vinculada.  

**Cantidad de pedido no consumida**: si está configurado, en el momento en que se cumplan líneas de pedido con cantidades parciales en la misma recepción de mercancías, este indicador permitirá reportar las cantidades cumplidas del pedido divididas por línea de artículo sin sumar las cantidades.  

**Numeración**: determina la [Numeración](/docs/configurations/tables/fluentis-numerations) y la correspondiente **Descripción** que está asociada al *Tipo de recepción de mercancías*.  

**Control de calidad**: los *tipos de recepción* que tienen este indicador activo son visibles en el formulario [Elementos de importación para verificar](/docs/quality/item-control/items-control/item-control-import/) ubicado en el área *Calidad*.  

**Gestión de activos fijos**: este indicador permite habilitar la [Gestión de activos fijos](/docs/finance-area/fixed-assets/general-overview) para ese tipo de recepción y seleccionar el **Tipo de operación** que se desea realizar, que en el caso de las compras será un *Valor de compra*.