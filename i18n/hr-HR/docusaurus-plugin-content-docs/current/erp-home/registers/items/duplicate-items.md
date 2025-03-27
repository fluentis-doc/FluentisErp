---
title: Dupliciraj artikle
sidebar_position: 4
---

Postupak dupliciranja artikala dostupan je putem izbornika **Početna stranica > Artikli > Dupliciraj artikle**.

U ovom prozoru moguće je stvoriti nove artikle putem dupliciranja već postojećih artikala.  
Na taj način moguće je duplicirati zajedničke informacije između dva artikla.

### Područje filtra

U području filtra moguće je postaviti niz filtara koji omogućuju pretraživanje baze podataka kako bi se lakše pronašao članak ili članci s određenim karakteristikama. Ovo olakšava pronalaženje članka koji najbolje odgovara članku ili člancima koje želite duplicirati i koji će biti osnova za postupak dupliciranja.

Pomoću ovih filtara moguće je prikazati: jedan članak (npr. pretraživanjem po šifri članka) ili više članaka koji pripadaju istoj klasi unosom šifre članka; članke s istim karakteristikama ili istom trgovačkom kategorijom (npr. pretraživanjem karakteristika i trgovačke kategorije); članke s istom vrstom članka ili istom nomenklaturom; sve članke s istim preferiranim dobavljačem, istim stanjem ili verzijom; u slučaju kupljenih materijala moguće je pretraživati članak pomoću šifre dobavljača; naposlijetku, moguće je pretraživati članke pomoću njihovog barkoda.

Otviranjem proširivača **Napredno pretraživanje** i **Partije i serijski brojevi**, moguće je odabrati filtriranje i prema stanju članka (izmišljen, arhiviran/nije arhiviran, u iscrpljenju/nije u iscrpljenju) ili prema upravljanju člankom (upravlja se partijama, serijskim brojevima, upravlja se RFID-om ili jedinstvenim RFID-om).

Nakon postavljanja željenih parametara filtriranja i klikom na gumb za **Pretraživanje** u izbornoj traci, sustav će pronaći članak ili skup članaka koji odgovaraju odabranim parametrima i prikazat će ih u rezultatnoj mreži.

*Posebni gumbi*:

> **Generiraj prototipove članka**: gumb koji će se aktivirati kada se odabere glavni članak i kada se kodira potomak članka u prvom kartici prozora nazvanog 'Članak za dupliciranje'; na ovaj način će se generirati prototip potomka članka koji će se zatim definirati i potvrditi;  
> **Označi/Odznači sve**: gumbi koji omogućuju označavanje ili odznačavanje svih artikala koji proizlaze iz postavljenih filtera pretraživanja;  
> **Izbriši prototip artikla**: gumb koji omogućuje brisanje, nakon što je odabran, prototipa artikla koji je generiran prije nego što se službeno stvori postupkom 'Potvrdi generiranje prototipa';  
> **Potvrda generiranja prototipa**: gumb koji omogućuje potvrdu prethodno stvorenog prototipa, službeno stvarajući potom djeteta članka unutar baze podataka. 

U nastavku će biti detaljno opisani koraci koji omogućuju dupliciranje artikla.


### Članak za dupliciranje 

Ova Kartica uključuje mrežu rezultata u kojoj će biti prikazan članak i/ili lista članaka koji odgovaraju prethodno postavljenim kriterijima filtra za pronalaženje početnog članka.

Nakon što se pronađe matični članak od kojeg ćemo krenuti s dupliciranjem, u donjem dijelu automatski će se popuniti neki podaci: **Društvo**, **Divizija**, **Razred članka** i **Broj prototipova**.

Svi ovi podaci ipak su moguće ručno mijenjati putem kombiniranih okvira ili unosom različitog broja prototipova u polje **Broj prototipova**.

**Šifra artikla**, s druge strane, bit će stvorena na temelju sastava šifre artikla koji ste odabrali prema klasi artikla u tablici **Klasa artikla**.

Kako možete primijetiti, odabirom klase artikla, u rešetki s desne strane nalaze se informacije koje pokazuju kako trebaju biti stvoreni kodovi artikala koji pripadaju toj klasi artikla; u gore navedenom primjeru, kod se sastoji redom od dodatnih podataka, tj. Zemlje (oznake) koja će činiti i kod i opis; drugog dodatnog podatka koji će biti boja, a i on će činiti i kod i opis; još jednog dodatnog podatka koji je u ovom slučaju ponovno zemlja, a zatim progresivnog koda duljine 3 znamenke koji će se izračunati počevši od vrijednosti 1, i na kraju fiksne vrijednosti koja je u ovom slučaju utvrđena kao slovo F.

Ova tablica također se sažima u samoj kartici, **Artikli za dupliciranje**, gdje će se popuniti informacije o vrijednostima navedenim gore (dakle, navest će se zemlja, boja itd., ovisno o vrsti dodatnih podataka koje ste odabrali).

Jednom kada su podaci postavljeni, u poljima **Šifra** i **Opis** će automatski prikazati šifru i opis novog artikla.

Nakon toga, možete postaviti parametre kako biste nastavili s stvaranjem **Prototipa članka**, pritiskom na odgovarajući gumb u traci s izbornicima obrasca.

Generirani prototip bit će prikazan na sljedećoj kartici, Prototipi artikla. 

### Parametri

U ovoj Kartici, možete odabrati parametre koji će regulirati dupliciranje navedenog artikla.

Na ekranu se nalazi niz flaga koje će ukazivati na karakteristike članka koje želite duplicirati točno iste kao i kod matičnog članka, a koje će se ipak moći ažurirati i/ili mijenjati u djetetu članka.

Informacije koje se mogu duplicirati obuhvaćaju: troškove, mase i dimenzije, lotove i S/N, nabavu, varijante, preferirane dobavljače (u slučaju nabavnih artikala), klijente (u slučaju prodajnih artikala), alternativne mjernih jedinica, slike, bilješke, barkodske oznake, informacije sadržane u kartici Administracija, dodatne podatke, pakiranje, itd. To su sve informacije sadržane unutar kartica koje čine članak i koje su detaljno opisane u pripadajućim člancima (vidi [Izrada predmeta](/docs/erp-home/registers/items/create-new-item) s pripadajućim povezanim dokumentima).

Također se može odlučiti duplicirati i [Sastavnica materijala](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies) članka, njezin [Proizvodni ciklus](/docs/erp-home/registers/production/routes/new-route) i [MRP Parametre](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) članka.

Uvijek unutar ove kartice, postoji dodatni odjeljak gdje se može definirati boja popunjavanja ćelije i boja teksta kako bi se mogli identificirati tijekom generiranja prototipa: redci koji sadrže nedostajuće podatke (npr. ako jedan od podataka koje želite duplicirati nedostaje u roditeljskom artiklu, u djetetovom artiklu bit će prikazan redak koji odgovara toj stavci istaknut bojom po vašem izboru) i artikli koji su već bili kodirani ranije (u slučaju da stvarate artikl koji je potpuno identičan već postojećem artiklu unutar baze podataka). 

Nakon postavljanja parametara, možete nastaviti s dupliciranjem članka.

Za sve informacije koje nisu detaljno navedene u ovom dokumentu o zajedničkom funkcioniranju obrazaca, obratite se sljedećoj poveznici: [Funkcionalnosti, gumbe i zajednička polja](/docs/guide/common).