---
title: FAQ Ventas
sidebar_position: 1
ai_generated: true
---

<details>

  <summary>1. ¿Cómo es posible hacer que los precios de Lista de los componentes de una Lista de Materiales<!-- Distinta --> se reflejen en las líneas de artículos de los pedidos<!-- Ordini -->, después de hacer clic en el botón de la cinta de opciones <b>Explota el primer nivel de la lista<!-- Esplodi il primo livello distinta --></b>?</summary>
  
Es necesario establecer la casilla de verificación "Proponer datos comerciales para lista base explotada manualmente", que se encuentra dentro de los Parámetros de pedidos de clientes<!-- Parametri ordini clienti -->. De esta manera, se trasladan los datos comerciales y, por lo tanto, también los precios de lista de los componentes.

</details>

<details>

  <summary>2. ¿Cómo gestionar la <b>fecha de validez</b><!-- data validità --> de la pestaña Listas de Precios<!-- Listini --> del maestro de clientes<!-- anagrafica cliente -->?</summary>
  
La fecha de validez ingresada en la cuadrícula de la pestaña Listas de Precios<!-- Listini --> en la ficha de cliente<!-- anagrafica cliente --> sirve para indicar qué tipos de listas de precios<!-- listini --> son válidas a partir de esa fecha para ese cliente. Al recuperar precios en los documentos, el sistema debe saber en qué listas de precios buscar el artículo.
Como primera condición, la lista de precios<!-- listino --> que se ingrese en los documentos debe ser válida en esa fecha.
Como segunda condición para la elección del tipo de lista de precios<!-- tipologia di listino --> a insertar en los documentos, la lista de precios<!-- listino --> seleccionada debe tener la fecha inicio de validez estrictamente menor a la fecha del documento.
De esta manera es posible crear todas las listas de precios<!-- listini --> que deseemos y aplicarlas al cliente solo a partir de una determinada fecha.
Técnicamente, todas las listas de precios<!-- listini --> que se creen, para ser utilizadas en la búsqueda de precios deben tener:            
1. fecha inicio de validez mayor o igual a la fecha de validez;       
2. fecha inicio de validez menor o igual a la fecha del documento;       
3. fecha de fin de validez mayor o igual a la fecha del documento, o bien fecha de fin de validez nula;              
Entre todas las listas de precios<!-- listini --> encontradas bajo estas condiciones, se toma la que tenga el rango de validez más cercano a la fecha del documento.

</details>

<details>

  <summary>3. Si tengo varios <b>descuentos</b><!-- sconti --> sobre el mismo artículo en una lista de precios, ¿cuál es la **prioridad**?</summary>
  
La prioridad considerada es la que se indica en el tipo de descuento<!-- tipo sconto -->. Recordamos que la tipología de descuento<!-- tipologia di sconto --> es importante para la gestión de la prioridad y de la naturaleza del descuento (Imponible o en Cascada<!-- Imponibile o Cascata -->).

</details>

<details>

  <summary>4. ¿Es posible duplicar solo algunos artículos de la lista de precios y no toda la lista?</summary>
  
Sí, es posible duplicar solo algunos artículos, utilizando el procedimiento de “Duplicar y Mantenimiento de listas de precios de ventas” y seleccionando solo los artículos deseados.
El resultado será una nueva lista de precios que contendrá solo los artículos modificados.
Para los demás artículos, seguirá siendo válida la lista de precios<!-- listino --> anterior, en ausencia de fecha fin de validez.

</details>

<details>

  <summary>5. En las facturas<!-- fatture --> no existe la casilla <b>Control de disponibilidad<!-- Controllo disponibilità --></b>: ¿cómo podemos excluirlas del cálculo de la demanda de abastecimiento<!-- fabbisogno -->?</summary>
  
Las facturas<!-- fatture --> consideradas en la demanda de abastecimiento<!-- fabbisogno --> son:
- las facturas<!-- fatture --> inmediatas, es decir, acompañantes;
- las facturas<!-- fatture --> que derivan de la nota de entrega<!-- DDT --> si la DDT no ha sido descargada al almacén<!-- magazzino -->.

</details>

<details>

  <summary>6. ¿Para qué sirve el <b>Tipo de tramo</b><!-- Tipo scaglione --> en las líneas de artículo de la lista de precios?</summary>
  
El tipo de tramo<!-- tipo scaglione --> introducido en la línea de artículo de la lista de precios<!-- listino --> se propone automáticamente en los documentos; de lo contrario, será el usuario quien elija manualmente el tipo de tramo<!-- scaglione --> a aplicar en la línea.

</details>

<details>

  <summary>7. ¿Con BizLink puedo exportar las facturas de venta a otro sistema de gestión, por ejemplo, el del contador?</summary>
  
Sí, es posible crear un parser dedicado para exportar los datos según los requerimientos de otro sistema de gestión.
O también es posible utilizar directamente el archivo XML de la facturación electrónica, si el sistema de gestión que recibe la factura lo permite: Fluentis gestiona la creación de las facturas importando el archivo XML de la facturación electrónica.

</details>

<details>

  <summary>8. ¿Cómo es posible establecer los <b>gastos de cobro</b><!-- spese di incasso --> para las riba de forma que sean gestionados automáticamente por el sistema según el número de vencimientos?</summary>
  
Si el gasto tiene la casilla "Gasto de Cobro<!-- Spesa Incasso -->" y el tipo de pago<!-- tipo pagamento --> tiene la naturaleza efecto = 0 (RIBA), para cada vencimiento de la solución de pago se añadirá el gasto de cobro<!-- spesa di incasso -->.
Si hay varios vencimientos, cada uno tendrá su gasto de cobro<!-- spesa di incasso --> correspondiente.

</details>

<details>

  <summary>9. ¿Cuáles son las condiciones para gestionar el <b>código de barras<!-- barcode --></b> en los documentos?</summary>
  
Los pasos son los siguientes:     
1. En los Parámetros del documento de venta, marcar la casilla <b>Uso código de barras<!-- Uso barcode --></b>;                            
2. En el maestro de artículos, ingresar el <b>código de barras<!-- codice Barcode --></b>;                    
3. En los documentos, ingresar en la columna <b>Código de barras<!-- Barcode --></b> de la cuadrícula de artículos el código ingresado en el maestro de clientes<!-- anagrafica cliente -->; si el programa reconoce el código, se inserta automáticamente el artículo.

</details>

<details>

  <summary>10. ¿Dónde debe ingresarse la <b>Marca</b> para que se refleje en los documentos de venta?</summary>
  
La Marca debe ingresarse en la cuadrícula de artículos de las listas de precios<!-- listini di vendita --> para que se refleje en los documentos.

</details>

<details>

  <summary>11. ¿Es posible ocultar a un usuario un determinado tipo de factura<!-- tipologia di fattura -->?</summary>
  
Sí, con las <b>Restricciones<!-- Restrizioni --></b>. Estas impiden a los usuarios crear, visualizar o modificar determinados tipos de documentos. A continuación se muestra el ejemplo para impedir a un usuario utilizar el Tipo de factura<!-- Tipo fattura --> con código FVITDIF. Recordamos que es necesario añadir la Restricción<!-- Restrizione --> también en el perfil Arm del usuario, en la cuadrícula correspondiente.            


![](/img/it-it/sales/sales-invoices/search-sales-invoices/restriction.png)


</details>

<details>

  <summary>12. La factura<!-- fattura --> resulta Descargada<!-- Scaricata --> aun cuando no se ha realizado ningún movimiento de almacén<!-- movimento di magazzino -->, además la casilla Descargada<!-- flag Scaricata --> está bloqueada y no puede desmarcarse.</summary>
  
En el caso de una factura<!-- fattura --> creada a partir de un documento de transporte<!-- documento di trasporto --> ya descargado, existe el parámetro general VE-PurchaseInvoices_VerifyLoadStatusDDT que bloquea la casilla Descargada<!-- flag Scaricata --> también en la factura<!-- fattura -->.          

</details>

<details>

  <summary>13. ¿Cómo puedo llenar los Pesos<!-- Pesi --> en los resúmenes de la factura<!-- riepiloghi della fattura -->?</summary>
  
Para poder ver el resumen de los pesos<!-- riepilogo dei pesi --> es necesario marcar el parámetro **Recalcular transporte<!-- Ricalcola trasporto -->** en los Parámetros del documento. También será necesario seleccionar la unidad de medida correcta en los resúmenes para visualizar el valor.        

</details>

<details>

  <summary>14. ¿Por qué si agrupo el procedimiento C.M.R. por Cuenta<!-- Conto --> no puedo asignar Destinatario y Destino?</summary>
  
Si se agrupa solo por la Cuenta<!-- Conto -->, no se pueden asignar Destinatario y Destino ya que varias líneas con el mismo cliente pero destinatarios/destinos diferentes crean una sola línea CMR. Por lo tanto, es necesario agrupar tanto por Destino como por Cuenta<!-- Conto -->.        

</details>

<details>

  <summary>15. ¿Cómo puedo mantener en la nota de entrega<!-- DDT --> el Transportista<!-- Vettore --> insertado en el pedido<!-- ordine -->, si paso por Picking?</summary>
  
Si al crear la nota de entrega<!-- DDT --> desde el Picking se introduce el parámetro “DDT agrupado por pedido individual”, se reflejará el Transportista<!-- Vettore --> del pedido<!-- ordine -->.

</details>

<details>

  <summary>16. ¿De qué depende la diferencia de importe entre la Impresión de Facturación<!-- Stampa Fatturato --> y la Suma en la Búsqueda de facturas<!-- Ricerca fatture -->?</summary>
  
En la Búsqueda de facturas<!-- Ricerca fatture -->, el imponible en EUR considera también los descuentos/aumentos/gastos finales del documento, mientras que la facturación<!-- fatturato --> solo calcula los valores presentes en la lista de artículos.
En la Búsqueda de facturas<!-- Ricerca fatture --> están presentes todos los Tipos de factura<!-- Tipi fattura --> del filtro, mientras que en la Facturación<!-- Fatturato --> solo los Tipos de factura<!-- Tipi fattura --> con la casilla 'En estadística<!-- In statistica -->' activa.

</details>