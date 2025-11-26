---
title: Nuevo Extra Data
sidebar_position: 1
ai_generated: true
---

Vaya a **Inicio > Utilidades > ExtraData > ExtraData** y haga clic en el botón **Nuevo**<!-- Nuovo -->

:::note La información solicitada para crear nuevos ExtraData varía según el tipo de ExtraData seleccionado:   
1. **ExtraData Sencillos<!-- ExtraData Semplici -->**
2. **ExtraData basados en objeto<!-- ExtraData basati su oggetto -->**
3. **ExtraData basados en datasource<!-- ExtraData basati su datasource -->**
:::

### **1. ExtraData Sencillo<!-- ExtraData Semplice -->**


A través del ExtraData sencillo<!-- ExtraData semplice --> es posible agregar nuevas propiedades simples a un objeto Fluentis existente.  
Las propiedades simples que pueden añadirse son de diferentes tipos:  

- **Booleanos**.
- **Cadenas**.
- **Números enteros**, **decimales**.
- **Arrays**.

#### 1.1 Encabezado<!-- Testata -->
 
En este caso procedemos a crear un ExtraData **sencillo<!-- semplice -->** de tipo cadena llamándolo **Modello**.  

#### Campos específicos<!-- Campi specifici -->  
- **Código**: que identifica el extra data<!-- extradata -->.
- **Tipo de contenido**: será de tipo simple<!-- semplice -->.
- **Tipo de Widget**: define los modos de visualización y selección para los tipos Objeto y Datasource. Para el tipo Simple debe dejarse vacío porque el widget cargado será el widget por defecto del framework asociado al tipo de dato.
- **Nombre**: debe ser una palabra presente en el diccionario, de lo contrario habrá que agregarla.  
- **Tipo de datos**: se refiere al tipo de dato.
- **Estereotipo**: opciones adicionales sobre la formateación del campo, como texto multilínea o definición del número de decimales.
- **Descripción**: es obligatorio - descripción que se visualizará, igual que el Nombre puede seleccionarse del diccionario.
- **Inicio/fin de validez**: si queremos dar al extra data una validez temporal<!-- validità temporanea -->.
- **Derecho de visualización / derecho de modificación**: para asociar un derecho específico que permita la visualización o modificación del extra data<!-- extradata -->.

El **estereotipo<!-- stereotype -->** es activable para el **Tipo de datos**: Date (DateTime y Time); Decimal (Currency y Numeric); Double, Float y Long (Numeric); Int (Color, Numeric y Year); Short (Numeric y Year); String (MultiLine).

El estereotipo puede activarse para todos los objetos activados y por objeto individual. 

#### 1.2 Activaciones<!-- Attivazioni -->

La pestaña de **Activaciones<!-- Attivazioni -->** se refiere a los **objetos padre** de Fluentis a los que se asocian los ExtraData.  
Cada ExtraData puede tener varios objetos padre.

La cuadrícula de activaciones permite definir las clases en las que el ExtraData deberá estar disponible.  

#### Campos específicos<!-- Campi specifici -->  
- **Objeto padre**: es el objeto al que se vincula el ExtraData, en nuestro caso FSItem. Cada ExtraData puede estar asociado a varios objetos.  
- **Propiedad**: se trata de la propiedad del objeto padre en la que se cargará el ExtraData. En este caso, la propiedad ExtraData está presente en el objeto FSItem, generada por la referencia que conecta FSItem con FSItemExtraData.  
- **Requerido**: indica si el ExtraData es obligatorio para el objeto al cual está asociado.
- **Para imprimir**: indica si el ExtraData debe estar disponible para impresión.
- **Ordenamiento**: es el orden del objeto padre, no tiene repercusiones sobre el funcionamiento, normalmente se deja en 0.
- **Inicio de validez / Fin de validez**: si la validez es temporal, indica el inicio y fin del periodo en el cual el ExtraData podrá ser utilizado.  
- **Estereotipo**: formateo del campo, cambia según el tipo de dato. Sobrescribe el estereotipo general definido para el extra data si se quiere forzar un comportamiento específico para un objeto diferente al predeterminado.

### Inserción del ExtraData en el formulario de detalle

Una de las principales novedades introducidas a partir de Fluentis2021 es la posibilidad de insertar directamente en el formulario de detalle el widget que cargará el contenido del ExtraData.  
En este caso, dado que el ExtraData es de tipo simple, se cargará el widget por defecto del framework asociado al tipo de dato.  

Para incluir el ExtraData en el formulario de detalle del artículo (FSItem), podemos usar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo ExtraData relativo al objeto de negocio y seleccionamos el ExtraData que nos interesa.
2. Desde el **Form Navigator**, expandimos el navegador hasta la pestaña Generalidades donde deseamos insertar el ExtraData.  

Para visualizar el ExtraData en el formulario de detalle del artículo basta con arrastrar y soltar desde el Navegador de Objetos al Form Navigator.  
Para hacer **persistente** la visualización del ExtraData en el formulario de detalle del artículo es suficiente crear un perfil específico y cargarlo cuando sea necesario visualizar el ExtraData.  
Finalmente, también en el formulario de detalle del artículo, hay una pestaña específica llamada **Extra data** donde se puede encontrar cada ExtraData asociado al artículo.

### **2. ExtraData basado en objeto<!-- ExtraData basato su oggetto -->**
A través del ExtraData basado en objeto es posible vincular una propiedad representada por un objeto **estándar** o **personalizado** con un objeto de **Fluentis**.   
*Para explicar mejor este concepto, utilizamos un ejemplo práctico donde vinculamos el objeto **FSColor** que representa un conjunto de **colores**, con el objeto Estándar de Fluentis **FSItem (Artículo)***. 

#### 2.1 Encabezado<!-- Testata -->

Procedemos a crear el **ExtraData** basado en el objeto **FSColor** llamándolo **Color**.

- **Código:** obligatorio - código.
- **Tipo de Contenido:** obligatorio - permite seleccionar el widget de visualización del ExtraData, hay tres opciones disponibles:
  - **Combobox**: es un menú desplegable que muestra los valores por código/descripción.
  - **Autocompletar por Código**: permite escribir el código que se completará automáticamente filtrando los registros disponibles.​
  - **Autocompletar por Descripción**: permite escribir la descripción que se completará automáticamente filtrando los registros disponibles.
- **Tipo de Widget:**
- **Objeto de Negocio:** obligatorio - permite seleccionar el objeto sobre el que se deberá crear el extra data, por ejemplo, **FSColor** para permitir crear un extra data basado en la **tabla de códigos de color**. 

#### 2.2 Activaciones<!-- Attivazioni -->

Procedemos a vincular el **ExtraData** al objeto de negocio **FSItem** (Artículo).  
Se aplica exactamente lo indicado en el párrafo anterior.  

### Inserción del ExtraData en el formulario de detalle

Después de abrir el formulario de detalle del artículo interesado, para incluir el ExtraData en el formulario de detalle del artículo **FSItem**, podemos utilizar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo ExtraData relativo al objeto de negocio y seleccionamos el ExtraData que nos interesa.
2. Desde el **Form Navigator**, expandimos el navegador hasta la pestaña Generalidades donde deseamos insertar el ExtraData.  

Para visualizar el ExtraData en el formulario de detalle del artículo basta con arrastrar y soltar desde el Navegador de Objetos al Form Navigator.  
En el ejemplo, se ha colocado el ExtraData 'Color' en el LayoutGroup que define los datos de cabecera del artículo (FSItem).   
El ExtraData tendrá un widget de tipo combobox (dropdown) y mostrará exactamente los valores de **código** y **descripción** guardados en la correspondiente tabla MSSQL.

### **3. ExtraData basado en Datasource<!-- ExtraData basato su Datasource -->**

Con el ExtraData basado en un datasource es posible vincular un objeto Fluentis a una tabla externa no estándar. 

*Para explicar mejor este escenario de aplicación utilizamos un ejemplo práctico donde se ha creado una tabla personalizada llamada 'typology', que representa 3 acabados diferentes*
A través de **FluentisQueryStudio**, procedemos a guardar una consulta SQL para la selección de todos los valores en la tabla.  

La tabla que hemos creado se presenta así:   

| Id  | Code      | Description |
| --- | --------- | ----------- |
| 1   | Finitura1 | Satinada    |
| 2   | Finitura2 | Brillante   |
| 3   | Finitura3 | Opaca       |

y es el resultado de esta consulta sql.  

```SQL
SELECT id as Id, code as Code, description as Description FROM DBO.TYPOLOGY
```

:::danger Atención<!-- Attenzione -->
La estructura de la consulta debe basarse necesariamente en las tres columnas: **Id**, **Code**, **Description**, de lo contrario no será posible crear el datasource correspondiente.  
:::

A través de **FluentisQueryStudio** procedemos a crear el datasource que se basará en la consulta mencionada arriba. Para el uso de **FluentisQueryStudio** ver la documentación correspondiente en el siguiente [**Enlace**](#) 

#### 3.1 Encabezado<!-- Testata -->

Ahora procedemos a crear el ExtraData llenando los datos relacionados con el encabezado:  
- **Code** y **Descripción**.
- **Tipo de DataSource**: seleccionar SQL Query DataSource.
- **Consulta SQL**: seleccionar la consulta deseada.
- **Área**: valor de diccionario.

#### 3.2 Activaciones<!-- Attivazioni -->

Procedemos a vincular el **ExtraData** al objeto de negocio **FSItem** (Artículo).  
Se aplica exactamente lo indicado en el párrafo anterior.  

### Inserción del ExtraData en el formulario de detalle

Después de abrir el formulario de detalle del artículo interesado, para incluir el ExtraData en el formulario de detalle del artículo (FSItem), podemos utilizar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo ExtraData relativo al objeto de negocio y seleccionamos el ExtraData que nos interesa.
2. Desde el **Form Navigator**, expandimos el navegador hasta la pestaña Generalidades donde queremos insertar el ExtraData.  

Para visualizar el ExtraData en el formulario de detalle del artículo basta con arrastrar y soltar desde el Navegador de Objetos al Form Navigator.  
El ExtraData tendrá un widget de tipo combobox (dropdown) y mostrará exactamente los valores de **código** y **descripción** guardados en la tabla correspondiente en la base de datos.   


#### 3.3 Propagación de los ExtraData<!-- Propagazione degli ExtraData -->

La funcionalidad de propagación de los ExtraData permite **extender** un determinado **ExtraData** definido en un objeto específico a otro objeto **derivado**.  
Por ejemplo, un ExtraData definido en el objeto **FSItem** (Artículo) puede ser propagado al objeto **FSSalesOrderItem** (Artículos de la orden de venta) porque **FSSalesOrderItem** extiende la clase **FSItem**.  

#### Campos específicos<!-- Campi specifici -->  
- **Ruta de propiedad**: obligatorio - propiedad que conectará las clases.  
- **Propiedad de la colección**: obligatorio - la propiedad de la colección.  
- **Editable**: hace que el extra data sea modificable de manera independiente.  
- **Prioridad**: indica la prioridad. 
- **Desde fecha de val. / Hasta fecha de validez**: si queremos que sea temporal, por lo que tenga un inicio y un fin.  

Para gestionar la propagación de un objeto principal a uno derivado es necesario tener, en la pestaña de **activaciones**, el ExtraData activo en ambos objetos y luego gestionar la propagación a través de la pestaña específica **propagation**.

### Inserción del ExtraData en el formulario de detalle

Después de abrir el formulario de detalle de la **orden de venta** correspondiente, para incluir el ExtraData en el formulario de detalle podemos utilizar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo de la colección de **artículos**, y luego expandimos el nodo ExtraData.  
2. Arrastramos el ExtraData directamente en la cuadrícula de los artículos asociados a la orden de venta.   
El ExtraData tendrá un widget de tipo combobox (dropdown) y mostrará el valor **código** guardado en la tabla correspondiente lado MSSQL.  

### **4. Inserción de ExtraData en Reporte<!-- Inserting ExtraData into Report -->**

En cuanto a la inclusión de **ExtraData** en los reportes, se pueden configurar 3 escenarios distintos según el tipo de ExtraData:
* ExtraData Sencillo<!-- Semplice -->.
* ExtraData basado en un objeto.
* ExtraData basado en un datasource.

### 4.1 ExtraData sencillo<!-- semplice -->

Para ExtraData sencillo, es necesario incluir el siguiente método en la sección de script del reporte.
En el ejemplo, un ExtraData de tipo objeto ha sido asociado a una factura de venta. 

```cs
private void calcExtraData_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e) {
  FSSalesInvoice row = (FSSalesInvoice)e.Row;
 if (row != null)
 {
  var extraData = row.ExtraData.Where(x => x.ExtraDataObject != null && x.ExtraDataObject.Code == "ExtradataXreport").FirstOrDefault();
  if (extraData != null)
  {
    e.Value = extraData.ExtraDataValue;
  }
 }  
}
```

### 4.2 ExtraData basado en objeto

Para ExtraData basado en objeto, es necesario incluir el siguiente método en la sección de script del reporte.
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
Para ExtraData basado en datasource, es necesario incluir el siguiente método en la sección de script del reporte.  
El ExtraData basado en datasource se llama ```Model```.  
En el ejemplo, se ha creado una tabla personalizada ```dbo.Model``` que contiene los siguientes datos:
```sql
SELECT Code, Description FROM dbo.Model
```

 <table>
        <tr>
            <th>Código</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td>Finitura1</td>
            <td>Brillante</td>
        </tr>
        <tr>
            <td>Finitura2</td>
            <td>Opaca</td>
        </tr>
        <tr>
            <td>Finitura3</td>
            <td>Cromada</td>
        </tr>
    </table>


En el script relativo a la generación del reporte debe incluirse el siguiente método de ejemplo.   

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