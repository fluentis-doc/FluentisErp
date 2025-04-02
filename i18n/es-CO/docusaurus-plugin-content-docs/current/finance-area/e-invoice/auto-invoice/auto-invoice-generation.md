---
title: Generación automática de autofactura (Generazione automatica autofattura)
sidebar_position: 4
---
:::note NOTA:
Las siguientes instrucciones se refieren al procedimiento de generación automatizada de las autofacturas de venta creadas con el fin de comunicar al SDI, a través del circuito de la facturación electrónica, los datos sobre las compras previamente comunicadas mediante el derogado cumplimiento conocido como "Esterometro".
:::

Al momento de guardar el registro contable, Fluentis creará los documentos automáticos establecidos en el motivo: tanto el asiento contable para neutralizar el IVA como la autofactura en la venta. Al cerrar la máscara, se devolverán entonces dos mensajes: el de apertura del registro automático de asiento contable y el nuevo mensaje de visualización de la autofactura.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation1.png)

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation2.png)

En la autofactura generada automáticamente: en el campo del cedente tenemos al proveedor extranjero, en los referencias el número y la fecha de la factura del proveedor.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation3.png)

La factura ya está impresa y contabilizada (ya que hay un asiento contable automático que la registra). En las líneas tenemos un artículo no codificado, con la descripción tomada de la descripción del movimiento del registro contable original, para la base imponible del IVA del registro y la alícuota de la línea.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation4.png)

Por lo tanto, ya estamos listos dentro del documento para realizar el cambio de estado de envío al Sdi de la autofactura. Cualquier modificación en el registro original recalculará, si la factura de venta no ha sido objeto de creación del archivo Sdi, tanto el asiento contable como la autofactura en las ventas. La operación de actualización automática no se ejecutará incluso si en el motivo contable se ha establecido el indicador 'No recalcular el registro automático'.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation5.png)

La cancelación del registro original (también el retroceso de la contabilización que lo creó) eliminará la autofactura en las ventas, si esta no ha sido objeto de creación del archivo Sdi.

### **casi particolari**

A) En el caso de factura de compra mixta, con parte de inversión del cargo interno y parte no, el registro contable tendrá una o más líneas de IVA con el indicador ‘Excluir de motivos automáticos’ y estas no se incluirán en el asiento automático ni en la autofactura.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation6.png)

B) En el caso de compras intra con deducibilidad parcial, es posible indicar en el campo ‘IVA para motivos automáticos’ cuál será la alícuota a utilizar en el registro automático del asiento. Esta alícuota también se utilizará en la autofactura de venta.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation7.png)

C) Compra de servicios extranjeros.  
En este caso, la compra se registrará con un motivo no IVA. En este caso, se puede configurar de la siguiente manera: en el motivo no IVA que registra estos servicios, es posible indicar la autofactura TD17 a crear en las ventas, sin un motivo automático.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation8.png)

Es necesario indicar en el proveedor la alícuota de IVA a utilizar en la autofactura de venta, luego, en el registro contable, debe tener en la cabecera al proveedor y en el total de cabecera el valor del servicio facturado:

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation9.png)

Dado que el motivo del proveedor no tiene un motivo automático, sino solo el tipo de factura a crear, la autofactura creada no tendrá el indicador ‘Contabilizada’ para permitir al usuario contabilizarla desde las ventas.

### OTRAS CONTABILIZACIONES (ALTRE CONTABILIZZAZIONI)
Los procedimientos de contabilización de facturas de compra, la contabilización de compensaciones y el registro desde archivos de compras de Sdi verifican todas esta nueva configuración del motivo contable para realizar automáticamente la creación de los documentos de venta, tal como se mostró en el caso de registros manuales.  
En el caso de contabilización desde archivos de compras de Sdi, el registro contable estará vinculado al archivo de Sdi: en este caso, la autofactura tendrá automáticamente valorados, además de las referencias al número / fecha de la factura, también el protocolo original de Sdi.