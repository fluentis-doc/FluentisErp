---
title: Creación de factura electrónica (Creazione fattura elettronica)
sidebar_position: 2
---

En esta página se ilustra:

 - **La creación de una factura electrónica B2B/PA (fattura elettronica B2B/PA)**  
 - **Gestión de la firma digital (Gestione della firma digitale)**  
 - **Procedimiento de creación de la factura para aquellos que no suscriben el servicio FBH (Procedura di creazione della fattura per coloro che non sottoscrivono il servizio FBH)**  

Para la creación de una factura electrónica Business to Business y para la Administración Pública, primero se debe crear una factura de venta siguiendo los procedimientos normales de Fluentis, luego se procede a la generación del correspondiente archivo XML utilizando el flujo de trabajo específico.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image01.png)

La generación del archivo XML se realiza mediante el paso de estados.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image02.png)

Una factura recién creada se presenta con el estado "**non esaminata**", el estado siguiente "**controllo del documento**" no solo identifica que el documento ha sido creado, sino que también realiza controles automáticos para verificar la presencia de los datos mínimos específicos.

Desde esto, es posible a través del estado "**generazione del file**" generar el archivo XML de la factura.

Cabe mencionar los dos estados particulares "**annulla documento**" y "**Excluir documento (Escludi documento)**", el primero significa que el documento no debe ser enviado al cliente final pero seguirá siendo válido a efectos de IVA, el segundo se refiere a los documentos que por su naturaleza no deben ser incluidos en el flujo de gestión de la facturación electrónica.

Después del estado "generada", es posible asignar el estado "**da spedire**", de manera automática este estado hará que el Fluentis Business HUB procese el archivo y lo transmita al SDI.

Una vez enviado el documento al servicio FBH, el estado se modificará automáticamente primero a "**in fluentis business hub**", y posteriormente al estado "**in sdi**", cuando el servidor haya enviado el archivo.

Para el monitoreo de estos estados, es suficiente presionar el botón ![](/img/neutral/common/search.png) para actualizar el formulario.

n.b. Al pasar al estado "Para enviar (Da spedire)", no será posible retroceder ni modificar la factura, pero se deberá esperar la notificación del resultado del SDI.

GESTIÓN DE FIRMA DIGITAL (GESTIONE FIRMA DIGITALE) En caso de que el archivo deba ser firmado digitalmente, la activación del indicador "Firma digital" a nivel de registro del cliente o en la tabla de la empresa hará aparecer un estado adicional después de la fase de generación del archivo.

Con el estado generado se ha creado una copia del archivo directamente en la carpeta externa establecida al momento de la configuración de la facturación electrónica y será suficiente procesarla con el software de firma.

Entonces el estado "**Firmar documento (Firma documento)**" se encarga únicamente de reimportar el documento firmado en el nuevo formato (p7m).

PROCEDIMIENTO PARA AQUELLOS QUE NO SUSCRIBEN EL SERVICIO FBH (PROCEDURA PER COLORO CHE NON SOTTOSCRIVONO IL SERVIZIO FBH) Para aquellos que dependen de herramientas externas a Fluentis para el envío al SDI de las facturas, simplemente será necesario descargar la e-factura en formato XML para luego transmitirla mediante el canal elegido.

A través del botón ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image04.png) es posible, por lo tanto, obtener el archivo XML ya en estado "Generada (Generata)", pero se recomienda pasar de todos modos al estado "Para enviar (Da spedire)" para bloquear el archivo de modificaciones eventuales.