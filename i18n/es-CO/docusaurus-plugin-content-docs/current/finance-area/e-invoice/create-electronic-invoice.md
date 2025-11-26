---
title: Creación de factura electrónica
sidebar_position: 2
ai_generated: true
---

En esta página se ilustra:

 - **La creación de una factura electrónica B2B/PA**  
 - **Gestión de la firma digital**  
 - **Procedimiento de creación de la factura para quienes no suscriben el servicio FBH**  

Para la creación de una factura electrónica Business to Business<!-- fattura elettronica Business to Business --> y para la Administración Pública<!-- Pubblica Amministrazione -->, será necesario antes que nada crear una factura de venta<!-- fattura di vendita --> utilizando los procedimientos normales de Fluentis, luego se procede a la generación del correspondiente archivo XML utilizando el flujo de trabajo específico.

![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image01.png)

 
La generación del archivo XML se realiza mediante el avance de estados<!-- passaggio di stati -->.

 ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image02.png)

  

Una factura recién creada se presenta con el estado "**No examinada<!-- Non esaminata -->**", el siguiente estado "**Control del documento<!-- Controllo del documento -->**" además de indicar que el documento ha sido creado, también ejecuta controles automáticos para verificar la presencia de los datos mínimos específicos.

Desde allí, a través del estado "**Generación del archivo<!-- Generazione del file -->**" es posible generar el archivo XML de la factura.

Cabe destacar los dos estados particulares "**Anular documento<!-- Annulla Documento -->**" y "**Excluir documento<!-- Escludi documento -->**". El primero significa que el documento no deberá ser enviado al cliente final pero seguirá siendo válido a efectos de IVA, el segundo se refiere a documentos que por su naturaleza no deben formar parte del flujo de gestión de la facturación electrónica<!-- fatturazione elettronica -->.

Después del estado "generada" es posible asignar el estado "**Por enviar<!-- Da spedire -->**", de manera automática este estado hará que el Fluentis Business HUB procese el archivo y lo transmita al SDI.

Una vez enviado el documento al servicio FBH, el estado se modificará automáticamente primero a "**En Fluentis Business Hub<!-- In Fluentis Business Hub -->**", y posteriormente al estado "**En SDI<!-- In SDI -->**", cuando el servidor haya enviado el archivo.

Para el monitoreo de estos estados es suficiente presionar el botón ![](/img/neutral/common/search.png) para actualizar el formulario<!-- Form -->.

Nota: al pasar al estado "Por enviar<!-- Da spedire -->" ya no será posible retroceder ni modificar la factura<!-- fattura -->, sino que se deberá esperar la notificación de resultado por parte del SDI.

 GESTIÓN DE LA FIRMA DIGITAL Si el archivo debe ser firmado digitalmente, la activación del selector "Firma digital<!-- Firma digitale -->" tanto a nivel de ficha del cliente<!-- anagrafica cliente --> como en la tabla sociedad<!-- tabella società -->, hará que aparezca un estado adicional después de la fase de generación del archivo.

Con el estado generado, de hecho, se ha creado una copia del archivo directamente en la carpeta externa configurada al momento de la configuración de la facturación electrónica<!-- fatturazione elettronica --> y será suficiente procesarla con el software de firma.

Luego, el estado "**Firmar documento<!-- Firma documento -->**" solo se encarga de reimportar el documento firmado en el nuevo formato (p7m).

 

PROCEDIMIENTO PARA QUIENES NO SUSCRIBEN EL SERVICIO FBH Para quienes utilizan herramientas externas a Fluentis para el envío al SDI de las facturas<!-- fatture -->, bastará simplemente descargar la e-factura<!-- e-fattura --> en formato XML y luego transmitirla por el canal elegido.

A través del botón ![](/img/it-it/finance-area/e-invoice/create-electronic-invoice/image04.png) es posible descargar el archivo xml ya en estado "Generada", aunque se recomienda pasar igualmente al estado "Por enviar<!-- Da spedire -->" para bloquear el archivo ante posibles modificaciones.