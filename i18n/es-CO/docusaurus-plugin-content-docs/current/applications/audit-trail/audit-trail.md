---
title: Audit Trail
sidebar_position: 1
ai_generated: true
---

**Audit Trail** representa una parte de la aplicación que permite configurar una especie de LOG capaz de rastrear cualquier operación dentro de Fluentis<!-- Fluentis -->, por parte de cualquier usuario<!-- operatore -->.

Muy útil y, en ocasiones, obligatoria en ciertos sectores empresariales en los que es necesario generar documentos relacionados con “quién realizó”, “qué actividad” y especialmente “cuándo”, es decir, en qué intervalo de tiempo.

Es posible generar logs resaltando también qué valores han sido modificados en relación con cualquier dato<!-- dato -->.

Ya están disponibles, sin necesidad de ninguna configuración, dos útiles formularios de log:

**Monitoreo de actividad<!-- Monitoraggio attività -->** que muestra en tiempo real los usuarios conectados al sistema y los formularios que están abriendo. El refresco del formulario puede hacerse manualmente presionando el botón **Actualizar<!-- Aggiorna -->**, o automáticamente tras presionar **Actualización automática de datos<!-- Aggiornamento automatico dati -->**.

**Historial de actividades<!-- Cronologia delle attività -->**: este panel rastrea y almacena automáticamente todos los accesos a todos los formularios por parte de cualquier usuario.

### LOGS ESPECÍFICOS<!-- LOG SPECIFICI -->

Es posible configurar un log para controlar las modificaciones o eliminaciones de determinados datos<!-- dati particolari -->. Por ejemplo, se pueden monitorear los cambios realizados en los asientos contables<!-- registrazioni contabili -->.

Abra Configuración -> **Configuración de Audit Trail<!-- Configurazione Audit Trail -->** y presione **Nuevo<!-- Nuovo -->**

Defina un código y una descripción para el nuevo log específico y, a continuación, en la cuadrícula inferior, configure el business object de referencia (y, si es necesario, su objeto padre).

Definiendo el objeto, se mostrarán las propiedades relacionadas y podrán ser seleccionadas con el check aquellas a monitorear, para rastrear las modificaciones o eliminaciones.

![](/img/it-it/applications/audittrail/audittrail.png)

Para **consultar el LOG**, abra **Audit Trail**:

En el formulario, si simplemente presiona **Buscar<!-- Ricerca -->**, se mostrarán todas las operaciones sujetas a monitoreo y será visible el tipo de operación: Inserción, modificación, eliminación.

Para visualizar el detalle, es decir, el dato antes y después del cambio, **debe seleccionar** en el área de cabecera, tanto el tipo de LOG previamente configurado a través del campo **Registro de eventos<!-- Registro eventi -->**, como el **Objeto<!-- Oggetto -->**.

![](/img/it-it/applications/audittrail/audittrail2.png)