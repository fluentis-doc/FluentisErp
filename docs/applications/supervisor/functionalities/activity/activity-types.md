---
title: Tipi di Attività
sidebar_label: Tipi di Attività
sidebar_position: 2
---

I tipi di *Attività* disponibili sono:

**Generate Script**
> Consente di creare uno script in C# generico, grazie al Widget script editor (citato in precedenza nell'articolo *Scripting*).  

**Data Source**
> Consente di selezionare un Data Source - dalla tab **Configurazione Attività** - da una collezioni esistente di Data Sources precedentemente creata dall'utente (dall'applicazione ARM).

:::success Video Tutorial
A questo link **[video](https://youtu.be/egDCFGZOu14)** troverai la spiegazione su questo tipo di attività.
:::

**Run Report**
> Consente di creare un report basato su alcuni parametri impostati e selezionati dalla tab **Configurazione Attività**, come: Business Object, tipo di stampa report, formato di esportazione e molto altro.

**SQL Query**
> Consente di eseguire queries create dalla tab **Configurazione Attività** > **Script**, con un set di parametri predefiniti - resi disponibili in caso si debbano eseguire queries su databases esterni - e parametri custom opzionali.

:::success Video Tutorial
A questo link **[video](https://youtu.be/bzyelPIs9tk)** troverai la spiegazione su questo tipo di attività.
:::

**Stored Procedure**
> Eseguire stored procedures precedentemente create in un database *Fluentis*, con i valori definiti nella tab **Parametri Collegati**. E' importante verificare i parametri utilizzati nella stored procedure con quelli definiti nella sopracitata tab.

**Mail Template**
> Restituisce un documento formattato - di diverso formato (ad esempio .pdf, .html, .docx, .doc) selezionabile dalla tab **Impostazione di Generazione Documento** - secondo quanto definito nella tab **Template Documento**, con i dati provenienti dai parametri di input definiti nella tab **Parametri Collegati**.  