---
title: Šabloni skladišnih knjiženja
sidebar_position: 9
---

:::important Čemu služi
Tabela Šabloni skladišnih kretanja u Fluentisu predstavlja ključni element za upravljanje skladišnim kretanjima jer omogućava definisanje i prilagođavanje šablona koji se koriste pri ulaznim i izlaznim kretanjima. Korisnici mogu jednostavno dodavati nove šablone u tabelu, navodeći obavezne podatke kao što su pripadajuće skladište, šifra šablona i opis.

Jedna od glavnih karakteristika ove tabele jeste mogućnost povezivanja posebnih šablona sa svakim skladištem, što omogućava veliku fleksibilnost u prilagođavanju operativnih postupaka. Svaki šablon može biti definisan kao ulaz ili izlaz, čime se precizno određuje njegov uticaj na stanje zaliha u skladištu.

Pored toga, korisnici mogu konfigurisati različite neobavezne parametre, uključujući oznake vidljivosti u određenim područjima i definisanje predloženog troška za kretanja. Takođe je moguće aktivirati funkcije za automatsko ažuriranje prosečnog troška, poslednjeg troška i prodajne cene, u zavisnosti od izvršenih kretanja. Ove karakteristike čine ovu tabelu ključnom komponentom za efikasno upravljanje skladišnim operacijama i praćenje troškova.
:::

U ovom prozoru definišu se svi šabloni skladišnih kretanja potrebni za kretanje artikala iz različitih skladišta i u njih, koja su uneta u odgovarajuću tabelu *Skladišta*.

Tabela omogućava unos novih zapisa ili pretraživanje postojećih radi pregleda, izmene ili brisanja.

**Pretraživanje šablona skladišnih kretanja**

Obrazac se sastoji od područja za filtriranje i područja sa rezultatima. Nakon postavljanja željenih filtera dovoljno je kliknuti na dugme **Traži** kako bi se rezultati prikazali u tabeli sa rezultatima.

**Unos šablona skladišnih kretanja**

Za unos novih šifara potrebno je kliknuti na prvi prazan red u tabeli ili pritisnuti dugme **Novo**.

**Skladište**: u ovoj koloni korisnik treba da odabere šifru skladišta za koje želi da unese šablon skladišnog kretanja, koristeći odgovarajući padajući meni koji preuzima podatke iz tabele *Skladišta*.

**Šablon**: u ovoj koloni korisnik treba da unese šifru šablona skladišnog kretanja. Šifra može sadržati najviše 3 alfanumerička znaka. Moguće je kreirati više šablona skladišnih kretanja sa istom šifrom, pod uslovom da su šabloni definisani za različita skladišta. Dakle, nije dozvoljeno imati dva šablona sa istom šifrom za isto skladište.

**Opis**: u ovoj koloni korisnik treba da unese opis šablona skladišnog kretanja, koji može sadržati najviše 80 alfanumeričkih znakova.

**Tip**: u ovoj koloni korisnik treba da odabere *tip kretanja* koji određuje šablon. Može biti reč o *ulazu*, pri čemu se količina skladišnog kretanja kreiranog tim šablonom čuva u bazi podataka kao pozitivna vrednost, ili o *izlazu*, pri čemu se količina čuva kao negativna vrednost.

**Koristi se u nabavci**: ako je aktivirano, šablon je vidljiv u području nabavke.

**Koristi se u prodaji**: ako je aktivirano, šablon je vidljiv u području prodaje.

**Koristi se u proizvodnji**: ako je aktivirano, šablon je vidljiv u području proizvodnje.

**Koristi se kod podizvođača**: ako je aktivirano, šablon je vidljiv u području podizvođača.

**Koristi se u logistici**: ako je aktivirano, šablon je vidljiv u području logistike.

**Predloženi trošak**: u ovoj koloni korisnik treba da odabere trošak koji će se automatski predložiti prilikom ručnog unosa skladišnog kretanja. Predloženi trošak može biti poslednji trošak, prosečni trošak, prodajna cena ili standardni trošak artikla. Treba napomenuti da se predložene vrednosti preuzimaju direktno iz šifarnika artikala. Takođe je važno imati na umu da predloženi trošak ima prednost u odnosu na trošak naveden u dokumentima. Stoga šabloni skladišnih kretanja koji će se koristiti u dokumentima moraju imati vrednost **Nijedan** u polju „Predloženi trošak“ kako bi se preuzeo trošak naveden u dokumentu.

**Ažuriraj prosečni trošak**: sva kretanja izvršena pomoću šablona sa aktiviranom ovom oznakom učestvuju u izračunavanju ponderisanog prosečnog troška artikla. Ovu oznaku nije moguće aktivirati ni deaktivirati nakon što je šablon upotrebljen za najmanje jedno skladišno kretanje. Obično se aktivira samo za ulazna kretanja, ali može se aktivirati i za izlazna kretanja kada se želi da se ponderisani prosečni trošak artikla izračunava uzimajući u obzir i prodajne cene povezane sa izlaznim skladišnim kretanjima tog artikla.

Prosečni trošak u šifarniku artikala ažurira se iznosom kretanja samo ako su aktivirane i oznake *Ažuriraj trošak artikla* i *Poreski interes*.

**Ažuriraj poslednji trošak**: sva kretanja izvršena pomoću šablona sa aktiviranom ovom oznakom učestvuju u izračunavanju poslednjeg troška artikla. Ovu oznaku nije moguće aktivirati ni deaktivirati nakon što je šablon upotrebljen za najmanje jedno skladišno kretanje. Ova oznaka aktivira se samo za ulazna kretanja.

Poslednji trošak u šifarniku artikala ažurira se iznosom kretanja samo ako su aktivirane i oznake *Ažuriraj trošak artikla* i *Poreski interes*.

**Ažuriraj prodajnu cenu**: ovu oznaku nije moguće aktivirati ni deaktivirati nakon što je šablon upotrebljen za najmanje jedno skladišno kretanje. Aktivira se samo za izlazna kretanja.

Prodajna cena u šifarniku artikala ažurira se iznosom kretanja samo ako je aktivirana i oznaka *Ažuriraj trošak artikla*.

**Ažuriraj trošak artikla**: prilikom unosa skladišnog kretanja, ako je u zaglavlju knjiženja odabran šablon sa aktiviranom oznakom **Ažuriraj trošak artikla**, u šifarniku artikala ažuriraće se prosečni trošak, poslednji trošak i/ili prodajna cena iznosom kretanja, u zavisnosti od toga koje su od sledećih oznaka aktivirane: *Ažuriraj prosečni trošak*, *Ažuriraj poslednji trošak* i *Ažuriraj prodajnu cenu*.

**Fiskalni interes**: prilikom unosa skladišnog kretanja pomoću šablona sa aktiviranom oznakom **Poreski interes** u zaglavlju knjiženja, samo kretanje uzima se u obzir u skladišnom dnevniku, izračunavanju poslednjeg i prosečnog troška, kao i izračunavanju inventure količina sa vrednovanjem, pod uslovom da je za artikal takođe aktivirana oznaka *Poreski interes* na kartici *Opšti podaci*. Ova oznaka ne utiče na izračunavanje stanja zaliha ni u jednom poreskom izveštaju.

**Tačka ponovnog naručivanja**: prilikom unosa skladišnog kretanja pomoću šablona sa aktiviranom oznakom **Tačka ponovnog naručivanja** u zaglavlju knjiženja, kretanje se uzima u obzir u postupku izračunavanja tačke ponovnog naručivanja.

**Upravljanje lotovima**: prilikom unosa skladišnog kretanja pomoću šablona sa aktiviranom oznakom **Upravljanje lotovima** u zaglavlju knjiženja, omogućava se unos lota u odgovarajuću tabelu knjiženja skladišnog kretanja za određeni artikal kojim se upravlja po lotovima.

Isti postupak važi i za upravljanje **serijskim brojevima**.

**Integriši početnu količinu**: koristi se samo pri upravljanju lotovima; omogućava povećanje količine lota primljenog prethodnim kretanjem, uz zadržavanje istog broja lota.

**Kreiraj lot iz lota**: ako je aktivirana, omogućava prikaz tog šablona kao šablona u postupku „Kreiranje lota iz lota“ radi promene jednog lota u drugi. Program će automatski izvršiti izlaz jednog lota i ulaz drugog lota istog artikla. Dostupan je i postupak „Kreiranje lota iz lota uz promenu artikla“, koji omogućava izlaz artikla sa određenim lotom i ulaz drugog artikla sa drugim lotom. Da bi se ova oznaka mogla aktivirati, kreirani šablon mora biti tipa **Izlaz**, a moraju biti aktivirane i sledeće oznake: **Upravljanje lotovima** i **Uključi početnu količinu**. Osim toga, oznaka **Sastavnica** ne sme biti aktivirana, a u polju **Šablon protivstavke ulaza** mora biti naveden šablon.

**Nedostupni lotovi**: prilikom unosa skladišnog kretanja pomoću šablona sa aktiviranom oznakom *Nedostupni lotovi* omogućava se i izlaz lotova koji imaju status nedostupnosti.

**Kreiraj serijski broj**: ako je aktivirana, omogućava upravljanje serijskim brojevima i njihovo automatsko kreiranje.

**Obavezan dokument**: prilikom unosa skladišnog kretanja pomoću šablona sa aktiviranom oznakom **Obavezan dokument**, obavezno je navesti podatak u polju *Referentni dokument* u knjiženju skladišnog kretanja. U suprotnom nije moguće nastaviti.

**Obavezan konto**: prilikom unosa skladišnog kretanja pomoću šablona sa aktiviranom oznakom **Obavezan konto**, obavezno je navesti podatak u polju *Kupac/Dobavljač* u knjiženju skladišnog kretanja. Ova opcija se obično koristi za knjiženja povezana sa potrošnjom i isporukom materijala podizvođaču. U suprotnom nije moguće nastaviti.

**Sastavnica**: prilikom unosa skladišnog kretanja pomoću šablona sa aktiviranom oznakom **Sastavnica**, prilikom čuvanja reda kretanja umesto odabranog artikla (koji obavezno mora imati sastavnicu) unose se artikli prvog nivoa sastavnice. Često se koristi u šablonima izlaza protivstavke za izlaz komponenti artikla koji je primljen pomoću glavnog šablona.

**Fizička inventura**: oznaka **Fizička inventura** omogućava određivanje šablona skladišnih kretanja koji se mogu odabrati u [Parametrima inventurnih razlika](/docs/configurations/parameters/logistics/stock-difference) kao šabloni za korišćenje pri izračunavanju inventurnih razlika. Knjiženja skladišnih kretanja koja se automatski kreiraju postupkom *Inventurne razlike* imaće u zaglavlju šablone ovog tipa.

**Protustavno skladište**: u ovoj koloni korisnik može navesti šifru **protustavnog skladišta** odabirom iz odgovarajućeg padajućeg menija koji preuzima podatke iz tabele *Skladišta*. To je skladište koje se prikazuje na kartici *Protivstavka* u knjiženju skladišnog kretanja.

**Šablon protivstavke**: u ovoj koloni korisnik može navesti šifru **šablona protivstavke**. Time se omogućava da se prilikom kreiranja skladišnog kretanja pomoću glavnog šablona automatski unese i kretanje suprotnog predznaka. Na primer, šablon protivstavke može se postaviti za premeštanje između različitih skladišta ili između različitih lokacija unutar istog skladišta.

**Zaliha**: ovom oznakom korisnik može odrediti samo jedan šablon za svako skladište koji će koristiti postupak *Vrednovanje zaliha* pri zatvaranju skladišta za kreiranje ulaznih knjiženja početne inventurne količine. Kako bi se kretanja kreirana pomoću ovog šablona uzimala u obzir u postupku [Inventure količina sa vrednovanjem](/docs/logistics/physical-inventory/inventory-reports/valorized-inventory-with-quantity), moraju biti aktivirane i oznake **Poreski interes** i, prema potrebi, **Ažuriraj poslednji trošak** i **Ažuriraj prosečni trošak**. Osim toga, kako bi kreirano kretanje početne zalihe imalo trošak, potrebno je uneti vrednost u polje **Predloženi trošak**.

**Tip upravnog dokumenta**: koristi se u stranim lokalizacijama, na primer u Rumuniji i Hrvatskoj, gde se skladišna kretanja moraju knjižiti i u računovodstvu.

**Računovodstveni šablon**: koristi se u stranim lokalizacijama, na primer u Rumuniji i Hrvatskoj, gde se skladišna kretanja moraju knjižiti i u računovodstvu. Služi za odabir unapred definisanih šablona glavne knjige koji omogućavaju knjiženje skladišnih kretanja u glavnu knjigu za svako skladište, kao i odgovarajućeg šablona skladišnog kretanja, u zavisnosti od tipa i prethodno definisanih podešavanja.

**Tip računovodstvenog šablona**: koristi se u stranim lokalizacijama, na primer u Rumuniji i Hrvatskoj, gde se skladišna kretanja moraju knjižiti i u računovodstvu.

**Lokacija**: u ovoj koloni korisnik može odabrati podrazumevanu lokaciju iz odgovarajućeg menija za pomoć pri odabiru lokacija, koji se otvara dvostrukim klikom na polje. Odabrana lokacija biće predložena pri ulaznom ili izlaznom kretanju ako nije prosleđena iz postupka koji kreira kretanje. Podrazumevana lokacija obično se postavlja za ulazna kretanja jer se izlaz mora izvršiti sa lokacije na kojoj se artikal nalazi u trenutku izlaza. Stoga lokacija navedena u dokumentu ima prednost u odnosu na lokaciju navedenu u šablonu skladišnog kretanja.

**Indeks obrta**: ako je ova oznaka aktivirana, knjiženja kreirana pomoću tog šablona uzimaju se u obzir u postupku izračunavanja **Indeksa obrta** skladišta (štampa).

**Alternative**: aktiviranje ove oznake povezano je sa oznakom *Sastavnica*. Ako je aktivirana, prilikom kreiranja kretanja pomoću izlaznog šablona sa aktivirane obe oznake, a jedna od komponenti nema dovoljnu količinu za izlaz, postupak proverava da li postoji alternativni artikal (naveden u sastavnici) sa dovoljnom količinom za izlaz umesto glavne komponente.

**Mešovite alternative**: aktiviranje ove oznake povezano je sa oznakom *Sastavnica*. Ako je aktivirana, postupak istovremeno izvršava izlaz više alternativnih artikala sve dok se ne dostigne potrebna količina. Ova oznaka je usko povezana sa oznakom *Alternative*.

**Uzmi u obzir kretanja sa nulom**: ova oznaka mora se koristiti zajedno sa oznakom *Ažuriraj prosečni trošak*. Označava da se u izračunavanje moraju uključiti i skladišna kretanja sa količinom jednakom nuli ako knjiženje ima šablon sa aktiviranom ovom oznakom.

**Sledljivost**: ako je aktivirana, označava da će se kretanja kreirana pomoću ovog šablona koristiti za [Sledljivost lotova](/docs/logistics/lots-serial-numbers/lots-register). Ovaj postupak omogućava utvrđivanje koji su materijali upotrebljeni u određenom gotovom proizvodu ili, obrnuto, u kojim je gotovim proizvodima upotrebljen određeni materijal.

**Otpad**: ako je aktivirana, šablon postaje vidljiv za definisanje otpada u obrascu *Dodatna izdavanja u proizvodnji* i na kartici *Otpad* u [Izveštajima o proizvodnji](/docs/production/pp-production-in-progress/signals/sisgnals/).

**Ispravka utovarne jedinice**: ako je aktivirana, šablon postaje vidljiv za ispravke utovarnih jedinica.

**D.D.M.R.P. ADU**: ako je aktivirana, označava da se šablon koristi za prepoznavanje svih skladišnih kretanja koja se uzimaju u obzir pri izračunavanju ADU-a (*Average Daily Use*) artikla. Ova oznaka vidljiva je samo ako je postavljen meni DDMRP.

Za sve što nije detaljno opisano u ovom dokumentu, a odnosi se na zajedničke funkcionalnosti obrazaca, pogledajte sledeću poveznicu: [Zajedničke funkcionalnosti, dugmad i polja](/docs/guide/common).