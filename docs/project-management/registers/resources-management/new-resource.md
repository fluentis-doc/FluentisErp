---
title: Nuova Risorsa
sidebar_position: 2
---

In questa form verranno inserite tutte le informazioni relative ad una nuova **Risorsa**.

**Codice/Descrizione**: indica il codice della risorsa con la relativa descrizione;

**Tipo risorsa**: indica di che tipo sia la risorsa, generalmente Umana o Materiale;

**Dipendente**: è possibile associare il conto del dipendente;

**Costo unitario/Ore mensili disponibili**: indica il costo oer unità di lavoro del dipendente e la relativa disponibilità mensile;

**Operatore**: è possibile collegare un operatore;

**Conto**: è possibile collegare la risorsa ad un professionista esterno;

**Articolo**: è possibile collegare la risorsa ad un elemento materiale;

**Precodice cespite**: è possibile collegare la risorsa ad un cespite;

**Società**: è possibile collegare la società;

**Data chiusura**: è possibile specificare unìeventuale data di chiusura rapporto;

**Note**: contiene eventuali note liberamente inserite.

Sono presenti delle tab specifiche:

**Tab Calendario**

Qui è possibile collegare un [Calendario](/docs/project-management/registers/calendars-management/calendars/) specifico alla risorsa.

Cliccando nella ribbon bar ![](/img/neutral/common/detail-propose.png) Proponi dettaglio, sarà possibile gestire i **Giorni lavorativi**. In particolare, nella finestra uscente è possibile escludere determinate giornate di lavoro e indicare un giorno libero; i risultati saranno riportati nella griglia **Giorni lavorativi** e terranno in considerazione i turni di lavoro precedentemente inseriti per la risorsa.

In Fluentis è possibile gestire il costo delle risorse da utilizzare nel calcolo costi in riga di progetto e nell’elaborazione SAL di progetto. 
Il costo può essere impostato direttamente in anagrafica risorsa, con un valore unico valido per tutte le circostanze, oppure differenziato per:
-	**Festivi**: 	utilizzato per le giornate configurate nel Calendario giorni festivi.
-	**Straordinari**: utilizzato per le giornate lavorative in cui si è superato il monte ore giornaliero.
-	**Notturno**: 	utilizzato per le giornate lavorative il cui turno è marcato come “notturno”
-	**Straordinario notturno**: utilizzato per le giornate lavorative il cui turno è marcato come “notturno” e si è superata la fascia oraria di lavoro o il monte ore giornaliero.
-	**Turno alternativo**: 	  utilizzato se la risorsa lavora su 2 turni diversi e si vuole tariffare un turno diversamente rispetto all’altro. 

Ad una di queste voci è possibile abilitare il flag “costo default giorno non lavorativo”. Questo flag viene utilizzato per tutti i casi in cui il giorno dell’attività non corrisponde con nessuna giornata né nel calendario giorni festivi né nel calendario dei giorni lavorativi della risorsa. 

Esempio:
un sabato che non rientra né nei festivi né nel calendario della risorsa, può essere tariffato sia come festivo che come straordinario. Applicheremo nel calcolo costo il costo marcato come “default”.
