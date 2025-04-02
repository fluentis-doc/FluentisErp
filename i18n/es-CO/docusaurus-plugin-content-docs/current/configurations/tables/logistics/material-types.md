---
title: tipi materiale
sidebar_position: 6
---

La tabla se encuentra en la ruta **Tablas > Logística > tipi materiale (Tabelle > Logistica > Tipi materiale)**.

En esta tabla es posible gestionar la codificación de los diferentes *tipi materiale* de embalaje utilizados en la [Gestión Conai](/docs/sales/sales-flow/conai).

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de tipi materiale (Ricerca Tipi materiale)**

El formulario se compone de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, solo necesita hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de tipi materiale (Inserimento Tipi materiale)**

Para poder insertar nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.

En la cuadrícula superior se codifican los *tipi materiale*. Los campos obligatorios requeridos por el programa son el **Código** y la **Descripción**.

#### Campos específicos (Campi specifici)

> **codice materiale conai**: código alfanumérico que indica el tipo de material del que está compuesto el embalaje (es decir, Acero, Aluminio, Papel, Madera, Plástico, etc.);  
> **classi articolo**: indica la [Clase (Classe)](/docs/configurations/tables/logistics/item-class) a la que pertenece el artículo;  
> **articolo per tassa di riciclo**: indica un código de artículo ficticio a utilizar para la inserción de la línea *Gasto Conai* en factura (si no se indica un código de artículo, el material no será válido para la configuración Conai en los artículos de venta/compra);  
> **descrizione articolo**: indica la descripción del *Artículo para impuesto de reciclaje*;  
> **note**: anotaciones libres.

En la cuadrícula inferior es posible definir los *costi di riciclo* asociados a cada material insertado en la tabla superior, es decir, las tarifas que se aplicarán dentro de los diversos *rangos de fechas (range di date)*, con la **unità di misura** a aplicar: esta debe ser coherente con la unidad de medida que se utilizará dentro de los artículos de venta y los artículos ficticios Conai.

Para todo lo que no se detalla en este documento sobre el funcionamiento de la *gestione conai* en Fluentis, haga referencia al siguiente enlace [Gestión Conai](/docs/sales/sales-flow/conai).