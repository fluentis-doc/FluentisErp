---
title: FAQ Administracija 
sidebar_position: 1
---


<details>

  <summary>1. Koje se elektroničke fakture spremaju u folder postavljen u tablici <b>Konfiguracija elektroničkih dokumenata?</b>?</summary>
  
Postoje dva uvjeta u kartici klijenta.   

Prvi uvjet je flag <b>Potpis dokumenta</b>, koji mora biti aktivan.                 
Drugi uvjet je flag <b>Elektroničko fakturiranje s potpisom</b>, koji je 3-state flag:   

- Kada je postavljen na 1, za klijenta se predviđa potpis, bez obzira na druge konfiguracijske opcije, pa se datoteka uvijek izvozi u mapu definiranu u konfiguraciji elektroničkih dokumenata radi potpisivanja;             

- Kada je postavljen na 0, za klijenta se ne predviđa potpis, bez obzira na druge konfiguracijske opcije, pa se datoteka ne izvozi u mapu konfiguracije elektroničkih dokumenata, čak i ako je mapa definirana;      

- Kada je Null (kao u ovom slučaju, što je zadana postavka), vrijedi postavka u ‘konfiguraciji elektroničkih dokumenata’, tj. ako postoji putanja za kreiranje datoteke, datoteka se uvijek kreira, inače se ne kreira.

</details>


<details>

  <summary>2. Za težine, tijekom kreiranja elektroničke fakture, Fluentis mi kaže da ne smiju biti veće od 9.999. Kako mogu ukloniti ovu blokadu? </summary>
  
Ova blokada je vezana uz pravila Elektroničkog fakturiranja, koje ne prihvaća TEŽINE veće od 9.999.
Da biste zaobišli ovaj problem, potrebno je skalirati jedinicu mjere (UM) ako se premaši granica od 9.999, tako da se koristi odgovarajuća jedinica mjere i dobiju željene vrijednosti.  

</details>


<details>

  <summary>3. Kako je moguće unijeti flag <b>Grupa PDV-a</b> u već kreiranu <b>Izjavu o namjeri</b>? </summary>
  
Potrebno je izvršiti sljedeći SQL update, unoseći ID predmetne izjave o namjeri:  

update CA_DichIntMain set CADM_IsVatGroup = 1 
where CADM_Id = '[id della dichiarazione di intento]'

</details>


<details>

  <summary> 4. Kako je moguće izvršiti ispis mastrina filtriranjem pokreta na temelju ekonomske kompetencije?
Naime, primjerice, prilikom postavljanja traženog perioda, u ispisa pomoćnih konta, u poljima "od datuma kompetencije" i "do datuma kompetencije", ne uzima se u obzir ekonomska kompetencija, već se čini da se čita datum kompetencije koji je u računovodstvenim knjiženjima smješten pored datuma knjiženja.</summary>

Potvrđujem da se u filtrima, kada piše "od datuma kompetencije" do "datuma kompetencije", misli na kompetenciju (tzv. "računovodstvenu") zaglavlja.
Uobičajeno se ti datumi poklapaju, ali se mogu koristiti (iako to u praksi rijetko tko radi) za knjiženje ispravki, primjerice na datum odobrenja bilance koje se odnose na 31.12., gdje je taj datum možda već blokiran za konačni ispis dnevnika i stoga ne bi prihvatio datum knjiženja.
Što se tiče datuma ekonomske kompetencije, ispis mastrina – i šire gledano, cijeli sustav – nije predviđen za rad na taj način.
Najispravnija procedura je izračunati zatvaranje računa za razdoblje (intra-godišnja zatvaranja) i pokrenuti odgovarajuća knjiženja ispravki i integracija.
Alternativno, mogu preporučiti korištenje forme za pregled konta, gdje se preko object navigatora mogu dodati svojstva From AccrualDate i To AccrualDate, što su zapravo datumi ekonomske kompetencije ("od" – "do"), te koristiti filter na prvom redu detaljne mreže (grida).
Još jedna alternativa je prilagodba izvještaja i forme za pokretanje dodavanjem filtera i polja itd...

</details>

<details>

  <summary>5. Zašto, uspoređujući zatvaranje računa unutar godine obračunato od 1.1. do 31.12. s rezultatima iz modula administracije, u zatvaranju u controlling modu nalazim razgraničenja koja u administraciji nisu izračunata?</summary>

Modul controlling u nekim situacijama radi na fleksibilniji način u usporedbi s modulom administracije.
Naime, sposoban je ispraviti bilo koji trošak ili prihod (s kompatibilnim tipom konta) čak i za udjele ekonomske nadležnosti iz prošlosti. Na primjer, ako je trošak evidentiran u godini X, a nadležnost je djelomično (ili potpuno) u godini X-1, prilikom obrade zatvaranja godine X svejedno će doći do ispravke (npr. aktivno razgraničenje).
Potrebno je obratiti posebnu pažnju na **upravljanje dispravkama izvršenima u modulu administracije.**
**Preporučuje se izvršiti izračun i knjiženje ispravki te zatvaranje i ponovno otvaranje konta s ponovnim otvaranjem ispravki putem automatskih procedura, izbjegavajući ručna knjiženja**.
Automatska procedura nameće, naime, da stavke ponovnog otvaranja ispravki imaju datum jednak originalnoj stavci na koju se ispravka odnosi te da ekonomska nadležnost te stavke bude godina X-1. Na taj način se izbjegava da prilikom obrade zatvaranja razdoblja za godinu X softver izračunava dodatne ispravke, jer su one već uključene u saldo godine X (ili unutar-godišnjeg razdoblja godine X) zahvaljujući pravilnom ponovnom otvaranju prethodne ispravke.  

</details>

<details>

  <summary> 6. Zašto u maski za upravljanje ispravkama (obračun razgraničenja i vremenskih razgraničenja), iako sam siguran da sam unio odgovarajuće računovodstvene promjene, ne dolazi ni do kakvog izračuna?</summary>

Nakon što ste se uvjerili da ste zaista unijeli računovodstvene promjene s datumima ekonomske nadležnosti koji prelaze granicu poslovne godine, i da ste koristili konta troška tipa "za ispravku" (db Fast Start) ili koji u tablici tipi conto imaju označen flag Servizio, ako još uvijek ne vidite predložene obračune (ratei ili risconti), moguće je da ste nenamjerno aktivirali flag *Mjesečno zatvaranje* u općim parametrima kontabiliteta. Taj flag zapravo aktivira logiku za strane (ne-talijanske) lokalizacije.

</details>

<details>

  <summary> 7. Povezao sam vrstu poreza na dohodak s klijentom kako bih generirao elektronički račun s potrebnim oznakama, sada želim knjižiti račun, ali vidim da knjiženje nije ispravno i ne prikazuje porez na dohodak, zašto?</summary>

Unutar tablice *Tipovi odbitka poreza*, otvorite vrstu povezanu s dotičnim klijentom i provjerite je li polje *Tipovi dospjele vrijednosti* postavljeno na *Neto dospjele vrijednosti*.

</details>

<details>

  <summary> 8. Fluentis mi u novom knjiženju uvijek predlaže zadnju valutu korištenu s odabranim razlogom, zanemarujući zadanu valutu klijenta ili dobavljača, zašto? </summary>

Provjerite postavku općeg parametra u tablici PARAM_Parameter kod CA-RegCont-General_PurposeCurrencyByTemplate. Ako je parametar postavljen na 1, bit će predložena valuta zadnje korištena s razlogom, ako je postavljen na 0, neće biti predložena nijedna valuta, slijedeći osnovnu logiku valute društva, a zatim čitanje valute klijenta ili dobavljača.  

</details>

<details>

  <summary> 9. Trebam kreirati više numeracija za prodajne račune. Nije jasno trebam li kreirati onoliko prodajnih PDV registara koliko imam numeracija ili jedan prodajni registar može imati više numeracija </summary>

Veza u procesu knjiženja prodaje je Vrsta računa > Numeracija > Povezana knjižbena osnova > PDV registar povezan s osnovom. U standardnom okruženju može postojati više vrsta, ali ako su povezane s istom osnovom, koja ima isti PDV odjeljak, numeracija je ista (zajednička, tako da će račun br. 1 za vrstu A, a zatim za vrstu B biti br. 2). U slučaju različitih vrsta računa s različitim konkurentnim numeracijama preporučljivo je razlikovati PDV odjeljke i povezati im različite osnove, inače će doći do sukoba u PDV protokoliranju. To je zato što je u osnovama obično aktivirana opcija koja predlaže PDV protokol jednako kao i broj dokumenta (kako se ne bi moralo paziti na knjiženje računa po redoslijedu brojeva). Inače je potrebno deaktivirati tu opciju

</details>

<details>

  <summary> 10. Come posso gestire una nota di accredito semplificata di sola iva TD08 per il recupero, ad esempio, dell'iva di un cliente fallito? </summary>

1. U tablici Administracija > **Vrste dokumenata** provjerite postoji li (i po potrebi dodajte) odgovarajuća vrsta dokumenta. Polje Šifra / Opis može se slobodno imenovati, na primjer *Pojednostavljeni dobropis za povrat PDV-a*, ili *Dobropis samo za PDV* itd...; flag **Odobrenje** mora biti **aktivan** a polje **Kod za elektronski oblik dokumenta** mora sadržavati *TD08*
2. U tablici Prodaja > **Vrste računa** provjerite postoji li (i po potrebi dodajte) odgovarajuća vrsta računa. Polje Šifra / Opis može se slobodno imenovati, na primjer *Pojednostavljeni dobropis za povrat PDV-a*, ili *Dobropis samo za PDV* itd... ; u polju **Vrsta računa** MORA biti odabrana opcija ***Dobropis samo za PDV***; polje **Vrsta dokumenta** treba sadržavati vrstu definiranu u točki 1., a polje **Predložak** (knjigovodstven) treba sadržavati odgovarajuću osnovu (koju je potrebno kreirati ili odabrati u tablici Administracija > Knjigovodstvene osnove), tako da knjiženje odgovara situaciji (na primjer, osnova koja upravlja dobropisima s odgovarajućim kontnim šemama).  
3. Kreirajte novi dokument u modulu Prodaja > Prodajni računi koristeći vrstu računa definiranu u točki 2.   
    - Posebna vrsta postavljena u polju Vrsta računa iz točke 2. omogućava unos u tablicu Artikala dokumenta samo redaka tipa *Napomena* gdje možete unijeti kratki opis izvršene ispravke, na primjer: "Dokument izdan prema članku 26, stavak 3 bis, D.P.R. br. 633/1972, isključivo za povrat PDV-a".  
    - Proširivanjem sekcije *Vrsta reference* u *Zaglavlju* dokumenta moguće je, osim polja Vrsta reference, unijeti i detalje prethodnog računa koji se ispravlja.  
    - U ovoj posebnoj vrsti dobropisa upravljanje vrijednostima ograničeno je isključivo na sekciju **Sažetak** točnije u tablicu *Sažetak PDV-a* gdje se direktno obrađuje polje **Porezi** (u negativnom iznosu) uz polje (šifra) PDV-a (npr. 22%), dok je osnovica nula (radi se o dobropisu samo za PDV).  
4. Generirajte XML datoteku i pošaljite elektronički račun kao i obično (prema uputama u online vodiču).  
5. Knjigovodstveno evidentirajte dobropis kao i obično. Povezujući odgovarajuću knjigovodstvenu osnovu tipičnu za dobropise u Italiji (npr. onu iz Fast Start okruženja), knjiženje će se izvršiti ispravno, obrađujući u PDV sekciji samo porez, a ne osnovicu, te u kontnom dijelu knjižeći iznos PDV-a koji se odbija s računa PDV prodaje (dužna strana) protiv potraživanja prema kupcu (potražna strana).  
</details>

<details>

  <summary> 11. Kako mogu upravljati "Obavijesti" TD29 za prijavu izostavljene ili nepravilne fakturacije od strane dobavljača? </summary>

1. U tablici Administracija > **Vrste Računa** provjerite postoji li (i po potrebi dodajte) odgovarajuću vrstu dokumenta. Polje Šifra / Opis može biti slobodno imenovano, na primjer *Obavijest o nepravilnoj fakturaciji*, flag **Samoobračun** mora biti **aktivan**, a polje **Kod za elektronski oblik dokumenta** mora sadržavati vrijednost *TD29*  
2. U tablici Prodaja > **Tipovi računa** provjerite postoji li (i po potrebi dodajte) odgovarajuća tipologija. Polje Šifra / Opis može biti slobodno imenovano, na primjer *Obavijest o nepravilnoj fakturaciji*; u polju **Priroda računa** mora biti odabrana opcija ***Račun***; polje **Vrsta dokumenta** sadržavat će tip iz točke 1.; u polju **Predložak** (knjigovodstveni) nije nužno povezivati vrijednost, budući da se ovdje radi samo o obavijesti o propuštenoj fakturaciji od strane dobavljača, bez značaja za PDV.  
3. Kreirati novi dokument u modulu Prodaja > Računi prodaje koristeći tipologiju računa kreiranu u točki 2.  
   - Proširivanjem sekcije *Vrsta reference* u *Zaglavlju* dokumenta moguće je, ako je potrebno, osim polja Vrsta reference, popuniti i detalje prethodnog računa koji se ispravlja.  
   - U polje Izdavatelj, u zaglavlju dokumenta, unijeti podatke Dobavljača, dok u polje Klijent unijeti šifru naše tvrtke posebno kreirane za samoobračune.  
   - U sekciji Artikli dokumenta unijeti jedan red s opisom robe koja nije fakturirana i pripadajućim iznosima, ili ako se radi o ispravku nepravilnog ili pogrešnog računa, iznos ispravka.
4. Kreirati XML datoteku i poslati je prema uobičajenim procedurama.  
</details>

<details>
  <summary> 12. Kako mogu otključati periodičnu PDV likvidaciju koja je ispisana kao konačna? </summary>

1. U tablici Administracija > IZJAVE > **Uplate PDV-a**, gdje su prikazani svi periodi za koje postoji konačna likvidacija, odabrati period (ili više njih) koji želite otključati i pritisnuti tipku ***Izbriši PDV likvidacije***.
2. Ako je prilikom zaključavanja likvidacije bila aktivirana opcija za automatske knjiženja prijenosa (giroconto), prikazat će se poruka koja potvrđuje automatsko brisanje tih prijenosa. Također će se prikazati poruka koja podsjeća da je potrebno ručno izbrisati zapis (za odgovarajući period) iz forme **Periodična PDV prijava** koji je bio automatski kreiran prilikom pokretanja zaključavanja likvidacije.  
3. Kao što je navedeno u prethodnoj točki, ručno obrišite zapis u formi **Periodična prijava PDV-a** za razdoblje koje je otključano. Podsjećamo da se u ovoj tablici pohranjuju podaci za upravljanje ručnim poljima u obračunu PDV-a (prijenos pretporeza, kompenzacije itd.)  
4. Vratiti brojač stranica i datum zadnjeg ispisa za PDV sekcional na kojem se ispisuju periodične likvidacije (obično kod RIE u bazi podataka FastStart). Pristupiti tablici Registri PDV-a, locirati sekcional koji treba vratiti na prethodno stanje (npr. *RIE*) i ručno ispraviti, za tekuću godinu u donjoj detaljnoj mreži, polja: **Broj posljednje ispisane stranice**, **Zadnji datum ispisa**.
5. Ako se periodične likvidacije ispisuju zajedno s običnim PDV sekcionalima (npr. za prodaju ili nabavu), te u svim slučajevima kada je potrebno mijenjati PDV knjiženja za koja su, osim konačne likvidacije, već ispisani i sekcionali u konačnom obliku, u tablici **Knjige PDV-a** pritisnuti tipku **Otkaži zaključni izvještaj** u traci izbornika. Pojavit će se popup u kojem je potrebno odabrati i potvrditi razdoblje koje se želi otključati te PDV sekcional koji se želi otključati. U slučaju otključavanja više razdoblja za određeni sekcional, preporučuje se postupati uzastopno, otključavajući sva eventualna međurazdoblja, i to počevši od najnovijeg prema najstarijem. Nakon toga ručno vratiti podatke o *zadnjoj ispisanoj stranici, datumu zadnjeg ispisa i zadnjem PDV protokolu*.

</details>

<details>

  <summary> 13. Kako postupiti za otključavanje konačnog ispisa Dnevnik knjiženja? </summary>

1. Kada je izrađen konačni ispis Knjige dnevnika, u formi za ispis **Dnevnik knjiženja**  bila je pokrenuta funkcija ispisa s uključenim oznakom *Definitivno*. U tom trenutku, podsjećamo, izvršavala se i kontrola s odgovarajućom porukom upozorenja, ukoliko su postojali knjiženi dokumenti s datumom prije odabranih datuma u filtru ispisa, a koji još nisu bili ispisani kao konačni. Upozorenje se ipak moglo zanemariti. Period ispisan kao konačan postajao je zaključan za bilo kakve izmjene u knjiženjima.  
2. **Za otključavanje** razdoblja koje je već definitivno otisnuto, potrebno je pristupiti formi Konfiguracija > Parametri > Administracija > **Računovodstveni parametri**  za tekuću godinu ili godinu koju želite otključati, te koristiti tipku **Otkaži zaključni izvještaj**. Pojavit će se skočni prozor u kojem treba navesti razdoblje (od datuma do datuma) za koje želite izvršiti otključavanje. Otključavanje tehnički znači postavljanje svih relevantnih knjiženja unutar odabranog razdoblja u status nije definitivno (polje je vidljivo samo u bazi podataka, ili ako se svojstvo IsPrintedInJournal - Otisnuto u glavnoj knjizi doda u formu koja referira na objekt FSPosting poput forme *Računovodstvene evidencije* dostupne putem izbornika Administracija > Evidencije > Evidencije), Stoga se preporučuje postupati uredno i kronološki, kako bi se izbjegla situacija u kojoj ostaju razdoblja koja nisu u definitivnom stanju, takva razdoblja će i dalje biti prijavljena kroz upozorenje opisano u prethodnoj točki.  
3. Nakon otključavanja, potrebno je ručno vratiti podatke koji su prethodno bili pohranjeni u formi Računovodstveni parametri tijekom procesa konačnog ispisa:  
    - Datum posljednjeg ispisa glavne knjige: postaviti na posljednji datum knjiženja koji nije bio otključan  
    - Zadnja stranica / redak: vratiti na posljednju vrijednost koja nije bila obuhvaćena otključavanjem  
    - Saldo Dugovna / Potražna strana: izbrisati postojeće vrijednosti, budući da će se one automatski ponovno izračunati prilikom nove konačne ispise  
</details>

<details>

  <summary> 14. Kako mogu prisilno zatvoriti otvorenu partiju? </summary>

Stanje jedne partije (otvorena, zatvorena, djelomično otvorena) izračunava sustav i ne može se prisiliti izravnim djelovanjem na polje Stanje partije; odmah bi se ponovno izračunalo.  
Partija je *zatvorena* (i ovo stanje se bilježi) samo ako postoji uplata za tu partiju (vezana uz nju i s istim brojem).

Stoga, ispravan način za zatvaranje stavke koja je stvorena izvan knjigovodstva, ili koja je ostala otvorena jer knjiženje plaćanja nije generiralo i plaćanje na razini stavki, sastoji se u korištenju sljedeće procedure.

1. Otvorite formu Administracija > Partije > **Plaćanja**
2. Kreirajte novo plaćanje klikom na tipku **Novo** 
3. Odmah nakon otvaranja forme s podacima novog plaćanja, umjesto da ih unosite ručno, kliknite na naredbu **Kreiraj iz partija / Plaćanja** koji prikazuje iskačući prozor za pretraživanje i odabir otvorene stavke koju želite zatvoriti. U iskačućem prozoru nalaze se uobičajena polja za pretraživanje stavki, dovoljno je odabrati mišem stavku koju želite zatvoriti i pritisnuti gumb **Odaberi**. Automatski će se stvoriti ispravne veze između stavke i plaćanja. Status stavke bit će automatski preračunat kao *Zatvorena*.

</details>

<details>

  <summary> 15. Kako mogu poništiti (vratiti natrag) bankovnu mjenicu koja je već prezentirana ili odobrena? </summary>

Postupak izdavanja bankovne potvrde i njezine kasnije knjiženja i prezentacije na račun dobar završetak (salvo buon fine) uključuje niz uzastopnih koraka. Stoga, u slučaju da se pokuša izvršiti vraćanje (rollback), na primjer, stvaranja bankovne potvrde koja je već predstavljena banci ili akreditirana, softver će onemogućiti ovu operaciju vraćajući poruku upozorenja.

Sve faze kreiranja i prezentacije s naknadnim knjiženjem, kao i operacije knjiženja, mogu se obnoviti, ali je potrebno djelovati u ispravnom logičkom redoslijedu, počevši od kasnijih operacija do prvih faza.

Dakle, redoslijed operacija izvršenih za kreiranje je sljedeći:

- Knjiženje izlazne fakture s otvaranjem partije
- Automatsko kreiranje bankovne mjenice iz otvorenih partija
- Knjiženje izdavanja bankovne mjenice (često se obavlja zajedno s prethodnim korakom putem čarobnjaka – wizard)
- Kreiranje prezentacijske liste i umetanje efekata (bankovnih mjenica) u listu  
- Knjiženje prezentacije liste  
- Knjiženje odobrenja (accredito) bankovnih mjenica  

Redoslijed za poništavanje (rollback)  

- Poništavanje knjiženja odobrenja  
- Poništavanje knjiženja prezentacijske liste  
- Uklanjanje efekta (bankovne mjenice) iz prezentacijske liste (koja možda neće biti moguće izbrisati ako sadrži i druge efekte), odabirom unutar liste i pritiskom na tipku DELETE
- Poništavanje knjiženja efekata (PRIJE sljedećeg koraka)  
- Poništavanje automatskog kreiranja efekata iz partija  
 
Podsjećamo da su procedure poništavanja dostupne unutar istih formi u kojima je izvršeno početno kreiranje, u odgovarajućoj kartici koja se nalazi odmah uz glavnu, i koja je uvijek prisutna.

</details>