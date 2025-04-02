---
title: Certificación de retención telemática (Certificazione ritenuta telematica)
sidebar_position: 2
---

Desde este formulario es posible gestionar la Certificación Única de las retenciones de impuesto aplicadas a los beneficiarios generando el archivo para el envío telemático.  

:::danger **ATENCIÓN (ATTENZIONE)**:
 Para la correcta elaboración de los datos por parte de la aplicación es fundamental que tanto los pagos a los beneficiarios, **como el pago correspondiente**, hayan sido registrados a través de las funcionalidades del módulo de beneficiarios, para que se pueda calcular correctamente la deuda por retenciones de impuesto.
:::

La estructura del formulario, ligeramente diferente al resto de la aplicación, prevé la exposición de las comunicaciones existentes y su respectivo detalle todo en una única vista.

El botón **ricerca**, presente en la barra de herramientas, permite buscar las comunicaciones ya ingresadas que serán mostradas en la cuadrícula superior de Resultados.

Al seleccionar una comunicación, será visible una vista previa del detalle correspondiente en la cuadrícula central Detalle (Dettaglio) (sin necesidad de entrar en edición).

Con un doble clic en la declaración, es posible entrar en su modificación.

El botón **nuovo** permitirá ingresar una nueva declaración.

### GESTIÓN DE LAS ANAGRAFICAS (GESTIONE DELLE ANAGRAFICHE):

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image01.png)

Dentro de la sección relacionada con los datos de contacto, se encuentran (abrir el expander) los campos para los datos del beneficiario (fecha y lugar de nacimiento). Estos datos serán ingresados en la certificación única. También deben ser completados los dos campos relacionados con el **nome** y **cognome**, ya que el campo único de Razón social no es relevante para el modelo fiscal.

### INGRESO DE DATOS DE ENCABEZADO (INSERIMENTO DATI DI TESTATA):

**anno**: propuesto automáticamente igual al año actual;  

**Cód. Fiscal del Sujeto Obligado (Cod. Fiscale Sogg. Obbl.)**: ingresar el código fiscal de la empresa (sustituto del impuesto). Este dato será incluido en el trazado telemático y en el encabezado de la impresión del modelo fiscal.

**Cód. Fiscal del intermediario (Cod. Fiscale intermediario)**: si se cuenta con un intermediario habilitado para el envío de la declaración (Caf, Contador, etc.), indicar aquí el código fiscal correspondiente.

**Núm. de inscripción en el Caf (Nr. iscrizione Caf)**: este campo permite ingresar el número de inscripción en el registro del caf del intermediario habilitado para el envío telemático;  

**data impegno invio**: campo para indicar la fecha del compromiso para la presentación telemática por parte del intermediario habilitado;  

**nome file**: es necesario especificar el nombre del archivo telemático que será generado;  

**percorso file**: es necesario especificar una ruta local para el guardado del archivo que se enviará telemáticamente; el documento también será almacenado en la gestión documental de Fluentis y accesible desde el formulario en comentario a través del botón ![](/img/neutral/common/document-manager.png);  

**tipo invio**: especificar en este campo, a través de la caja de combinación, si se trata de un envío ordinario, sustitutivo o de anulación (ver instrucciones ministeriales). Este campo debe ser gestionado en combinación con los indicadores **annullamento** y **sostituzione** que actualizan los campos respectivos dentro del modelo fiscal.

**aggregata / dettagliata**: este campo especifica si la certificación única que será procesada será de tipo detallado (reportará los datos distintos para cada compensación a nombre de cada beneficiario) o de tipo agregado (reportará los datos agregados y totalizados para cada beneficiario). Consulte las instrucciones ministeriales.

**Sujeto que realiza la declaración, persona física (Soggetto che effettua la dichiarazione, pers. fis.)**: la caja de combinación, conectada a la tabla de Empleados, permite ingresar el sujeto que firma la declaración (este dato es obligatorio).

**codice carica**: ingresar a través de la caja de combinación el código del cargo del sujeto que firma la declaración (ej. representante legal); ver las instrucciones ministeriales;

**Sujeto que realiza la declaración, persona jurídica (Soggetto che effettua la dichiaraz. pers. giuridica)**: en este campo es posible ingresar los datos de identificación (tomados de los registros ya presentes en el sistema) de una empresa que presenta la declaración en nombre de la empresa en uso (ver instrucciones ministeriales);

**data firma sostituto d'imposta**: es necesario indicar la fecha de la firma de la declaración;  

**firma**: activar siempre el indicador que indica que la declaración está firmada y que imprimir el nombre del sujeto firmante (ver campo Sujeto que realiza la decl...)

### CUADRÍCULA DETALLE (GRIGLIA DETTAGLIO)

Los campos reflejan los datos presentes en el modelo ministerial y, por lo tanto, se remite a las instrucciones fiscales para la ilustración de su contenido.

Es posible intervenir manualmente modificando los datos que son generados automáticamente con el procedimiento de cálculo, que se puede activar desde la barra de herramientas. ![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image03.png)

Para generar el archivo que se transmitirá telemáticamente, utilice el botón **esporta**. El archivo será almacenado en la gestión documental de Fluentis y será posible descargar una copia en su PC local.

![](/img/neutral/common/document-manager.png)

### CUADRÍCULA INFERIOR (GRIGLIA INFERIORE)

**Códigos AU.... (Codici AU....)** está reservada para el ingreso, por cada línea de la cuadrícula Detalle, de información adicional solicitada en situaciones particulares, para las cuales se refiere a las instrucciones ministeriales.

![](/img/it-it/finance-area/declarations/declarations/withholding-tax-certification/image05.png)