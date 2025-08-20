---
title: Reklamacije - Upravljanje nedostacima
sidebar_position: 4
---


## Upravljanje nedostacima

Ovo je popis nedostataka koje je pronašao pošiljatelj dokumenta i sastoji se od sljedećih informacija:  
> **Slijed**: ovo je *Slijed* za prikaz nedostataka; predlaže se progresivni slijed s mogućnošću promjene.   
>  
> **Pronađen nedostatak**
>> **Šifra**: ovo je šifra *Pronađenog nedostatka*; moguće je unijeti samo *Nedostatke* koji su aktivni i predviđeni vrstom *Reklamacije* dokumenta.   
>> **Opis**: informacije samo za čitanje koje opisuju *Pronađeni nedostatak*.
>> **Napomene**: slobodno napisani komentari o *Pronađenom nedostatku*.  
>  
> **Pretpostavljeni uzrok**
>> **Šifra**: ovo je šifra *Pretpostavljenog uzroka* koji je generirao nedostatak; moguće je unijeti samo *Uzroke*, pretpostavljene, aktivne i predviđene vrstom *Reklamacije* dokumenta; *Pretpostavljeni uzrok*, nakon analize *Neispravnih predmeta*, može se potvrditi ili ne u *Stvarnom uzroku*.  
>> **Opis**: informacije samo za čitanje koje opisuju *Pretpostavljeni uzrok*.
> **Napomene**: napomene u slobodnom obliku o *Pretpostavljenom uzroku*.  
>  
> **Faza detekcije**
>> **Šifra**: je šifra *Faze detekcije* procesa u kojem je pronađen kvar; moguće je unijeti samo aktivne *Faze detekcije*.
>> **Opis**: informacije samo za čitanje koje opisuju *Fazu otkrivanja*.
>> **Napomene**: napomene u slobodnom obliku o *Fazi otkrivanja*.  
>  
> **Količina**
> Sažetak informacija koristi se isključivo ako se ne žele detaljno navesti *Količine* u odjeljku *Reklamiranim predmetima*. Ove *Količine* se ne uzimaju u obzir ni u kakvim izračunima**.   
>> **Prodano**: ovo je količina *artikala* prodanih pošiljatelju *reklamacije*.   
>> **Osporeno**: količina *artikala* koje je pošiljatelj *reklamacije* osporio.  
>> **Povrat**: predstavlja količinu *artikala* koje je vratio pošiljatelj *reklamacije*.  
>   
> **Referenca na korektivne radnje**  
>> **Vrsta**, **Godina** i **Broj**: ovo su reference samo za čitanje na *Korektivnu radnju* povezanu s retkom '*Nedostatak*' i generiranu pomoću gumba **Stvori korektivnu radnju**. 
>   
> **Pod jamstvom**: ručna naznaka je li *Pronađeni nedostatak* pokriven jamstvom. Ova se informacija ne uzima u obzir u izračunima.  
> **Zatvoreno**: označava da je upravljanje *Kvarom* završeno; operater ovo mora ručno naznačiti.   
> Prilikom zatvaranja, automatski se predlažu sljedeći podaci: *Datum zatvaranja*, predložen kao današnji datum s mogućnošću promjene, *Ime* i *Osoba* predloženi kao *A.R.M. korisnik* povezani i *Zaposlenik* povezan s *A.R.M. korisnikom* (*Datum zatvaranja*, *Ime* i *Osoba* su informacije prisutne na kartici *Zadani podaci*).  
> Zatvaranje svih *Nedostataka* ne zatvara automatski *Zahtjev*.  
> **Napomena**: slobodne bilješke.   


### Podaci o nedostacima

Ovo su dodatne informacije za odabrani redak *Nedostatak*. Upravljane informacije su:   
> **Stupanj ozbiljnosti** je *Stupanj ozbiljnosti* pripisan kvaru; mogu se unijeti samo aktivni *Stupnji ozbiljnosti*.   
> **Stvarni uzrok**: ovo je stvarni uzrok koji je generirao nedostatak; moguće je unijeti samo *Uzroke*, učinkovite, aktivne i predviđene vrstom *Reklamacije* dokumenta.  
> **Bilješke o stvarnom uzroku**: slobodne bilješke o *stvarnom uzroku*.   
> **Predloženo rješenje**: ovo je predloženo tehničko/komercijalno/administrativno rješenje koje treba usvojiti; mogu se unijeti samo aktivna *Rješenja*.   
> **Bilješke o predloženom rješenju**: bilješke o *Predloženom rješenju*.   
> **Donesena odluka**: Ovo je tehnička/komercijalna/administrativna odluka donesena za rješavanje nedostatka; mogu se unijeti samo aktivne *Odluke*.   
> **Bilješke o donesenoj odluci**: bilješke o *Donesenoj odluci*.   
> **Komercijalna odluka**: Ovo je komercijalna/administrativna odluka donesena za rješavanje nedostatka; mogu se unijeti samo aktivne *Odluke*.   
> **Bilješke o komercijalnom rješenju**: bilješke o *Komercijalnom rješenju*.   
> **Datum zatvaranja**: ovo je datum na koji je dovršeno upravljanje određenim *Nedostatkom*.   
> Prilikom unosa datuma, automatski se postavlja oznaka *Zatvoreno* u odabranom retku *Nedostatak*.  
> **Ime**: Ovo je *A.R.M. korisnik* koji je zatvorio *Nedostatak*. Ove informacije su samo za čitanje.   
> **Osoba**: Ovo je *Zaposlenik* koji je zatvorio *Nedostatak*. Ove informacije su samo za čitanje.   
> **Funkcija**: je *Funkcija tvrtke* koja je zatvorila *Nedostatak*.   


### Predmeti reklamacije

To je popis *Reklamiranih artikala/predmeta* koji se mogu povezati s odabranim *Pronađenim nedostatkom* i sastoji se od sljedećih informacija:  
> **Predmet**   
>> **Bar kod**: može se koristiti za dodavanje ili zamjenu artikla, serije, serijskog broja i jedinice utovara.   
>> Za sve informacije o kodiranju barkodova pogledati stranicu [Barkode brojač].(/docs/configurations/tables/general-settings/barcode-tokenizer).   
>> **Klasa**: ovo je *Klasa artikla* za koju se traži reklamacija.   
>> **Šifra artikla**: ovo je šifra *artikla* za koji se traži reklamacija.  
>> **Opis artikla**: ovo je opis *artikla* za koji se traži reklamacija.   
>> **Varijanta**: ovo je šifra varijante *artikla* za koji se traži reklamacija.   
>> **Lot**: je interna šifra *Lota* zatraženog *Artikla*. 
>> **Utovarna jedinica**: Ovo je originalna *Utovarna jedinica* koja je sadržavala zatraženi *artikl*.   
>> Umetanjem *utovarne jedinice* automatski se umeću svi retci s detaljima *artikla* koji se u njoj nalaze.   
>> Ako je u *Parametrima pritužbi i neusklađenosti*, za datum dokumenta po godini, u odjelu *Rewklamacije*, zatraženo *UDC grupiranje podataka*, retci s jednakim *Artiklima* bit će prikazani u jednom retku s dodanim količinama.   
>> **Serijski broj**: Ovo je *serijski broj* *artikla* za koji se traži reklamacija.   
>  
> **Količina**   
>> **Mjerna jedinica**: to je *Mjerna jedinica* zatraženog *artikla*, informacije samo za čitanje.  
>> **Prodano**: ovo je količina *Artikla* prodanog pošiljatelju *Reklamacije*; ovu vrijednost potrebno je unijeti ručno. 
>> **Osporeno**: ovo je količina *Artikla* koju je pošiljatelj *Reklamacije* osporio; vrijednost se mora unijeti ručno.  
>> **Povrat**: ovo je količina *Artikla* koju je vratio pošiljatelj *Reklamacije*; vrijednost se mora unijeti ručno.   
>> **Prerađeno**: ovo je količina *Artikla* koju je preradio podnositelj *Reklamacije*; ovu vrijednost potrebno je unijeti ručno.  
>> **Prihvaćeno**: ovo je količina prihvaćenog *Artikla*; ovu vrijednost potrebno je unijeti ručno.  
>
> **Vrijednost**
>> **Reklamirano**: ovo je vrijednost koju je zatražio pošiljatelj *Reklamacije*; ovu vrijednost treba unijeti ručno.
>> **Prihvaćeno**: ovo je prihvaćena vrijednost; ovu vrijednost treba unijeti ručno.
>
> **Podaci o povratu**   
>> **Ovlaštenje za povrat**: označava da se odobrava povrat vraćenog *Artikla* za *Prihvaćenu količinu*.
>> **Očekivani datum povrata**: ovo je očekivani datum povrata vraćenog *Artikla*.   
>> **Lot**: je povratni *lot* vraćenog *Artikla*.   
>> **Serijski broj**: ovo je *serijski broj* vraćenog *Artikla*.   
>> **Utovarna jedinica**: je *Utovarna jedinica* vraćenog *Artikla*.   


#### Podaci o predmetu

Ovo su dodatne informacije za odabrani redak *Reklamiranog artikla/predmeta*. Upravljane informacije su:   
> **Projekt**: ovo je referenca na *projekt* određenog *nedostatka*.   
> **Napomene o artiklu**: napomene o *artiklu* određenog *nedostatka*.   
> **Napomene o lotu**: napomene o *lotu* određenog *nedostatka*.
> **Napomene o utovarnoj jedinici**: napomene za *Utovarna jedinica* određenog *nedostatka*.
> **Napomene**: napomene u slobodnom obliku na retku određenog *nedostatka*.  

> **Otpremnica kupcu**: je referenca na *prodajni dokument* (*Vrsta*, *Godina* i *Broj*), kojim se pretpostavlja da je sporna roba ili usluga prodana. 
> **Prodajni račun**: je referenca na *Prodajni račun* (*Vrsta*, *Godina* i *Broj*) za koji se pretpostavlja da je sporna roba ili usluga fakturirana.   
> **Potvrda o primitku robe**: je referenca na *Potvrdu o primitku robe* (*Vrsta*, *Godina* i *Broj*), s kojom pošiljatelj vraća spornu robu.   
> **Dokument nabave**: je referenca na *prodajni dokument* (*Vrsta*, *Godina* i *Broj*), kojim se pretpostavlja da je sporna roba ili usluga prodana.   


#### Dodatni podaci

Mogu se unijeti [Dodatni podaci](/docs/configurations/utility/extra-data/extradata/new-extradata) za odabrani *Reklamirani artikl/predmet*.  


### Povezani dokumenti

U ovom pregledu mogu se umetnuti i pregledati svi dokumenti priloženi odabranom *Reklamiranom artiklu*.   


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
>> Solamente la *Funzione o Persona responsabile* del *Reclamo* o la *Funzione aziendale* o il *Dipendente* coinvolto possono chiudere il coinvolgimento.   
>> All'atto della chiusura viene automaticamente proposta la *Data chiusura*, proposta alla data odierna e può essere variata.   
>> **Data chiusura**: è la data in cui il coinvolgimento del soggetto è stato completato.   
>> Solamente la *Funzione o Persona responsabile* del *Reclamo* o la *Funzione aziendale* o il *Dipendente* coinvolto possono inserire o variare questa data.   
>> All'atto dell'inserimento della data viene automaticamente impostato il flag *Chiuso*.   
>
> **Nota**: annotazioni libere.   


### Extra data

E' possibile inserire degli [Extra Data](/docs/configurations/utility/extra-data/extradata/new-extradata) per *Difetto* selezionato.   


### Documenti allegati

In questo elenco è possibile inserire e consultare eventuali documenti allegati al *Difetto* selezionato.   


Per tutto quanto non dettagliato in questo documento sul funzionamento comune delle form fare riferimento al seguente link [Funzionalità, pulsanti e campi comuni](/docs/guide/common).   