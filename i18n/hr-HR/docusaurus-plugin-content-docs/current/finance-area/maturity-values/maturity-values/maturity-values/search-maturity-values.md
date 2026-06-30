---
title: Pretraga dospijeća plaćanja
sidebar_position: 2
---

Ova forma omogućuje pretraživanje dospijeća pomoću polja u zaglavlju, koje predstavlja područje filtera za podatke koji će biti predloženi, te uređivanje svakog pojedinačnog dospijeća s dvostrukim klikom miša.

Daljnja korisna polja za filtar pretraživanja dostupna su otvaranjem **proširenja** prisutnih u zaglavlju finance-area/maturity-values/maturity-values/image03.png

Standardno se predlažu otvorene stavke (polje **Status** filtra popunjava se stavkom Otvorena stavka prilikom otvaranja obrasca). Moguće je pregledati sva podudaranja jednostavnim brisanjem unosa iz polja filtra kako se ne bi filtrirala određena vrsta.

Provođenjem pretrage (naredba **Traži** na traci izbornika) dospijeće će biti prikazano sa svim relevantnim informacijama.

**Za detaljna prikazana polja pogledajte [Pojmovnik](/docs/guide/common/glossary/glossary-intro).**

**SPECIFIČNA POLJA ZAGLAVLJA:**

**Otvorene stavke na dan**: predstavlja referentni datum na koji bi se stavka trebala smatrati otvorenom (na primjer, danas može biti zatvorena, ali predstavljajući je od jučer, može se predstavljati kao otvorena jer još nije plaćena). Za korištenje ovog polja uklonite status Otvoreno iz glavnog filtra **Stanje (pozicija)**.

**S računima koji dospijevaju**: slično kao i u izvještajima modula, omogućuje uključivanje i onih otvorenih stavaka koje su formalno zatvorene, ali su pretvorene u aktivne naplatne instrumente (npr. Ri.Ba.) te su i dalje relevantne jer naplata još nije konačno izvršena. Za korištenje ove opcije potrebno je u glavnom filtru 'Status' ukloniti oznaku 'Otvorena'.

**Pokaži jamčevine**: polje koje omogućuje prikaz jamčevina/depozita naplaćenih od kupaca. Ove posebne naplate predstavljene su otvorenim stavkama koje unutar forme za upravljanje otvorenim stavkama imaju popunjeno polje **Konto depozita**. Kada se zatvore računovodstvenim knjiženjem naplate, u sekciji dnevnika knjiženja umjesto standardnog knjiženja konta kupca, knjiži se Konto depozita definiran unutar otvorene stavke koja se naplaćuje.

Konkretno, za svaki redak koji odgovara dospijeću postoji naredba (+) koja vam omogućuje pregled dodatnih i prvobitno skrivenih informacija: to su sva plaćanja povezana sa zatvorenom ili djelomično otvorenom igrom.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png)

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

**SPECIFIČNA POLJA ZA DOPUNSKI OBRAZAC**:

**U plaćanju:**: označava da je stavka već umetnuta u uplatnicu dobavljača, ali uplatnica još nije obračunata i stoga stavka još nije zatvorena.

**Knjiženo**: označava da je stavka povezana s knjigovodstvenim unosom.

**Nije plativo**: označava da je korisnik blokirao dospijeće tako da se ne plaća. Blokada se može postaviti izravno u trenutku kreiranja ili kasnije i to iz **[kartice Stavke](/docs/finance-area/ledger-records/records/ledger-record)** računovodstvenog zapisa koji generira stavku ili uređivanjem same stavke iz obrasca u komentaru.

**Traka Izbornika**:



| Funkcija | Značenje |
| --- | --- |
| Traži | Pokreće traženje podudaranja prema podacima unesenim u filtar |
| Nova dospijeća plaćanja | Omogućuje ručno umetanje novog dospijeća |
| Izmijeni dospijeća plaćanja | Unesite obrazac za uređivanje 'Upravljanje dospijećem’ za odabrano dospijeće (kao alternativa dvostrukom kliku mišem na liniju koju želite promijeniti) |
| Prikaži | Unesite obrazac 'Upravljanje dospijećima’ u načinu samo za prikaz, neće biti moguće spremiti promjene |
| Izbriši označena dospijeća plaćanja | Izbriši odabrani red |
| Promijeni poziciju dospijeća plaćanja | Prikazuje obrazac za traženje pozicije dospijeća koji vam omogućuje dodjeljivanje odabranog statusa dospijeća bez potrebe za ulaskom u obrazac za uređivanje 'Upravljanje dospijećima’ |
| Ažuriraj status dospijeća plaćanja | Izvodi osvježavanje statusa dospijeća za ispravan prikaz. |
| Podijeli dospijeća plaćanja | Otvara skočni obrazac koji omogućuje da se odabranu stavku podijeli u više serija željene količine i roka trajanja. **Jasno je da se zbroj dobivenih stavaka mora podudarati s količinom početne serije**. Iznos početne stavke automatski se predlaže u polju **Podijeli**, nakon čega je potrebno u retke mreže unijeti iznose i datume dospijeća novih stavki (primjerice kada se jedna stavka želi podijeliti na dvije ili tri), a program će automatski izvršiti operaciju.
| Izmijeni zapis | Omogućuje izravno uređivanje računovodstvenog zapisa povezanog s odabranom stavkom. Ako odabrana stavka nije povezana s knjigovodstvenim unosom, tipka će biti onemogućen.|


:::tip[NAPOMENA: Ažurirajte stanje stavki]
Od verzija Fluentis2021 i novijih više nisu prisutni *triggeri* i *stored procedure*koji izvršavaju postupke izračuna ili ponovnog izračuna. Jedna od procedura koja se ranije izvršavala na razini baze podataka bila je automatski ponovni izračun statusa otvorenih stavki, posebno statusa **Dospjela** umjesto generičkog statusa Otvorena.

Podsjećamo da, ako želite ignorirati stanje *Isteklo* u svrhu filtriranja, možete koristiti filtre u zaglavlju obrasca prema datumu isteka kako biste postigli isti rezultat.

Za korisnike koji imaju alat ***Supervisor***, moguće je omogućiti zadatak s kodom FI_MaturitiesOverdueStatusFix koji postavlja stanje *Isteklo* na stavke s preostalim iznosom != 0 e datumom isteka < danas.
:::



