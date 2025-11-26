---
title: Estructura logística (Supply Chain)
sidebar_position: 1
ai_generated: true
---

Fluentis DDMRP es capaz de gestionar no solo una fábrica sino toda una cadena de suministro compuesta por una fábrica y varios hubs y centros de distribución<!-- distribuzione -->.

Esta tabla representa la estructura logística<!-- struttura logistica -->, es decir, la supply chain<!-- supply chain -->, sobre la cual debe operar Fluentis DDMRP.

En Fluentis denominamos cada nodo de la supply chain una "Facility" y esta es la tabla de Facilities<!-- Facilities -->.

Se considera una estructura por niveles como la descrita a continuación.

**Centros de distribución<!-- Centri di distribuzione -->**

Son las unidades logísticas que atienden directamente a los clientes finales mediante el stock<!-- scorte --> presente en ellas.

Estos centros se ubican geográficamente en posiciones estratégicas para reducir el tiempo de transporte a los clientes finales.

Cada centro de distribución<!-- centro di distribuzione --> se abastece de un hub intermedio o directamente de la fábrica<!-- fabbrica -->.

**Hub**

Son unidades logísticas que abastecen a los centros de distribución<!-- centri di distribuzione -->.

Se ubican geográficamente en lugares apropiados para reducir el tiempo de transporte a los centros de distribución<!-- distribuzione -->.

Los hubs permiten mantener un alto nivel de servicio a los clientes finales reduciendo el nivel total de inventario en la red de distribución.

Los hubs se abastecen de la fábrica o, en redes muy grandes, de otros hubs.

**Fábrica<!-- Fabbrica -->**

Se considera solo una fábrica<!-- fabbrica --> en la estructura logística<!-- logistica -->.

Esta abastece a los hubs y/o a los centros de distribución<!-- centri di distribuzione -->.

Por lo tanto, existe una relación cliente-proveedor entre las unidades de la estructura logística<!-- struttura logistica --> (cada unidad logística debe ser codificada tanto como cliente como proveedor).

Los centros de distribución<!-- centri di distribuzione --> son clientes y no proveedores en la estructura logística<!-- logistica -->, los hubs son tanto clientes (de la fábrica o de otros hubs) como proveedores (de los centros de distribución o de otros hubs), la fábrica tiene como clientes a los centros de distribución o los hubs y no tiene ninguna unidad logística proveedora.

Los campos que definen una unidad logística son los siguientes:

**Almacén<!-- Magazzino -->**

Es el código de almacén asociado a la unidad logística.

A excepción de la fábrica, cada unidad logística se identifica de forma única por el almacén asociado (elección realizada para aumentar el grado de compatibilidad con aplicaciones externas).

A la fábrica pueden asociarse varios almacenes y estos son los únicos que serán tenidos en cuenta por el sistema DDMRP para los artículos buffer<!-- buffer di fabbrica, articoli buffer --> de fábrica; por lo tanto, otros almacenes usados en la fábrica que no estén presentes en esta tabla no deben contener buffers DDMRP ya que serían ignorados por el cálculo NFP.

Los almacenes de esta tabla que no estén marcados como de fábrica serán ignorados por el procedimiento MRP, ya que son almacenes de distribución de mercancía y no de producción, y ​​deben ser planificados individualmente mediante el cálculo de la posición de flujo neta (NFP), siempre desde el menú de ejecución del MRP.

En Fluentis DDMRP, el término unidad logística Fábrica se referirá mediante un código de almacén vacío, porque es la única unidad logística a la que se pueden asociar varios almacenes y por lo tanto se pierde la relación unívoca entre almacén y unidad logística.

**Cliente**

Identifica la unidad logística de forma única, al igual que el código de almacén, por lo tanto, cada unidad logística debe tener una cuenta de cliente asociada.

Si la misma resulta ser proveedora de alguna otra unidad logística, también deberá tener una cuenta de proveedor asociada.

El mismo código de cliente no puede, por tanto, estar asociado a varios almacenes<!-- magazzini --> (excepto la fábrica), así como el mismo código de almacén no puede estar asociado a varios códigos de cliente.

**Proveedor<!-- Fornitore -->**

Su valor identifica la unidad logística que suministrará la mercancía a la unidad identificada por el código de almacén y/o código de cliente del registro.

Solo para los registros asociados a la fábrica (flag de Fábrica<!-- Fabbrica --> seleccionado), este campo no es editable y queda vacío, ya que la fábrica no puede ser abastecida por otra unidad logística.

Solo se puede seleccionar como proveedor una unidad logística ya insertada en esta tabla (no es posible seleccionar genéricamente un proveedor de la lista de proveedores).

El sistema verifica el código de cliente asociado al código de proveedor y luego busca ese código de cliente en el campo cliente de los diferentes registros de la tabla Facilities<!-- Facilities -->, por lo cual una unidad logística proveedora debe tener asociados tanto un código de cliente como un código de proveedor.

Esto implica que la inserción en esta tabla debe partir del nivel más bajo, es decir, la fábrica, para después continuar con los posibles hubs y finalmente los centros de distribución, por lo tanto la inserción se realiza en niveles de prioridad decrecientes.

No es obligatorio que todos los artículos presentes en una unidad logística sean abastecidos por la unidad indicada como proveedora.

Esta sigue siendo el proveedor por defecto que será utilizado en la creación de los **pedidos internos planificados<!-- ordini interni pianificati -->** generados por el sistema de planificación y para el cálculo del lead time desacoplado (DLT<!-- DLT -->).

En la tabla de parámetros DDMRP de los artículos se pueden definir excepciones, indicando otra unidad logística o bien un proveedor externo a la estructura logística y su respectivo tiempo de transporte.

**Almacén del proveedor<!-- Magazzino fornitore -->**

Es el código de almacén asociado a la unidad logística proveedora del registro seleccionado; este valor permite realizar una búsqueda rápida en esta tabla mediante el campo Almacén.

En caso de que el proveedor sea la fábrica, este campo queda vacío porque la fábrica es la única unidad logística a la que se le pueden asociar más de un almacén.

**Fábrica<!-- Fabbrica -->**

Es un flag que indica que el almacén del registro se refiere a la fábrica (en este caso el proveedor está vacío).

Para la fábrica son posibles varios registros, uno para cada almacén que debe considerar el sistema de planificación.

Después de ingresar el primer almacén con el flag Fábrica activo, para los siguientes se comprobará que el código de cliente sea el mismo que el de los registros con el flag de fábrica activo, ya que obviamente a la fábrica siempre se le asociará un solo código de cliente (y un solo código de proveedor).

**Prioridad de planificación<!-- Priorità di pianificazione -->**

Es un valor mayor o igual a 0 y no superior a 100.

Los registros asociados a la fábrica tienen todos valor 100 por convención de Fluentis, las otras unidades logísticas tienen un valor inferior.

Este elemento sirve para indicar al sistema de planificación en qué orden seguir el proceso de cálculo; de hecho, se planifican primero las unidades logísticas con el valor más bajo y luego se continúa aumentando dicho valor, planificando por último la fábrica, respetando la cadena de relaciones cliente-proveedor entre las unidades logísticas, así como se hace en una lista de materiales (BOM) empezando por la parte superior y luego procediendo hacia los niveles inferiores.

Este orden es necesario porque para conocer las necesidades de una unidad logística primero hay que haber planificado las de sus unidades clientes.

Cada registro de cliente debe tener un nivel de prioridad inferior al de su unidad proveedora.

**Lead time**

Es el tiempo necesario para transportar la mercancía desde la unidad logística proveedora y se expresa en días.

**Causal de extracción desde facility proveedora<!-- Causale di prelievo da facility fornitore -->** 

Es la causal de almacén<!-- causale di magazzino --> que se utilizará para despachar un pedido interno, es decir, para extraer la mercancía de esta facility y enviarla a la facility que la ha solicitado; debe estar asociada al almacén<!-- magazzino --> para poder ser seleccionada en la fase de inserción de registros.

**Causal de ingreso en la facility cliente<!-- Causale di versamento nella facility cliente -->**

Es la causal de almacén<!-- causale di magazzino --> que se utilizará para ingresar mercancía tras un pedido interno, es decir, para cargar la mercancía en esta facility proveniente de la facility que la suministró, y debe estar asociada al almacén<!-- magazzino --> para poder ser seleccionada durante la fase de entrada de registros.