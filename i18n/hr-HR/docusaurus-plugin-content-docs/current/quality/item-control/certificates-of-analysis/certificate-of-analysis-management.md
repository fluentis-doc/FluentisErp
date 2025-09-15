---
title: Certifikati s analize
sidebar_position: 2
---

Upravljanje se može pronaći na putanji **Kvaliteta > Kontrola artikla > Certifikati s analize > Novi certifikat s analize** ili se može izvršiti putem **Pretraživanja certifikata analize**.   


:::important Čemu služi
**Certifikat s analize** potvrđuje da određeni proizvod udovoljava karakteristikama navedenim u Tehničkim uputstvima ili u specifikacijama Kupca. Također potvrđuje da je proizvod testiran i udovoljava ograničenjima navedenima u Kontrolnim planovima.   
Potvrde mogu biti generičke ili prilagođene. Ako su prilagođene, potrebno je unijeti **Kupca**.  

Sljedeća izvješća dostupna su standardno:
> **Potvrda o analizi**: Oobrazac s popisom *Proizvoda* s detaljima o *izvršenim ispitivanjima*, *otkrivenim vrijednostima* i dobivenim *rezultatima*.
> **Izjava o sukladnosti**: obrazac kojim se potvrđuje i jamči sukladnost *Proizvoda*.   
:::


## Tipke za upravljanje


### ![](/img/neutral/common/save.png) Spremi

Pritiskom na ovu tipku spremaju se svi promijenjeni podaci u prikazanom *Certifikatu s analize*.   


### ![](/img/neutral/common/import.png) Uvozne kontrole

Pritiskom na ovaj gumb pretražuju se *Odobrene kontrole artikala* koje će se povezati s prikazanim *Certifikatom s analize*.
Pojavljuje se alat za upravljanje za pretraživanje i odabir *Kontrola artikala* za uvoz u *Certifikat s analize*.
Navedene su samo *Odobrene kontrole artikala* koje zadovoljavaju potreban filter podataka.
Pritiskom na gumb *Odaberi* dupliciraju se odabrane *Kontrole artikala* i prikazuju se u prikazanom *Certifikatu s analize*.  


### ![](/img/neutral/common/update.png) Ažuriraj

Pritiskom na ovu tipku ažuriraju se sve informacije u prikazanom *Certifikatu s analize*.   



## Upravljani podaci


### Podaci zaglavlja dokumenta
Upravljane informacije su:
> **Vrsta certifikata**: ovo je vrsta dokumenta (obavezni podatak).
> Prilikom unosa novog *Certifikata s analize*, prikazuje se *Vrsta certifikata* naznačena u proširenju *Certifikati s analize* na kartici *Općenito* u *Parametrima kontrole stavki*.
>
> **Godina/Broj/Datum**: To su *Godina*, *Broj* i *Datum* *Certifikata s analize* (obavezni podaci).
> Prilikom unosa novog *Certifikata s analize*:
> - *Datum* se postavlja na današnji datum;
> - *Godina* i *Broj* se postavljaju na temelju *Datuma* i *Numeriranja* povezanih s *Vrstom potvrde*.  
>
> **Kupac**: naziv tvrtke *Kupca* kojem će dokument biti poslan.


### Zaglavlje 
Upravljane informacije su:
> **Voditelj**: ovo je *Zaposlenik* odgovoran za *Certifikate s analize*. 
> Prilikom ručnog unosa nove *Certifikata s analize*, prikazuje se *Voditelj* naznačen u proširenju *Certifikati s analize* na kartici *Općenito* u *Parametrima kontrole stavki*. 
>
> **Vanjski referent**: ovo je *Korporativna funkcija* odgovorna za *Korektivnu radnju*.
> **Napomena o kupcu**: slobodne bilješke.
> **Naša referenca**: slobodne bilješke o referencama na interne dokumente.
> **Vaša referenca**: slobodne bilješke o referencama na vanjske dokumente kupaca.
> **Opis**: slobodne bilješke.
>
> **Dovršen/Datum**: proširenje u koje se možete umetnuti:   
>
>> **Dovršen**: označava da je *Certifikat s analize* *Završen*.
>> Nakon završetka, automatski se prikazuje sljedeće: *Datum završetka* (datum završetka), predloženo na današnji datum i može se promijeniti, *Dovršio* povezan i *Zaposlenik* povezan s *A.R.M. korisnikom* koji se prijavio.
>> **Obaviješten/Na datum**: označava da je *Certifikat s analize* *Obaviješten* kupcu na navedeni datum.
>> Nakon obavijesti, automatski se prikazuje sljedeće: *Datum završetka* (datum obavijesti), predloženo na današnji datum i može se promijeniti.
>
> **Audit Trail**: Proširenje samo za čitanje gdje su vidljive informacije o korisnicima koji rade dokumente.  


#### Bilješke
Upravljane informacije su:   
> **Unutarnja napomena**: bilješke u slobodnom obliku.
> **Za ispis**: označava jesu li *Unutarnje napomene* ispisive u izvješćima *Certifikata s analize* i *Izjava o sukladnosti*.
> **Bilješke kontrolnog plana**: bilješke u slobodnom obliku u vezi s referencama na korištene planove kontrole.
> **Za ispis**: označava jesu li *Bilješke kontrolnom planu* ispisive u izvješćima *Certifikata s analize* i *Izjava o sukladnosti*.
> **Ostale bilješke**: bilješke u slobodnom obliku.   


#### Extra data
Moguće je umetnuti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *Certifikat s analize*.   


### Controlli e valori rilevati 
Le informazioni gestite sono:   
> **Articolo**   
>> **Numero**: è il numero di riga del documento.   
>> **Tipo riga**: è il tipo riga del documento. Nella versione è gestito solamente il *Tipo riga: 1 - Articolo codificato*.   
>> **Classe**: è la classe dell'*Articolo* della riga documento controllata.   
>> **Codice articolo**: è il codice dell'*Articolo* della riga documento controllata.   
>> **Descrizione articolo**: è la descrizione dell'*Articolo* della riga documento controllata.   
>> **Unità di carico**: .   
>> **Lotto**: .   
>> **Numero seriale**: .   
>> **Unità di misura**: è l'*Unità di misura* della *Quantità documento* della riga documento controllata.   
>> **Quantità**: è la *Quantità documento* della riga documento controllata.   
>> **Unità di misura alternativa**: è l'*Unità di misura alternativa* della *Quantità documento* della riga documento controllata.   
>> **Quantità alternativa**: è la *Quantità alternativa documento* della riga documento controllata.   
>
> **Controlli Articolo**   
>> **Tipo**: e il codice del *Tipo controllo articolo*.   
>> **Descrizione tipo**: è la descrizione del *Tipo controllo articolo*. L'informazione è di sola lettura.   
>> **Numero**: e il numero del *Controllo articolo*. L'informazione è di sola lettura.   
>> **Data**: e la data in cui è stato inserito il *Controllo articolo*. L'informazione è di sola lettura.   


#### Valori rilevati
Contiene l'elenco delle *Prove* per l'*Articolo*.   
Le informazioni vengono ereditate dalle *Prove dei *Controlli articolo* importati e sono modificabili con le stesse logiche utilizzate nella gestione dei [*Controlli articolo*](/docs/quality/item-control/items-control/item-control-management).
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di attuazione della *Prove*.   
> **Tipo prova**: è il codice della *Prova*.   
> **Descrizione tipo prova**:  è la descrizione della *Prova*. L'informazione è di sola lettura.   
> **Unità di misura valori rilevati**: è l'*Unità di misura* con cui si esprimono il *Valore nominale*, i *Limiti minimo e massimo* se espressi in valore e non in percentuale e i *Valori rilevati*.   
> **Tipo valore**: è il *Tipo valore* con cui esprimere il *Valore nominale*; i *Tipi valore* possibili sono: *Numerico*, *Si/No* o *Testo*.   
> **Tipo limite**: abilitato se il *Tipo valore* è *Numerico*, è il *Tipo limite* che piloterà l'abilitazione dei *Limiti* e dei valori di *Tolleranza*.   
> **Valore nominale**: è il valore teorico atteso della *Prova*.   
> **Limite minimo**: limite minimo consentito rispetto al *Valore nominale*.   
> **L.min.(toll-)**: è il limite di tolleranza negativa sul limite minimo.   
> **L.min.(toll+)**: è il limite di tolleranza positiva sul limite minimo.   
> **Limite massimo**: limite massimo consentito rispetto  al *Valore nominale*.   
> **L.max.(toll-)**: è il limite di tolleranza negativa sul limite massimo.   
> **L.max.(toll+)**: è il limite di tolleranza positiva sul limite massimo.   
> **%**: indica se il *Limite minimo* e il *Limite massimo* sono espressi in percentuale.   
> **Valore rilevato**: è il valore puntuale rilevato della *Prova* che ne determinerà l'*Esito*.   
> All'inserimento del *Valore rilevato*:   
> - in *Rilevato da* viene proposto il *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Rilevato da utente* viene proposto l'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Esito* viene proposto il risultato della *Prova* e modificabile successivamente.   
> - in *Data esito prova* viene proposta la data odierna e modificabile successivamente.   
>
> **Media valori rilevati**: è la media dei valori rilevati nella *Rilevazione multipla valori* della *Prova*.   
> **Rilevato da**: è il *Dipendente* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari al *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Rilevato da utente**: è l'*Utente A.R.M.* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Esito**: è il risultato positivo o negativo della *Prova*.   
> All'inserimento dell'*Esito* in *Data esito prova* viene proposta la data odierna e modificabile successivamente.   
> All'inserimento del *Valore rilevato* o della *Media valori rilevati* questa informazione viene proposta sulla base del *Tipo valore*, *Tipo limite*, *Valore nominale*, *Limiti* e *Tolleranze* inserite.   
> **Stampabile**: indica che la *Prova* è stampabile.   
> **Approvato**: indica che i valori e l'*Esito* attribuito alla *Prova* sono stati *Approvati*.   
> All'atto dell'approvazione la *Data approvazione esito* viene automaticamente proposta pari alla data odierna e può essere variata, tutte le informazioni della *Prova* non possono essere più modificate.   


***Valori multipli rilevati***   

Contiene l'elenco delle rilevazioni fatte per una singola *Prova*.   
Anch'esse vengono ereditate dalle *Prove dei *Controlli articolo* importati e sono modificabili con le stesse logiche utilizzate nella gestione dei [*Controlli articolo*](/docs/quality/item-control/items-control/item-control-management).
L'elenco si compone delle seguenti informazioni:   
> **Sequenza**: è la sequenza di attuazione della rilevazione.   
> **Posizione**: annotazioni libere relative alla posizione della rilevazione.   
> **Valore rilevato**: è il valore rilevato dall'operatore.   
> Se il *Valore rilevato* è di tipo *Numerico*, la media dei *Valori rilevati*, inseriti in questo elenco per la *Prova* selezionata, verrà inserita nella colonna *Media valori rilevati* della *Prova* selezionata che ne determinerà l'*Esito*.   
> All'inserimento del *Valore rilevato*:   
> - in *Rilevato da* viene proposto il *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Rilevato da utente* viene proposto l'*Utente A.R.M.* che ha effettuato l'accesso;   
> - in *Rilevato il* viene proposta la data odierna.   
>
> **Strumento di misura utilizzato**: è il rifermento allo *Strumento di misura* utilizzato dall'operatore per acquisire il *Valore rilevato*.   
> **Rilevato da**: è il *Dipendente* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari al *Dipendente* associato all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Rilevato da utente**: è l'*Utente A.R.M.* che ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari all'*Utente A.R.M.* che ha effettuato l'accesso.   
> **Rilevato il**: è la data in cui l'operatore ha inserito il *Valore rilevato*.   
> All'inserimento del *Valore rilevato* questa informazione viene proposta pari alla data odierna.   
> **Note**: annotazioni libere.   
> **Descrizione Strumento di misura**: è la descrizione dello *Strumento di misura* utilizzato.   


***Dati di dettaglio valori rilevati***   

Contiene altre informazioni associate alla *Prova* selezionata.   
Le informazioni vengono ereditate dalle *Prove dei *Controlli articolo* importati e sono modificabili con le stesse logiche utilizzate nella gestione dei [*Controlli articolo*](/docs/quality/item-control/items-control/item-control-management).   
Le informazioni gestite sono:   
> **Prova interna**: indica se la *Prova* viene rilevata internamente o presso un laboratorio esterno.   
> **Data invio**: è la data in cui si è inviato il materiale necessario ad effettuare la *Prova* presso il *Laboratorio esterno*. L'informazione è di sola lettura se è indicata la *Prova interna*.   
> **Laboratorio esterno**: è la ragione sociale del *Fornitore* che effettuerà la prova. L'informazione è di sola lettura se è indicata la *Prova interna*.   
> **Tipo prova**: è il codice e la descrizione della *Prova*.   
> **Categoria frequenza**: annotazioni libere relative alla frequenza di campionatura.   
> **Numero rilevazioni**: è il numero di rilevazioni valori minime suggerite da effettuare.   
> **Strumento di misura utilizzato**: è lo *Strumento di misura* utilizzato per rilevare il valore puntuale della *Prova*.   
> **Data inizio/Data fine**: sono le date di inizio e di fine della *Prova*.  
> **Data esito prova**: è la data di attribuzione dell'*Esito*.   
> All'inserimento dell'*Esito* questa informazione viene proposta pari alla data odierna e modificabile successivamente.   
> **Descrizione su risultato**: annotazioni libere sull'argomento.   
> **Data approvazione**: è la data in cui è stata effettuata l'*Approvazione* della *Prova*.   
> All'atto dell'inserimento della data viene automaticamente impostato il flag *Approvato*.   
> **Descrizione approvazione**: annotazioni libere sull'argomento.   
> **Note prova**: annotazioni libere sull'argomento.   
> **Altre note**: annotazioni libere.   


***Altri dati prove effettuate***   

E' possibile visualizzare degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni riga *Valori rilevati* della riga *Articolo/Controlli articolo*.   
Vengono ereditati dagli *Attributi prove effettuate* associati alle *Prove* dei *Controlli articolo*.   


***Attributi articolo***   

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni riga *Valori rilevati* della riga *Articolo/Controlli articolo*.   


***Documenti allegati***   

In questo elenco è possibile inserire e consultare eventuali allegati associati alla riga *Valori rilevati* della riga *Articolo/Controlli articolo*.   


#### Dati di dettaglio controlli
Le informazioni gestite sono:   
> **Riferimento Piano di controllo**: è il riferimento al *Piano di controllo* utilizzato per le prove ed i valori rilevati. L'informazione è di sola lettura.   
> **Descrizione controllo**: è la descrizione del *Controllo articoli* collegato. L'informazione è di sola lettura   
> **Note controllo**: annotazioni libere sull'argomento.   
> **Note articolo-cliente**: annotazioni libere sull'argomento.   
> **Riferimento Scheda tecnica**: è il riferimento alla *Scheda tecnica* collegata al *Piano di controllo* utilizzato. L'informazione è di sola lettura   
> **Documento di origine**: è il riferimento del *Tipo documento di origine* sul quale si sono effettuati i *Controlli articoli*. L'informazione è di sola lettura   
> **Riferimento documento di origine**: è il riferimento del *Documento di origine* sul quale si sono effettuati i *Controlli articoli*. L'informazione è di sola lettura.   
> **Note**: annotazioni libere.   


#### Altri dati controllo
E' possibile visualizzare degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni riga *Articolo/Controlli articolo*.   
Vengono ereditati dagli *Attributi controlli* associati ai *Controlli articolo*.   


#### Attributi articolo
E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per ogni riga *Articolo/Controlli articolo*.   


#### Documenti allegati
In questo elenco è possibile inserire e consultare eventuali allegati associati alla riga *Articolo/Controlli articolo*.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   