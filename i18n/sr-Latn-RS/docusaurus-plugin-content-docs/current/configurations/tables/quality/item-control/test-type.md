---
title: Tipovi ispitivanja
sidebar_position: 1
---

Tabela se nalazi na putanji **Tablice > Kvalitet > Kontrola artikala > Tipovi ispitivanja**.

U ovoj tabeli moguće je definisati tipove ispitivanja koja se sprovode na artiklima prilikom prijema robe i tokom proizvodnog procesa.

Primeri upotrebe *tipova ispitivanja* mogu se pronaći u sledećim modulima:
> **Tehnička uputstva** – na kartici *Svojstva*;
> **Kontrolni planovi** – na kartici *Planirana ispitivanja*;
> **Kontrola artikala** – na kartici *Ispitivanja*;
> **Sertifikati analize** – na kartici *Kontrole i zabeležene vrednosti > Zabeležene vrednosti*;
> **M.E.S.** – na kartici *Kontrola kvaliteta > Ispitivanja*.

Tabela omogućava unos novih zapisa ili pretraživanje postojećih zapisa radi pregleda, izmene ili brisanja.

**Pretraživanje tipova ispitivanja**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli.

**Unos tipova ispitivanja**

Za unos novih *tipova ispitivanja* potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

Za novi zapis potrebno je uneti barem obavezna polja koja program zahteva: **Šifra** i **Opis**.

**Dupliciranje tipova ispitivanja**

Za dupliciranje postojećeg *tipa ispitivanja* u novi *tip ispitivanja* potrebno je u tabeli odabrati *tip ispitivanja* koji želite da duplicirate i pritisnuti dugme **Dupliciraj**.

Prikazaće se zahtev za unos **Šifre** novog *tipa ispitivanja* (obavezan podatak), kao i oznake koje omogućavaju izbor informacija koje će takođe biti duplicirane: *Konfiguracija*, *Mogući rezultati*, *Funkcija* i *Slike*.

Zatim pritisnite dugme **U redu** ili **Odustani**, u zavisnosti od toga da li želite da nastavite sa dupliciranjem.

## Tipovi ispitivanja

Ovo je lista u koju se unose osnovni podaci o *tipu ispitivanja*.

Lista se sastoji od sledećih podataka:

> **Šifra**: šifra *tipa ispitivanja*.
> **Opis**: opis *tipa ispitivanja*.
> **Obavezan test**: označava da li je ispitivanje obavezno za nastavak proizvodne prijave; ova provera se sprovodi u proizvodnim prijavama u sistemu [M.E.S.](/docs/production/mes/mes-main-form).
> **Referenca standardnog plana kontrole**: opisno polje koje sadrži reference na šifre priznatih standardnih metoda ispitivanja.
>
> **Kategorija**
>
>> **Šifra**: šifra *kategorije*.
>> **Opis**: opis *kategorije*.
>> **Destruktivno**: označava da li je ispitivanje destruktivno.
>
> **Interna laboratorija**: označava da li se ispitivanje sprovodi interno.
>
> **Eksterna laboratorija**
>
>> **Opis**: polje je omogućeno ako nije izabrana interna laboratorija. Sadrži naziv *laboratorije za analizu* (*dobavljača*) koja će sprovesti ispitivanje.
>
> **Merni alat (merni instrument)**
>
>> **Šifra**: šifra *kategorije mernog instrumenta* koji će se koristiti za merenje vrednosti *tipa ispitivanja*.
>> **Opis**: opis *kategorije mernog instrumenta* koji će se koristiti za merenje vrednosti *tipa ispitivanja*.
>
> **Vrednosti**
>
>> **Za otkrivanje**: označava da li rezultat ispitivanja treba evidentirati ili je reč samo o *svojstvu* koje nije moguće izmeriti, pa se koristi u *tehničkim uputstvima*.
>> **Jedinica mere**: *merna jedinica* vrednosti koje je potrebno evidentirati.
>> **Tip iznosa**: *tip vrednosti* koju je potrebno evidentirati: *Numerička*, *Da/Ne* ili *Tekst*.
>> **Tip ograničenja**: polje je omogućeno ako je *tip vrednosti* *Numerička*. Određuje *tip ograničenja* koji će biti predložen u ispitivanjima.
>
> **Tip kontrole testa**
>
>> **Opšte**: označava da li se ispitivanje uobičajeno sprovodi na tipovima dokumenata koji se mogu odrediti u sledećim kolonama.
>> **Tip dokumenta**: polje je omogućeno ako je izabrana vrednost *Opšte*. Određuje dokument na kojem se uobičajeno sprovodi *tip ispitivanja*.
>> **Predloženo u...**: polje je omogućeno ako je izabrana vrednost *Opšte* i ako izabrani *tip dokumenta* to podržava. Određuje detalj (*Zaglavlje dokumenta* ili *Red dokumenta*) na kojem se uobičajeno sprovodi *tip ispitivanja*.
>> **Šifra**: šifra *tipa kontrole ispitivanja* koji će se koristiti.
>> **Opis**: opis *tipa kontrole ispitivanja* koji će se koristiti.
>> **Učestalost**: opis učestalosti kojom je potrebno sprovoditi kontrolu.
>
> **Napomene**: slobodne napomene.

### Atributi tipa testa

Moguće je uneti opšte [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) za *tip ispitivanja*.

Ti *dodatni podaci* mogu se naslediti u *ispitivanjima* dokumenata u kojima je predviđena upotreba atributa.

### Konfiguracija parametara ispitivanja i merila

Sadrži [dodatne podatke](/docs/configurations/utility/extra-data/extradata/search-extradata) koji su potrebni operaterima za pripremu svih instrumenata potrebnih za početak određenog ispitivanja. Mogu se smatrati potrebnim konfiguracionim podešavanjima i operativnim informacijama koje prethode sprovođenju ispitivanja.

Ti *dodatni podaci* mogu se naslediti u *ispitivanjima* dokumenata za koja je predviđena konfiguracija.

### Mogući rezultati

Za izabrani *tip ispitivanja* moguće je prilagoditi *moguće tipove rezultata*.

Prilikom evidentiranja pojedinačnog ispitivanja sistem će, u zavisnosti od njegove usaglašenosti, podrazumevano predložiti *pozitivan* ili *negativan* rezultat.

Lista se sastoji od sledećih podataka:

> **Rezultat**: šifra *tipa rezultata*.
> **Opis rezultata**: opis *tipa rezultata*.
> **Podrazumevani pozitivan rezultat**: označava da će ovaj rezultat biti predložen kao pozitivan prilikom evidentiranja ispitivanja.
> **Podrazumevani negativan rezultat**: označava da će ovaj rezultat biti predložen kao negativan prilikom evidentiranja ispitivanja.
> **Redosled**: redosled prikaza *tipova rezultata* na listama za izabrani *tip ispitivanja*.
> **Napomene**: slobodne napomene.

### Funkcije za detekciju i odobravanje

Ovde se definišu prava kojima se određuje ko može da evidentira i/ili odobrava vrednosti ispitivanja.

Lista se sastoji od sledećih podataka:

> **Funkcija**: šifra *poslovne funkcije*.
> **Opis funkcije**: opis *poslovne funkcije*.
> **Tip aktivnosti**: pravo dodeljeno *poslovnoj funkciji* tokom aktivnosti evidentiranja i/ili odobravanja ispitivanja. Moguće vrednosti su:
> - *Može da evidentira (otkrije)* – *poslovna funkcija* ima ovlašćenja samo za evidentiranje vrednosti;
> - *Može da odobri* – *poslovna funkcija* ima ovlašćenja samo za odobravanje ispitivanja;
> - *Može da evidentira (otkrije) i odobri* – *poslovna funkcija* ima ovlašćenja za evidentiranje vrednosti i odobravanje ispitivanja.
>
> Ostale *poslovne funkcije* koje nisu navedene nemaju nikakva prava za evidentiranje vrednosti ni odobravanje ispitivanja.
>
> Ako nisu navedene *poslovne funkcije*, svi operateri moći će da evidentiraju vrednosti i odobravaju ispitivanje.
>
> **Napomene**: slobodne napomene.

### Slike

Moguće je povezati slike koje su korisne za ispitivanje koje je potrebno sprovesti. Na primer, slike mogu vizuelno prikazivati određene karakteristike ili aktivnosti koje je potrebno obaviti tokom pripreme i sprovođenja samog ispitivanja.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).