---
title: Búsqueda de Facturas de Compra (Ricerca Fatture di acquisto)
sidebar_position: 1
---

El formulario se abre a través de la ruta **Compras (Acquisti) > Facturas (Fatture) > Facturas de compra (Fatture di acquisto)**.

Para la explicación de las funcionalidades comunes a los documentos de compra, consulte la sección [Compras (Acquisti)](/docs/purchase/purchases-intro).

Los botones específicos de esta máscara de búsqueda son los siguientes:

> - **storno fatturazione**: con este procedimiento es posible anular parcial o totalmente las facturas. Una vez que se haga clic en el botón, se abrirá un pop-up donde se seleccionarán las líneas de artículos a anular con las cantidades correspondientes, se deberá ingresar el *tipo documento* a crear (solo se podrá seleccionar tipos de facturas con naturaleza *Nota de crédito (Nota di credito)*), y se deberá ingresar la *Causa de anulación (Causale di storno)* del almacén (generalmente un descargo).  
La conexión entre el documento de anulación y el de origen debe ser ingresada manualmente en la Cabecera del nuevo documento.  
> - **registro dei documenti sdi**: este botón se habilita si la factura seleccionada se encuentra en el estado SDI Controlada en adelante; permite consultar el historial de relaciones del documento con el SDI y la consulta del archivo xml generado, sin necesidad de pasar por los [Documentos de compra entrantes (Documenti acquisto in entrata)](/docs/finance-area/sdi-documents/incoming-purchase-documents).