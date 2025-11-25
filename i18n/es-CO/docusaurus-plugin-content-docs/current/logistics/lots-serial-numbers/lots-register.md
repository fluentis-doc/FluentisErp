---
title: "Maestro de lotes y Trazabilidad"
sidebar_position: 3
sidebar_label: "Maestro de lotes y Trazabilidad"
description: "Guía para el uso del maestro de lotes y el módulo de trazabilidad en Fluentis para una gestión eficiente de los productos."
schema: "TechArticle"
tags: ["maestro de lotes", "trazabilidad", "Fluentis", "gestión de productos"]
keywords: ["maestro de lotes", "trazabilidad de productos", "Fluentis"]
ai_generated: true
---

# Maestro de lotes y Trazabilidad<!-- Anagrafica lotti e Tracciabilità -->

:::important Para qué sirve<!-- A cosa serve -->
El maestro de lotes<!-- anagrafica lotti --> de Fluentis representa una herramienta indispensable para la gestión precisa y detallada de los lotes<!-- lotti --> dentro de un sistema de trazabilidad de productos. Esta funcionalidad permite a los usuarios buscar y visualizar los detalles específicos de cada lote mediante un simple doble clic, facilitando así el monitoreo y la gestión de los stocks<!-- giacenze -->.

Dentro de la ficha dedicada a cada lote individual, los usuarios pueden modificar varias informaciones clave, como el proveedor, el código de lote proporcionado por el proveedor, notas específicas y el estado del lote<!-- lotto -->. Este último, que puede ser actualizado fácilmente, juega un papel fundamental en determinar la posibilidad de utilización del lote<!-- lotto --> mismo en los documentos de venta y en los registros de inventario<!-- registrazioni di magazzino -->. Además, el sistema prevé también la gestión de varios estados de lote<!-- stati lotto -->, que inciden directamente en la disponibilidad operativa del lote<!-- lotto -->.

Un aspecto distintivo del maestro de lotes<!-- anagrafica lotti --> es la sección que permite visualizar históricamente los documentos de entrada y salida que han involucrado al lote<!-- lotto -->, manteniendo así una trazabilidad precisa en el tiempo. Es posible visualizar el stock actual dividido por almacén<!-- magazzino -->. Gracias a estas funcionalidades, el maestro de lotes<!-- anagrafica lotti --> de Fluentis simplifica la gestión operativa y contribuye a garantizar el cumplimiento normativo en sectores donde la trazabilidad es esencial, como el alimentario y farmacéutico.
:::

## Maestro de lotes<!-- Anagrafica lotti -->

El formulario muestra el detalle del lote<!-- lotto --> y se compone de 4 secciones distintas:

### Cabecera del lote<!-- Testata lotto -->

En esta sección se visualizan, pudiendo modificar algunos, los datos principales relativos al lote<!-- lotto --> y en particular:

- **Artículo**: clase, código y descripción del artículo al que se refiere el lote<!-- lotto -->. Se trata de un artículo con la bandera *Gestión de lotes<!-- Gestione lotti -->* activada en el *Maestro de artículo<!-- Anagrafica articolo -->* > pestaña *Lotes/SN<!-- Lotti/SN -->*, de lo contrario no sería posible realizar la entrada del lote<!-- lotto --> para dicho artículo.
- **Variante**: código y descripción de la variante del artículo al que se refiere el lote<!-- lotto -->, si existe.
- **Lote**: en este campo aparece el código del lote<!-- Codice del lotto -->. Es un campo editable por parte del usuario, aunque durante las operaciones de carga puede generarse automáticamente según determinadas reglas que se configuran en el *Tipo de código de lote<!-- Tipo codice lotto -->* vinculado al artículo. Se introduce primero un código y una descripción del *tipo de código de lote<!-- tipo codice lotto -->*, se guarda la línea y luego se decide qué parámetros se desean utilizar para la composición del *tipo de código de lote<!-- tipo codice lotto -->* recién creado. Para cada parámetro empleado se puede decidir cuántos caracteres debe tener e incluso el carácter de relleno a utilizar. Por ejemplo, con el parámetro *Número progresivo<!-- Numero progressivo -->*, configurando como carácter de relleno el '0' y Longitud '5', se crearán lotes<!-- lotti --> con como primer número el 00000, luego 00001, luego 00002 y así sucesivamente. El *tipo de código de lote<!-- tipo codice lotto -->* debe luego asociarse al maestro de artículo<!-- anagrafica articolo --> en el campo correspondiente ubicado en la pestaña *Lotes/SerialNumber<!-- Lotti/SerialNumber -->*, de modo que en los procedimientos que crean automáticamente el código de lote para el artículo correspondiente, el lote se genere según las reglas definidas en el *tipo de código de lote<!-- tipo codice lotto -->* vinculado al artículo. El campo es alfanumérico y puede tener una longitud máxima de 50 caracteres. No se trata del identificador del lote, ya que es posible realizar múltiples entradas en diferentes momentos del mismo lote; en este caso aparecerían varias filas con el mismo *Código de Lote<!-- Codice Lotto -->* dentro de la cuadrícula de la *Búsqueda de Lotes<!-- Ricerca Lotti -->*.
- **Proveedor**: cuenta<!-- conto -->/subcuenta<!-- sottoconto -->/descripción del proveedor.
- **Fabricante**: nombre comercial/razón social del fabricante.
- **Código proveedor**: código del *Lote de proveedor<!-- Lotto fornitore -->*, generalmente el nombre que el proveedor asigna al lote. Es un campo editable por parte del usuario y no puede generarse automáticamente durante las operaciones de carga. También puede llegar a 50 caracteres de longitud máxima y puede ser idéntico incluso para lotes distintos de artículos diferentes.
- **Tipo de reporte de etiqueta**: tipo de etiqueta a imprimir para este lote.
- **Fecha de inicio**: fecha en la que se cargó el lote, editable por el usuario. Si el lote se cargó mediante el registro de inventario<!-- registrazione di magazzino -->, esta fecha se propone idéntica a la fecha en que se creó el registro; si el lote se cargó a través de una entrada de una nota de entrega de compra (DDT) o un registro de retorno de trabajo externo<!-- conto lavoro -->, esta fecha se establece igual a la fecha del DDT de compra o de trabajo externo (a menos que en el DDT el usuario la haya cambiado manualmente); si el lote se cargó mediante el registro de una notificación de producción, esta fecha se propone idéntica a la fecha de la notificación de producción.
- **Fecha de vencimiento**: fecha de vencimiento del lote, calculada en el momento de la creación y por tanto de la carga del correspondiente movimiento de inventario<!-- movimento di magazzino -->, partiendo de la fecha de inicio y sumando los días de validez del lote insertados en la pestaña *Lotes/SerialNumber<!-- Lotti/SerialNumber -->* del maestro de artículo<!-- anagrafica articolo -->.
- **Cantidad inicial**: cantidad inicial cargada para el lote mediante el primer documento que cargó el propio lote.
- **Número de bultos**: número de bultos del lote cargado.
- **Notas**: notas ingresadas en el registro de inventario<!-- registrazione di magazzino --> al mismo tiempo que la carga del lote<!-- lotto -->. El campo es editable por parte del usuario y visible también en la Búsqueda de Lotes<!-- Ricerca Lotti -->, como se ha especificado anteriormente.
- **Estado del lote**: estado del lote, modificable y proveniente de la tabla correspondiente *Estados de lote<!-- Stati lotto -->*.
- **Valoración del lote**: dato relativo a la valoración del lote, opcional. El estado del lote determina la posibilidad de utilizar o no el lote en los documentos de venta, de producción y en los registros de salida de inventario<!-- registrazioni di scarico di magazzino -->. Sin embargo, se trata de una gestión no vinculante, el usuario no está obligado a utilizar la funcionalidad de la tabla *Estados de lote<!-- Stati lotto -->*.
- **Lote vendible**: el flag, si está activo, indica que el lote está disponible para ser seleccionado dentro de los documentos de venta, producción o en los registros de inventario<!-- registrazioni di magazzino -->. Es una posibilidad que tiene el usuario para definir la opción de seleccionar un lote, en alternativa a la gestión, más compleja y articulada, de los estados de lote.
- **Cerrado**: el flag, si está activado, hace que la cantidad de ese lote no se considere para el cálculo del stock<!-- giacenza --> y de la disponibilidad<!-- disponibilità -->. Este flag sólo puede ser activado manualmente.

### Entrada

En esta sección se visualizan los datos fundamentales de los documentos que han contribuido a la entrada del lote. Generalmente siempre aparece el detalle del *Registro de inventario<!-- Registrazione di magazzino -->* que ha cargado el lote; si este se ha generado a través de la entrada de un documento (albarán, devolución, etc.), entonces aparece una línea en la que se muestran también los detalles de este documento.

*Con doble clic en la línea del documento es posible, según los permisos del usuario, abrir para solo visualización el documento relativo*.

- **Cantidad**: en este campo se visualiza la cantidad del lote comprometida en el documento.
- **Unidad de medida**: unidad de medida utilizada en el documento.
- **Número de bultos**: número de bultos.
- **Fecha de inserción**: fecha de inserción.
- **Estado de lote**: estado del lote.
- **Cierre forzado**: flag para indicar el cierre forzado del lote.
- **Documento de referencia**: tipo de documento que ha generado la entrada.
- **Número**: número del documento.
- **Fecha de inserción**: fecha del documento.
- **Almacén**: código y descripción del almacén<!-- magazzino --> en el que se ha cargado el lote.
- **Ubicación**: código y descripción de la ubicación.
- **Causal**: código y descripción de la causal utilizada para la creación del movimiento de entrada<!-- movimento di carico -->.
- **Cliente/Proveedor**: cuenta, subcuenta y descripción relativa al cliente o proveedor.
- **Proyecto**: orden de venta<!-- commessa --> ligado al lote, editable.

### Otros documentos de entrada

En esta sección se visualizan los datos fundamentales de cualquier otro documento en el que el lote haya sido comprometido, en relación con el documento seleccionado en la cuadrícula superior.         
Las filas se muestran cuando un movimiento de lote<!-- movimento di lotto --> se hereda de otro documento, es decir, cuando varios documentos hacen referencia a las mismas filas de movimiento de lote.    
Ejemplo: los movimientos de lote de los albaranes de entrega de compra pueden ser heredados por las facturas de compra.         
En la primera cuadrícula se muestran las filas principales (fuentes) de los movimientos de lote provenientes de los documentos, mientras que en la segunda cuadrícula se muestran las filas de los movimientos de lote provenientes de documentos que derivan de la fila presente en la cuadrícula superior (por tanto, heredadas).

### Salida<!-- Scarico -->

En esta sección se visualizan los datos fundamentales de todos los documentos, en orden cronológico, que comprometen el lote:

- **Cantidad**: cantidad del lote comprometida en el documento.
- **Unidad de medida**: unidad de medida utilizada en el documento.
- **Documento**: en este campo se visualiza el tipo de documento que primero comprometió el lote. Puede ser una orden de producción, una orden de cliente, una nota de entrega de venta (DDT), una factura de venta, una lista de picking, una nota de entrega de trabajo externo<!-- DDT di consegna di conto lavoro -->, un retorno de trabajo externo<!-- rientro di conto lavoro -->.
- **Número**: número del documento.
- **Fecha**: fecha del documento.

*Con doble clic en la línea del documento es posible, según los permisos del usuario, abrir para solo visualización el documento relativo*.

- **Almacén**: código y descripción del almacén<!-- magazzino -->.
- **Ubicación**: código y descripción de la ubicación.
- **Causal**: código y descripción de la causal.
- **Cliente/Proveedor**: cuenta, subcuenta y descripción relativa al cliente o proveedor.
- **Proyecto**: orden de venta<!-- commessa de venta -->, editable por el usuario, ligada al lote. Normalmente se trata de la orden de venta vinculada a la línea del artículo que ha sido cargada y que cargó el propio lote.

### Otros documentos de salida

En esta sección se visualizan los datos fundamentales de cualquier otro documento en el que el lote haya sido comprometido, en relación con el documento seleccionado en la cuadrícula superior.              
Las filas se muestran cuando un movimiento de lote<!-- movimento di lotto --> se hereda de otro documento, es decir, cuando varios documentos hacen referencia a las mismas filas de movimiento de lote.      
Ejemplo: los movimientos de lote de los materiales de una orden de producción pueden ser heredados de los materiales de los artículos señalados, los movimientos de lote de las órdenes de venta pueden heredarse en el picking, en los albaranes de entrega (DDT) o en las facturas de venta.                   
En la primera cuadrícula se visualizan las filas principales (fuentes) de los movimientos de lote provenientes de los documentos, mientras que en la segunda cuadrícula se visualizan las filas de los movimientos de lote provenientes de documentos que derivan de la fila presente en la cuadrícula superior (por tanto, heredadas).

**Tipo de documento**: tipo en el que está presente el lote, en relación con el documento seleccionado en la cuadrícula superior. Puede ser una nota de entrega de venta (DDT), una factura de venta, una lista de picking, una nota de entrega de trabajo externo<!-- DDT di consegna di conto lavoro -->, un retorno de trabajo externo<!-- rientro di conto lavoro -->.

*Con doble clic en la línea del documento es posible, según los permisos del usuario, abrir para solo visualización el documento relativo*.

### Visualización de stocks<!-- Visualizzazione Giacenze -->

En esta pestaña es posible visualizar el stock<!-- giacenza --> del lote<!-- lotto --> dividido por almacén<!-- magazzino -->:

- **Código**: código del almacén<!-- magazzino -->.
- **Descripción**: descripción del almacén<!-- magazzino -->.
- **Cantidad total cargada**: cantidad total cargada de ese artículo para ese lote.
- **Cantidad en stock**: stock actual de ese artículo para ese lote.
- **Cantidad disponible**: stock disponible<!-- disponibilità --> de ese artículo para ese lote.

## Trazabilidad de lotes<!-- Tracciabilità lotto -->

:::important Para qué sirve<!-- A cosa serve -->
La trazabilidad de lotes<!-- tracciabilità lotto --> de Fluentis es un módulo diseñado para garantizar una gestión eficiente y precisa de los lotes de productos dentro del ciclo productivo y logístico. Esta funcionalidad permite a los usuarios monitorizar y registrar el recorrido de cada lote, desde el momento de la producción o compra hasta su utilización final, contribuyendo a una gestión transparente y segura de los materiales.

Utilizando la sección dedicada a la trazabilidad, los usuarios pueden generar informes detallados para los lotes seleccionados, no sólo para visualizar la información relativa al propio lote, sino también para analizar en qué artículos se ha empleado y qué materias primas han contribuido a su producción. Este proceso se facilita mediante una serie de filtros personalizables que permiten adaptar la búsqueda a las necesidades específicas de la empresa.

Dos de las principales herramientas de trazabilidad incluyen:

- **Trazabilidad de uso<!-- Tracciabilità Impiego -->**: visualiza los artículos en los que se ha utilizado el lote, garantizando así una verificación detallada de la trazabilidad hacia arriba.
- **Trazabilidad de composición<!-- Tracciabilità Composizione -->**: verifica qué artículos gestionados por lotes han sido utilizados para la producción del lote seleccionado, proporcionando una visión clara de la trazabilidad hacia abajo.

A través de esta funcionalidad, Fluentis ofrece una solución robusta para las empresas, especialmente en sectores como el alimentario y farmacéutico, donde la rastreabilidad es fundamental para la seguridad y el cumplimiento de la normativa vigente.
:::

Este formulario permite imprimir un informe que contiene el detalle de la trazabilidad del lote<!-- lotto --> seleccionado. 
Después de haber configurado los filtros deseados, haga clic en el botón **Buscar<!-- Ricerca -->** para visualizar los resultados.

### Filtros disponibles

- **Trazabilidad de uso**: si está activo, permite visualizar en qué artículos ha sido utilizado el lote<!-- lotto --> del artículo que estamos considerando; es decir, verifica la trazabilidad hacia arriba.      
- **Trazabilidad de composición**: si está activo, permite visualizar qué artículos (gestionados por lotes)<!-- gestiti a lotti --> han sido utilizados para la producción del lote<!-- lotto --> del artículo que estamos considerando; es decir, verifica la trazabilidad hacia abajo.       

Estos dos flags, por defecto, están siempre activos, pero el usuario puede activarlos o desactivarlos según la necesidad.

Después de haber seleccionado el lote de interés, basta con hacer clic en imprimir o en vista previa de impresión para visualizar el informe con los resultados buscados.

## Resumen y ampliación<!-- Riepilogo e approfondimenti -->

El maestro de lotes<!-- anagrafica lotti --> y la trazabilidad en Fluentis son herramientas fundamentales para la gestión y el control de los lotes de producto. Permiten monitorear cada paso del lote<!-- lotto -->, desde su creación hasta su uso final. Gracias a funcionalidades específicas, las empresas pueden garantizar conformidad normativa y gestión efectiva de los materiales. 

Para más detalles, consulte las secciones relacionadas en este documento.