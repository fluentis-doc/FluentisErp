---
title: Nuevos Datos Adicionales 
sidebar_position: 1
---

Vaya a **Hogar > Utilidad > Datos Adicionales > Datos Adicionales** y haga clic en el botón **Nuevo**

:::note La información solicitada para crear nuevos Datos Adicionales varía según el tipo de Datos Adicionales seleccionado:   
1. **Datos Adicionales Sencillos**
2. **Datos Adicionales basados en objeto**
3. **Datos Adicionales basados en fuente de datos**
:::

### **1. Datos Adicionales Sencillos**


A través de Datos Adicionales sencillos es posible agregar nuevas propiedades simples a un objeto Fluentis existente.  
Las propiedades simples que pueden añadirse son de diferentes tipos:  

- **Booleanos**.
- **Cadenas**.
- **Números enteros**, **decimales**.
- **Arrays**.

#### 1.1 Encabezado
 
En este caso procedemos a crear Datos Adicionales **sencillos** de tipo cadena llamándolo **Modelo**.  

#### Campos específicos 
- **Código**: que identifica los Datos Adicionales.
- **Tipo de contenido**: será de tipo simple.
- **Tipo de Widget**: define los modos de visualización y selección para los tipos Objeto y Datasource. Para el tipo Simple debe dejarse vacío porque el widget cargado será el widget por defecto del framework asociado al tipo de dato.
- **Nombre**: debe ser una palabra presente en el diccionario, de lo contrario habrá que agregarla.  
- **Tipo de datos**: se refiere al tipo de dato.
- **Estereotipo**: opciones adicionales sobre la formateación del campo, como texto multilínea o definición del número de decimales.
- **Descripción**: es obligatorio - descripción que se visualizará, igual que el Nombre puede seleccionarse del diccionario.
- **Inicio/fin de validez**: si queremos dar a los Datos Adicionales una validez temporal.
- **Derecho de visualización / derecho de modificación**: para asociar un derecho específico que permita la visualización o modificación de los Datos Adicionales.

El **estereotipo** es activable para el **Tipo de datos**: Date (DateTime y Time); Decimal (Currency y Numeric); Double, Float y Long (Numeric); Int (Color, Numeric y Year); Short (Numeric y Year); String (MultiLine).

El estereotipo puede activarse para todos los objetos activados y por objeto individual. 

#### 1.2 Activaciones

La pestaña de **Activaciones** se refiere a los **objetos padre** de Fluentis a los que se asocian los Datos Adicionales.  
Cada Dato Adicional puede tener varios objetos padre.

La cuadrícula de activaciones permite definir las clases en las que los  Datos Adicionales deberá estar disponible.  

#### Campos específicos  
- **Objeto padre**: es el objeto al que se vinculan los Datos Adicionales, en nuestro caso FSItem. Cada Dato Adicional puede estar asociado a varios objetos.  
- **Propiedad**: se trata de la propiedad del objeto padre en la que se cargarán los Datos Adicionales. En este caso, la propiedad Datos Adicionales estan presente en el objeto FSItem, generada por la referencia que conecta FSItem con FSItemDatos Adicionales.  
- **Requerido**: indica si el Dato Adicional es obligatorio para el objeto al cual está asociado.
- **Para imprimir**: indica si el Dato Adicional debe estar disponible para impresión.
- **Ordenamiento**: es el orden del objeto padre, no tiene repercusiones sobre el funcionamiento, normalmente se deja en 0.
- **Inicio de validez / Fin de validez**: si la validez es temporal, indica el inicio y fin del periodo en el cual los  Datos Adicionales serán utilizados.  
- **Estereotipo**: formateo del campo, cambia según el tipo de dato. Sobrescribe el estereotipo general definido para los Datos Adicionales si se quiere forzar un comportamiento específico para un objeto diferente al predeterminado.

### Inserción de los Datos Adicionales en el formulario de detalle

Una de las principales novedades introducidas a partir de Fluentis2021 es la posibilidad de insertar directamente en el formulario de detalle el widget que cargará el contenido de los Datos Adicionales.  
En este caso, dado que el Dato Adicional es de tipo simple, se cargará el widget por defecto del framework asociado al tipo de dato.  

Para incluir los Datos Adicionales en el formulario de detalle del artículo (FSItem), podemos usar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo Datos Adicionales relativo al objeto de negocio y seleccionamos el Dato Adicional que nos interesa.
2. Desde el **Form Navigator**, expandimos el navegador hasta la pestaña Generalidades donde deseamos insertar los Datos Adicionales.  

Para visualizar los Datos Adicionales en el formulario de detalle del artículo basta con arrastrar y soltar desde el Navegador de Objetos al Form Navigator.  
Para hacer **persistente** la visualización de los Datos Adicionales en el formulario de detalle del artículo es suficiente crear un perfil específico y cargarlo cuando sea necesario visualizar los Datos Adicionales.  
Finalmente, también en el formulario de detalle del artículo, hay una pestaña específica llamada **Datos Adicionales** donde se puede encontrar cada Dato Adicional asociado al artículo.

### **2. Datos Adicionales basados en objeto**
A través de Datos Adicionales basados en objeto es posible vincular una propiedad representada por un objeto **estándar** o **personalizado** con un objeto de **Fluentis**.   
*Para explicar mejor este concepto, utilizamos un ejemplo práctico donde vinculamos el objeto **FSColor** que representa un conjunto de **colores**, con el objeto Estándar de Fluentis **FSItem (Artículo)***. 

#### 2.1 Encabezado

Procedemos a crear el **Datos Adicionales** basado en el objeto **FSColor** llamándolo **Color**.

- **Código:** obligatorio - código.
- **Tipo de Contenido:** obligatorio - permite seleccionar el widget de visualización de los Datos Adicionales, hay tres opciones disponibles:
  - **Combobox**: es un menú desplegable que muestra los valores por código/descripción.
  - **Autocompletar por Código**: permite escribir el código que se completará automáticamente filtrando los registros disponibles.​
  - **Autocompletar por Descripción**: permite escribir la descripción que se completará automáticamente filtrando los registros disponibles.
- **Tipo de Widget:**
- **Objeto de Negocio:** obligatorio - permite seleccionar el objeto sobre el que se deberá crear Datos Adicionales, por ejemplo, **FSColor** para permitir crear Datos Adicionales basados en la **tabla de códigos de color**. 

#### 2.2 Activaciones

Procedemos a vincular el **Datos Adicionales** al objeto de negocio **FSItem** (Artículo).  
Se aplica exactamente lo indicado en el párrafo anterior.  

### Inserción de los Datos Adicionales en el formulario de detalle

Después de abrir el formulario de detalle del artículo interesado, para incluir los Datos Adicionales en el formulario de detalle del artículo **FSItem**, podemos utilizar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo Datos Adicionales relativo al objeto de negocio y seleccionamos el Dato Adicional que nos interesa.
2. Desde el **Form Navigator**, expandimos el navegador hasta la pestaña Generalidades donde deseamos insertar los  Datos Adicionales.  

Para visualizar los  Datos Adicionales en el formulario de detalle del artículo basta con arrastrar y soltar desde el Navegador de Objetos al Form Navigator.  
En el ejemplo, se ha colocado el Dato Adicional 'Color' en el LayoutGroup que define los datos de cabecera del artículo (FSItem).   
El Dato Adicional tendrá un widget de tipo combobox (dropdown) y mostrará exactamente los valores de **código** y **descripción** guardados en la correspondiente tabla MSSQL.

### **3. Datos Adicionales basados en Datasource**

Con los Datos Adicionales basados en un datasource es posible vincular un objeto Fluentis a una tabla externa no estándar. 

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

:::danger Atención
La estructura de la consulta debe basarse necesariamente en las tres columnas: **Id**, **Code**, **Description**, de lo contrario no será posible crear el datasource correspondiente.  
:::

A través de **FluentisQueryStudio** procedemos a crear el datasource que se basará en la consulta mencionada arriba. Para el uso de **FluentisQueryStudio** ver la documentación correspondiente en el siguiente [**Enlace**](#) 

#### 3.1 Encabezado

Ahora procedemos a crear los Datos Adicionales llenando los datos relacionados con el encabezado:  
- **Code** y **Descripción**.
- **Tipo de DataSource**: seleccionar SQL Query DataSource.
- **Consulta SQL**: seleccionar la consulta deseada.
- **Área**: valor de diccionario.

#### 3.2 Activaciones

Procedemos a vincular los **Datos Adicionales** al objeto de negocio **FSItem** (Artículo).  
Se aplica exactamente lo indicado en el párrafo anterior.  

### Inserción de los Datos Adicionales en el formulario de detalle

Después de abrir el formulario de detalle del artículo interesado, para incluir los Datos Adicionales en el formulario de detalle del artículo (FSItem), podemos utilizar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo Datos Adicionales relativo al objeto de negocio y seleccionamos los Datos Adicionales que nos interesa.
2. Desde el **Form Navigator**, expandimos el navegador hasta la pestaña Generalidades donde queremos insertar los Datos Adicionales.  

Para visualizar los Datos Adicionales en el formulario de detalle del artículo basta con arrastrar y soltar desde el Navegador de Objetos al Form Navigator.  
Los Datos Adicionales tendrán un widget de tipo combobox (dropdown) y mostrará exactamente los valores de **código** y **descripción** guardados en la tabla correspondiente en la base de datos.   


#### 3.3 Propagación de los Datos Adicionales

La funcionalidad de propagación de los Datos Adicionales permite **extender** un determinado **Datos Adicionales** definido en un objeto específico a otro objeto **derivado**.  
Por ejemplo, un Dato Adicional definido en el objeto **FSItem** (Artículo) puede ser propagado al objeto **FSSalesOrderItem** (Artículos de la orden de venta) porque **FSSalesOrderItem** extiende la clase **FSItem**.  

#### Campos específicos  
- **Ruta de propiedad**: obligatorio - propiedad que conectará las clases.  
- **Propiedad de la colección**: obligatorio - la propiedad de la colección.  
- **Editable**: hace que el Dato Adicional sea modificable de manera independiente.  
- **Prioridad**: indica la prioridad. 
- **Desde fecha de val. / Hasta fecha de validez**: si queremos que sea temporal, por lo que tenga un inicio y un fin.  

Para gestionar la propagación de un objeto principal a uno derivado es necesario tener, en la pestaña de **activaciones**, los  Datos Adicionales activos en ambos objetos y luego gestionar la propagación a través de la pestaña específica **propagation**.

### Inserción de los Datos Adicionales en el formulario de detalle

Después de abrir el formulario de detalle de la **orden de venta** correspondiente, para incluir los Datos Adicionales en el formulario de detalle podemos utilizar el **form navigator** y **object navigator**.  
1. Desde el **Object Navigator**, expandimos el nodo de la colección de **artículos**, y luego expandimos el nodo Datos Adicionales.  
2. Arrastramos el Dato Adicional directamente en la cuadrícula de los artículos asociados a la orden de venta.   
El Dato Adicional tendrá un widget de tipo combobox (dropdown) y mostrará el valor **código** guardado en la tabla correspondiente lado MSSQL.  

### **4. Inserción de Datos Adicionales en Reporte**

En cuanto a la inclusión de **Datos Adicionales** en los reportes, se pueden configurar 3 escenarios distintos según el tipo de Datos Adicionales:
* Datos Adicionales Sencillos.
* Datos Adicionales basados en un objeto.
* Datos Adicionales basados en un datasource.

### 4.1 Datos Adicionales sencillos

Para Datos Adicionales sencillos, es necesario incluir el siguiente método en la sección de script del reporte.
En el ejemplo, un Dato Adicional de tipo objeto ha sido asociado a una factura de venta. 

```cs
private void calcDatos Adicionales_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e) {
  FSSalesInvoice row = (FSSalesInvoice)e.Row;
 if (row != null)
 {
  var Datos Adicionales = row.Datos Adicionales.Where(x => x.Datos AdicionalesObject != null && x.Datos AdicionalesObject.Code == "Datos AdicionalesXreport").FirstOrDefault();
  if (Datos Adicionales != null)
  {
    e.Value = Datos Adicionales.Datos AdicionalesValue;
  }
 }  
}
```

### 4.2 Datos Adicionales basados en objeto

Para Datos Adicionales basados en objeto, es necesario incluir el siguiente método en la sección de script del reporte.
En el ejemplo, un Dato Adicional de tipo objeto ha sido asociado a una factura de venta.  

```cs
private void calcDatos Adicionales_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)
{
    FSSalesInvoice row = (FSSalesInvoice)e.Row;
    if (row != null)
    {
        var Datos Adicionales = row.Datos Adicionales 
            .Where(x => x.Datos AdicionalesObject != null && x.Datos AdicionalesObject.Code == "ObjectDatos Adicionales")
            .FirstOrDefault();
        
        if (Datos Adicionales != null)
        {
            var record = GetReport().DataProvider
                .Linq<FSColor>()
                .Where(x => x.Id == Datos Adicionales.Datos AdicionalesId)
                .FirstOrDefault();
            
            if (record != null)
            {
                e.Value = record.Description; 
            }
        }
    }
}
```
### 4.3 Datos Adicionales basado en datasource
Para Datos Adicionales basado en datasource, es necesario incluir el siguiente método en la sección de script del reporte.  
El Datos Adicionales basado en datasource se llama ```Model```.  
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
private void calcDatos Adicionales_GetValue(object sender, DevExpress.XtraReports.UI.GetValueEventArgs e)
{
    FSSalesInvoice row = (FSSalesInvoice)e.Row;
    if (row != null)
    {
        var Datos Adicionales = row.Datos Adicionales 
            .Where(x => x.Datos AdicionalesObject != null && x.Datos AdicionalesObject.Code == "Model")
            .FirstOrDefault();

        if (Datos Adicionales != null)
        {
            if (Datos Adicionales.Datos AdicionalesObject != null && 
                Datos Adicionales.Datos AdicionalesObject.DataSource != null && 
                !string.IsNullOrEmpty(Datos Adicionales.Datos AdicionalesObject.DataSource.SqlQuery.Script))
            {
                string extradDataObjectId = Datos Adicionales.Datos AdicionalesId.ToString();
                string sqlQueryDatos Adicionales = Datos Adicionales.Datos AdicionalesObject.DataSource.SqlQuery.Script + 
                                           " WHERE Id = " + extradDataObjectId;
                
                IExecuteSql execSql = (IExecuteSql)GetReport().DataProvider;
                using (IDbCommand command = execSql.CreateCommand())
                {
                    command.CommandText = sqlQueryDatos Adicionales;
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