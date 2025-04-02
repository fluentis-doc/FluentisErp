---
title: configurazione
sidebar_position: 2
---

**Instalación en dispositivo (Installazione su device)**

Para poder instalar la aplicación en el dispositivo, se debe utilizar un archivo .apk.

**Descarga de actualizaciones (Download aggiornamenti)**

Si el entorno del cliente se actualiza, no es necesario reinstalar la aplicación, porque automáticamente la app recupera toda la información del servidor y descarga las actualizaciones.  
Sin embargo, hay casos específicos en los que es necesario proceder con el reemplazo del apk en el dispositivo, por lo que será necesario reinstalar la aplicación.

**configurazione en WPF (Configurazione in WPF)**

- **Menú/Usuario (Menu/Utente)**: crear un *menu* personalizado en el cual mostrar solo los formularios a utilizar. El usuario del WMS debe tener el indicador en la *Solución Fluentis WMS (Soluzione Fluentis WMS)*.

- **parametri magazzino carico/scarico per utente**: estos parámetros sirven para introducir restricciones para los usuarios y pueden configurarse en la tabla [Parámetros de carga/descarga del almacén para el usuario (Parametri magazzino carico/scarico per utente)](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) que se encuentra en *Parámetros > Parámetros generales (Parametri > Parametri generali)*. En ausencia de estos parámetros, el usuario puede realizar operaciones de movimiento en cualquier almacén, pero esto implica tener que elegir un almacén dentro de los formularios individuales con la causa correspondiente. Obviamente, esta operativa no es correcta y no es manejable por el operador. En estos parámetros es posible indicar para cada formulario y cada operador, el almacén y la causa de forma predeterminada que se precompletarán al abrir el formulario.

- **barcode tokenizer**: los códigos de barras se pueden configurar dentro del formulario [Tokenizador de código de barras (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer), que se encuentra en: Tablas > configurazione general > Tokenizador de código de barras. Estos permiten "instruir" al programa para interpretar los códigos de barras y realizar determinadas acciones.

- **U.M. Alternativa - Def. WMS**: para los formularios *carico articolo*, *scarico articolo*, *sposta articolo*, *rettifica articolo*, *giacenza* e *inventario*, se ha introducido la posibilidad de mover la mercancía a través de la U.M. Alternativa. La configuración se obtiene activando el indicador *default wms* en la pestaña [U.M. Alternativas (U.M. Alternative)](/docs/erp-home/registers/items/create-new-item) que se encuentra en el *anagrafica articolo*. En los formularios indicados, solo se visualizará la U.M. Alternativa en el campo U.M., las operaciones creadas tendrán la U.M. Alternativa y la Cantidad Alternativa pobladas según el factor de conversión.

- **Formularios en WPF (Form in WPF)**: para acceder a los formularios en WPF, el usuario debe tener la solución F21-WMS.

- **Licencia WMS (Licenza WMS)**: el WMS tiene licencias dedicadas. En la pestaña Licencia en WPF, es posible verificar el número de licencias dedicadas al WMS. La licencia es ocupada por el usuario que utiliza la Solución F21-WMS. Por lo tanto, tanto si el acceso se realiza desde un dispositivo móvil, como desde WPF con esa solución.