---
title: Traži dospijeća plaćanja
sidebar_position: 2
---

Ova maska omogućuje pretraživanje dospijeća pomoću polja u zaglavlju, koje predstavlja područje filtera za podatke koji će biti predloženi, te uređivanje svakog pojedinačnog dospijeća s dvostrukim klikom miša.

Daljnja korisna polja za filtar pretraživanja dostupna su otvaranjem **Ekspandera** prisutnih u zaglavlju. 

Standardno se predlažu otvorene stavke (polje **Status** filtra popunjava se stavkom Otvorena stavka prilikom otvaranja obrasca). Moguće je pregledati sva podudaranja jednostavnim brisanjem unosa iz polja filtra kako se ne bi filtrirala određena vrsta.

Provođenjem pretrage (naredba **Traži** na traci izbornika) dospijeće će biti prikazano sa svim relevantnim informacijama.

**Za detaljna prikazana polja pogledajte [Pojmovnik](/docs/guide/common/glossary/glossary-intro).**

**SPECIFIČNA POLJA ZAGLAVLJA:**

**Stavke otvorene u**: predstavlja referentni datum na koji bi se stavka trebala smatrati otvorenom (na primjer, danas može biti zatvorena, ali predstavljajući je od jučer, može se predstavljati kao otvorena jer još nije plaćena). Za korištenje ovog polja uklonite status Otvoreno iz glavnog filtra **Statusa**.

**Sa dospjelošću (Con effetti a scadere)**: slično ispisima obrasca, također vam omogućuje da uključite one stavke koje bi bile zatvorene, ali su pretvorene u aktivne račune (npr. RiBa) i stoga su zanimljive jer još nisu definitivno naplaćene. Za korištenje ovog polja uklonite status Otvoreno iz glavnog filtra **Statusa**.

**Prikaži sigurnosne depozite**: polje koje čini vidljivim sigurnosne depozite koje su prikupili klijenti. Ove posebne zbirke predstavljene su stavkama koje unutar sebe imaju (obrazac za upravljanje stavkom, popunjeno polje **Račun za depozit** ispunjeno). Kada se zatvore knjigovodstvenim unosom zbirke, u odjeljku Dnevnik, umjesto kretanja kao obično, račun kupca, *Račun za depozit* prisutan unutar artikla koji se unovčava je premješten.

Konkretno, za svaki redak koji odgovara dospijeću postoji naredba (+) koja vam omogućuje pregled dodatnih i prvobitno skrivenih informacija: to su sva plaćanja povezana sa zatvorenom ili djelomično otvorenom igrom.

![](/img/it-it/finance-area/maturity-values/maturity-values/image01.png)

![](/img/it-it/finance-area/maturity-values/maturity-values/image02.png)

**SPECIFIČNA POLJA ZA DOPUNSKI OBRAZAC:**

**U plaćanju**: označava da je stavka već umetnuta u uplatnicu dobavljača, ali uplatnica još nije obračunata i stoga stavka još nije zatvorena.  

**Računovodstvo**: označava da je stavka povezana s knjigovodstvenim unosom.

**Ne plaća se**: označava da je korisnik blokirao dospijeće tako da se ne plaća. Blokada se može postaviti izravno u trenutku kreiranja ili kasnije i to iz **[kartice Stavke](/docs/finance-area/ledger-records/records/create-ledger-record/maturity-values-tab)** računovodstvenog zapisa koji generira stavku ili uređivanjem same stavke iz obrasca u komentaru. 

**Traka Izbornika**:

| Funkcija | Značenje |
| --- | --- |
| Traži | Pokreće traženje podudaranja prema podacima unesenim u filtar |
| Novo dospijeće | Omogućuje ručno umetanje novog dospijeća |
| Uredi dospijeće | Unesite obrazac za uređivanje 'Upravljanje dospijećem’ za odabrano dospijeće(kao alternativa dvostrukom kliku mišem na liniju koju želite promijeniti) |
| Prikaži | Unesite obrazac 'Upravljanje dospijećima’ u načinu samo za prikaz, neće biti moguće spremiti promjene |
| Izbriši odabrana dospijeća | Izbriše odabrani red |
| Izbriši odabrana plaćanja | Omogućuje otkazivanje plaćanja povezanih s dospijećima (vidljivo preko gumba + lijevo od dospijeća) |
| Promijenite poziciju dospijeća | Prikazuje obrazac za traženje pozicije dospijeća koji vam omogućuje dodjeljivanje odabranog statusa dospijeća bez potrebe za ulaskom u obrazac za uređivanje 'Upravljanje dospijećima’ |
| Ažuriraj status podudaranja | Izvodi osvježavanje statusa dospijeća za ispravan prikaz. |
| Raspad dospijeća | Otvara skočni obrazac koji vam omogućuje da odabranu seriju podijelite u više serija željene količine i roka trajanja.  **Jasno je da se zbroj dobivenih serija mora podudarati s količinom početne serije.** Količina početne serije predložena je u polju **Podjela**, u ovom trenutku **količine** i **datumi** isteka moraju se unijeti u mrežne linije rezultirajuće podudarnosti (na primjer, želite jednu pretvoriti u dvije ili tri) i program će se pobrinuti za automatsko izvođenje operacije. |
| Uredi registraciju | Omogućuje izravno uređivanje računovodstvenog zapisa povezanog s odabranom stavkom. Ako odabrana stavka nije povezana s knjigovodstvenim unosom, gumb će biti onemogućen. |

:::tip[NAPOMENA: Ažuriraj dospijeće plaćanja]
Od verzija Fluentis2021 i novijih, više nisu prisutni okidači i pohranjene procedure koje izvršavaju postupke izračuna ili ponovnog izračuna. Jedna od tih procedura izvedenih na razini baze podataka bila je automatsko ponovno izračunavanje stanja partija, posebno tipično stanje **Dospjelo** umjesto generičkog izračuna dospijeća plaćanja. Stoga je potrebno koristiti gumb Ažuriraj dospijeće plaćanja za ponovni izračun stanja i ispravnu vizualizaciju rokova plaćanja (koji nisu povezani s bilo kakvim plaćanjem, čak ni djelomičnim, koje bi ažuriralo njihov status) koji su istekli.

Podsjećamo da ako želite ignorirati stanje *Dospjelo* u svrhu filtriranja, moguće je koristiti filtre u zaglavlju obrasca prema datumu dospijeća kako biste postigli isti rezultat.

Za korisnike koji imaju alat ***Supervisor***, moguće je omogućiti zadatak kod FI_MaturitiesOverdueStatusFix koji postavlja stanje *Dospjelo* za plaćanja s preostalim iznosom dospijeća != 0 i datumom dospijeća < danas.
:::