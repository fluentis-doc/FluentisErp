---
title: Nueva Liquidación de Agentes (Nuova Liquidazione agenti)
sidebar_position: 3
---
El formulario se abre a través de la ruta *Ventas > Agentes > Liquidaciones agentes > Búsqueda de liquidaciones agentes* haciendo clic en el botón **Nuevo**.

:::tip[Consejo]
Aunque es posible crear una liquidación *manualmente*, como se explica a continuación,

recomendamos utilizar el **wizard** de [**Creación automática de liquidaciones de agentes**](/docs/sales/agents/procedures/automatic-generation-of-commission-settlement).
:::

:::note[Nota]
Un escenario con **ejemplos** de gestión de agentes y cálculos de comisiones está presente [**aquí**](/docs/sales/agents/agent-scenario).
:::

## **liquidazioni**

La entrada de una liquidación requiere:  
- el agente titular de la liquidación (que debe tener el tipo y solución de pago predeterminados en su registro),  
- el número y el año se completan automáticamente,  
- la fecha de la liquidación (se propone la fecha actual),  
- la descripción de la liquidación (p. ej.: liquidación primer trimestre 2012),  
- el mes/año de referencia para el cálculo de Enasarco.

### 1.1 Resumen (Riepilogativa)

Esta pestaña presenta todos los elementos de cálculo de la comisión.  

**riepilogo provvigioni**: en esta cuadrícula se encuentran, divididos por divisa, los totales de las comisiones liquidadas. Debajo de esta, están los campos con la *Divisa* de referencia de la liquidación (propuesta por la divisa ingresada en el registro del agente), el *Tipo de cambio* y la *Fecha valor* para el cambio; más abajo, el *IVA* a aplicar al imponible de la comisión (también propuesto por defecto desde el registro del agente) y el *Total documento*.

**riepilogo calcolo ritenuta**: la cuadrícula permite visualizar los pagos a considerar como anticipos sobre la liquidación en uso, el *Tipo de retención* a aplicar (también recuperado prioritariamente del registro del agente o de la categoría de agente), los porcentajes correspondientes y los importes para la retención.

En caso de que esté configurado el *Cálculo manual*, será posible forzar los datos relacionados con la sección de gestión de retenciones.

### 1.2 Pagos (Pagamenti)

En esta pestaña, el sistema reporta en **Lista de pagos** las configuraciones de pago predeterminadas ingresadas en el registro del agente, que son modificables.

En la cuadrícula **lista scadenze** se calculan los vencimientos relativos: se recuerda que el importe de los vencimientos debe alinearse manualmente a las modificaciones realizadas en la liquidación, haciendo corresponder estas al dato del importe a pagar.

#### Botones específicos 

> **inserisci pagamenti**: coloca el cursor para la inserción de una nueva fila dentro de los tipos de pago.  
> **cancella pagamenti**: realiza la eliminación de las configuraciones de pago seleccionadas.  
> **inserisci scadenze**: coloca el cursor para la inserción de una nueva fila dentro de los vencimientos de la liquidación.  
> **cancella scadenze**: realiza la eliminación de los vencimientos seleccionados.

## **2. Facturas/DDT/Pedidos (Fatture/DDT/Ordini)**

Según el *Tipo de documento considerado para el imponible de la comisión* ingresado en el *Registro del agente*, se visualiza la segunda pestaña con los documentos: Facturas, DDT o pedidos.

Dentro de la cuadrícula superior, una vez realizada la búsqueda, se visualizan los documentos contabilizados para el cálculo de la liquidación del agente en uso.

A través de los dos botones de gestión: **Vinculación de documentos con la liquidación** y **Eliminar vínculos con la liquidación**, es posible agregar manualmente nuevos documentos a la liquidación o eliminarlos para incluirlos en una posterior.

#### Botones específicos 

> **ricerca**: realiza la búsqueda de los documentos ingresados en la liquidación en uso.  
> **collegamento documenti con la liquidazione**: abre un formulario de búsqueda e inserción manual de documentos en la liquidación en uso.  
> **Eliminar vínculos con la liquidación (Cancella collegamenti con la liquidazione)**: elimina el documento seleccionado de la liquidación en uso.