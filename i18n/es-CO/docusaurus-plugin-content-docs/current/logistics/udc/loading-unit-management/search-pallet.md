---
title: Búsqueda de UDC y Visualización de transferencias de UDC
sidebar_position: 2
ai_generated: true
---

:::important Para qué sirve<!-- A cosa serve -->
La gestión de Unidades de Carga (UDC<!-- Unità Di Carico (UDC) -->) en Fluentis permite a los operadores gestionar todo el ciclo de vida de las UDC, desde su creación hasta su movimiento<!-- movimentazione --> y venta. Las UDC pueden ser creadas manualmente o mediante WMS Mobile, lo que hace que el sistema sea versátil y adaptable a las diferentes necesidades operativas.

El procedimiento de gestión ofrece un filtro detallado para visualizar todas las UDC creadas, permitiendo controlar el estado de carga y descarga<!-- carico e scarico --> de las unidades. Cada UDC está identificada por una clave única compuesta por año, grupo y número, y la información relativa a dimensiones y peso puede modificarse según las necesidades específicas.

Además, el módulo permite gestionar el detalle de artículos dentro de cada UDC, facilitando la asociación con pedidos de clientes y el registro de movimientos de almacén<!-- movimenti di magazzino -->. Operaciones como la carga<!-- carico -->, descarga<!-- scarico --> y transferencia de UDC entre ubicaciones se gestionan con flexibilidad, asegurando que los datos estén siempre actualizados y sean precisos. Gracias a estas funcionalidades, la gestión de UDC de Fluentis contribuye a mejorar la eficiencia operativa y la trazabilidad de los inventarios<!-- giacenze -->.
:::

### Búsqueda de UDC<!-- Ricerca UDC -->

El formulario se abre a través de la ruta **Logística > Gestión UDC<!-- Logistica > Gestione UDC -->**.

import SearchForm from './../../../import/sections/search-form.md'

<SearchForm />

:::note Nota
Al abrir el formulario, los indicadores *Carga<!-- Carico -->* y *Descarga<!-- Scarico -->* presentes en el filtro no están activados, por lo que solo se mostrarán las UDC que aún no han sido cargadas.
Mientras que al activar el indicador *Carga<!-- Carico -->* se mostrarán solo las UDC cargadas, y activando también el indicador *Descarga<!-- Scarico -->* se verán solo las UDC que también han sido descargadas.
:::

En caso de que una *Unidad de carga<!-- Unità di carico -->* haya sido ingresada en una *lista de entrega o de transferencia*, en la cuadrícula de resultados se muestran el número y la fecha de la lista.

Además, es interesante notar que también es posible buscar las UDC por el pedido de cliente al que han sido asociadas.

Desde este formulario, es posible realizar la carga<!-- carico --> de las UDC seleccionándolas y presionando el botón **Carga UDC<!-- Carico UDC -->** y también la descarga<!-- scarico --> (solo si ya está cargada y presente en una lista) mediante el botón **Descarga UDC<!-- Scarico UDC -->**.

:::note ATENCIÓN<!-- ATTENZIONE -->
Si se desea transferir artículos desde el almacén<!-- magazzino --> directamente dentro de la unidad de carga<!-- unità di carico -->, utilizando una causale<!-- causale --> de carga<!-- carico --> para introducir los artículos en la unidad y una contrapartida de descarga<!-- scarico --> para retirarlos del almacén<!-- magazzino -->, es importante recordar trasladar primero los artículos a la ubicación indicada en la causale<!-- causale --> de contrapartida.
:::

*Botones específicos*:

> **Nuevo**: el botón permite [Crear una nueva UDC](/docs/logistics/udc/loading-unit-management/insert-new-pallet);  
> **Devolución cliente**: permite crear una nueva *Unidad de carga<!-- Unità di carico -->*, utilizando como *Tipo UDC* aquella con el indicador *Para devolución<!-- Per Reso -->* habilitado y todas las demás propiedades son copiadas de la *Unidad de carga<!-- Unità di carico -->* original; este botón se habilita solo para filas que están cargadas y entregadas;  
> **Inserción de pedidos en UDC**: permite ingresar los artículos de un pedido de cliente dentro de una *Unidad de carga<!-- Unità di carico -->*. Este procedimiento crea un vínculo entre la UDC y el Pedido de cliente;  
> **Carga UDC<!-- Carico UDC -->**: ejecuta el procedimiento de creación de la registración<!-- registrazione -->/movimiento<!-- movimento --> de carga<!-- carico --> de la *Unidad de carga<!-- Unità di carico -->*;          
> **Descarga UDC<!-- Scarico UDC -->**: ejecuta el procedimiento de creación de la registración<!-- registrazione -->/movimiento<!-- movimento --> de descarga<!-- scarico --> de la *Unidad de carga<!-- Unità di carico -->*; esto está habilitado solamente si la *Unidad de carga<!-- Unità di carico -->* está presente en una lista de picking de UDC;            
> **Visualizar registración de carga<!-- Visualizza registrazione di carico -->**: abre la registración de almacén<!-- registrazione di magazzino --> de la carga UDC;  
> **Visualizar registración de descarga<!-- Visualizza registrazione di scarico -->**: abre la registración de almacén<!-- registrazione di magazzino --> de la descarga UDC;  
> **Rollback carga UDC<!-- Rollback carico UDC -->**: si la UDC está cargada ejecuta el rollback de la registración de almacén<!-- registrazione di magazzino --> de carga;  
> **Rollback descarga UDC<!-- Rollback scarico UDC -->**: si la UDC está cargada y descargada ejecuta el rollback de la registración de almacén<!-- registrazione di magazzino --> de descarga;  
> **Agregar/quitar artículos**: permite al usuario agregar o quitar un artículo de la *Unidad de carga<!-- Unità di carico -->* seleccionada; adicionalmente, el usuario tiene la posibilidad de quitar un artículo de otra *Unidad de carga<!-- Unità di carico -->* y agregarlo a la seleccionada. Este botón está habilitado para filas cargadas, no entregadas, no vinculadas a *Picking* o *Listas de transferencia* y no vinculadas a declaraciones de producción;    
> **Mover UDC<!-- Sposta UDC -->**: permite mover la UDC de una ubicación a otra;  
> **Rollback impresión<!-- Rollback stampa -->**: permite establecer el indicador de impresión en "Falso"; este botón está habilitado solo para filas no cargadas y no vinculadas a declaraciones de producción.      

### Visualización de transferencias de UDC<!-- Visualizzazione trasferimenti UDC -->

El procedimiento ha sido diseñado para permitir al usuario consultar fácilmente el almacén UDC<!-- magazzino UDC --> con el objetivo de mantener bajo control los inventarios<!-- giacenze --> y disponer, en un tiempo de consulta mínimo, de toda la información relativa a las UDC presentes en almacén<!-- magazzino --> y que hayan sido transferidas o no entre almacenes<!-- magazzini -->.