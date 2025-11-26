---
title: Configuración de tablas de gestión
sidebar_position: 4
ai_generated: true
---

Para la gestión de la facturación electrónica es necesario realizar una verificación y completar algunas tablas de gestión<!-- tabelle di gestione -->, con el fin de crear los archivos XML con la codificación correcta prevista por las especificaciones técnicas emitidas por la Agencia Tributaria. La configuración prevista requiere codificar los valores normalmente utilizados en las gestiones<!-- gestioni --> con los valores indicados para la codificación del archivo.
Por ejemplo: los tipos de documentos previstos para el flujo de facturación electrónica deben ser censados en Fluentis, asociando a cada tipo de documento el valor correspondiente indicado por las especificaciones técnicas de la Agencia Tributaria.

## Tabla Tipos de documento<!-- Tabella Tipi documento -->

Para el documento factura, en esta tabla de Fluentis, en la columna **Código PA<!-- Codice PA -->** es necesario indicar el tipo de documento, en formato alfanumérico, de longitud 4 caracteres. Los valores admitidos son:       
TD01 Factura      
TD02 Anticipo/Adelanto sobre factura        
TD03 Anticipo/Adelanto sobre honorarios       
TD04 Nota de crédito      
TD05 Nota de débito      
TD06 Honorarios       
TD20 Autofactura        
         
Los valores sobre los que es necesario realizar una conciliación o una verificación de su correcta cumplimentación son:

| Tabla | Valores obligatorios | 
| :-- | :-- |
| Empresa (Tablas > Configuración General > Empresa) | Descripción, NIT, Código fiscal → obligatorio si no se ha configurado el NIT, Código de país, Régimen fiscal, Teléfono/FAX, Domicilio fiscal y Código postal, municipio, provincia, Socios/Estado de liquidación, Oficina Rea, Número de inscripción Rea, Capital social (incluyendo también los decimales separados por el “.”) | 
| Tipos de IVA (Tablas > Administración > Tipos/Modalidad IVA) | Código P.A: es el código que identifica de manera única el tipo de IVA en los archivos XML; se puede encontrar el código específico para cada tipo en las Especificaciones Técnicas publicadas por la Agencia Tributaria para la facturación electrónica | 
| Tabla Tipos de Documento (Tablas > Administración > Tipos de Documento) | Código P.A: es el código que identifica de manera única el Tipo de documento al que se refiere el archivo XML (factura, nota de crédito...); se puede encontrar el código específico para cada tipo en las Especificaciones Técnicas publicadas por la Agencia Tributaria para la facturación electrónica | 
| Tabla Tipos de Pago (Tablas > Configuración general > Tipos de pago) | Código P.A: es el código que identifica de manera única el Tipo de pago en el archivo XML; se puede encontrar el código específico para cada tipo en las Especificaciones Técnicas publicadas por la Agencia Tributaria para la facturación electrónica | 
| Tipos de facturas de venta (Tablas > Ventas > Tipos de Facturas) | Excluidas de Fact.El: la casilla debe marcarse SOLO para los documentos que se pretenda excluir del flujo de facturación electrónica. Por lo tanto, estos documentos no podrán ser procesados dentro del flujo de facturación electrónica | 
| Tipos de retención (Tablas > Administración > Tipos de Retenciones) | Tipos de retención facturación electrónica: es el código que identifica de manera única el Tipo de retención en el archivo XML; se puede encontrar el código específico para cada tipo en las Especificaciones Técnicas publicadas por la Agencia Tributaria para la facturación electrónica | 
| Tabla Divisas (Tablas > Configuración general > Divisas) | CodIso: en la moneda configurada para el Euro, insertar el código iso EUR | 
| Tabla Tipos de Documentos (Tablas > Configuración general > Tipos de Documentos) | Tipo documento FattPubb: identifica el tipo de documento relativo a la facturación electrónica. Debe introducirse con el valor CÓDIGO: *FattPubb* y DESCRIPCIÓN: *Facturación Electrónica*, dejando inalterados los demás valores propuestos | 

## Maestra de artículos<!-- Anagrafica articoli -->

Para la correcta gestión en el caso de artículos que requieran la indicación en factura de códigos normativos o ministeriales específicos, como por ejemplo el código AIC (código ministerial del producto) para ciertos medicamentos o el código DM0-DM1, es necesario registrar en la tabla **Tipos de código de barras<!-- Tipi barcode -->** un código de barras específico identificado con el flag **Exportaciones Administración Pública<!-- Export Pubblica Amministrazione -->** y reportado en la ficha del artículo en el panel **Códigos de Barra<!-- Codici BarCode -->**, campo **Tipo de código de barras<!-- Tipo barcode -->**.

## Split payment

Para la correcta gestión del caso de Split Payment en los documentos dirigidos a la Administración Pública, las especificaciones técnicas relativas a la compilación del archivo XML requieren la identificación de un tipo específico de exigibilidad IVA, en formato alfanumérico de 1 carácter de longitud. Los valores admitidos son los siguientes:          
*I* IVA de exigibilidad inmediata       
*D* IVA de exigibilidad diferida      
*S* escisión de pagos       

En Fluentis, por tanto, es necesario configurar, en las causales contables asociadas al tipo de documento de venta a la Administración Pública, el tipo de movimiento<!-- movimento --> 29 – IVA ventas con Split Payment.