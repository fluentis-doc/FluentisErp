---
title: Creación de la lista de recepción
sidebar_position: 2
keywords:
- Nota de entrega
- Recepción de mercancías
---

El procedimiento se abre a través de la ruta **Creación de la lista de recepción**

### Filtro

Ofrece la posibilidad de ingresar filtros para buscar las recepciones, seleccionarlas y crear la Nota de entrega.
 Filtro
> **Nota de entrega no. / fecha**: permite especificar la fecha y el número de la Nota de entrega que se generará con el procedimiento.

### Parámetros

*Datos obligatorios*:

- **Tipo de Nota de entrega de compra**: indica el tipo de documento a utilizar para la creación de la Nota de entrega.  
- **Iva**: indica la [Tasa de IVA](/docs/configurations/tables/finance/vat-rates) que se debe insertar en las líneas de artículo de la Nota de entrega 
- **Tipo de volumen de compras**: debe configurarse en las líneas de artículo de la Nota de entrega. 

*Datos opcionales*:  
> **Recalcular centros de costo/ingresos**: permite elegir si se desea recalcular los centros de costo/ingreso en el momento de la creación de la Nota de entrega.

### Reversión

Ofrece la posibilidad de buscar, visualizar y anular las operaciones realizadas.

Para anular una operación, basta con seleccionar la línea correspondiente a la Nota de entrega a eliminar en la cuadrícula superior y hacer clic en el botón **reversión** ubicado en la cinta de opciones.

A cada línea de la cuadrícula superior (que contiene el número, la fecha y el usuario que creó la Nota de entrega.) le corresponden una o más líneas en las cuadrículas inferiores **Notas de entrega** y **Recepción de mercancías**. En estas dos cuadrículas, mediante un doble clic en la línea deseada, el usuario puede visualizar la Nota de entrega recién creado o la recepción de mercancías de la cual se generó.