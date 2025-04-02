---
title: tipi spese
sidebar_position: 11
---

En esta tabla se definen tipos de gastos finales a añadir a los documentos (en particular del ciclo activo) para el cargo automático.

Pueden añadirse directamente en el documento, o bien en el registro del cliente para automatizar la entrada del gasto.

### Campos de vinculación artículo y IVA

**Tipo / Descripción (Tipo / Descrizione)**: Código y descripción del gasto para poder llamarlo.

**Clase / Código / Descripción artículo (Classe / Codice / Descrizione articolo)**: campo para realizar la asociación entre el tipo de gasto y un código de artículo de referencia.

**Cuenta / Subcuenta / Descripción (Conto / Sottoconto / Descrizione)**: necesario para asociar una cuenta contable sobre la cual contabilizar automáticamente el reembolso del gasto en cuestión.

**IVA / Descripción (IVA / Descrizione)**: necesario para especificar el código de IVA (tasa o código de exención) al cual se facturará el reembolso del gasto.

**tipo iva**: Tipo de IVA para gestionar el reembolso (salvo en casos o regímenes de IVA especiales, indicar Genérico).

### Indicador de vinculación a las lógicas {#link-to-logic}

**varie**: identifica un gasto variable a cargo simple. Los gastos Varios presentes en los documentos se incluirán en el documento resumido que procesa los propios documentos.

**incasso**: al activar este indicador, el gasto se calculará automáticamente uno para cada cuota de recibo bancario definido en las condiciones de pago (por lo tanto, funciona solo con este tipo de pago). Los gastos de Cobro están sujetos automáticamente al IVA principal del documento.

**trasporto**: al activar este indicador, el gasto se calculará en la factura uno por cada DDT que contribuyó a generar la factura; en caso de cumplimiento de más pedidos en un DDT, se reportará un solo gasto de cobro.

**Embalaje (Imballo):**

**Envío (Spedizione):**

**viaggio**: si está habilitado, el tipo de gasto se propondrá en la lista de gastos seleccionables en las intervenciones del área Proyectos.

**tipo spesa viaggio**: habilitado solo si el indicador "Viaje" está activado, identifica el tipo de gasto de Viaje: necesario para habilitar campos específicos en los gastos de las intervenciones (por ejemplo, en el caso de Distancia se habilitarán los campos de km y costo por km, etc.)

**Sello / Valor del Sello (Bollo / Valore Bollo)**: al utilizar este tipo con el valor correspondiente indicado en el campo adyacente, se activa la lógica del sello en la factura en caso de exención de IVA y documento superior a 77 euros (ver normas actuales para detalles), además de la valorización de la etiqueta correspondiente en la factura electrónica.

:::note[Info]
La lógica, en detalle, prevé que si el cliente tiene gastos de sello en su registro, se realice la suma del valor imponible para las líneas del documento que tengan el código de IVA incluido en las siguientes categorías:

No Imponible
Exento
Excluido

Si el total (convertido a la divisa de la empresa con el tipo de cambio de la cabecera de la factura) es mayor que el **Límite mínimo de gastos** de la sección **Gastos de Sello** en la tabla de la empresa, se agregará como gasto de sello.

Los códigos de IVA de los tipos mencionados anteriormente también deben tener el indicador *Base para cálculo de sello* activado.
:::

**Valor estadístico intra (Val. stat. intra)**: con esta lógica, el gasto final ingresado en la factura se distribuirá sobre las líneas del documento a efectos de la creación de modelos intrastat a partir del procedimiento de creación automática (de las facturas).

**ripartito**: el indicador permite que el registro de almacén tenga el gasto distribuido entre las distintas líneas del registro de la factura; este indicador no implica que el gasto se distribuya en los registros de los documentos conectados.

**RAEE:**

**IVA obligatoria (IVA obbl.)**

### Otros campos

**Categoría de mercancía (Categoria merceologica):**

**Códigos / Descripción de Nóminas (Codici / Descrizione Paghe)**: código utilizado para insertar en el cuadro "Valores" del Resumen para recibos de empleados los gastos presentes en las intervenciones y en las declaraciones de actividad.

**tipo attività**: válido solo para gastos del tipo "Viaje" - Horas de Viaje". El tipo de actividad se utiliza para generar automáticamente la declaración de actividad en función de las horas de viaje declaradas en los gastos incurridos de la intervención en el área Proyectos.

**Categoría de actividad (Categoria attività)**: válido solo para gastos del tipo "Viaje" - Horas de Viaje". La categoría de actividad se utiliza en la declaración de actividad generada automáticamente según las horas de viaje declaradas en los gastos incurridos de la intervención en el área Proyectos.

### Retención y caja de previsión

**Caja de previsión / Sujeto de retención / Código de P.A. (Cassa previdenza / Soggetto Ritenuta / Codice P.A.)**: campos para gestionar en el archivo XML de las facturas electrónicas de venta la *Caja de previsión* que se puede aplicar en la factura de un profesional.

Si el registro del cliente de la factura tiene el indicador [**ritenuta d’acconto**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/fiscal-information) activado, un receptor que utiliza Fluentis podría crear una factura de venta y enviarla a Sdi: si tiene un reembolso de gasto de Caja de previsión (típicamente el 4%), codifica este tipo de gasto en la presente tabla, luego establece si está sujeto a retención o no (con el segundo indicador) e inserta en el tercer campo el código que prevé Sdi:

:::note Ejemplo de codificación
TC01	Caja nacional de previsión y asistencia para abogados y procuradores legales 

TC02	Caja de previsión de doctores comerciales

TC03	Caja de previsión y asistencia para agrimensores

TC04	Caja nacional de previsión y asistencia para ingenieros y arquitectos independientes

TC05	Caja nacional del notariado

TC06	Caja nacional de previsión y asistencia para contadores y peritos comerciales

TC07	Entidad nacional de asistencia para agentes y representantes de comercio (ENASARCO)

TC08	Entidad nacional de previsión y asistencia para consultores de trabajo (ENPACL)

TC09	Entidad nacional de previsión y asistencia para médicos (ENPAM)

TC10	Entidad nacional de previsión y asistencia para farmacéuticos (ENPAF)

TC11	Entidad nacional de previsión y asistencia para veterinarios (ENPAV)

TC12	Entidad nacional de previsión y asistencia para empleados de agricultura (ENPAIA)

TC13	Fondo de previsión para empleados de empresas de envío y agencias marítimas

TC14	Instituto nacional de previsión para periodistas italianos (INPGI)

TC15	Obra nacional de asistencia a huérfanos de sanitarios italianos (ONAOSI)

TC16	Caja autónoma de asistencia complementaria para periodistas italianos (CASAGIT)

TC17	Entidad de previsión para peritos industriales y peritos industriales graduados (EPPI)

TC18	Entidad de previsión y asistencia pluricategorial (EPAP)

TC19	Entidad nacional de previsión y asistencia para biólogos (ENPAB)

TC20	Entidad nacional de previsión y asistencia para la profesión de enfermería (ENPAPI)

TC21	Entidad nacional de previsión y asistencia para psicólogos (ENPAP)

TC22	INPS
:::

---

**lingue**

Para cada tipo de pago seleccionado en la cuadrícula superior, es posible definir descripciones en varios idiomas: utilizables para impresiones personalizadas.