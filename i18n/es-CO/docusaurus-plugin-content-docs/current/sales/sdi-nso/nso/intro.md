---
title: Introducción (Introduzione)
sidebar_position: 1
---

Desde el 15 de mayo de 2019, el Nodo de Clasificación de Pedidos de compra (NSO) está disponible para 
uso experimental según el art. 5 del d.m. 7/12/2018 y desde el 16 de julio de 2019 el sistema es capaz de elaborar, además de los Documentos previstos en el proceso de Ordenación simple, todos los 
Documentos previstos por los procesos de Ordenación completa y de Ordenación pre-acordada. 
Como se establece en la norma mencionada, los documentos intercambiados no producen efectos jurídicos entre las partes.  
Con respecto a los documentos informáticos que acreditan la ordenación de compra, el Decreto del 
Ministro de Economía y Finanzas del 7 de diciembre de 2018 establece que deben ser obligatoriamente emitidos en formato electrónico y transmitidos a través del NSO, con efecto a partir del 1 de octubre de 2019.           
Todos los pedidos de compra de la administración pública deberán realizarse 
exclusivamente en formato electrónico y transmitirse a través del Nodo de Clasificación de Pedidos de compra (NSO).         
El NSO utiliza la infraestructura ya existente del Sistema de Intercambio de facturas electrónicas (SdI) y se comunicará con la Base de Datos Nacional de Contratos Públicos (BDNCP), gestionada por 
la Autoridad Nacional Anticorrupción (ANAC), para asegurar que todos los pedidos de compra se refieran a contratos a los cuales se les haya asignado regularmente el código identificativo de licitación (CIG).
La información extraída de dichos sistemas es gestionada y puesta a disposición por la Plataforma de Créditos Comerciales (PCC). 
Esta solución permitirá utilizar todos los canales de transmisión ya en uso para la facturación 
electrónica, a los que se añade la posibilidad de usar la infraestructura de transporte definida por 
las especificaciones PEPPOL (Pan-European Public Procurement Online).  
Los documentos transmitidos a través del NSO (órdenes, respuestas, confirmaciones, revocaciones) deberán estar formados de acuerdo con los estándares previstos por las Business Interoperability Specifications (BIS) de 
PEPPOL o sus extensiones nacionales.         
Actualmente, el NSO no gestiona los documentos que acreditan la ejecución de las compras, con la excepción 
de la Respuesta al pedido, que se sitúa entre la fase de Ordenación y la fase de ejecución. 
Por ello, cualquier otro documento que acredite la ejecución de las compras está excluido de la obligación 
de emisión y transmisión en formato electrónico.  
El NSO es una especie de cartero inteligente que gestiona el intercambio entre clientes y proveedores de los pedidos 
de compra (y otros documentos que puedan ser necesarios). Además de proporcionar su entrega, 
el NSO verifica que los documentos transmitidos estén correctamente formados y contengan toda la 
información necesaria para su uso posterior en las fases de facturación y pago.          
El NSO recibe los Mensajes y verifica que estén correctamente formados. Si dicha verificación es exitosa, 
los reenvía a los respectivos Destinatarios y, con notificaciones del sistema, informa a los Remitentes sobre el resultado 
de la verificación y de la entrega.  
Si el Cliente o el Proveedor interactúan con el NSO a través de un Intermediario, estos asumen el rol de 
Remitente o de Destinatario, mientras que el Intermediario asume el rol de 
Transmisor y/o de Receptor.

## Mensajes NSO (Messaggi NSO)

En el sistema NSO circularán "Mensajes", es decir, archivos compuestos por:  
- Sobre de transmisión, la parte del Mensaje que contiene los datos necesarios para el correcto 
direccionamiento;  
- Documento, la parte del Mensaje que contiene los datos de negocio (ej. Pedido, Respuesta, 
Confirmación), que constituye el Cuerpo del mensaje;  
El Documento puede ser:  
- Pedido, el Documento con el que el Cliente comunica al Proveedor los bienes y/o servicios que desea 
adquirir y las instrucciones relacionadas. Un Pedido puede ser original (pedido inicial), 
reemplazar un Pedido anterior (Pedido sustitutivo) o anular un Pedido anterior 
(Pedido de revocación), o estar vinculado a otro pedido;  
- Pedido pre-acordado, el Documento equivalente al Pedido, pero emitido por el Proveedor en
conformidad con el Cliente. Un Pedido pre-acordado puede ser original (Pedido inicial) o 
sustituir un Pedido pre-acordado anterior (Pedido sustitutivo) o anular un Pedido 
pre-acordado anterior (Pedido de revocación);  
- Respuesta, el Documento con el que el Proveedor recibe, acepta, declina o realiza cambios 
(Respuesta con modificaciones) al Pedido recibido del Cliente;  
- Pedido de confirmación, el Documento con el que el Cliente confirma, declina o sustituye una Respuesta 
o un Pedido pre-acordado del Proveedor;  
Los tipos de flujo previstos son:  
- Ordenación simple, el proceso de pedido, iniciado por el Cliente, en el que el Pedido es emitido y 
transmitido en formato electrónico, mientras que otros documentos deben ser producidos y 
intercambiados de las maneras tradicionales (teléfono, fax, correo electrónico, etc.);  
- Ordenación completa, el proceso de pedido, iniciado por el Cliente, en el que el Pedido es emitido 
y transmitido en formato electrónico y es posible producir e intercambiar de manera telemática también 
la Respuesta y el Pedido de confirmación;  
- Ordenación pre-acordada, el proceso de pedido, iniciado por el Proveedor, en el que el Pedido 
pre-acordado es emitido y transmitido en formato electrónico y es posible producir e intercambiar de 
manera telemática también el Pedido de confirmación.