---
title: Preguntas frecuentes Compras
sidebar_position: 1
ai_generated: true
---

<details>

  <summary>1. ¿Por qué el campo <b>Descripción</b> del artículo proveedor es obligatorio mientras que para el cliente no lo es?</summary>
  
El cliente necesita saber cuál es su código, pero la descripción no es importante, ya que se utiliza el código en la impresión. En cambio, para el proveedor la descripción puede ser mucho más técnica y necesaria, siendo generalmente los datos importados.

</details>

<details>

  <summary>2. ¿Para qué sirve el <b>Tipo escalón</b> en las líneas de artículo de la lista de precios? </summary>
  
El tipo de escalón ingresado en la línea de artículo de la lista de precios se propone automáticamente en los documentos, de lo contrario será el usuario quien seleccione manualmente el tipo de escalón a aplicar a la línea. Recordamos que para un mismo artículo de la lista de precios es posible ingresar diferentes escalones de descuento.

</details>

<details>

  <summary>3. ¿Existe un control que permita evitar una doble carga de almacén<!-- magazzino --> tanto por ddt como por factura? </summary>
  
Sí, si una factura está vinculada a un ddt cargado o descargado, la factura no podrá cargarse/descargarse, a menos que en el tipo de factura esté activa la opción “Desvincular”: en este caso será posible mover tanto el ddt como la factura.

</details>

<details>

  <summary>4. ¿Cómo puedo conservar el histórico de precios anteriores de una lista de precios actualizada? </summary>
  
En este caso es necesario duplicar el documento.

</details>

<details>

  <summary>5. ¿Cuáles son las condiciones para utilizar la <b>Modificación masiva</b> en los Resúmenes de una factura de compras? </summary>
  
Las condiciones son:  
 1. El precio no debe tener IVA incluido;  
 2. Los artículos no deben tener descuentos;
 3. Los artículos deben tener una cantidad efectiva.

</details>

<details>

  <summary>6. ¿Cómo puedo impedir la modificación de la cantidad de artículos en documentos ya cargados en almacén<!-- magazzino -->? </summary>
  
Es necesario abrir los Parámetros iniciales de almacén<!-- magazzino --> correspondientes al año en curso y quitar la marca **Modificar cantidad** de la sección *Modificar reg. de almacén<!-- magazzino --> desde documentos*. Esto impedirá la modificación de la cantidad en la línea de documentos ya movidos en almacén<!-- magazzino -->.

</details>

<details>

  <summary>7. La factura aparece como Cargada aunque no he realizado ningún movimiento de almacén<!-- magazzino -->, además la opción de Cargada está bloqueada y no se puede quitar. </summary>
  
En el caso de una factura generada a partir de un documento de transporte ya cargado, está presente el parámetro general VE-PurchaseInvoices_VerifyLoadStatusDDT que bloquea la opción de Cargada también en la factura.          

</details>