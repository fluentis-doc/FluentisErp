### Formulario<!-- Form -->

El formulario<!-- form --> de los datasource<!-- datasource --> es accesible mediante la siguiente ruta: **Applications Resource Manager** > **Database** > **Data Sources**.  

El formulario<!-- form --> de los datasource<!-- datasource --> se presenta de la siguiente manera:
* Un menú **ribbon** con el que es posible realizar las habituales operaciones de CRUD y el botón **vista previa<!-- anteprima -->** que permite visualizar el resultado de la ejecución del datasource<!-- datasource -->.
* Un filtro estándar con el que es posible filtrar los registros existentes (los datasource<!-- datasources -->) por Código, Descripción, Objeto<!-- oggetto -->, Área y Fecha.
* Una cuadrícula de resultados donde se puede visualizar el listado de los datasource<!-- datasource --> presentes en la base de datos<!-- base dati -->.

### Creación de un nuevo datasource<!-- Creazione di un nuovo datasource -->

La creación de un nuevo datasource<!-- datasource --> se realiza mediante el botón 'Nuevo<!-- Nuovo -->' y requiere completar:
* Los datos de cabecera, como código y descripción.
* El tipo de datasource<!-- tipologia del datasource -->, diferenciando entre:
  * datasource<!-- datasource --> basados en un objeto<!-- oggetto --> estándar o personalizado de Fluentis.
  * datasource<!-- datasource --> basados en una consulta SQL<!-- query SQL -->.
  * datasource<!-- datasource --> de tipo **GROUP BY** basados en un objeto<!-- oggetto --> estándar o personalizado de Fluentis.

Dependiendo del tipo de datasource<!-- tipologia di datasource --> seleccionado, los campos de entrada a rellenar serán diferentes.

* Para los datasource<!-- datasource --> simples, es decir, basados en un **objeto<!-- oggetto -->** se deberán completar:
  * código.
  * tipo de datasource<!-- tipo di datasource -->, eligiendo uno de tipo simple.
  * descripción.
  * código del objeto<!-- oggetto --> Fluentis en el que se desea basar el datasource<!-- datasource -->.
  * fecha de finalización de validez, que permite especificar una fecha después de la cual el datasource<!-- datasource --> ya no estará disponible para el usuario de Fluentis.
  * Take Rows / Skip Rows, permite definir un rango de filas a tomar o saltar.
  * Área, es una descripción tomada del diccionario.
* Para los datasource<!-- datasource --> basados en una **consulta SQL<!-- query SQL -->** se deben completar:
  * los campos de cabecera, tales como
    * código.
    * descripción.
  * tipo de datasource<!-- tipo di datasource -->, seleccionando SQL Query DataSource,
  * fecha de finalización de validez, que permite especificar una fecha después de la cual el datasource<!-- datasource --> ya no estará disponible para el usuario de Fluentis.
  * SQL Query, especificando una consulta creada y guardada previamente a través del **FluentisQueryStudio**.
  * contexto (opcional).
  * parámetros (opcional).
  * área, es una descripción tomada del diccionario.
  * Módulo de negocio<!-- Modulo di business -->.

Respecto al uso de **FluentisQueryStudio** como herramienta para la creación/guardado de consultas en la base de datos<!-- base dati -->, consulte el siguiente [ENLACE](/docs/applications/application-resource-manager/database/database-intro).
Es fundamental que la consulta creada a través de **FluentisQueryStudio** cumpla normas precisas de formato:
* la consulta debe devolver al menos los campos **Id**, **Code**, **Description** para poder ser reutilizada dentro de un datasource<!-- datasource -->, de lo contrario no será visible dentro de la combobox correspondiente.

* Finalmente, existen los datasource<!-- datasource --> basados en la cláusula **GROUP BY**.
* Para este tipo de datasource<!-- tipologia di datasource -->, es necesario completar:
  * código y descripción,
  * tipo de datasource<!-- tipo datasource -->, seleccionando 'GROUP BY Data Source',
  * fecha de finalización de validez (opcional),
  * objeto<!-- oggetto --> sobre el cual basar el datasource<!-- datasource -->,
  * take rows / skip rows,
  * área, es una descripción tomada del diccionario.

* A través de la pestaña de Propiedades es posible definir los criterios de agregación que aprovecharán la cláusula GROUP BY.
De modo similar al lenguaje SQL, la cláusula GROUP BY permite agrupar los registros según determinados criterios de agregación.
En particular, en la pestaña derecha 'Propiedades visibles' hay una tabla con los siguientes campos:
* código
* alias
* rol<!-- ruolo -->
* criterio de agregación<!-- criterio di aggregazione -->
* ruta de la propiedad<!-- percorso della proprietà -->
* fórmula
* ordenar por posición<!-- ordina per posizione -->
* ordenamiento<!-- ordinamento -->
* suma incremental<!-- somma incrementale -->

Para gestionar el criterio de agregación<!-- criterio di aggregazione --> es necesario operar en la columna 'Criterio de agregación<!-- Criterio di aggregazione -->', la cual permite elegir un valor entre:
* Dimensión, o
* Métrica.

Las **dimensiones<!-- dimensioni -->** son un atributo cualitativo, es decir, una categoría o descriptor. Sirven para segmentar o agrupar los datos.
Las **métricas<!-- metriche -->** son un atributo cuantitativo, es decir, un valor numérico que puede ser medido, agregado o calculado.
Así, podríamos agregar las facturas de venta (objeto FSSalesInvoice) por tipo de factura (FSSalesInvoiceType.Code), como se muestra en la captura de pantalla a continuación.
![](/img/it-it/applications/database/20250529162809.png)