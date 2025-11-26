---
title: Tipos de documento, Numeración y Tipos de Factura
sidebar_position: 2
ai_generated: true
---

:::note NOTA:
Las siguientes instrucciones se refieren al procedimiento de generación automatizada de las auto-facturas de venta creadas con el fin de comunicar al SDI, a través del circuito de facturación electrónica, los datos sobre las compras previamente comunicados mediante la obligación derogada conocida como "Esterometro".
:::

Es necesario verificar que, en los tipos de documento contable<!-- tipi documento contabili -->, se hayan codificado los tipos de autofacturas necesarias:

![](/img/it-it/finance-area/e-invoice/auto-invoice/doc-types.png)

La creación de la autofactura en las ventas generará un nuevo documento de venta, con su propio número: para evitar influencias en la emisión de los documentos de venta normales, se sugiere crear tipos de facturas de venta<!-- tipi fatture di vendita --> específicos para cada tipo de autofactura a emitir y numeradores coherentes con los registros IVA<!-- registri iva --> de ventas donde se protocolizan los asientos automáticos contables<!-- giroconti automatici contabili --> de estas compras intra/reverse.

Por ejemplo, si se prevé un único registro donde registrar los asientos automáticos tanto de las compras intra como de las compras en reverse charge interno, entonces será necesario crear un único numerador de facturas<!-- numeratore fatture --> y dos tipos de factura<!-- tipi fatture --> que lo utilicen; por el contrario, si para cada caso hay un registro independiente, será necesario prever un numerador para cada uno de estos. En el caso de que se quiera utilizar el procedimiento en el transcurso del año, el numerador inicial deberá corresponder con el próximo protocolo IVA<!-- protocollo iva --> a asignar en cada uno de estos registros.

![](/img/it-it/finance-area/e-invoice/auto-invoice/numeration.png)

:::danger ATENCIÓN<!-- ATTENZIONE -->
El SDI no es capaz de reconocer la diferencia entre TD01 y TD18 (por ejemplo), la única diferencia que reconoce es entre TD01 y TD04 (notas de crédito). Por lo tanto, es recomendable definir una fórmula en el numerador que genere un sufijo en la numeración para diferenciar los varios tipos de documento y evitar el rechazo por numeración duplicada.

Se remite a la página de numeradores de Fluentis<!-- numeratori Fluentis --> recordando **a título de ejemplo** que una fórmula (campo *Fórmula número<!-- Formula numero -->* en la cabecera del numerador) podría ser Number.ToString() + "/RC" para las autofacturas generadas por una compra en reverse charge.
:::

Los tipos de facturas<!-- tipi fatture --> para estas autofacturas tendrán asociados los numeradores correspondientes, así como la causa contable<!-- causale contabile --> (la misma que el asiento automático<!-- giroconto automatico --> en las ventas) y el tipo de documento contable<!-- tipo documento contabile -->:

![](/img/it-it/finance-area/e-invoice/auto-invoice/invoice-type.png)