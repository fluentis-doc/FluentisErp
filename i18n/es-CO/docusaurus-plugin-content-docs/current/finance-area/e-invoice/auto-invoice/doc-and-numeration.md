---
title: Tipos de documento, Numeración y Tipos de Facturación (Tipi documento, Numerazione e Tipi Fatt.)
sidebar_position: 2
---
:::note NOTA:
Las siguientes instrucciones se refieren al procedimiento de generación automatizada de las autofacturas de venta creadas para comunicar al SDI, a través del circuito de la facturación electrónica, los datos sobre las compras previamente comunicados a través del cumplimiento derogado conocido como "Esterómetro".
:::

Es necesario verificar que, en los tipos de documentos contables, se hayan codificado los tipos de autofacturas necesarios:

![](/img/it-it/finance-area/e-invoice/auto-invoice/doc-types.png)

La creación de la autofactura en las ventas generará un nuevo documento de venta, con su propio número: para evitar influencias en la emisión de los documentos de venta normales, se sugiere crear tipos de facturas de venta específicos para cada tipo de autofactura que se emita y numeradores coherentes con los registros de IVA de ventas donde se protocolan los asientos automáticos contables de estas compras intra/reverse.

Por ejemplo, si se prevé un único registro donde registrar los giros automáticos tanto de las compras intra como de las compras en reverse charge interno, será necesario crear un único numerador de facturas y dos tipos de facturas que lo utilicen; en cambio, si para cada caso se ha previsto un registro separado, es necesario prever un numerador para cada uno de estos. En caso de desear utilizar el procedimiento durante el año, el numerador inicial deberá corresponder al próximo protocolo de IVA que se atribuirá en cada uno de estos registros.

![](/img/it-it/finance-area/e-invoice/auto-invoice/numeration.png)

:::danger ATENCIÓN
El SDI no puede reconocer la diferencia entre TD01 y TD18 (por ejemplo), la única diferencia que reconoce es entre TD01 y TD04 (notas de crédito). Por lo tanto, es oportuno definir una fórmula en el numerador que genere un sufijo en la numeración para diferenciar los varios tipos de documento evitando el rechazo por numeración duplicada.

Se remite a la página de numeradores de Fluentis recordando **a título de ejemplo** que una fórmula (campo *formula numero* en el encabezado del numerador) podría ser Number.ToString() + "/RC" para las autofacturas generadas por una compra en reverse charge.
:::

Los tipos de facturas para estas autofacturas tendrán asociados los numeradores correspondientes, así como la causal contable (la misma del giroconto automático en las ventas) y el tipo de documento contable:

![](/img/it-it/finance-area/e-invoice/auto-invoice/invoice-type.png)