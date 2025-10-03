---
title: Poduzeće
sidebar_position: 3
---


:::tip[FAst Start]
Tablica se koristi u postupku [**Fast Start**](/docs/guide/fast-start)

U slučaju ručne konfiguracije, potrebno je pratiti check listu s navedene stranice.
:::

### UVOD

Tablica, koja se smatra osnovnom i neophodnom za upravljanje bilo kojim drugim podacima, omogućuje kodiranje tvrtki povezanih s bazom podataka na koju ste povezani.

Moguće je kodirati neograničen broj tvrtki koje će uvijek biti sve istovremeno dostupne unutar iste baze podataka.  
Nakon unosa / kreiranja nove tvrtke, bit će potrebno upravljati pravima vidljivosti za korisnike putem aplikacije ARM.

:::note Napomena
Prilikom instalacije Fluentis ERP-a automatski se kreira jedno početno društvo, tako da baza nikada nije potpuno prazna.
:::

Uz pojam tvrtke (ili preciznije, poduzeća, uključujući i pravni smisao, kako su evidentirana u bazi podataka), potrebno je odmah spomenuti i pojam **DIVIZIJE**.

Za svako društvo je potrebno <u>**kodirati barem jednu diviziju**</u> (na primjer, moguće ju je nazvati "*Glavna poslovnica*" ili sličnim nazivima, ako ne postoji posebna potreba za definiranjem više divizija, pod uvjetom da su shvaćeni način upravljanja i njihove specifičnosti).

:::tip INFO
Pojam divizije može se tumačiti kao poslovni odjel ili čak poslovna jedinica, koja je dovoljno značajna da ima vlastiti aktivni i pasivni ciklus, odnosno zasebno kreira dokumente, narudžbe, račune itd.
Računovodstvo, iako jedinstveno na razini društva koje sastavlja jednu bilancu, može se jednostavno filtrirati po diviziji kako bi se izradio divizijski bilanc. Također, u raznim formama – poput pretrage knjiženja ili otvorenih stavki – moguće je filtriranje po diviziji (u nekim slučajevima je to polje filtriranja inicijalno "skriveno" unutar proširivog dijela forme).
Čak su i šifrarnici artikala odvojeni jer se odnose na različite poslovne jedinice
:::

---

### UPRAVLJANJE TABLICOM  

Maska koja se otvara prikazuje popis društava prisutnih u bazi podataka.
Radi praktičnosti, u mreži su prikazana neka polja koja se nalaze i u detaljima samog društva, kako je prikazano u nastavku.

**Za kreiranje novog poduzeća** (naknadno će biti definirana jedna ili više pripadajućih divizija) **pritisnite tipku *NOVO***.

:::note Napomena 
Nakon kreiranja novog poduzeća u ovoj tablici, potrebno je upravljati dopuštenjima vidljivosti za različite korisnike putem aplikacije ARM, te prethodno definirati i samo poduzeće unutar ARM-a (izbornik "Poduzeća")  
:::

### DETALJI OSNOVNIH PODATAKA O PODUZEĆU 

**Šifra** poduzeća (koja mora odgovarati šifri definiranoj na portalu ARM)  

**Opis**: službeni naziv poduzeća (pravna forma)  

**PDV broj (OIB)**: obično se unosi bez predfiksa države, npr. IT za Italiju  

**Porezni broj poduzeća**: može biti isti kao i PDV broj

**Šifra djelatnosti**: tj. ATECO šifra glavne djelatnosti poduzeća  

**Država poduzeća**: na temelju ovog polja Fluentis prepoznaje lokalizaciju i zadane porezne postavke koje će prikazati u sustavu

**Valuta**: valuta u kojoj se vodi službeno knjigovodstvo poduzeća.  

:::note Napomena
Država i valuta poduzeća su već unaprijed postavljene jer su obavezni podaci definirani prilikom instalacije Fluentis sustava.
To su ključni podaci koji utječu na čitav niz drugih administrativnih i poreznih postavki.
Valuta, posebno, označava onu u kojoj se vodi naše službeno knjigovodstvo.  
:::

**Jezik**: ovo polje nije obavezno, ali je vrlo važno – u njemu se definira službeni jezik poduzeća.
Koristi se kao zadani jezik za ispis dokumenata, kao i za automatsko popunjavanje opisnih nizova u računovodstvu.  

**Povezana evidencija**: ovo je opcionalno polje koje služi za dvije vrste korištenja: prvo, u slučaju da je tvrtka samostalni poduzetnik, ovo je poveznica na karton koji nam omogućuje preuzimanje podataka fizičke osobe za porezne prijave.  
Drugo korištenje: u slučaju dvije tvrtke koje pripadaju grupi i imaju međusobne odnose, a time i međusobne dokumente, služi za prijenos podataka iz jedne tvrtke u drugu; na primjer, kako bi račun za prodaju prve tvrtke automatski postao račun za kupnju za drugu tvrtku: da bi se to postiglo, druga tvrtka mora znati u kojem kartonu potražiti dobavljača kako bi ispravno naslovila dokument.
Postavka se također koristi za proceduru modula Kontroling  > Zatvaranja > Međugodišnji > Konsolidacija gdje sustav neutralizira troškove i prihode, potraživanja i dugove između dviju društava koja su dio grupe, dok se troškovi i prihodi, potraživanja i dugovi "vanjski" agregiraju kako bi se dobio konsolidirani bilans.

**Polja adrese**: adresa sjedišta poduzeća

**Porezni ured (PDV)**: u ovo se polje unosi grad u kojem se nalazi nadležni porezni ured za PDV poduzeća

**REA ured / Broj REA upisa**: šifra županije i broj upisa u registar poduzeća (potrebno za e-račune)

**Upisani/ uplaćeni temeljni kapital**: podaci o stanju temeljnog kapitala poduzeća (također obavezni za e-račune)

Potrebno je unijeti i podatke o **Članovima** te **Status** poduzeća, npr. je li u likvidaciji – što je također obavezno za potrebe elektroničkog fakturiranja.

**Pravni oblik**: u ovom polju se navodi kod koji identificira vrstu tvrtke. Tablica je fiksna i unaprijed definirana.

**Porezni režim**: u ovom polju se označava pod kojim poreznim režimom se posluje. Tablica je fiksna i unaprijed definirana.

:::tip GRUPA PDV-a
U popis mogućih poreznih režima dodan je kod 61 – GRUPA PDV-a. Ako se odabere ova opcija (u slučaju da poduzeće koje se trenutno uređuje pripada grupi PDV-a, te stoga koristi svoj porezni broj (OIB), ali PDV broj matičnog poduzeća), prilikom izvoza XML datoteke za izlazni e-račun, bit će uključeni i PDV broj i porezni broj (OIB).

To je zato što sustav SDI (Sistema di Interscambio) provjerava oba podatka – ne samo PDV broj – u slučaju kada poduzeće izjavljuje da pripada grupi PDV-a.
:::

**Decimalni brojevi za polja količina**: označava koliko decimalnih mjesta treba prikazati u ispisima za polja količina u dokumentima.  
Flag **Prikaz simbola valute** označava treba li prikazivati simbol valute (i polja s vrijednošću nula) u ekranima za prikaz knjiženja.  

Flag **Upravljanje kontrolingom** omogućuje "napredne" procedure (kompletan set funkcionalnosti) za controlling područje za društvo koje se trenutno uređuje.  

**Matična tvrtka**: polje koje se koristi u proceduri modula kontrolling *Konsolidacija master*. Ova funkcionalnost provodi specifičnu konsolidaciju podataka na matičnom poduzeću.  

Unosem društvo matičnu kompaniju, polje za usklađivanje s planom računa matične kompanije postaje vidljivo unutar plana računa odabrane kompanije.  
Dakle, u fazi konsolidacije, računovodstveni zapis podružnice bit će prebačen na navedeni račun koji se odnosi na matičnu kompaniju.  
Podatak koji se obrađuje u ovoj obradi, u svakom slučaju, je onaj koji se upravlja u modulu kontrolinga i koji su već obradili odgovarajući uzroci troškova, a ne podatak iz općeg računovodstva.  
Samo će dio podataka od računovodstvene prirode biti transkodiran, dok će se kretanje troškovnog centra (centar poduzeća) prikazati bez izmjena, a preduvjet za prijenos je, zapravo, da kod troškovnog centra bude isti i u matičnoj kompaniji i u podružnici.

#### Donji odjeljak

U donjem dijelu prozora nalaze se tri proširive sekcije s dodatnim podacima koji se mogu unijeti. U ovom slučaju radi se o opcionalnim podacima koji nisu nužno prisutni, barem ne u početnoj fazi:

U sekciji **EDI** (Electronic Data Interchange) moguće je navesti određene identifikacijske podatke poduzeća koji se koriste u tim telematičkim datotekama. 

U sekciji **Trošak biljega**, unosi se vrijednost troška biljega te prag iznosa koji uzrokuje obvezu primjene biljega na računu, broj odobrenja za virtualni biljeg te županija porezne uprave.
Podsjećamo da se u tablici poduzeća unosi minimalna vrijednost transakcija oslobođenih PDV-a koje pokreću obvezu dodavanja biljega na računu. No, ovaj trošak biljega mora također biti definiran u tablici Vrste troškova i unesen u matične podatke klijenta.
Samo pod tim uvjetima, ako je iznos na računu oslobođen PDV-a, trošak biljega bit će automatski dodan.  

**Proširiva sekcija Ri.Ba.** : ovdje se unose identifikacijski podaci poduzeća za bankovni telematski sustav: SIA kod (5 alfanumeričkih znakova) i CUC kod (8 znakova) za SEPA sustav.  


### Mreža podjela, Zadana banka za knjiženje i Logotip

U desnom stupcu maske nalaze se tri mreže.

U prvoj su vidljive podjele definirane za poduzeće. Važno je uvijek imati na umu da za svako poduzeće unutar softvera mora postojati barem jedna podjela, čak i ako ona, kao što je često slučaj, odgovara jedinoj poslovnici. U tom se slučaju često preimenuje u Podjela 1 ili, još bolje, jednostavno u Poslovnica. Na svakoj podjeli moguće je definirati odvija li se kontroling s tjednom ili mjesečnom učestalošću.

U drugoj mreži možemo označiti flagove koji se odnose na:

Zadnji dio odnosi se na logotip poduzeća, pri čemu se zadani logotip (postavljen putem tipke ***Promijeni zadani logotip*** u traci izbornika) automatski koristi unutar dokumenata aktivnog/pasivnog ciklusa.

Potrebno je prethodno uvesti jednu ili više slika koje će se koristiti kao logotip putem tipke ***Uvoz slika***.

---

### TIPKA OPĆE POSTAVKE (ZA POKRETANJE FAST START PROCEDURE)

Ova tipka u novoinstaliranoj bazi podataka ili u poduzeću koje je dodano u bazu podataka, kreira cijeli niz osnovnih početnih podataka; na primjer, kontni plan te osnovne postavke za evidenciju PDV-a, knjižne temeljnice, vrste dokumenata kao što su narudžbe, otpremnice i računi itd.

Radi se o vrlo korisnoj funkcionalnosti u fazi definiranja strategije za pokretanje novog poduzeća i za odgovarajuće postavljanje softvera, jer u određenim slučajevima može biti isplativije, kako bi se softver što prije doveo u potpuno operativno stanje, započeti s početnim zadanim postavkama, a zatim ih prilagoditi — primjerice kontni plan, knjižne temeljnice i druge zadane tablice — konkretnim potrebama, nego početi od nule stvaranjem svih tih tablica i postavki.

:::tip[Više informacija]
Za više detaljnih informacija pogledajte [**ovdje**](/docs/guide/fast-start)
:::

### POTREBNI PODACI ZA ELEKTRONIČKO IZDAVANJE RAČUNA

:::tip PAŽNJA

Preporučuje se da se svi podaci u matičnim podacima poduzeća popune na potpun način. Ipak, ovom prilikom želimo istaknuti polja koja su nužna za kreiranje elektroničkih računa. 

-	Prije svega, PDV identifikacijski broj (OIB) i porezni broj  
-	Kod primatelja i PEC adresa nisu obavezna polja, već služe isključivo za pohranu vlastitih podataka  
-	Kada je riječ o telefonu i faksu, ako ih se želi unijeti, preporučuje se ne koristiti kosu crtu (/) za odvajanje pozivnog broja, kako bi se izbjegli mogući problemi prilikom formalne provjere od strane sustava za razmjenu (SdI), zbog neprihvaćenih znakova.  
-	Polja koja se odnose na URED REA: prvo polje predviđeno je za unos oznake županije, a drugo za broj  
-	Također je potrebno unijeti podatke o članovima (Soci) i stanje poduzeća, tj. nalazi li se ono u likvidaciji ili ne  
-	U tu svrhu također treba unijeti podatke o upisanom i uplaćenom kapitalu, pazeći da se: ne koristi točka za tisuće, decimalna vrijednost odvaja točkom, a ne zarezom, zbog formalnih kontrola od strane SdI,  
-	Pravna forma i porezni režim također su obavezni podaci  
:::


### POSTAVKE ZA PODUZEĆA KOJA SU DIO PDV GRUPE

:::tip Info: PDV grupa  
Uvođenjem ove norme, predviđena je mogućnost za poduzeća povezana financijskim, ekonomskim i organizacijskim interesima da stvore jedinstvenu grupu, koja se smatra jednim poreznim obveznikom (samo u svrhu PDV-a) prema fiskalnim vlastima. Stoga će imati jedinstveni broj PDV-a. Poduzeća koja su dio grupe fakturirat će transakcije prema trećim stranama s zajedničkim PDV-om, PDV-om grupe. S druge strane, isporuke dobara i usluga razmijenjene između tvrtki unutar grupe neće se smatrati oporezivim za PDV. Kao posljedica toga, sve transakcije koje izvrši jedan od subjekata grupe smatraju se kao izvršene od strane cijele grupe. Račun i drugi dokumenti izdaju se od strane predstavnika Grupe ili sudionika, a na njima se osim broja PDV-a Grupe navodi i OIB subjekta sudionika koji je izvršio transakciju.
:::

U slučaju da je jedno ili više poduzeća prisutnih u bazi podataka dio PDV grupe, u ovoj tablici je nužno popuniti sljedeća polja **PDV br** i **Porezni broj** (specifico za društvo koje je dio grupe)
Također je važno postaviti i pravnu formu **Pravni oblik** na vrijednost "61 – PDV grupa. 


### **NOVA KARTICA – PDV GRUPA**

Na ovoj kartici unose se postavke PDV grupe koju čini jedno ili više poduzeća prisutnih u bazi podataka.

Razdoblje / Godina početka i Razdoblje / Godina završetka: koriste se za definiranje valjanosti postavke i statusa pripadnosti PDV grupi

Je li poduzeće matično: označava se flag ako je trenutno aktivno poduzeće matično, tj. ono koje koristi vlastiti PDV broj i prenosi ga na ostala poduzeća u grupi

Combo box – matično poduzeće: služi za povezivanje aktivnog poduzeća s već postojećim matičnim poduzećem unutar iste baze podataka

Matično poduzeće – vanjska evidencija: koristi se kada je matično poduzeće vanjsko, tj. nije prisutno u istoj bazi kao poduzeće (npr. jer se vodi u drugom softveru); u tom slučaju ga je potrebno unijeti kao jednostavan kontakt iz kojeg se mogu čitati podaci poput PDV broja itd.


**NAPOMENA: Unutar obrade LiPe izvještaja (tromjesečna prijava PDV likvidacija) nalazi se flag za omogućavanje načina rada PDV grupe za samu prijavu.**

---

### VIDEO TUTORIJALI

:::important Pogledaj također
[**VIDEO TUTORIJALI O OPĆIM TABLICAMA**](/docs/video/finance/intro)
:::