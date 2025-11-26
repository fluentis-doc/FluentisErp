---
title: Órdenes internas DDMRP
sidebar_position: 4
ai_generated: true
---

Las Órdenes Internas DDMRP<!-- Ordini Interni DDMRP --> son órdenes emitidas por una instalación<!-- facility --> (cualquier instalación<!-- facility --> excepto la fábrica), hacia otra instalación<!-- facility --> (incluida la fábrica) que deberá suministrar la mercancía solicitada.

La instalación<!-- facility --> solicitante actuará como cliente frente a la instalación<!-- facility --> proveedora, que actuará como proveedor.

Estas órdenes tienen por tanto la doble naturaleza de órdenes de aprovisionamiento en la instalación<!-- facility --> que debe recibir la mercancía, y de órdenes que generan necesidad<!-- fabbisogno --> en la instalación<!-- facility --> que debe enviar la mercancía.

El encabezado de la orden contiene el almacén<!-- magazzino --> de destino, que corresponde a la instalación<!-- facility --> que debe recibir la mercancía y por lo tanto la solicita, y el almacén<!-- magazzino --> de procedencia que corresponde a la instalación<!-- facility --> que debe suministrar la mercancía.

El sistema de planificación<!-- pianificazione --> genera órdenes internas planificadas<!-- ordini interni pianificati --> como resultado del cálculo de la posición de flujo neta (NFP<!-- posizione di flusso netta (NFP) -->), que ya contienen todos los datos necesarios y que pueden ser transformadas en órdenes reales mediante el procedimiento correspondiente (realizando eventualmente modificaciones).

Las órdenes internas DDMRP<!-- ordini interni Ddmrp --> planificadas no generan necesidad<!-- fabbisogno --> en las instalaciones<!-- facilities fornitrici --> proveedoras, solo las confirmadas generan necesidad<!-- fabbisogno -->.

Esta elección hace que las propuestas de orden DDMRP<!-- proposte d'ordine Ddmrp --> no generen necesidad<!-- fabbisogno --> en las instalaciones proveedoras<!-- facility fornitrici --> hasta que no son analizadas y transformadas en órdenes reales por los responsables correspondientes, según un proceso de planificación por niveles.

Por esta razón, la fábrica es la unidad logística que debe planificarse al final, después de haber planificado y confirmado las órdenes de las unidades logísticas de distribución y venta de mercancías.

Obviamente se pueden crear órdenes internas DDMRP<!-- ordini interni Ddmrp --> manualmente sin restricciones.

La fecha de la orden se considera como fecha de necesidad<!-- fabbisogno --> (equivalente a la fecha de inicio de una orden de producción<!-- ordine di produzione -->), igual para cada artículo de la orden, mientras que la fecha de entrega se especifica para cada artículo de la orden ya que puede diferir.

De hecho, si la instalación de destino<!-- facility di destinazione --> es abastecida por una instalación que no es la fábrica, el plazo de entrega de los artículos en el destino es el mismo para todos y corresponde al lead time<!-- lead time --> introducido en la tabla de Instalaciones<!-- Facilities --> para la instalación de destino<!-- facility destinazione --> (a menos que existan excepciones establecidas en la tabla de parámetros DDMRP<!-- tabella parametri Ddmrp --> para algún artículo).

Si, en cambio, la instalación proveedora<!-- facility fornitrice --> es la fábrica, normalmente el DLT<!-- DLT --> de cada artículo en la instalación de destino<!-- facility destinazione --> varía porque es el resultado de la suma del tiempo de transporte desde la fábrica (igual para todos los artículos a buffer en la unidad de destino), y del DLT del artículo en la fábrica que corresponde al tiempo necesario para su producción, si el artículo no es un buffer en esta última.

Para cada artículo en la orden se muestra la cantidad ordenada, enviada y recibida.

Cuando el tiempo de envío no es despreciable, durante el transporte se actualizará la cantidad enviada pero no la recibida, que se actualizará únicamente en el momento de la recepción de la mercancía.

Las causales<!-- causali --> de depósito<!-- versamento --> y retirada<!-- prelievo --> se especifican en la tabla de las instalaciones<!-- facilities (struttura logistica) -->.