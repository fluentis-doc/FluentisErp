---
title: Nuevo Extra Data (Nuovo Extra Data)
sidebar_position: 1
---

Ir a **Inicio > Utilidades > ExtraData > ExtraData** y hacer clic en el botón **Nuevo**.

:::note La información requerida para crear nuevos ExtraData varía según el tipo de ExtraData seleccionado:  
1. **ExtraData Simples (ExtraData Semplici)**  
2. **ExtraData basados en objeto (ExtraData basati su oggetto)**  
3. **ExtraData basados en datasource (ExtraData basati su datasource)**  
:::

### **1. ExtraData Simple (ExtraData Semplice)**

A través del ExtraData simple es posible agregar nuevas propiedades simples a un objeto Fluentis existente.  
Las propiedades simples que pueden añadirse son de diferentes tipos:

- **Booleanos (Booleani)**.  
- **Cadenas (Stringhe)**.  
- **Números enteros (Numeri interi)**, **decimali**.  
- **Arreglos (Array)**.

#### 1.1 Encabezado (Testata)

En este caso, procedemos a crear un ExtraData **simple** de tipo cadena, llamándolo **Modelo**.

#### Campos específicos  
- **codice**: que identifica el extradata.  
- **tipo contenuto**: será de tipo simple.  
- **tipo widget**: define los modos de visualización y selección para los tipos Objeto y Datasource. Para el tipo Simple, debe dejarse vacío porque el widget cargado será el widget predeterminado del framework asociado al tipo de dato.  
- **nome**: debe ser una palabra presente en el diccionario; de lo contrario, debemos agregarla.  
- **tipo di dati**: se trata de la tipología del dato.  
- **stereotipo**: opciones adicionales sobre la formateo del campo, como texto multilínea o definición del número de decimales.  
- **descrizione**: es obligatorio - descripción que se mostrará, exactamente como el Nombre se selecciona del diccionario.  
- **Validez Inicio/Fin (Validity Start/End)**: si deseamos dar al extradata una validez temporal.  
- **Derecho de visualización / Derecho de modificación (View right / Modify right)**: para asociar un derecho específico que permita la visualización o la modificación del extradata.

El **stereotipo** es activable para el **tipo di dati**: Fecha (Date, DateTime y Time); Decimal (Currency y Numeric); Double, Float y Long (Numeric); Int (Color, Numeric y Year); Short (Numeric y Year); String (MultiLine).

El estereotipo es activable para todos los objetos activados y por objeto individual.

#### 1.2 Activaciones

La pestaña de **Activaciones** se refiere a los **objetos padre (oggetti padre)** de Fluentis sobre los que se anidan los ExtraData.  
Cada ExtraData puede tener múltiples objetos padre.

La cuadrícula de activaciones permite definir las clases sobre las que el ExtraData deberá estar disponible.

#### Campos específicos  
- **oggetto padre**: es el objeto al que se vincula el ExtraData, en nuestro caso FSItem. Cada ExtraData puede asociarse a más de un objeto.  
- **proprietà**: se trata de la propiedad del objeto padre en la que se cargará el ExtraData. En este caso, la propiedad ExtraData está presente en el objeto FSItem, generada por la referencia que conecta FSItem a FSItemExtraData.  
- **Requerido (Required)**: indica si el ExtraData es obligatorio para el objeto al que está asociado.  
- **Para imprimir (To Print)**: indica si el ExtraData debe estar disponible para la impresión.  
- **ordinamento**: se trata del orden del objeto padre, no tiene repercusiones en el funcionamiento, generalmente se deja en 0.  
- **Inicio válido (Start valid)** / **Fin de validez (End validity)**: si la validez es temporal, indica el inicio y el final del período en el que se podrá utilizar el ExtraData.  
- **Estereotipo (Stereotype)**: la formateo del campo, cambia dependiendo del tipo de dato. Debería sobrescribir el estereotipo general definido para el extradata si se desea forzar un comportamiento específico para un objeto particular diferente al predeterminado.

### Inserción del ExtraData en el formulario de detalles

Una de las principales novedades introducidas a partir de Fluentis 2021 es la posibilidad de insertar directamente en el formulario de detalles el widget que cargará los contenidos del ExtraData.  
En este caso, dado que el ExtraData es de tipo simple, se cargará el widget predeterminado del framework asociado al tipo de dato.

Para incluir el ExtraData en el formulario de detalle del artículo (FSItem), podemos utilizar el **navegador de formularios (form navigator)** y **object navigator**.  
1. Desde el **object navigator**, expandimos el nodo ExtraData relacionado con el objeto de negocio y seleccionamos el ExtraData que nos interesa.  
2. Desde el **Navegador de Formularios (Form Navigator)**, expandimos el navegador hasta la pestaña Generalidades de la que queremos insertar el ExtraData.  

Para visualizar el ExtraData en el formulario de detalle del artículo, basta con arrastrar y soltar desde el Navegador de Objetos al Navegador de Formularios.  
Para hacer que la visualización del ExtraData en el formulario de detalle del artículo sea **persistente**, es suficiente crear un perfil específico y cargarlo cada vez que se necesite visualizar el ExtraData.  
Finalmente, también en el formulario de detalle del artículo, hay una pestaña específica denominada **Extra data** donde podemos encontrar cada ExtraData asociado al artículo.

### **2. ExtraData basado en objeto (ExtraData basato su oggetto)**

A través del ExtraData basado en objeto, es posible vincular una propiedad representada por un objeto **standard** o **personalizado (custom)** con un objeto de **Fluentis**.  
*Para explicar mejor este concepto, utilizamos un ejemplo práctico donde vinculamos el objeto **FSColor** que representa un conjunto de **colores**, con el objeto Estándar de Fluentis **articolo**.*

#### 2.1 Encabezado (Testata)

Procedemos a crear el **ExtraData** basado en el objeto **FSColor** llamándolo **Color**.

- **Código (Code)**: obligatorio - código.  
- **Tipo de contenido (Content Type)**: obligatorio - permite seleccionar el widget de visualización del ExtraData; hay tres opciones disponibles:  
  - **Combobox**: se trata de un menú desplegable que muestra los valores por código/descripción.  
  - **Autocomplete Code**: que permite escribir el código que se autocompletará filtrando los registros disponibles.  
  - **Autocomplete Description**: que permite escribir la descripción que se autocompletará filtrando los registros disponibles.  
- **Tipo de widget (Widget Type)**:  
- **Objeto de negocio (Business Object)**: obligatorio - permite seleccionar el objeto sobre el cual se creará el extradata, por ejemplo, **FSColor** para permitir la creación de un extradata basado en la **tabla de códigos de color**.

#### 2.2 Activaciones

Procedemos a vincular el **ExtraData** al objeto de negocio **FSItem** (Articolo).  
Vale exactamente lo que se describió en el párrafo anterior.

### Inserción del ExtraData en el formulario de detalles

Después de abrir el formulario de detalles del artículo interesado, para incluir el ExtraData en el formulario de detalles del artículo **FSItem**, podemos usar el **navegador de formularios (form navigator)** y **object navigator**.  
1. Desde el **object navigator**, expandimos el nodo ExtraData relacionado con el objeto de negocio y seleccionamos el ExtraData que nos interesa.  
2. Desde el **Navegador de Formularios (Form Navigator)**, expandimos el navegador hasta la pestaña Generalidades de la que queremos insertar el ExtraData.  

Para visualizar el ExtraData en el formulario de detalle del artículo, basta con arrastrar y soltar del Navegador de Objetos al Navegador de Formularios.  
En el ejemplo, se ha reportado el ExtraData 'Color' en el LayoutGroup que define los datos de encabezado del artículo (FSItem).  
El ExtraData tendrá un widget de tipo combobox (desplegable) y mostrará exactamente los valores de **código** y **descripción** guardados en la tabla correspondiente de MSSQL.

### **3. ExtraData basado en Datasource (ExtraData basato su Datasource)**

A través del ExtraData basado en un datasource, es posible vincular un objeto Fluentis a una tabla externa no presente por defecto.

*Para explicar mejor este escenario aplicativo, utilizamos un ejemplo práctico donde se ha creado una tabla personalizada denominada 'typology', que representa 3 diferentes acabados.*  
A través del **FluentisQueryStudio**, procedemos a guardar una consulta SQL para la selección de todos los valores en la tabla.

La tabla que hemos creado se presenta de la siguiente manera:

| Id  | Código (Code) | Descripción (Description) |
| --- | ------------- | ------------------------- |
| 1   | Finitura1    | Satinada                 |
| 2   | Finitura2    | Lucida                   |
| 3   | Finitura3    | Opaca                    |

y es el resultado de esta consulta SQL.

```SQL
SELECT id AS Id, code AS Code, description AS Description FROM DBO.TYPOLOGY
```

:::danger Advertencia
La estructura de la consulta debe basarse necesariamente en las tres columnas: **Id**, **Código (Code)**, **description**; de lo contrario, no será posible crear el datasource correspondiente.  
:::

A través del **FluentisQueryStudio**, procedemos a crear el datasource que estará basado en la consulta vista anteriormente. Para el uso del **FluentisQueryStudio**, consulte la documentación específica en el siguiente [**Enlace**](#) 

#### 3.1 Encabezado (Testata)

Procedemos ahora a crear el ExtraData llenando los datos relacionados con el encabezado:  
- **Código (Code)** y **descrizione**.  
- **Tipo de Datasource (DataSource Type)**: seleccionar SQL Query DataSource.  
- **sql query**: seleccionar la consulta deseada.  
- **area**: valor del diccionario.  

#### 3.2 Activaciones

Procedemos a vincular el **ExtraData** al objeto de negocio **FSItem** (Articolo).  
Vale exactamente lo que se describió en el párrafo anterior.

### Inserción del ExtraData en el formulario de detalles

Después de abrir el formulario de detalles del artículo interesado, para incluir el ExtraData en el formulario de detalles del artículo (FSItem), podemos usar el **navegador de formularios (form navigator)** y **object navigator**.  
1. Desde el **object navigator**, expandimos el nodo ExtraData relacionado con el objeto de negocio y seleccionamos el ExtraData que nos interesa.  
2. Desde el **Navegador de Formularios (Form Navigator)**, expandimos el navegador hasta la pestaña Generalidades de la que queremos insertar el ExtraData.  

Para visualizar el ExtraData en el formulario de detalle del artículo, basta con arrastrar y soltar desde el Navegador de Objetos al Navegador de Formularios.  
El ExtraData tendrá un widget de tipo combobox (desplegable) y mostrará exactamente los valores de **código** y **descripción** guardados en la tabla correspondiente en la base de datos.

#### 3.3 Propagación de los ExtraData

La funcionalidad referente a la propagación de los ExtraData permite **extender** un determinado **ExtraData** definido en un objeto específico a otro objeto **derivado**.  
Por ejemplo, un ExtraData definido en el objeto **FSItem** (Articolo) podrá ser propagado al objeto **FSSalesOrderItem** (Artículos del pedido de venta) porque **FSSalesOrderItem** **extiende** la clase **FSItem**.

#### Campos específicos  
- **Ruta de propiedad (Property path)**: obligatorio - propiedad que vinculará las clases.  
- **Propiedad de colección (Collection property)**: obligatorio - la propiedad de la colección.  
- **Editable**: hace que el extradata sea modificable de manera independiente.  
- **Prioridad (Proprity)**: indica la prioridad.  
- **Fecha de validez de inicio / Fecha de validez de fin (From val. date / To validity date)**: si deseamos que sea temporal, por lo que tendrá un inicio y un fin.

Para gestionar la propagación de un objeto principal a uno derivado, es necesario tener, en la pestaña de **activaciones**, el ExtraData activo en ambos objetos y gestionar luego la propagación a través de la pestaña **propagación**.

### Inserción del ExtraData en el formulario de detalles

Después de abrir el formulario de detalles del **pedido de venta** interesado, para incluir el ExtraData en el formulario de detalles, podemos usar el **navegador de formularios (form navigator)** y **object navigator**.  
1. Desde el **object navigator**, expandimos el nodo de la colección de **artículos**, y luego expandimos el nodo ExtraData.  
2. Arrastramos el ExtraData directamente sobre la cuadrícula de artículos asociados al pedido de venta.  
El ExtraData tendrá un widget de tipo combobox (desplegable) y mostrará el valor **código** guardado en la tabla correspondiente del lado de MSSQL.

### **4. Inserción de ExtraData en Reporte (Inserting ExtraData into Report)**

En lo que respecta a la inclusión de los **ExtraData** en los reportes, se pueden configurar 3 escenarios distintos según el tipo de ExtraData:
* ExtraData Simple (ExtraData Semplice).  
* ExtraData basado en un objeto (ExtraData basato su un oggetto).  
* ExtraData basado en un datasource (ExtraData basato su un datasource).

### 4.1 ExtraData simple

Para el ExtraData simple, es necesario incluir el siguiente método en la sección del script del reporte.  
En el ejemplo, un ExtraData de tipo objeto ha sido asociado a una factura de venta.

```cs
private void calcExtraData_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e) {
    FSSalesInvoice row = (FSSalesInvoice)e.Row;
    if (row != null) {
        var extraData = row.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "ExtradataXreport").FirstOrDefault();
        if (extraData != null) {
            e.Value = extraData.ExtraDataValue;
        }
    }  
}
```

### 4.2 ExtraData basado en objeto

Para el ExtraData basado en objetos, es necesario incluir el siguiente método en la sección del script del reporte.  
En el ejemplo, un ExtraData de tipo objeto ha sido asociado a una factura de venta.

```cs
private void calcExtraData_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)
{
    FSSalesInvoice row = (FSSalesInvoice)e.Row;
    if (row != null)
    {
        var extraData = row.ExtraData 
            .Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "ObjectExtraData")
            .FirstOrDefault();
        
        if (extraData != null)
        {
            var record = GetReport().DataProvider
                .Linq<FSColor>()
                .Where(x => x.Id == extraData.ExtraDataId)
                .FirstOrDefault();
            
            if (record != null)
            {
                e.Value = record.Description; 
            }
        }
    }
}
```

### 4.3 ExtraData basado en datasource

Para el ExtraData basado en datasource, es necesario incluir el siguiente método en la sección del script del reporte.  
El ExtraData basado en datasource se llama ```Model```.  
En el ejemplo, se ha creado una tabla personalizada ```dbo.Model``` que contiene los siguientes datos:

```sql
SELECT Code, Description FROM dbo.Model
```

 <table>
        <tr>
            <th>Código (Codice)</th>
            <th>Descripción (Descrizione)</th>
        </tr>
        <tr>
            <td>Finitura1</td>
            <td>Lucida</td>
        </tr>
        <tr>
            <td>Finitura2</td>
            <td>Opaca</td>
        </tr>
        <tr>
            <td>Finitura3</td>
            <td>Cromata</td>
        </tr>
    </table>

En el script relativo a la generación del reporte, se debe incluir el siguiente método de ejemplo.

```cs
private void calcExtraData_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)
{
    FSSalesInvoice row = (FSSalesInvoice)e.Row;
    if (row != null)
    {
        var extraData = row.ExtraData 
            .Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "Model")
            .FirstOrDefault();

        if (extraData != null)
        {
            if (extraData.ExtraDataObject != null && 
                extraData.ExtraDataObject.DataSource != null && 
                !string.IsNullOrEmpty(extraData.ExtraDataObject.DataSource.SqlQuery.Script))
            {
                string extradDataObjectId = extraData.ExtraDataId.ToString();
                string sqlQueryExtraData = extraData.ExtraDataObject.DataSource.SqlQuery.Script + 
                                           " WHERE Id = " + extradDataObjectId;
                
                IExecuteSql execSql = (IExecuteSql)GetReport().DataProvider;
                using (IDbCommand command = execSql.CreateCommand())
                {
                    command.CommandText = sqlQueryExtraData;
                    using (IDataReader reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            e.Value = reader.GetValue(2);
                        }
                    }
                }
            }
        }
    }
}
```