---
title: FAQ Administracija
sidebar_position: 1
---

<details>

  <summary>1. Koji se e-računi spremaju u mapu postavljenu u tablici <b>Konfiguracija elektroničkih dokumenata</b>?</summary>
  
U matičnim podacima kupca moraju biti zadovoljena dva uvjeta.

Prvi je aktivirana oznaka <b>Potpis dokumenta</b>.                 
Drugi je oznaka <b>Potpisani e-račun</b>, koja može imati tri stanja:

- Kada je za kupca postavljena na 1, predviđeno je potpisivanje neovisno o drugim opcijama konfiguracije. Stoga se datoteka uvijek izvozi u mapu definiranu u konfiguraciji elektroničkih dokumenata kako bi se potpisala;

- Kada je za kupca postavljena na 0, potpisivanje nije predviđeno neovisno o drugim opcijama konfiguracije. Stoga se datoteka ne izvozi u mapu definiranu u konfiguraciji elektroničkih dokumenata, čak ni ako je mapa postavljena;

- Kada ima vrijednost Null, kao u prethodno navedenom primjeru (što je zadana postavka), primjenjuje se postavka iz *Konfiguracije elektroničkih dokumenata*. Ako je definiran put za stvaranje datoteke, datoteka se uvijek stvara, a u suprotnom se ne stvara.

</details>


<details>

  <summary>2. Pri izradi e-računa Fluentis javlja da vrijednosti težine ne mogu biti veće od 9.999. Kako se može ukloniti ovo ograničenje?</summary>
  
Ovo je ograničenje povezano s pravilima e-računa, prema kojima vrijednosti **težine** veće od 9.999 nisu dopuštene.

Kako bi se izbjegao ovaj problem, ako se prekorači prag od 9.999, potrebno je promijeniti mjernu jedinicu i koristiti odgovarajuću veću mjernu jedinicu kako bi se dobile željene vrijednosti.

</details>


<details>

  <summary>3. Kako je moguće aktivirati oznaku <b>PDV grupa</b> u već izrađenoj <b>Izjavi o namjeri</b>?</summary>
  
Potrebno je izvršiti sljedeću naredbu `UPDATE` i unijeti ID izjave o namjeri:

```sql
update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[ID izjave o namjeri]'
```

</details>

<details>

  <summary>4. Kako je moguće ispisati karticu konta filtriranjem knjiženja prema razdoblju nastanka troška ili prihoda? Primjerice, kada se u ispisu podkonta postavi željeno razdoblje u poljima "od datuma razdoblja" i "do datuma razdoblja", ne uzima se u obzir razdoblje nastanka troška ili prihoda, već se čini da se čita datum razdoblja koji se u računovodstvenim knjiženjima nalazi pokraj datuma knjiženja.</summary>

Potvrđujem da se u filtrima, kada se navodi *od datuma razdoblja* i *do datuma razdoblja*, misli na datum razdoblja iz zaglavlja, odnosno na takozvano "računovodstveno" razdoblje. Ti se datumi u pravilu podudaraju, ali se ovaj datum može koristiti, iako se u praksi rijetko koristi, primjerice za knjiženje korektivnih knjiženja na datum odobrenja financijskih izvještaja koja se odnose na 31.12., kada je to razdoblje možda već zaključano zbog konačnog ispisa dnevnika pa sustav više ne bi prihvatio taj datum knjiženja.

Što se tiče razdoblja nastanka troška ili prihoda, ispis kartice konta i općenito sustav nisu predviđeni za rad na taj način. Ispravniji je postupak izračunati zaključivanje konta za određeno razdoblje (**privremeno zaključavanje**) i izvršiti pripadajuća korektivna i dopunska knjiženja.

Alternativno se može koristiti forma **Pregled konta**, u kojoj je putem *Object Navigatora* moguće dodati svojstva `FromAccrualDate` i `ToAccrualDate`, koja predstavljaju početni i završni datum razdoblja nastanka troška ili prihoda, te upotrijebiti filtar u prvom retku mreže detalja.

Druga je mogućnost prilagoditi izvještaj i formu za njegovo pokretanje dodavanjem potrebnih filtara, polja i ostalih elemenata.

</details>

<details>

  <summary>5. Zašto pri usporedbi privremenog zaključavanja konta izračunanog za razdoblje od 1.1. do 31.12. s rezultatima modula Administracija u zaključivanju kontrolinga postoje vremenska razgraničenja koja nisu izračunana u Administraciji?</summary>

Modul **Kontroling** u određenim situacijama primjenjuje fleksibilniju logiku od modula **Administracija**.

Može korigirati bilo koji trošak ili prihod, pod uvjetom da je vrsta konta kompatibilna, čak i za dijelove koji pripadaju prethodnom razdoblju nastanka troška ili prihoda. Primjerice, ako trošak knjižen u godini X djelomično ili u cijelosti pripada godini X-1, pri obradi zaključivanja godine X svejedno će se izračunati korekcija, primjerice aktivno vremensko razgraničenje.

Posebnu pozornost potrebno je obratiti na **upravljanje usklađenjima izvršenima u modulu Administracija**.

**Preporučuje se izračunati i proknjižiti usklađenja te izvršiti zaključivanje i ponovno otvaranje konta s ponovnim otvaranjem usklađenja putem automatskih postupaka, izbjegavajući ručna knjiženja.**

Automatski postupak knjiženjima ponovnog otvaranja usklađenja dodjeljuje datum jednak datumu izvornog knjiženja koje je bilo predmet korekcije, dok se kao razdoblje nastanka troška ili prihoda tog knjiženja postavlja godina X-1. Na taj se način izbjegava da softver pri obradi zaključivanja razdoblja godine X izračuna dodatne korekcije jer saldo godine X, odnosno međurazdoblja godine X, već sadrži ispravan rezultat pripadajućeg razdoblja zahvaljujući pravilnom ponovnom otvaranju prethodnog usklađenja.

</details>

<details>

  <summary>6. Zašto se u formi za upravljanje usklađenjima (obračunanim prihodima i troškovima te vremenskim razgraničenjima) ništa ne izračunava iako sam siguran da sam unio odgovarajuća računovodstvena knjiženja?</summary>

Nakon što se provjeri jesu li doista unesena računovodstvena knjiženja s datumima razdoblja nastanka troška ili prihoda koji prelaze granicu poslovne godine te jesu li korištena konta troškova vrste *Za ispravak* (baza Fast Start) ili konta čija vrsta ima aktiviranu oznaku **Usluga** u tablici *Vrste konta*, ako sustav i dalje ne predlaže obračunane prihode i troškove ni vremenska razgraničenja, moguće je da je u općim parametrima računovodstva nenamjerno aktivirana oznaka **Mjesečno zaključivanje**.

Ova oznaka aktivira logike namijenjene inozemnim lokalizacijama koje nisu talijanske.

</details>

<details>

  <summary>7. Povezao sam vrstu poreza po odbitku s kupcem kako bih generirao e-račun sa svim potrebnim oznakama. Sada želim proknjižiti račun, ali računovodstveno knjiženje nije ispravno i ne sadrži porez po odbitku. Zašto?</summary>

U tablici *Vrste poreza po odbitku* potrebno je otvoriti vrstu povezanu s predmetnim kupcem i provjeriti je li polje *Vrste dospijeća* postavljeno na *Neto dospijeća*.

</details>

<details>

  <summary>8. Zašto mi Fluentis u novom računovodstvenom knjiženju uvijek predlaže posljednju valutu korištenu s odabranim predloškom, zanemarujući zadanu valutu kupca ili dobavljača?</summary>

Potrebno je provjeriti postavku općeg parametra s oznakom `CA-RegCont-General_PurposeCurrencyByTemplate` u tablici `PARAM_Parameter`.

Ako je parametar postavljen na `1`, predlaže se posljednja valuta korištena s odabranim predloškom.

Ako je parametar postavljen na `0`, ne predlaže se nijedna valuta, već se primjenjuje osnovna logika prema kojoj se najprije uzima valuta poduzeća, a zatim valuta definirana za kupca ili dobavljača.

</details>

<details>

  <summary>9. Potrebno je kreirati više numeracija za izlazne račune. Nije jasno je li potrebno kreirati onoliko registara izlaznog PDV-a koliko ima numeracija ili se za jedan registar izlaznog PDV-a može koristiti više numeracija.</summary>

Odnos koji postoji u ciklusu knjiženja prodaje je sljedeći:

**Vrsta računa > Numeracija > Povezana predlošci knjiženja > Knjiga PDVa-a povezana s predloškom**

U standardnom okruženju može se primijetiti da može postojati više vrsta računa, ali ako su povezane s istim predloškom, koja stoga koristi isti PDV registar (knjigu), numeracija je ista, odnosno zajednička. Primjerice, nakon računa broj 1 za vrstu A, za vrstu B kreirat će se račun broj 2.

Ako postoje različite vrste računa s različitim paralelnim numeracijama, preporučuje se razlikovati PDV registre te ih stoga povezati i s različitim predlošcima. U suprotnom može doći do sukoba pri dodjeli PDV protokola.

Razlog je taj što je u predlošcima obično aktivirana opcija koja predlaže broj PDV protokola jednak broju dokumenta, kako ne bi bilo potrebno paziti na redoslijed knjiženja računa prema njihovu broju. Ako se ne koriste različiti PDV registri, potrebno je deaktivirati tu opciju.

</details>

<details>

  <summary>10. Kako je moguće upravljati pojednostavljenim knjižnim odobrenjem samo za PDV, vrste TD08, primjerice za povrat PDV-a od kupca u stečaju?</summary>

1. U tablici **Administracija > Vrste dokumenata** potrebno je provjeriti postoji li odgovarajuća vrsta dokumenta te je, ako je potrebno, dodati. Polja **Kod** i **Opis** mogu se proizvoljno definirati, primjerice *Pojednostavljeno knjižno odobrenje za povrat PDV-a* ili *Knjižno odobrenje samo za PDV*. Oznaka **Knjižno odobrenje** mora biti **aktivirana**, a u polju **Kod za e-račune** mora biti navedeno `TD08`.

2. U tablici **Prodaja > Vrste računa** potrebno je provjeriti postoji li odgovarajuća vrsta te je, ako je potrebno, dodati. Polja **Kod** i **Opis** mogu se proizvoljno definirati, primjerice *Pojednostavljeno knjižno odobrenje za povrat PDV-a* ili *Knjižno odobrenje samo za PDV*. U polju **Priroda računa** OBAVEZNO je odabrati stavku ***Knjižno odobrenje samo za PDV***. U polju **Vrsta dokumenta** potrebno je odabrati vrstu definiranu u točki 1., dok se u polju **Predložak** odabire odgovarajući računovodstveni predložak, koji je potrebno kreirati ili odabrati u tablici **Administracija > Predlošci glavne knjige**, kako bi računovodstveno knjiženje odgovaralo predmetnoj situaciji. Primjerice, može se koristiti predložak namijenjen knjižnim odobrenjima s odgovarajućom shemom knjiženja.

3. Kreirati novi dokument u modulu **Prodaja > Izlazni računi** koristeći vrstu računa kreiranu u točki 2.
   - Posebna vrsta postavljena u polju **Priroda računa** iz točke 2. omogućuje unos isključivo redaka vrste *Napomena* u mreži **Artikli** dokumenta. U njih je moguće unijeti kratak opis izvršene korekcije, primjerice: „Dokument izdan u skladu s čl. 26., st. 3-bis, D.P.R. br. 633/1972, isključivo radi povrata PDV-a.”
   - Proširivanjem odjeljka *Vrsta reference* u *Zaglavlju* dokumenta moguće je, osim polja **Vrsta reference**, unijeti i detalje prethodnog računa koji se ispravlja.
   - Kod ove posebne vrste knjižnog odobrenja vrijednostima se može upravljati isključivo u odjeljku **Sažetak**, odnosno u mreži *Sažetak PDV-a*, gdje se izravno unosi vrijednost u polje **PDV** s negativnim predznakom te odgovarajući kod PDV-a, primjerice 22 %, dok osnovica ostaje 0 jer je riječ o knjižnom odobrenju samo za PDV.

4. Generirati XML datoteku i poslati e-račun na uobičajeni način, prema uputama iz dokumentacije.

5. Proknjižiti knjižno odobrenje na uobičajeni način. Ako se poveže tipičan predložak za knjižna odobrenja u Italiji, primjerice ona dostupna u okruženjima Fast Start, računovodstveno knjiženje izvršit će se na odgovarajući način. U odjeljku PDV-a knjižit će se samo iznos PDV-a, bez osnovice, dok će se u računovodstvenom dijelu potraživanje od kupca umanjiti na potražnoj strani za iznos PDV-a koji se odbija s konta izlaznog PDV-a na dugovnoj strani, u skladu s izvršenim povratom.

</details>

<details>

  <summary>11. Kako je moguće upravljati „Obavijesti” TD29 za prijavu neizdanog ili neispravnog računa dobavljača?</summary>

1. U tablici **Administracija > Vrste dokumenata** potrebno je provjeriti postoji li odgovarajuća vrsta dokumenta te je, ako je potrebno, dodati. Polja **Kod** i **Opis** mogu se proizvoljno definirati, primjerice *Obavijest o neispravnom fakturiranju dobavljača*. Oznaka **Samofaktura** mora biti **aktivirana**, a u polju **Kod za e-račune** mora biti navedeno `TD29`.

2. U tablici **Prodaja > Vrste računa** potrebno je provjeriti postoji li odgovarajuća vrsta te je, ako je potrebno, dodati. Polja **Kod** i **Opis** mogu se proizvoljno definirati, primjerice *Obavijest o neispravnom fakturiranju*. U polju **Priroda računa** potrebno je odabrati stavku ***Račun***, a u polju **Vrsta dokumenta** vrstu definiranu u točki 1. U polju **Predložak** nije nužno povezati vrijednost jer je riječ samo o obavijesti o neizdavanju računa od strane dobavljača, bez utjecaja na PDV.

3. Kreirati novi dokument u modulu **Prodaja > Izlazni računi** koristeći vrstu računa kreiranu u točki 2.
   - Proširivanjem odjeljka *Vrsta reference* u *Zaglavlju* dokumenta moguće je, ako je potrebno, osim polja **Vrsta reference**, unijeti i detalje prethodnog računa koji se ispravlja.
   - U polje **Isporučitelj** u zaglavlju dokumenta potrebno je unijeti podatke dobavljača, dok se u polje **Kupac** unose matični podaci vlastitog poduzeća posebno kreirani za samofakture.
   - U odjeljku **Artikli** dokumenta potrebno je unijeti redak s, primjerice, opisom nefakturirane robe i pripadajućim iznosima. Ako je riječ o ispravku nepravilnog ili pogrešnog računa, potrebno je unijeti vrijednost ispravka.

4. Kreirati XML datoteku i poslati je uobičajenim postupkom.

</details>

<details>

  <summary>12. Kako je moguće otključati periodični obračun PDV-a koji je konačno ispisan?</summary>

1. U formi **Administracija > DEKLARACIJE > Plaćanja PDV-a**, u kojoj su prikazana sva razdoblja za koja postoji konačni obračun, potrebno je odabrati razdoblje koje se želi otključati, odnosno više razdoblja, i kliknuti gumb ***Izbriši obračune PDV-a***.

2. Ako je pri konačnom obračunu bila aktivirana opcija automatskog knjiženja prijenosa, u pravilu će se prikazati poruka kojom se potvrđuje automatsko brisanje tih knjiženja. Prikazat će se i upozorenje da je potrebno ručno izbrisati zapis za odgovarajuće razdoblje iz forme **Periodična prijava PDV-a**, koji je automatski kreiran prilikom pokretanja konačnog obračuna.

3. Kao što je navedeno u prethodnoj točki, potrebno je ručno izbrisati zapis iz forme **Periodična prijava PDV-a** za razdoblje koje je otključano. U toj se tablici pohranjuju podaci za upravljanje ručnim poljima obračuna, kao što su prijenos PDV kredita, kompenzacija i slično.

4. Potrebno je vratiti brojač stranica i datum posljednjeg ispisa za PDV registar na kojem se ispisuju periodični obračuni, koji u bazi Fast Start obično ima kod `RIE`. U tablici **PDV registri** potrebno je pronaći registar koji se vraća u prethodno stanje, primjerice *RIE*, te za tekuću godinu u donjoj mreži detalja ručno ispraviti polja **Posljednja ispisana stranica** i **Datum posljednjeg ispisa**.

5. Ako se periodični obračuni ispisuju kao nastavak redovnog PDV registra, primjerice registra izlaznih ili ulaznih računa, kao i u svim slučajevima kada je potrebno izmijeniti PDV knjiženja za koja su, osim konačnog obračuna, konačno ispisani i PDV registri, u tablici **PDV registri** potrebno je na traci izbornika kliknuti gumb **Poništi konačne ispise**. Prikazat će se skočni prozor u kojem je potrebno odabrati i potvrditi razdoblje te PDV registar koji se želi otključati.

   Ako se za određeni PDV registar otključava više razdoblja, preporučuje se postupati uzastopno i otključati sva eventualna međurazdoblja, počevši od najnovijeg prema najstarijem. Nakon toga potrebno je ručno vratiti vrijednosti polja *Posljednja ispisana stranica*, *Datum posljednjeg ispisa* i *Posljednji PDV protokol*.

</details>

<details>

  <summary>13. Kako poništiti konačni ispis Dnevnika knjiženja?</summary>

1. Prilikom kreiranja konačnog ispisa u formi **Dnevnik knjiženja**, ispis je pokrenut s aktiviranom oznakom *Konačni ispis*. U tom se trenutku izvršavala i kontrola te se prikazivala odgovarajuća poruka upozorenja ako su postojala knjiženja s datumom koji prethodi datumima odabranima u filtru ispisa, a koja još nisu bila konačno ispisana. Upozorenje je ipak bilo moguće zanemariti. Razdoblje koje je konačno ispisano bilo je zaključano kako bi se onemogućile naknadne izmjene računovodstvenih knjiženja.

2. **Za otključavanje** konačno ispisanog razdoblja potrebno je otvoriti formu **Konfiguracija > Parametri > Administracija > Parametri računovodstva** za tekuću godinu ili godinu koju je potrebno otključati te upotrijebiti gumb **Poništi konačne ispise**. Prikazat će se skočni prozor u kojem je potrebno odrediti razdoblje, odnosno datum od i datum do, koje se želi otključati.

   Tehnički gledano, otključavanje se sastoji od postavljanja knjiženja obuhvaćenih odabranim razdobljem u status koji nije konačan. Taj je podatak vidljiv samo u bazi podataka ili dodavanjem svojstva `IsPrintedInJournal` – *Ispisano u dnevniku knjiženja* – u formu koja se temelji na objektu `FSPosting`, primjerice u formu *Knjiženja* dostupnu putem izbornika **Administracija > Knjiženja > Knjiženja**.

   Stoga se preporučuje otključavanje provoditi uredno i uzastopno, izbjegavajući ostavljanje međurazdoblja koja nisu konačno ispisana. Takva će razdoblja u svakom slučaju biti prijavljena upozorenjem navedenim u prethodnoj točki.

3. Nakon otključavanja potrebno je ručno vratiti podatke koji su prilikom konačnog ispisa pohranjeni u formi **Parametri računovodstva**:
   - **Datum posljednjeg ispisa dnevnika knjiženja**: vratiti na datum posljednjeg knjiženja koje nije otključano;
   - **Posljednja stranica / redak**: vratiti na posljednju stranicu i redak koji nisu otključani;
   - **Dugovni / potražni saldo**: izbrisati vrijednosti koje će se automatski ponovno kreirati prilikom novog konačnog ispisa.

</details>

<details>

  <summary>14. Kako prisilno zatvoriti otvorenu stavku?</summary>

Status otvorene stavke (*otvorena*, *zatvorena* ili *djelomično otvorena*) izračunava sustav i nije ga moguće prisilno promijeniti izravnom izmjenom polja **Status otvorene stavke**, jer bi sustav odmah ponovno izračunao njegovu vrijednost.

Otvorena stavka ima status *Zatvorena* samo ako za nju postoji povezano plaćanje s istim brojem.

Stoga se za pravilno zatvaranje otvorene stavke kreirane izvan računovodstva ili stavke koja je ostala otvorena jer računovodstveno knjiženje plaćanja nije kreiralo odgovarajuće plaćanje na razini otvorenih stavki koristi sljedeći postupak:

1. Otvoriti formu **Administracija > Otvorene stavke > Plaćanja**.

2. Kreirati novo plaćanje klikom na gumb **Novo**.

3. Odmah nakon otvaranja forme s podacima novog plaćanja, umjesto ručnog unosa podataka, upotrijebiti naredbu **Kreiraj iz otvorenih stavki / plaćanja**. Otvorit će se skočni prozor za pretraživanje i odabir otvorene stavke koju je potrebno zatvoriti.

   U skočnom prozoru dostupna su uobičajena polja za pretraživanje otvorenih stavki. Dovoljno je mišem odabrati stavku koju je potrebno zatvoriti i kliknuti gumb **Odaberi**.

   Sustav će automatski ispravno kreirati veze između otvorene stavke i plaćanja, a status otvorene stavke automatski će se ponovno izračunati kao *Zatvorena*.

</details>

<details>

  <summary>15. Kako vratiti bankovnu doznaku koja je već poslana banci ili odobrena?</summary>

Postupak izdavanja bankovne doznake te njezina naknadnog knjiženja i slanja banci uz uvjet naplate sastoji se od niza međusobno povezanih uzastopnih koraka. Stoga, ako se pokuša izvršiti povrat (*rollback*), primjerice kreiranja bankovne doznake koja je već poslana banci ili odobrena, program će spriječiti tu radnju i prikazati poruku upozorenja.

Sve faze kreiranja, slanja i naknadnog odobrenja, kao i pripadajuća računovodstvena knjiženja, moguće je vratiti. Međutim, postupak je potrebno provesti obrnutim logičkim redoslijedom, počevši od posljednje izvršene radnje i postupno se vraćajući prema početnim fazama.

Ako je redoslijed izvršenih radnji bio sljedeći:

- knjiženje izlaznog računa uz kreiranje otvorene stavke;
- automatsko kreiranje bankovne doznake iz otvorenih stavki;
- knjiženje izdavanja bankovne doznake, koje se često izvršava istodobno s prethodnim korakom putem čarobnjaka;
- kreiranje zbirnog naloga za slanje banci i dodavanje instrumenata plaćanja, odnosno bankovnih doznaka, u zbirni nalog;
- knjiženje slanja zbirnog naloga banci;
- knjiženje odobrenja bankovnih doznaka.

</details>

Poništavanje je potrebno izvršiti sljedećim redoslijedom:

- **Poništavanje knjiženja odobrenja**
- **Poništavanje knjiženja zbirnog naloga**
- **Uklanjanje instrumenta plaćanja (bankovne doznake) iz zbirnog naloga** (koji možda nije moguće izbrisati jer sadrži i druge instrumente plaćanja) tako da ga se odabere unutar zbirnog naloga i pritisne tipka **DEL**
- **Poništavanje knjiženja instrumenata plaćanja** (**PRIJE SLJEDEĆEG KORAKA**)
- **Poništavanje automatskog kreiranja instrumenata plaćanja iz otvorenih stavki**

Podsjećamo da su postupci poništavanja dostupni u istim formama u kojima je izvršeno kreiranje, na odgovarajućoj sljedećoj kartici koja je uvijek dostupna.



<details>

  <summary>16. Zašto u naknadi agenta udio doprinosa Enasarco na teret poduzeća ne odgovara postotku postavljenom za vrstu agenta (primjerice 8,5 %)?</summary>

U određenim situacijama, primjerice pri unosu prve naknade za primatelja naknade vrste **Agent**, kada mjesec nadležnosti za Enasarco nije postavljen u prvom tromjesečju, može biti predložen iznos doprinosa na teret poduzeća koji je veći od iznosa dobivenog jednostavnom primjenom postotka koji tereti poduzeće nalogodavca.

Razlog je taj što se u detaljnim postavkama kategorije agenta nalazi i parametar **minimalnog doprinosa**. Ako sustav ne pronađe prethodne naknade kojima je taj minimalni iznos već pokriven, Fluentis će predložiti njegovu nadoknadu kroz prvu dostupnu naknadu.

</details>