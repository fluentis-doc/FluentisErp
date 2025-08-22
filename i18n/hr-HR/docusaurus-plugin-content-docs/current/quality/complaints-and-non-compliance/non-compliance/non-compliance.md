---
title: Neuskladnost
sidebar_position: 2
---


Upravljanje se može pronaći na putanji **Kvaliteta > Nesukladnost > Nova nesukladnost** ili se može izvršiti iz **Pretrage nesukladnosti**.   


:::važno Čemu služi
Nesukladnosti se koriste za identifikaciju i dokumentiranje odstupanja od utvrđenih standarda ili zahtjeva, bilo da se odnose na proizvodnju ili uslugu.
Ovaj proces pomaže osigurati da su proizvodi, usluge ili procesi ispravni i poboljšani kako bi se održala kvaliteta i sigurnost. Također, olakšava usvajanje korektivnih radnji/mjera kako bi se spriječili budući problemi.  
*Nesukladnosti* moraju:
- utvrditi uzroke nesukladnosti;
- utvrditi postoje li ili se mogu pojaviti slične nesukladnosti;
- procijeniti potrebu za djelovanjem kako bi se uklonili uzroci nesukladnosti.  

Sljedeća izvješća su standardno dostupna:
> **Nesukladnost**: Obrazac *Nesukladnosti*;
> **8D Nesukladnost**: obrazac za popunjavanje za 8D upravljanje *Nesukladnostima*.   
:::


## Kontrolne tipke


### ![](/img/neutral/common/save.png) Spremi nesukladnost

Pritiskom na ovaj gumb spremaju se sve izmijenjene informacije o prikazanoj *Nesukladnosti*.   


### ![](/img/neutral/common/new.png) Nova nesukladnost

Pritiskom na ovaj gumb spremaju se sve izmijenjene informacije o prikazanoj *Nesukladnosti* i otvara se novi obrazac stvaranjem novog.  


### ![](/img/neutral/common/execute.png) Valorizacija nesukladnosti

Tipke prilikom pregleda kartice *Zaglavlje*.   
Moguće je kreirati *odobrenje* za *Dobavljača* ili *Kupca* kojem je dodijeljena *Nesukladnost*.   
Tipka je omogućena samo ako je *Nesukladnost* spremljena, odobrena, ako je *Nesukladnost tipa *s kupcem* ili *s dobavljačem* i ako postoji *vrijednost za naplatu*.   
Zahtjev za podatke/potvrda se pojavljuje za:
> **Kupac** ili **Dobavljač**: je primatelj novog *odobrenja* (obavezni podatak), predlaže se *Kupac* ili *Dobavljač* izvorne *Nesukladnosti*.  
> **Vrsta računa**: ovo je *Vrsta dokumenta* novog *odobrenja* (obavezni podatak); predlaže se *Vrsta računa* unesena u *Vrstu nesukladnosti* izvorne *Nesukladnosti*.   
> **Opis**: ovo je opis koji će se koristiti za redak *Trošak* novog *odobrenja* (obavezni podatak); predlaže se opis koji je parametriziran u [Parametrima nesukladnosti](/docs/quality/claims-and-non-compliance/non-compliances/procedures/non-compliance-valorisation), odjel *Reference o nesukladnosti*.   
> **PDV**: je *Vrsta PDV-a* koja će se koristiti za redak *Trošak* novog *odobrenja*.  
> Predlaže se *Vrsta PDV-a* sa sljedećim prioritetima:   
> 1. Ako postoji *Izjava o namjeri*, uzima se u obzir *Vrsta PDV-a* prisutna u dokumentu;
> 2. Ako *Izjava o namjeri* ne postoji, uzima se u obzir *Vrsta PDV-a* povezana s *Dobavljačem* *Nesukladnosti*;
> 3. Ako *Izjava o namjeri* ne postoji i *Vrsta PDV-a* povezana s *Dobavljačem* *Nesukladnosti* nije navedena, uzima se u obzir *Vrsta PDV-a* povezana s *Vrstom nesukladnosti*.  
>
> Zatim se pritisne tipka **U redu** ili **Otkaži** kako bi se odlučilo želi li se nastaviti s postupkom izrade ili ne.
> Nakon što je obrada dovršena, prikazuje se novoizrađeno *odobrenje*.


### ![](/img/neutral/common/corrective.png) Stvaranje korektivne radnje

Tipka prilikom pregleda kartice *Upravljanje nedostacima*.
Tipka je omogućena samo ako je *Nesukladnost* spremljena, odobrena i ako je odabran valjani redak *Nedostatak*.   

import CorrectiveActionPopupInsertion from './../../../import/sections/corrective-action-popup-insertion.md'

<CorrectiveActionPopupInsertion />


## Upravljanje podacima

## Podaci zaglavlja dokumenta

Informacije kojima se upravlja su:   
> **Vrsta nesukladnost**: ovo je *Vrsta* dokumenta (obavezni podatak).
> Prilikom unosa nove *Nesukladnosti* predlaže se *Vrsta nesukladnosti* navedena u *Parametrima nesukladnosti*, odjeljak *nesukladnosti*.
>
> **Godina/Broj/Datum**: ovo su *Godina*, *Broj* i *Datum* *Nesukladnosti* (obavezni podaci).   
> Prilikom unosa nove *Nesukladnosti*:  
> - *Datum* se predlaže kao današnji datum;
> - *Godina* i *Broj* se predlažu na temelju *Datuma* i *Numeriranja* povezanih s *Vrstom nesukladnosti*.  
>
> **Kupac** ili **Dobavljač**: Ovo je referenca na *Kupca* ili *Dobavljača* kojem je *Nesukladnost* upućena (obavezno ako je *Vrsta nesukladnosti* *Dobavljaču* ili *Kupcu*).
> *Kupac* ili *Dobavljač* omogućen je na temelju naznačene *Vrste nesukladnosti*.   
>
> **Funkcija/Područje/Odjel**: Ovo je referenca za *Funkciju/Područje/Odjel* (obavezno ako je *Vrsta nesukladnosti* *Interna*).
> Omogućuje se na temelju naznačene *Vrste nesukladnosti*. 


## Zaglavlje

Upravljane informacije su:
> **Odgovorna osoba**: ovo je *Zaposlenik* odgovoran za *Nesukladnost*.
> Prilikom unosa nove *Nesukladnosti* prikazuje se *Odgovorna osoba* navedena u odjeljku *Parametri nesukladnosti*, *Nesukladnost*. 
>
> **Odgovorna funkcija**: Ovo je *Funkcija tvrtke* odgovorna za *Nesukladnost*.
> Prilikom unosa nove *Nesukladnosti*, predlaže se *Odgovorna funkcija* naznačena u odjeljku *Parametri nesukladnosti*, *Nesukladnost*.  
>
> **Vanjski referent**: slobodne napomene o kontakt osobi *Kupca*, *Dobavljača* ili *Funkcije/Područja/Odjela* primatelja *Nesukladnosti*.   
>
> **Proizvodno mjesto**: je referenca *Proizvodnog mjesta* gdje je pronađena *Nesukladnost*.   
>
> **Razlog**: slobodne napomene o razlogu unosa *Nesukladnosti* (obavezni podatak).   
>
> **Prijedlog rješenja**: napomene u slobodnom obliku o temi.
> Obično se koristi za označavanje predloženog rješenja primatelju *Nesukladnost*.  
>
> **Obaviješteno/Na datum**: ručni unos oznake je li *Nesukladnost* obaviještena primatelju i kojeg datuma.   
>
> **Odgovor dobavljača/interni odgovor**: Slobodne bilješke o temi.
> Obično se koristi za bilježenje bilo kakvog odgovora primatelja *Nesukladnosti* na obavijest. 
>
> **Audit**: proširenje samo za čitanje gdje su vidljive sljedeće informacije:
>> **Datum kreiranja/Ime**: ovo je datum i *A.R.M. korisnik* koji je unio *Nesukladnost*.
>> **Datum zadnje izmjene/Ime**: ovo je datum i *A.R.M. korisnik* koji je napravio posljednju izmjenu *Nesukladnosti*.   
>
> **Odobreno/Datum**: proširenje u koje se mogu unijeti podaci o odobrenju za *Nesukladnost*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može odobriti *Nesukladnost*.
>> **Odobreno**: Označava da je *Nesukladnost* *Odobrena*.   
>> Nakon odobrenja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo na današnji datum i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*
>> **Datum**: ovo je datum na koji je *Nesukladnost* *Odobrena*.   
>> Prilikom unosa datuma automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je zastavica *Odobreno*.   
>> **Ime**: Ovo je *A.R.M. korisnik* koji je odobrio *Nesukladnost*. Ove su informacije samo za čitanje.
>> **Osoba**: Ovo je *Zaposlenik* koji je odobrio *Nesukladnost*. Ove su informacije samo za čitanje.
>> **Funkcija**: Ovo je *Funkcija tvrtke* koja je odobrila *Nesukladnost*. 
>> Omogućeno samo ako je *Nesukladnost* *Odobrena*.   
>
> **Datum zatvaranja/na dan**: proširenje u koje se mogu unijeti podaci o zatvaranju *Nesukladnost*:
>> Samo **Odgovorna osoba** ili **Odgovorna funkcija** može zatvoriti *Nesukladnost*.  
>> **Zatvoreno**: označava da je *Nesukladnost* *Zatvorena*.  
>> Nakon zatvaranja, automatski se predlažu sljedeći podaci: *Na datum*, predloženo od današnjeg datuma i s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom*  
>> **Datum**: datum na koji je *Nesukladnost* *Zatvorena*.   
>> Prilikom unosa datuma automatski se predlažu sljedeći podaci: *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezan, *Zaposlenik* povezan s *A.R.M. korisnikom* i postavljena je oznaka *Zatvoreno*.  
>> **Ime**: je *A.R.M. korisnik* koji je zatvorio *Nesukladnost*. Ova informacija je samo za čitanje.
>> **Osoba**: je *Zaposlenik* koji je zatvorio *Nesukladnost*. Ova informacija je samo za čitanje.
>> **Funkcija**: je *Funkcija tvrtke* koja je zatvorila *Nesukladnost*.   
>> Omogućeno samo ako je *Nesukladnost* *Zatvorena*.
>> **Obavijest o zatvaranju/Datum zatvaranja**: ručni unos oznake je li *Nesukladnost* obaviještena primatelju i kojeg datuma.  


### Referenca dokumenta

Kartica sadrži informacije o dokumentima koji su doveli do upravljanja *Nesukladnosću*. Uključene informacije su:
> **Račun**, **Primka/Otpremnica**, **Prijem robe**, **Povrat od podizvođača**, **Reklamacija**, **Godina/Narudžba/Serija** i **Broj faze/podfaze/deklaracije**:
> Sve su to reference samo za čitanje na izvorni dokument koji je stvorio *Nesukladnost*.
> U standardu, ovo je jedini dokument koji može stvoriti *Nesukladnost* i automatski postavlja referencu i *Reklamaciju*.


### Annotazioni

Nel tabulatore sono contenute annotazioni generali al documento e specifiche per area. Le informazioni presenti sono:   
> **Note commerciali**: annotazioni libere sull'argomento riservate al personale dell'area commerciale.   
> **Note tecniche**: annotazioni libere sull'argomento riservate al personale dell'area tecnica.   
> **Note amministrative**: annotazioni libere sull'argomento riservate al personale dell'area amministrativa.   


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) generali per la *Non conformità*.   


### Altri costi

Nel tabulatore è possibile inserire altri costi aggiuntivi a quelli derivanti dal Costo degli articoli contestati e da quello di Gestione del documento.   
> **Costi diretti**   
> Un elenco di costi attribuibili in modo diretto al costo degli articoli contestati, al servizio dato e al costo delle lavorazioni sostenute per la gestione della *Non conformità*. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Costo diretto (Direct cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Applicazione su ...**: informazione di sola lettura che riporta su quale componente di costo viene applicato il *Valore* (se espresso in percentuale); le possibili attribuzioni sono su:   
>>> *Costo materiali*: somma della sola componente dei costi articolo degli *Oggetti difettosi* e dei *Materiali utilizzati*;   
>>> *Costo macchina*, *Costo manodopera* e *Costo lavorazioni*: somma della sola componente dei costi di lavorazione degli *Oggetti difettosi*;   
>>> *Costo industriale*: somma del *Totale materiale rilavorato* e *Totale materiale non rilavorato*.   
>>>   
>> **Percentuale / Valore**: informazione di sola lettura che riporta le modalità di calcolo da applicare sul *Valore* (*Percentuale* o *Valore fisso*).   
>> **Valore**: è la *Percentuale* che verrà applicata, o il *Valore* che verrà aggiunto, alla componente di costo specificata in *Applicazione su ...* .   
>> **Nota**: annotazioni libere.   
>>   
> **Costi generali**   
> Un elenco di costi generali, non direttamente imputabili alla *Non conformità* e che supportano l'intero processo aziendale. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Costo generale (General cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Percentuale / Valore**: informazione di sola lettura che riporta le modalità di calcolo da applicare sul *Valore* (*Percentuale* o *Valore fisso*).   
>> **Valore**: è la *Percentuale* che verrà applicata, o il *Valore* che verrà aggiunto, alla somma del *Totale materiale rilavorato* e *Totale materiale non rilavorato*.   
>> **Nota**: annotazioni libere.   
>>   
> **Altri costi**   
> Un elenco di altri costi. In questo elenco sono presenti le informazioni di:   
>> **Voce di costo** e **Descrizione voce di costo**: sono selezionabili le sole *Voci di costo* di *Tipo costo = Altro costo (Other cost)*.   
>> **Tipo costo**: informazione di sola lettura che riporta il *Tipo costo* associato alla *Voce di costo* selezionata.   
>> **Unità di misura**: è l'*Unità di misura* con la quale si desidera esprimere l'informazione della *Quantità*.   
>> **Quantità**: è la *Quantità* della *Voce di costo*.   
>> **Costo unitario**: è il *Costo unitario* della *Voce di costo*.   
>> **Costo totale**: informazione di sola lettura che riporta il prodotto tra *Quantità* e *Costo unitario*.   
>> **Nota**: annotazioni libere.   


### Valori

Nel tabulatore è possibile inserire informazioni relative a documenti di addebito e accredito della *Non conformità*, i costi sostenuti, quelli da addebitare e i costi riconosciuti dal *Fornitore/Cliente*. Le informazioni presenti sono:   
> **Divisa**, **Diretto** e **Data valuta**: è la *Divisa* del *Fornitore* o del *Cliente* con la quale vengono specificati tutti i valori del documento, il relativo coefficiente di cambio alla *Divisa* della *Società* e la *Data valuta*.   
> **Valorizzata** e **Riferimento documento di debito**: informazioni di sola lettura che riportano se la *Non conformità* è stata valorizzata e il riferimento alla *Nota di debito* generata.   
> **Riferimento documento accredito**: è il riferimento alla *Nota di accredito* ricevuta dal *Fornitore* o del *Cliente*.   
> **Note documento di accredito**: annotazioni libere sull'argomento.   
>   
> **Totale materiale non rilavorato**: informazione di sola lettura se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali*; viene proposta la sommatoria della sola componente dei costi articolo degli *Oggetti difettosi* non rilavorati e dei *Materiali utilizzati*.   
>   
> **Totale materiale rilavorato**: informazione di sola lettura se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali*; viene proposta la sommatoria della sola componente dei costi lavorazione degli *Oggetti difettosi* rilavorati.   
>   
> **Totale costi diretti**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco dei *Costi diretti* presenti nel tabulatore *Altri costi*.   
>   
> **Totale costi generali**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco dei *Costi generali* presenti nel tabulatore *Altri costi*.   
>   
> **Totale altri costi**: informazione di sola lettura, è la somma dell'applicazione dei *Valori* dell'elenco degli *Altri costi* presenti nel tabulatore *Altri costi*.   
>   
> **Costo di gestione**: è il *Costo di gestione* ripreso dal *Costo di gestione* presente nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità*; il valore può essere variato.   
>   
> **Totale non conformità**: informazione di sola lettura se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali*; in questo caso il totale viene ricalcolato come somma di: *Totale materiale non rilavorato*, *Totale materiale rilavorato*, *Totale costi diretti*, *Totale costi generali*, *Totale altri costi* e *Costo di gestione*; se non è stato richiesto il *Ricalcolo automatico totali* il valore deve essere inserito manualmente.   
>   
> **Valore da addebitare**: è il *Valore da addebitare* al *Cliente* o *Fornitore*; se nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Ricalcolo automatico totali* il valore viene proposto pari al *Totale non conformità* e successivamente può essere modificato.    
>   
> **Valore riconosciuto**: è il valore che ci viene riconosciuto dal *Cliente* o *Fornitore*; il valore può essere inserito manualmente.   


## Gestione difetti

E' l'elenco delle difettosità riscontrate da notificare al destinatario del documento e si compone delle seguenti informazioni:   
> **Sequenza**: è la *Sequenza* di visualizzazione delle difettosità; viene proposto un progressivo con la possibilità di essere variato.   
>  
> **Difetto riscontrato**
>> **Codice**: è il codice del *Difetto riscontrato*; è possibile inserire solamente i *Difetti* attivi e previsti dalla tipologia di *Non conformità* del documento.   
>> **Descrizione**: informazione di sola lettura è la descrizione del *Difetto riscontrato*.   
>> **Note**: annotazioni libere sul *Difetto riscontrato*.   
>  
> **Causa presunta**
>> **Codice**: è il codice della *Causa presunta* che ha generato la difettosità; è possibile inserire solamente le *Cause*, presunte, attive e previste dalla tipologia di *Non conformità* del documento; la *Causa presunta*, successivamente ad una analisi sugli *Oggetti difettosi*, può venire confermata o meno nella *Causa effettiva*.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Causa presunta*.   
>> **Note**: annotazioni libere sulla *Causa presunta*.   
>  
> **Fase di rilevamento**
>> **Codice**: è il codice della *Fase di rilevamento* del processo dove si è riscontrata la difettosità; è possibile inserire solamente le *Fasi di rilevamento* attive.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Fase di rilevamento*.   
>> **Note**: annotazioni libere sulla *Fase di rilevamento*.   
>  
> **Gravità**
>> **Codice**: è il codice della *Gravità* attribuita alla difettosità; è possibile inserire solamente le *Gravità* attive.   
>> **Descrizione**: informazione di sola lettura è la descrizione della *Gravità*. 
>  
> **Chiusura difetto**   
> Solamente la **Persona responsabile** o la **Funzione responsabile** possono chiudere la gestione del *Difetto* specifico.   
> La chiusura di tutti i *Difetti* non comporta automaticamente la chiusura della *Non conformità*.   
>> **Chiuso**: indica che la gestione del *Difetto* specifico è stata completata; deve essere indicato manualmente dall'operatore.   
>> All'atto della chiusura vengono automaticamente proposte: *Data chiusura*, proposta alla data odierna e con la possibilità di essere variata, *Nome* e *Persona* proposte come *Utente A.R.M.* collegato e *Dipendente* collegato all'*Utente A.R.M.* (*Nome* e *Persona* sono informazioni presenti nell'expander *Dati chiusura difetto* presente nel tabulatore *Dati difetto*).   
>> **Data chiusura**: è la data in cui la gestione del *Difetto* specifico è stata completata.   
>> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso*.   
>  
> **Riferimento azione correttiva**   
>> **Tipo**, **Anno**, e **Numero**: sono i riferimenti, in sola lettura, all'*Azione correttiva* associata alla riga *Difetto* e generata tramite il pulsante **Crea azione correttiva**.    
>   
> **Note**: annotazioni libere sulla riga del *Difetto* specifico*.   


### Dati difetto

Sono le informazioni aggiuntive alla riga *Difetto* selezionato. Le informazioni gestite sono:   
> **Causa effettiva**: è la causa effettiva che ha generato la difettosità; è possibile inserire solamente le *Cause*, effettive, attive e previste dalla tipologia di *Non conformità* del documento.   
> **Note causa effettiva**: annotazioni libere sulla *Causa effettiva*.   
> **Soluzione proposta**: è il suggerimento di soluzione tecnica/commerciale/amministrativa da adottare; è possibile inserire solamente le *Soluzioni* attive.   
> **Note soluzione proposta**: annotazioni libere sulla *Soluzione proposta*.   
> **Decisione intrapresa**: è la decisione tecnica/commerciale/amministrativa effettuata per la risoluzione del difetto; è possibile inserire solamente le *Decisioni* attive.   
> **Note decisione intrapresa**: annotazioni libere sulla *Decisione intrapresa*.   
> **Risposta Fornitore/Interna**: annotazioni libere sull'argomento. Solitamente utilizzato per registrare un'eventuale risposta data dal destinatario della *Non conformità* relativa al *Difetto*.   
> **Dati chiusura difetto**: expander dove è possibile inserire le informazioni di chiusura del *Difetto*:   
> **Nome**: è l'*Utente A.R.M.* che ha chiuso il *Difetto*. L'informazione è di sola lettura.   
> **Persona**: è il *Dipendente* che ha chiuso il *Difetto*. L'informazione è di sola lettura.   
> **Funzione**: è la *Funzione aziendale* che ha chiuso il *Difetto*.   


### Oggetti reclamati   

E' l'elenco degli *Oggetti reclamati* associabili al *Difetto riscontrato* selezionato e si compone delle seguenti informazioni:   
> **Oggetto**   
>> **Bar code**: può essere utilizzato per aggiungere o sostituire l'Articolo, Lotto, Numero seriale e Unità di carico.   
>> Per tutte le informazioni su come codificare i barcode consultare la pagina relativa al [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Classe**: è la *Classe articolo* reclamato.   
>> **Codice articolo**: è il codice dell'*Articolo* reclamato.   
>> **Descrizione articolo**: è la descrizione dell'*Articolo* reclamato.   
>> **Variante**: è la codice variante dell'*Articolo* reclamato.   
>> **Lotto**: è il codice del *Lotto* interno dell'*Articolo* reclamato.   
>> **Unità di carico**: è l'*Unità di carico* di origine che conteneva l'Articolo* reclamato.   
>> L'inserimento di una *Unità di carico* comporta l'automatico inserimento di tutte le righe di dettaglio *Articolo* presenti in essa.   
>> Se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stato richiesto il *Raggruppamento dati U.D.C.*, le righe con *Articoli* uguali verranno riportate in un'unica riga con le quantità sommate.   
>> **Numero seriale**:  è il *Numero seriale* dell'*Articolo* reclamato.   
>> **Unità di carico da rendere**: è l'*Unità di carico* che contiene l'Articolo* reclamato da rendere.   
>  
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* dell'*Articolo* reclamato.   
>> **Ricevuta**: è la quantità di *Articolo* ricevuta; il valore deve essere inserito manualmente.   
>> **Contestata**: è la quantità di *Articolo* che si vuole contestare; il valore deve essere inserito manualmente.   
>> **Non rilavorata**: è la quantità di *Articolo* contestata e non rilavorata; il valore deve essere inserito manualmente.   
>> **Rilavorata**: è la quantità di *Articolo* contestata e rilavorata; il valore deve essere inserito manualmente.   
>> **Resa**: è la quantità di *Articolo* resa; il valore deve essere inserito manualmente.   
>  
> **Quantità alternativa**   
>> Le colonne di questo gruppo sono visualizzate solamente se, nei *Parametri Reclami e Non conformità*, per l'anno data del documento, sessione *Non conformità* è stata richiesta la *Proposta U.M. alternativa*.   
>> **Unità di misura**: è l'*Unità di misura alternativa* dell'*Articolo* reclamato.   
>> **Unità di misura prezzo**: indica se il *Costo unitario del materiale* è riferito all'*Unità di misura alternativa*.   
>> **Ricevuta**: è la quantità di *Articolo* ricevuta espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Contestata**: è la quantità di *Articolo* che si vuole contestare espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Non rilavorata**: è la quantità di *Articolo* contestata e non rilavorata espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Rilavorata**: è la quantità di *Articolo* contestata e rilavorata espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>> **Resa**: è la quantità di *Articolo* resa espressa nell'*Unità di misura alternativa*; il valore deve essere inserito manualmente.   
>
> **Costo unitario**   
>> **Materiale**: è il *Costo unitario* dell'*Articolo*; il valore deve essere inserito manualmente.   
>> **Lavorazione**: è il *Costo unitario* della *Lavorazione*; viene proposto pari alla tariffa associata ai *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*; il valore può essere variato.   
>  
> **Ore**   
>> **Lavorate**: sono le ore e i minuti lavorati per la riparazione dell'*Oggetto* non conforme; il valore deve essere inserito manualmente.   

#### Dati oggetto

Sono le informazioni aggiuntive alla riga dell'*Oggetto reclamato* selezionato. Le informazioni gestite sono:   
> **Progetto**: è il riferimento al *Progetto* del *Difetto* specifico*.   
> **Note articolo**: annotazioni libere sull'*Articolo* del *Difetto* specifico*.   
> **Note lotto**: annotazioni libere sul *Lotto* del *Difetto* specifico*.   
> **Note unità di carico**: annotazioni libere sulla *Unità di carico* riga del *Difetto* specifico*.   
> **Note**: annotazioni libere sulla riga del *Difetto* specifico*.   
> **Centro di lavoro**: è il *Centro di lavoro* con il quale vengono effettuate le lavorazioni di riparazione dell'*Oggetto* non conforme.   
> La scelta del *Centro di lavoro* proporrà, nel *Costo unitario lavorazione*, la tariffa da applicare al tempo dedicato alla lavorazione.   
> La tariffa proposta è la somma delle tariffe dei *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*.   
> **Totale materiale non rilavorato**: informazione di sola lettura, viene proposto il valore del prodotto tra la *Quantità non rilavorata" e il *Costo unitario materiale* dell'*Oggetto difettoso* selezionato.   
> **Totale materiale rilavorato**: informazione di sola lettura, viene proposto il valore del prodotto tra la *Quantità rilavorata" e il *Costo unitario lavorazione* sommato al prodotto tra le *Ore lavorate* e la somme delle tariffe associate ai *Centri di costo* associati a *Macchina* e *Gruppo manodopera* del *Centro di lavoro*.   
> **Totale difetto**: informazione di sola lettura, è la somma di *Totale materiale non rilavorato* e *Totale materiale rilavorato*.   


#### Extra data   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Oggetto reclamato* selezionato.   


#### Documenti allegati   

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Oggetto reclamato* selezionato.   


### Materiali utilizzati   

In questo elenco è possibile indicare i materiali che sono stati utilizzati per porre rimedio al *Difetto* selezionato.   
L'elenco si compone delle seguenti informazioni:   
>   
> **Articolo**   
>> **Classe**: è la *Classe articolo*.   
>> **Codice**: è il codice dell'*Articolo*.   
>> **Descrizione**: è la descrizione dell'*Articolo*.   
>> **Variante**: è la codice variante dell'*Articolo*.   
>> **Lotto**: è il codice del lotto interno utilizzato.   
>> **Numero seriale**:  è il numero seriale utilizzato.   
>   
> **Quantità**   
>> **Unità di misura**: informazione di sola lettura è l'*Unità di misura* dell'*Articolo*.   
>> **Quantità consumata**: è la quantità di *Articolo* utilizzata per porre rimedio al *Difetto* selezionato.   
>   
> **Valore**   
>> **Costo unitario**: è il costo unitario dell'*Articolo*; il valore deve essere inserito manualmente.   
>> **Costo totale**:  viene proposto come rapporto tra *Quantità consumata* e *Costo unitario*; il costo può essere variato.   
>
> **Note**: annotazioni libere.   


### Soggetti coinvolti   

Nel tabulatore sono contenute le indicazioni sulle *Funzioni aziendali* e/o *Dipendenti* che prenderanno parte alla gestione del *Difetto" selezionato.   
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la *Sequenza* di visualizzazione dei "Soggetti coinvolti*; viene proposto un progressivo con la possibilità di essere variato.   
>
> **Funzione aziendale**   
>> **Codice**: è il codice della *Funziona aziendale* coinvolta.   
>> **Descrizione**: è la descrizione della *Funziona aziendale* coinvolta.   
>   
> **Dipendente**   
>> **Codice**: è il codice del *Dipendente* coinvolto.   
>> **Descrizione**: è il cognome e nome del *Dipendente* coinvolto.   
>   
> **Gestione coinvolgimento**   
>> **Descrizione soggetto**: annotazione libera nel caso in cui, il soggetto coinvolto, non sia *Funziona aziendale* o *Dipendente*.   
>> **Motivo del coinvolgimento**: annotazioni libere sull'argomento   
>> **Data scadenza**: è la data entro la quale il soggetto coinvolto deve completare le attività inerenti al motivo del suo coinvolgimento.   
>> **Risposta**: annotazioni libere sull'argomento.   
>> **Chiuso**: indica che il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* della *Non conformità* o la *Funzione aziendale* o il *Dipendente* coinvolto possono chiudere il coinvolgimento.   
>> All'atto della chiusura viene automaticamente proposta la *Data chiusura*, proposta alla data odierna e può essere variata.   
>> **Data chiusura**: è la data in cui il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* della *Non conformità* o la *Funzione aziendale* o il *Dipendente* coinvolto possono inserire o variare questa data.   
>> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso*.   
>
> **Nota**: annotazioni libere.   


### Extra data   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Difetto* selezionato.   


### Documenti allegati   

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Difetto* selezionato.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   