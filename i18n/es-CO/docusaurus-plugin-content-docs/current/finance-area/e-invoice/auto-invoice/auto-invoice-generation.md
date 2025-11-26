---
title: Generación automática de autofactura
sidebar_position: 4
ai_generated: true
---
:::note NOTA:
Las siguientes instrucciones se refieren al procedimiento para la generación automatizada de autofacturas de venta creadas con el fin de comunicar al SDI, mediante el circuito de facturación electrónica, los datos de las compras previamente comunicadas a través del derogado procedimiento conocido como "Esterometro".
:::

En el momento de guardar la registración contable<!-- registrazione contabile -->, Fluentis generará los documentos automáticos configurados en la causale<!-- causale -->: es decir, tanto el asiento contable<!-- giroconto contabile --> para neutralizar el IVA como la autofactura en las ventas. Al cerrar la ventana se mostrarán dos mensajes, el de apertura de la registración automática de giroconto<!-- registrazione automatica di giroconto --> y el nuevo mensaje de visualización de la autofactura.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation1.png)

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation2.png)

En la autofactura generada automáticamente: en el campo del cedente se encuentra el proveedor extranjero y, en las referencias, el número y la fecha de la factura del proveedor

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation3.png)

La factura ya está impresa y contabilizada (ya que ya existe el asiento contable automático<!-- giroconto contabile automatico --> para registrarla).  
En las líneas hay un artículo no codificado, con la descripción tomada de la descripción del movimiento<!-- descrizione movimento --> de la registración contable<!-- registrazione contabile --> de origen, por el imponible IVA<!-- imponibile iva --> de la registración y la tasa de la línea.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation4.png)

De este modo, ya estamos listos dentro del documento para ejecutar el cambio de estado de envío al SDI de la autofactura.  
Cualquier modificación en la registración de origen recalculará, si la factura de venta aún no ha sido objeto de creación de archivo SDI, tanto el asiento contable<!-- giroconto contabile --> como la autofactura en las ventas. La operación de actualización automática no se ejecuta tampoco en caso de que, en la causale<!-- causale contabile -->, se haya marcado la opción 'No recalcular la registración automática'<!-- Non ricalcolare la registrazione automatica -->.

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation5.png)

La eliminación de la registración original (también el rollback<!-- rollback --> de la contabilización que la creó) eliminará la autofactura en las ventas, si ésta no ha sido objeto de creación de archivo SDI.

### **CASOS PARTICULARES**<!-- CASI PARTICOLARI -->

A) En caso de factura de compra mixta, con parte de reverse charge interno y parte no, la registración contable<!-- registrazione contabile --> tendrá una o más líneas de IVA con la opción 'Excluir de causales automáticas'<!-- Escludi da causali automatiche --> y estas no serán incluidas ni en el giro automático<!-- giro automatico --> ni en la autofactura

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation6.png)

B) En caso de compra intracomunitaria con deducibilidad parcial, es posible indicar en el campo 'IVA para causales automáticas'<!-- Iva per causali automatiche --> qué tasa se utilizará en la registración automática de giro<!-- registrazione automatica di giro -->. Esta tasa también se utilizará en la autofactura de venta

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation7.png)

C) Compra de servicios extranjeros  
En este caso, la compra será registrada con causale<!-- causale --> sin IVA. Aquí se puede configurar así: en la causale<!-- causale --> sin IVA que registra estos servicios es posible indicar la autofactura TD17 que se creará en las ventas, sin una causale<!-- causale automatica --> automática

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation8.png)

Será necesario indicar en el proveedor la tasa de IVA que se debe emplear en la autofactura de venta, luego en la registración contable<!-- registrazione contabile --> deberá estar el proveedor en el encabezado (testata<!-- testata -->) y en el total de encabezado el valor del servicio facturado:

![](/img/it-it/finance-area/e-invoice/auto-invoice/autoinv-creation9.png)

Dado que la causale<!-- causale fornitore --> del proveedor no tiene una causale<!-- causale automatica --> automática sino solo el tipo de factura a crear, la autofactura creada no tendrá activado el flag ‘Contabilizada’<!-- Contabilizzata --> para que el usuario pueda contabilizarla desde las ventas.

### OTRAS CONTABILIZACIONES<!-- ALTRE CONTABILIZZAZIONI -->
Los procedimientos de contabilización de facturas de compra, la contabilización de honorarios y la registración desde archivo de compra SDI comprueban todas esta nueva configuración de la causale contabile<!-- causale contabile --> para ejecutar automáticamente la creación de los documentos de venta tal como se mostró en el caso de registraciones manuales.
En el caso de contabilización desde archivo de compra SDI, la registración contable<!-- registrazione contabile --> estará ligada al archivo SDI: en este caso la autofactura tendrá completados automáticamente, además de las referencias al número/fecha de factura, también el protocolo SDI original.