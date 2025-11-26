---
title: Comunicación de liquidaciones periódicas IVA
sidebar_position: 4
ai_generated: true
---

Desde este formulario es posible gestionar la obligación fiscal (introducida por el art. 21-bis del D.L. 193/2016 a partir del año 2017) que prevé el envío telemático de una comunicación de los datos resumidos de las liquidaciones periódicas IVA<!-- liquidazioni periodiche iva --> (mensuales o trimestrales).

Mediante el botón **Buscar<!-- Ricerca -->** presente en la barra ribbon, es posible visualizar la lista de comunicaciones ya elaboradas. Se pueden modificar (botón **Modificar<!-- Modifica -->**) o eliminar (botón **Eliminar<!-- Elimina -->**) o simplemente visualizarlas (botón **Visualizar<!-- Visualizzazione -->**).

Para insertar una nueva comunicación, presione el botón **Nuevo<!-- Nuovo -->**.

**PROCEDIMIENTO DE INSERCIÓN<!-- PROCEDURA DI INSERIMENTO -->**:

- Indicar el **Año<!-- Anno -->** objeto de la comunicación y el número del **Trimestre** a declarar. En este punto el programa verificará si ya existe una declaración para este periodo y, en caso negativo (si ya existe se mostrará un aviso), procede a crear automáticamente el nombre a asignar al archivo telemático y a mostrar las pestañas relativas a los tres meses del trimestre con las filas correspondientes al modelo ministerial.

- Completar los demás campos del encabezado:

  **Código fiscal<!-- Codice fiscale -->**: En caso de que la empresa sea una sociedad de capital, será obligatorio indicar el código fiscal de la persona física que firma la comunicación y el correspondiente código de cargo<!-- Codice carica -->;

  **Declarante<!-- Dichiarante -->:** alternativamente a completar el campo anterior (Cód. fiscal<!-- Cod. fiscale -->) es posible seleccionar el empleado firmante desde el combo box conectado a la tabla Empleado, en la que debe haberse ingresado previamente el empleado (Administrador, Responsable Administrativo, etc.) que corresponda, completo con el código fiscal y código de cargo<!-- codice fiscale e codice carica -->;

  **Código de cargo<!-- Codice carica -->**: el combo box está conectado a una tabla fija con los códigos definidos por el modelo ministerial;

  **Código fiscal del intermediario<!-- Codice fiscale intermediario -->**: si se utiliza un intermediario habilitado para el envío de la declaración (Caf, Contador, etc.) indique aquí su código fiscal.

  **Fecha del compromiso<!-- Data dell'impegno -->:** campo para indicar la fecha del compromiso de presentación telemática por parte del intermediario habilitado;

  **NIT de la controladora<!-- Partita IVA controllante -->:** (liquidación IVA del grupo) Si la comunicación es presentada por una entidad o empresa comercial que en el trimestre ha recurrido al procedimiento de liquidación de IVA de grupo, indicar el NIT de la entidad o empresa controlante (también en la comunicación presentada por esta última para su propia posición individual). El campo debe ser completado también en caso de que la entidad o empresa con liquidaciones periódicas mensuales haya salido de la liquidación de IVA de grupo en el segundo o tercer mes del trimestre.

  **Liquidación del grupo<!-- Liquidazione del gruppo -->**: marque la casilla si la comunicación se refiere a la liquidación de IVA del grupo (ver instrucciones ministeriales).
Activando esta marca para las empresas pertenecientes al grupo no se calcularán ciertos campos como por ejemplo el IVA a pagar (ya que lo paga la sociedad matriz).

NOTA: la comunicación realizada de esta forma se basa en el previo procesamiento de la (nueva) funcionalidad de Liquidación IVA de grupo<!-- Liquidazione iva di gruppo -->, que calcula los saldos de IVA de las varias empresas del grupo y los transfiere a la sociedad matriz.

  **Último mes<!-- Ultimo mese -->**: En caso de pérdida de los requisitos para acogerse al procedimiento de liquidación de IVA de grupo, indicar el último mes de control (ejemplo “02” para febrero - Ver instrucciones ministeriales).

  **Firma<!-- Firma -->:** campo **OBLIGATORIO**, siempre debe ser completado.

  **Firma del encargado<!-- Firma dell'incaricato -->:** debe colocarse si se completan los campos relativos al intermediario habilitado;

  **Compromiso de presentación telemática<!-- Impegno alla presentazione telematica -->**: el combo box está conectado a una tabla fija y debe completarse, en caso de presentación por parte de un intermediario, seleccionando si el modelo fue preparado por el contribuyente o por el propio intermediario, en caso contrario, dejando la opción "ninguno".

- Presione **Guardar<!-- Salva -->** para almacenar los datos del encabezado.

- Presione **Calcular tercero** trimestre para ejecutar el cálculo de los datos de los tres meses del trimestre. En este punto los campos serán completados automáticamente, sin embargo siempre es posible editarlos manualmente para eventuales correcciones. Atención: si se presiona nuevamente Calcular, se restaurarán los datos calculados por el sistema.

- Presione el botón **Exportar<!-- Esporta -->** para generar y guardar en la gestión documental de Fluentis el archivo telemático en formato .xml. Será posible seleccionarlo presionando el botón de gestión documental directamente desde el formulario en cuestión y continuar guardando una copia del archivo en su propio PC para el envío telemático o la transmisión al intermediario habilitado. También es posible proceder con una impresión en papel (o vista previa) de los datos en el modelo ministerial.

**ATENCIÓN<!-- ATTENZIONE -->**:

El correcto procesamiento de los datos sugeridos por el procedimiento de cálculo, para que sean conformes al resultado de las diferentes **[liquidaciones periódicas IVA<!-- liquidazioni periodiche iva -->](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement)**, depende en particular de la correcta activación/habilitación, para efectos del cálculo, de los diferentes códigos de IVA utilizados en los registros contables<!-- registrazioni contabili -->.

Para verificar la correcta configuración, abra la tabla **[tipos de tasa/modalidad de IVA<!-- aliquote / modialità iva -->](/docs/configurations/tables/finance/vat-rates)** y verifique en particular la columna relativa a la marca en la declaración de IVA<!-- flag in dichiarazione iva -->.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image01.png)

Con la marca activa, el código de IVA seleccionado será incluido en el cálculo y reportado en el modelo fiscal, mientras que con la marca desactivada los valores no serán incluidos.

Típicamente todos los códigos de IVA ordinarios siempre deben ser incluidos. Los códigos de exclusión de IVA (ej. ex art 15 dpr 633 / 72) NO deben ser incluidos. Sí deben ser incluidos los códigos de no sujeción (por ejemplo, para operaciones intracomunitarias o en inversión del sujeto pasivo/reverse charge<!-- reverse charge -->).

**N.B.** según las instrucciones ministeriales hacen excepción los códigos de exclusión relativos "a las operaciones (activas) no sujetas por carencia del presupuesto territorial de los arts. de 7 a 7-septies para las que es obligatoria la emisión de la factura según lo dispuesto en el art. 21, párrafo 6-bis", los cuales DEBEN ser incluidos en la declaración (línea VP2).

Se recomienda hacer referencia a la normativa del IVA y a las instrucciones ministeriales relativas a la declaración anual de IVA (o a alguno de los otros modelos de declaración de datos de IVA que sigan la misma "lógica") para la correcta identificación del tratamiento de los diferentes casos.

A modo de ejemplo, una configuración incorrecta, excluyendo por ejemplo un código de no sujeción, determinará una correspondencia entre el modelo y las liquidaciones periódicas respecto al impuesto, pero habrá una diferencia en los valores relativos a los imponibles (más bajos en la comunicación respecto a las liquidaciones).

---

**NOTA:**
El cálculo del campo VP2 (en caso de que se desee realizar una comparación y conciliación con las liquidaciones de IVA y los datos contables) considera estos tipos de movimiento:
IVA Ventas régimen Normal
IVA Ventas IntraCEE
IVA Ventas ExtraCEE
Venta con IVA en suspensión
Contraprestaciones
Ventas Régimen Agrícola
IVA ventas con split payment

**Por tanto, se excluyen automáticamente los datos imponibles del lado ventas (derivados de traspaso automático en los libros de ventas) referidos a compras intracomunitarias y en inversión del sujeto pasivo/reverse charge<!-- reverse charge -->.**
Esto es coherente con las instrucciones ministeriales.

---

**NOTA TÉCNICA:**

para la exportación xml es necesario:

- que esté activo el servicio de windows en el servidor Artinfo Bizlink connector

- que se haya creado el conector ComunicazioneIvaTrim y configurado como en la imagen siguiente

- que exista la carpeta física de salida (en el servidor) configurada en el conector (ejemplo "Outgoing")

- que exista en la Tabla de Fluentis **Tipos de Documento<!-- Tipi Documento -->** el tipo **Other Documents** configurado como en la imagen siguiente.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image02.png)

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image03.png)

---

### VIDEO TUTORIALES<!-- VIDEO TUTORIALS -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>