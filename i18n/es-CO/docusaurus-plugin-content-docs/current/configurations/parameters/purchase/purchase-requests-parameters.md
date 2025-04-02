---
title: parametri richieste di acquisto
sidebar_position: 5
---

Los parámetros de las solicitudes de compra permiten la configuración básica para gestionarlas correctamente y de acuerdo con las solicitudes específicas de cada empresa.

#### Botones (Pulsanti)

> **salva**: permite guardar los parámetros configurados.  
> **ripristina**: permite restaurar los parámetros a los valores iniciales.

### General (Generale)

**costo zero in assenza di listini**: el precio se busca en las listas de precios; si no se encuentra y este indicador está activo en la línea de solicitud, se establece el precio en 0. Si no está activo y tampoco lo está el otro parámetro, y no se encuentra el precio en la lista, busca el costo último en el registro del artículo y si no lo encuentra, establece en 0.

**costo ultimo in assenza di listini**: cuando está activo, si no encuentra el precio en la lista y no encuentra el costo último en el registro de artículos, toma el máximo entre los precios presentes en las solicitudes de compra del mismo proveedor y artículo.

**esplodi distinta base**: si está activo, al ingresar un artículo, se reemplazará por el primer nivel de su lista de materiales, si existe. Entonces, en lugar del artículo “producto terminado”, el pedido se poblará con la lista de materiales del artículo ingresado.

### Analítica (Analitica)

En esta pestaña se especifica con qué prioridad recuperar el centro de costo (CdC) o centro de beneficio (CdP) en la línea del documento.

Es posible modificar las prioridades utilizando los botones:

> **sposta su** y **sposta giù**

**Valores predeterminados (Valori di default)**: el CDC o CDP se recupera del tipo de facturación si está presente. Para más detalles, consulte la tabla [Tipo de Facturación de Compras (Tipo Fatturato Acquisti)](/docs/configurations/tables/purchase/purchase-invoices-type). Si no está presente en el tipo de facturación, el sistema lo buscará en el *Registro del proveedor (Anagrafica fornitore)*. Si tampoco está allí, se buscará en el *anagrafica articolo*.