---
title: Definizione piano dei centri aziendali
sidebar_position: 2.1
---

Il piano dei [***Centri aziendali***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) è il primo punto da affrontare ed anche quello fondamentale per una corretta impostazione della contabilità analitica/gestionale: per poter codificare i centri dovremo definire innanzi tutto le ***Dimensioni*** di analisi e poi le ***Categorie dei centri aziendali***.

:::tip Nota
In società senza l'opzione *Controlling* attiva è consentita la creazione di Centri di costo senza una dimensione di riferimento e senza una categoria di centro
:::

La [***Dimensione***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) è sostanzialmente un criterio coerente di suddivisione di COSTI e RICAVI all’interno dell’azienda. La contabilità analitica avrà tipicamente *sempre* una dimensione INDUSTRIALE/DIREZIONALE, che è tipica di tutte le aziende, dove andiamo a suddividere l’azienda nelle varie entità funzionali: in questa dimensione, in sostanza, avremo CENTRO AZIENDALE AMMINISTRATIVO, IL CENTRO DIREZIONE, IL CENTRO DELL’UFFICIO TECNICO, IL CENTRO DEL COMMERCIALE e poi i vari CENTRI PRODUTTIVI ovvero i centri che identificano le singole macchine o raggruppamenti di macchine piuttosto che i gruppi manodopera.
Caso tipico di dimensione alternativa sono i PROGETTI ovvero le aziende che lavorano su PROGETTO o commessa; i progetti sono una dimensione parallela alla dimensione direzionale, e questa dimensione dei progetti accoglierà tutti i costi e ricavi DIRETTI di progetto, mentre riceverà dalla dimensione industriale/direzionale quelli che sono i centri ausiliari e generici come quelli citato poco fa (direzione, amministrazione ecc.): possiamo infatti, attraverso i cost driver, ribaltare i dati da una dimensione all’altra. 
Possiamo anche definire dimensioni alternative dove l’azienda vuole assegnare valori separandoli dalle logiche normali, perché vuole tenere nota di alcuni tipi di costi: es. una dimensione fiere piuttosto che investimenti, o budget d'acquisto.

:::tip Nota
Queste dimensioni alternative, che non impattano nelle logiche del modello industriale/direzionale piuttosto che di progetto, sono normalmente elementi a se stante che possono nascere anche in seguito alla configurazione iniziale.
:::


La seconda caratteristica obbligatoria dei centri di costo è quella della ***Categoria dei centri aziendali***: a livello di *dimensione industriale/direzioneale*, le tipologie che possiamo classificare per l’impostazione dei centri sono sostanzialmente cinque

***1)	CENTRI PRODUTTIVI O DIRETTI:*** sono centri che intervengono direttamente nella lavorazione del prodotto e/o servizio quindi sono i centri di trasformazione veri e propri. Fondamentale è una corretta individuazione di questi centri in quanto se noi sbagliamo l’aggregazione dei costi di questi centri produttivi corriamo il rischio di ottenere delle tariffe parametriche degli indici di costo dei relativi centri tramite le quali andiamo poi a “costificare” i nostri prodotti o le nostre commesse e a determinarne la relativa marginalità che può fuorviare nell’analisi della redditività. Non possiamo ad esempio aggregare macchine o impianti di costo molto diverso in quanto andremo a creare delle medie ponderate. Allo stesso modo non possiamo mettere nello stesso centro macchine e impianti presidiate dall’uomo insieme a macchine e impianti parzialmente presidiate dalla manodopera poiché anche questo andrebbe a generare delle medie che poi ci porterebbero ad ottenere delle marginalità alterate;

***2)	CENTRI INDIRETTI AUSILIARI:*** sono quelli necessari al funzionamento dei centri principali quindi raccolgono tutti quei costi che non sono imputabili in modo oggettivo ai centri produttivi ma sono indispensabili per il loro funzionamento. Avranno l'aggancio a ***Cost driver*** di ribaltamento sui centri produttivi/diretti, identificando un criterio adeguato di gestione;

***3)	CENTRI INDIRETTI COMUNI:*** sono i centri di struttura detti anche centri funzionali ( ad es. commerciale, tecnico, qualità, ecc…);

***4)	CENTRI DI PROFITTO O DI REDDITO, O DI RISULTATO ECONOMICO:*** sono i centri tramite i quali possiamo mettere in relazione RICAVI e COSTI relativi a una tipologia di reddito, che potrebbe essere una famiglia di prodotti, oppure, un canale di vendita;

***5)	CENTRI VIRTUALI/COMODO:*** ci servono per gestire tutto il modello, sono centri di appoggio ai driver di ribaltamento piuttosto che centri dove scaricare dati contabili da non utilizzare nel modello.

:::tip Nota
La categorizzazione dei centri, oltre che avere valenza teorica sulla struttura del modello di analisi, ha anche un risvolto operativo: quando si definiscono gli agganci dei centri a livello di piano dei conti, è possibile associare ad ogni sottoconto i vari centri che possono essere valorizzati oppure più velocemente si può indicare una categoria di centri, in modo da rendere visibili all’utente nel menù a tendina di selezione solo quelli facenti parte della categoria stessa.
:::

Dovremo poi identificare per quali di questi centri ci serve o ci interessa calcolare una tariffa di costo, tramite l'aggancio ad ognuno di un [*Modello di riclassificazione*](/docs/controlling/reclassifications/create-reclassification-model) di cumulo dei costi e una logica di calcolo a quantità su due possibili [*Unità di misura*](/docs/controlling/controlling-parametrization/controlling-specific-settings/measure-units) o in percentuale.