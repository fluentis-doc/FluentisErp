---
title: Tipi progetto
sidebar_position: 12
---

La tabella è accesssibile da **Tabelle > Gestione Progetti > Tipi progetto**
La tabella contiene le possibili tipologie di **Progetto**. E' composta da una parte di filtro in cui si può ricercare attraverso la descrizione del tipo, e da due griglie: una in cui verranno elencate tutte le tipologie di progetto inserite (basterà cliccare sul pulsante di ![](/img/neutral/common/search.png) ricerca nella ribbon bar per visualizzarle) ed una in cui potranno essere indicati i costi/ricavi predefiniti per ogni tipologia.

![](/img/it-it/configurations/tables/projects/proj-type.png)

Sempre all'interno di questa form è possibile aggiungere nuove tipologie di progetto all'interno della griglia, cliccando sul pulsante ![](/img/neutral/common/new.png) New: in questo modo verrà aggiunta una nuova riga all'interno della griglia dove si potranno definire le seguenti informazioni:

**Tipo**: è il codice del tipo progetto;

**Descrizione Tipo Progetto**: è la descrizione breve del tipo progetto;

**Numerazione**: è la numerazione associata;

**Struttura gerarchica**: questo flag indica che i progetti di questo tipo avranno una struttura gerarchica;

**Tipo ordine**: è possibile indicare un tipo ordine associato;

**Descrizione Tipo Ordine**: è la descrizione del tipo ordine associato;

**Tipo Fattura**: è possibile indicare un tipo fattura associato, necessario per la fatturazione dei progetti;

**Descrizione Tipo Fattura**: è la descrizione della fattura associata;

**Template**: questo flag indica che i progetti di questo tipo sono template;

**Sicurezza del Progetto abilitata**: se flaggato, abilita la possibilità di scegliere, nella tab Permessi Utente della Testata del Progetto, gli utenti che hanno il diritto di Read Only oppure Read Write sul progetto (gli altri utenti non potranno accedervi); se non flaggato, permette la modifica del Progetto a tutti gli utenti;

**Tipo richiesta d’acquisto**: è possibile associare un tipo di richiesta d’acquisto;

Sono poi presenti alcuni flag nella griglia, che indicano le varie tab da mostrare per il tipo progetto.

Nella griglia sottostante è possibile costruire la valorizzazione del SAL nell’ambito dello stato avanzamento lavori. Dopo aver selezionato una riga dalla prima griglia, i campi da compilare nella seconda sono:

**Tipo origine Costo/Ricavo**: contiene le tipologie di costi/ricavi previste per il tipo progetto;

**Descrizione**: è la descrizione dei costi/ricavi;

**Tipo**: indica se è costo o un profitto.

![](/img/it-it/configurations/tables/projects/revenue.png)

:::danger attention

Bisogna definire a priori come valorizzare il progetto, per evitare di inserire costi/ricavi già fatturati in altri moduli.

:::
