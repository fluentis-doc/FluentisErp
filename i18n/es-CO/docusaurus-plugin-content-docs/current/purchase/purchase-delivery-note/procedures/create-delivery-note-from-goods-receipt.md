---
title: creazione ddt da ricevimento merci
sidebar_position: 2
keywords:
- DDT
- Recepción de mercancías (Ricevimento merci)
---

El procedimiento se abre a través de la ruta **creazione ddt da ricevimento merci**

### Filtro

Ofrece la posibilidad de ingresar filtros para buscar las recepciones, seleccionarlas y crear el DDT.

> **ddt di consegna n./data**: permite especificar la fecha y el número del DDT que se generará con el procedimiento.

### Parámetros

*Datos obligatorios (Dati obbligatori)*:

- **tipo bolla consegna acquisto**: indica el tipo de documento a utilizar para la creación del DDT.  
- **iva**: indica la [Tasa de IVA (Aliquota IVA)](/docs/configurations/tables/finance/vat-rates) que se debe insertar en las líneas de artículo del DDT.  
- **tipo fatturato acquisti**: debe configurarse en las líneas de artículo del DDT.  

*Datos opcionales (Dati opzionali)*:  
> **ricalcola centri di costo/ricavo**: permite elegir si se desea recalcular los centros de costo/ingreso en el momento de la creación del DDT.

### Retroceso (Rollback)

Ofrece la posibilidad de buscar, visualizar y anular las operaciones realizadas.

Para anular una operación, basta con seleccionar la línea correspondiente al DDT a eliminar en la cuadrícula superior y hacer clic en el botón **rollback** ubicado en la cinta de opciones.

A cada línea de la cuadrícula superior (que contiene el número, la fecha y el usuario que creó el DDT) le corresponden una o más líneas en las cuadrículas inferiores **ddt di consegna** y **ricevimento merci**. En estas dos cuadrículas, mediante un doble clic en la línea deseada, el usuario puede visualizar el DDT de entrega recién creado o la recepción de mercancías de la cual se generó.