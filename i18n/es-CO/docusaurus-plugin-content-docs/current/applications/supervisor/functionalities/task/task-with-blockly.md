---
title: Tarea y Blockly (Task & Blockly)
sidebar_label: Tarea y Blockly (Task & Blockly)
sidebar_position: 2
---

:::info
Cuando se abre el formulario de detalles, por defecto se visualiza el editor Blockly y no el editor de texto.  
Es posible cambiar de la modalidad Blockly al editor de texto (o viceversa) a través del menú desplegable **tipo script** que permite seleccionar la modalidad deseada.
:::

**Supervisor (Supervisor)** aprovecha los bloques personalizados de la biblioteca Blockly de Google para crear scripts en C#. Además de las categorías estándar de Blockly (operadores lógicos, instrucciones de ciclo, operaciones matemáticas, textos, fechas, listas, colores, variables), las categorías personalizadas que se pueden encontrar en la **Caja de herramientas (Toolbox)** son:

- **Variables contextuales a Supervisor (Variabili contestuali a Supervisor)**, contiene bloques para seleccionar variables del contexto actual y para convertir un objeto genérico en una cadena/número/...;

- **dizionario**, contiene todos los bloques necesarios para trabajar con la estructura de datos de tipo <span style={{ fontFamily: 'Consolas' }}>Dizionario</span>;

- **Objetos Fluentis (Oggetti Fluentis)**, divididos en tres subcategorías:
     - **Comunes (Commons)**, contiene bloques para realizar operaciones comunes en los *Objetos Fluentis*.
     - **read only**, contiene bloques específicos para realizar operaciones de solo lectura en los *Objetos Fluentis*.
     - **read write**, contiene bloques específicos para realizar operaciones de lectura-escritura en los *Objetos Fluentis*.
  
- **Acceso a la base de datos (Accesso al database)**, contiene bloques que pueden ejecutar operaciones directamente con la base de datos, como llamar a procedimientos almacenados o leer valores de un conjunto de registros.

- **attività**, a su vez divididas en categorías que llevan el mismo nombre que los grupos (los mismos grupos consultables desde el formulario principal de actividades). Los grupos estándar son:
     - **utilità**, que contiene todas las [actividades (attività)](../activity/activity-intro) previstas como estándar (el usuario no puede agregar nuevas actividades o modificar las existentes en este grupo);
     - **esempi**, contiene todos los ejemplos de actividades que pueden guiar al usuario en la creación de una nueva *task* personalizada (el usuario no puede agregar nuevas actividades o modificar las existentes en este grupo, debe crear un nuevo grupo con sus actividades personalizadas).

- **Globales (Globals)**, contiene bloques que pueden recuperar **parametri** globales o [listas de distribución (liste di distribuzione)](../distribution-list/distribution-list-intro).

- **Utilidad de Tareas (Task Utility)**, contiene scripts útiles para todas las *attività*;

Para agregar código a una *task* con *Blockly*, arrastre y suelte los bloques desde la *Caja de herramientas (Toolbox)* en el **Espacio de trabajo (Workspace)**.

- **#STD** gestiona el código dentro del método del script <span style={{ fontFamily: 'Consolas' }}>ExecuteTask()</span>;

Una vez que se haya terminado de ingresar el código, es necesario guardar el proyecto y proceder a su compilación mediante el botón correspondiente.

El código del script generado aparecerá entre las dos líneas comentadas (renombradas <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// INICIO CÓDIGO WIZARD (// START WIZARD CODE)</span> y <span style={{ color: 'forestGreen' , fontWeight: 'bold' }}>// FIN CÓDIGO WIZARD (// END WIZARD CODE)</span>).

![alt text](/img/it-it/applications/supervisor/supervisor10.png)