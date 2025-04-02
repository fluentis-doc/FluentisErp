---
title: dettaglio
sidebar_position: 1
---

**stato cespite**: se gestiona automáticamente en función de las operaciones relacionadas con el activo y no debe forzarse. En caso de un activo previo, al ingresar también el fondo de amortización, el estado pasará a Parcialmente/Totalmente amortizado. Para la correcta inserción de un activo previo, consulte [**el anexo del artículo sobre el registro contable de un activo**](/docs/finance-area/ledger-records/records/ledger-record).

La **fecha de inicio de actividad (data d'inizio attività)**, propuesta como la fecha actual, es la fecha en la cual el activo ha entrado efectivamente en uso en la empresa: solo a partir de esta fecha será posible amortizar el activo. La **fecha de fin de actividad (data di fine attività)** normalmente no debe configurarse a menos que haya casos especiales para bloquear el cálculo de la amortización y ya no visualizar el activo en el libro de activos; en la gestión normal, al completar la amortización residual, el activo no será amortizado de todos modos. Las **fechas** relativas a las **garantías** tienen una función informativa no relacionada con ningún automatismo.

En el campo **cespite** se reporta automáticamente la cuenta patrimonial de referencia para la categoría de activo seleccionada; el siguiente código del proveedor no es gestionado automáticamente por el programa, ya que los proveedores y clientes de referencia de las diversas operaciones se indicarán específicamente dentro de estas. La subcuenta industrial se refiere en detalle al plan de cuentas industrial, que normalmente no se utiliza.

El campo **ubicazione** hace referencia a la tabla homónima y sirve para guardar dónde se encuentra físicamente el activo (por ejemplo, una sede empresarial) mientras que **matricola** es un campo de texto libre, donde anotar la ubicación y la matrícula del activo; el código **dipendente** puede permitir almacenar el sujeto que utiliza el activo.

Dependiendo de la configuración de los parámetros (Configuración > Utilidades > Parámetros de Activos), también puede ser visible un **porcentaje de amortización** civil 'personalizado' para el activo individual, que se utilizará prioritariamente en comparación con el de la categoría a la que pertenece, al igual que la unidad de medida para las cantidades valoradas en la ficha del activo.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image01.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image02.png)


En el campo **tipi deducibilità** se puede asociar al activo individual su tipo prioritario de deducibilidad fiscal de las amortizaciones. La combo box remite a la tabla específica donde se codifican el código y la descripción de los posibles tipos de deducibilidad, y en la cuadrícula inferior la correspondiente porcentaje de deducibilidad que se utilizará, durante el cálculo de la cuota de amortización, para calcular la cuota deducible fiscalmente. Los campos de fecha de inicio / fecha de fin permiten gestionar eventuales cambios de alícuota manteniendo un registro de los anteriores.

La sección de **centri di costo**: permite atribuir un porcentaje de valorización automática de las amortizaciones a los diversos centros de costos definidos en la empresa. Para habilitar su lectura, es necesario activar, dentro del formulario Parámetros > Administración > Parámetros de activos, el **indicador de habilitación de centro contable (flag Abilitazione centro contabilità)**.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image03.png)


Luego hay una serie de casillas de verificación visibles al abrir el Expander Datos Extra:

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image04.png)


el estado del activo **in uso** (si el indicador no está presente, el activo no podrá ser amortizado), el estado del activo **usato** (si el indicador está activado, la amortización anticipada se aplicará solo el primer año de compra y el indicador de Amortización del primer año (presente en la tabla de **[Categorías de activos (Categorie cespiti)](/docs/configurations/tables/finance/fixed-asset-category)**) no tendrá efecto, por lo que los porcentajes de aplicación de las amortizaciones del primer año no serán reducidos); 

**in manutenzione** significa que el activo debe ser contabilizado en el informe de mantenimiento; 

**cessato** es un indicador activo solo para categorías de activos intangibles y se utiliza para excluir su impresión en el libro de activos en caso de que el valor patrimonial haya sido retirado del balance (amortización directa en cuenta y no en fondo); 

**Amortización total (Amm. Totale)** permite atribuir al activo la amortización del 100% directamente en el primer año: al guardar el activo, el ERP realizará una verificación de la corrección de esta configuración en relación con el límite establecido en la categoría de activo; será visible el estado del activo impreso o no, lo que indicará la no modificabilidad de las referencias de cabecera del activo en caso de que ya haya sido incluido en una impresión definitiva del libro de activos amortizables;

Para concluir, los indicadores **Ricavometro** y **Studi di settore** sirven para identificar los activos a considerar para estos requisitos fiscales.


| Función (Funzione) | Significado (Significato) |
| --- | --- |
| Guardar (Salva) | Guarda el activo, obligatorio para asignar un número al activo y activar las diversas pestañas. |
|  [Documentos (Documenti)](/docs/guide/common/operations-with-data/document-manager)  | Gestión del archivo documental asociado al formulario en uso. |