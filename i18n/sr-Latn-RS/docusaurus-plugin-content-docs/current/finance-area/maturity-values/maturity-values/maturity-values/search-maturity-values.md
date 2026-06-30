---
title: Pretraga dospijeća plaćanja
sidebar_position: 2
---

Ovaj obrazac omogućava pretragu dospijeća korišćenjem polja u zaglavlju, koja predstavljaju oblast filtera za podatke koji će biti prikazani, kao i uređivanje pojedinačnog dospijeća dvostrukim klikom miša.

Dodatna polja za filtriranje dostupna su otvaranjem **proširenja** u zaglavlju obrasca.

Podrazumevano se prikazuju otvorene stavke (polje **Status** u filteru je pri otvaranju obrasca automatski postavljeno na **Otvorena stavka**). Moguće je prikazati sve stavke jednostavnim brisanjem vrednosti iz ovog filtera, kako se ne bi ograničila pretraga na određeni status.

Pokretanjem pretrage (komanda **Traži** na traci sa alatkama), dospijeća će biti prikazana sa svim relevantnim informacijama.

**Za detaljan opis prikazanih polja pogledajte [Pojmovnik](/docs/guide/common/glossary/glossary-intro).**

## SPECIFIČNA POLJA ZAGLAVLJA

**Otvorene stavke na datum**: predstavlja referentni datum na koji se stavka smatra otvorenom. Na primer, stavka danas može biti zatvorena, ali ako se pregled vrši za jučerašnji datum, prikazaće se kao otvorena jer tada još nije bila plaćena. Da biste koristili ovo polje, uklonite status **Otvorena** iz glavnog filtera **Status (stavke)**.

**Sa dospijećima u naplati**: slično izveštajima modula, omogućava uključivanje i onih otvorenih stavki koje su formalno zatvorene, ali su pretvorene u aktivne instrumente naplate (npr. Ri.Ba.), pa su i dalje relevantne zato što naplata još nije konačno izvršena. Da biste koristili ovu opciju, potrebno je u glavnom filteru **Status** ukloniti oznaku **Otvorena**.

**Prikaži depozite**: omogućava prikaz depozita/jamčevina naplaćenih od kupaca. Ove posebne naplate predstavljene su otvorenim stavkama koje u obrascu za upravljanje otvorenim stavkama imaju popunjeno polje **Konto depozita**. Kada se zatvore računovodstvenim knjiženjem naplate, u sekciji dnevnika knjiženja umesto standardnog knjiženja konta kupca knjiži se konto depozita definisan u otvorenoj stavci koja se naplaćuje.

Za svaki red koji predstavlja dospijeće dostupna je komanda **(+)**, kojom se mogu prikazati dodatne, inicijalno skrivene informacije, odnosno sva plaćanja povezana sa zatvorenom ili delimično otvorenom stavkom.

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image01.png)

![](/img/it-it/finance-area/maturity-values/maturity-values/maturity-values-management/image02.png)

## SPECIFIČNA POLJA DODATNOG OBRASCA

**U plaćanju**: označava da je stavka već uključena u nalog za plaćanje dobavljača, ali nalog još nije proknjižen, pa stavka još nije zatvorena.

**Proknjiženo**: označava da je stavka povezana sa računovodstvenim knjiženjem.

**Nije plativo**: označava da je korisnik blokirao dospijeće kako ne bi bilo plaćeno. Blokada se može postaviti prilikom kreiranja stavke ili naknadno, iz **[kartice Stavke](/docs/finance-area/ledger-records/records/ledger-record)** računovodstvenog zapisa koji je generisao stavku ili uređivanjem same stavke iz ovog obrasca.

## Traka sa alatkama

| Funkcija | Značenje |
| --- | --- |
| Traži | Pokreće pretragu prema podacima unetim u filter. |
| Novo dospijeće | Omogućava ručni unos novog dospijeća. |
| Izmeni dospijeće | Otvara obrazac **Upravljanje dospijećem** za uređivanje izabranog dospijeća (alternativno dvostrukom kliku na željeni red). |
| Prikaži | Otvara obrazac **Upravljanje dospijećem** u režimu samo za pregled, bez mogućnosti čuvanja izmena. |
| Obriši označena dospijeća | Briše izabrani red. |
| Promeni status dospijeća | Otvara obrazac za izbor statusa dospijeća i omogućava dodelu izabranog statusa bez ulaska u obrazac **Upravljanje dospijećem**. |
| Ažuriraj status dospijeća | Osvežava status dospijeća radi ispravnog prikaza. |
| Podeli dospijeće | Otvara iskačući obrazac koji omogućava podelu izabrane stavke na više rata željenog iznosa i roka dospeća. **Zbir svih novonastalih stavki mora odgovarati iznosu početne stavke.** Iznos početne stavke automatski se predlaže u polju **Podeli**, nakon čega je potrebno uneti iznose i datume dospeća novih stavki u redove tabele (na primer kada se jedna stavka deli na dve ili tri), a program će automatski izvršiti podelu. |
| Izmeni zapis | Omogućava direktno uređivanje računovodstvenog zapisa povezanog sa izabranom stavkom. Ako izabrana stavka nije povezana sa računovodstvenim zapisom, dugme će biti onemogućeno. |

:::tip[NAPOMENA: Ažuriranje statusa stavki]

Od verzije **Fluentis2021** i novijih više nisu prisutni *triggeri* i *stored procedure* koji su izvršavali postupke izračuna ili ponovnog izračuna. Jedna od procedura koja se ranije izvršavala na nivou baze podataka bila je automatski ponovni obračun statusa otvorenih stavki, naročito promenu statusa iz **Otvorena** u **Dospela**.

Podsećamo da, ukoliko želite da zanemarite status **Dospela** prilikom filtriranja, isti rezultat možete postići korišćenjem filtera po datumu dospeća u zaglavlju obrasca.

Korisnici koji imaju alat **Supervisor** mogu omogućiti zadatak sa šifrom **FI_MaturitiesOverdueStatusFix**, koji automatski postavlja status **Dospela** svim stavkama koje imaju preostali iznos različit od 0 i datum dospeća manji od današnjeg datuma.

:::