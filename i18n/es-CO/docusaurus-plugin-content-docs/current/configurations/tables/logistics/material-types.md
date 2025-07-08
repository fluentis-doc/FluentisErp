---
title: Tipos de material
sidebar_position: 6
---

La tabla se encuentra en la ruta **Tablas > Logística > Tipos de material**.

En esta tabla es posible gestionar la codificación de los diferentes *Tipos de material* de embalaje utilizados en la [Gestión de Reciclaje](/docs/sales/sales-flow/conai).

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de Tipos de material**

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, solo necesita hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de Tipos de material**

Para poder insertar nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.

En la cuadrícula superior se codifican los *tipi materiale*. Los campos obligatorios requeridos por el programa son el **Código** y la **Descripción**.

#### Campos específicos

> **Código de material reciclable**: código alfanumérico que indica el tipo de material del que está compuesto el embalaje (es decir, Acero, Aluminio, Papel, Madera, Plástico, etc.);  
> **Clase de ítem**: indica la [Clase](/docs/configurations/tables/logistics/item-class) a la que pertenece el artículo;  
> **Artículo para la tarifa de reciclaje**: indica un código de artículo ficticio a utilizar para la inserción de la línea *Tarifa de reciclaje* en factura (si no se indica un código de artículo, el material no será válido para la configuración de Reciclaje en los artículos de venta/compra);  
> **Descripción del artículo**: indica la descripción del *Artículo para impuesto de reciclaje*;  
> **Notas**: anotaciones libres.

En la cuadrícula inferior es posible definir los *Costos de reciclaje* asociados a cada material insertado en la tabla superior, es decir, las tarifas que se aplicarán dentro de los diversos *rangos de fechas*, con la **Unidad de medida** a aplicar: esta debe ser coherente con la unidad de medida que se utilizará dentro de los artículos de venta y los artículos ficticios reciclaje.

Para todo lo que no se detalla en este documento sobre el funcionamiento de la *Gestión de Reciclaje* en Fluentis, haga referencia al siguiente enlace [Gestión de Reciclaje](/docs/sales/sales-flow/conai).