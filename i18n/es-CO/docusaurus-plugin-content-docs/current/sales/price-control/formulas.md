---
title: formule di aggiornamento politiche prezzi/sconti
sidebar_position: 4
---

En este formulario es posible enlazar las reglas entre los documentos de compra y venta, de modo que el precio de los artículos se modifique automáticamente cuando el proveedor envía el nuevo catálogo.  
En la primera cuadrícula están presentes el **codice** y la **descrizione** de las fórmulas.  
En la segunda cuadrícula, sin embargo, están presentes los documentos de origen, los documentos de destino y las fórmulas. Se pueden aplicar hasta 5 operaciones para una misma fila. Solo se consideran las columnas con contenido; aquellas dejadas vacías no se actualizarán ni se tomarán en cuenta como fuente de modificación. El usuario debe completar solo las columnas de su interés para origen, destino, operando y valor operando. Analicemos las columnas de la segunda cuadrícula.  
**Destino tipo listado de venta (Destinazione tipo listino di vendita)**: contiene el tipo de listado de venta destinatario de la modificación, cuando se aplique la fórmula presente en esta fila;  
**Cuenta/subcuenta/descripción destino listado de venta (Conto/sottoconto/descrizione destinazione listino di vendita)**: contiene el listado personalizado destinatario de la modificación;  
**Destino tipo listado de proveedores (Destinazione tipo listino fornitori)**: contiene el tipo de listado de proveedores destinatario de la modificación;  
**Cuenta/subcuenta/descripción destino listado proveedor (Conto/Sottoconto/Descrizione destinazione listino fornitore)**: contiene el listado personalizado de compra destinatario de la modificación;  
**Origen tipo listado de venta (Origine tipo listino di vendita)**: contiene la tipología de listado de venta de origen, al cual se le aplicará el operando;  
**Cuenta/subcuenta/descripción origen cliente (Conto/sottoconto/descrizione origine cliente)**: contiene el listado personalizado a considerar como origen;  
**Origen tipo listado de proveedor (Origine tipo listino fornitore)**: contiene el tipo de listado de proveedor de origen;  
**Cuenta/subcuenta/descripción origen proveedor (Conto/sottoconto/descrizione origine fornitore)**: contiene el listado personalizado de origen;  
**Costo origen almacén (Costo origine magazzino)**: este campo debe completarse si se quiere considerar como origen el costo medio, último o estándar del artículo;  
**Operando N (Operando N)**: al documento considerado como origen se le aplicará la operación seleccionada en esta caja combinada entre +, -, *, / o %;  
**Valor N (Valore N)**: en este campo es posible ingresar un valor manual a aplicar según el operando seleccionado;  
**Valor Propiedad N (Valore Proprietà N)**: en este campo es posible ingresar un campo para sumar/restar, etc., según el operando seleccionado; este campo excluye el anterior: la suma/resta/división, etc., puede ser de un valor manual o de un valor de otro campo; haciendo doble clic en este campo, se abre el Navegador de objetos desde el cual seleccionar la propiedad a considerar como parte de la operación; las últimas dos filas del Navegador de objetos son los indicadores **Valor Añadido (AddedValue)** y **Porcentaje Añadido (AddedPercentage)**, que sirven para devolver estos valores del listado de proveedores;  
**ripresa sconto**: este indicador devuelve en el documento de destino los descuentos del listado seleccionado;  
**Recuperación de descuento de proveedor preferente (Ripresa sconto da fornitore preferenziale)**: este indicador recupera el descuento del listado del proveedor preferente por defecto.