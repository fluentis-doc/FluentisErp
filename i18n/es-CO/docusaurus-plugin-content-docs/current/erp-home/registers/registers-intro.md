---
title: Registros
sidebar_position: 1
---

En un software ERP como Fluentis, donde existe un enlace y una sinergia entre las diversas áreas y módulos y hay una fuente de datos compartida entre diversas empresas gestionadas y las diferentes áreas y funcionalidades involucradas, desempeña un papel fundamental una gestión eficiente y efectiva de los **Registros**.

:::tip[Información]
Para una introducción general y un análisis sobre la **estructura ERP**, haz clic [**aquí**](/docs/guide/fluentis-erp-structure)
:::

Estos datos básicos permiten automatizar considerablemente los procedimientos posteriores mediante la lectura de los datos que contienen.

:::note[**Ejemplo:**]
Al ingresar una nueva factura de venta, obtendremos automáticamente las condiciones de pago estándar definidas en el registro del cliente, la tasa de IVA la leeremos del registro del artículo facturado, los descuentos opcionales siempre del registro del cliente, o a través del listado de precios del artículo al cual el cliente está asociado.
:::

A través de esta sección se gestionan los siguientes tipos de registros:
- [Registros de **clientes**, **proveedores**, **bancos** y **agentes**:](/docs/erp-home/registers/contacts/registers-management) que están compuestas por una parte general denominada **Contacto**, que incluye los datos básicos como el nombre o razón social, los datos fiscales, la dirección, etc., y una parte detallada denominada **Datos contables** (ya que está conectada y depende de la creación de una cuenta en el plan de cuentas). Esta sección se divide en subsecciones para incluir los datos relativos a:
    - Datos administrativos: como cuentas a utilizar con el sujeto en cuestión, tasas de IVA relacionadas, etc.
    - Datos fiscales: por ejemplo, regímenes fiscales especiales a los que el sujeto se adhiere y datos para la facturación electrónica.
    - Pagos: condiciones estándar a proponer posteriormente y bancos de apoyo.
    - Entrega: destinatarios y destinos.
    - Gastos y descuentos: descuentos fijos y gastos adicionales a facturar.
    - Listados: asociación de listados de venta y compra al registro.
    - Agentes: asociación de los agentes a los clientes.
    - Otro.
- [Registros de **artículos**:](/docs/erp-home/registers/items/master-item-intro) compuestas por diferentes secciones según el tipo de dato y su uso correspondiente (por ejemplo, los datos administrativos, las unidades de medida, etc.)
- [plan de **cuentas**:](/docs/erp-home/registers/accounting/analytic-chart-of-accounts) que, aunque se inserta en el contexto de los registros (ya que está conectado a los registros de clientes y proveedores), se presenta más como una tabla donde definir las cuentas y sus agrupaciones.
- **[ciclos de trabajo,](/docs/erp-home/registers/production/routes/cycle-management-and-production-phases) [listas de materiales](/docs/erp-home/registers/production/bill-of-materials/bom), [prototipos:](/docs/erp-home/registers/production/standardization/new-prototype)** elementos relacionados con el contexto de la producción.