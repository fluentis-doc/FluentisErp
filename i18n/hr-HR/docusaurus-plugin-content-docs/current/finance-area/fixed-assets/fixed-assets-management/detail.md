---
title: Kartica Detalj
sidebar_position: 1
---

**Status osnovnog sredstva**: statusom se upravlja automatski na temelju operacija povezanih s imovinom/sredstvom i ne bi se trebalo ručno mijenjati. U slučaju prethodnog/prenesenog sredstva, koje također unosi akumuliranu amortizaciju, status će se promijeniti u Djelomično/Potpuno amortizirano. Za točan unos prethodnog/prenesenog sredstva  [**pogledati članak o knjigovodstvenom evidentiranju sredstva**.](/docs/finance-area/ledger-records/records/ledger-record) 


**Početak aktivnosti**, predložen je današnji datum, a predstavlja datum na koji je poduzeće stvarno počelo koristiti sredstvo. Tek od tog datuma bit će moguće amortizirati sredstvo. **Kraj aktivnosti** obično ne bi trebalo biti postavljeno, osim u posebnim slučajevima da se blokira izračun amortizacije i da se imovina više ne prikazuje u knjizi imovine. U normalnom upravljanju imovinom/sredstvom, zapravo, nakon završetka preostale amortizacije, imovina/sredstvo više neće biti prikazano kao amortizirano. **Datumi** koji se odnose na **jamstva/garanciju** imaju informativnu funkciju koja nije povezana ni s kakvim automatskim mehanizmom.  


Podkonto **osnovnog sredstva** za odabranu kategoriju imovine/sredstva automatski se prikazuje u polju Osnovno sredstvo; Šifrom dobavljača osnovnog sredstva program ne upravlja automatski, jer će dobavljači i referentni kupci različitih operacija biti posebno naznačeni unutar njih. 

Polje **Lokacija** poziva istoimenu tablicu i koristi se za pohranjivanje mjesta na kojem se imovina fizički nalazi (npr. sjedište tvrtke), dok je **serijski broj** slobodno tekstualno polje, gdje se može zabilježiti lokacija i serijski broj imovine/sredstva; šifra **zaposlenika** može omogućiti unos osobu koja koristi sredstvo.

Ovisno o postavkama parametara (Konfiguracija > Parametri > Administracija > Parametri osnovnih sredstava), 'prilagođeni' **postotak amortizacije** također može biti vidljiv za pojedinačnu imovinu, a koji će se koristiti s prioritetom u odnosu na kategoriju kojoj pripada, kao i jedinicu mjere za količine. 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image01.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image02.png)

 
U polju **Vrste odbitaka**, pojedinačno sredstvo može se povezati s prioritetnim tipom poreznog odbitka amortizacije. Padajući izbornik odnosi se na specifičnu tablicu u kojoj se može šifrirati i opis mogućih vrsta odbitka, a u donjoj mreži relativni postotak odbitka koji će se koristiti tijekom izračuna.  

Odjeljak **Trošak centri**: omogućuje dodjeljivanje automatskog postotka vrednovanja amortizacije različitim centrima troška definiranim u tvrtki. Za omogućavanje ovog odjeljka potrebno je aktivirati **flag Omogućen računovodstveni centar** u obrascu Parametri > Administracija > Parametri osnovnih sredstava.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image03.png)

 

Nakon toga postoji još niz opcija vidljivih otvaranjem proširenja Extra Data:



![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/detail/image04.png)

 

Zadana je vrijednost osnovnih sredstava **u uporabi** (se il flag non è presente, il cespite non potrà essere ammortizzato), lo stato di cespite **usato**  (ako flag nije prisutan, imovina se ne može amortizirati), status iskorištenog osnovnog sredstva ako je oznaka postavljena, amortizacija će se primijeniti samo za prvu godinu kupnje i oznaka Prva godina amortizacije (prisutna u tablici **[Kategorije osnovnih sredstava](/docs/configurations/tables/finance/fixed-asset-category)**) neće imati učinka, stoga se postoci primjene amortizacije prve godine neće prepoloviti.; 

**U održavanju** znači da se sredstvo treba ubrojiti u ispis održavanja; 

**Posuđen** flag je aktivan samo za kategorije nematerijalne imovine i služi za isključivanje njihovog ispisa u pregledu osnovnih sredstava u slučaju da je vrijednost imovine stornirana iz bilance; 

**Ukupna amortizacija** omogućuje da se imovini pripiše 100% amortizacije izravno u prvoj godini. Kada je sredstvo/imovina spremljena, ERP će provjeriti ispravnost ove postavke u odnosu na ograničenje postavljeno u kategoriji imovine. Bit će vidljiv status imovine ispisano ili ne, što će značiti da se reference zaglavlja imovine/sredstva ne mogu mijenjati ako su one već umetnute u konačan ispis pregleda osnovnih sredstava;

Flag **Prihod** i **Studija sektora** koristi se za identifikaciju imovine koja se uzima u obzir za posebne porezne obveze.


| Funkcija | Značenje |
| --- | --- |
| Spremi | Spremanje sredstva/imovine, obavezno dodijeliti broj sredstvu i aktivirati različite opcije. |
|  [Dokumenti](/docs/guide/common/operations-with-data/document-manager)  | Upravljanje arhiviranjem dokumenata vezanih uz obrazac u uporabi. |






