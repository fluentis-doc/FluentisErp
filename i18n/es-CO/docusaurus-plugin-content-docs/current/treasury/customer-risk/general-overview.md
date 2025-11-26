---
title: Introducción
sidebar_position: 1
ai_generated: true
---

El módulo de Riesgo de Cliente<!-- Rischio Cliente --> de Fluentis ERP es una herramienta útil para monitorear y gestionar el riesgo financiero asociado a los clientes, garantizando un control constante de la exposición crediticia empresarial<!-- esposizione creditizia aziendale -->. Este módulo permite analizar y evaluar el riesgo de insolvencia de los clientes, ayudando a las empresas a tomar decisiones informadas y mejorar la gestión de los créditos<!-- crediti -->.

El módulo permite al operador definir y controlar los límites de crédito<!-- affidamenti --> de los clientes. Para cada cliente se definirá el valor del crédito aprobado<!-- fido --> y el modo de seguimiento, ya sea mediante un simple aviso o con un bloqueo en caso de superarlo.
Se podrán definir los permisos y roles empresariales<!-- ruoli aziendali --> de los usuarios encargados de autorizar los documentos bloqueados con el fin de su posible despacho<!-- evasione --> en excepción al superamiento del límite.

El módulo se encuentra en el área de tesorería<!-- tesoreria --> y extrae los datos del flujo documental activo, de la contabilidad<!-- contabilità --> y del portafolio de efectos<!-- portafoglio effetti -->.

Se recomienda definir una serie de configuraciones tanto a nivel tabular prediseñado como también una correcta parametrización de los algoritmos base antes de proceder con la gestión del riesgo del cliente<!-- rischio cliente -->.

 **Funcionalidades Principales<!-- Funzionalità Principali -->**

- *Monitoreo de la exposición crediticia*: El módulo permite definir límites de crédito personalizados para cada cliente y monitorear continuamente su exposición financiera, comparando el crédito disponible con el crédito utilizado.<!-- Monitoraggio dell'esposizione creditizia: Il modulo consente di definire limiti di credito personalizzati per ciascun cliente e di monitorare continuamente la loro esposizione finanziaria, confrontando il credito disponibile con il credito utilizzato. -->

- *Evaluación del riesgo*: Integra herramientas de análisis que permiten clasificar a los clientes en función de su comportamiento de pago, como por ejemplo los tiempos medios de retraso en los pagos, permitiendo tomar decisiones proactivas para la gestión de los créditos y los flujos de caja.<!-- Valutazione del rischio: Integra strumenti di analisi che permettono di classificare i clienti in base al loro comportamento di pagamento, quali ad esempio i tempi medi di ritardo nel pagamento, consentendo di prendere decisioni proattive per la gestione dei crediti e dei flussi di cassa. -->

- *Bloqueos automáticos y avisos*: Si un cliente supera los límites de crédito<!-- limiti di credito --> o presenta facturas vencidas, el sistema puede activar bloqueos automáticos en la creación de nuevos pedidos o enviar avisos al departamento de ventas o administrativo.<!-- Blocchi automatici e avvisi: Se un cliente supera i limiti di credito o presenta fatture scadute, il sistema può attivare blocchi automatici sulla creazione di nuovi ordini o inviare avvisi al reparto vendite o amministrativo. -->

- *Integración con la contabilidad*: El módulo está completamente integrado con la contabilidad<!-- contabilità --> general y la gestión de partidas<!-- gestione delle partite -->, de donde obtiene los datos para actualizar los reportes de exposición de riesgo y la utilización del crédito aprobado de cada cliente<!-- utilizzo del fido di ogni cliente -->. Además, se encuentra interconectado con el ciclo activo, interviniendo directamente en la creación de documentos, pedidos<!-- ordine -->, remisiones (DDT) y facturas<!-- fatture -->, con el objetivo de avisar o bloquear la entrega al proveedor en caso de que el límite sea superado.<!-- Integrazione con la contabilità: Il modulo è completamente integrato con la contabilità generale e la gestione delle partite, dalle quali legge i dati per aggiornare la reportistica di esposizione al rischio e l'utilizzo del fido di ogni cliente. E' inoltre interfacciato con il ciclo attivo intervenendo direttamente nella creazione dei documenti, ordine, DDT e fatture, al fine di avvisare o bloccare l'evasione della fornitore qualora il limite vanga superato -->

**Tablas<!-- Tabelle -->:** no existen tablas<!-- tabelle --> específicas de este módulo, pero es importante señalar que varios tipos de documento de compra y venta presentan configuraciones relacionadas con el riesgo de cliente<!-- rischio cliente --> ([tablas relacionadas con el módulo de Riesgo de Cliente<!-- tabelle collegate al modulo Rischio cliente -->](/docs/configurations/tables/treasury/customer-risk-module-tables)).

 

**Parámetros preliminares a configurar<!-- Parametri preliminari da impostare -->**:  [Parámetros de riesgo de cliente<!-- Parametri rischio cliente -->](/docs/configurations/parameters/treasury/customer-risk-parameters).