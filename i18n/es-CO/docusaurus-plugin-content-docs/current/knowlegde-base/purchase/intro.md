---
title: FAQ Compras (FAQ Acquisti)
sidebar_position: 1
---

<details>

  <summary>1. ¿Por qué el campo <b>Descripción (Descrizione)</b> del artículo proveedor es obligatorio mientras que para el cliente no lo es?</summary>
  
El cliente necesita saber cuál es su código, pero la descripción no es importante, ya que se utiliza el código en el impreso. En cambio, para el proveedor, la descripción puede ser mucho más técnica y necesaria, ya que los datos son importados, por lo general.

</details>


<details>

  <summary>2. ¿Para qué sirve el <b>Tipo de tramo (Tipo scaglione)</b> en las líneas de artículos del listado?</summary>
  
El tipo de tramo insertado en la línea del artículo del listado se propone automáticamente en los documentos, de lo contrario, será el usuario quien elija manualmente el tipo de tramo a aplicar en la línea. Recordemos que para el mismo artículo de listado es posible insertar diferentes tramos de descuento.

</details>


<details>

  <summary>3. ¿Existe un control que permita evitar una doble carga de almacén de ddt y de factura?</summary>
  
Sí, si una factura está vinculada a un ddt cargado o descargado, la factura no podrá ser cargada/descargada, a menos que en el tipo de factura haya activo el indicador “Desvincular (Scollega)”: en este caso será posible mover tanto el ddt como la factura.

</details>


<details>

  <summary>4. ¿Cómo puedo conservar el historial de los precios anteriores de un listado actualizado?</summary>
  
En este caso, es necesario realizar una duplicación del documento.

</details>


<details>

  <summary>5. ¿Cuáles son las condiciones para utilizar la <b>Modificación masiva (Modifica massiva)</b> en los Resúmenes de una factura de compra?</summary>
  
Las condiciones son:       
 1. El precio no debe estar gravado por IVA;     
 2. Los artículos no deben tener descuentos;  
 3. Los artículos deben tener una cantidad efectiva.

</details>


<details>

  <summary>6. ¿Cómo puedo evitar la modificación de la cantidad de artículos en documentos ya cargados en almacén?</summary>
  
Es necesario abrir los Parámetros iniciales de almacén correspondientes al año en curso y desactivar el indicador **modifica quantità** en la sección *modifica reg. di magazzino da documenti*. Esto impedirá la modificación de la cantidad de línea en documentos ya movidos en el almacén.

</details>


<details>

  <summary>7. La factura aparece Cargada incluso si no he realizado ningún movimiento de almacén, además el indicador Cargada está bloqueado y no se puede desactivar.</summary>
  
En el caso de una factura creada a partir de un documento de transporte ya cargado, existe el parámetro general VE-PurchaseInvoices_VerifyLoadStatusDDT que bloquea el indicador Cargada también en la factura.          

</details>