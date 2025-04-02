---
title: reclami
sidebar_position: 2
---

Los datos que componen un **reclamo** son:  
**tipo reclamo**: contiene la tipología; esta selección determinará las pestañas visibles;  
**cliente**: contiene la procedencia del reclamo, la cual puede ser también un **contatto**.

Analicemos la sección **testata***, común a ambos tipos posibles de Reclamo.  
**persona responsabile**: contiene el [Empleado (Dipendente)](/docs/project-management/registers/employee/new-employee) responsable del reclamo;  
**funzione aziendale**: contiene una posible Función empresarial responsable;  
**rif. documenti**: contiene los referentes de los documentos relacionados con la mercancía que ha resultado no conforme, es decir, la factura con la cual se vendió, la recepción de mercancía, etc.;  
**Aprobado/En fecha (Approvato/In data)**: contiene los referentes de quién aprobó el Reclamo;  
**Cerrado/En fecha (Chiuso/In data)**: contiene los referentes de quién cerró el Reclamo y las posibles **notifiche** realizadas.  

Los reclami pueden ser Aprobados y Cerrados solo por:  
- Persona responsable: en este campo es posible insertar el Empleado codificado, que debe tener un usuario Arm asociado;  
- Función responsable: es posible habilitar a la modificación a toda una función empresarial; en este caso debe hacer Abrir formulario en la Función empresarial e insertar, en la cuadrícula inferior, los Empleados a habilitar para cada función empresarial seleccionada.  

Luego hay varias pestañas.

## Notificaciones

Esta pestaña contiene el **Motivo de la impugnación (Motivo della contestazione)** recibido y, en caso, el **sito produttivo** empresarial destinatario.  
Si el reclamo no es aceptado por la empresa, el **motivo del recesso** será libremente rellenable al lado. 

## Anotaciones

Esta pestaña contiene Notas libres, comerciales, técnicas o administrativas.

## Valores

Esta pestaña contiene:  
**divisa**: con la cual especificar los valores del Reclamo;  
**Rif. Doc. cargo (Rif. Doc addebito)**: contiene los documentos recibidos por los cuales se solicita un cargo de la no conformidad;  
**totale reclamo**: este campo es automático si en los Parámetros está activada la opción **ricalcolo automatico totali**, o se calcula automáticamente por la suma de la gestión de defectos; este reclamo es la suma que nos impugna el cliente y, si es totalmente a acreditar, coincidirá con el Valor a acreditar;  
**costo di gestione**: automático si así se decide en los Parámetros, de lo contrario imputable manualmente; este costo es el costo de gestión interno que gasto para la gestión del reclamo; se imputará: a mi empresa si es responsable del suministro; al proveedor si es el responsable del suministro;  
**valore da accreditare**: es el valor que reconocemos y a acreditar; la nota de crédito generada tendrá la referencia en el campo **rif. doc. accredito** y marcará la opción **Valorizado**; el total a acreditar es lo que pagamos al cliente, el costo de gestión es lo que pago internamente.  

Analicemos la pestaña **gestione difetti***, presente solo en caso de que el tipo de Reclamo sea **Reclamo cliente (Reclamo cliente)**.  
Es posible indicar uno o más defectos encontrados en el Reclamo, con los datos relacionados:  
- **difetto riscontrato**: contiene el Defecto con su **Código** y **Descripción** y posibles **Notas**;  
- **causa presunta**, que ha causado el defecto;  
- **fase di rilevamento**, con los detalles de la fase en la cual se detectó el defecto;  
- **quantità**: contiene la cantidad vendida, impugnada y devuelta de la mercancía;  
- **rif. azione correttiva**: contiene los referentes de la acción correctiva si se ha creado.  
Esta pestaña se divide en más pestañas.

## Datos del defecto

Los datos principales son:  
- **gravità**: contiene la eventual Gravedad del defecto;  
- **causa effettiva**: es posible que la causa del defecto presunta, ingresada en la cuadrícula, no coincida con la causa efectiva, que se puede insertar en este campo;  
- **soluzione proposta**: contiene la solución que ha sido propuesta para resolver el defecto, de entre una lista desplegable;  
- **decisione intrapresa**: contiene la solución que, de entre las posibles propuestas, ha sido adoptada;  
- etc.  
Es posible especificar los varios campos con las **Notas** al lado.  

## Materiales utilizados

Esta pestaña contiene los materiales que se hayan utilizado para remediar el defecto. Los datos de los materiales están acompañados de los costos correspondientes.

## Objetos reclamados

Contiene todos los artículos en los cuales se ha encontrado el defecto de la cuadrícula principal.

## Sujetos involucrados

En esta pestaña es posible indicar las Funciones empresariales involucradas y/o los [Empleados (Dipendenti)](/docs/project-management/registers/employee/new-employee).  
En la sección **gestione coinvolgimento** es posible indicar el Motivo del involucramiento, campo automático si en la tabla de Funciones empresariales hemos ingresado previamente uno.  

Analicemos la pestaña **gestione 8d***, presente solo en caso de que el tipo de Reclamo sea **Reclamo cliente 8D (Reclamo cliente 8D)**.  
Esta pestaña se divide en dos pestañas adicionales.

## Objetos reclamados

Esta pestaña contiene una lista de todos los materiales que nos están reclamando.

## Gestión 8D

Esta pestaña contiene la gestión del modelo 8D de Resolución de Problemas, que requiere la definición de:  
- un **team**, donde indicar la Función y/o el Empleado;  
- **azioni di contenimento** para evitar la repetición inmediata de los defectos encontrados;  
- un análisis de las **cause** que han permitido la ocurrencia del evento;  
- la lista de las **azioni** que se llevarán a cabo y que serán Permanentes en el tiempo para evitar que el defecto se reproduzca;  
- en el momento en que se activa la opción **attuata** en la Acción, se habilita la **convalida azioni**;  
- posibles **fasi** a realizar en función de las actividades para las acciones correctivas.  

Los botones específicos de la barra de herramientas son:  
**crea azione correttiva**: al seleccionar un defecto, es posible crear una Acción correctiva. Se abre una ventana en la que se solicitan una serie de datos que deben registrarse en la Acción.  
**Crear no conformidad (Crea non conformità)**: al seleccionar un defecto, es posible crear una No conformidad relativa.