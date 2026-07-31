---
title: Dokumenti internog porekla
sidebar_position: 2
---

Upravljanje se nalazi na putanji **Kvalitet > Dokumenti internog porekla > Novi Dokument internog porekla**, ili mu se može pristupiti iz **Pretrage Dokumenata internog porekla**.

:::important Čemu služi
Upravljanje Dokumentima internog porekla omogućava: katalogizaciju, upravljanje izdanjima/revizijama i njihovu distribuciju (u štampanom i elektronskom obliku) funkcijama preduzeća koje imaju potrebu za pregledom tih dokumenata.

Neki primeri Dokumenata internog porekla koji se mogu katalogizovati:

> *Priručnik kvaliteta*
> *Politika upravljanja*
> *Organizaciona šema*
> *Dijagram procesa*
> *Operativna uputstva*
> *Servisni karton*

Informacije o mestu čuvanja originala i mogućnost prilaganja njihovih elektronskih kopija omogućavaju njihovo brzo pronalaženje i pregled jednim klikom miša.
Standardno su dostupni sledeći izveštaji:

> **Naslovna strana**: kartica koja za svaki *Dokument* prikazuje listu izvršenih *Revizija* i *Listu distribucije*.
> **Interni dokument**: pregled dokumenta priloženog na kartici *Prilog* i kreiranog na kartici *Kreiranje dokumenta*.
> **Dokumenti priloženi dokumentaciji**: pregled dokumenata priloženih u *Upravljanju dokumentacijom*.
:::

## Dugmad za upravljanje

### ![](/img/neutral/common/save.png) Sačuvaj

Pritiskom na ovo dugme čuvaju se sve izmenjene informacije prikazanog *Dokumenta internog porekla*.

### ![](/img/neutral/common/duplicate.png) Dupliciraj

Dugme je dostupno samo članovima *Funkcija preduzeća* zaduženim za *proveru/odobravanje* i *izradu/izdavanje*.
Moguće je duplirati prikazani *Dokument* u novi *Dokument*.
Dovoljno je pritisnuti dugme **Dupliciraj**. Prikazaće se zahtev za unos:

> **Kategorija**: *Šifra Kategorije Dokumenta internog porekla* novog *Dokumenta* (obavezan podatak).
> **Šifra**: *Šifra* novog *Dokumenta* (obavezan podatak).
> **Naslov**: *Naslov* novog *Dokumenta* (obavezan podatak).

*Kategorija* i *Naslov* preuzimaju se iz izvornog dokumenta, dok se *Šifra* predlaže ako je uz *Kategoriju* povezana *Automatska kodifikacija*.

Nakon toga potrebno je pritisnuti dugme **OK** za nastavak ili **Otkaži** za odustajanje od postupka dupliranja.
Novi *Dokument internog porekla* imaće *Izdanje* i *Reviziju* postavljene na *Nulu* i status *U izradi*.
Po završetku postupka prikazaće se novi *Dokument internog porekla*.

### Kreiraj novu reviziju

Dugme je dostupno samo članovima *Funkcija preduzeća* zaduženim za *proveru/odobravanje* i *izradu/izdavanje*, i to samo ako je status izvornog dokumenta *Izdato*. Prikazaće se zahtev za unos:

> **Razlog revizije**: kratak opis razloga koji je doveo do revizije (obavezan podatak).
> **Promene u odeljcima**: opisna beleška koja se odnosi na broj izmenjenih odeljaka.
> **Promene na stranicama**: opisna beleška koja se odnosi na broj izmenjenih stranica.

Nakon toga potrebno je pritisnuti dugme **OK** za nastavak ili **Otkaži** za odustajanje od postupka.

Kreira se novi *Dokument internog porekla*, sa svim podacima izvornog *Dokumenta*, ali sa uvećanim indeksom *Revizije* i statusom *U reviziji*. Izvorni *Dokument* ostaje važeći sa statusom *Izdato*.

Po završetku postupka prikazaće se novi *Dokument internog porekla*.

### Kreiraj novo izdanje

Dugme je dostupno samo članovima *Funkcija preduzeća* zaduženim za *proveru/odobravanje* i *izradu/izdavanje*, i to samo ako je status izvornog dokumenta *Izdato*. Prikazaće se zahtev za unos:

> **Razlog revizije**: kratak opis razloga koji je doveo do revizije (obavezan podatak).
> **Promene u odeljcima**: opisna beleška koja se odnosi na broj izmenjenih odeljaka.
> **Promene na stranicama**: opisna beleška koja se odnosi na broj izmenjenih stranica.

Nakon toga potrebno je pritisnuti dugme **OK** za nastavak ili **Otkaži** za odustajanje od postupka.
Kreira se novi *Dokument internog porekla*, sa svim podacima izvornog *Dokumenta*, ali sa uvećanim indeksom *Izdanja* i statusom *U reviziji*. Izvorni *Dokument* ostaje važeći sa statusom *Izdato*.
Po završetku postupka prikazaće se novi *Dokument internog porekla*.

### Odobri

Dugme je dostupno samo članovima *Funkcija preduzeća* zaduženim za *proveru/odobravanje*, i to samo ako je status izvornog dokumenta *U izradi* ili *U reviziji*.
Nakon potvrde postupka i njegovog završetka, *Dokument internog porekla* prelazi u status *Odobreno*.

### Izdavanje

Dugme je dostupno samo članovima *Funkcija preduzeća* zaduženim za *izradu/izdavanje*, i to samo ako je status izvornog dokumenta *Odobreno*.
Nakon potvrde postupka i njegovog završetka, *Dokument internog porekla* prelazi u status *Izdato*, a automatski se prikazuje pregled štampe *Naslovne strane*.

### ![](/img/neutral/common/bill.png) Distribucija

Dugme pokreće postupak *Distribucije* *Dokumenta*.

Prikazaće se zahtev za filtriranje primalaca koji će, među onima navedenim u *Listi distribucije*, primiti kopiju *Dokumenta*:

> **Tip:**
>> **Štampana**: distribucija primaocima koji zahtevaju štampanu kopiju;
>> **Elektronska**: distribucija primaocima koji zahtevaju prijem putem e-pošte.
>
> **Status:**
>> **Već isporučeno**: distribucija primaocima koji su već primili dokument;
>> **Još nije isporučeno**: distribucija primaocima koji još nisu primili dokument;
>
> **Primalac:**
>> **Interni**: distribucija samo internom osoblju (*Funkcije preduzeća* i/ili *Zaposleni*);
>> **Kupci/Dobavljači**: distribucija *Kupcima/Dobavljačima*.

Nakon toga potrebno je pritisnuti dugme **OK** za nastavak ili **Otkaži** za odustajanje od postupka distribucije.

### Poništi dokument

Dugme je dostupno samo članovima *Funkcija preduzeća* zaduženim za *izradu/izdavanje*, i to samo ako je status izvornog dokumenta *Izdato*.

Nakon potvrde postupka i njegovog završetka, *Dokument internog porekla* prelazi u status *Poništeno*.

### Vrati poništavanje

Dugme je dostupno samo članovima *Funkcija preduzeća* zaduženim za *izradu/izdavanje*, i to samo ako je status izvornog dokumenta *Poništeno*.

Nakon potvrde postupka i njegovog završetka, *Dokument internog porekla* prelazi u status *Izdato*.

## Upravljanje podacima

### Podaci zaglavlja

Podaci kojima se upravlja su:

> **Kategorija dokumenta**: *Kategorija Dokumenta internog porekla* *Dokumenta* (obavezan podatak).
> Unošenjem kategorije u *Dokument* se preuzimaju podaci o Lokaciji, *Funkcijama preduzeća* za proveru/odobravanje i izradu/izdavanje, *Lista distribucije* i podaci o *Dozvoljenom pristupu funkcijama*, koji se naknadno mogu menjati.
>
> **Šifra**: *Šifra* *Dokumenta* (obavezan podatak); ako je za odgovarajuću Kategoriju podešena automatska kodifikacija, šifra se automatski predlaže uz mogućnost izmene. U suprotnom se unosi ručno, ali samo dok je dokument u statusu *U izradi*; u ostalim statusima podatak je samo za čitanje.
>
> **Izdanje/Revizija**: označava *Izdanje* i *Reviziju* *Dokumenta*. Podatak je samo za čitanje.
> Vrednosti se mogu menjati samo kada je dokument u statusu *U izradi*; u ostalim statusima su samo za čitanje. Takođe se mogu automatski menjati pomoću dugmadi *Kreiraj novo izdanje* i *Kreiraj novu reviziju*, koja uvećavaju prethodnu vrednost *Izdanja* ili *Revizije* za jednu jedinicu.
>
> **Naslov**: *Naslov* *Dokumenta* (obavezan podatak).
>
> **Status dokumenta**: označava *Status* *Dokumenta* i prikazuje njegov trenutni status. Podatak je samo za čitanje.
> Statusi dokumenta predstavljaju unapred definisane vrednosti sistema koje identifikuju različite faze upravljanja *Dokumentom internog porekla*.
> Dostupni statusi su:
> - **U izradi**: postavlja se prilikom kreiranja novog dokumenta;
> - **Odobreno**: postavlja se nakon *provere/odobravanja* dokumenta u statusu *U izradi* ili *U reviziji*;
> - **Izdato**: postavlja se nakon *izrade/izdavanja* dokumenta u statusu *Odobreno* ili nakon *vraćanja poništenog* dokumenta;
> - **U reviziji**: postavlja se nakon *kreiranja novog izdanja/revizije* dokumenta u statusu *Izdato*;
> - **Zastarelo**: postavlja se za dokument u statusu *Izdato* koji predstavlja izvor za *kreiranje novog izdanja/revizije*, nakon izdavanja novog dokumenta;
> - **Poništeno**: postavlja se nakon *poništavanja* dokumenta u statusu *Izdato*.
>
> **Od datuma**: datum kada je *Dokument* dobio trenutni *Status*. Podatak je samo za čitanje.
> **Od korisnika**: *ARM korisnik* koji je promenio *Status* *Dokumenta*. Podatak je samo za čitanje.
>
> **Informacije o reviziji**: proširivi odeljak u kojem je moguće pregledati ili uneti sledeće podatke:
>
>> **Datum kreiranja/Kreirao**: datum kreiranja i *ARM korisnik* koji je kreirao dokument. Podatak je samo za čitanje.
>> **Datum odobrenja/Odobrio**: datum odobrenja i *ARM korisnik* koji je *odobrio* dokument. Podatak je samo za čitanje.
>> **Datum izdavanja/Izdao**: datum izdavanja i *ARM korisnik* koji je *izdao* dokument. Podatak je samo za čitanje.
>>
>> **Razlog revizije**: kratak opis razloga koji je doveo do revizije.
>> Podatak se može menjati ako je *Status* dokumenta *U izradi* ili *U reviziji*.
>>
>> **Izmene u odeljcima**: opisna beleška o broju izmena u odeljcima u odnosu na prethodno *Izdanje/Reviziju*.
>> Podatak se može menjati ako je *Status* dokumenta *U izradi* ili *U reviziji*.
>>
>> **Izmene na stranicama**: opisna beleška o broju izmenjenih stranica u odnosu na prethodno *Izdanje/Reviziju*.
>> Podatak se može menjati ako je *Status* dokumenta *U izradi* ili *U reviziji*.
>>
>> **Datum poništavanja/Poništio**: datum poništavanja i *ARM korisnik* koji je *poništio* dokument. Podatak je samo za čitanje.
>
> **Informacije o lokaciji**: proširivi odeljak u kojem je moguće pregledati ili uneti:
>
>> **Arhiva**: fizičko *Skladište* u kojem se dokument uobičajeno čuva (na primer: Tehnička služba, Uprava...).
>> Podatak se preuzima iz *Kategorije Dokumenta internog porekla* i može se menjati.
>>
>> **Lokacija**: fizička *Lokacija* na kojoj se dokument uobičajeno čuva (na primer: Ormar, Polica, Fioka...).
>> Podatak se preuzima iz *Kategorije Dokumenta internog porekla* i može se menjati.
>>
>> **Opis lokacije**: fizička *Lokacija* koja se koristi kada *Arhiva* i/ili *Lokacija* nisu šifrirani.
>> Podatak se preuzima iz *Kategorije Dokumenta internog porekla* i može se menjati.
>
> **Funkcija za proveru/odobravanje**: *Funkcija preduzeća* odgovorna za proveru/odobravanje dokumenta.
>> Podatak se preuzima iz *Kategorije Dokumenta internog porekla* i može se menjati.
>
> **Funkcija za izradu/izdavanje**: *Funkcija preduzeća* odgovorna za izradu/izdavanje dokumenta.
>> Podatak se preuzima iz *Kategorije Dokumenta internog porekla* i može se menjati.
>
> **Beleške**: slobodne beleške.

### Prilog

Moguće je priložiti *Dokument* pomoću funkcije *drag'n'drop*, pri čemu se prikazuje njegov pregled.

Ovaj prilog nije uključen u Fluentis Dokumente.

U poljima *Naziv priloga* i *Tip priloga* sistem automatski prepoznaje naziv fizičke datoteke i njenu ekstenziju.

Ako podaci nisu prepoznati, mogu se uneti ručno.

### Kreiranje dokumenta

Radi se o jednostavnom *word editoru* koji se koristi za kreiranje *Dokumenta* direktno u ovom modulu.

Moguće je podesiti font, veličinu, stilove, boje teksta i pozadine, kao i druge osnovne opcije za formatiranje teksta.

### Lista distribucije

U ovoj listi mogu se povezati: *Funkcije preduzeća*, *Zaposleni*, *Kupci/Dobavljači* i *Kontakti* koji uobičajeno primaju kopiju *Dokumenta*, kao i definisati uobičajeni način prijema dokumenta.
Prilikom kreiranja *Dokumenta*, *Lista distribucije* se preuzima iz *Kategorije Dokumenta internog porekla*, a podaci se mogu menjati.
Lista sadrži sledeće podatke:

> **Grupa**
>> **Šifra**: šifra *ARM uloge* primaoca.
>> **Opis**: opis *ARM uloge* primaoca.
>
> **Korisnik**
>> **Šifra**: šifra *ARM korisnika* primaoca.
>> **Opis**: opis *ARM korisnika* primaoca.
>
> **Funkcija preduzeća**
>> **Šifra**: šifra *Funkcije preduzeća* primaoca.
>> **Opis**: opis *Funkcije preduzeća* primaoca.
>
> **Zaposleni**
>> **Šifra**: šifra *Zaposlenog* primaoca.
>> **Prezime**: prezime *Zaposlenog* primaoca.
>> **Ime**: ime *Zaposlenog* primaoca.
>
> **Kupac/Dobavljač**
>> **Opis**: naziv *Kupca/Dobavljača* primaoca.
>
> **Kontakt**
>> **Šifra**: šifra *Kontakta* primaoca.
>> **Opis**: opis *Kontakta* primaoca.
>
> **Drugi primalac**
>> **Opis**: slobodan opis primaoca koji nije šifriran.
>
> **Podaci za isporuku**
>> **Štampana kopija**: označava da primalac želi da prilikom distribucije primi kopiju dokumenta u *štampanom obliku* ili kao prilog putem *e-pošte*.
>> **Metoda isporuke**: označava uobičajeni način isporuke *Dokumenta*.
>> **E-mail**: adresa e-pošte primaoca ako nije definisana u njegovom šifarniku.
>> **Isporučeno**: označava da je isporuka izvršena; automatski se postavlja prilikom distribucije dokumenta, a kasnije se može menjati.
>> **Datum isporuke**: prikazuje datum isporuke dokumenta; automatski se ažurira prilikom distribucije, a kasnije se može menjati.
>> **Broj kopija**: označava broj štampanih kopija koje primalac želi da primi.
>> **Beleške**: slobodne beleške.

### Pristup funkcijama

U ovoj listi mogu se uneti *Funkcije preduzeća* kojima se dodeljuju prava pristupa *Dokumentu*.
Ako u ovoj tabeli nema unetih redova, pristup je dozvoljen svima.
Prilikom kreiranja *Dokumenta*, lista *Funkcija preduzeća* preuzima se iz *Kategorije Dokumenta internog porekla*, a podaci se mogu menjati.
Lista sadrži sledeće podatke:

> **Funkcija**: šifra *Funkcije preduzeća*.
> **Opis funkcije**: opis *Funkcije preduzeća*.
> **Beleške**: slobodne beleške.

### Dodatni podaci

Moguće je uneti [Dodatne podatke](/docs/configurations/utility/extra-data/extradata/new-extradata) za svaki *Dokument internog porekla*.

### Prethodna izdanja/revizije

U ovoj listi moguće je pregledati istoriju *Prethodnih izdanja/revizija* *Dokumenta*.
Dvostrukim klikom na željeni red moguće je otvoriti upravljanje *Revizijom* izabranog *Dokumenta*.
Lista sadrži sledeće podatke:

> **Kategorija**: *Kategorija Dokumenta internog porekla*.
> **Šifra**: šifra *Dokumenta*.
> **Izdanje**: *Izdanje* *Dokumenta*.
> **Revizija**: *Revizija* *Dokumenta*.
> **Naslov**: *Naslov* *Dokumenta*.
> **Status**: *Status* *Dokumenta*.
> **Od datuma**: datum kada je *Dokument* dobio trenutni *Status*.
> **Referenca odeljaka**: referenca na brojeve izmenjenih odeljaka u odnosu na prethodno *Izdanje/Reviziju*.
> **Referenca stranica**: referenca na brojeve izmenjenih stranica u odnosu na prethodno *Izdanje/Reviziju*.
> **Funkcija za proveru/odobravanje**: *Funkcija preduzeća* odgovorna za proveru/odobravanje.
> **Funkcija za izradu/izdavanje**: *Funkcija preduzeća* odgovorna za izradu/izdavanje.

:::tip Tok statusa dokumenta
![primer](/img/it-it/quality/internal-origin-document/internal-origin-document-status-work-flow.png)
:::

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcionisanju obrazaca, pogledajte sledeću poveznicu [Funkcionalnosti, dugmad i polja](/docs/guide/common).

