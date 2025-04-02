---
title: Introducción (Introduzione)
sidebar_position: 1
---

El módulo **percipienti** de Fluentis ERP gestiona las actividades relacionadas con los pagos a profesionales externos y agentes, garantizando el control sobre las retenciones y las obligaciones fiscales asociadas, como la compilación del modelo F24. Este módulo permite registrar compensaciones, contabilizar pagos y generar certificaciones fiscales. El módulo puede recibir los datos de los agentes del módulo homónimo del área **vendite**.  
Desde este módulo se lleva a cabo la detección de deudas por los diversos tributos a pagar (retención, Enasarco, INPS).

**Funcionalidades Principales (Funzionalità Principali)**

- **Búsqueda y gestión de compensaciones (Ricerca e gestione dei compensi)**: Permite ingresar, modificar y visualizar las compensaciones, con la posibilidad de eliminar las incorrectas y gestionar los pagos de las retenciones de manera masiva, evitando modificaciones manuales en las compensaciones individuales.  

- **contabilizzazione compensi**: Las compensaciones pueden ser contabilizadas directamente, tanto para la parte fiscal (retenciones, INPS, ENASARCO) como para la gestión de los centros de costo y de lucro de la empresa. Las compensaciones definitivas se ingresan luego en contabilidad.  

- **modello f24**: El módulo gestiona el cálculo y la compilación del modelo F24 para el pago de las retenciones y otros tributos, con la posibilidad de proponer automáticamente los datos necesarios gracias a la información ingresada en las compensaciones.

**Impresiones Disponibles (Stampe Disponibili)**

- **Impresión de certificación de retenciones (Stampa certificazione ritenute)**: Genera la certificación de las retenciones periódicas a título de anticipo.  

- **situazione ritenute**: Proporciona un resumen de las retenciones pagadas o por pagar, útil para el control interno y la compilación de la Certificación Única.  

- **Impresión de comisiones (Stampa provvigioni)**: Soporta la gestión de las comisiones acumuladas por los agentes, con filtros por fecha y agente, permitiendo elaborar listas completas.

**Procedimientos Principales (Procedure Principali)**

- **Gestión de compensaciones y pagos de retenciones (Gestione compensi e versamenti ritenute)**: Permite cargar, modificar y vincular documentos fiscales relacionados con las compensaciones, y gestionar manualmente o de forma masiva los datos del pago.  

- **calcolo provvigioni**: Automatiza el cálculo de las comisiones para los agentes, con la posibilidad de vincular las compensaciones a proyectos o contratos específicos.

**Ventajas del uso del módulo (Vantaggi nell'utilizzo del modulo)**: Este módulo interactúa tanto con el módulo **vendite** para la lectura de las comisiones calculadas de los agentes y la transformación en la Factura del agente, garantizando el cálculo tanto de las retenciones de impuestos como de las contribuciones a la pensión Enasarco, y también con el módulo de Declaraciones fiscales, permitiendo gestionar toda la fiscalidad, hasta la CU (certificación única de las retenciones de impuestos) de manera independiente sin necesidad de recurrir a consultorías externas. El procesamiento de la CU también permite exportar la pista telemática para el envío a la Agencia de Ingresos. Se ha prestado especial atención a la lógica de gestión de las compensaciones y a la realidad italiana, con la posibilidad de ingresar el aviso de factura (de hecho una factura proforma) y proceder al pago, generando la deuda por los pagos fiscales, antes de la contabilización de la factura recibida.

**Tablas y parámetros necesarios para utilizar el módulo (Tabelle e parametri necessari per utilizzare il modulo)**

Para utilizar el módulo **percipienti** de Fluentis ERP, es necesario gestionar algunas tablas clave para asegurar el correcto funcionamiento del sistema y la alineación de las operaciones contables y fiscales. Entre las principales tablas a configurar se encuentran:

- **tipi conto** y **tipi ritenuta**: Esenciales para definir el tipo de retención a aplicar a los diferentes perceptores.  
- **categorie agenti**: Tabla fundamental para los agentes donde se define la contribución a la pensión y otros contribuciones a las que están sujetos.  
- **codice tributo**: Necesario para la gestión de las retenciones y los tributos relacionados con las compensaciones.  
- **modalità di versamento**: Para definir las modalidades de pago de los tributos.  
- **piano dei conti**: Necesario para asociar los registros contables a las cuentas correctas.  
- **Tipos de IVA (Aliquote IVA)**: Para la correcta aplicación de los impuestos sobre las compensaciones.  
- **Causales de contabilidad general y causales de contribución (Causali contabilità generale e causali contributo)**: Utilizadas para clasificar correctamente las operaciones contables relacionadas con las compensaciones de los perceptores.  
- **Centros de costo/lucro/responsabilidad (Centri di costo/profitto/responsabilità)**: Para asignar los costos y los ingresos a los diferentes centros empresariales.  
- **Tipos de cambio fijos en euros y tipos de cambio de divisas (Cambi fissi euro e cambi valute)**: Importantes para la gestión de transacciones en diferentes divisas.

**Conclusiones (Conclusioni)**

El módulo **percipienti** de Fluentis ERP es una herramienta avanzada para la gestión de los pagos a profesionales y agentes, asegurando la corrección de los pagos fiscales y facilitando la elaboración de documentos oficiales como el modelo F24 y las certificaciones de las retenciones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/k7abmzqf6Bk" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/8sdFGMDVIFc" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/DVXhUdwqBS4" title="YouTube video player" frameborder="0" allowfullscreen= "true"></iframe>