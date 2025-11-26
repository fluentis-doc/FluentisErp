---
title: Facturación electrónica con sujetos no residentes
sidebar_position: 1
ai_generated: true
---

La función **Administración > Declaraciones > Facturación electrónica con sujetos no residentes<!-- Fatturazione elettronica con soggetti non residenti -->** genera los archivos XML relativos a los documentos de compra y venta para enviar (en alternativa al envío mediante el mismo trazado previsto para las facturas electrónicas con sujetos residentes en Italia) a la Agencia Tributaria, en sustitución de la obligación del *spesometro* (obligación de hecho suprimida o actualmente denominada comúnmente como "esterometro" para distinguir lo que queda de ella).

Al acceder a la función se muestra una pantalla dividida en una sección superior de cabecera, en la que es posible definir una serie de filtros que se pueden utilizar para la visualización y gestión de los archivos XML a enviar:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image01.png)

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image02.png)

- **Estado SdI<!-- Stato SdI -->**: muestra la descripción del estado del documento, indicando tanto el estado de gestión interno de Fluentis como el estado informado por Fluentis Business Hub y adquirido directamente del SdI.

- **Nombre de archivo SdI<!-- Nome file SdI -->**: el nombre del archivo que se crea cuando el documento avanza al estado GENERADA; ya sea en formato original o tras la firma digital, representa el archivo de factura que se enviará al SdI ().

- **Sdi Id**: el identificador único que el SdI asigna al documento en el momento de la recepción.

- **Fecha de recepción SdI<!-- Data ricezione Sdi -->**: la fecha en la que el sistema de intercambio ha recibido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI emite al recibir el envío y antes de proceder con los controles formales del archivo.

- **Fecha de cierre<!-- Data chiusura -->**: la fecha de cierre del flujo de gestión (por ejemplo, documento Entregado<!-- Cosegnato -->).

**- Fecha del último evento<!-- Data ultimo evento -->**: la fecha de la última modificación de estado ocurrida en el archivo, manualmente o como efecto del avance del procesamiento en el SdI.

En el menú de la cinta de opciones, en la sección dedicada a la facturación electrónica, utilizando la función **Registro de documentos SdI ![](/img/neutral/common/legenda.png)** es posible consultar las acciones realizadas sobre el documento seleccionado, con la función **Imprimir ![](/img/neutral/common/print.png)** imprimir el archivo XML asociado, y con las funciones **Descargar adjunto** o **Descargar el contenido del registro** ![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image05.png) realizar la descarga del archivo XML.

Con la acción de doble clic sobre una fila en los resultados de la cuadrícula, se accede al detalle de la registración contable<!-- registrazione contabile --> seleccionada. También desde la registración contable<!-- registrazione contabile --> es posible ver y cambiar el estado del procesamiento del archivo respecto al envío al SdI (utilizar el cuadro combinado específico para el cambio de estados de la facturación electrónica situado en la cinta de opciones).

La búsqueda ejecutada desde este formulario extrae, por tanto, todas las facturas (**contabilizadas**) vinculadas a causales contables<!-- causali contabili --> que tengan como tipo de movimiento<!-- tipo movimento --> (a efectos de IVA) IVA ventas intra CEE o IVA ventas extra CEE o que hayan valorado el campo “Cuenta Socio<!-- Conto Partner -->” en el panel de Parámetros:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image06.png)

Los documentos buscados son **solamente aquellos que NO han sido ya enviados** mediante el flujo de facturación electrónica con sujetos no residentes según el trazado utilizado para los italianos.

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image07.png)

En caso de que no esté configurado en la instalación el servicio Fluentis Business Hub, será posible acceder a la función ![](/img/neutral/common/legenda.png) y descargar el archivo XML generado para utilizarlo externamente a Fluentis.

El archivo XML creado durante la gestión de los estados por parte del operador deberá ser firmado, por lo tanto, si el servicio Fluentis Business Hub está activo, se creará una copia del archivo en la carpeta indicada en la configuración correspondiente, donde es necesario indicar una carpeta temporal para depositar los archivos XML a firmar y posteriormente recuperar los archivos firmados:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image09.png)

Al concluir el envío al SdI, el archivo puede asumir dos estados:

-      **No conforme:** el archivo contiene advertencias que impiden su aceptación por parte del SdI. En este caso es necesario acceder al  ![](/img/neutral/common/legenda.png)   en el panel Registro de documentos SdI y visualizar el motivo de la no conformidad, corregir la eventual anomalía y enviar de nuevo el archivo regenerado.

**Entregada:** el archivo ha sido correctamente enviado y recibido por el SdI. En este caso, será posible ver el resultado de la entrega accediendo al panel Registro de documentos SdI de la función  ![](/img/neutral/common/legenda.png)   para el archivo seleccionado.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Rbf4cul7SIA" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>