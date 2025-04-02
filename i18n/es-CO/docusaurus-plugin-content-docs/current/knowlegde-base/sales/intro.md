---
title: FAQ Ventas (FAQ Vendite)
sidebar_position: 1
---

<details>

  <summary>1. ¿Cómo se puede hacer que los precios de lista de los componentes de una lista se reflejen en las líneas de artículo de los pedidos, después de hacer clic en el botón de la barra de ribbon <b>Expandir el primer nivel de la lista</b>?</summary>
  
Es necesario activar el indicador "Proponer datos comerciales para lista base explotada manualmente", que se encuentra dentro de los Parámetros de pedidos de clientes. De esta manera, los datos comerciales se reflejan y, por ende, también los precios de lista de los componentes.

</details>

<details>

  <summary>2. ¿Cómo gestionar la <b>fecha de validez</b> de la pestaña de Listas en el registro del cliente?</summary>
  
La fecha de validez ingresada en la cuadrícula de la pestaña de Listas en el registro del cliente indica qué tipos de listas son válidas a partir de esa fecha para ese cliente. La recuperación de precios en los documentos debe saber en qué listas buscar el artículo.
Como primera condición, la lista a incluir en los documentos debe ser válida en esta fecha. 
Como segunda condición para la elección del tipo de lista a incluir en los documentos, la lista seleccionada debe tener la fecha de inicio de validez estrictamente menor que la fecha del documento.     
De esta manera, es posible crear todas las listas que se deseen y aplicarlas al cliente solo a partir de una fecha determinada.
Técnicamente, todas las listas creadas, para ser utilizadas en la búsqueda de precios, deben tener:            
1. la fecha de inicio de validez mayor o igual a la fecha de validez;       
2. la fecha de inicio de validez menor o igual a la fecha del documento;       
3. fecha de fin de validez mayor o igual a la fecha del documento o fecha de fin de validez nula;              
Entre todas las listas encontradas con estas condiciones se toma la que tenga el rango de validez más cercano a la fecha del documento.

</details>

<details>

  <summary>3. Si tengo más de <b>descuentos</b> en el mismo artículo en una lista, ¿cuál es la **prioridad**? </summary>
  
La prioridad considerada es la indicada en el tipo de descuento. Recordemos que el tipo de descuento es importante para la gestión de la prioridad y de la naturaleza del descuento (Imponible o por Cascada).

</details>

<details>

  <summary>4. ¿Es posible duplicar solo algunos artículos de la lista y no toda la lista? </summary>
  
Sí, es posible duplicar solo algunos artículos utilizando el procedimiento de “Duplicar y Mantenimiento de listas de venta” y seleccionando solo los artículos deseados.
El resultado será una nueva lista que contendrá solo los artículos modificados.
Para los demás artículos, permanecerá vigente la lista anterior, en ausencia de fecha de fin de validez.

</details>

<details>

  <summary>5. Para las facturas no hay el indicador <b>Control de disponibilidad</b>: ¿cómo podemos excluirlas del cálculo de necesidades? </summary>
  
Las facturas consideradas en las necesidades son:
- las facturas inmediatas, es decir, acompañatorias;
- las facturas que derivan de DDT si el DDT no ha sido descargado a almacén.

</details>

<details>

  <summary>6. ¿Para qué sirve el <b>Tipo de escalón</b> en las líneas de artículo de la lista? </summary>
  
El tipo de escalón ingresado en la línea de artículo de la lista se propone automáticamente en los documentos; de lo contrario, será el usuario quien elija manualmente el tipo de escalón que se aplicará a la línea.

</details>

<details>

  <summary>7. ¿Puedo exportar las facturas de venta a otro sistema de gestión, como el del contable, con BizLink? </summary>
  
Sí, es posible crear un parser dedicado para exportar los datos, como lo exige otro sistema de gestión.
Alternativamente, es posible utilizar directamente el archivo XML de la facturación electrónica, si el sistema de gestión que recibe la factura lo permite: Fluentis gestiona la creación de las facturas importando el archivo XML de la facturación electrónica.

</details>

<details>

  <summary>8. ¿Cómo se pueden establecer automáticamente los <b>gastos de cobro</b> para las riba en el sistema de gestión según el número de vencimientos? </summary>
  
Si el gasto tiene el indicador "Gasto de Cobro" y el tipo de pago tiene la naturaleza efecto = 0 (RIBA), por cada vencimiento de la solución de pago se añadirá el gasto de cobro.
Si hay más vencimientos, cada uno tendrá su propio gasto de cobro. 

</details>

<details>

  <summary>9. ¿Cuáles son las condiciones para gestionar el <b>código de barras</b> en los documentos? </summary>
  
Los pasos son los siguientes.     
1. En los Parámetros del documento de venta, active el indicador <b>Uso de código de barras</b>;                            
2. En el registro del artículo, inserte el <b>código de barras</b>;                    
3. En los documentos, inserte en la columna <b>Código de Barras</b> de la cuadrícula de artículos el código ingresado en el registro del cliente; si el programa reconoce el código, insertará automáticamente el artículo.

</details>

<details>

  <summary>10. ¿Dónde debe insertarse la <b>Marca</b> para que se refleje en los documentos de venta? </summary>
  
La Marca debe insertarse en la cuadrícula de artículos de las listas de venta para que se refleje en los documentos.

</details>

<details>

  <summary>11. ¿Es posible ocultar a un usuario un tipo determinado de factura? </summary>
  
Sí, mediante <b>Restricciones</b>. Estas impiden que los usuarios creen, visualicen o modifiquen ciertos tipos de documentos. A continuación, se muestra un ejemplo para impedir que un usuario utilice el tipo de factura con el código FVITDIF. Recordemos que también es necesario agregar la restricción en el perfil Arm del usuario, en la cuadrícula correspondiente.            

![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)

</details>

<details>

  <summary>12. La factura aparece como Descargada aunque no he realizado ningún movimiento de almacén, además el indicador Descargada está bloqueado y no se puede desmarcar. </summary>
  
En el caso de una factura creada a partir de un documento de transporte ya descargado, está presente el parámetro general VE-PurchaseInvoices_VerifyLoadStatusDDT que bloquea el indicador Descargada también en la factura.          

</details>

<details>

  <summary>13. ¿Cómo puedo poblar los Pesos en los resúmenes de la factura? </summary>
  
Para poder ver el resumen de los pesos es necesario activar el parámetro **Recalcular el transporte** en los Parámetros del documento. También será necesario seleccionar la unidad de medida correcta en los resúmenes para visualizar el valor.        

</details>

<details>

  <summary>14. ¿Por qué, si agrupo el procedimiento C.M.R. por Cuenta, no puedo establecer Destinatario y Destino? </summary>
  
Si se agrupa únicamente por la Cuenta, no se pueden establecer Destinatario y Destino porque más de una línea con el mismo cliente, pero diferentes destinatarios/destinos, crea una sola línea CMR. Por lo tanto, es necesario agrupar tanto por Destino como por Cuenta.        

</details>

<details>

  <summary>15. ¿Cómo puedo mantener en el DDT el Transportista ingresado en el pedido, si paso por Picking? </summary>
  
Si en la creación del DDT desde Picking se activa el parámetro “DDT agrupado por pedido único”, se reflejará el Transportista del pedido.

</details>

<details>

  <summary>16. ¿De qué depende la diferencia de importe entre la Impresión de Facturado y la Suma en la Búsqueda de facturas? </summary>
  
En la Búsqueda de facturas, el imponible en EUR también considera descuentos/multiplicaciones/gastos finales del documento, mientras que el facturado calcula solo los valores presentes en la lista de artículos.
En la Búsqueda de facturas están todos los Tipos de factura del filtro, mientras que en el Facturado solo los Tipos de factura que tienen el indicador 'En estadística' activo.

</details>