---
title: Parámetros de Riesgo del Cliente
sidebar_position: 6
---

### PREÁMBULO 

El módulo de riesgo del cliente lee los pedidos de clientes, notas de entrega, facturas, partidas, efectos a vencer (en práctica, todo lo que ocupa crédito y crea exposición).  

Las partidas y efectos se leen en cualquier caso; los documentos (OC, DN, FV) son una elección que se debe realizar con un indicador específico en las diversas tablas (Tipo de orden de venta, Tipos de notas de entrega de venta, Tipos de Factura de venta). 

El indicador a aplicar para la lectura específica de los diferentes tipos de documentos es el indicador **Crédito**.

También está presente el indicador **Excluir bloqueo**: aunque el documento genere crédito, será excluido del bloqueo. (aunque ocupe crédito, no se bloquea, pero se señala).

### LÓGICA GENERAL

Los pedidos son considerados si están impresos y confirmados + indicador en el tipo (no ejecutado o ejecutado forzosamente).  
Ejecutado forzosamente = el saldo no será entregado y el pedido se considera cerrado, incluso si no lo estaría.

Las Notas de Entrega deben estar impresas y no facturadas.  
Las Facturas, impresas o no, dependen del parámetro y no están contabilizadas (de lo contrario, es una madurez).

En los **Parámetros** del módulo de Riesgo de Clientes se pueden preestablecer los elementos por defecto a proponer en los procedimientos del módulo.

> **Número de días que excede la fecha de vencimiento para facturas presentadas sujetas a cobro**: este campo permite definir cuántos días considerar la factura sujeta a cobro, no cobrada después de su fecha de vencimiento.  
> **Número de días que se ha excedido la fecha de vencimiento para facturas presentadas después de la cobranza**: este campo permite definir cuántos días considerar la factura presentado después de la cobranza, no cobrado después de su fecha de vencimiento.  
> **Desde la fecha de cálculo**: es la fecha de inicio del cálculo. Los documentos con fecha anterior no serán considerados.  
> **Ver facturas no pagadas contabilizadas**: la configuración de este indicador mostrará en el módulo también los importes de los insolutos contabilizados, independientemente del estado cobrado. Tiene simplemente un valor informativo.  

**Multiplicador de evaluación crediticia**: valor utilizado en el formulario [**Uso de crédito**](/docs/treasury/customer-risk/use-credit) para determinar el importe del campo *Evaluación de crédito*.

#### Base de cálculo para evaluar el riesgo del cliente   
> **Saldo del libro mayor**: con esta configuración, el cálculo del crédito se realizará en función del Saldo contable del cliente.  
> **Valores de madurez abiertos**: con esta configuración, el cálculo del crédito se realizará en función de los valores de madurez abiertos del cliente.  
> **Considere los valores de madurez de grabaciones temporales**: si está activo el indicador anterior, el cálculo también considera los posibles movimientos derivados de registros provisionales.  
> **Informe de física de bloques**: en caso de que el crédito del cliente prevé el bloqueo del documento, este indicador bloquea la posibilidad de imprimir físicamente el documento bloqueado. Si no está configurado, el documento se puede imprimir, pero el indicador ‘impreso’ no será asignado al documento.  
> **Considere las facturas que deben ser impresas**: tiene en cuenta, en el cálculo del crédito, las facturas creadas pero no impresas. Si no está activado, la lógica por defecto considera las facturas solo si están impresas (con el indicador impreso activo).