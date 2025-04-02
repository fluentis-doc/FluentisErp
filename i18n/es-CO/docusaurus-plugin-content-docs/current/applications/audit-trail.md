---
title: audit trail
sidebar_position: 2
---

**audit trail** representa una parte aplicada que permite configurar una especie de LOG capaz de rastrear cualquier actividad dentro de Fluentis, realizada por cualquier operador.  

Muy útil y a veces obligatorio en ciertos sectores empresariales donde es necesario producir documentos relacionados con “quién ha realizado”, “qué actividad” y sobre todo “cuándo”, es decir, en qué intervalo de tiempo.  

Es posible producir logs destacando también qué valores han sido modificados en relación con cualquier dato.  

Ya están disponibles, sin necesidad de realizar ninguna configuración, dos útiles formularios de log:  

**monitoraggio attività** que visualiza en tiempo real los usuarios conectados al sistema y los formularios que están abriendo; la actualización del formulario puede realizarse manualmente presionando el botón **aggiorna**, o automáticamente después de haber presionado **aggiornamento automatico dati**.  

**cronologia delle attività**: este panel rastrea y almacena automáticamente todos los accesos a todos los formularios por parte de cualquier usuario.  

### LOG ESPECÍFICOS (LOG SPECIFICI)

Es posible configurar un log para controlar las modificaciones o eliminaciones de datos particulares. Por ejemplo, podemos monitorear las modificaciones que se realizan en los registros contables.  

Abrir Configuración -> **configurazione audit trail** y presionar **nuovo**.  

Definir un código y una descripción para el nuevo log específico y, en la cuadrícula inferior, establecer el objeto de negocio de referencia (y, opcionalmente, su objeto padre si es necesario).  

Al definir el objeto, se visualizarán las propiedades correspondientes y se podrán seleccionar con el indicador aquellas que se deben monitorear con el fin de rastrear las modificaciones o eliminaciones.  

![](/img/it-it/applications/audittrail/audittrail.png)  

Para **consultar el LOG (interrogare il LOG)** abrir **audit trail**:  

En el formulario, si se presiona simplemente **ricerca** se visualizarán todas las operaciones sujetas a monitoreo y se podrá ver el tipo de operación: Inserción, modificación, eliminación.  

Para visualizar el detalle y, por lo tanto, el dato antes y después de la modificación, **es necesario seleccionar** en la zona de encabezado, tanto el tipo de LOG configurado previamente a través del campo **registro eventi**, como el **oggetto**.  

![](/img/it-it/applications/audittrail/audittrail2.png)