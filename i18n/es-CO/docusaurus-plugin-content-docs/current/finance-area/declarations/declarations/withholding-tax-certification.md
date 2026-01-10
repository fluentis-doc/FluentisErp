---
title: Certificación de retención electrónica
sidebar_position: 2
---

Desde este formulario es posible gestionar la Certificación Única de las retenciones practicadas a los perceptores, generando el archivo para el envío electrónico.

:::danger **ATENCIÓN**:
 Para la correcta elaboración de los datos por parte de la aplicación, es fundamental que tanto los honorarios de los perceptores, **como el pago correspondiente**, hayan sido registrados a través de las funcionalidades del módulo de perceptores, para que se pueda calcular correctamente la deuda por retenciones.
:::

La estructura del formulario, levemente diferente del resto de la aplicación, prevé la exposición de las comunicaciones existentes y sus respectivos detalles todo en una sola pantalla.

El botón **Buscar**, presente en la barra de herramientas , permite buscar las comunicaciones ya insertadas, las cuales serán mostradas en la cuadrícula superior Resultado.

Seleccionando una comunicación será visible una vista previa de los detalles asociados en la cuadrícula central Detalle (sin necesidad de entrar en modo edición).

Con doble clic sobre la declaración es posible entrar en su edición.

El botón **Nuevo** servirá para insertar una nueva declaración.

### GESTIÓN DE LOS DATOS MAESTROS:

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image01.png)

En la sección relativa a los datos de contacto se encuentran (abra el desplegable) los campos para los datos del perceptor (fecha y lugar de nacimiento). Estos datos serán insertados en la certificación única. Deben completarse también los dos campos correspondientes al **Nombre** y **Apellido** ya que el campo único Razón social no tiene relevancia a efectos del modelo fiscal.

### INGRESO DE DATOS DE CABECERA:

**Año**: propuesto automáticamente igual al año en curso;

**Cod. Fiscal Sujeto Obligado**: ingrese el código fiscal de la empresa (sustituto de impuesto). El dato se reportará en el archivo electrónico y en la cabecera de la impresión del modelo fiscal.

**Cod. Fiscal del intermediario**: si se acude a un intermediario habilitado para el envío de la declaración (Caf, Contador, etc.), indicar aquí el respectivo código fiscal.

**N° de inscripción Caf<!-- Nr. iscrizione Caf -->**: el campo permite ingresar el número de inscripción al registro de los caf del intermediario habilitado para el envío electrónico;

**Fecha de compromiso de envío**: campo para indicar la fecha del compromiso de presentación electrónica por parte del intermediario habilitado;

**Nombre del archivo**: es necesario especificar el nombre del archivo electrónico que será generado;

**Ruta del archivo**: es necesario especificar una ruta local para el guardado del archivo por enviar electrónicamente, el documento también se almacenará en la gestión documental de Fluentis y será accesible desde el formulario en comentario mediante el botón ![](/img/neutral/common/document-manager.png);

**Tipo de envío**: especifique en este campo, mediante el desplegable, si se trata de un envío ordinario, sustitutivo o de anulación (ver instrucciones ministeriales). Este campo deberá gestionarse junto a los flags **Anulación** y **Sustitución** que actualizan sus respectivos campos dentro del modelo fiscal.

**Agregada / Detallada**: este campo especifica si la certificación única que se elabore será de tipo detallado (mostrará los datos diferenciados por cada honorario dirigido a cada perceptor) o de tipo agregado (mostrará los datos acumulados y totalizados por cada perceptor). Ver las instrucciones ministeriales.

**Sujeto que realiza la declaración, persona física**: el desplegable, ligado a la tabla Empleado, permite ingresar la persona que firma la declaración (este dato es obligatorio).

**Código del cargo**: ingrese mediante el desplegable el código del cargo de la persona que firma la declaración (ej. representante legal), ver instrucciones ministeriales;

**Sujeto que realiza la declaración, persona jurídica**: en este campo es posible ingresar los datos del registro (extraídos de los datos ya presentes en el sistema) de una sociedad que presenta la declaración en nombre de la empresa en uso (ver instrucciones ministeriales);

**Fecha de firma del sustituto de impuesto**: es necesario indicar la fecha de la firma de la declaración;

**Firma**: active siempre el flag que indica que la declaración está firmada y muestra en la impresión el nombre del firmante (ver campo Sujeto que realiza la declaración...)

### CUADRÍCULA DE DETALLE

Los campos reflejan los datos presentes en el modelo ministerial y por lo tanto se remite a las instrucciones fiscales la explicación del contenido.

Es posible intervenir manualmente modificando los datos que se generan automáticamente mediante el procedimiento de cálculo, activable desde la barra de herramientas .![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image03.png)

Para generar el archivo a transmitir electrónicamente utilice el botón **Exportar**. El archivo se guardará en el gestor documental de Fluentis y será posible descargar una copia en su PC local.

![](/img/neutral/common/document-manager.png)

### CUADRÍCULA INFERIOR

**Códigos AU...** está reservada para el ingreso, por cada fila de la cuadrícula Detalle, de información adicional solicitada en situaciones particulares para las que se remite a las instrucciones ministeriales.

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image05.png)
