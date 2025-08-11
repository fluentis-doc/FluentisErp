---
title: Kartica imovinske operacije
sidebar_position: 2
---

Unutar ove kartice unose se detalji raznih operacija u knjizi imovine.

Stoga predstavlja, zajedno s tabom Detalji, glavnu sekciju kartice imovine.

| Funkcija | Značenje |
| --- | --- |
| Nova operacija | Aktivira kursor u prvoj tablici imovinskih operacija. |
| Brisanje operacije | Briše odabranu operaciju u tablici imovinskih operacija. |
| Nuovo ammortamento | Aktivira kursor u drugoj tablici amortizacija. |
| Brisanje amortizacije | Briše odabranu amortizaciju iz tablice amortizacija. |
| Automatsko knjiženje amortizacije | Izračunava amortizaciju za aktivu u upotrebi za godinu postavljenu u polju iznad tablice amortizacija. |
| Unos troškovnog centra (cdc) | Aktivira kursor u tablici troškovnih centara. |
| Brisanje troškovnog centra | Briše odabrani unos troškovnog centra iz tablice. |
| Izračun troškovnih centara | Izvršava izračun troškovnih centara za iznos odabrane stavke amortizacije. |
| Unos naloga/projekta | Aktivira kursor u tablici naloga/projekata. |
| Brisanje naloga/projekta | Briše odabrani unos naloga/projekta iz tablice. |
| Izračun naloga/projekta | Izvršava izračun za odabrani red amortizacije prema pripadajućem nalogu/projektu. |
| Detalji revalorizacije | Otvara upravljanje detaljima revalorizacije. Tipka je aktivna samo ako je flag „revalorizacija” postavljena za kategoriju aktive u upotrebi. |
| Dokumenti | Upravljanje dokumentacijom povezanoj s trenutnim prikazom (maskom). |

### GORNJI PREGLED

Ova mreža se koristi kako za operacije nabave (ili povećanja) imovine, tako i za operacije prodaje (ukupno ili djelomično).

Prvi redak se uglavnom odnosi na početnu kupnju imovine/sredstva: **datum operacije**, njen **progresivni** broj i naknadni **iznos** upisuju se u odgovarajući stupac: 

**Izvorni trošak**: ako se iznos odnosi na samu transakciju kupnje, predstavlja i početni trošak;

**Otuđenje**: ako se iznos odnosi na ukupno otuđenje, predstavlja i prodajnu vrijednost;

**Djelomično otuđenje**: ako se iznos odnosi na djelomično otuđenje, predstavlja i prodajnu vrijednost;

 

Ako je aktivno upravljanje količinama potrebno je popuniti i polje **količine**.

 
:::danger BILJEŠKA:
U slučaju učitavanja već postojeće povijesne imovine/sredstva, iznos sredstava amortizacije koji su već izračunati **NE** smije se unijeti izravno u ovaj odjeljak, već se prijaviti u odjeljku u nastavku (umetanjem ukupne vrijednosti akumulirane amortizacije) **sa statusom *Knjiženo*** kako bi se osiguralo da ovaj odjeljak ponovno izračunava ERP. 
:::

**![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image01.png)**

Umetanjem retka koji se odnosi na neku operaciju nad imovinom/sredstvom (npr. kupnja) i postavljanjem relevantnog iznosa u odgovarajući stupac (npr. izvorni trošak u slučaju kupnje), polje Iznos za amortizirati automatski ažurira program.  

**Iznos za amortizirati**: vrijednost "učitavanja" (kupnja ili u svakom slučaju učitani povijesni trošak) na temelju koje se izračunava amortizacija;

**Knjižna vrijednost**: Nabavna cijena - Akumulirana amortizacija;

**Već amortiziran**: Privremena vrijednost koja će se ažurirati u vrijeme obračuna amortizacije, a zatim će se vratiti na nulu ažuriranjem ukupne akumulirane amortizacije (u vrijeme obračuna amortizacije).


### SREDIŠNJI PRIKAZ Amortizacije:

predstavlja popis obračunate amortizacije za sredstvo/imovinu: unos može biti ručni ili automatski.  

- Ručni unos zahtijeva naznaku referentne godine, progresivni referentni broj retka (ali samo za neinkrementalne kategorije, za ostale je polje skriveno jer će amortizacija uvijek biti povezana s progresivnim brojem) i vrstu amortizacije koja se primjenjuje. Ovdje će ERP izvijestiti o postavkama referentne kategorije imovine, s kontom i podkontom za postotak i iznose. Na kraju mreže nalazi se referentni datum amortizacije, predložen kao kraj financijske godine referentne računovodstvene godine retka, te na kraju iznosi odbitnog i neodbitnog dijela amortizacije.  

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image02.png)


- Automatsko umetanje uključuje definiranje referentne godine u polju iznad i korištenje tipke *Izvrši automatsku amortizaciju* koji će prijaviti očekivane podatke o amortizaciji u kategoriji za cjelokupno sredstvo u upotrebi.

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image03.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image04.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image05.png)

 

Izračun amortizacije bit će prikazan u stupcu ***Već amortiziran*** gornjeg prikaza koji će služiti za označavanje iznosa koji još nije konačan. Samo uz naznaku flaga ***Knjiženo***, u različitim redovima, veći će se iznosi pripisati stupcu fonda koji se odnosi na samu vrstu amortizacije. 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image06.png)

 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image07.png)

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/image08.png)

 
:::danger BILJEŠKA
Ručno umetanje flaga se **NE** bilježi u računovodstvu (zbog toga postoji postupak obračuna amortizacije). Obično se koristi samo za početno ručno učitavanje povijesne situacije, za što je obično potrebno jedno umetanje koje se sastoji od ukupnog iznosa amortiziranog u godini koja prethodi početku korištenja novog softvera, a ne od cjelokupnog detalja amortizacije.  
:::

Prilikom spremanja retka s flagom *Knjiženo*, Fluentis će pitati za povezivanje postojećeg računovodstvenog zapisa, poruka na koju se obično odgovara negativno (u slučaju obnavljanja povijesnih podataka).

Flag "Fiskalni" omogućuje fiskalno upravljanje amortizacijskom stavkom te se predlaže na temelju istog flaga postavljenog u kategoriji imovine. U nekim slučajevima može se koristiti ručno za bilježenje u knjizi imovine/sredstava, ciklusa ubrzane amortizacije koja se koristi u redovnom proračunu i fiskalne amortizacije kojom se upravlja samo za izračun poreza. Fiskalno upravljanje, s druge strane, postiže se valorizacijom polja s odbitnim/neodbitnim iznosima amortizacije, koji se automatski valoriziraju na temelju postotka odbitka povezanog s imovinom/sredstvom ili povezanom kategorijom.

Posljednji odjeljak sadrži detalje o vrednovanju mjesta troška za amortizaciju odabranu u srednjem prikazu.


### Učitavanje naslijeđenog sredstva

Za umetanje imovine u sustav koja već postoji u trenutku početka knjiženja, s povezanom situacijom fonda amortizacije, postupi se na sljedeći način:
1. Umetne se nova imovina/sredstvo s matičnim podacima o imovini/sredstvu: opis, kategorija itd. (kartica *Detalji*) i obratiti pozornost na **datum početka aktivnosti** koji mora biti neki prijšanji;

2. Na kartici *Imovinske operacije* unese se povijesni trošak tako da se naznači datum kupnje i ispuni polje **Izvorni trošak**;

3. **NE** ručno ispuniti polje *Zbirna linearna amortizacija* u retku (inače bi bilo prebrisano pri sljedećoj amortizaciji), već se umetne redak (ispod) u pregled Amortizacije s godinom koja je jednaka godini koja prethodi godini umetanja i ukupan iznos već obračunate amortizacije, te se postavi flag knjiženo. Amortizacija se mora unijeti u polje troška (nametajući je neovisno o ostalim prethodnim poljima).


### Upravljanje raspolaganjem imovinom (slučajevi djelomičnog raspolaganja) 

#### Slučaj imovine koja je već amortizirana 
Valjani primjer ako se imovinom nije upravljalo putem komponenti ili povećanja, već na nepodijeljen način

1. Automatski računovodstveni unos se ne radi, tako da se može upravljati imovinom/sredstvom i unutar kartice/šifrarnika, a zatim upisati unos amortizacijskog fonda na imovinu zasebno. 
2. Da bi se djelomično razdužila imovina, unese se negativan iznos u stupac amortizacije koji odgovara udjelu povijesnog troška prodanog ili uništenog. 
3. U stupcu Djelomično otuđenje se naznači (**uvijek**) vrijednost po kojoj se prodaje (ili 0,00 ako je uništeno).  
4. Stupac prenesenog izvornog troška automatski će se ažurirati.


#### Slučaj da imovina NIJE u potpunosti amortizirana 

Početna situacija

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling1.png)

Da bi se djelomično razdužila imovina, unese se negativan iznos u stupac vrijednosti koji odgovara dijelu izdvojenog fonda proporcionalnom povijesnom trošku prodanog ili uništenog sredstva/imovine. 

Da bi se djelomično razdužila imovina, unese se negativan iznos u stupac vrijednosti koji odgovara dijelu izdvojenog fonda proporcionalnom povijesnom trošku prodanog ili uništenog sredstva/imovine. 

Izračun koji se radi u stupcu izvornog troška također uzima u obzir kapitalni dobitak/gubitak od prodaje, koji se mora unijeti uzimajući u obzir dio neto knjigovodstvene vrijednosti koji se prodaje.  

**Primjer 1**:
Povijesni trošak 1000, amortiziran za 125.   
Prodana je polovica po cijeni od 200.  

Prilagođava se rezerviranje izdvojeno za polovicu, dakle -62,50 i prodajna vrijednost (paziti da se ispuni stupac Djelomično otuđeno, inače, ako seispunim ukupno raspolaganje, prisiljava se na preuzimanje cjelokupnog povijesnog troška) od 200. 

Stoga s mora izračunati kapitalni gubitak koji treba unijeti na temelju polovice neto knjigovodstvene vrijednosti, dakle 875 / 2 = 437,50   
Kapitalni gubitak = 437,50 – 200 = 237,50

Polje prijenosa izvornog troška automatski se izračunava na 500 što je povijesni trošak stvarno preuzet iz knjige sredstava/imoivne za polovicu.  


![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling2.png)

**Primjer 2**:
Povijesni trošak 1000, amortiziran za 125.   
Otuđena polovicu po cijeni od 0,00  

Prilagođava se rezerviranje izdvojeno za polovicu, dakle -62,50 i ima se prodajna vrijednost (paziti da se ispunite stupac Djelomično otuđeno, inače ako se ispuni ukupno otpuštanje, prisiljava se na preuzimanje cjelokupnog povijesnog troška) od 0,00. 

Stoga se mora izračunati kapitalni gubitak koji treba unijeti na temelju polovice neto knjigovodstvene vrijednosti, dakle 875 / 2 = 437,50   
Kapitalni gubitak = 437,50 – 0 = 437,50

Polje prijenosa izvornog troška automatski se izračunava na 500 što je povijesni trošak stvarno preuzet iz knjige sredstava/imovine za polovicu. 

![](/img/it-it/finance-area/fixed-assets/fixed-assets-management/patrimonial-operations/selling3.png)

:::tip[Prijedlog]
Prodaja (alijenacija) osnovnog sredstva, osobito u jednostavnijim slučajevima potpune prodaje, može se automatiziranije obraditi putem knjiženja prodaje s kontnim događajem koji ima omogućenu funkcionalnost za osnovna sredstva i s vrstom operacije Potpuna (ili djelomična) alijenacija.  

U knjiženju će se prikazati [**odgovarajući odjeljak Osnovno sredstvo**](/docs/finance-area/ledger-records/records/ledger-record)
:::