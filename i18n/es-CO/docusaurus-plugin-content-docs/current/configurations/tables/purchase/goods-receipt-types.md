---
title: tipi ricevimento merci
sidebar_position: 4
---

La tabla se abre a través de la ruta **Tablas (Tabelle) > Compras (Acquisti) > tipi ricevimento merci (Tipi Ricevimento merci)** y se utiliza para determinar las propiedades de una recepción de mercancías.

Los campos presentes son:

**codice**: código del tipo de recepción de mercancías.  

**descrizione**: descripción del tipo de recepción de mercancías.  

**bolla di consegna**: si está activo, el sistema permite la generación de un DDT a partir de la recepción de mercancías. Si no está activo, no será posible generar el DDT a partir de la recepción de mercancías, por lo que las operaciones de carga en almacén y registro de DDT permanecerán no vinculadas.  

**fattura**: si está activo, el sistema permite la generación de una factura a partir de la recepción de mercancías. Si no está activo, no será posible generar la factura a partir de la recepción de mercancías, por lo que la operación de carga en almacén quedará no vinculada.  

**evasione quantità articolo non sommata**: si está configurado, en el momento en que se cumplan líneas de pedido con cantidades parciales en la misma recepción de mercancías, este indicador permitirá reportar las cantidades cumplidas del pedido divididas por línea de artículo sin sumar las cantidades.  

**numerazione**: determina la [Numeración](/docs/configurations/tables/fluentis-numerations) y la correspondiente **descrizione** que está asociada al *Tipo de recepción de mercancías (Tipo ricevimento merci)*.  

**controllo qualità**: los *tipos de recepción (tipi Ricevimento)* que tienen este indicador activo son visibles en el formulario [Importar artículos a controlar (Importa articoli da controllare)](/docs/quality/item-control/items-control/item-control-import/) ubicado en el área *qualità*.  

**Gestión de activos (Gerstione cespiti)**: este indicador permite habilitar la [Gestión de activos (Gestione cespiti)](/docs/finance-area/fixed-assets/general-overview) para ese tipo de recepción y seleccionar el **tipo operazione** que se desea realizar, que en el caso de las compras será un *costo originario*.