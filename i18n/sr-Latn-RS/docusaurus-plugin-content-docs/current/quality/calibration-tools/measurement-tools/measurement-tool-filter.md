---
title: Pretraga mernih instrumenata
sidebar_position: 1
---

Filter se nalazi na putanji **Kvalitet > Kalibracija uređaja > Merni instrumenti**.

Filter podataka omogućava unos novih *mernih instrumenata* ili pretragu postojećih radi njihovog prikaza, izmene ili brisanja.

### ![](/img/neutral/common/search.png) Pretraga mernih instrumenata

Forma se sastoji od oblasti za filtriranje i oblasti sa rezultatima. Nakon postavljanja svih željenih filtera, dovoljno je pritisnuti dugme **Traži** kako bi se rezultati prikazali u pregledu.

### ![](/img/neutral/common/new.png) Unos mernih instrumenata

Za unos novih *mernih instrumenata* potrebno je pritisnuti dugme **Novo**.

### ![](/img/neutral/common/edit.png) Izmena ili ![](/img/neutral/common/view.png) Pregled mernih instrumenata

Za otvaranje upravljanja iz pregleda rezultata potrebno je dvaput kliknuti na željeni red ili, nakon izbora jednog ili više redova, pritisnuti dugme **Izmeni** ili **Prikaži**.

*Specifična dugmad*:

### Planiranje novih kalibracija

Dugme je omogućeno samo ako je u pregledu rezultata izabran jedan *merni instrument* i taj *instrument* mora biti:

> *Aktivan*;
> *Podleže kalibraciji*;
> Podleže periodičnoj, vremenski definisanoj kalibraciji (proširenje *Svojstva kalibracije* sa *periodom kalibracije* različitim od *nule* i *jedinicom mere* tipa *Dan* ili *Mesec*).

Da bi se planirale nove *kalibracije instrumenta* iz *mernog instrumenta*, potrebno je izabrati *instrument* u pregledu za koji se želi planirati kalibracija i pritisnuti dugme **Planiranje novih kalibracija**. Istovremeno je moguće planirati samo jedan *merni instrument*.

Prikazaće se zahtev za unos:

> **Planirati do**: datum završetka perioda planiranja (obavezan podatak); predlaže se jednogodišnji period planiranja počevši od današnjeg datuma.

Zatim je potrebno pritisnuti dugme **OK** ili **Cancel**, u zavisnosti od toga da li se želi nastaviti ili odustati od planiranja.

*Metoda koja se koristi za planiranje*:

Kao prvi korak brišu se sve prethodno planirane, a još neizvršene *kalibracije* za *instrument*.

Zatim se, počevši od datuma poslednje *kalibracije*, kreira onoliko *kalibracija* koliko ih je moguće kreirati u zadatom vremenskom intervalu, počevši od današnjeg datuma, uz učestalost definisanu *periodom kalibracije*. Ako predloženi datum pada na neradni dan definisan u *Kalendaru fabrike*, predloženi datum će biti pomeren na prvi naredni radni dan.

Ako za instrument nikada nije bila planirana ili izvršena *kalibracija*, ili ako poslednji datum *kalibracije* pada pre *perioda kalibracije* računatog unazad od današnjeg datuma, prva *kalibracija* biće predložena za današnji datum, a sve naredne biće planirane nakon toga.

### Nova kalibracija

Dugme je omogućeno samo ako je u pregledu rezultata izabran jedan *merni instrument* i *instrument* mora biti *aktivan*.

Za kreiranje nove *kalibracije instrumenta* iz *mernog instrumenta* potrebno je izabrati *merni instrument* u pregledu iz kojeg se želi kreirati kalibracija i pritisnuti dugme **Nova kalibracija**. *Kalibracija instrumenta* može se kreirati samo iz jednog *mernog instrumenta* istovremeno.

Po završetku obrade biće prikazana *nova planirana kalibracija* instrumenta.

Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcionisanju formi, pogledajte sledeći link [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).