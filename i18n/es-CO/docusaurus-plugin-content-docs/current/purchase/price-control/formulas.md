---
title: Actualizar políticas de precios/fórmula de descuentos
sidebar_position: 2
---

En esta pantalla es posible vincular las reglas entre los documentos de compra y venta, de manera que se modifique automáticamente el precio de los artículos en los listados cuando el proveedor envía un nuevo catálogo.

En la primera cuadrícula se encuentran **código** y **descripción** de las fórmulas.

En la segunda cuadrícula se deben indicar los documentos de origen, los documentos de destino y las fórmulas. Es posible aplicar hasta 5 operaciones por la misma línea. Solo se consideran las columnas con contenido, aquellas que se dejan vacías no serán actualizadas ni tomadas en cuenta como fuente de la modificación. Por lo tanto, el usuario debe completar solo las columnas de su interés para origen, destino, operando y valor operando. Analicemos las columnas de la segunda cuadrícula.

- **Destino tipo listado de venta**: contiene el *Tipo listado de venta* de destino al cual se aplicará la fórmula presente en esta línea.  
- **Descripción destino listado de venta**: contiene el registro del cliente a cuyo nombre estará el listado personalizado destinatario de la modificación.  
- **Destino tipo listado de proveedores**: contiene el *Tipo listado de proveedores* destinatario de la modificación.  
- **Descripción destino listado proveedor**: contiene el registro del proveedor a cuyo nombre estará el listado destinatario de la modificación.  
- **Origen tipo listado de venta**: contiene la tipología de listado de venta de origen, al cual se aplicará el *Operando*.  
- **descrizione origine cliente**: contiene el listado personalizado a considerar como origen.  
- **Origen tipo listado proveedor**: contiene el tipo listado de proveedor de origen.  
- **descrizione origine fornitore**: contiene el listado personalizado de origen.  
- **Costo origen almacén**: este campo debe ser completado si se quiere considerar como origen el *costo medio*, *último* o *estándar* del artículo.  
- **Operando N**: a el documento considerado como *Origen* se le aplicará la operación seleccionada en esta caja combinada entre +, -, *, / o %.  
- **Valor N**: en este campo es posible ingresar un valor manual a aplicar según el operando seleccionado.  
- **Valor Propiedad N**: en este campo es posible ingresar un campo al que aplicar el operando seleccionado; este campo excluye el anterior: la suma/resta/división, etc. puede ser de un valor manual o de otro campo; al hacer doble clic en este campo, se abre el *Navegador de objetos* desde el cual seleccionar la propiedad a considerar como parte de la operación; las dos primeras líneas del Navegador de objetos son los indicadores **AddedValue (Valor Añadido)** y **AddedPercentage (Porcentaje Añadido)**, que sirven para reportar estos valores del listado del proveedor.  
- **Reanudación de descuentos**: este indicador reporta en el documento de destino los descuentos del Listado seleccionado. Si este indicador está activo, al crear un nuevo listado de venta mediante el procedimiento de *Creación de Listados Avanzada*, también se aplicarán los descuentos ingresados en la *Definición de políticas de descuentos* del documento de origen.  
- **Recuperación de descuento de proveedor preferencial**: este indicador recupera el descuento del listado del proveedor preferencial por defecto.