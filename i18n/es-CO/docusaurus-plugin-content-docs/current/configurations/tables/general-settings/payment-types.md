---
title: Tipos de pago
sidebar_position: 7
---
:::tip[Inicio Rápido]
La tabla está interesada en el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página enlazada.
:::

La tabla contiene los tipos de pago que se deben utilizar en el sistema de gestión.

Permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

Para insertar nuevos registros, haga clic en la primera fila vacía en la cuadrícula superior o presione el botón **Nuevo**. 

## Tipo de pago 

**Pago**: es el código alfanumérico de reconocimiento;  

**Descripción**: es la descripción del pago, normalmente reportada en varios impresos del ciclo activo/pasivo;  

**Monto de estampilla**: importe del timbre;  

**Porcentaje de Pago**: permite asociar un tipo (llamándolo desde la tabla Tipos de Descuento) y el porcentaje de descuento asociado a las líneas del artículo del documento en relación con el tipo de pago; por ejemplo, es posible definir un descuento del 5% en caso de que se utilice el tipo de pago Efectivo.

:::note Nota
Este es un descuento que reduce la base imponible de la línea, junto con otros descuentos derivados de listas de precios y condiciones comerciales en el registro.
:::

**Tipo de descuento financiero / Valor de descuento financiero**: relacionados con la fecha de vencimiento de la factura, que no afectan el total del documento pero se aplican al momento de registro del cobro.

**Factura de naturaleza**: permite definir el tipo de factura eventualmente conectado o de otro tipo de pago. Actualmente, el campo tiene solo valor informativo sin automatizaciones particulares relacionadas, excepto para el tipo Comprobante bancario que identifica el tipo de pago adecuado para la posterior gestión de la creación de la factura. 

**Código intra serv.**: código del pago a ingresar en las declaraciones intrastat.

**Código para facturas electrónicas**: código identificativo del tipo de pago para las facturas electrónicas y las facturas a la administración pública (por ejemplo, MP01, MP02, etc... ver instrucciones ministeriales para la elaboración de facturas electrónicas).

**País**: filtro para hacer visible ese tipo de pago solo a las empresas de la base de datos que tengan la nacionalidad especificada (útil ya que la tabla, al ser básica, es visible para todas las empresas de la misma base de datos).

### Idiomas 

Para cada tipo de pago seleccionado en la cuadrícula superior, se pueden definir descripciones en idioma: utilizables para impresiones personalizadas.

### Tipos de facturas

Para cada tipo de pago seleccionado en la cuadrícula superior, es posible preconfigurar el tipo de factura a crear desde la madurez/vencimiento en el módulo *Cartera de facturas*.

:::danger Atención
La asociación pago - factura sirve para que en la máscara de creación de facturas solo se visualicen los valores de madurez coherentes para la creación de la factura. Por ejemplo, la configuración correcta podría ser asociar al tipo de pago RiBa la tipología de factura Recibo Bancario, y al tipo de pago Cambiale el tipo de factura Cambiale; de este modo, no se visualizarán, por ejemplo, los valores de madurez abiertos con el tipo de pago Transferencia en la máscara de creación de facturas desde los valores de madurez o las fechas, evitando generar datos incoherentes.
:::

Para todo lo no detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).