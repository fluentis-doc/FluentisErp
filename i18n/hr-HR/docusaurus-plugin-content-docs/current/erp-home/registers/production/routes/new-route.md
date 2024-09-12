---
title: Novi ciklus
sidebar_position: 2
---

Nakon što su stvoreni osnovni materijalni popisi za proizvode, treba prijeći na definiranje radnih ciklusa, odnosno skupa različitih faza proizvodnje proizvoda.

Postupak stvaranja **Novog ciklusa** otvara se putem:

**Proizvodnja > Radni ciklusi > Radni ciklusi**, klikom na gumb **Novo**

ili

**Proizvodnja > Radni ciklusi > Novi radni ciklus**.

Oba postupka otvorit će obrazac **Upravljanje radnim ciklusima** koji se sastoji od odjeljka u kojem će se definirati obavezne karakteristike ciklusa i od odjeljka s različitim karticama koje grupiraju specifične karakteristike.

### Gornji odjeljak 

Ovdje se unose osnovne informacije o ciklusu:

**Ciklus**: unesite kod i opis radnog ciklusa;

**Artikl i Varijanta**: odaberite putem padajućeg izbornika verziju materijalne liste za koju želite unijeti novi radni ciklus;

**Verzija**: odaberite putem padajućeg izbornika verziju materijalne liste za koju želite unijeti novi radni ciklus;

**Ciklus**: odredite je li riječ o *Operativnom* ili *Neoperativnom* ciklusu;

**Vrsta ciklusa**: obično se postavlja filtar na *Standard* ako imate više ciklusa za isti artikl, postavite oznaku na *Alternativno* i odredite broj ciklusa koji želite analizirati/izradi koji pripadaju istoj verziji;

**Datum Unosa/Datum Zadnje Izmjene**: u ovom se polju automatski unosi datum stvaranja ciklusa, a ako se napravi izmjena, pojavit će se i datum posljednje izmjene ciklusa;

### Faze

Jednom kada unesete faze obrade u mrežu, svakom ciklusu možemo dodati još više faza obrade. Faze se kodiraju unutar tabele [Standardne faze](/docs/configurations/tables/production/standard-phases) koja se nalazi među tabelama u sekciji *Proizvodnja*.

Važne informacije o fazi koje će biti od koristi na proizvodnom nivou uključuju:

**Šifra**: označava kod standardne faze; kada se faza odabere, mreža će se automatski popuniti podacima postavljenim unutar tabele;

**Faza**: označava progresivni broj faze;

**Podfaza**: označava broj podfaza pod istim brojem faze;

**Opis faze/podfaze**: označava opis faze/podfaze;

**Vrsta**: označava je li faza interna, što znači da će uključivati samo stvaranje proizvodnih naloga, ili je li faza vanjska, što znači da će uz proizvodni nalog biti uključen i nalog za rad;

**Radni centar**: označava radno mjesto, odnosno stroj na kojem će se obaviti određena faza;

**Fiksno vrijeme**: ako je omogućeno, ova zastava označava da je vrijeme te faze fiksno i ne varira s količinom;

**Kontrola kvalitete**: ako je aktivirano, ova zastava označava da je ova faza podložna kontroli kvalitete, a u posebnom kartonu može se naznačiti *Plan kontrole* koji će se koristiti za provjeru artikla nakon izvršene proizvodnje;

**Proizvodna faza**: ako je aktivirano, označava da je faza proizvodna i može se pristupiti unosu proizvodnih izvješća (aktiviranjem želimo pratiti proizvodnju za tu fazu); ako nije aktivirano, neće biti moguće deklarirati tu fazu;

**Pokretna faza**: ako je aktivirano, označava da će se u trenutku kada se evidentira proizvodna faza stvarati i zalihe; to znači da će, prateći izvješće o proizvodnji, doći do utovara gotovog proizvoda u skladište i istovara korištene sirovine za proizvodnju u toj fazi;

**Stroj/Grupa radne snage**: u ovim poljima odabire se putem padajućeg izbornika kod stroja na kojem će se obaviti faza i koda grupe radne snage koja se koristi; ove dvije šifre preuzimaju se iz prethodno kodiranih tablica, poput [Grupe radnika](/docs/configurations/tables/production/labour-group) i [Strojeva](/docs/configurations/tables/production/machines) koje se također nalaze među tabelama u sekciji *Proizvodnja*;  

**Jedinica mjere vremena**: omogućuje specificiranje jedinice mjere za vremena rada stroja, obično izraženu u minutama rada stroja;

**Početak/Kraj važenja**: omogućuje navedbu datuma početka i završetka važenja faze, ako se odluči da će određena faza biti važeća samo tijekom određenog razdoblja;

**Vrsta Preklapanja**: u ovom polju je zadano postavljanje vrijednosti na *Nijedna*. Ako postoji faza koja se preklapa s drugom, treba naznačiti vrstu preklapanja iz ponuđenih opcija: *Ukupno*, *Po komadu* i *Po vremenu*;

**Vrijednost**: omogućuje navedbu vrijednosti povezane s vrstom preklapanja, i nema nikakve veze s ekonomskom vrijednošću (na primjer, ako je preklapanje *Po komadu*, u polje *Vrijednost* potrebno je unijeti nakon koliko komada je moguće započeti fazu; dok je za preklapanje *Po vremenu* u polju *Vrijednost* potrebno unijeti vrijeme koje mora proći prije početka faze);

**Faza preklapanja/podfaze preklapanja**: u ovim dvama poljima, u slučaju preklapanja, navodi se faza koja će se preklapati s glavnom fazom;

**Trošak po jedinici**: U ovom polju unosi se trošak faze kada se odluči ne valorizirati s valorizacijom stroja i radne snage;

**Konto/Pokonto za vanjskog izvođača**: Ako je faza vanjska, u ovim poljima može se navesti račun i podračun vanjskog izvođača koji će se brinuti o vanjskoj fazi;

**Opis Radnog Centra**, **Opis stroja**, **Opis radne Skupine** i **Opis vanjskog izvođača**: u ovim poljima nalaze se opisi kodova koji se odnose na različite navedene sekcije;

U trećem odjeljku će se navesti precizni podaci o stroju, radnicima i vremenima:

**Broj Strojeva**: navodi broj strojeva potrebnih za izvođenje faze;

**Vremena rada stroja**: omogućuje navođenje vremena rada stroja izraženog u odabranoj jedinici mjere koja je prethodno postavljena u mreži faze, izraženoj u odabranoj jedinici mjere navedenoj u polju **Jedinica mjere vremena**;

**Količina faze**: navodi količinu proizvoda koja se procjenjuje proizvesti tijekom odabrane faze (pri svakom izvođenju te faze);

**Broj radnika**: navodi broj radnika potrebnih za izvođenje faze;

**Vrijeme Radnika**: vrijeme koje je potrebno za izvođenje faze, izraženo u odabranoj jedinici mjere navedenoj u polju **Jedinica mjere vremena**;

**Vrijeme čekanja u redu**: navodi vrijeme čekanja/u redu koje će se dodati na trajanje faze; to je vrijeme čekanja na kraju svakog izvođenja te faze;

**Vrijeme čekanja - U redu stvara obvezu**: ako je aktivirano, označava da vrijeme čekanja/u redu stvara obvezu, što znači da nije moguće započeti novu fazu jer je radni centar zauzet do isteka vremena čekanja/u redu;

### Kartice

**Opremanje**: na ovoj kartici će se navesti vremena postavljanja stroja kako bi se pokrenula faza i vremena ponovnog postavljanja u slučaju da je potrebno ponovno postaviti radni centar između jednog izvođenja faze i drugog; vremena postavljanja obično su fiksna. Možete navesti broj radnika potrebnih za postavljanje stroja. Osim toga, u slučaju da se postavljanje obavlja s drugim *Radnim centrom / Strojem / Radnom skupinom* različitom od one faze, moći će se specificirati novi podaci putem odgovarajućih kombinacija;

**Materijali**: na ovoj kartici će se navesti materijali koji se žele istovariti ne na kraju faza proizvodnje tog gotovog proizvoda, već na kraju određene faze;

**Oprema**: na ovoj karitici će se unijeti oprema koja će se koristiti unutar faze; opremu ćete unijeti odabirom iz odgovarajuće kombinacije među opremama kodiranim unutar tablice [Oprema](/docs/configurations/tables/production/equipments) prisutne u odjeljku tablica posvećenih *Proizvodnji*. Ako je aktivirana, zastava *Vremenski raspoređeno* će pokazivati da će oprema biti angažirana tijekom proizvodnje; s ovom zastavom, planiranje će uzeti u obzir ne artikulirano putem kombinacije opreme, već artikulirano u polja razreda i koda, koji mora imati *Vrstu Artikla* kao vrstu *Opreme* ili *Alata*;

**Alati**: ma ovoj kartici će se unijeti eventualni alati, odabirom iz kombinacije među onima kodiranim unutar tablice [Alati](/docs/configurations/tables/production/tools) prisutne u odjeljku tablica posvećenih *Proizvodnji*;

**Kontrola kvalitete**: ako je aktivirana zastava **Kontrola kvalitete** za odabranu fazu, na ovoj karitci će se odabrati *Plan kontrole*. Automatski će biti predložene *Planirane Testove* koje treba obaviti radi kontrole proizvoda. Za razumijevanje stupaca ove mreže, uputite se na dokumentaciju o *Planovima kontrole*;

**Dizajni**: na ovj karitici će se unijeti eventualni crteži koji se odnose na ovu fazu;

**Bilješke**: na ovim poljima možete unijeti eventualne tehničke ili druge bilješke koje se odnose na fazu;

**Operativne upute**: omogućuje učitavanje različitih dokumenata povezanih s fazom, koje će se zatim prikazati unutar Fluentis MES-a;

**Alternative**: na ovoj karitici mogu se unijeti alternative fazi na koju se referira;

**Dodatni podaci za faze / Dodatni podaci**: na ovim dvama karticama  unijet će se, redom, dodatni podaci za svaku fazu i dodatni podaci povezani s ciklusom samim, odabirom iz kombinacije među onima unaprijed kodiranim u odgovarajućoj tablici *Dodatni podaci* (Utility > Dodatni podaci). Da biste unijeli dodatni podatak, desnom tipkom miša kliknite i odaberite opciju Dodaj novi dodatni podatak, s mogućnošću odabira hoćete li ga unijeti na prvoj razini ili, ako već postoje dodatni podaci, odaberite želite li unijeti dijete dodatnog podatka postojećem dodatnom podatku; na taj način pojavit će se nova linija za unos.

*Posebni gumbi*:

> **Umetni faze**: omogućuje dodavanje novih faza u mrežu povezanu s fazama;  
> **Obriši fazu**: omogućuje brisanje odabrane ili više odabranih faza;  
> **Ažuriraj iz faze / Obriši podatke o opremi**: pojavljuju se na Ribbon traci kad se pozicionirate na kartici *Opremanje*: pomoću gumba *Ažuriraj* iz faze ažuriraju se podaci o opremi preuzimajući ih od faze; pomoću gumba *Obriši podatke o opremi*, brišu se podaci o opremi;  
> **Ažuriraj materijale iz Popisa materijala**: ovaj gumb se pojavljuje na Ribbon traci kad se pozicionirate na kartici *Materijali*: pomoću ovog gumba dodaju se materijali na karticu preuzeti iz osnovnog sastava članka;;  
> **Dodaj / Izbriši opremu**: ovi gumbi pojavljuju se na Ribbon traci kad se pozicionirate na kartici *Oprema*: pomoću ovih gumba možete dodati ili obrisati odabranu opremu;;  
> **Dodaj / Izbriši alate**: ovi gumbi pojavljuju se na Ribbon traci kad se pozicionirate na kartici *Alati*: pomoću ovih gumba možete dodati ili obrisati odabrane alate. 

Za sve što nije detaljno navedeno u ovom dokumentu o zajedničkom radu oblika, pogledajte sljedeću vezu [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).