---
title: Creación de facturas de compra a partir de la recepción de mercancías
sidebar_position: 2
---

El procedimiento se abre a través de la ruta **Compras > Facturas de compra > Procedimientos > Creación de facturas a partir de la recepción de mercancías**

### Filtro

Ofrece la posibilidad de ingresar filtros para buscar las recepciones, seleccionarlas y crear la factura. Es posible filtrar por: número de documento, fecha, cuenta, tipo de documento, artículo y proyecto.

- **Número y fecha de factura**: permiten especificar el número interno y la fecha relacionada a la factura que se generará con el procedimiento. Si no se valoran, el campo *número interno* de la factura estará vacío y el procedimiento utilizará la fecha actual.

*Botón específico*:
> **Facturas de compra de la salida de recibo de mercancías**: después de haber configurado los parámetros y seleccionado las líneas a valorar, la factura puede ser creada mediante el uso de este botón.

### Parámetros

En esta pestaña, el usuario tiene la opción de configurar los parámetros para la creación de la factura.

*Datos obligatorios*:

- **Tipo de factura de compra**: indica el tipo de documento a utilizar para la creación de la factura.
- **IVA**: indica la [Tasa de IVA](/docs/configurations/tables/finance/vat-rates) que se debe insertar en las líneas de artículo de la factura.
- **Tipo de volumen de compras**: debe configurarse en las líneas de artículo de la factura.

*Datos opcionales*:
> **Recalcular centros de costo/ingresos**: permite elegir si se desea recalcular los centros de costo/revenue al momento de la creación de la factura.

### Rollback

Ofrece la posibilidad de buscar, visualizar y anular las operaciones realizadas.

Para anular una operación, es suficiente seleccionar la fila correspondiente a la factura que se desea eliminar en la cuadrícula superior y hacer clic en el botón **Rollback** ubicado en la barra de ribbon.

A cada fila de la cuadrícula superior (que contiene número, fecha y usuario que creó la factura) corresponden una o más filas en las cuadrículas inferiores **facturas** y **recibos**. En estas dos cuadrículas, mediante doble clic en la fila correspondiente, el usuario puede abrir y visualizar la factura recién creada o la recepción.