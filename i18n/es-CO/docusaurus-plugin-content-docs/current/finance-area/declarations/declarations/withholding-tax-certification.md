---
title: Certificación de retención telemática
sidebar_position: 2
ai_generated: true
---

Desde este formulario es posible gestionar la Certificación Única<!-- Certificazione Unica --> de las retenciones<!-- ritenute d'acconto --> practicadas a los perceptores<!-- percipienti -->, generando el archivo para el envío telemático.

:::danger **ATENCIÓN<!-- ATTENZIONE -->**:
 Para la correcta elaboración de los datos por parte de la aplicación, es fundamental que tanto los honorarios de los perceptores<!-- compensi dei percipienti -->, **como el pago correspondiente**, hayan sido registrados a través de las funcionalidades del módulo de perceptores<!-- modulo percipienti -->, para que se pueda calcular correctamente la deuda por retenciones<!-- debito per ritenute d'acconto -->.
:::

La estructura del formulario, levemente diferente del resto de la aplicación, prevé la exposición de las comunicaciones existentes y sus respectivos detalles todo en una sola pantalla.

El botón **Buscar<!-- Ricerca -->**, presente en la barra ribbon, permite buscar las comunicaciones ya insertadas, las cuales serán mostradas en la cuadrícula superior Resultado.

Seleccionando una comunicación será visible una vista previa de los detalles asociados en la cuadrícula central Detalle (sin necesidad de entrar en modo edición).

Con doble clic sobre la declaración es posible entrar en su edición.

El botón **Nuevo<!-- Nuovo -->** servirá para insertar una nueva declaración.

### GESTIÓN DE LOS DATOS MAESTROS<!-- GESTIONE DELLE ANAGRAFICHE -->:

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image01.png)

En la sección relativa a los datos de contacto se encuentran (abra el desplegable) los campos para los datos del perceptor<!-- percipiente --> (fecha y lugar de nacimiento). Estos datos serán insertados en la certificación única<!-- certificazione unica -->. Deben completarse también los dos campos correspondientes al **Nombre** y **Apellido** ya que el campo único Razón social no tiene relevancia a efectos del modelo fiscal.

### INGRESO DE DATOS DE CABECERA<!-- INSERIMENTO DATI DI TESTATA -->:

**Año<!-- Anno -->**: propuesto automáticamente igual al año en curso;

**Cod. Fiscal Sujeto Obligado<!-- Cod. Fiscale Sogg. Obbl. -->**: ingrese el código fiscal de la empresa (sustituto de impuesto<!-- sostituto d'imposta -->). El dato se reportará en el archivo telemático y en la cabecera de la impresión del modelo fiscal.

**Cod. Fiscal del intermediario<!-- Cod. Fiscale intermediario -->**: si se acude a un intermediario habilitado para el envío de la declaración (Caf, Contador, etc.), indicar aquí el respectivo código fiscal.

**N° de inscripción Caf<!-- Nr. iscrizione Caf -->**: el campo permite ingresar el número de inscripción al registro de los caf del intermediario habilitado para el envío telemático;

**Fecha de compromiso de envío<!-- Data impegno invio -->**: campo para indicar la fecha del compromiso de presentación telemática por parte del intermediario habilitado;

**Nombre del archivo<!-- Nome file -->**: es necesario especificar el nombre del archivo telemático que será generado;

**Ruta del archivo<!-- Percorso file -->**: es necesario especificar una ruta local para el guardado del archivo por enviar telemáticamente, el documento también se almacenará en la gestión documental de Fluentis y será accesible desde el formulario en comentario mediante el botón ![](/img/neutral/common/document-manager.png);

**Tipo de envío<!-- Tipo invio -->**: especifique en este campo, mediante el combo box, si se trata de un envío ordinario, sustitutivo o de anulación (ver instrucciones ministeriales). Este campo deberá gestionarse junto a los flags **Anulación<!-- Annullamento -->** y **Sustitución<!-- Sostituzione -->** que actualizan sus respectivos campos dentro del modelo fiscal.

**Agregada / Detallada<!-- Aggregata / Dettagliata -->**: este campo especifica si la certificación única<!-- certificazione unica --> que se elabore será de tipo detallado (mostrará los datos diferenciados por cada honorario dirigido a cada perceptor<!-- percipiente -->) o de tipo agregado (mostrará los datos acumulados y totalizados por cada perceptor<!-- percipiente -->). Ver las instrucciones ministeriales.

**Sujeto que realiza la declaración, persona física<!-- Soggetto che effettua la dichiarazione, pers. fis. -->**: el combo box, ligado a la tabla Empleado, permite ingresar la persona que firma la declaración (este dato es obligatorio).

**Código del cargo<!-- Codice carica -->**: ingrese mediante el combo box el código del cargo de la persona que firma la declaración (ej. representante legal), ver instrucciones ministeriales;

**Sujeto que realiza la declaración, persona jurídica<!-- Soggetto che effettua la dichiaraz. pers. giuridica -->**: en este campo es posible ingresar los datos del registro (extraídos de los datos ya presentes en el sistema) de una sociedad que presenta la declaración en nombre de la empresa en uso (ver instrucciones ministeriales);

**Fecha de firma del sustituto de impuesto<!-- Data firma sostituto d'imposta -->**: es necesario indicar la fecha de la firma de la declaración;

**Firma**: active siempre el flag que indica que la declaración está firmada y muestra en la impresión el nombre del firmante (ver campo Sujeto que realiza la declaración...)

### CUADRÍCULA DE DETALLE<!-- GRIGLIA DETTAGLIO -->

Los campos reflejan los datos presentes en el modelo ministerial y por lo tanto se remite a las instrucciones fiscales la explicación del contenido.

Es posible intervenir manualmente modificando los datos que se generan automáticamente mediante el procedimiento de cálculo, activable desde la barra ribbon.![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image03.png)

Para generar el archivo a transmitir telemáticamente utilice el botón **Exportar<!-- Esporta -->**. El archivo se guardará en el gestor documental de Fluentis y será posible descargar una copia en su PC local.

![](/img/neutral/common/document-manager.png)

### CUADRÍCULA INFERIOR<!-- GRIGLIA INFERIORE -->

**Códigos AU...<!-- Codici AU.... -->** está reservada para el ingreso, por cada fila de la cuadrícula Detalle, de información adicional solicitada en situaciones particulares para las que se remite a las instrucciones ministeriales.

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image05.png)