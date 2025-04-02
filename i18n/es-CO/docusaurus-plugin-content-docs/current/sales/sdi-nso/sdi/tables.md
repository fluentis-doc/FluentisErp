---
title: Configuración de tablas de gestión (Impostazione tabelle di gestione)
sidebar_position: 4
---

Para la gestión de la facturación electrónica es necesario llevar a cabo una verificación y completado de algunas tablas de gestión, con el fin de crear los archivos XML con la codificación correcta prevista por las especificaciones técnicas emitidas por la Agencia de Impuestos (Agenzia delle Entrate). La configuración requerida implica codificar los valores comúnmente usados en las gestiones con los valores previstos para la codificación del archivo.  
A modo de ejemplo: los tipos de documentos previstos para el flujo de facturación electrónica deberán ser registrados en Fluentis, asociando a cada tipo de documento el valor correspondiente indicado por las especificaciones técnicas de la Agencia de Impuestos.

## Tabla de Tipos de documento (Tabella Tipi documento)

Para el documento factura, en esta tabla de Fluentis, en correspondencia a la columna **Código PA (Codice PA)** es necesario indicar el tipo de documento, en formato alfanumérico, de 4 caracteres de longitud. Los valores admitidos son:       
TD01 Factura (Fattura)      
TD02 Anticipo/Acconto sobre factura (Acconto/Anticipo su fattura)        
TD03 Anticipo/Acconto sobre factura (Acconto/Anticipo su parcella)       
TD04 Nota de crédito (Nota di Credito)      
TD05 Nota de débito (Nota di Debito)      
TD06 Factura pro forma (Parcella)       
TD20 Autofactura (Autofattura)        
         
Los valores sobre los cuales es necesario realizar un ajuste o una verificación de la efectiva compilación son:

| Tabla | Valores obligatorios | 
| :-- | :-- |
| Empresa (Tabelle > Impostazioni Generali > Società) | Descripción, Número de IVA, Código fiscal (obligatorio si no se establece el PIVA), Código de país, Régimen fiscal, Teléfono/FAX, Domicilio fiscal y CP, municipio, provincia, Socios/Estado de liquidación, Oficina Rea, Número de inscripción Rea, Capital social (incluyendo también los decimales separados por el “.”) | 
| Tipos de IVA (Tabelle > Amministrazione > Aliquote/Modalità IVA)  | Código P.A: es el código que identifica de manera única el tipo de IVA en los archivos XML; se puede obtener el código específico para cada tipo de IVA de las Especificaciones Técnicas emitidas por la Agencia de Impuestos para la facturación electrónica | 
| Tabla Tipos de Documentos (Tabelle > Amministrazione > Tipi Documento) | Código P.A: es el código que identifica de manera única el tipo de documento al que se refiere el archivo XML (factura, nota de crédito...); se puede obtener el código específico para cada tipo de documento de las Especificaciones Técnicas emitidas por la Agencia de Impuestos para la facturación electrónica | 
| Tabla Tipos de Pago (Tabelle > Impostazioni generali > Tipi pagamento) | Código P.A: es el código que identifica de manera única el tipo de pago en el archivo XML; se puede obtener el código específico para cada tipo de pago de las Especificaciones Técnicas emitidas por la Agencia de Impuestos para la facturación electrónica | 
| Tipos de facturas de venta (Tabelle > Vendite > Tipi Fatture) | Excluidas de Fat.El: la verificación debe ser establecida SOLO para los documentos que se desea excluir del flujo de facturación electrónica. En virtud de esta configuración, los documentos no podrán ser procesados para el flujo de facturación electrónica | 
| Tipos de retención (Tabelle > Amministrazione > Tipi Ritenute) | Tipos de retención de facturación electrónica: es el código que identifica de manera única el tipo de retención en el archivo XML; se puede obtener el código específico para cada tipo de retención de las Especificaciones Técnicas emitidas por la Agencia de Impuestos para la facturación electrónica | 
| Tabla Monedas (Tabelle > Impostazioni generali > Divise) | CodIso: en correspondencia a la moneda configurada para el Euro, ingresar el código iso EUR | 
| Tabla Tipo Documentos (Tabelle > Impostazioni generali > Tipo Documenti) | Tipo documento FattPubb: identifica el tipo de documento relativo a la facturación electrónica. Debe ser ingresado con el valor CÓDIGO: *FattPubb* y DESCRIPCIÓN: *Fatturazione Elettronica*, dejando inalterados los otros valores propuestos | 

## Registro de artículos (Anagrafica articoli)

Para la correcta gestión de la casuística de artículos que requieren la indicación en factura de códigos normativos o ministeriales específicos, como por ejemplo el código AIC (código ministerial del producto) para algunos medicamentos o el código DM0-DM1, es necesario registrar en la tabla **tipi barcode** un código de barras específico identificado con el indicador **export pubblica amministrazione** y registrado en el perfil del artículo en el panel **codici barcode**, campo **Tipo de código de barras** (Tipo barcode).

## Split payment

Para la correcta gestión del caso de Split Payment en los documentos dirigidos a la Administración Pública, las Especificaciones técnicas relacionadas con la compilación del archivo XML requieren la identificación de un tipo específico de exigibilidad de IVA, en formato alfanumérico de 1 carácter de longitud. Los valores aceptados son los siguientes:          
*I* IVA a exigibilidad inmediata (IVA ad esigibilità immediata)       
*D* IVA a exigibilidad diferida (IVA ad esigibilità differita)      
*S* escisión de los pagos (scissione dei pagamenti)       

En Fluentis, por lo tanto, es necesario establecer, sobre las causales contables asociadas al tipo de documento de venta hacia la PA, el tipo de movimiento 29 – IVA ventas con Split Payment.