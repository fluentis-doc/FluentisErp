---
title: FAQ Administracija
sidebar_position: 1
---

<details>

  <summary>1. Koji se e-računi čuvaju u fascikli postavljenoj u tabeli <b>Konfiguracija elektronskih dokumenata</b>?</summary>
  
U matičnim podacima kupca moraju biti ispunjena dva uslova.

Prvi je aktivirana oznaka <b>Potpis dokumenta</b>.                 
Drugi je oznaka <b>Potpisani e-račun</b>, koja može imati tri stanja:

- Kada je za kupca postavljena na 1, predviđeno je potpisivanje nezavisno od drugih opcija konfiguracije. Stoga se datoteka uvek izvozi u fasciklu definisanu u konfiguraciji elektronskih dokumenata kako bi se potpisala;

- Kada je za kupca postavljena na 0, potpisivanje nije predviđeno nezavisno od drugih opcija konfiguracije. Stoga se datoteka ne izvozi u fasciklu definisanu u konfiguraciji elektronskih dokumenata, čak ni ako je fascikla postavljena;

- Kada ima vrednost Null, kao u prethodno navedenom primeru (što je podrazumevana postavka), primenjuje se postavka iz *Konfiguracije elektronskih dokumenata*. Ako je definisana putanja za kreiranje datoteke, datoteka se uvek kreira, a u suprotnom se ne kreira.

</details>


<details>

  <summary>2. Pri kreiranju e-računa Fluentis javlja da vrednosti težine ne mogu biti veće od 9.999. Kako se može ukloniti ovo ograničenje?</summary>
  
Ovo je ograničenje povezano sa pravilima e-računa, prema kojima vrednosti **težine** veće od 9.999 nisu dozvoljene.

Kako bi se izbegao ovaj problem, ako se prekorači prag od 9.999, potrebno je promeniti mernu jedinicu i koristiti odgovarajuću veću mernu jedinicu kako bi se dobile željene vrednosti.

</details>


<details>

  <summary>3. Kako je moguće aktivirati oznaku <b>PDV grupa</b> u već kreiranoj <b>Izjavi o nameri</b>?</summary>
  
Potrebno je izvršiti sledeću naredbu `UPDATE` i uneti ID izjave o nameri:

```sql
update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[ID izjave o nameri]'
```
</details>

<details>

  <summary>4. Kako je moguće odštampati karticu konta filtriranjem knjiženja prema periodu nastanka troška ili prihoda? Na primer, kada se u štampi podkonta postavi željeni period u poljima "od datuma perioda" i "do datuma perioda", ne uzima se u obzir period nastanka troška ili prihoda, već se čini da se čita datum perioda koji se u računovodstvenim knjiženjima nalazi pored datuma knjiženja.</summary>

Potvrđujem da se u filterima, kada se navodi *od datuma perioda* i *do datuma perioda*, misli na datum perioda iz zaglavlja, odnosno na takozvani "računovodstveni" period. Ti datumi se po pravilu podudaraju, ali se ovaj datum može koristiti, iako se u praksi retko koristi, na primer za knjiženje korektivnih knjiženja na datum odobrenja finansijskih izveštaja koja se odnose na 31.12., kada je taj period možda već zaključan zbog konačne štampe dnevnika pa sistem više ne bi prihvatio taj datum knjiženja.

Što se tiče perioda nastanka troška ili prihoda, štampa kartice konta i uopšteno sistem nisu predviđeni za rad na taj način. Ispravniji postupak je izračunati zaključivanje konta za određeni period (**privremeno zaključavanje**) i izvršiti pripadajuća korektivna i dopunska knjiženja.

Alternativno se može koristiti forma **Pregled konta**, u kojoj je putem *Object Navigatora* moguće dodati svojstva `FromAccrualDate` i `ToAccrualDate`, koja predstavljaju početni i završni datum perioda nastanka troška ili prihoda, i upotrebiti filter u prvom redu mreže detalja.

Druga mogućnost je prilagoditi izveštaj i formu za njegovo pokretanje dodavanjem potrebnih filtera, polja i ostalih elemenata.

</details>

<details>

  <summary>5. Zašto pri poređenju privremenog zaključavanja konta izračunatog za period od 1.1. do 31.12. sa rezultatima modula Administracija u zaključivanju kontrolinga postoje vremenska razgraničenja koja nisu izračunata u Administraciji?</summary>

Modul **Kontroling** u određenim situacijama primenjuje fleksibilniju logiku od modula **Administracija**.

Može korigovati bilo koji trošak ili prihod, pod uslovom da je vrsta konta kompatibilna, čak i za delove koji pripadaju prethodnom periodu nastanka troška ili prihoda. Na primer, ako trošak knjižen u godini X delimično ili u celosti pripada godini X-1, pri obradi zaključivanja godine X svejedno će se izračunati korekcija, na primer aktivno vremensko razgraničenje.

Posebnu pažnju potrebno je obratiti na **upravljanje usklađenjima izvršenim u modulu Administracija**.

**Preporučuje se izračunati i proknjižiti usklađenja i izvršiti zaključivanje i ponovno otvaranje konta sa ponovnim otvaranjem usklađenja putem automatskih postupaka, izbegavajući ručna knjiženja.**

Automatski postupak knjiženjima ponovnog otvaranja usklađenja dodeljuje datum jednak datumu izvornog knjiženja koje je bilo predmet korekcije, dok se kao period nastanka troška ili prihoda tog knjiženja postavlja godina X-1. Na taj način se izbegava da softver pri obradi zaključivanja perioda godine X izračuna dodatne korekcije jer saldo godine X, odnosno međuperioda godine X, već sadrži ispravan rezultat pripadajućeg perioda zahvaljujući pravilnom ponovnom otvaranju prethodnog usklađenja.

</details>

<details>

  <summary>6. Zašto se u formi za upravljanje usklađenjima (obračunatim prihodima i troškovima i vremenskim razgraničenjima) ništa ne izračunava iako sam siguran da sam uneo odgovarajuća računovodstvena knjiženja?</summary>

Nakon što se proveri da li su zaista uneta računovodstvena knjiženja sa datumima perioda nastanka troška ili prihoda koji prelaze granicu poslovne godine i da li su korišćena konta troškova vrste *Za ispravku* (baza Fast Start) ili konta čija vrsta ima aktiviranu oznaku **Usluga** u tabeli *Vrste konta*, ako sistem i dalje ne predlaže obračunate prihode i troškove ni vremenska razgraničenja, moguće je da je u opštim parametrima računovodstva nenamerno aktivirana oznaka **Mesečno zaključivanje**.

Ova oznaka aktivira logike namenjene inostranim lokalizacijama koje nisu italijanske.

</details>

<details>

  <summary>7. Povezao sam vrstu poreza po odbitku sa kupcem kako bih generisao e-račun sa svim potrebnim oznakama. Sada želim da proknjižim račun, ali računovodstveno knjiženje nije ispravno i ne sadrži porez po odbitku. Zašto?</summary>

U tabeli *Vrste poreza po odbitku* potrebno je otvoriti vrstu povezanu sa predmetnim kupcem i proveriti da li je polje *Vrste dospeća* postavljeno na *Neto dospeća*.

</details>

<details>

  <summary>8. Zašto mi Fluentis u novom računovodstvenom knjiženju uvek predlaže poslednju valutu korišćenu sa odabranim šablonom, zanemarujući podrazumevanu valutu kupca ili dobavljača?</summary>

Potrebno je proveriti postavku opšteg parametra sa oznakom `CA-RegCont-General_PurposeCurrencyByTemplate` u tabeli `PARAM_Parameter`.

Ako je parametar postavljen na `1`, predlaže se poslednja valuta korišćena sa odabranim šablonom.

Ako je parametar postavljen na `0`, ne predlaže se nijedna valuta, već se primenjuje osnovna logika prema kojoj se najpre uzima valuta preduzeća, a zatim valuta definisana za kupca ili dobavljača.

</details>

<details>

  <summary>9. Potrebno je kreirati više numeracija za izlazne račune. Nije jasno da li je potrebno kreirati onoliko registara izlaznog PDV-a koliko ima numeracija ili se za jedan registar izlaznog PDV-a može koristiti više numeracija.</summary>

Odnos koji postoji u ciklusu knjiženja prodaje je sledeći:

**Vrsta računa > Numeracija > Povezani šabloni knjiženja > Knjiga PDV-a povezana sa šablonom**

U standardnom okruženju može se primetiti da može postojati više vrsta računa, ali ako su povezane sa istim šablonom, koji stoga koristi isti PDV registar (knjigu), numeracija je ista, odnosno zajednička. Na primer, nakon računa broj 1 za vrstu A, za vrstu B kreiraće se račun broj 2.

Ako postoje različite vrste računa sa različitim paralelnim numeracijama, preporučuje se razlikovati PDV registre i stoga ih povezati i sa različitim šablonima. U suprotnom može doći do sukoba pri dodeli PDV protokola.

Razlog je taj što je u šablonima obično aktivirana opcija koja predlaže broj PDV protokola jednak broju dokumenta, kako ne bi bilo potrebno voditi računa o redosledu knjiženja računa prema njihovom broju. Ako se ne koriste različiti PDV registri, potrebno je deaktivirati tu opciju.

</details>

<details>

  <summary>10. Kako je moguće upravljati pojednostavljenim knjižnim odobrenjem samo za PDV, vrste TD08, na primer za povrat PDV-a od kupca u stečaju?</summary>

1. U tabeli **Administracija > Vrste dokumenata** potrebno je proveriti da li postoji odgovarajuća vrsta dokumenta i, ako je potrebno, dodati je. Polja **Kod** i **Opis** mogu se proizvoljno definisati, na primer *Pojednostavljeno knjižno odobrenje za povrat PDV-a* ili *Knjižno odobrenje samo za PDV*. Oznaka **Knjižno odobrenje** mora biti **aktivirana**, a u polju **Kod za e-račune** mora biti navedeno `TD08`.

2. U tabeli **Prodaja > Vrste računa** potrebno je proveriti da li postoji odgovarajuća vrsta i, ako je potrebno, dodati je. Polja **Kod** i **Opis** mogu se proizvoljno definisati, na primer *Pojednostavljeno knjižno odobrenje za povrat PDV-a* ili *Knjižno odobrenje samo za PDV*. U polju **Priroda računa** OBAVEZNO je odabrati stavku ***Knjižno odobrenje samo za PDV***. U polju **Vrsta dokumenta** potrebno je odabrati vrstu definisanu u tački 1., dok se u polju **Šablon** odabira odgovarajući računovodstveni šablon, koji je potrebno kreirati ili odabrati u tabeli **Administracija > Šabloni glavne knjige**, kako bi računovodstveno knjiženje odgovaralo predmetnoj situaciji. Na primer, može se koristiti šablon namenjen knjižnim odobrenjima sa odgovarajućom šemom knjiženja.

3. Kreirati novi dokument u modulu **Prodaja > Izlazni računi** koristeći vrstu računa kreiranu u tački 2.
   - Posebna vrsta postavljena u polju **Priroda računa** iz tačke 2. omogućava unos isključivo redova vrste *Napomena* u mreži **Artikli** dokumenta. U njih je moguće uneti kratak opis izvršene korekcije, na primer: „Dokument izdat u skladu sa čl. 26., st. 3-bis, D.P.R. br. 633/1972, isključivo radi povrata PDV-a.”
   - Proširivanjem odeljka *Vrsta reference* u *Zaglavlju* dokumenta moguće je, osim polja **Vrsta reference**, uneti i detalje prethodnog računa koji se ispravlja.
   - Kod ove posebne vrste knjižnog odobrenja vrednostima se može upravljati isključivo u odeljku **Sažetak**, odnosno u mreži *Sažetak PDV-a*, gde se direktno unosi vrednost u polje **PDV** sa negativnim predznakom i odgovarajući kod PDV-a, na primer 22 %, dok osnovica ostaje 0 jer je reč o knjižnom odobrenju samo za PDV.

4. Generisati XML datoteku i poslati e-račun na uobičajeni način, prema uputstvima iz dokumentacije.

5. Proknjižiti knjižno odobrenje na uobičajeni način. Ako se poveže tipičan šablon za knjižna odobrenja u Italiji, na primer ona dostupna u okruženjima Fast Start, računovodstveno knjiženje izvršiće se na odgovarajući način. U odeljku PDV-a knjižiće se samo iznos PDV-a, bez osnovice, dok će se u računovodstvenom delu potraživanje od kupca umanjiti na potražnoj strani za iznos PDV-a koji se odbija sa konta izlaznog PDV-a na dugovnoj strani, u skladu sa izvršenim povratom.

</details>

<details>

  <summary>11. Kako je moguće upravljati „Obaveštenjem” TD29 za prijavu neizdatog ili neispravnog računa dobavljača?</summary>

1. U tabeli **Administracija > Vrste dokumenata** potrebno je proveriti da li postoji odgovarajuća vrsta dokumenta i, ako je potrebno, dodati je. Polja **Kod** i **Opis** mogu se proizvoljno definisati, na primer *Obaveštenje o neispravnom fakturisanju dobavljača*. Oznaka **Samofaktura** mora biti **aktivirana**, a u polju **Kod za e-račune** mora biti navedeno `TD29`.

2. U tabeli **Prodaja > Vrste računa** potrebno je proveriti da li postoji odgovarajuća vrsta i, ako je potrebno, dodati je. Polja **Kod** i **Opis** mogu se proizvoljno definisati, na primer *Obaveštenje o neispravnom fakturisanju*. U polju **Priroda računa** potrebno je odabrati stavku ***Račun***, a u polju **Vrsta dokumenta** vrstu definisanu u tački 1. U polju **Šablon** nije neophodno povezati vrednost jer je reč samo o obaveštenju o neizdavanju računa od strane dobavljača, bez uticaja na PDV.

3. Kreirati novi dokument u modulu **Prodaja > Izlazni računi** koristeći vrstu računa kreiranu u tački 2.
   - Proširivanjem odeljka *Vrsta reference* u *Zaglavlju* dokumenta moguće je, ako je potrebno, osim polja **Vrsta reference**, uneti i detalje prethodnog računa koji se ispravlja.
   - U polje **Isporučilac** u zaglavlju dokumenta potrebno je uneti podatke dobavljača, dok se u polje **Kupac** unose matični podaci sopstvenog preduzeća posebno kreirani za samofakture.
   - U odeljku **Artikli** dokumenta potrebno je uneti red sa, na primer, opisom nefakturisane robe i pripadajućim iznosima. Ako je reč o ispravci nepravilnog ili pogrešnog računa, potrebno je uneti vrednost ispravke.

4. Kreirati XML datoteku i poslati je uobičajenim postupkom.

</details>

<details>

  <summary>12. Kako je moguće otključati periodični obračun PDV-a koji je konačno odštampan?</summary>

1. U formi **Administracija > DEKLARACIJE > Plaćanja PDV-a**, u kojoj su prikazani svi periodi za koje postoji konačni obračun, potrebno je odabrati period koji se želi otključati, odnosno više perioda, i kliknuti na dugme ***Izbriši obračune PDV-a***.

2. Ako je pri konačnom obračunu bila aktivirana opcija automatskog knjiženja prenosa, po pravilu će se prikazati poruka kojom se potvrđuje automatsko brisanje tih knjiženja. Prikazaće se i upozorenje da je potrebno ručno izbrisati zapis za odgovarajući period iz forme **Periodična prijava PDV-a**, koji je automatski kreiran prilikom pokretanja konačnog obračuna.

3. Kao što je navedeno u prethodnoj tački, potrebno je ručno izbrisati zapis iz forme **Periodična prijava PDV-a** za period koji je otključan. U toj tabeli se čuvaju podaci za upravljanje ručnim poljima obračuna, kao što su prenos PDV kredita, kompenzacija i slično.

4. Potrebno je vratiti brojač stranica i datum poslednje štampe za PDV registar na kojem se štampaju periodični obračuni, koji u bazi Fast Start obično ima kod `RIE`. U tabeli **PDV registri** potrebno je pronaći registar koji se vraća u prethodno stanje, na primer *RIE*, i za tekuću godinu u donjoj mreži detalja ručno ispraviti polja **Poslednja odštampana stranica** i **Datum poslednje štampe**.

5. Ako se periodični obračuni štampaju kao nastavak redovnog PDV registra, na primer registra izlaznih ili ulaznih računa, kao i u svim slučajevima kada je potrebno izmeniti PDV knjiženja za koja su, osim konačnog obračuna, konačno odštampani i PDV registri, u tabeli **PDV registri** potrebno je na traci menija kliknuti na dugme **Poništi konačne štampe**. Prikazaće se iskačući prozor u kojem je potrebno odabrati i potvrditi period i PDV registar koji se želi otključati.

   Ako se za određeni PDV registar otključava više perioda, preporučuje se postupati uzastopno i otključati sve eventualne međuperiode, počevši od najnovijeg prema najstarijem. Nakon toga potrebno je ručno vratiti vrednosti polja *Poslednja odštampana stranica*, *Datum poslednje štampe* i *Poslednji PDV protokol*.

</details>

<details>

  <summary>13. Kako poništiti konačnu štampu Dnevnika knjiženja?</summary>

1. Prilikom kreiranja konačne štampe u formi **Dnevnik knjiženja**, štampa je pokrenuta sa aktiviranom oznakom *Konačna štampa*. U tom trenutku izvršavala se i kontrola i prikazivala odgovarajuća poruka upozorenja ako su postojala knjiženja sa datumom koji prethodi datumima odabranim u filteru štampe, a koja još nisu bila konačno odštampana. Upozorenje je ipak bilo moguće zanemariti. Period koji je konačno odštampan bio je zaključan kako bi se onemogućile naknadne izmene računovodstvenih knjiženja.

2. **Za otključavanje** konačno odštampanog perioda potrebno je otvoriti formu **Konfiguracija > Parametri > Administracija > Parametri računovodstva** za tekuću godinu ili godinu koju je potrebno otključati i upotrebiti dugme **Poništi konačne štampe**. Prikazaće se iskačući prozor u kojem je potrebno odrediti period, odnosno datum od i datum do, koji se želi otključati.

   Tehnički gledano, otključavanje se sastoji od postavljanja knjiženja obuhvaćenih odabranim periodom u status koji nije konačan. Taj podatak je vidljiv samo u bazi podataka ili dodavanjem svojstva `IsPrintedInJournal` – *Odštampano u dnevniku knjiženja* – u formu koja se zasniva na objektu `FSPosting`, na primer u formu *Knjiženja* dostupnu putem menija **Administracija > Knjiženja > Knjiženja**.

   Stoga se preporučuje otključavanje sprovoditi uredno i uzastopno, izbegavajući ostavljanje međuperioda koji nisu konačno odštampani. Takvi periodi će u svakom slučaju biti prijavljeni upozorenjem navedenim u prethodnoj tački.

3. Nakon otključavanja potrebno je ručno vratiti podatke koji su prilikom konačne štampe sačuvani u formi **Parametri računovodstva**:
   - **Datum poslednje štampe dnevnika knjiženja**: vratiti na datum poslednjeg knjiženja koje nije otključano;
   - **Poslednja stranica / red**: vratiti na poslednju stranicu i red koji nisu otključani;
   - **Dugovni / potražni saldo**: izbrisati vrednosti koje će se automatski ponovo kreirati prilikom nove konačne štampe.

</details>

<details>

  <summary>14. Kako prinudno zatvoriti otvorenu stavku?</summary>

Status otvorene stavke (*otvorena*, *zatvorena* ili *delimično otvorena*) izračunava sistem i nije ga moguće prinudno promeniti direktnom izmenom polja **Status otvorene stavke**, jer bi sistem odmah ponovo izračunao njegovu vrednost.

Otvorena stavka ima status *Zatvorena* samo ako za nju postoji povezano plaćanje sa istim brojem.

Stoga se za pravilno zatvaranje otvorene stavke kreirane izvan računovodstva ili stavke koja je ostala otvorena jer računovodstveno knjiženje plaćanja nije kreiralo odgovarajuće plaćanje na nivou otvorenih stavki koristi sledeći postupak:

1. Otvoriti formu **Administracija > Otvorene stavke > Plaćanja**.

2. Kreirati novo plaćanje klikom na dugme **Novo**.

3. Odmah nakon otvaranja forme sa podacima novog plaćanja, umesto ručnog unosa podataka, upotrebiti naredbu **Kreiraj iz otvorenih stavki / plaćanja**. Otvoriće se iskačući prozor za pretraživanje i odabir otvorene stavke koju je potrebno zatvoriti.

   U iskačućem prozoru dostupna su uobičajena polja za pretraživanje otvorenih stavki. Dovoljno je mišem odabrati stavku koju je potrebno zatvoriti i kliknuti na dugme **Odaberi**.

   Sistem će automatski ispravno kreirati veze između otvorene stavke i plaćanja, a status otvorene stavke automatski će se ponovo izračunati kao *Zatvorena*.

</details>

<details>

  <summary>15. Kako vratiti bankovnu doznaku koja je već poslata banci ili odobrena?</summary>

Postupak izdavanja bankovne doznake i njenog naknadnog knjiženja i slanja banci uz uslov naplate sastoji se od niza međusobno povezanih uzastopnih koraka. Stoga, ako se pokuša izvršiti povrat (*rollback*), na primer kreiranja bankovne doznake koja je već poslata banci ili odobrena, program će sprečiti tu radnju i prikazati poruku upozorenja.

Sve faze kreiranja, slanja i naknadnog odobrenja, kao i pripadajuća računovodstvena knjiženja, moguće je vratiti. Međutim, postupak je potrebno sprovesti obrnutim logičkim redosledom, počevši od poslednje izvršene radnje i postepeno se vraćajući prema početnim fazama.

Ako je redosled izvršenih radnji bio sledeći:

- knjiženje izlaznog računa uz kreiranje otvorene stavke;
- automatsko kreiranje bankovne doznake iz otvorenih stavki;
- knjiženje izdavanja bankovne doznake, koje se često izvršava istovremeno sa prethodnim korakom putem čarobnjaka;
- kreiranje zbirnog naloga za slanje banci i dodavanje instrumenata plaćanja, odnosno bankovnih doznaka, u zbirni nalog;
- knjiženje slanja zbirnog naloga banci;
- knjiženje odobrenja bankovnih doznaka.

</details>

Poništavanje je potrebno izvršiti sledećim redosledom:

- **Poništavanje knjiženja odobrenja**
- **Poništavanje knjiženja zbirnog naloga**
- **Uklanjanje instrumenta plaćanja (bankovne doznake) iz zbirnog naloga** (koji možda nije moguće izbrisati jer sadrži i druge instrumente plaćanja) tako što se odabere unutar zbirnog naloga i pritisne dugme **DEL**
- **Poništavanje knjiženja instrumenata plaćanja** (**PRE SLEDEĆEG KORAKA**)
- **Poništavanje automatskog kreiranja instrumenata plaćanja iz otvorenih stavki**

Podsećamo da su postupci poništavanja dostupni u istim formama u kojima je izvršeno kreiranje, na odgovarajućoj sledećoj kartici koja je uvek dostupna.

<details>

  <summary>16. Zašto u naknadi agenta udeo doprinosa Enasarco na teret preduzeća ne odgovara procentu postavljenom za vrstu agenta (na primer 8,5 %)?</summary>

U određenim situacijama, na primer pri unosu prve naknade za primaoca naknade vrste **Agent**, kada mesec nadležnosti za Enasarco nije postavljen u prvom tromesečju, može biti predložen iznos doprinosa na teret preduzeća koji je veći od iznosa dobijenog jednostavnom primenom procenta koji tereti preduzeće nalogodavca.

Razlog je taj što se u detaljnim postavkama kategorije agenta nalazi i parametar **minimalnog doprinosa**. Ako sistem ne pronađe prethodne naknade kojima je taj minimalni iznos već pokriven, Fluentis će predložiti njegovu nadoknadu kroz prvu dostupnu naknadu.

</details>