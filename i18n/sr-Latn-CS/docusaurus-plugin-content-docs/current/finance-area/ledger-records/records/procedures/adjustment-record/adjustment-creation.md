---
title: Kreiranje usklađenja   
sidebar_position: 2
---

Ovom procedurom moguće je izračunati i knjižiti podatke o **obračunatim i unaprijed plaćenim troškovima** vezanim za računovodstvene zapise prisutne u bazi podataka:   

to uključuje, na primjer, ispravke/dopune (odnosno unaprijed plaćene troškove i obračunate troškove) vezane uz osiguranje, najam, leasing ili usluge podrške, koji su povezani s razdobljem koje prelazi iz jedne godine u drugu. Stoga su, prema računovodstvenim načelima, podložni ispravkama.  

## Zahtjevi za korištenje procedure  

1) Trebaju biti definirani, u tablici **[Tipovi konta](/docs/configurations/tables/finance/account-types)**, trebaju biti definirani ekonomski tipovi konta (nazvani, na primjer, ‘za ispravak’) koji imaju aktiviranu flag ‘**Usluga**'. 

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image01.png) 

Izračun se obavlja (kao u međugodišnjim bilancama) SAMO za podkonta za koje su u kontnom planu dodijeljeni ovi specifični tipovi računa.   

2) Trebaju u **[parametrima knjiženja](/docs/configurations/parameters/finance/accounting-parameters)** biti definirana standardna podkonta za evidenciju obračunatih/unaprijed plaćenih troškova aktive/pasive.

:::NAPOMENA
Na razini kontnog plana se mogu specificirati podkonta obračunatih/unaprijed plaćenih troškova za pojedina podkonta troška/prihoda, koji će se koristiti kao prioritetni za zapis/evidenciju dopune ili ispravka.  
:::

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/adjustment-creation/image02.png)

3) Treba ispravno koristiti raspon datuma u računovodstvenim zapisima. 

:::NAPOMENA
Preporučuje se postavljanje **[Parametara umetanja](/docs/finance-area/ledger-records/records/ledger-record)** s opcijom 'Nema datuma za tip servisnog konta' kako bi se korisnika obvezalo da prilikom svakog zapisa unese raspon datuma koji su valjani za pojedini zapis.  
:::

## Upravljanje  

### Procedura 

- odrediti za koje računovodstveno razdoblje se želi izvršiti obračun i datum obračuna (zadano je predložen današnji datum); 

- odrediti datum knjiženja/obračuna koji će se dodijeliti računovodstvenim zapisima koje treba kreirati; 

- odrediti predloške knjiženja koji će se koristiti za ispravke i dopune. 

Opcija pojedinačnog knjiženja odlučit će hoće li se sve ispravke objediniti u jedno knjiženje, a sve dopune u drugo.  

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image01.png) 

Nakon što se ove postavke spreme, aktivirat će se tipkom **Izračunaj** koji će popuniti donji dio s popisom predloženih usklađenja: unutar njih bit će navedena vrsta knjiženja, reference na izvorno knjiženje, broj dana ispravka, te će biti moguće uređivati iznos i podkonto.

Ako postavljeni predlošci knjiženja predviđaju upravljanje centrima troška/prihoda i izvorni zapis ima odgovarajuće podatke za ispravak/dopunu, u donjem dijelu bit će prisutni i detalji izračuna.  

 Sljedeća faza bit će potvrđivanje, redak po redak, da je izračunati iznos ispravan i potpun putem označavanja flaga **Kontrolirano**, što će omogućiti izmjenu i odgovarajućeg kontrolnog flaga za donji dio koji se odnosi na centre troška/prihoda.. 

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image04.png)

Sve stavke sa statusom *kontrolirano*  bit će predmet računovodstvenog knjiženja koje će se izvršiti pritiskom na tipku **Knjiži**. 

Korisnik može nastaviti s kreiranjem više knjiženja dok se detalji definiraju, kao i ponovo izračunati popis kako bi provjerio nisu li dodane druge transakcije (tipično dopuna novih računovodstvenih evidencija) ili stvoriti nova usklađenja za njih. Također je dostupna  **[dostupna kartica za vraćanje](/docs/finance-area/ledger-records/records/procedures/adjustment-record/adjustment-creation)** prethodne situacije.

:::NAPOMENA
Knjižit će se sve stavke s aktivnim flagom **Kontrolirano**.
:::
 
U slučaju da su izvršene promjene u računovodstvenim zapisima nakon pokretanja izračuna, može biti korisno koristiti flag **Provjeri izračun prilagodbe**:  
Ova tipka će izvršiti ponovni izračun redak po redak, prikazujući eventualne razlike u odnosu na ono što je već predloženo u pregledu (posebice u poljima **Usklađenje dugovne/potražne strane** i **Nova usklađenje dugovne/potražne**), s tipkom za usklađivanje razlika ili njihovo ignoriranje. Također će brisati stavke ispravki/dopuna povezane s računovodstvenim zapisima koji više ne postoje (neće biti moguće knjiženje ako postoje stavke s referencama na nepostojeće zapise, u tom slučaju bit će potrebno proći kroz ovu masku i obrisati ih).  

:::danger PAŽNJA
U slučaju da su usklađenja već knjižena, ne postoji nikakva blokada za izmjenu izvorne transakcije koja je dovela do ispravke; jedina blokada je brisanje knjiženja, što nije dopušteno. Stoga se preporučuje maksimalna pažnja prilikom izmjene knjiženja koja su uključena u operacije usklađenja na kraju godine.  
:::

:::note NAPOMENA vezana uz postupak **[Automatskog zatvaranja računa](/docs/finance-area/ledger-records/records/procedures/automatic-account-closing/new-account-closing)**: postoji opcija automatskog prijenosa operacija usklađenja nakon knjiženja ponovnog otvaranja računa. S ovom opcijom, aplikacija će na datum ponovnog otvaranja evidentirati poništenje ispravki, dok će izvršiti prijenos dopuna na datum izvorne evidencije usklađenja.  
:::

**FLAG Pojedinačno knjiženje:** s ovim aktivnim flagom, knjiženje usklađenja odvija se u jednom knjiženju (jedinstveni broj) umjesto u više knjiženja, koliko god ispravaka treba izvršiti.   
Tijekom ponovnog otvaranja računa, prijenos za otvaranje obračunatih i unaprijed plaćenih troškova slijedit će istu postavku.  

### UPRAVLJANJE FAKTURAMA ZA PRIMITAK  

U ovom odjeljku objašnjeno je kako automatski upravljati specifičnom situacijom faktura za primitak, tj. rezervacijom koja se mora izvršiti na kraju godine kada će knjiženje troška ili prihoda biti priznato tek u sljedećem računovodstvenom razdoblju.  

U sažetku, može se vidjeti na sljedećim slikama kako prepoznavanje ove situacije automatski obavlja softver i koristi odgovarajući račun predviđen u općim parametrima računovodstva.   

Također je moguće prilagoditi konto koji će se koristiti za svakog pojedinog dobavljača ili kupca.  

Na sličan način moguće je prilagoditi konto koji će se koristiti za druge obračunate i unaprijed plaćene troškove postavljanjem posebnog konta u odnosu na konto troška ili prihoda izravno u kontnom planu.  

#### Standardna situacija BEZ SPECIFIČNIH POSTAVKI ZA DOBAVLJAČA  

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image08.png)

I NITI U RAČUNU TROŠKA  

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image09.png)

POSTAVKE SU SAMO NA RAZINI PARAMETARA RAČUNOVODSTVA  

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image10.png)

**SLUČAJ 1: knjiženje u godini X, a obračun potpuno u godini X+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image11.png)

**SLUČAJ 2: knjiženje u godini Y, a obračun cijela u godini Y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image12.png)

**SLUČAJ 3: knjiženje u godini X, a obračun prelazi iz godine X u godinu X+1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**SLUČAJ 4: knjiženje u godini Y s obračunom koja prelazi iz godine Y u godinu Y-1**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image13.png)

**REZULTATI**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image15.png)


Redak 1 je ispravak za slučaj 1, gdje je cijeli trošak knjižen u godini X pripisan na obračun prethodne godine X+1: Fluentis koristi konto "Obračunati troškovi" definiran u parametrima općeg računovodstva.  

Redak 2 je dopuna za slučaj 2, gdje je cijeli trošak knjižen u godini Y pripisan na obračun prethodne godine Y-1: Fluentis koristi konto "Računi za primitak" definiran u parametrima općeg računovodstva.  

Redak 3 je ispravak za slučaj 3, gdje je trošak knjižen u godini X samo djelomično pripisan na obračun sljedeće godine X+1: Fluentis koristi konto "Obračunati troškovi" definiran u parametrima općeg računovodstva.  

Redak 4 je dopuna za slučaj 4, gdje je trošak knjižen u godini Y samo djelomično pripisan na obračun prethodne godine Y-1: Fluentis koristi konto "Obračunati troškovi" definiran u parametrima općeg računovodstva.  

**S POSTAVKAMA SPECIFIČNIM ZA DOBAVLJAČA/RAČUNOVODSTVENI RAČUN**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image16.png)


![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image17.png)

**REZULTAT**

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/management-tab/image18.png)

Umjesto zadano postavljenih podkonta koriste se prilagođena podkonta preuzeta iz računa troška ili od dobavljača.  

## Povrati

Postoji završna kartica ‘**Povrati**' služi za pregled izvršenih knjiženja i za njihovo poništavanje putem odgovarajuće tipke.  

![](/img/it-it/finance-area/ledger-records/records/adjustment-record/new/restore-tab/image01.png)

Moguće je koristiti polja za filtriranje po kontu / podkontu i pripadajuće oznake za odabir samo knjiženja dopuna ili samo knjiženja ispravki prije nego što se postavi na vraćanje.