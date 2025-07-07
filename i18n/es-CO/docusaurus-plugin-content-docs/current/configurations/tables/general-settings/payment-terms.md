---
title: Términos de Pago
sidebar_position: 10
---

:::tip[Inicio Rápido]
La tabla está relacionada con el procedimiento de [**Inicio Rápido**](/docs/guide/fast-start).

En caso de que se desee configurar manualmente, consulte la lista de chequeo de la página enlazada.
:::

La tabla contiene las soluciones de pago que se utilizarán en el sistema para el cálculo de los vencimientos y valores de madurez abiertos.

:::danger Atención
La correcta inserción de una solución de pago requiere completar tanto la cuadrícula superior como la de detalle que define el cálculo de los días de vencimiento. A pesar de que el programa permite guardar sin la cuadrícula de detalle, una solución creada de esta manera no será utilizable.
:::

### Cuadrícula superior

**Solución / Descripción**: Representa el código y la descripción de la dilación de pago a aplicar.

**Liquidación mensual**: el indicador activo lleva la dilación de pago al fin de mes después de aplicar el número de días definidos en la cuadrícula de detalle inferior.

**Liquidación semanal**: el indicador activo lleva la dilación de pago al viernes siguiente a la fecha obtenida después de aplicar el número de días definidos en la cuadrícula de detalle inferior.

**Días**: número de días a añadir al fin de mes para obtener el día fijo de vencimiento (la configuración correcta implica definir en la parte inferior el número de días de dilación, incluso cero si es el caso, luego se lee el indicador de fin de mes y finalmente se añaden los días adicionales más allá del fin de mes. Para normalizar el cálculo, se recomienda también asociar el indicador para el calendario comercial que convierte todos los meses a 30 días).

**DL Art 62**: indicador que identifica las dos cuotas de 30 y 60 días que se utilizarán para el cálculo de los vencimientos de pago en facturas que contienen mercancías perecederas de acuerdo con el art.62 del Decreto Ley 24 de enero de 2012 n.1.

[**Ver registros de clientes y proveedores**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information).

**País**: filtro para hacer visible esta solución de pago solo a las compañías de la base de datos que tengan la nacionalidad especificada (útil ya que la tabla, al ser básica, es visible para todas las empresas de la misma base de datos).


### Cuadrícula inferior

A nivel de fraccionamiento, es posible repartir en porcentaje sobre las diversas cuotas el imponible, el IVA y los gastos del documento (el % de gastos no se aplica directamente en los registros de contabilidad general). En caso de que el porcentaje se deje en cero, ***Fluentis*** repartirá de manera uniforme sobre el número de cuotas presentes.

**Comercial**: con esta opción podemos ingresar solo múltiplos de 30 días en el campo correspondiente, que serán gestionados como un solo mes.

Un caso típico es un vencimiento a 30 días fin de mes, cuando la fecha de la factura es el 31/01: si aplicamos 30 días de calendario (por lo tanto, sin el indicador 'comercial'), terminaremos con un vencimiento el 02/03 y, por lo tanto, el fin de mes llevará el vencimiento al 31/03, es decir, esencialmente 60 días después y no 30 como se entendía por el nombre. Si, en cambio, está presente el indicador comercial, los 30 días se gestionarán de hecho como 1 mes más + fin de mes, por lo que del 31/01 se irá correctamente al 28 o 29 de febrero según el calendario.

### Idiomas 

Para cada tipo de pago seleccionado en la cuadrícula superior, es posible definir descripciones en diferentes idiomas: utilizables para impresiones personalizadas.