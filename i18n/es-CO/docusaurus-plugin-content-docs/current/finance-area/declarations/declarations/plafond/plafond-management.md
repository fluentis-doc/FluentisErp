---
title: Gestión Plafond
sidebar_position: 5
ai_generated: true
---

El formulario se encuentra en la ruta **Administración > Declaraciones > Plafond > Nuevo<!-- Amministrazione > Dichiarazioni > Plafond > Nuovo -->** y permite la creación de un *nuevo* Cálculo de Plafond<!-- Calcolo del Plafond -->.

## Cómo crear un Cálculo de Plafond<!-- Calcolo di Plafond -->

1.  Al abrir el nuevo formulario (tras pulsar el comando *Nuevo Plafond<!-- Nuovo Plafond -->*), ingrese los siguientes valores de cabecera: 

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image01.png)

 **Descripción**: descripción libre para el cálculo que está ingresando. Se recomienda una descripción que indique el año de inicio y el tipo de cálculo.

**Año**: ingrese el año de inicio del cálculo plafond<!-- calcolo plafond --> que se está ingresando.

:::tip[Nota]
En la gestión de los diferentes cálculos podemos bloquear el periodo, por ejemplo cada año, e ingresar un nuevo cálculo para el año siguiente, aunque esto no es necesario. Se recomienda (también por comodidad) continuar en el mismo cálculo año tras año, continuando con el comando *Proponer Valores<!-- Proponi Valori -->*. 

La necesidad de ingresar un nuevo cálculo surge, en cambio, en caso de cambio de metodología de cálculo, por ejemplo, de plafond fijo a plafond móvil.
:::

**Tipo inicio Plafond**: si esto es un nuevo Plafond o si es una extensión de un plafond móvil; 

**Tipo plafond**: si es Solar (es decir, fijo) o Móvil (son dos opciones fiscales previstas para gestionar el plafond). 

Fecha inicio Plafond: es necesario ingresar el mes y el año inicial<!-- mese e anno iniziale --> del plafond, y en caso de un plafond "extensión" también el **mes**, el **año** y el **importe** del último período calculado (sección Propiedades plafond). 

**Valor de control**: es posible establecer un umbral de valor para alertar al usuario cuando está por utilizar el total del plafond<!-- plafond --> disponible. Por ejemplo, si el plafond<!-- plafond --> disponible al inicio del año es de cien mil euros, si ajustamos el umbral de valor en diez mil, recibiremos una alerta al superar los noventa mil, ya que se están usando los últimos diez mil.

**Por defecto**: marca que señala, en particular cuando hay varios cálculos guardados, cuál es el cálculo "actual".

:::tip[Atención]
En presencia de un cálculo de Plafond con esta marca activa, al generar el archivo telemático de envío a la agencia tributaria de las [**declaraciones de intención**](/docs/finance-area/declarations/declarations/intent-declaration) emitidas, se completará el campo específico correspondiente.
:::

2. Cargar los valores históricos a utilizar: es necesario consignar en la cuadrícula de detalle los datos de los doce meses anteriores respecto a la fecha (año) de inicio del cálculo. 

:::tip[Atención]
En el caso de un plafond<!-- plafond --> **móvil** será necesario ingresar precisamente **mes por mes**, ya que en cada mes se deberá eliminar el 12º mes más antiguo y añadir los datos del nuevo 12º; 

en el caso de **plafond<!-- plafond --> solar**, en cambio, se pueden cargar los primeros 11 meses con **todos los valores cero** y consignar directamente el total de las ventas en plafond<!-- plafond --> del año del periodo final de **diciembre**. 

El programa verificará la integridad de los datos y guardará el plafond<!-- plafond --> para poder utilizarlo posteriormente.
:::

![](/img/it-it/finance-area/declarations/declarations/plafond/plafond-start-management/image02.png)

3. Mes a mes, será necesario entrar en modo edición en el formulario de gestión del plafond<!-- plafond --> para realizar el cálculo actualizado de los datos mediante el botón **Proponer valores<!-- Proponi valori -->** (presente en la ribbon bar). 

**Para anular el cálculo de un mes es necesario anular los periodos desde el último mes presente en la lista (el más reciente) hasta el mes afectado**. 

El dato del valor disponible al inicio del mes es visible en la columna correspondiente.

### Barra de herramientas<!-- Ribbon Bar -->

|  |  |
| --- | --- |
| **Nuevo plafond** | Posiciona el cursor en una nueva fila para crear datos. |
| **Eliminar plafond** | Elimina la fila de cálculo seleccionada. No es posible eliminar datos intermedios, sólo el último de la lista. |
| **Proponer valores** | Realiza el cálculo para el nuevo mes, proponiendo los valores en la cuadrícula. |