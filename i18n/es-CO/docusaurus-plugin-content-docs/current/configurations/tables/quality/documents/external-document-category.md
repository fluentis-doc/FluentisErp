---
title: categorie documenti di origine esterna
sidebar_position: 1
---

La tabla se encuentra en la ruta **Tablas > Calidad > Documentos > categorie documenti di origine esterna**.

:::important ¿Para qué sirve? (A cosa serve)
Los datos presentes en esta tabla se utilizan para catalogar los diferentes tipos de Documentos de origen externa.   
Los datos ingresados en estas cuadrículas se reflejarán en la creación de Documentos de origen externa.  
Un ejemplo de uso se encuentra en la gestión de **Documentos de origen externa**.
:::

La tabla permite agregar nuevos registros o buscar aquellos que ya existen para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de categorie documenti di origine esterna**

El formulario se compone de un área de filtro y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Ingreso de categorie documenti di origine esterna**

Para poder ingresar nuevas *categorie documenti di origine esterna*, es necesario hacer clic en la primera línea vacía de la cuadrícula o presionar el botón **nuovo**.   
Para el nuevo registro se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione**.

**Duplicar categorie documenti di origine esterna**

Para duplicar una *Categoría de Documento* existente en una nueva *Categoría de Documento*, es necesario hacer clic en la cuadrícula sobre la *Categoría de Documento* de la cual se desea duplicar y presionar el botón **duplica**.   
Se mostrará una solicitud de **codice** y **descrizione** de la nueva *Categoría de Documento* (ambos datos son obligatorios).   
Luego, presione el botón **OK** o el botón **cancel** si desea continuar con la actividad de duplicación o no.

## categorie documenti di origine esterna

Es la lista donde se ingresan las principales informaciones de la *Categoría de Documento*.   
La lista se compone de la siguiente información:   
> **Categoría**: es el código de la *Categoría de Documento*.   
> **descrizione categoria**: es la descripción de la *Categoría de Documento*.   
> **Archivo**: en este campo se asigna el almacén donde se puede encontrar la categoría específica.   
> **Ubicación**: indica la posición física habitual de la *Categoría*; sólo se pueden seleccionar las *Ubicaciones* que forman parte del *Archivo* seleccionado.   
> **Ubicación descriptiva**: si la posición no tiene un código, se puede ingresar manualmente en este campo libre.   
> **Período de conservación**: contiene un período de conservación que debe ingresarse manualmente.   
> **Función responsable**: contiene la *Función empresarial* responsable de la *Categoría*.   
> **Notas**: anotaciones libres.

### Lista de distribución

En esta lista se pueden asociar: *Funciones empresariales*, *Empleados*, *Clientes/Proveedores* y *Contactos* que habitualmente reciben copia de la *Categoría de Documento* seleccionada e indicar las metodologías habituales de recepción del documento.   
La lista se compone de la siguiente información:   
> **Función empresarial**   
>> **Código**: es el código de la *Función empresarial* destinataria.   
>> **Descripción**: es la descripción de la *Función empresarial* destinataria.   
>
> **Empleado**   
>> **Código**: es el código del *empleado* destinatario.   
>> **Apellido**: es el apellido del *empleado* destinatario.   
>> **Nombre**: es el nombre del *empleado* destinatario.   
>
> **Cliente/Proveedor**   
>> **Descripción**: es la razón social del *Cliente/Proveedor* destinatario.   
>
> **Contacto**   
>> **Código**: es el código del *Contacto* destinatario.   
>> **Descripción**: es la descripción del *Contacto* destinatario.   
>
> **Otro destinatario**   
>> **Descripción**: es la descripción libre de un destinatario no codificado.   
>
> **Datos para la entrega**   
>> **cartacea**: indica que en el momento de la distribución (procedimiento interno de gestión de *Documentos de origen externa*) el sujeto desea recibir copia *En papel* del documento o en adjunto por *Email*.   
>> **Método de entrega**: indica la metodología habitual de entrega de la *Categoría de Documento*.   
>> **Email**: indica un email de destino, si no está codificado en el registro del destinatario.   
>> **Número de copias**: indica el número de copias en papel que el destinatario desea recibir.   
>> **Notas**: anotaciones libres.   

*Botones específicos*:      
**nuovo destinatario**: inserta una nueva línea en la lista.   
**cancella destinatario**: elimina la línea seleccionada de la lista.   

### Acceso permitido a las funciones

En esta lista se pueden ingresar las *Funciones empresariales* a las que se les otorgarán derechos de acceso.   
Si no se introducen líneas en esta tabla, entonces el acceso está permitido a todos.   
La lista se compone de la siguiente información:   
> **Función**: es el código de la *Función empresarial*.   
> **Descripción de función**: es la descripción de la *Función empresarial*.   
> **Notas**: anotaciones libres.

*Botones específicos*:      
**nuova funzione di accesso**: inserta una nueva línea en la lista.   
**cancella funzione di accesso**: elimina la línea seleccionada de la lista.   

### Datos extra (Extra data)

Es posible ingresar [Datos adicionales (Extra Data)](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Documento de origen externa*.   
Estos *Datos extras* se heredan en el *Documento externo* de esa determinada categoría.   

Para todo lo que no esté detallado en este documento sobre el funcionamiento común de los formularios, haga referencia al siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).