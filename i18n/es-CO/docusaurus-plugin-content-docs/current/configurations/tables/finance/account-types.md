---
title: tipi conto
sidebar_position: 30
---

:::tip[Inicio Rápido (FAst Start)]
La tabla está sujeta al procedimiento de [**Inicio Rápido (Fast Start)**](/docs/guide/fast-start)

En caso de que se desee configurar manualmente, consulte la lista de verificación de la página vinculada.
:::

Ruta: **Configuración > Tablas > Administración > tipi conto (Configurazione > Tabelle > Amministrazione > Tipi conto)**

### Gestión de tabla

La definición de la tabla de tipos de cuenta no es más que una 'calificación' que indica al procedimiento cómo gestionar el código de subcuenta al que está asignado:

- en primer lugar, identifica cómo valorar el detalle de gestión de los 4 tipos de registros previstos;

- en segundo lugar, identifica las secciones de pertenencia al balance (activos/pasivos/costos/ingresos);

- finalmente, puede servir como criterio de filtro, típicamente dentro de la ayuda de cuentas.

#### Campos específicos

**codice**: código del tipo de cuenta.  

**descrizione**: descripción del tipo de cuenta.  

**P. Activo (P. Attivo)**: con indicador en activo.  

**P. Pasivo (P. Passivo)**: con indicador en pasivo.  

**E. Costos (E. Costi)**: con indicador en costos.  

**E. Ingresos (E. Ricavi)**: con indicador en ingresos.  

**C. Orden (C. Ordine)**: con indicador en cuentas de orden.  

**cliente**: con indicador en clientes + activo.  

**fornitore**: con indicador en proveedores + pasivo.  

**banca**: con indicador en activo o pasivo + banco.  

**agente**: con indicador en agente + pasivo.  

**servizio**: con indicador en servicio. Las cuentas con este indicador activo son las subcuentas para las cuales el procedimiento gestiona automáticamente los asientos de ajuste e integración a nivel de balances interanuales, así como los asientos de cierre de contabilidad general.  

**controlling**: Las cuentas de este tipo solo se pueden utilizar en el área de controlling y no en registros de contabilidad general.

---

#### Indicadores posteriores (de *tutti* a *impostazioni conai*)**

Con estos indicadores se habilita la visibilidad de las pestañas correspondientes dentro de las anagrafías contables de clientes / proveedores. Al activar *tutti*, todas las pestañas serán visibles.

### Video Tutoriales

:::important Ver También (Vedi Anche)
[**VIDEO TUTORIALES SOBRE LAS TABLAS ADMINISTRATIVAS (VIDEO TUTORIALS SULLE TABELLE AMMINISTRATIVE)**](/docs/video/finance/intro)
:::