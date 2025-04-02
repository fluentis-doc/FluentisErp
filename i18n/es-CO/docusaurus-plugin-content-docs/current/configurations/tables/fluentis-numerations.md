---
title: Numeraciones Fluentis (Numerazioni Fluentis)
sidebar_position: 13
last_update:
  date: 03/30/2023
---

En el proceso de inserción de un nuevo documento, uno de los primeros datos requeridos es el número del documento en cuestión. Este dato se propone automáticamente gracias a las tablas de numeradores.

En Fluentis, la gestión de los numeradores está dividida por tipo de documento, como podemos ver en las opciones de menú presentes entre las tablas de cada módulo.

La lógica que subyace a todos estos numeradores es la misma, por lo que vamos a examinar una, en particular, la Numeración de compensaciones, desde la cual será posible comenzar como base teórica para la definición de los numeradores de otros tipos de documentos.

En el formulario **Numeración de compensaciones** hay una cuadrícula que muestra la lista de numeradores presentes para las compensaciones. Esto significa que es posible gestionar varios numeradores para el mismo tipo de documento. Al presionar el botón **Nuevo** accedemos al formulario **Numeración**.

![](/img/it-it/configurations/tables/fluentis-numerations/image01.png)

### Sección superior

**codice**: es el código del numerador;

**descrizione**: la descripción del numerador;

**formula numero**: en este campo se puede establecer una valorización de una cadena alfanumérica, que se almacenará en la propiedad alfanumérica predeterminada ‘FormattedNumber' del objeto (mientras que el campo numérico se almacena en la propiedad ‘Number'). La definición de la *Fórmula* para el formato del número del documento puede definirse a nivel de tipo de numeración, al nivel de periodo de validez del tipo de numeración o a nivel definición de los rangos de validez. La prioridad de aplicación es de abajo hacia arriba; se verifica si está definida en los rangos de validez, si es nula, se verifica si está definida en los periodos de validez, si también es nula se verifica si está definida en el tipo de numeración.

En la imagen anterior (tomada de los numeradores de compensaciones) se ha insertado “Year.ToString() + "-" + Number.ToString("D5") + "-" + SalesInvoiceType.Code”, lo que creará una cadena del tipo “2015-00001-TestCode”.

Otro ejemplo, insertar en el número un valor tomado del usuario que lo ingresa: “Number.ToString("D5") + "-" + (CreationUser != null ? CreationUser.Description.Substring(0,3) : "")”.

En este caso, también es necesario intervenir a nivel de Arm para habilitar, en el setter del número formateado, que este vea la propiedad de usuario: dentro de Patterns, se edita este setter.

![](/img/it-it/configurations/tables/fluentis-numerations/image02.png)

Y se marca el indicador en **Usado (Used)**:

![](/img/it-it/configurations/tables/fluentis-numerations/image03.png)

Se guarda, en IIS se reinicia el pool de Fluentis y se tiene el dato operativo.

*Otro ejemplo*: establecer el número de factura (o DDT) con el barrado (ejemplo 1/A, 2/A.... 1/B, 2/B):

number.ToString()+"/B"

esto se debe poner en el numerador (en cabecera).

Luego, en el informe se debe sustituir el campo estándar (p. ej. Number) con un campo calculado (p. ej. CalcNumber) donde dentro exista esta expresión:

Iif(IsNullOrEmpty([FormattedNumber]),  [Number], [FormattedNumber])

*ATENCIÓN*: funciona solo en el informe; en los formularios, se continuará mostrando el número normal sin el barrado.

**disabilitato**: para desactivar el contador.

### Políticas de gestión (primera cuadrícula)

En esta sección se introducen las políticas de gestión del numerador.

**ordine**: código del registro de la fila;

**valido da data**: campo obligatorio que indica la fecha inicial del rango de validez de la numeración;

**valido a data**: fecha de fin de validez del rango. El campo puede estar vacío (ver campo siguiente);

**periodo**: periodicidad del rango. Las opciones son *Ninguno* (es decir, el rango es válido solo en el rango definido; si no hay fecha de fin, será un contador perenne), *Anual* (el numerador se reseteará automáticamente al número inicial año por año, hasta la fecha de fin de validez), *Mensual* (el numerador se reseteará automáticamente al número inicial mes a mes, hasta la fecha de fin de validez), *Diario* (el numerador se reseteará automáticamente al número inicial cada día, hasta la fecha de fin de validez);

**mesi di spostamento**: meses a agregar a la fecha de inicio de validez para obtener el mes en el cual el contador se reinicia;

**giorni di spostamento**: días a agregar a la fecha de inicio de validez para obtener el día en el cual el contador se reinicia;

**progressione data numero**: sirve, si está activo, para hacer que la numeración sea progresiva por fecha, bloqueando la posibilidad de insertar un documento con un número superior al último ingresado, pero con una fecha anterior a este último;

**recupero numeri**: permite recuperar automáticamente huecos en la numeración. Si el indicador **Progresión de la fecha número** está activo, la recuperación del número solo podrá llevarse a cabo si es coherente con las lógicas explicadas anteriormente para este campo;

**disabilitato**: para deshabilitar la política de numeración;

### Rangos numéricos (segunda cuadrícula)

Esta cuadrícula está conectada a la política seleccionada en la cuadrícula anterior.

**ordine**: código del rango numérico;

**numero inizio**: es obligatorio y indica el número de partida del rango;

**numero inizio ricerca**: puede ser ingresado si se desea limitar la búsqueda del número a partir de un cierto rango;

**numero fine**: número máximo del rango, puede estar vacío;

**numerazione esterna**: debe marcarse en caso de que la numeración no sea atribuida por Fluentis, sino que sea asignada por sistemas externos;

**formula numero**: en este campo es posible asociar una fórmula a utilizar para el rango de fechas seleccionado en la primera cuadrícula;

**disabilitato**: para deshabilitar el uso del rango en cuestión.