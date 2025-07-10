---
title: ordini interni ddmrp
sidebar_position: 4
---

Los **ordini interni ddmrp** son pedidos emitidos por una instalación (cualquier instalación excluida la fábrica) hacia otra instalación (incluida la fábrica) que deberá proporcionar la mercancía solicitada.

La instalación solicitante actuará como cliente frente a la instalación proveedora, la cual actuará como proveedor.

Estos pedidos tienen, por lo tanto, la doble naturaleza de pedidos de aprovisionamiento en la instalación que debe recibir la mercancía, y de pedidos que generan necesidad en la instalación que debe enviar la mercancía.

El encabezado del pedido contiene el almacén de destino, que corresponde a la instalación que debe recibir la mercancía y que, por lo tanto, la solicita, y el almacén de origen que corresponde a la instalación que debe proporcionar la mercancía.

El sistema de planificación genera pedidos internos planificados como resultado del cálculo de la posición de flujo neto (NFP), que ya están completos con todos los datos necesarios y que pueden convertirse en pedidos reales a través del procedimiento correspondiente (realizando eventualmente algunas modificaciones).

Los **pedidos internos DDMRP planificados** no generan necesidad en las instalaciones proveedoras; solo los confirmados generan necesidad.

Esta elección hace que las propuestas de pedido DDMRP no generen necesidad en las instalaciones proveedoras mientras no sean analizadas y transformadas en pedidos reales por los responsables correspondientes, de acuerdo con un proceso de planificación por niveles.

Por esta razón, la fábrica es la unidad logística que debe ser planificada en última instancia, después de haber planificado y confirmado los pedidos de las unidades logísticas de distribución y venta de mercancías.

Obviamente, se pueden crear pedidos internos DDMRP manualmente sin restricciones.

La fecha del pedido se considera como la fecha de necesidad (equivalente a la fecha de inicio de un pedido de producción), igual para cada artículo del pedido; la fecha de entrega, en cambio, se especifica para cada artículo del pedido ya que puede diferir.

De hecho, si la instalación de destino es abastecida por una instalación que no es la fábrica, el tiempo de entrega de los artículos en el destino es el mismo para todos y es igual al **lead time** ingresado en la tabla de instalaciones para la instalación de destino (salvo excepciones establecidas en la tabla de parámetros DDMRP para algún artículo).

Si, por otro lado, la instalación proveedora es la fábrica, normalmente el **DLT (Delivery Lead Time)** de cada artículo en la instalación de destino varía porque se debe a la suma del tiempo de transporte desde la fábrica (igual para todos los artículos a **buffer** en la unidad de destino), y del **DLT** del artículo en la fábrica que es igual al tiempo necesario para su producción, si el artículo no es un **buffer** en esta última.

Para cada artículo en el pedido se puede ver la cantidad ordenada, enviada y recibida.

Cuando el tiempo de envío no es despreciable, durante el transporte se actualizará la cantidad enviada, pero no la recibida, que se actualizará únicamente al momento de la recepción de la mercancía.

Las causales de depósito y de extracción se especifican en la tabla de instalaciones (estructura logística).