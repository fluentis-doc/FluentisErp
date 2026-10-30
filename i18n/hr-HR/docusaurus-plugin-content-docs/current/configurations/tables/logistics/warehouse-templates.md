---
title: Predlošci zapisa skladišta

sidebar_position: 9

---

:::important Čemu služi

Tablica Predlošci skladišnih kretanja u Fluentisu ključan je element za upravljanje skladišnim kretanjima jer omogućuje definiranje i prilagodbu predložaka koji se koriste pri ulaznim i izlaznim kretanjima. Korisnici mogu jednostavno dodavati nove predloške u tablicu, navodeći obvezne podatke kao što su pripadajuće skladište, šifra predloška i opis.

Jedna od glavnih značajki ove tablice jest mogućnost povezivanja posebnih predložaka sa svakim skladištem, što omogućuje veliku fleksibilnost u prilagodbi operativnih postupaka. Svaki predložak može biti definiran kao ulaz ili izlaz, čime se precizno određuje njegov utjecaj na stanje zaliha u skladištu.

Osim toga, korisnici mogu konfigurirati različite neobvezne parametre, uključujući oznake vidljivosti u određenim područjima i definiranje predloženog troška za kretanja. Također je moguće aktivirati funkcije za automatsko ažuriranje prosječnog troška, posljednjeg troška i prodajne cijene, ovisno o izvršenim kretanjima. Ove značajke čine ovu tablicu ključnom komponentom za učinkovito upravljanje skladišnim operacijama i praćenje troškova.

:::

U ovom se prozoru definiraju svi predlošci skladišnih kretanja potrebni za kretanje artikala iz različitih skladišta i u njih, koja su unesena u odgovarajuću tablicu *Skladišta*.

Tablica omogućuje unos novih zapisa ili traženje postojećih zapisa radi njihova pregleda, izmjene ili brisanja.

**Traženje predložaka skladišnih kretanja**

Obrazac se sastoji od područja za filtriranje i područja s rezultatima. Nakon postavljanja željenih filtara dovoljno je kliknuti gumb **Traži** kako bi se rezultati prikazali u tablici rezultata.

**Unos predložaka skladišnih kretanja**

Za unos novih šifri potrebno je kliknuti u prvi prazni redak tablice ili pritisnuti gumb **Novo**.

**Skladište**: u ovom stupcu korisnik treba odabrati šifru skladišta za koje želi unijeti predložak skladišnog kretanja, koristeći odgovarajući padajući izbornik koji dohvaća podatke iz tablice *Skladišta*;

**Predložak**: u ovom stupcu korisnik treba unijeti šifru predloška skladišnog kretanja. Šifra može sadržavati najviše 3 alfanumerička znaka. Moguće je kreirati više predložaka skladišnih kretanja s istom šifrom, pod uvjetom da su predlošci definirani za različita skladišta. Dakle, nije dopušteno imati dva predloška s istom šifrom za isto skladište;

**Opis**: u ovom stupcu korisnik treba unijeti opis predloška skladišnog kretanja, koji može sadržavati najviše 80 alfanumeričkih znakova;

**Vrsta**: u ovom stupcu korisnik treba odabrati *vrstu kretanja* koja određuje predložak. Može biti riječ o *ulazu*, pri čemu se količina skladišnog kretanja kreiranog tim predloškom sprema u bazu podataka kao pozitivna vrijednost, ili o *izlazu*, pri čemu se količina sprema kao negativna vrijednost;

**Koristi se u nabavi**: ako je aktivirano, predložak je vidljiv u području nabave;

**Koristi se u prodaji**: ako je aktivirano, predložak je vidljiv u području prodaje;

**Koristi se u proizvodnji**: ako je aktivirano, predložak je vidljiv u području proizvodnje;

**Koristi se u podizvođačima**: ako je aktivirano, predložak je vidljiv u području podizvođača;

**Koristi se u logistici**: ako je aktivirano, predložak je vidljiv u području logistike;

**Predloženi trošak**: u ovom stupcu korisnik treba odabrati trošak koji će se automatski predložiti prilikom ručnog unosa skladišnog kretanja. Predloženi trošak može biti posljednji trošak, prosječni trošak, prodajna cijena ili standardni trošak artikla. Treba napomenuti da se predložene vrijednosti preuzimaju izravno iz šifarnika artikala. Također je važno imati na umu da predloženi trošak ima prednost pred troškom navedenim u dokumentima. Stoga predlošci skladišnih kretanja koji će se koristiti u dokumentima moraju imati vrijednost **Nijedan** u polju „Predloženi trošak” kako bi se preuzeo trošak naveden u dokumentu.

**Ažuriraj prosječni trošak**: sva kretanja izvršena pomoću predloška s aktiviranom ovom oznakom sudjeluju u izračunu ponderiranog prosječnog troška artikla. Ovu oznaku nije moguće aktivirati ni deaktivirati nakon što je predložak upotrijebljen barem za jedno skladišno kretanje. Obično se aktivira samo za ulazna kretanja, ali može se aktivirati i za izlazna kretanja kada se želi da se ponderirani prosječni trošak artikla izračunava uzimajući u obzir i prodajne cijene povezane s izlaznim skladišnim kretanjima tog artikla.

Prosječni trošak u šifarniku artikala ažurira se iznosom kretanja samo ako su aktivirane i oznake *Ažuriraj trošak artikla* i *Porezni interes*;

**Ažuriraj zadnji trošak**: sva kretanja izvršena pomoću predloška s aktiviranom ovom oznakom sudjeluju u izračunu posljednjeg troška artikla. Ovu oznaku nije moguće aktivirati ni deaktivirati nakon što je predložak upotrijebljen barem za jedno skladišno kretanje. Ova se oznaka aktivira samo za ulazna kretanja.

Posljednji trošak u šifarniku artikala ažurira se iznosom kretanja samo ako su aktivirane i oznake *Ažuriraj trošak artikla* i *Porezni interes*;

**Ažuriraj prodajnu cijenu**: ovu oznaku nije moguće aktivirati ni deaktivirati nakon što je predložak upotrijebljen barem za jedno skladišno kretanje. Aktivira se samo za izlazna kretanja.

Prodajna cijena u šifarniku artikala ažurira se iznosom kretanja samo ako je aktivirana i oznaka *Ažuriraj trošak artikla*;

**Ažuriraj trošak artikla**: prilikom unosa skladišnog kretanja, ako je u zaglavlju knjiženja odabran predložak s aktiviranom oznakom **Ažuriraj trošak artikla**, u šifarniku artikala ažurirat će se prosječni trošak, posljednji trošak i/ili prodajna cijena iznosom kretanja, ovisno o tome koje su od sljedećih oznaka aktivirane: *Ažuriraj prosječni trošak*, *Ažuriraj posljednji trošak* i *Ažuriraj prodajnu cijenu*.

**Fiskalni interes**: prilikom unosa skladišnog kretanja pomoću predloška s aktiviranom oznakom **Porezni interes** u zaglavlju knjiženja, samo se kretanje uzima u obzir u skladišnom dnevniku, izračunu posljednjeg i prosječnog troška te izračunu inventure količina s vrednovanjem, pod uvjetom da je za artikl također aktivirana oznaka *Porezni interes* na kartici *Opći podaci*. Ova oznaka ne utječe na izračun stanja zaliha ni u jednom poreznom izvješću.

**Točka ponovnog naručivanja**: prilikom unosa skladišnog kretanja pomoću predloška s aktiviranom oznakom **Točka ponovnog naručivanja** u zaglavlju knjiženja, kretanje se uzima u obzir u postupku izračuna točke ponovnog naručivanja;

**Upravljanje lotovima**: prilikom unosa skladišnog kretanja pomoću predloška s aktiviranom oznakom **Upravljanje lotovima** u zaglavlju knjiženja, omogućuje se unos lota u odgovarajuću tablicu knjiženja skladišnog kretanja za određeni artikl kojim se upravlja po lotovima.

Isti postupak vrijedi i za upravljanje **serijskim brojevima**;

**Integrira početnu količinu**: koristi se samo pri upravljanju lotovima; omogućuje povećanje količine lota zaprimljenog prethodnim kretanjem, uz zadržavanje istog broja lota;

**Izradi lot iz lota**: ako je aktivirana, omogućuje prikaz tog predloška kao predloška u postupku „Kreiranje lota iz lota” radi promjene jednog lota u drugi. Program će automatski izvršiti izlaz jednog lota i ulaz drugog lota istog artikla. Dostupan je i postupak „Kreiranje lota iz lota uz promjenu artikla”, koji omogućuje izlaz artikla s određenim lotom i ulaz drugog artikla s drugim lotom. Da bi se ova oznaka mogla aktivirati, kreirani predložak mora biti vrste **Izlaz**, a moraju biti aktivirane i sljedeće oznake: **Upravljanje lotovima** i **Uključi početnu količinu**. Osim toga, oznaka **Sastavnica** ne smije biti aktivirana, a u polju **Predložak protustavke ulaza** mora biti naveden predložak;

**Nedostupni lotovi**: prilikom unosa skladišnog kretanja pomoću predloška s aktiviranom oznakom *Nedostupni lotovi* omogućuje se i izlaz lotova koji imaju status nedostupnosti;

**Izradi serijski broj**: ako je aktivirana, omogućuje upravljanje serijskim brojevima i njihovo automatsko kreiranje;

**Obvezan dokument**: prilikom unosa skladišnog kretanja pomoću predloška s aktiviranom oznakom **Obvezan dokument**, obvezno je navesti podatak u polju *Referentni dokument* u knjiženju skladišnog kretanja. U suprotnom nije moguće nastaviti;

**Obvezan konto**: prilikom unosa skladišnog kretanja pomoću predloška s aktiviranom oznakom **Obvezan konto**, obvezno je navesti podatak u polju *Kupac/Dobavljač* u knjiženju skladišnog kretanja. Ova se opcija obično koristi za knjiženja povezana s potrošnjom i isporukom materijala podizvođaču. U suprotnom nije moguće nastaviti;

**Sastavnica**: prilikom unosa skladišnog kretanja pomoću predloška s aktiviranom oznakom **Sastavnica**, prilikom spremanja retka kretanja umjesto odabranog artikla (koji obvezno mora imati sastavnicu) unose se artikli prve razine sastavnice. Često se koristi u predlošcima izlaza protustavke za izlaz komponenti artikla koji je zaprimljen pomoću glavnog predloška;

**Fizička inventura**: oznaka **Fizička inventura** omogućuje određivanje predložaka skladišnih kretanja koji se mogu odabrati u [Parametrima inventurnih razlika](/docs/configurations/parameters/logistics/stock-difference) kao predlošci za korištenje pri izračunu inventurnih razlika. Knjiženja skladišnih kretanja koja se automatski kreiraju postupkom *Inventurne razlike* imat će u zaglavlju predloške ove vrste;

**Protustavno skladište**: u ovom stupcu korisnik može navesti šifru **protustavnog skladišta** odabirom iz odgovarajućeg padajućeg izbornika koji dohvaća podatke iz tablice *Skladišta*. To je skladište koje se prikazuje na kartici *Protustavka* u knjiženju skladišnog kretanja;

**Predložak protustavke**: u ovom stupcu korisnik može navesti šifru **predloška protustavke**. Time se omogućuje da se prilikom kreiranja skladišnog kretanja pomoću glavnog predloška automatski unese i kretanje suprotnog predznaka. Primjerice, predložak protustavke može se postaviti za premještanje između različitih skladišta ili između različitih lokacija unutar istog skladišta;

**Zaliha**: ovom oznakom korisnik može odrediti samo jedan predložak za svako skladište koji će koristiti postupak *Vrednovanje zaliha* pri zatvaranju skladišta za kreiranje ulaznih knjiženja početne inventurne količine. Kako bi se kretanja kreirana pomoću ovog predloška uzimala u obzir u postupku [Inventura količina s vrednovanjem](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity), moraju biti aktivirane i oznake **Porezni interes** te, prema potrebi, **Ažuriraj posljednji trošak** i **Ažuriraj prosječni trošak**. Osim toga, kako bi kreirano kretanje početne zalihe imalo trošak, potrebno je unijeti vrijednost u polje **Predloženi trošak**;

**Vrsta upravljačkog dokumenta**: koristi se u stranim lokalizacijama, primjerice u Rumunjskoj i Hrvatskoj, gdje se skladišna kretanja moraju knjižiti i u računovodstvu;

**Računovodstveni predložak**: koristi se u stranim lokalizacijama, primjerice u Rumunjskoj i Hrvatskoj, gdje se skladišna kretanja moraju knjižiti i u računovodstvu. Služi za odabir unaprijed definiranih predložaka glavne knjige koji omogućuju knjiženje skladišnih kretanja u glavnu knjigu za svako skladište te odgovarajućeg predloška skladišnog kretanja, ovisno o vrsti i prethodno definiranim postavkama;

**Vrsta računovodstvenog predloška**: koristi se u stranim lokalizacijama, primjerice u Rumunjskoj i Hrvatskoj, gdje se skladišna kretanja moraju knjižiti i u računovodstvu;

**Lokacija**: u ovom stupcu korisnik može odabrati zadanu lokaciju iz odgovarajućeg izbornika za pomoć pri odabiru lokacija, koji se otvara dvostrukim klikom na polje. Odabrana lokacija predložit će se pri ulaznom ili izlaznom kretanju ako nije proslijeđena iz postupka koji kreira kretanje. Zadana se lokacija obično postavlja za ulazna kretanja jer se izlaz mora izvršiti s lokacije na kojoj se artikl nalazi u trenutku izlaza. Stoga lokacija navedena u dokumentu ima prednost pred lokacijom navedenom u predlošku skladišnog kretanja;

**Indeks obrtaja**: ako je ova oznaka aktivirana, knjiženja kreirana pomoću tog predloška uzimaju se u obzir u postupku izračuna **Indeksa obrtaja** skladišta (Ispis);

**Alternative**: aktiviranje ove oznake povezano je s oznakom *Sastavnica*. Ako je aktivirana, prilikom kreiranja kretanja pomoću izlaznog predloška s aktiviranim objema oznakama, a jedna od komponenti nema dovoljnu količinu za izlaz, postupak provjerava postoji li alternativni artikl (naveden u sastavnici) s dovoljnom količinom za izlaz umjesto glavne komponente;

**Mješovite alternative**: aktiviranje ove oznake povezano je s oznakom *Sastavnica*. Ako je aktivirana, postupak istodobno izvršava izlaz više alternativnih artikala sve dok se ne dosegne potrebna količina. Ova je oznaka usko povezana s oznakom *Alternative*;

**Uzmi u obzir kretanja s nulom**: ova se oznaka mora koristiti zajedno s oznakom *Ažuriraj prosječni trošak*. Označava da se u izračun moraju uključiti i skladišna kretanja s količinom jednakom nuli ako knjiženje ima predložak s aktiviranom ovom oznakom;

**Sljedivost**: ako je aktivirana, označava da će se kretanja kreirana pomoću ovog predloška koristiti za [Sljedivost lotova](/docs/logistics/lots-serial-numbers/lots-register). Ovaj postupak omogućuje utvrđivanje koji su materijali upotrijebljeni u određenom gotovom proizvodu ili, obrnuto, u kojim je gotovim proizvodima upotrijebljen određeni materijal;

**Otpad**: ako je aktivirana, predložak postaje vidljiv za definiranje otpada u obrascu *Dodatna izdavanja u proizvodnji* i na kartici *Otpad* u [Izvještajima o proizvodnji](/docs/production/pp-production-in-progress/signals/sisgnals/);

**Ispravak utovarne jedinice**: ako je aktivirana, predložak postaje vidljiv za ispravke utovarnih jedinica;

**D.D.M.R.P. ADU**: ako je aktivirana, označava da se predložak koristi za prepoznavanje svih skladišnih kretanja koja se uzimaju u obzir pri izračunu ADU-a (*Average Daily Use*) artikla. Ova je oznaka vidljiva samo ako je postavljen izbornik DDMRP.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sljedeću poveznicu: [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).