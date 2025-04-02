---
title: categorie documenti di origine interna
sidebar_position: 2
---

La tabla se encuentra en la ruta **Tablas > Calidad > Documentos > categorie documenti di origine interna**.

:::important ¿Para qué sirve? (A cosa serve)
Los datos presentes en esta tabla se utilizan para catalogar las diferentes tipologías de los Documentos de Origen Interno.  
Los datos ingresados en estas tablas se reflejarán en la creación de los Documentos de Origen Interno.  
Un ejemplo de uso lo encontramos en la gestión de **Documentos de Origen Interno**.
:::

La tabla permite ingresar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de categorie documenti di origine interna**

El formulario consta de un área de filtro y de una de resultados. Una vez configurados todos los filtros deseados, solo hay que hacer clic en el botón **Buscar** para visualizar los resultados dentro de la cuadrícula de resultados.

**Inserción de categorie documenti di origine interna**

Para poder insertar nuevas *categorie documenti di origine interna* es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **Nuevo**.   
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **Código** y la **Descripción**.

**Duplicar categorie documenti di origine interna**

Para poder duplicar una *Categoría de Documento* existente en una nueva *Categoría de Documento*, es necesario hacer clic en la cuadrícula en la *Categoría de Documento* de la que se desea duplicar y presionar el botón **Duplicar**.   
Se mostrará un pedido de **Código** y **Descripción** de la nueva *Categoría de Documento* (ambos datos son obligatorios).   
Luego presione el botón **OK** o el botón **Cancelar** si desea continuar con la actividad de duplicación o no.

## categorie documenti di origine interna

Es la lista donde se ingresan las principales informaciones de la *Categoría de Documento*.  
La lista se compone de la siguiente información:   
> **Categoría**: es el código de la *Categoría de Documento*.   
> **Descripción de categoría**: es la descripción de la *Categoría de Documento*.   
> **Secuencia**: es la secuencia de visualización en las listas de las *Categorías de Documento*.   
> **Documento obligatorio**: indica si es obligatorio adjuntar el documento.   
> **Codificación automática**: indica si se desea habilitar la codificación automática del documento; la codificación estará compuesta por: *Código de categoría* más un progresivo de un número de cifras indicado en *Número de cifras progresivas* a partir del número indicado en *Progresivo inicial*.   
> **Número de cifras progresivas**: habilitado si se solicita la *Codificación automática*, es el número de cifras del progresivo que compondrán el código del documento.   
> **Progresivo inicial**: habilitado si se solicita la *Codificación automática*, es el número de progresivo que se propondrá al ingreso del primer documento.   
> **Función de verificación/aprobación**: es la *Función empresarial* responsable de la verificación/aprobación del documento.   
> **Función de redacción/emisión**: es la *Función empresarial* responsable de la redacción/emisión del documento.   
> **Tipo de documento**: es el código del *Tipo de documento* propuesto para la codificación del documento adjunto para la codificación en el *Documental*.   
> **Descripción del tipo de documento**: es la descripción del *Tipo de documento* propuesto para la codificación del documento adjunto para la codificación en el *Documental*.   
> **Archivo**: en este campo se asigna el almacén donde encontrar la categoría específica.   
> **Ubicación**: indica la posición física habitual de la *Categoría*; se pueden elegir solo las *Ubicaciones* que pertenecen al *Archivo* seleccionado.   
> **Ubicación descriptiva**: si la posición no está codificada, se puede ingresarla manualmente en este campo libre.   
> **Período de conservación**: contiene un período de conservación que se debe ingresar manualmente.   
> **Función responsable**: contiene la *Función empresarial* responsable de la *Categoría*.   
> **Notas**: anotaciones libres.

### Lista de distribución

En esta lista es posible asociar: *Funciones empresariales*, *Empleados*, *Clientes/Proveedores* y *Contactos* que habitualmente reciben copia de la *Categoría de Documento* seleccionada e indicar los métodos habituales de recepción del documento.  
La lista se compone de la siguiente información:  
> **Grupo**   
>> **Código**: es el código del *Rol A.R.M.* destinatario.   
>> **Descripción**: es la descripción del *Rol A.R.M.* destinatario.   
>
> **Usuario**   
>> **Código**: es el código del *Usuario A.R.M.* destinatario.   
>> **Descripción**: es la descripción del *Usuario A.R.M.* destinatario.   
>
> **Función empresarial**  
>> **Código**: es el código de la *Función empresarial* destinataria.   
>> **Descripción**: es la descripción de la *Función empresarial* destinataria.   
>
> **Empleado**  
>> **Código**: es el código del empleado* destinatario.   
>> **Apellido**: es el apellido del empleado* destinatario.   
>> **Nombre**: es el nombre del empleado* destinatario.   
>
> **Cliente/Proveedor**  
>> **Descripción**: es la razón social del *Cliente/Proveedor* destinatario.   
>
> **Contacto**  
>> **Código**: es el código del *Contacto* destinatario.   
>> **Descripción**: es la descripción del *Contacto* destinatario.   
>
> **Otro destinatario**  
>> **Descripción**: es la libre descripción de un destinatario no codificado.   
>
> **Datos para la entrega**  
>> **cartacea**: indica que en el momento de la distribución (procedimiento interno en la gestión de *Documentos de Origen Interno*) la persona desea recibir una copia *En papel* del documento o en adjunto por *Email*.   
>> **Método de entrega**: indica el método habitual de entrega de la *Categoría de Documento*.   
>> **Email**: indica un email de destino, si no está codificado en el registro del destinatario.   
>> **Número de copias**: indica el número de copias en papel que el destinatario desea recibir.   
>> **Notas**: anotaciones libres.   

*Botones específicos*:      
**Nuevo destinatario**: inserta una nueva fila en la lista.   
**Eliminar destinatario**: elimina la fila seleccionada de la lista.   

### Acceso permitido a las funciones (Accesso consentito alle funzioni)
En esta lista es posible ingresar las *Funciones empresariales* a las que se les otorguen derechos de acceso.   
Si no se ingresan filas en esta tabla, entonces el acceso está permitido para todos.   
La lista se compone de la siguiente información:  
> **Función**: es el código de la *Función empresarial*.   
> **Descripción de la función**: es la descripción de la *Función empresarial*.   
> **Notas**: anotaciones libres.

*Botones específicos*:      
**Nueva función de acceso**: inserta una nueva fila en la lista.   
**Eliminar función de acceso**: elimina la fila seleccionada de la lista.   

### Datos extra (Extra data)
Es posible ingresar [Datos Extra (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Documento de Origen Interno*.   
Estos *Datos Extra* se heredan en el *Documento interno* de esa categoría determinada.   

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).