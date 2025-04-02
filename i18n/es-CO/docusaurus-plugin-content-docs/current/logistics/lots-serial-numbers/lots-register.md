---
title: Registro de lotes y Trazabilidad (Anagrafica lotti e Tracciabilità)
sidebar_position: 3
---

:::important ¿Para qué sirve? (A cosa serve)
El registro de lotes de Fluentis representa una herramienta indispensable para la gestión precisa y detallada de los lotes dentro de un sistema de trazabilidad de productos. Esta funcionalidad permite a los usuarios buscar y visualizar los detalles específicos de cada lote mediante un simple doble clic, facilitando así el monitoreo y la gestión de inventarios.

Dentro de la pestaña dedicada a cada lote, los usuarios pueden modificar varias informaciones cruciales, como el proveedor, el código de lote proporcionado por el proveedor, notas específicas y el estado del lote. Este último, que puede actualizarse fácilmente, juega un papel fundamental en determinar la posibilidad de uso del lote en los documentos de venta y en los registros de inventario. Además, el sistema también prevé la gestión de varios estados de lote, que impactan directamente en la disponibilidad operativa del lote.

Un aspecto distintivo del registro de lotes es la sección que permite visualizar históricamente los documentos de carga y descarga que han involucrado el lote, manteniendo así una trazabilidad precisa en el tiempo. Además, es posible visualizar la existencia actual dividida por almacén. Gracias a estas funcionalidades, el registro de lotes de Fluentis no solo simplifica la gestión operativa, sino que también contribuye a garantizar el cumplimiento normativo en sectores donde la trazabilidad es esencial, como en el alimentario y farmacéutico.
:::

## Registro de lotes (Anagrafica lotti)

El formulario visualiza el detalle del lote y se compone de 4 secciones diferentes: 

### Cabecera de lote (Testata lotto)

En esta sección se visualizan, con la posibilidad de modificar algunos, los datos principales relacionados con el lote y, en particular:

**articolo**: en los 3 campos relacionados se muestran la clase, el código y la descripción del artículo al que se refiere el lote. Se trata de un artículo con el indicador *gestione lotti* activado en el *anagrafica articolo* > pestaña *Lotes/SN (Lotti/SN)*, de lo contrario no habría sido posible realizar la carga del lote para ese artículo;  

**variante**: en los 2 campos correspondientes se muestra el código y la descripción de la variante del artículo al que se refiere el lote, si está presente;  

**lotto**: en este campo aparece el Código del lote. Es un campo editable por el usuario, a pesar de que durante las operaciones de carga puede generarse automáticamente según algunas reglas establecidas en el *tipo codice lotto* vinculado al artículo. Primero se introduce un código y una descripción del *tipo de código de lote*, se guarda la línea y luego se decide qué parámetros se quieren utilizar para la composición del *tipo de código de lote* recién creado. Para cada parámetro utilizado se puede decidir de cuántos caracteres debe estar formado y, opcionalmente, el carácter de relleno a utilizar. Por ejemplo, con el parámetro *numero progressivo* configurando como carácter de relleno el '0' y como Longitud '5', se crearán lotes con como primer número el 00000, luego el 00001, luego el 00002 y así sucesivamente. El *tipo de código de lote* debe vincularse al registro del artículo en el campo correspondiente ubicado en la pestaña *Lotes/SerialNumber (Lotti/SerialNumber)*, de modo que en los procedimientos que crean automáticamente el código de lote para el artículo en cuestión, el lote mismo se genere de acuerdo con las reglas configuradas en el *tipo de código de lote* vinculado al artículo. El campo es alfanumérico y puede alcanzar una longitud máxima de 50 caracteres. No se trata del identificador del lote, ya que es posible realizar múltiples cargas en diferentes momentos del mismo lote; en este caso aparecerían varias líneas con el mismo *Código de Lote* dentro de la cuadrícula de la *Búsqueda de Lotes (Ricerca Lotti)*;  

**fornitore**: en este campo se indica la cuenta/subcuenta/descripción del proveedor;  

**produttore**: en este campo se indica el apodo/razón social del productor;  

**codice fornitore**: en este campo aparece el código del *Lote proveedor*, que generalmente es el nombre que el proveedor asigna al lote. Es un campo editable por el usuario y no generable automáticamente durante las operaciones de carga. También puede alcanzar la longitud máxima de 50 caracteres y puede ser idéntico para lotes diferentes de artículos diferentes;  

**tipo report etichetta**: en este campo se inserta el tipo de etiqueta a imprimir para este lote;  

**data inizio**: en este campo aparece generalmente la fecha en la que se ha cargado el lote, editable por el usuario. Si el lote ha sido cargado a través del registro de inventario, esta fecha se propone idéntica a la fecha en la que se ha creado el registro; si el lote ha sido cargado a través de la carga de un DDT de compra o registro de retorno de trabajo por cuenta, esta fecha se establece igual a la fecha del DDT de compra o de cuenta de trabajo (a menos que dentro del DDT el usuario no la haya modificado manualmente); si el lote ha sido cargado a través del registro de una señal de producción, esta fecha se propone idéntica a la fecha de la señal de producción;  

**data scadenza**: en este campo aparece la fecha de caducidad del lote, editable por el usuario, que se calcula, al crear el lote y por lo tanto al cargar el movimiento de inventario relacionado, a partir de la fecha de inicio y sumando los días de validez del lote introducidos en la pestaña *Lotes/SerialNumber (Lotti/SerialNumber)* del registro del artículo;  

**quantità iniziale**: en este campo aparece la cantidad inicial cargada para el lote a través del primer documento que cargó el lote;  

**numero colli**: indica el número de bultos del lote cargado;  

**note**: en este campo aparecen las notas introducidas en el registro de inventario junto con la carga del lote. El campo es editable por el usuario y también es visible en la Búsqueda de Lotes, como se mencionó anteriormente;  

**stato lotto**: la combinación muestra el estado del lote. Este es modificable por el usuario y llama datos provenientes de la tabla correspondiente *Estados de lote (Stati lotto)*. El estado del lote determina la posibilidad de utilizar o no el lote en los documentos de venta, producción y registros de descarga de inventario. Sin embargo, es una gestión no vinculante, el usuario no está obligado a utilizar la funcionalidad de la tabla *Estados de lote (Stati lotto)*;  

**valutazione lotto**: la combinación muestra el dato relativo a la valoración del lote. Este es modificable por el usuario y llama datos provenientes de la tabla correspondiente *valutazione lotto*. Este dato tiene funciones puramente descriptivas, sin tener por lo tanto ninguna influencia particular en los procedimientos, resultando así también opcional;  

**lotto vendibile**: el indicador, si está activo, resalta que el lote está disponible para ser retirado dentro de los documentos de venta, producción o en los registros de inventario. Es prácticamente una posibilidad que tiene el usuario para definir la posibilidad de retirar o no un lote, en alternativa a la gestión, más compleja y articulada, de los estados de lote;  

**chiuso**: el indicador, si está activado, hace que la cantidad de ese lote no se considere para el cálculo de la existencia y la disponibilidad. Este indicador solo puede activarse manualmente.        

### Carga (Carico)

En esta sección se muestran los datos fundamentales de los documentos que han contribuido a realizar la carga del lote. Generalmente siempre aparece el detalle del *registrazione di magazzino* que ha cargado el lote; si esta ha sido generada a través de la carga de un documento (albarán, retorno, etc.), entonces aparece una línea con los detalles de este documento también.

*Con doble clic en la línea del documento es posible, de acuerdo con los derechos del usuario, abrir en solo visualización el documento correspondiente.*

**quantità**: en este campo se visualiza la cantidad del lote que ha sido comprometida en el documento;  

**unità di misura**: indica la unidad de medida que se ha utilizado en el documento;  

**numero colli**: indica el número de bultos;  

**data inserimento**: indica la fecha de inserción;  

**stato lotto**: indica el estado del lote;  

**chiuso forzatamente**: si está activo, indica que el lote ha sido cerrado forzosamente;  

**documento di riferimento**: en este campo se visualiza el tipo de documento que ha generado la carga del lote;  

**numero**: en este campo se visualiza el número del documento;  

**data inserimento**: en este campo se visualiza la fecha del documento;  

**magazzino**: en estos campos aparecen el código y la descripción del almacén donde se ha cargado el lote;  

**ubicazione**: en estos campos aparecen el código y la descripción de la ubicación;  

**causale**: en estos campos aparecen el código y la descripción de la causa utilizada para la creación de ese movimiento de carga;  

**cliente/fornitore**: en estos campos aparecen cuenta, subcuenta y descripción relativas al cliente o proveedor;  

**progetto**: en este campo aparece la orden de venta, editable por el usuario, vinculada al lote. Generalmente se trata de la orden de venta vinculada a la línea del artículo que ha sido cargada y que ha cargado el lote mismo;  

### Otros documentos de carga

En esta sección se muestran los datos fundamentales de los demás documentos en los que el lote ha sido comprometido, en relación al documento seleccionado en la cuadrícula superior.

### Descarga (Scarico)

En esta sección se visualizan los datos fundamentales de todos los documentos, en orden cronológico, que comprometen el lote. 

**quantità**: en este campo se visualiza la cantidad del lote que ha sido comprometida en el documento;  

**unità di misura**: indica la unidad de medida que se ha utilizado en el documento;  

**data inserimento**: indica la fecha de inserción;  

**stato lotto**: indica el estado del lote;  

**documento**: en este campo se visualiza el tipo de documento que ha comprometido por primera vez el lote. Puede ser una orden de producción, un pedido de cliente, un DDT de venta, una factura de venta, una lista de retiro, un DDT de entrega de trabajo por cuenta, un retorno de trabajo por cuenta;  

**numero**: en este campo se visualiza el número del documento;  

**data**: en este campo se visualiza la fecha del documento;  

*Con doble clic en la línea del documento es posible, de acuerdo con los derechos del usuario, abrir en solo visualización el documento correspondiente.*

**magazzino**: en estos campos aparecen el código y la descripción del almacén donde se ha cargado el lote;  

**ubicazione**: en estos campos aparecen el código y la descripción de la ubicación;  

**causale**: en estos campos aparecen el código y la descripción de la causa utilizada para la creación de ese movimiento de carga;  

**cliente/fornitore**: en estos campos aparecen cuenta, subcuenta y descripción relativas al cliente o proveedor;  

**progetto**: en este campo aparece la orden de venta, editable por el usuario, vinculada al lote. Generalmente se trata de la orden de venta vinculada a la línea del artículo que ha sido cargada y que ha cargado el lote mismo;  

### Otros documentos de descarga

En esta sección se muestran los datos fundamentales de los otros documentos en los que el lote ha sido comprometido, en relación al documento seleccionado en la cuadrícula superior.

**tipo documento**: en este campo se visualiza el tipo de documento dentro del cual está presente el lote, en relación al documento seleccionado en la cuadrícula superior. Puede ser un DDT de venta, una factura de venta, una lista de retiro, un DDT de entrega de trabajo por cuenta, un retorno de trabajo por cuenta;  

**numero**: en este campo se visualiza el número del documento;  

**data**: en este campo se visualiza la fecha del documento.

*Con doble clic en la línea del documento es posible, de acuerdo con los derechos del usuario, abrir en solo visualización el documento correspondiente.*

### Visualización de Existencias (Visualizzazione Giacenze)

En esta pestaña es posible visualizar la existencia del lote dividida por almacén.

La cuadrícula se compone de los siguientes campos:

**codice**: indica el código del almacén;  

**descrizione**: indica la descripción del almacén;  

**unità di misura**: indica la unidad de medida;  

**Cantidad total cargada (Quantità totale caricata)**: indica la cantidad total cargada de ese artículo para ese lote;  

**Cantidad en existencia (Quantità giacenza)**: indica la existencia actual de ese artículo para ese lote;  

**quantità disponibile**: indica la existencia disponible de ese artículo para ese lote.


## Trazabilidad del lote (Tracciabilità lotto)

:::important ¿Para qué sirve? (A cosa serve)
La trazabilidad del lote de Fluentis es un módulo diseñado para garantizar una gestión eficiente y precisa de los lotes de productos dentro del ciclo productivo y logístico. Esta funcionalidad permite a los usuarios monitorear y registrar el recorrido de cada lote, desde el momento de la producción o compra hasta su utilización final, contribuyendo a una gestión transparente y segura de los materiales.

Utilizando la sección dedicada a la trazabilidad, los usuarios pueden generar informes detallados para los lotes seleccionados, no solo para visualizar la información relacionada con el lote mismo, sino también para analizar en qué artículos ha sido utilizado y qué materias primas han contribuido a su producción. Este proceso se facilita por una serie de filtros personalizables que permiten adaptar la búsqueda a las necesidades específicas de la empresa.

Dos de las principales herramientas de trazabilidad incluyen:

Trazabilidad de Uso: que permite visualizar todos los artículos en los que se ha utilizado el lote en cuestión, garantizando así una verificación detallada de la trazabilidad hacia arriba.  
Trazabilidad de Composición: que permite verificar qué artículos gestionados por lotes han sido utilizados para la producción del lote seleccionado, proporcionando una clara visión de la trazabilidad hacia abajo.

A través de esta funcionalidad de trazabilidad de lotes, Fluentis ofrece una solución robusta para las empresas, especialmente en sectores como el alimentario y farmacéutico, donde la trazabilidad es fundamental para la seguridad y el cumplimiento de las normativas vigentes.
:::

Este formulario permite imprimir un informe que contiene el detalle de la trazabilidad del lote seleccionado.

Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** presente en la *Ribbon bar* para visualizar los resultados dentro de la cuadrícula de resultados.

Cabe destacar que dentro de la sección dedicada a los filtros están presentes los siguientes indicadores:

- **tracciabilità impiego**: si está activo, permite visualizar en qué artículos ha sido utilizado el lote del artículo que estamos considerando; por lo tanto, verifica la trazabilidad hacia arriba;  
- **tracciabilità composizione**: si está activo, permite visualizar qué artículos (gestionados por lotes) han sido utilizados para la producción del lote del artículo que estamos considerando; por lo tanto, verifica la trazabilidad hacia abajo.      

Estos dos indicadores, por defecto, siempre están activos, pero el usuario puede activarlos o desactivarlos según sea necesario.

Después de seleccionar el lote de interés, basta con hacer clic en imprimir o en vista previa de impresión para poder visualizar el informe con los resultados buscados.

Para detalles sobre el funcionamiento común de los formularios, consulte el enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).