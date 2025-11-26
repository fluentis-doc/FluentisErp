---
title: Introducción
sidebar_position: 1
ai_generated: true
---

Desde el 15 de mayo de 2019, el Nodo de Enrutamiento de Órdenes de compra (NSO) está disponible para uso experimental según el art. 5 del decreto 7/12/2018 y, desde el 16 de julio de 2019, el sistema es capaz de procesar, además de los Documentos previstos por el proceso de Ordenación simple, también todos los Documentos previstos por los procesos de Ordenación completa y de Ordenación preacordada<!-- Ordinazione completa, Ordinazione pre-concordata -->.  
Según lo establecido por la norma citada, los documentos intercambiados no producen efectos jurídicos entre las partes.  
En lo referente a los documentos informáticos que acreditan la orden de compra, el Decreto del Ministro de Economía y Finanzas del 7 de diciembre de 2018 establece que estos deben ser emitidos obligatoriamente en formato electrónico y transmitidos a través del NSO, con vigencia a partir del 1 de octubre de 2019.  
Todas las órdenes de compra de la administración pública deberán realizarse exclusivamente en formato electrónico y transmitirse a través del Nodo de Enrutamiento de Órdenes de compra (NSO).  
El NSO utiliza la infraestructura ya existente del Sistema de Intercambio de facturas electrónicas<!-- Sistema di Interscambio delle fatture elettroniche (SdI) --> y se comunicará con la Base de Datos Nacional de Contratos Públicos (BDNCP), gestionada por la Autoridad Nacional Anticorrupción (ANAC), a fin de garantizar que todas las órdenes de compra estén vinculadas a contratos a los que se haya asignado correctamente el código identificativo de licitación (CIG).  
La información extraída de los sistemas mencionados es gestionada y puesta a disposición por la Plataforma de Créditos Comerciales (PCC).  
Esta solución permitirá utilizar todos los canales de transmisión ya usados para la facturación electrónica, añadiéndose la posibilidad de emplear la infraestructura de transporte definida por las especificaciones PEPPOL (Pan-European Public Procurement Online).  
Los documentos transmitidos a través del NSO (órdenes, respuestas, confirmaciones, revocaciones) deberán ser elaborados respetando los estándares previstos por las Business Interoperability Specifications (BIS) de PEPPOL o sus extensiones nacionales.  
Actualmente, el NSO no gestiona los documentos que acreditan la ejecución de las compras, salvo la Respuesta a la orden, que se ubica entre la fase de Ordenación y la de ejecución.  
Por tal motivo, cualquier otro documento que acredite la ejecución de las compras está excluido de la obligación de emisión y transmisión en formato electrónico.  
El NSO es un tipo de "cartero inteligente" que gestiona el intercambio, entre clientes y proveedores, de las órdenes de compra (y de otros documentos que eventualmente sean necesarios). Además de encargarse de su entrega, el NSO verifica que los documentos transmitidos estén correctamente elaborados y contengan toda la información necesaria para su posterior utilización en las fases de facturación y pago.  
El NSO recibe los Mensajes y verifica que estén correctamente formateados. Si la verificación resulta exitosa, los reenvía a los respectivos Destinatarios y, mediante Notificaciones específicas del sistema, informa a los Remitentes sobre el resultado de la verificación y la entrega.  
Si el Cliente o el Proveedor interactúan con el NSO a través de un Intermediario, los primeros asumen el papel de Remitente o Destinatario, mientras que el Intermediario asume el papel de Transmisor y/o Receptor.

## Mensajes NSO<!-- Messaggi NSO -->

En el sistema NSO circularán “Mensajes”, es decir, archivos compuestos por:
- Sobre de transmisión, la parte del Mensaje que contiene los datos necesarios para la correcta direccionamiento;
- Documento, la parte del Mensaje que contiene los datos de negocio (por ejemplo, Orden, Respuesta, Confirmación), que constituye el Cuerpo del mensaje;
El Documento puede ser:
- Orden, el Documento mediante el cual el Cliente comunica al Proveedor los bienes y/o servicios que desea adquirir y las instrucciones correspondientes. Una Orden puede ser originaria (orden inicial) o bien sustituir una Orden anterior (Orden sustitutiva) o anular una Orden anterior (Orden de revocación) o estar vinculada a otra orden;
- Orden preacordada, el Documento, equivalente a la Orden, pero emitido por el Proveedor en acuerdo con el Cliente. Una Orden preacordada puede ser originaria (Orden inicial) o bien sustituir una Orden preacordada anterior (Orden sustitutiva) o anular una Orden preacordada anterior (Orden de revocación);
- Respuesta, el Documento con el que el Proveedor recibe, acepta, rechaza o realiza cambios (Respuesta con modificaciones) a la Orden recibida del Cliente;
- Orden de confirmación, el Documento con el que el Cliente confirma, rechaza o sustituye una Respuesta o una Orden preacordada del Proveedor;
Los tipos de flujo previstos son:
- Ordenación simple<!-- Ordinazione semplice -->, el proceso de pedido, iniciado por el Cliente, en el que la Orden se emite y transmite en formato electrónico, mientras que otros documentos eventuales deben ser elaborados e intercambiados por vías tradicionales (teléfono, fax, correo electrónico, etc.);
- Ordenación completa<!-- Ordinazione completa -->, el proceso de pedido, iniciado por el Cliente, en el que la Orden se emite y transmite en formato electrónico y es posible elaborar e intercambiar de forma telemática también la Respuesta y la Orden de confirmación;
- Ordenación preacordada<!-- Ordinazione pre - concordata -->, el proceso de pedido, iniciado por el Proveedor, en el que la Orden preacordada se emite y transmite en formato electrónico y es posible elaborar e intercambiar de forma telemática también la Orden de confirmación.