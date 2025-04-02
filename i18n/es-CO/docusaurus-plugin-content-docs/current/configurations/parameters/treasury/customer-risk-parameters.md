---
title: parametri rischio cliente
sidebar_position: 6
---

### PREÁMBULO (PREMESSA)

El módulo de riesgo del cliente lee los pedidos de clientes, DDT, facturas, partidas, efectos a vencer (en práctica, todo lo que ocupa crédito y crea exposición).  

Las partidas y efectos se leen en cualquier caso; los documentos (OC, DDT, FV) son una elección que se debe realizar con un indicador específico en las diversas tablas (Tipo de pedido del cliente, Tipos de DDT de venta, Tipos de Factura de venta).

El indicador a aplicar para la lectura específica de los diferentes tipos de documentos es el indicador **fido**.

También está presente el indicador **Excluir bloqueo (Escludi blocco)**: aunque el documento genere crédito, será excluido del bloqueo. (aunque ocupe crédito, no se bloquea, pero se señala).

### LÓGICA GENERAL (LOGICA GENERALE)

Los pedidos son considerados si están impresos y confirmados + indicador en el tipo (no cumplidos o cumplidos forzosamente).  
Cumplidos forzosamente = el saldo no será entregado y el pedido se considera cerrado, incluso si no lo estaría.

Las Notas de Entrega (Bolle) deben estar impresas y no facturadas.  
Las Facturas, impresas o no, dependen del parámetro y no están contabilizadas (de lo contrario, es una partida).

En los **parametri** del módulo de Riesgo de Clientes se pueden preestablecer los elementos por defecto a proponer en los procedimientos del módulo.

> **N. días más allá de la fecha de vencimiento para efectos presentados al salvar buen fin (N. giorni oltre la scadenza per effetti presentati al salvo buon fine)**: este campo permite definir cuántos días considerar el efecto presentado s.b.f., no cobrado después de su fecha de vencimiento.  
> **N. días más allá de la fecha de vencimiento para efectos presentados después de la cobranza (N. giorni oltre la scadenza per effetti presentati al dopo incasso)**: este campo permite definir cuántos días considerar el efecto presentado después de la cobranza, no cobrado después de su fecha de vencimiento.  
> **da data calcolo**: es la fecha de inicio del cálculo. Los documentos con fecha anterior no serán considerados.  
> **visualizza insoluti contabilizzati**: la configuración de este indicador mostrará en el módulo también los importes de los insolutos contabilizados, independientemente del estado cobrado. Tiene simplemente un valor informativo.  

**moltiplicatore valutazione fido**: valor utilizado en el formulario [**Uso de crédito (Utilizzo fido)**](/docs/treasury/customer-risk/use-credit) para determinar el importe del campo *fido stimato*.

#### Base de cálculo para determinar el riesgo del cliente (Base di calcolo per determinare il rischio cliente)  
> **saldo contabile**: con esta configuración, el cálculo del crédito se realizará en función del Saldo contable del cliente.  
> **partite aperte**: con esta configuración, el cálculo del crédito se realizará en función de las partidas abiertas del cliente.  
> **considera partite da registrazioni provvisorie**: si está activo el indicador anterior, el cálculo también considera los posibles movimientos derivados de registros provisionales.  
> **blocca stampa fisica**: en caso de que el crédito del cliente prevé el bloqueo del documento, este indicador bloquea la posibilidad de imprimir físicamente el documento bloqueado. Si no está configurado, el documento se puede imprimir, pero el indicador ‘impreso’ no será asignado al documento.  
> **considera fatture da stampare**: tiene en cuenta, en el cálculo del crédito, las facturas creadas pero no impresas. Si no está activado, la lógica por defecto considera las facturas solo si están impresas (con el indicador impreso activo).