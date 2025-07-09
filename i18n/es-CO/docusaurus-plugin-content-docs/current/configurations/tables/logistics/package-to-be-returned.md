---
title: Paquete a ser devuelto
sidebar_position: 15
---

La tabla se encuentra en la ruta **Paquete a ser devuelto**.

En esta tabla es posible codificar los diferentes *Paquete a ser devuelto* que se utilizarán en la *Gestión de paquetes* en los documentos de compra, venta y trabajo por encargo.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de paquete a ser devuelto**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, simplemente haga clic en el botón **Buscar** para visualizar los resultados en la cuadrícula de resultados.

**Inserción de paquete a ser devuelto**

Para poder insertar nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera línea vacía o presionar el botón **Inserción**.  

Esta tabla contiene los artículos que se consideran *paquetes a ser devueltos* para la trazabilidad del inventario. El artículo ingresado en esta tabla debe tener como Naturaleza de artículo: *paquete* (la Naturaleza de artículo se inserta en el Registro de artículo, pestaña [Generalidad](/docs/erp-home/registers/items/create-new-item)).  
A través de los indicadores en la cuadrícula, es posible elegir en qué áreas el artículo será gestionable para ser movilizado.    

#### Datos obligatorios

> **Código**: es el código del *paquete a ser devuelto*;  
> **Descripción**: es la descripción del *paquete a ser devuelto*;  
> **Clase de ítem**: indica la [Clase](/docs/configurations/tables/logistics/item-class) a la que pertenece el artículo;  
> **Código de artículo**: indica el código del artículo.  

#### Campos específicos  

> **Uso en compras**: al activar este indicador, el envase será visible en los documentos del área de compras;  
> **Uso en subcontratación**: al activar este indicador, el envase será visible en los documentos del área de trabajo por encargo;  
> **Uso en ventas**: al activar este indicador, el envase será visible en los documentos del área de ventas.  

Finalmente, es posible insertar **Almacén** y **Plantilla** que se utilizarán para el artículo en cada área.

Una vez parametrizada esta tabla, en los documentos que lo contemplen, será posible abrir el formulario de paquete a ser devuelto con el botón de ribbon **Gestión de paquetes**. Este botón abrirá el procedimiento de *Gestión de paquetes*, ya completado con los paquetes definidos en la tabla *paquete a ser devuelto*, de modo que el usuario solo deba ingresar las cantidades.  

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).