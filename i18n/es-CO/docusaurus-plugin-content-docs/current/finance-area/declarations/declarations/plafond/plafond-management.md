---
title: gestione plafond
sidebar_position: 5
---

El formulario se encuentra en la ruta **Administración > Declaraciones > Plafón > Nuevo** y permite la creación de un *nuevo* Cálculo del Plafón.

## Cómo crear un Cálculo de Plafón

1.  Al abrir el nuevo formulario (después de presionar el comando *Nuevo Plafón*), ingrese los siguientes valores en el encabezado:

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image01.png)

**descrizione**: Descripción libre del cálculo que se está ingresando. Se recomienda una descripción que incluya el año de inicio y el tipo de cálculo.

**anno**: ingrese el año de inicio del cálculo del plazón que se está ingresando.

:::tip[Nota]
En la gestión de los diversos cálculos, podremos bloquear el período, por ejemplo, cada año, e insertar un nuevo cálculo para el año siguiente, sin embargo, esto no es necesario. Se recomienda (también por comodidad) continuar en el mismo cálculo año tras año, continuando a presionar el comando *proponi valori*.

La necesidad de insertar un nuevo cálculo surge, en cambio, en caso de cambio de metodología de cálculo, por ejemplo, del plazón fijo al plazón móvil.

:::

**tipo inizio plafond**: si se trata de un nuevo Plafón o si es una extensión de un plazón móvil; 

**tipo plafond**: si es Solar (es decir, fijo) o Móvil (son dos opciones fiscales previstas para gestionar el plazón). 

**data inizio plafond**: es necesario ingresar el mes y el año inicial del plazón, y en caso de un plazón 'extensión', también el **mes**, el **año** y el **importe** del último período calculado (sección Propiedades del plazón). 

**Valor de control (Valore di controllo)**: es posible establecer un límite de valor con el fin de alertar al usuario que está a punto de utilizar el total del plazón disponible. Por ejemplo, si el plazón disponible al inicio del año es de cien mil euros, si establecemos en el valor límite diez mil, tendremos una alerta al superar los noventa mil, ya que estamos utilizando los últimos diez mil.

**default**: indicador que marca, especialmente en presencia de varios cálculos almacenados, cuál es el cálculo "actual".

:::tip[Atención]
En presencia de un cálculo de Plafón con este indicador activo, al crear la pista telemática para el envío a la agencia de ingresos de las [**declaraciones de intención**](/docs/finance-area/declarations/declarations/intent-declaration) emitidas, se valorizará el campo específico correspondiente.
:::

2. Cargue los valores históricos a utilizar: es necesario registrar en la cuadrícula de detalles los datos de los doce meses anteriores a la fecha (año) de inicio del cálculo. 

:::tip[Atención]
en el caso de un plazón **móvil**, será necesario ingresar precisamente **mes a mes**, ya que cada mes se deberá restar el 12° mes saliente y agregar los datos del nuevo 12°; 

en el caso de un **plazón solar**, en cambio, se pueden cargar los primeros 11 meses con **todos los valores en cero** y proporcionar directamente el total de las ventas en el plazón del año del período final de **diciembre**. 

El programa verificará la integridad de los datos y guardará el plazón para poder utilizarlo posteriormente.
:::

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image02.png)

3. Mes a mes será necesario ingresar en modificación en la pantalla de gestión del plazón para operar el cálculo actualizado de los datos a través del botón **proponi valori** (presente en la barra de ribbon). 

**Para anular el cálculo de un mes es necesario anular los períodos desde el último mes presente en la lista (el más reciente) hasta el que está interesado**. 

El dato del valor disponible al inicio del mes es visible en la columna correspondiente.

### Barra de Ribbon

|  |  |
| --- | --- |
| **nuovo plafond** | Establece el cursor en una nueva fila de creación de datos. |
| **cancella plafond** | Elimina la fila de cálculo seleccionada. No es posible eliminar datos intermedios, solo el último de la lista. |
| **proponi valori** | Realiza el cálculo para el nuevo mes, proponiendo los valores en la cuadrícula. |