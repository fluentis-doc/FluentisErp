---
title: Instrumento de medición
sidebar_position: 2
ai_generated: true
---

La gestión se encuentra en la ruta **Calidad > Calibración de instrumentos > Instrumentos de medición > Nuevo instrumento de medición<!-- Qualità > Taratura strumenti > Strumenti di misura > Nuovo Strumento di misura -->** o también es posible realizarla desde la **Búsqueda de instrumentos de medición<!-- Ricerca Strumenti di misura -->**.   

:::important ¿Para qué sirve?<!-- A cosa serve -->
En este registro maestro<!-- anagrafica --> se almacenan los instrumentos de medición<!-- strumenti di misura --> utilizados para garantizar la idoneidad de los productos y la prestación de los servicios ofrecidos.   
Al instrumento de medición<!-- strumento di misura --> es posible asociar información de compra, de responsabilidad, propiedades técnicas o mecánicas, ubicación y calibración<!-- taratura -->.   
Si el instrumento está sujeto a calibración<!-- taratura --> y la calibración es interna, es posible definir cuáles son las actividades que se deben realizar y los valores que se deben recoger para que la calibración tenga un resultado positivo.   
Si el instrumento está sujeto a calibración y la calibración es externa, se puede definir cuál es la entidad externa que realizará dicha calibración.   
Si se ingresa una periodicidad temporal de calibración, el botón "Planificar nuevas calibraciones<!-- Pianifica nuove tarature -->" permite crear automáticamente, para un periodo deseado, las calibraciones planeadas.   
Por estándar están disponibles los informes de: Registro de instrumentos agrupados por: Instrumento, Categoría, Proveedor, Ubicación, Usuario, Vencimiento de garantía y Vencimiento de calibración; Registro de instrumentos no sujetos a calibración y Hoja técnica de instrumento de medición.   

Por estándar están disponibles los siguientes informes:   
> **Registro de Instrumentos de medición<!-- Registro Strumenti di misura -->**: listado de los *Instrumentos de medición<!-- Strumenti di misura -->* agrupables por: *Instrumento*, *Categoría*, *Proveedor* (de compra), *Ubicación*, *Usuario*, *Vencimiento de garantía* y *Vencimiento de calibración*.   
> **Registro de instrumentos no sujetos a calibración<!-- Registro Strumenti non soggetti a taratura -->**: listado de los *Instrumentos de medición* donde no se prevé la *Calibración*; para imprimir este informe no afecta el filtro *Estado - No sujetos a calibración: Todos, Sujetos a calibración, No sujetos a calibración*.   
> **Hoja técnica del instrumento de medición<!-- Scheda Strumento di misura -->**: ficha de los *Instrumentos de medición*.   
:::

## Botones de comando<!-- Pulsanti di comando -->

### ![](/img/neutral/common/save.png) Guardar<!-- Salva -->

Al pulsar este botón se guardan todos los cambios de información del *Instrumento de medición<!-- Strumento di misura -->* visualizado.   

### ![](/img/neutral/common/duplicate.png) Duplicar instrumento<!-- Duplica strumento -->

Para duplicar el *Instrumento de medición<!-- Strumento di misura -->* visualizado en uno nuevo, simplemente presione el botón **Duplicar<!-- Duplica -->**.   
La información del instrumento de origen que no se duplica incluye: *Código*,  *Matrícula*, *Fecha de compra*, *Vencimiento de garantía*, *Ubicación del proveedor*, *Cliente propietario*, *Imagen* y los datos de la última calibración realizada: *Fecha última calibración* y *Resultado*.   
Al finalizar la operación, se visualiza el nuevo *Instrumento de medición<!-- Strumento di misura -->*.

### Planificar nuevas calibraciones<!-- Pianifica nuove tarature -->

El botón solo está habilitado si el *Instrumento de medición<!-- Strumento di misura -->* está *Activo*, *Sujeto a calibración* y existe un *Periodo de calibración* temporal (*Unidad de medida*: *Días* o *Meses*). Se mostrará una solicitud de:   
> **Planificar hasta el<!-- Pianificare fino al -->**: es la fecha de fin de planificación de las nuevas calibraciones programadas.   

*Método utilizado para la planificación*:   
Primero se eliminan todas las *Calibraciones* previamente planificadas y no realizadas para el *Instrumento*.  
Después, comenzando desde la fecha de la última *Calibración*, se crean tantas *Calibraciones* como sea posible dentro del intervalo solicitado a partir de la fecha actual y según la periodicidad establecida en el *Periodo de calibración*. Si la primera fecha propuesta cae en un día no laborable según el *Calendario de fábrica*, la fecha se postergará hasta el primer día laborable disponible.   
Si para el instrumento nunca se ha planificado ni realizado una *Calibración* o la última fecha de *Calibración* es anterior a la fecha actual restándole el *Periodo de calibración*, la primera *Calibración* se propone para la fecha actual y luego las siguientes.

### Nueva calibración<!-- Nuova taratura -->

El botón solo está habilitado si el *Instrumento de medición<!-- Strumento di misura -->* está *Activo* y *Sujeto a calibración*.   
Para poder crear una nueva *Calibración* no planificada para el *Instrumento de medición<!-- Strumento di misura -->* mostrado, debe pulsar el botón **Nueva calibración<!-- Nuova taratura -->**.   
Al confirmar la solicitud, se crea una nueva *Calibración*; se propone el *Tipo de calibración* (interna o externa), indicada en los *Parámetros de calibración de instrumentos*, las referencias del *Instrumento de medición* y sus propiedades.   
Al término de la operación, se visualiza el nuevo *Curso de formación*.   

## Gestión de datos<!-- Gestione dati -->

### Datos de cabecera<!-- Dati di testata -->

La información gestionada es:   
> **Categoría**: es la *Categoría de instrumento* del *Instrumento de medición<!-- Strumento di misura -->* (dato obligatorio).   
> **Código**: es el código del *Instrumento de medición<!-- Strumento di misura -->* (dato obligatorio).   
> **Matrícula**: es la matrícula del *Instrumento de medición<!-- Strumento di misura -->*; información descriptiva libre.   
> **Modelo**: es el modelo del *Instrumento de medición<!-- Strumento di misura -->*; información descriptiva libre.   
>
> **Datos de compra**: panel expandible donde se puede ingresar:   
>
>> **Proveedor**: es la razón social del *Proveedor* de compra.   
>> **Fabricante**: es el contacto del *Fabricante* del instrumento.   
>> **Fecha de compra**: es la fecha de compra.   
>> **Vencimiento de garantía**: es la fecha de vencimiento de la garantía de compra.   
>> **Proveedor mantenimiento/soporte**: es la razón social del *Proveedor* habitual de mantenimiento/soporte.   
>
> **Función responsable**: panel expandible donde se puede ingresar:   
>
>> **Función**: es la *Función empresarial* responsable.   
>> **Empleado**: es el *Empleado* responsable.   
>
> **Propiedades de calibración**: panel expandible donde se puede ingresar:   
>
>> **No sujeto a calibración**: indica que el *Instrumento de medición<!-- Strumento di misura -->* no está sujeto a calibración.   
>> En este caso, toda la información adicional en el panel se deshabilita.   
>> **Calibración interna**: indica que el *Instrumento de medición* se calibra por personal interno de la empresa.   
>> **Periodo de calibración**: es el periodo (expresado en la siguiente *Unidad de medida*) de calibración del *Instrumento de medición<!-- Strumento di misura -->*.   
>> **Unidad de medida**: es la *Unidad de medida* del *Periodo* de calibración.   
>> **Última calibración**: fecha de la última calibración realizada; el valor se actualiza automáticamente al asignar el *Resultado* de la última *Calibración*, pero puede ser ingresado manualmente.   
>> **Resultado**: es el *Resultado* de la última calibración realizada; el valor se actualiza automáticamente al asignar el *Resultado* de la última *Calibración*, pero puede ser ingresado manualmente.   
>> **Fecha próxima calibración**: es la fecha de la próxima calibración; el valor se actualiza automáticamente al asignar el *Resultado* de la última *Calibración*, pero puede ser ingresado manualmente.   
>> **Proveedor de calibración**: es la razón social del *Proveedor* que realiza la calibración externa.   
>
> **Clasificación**: es la *Clasificación*; ejemplos: Mecánico, Eléctrico, Electrónico, etc.   
> **Artículo**: es el *Artículo* asociado al *Instrumento de medición<!-- Strumento di misura -->*; el artículo, para poder seleccionarse, debe tener *Naturaleza artículo* *Herramienta* o *Utensilio*.   
>
> **Propiedades del instrumento**: panel expandible donde se puede ingresar:   
>
>> **Unidad de medida**: es la *Unidad de medida* de los valores recogidos por el *Instrumento de medición<!-- Strumento di misura -->*.   
>> **Rango de medición<!-- Intervallo di misura -->**: es el rango medible por el *Instrumento de medición<!-- Strumento di misura -->*.   
>> **Precisión**: es la *Precisión de medición* mínima.   
>> **Límites**: son los *Límites de aceptación* del *Instrumento de medición<!-- Strumento di misura -->* para poder usarlo; ejemplos: límites de precisión, ambientes donde no utilizarlo, etc.   
>> **Ubicación del proveedor**: es la razón social del *Proveedor* donde se ubica el *Instrumento de medición<!-- Strumento di misura -->*.   
>> **Es un instrumento primario**: indica que el *Instrumento de medición<!-- Strumento di misura -->* mostrado se utiliza para calibrar otros instrumentos.   
>> **Instrumento primario**: es el *Instrumento de medición<!-- Strumento di misura -->* que se usa para calibrar el instrumento actual.   
>
> **Función de uso**: panel expandible donde se puede ingresar:   
>
>> **Función**: es la *Función empresarial* que habitualmente utiliza el *Instrumento de medición<!-- Strumento di misura -->*.   
>> **Empleado**: es el *Empleado* que normalmente utiliza el *Instrumento de medición<!-- Strumento di misura -->*.   
>
> **Clase de instrumento**: es la *Clase de instrumento*; se usa normalmente para definir diferentes niveles de degradación del *Instrumento de medición<!-- Strumento di misura -->*.   
> **Almacén/Ubicación<!-- Magazzino/Ubicazione -->**: es el *Almacén/Ubicación* donde se encuentra el *Instrumento de medición<!-- Strumento di misura -->*.   
> **Cliente propietario**: es la razón social del *Cliente* propietario.   
> **Activo**: indica que el *Instrumento de medición<!-- Strumento di misura -->* sigue *activo*.   
> **No activo desde**: fecha a partir de la cual el *Instrumento de medición<!-- Strumento di misura -->* ya no está *activo*.   
> **Anotaciones**: observaciones libres.   

### Valores a registrar<!-- Valori da rilevare -->
En este listado es posible definir los tipos de registro y los valores a tomar durante las actividades de *Calibración interna*.   
Si el *Instrumento de medición<!-- Strumento di misura -->* está *Activo*, *Sujeto a calibración* y pertenece a *Calibración interna*, estos valores se reflejan en las *Calibraciones internas*.   
El listado se compone de la siguiente información:   
> **Secuencia<!-- Sequenza -->**: secuencia de registro.   
> **Posición**: observaciones libres al respecto.   
> **Rango de lectura**: observaciones libres al respecto.   
> **Dato requerido**: valor nominal solicitado.   
> **-**: valor de la incertidumbre negativa (expresada en porcentaje) que se aplicará al *Dato requerido*.   
> **+**: valor de la incertidumbre positiva (expresada en porcentaje) que se aplicará al *Dato requerido*.   
> **Nota**: observaciones libres.   

### Artículos asociados<!-- Articoli associati -->
En este listado es posible asociar los *Artículos* que pueden ser medidos con el *Instrumento de medición<!-- Strumento di misura -->*.   
Con la versión actual de Fluentis no existen controles estándar que verifiquen el uso del instrumento para recoger valores de los *Artículos* presentes en este listado.   
El listado contiene la siguiente información:   
> **Clase**: es la *Clase de artículo*.   
> **Código**: es el código del *Artículo*.   
> **Descripción artículo**: es la descripción del *Artículo*.   
> **Notas**: observaciones libres.   

### Historial de Informes y Certificados de calibración<!-- Storico Rapporti e Certificati di taratura -->
En este listado es posible visualizar el historial de *Calibraciones* y *Certificados de calibración* planificados y realizados para el *Instrumento de medición<!-- Strumento di misura -->*.   
Haciendo doble clic con el ratón sobre la fila deseada es posible gestionar la *Calibración* seleccionada.   
El listado incluye la siguiente información:   
> **Tipo de calibración**: código del *Tipo de calibración*.   
> **Descripción tipo de calibración**: descripción del *Tipo de calibración*.   
> **Año**: es el *Año* del documento.   
> **Número**: es el *Número* del documento.   
> **Calibración interna**: indica si se ha emitido una *Calibración interna*.   
> **Programada**: indica si el documento ha sido programado (planificado).   
> **Fecha estimada**: fecha estimada de calibración.   
> **Fecha calibración**: fecha efectiva de calibración.   
> **Resultado**: código del *Resultado* de la calibración.   
> **Descripción resultado**: descripción del *Resultado* de la calibración.   
> **Categoría**: código de la *Categoría de instrumento*.   
> **Descripción categoría**: descripción de la *Categoría de instrumento*.   
> **Código**: código del *Instrumento de medición<!-- Strumento di misura -->*.   
> **Matrícula**: matrícula del *Instrumento de medición<!-- Strumento di misura -->*.   
> **Modelo**: modelo del *Instrumento de medición<!-- Strumento di misura -->*.   
> **Laboratorio externo**: razón social del *Proveedor* que realiza la calibración externa.   
> **Función**: código de la *Función empresarial* que realiza la calibración interna.   
> **Descripción función**: descripción de la *Función empresarial* que realiza la calibración interna.   
> **Código**: código del *Empleado* que realiza la calibración interna.   
> **Apellido**: apellido del *Empleado* que realiza la calibración interna.   
> **Nombre**: nombre del *Empleado* que realiza la calibración interna.   

### Extra Data<!-- Extra data -->
Es posible ingresar [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) para cada *Instrumento de medición<!-- Strumento di misura -->*.   

### Documentos relacionados<!-- Documenti collegati -->
En este listado es posible adjuntar y consultar archivos anexos; es posible ver la vista previa.   

### Imagen<!-- Immagine -->
Es posible adjuntar una imagen del *Instrumento de medición<!-- Strumento di misura -->* mediante drag&drop; se muestra la vista previa.   
Este adjunto no se incluye en el gestor documental de Fluentis.   

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes](/docs/guide/common).