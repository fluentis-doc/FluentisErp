---
title: non conformità
sidebar_position: 2
---

Los datos que componen una **non conformità** son:     
- **tipo non conformità**: contiene la tipología; esta selección determinará la posibilidad de ingresar un cliente, un proveedor o una función empresarial según la tipología;               
- **anno**, **numero** y **data**.

Analicemos las pestañas a continuación.

## Encabezado (Testata) 
**persona responsabile**: contiene el [Empleado (Dipendente)](/docs/project-management/registers/employee/new-employee) responsable;      
**funzione aziendale**: contiene una eventual Función empresarial responsable;       
**sito produttivo**: contiene el sitio productivo empresarial en el que se ha producido la no conformidad;      
**Aprobado/En fecha (Approvato/In data)**: contiene las referencias de quien ha aprobado la no conformidad;  
**Cerrado/En fecha (Chiuso/In data)**: contiene las referencias de quien ha cerrado la no conformidad y las eventuales **notifiche** realizadas.        

Las no conformidades pueden ser Aprobadas y Cerradas solo por:
- Persona responsable: en este campo es posible ingresar el Empleado codificado, que debe tener un usuario Arm asociado;
- Función responsable: se puede habilitar a toda una función empresarial para la modificación; en este caso, debe abrir el formulario en la Función empresarial e ingresar, en la cuadrícula inferior, los Empleados a habilitar para cada función empresarial seleccionada.

A continuación, hay varias pestañas.

## Referencias de documentos (Rif. documenti) 
Contiene las referencias de los documentos relacionados con la mercancía que resultó no conforme, por lo tanto, la factura con la que se vendió, el recibo de mercancía, la reclamación de la que nació, etc. Los campos no son editables, pero se completan automáticamente si la no conformidad proviene de otros documentos.

## Notas (Annotazioni)     
Esta pestaña contiene Notas libres, comerciales, técnicas o administrativas.

## Valores (Valori)   
Esta pestaña contiene:    
**divisa**: con la cual especificar los valores de la no conformidad;      
**Ref. Doc. de cargo (Rif. Doc addebito)**: contiene los documentos recibidos por los cuales se solicita un cargo de la no conformidad;       
**costo di gestione**: automático si se decide en los Parámetros, de lo contrario imputable manualmente; este costo es el costo de gestión interno que gasto para gestionar la no conformidad; será imputable: a mi empresa si es responsable del suministro; al proveedor de lo contrario responsable del suministro;       
**valore da addebitare**: es el valor que reconocemos y que se debe cobrar; la nota de cargo generada tendrá la referencia en el campo **rif. doc. accredito** y llevará la marca **valorizzato**; este valor puede ser diferente del **totale non conformità** si se decide no imputar el total al eventual proveedor;     
**totale non conformità**: es la suma del Total de material no reprocesado, Total de material reprocesado y Costo de gestión.             

## Gestión de defectos (Gestione difetti) 
Es posible indicar uno o más defectos encontrados, con los datos correspondientes:     
- **difetto riscontrato**: contiene el Defecto con su respectivo **codice** y **descrizione** y eventuales **note**;     
- **causa presunta**, que ha causado el defecto;    
- **fase di rilevamento**, con los detalles de la fase en la que se detectó el defecto;   
- **gravità**: contiene la eventual Gravedad del defecto;    
- **rif. azione correttiva**: contiene las referencias de la acción correctiva si se creó.   

Esta pestaña se divide en más pestañas.        

## Datos del defecto (Dati difetto)     
Los datos principales son:      
- **causa effettiva**: es posible que la causa del defecto presunta, ingresada en la cuadrícula, no coincida con la causa efectiva, que se puede ingresar en este campo;      
- **soluzione proposta**: contiene la solución que se ha propuesto para resolver el defecto, entre una lista desplegable;     
- **decisione intrapresa**: contiene la solución que, entre las posibles propuestas, ha sido adoptada;  
- etc.     
Es posible especificar los varios campos con las **note** al lado.     

## Materiales utilizados (Materiali utilizzati) 
Esta pestaña contiene los materiales eventualmente utilizados para remediar el defecto. Los datos de los materiales están acompañados de los costos respectivos.

## Artículos defectuosos (Oggetti difettosi) 
Contiene todos los artículos en los cuales se ha encontrado el defecto de la cuadrícula principal. Los datos ingresados en esta pestaña alimentarán los **valori** del encabezado.

## Sujetos involucrados (Soggetti coinvolti) 
En esta pestaña es posible indicar las Funciones empresariales involucradas y/o los [Empleados (Dipendenti)](/docs/project-management/registers/employee/new-employee).     
En la sección **gestione coinvolgimento** es posible indicar el Motivo del involucramiento, campo automático si hemos ingresado uno anteriormente en la tabla de Funciones empresariales.    

Los botones específicos de la barra de herramientas son:  
**crea azione correttiva**: al seleccionar un defecto, es posible crear una Acción correctiva. Se abre un formulario en el que se solicitan una serie de datos para incluir en la Acción.