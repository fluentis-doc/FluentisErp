---
title: Fluentis Fast Start - hoja de ruta para el nuevo entorno operativo 
sidebar_position: 2
---

El **Fast Start** es una funcionalidad diseñada para hacer rápida y sencilla la inicialización del software de gestión Fluentis, eliminando la necesidad de configuraciones manuales extensas.  

### Configuración con Fast Start

**Evaluación inicial**  
- Decide si adoptar el **Fast Start** para iniciar el sistema con configuraciones predefinidas. Esta elección influirá en la configuración inicial.

**Funcionalidades del Fast Start**  
- Población automática de parámetros básicos.  
- Configuración simplificada para un inicio rápido del sistema.  

**Principales ventajas**  
- Eficiencia en la configuración inicial.  
- Menor riesgo de errores manuales y ahorro de tiempo y recursos.  

**Iniciar el procedimiento**  
- Inicia el **Fast Start** para aplicar los ajustes predeterminados.  
- Verifica posteriormente los parámetros generados para garantizar su conformidad con las necesidades empresariales.


:::tip[Dónde se activa]
**Para iniciar el procedimiento**, accede a la [**tabla de Empresas**](/docs/configurations/tables/general-settings/company), ingresa a la empresa específica interesada y presiona el botón *configuración general* presente en la barra de herramientas.
:::


:::note[Info]
El procedimiento está disponible para **todas las empresas** presentes en la base de datos, por lo tanto, por ejemplo, la empresa 1 podría ser inicializada con el procedimiento de Fast Start, mientras que la empresa 2 podría ser configurada manualmente. 

Es por eso que el **botón** de activación está ubicado **dentro de la empresa específica**.
:::

:::danger[ATENCIÓN]
no debe haberse poblado ya el plan de cuentas (en ninguna parte) ni otras tablas involucradas en el procedimiento. Se recomienda decidir de inmediato y ejecutar esta procedimiento como primer paso después de la instalación.

:::

---
<details>

  <summary>Fast Start (Haz clic para expandir)</summary>
  

Tablas involucradas (Stored Procedure Fluentis.SH_CreateNewYear_IT):
    
 - > Tipos de cuenta
 - > Plan de cuentas
 - > Parámetros de contabilidad general
 - > Parámetros de activos
 - > Parámetros de cartera (activos - efectos)
 - > Parámetros de saldos (no remunerado)
 - > Parámetros MPS
 - > Causales contables
 - > Códigos IVA
 - > Registros IVA
 - > Tipos de documento
 - > Tipos de pago
 - > Soluciones de pago
 - > Categorías de agentes
 - > Tipos de retención (de anticipo)
 - > Categorías de activos
 - > Tipos de flujo financiero
 - > Tipos de anticipo
 - > Estados de impago
 - > Estados de efectos
 - > Tipos de presentación de efectos
 - > Tipos de efectos
 - > Vínculo entre la tabla Tipos de pago y los tipos de efecto
 - > Numeraciones de registros contables (definitivos y provisionales)
 - > Numeración de partidas
 - > Numeración de compensaciones (partidas)
 - > Numeración de pagos monitorizados
 - > Numeración intrastat
 - > Numeración de liquidaciones de agentes
 - > Numeración de listados de presentación de efectos
 - > Numeración de efectos
 - > [Numeración de documentos de venta](/docs/configurations/tables/fluentis-numerations)
 - > [Numeración de documentos de compra](/docs/configurations/tables/fluentis-numerations)
 - > Tipos de factura ([compra](/docs/configurations/tables/purchase/purchase-invoices-type) y [venta](/docs/configurations/tables/sales/invoices-type)) con enlace a las causales contables
 - > Tipos de DDT ([compra](/docs/configurations/tables/purchase/purchase-delivery-notes-type) y [venta](/docs/configurations/tables/sales/delivery-notes-type)) con enlace a los tipos de factura
 - > Tipos de Pedido ([compra](/docs/configurations/tables/purchase/purchase-orders-type) y [venta](/docs/configurations/tables/sales/sales-order-types)) con enlace a los tipos de DDT
 - > [Tipos de oferta](/docs/configurations/tables/sales/sales-offer-type)
 - > [Parámetros de facturas](/docs/configurations/parameters/sales/sales-invoices-parameters) y sus respectivos [agrupamientos](/docs/configurations/parameters/sales/invoice-grouping) 
 - > [Parámetros DDT](/docs/configurations/parameters/sales/dn-parameters) y sus respectivos [agrupamientos](/docs/configurations/parameters/sales/dn-grouping) 
 - > [Parámetros de pedidos](/docs/configurations/parameters/sales/sales-orders-parameters) y sus respectivos [agrupamientos](/docs/configurations/parameters/sales/orders-grouping)
 - > [Parámetros de ofertas](/docs/configurations/parameters/sales/offer-parameters)
 - > Tipos de proyectos (orden de trabajo de ventas)
 - > Tipos de intervención
 - > Numeración de proyectos
 - > Numeración de intervenciones
 - > Tipos de solicitud de intervención (y su numeración)
 - > Tipos de intervenciones planificadas (y numeración)
 - > Tipos de retorno de trabajo (y numeración)
 - > Tipos de órdenes de trabajo (y numeración)
 - > Tipos de órdenes de producción (y numeración)
 - > Tipos de órdenes de compra planificadas (y numeración)
 - > Tipos de órdenes de producción planificadas (y numeración)
 - > Tipos de órdenes de trabajo planificadas (y numeración)
 - > Tipos de órdenes de producción (y numeración)
 - > Tipos de órdenes de trabajo (y numeración)
 - > Tipos de RDA (y numeración)
 - > (Tipos) facturación de ventas
 - > (Tipos) facturación de compras
 - > Tipos de listas de precios
 - > Tipos de dirección
 - > Tipos de descuento
 - > Idiomas
 - > Países
 - > Países de la lista negra
 - > Divisas
 - > Unidades de medida
 - > Puerto (Incoterms - términos de entrega)
 - > Envíos (tipos)
 - > Modelos de reclasificación (controlando)
 - > Vínculo del modelo de reclasificación para el Balance CEE con detalle del plan de cuentas
 - > Horarios de trabajo (gestión de empleados)
 - > Severidad (tickets CRM)
 - > SLA (tickets CRM)
 - > Tipos de Ticket CRM (y numeración)
 - > Versiones de lista de materiales
 - > Clases de artículos
 - > Almacenes
 - > Causales de almacén
 - > Datos predeterminados para el CRM (Tipos de contacto, Informe de visita, Oportunidades, Calidad de contacto, porcentajes de éxito, etc.)


</details>

---

**ENTORNO PERSONALIZADO SIN FAST START**

En el caso en que no inicie el Fast Start, es necesario poblar manualmente las siguientes tablas.      

## TABLAS BÁSICAS

<details>

  <summary>PAÍSES Click to expand!</summary>
 
 ## Tabla necesaria para todos los documentos y la inserción de registros de CLIENTES

  1. Completar el código (puede ser interno, pero se recomienda el internacional) y la descripción 
  2. Verificar en particular el campo COD ISO UE, que si falta no almacena el precódigo del IVA, atención a casos particulares
     * Grecia GR -> ISO = 'EL'
     * Salvo casos especiales, se puede realizar una actualización para completar ISO UE = COD ISO (bases de datos antiguas pre Fast Start)

</details>

<details>

  <summary>DIVISAS Click to expand!</summary>
 
 ## Tabla necesaria para gestionar los cambios de moneda y los registros contables

  1. Verificar la presencia al menos de las divisas principales y, sobre todo, del Euro
  2. Indicator *descargar cambios* para habilitar la inserción de la tasa de cambio para la divisa
  3. Otros campos
     * Decimales, se recomienda establecer en 2
     * Euro marcar solo en EUR

    4. Grilla inferior opcional pero útil para automatizar la detección de diferencias de cambio configurando las cuentas contables respectivas 

</details>

<details>

  <summary>EMPRESA Click to expand!</summary>
 
 ## Tabla necesaria para la facturación electrónica y para los datos de la empresa en documentos e impresiones

  1. Completar todos los datos fiscales
  2. Datos necesarios para la facturación electrónica
         * NIF y código fiscal
         * Teléfono y fax no son obligatorios, atención a no insertar / o caracteres especiales para separar el prefijo
        * REA (provincia dos letras y número)
        * Socio único / más socios
        * Liquidación SÍ / NO
        * Capital suscrito / pagado - ATENCIÓN a no poner el punto de los miles y separar los decimales con punto y NO con coma
        * Naturaleza jurídica
        * Régimen fiscal

</details>

<details>

  <summary>TIPOS DE DOCUMENTO Click to expand!</summary>
 
 ## Tabla del grupo general 'Tipos de documentos' no confundir con la homónima del grupo de administración

  1. Verificar con un Fast Start los tipos mínimos indispensables
  2. **Para facturación electrónica, insertar un tipo con código y descripción FattPubb**
   
</details>

<details>

  <summary>TIPOS DE PAGO Click to expand!</summary>
 
 ## Necesaria para los registros y documentos (vencimientos) y los registros contables (Partidas)


Verificar la presencia de datos en el campo **Código P.A.** para el tratamiento de la factura electrónica

Atención al vínculo con los tipos de efectos (grilla inferior derecha), de lo contrario no buscará las partidas en la creación de efectos

</details>

<details>

  <summary>SOLUCIONES DE PAGO Click to expand!</summary>
 
 ## Necesaria para los documentos (vencimientos) y contabilidad (Partidas)

</details>

## TABLAS DE ADMINISTRACIÓN 

### Contabilidad básica

<details>

  <summary>TIPOS DE IVA Click to expand!</summary>
 
 ## Necesaria para la contabilidad, documentos, facturación electrónica

  1. Atención a poblar el campo Código PA en los códigos de exención / exclusión / no imponibilidad para las facturas electrónicas
  2. Verificar el campo EN Declaración IVA necesario para la comunicación trimestral de liquidaciones IVA
  3. Verificar donde sea necesario el campo IVA a 0 en LG que permite líneas IVA a cero
  4. Verificar donde sea necesario el campo IVA para causales automáticas (casos de reverse charge con no deducibilidad en la compra)
  5. Verificar el campo Excluir de causales automáticas (casos de Reverse charge mixto - parte no en reverse)
    

</details>

<details>

  <summary>REGISTROS IVA Click to expand!</summary>
 
 ## Necesaria para la contabilidad y liquidación de IVA

  1. Prever una distribución entre Italia, UE y Extra UE, recomendable distinción entre bienes y servicios UE a la luz de los códigos de documento TD17 - TD18 para las autofacturas que deben comunicarse al SDI (recomendable distribución también para Extra UE)
  2. Para los registros de compras en reverse charge (Italia y UE) prever los respectivos registros del lado de ventas para el contrapartida, no compartir el registro de contrapartida con la venta UE (por ejemplo).
  3. Se recomienda prever un registro específico para liquidez IVA (para facilitar la impresión definitiva y la reposición en caso de desbloqueo solo de este seccional)
  4. Planificar (y luego verificar) la correcta coincidencia entre Tipo de Factura, Numeración del Tipo de Factura, Causa contable y Registro IVA para evitar crear huecos en los protocolos o conflictos. Las causales del lado de la venta generalmente presentan la opción de imponer el protocolo igual al número de factura.
  5. Verificar que se haya ingresado el año actual y los años anteriores si es necesario, luego el año será creado automáticamente por la utilidad de generación de contadores del nuevo año.
    

</details>


<details>

  <summary>NUMERACIÓN DE REGISTROS CONTABLES Click to expand!</summary>
 
 ## Necesaria para la contabilidad

  1. Prever al menos una numeración para los registros definitivos (se recomienda utilizar el código 1 descripción Numeración de registros contables generales)
  2. Planificar y establecer la política de numeración (Diaria o Anual) así como los otros parámetros de numeración como se indica en las instrucciones generales sobre numeraciones
  3. Se recomienda prever también una numeración para los registros provisionales (Código 2 descripción Numeración de registros contables provisionales)
    

</details>

<details>

  <summary>TIPOS DE CUENTA Click to expand!</summary>
 
 ## Necesaria para el Plan de Cuentas, la contabilidad y la impresión del balance

  1. Prever al menos las 4 tipologías Activo Pasivo Costos Ingresos para el Balance y el libro mayor 
  2. Planificar y establecer los tipos de cuenta para Clientes y Proveedores (se recomienda la división Italia, UE y Extra UE), atención a marcar tanto Activo / Pasivo, como Cliente / Proveedor
  3. Se recomienda prever también un tipo para los Bancos para su uso a través del registro, de lo contrario no es posible gestionar algunas funciones como la cartera, etc. No se recomienda hacer registros bancarios con una cuenta que no sea de tipo registro bancario.
  4. Se recomienda prever un tipo de cuenta para costos e ingresos a modificar con anticipos y diferidos con el indicador Servicio además de costo / Ingreso
  5. Es necesario crear un tipo de Agentes si se desea activar la gestión de comisiones (marcar en pasivo y Agente)
  6. Opcional crear el tipo Cuentas de orden (con indicador cuentas de orden) para gestionar los asientos fuera de balance.
    

</details>


<details>

  <summary>PLAN DE CUENTAS Click to expand!</summary>
 
 ## Necesaria para la contabilidad y la impresión del balance

  1. Prever en la cuadrícula de grupos al menos las 4 tipologías Activo Pasivo Costos Ingresos
  2. Planificar los subgrupos (número de subniveles no limitado) y completar también el campo Naturaleza del grupo
  3. Definir en la cuadrícula inferior, para cada grupo de último nivel de detalle, las cuentas / subcuentas de detalle. ATENCIÓN: para cada grupo debe haber al menos una cuenta donde luego insertar sus subcuentas
  4. NO insertar cuentas de registro (Clientes Proveedores Agentes y BANCOS) desde aquí sino solo a través de CONTACTOS
  5. Prever todas las cuentas necesarias (Balance de Cierre y Apertura, Cuenta Económica de cierre, Ganancia Pérdida y Ganancia pérdida del año anterior, Anticipos y Diferidos - con tipo de cuenta específico)
  6. Opcional crear el grupo Cuentas de orden para gestionar los asientos fuera de balance.
    

</details>


<details>

  <summary>PARÁMETROS DE CONTABILIDAD GENERAL Click to expand!</summary>
 
 ## Necesaria para la contabilidad

  1. Ingresar el año actual y los años anteriores si es necesario, luego el año será creado automáticamente por la utilidad de generación de contadores del nuevo año.
  2. Completar los tres rangos de fechas para la gestión del ejercicio
  3. Completar, si están disponibles, también las causales para el cierre y apertura de cuentas, o bien recuperarlas posteriormente
  4. Completar la periodicidad del IVA
  5. Ingresar los emparejamientos entre maestros relacionados con clientes y proveedores, bancos y agentes y los tipos de cuenta respectivos
  6. Definir las cuentas para los procedimientos automáticos en la segunda pestaña
 

</details>

<details>

  <summary>CAUSALES DE CONTABILIDAD GENERAL Click to expand!</summary>
 
 ## Necesaria para la contabilidad

  1. Prever las causales conectadas a los principales tipos de facturas de compra y ventas y conectarlas a los respectivos registros de IVA (Necesario un template con cuentas genéricas sobre Cliente Proveedor y costo ingreso, subcuenta específica para IVA a crédito y débito) Prestar atención al tipo de monto en las líneas.
  2. Prever también las causales de contrapartida para los Reverse charge y UE
  3. Prever causales para los pagos y cobros con cierre de partidas (necesarias también para listados de transferencias, etc.) prestar atención al template y tipo de monto en las líneas
  4. Prever las causales para las fases de la cartera activa (emisión de efectos, Presentación y Acreditación), la presentación y acreditación no requieren un template, mientras que la Emisión necesita un template de Efectos en cartera a Cliente
  5. Prever causales para notas de crédito con template invertido en los signos, para reverse charge se usa invertir el primero y compartir el contrapartida que tiene la opción para inversión de signos automática
  6. Prever una causal para perceptores (con template) y por pago a perceptores (no requiere template)
  7. Prever causales de apertura y cierre, anticipos y diferidos, amortizaciones (no requiere template)
  8. Se recomienda prever otros causales de libro mayor y un causal de libro mayor genérico sin template.
  9. Prever configuraciones para el envío de autofacturas al SDI y un causal para la compra de servicios Extra UE no IVA con vinculación a la autofactura  
 
    
</details>

### Gestión de activos

<details>

  <summary>PARÁMETROS DE ACTIVOS Click to expand!</summary>
 
 ## Necesaria para la gestión de activos

  1. Planificar la política de gestión de la numeración, si es única o con precódigo   
    
</details>

<details>

  <summary>Tabla CATEGORÍAS DE ACTIVOS Click to expand!</summary>
 
 ## Necesaria para la contabilidad y gestión de activos

  1. Prever las categorías y la tasa ministerial de amortización según el tipo de actividad realizada
  2. Ingresar en las categorías el límite para la amortización anual (normalmente 516 euros)
  3. Ingresar el indicador Amortización del primer año para reducir a la mitad la cuota del primer año
  4. Planificar la política de amortización de los componentes incrementales (se desaconseja cambiarla en curso)
   
</details>

<details>

  <summary>Tabla PRECODIGO DE ACTIVOS Click to expand!</summary>
 
 ## Opcional

  1. Planificar la política de gestión de la numeración, si es única o con precódigo 
 
    

</details>

### Gestión de perceptores

<details>

  <summary>Tabla CÓDIGO TRIBUTO Click to expand!</summary>
 
 ## Necesaria para la gestión F24

  1. Verificar la presencia de datos y agregar si es necesario los códigos para el IVA (6001, 6002.... 6099) y para retenciones (1040, 1038....)

   
</details>

<details>

  <summary>Tabla TIPOS DE RETENCIÓN Click to expand!</summary>
 
 ## Necesaria para la gestión de perceptores

  1. Prever los tipos necesarios para perceptores (1040) al 20% de retención, para agentes y para contribuyentes de régimen simplificado (0% sobre el 100%)
  2. Vincular las causales para la contabilización del pago 
  3. Vincular la categoría de agente en el tipo reservado para agentes
   
</details>

---

## TABLAS DE TESORERÍA

### Cartera activa

<details>

  <summary>Tabla ESTADOS DE EFECTOS Click to expand!</summary>
 
 ## Necesaria para la gestión de la cartera

  1. Prever al menos las tipologías fundamentales Emitido, Presentado SBF, Rit. Accr (Acreditado) y Rit. Imp (impagado) para emparejar al respectivo indicador
   
</details>

<details>

  <summary>Tabla ESTADOS DE IMPAGO Click to expand!</summary>
 
 ## Necesaria para la gestión de impagos vinculados a la cartera

  1. Prever al menos la tipología "Impagado" vinculada a el indicativo correspondiente
  2. Se recomienda codificar todas las tipologías especularmente a los flg presentes 
  
   
</details>

<details>

  <summary>Tabla TIPOS DE EFECTOS Click to expand!</summary>
 
 ## Necesaria para la gestión de la cartera

  1. Prever al menos la tipología "Recibo bancario"
  2. Vincular la numeración de la que se menciona a continuación
  3. Vincular una cuenta del plan de cuentas (por ejemplo, Efectos activos en cartera) para contabilizar la emisión

   
</details>

<details>

  <summary> NUMERACIÓN DE EFECTOS Click to expand!</summary>
 
 ## Necesaria para la gestión de la cartera

  1. Prever la tipología "Numeración de recibos"
  2. Configurar el detalle como los demás numeradores estándar
  3. Se recomienda una cadencia anual

   
</details>

<details>

  <summary> NUMERACIÓN DE LISTADOS DE PRESENTACIÓN Click to expand!</summary>
 
 ## Necesaria para la gestión de la cartera

  1. Prever la tipología "Numeración de listados de recibo"
  2. Configurar el detalle como los demás numeradores estándar
  3. Se recomienda una cadencia anual

   
</details>

<details>

  <summary> Tabla TIPOS DE PRESENTACIÓN DE LISTAS DE EFECTOS  Click to expand!</summary>
 
 ## Necesaria para la gestión de la cartera

  1. Prever al menos una tipología por defecto con numeración vinculada
  2. Se recomienda prever varias tipologías según el banco de presentación vinculando las cuentas de apoyo para la presentación y las cuentas corrientes ordinarias para el crédito específicos
  

   
</details>

### Transferencias a proveedores

<details>

  <summary> NUMERACIÓN DE PAGOS A PROVEEDORES Click to expand!</summary>
 
 ## Necesaria para la gestión de listados de transferencias

  1. Prever la tipología "Numeración de listados de recibo"
  2. Configurar el detalle como los demás numeradores estándar
  3. Se recomienda una cadencia anual

   
</details>

<details>

  <summary> Tabla TIPOS DE PAGO Click to expand!</summary>
 
 ## Verificar: ya gestionada en las tablas generales

  1. Verificar si hay una tipología adecuada (por ejemplo, "Transferencia") que será llamada

   
</details>

### Anticipos de facturas

<details>

  <summary> Tabla TIPOS DE ANTICIPO  Click to expand!</summary>
 
 ## Necesaria para la gestión de anticipos

  1. Prever una tipología para cada banco vinculado
  2. Vincular la numeración mencionada a continuación
  
  
</details>

<details>

  <summary> NUMERACIÓN DE LISTADOS DE ANTICIPOS DE FACTURAS Click to expand!</summary>
 
 ## Necesaria para la gestión de listados de anticipos

  1. Prever la tipología "Por defecto"
  2. Configurar el detalle como los demás numeradores estándar
  3. Se recomienda una cadencia anual

   
</details>

### Flujos de caja

<details>

  <summary> Tabla TIPOS DE FLUJO  Click to expand!</summary>
 
 ## Necesaria para la gestión de flujos de caja

  1. Prever una tipología para cada tipo de flujo financiero con el respectivo indicador asociado
  2. Se recomienda habilitarlas todas, ya que se seleccionan las de interés al iniciar el cálculo y se guarda la elección
  
  
</details>

<details>

  <summary> Tabla TIPOS DE CUENTA FINANCIERA  Click to expand!</summary>
 
 ## Necesaria para la gestión de flujos de caja

  1. Ingresar las cuentas corrientes ordinarias
  2. No es necesario ingresar las cuentas de apoyo para SBF si se habilita el parámetro de lectura en la fase de inicio del cálculo
  
  
</details>

<details>

  <summary> Tabla TIPOS DE VENCIMIENTO  Click to expand!</summary>
 
 ## Opcional para la gestión de vencimientos extracontables en los flujos de caja

  1. Ingresar las tipologías de interés (por ejemplo, Salarios)
  
  
</details>

Verificar en las diversas tablas de documentos (Órdenes, DDT, RDA, etc.) qué tipologías se desean leer en el cálculo de flujos de caja

## TABLAS DE VENTA

### Ofertas

<details>

  <summary> PARÁMETROS  Click to expand!</summary>

  Definir los [parámetros](/docs/configurations/parameters/sales/offer-parameters) generales a utilizar en las ofertas. 

</details>

### Órdenes

<details>

  <summary> Tabla TIPOS DE ORDEN  Click to expand!</summary>

  Ingresar las [tipologías de orden](/docs/configurations/tables/sales/sales-order-types) utilizadas; los datos obligatorios son: *Tipo*, *Descripción* y *[Numeración](/docs/configurations/tables/fluentis-numerations)*.     
  Los criterios de creación de las diversas tipologías pueden ser distintos, por ejemplo:      
  - creación de tipología PEDIDO CLIENTES ITALIA, PEDIDO CLIENTE UE, PEDIDO CLIENTE EXTRA UE.       
  - creación de tipología en base al [Tipo DDT](/docs/configurations/tables/sales/delivery-notes-type) o al [Tipo factura](/docs/configurations/tables/sales/invoices-type) a crear.     
  - creación de tipología en base al Almacén a movilizar

</details>

<details>

  <summary> PARÁMETROS  Click to expand!</summary>

  Definir los [parámetros](/docs/configurations/parameters/sales/sales-orders-parameters) generales a utilizar en los pedidos de clientes. 

</details>

### DDT de venta

<details>

  <summary> Tabla TIPOS DDT  Click to expand!</summary>

  Ingresar las [tipologías de DDT](/docs/configurations/tables/sales/delivery-notes-type) utilizadas; los datos obligatorios son: *Tipo*, *Descripción* y *[Numeración](/docs/configurations/tables/fluentis-numerations)*.     
  Los criterios de creación de las diversas tipologías pueden ser distintos, por ejemplo:      
  - creación de tipología DDT CLIENTES ITALIA, DDT CLIENTE UE, DDT CLIENTE EXTRA UE.       
  - creación de tipología en base al [Tipo factura](/docs/configurations/tables/sales/invoices-type) a crear.     
  - creación de tipología en base al Almacén a movilizar
  
</details>

<details>

  <summary> PARÁMETROS  Click to expand!</summary>

  Definir los [parámetros](/docs/configurations/parameters/sales/dn-parameters) generales a utilizar en los DDT de clientes. 
  
</details>

### Facturas de venta

<details>

  <summary> Tabla TIPOS DE FACTURA  Click to expand!</summary>

  Ingresar las [tipologías de factura](/docs/configurations/tables/sales/invoices-type) utilizadas; los datos obligatorios son: *Tipo*, *Descripción* y *[Numeración](/docs/configurations/tables/fluentis-numerations)*.     
  Los criterios de creación de las diversas tipologías pueden ser distintos, por ejemplo:      
  - creación de tipología FACTURA CLIENTES ITALIA, FACTURA CLIENTE UE, FACTURA CLIENTE EXTRA UE.     
  - creación de tipología en base a la Naturaleza de la factura (factura, nota de crédito, etc.)  
  - creación de tipología en base al Almacén a movilizar.
  
</details>

<details>

  <summary> PARÁMETROS  Click to expand!</summary>

  Definir los [parámetros](/docs/configurations/parameters/sales/sales-invoices-parameters) generales a utilizar en las facturas de clientes. 

</details>