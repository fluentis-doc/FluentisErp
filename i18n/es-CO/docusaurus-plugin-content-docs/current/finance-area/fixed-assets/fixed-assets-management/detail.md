---
title: Detalle
sidebar_position: 1
ai_generated: true
---

**Estado del activo fijo<!-- Stato cespite -->**: se gestiona automáticamente en base a las operaciones vinculadas al activo fijo<!-- cespite --> y no debe forzarse manualmente. En caso de un activo fijo anterior<!-- cespite pregresso -->, al ingresar también el fondo de amortización, el estado pasará a Parcialmente/Totalmente amortizado. Para la inserción correcta de un activo fijo anterior, consulte [**el anexo al artículo sobre el registro contable de un activo fijo**.](/docs/finance-area/ledger-records/records/ledger-record)<!-- l'allegato all'articolo sulla registrazione contabile di un cespite -->

La **fecha de inicio de actividad<!-- data d'inizio attività -->**, propuesta como la fecha actual, es la fecha en la que el activo fijo<!-- cespite --> entra efectivamente en uso en la empresa: solo a partir de esta fecha será posible amortizar el activo fijo<!-- cespite -->. La **fecha de fin de actividad<!-- data di fine attività -->** normalmente no debe establecerse salvo en casos particulares para bloquear el cálculo de la amortización y dejar de mostrar el activo fijo<!-- cespite --> en el libro de activos fijos; en la gestión normal, de hecho, al completarse la amortización residual, el activo fijo<!-- cespite --> ya no se amortizará. Las **fechas<!-- date -->** relativas a las **garantías<!-- garanzie -->** son solo informativas y no están vinculadas a ninguna automatización.

En el campo **Activo fijo<!-- Cespite -->** se muestra automáticamente la subcuenta patrimonial de referencia para la categoría de activo fijo<!-- categoria cespite --> seleccionada; el código del proveedor siguiente no se gestiona automáticamente por el programa, ya que los proveedores y clientes de referencia en las distintas operaciones deben indicarse específicamente dentro de ellas. La subcuenta industrial hace referencia al detalle del plan de cuentas industrial, normalmente no utilizado.

El campo **Ubicación<!-- Ubicazione -->** hace referencia a la tabla homónima y sirve para guardar dónde se encuentra físicamente el activo fijo<!-- cespite --> (por ejemplo, una sede empresarial), mientras que **Matrícula<!-- Matricola -->** es un campo de texto libre donde anotar la ubicación y la matrícula del activo fijo<!-- cespite -->; el código **empleado<!-- dipendente -->** puede usarse para guardar la persona que usa el activo fijo<!-- cespite -->.

Según la configuración de los parámetros (Configuración > Utilidades > Parámetros Activos Fijos<!-- Configurazione > Utilità > Parametri Cespiti -->), es posible ver adicionalmente un **porcentaje de amortización<!-- percentuale di ammortamento -->** fiscal ‘personalizado’ para cada activo fijo<!-- cespite --> individual, que tendrá prioridad sobre el de la categoría a la que pertenece, así como la unidad de medida para las cantidades valoradas en la ficha del activo fijo<!-- scheda cespite -->.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image01.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image02.png)

 

En el campo **Tipos de Deducibilidad<!-- Tipi Deducibilità -->** se puede asignar al activo fijo<!-- cespite --> su tipo prioritario de deducibilidad fiscal de las amortizaciones. El desplegable enlaza con la tabla específica donde codificar el código y la descripción de los posibles tipos de deducibilidad y en la cuadrícula inferior el porcentaje de deducibilidad que se utilizará durante el cálculo de la cuota de amortización para calcular la parte fiscalmente deducible. Los campos de fecha de inicio / fecha de fin permiten gestionar posibles cambios de tasa manteniendo el historial.

La sección de **Centros de costo<!-- Centri di costo -->**: permite atribuir un porcentaje de valoración automática de las amortizaciones a los diferentes centros de costo definidos en la empresa.
Para habilitar su lectura es necesario activar, dentro del formulario Parámetros > Administración > Parámetros activos fijos<!-- Parametri > Amministrazione > Parametri cespiti -->, la **casilla de habilitación de centro contable<!-- flag Abilitazione centro contabilità -->**.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image03.png)

 

Luego hay una serie de casillas de verificación visibles abriendo el Expander Extra Data:

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image04.png)

 

el valor por defecto del activo fijo<!-- cespite --> **en uso** (si la casilla no está marcada, el activo fijo<!-- cespite --> no podrá ser amortizado), el estado del activo fijo<!-- cespite --> **usado** (si la casilla está marcada, la amortización anticipada solo se aplicará el primer año de compra y la casilla Amortización primer año (presente en la tabla de ** [Categorías activos fijos](/docs/configurations/tables/finance/fixed-asset-category) **) no tendrá efecto, por lo que los porcentajes de aplicación de la amortización del primer año no se reducirán); 

**En mantenimiento** significa que el activo fijo<!-- cespite --> debe ser incluido en el informe de mantenimientos; 

**Dado de baja** es una casilla activa solo para categorías de activos fijos intangibles y sirve para excluirlo de la impresión en el libro de activos fijos en caso de que el valor patrimonial haya sido dado de baja del balance (amortización directa en cuenta y no en fondo); 

**Amortización total** permite asignar al activo fijo<!-- cespite --> el 100% de la amortización directamente en el primer año: al guardar el activo fijo<!-- cespite --> en el ERP se verificará la corrección de esta configuración en función del límite definido en la categoría de activo fijo<!-- categoria cespite -->; será visible el estado del activo fijo<!-- cespite --> impreso o no, lo que indicará la no modificabilidad de los datos principales en caso de que ya haya sido incluido en una impresión definitiva del libro de activos fijos amortizables;

Finalmente, las casillas **Ricavómetro** y **Estudios sectoriales** sirven para identificar los activos fijos<!-- cespiti --> a considerar para estos requisitos fiscales.

| Función | Significado |
| --- | --- |
| Guardar<!-- Salva --> | Guarda el activo fijo<!-- cespite -->, obligatorio para asignar un número al activo fijo<!-- cespite --> y activar las diversas pestañas. |
|  [Documentos](/docs/guide/common/operations-with-data/document-manager)  | Gestión del archivado documental asociado a la ventana en uso. |