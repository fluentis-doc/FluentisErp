---
title: Fórmulas de actualización de políticas de precios/descuentos
sidebar_position: 4
ai_generated: true
---

En esta pantalla es posible vincular las reglas entre los documentos de compra y venta, de manera que se modifique el precio de los artículos automáticamente cuando el proveedor envía el nuevo catálogo.  
En la primera cuadrícula se encuentran el **Código** y la **Descripción** de las fórmulas.  
En la segunda cuadrícula, en cambio, se encuentran los documentos de origen, los documentos de destino y las fórmulas. Es posible aplicar hasta 5 operaciones para una misma fila. Solo se consideran las columnas con contenido; aquellas dejadas en blanco no serán actualizadas ni tomadas como fuente de la modificación. Por lo tanto, el usuario debe completar solo las columnas de su interés para origen, destino, operando y valor del operando. A continuación se analizan las columnas de la segunda cuadrícula.  
**Destino tipo lista de precios de venta**: contiene el tipo de lista de precios de venta destinataria de la modificación, cuando se aplique la fórmula presente en esa fila;  
**Cuenta/subcuenta/descripción destino lista de precios de venta**: contiene la lista de precios personalizada destinataria de la modificación;  
**Destino tipo lista de precios proveedores**: contiene el tipo de lista de precios de proveedores destinataria de la modificación;  
**Cuenta/Subcuenta/Descripción destino lista de precios proveedor**: contiene la lista de precios personalizada de compra destinataria de la modificación;  
**Origen tipo lista de precios de venta**: contiene la tipología de lista de precios de venta de origen, a la cual se aplicará el Operando;  
**Cuenta/subcuenta/descripción origen cliente**:  contiene la lista de precios personalizada a considerar como origen;  
**Origen tipo lista de precios proveedor**: contiene el tipo de lista de precios proveedor de origen;  
**Cuenta/subcuenta/descripción origen proveedor**: contiene la lista de precios personalizada de origen;  
**Costo origen almacén<!-- magazzino -->**: este campo se debe completar si se quiere considerar como origen el costo medio, último o estándar del artículo;  
**Operando N**: al documento considerado como Origen se le aplicará la operación seleccionada en este combo box entre +, -, *, / o %;  
**Valor N**: en este campo puede ingresar un valor manual a aplicar según el operando seleccionado;  
**Valor Propiedad N**: en este campo puede ingresar un campo para sumar/restar, etc., según el operando seleccionado; este campo excluye el anterior: la suma/resta/división, etc., puede ser de un valor manual o de un valor de otro campo; haciendo doble clic en este campo, se abre el Navegador de objetos desde el cual seleccionar la propiedad a considerar como factor de la operación; las dos últimas filas del Navegador de objetos son los flags **AddedValue** y **AddedPercentage**, que sirven para reportar estos valores desde la lista de precios del proveedor;  
**Recuperar descuento**: este flag transfiere al documento de destino los descuentos de la lista seleccionada;  
**Recuperar descuento de proveedor preferente**: este flag recupera el descuento de la lista del proveedor preferente por defecto.