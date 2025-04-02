---
title: stato lotto
sidebar_position: 22
---

La tabla se encuentra en la ruta **Tablas > Logística > stato lotto (Tabelle > Logistica > Stato lotto)**.

En esta tabla es posible codificar el *Estado de los lotes* para definir su validez.

Permite insertar nuevos registros o buscar los ya existentes para visualizarlos, modificarlos o eliminarlos.

**Búsqueda de stato lotto (Ricerca Stato lotto)**

El formulario consta de un área de filtros y una de resultados. Una vez configurados todos los filtros deseados, basta con hacer clic en el botón **ricerca** para visualizar los resultados dentro de la cuadrícula de resultados.

**Ingreso de stato lotto (Inserimento Stato lotto)**

Para poder insertar nuevas codificaciones, es necesario hacer clic en la cuadrícula en la primera fila vacía o presionar el botón **nuovo**.  
Para el nuevo registro, se deben ingresar al menos los campos obligatorios requeridos por el programa: el **codice** y la **descrizione**.

Un lote se caracteriza por un estado que define su validez. Para ciertos tipos de materiales en particular, como los productos alimenticios y farmacéuticos, el estado es obligatorio (por ejemplo, en el ámbito farmacéutico, un lote que necesita análisis antes de poder ser utilizado tendrá como estado inicial *En cuarentena (In quarantena)* hasta la finalización de los análisis).

#### Campos específicos (Campi specifici)

> **Disp. prel. auto (Disp. prel. auto)**: si está activo, este lote no será considerado en la disponibilidad;     
> **No disponible para MRP (Non disponibile per MRP)**: si está activo, este lote será considerado por el MRP solo si en los *parametri mrp* del artículo también se ha marcado el indicador *considera lotti in stato non disponibile*. Si alguno de los dos indicadores *No disp. para MRP (Non disp. per MRP)* y *considera lotti in stato non disponibile* no está activo, entonces no será considerado tampoco por el MRP.

Para todo lo que no se detalla en este documento sobre el funcionamiento común de los formularios, consulte el siguiente enlace [Funcionalidades, botones y campos comunes (Funzionalità, pulsanti e campi comuni)](/docs/guide/common).