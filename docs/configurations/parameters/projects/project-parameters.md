---
title: Parametri Progetti
sidebar_position: 1
---
### Generale

Questi parametri vengono utilizzati di default se nei documenti non vengono specificati i campi.

**Ore giornaliere**: è possibile indicare un orario di lavoro di default (riferirsi alla tabella Home > Orari di lavoro);

**Turno di lavoro**: indica il turno di lavoro specifico, codificato nella tabella **Turno di Lavoro**.


### Interventi


**PIANO DI FATTURAZIONE**

Le regole da applicare al piano di fatturazione dell'intervento possono essere stabilite nei parametri generali della Gestione Progetti, ed essere quindi valide per tutti i clienti, oppure specifiche per cliente. 
La procedura di calcolo del piano di fatturazione controllerà prima la presenza di configurazioni specifiche per il cliente, e se non presenti, considererà quelle presenti nei parametri generali. 

**Sede di Lavoro** e **Tipo intervento** : utilizzati come filtro; se vuoti vengono considerati validi per tutte le sedi di lavoro e per tutti i tipi interventi. Se invece configurati, verranno presi in considerazione solamente in corrispondenza della sede di lavoro configurata nell'anagrafica della risorsa che svolge l'intervento, e del tipo intervento utilizzato. 

**Tipo fascia oraria**: indica la fascia oraria di lavoro concordata con il cliente, ed il monte ore giornaliero. 
:::note[Osservazione] 
Si potrà stabilire che per un cliente il monte ore giornaliero sono 7 ore, mentre per un altro 8. Le ore indicate nella fascia oraria verranno utilizzate nella conversione tra diverse unità di misura temporali: 
- es. se abbiamo svolto 7 ore dal cliente e la sua fascia corrisponde a 7 ore, nella conversione in Giorni avremo come quantità 1. 
- se invece abbiamo svolto 7 ore dal cliente e la sua fascia corrisponde a 8 ore, nella conversione in Giorni avremo come quantità 0.875. 

La fascia verrà inoltre considerata per il calcolo del fuori orario da tariffare con prezzo diverso, sia per il superamento del monte ore totale sia degli orari stabiliti. 
:::

**Tipo fascia oraria notturna**: il funzionamento è analogo come per il campo "Tipo Fascia oraria" ma verrà utilizzato nel caso di effettuazione servizi sia diurni che notturni, per permettere diversa tariffazione. 

**Tipo arrotondamento**: indica la regola matematica con cui arrotondare le ore di lavoro. L'arrotondamento verrà poi applicato sulle ore complessive dell'intervento. Es. totale ore 7,45 h, se previsto arrotondamento alla mezz'ora, le ore fatturate saranno 8. 

**Categoria commerciale**: ulteriore filtro per la selezione della regola per il piano di fatturazione. Se vuoto verrà considerato valido per tutte le categorie commerciali clienti, nel caso di indicazione specifica verrà selezionata quella corrispondente inserita in anagrafica cliente - tab Amministrazione

**Includi ore viaggio nei servizi**: permette di considerare le ore di viaggio presenti nell'intervento nella tab "Spese da fatturare", come se fossero delle ore di servizio. Di conseguenza tutte le regole di fatturazione (fascia oraria, arrotondamenti, etc) verranno applicate anche alle ore di viaggio, come appunto fossero un servizio svolto. 

**Escludi arrotondamenti**: se abilitato, non verranno applicati arrotondamenti nel piano di fatturazione. 

**Escludi calcolo Fuori Orario**: se abilitato, non verrà calcolato il fuori orario nel piano di fatturazione. Per la conversione tra diverse unità di misura temporali (es. da ore a giorni) verrà utilizzato il monte ore indicato nel campo "Turno di lavoro" nei parametri generali della Gestione Progetti. 

**Considera tutte le fasce orarie calcolo fuori Orario**: se abilitato nel calcolo del fuori orario vengono prese in considerazione sia la fascia oraria diurna che la fascia oraria notturna. Verrà considerato fuori orario solo ciò che è al di fuori di entrambe le fasce o supera il monte ore giornaliero. Se disabilitato, verrà considerata solo una fascia oraria (notturna o diurna in base all'orario di inizio del servizio) e tutto ciò che è fuori da questa fascia oraria considerata, sarà tariffato fuori orario. 
:::note[Esempio]
Fascia diurna 7.00 - 18.00
Fascia oraria notturna 20.00 - 5.00

orario servizio: 3.00 - 8.00
con flag abilitato il piano di fatturazione sarà: 
- riga servizio 3.00 - 5.00 con tariffa notturna
- riga servizio 05.00 - 07.00 con tariffa fuori orario
- riga servizio 07.00 - 08.00 con tariffa diurna
(vengono considerate per il calcolo entrambe  le fasce orarie, risulta in fuori orario solamente quello che non rientra in nessuna delle due)

con flag disabilitato il piano di fatturazione sarà:
- riga con servizio 3.00 - 5.00 con tariffa notturna
- riga con servizio 05.00 - 08.00 con tariffa fuori orario 
(viene considerato per il calcolo solo la fascia di orario notturna, che è di riferimento per il servizio iniziato in quella fascia)

:::

### Attività

**Controlla attività mancanti negli ultimi: numero mesi**: indicare il numero di mesi, per i quali in fase di dichiarazione attività, verranno controllate eventuali dichiarazioni attività mancanti (ore/giorni) e verranno proposti in automatico in fase di dichiarazione. 

Valore di default = 0, nella dichiarazione attività verrà sempre proposta la data odierna senza alcun controllo per le dichiarazioni mancanti nei mesi passati

Valore "1": verrà controllato il periodo dato da data odierna fino al mese precedente. es. 05/06 - 05/07
ad es. se la dichiarazione del 20/06 è mancante, all'inserimento della nuova dichiarazione attività, la data proposta sarà 20/06

Aumentando il numero di mesi, si estende il range dei mesi passati da controllare. 
