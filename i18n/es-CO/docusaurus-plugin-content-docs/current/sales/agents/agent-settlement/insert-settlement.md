---
title: Nueva Liquidación de agentes
sidebar_position: 3
ai_generated: true
---
El formulario se abre a través de la ruta *Ventas > Agentes > Liquidaciones de agentes > Búsqueda de liquidaciones de agentes<!-- Ricerca liquidazioni agenti -->* haciendo clic en el botón **Nuevo<!-- Nuovo -->**.

:::tip[Consejo<!-- Consiglio -->]
Aunque es posible crear una liquidación *manualmente*, como se explica a continuación,

recomendamos utilizar el **wizard** de [**Creación automática de liquidación de agentes**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement).
:::

:::note[Nota]
Un escenario con **ejemplos** de gestión de agentes y cálculo de comisiones está presente [**aquí**](/docs/sales/agents/agent-scenario)
:::

## **1. Liquidaciones**

El ingreso de una liquidación requiere: 
- el agente titular de la liquidación<!-- agente intestatario della liquidazione --> (que debe tener el tipo y solución de pago predeterminada en su ficha), 
- el número y el año se completan automáticamente,
- la fecha de la liquidación (se propone la fecha actual), 
- la descripción de la liquidación (por ejemplo: liquidación primer trimestre 2012), 
- el mes/año de referencia para el cálculo Enasarco.

### 1.1 Resumen<!-- Riepilogativa -->

Esta pestaña muestra todos los elementos de cálculo de la comisión<!-- provvigione -->.  

**Resumen de comisiones<!-- Riepilogo provvigioni -->**: en esta cuadrícula están, divididas por divisa, los totales de las comisiones liquidadas. Debajo de esto, aparecen los campos con la *Divisa* de referencia de la liquidación (propuesta según la divisa establecida en la ficha del agente), el *Cambio* y la *Fecha valor* para el cambio; más abajo, el *IVA* que se aplicará a la base imponible de la comisión (también propuesta por defecto en la ficha del agente) y el *Total del documento*.

**Resumen de cálculo de retención<!-- Riepilogo calcolo ritenuta -->**: la cuadrícula permite ver las compensaciones de los perceptores a considerar como anticipos en la liquidación en uso, el *Tipo de retención* a aplicar (también tomada prioritariamente de la ficha del agente o de la categoría del agente), los porcentajes relativos y los importes para la retención.

En caso de estar activado el *Cálculo manual*, será posible forzar los datos relativos a la sección de gestión de retenciones.

### 1.2 Pagos<!-- Pagamenti -->

En esta pestaña el sistema muestra en **Lista de pagos** las configuraciones de pago por defecto registradas en la ficha del agente, las cuales se pueden modificar.

En la cuadrícula **Lista de vencimientos** se calculan los vencimientos relativos: se recuerda que el importe de los vencimientos deberá ajustarse manualmente a los cambios realizados en la liquidación, haciendo coincidir estos con el importe a pagar.

#### Botones específicos<!-- Pulsanti specifici -->

> **Insertar pagos**: posiciona el cursor para ingresar una nueva fila dentro de los tipos de pago.  
> **Eliminar pagos**: elimina las configuraciones de pago seleccionadas.  
> **Insertar vencimientos**: posiciona el cursor para ingresar una nueva fila dentro de los vencimientos de la liquidación.  
> **Eliminar vencimientos**: elimina los vencimientos seleccionados.

## **2. Facturas/DDT/Pedidos<!-- Fatture/DDT/Ordini -->**

Según el *Tipo de documento considerado para la base imponible de la comisión* ingresado en la *Ficha del agente*, se visualiza la segunda pestaña con los documentos: Facturas<!-- Fatture -->, DDT o Pedidos<!-- ordini -->.

Dentro de la cuadrícula superior, una vez realizada la búsqueda, se visualizan los documentos computados para el cálculo de la liquidación del agente en uso.

A través de los dos botones de gestión: **Vincular documentos con la liquidación<!-- Collegamento documenti con la liquidazione -->** y **Eliminar vínculos con la liquidación<!-- Cancella collegamenti con la liquidazione -->** es posible agregar manualmente nuevos documentos a la liquidación o eliminarlos para agregarlos en una posterior.

#### Botones específicos<!-- Pulsanti specifici -->

> **Buscar<!-- Ricerca -->**: ejecuta la búsqueda de los documentos ingresados en la liquidación en uso.  
> **Vincular documentos con la liquidación<!-- Collegamento documenti con la liquidazione -->**: abre una pantalla para buscar e ingresar manualmente documentos en la liquidación en uso.  
> **Eliminar vínculos con la liquidación<!-- Cancella collegamenti con la liquidazione -->**: elimina el documento seleccionado de la liquidación en uso.