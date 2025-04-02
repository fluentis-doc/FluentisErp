---
title: comunicazione liquidazioni periodiche iva
sidebar_position: 4
---

Desde este formulario es posible gestionar el cumplimiento fiscal (introducido por el art. 21-bis del D.L. 193/2016 a partir del año 2017) que prevé el envío telemático de una comunicación de los datos resumidos de las liquidaciones periódicas de IVA (mensuales o trimestrales).

A través del botón **ricerca** presente en la barra de opciones, es posible visualizar la lista de las comunicaciones ya elaboradas. Se pueden modificar (botón **modifica**), eliminar (botón **elimina**) o simplemente visualizarlas (botón **visualizzazione**).

Para insertar una nueva comunicación, presione el botón **nuovo**.

**PROCEDIMIENTO DE INGRESO**:

- indique el **anno** objeto de comunicación y el número del **trimestre** a declarar. En este punto, el programa procederá a verificar si ya existe una declaración para este período y, en caso negativo (en caso contrario se mostrará un aviso), procederá a crear automáticamente el nombre que se asignará al archivo telemático y visualizará las pestañas relativas a los tres meses del trimestre con los renglones correspondientes al modelo ministerial.

- complete los demás campos de la cabecera:

  **codice fiscale**: en caso de que la empresa sea una sociedad de capital, será obligatorio indicar el Código fiscal de la persona física que firma la comunicación y el correspondiente Código de cargo;

  **dichiarante**: alternativamente, en lugar de completar el campo anterior (Cod. fiscal), es posible seleccionar al empleado firmante desde la caja combinada vinculada a la tabla de Empleados, en la cual debe haberse ingresado previamente el empleado (Administrador, Responsable Administrativo, etc.) correspondiente, completo con código fiscal y código de cargo;

  **codice carica**: la caja combinada está vinculada a una tabla fija con los códigos definidos por el modelo ministerial;

  **codice fiscale intermediario**: si se utiliza un intermediario autorizado para el envío de la declaración (Caf, Contador, etc.), indique aquí el código fiscal correspondiente.

  **data dell'impegno**: campo para indicar la fecha del compromiso para la presentación telemática por parte del intermediario autorizado;

  **partita iva controllante**: (liquidación de IVA del grupo) si la Comunicación es presentada por un ente o empresa comercial que ha utilizado en el trimestre el procedimiento de liquidación del IVA de grupo, indique el número de IVA del ente o empresa controladora (también en la Comunicación presentada por este último sujeto para su posición individual). El campo debe completarse también en caso de que el ente o la empresa con liquidaciones periódicas mensuales haya salido de la liquidación de IVA de grupo en el segundo o tercer mes del trimestre.

  **liquidazione del gruppo**: marque la casilla en caso de que la Comunicación se refiera a la liquidación del IVA del grupo (vea las instrucciones ministeriales). Activando este indicador, para las empresas que pertenecen al grupo, no se calcularán algunos campos como, por ejemplo, IVA a pagar (ya que la capogruppo realiza el pago).

NOTA: la comunicación realizada de esta manera se basa en el procesamiento previo de la (nueva) funcionalidad de Liquidación IVA de grupo, que calcula los saldos de IVA de las diferentes empresas que pertenecen al grupo y los transfiere a la capogruppo.

  **ultimo mese**: en caso de que se produzca la falta de requisitos para acogerse al procedimiento de liquidación del IVA de grupo, indique el último mes de control (por ejemplo, “02” para el mes de febrero - Ver instrucciones ministeriales).

  **firma**: campo **OBLIGATORIO**, que debe completarse siempre.

  **firma dell'incaricato**: debe colocarse si se completan los campos relacionados con el intermediario autorizado;

  **impegno alla presentazione telematica**: la caja combinada está vinculada a una tabla fija y debe completarse; en caso de presentación por parte de un intermediario, seleccione si el modelo fue preparado por el contribuyente o por el propio intermediario; de lo contrario, deje la opción "ninguno".

- presione **salva** para guardar los datos de cabecera.

- Presione **calcola** trimestre para ejecutar el cálculo de los datos de los tres meses del trimestre. En este punto, los campos se llenarán automáticamente; sin embargo, siempre es posible editarlos manualmente para eventuales correcciones. Atención: si se presiona nuevamente Calcular, se restaurarán los datos calculados por el sistema.

- Presione el botón **esporta** para generar y almacenar en la gestión documental de Fluentis el archivo telemático en formato .xml. Entonces será posible seleccionarlo presionando el botón de la gestión documental directamente desde el formulario en cuestión y proceder a guardar una copia del archivo en su PC para el envío telemático o la transmisión al intermediario autorizado. También es posible proceder a una impresión en papel (o vista previa) de los datos en el modelo ministerial.

**ATENCIÓN**:

La correcta elaboración de los datos propuestos por el procedimiento de cálculo, de modo que sean conformes al resultado de las diversas **[liquidaciones periódicas de IVA](/docs/finance-area/ledger-records/fiscal-report/period-vat-settlement)**, depende en particular de la correcta activación / habilitación, a efectos del cálculo, de los diversos códigos de IVA utilizados en los registros contables.

Para verificar la correcta configuración, abra la tabla **[tipos de IVA / modos de IVA](/docs/configurations/tables/finance/vat-rates)** y compruebe en particular la columna relacionada con el indicador en la declaración de IVA.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image01.png)

Con el indicador activo, el código de IVA seleccionado se incluirá en el cálculo y se reflejará en el modelo fiscal, mientras que con el indicador desactivado, los valores no se incluirán.

Típicamente, todos los códigos de IVA ordinarios deben incluirse siempre. Los códigos de exclusión (ej. ex. art. 15 dpr 633 / 72) no deben incluirse. Sin embargo, deben incluirse los códigos de no sujeción (ej. para operaciones intra-comunitarias o en reverse charge).

**N.B.** Según las instrucciones ministeriales, hacen excepción los códigos de exclusión relativos "a las operaciones (activas) no sujetas por falta del supuesto territorial de los artículos de 7 a 7-septies para las cuales es obligatoria la emisión de la factura según las disposiciones contenidas en el art. 21, párrafo 6-bis"; estos deben incluirse en la declaración (renglón VP2).

Se recomienda hacer referencia a la normativa de IVA y a las instrucciones ministeriales relativas a la declaración de IVA anual (o a uno de los otros modelos de declaración de datos de IVA que siguen la misma "lógica") para la correcta identificación del tratamiento de las diversas casuísticas.

A modo de ejemplo, una configuración incorrecta, excluyendo, por ejemplo, un código de no sujeción, resultará en una correspondencia entre el modelo y las liquidaciones periódicas en relación con el impuesto, pero habrá una diferencia en los valores relacionados con las bases imponibles (más bajos en la comunicación en comparación con las liquidaciones).

---

**NOTA:**  
El cálculo del campo VP2 (en caso de que se desee realizar una comparación y conciliación con las liquidaciones de IVA y los datos contables) considera estos tipos de movimiento:  
IVA Ventas régimen Normal  
IVA Ventas IntraCEE  
IVA Ventas ExtraCEE  
Venta con IVA en suspensión  
Corrientes  
Ventas Régimen Agrícola  
IVA ventas con split payment  

**Se excluyen automáticamente los datos de base imponible del lado de ventas (derivados de la compensación automática en los registros de ventas) relacionados con las compras intra-comunitarias y en reverse charge.**  
Esto de acuerdo con las instrucciones ministeriales.

---

**NOTA TÉCNICA:**  

Para la exportación a XML es necesario:

- que esté activo el servicio de Windows en el servidor Artinfo Bizlink connector

- que se haya creado el conector ComunicazioneIvaTrim configurado como en la imagen siguiente

- que exista la carpeta física de salida (en el servidor) configurada en el conector (ejemplo "Outgoing")

- que exista en la tabla de Fluentis **Tipos de Documento** el tipo **Otros Documentos** configurado como en la imagen siguiente.

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image02.png)

![](/img/it-it/finance-area/declarations/declarations/periodic-vat-calculation/image03.png)

---

### TUTORIALES EN VIDEO (VIDEO TUTORIALS)

<iframe width="560" height="315" src="https://www.youtube.com/embed/HWjgN0yehEc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>