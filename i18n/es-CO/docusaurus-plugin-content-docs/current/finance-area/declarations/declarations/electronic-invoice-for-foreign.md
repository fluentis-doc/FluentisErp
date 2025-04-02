---
title: fatturazione elettronica con soggetti non residenti
sidebar_position: 1
---

La función **Administración > Declaraciones > fatturazione elettronica con soggetti non residenti (Amministrazione > Dichiarazioni > Fatturazione elettronica con soggetti non residenti)** genera los archivos XML relacionados con los documentos de compra y venta a enviar (como alternativa al envío a través de la misma estructura prevista para las facturas electrónicas con sujetos residentes en Italia) a la Agencia de Ingresos, en sustitución del cumplimiento del spesometro (cumplimiento que de hecho ha sido suprimido o mejor dicho que actualmente se denomina comúnmente "esterometro" para distinguir lo que queda de él).

El acceso a la función muestra una máscara dividida en una sección superior de encabezado, donde es posible establecer una serie de filtros a utilizar para la visualización y gestión de los archivos XML a enviar:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image01.png)

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image02.png)

- **stato sdi**: acoge la descripción del estado del documento, reportando tanto el estado de gestión interno de Fluentis como el estado reportado por Fluentis Business Hub y adquirido directamente de SdI.

- **nome file sdi**: el nombre del archivo que se crea en el momento en que el documento avanza al estado GENERADA; en el formato original o posteriormente a la aplicación de la firma digital, representa el archivo de factura a enviar a SdI ().

- **Sdi Id**: el identificador único que el SdI asigna al documento en el momento de la recepción.

- **data ricezione sdi**: la fecha en la que el sistema de intercambio ha recibido el documento enviado. Esta información se obtiene de la notificación de recepción que el SdI emite tras recibir la entrega y antes de proceder con los controles formales del archivo.

- **data chiusura**: la fecha de cierre del flujo de gestión (ej. documento Entregado).

**data ultimo evento**: la fecha del último cambio de estado ocurrido en el archivo, ya sea manualmente o como resultado del avance del procesamiento en el SdI.

En el menú de Ribbon, en la sección dedicada a la facturación electrónica, utilizando la función **Registro de documentos SdI ![](/img/neutral/common/legenda.png)** es posible visualizar las acciones realizadas sobre el documento seleccionado, con la función **Imprimir ![](/img/neutral/common/print.png)** se puede imprimir el documento XML asociado, y con las funciones **Descargar adjunto** o **Descargar el contenido del registro** ![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image05.png) se puede ejecutar la descarga del archivo XML.

Con una acción de doble clic en una línea de resultado de la cuadrícula, se accede al detalle de la contabilización seleccionada. También en la contabilización es posible visualizar y cambiar el estado del procesamiento del archivo respecto al envío al SdI (utilizando la combo box dedicada al cambio de estados específico para la facturación electrónica ubicada en la barra de ribbon).

La búsqueda ejecutable desde este formulario extrae, por lo tanto, todas las facturas (**contabilizadas**) asociadas a causales contables que tengan como tipo de movimiento (a efectos de IVA) IVA ventas intra CE o IVA ventas extra CE o que hayan valorizado el campo "Cuenta Socio" en el panel de Parámetros:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image06.png)

Los documentos buscados son **solo aquellos NO ya enviados** a través del flujo de facturación electrónica con sujetos no residentes según la estructura utilizada para las italianas.

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image07.png)

Si el servicio Fluentis Business Hub no está configurado en la instalación, será posible acceder a la función ![](/img/neutral/common/legenda.png) y descargar el archivo XML generado para utilizarlo externamente a Fluentis.

El archivo XML creado durante la gestión de los estados por parte del operador deberá ser firmado; por lo tanto, si el servicio Fluentis Business Hub está activo, se creará una copia del archivo en la carpeta indicada en las configuraciones relacionadas, donde es necesario indicar una carpeta provisional para depositar los archivos XML para firmar y recuperar posteriormente los archivos firmados:

![](/img/it-it/finance-area/declarations/declarations/electronic-invoice-for-foreign/image09.png)

Al finalizar el envío al SdI, el archivo podrá asumir dos estados:

- **non conforme**: el archivo contiene alertas por las que no puede ser aceptado por el SdI. En estos casos, es necesario acceder al ![](/img/neutral/common/legenda.png), en el panel Registro de documentos SdI y visualizar la razón de no conformidad, corregir la posible anomalía y enviar nuevamente el archivo regenerado.

**consegnata**: el archivo ha sido enviado correctamente y adquirido por el SdI. En este caso, será posible ver el resultado de la entrega accediendo al panel Registro de documentos SdI de la función ![](/img/neutral/common/legenda.png) para el archivo seleccionado.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Rbf4cul7SIA" title="YouTube video player" frameborder="0" allowfullscreen="true"></iframe>