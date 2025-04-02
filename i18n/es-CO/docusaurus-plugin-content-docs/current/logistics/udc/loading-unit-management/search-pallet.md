---
title: Búsqueda de UDC y Visualización de transferencias de UDC (Ricerca UDC e Visualizzazione trasferimenti UDC)
sidebar_position: 2
---

:::important ¿Para qué sirve? (A cosa serve)
La gestión de las Unidades de Carga (UDC) en Fluentis permite a los operadores gestionar todo el ciclo de vida de las UDC, desde su creación hasta el movimiento, pasando por la venta. Las UDC pueden crearse manualmente o a través de WMS Mobile, haciendo que el sistema sea versátil y adaptable a las diversas necesidades operativas.

El procedimiento de gestión ofrece un filtro detallado para visualizar todas las UDC creadas, permitiendo controlar el estado de carga y descarga de las unidades. Cada UDC está identificada por una clave única compuesta por año, grupo y número, y la información relativa a dimensiones y peso puede ser modificada según las necesidades específicas.

Además, el módulo permite gestionar el detalle de artículos dentro de cada UDC, facilitando la asociación con pedidos de clientes y el registro de movimientos de almacén. Operaciones como la carga, la descarga, y la transferencia de UDC entre ubicaciones se gestionan con flexibilidad, asegurando que los datos estén siempre actualizados y precisos. Gracias a estas funcionalidades, la gestión de UDC de Fluentis contribuye a mejorar la eficiencia operativa y la trazabilidad de las existencias.
:::

### Búsqueda de UDC (Ricerca UDC)

El formulario se abre a través de la ruta **Logística > Gestión UDC**.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

:::note Nota
Al abrir el formulario, los indicadores *carico* y *scarico*, presentes en el filtro, no están seleccionados, por lo que se visualizarán solo las UDC que aún no han sido cargadas.  
Al activar el indicador *carico*, se visualizarán solo las UDC cargadas, y al habilitar también el indicador *scarico*, se verán solo las UDC que también han sido descargadas.
:::

En caso de que una *unità di carico* haya sido inserta en una *lista de entrega o de transferencia (lista di consegna o di trasferimento)*, en la cuadrícula de resultados se visualizarán el número y la fecha de la lista.  

Además, es interesante notar que también es posible buscar las UDC por el pedido de cliente al que están vinculadas.

Desde este formulario, es posible realizar la carga de las UDC seleccionándolas y presionando el botón **carico udc** y también la descarga (solo si ya ha sido cargada y está presente en una lista) a través del botón **scarico udc**.

:::note ATENCIÓN
Si se desea transferir artículos del almacén directamente dentro de la unidad de carga, utilizando un motivo de carga para insertar los artículos en la unidad y una contrapartida de descarga para retirarlos del almacén, es importante recordar mover primero los artículos a la ubicación indicada en el motivo de contrapartida.
:::

*Botones específicos (Pulsanti specifici)*:

> **nuovo**: el botón permite [Crear una nueva UDC (Creare un nuovo UDC)](/docs/logistics/udc/loading-unit-management/insert-new-pallet);  
> **reso cliente**: permite crear una nueva *unità di carico*, utilizando como *Tipo UDC* aquel con el indicador *per reso* habilitado y todas las demás propiedades se copian de la *unità di carico* original; este botón se habilita solo para líneas que están cargadas y entregadas;  
> **inserimento ordini in udc**: permite insertar los artículos de un pedido de cliente dentro de una *unità di carico*. Este procedimiento crea un vínculo entre la UDC y el Pedido de cliente;  
> **carico udc**: ejecuta el procedimiento de creación de registro/movimiento de carga de la *unità di carico*;  
> **scarico udc**: ejecuta el procedimiento de creación de registro/movimiento de descarga de la *unità di carico*; este se habilita solo si la *unità di carico* está presente en una lista de extracción de UDC;  
> **Visualizar registro de carga (Visualizza registrazione di carico)**: abre el registro de almacén de la carga de UDC;  
> **Visualizar registro de descarga (Visualizza registrazione di scarico)**: abre el registro de almacén de la descarga de UDC;  
> **rollback carico udc**: si la UDC está cargada, ejecuta el rollback del registro de almacén de carga;  
> **rollback scarico udc**: si la UDC está cargada y descargada, ejecuta el rollback del registro de almacén de descarga;  
> **aggiungi/togli articoli**: permite al usuario agregar o quitar un artículo de la *unità di carico* seleccionada; además, el usuario tiene la opción de quitar un artículo de otra *unità di carico* y agregarlo a la seleccionada. Este botón está habilitado para líneas cargadas, no entregadas, no vinculadas a *Picking* o *Listas de transferencia* y no vinculadas a declaraciones de producción;  
> **sposta udc**: permite mover la UDC de una ubicación a otra;  
> **rollback stampa**: permite establecer el indicador de impresión en "False"; este botón está habilitado solo para líneas no cargadas y no vinculadas a declaraciones de producción.  

### Visualización de transferencias UDC (Visualizzazione trasferimenti UDC)

El procedimiento ha sido diseñado para permitir al usuario consultar fácilmente el almacén de UDC con el fin de mantener bajo control las existencias y tener en un tiempo de consulta mínimo toda la información relativa a las UDC presentes en almacén y que han sido transferidas o no entre almacenes.