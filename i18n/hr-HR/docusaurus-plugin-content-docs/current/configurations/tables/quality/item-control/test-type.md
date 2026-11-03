---
title: Vrste ispitivanja
sidebar_position: 1
---

Tablica se nalazi na putanji **Tablice > Kvaliteta > Kontrola artikala > Vrste ispitivanja**.

U ovoj tablici moguće je definirati vrste ispitivanja koja se provode na artiklima prilikom zaprimanja robe i tijekom proizvodnog procesa.

Primjeri upotrebe *vrsta ispitivanja* mogu se pronaći u sljedećim modulima:
> **Tehnička uputstva** – na kartici *Svojstva*;  
> **Kontrolni planovi** – na kartici *Planirana ispitivanja*;  
> **Kontrola artikala** – na kartici *Ispitivanja*;  
> **Certifikati analize** – na kartici *Kontrole i zabilježene vrijednosti > Zabilježene vrijednosti*;  
> **M.E.S.** – na kartici *Kontrola kvalitete > Ispitivanja*.

Tablica omogućuje unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmjene ili brisanja.

**Pretraživanje vrsta ispitivanja**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici.

**Unos vrsta ispitivanja**

Za unos novih *vrsta ispitivanja* potrebno je kliknuti prvi prazni redak u tablici ili pritisnuti gumb **Novo**.  
Za novi zapis potrebno je unijeti barem obvezna polja koja zahtijeva program: **Šifra** i **Opis**.

**Dupliciranje vrsta ispitivanja**

Za dupliciranje postojeće *vrste ispitivanja* u novu *vrstu ispitivanja* potrebno je u tablici odabrati *vrstu ispitivanja* koju želite duplicirati i pritisnuti gumb **Dupliciraj**.  
Prikazat će se zahtjev za unos **Šifre** nove *vrste ispitivanja* (obvezan podatak) te oznaka koje omogućuju odabir informacija koje će se također duplicirati: *Konfiguracija*, *Mogući rezultati*, *Funkcija* i *Slike*.  
Zatim pritisnite gumb **U redu** ili **Odustani**, ovisno o tome želite li nastaviti s dupliciranjem.

## Vrste ispitivanja

Ovo je popis u koji se unose osnovni podaci o *vrsti ispitivanja*.  
Popis se sastoji od sljedećih podataka:

> **Šifra**: šifra *vrste ispitivanja*.  
> **Opis**: opis *vrste ispitivanja*.  
> **Obvezan test**: označava je li ispitivanje obvezno za nastavak proizvodne prijave; ova se kontrola provodi u proizvodnim prijavama u sustavu [M.E.S.](/docs/production/mes/mes-main-form).  
> **Referenca standardnog plana kontrole**: opisno polje koje sadržava reference na šifre priznatih standardnih metoda ispitivanja.  
>
> **Kategorija**
>
> > **Šifra**: šifra *kategorije*.  
> > **Opis**: opis *kategorije*.  
> > **Destruktivno**: označava je li ispitivanje destruktivno.  
>
> **Interni laboratorij**: označava provodi li se ispitivanje interno.  
>
> **Vanjski laboratorij**
>
> > **Opis**: polje je omogućeno ako nije odabran interni laboratorij. Sadržava naziv *laboratorija za analizu* (*dobavljača*) koji će provesti ispitivanje.  
>
> **Alata za mjerenje (Mjerni instrument)**
>
> > **Šifra**: šifra *kategorije mjernog instrumenta* koji će se upotrebljavati za mjerenje vrijednosti *vrste ispitivanja*.  
> > **Opis**: opis *kategorije mjernog instrumenta* koji će se upotrebljavati za mjerenje vrijednosti *vrste ispitivanja*.  
>
> **Vrijednosti**
>
> > **Za otkrivanje**: označava treba li se rezultat ispitivanja zabilježiti ili je riječ samo o *svojstvu* koje nije moguće izmjeriti, pa se upotrebljava u *tehničkim uputstvima*.  
> > **Jedinica mjere**: *mjerna jedinica* vrijednosti koje je potrebno zabilježiti.  
> > **Vrsta iznosa**: *vrsta vrijednosti* koju je potrebno zabilježiti: *Numerička*, *Da/Ne* ili *Tekst*.  
> > **Vrsta limita**: polje je omogućeno ako je *vrsta vrijednosti* *Numerička*. Određuje *vrstu ograničenja* koja će se predložiti u ispitivanjima.  
>
> **Vrsta kontrole testa**
>
> > **Općenito**: označava provodi li se ispitivanje uobičajeno na vrstama dokumenata koje je moguće odrediti u sljedećim stupcima.  
> > **Tip dokumenta**: polje je omogućeno ako je odabrana vrijednost *Općenito*. Određuje dokument na kojem se uobičajeno provodi *vrsta ispitivanja*.  
> > **Predloženo u...**: polje je omogućeno ako je odabrana vrijednost *Općenito* i ako to odabrana *vrsta dokumenta* podržava. Određuje detalj (*Zaglavlje dokumenta* ili *Redak dokumenta*) na kojem se uobičajeno provodi *vrsta ispitivanja*.  
> > **Šifra**: šifra *vrste kontrole ispitivanja* koja će se upotrebljavati.  
> > **Opis**: opis *vrste kontrole ispitivanja* koja će se upotrebljavati.  
> > **Učestalost**: opis učestalosti kojom je potrebno provoditi kontrolu.  
>
> **Napomene**: slobodne napomene.

### Atributi vrste testa

Moguće je unijeti opće [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *vrstu ispitivanja*.  
Ti se *dodatni podaci* mogu naslijediti u *ispitivanjima* dokumenata u kojima je predviđena upotreba atributa.

### Konfiguracija parametara ispitivanja i mjerila

Sadržava [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) koji su potrebni operaterima za pripremu svih instrumenata potrebnih za početak određenog ispitivanja. Mogu se smatrati potrebnim konfiguracijskim postavkama i operativnim informacijama koje prethode provedbi ispitivanja.  
Ti se *dodatni podaci* mogu naslijediti u *ispitivanjima* dokumenata za koja je predviđena konfiguracija.

### Mogući rezultati

Za odabranu *vrstu ispitivanja* moguće je prilagoditi *moguće vrste rezultata*.  
Prilikom bilježenja pojedinačnog ispitivanja sustav će, ovisno o njegovoj sukladnosti, prema zadanim postavkama predložiti *pozitivan* ili *negativan* rezultat.

Popis se sastoji od sljedećih podataka:

> **Rezultat**: šifra *vrste rezultata*.  
> **Opis rezultata**: opis *vrste rezultata*.  
> **Zadani pozitivni rezultat**: označava da će se ovaj rezultat predložiti kao pozitivan prilikom bilježenja ispitivanja.  
> **Zadani negativni rezultat**: označava da će se ovaj rezultat predložiti kao negativan prilikom bilježenja ispitivanja.  
> **Redoslijed**: redoslijed prikaza *vrsta rezultata* na popisima za odabranu *vrstu ispitivanja*.  
> **Napomene**: slobodne napomene.

### Funkcije za detekciju i odobravanje

Ovdje se definiraju prava kojima se određuje tko može bilježiti i/ili odobravati vrijednosti ispitivanja.

Popis se sastoji od sljedećih podataka:

> **Funkcija**: šifra *poslovne funkcije*.  
> **Opis funkcije**: opis *poslovne funkcije*.  
> **Vrsta aktivnosti**: pravo dodijeljeno *poslovnoj funkciji* tijekom aktivnosti bilježenja i/ili odobravanja ispitivanja. Moguće vrijednosti su:
> - *Može bilježiti (otkriti)* – *poslovna funkcija* ima samo ovlasti za bilježenje vrijednosti;
> - *Može odobriti* – *poslovna funkcija* ima samo ovlasti za odobravanje ispitivanja;
> - *Može bilježiti (otkriti) i odobriti* – *poslovna funkcija* ima ovlasti za bilježenje vrijednosti i odobravanje ispitivanja.
>
> Ostale *poslovne funkcije* koje nisu navedene nemaju nikakva prava za bilježenje vrijednosti ni odobravanje ispitivanja.  
> Ako nisu navedene *poslovne funkcije*, svi operateri moći će bilježiti vrijednosti i odobravati ispitivanje.
>
> **Napomene**: slobodne napomene.

### Slike

Moguće je povezati slike koje su korisne za ispitivanje koje je potrebno provesti. Primjerice, slike mogu vizualno prikazivati određene značajke ili aktivnosti koje je potrebno obaviti tijekom pripreme i provedbe samog ispitivanja.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).