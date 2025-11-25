---
title: Configuración
sidebar_position: 2
ai_generated: true
---

**Instalación en dispositivo<!-- Installazione su device -->**

Para poder instalar la app en el dispositivo, se debe utilizar un archivo .apk descargable desde el repositorio en línea.

**Descarga de actualizaciones<!-- Download aggiornamenti -->**

Si el entorno del cliente se actualiza, no es necesario volver a instalar la aplicación, ya que automáticamente la app recupera toda la información desde el servidor y descarga las actualizaciones.
Sin embargo, existen casos específicos en los que es necesario reemplazar el archivo apk en el dispositivo, por lo que será necesario volver a instalar la aplicación.

**Configuración en WPF<!-- Configurazione in WPF -->**

- **Menú/Usuario<!-- Menu/Utente -->**: crear un *Menú<!-- Menu -->* personalizado en el que se muestren solo los formularios a utilizar. El usuario del wms<!-- wms --> debe tener seleccionado el flag de la *Solución Fluentis WMS*.

- **Parámetros de almacén de carga/descarga por usuario<!-- Parametri magazzino carico/scarico per utente -->**: estos parámetros sirven para introducir restricciones para los usuarios y pueden configurarse en la tabla [Parámetros de almacén de carga/descarga por usuario<!-- Parametri magazzino carico/scarico per utente -->](/docs/configurations/parameters/general-parameters/deliverynotes-grouping) que se encuentra en *Parámetros > Parámetros generales*. En ausencia de estos parámetros, el usuario puede realizar operaciones de movimientos<!-- movimentazione --> en cualquier almacén<!-- magazzino -->, pero esto implica tener que elegir un almacén<!-- magazzino --> dentro de cada formulario con la correspondiente causa<!-- causale -->. Obviamente, esta operativa no es correcta y no es gestionable por el operador. En estos parámetros es posible indicar, para cada formulario y cada operador, el almacén<!-- magazzino --> y la causa<!-- causale --> por defecto que serán completados automáticamente al abrir el formulario.       

- **Barcode tokenizer**: los códigos de barras pueden configurarse dentro del formulario [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer), ubicado en: Tablas > Configuraciones generales > Barcode tokenizer. Estos permiten "instruir" al programa para que interprete los códigos de barras y ejecute acciones determinadas.

- **U.M. Alternativa - Def. WMS**: solo para los formularios *Carga Artículo*, *Descarga Artículo*, *Mover Artículo*, *Rectificar Artículo*, *Existencias<!-- Giacenza -->* e *Inventario*, se ha introducido la posibilidad de mover la mercadería a través de la UM Alternativa. La configuración se realiza activando el flag *Default WMS* en la pestaña [U.M. Alternativas](/docs/erp-home/registers/items/create-new-item) que se encuentra en el *Maestro de Artículos<!-- Anagrafica Articolo -->*. En los formularios indicados, solo se muestra la UM Alternativa en el campo UM, y los movimientos<!-- movimentazioni --> creados llevan la UM Alternativa y la Cantidad Alternativa según el factor de conversión.

- **Formularios en WPF<!-- Form in WPF -->**: para acceder a los formularios en WPF, el usuario debe tener asignada la solución F21-WMS.

- **Licencia WMS**: el WMS tiene licencias dedicadas. En la pestaña Licencia en WPF es posible verificar el número de licencias dedicadas al WMS. La licencia es ocupada por el usuario que utiliza la Solución F21-WMS. Por lo tanto, tanto si el acceso se realiza desde un dispositivo móvil como desde WPF con esa Solución.