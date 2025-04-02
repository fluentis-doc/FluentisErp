---
title: gestione conai
sidebar_position: 2
---

La gestión **CONAI** (Consorcio Nacional de Envases) en Fluentis es un módulo que permite automatizar la aplicación de los gastos relacionados con el aporte ambiental CONAI en los documentos de compra y venta. Esta herramienta es fundamental para las empresas que manejan envases y que deben cumplir con las normativas italianas en materia de eliminación y reciclaje de materiales de embalaje. La aplicación automática de los gastos CONAI en Fluentis ocurre en función de los parámetros configurados por el usuario y se refleja directamente en los documentos contables, garantizando un cálculo preciso y conforme.

## Activación de la gestione conai (Attivazione della Gestione CONAI)

Para activar la gestión CONAI en Fluentis, es necesario configurar algunos campos en la tabla [Sociedad (Società)](/docs/configurations/tables/general-settings/company), en la sección Otras configuraciones:  

**codice partner conai**: Este código se asigna a las empresas al momento de la inscripción al CONAI. Es un identificador único que sirve para monitorear las declaraciones y los aportes ambientales debidos por la empresa en función de los envases introducidos en el mercado.  

**tipo partner conai**: Define el rol de la empresa en la cadena de envases en Italia. Los tipos de socio disponibles son:  
- A – Autoprodutor: Empresa que produce envases para uso propio sin venderlos a terceros. Utiliza los envases para empaquetar sus propios productos.  
- U1 – Comerciante/Distribuidor: Empresa que compra envases para revenderlos sin utilizarlos directamente. Incluye en esta categoría a mayoristas o distribuidores.  
- U2 – Otros Usuarios: Empresas que compran envases para empaquetar productos destinados a la venta, pero que no los producen. No pertenecen a las categorías "Autoprodutor" o "Comerciante/Distribuidor".  
- P – Productor: Empresa que produce envases y los vende a otros usuarios o distribuidores.  

**Fecha de Inicio/Fín del Socio CONAI (Data Inizio/Fine Partner CONAI)**: Es posible especificar el período de validez de la colaboración con el CONAI, si corresponde.

## Tabla de Tipos de Materiales (Tabella Tipi Materiali)

La gestión de las tipologías de materiales de embalaje se realiza en la tabla de logística denominada [Tipos de Materiales (Tipi Materiali)](/docs/configurations/tables/logistics/material-types). En esta tabla se codifican los diferentes materiales (como acero, aluminio, papel, madera, plástico, etc.) utilizados para los envases. Para cada tipo de material, se deben establecer:  

**codice materiale conai**: Especifica el tipo de material conforme a la clasificación CONAI.  
**Código de Artículo Ficticio (Codice Articolo Fittizio)**: Se utiliza para crear la línea de gasto relacionada con el aporte CONAI en los albaranes o facturas. Si no se indica un código de artículo, ese material no será válido para la configuración CONAI.

Es posible usar un solo código de artículo para todos los materiales o especificar uno para cada tipo, dependiendo del nivel de detalle deseado en los documentos fiscales.

**Tarifas y Unidades de Medida (Tariffe e Unità di Misura)**: La cuadrícula a continuación permite definir las tarifas aplicables para cada material en función de los diferentes intervalos de fechas. La unidad de medida, generalmente en toneladas, debe ser coherente con la utilizada en los artículos de venta y en los artículos ficticios CONAI.

## Definiciones en Registro de Artículos (Definizioni in Anagrafica Articoli)

En la ficha [Pesos/Dimensiones (Pesi/Dimensioni)](/docs/erp-home/registers/items/create-new-item) del registro de artículos, es posible especificar las características de los envases para la gestión CONAI. En esta sección se puede definir:  

**Usar en Compra/Venta (Usa in Acquisto/Vendita)**: Especifica si el artículo está sujeto al cálculo del aporte CONAI en los documentos de compra o venta.  
**tipologia di imballaggio**: Indica si el embalaje es primario, secundario o terciario.  
**vuoto o pieno**: Indica si el embalaje está vacío (indicador no activo) o lleno (indicador activo).  
**Materiales de Embalaje (Materiali di Imballaggio)**: Lista de materiales que componen el embalaje con su peso en unidad de medida codificada.  

## Configuraciones en Registro Cliente/Proveedor (Impostazioni in Anagrafica Cliente/Fornitore)

Para aplicar correctamente los gastos CONAI en los documentos de compra o venta, es necesario configurar correctamente el registro del cliente o proveedor en la pestaña [Configuraciones CONAI (Impostazioni CONAI)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/customer-vendors-data/conai):  

**tipo partner conai**: Para el cálculo en venta, el cliente debe ser un autoprodutor (A), un comerciante/distribuidor (U1) u otros usuarios (U2). Para el cálculo en compra, el proveedor debe ser un productor (P).  
**Porcentajes de Exención (Percentuali di Esenzione)**: En la cuadrícula es posible establecer posibles porcentajes de exención por tipo de material, con las respectivas fechas de validez.

## Tipos de DDT y Tipos de Facturas (Tipi DDT e Tipi Fattura)

En los [tipos de DDT (tipi DDT)](/docs/configurations/tables/sales/delivery-notes-type) y en los [tipos de facturas (tipi fatture)](/docs/configurations/tables/sales/invoices-type) hay un indicador **gestione conai**. Este indicador activa el cálculo automático del aporte CONAI para ese tipo específico de documento.

## Ejemplo de Aplicación en una Factura de Venta (Esempio di Applicazione in una Fattura di Vendita)

Si la gestión CONAI está activada para una empresa, en la pestaña *articoli* de la factura de venta estará disponible una subtítulo denominado **materiali conai per l'articolo**. Esta sección incluye los materiales de embalaje que componen el artículo, con la siguiente información:  

**unità di misura**: Especifica la unidad de medida utilizada para el material.  
**Peso Unitario (Peso Unitario)**: El peso de cada material, posiblemente ajustado por el porcentaje de exención definido en el registro del cliente.  
**totale peso**: Calculado multiplicando el número de artículos vendidos por el peso unitario.  

Cuando se guarda el documento o se presiona el botón *ricalcolo conai* en la barra de herramientas, Fluentis insertará automáticamente una o más líneas de gasto, recuperando el artículo de los materiales con cantidad y precio correspondientes al costo CONAI para ese material. En el archivo de la factura electrónica para el SDI (Sistema de Intercambio), Fluentis añadirá automáticamente las etiquetas en la sección "Otros Datos de Gestión" para registrar los materiales y los pesos unitarios de los artículos.

## Impresiones de Control y Totalización (Stampe di Controllo e Totalizzazione)

En los módulos de las facturas de compra y venta están disponibles dos formatos de impresión que permiten extraer los totales periódicos para los distintos materiales, tanto para el control interno como para el procesamiento de los datos a declarar al CONAI. Para las ventas, también está disponible un informe que refleja las páginas de internet del CONAI para la carga de datos de las declaraciones, filtrando los materiales en función de las letras iniciales del Código CONAI ingresado en la tabla de materiales.