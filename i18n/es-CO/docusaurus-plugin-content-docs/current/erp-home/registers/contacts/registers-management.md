---
title: anagrafiche contatti
sidebar_position: 2
---

A través de esta gestión es posible definir la agenda de todos los sujetos con los que pueden trabajar las empresas definidas en la base de datos, tanto como titulares de los documentos del ciclo activo/pasivo/contable como simples direcciones y referencias de sedes alternativas.

:::danger[Atención]
La parte general definida como **contatto** acoge solo los datos generales del sujeto en cuestión, tales como la razón social de una empresa o el nombre de un profesional o sujeto privado, su dirección, el código fiscal y el número de IVA, etc...

Estos datos constituyen un reservorio, una especie de agenda, a disposición de todas las empresas gestionadas en la base de datos.

Cada empresa tiene su propio plan de cuentas y, por lo tanto, para poder utilizar el registro concretamente en el ciclo documental y en los registros contables y definir los varios detalles de interés, **es necesario, dentro de cada una de las sociedades involucradas** (actuando por lo tanto después de haber seleccionado la empresa activa) [**asociar el Contacto a un Tipo de cuenta**](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro) para inicializar el registro en detalle asociándole, precisamente, una cuenta contable que identificará también a efectos contables a determinado cliente italiano o, por ejemplo, a determinado proveedor europeo, a ese agente o a ese banco.
:::

### Búsqueda de registros

El formulario se abre a través de la ruta **Inicio > Registros > anagrafiche contatti (Home > Anagrafiche > Anagrafiche contatti)** y ha sido diseñado para permitir al usuario buscar fácilmente dentro de la agenda de contactos, con el propósito de visualizarlos, modificarlos, anularlos y, eventualmente, eliminarlos o proceder a la inserción de una nueva referencia, previa la posibilidad de tener los derechos necesarios para estas operaciones.

Como todos los formularios de búsqueda, esta ventana se compone de un área de filtro y de una cuadrícula de resultados. Una vez establecidos todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

Situándose en la fila del registro que se desea visualizar en detalle y haciendo doble clic se abrirá la ventana de detalle que contiene la información **generali** y todos los **dati contabili** relacionados con ese registro, que serán detallados en los artículos siguientes.

*Botón específico*:  
> **duplica**: permite duplicar el registro seleccionado. El botón abre un formulario dentro del cual se deben definir los elementos básicos de la copia: razón social, apodo (es decir, el código del registro en sí), dirección, código postal, municipio y provincia. Una vez confirmada la copia, esta se abrirá en modo edición automáticamente. En la copia del registro, también se recrearán todos los subcuentas del plan de cuentas asociadas al registro en la empresa activa, atribuyendo una nueva subcuenta según el progresivo de cada maestro.

### Crear registro

El **Nuevo registro (Nuova anagrafica)** se puede insertar:

- a través de la ruta **Inicio > Contactos > Crear registro de contactos (Home > Contatti > Crea Anagrafica contatti)**

   o bien

- haciendo clic en el botón **nuovo**, dentro del formulario **[anagrafiche contatti](/docs/erp-home/registers/contacts/registers-management)**.

El formulario **anagrafica** se compone de dos pestañas:
- **[General (Generale)](/docs/erp-home/registers/contacts/create-new-contact/general)** en la que se encontrarán las informaciones generales del registro;
- **[Datos Contables (Dati Contabili)](/docs/erp-home/registers/contacts/create-new-contact/accounting-data/accounting-data-intro)** que a su vez presentará una serie de pestañas en las que se podrán ingresar informaciones más específicas de tipo administrativo, comercial, logístico y que serán detalladas en los artículos siguientes.

## Resumen (Riepilogo)
:::tip[Flujo Operativo para los Registros]
1. Usar el comando *nuovo* para insertar un *Contacto* que contenga los datos anagráficos generales.
2. Escribir el número de IVA y usar el comando **proponi dati** para completar automáticamente los datos generales verificando también la validez del número de IVA. 
3. Asociar un **tipo conto** y se crea automáticamente la cuenta contable; se activan los detalles.
4. Completar los detalles en las varias pestañas, en particular las **condizioni di pagamento** (si Cliente, Proveedor o Agente) o el IBAN si es un registro de Banco (anagrafica Banca).
:::