---
title: Creación de facturas de compra a partir de la recepción de mercancías (Creazione fatture di acquisto da ricevimento merci)
sidebar_position: 2
---

El procedimiento se abre a través de la ruta **Compras > Facturas de compra > Procedimientos > Creación de facturas a partir de la recepción de mercancías (Acquisti > Fatture di acquisto > Procedure > Creazione fatture da ricevimento merci)**

### Filtro

Ofrece la posibilidad de ingresar filtros para buscar las recepciones, seleccionarlas y crear la factura. Es posible filtrar por: número de documento, fecha, cuenta, tipo de documento, artículo y proyecto.

- **Número y fecha de factura (Numero e data fattura)**: permiten especificar el número interno y la fecha relacionada a la factura que se generará con el procedimiento. Si no se valoran, el campo *número interno* de la factura estará vacío y el procedimiento utilizará la fecha actual.

*Botón específico*:
> **creazione fatture d'acquisto da ricevimento merci**: después de haber configurado los parámetros y seleccionado las líneas a valorar, la factura puede ser creada mediante el uso de este botón.

### Parámetros

En esta pestaña, el usuario tiene la opción de configurar los parámetros para la creación de la factura.

*Datos obligatorios (Dati obbligatori)*:

- **tipo fattura acquisto**: indica el tipo de documento a utilizar para la creación de la factura.
- **IVA**: indica la [Tasa de IVA (Aliquota IVA)](/docs/configurations/tables/finance/vat-rates) que se debe insertar en las líneas de artículo de la factura.
- **tipo fatturato acquisti**: debe configurarse en las líneas de artículo de la factura.

*Datos opcionales (Dati opzionali)*:
> **ricalcola centri di costo/ricavo**: permite elegir si se desea recalcular los centros de costo/revenue al momento de la creación de la factura.

### Rollback

Ofrece la posibilidad de buscar, visualizar y anular las operaciones realizadas.

Para anular una operación, es suficiente seleccionar la fila correspondiente a la factura que se desea eliminar en la cuadrícula superior y hacer clic en el botón **Rollback** ubicado en la barra de ribbon.

A cada fila de la cuadrícula superior (que contiene número, fecha y usuario que creó la factura) corresponden una o más filas en las cuadrículas inferiores **fatture** y **ricevimenti**. En estas dos cuadrículas, mediante doble clic en la fila correspondiente, el usuario puede abrir y visualizar la factura recién creada o la recepción.