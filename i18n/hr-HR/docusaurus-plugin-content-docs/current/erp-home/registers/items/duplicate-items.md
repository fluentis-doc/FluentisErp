---
title: Dupliciranje artikala
sidebar_position: 4
---

Proceduri za dupliciranje artikala pristupa se putem izbornika **Početna > Artikli > Dupliciranje artikala**.

U ovom prozoru moguće je kreirati nove artikle dupliciranjem već postojećih artikala. Na taj način mogu se kopirati sve informacije zajedničke izvornom i novom artiklu.

### Područje filtera

U području filtera moguće je postaviti niz kriterija pretraživanja koji omogućuju pronalaženje artikla ili skupine artikala sa željenim karakteristikama unutar baze podataka, kako bi se lakše pronašao artikl koji će poslužiti kao osnova za dupliciranje.

Pomoću ovih filtera moguće je prikazati:
- pojedinačni artikl (npr. pretraživanjem po šifri artikla);
- više artikala iste klase unosom klase artikla;
- artikle s istim karakteristikama ili istom robnom kategorijom (npr. pretraživanjem po karakteristici i robnoj kategoriji);
- artikle iste vrste ili s istom nomenklaturom;
- sve artikle povezane s istim preferiranim dobavljačem, istim statusom ili verzijom;
- kod nabavnih materijala, pretraživanje prema šifri artikla dobavljača;
- pretraživanje prema barkodu.

Otvaranjem proširenih sekcija **Napredno pretraživanje** i **Lotovi i serijski brojevi** moguće je dodatno filtrirati prema statusu artikla (fiktivan, arhiviran/nearhiviran, u odlasku/nedostatku) ili prema načinu upravljanja artiklom (upravljanje lotovima, serijskim brojevima, RFID ili jedinstvenim RFID-om).

Nakon definiranja željenih filtera, klikom na gumb **Traži** u ribbon traci sustav pronalazi artikle koji odgovaraju odabranim kriterijima i prikazuje ih u mreži rezultata.

*Specifični gumbi*:

> **Generiraj prototipove artikla**: aktivira se nakon odabira roditeljskog artikla i definiranja novog artikla u prvoj kartici *Artikl za dupliciranje*. Na taj način generira se prototip novog artikla koji će se kasnije definirati i potvrditi;  

> **Označi/Odznači sve**: omogućuje označavanje ili uklanjanje oznake sa svih artikala prikazanih u rezultatima pretraživanja;  

> **Izbriši prototip odabranog elementa**: omogućuje brisanje prethodno generiranog prototipa prije njegove konačne potvrde;  

> **Potvrdi prototipove odabranih stavki**: potvrđuje prethodno kreirani prototip i službeno generira novi artikl u bazi podataka.

U nastavku su opisani koraci potrebni za dupliciranje artikla.

### Artikl za dupliciranje

Ova kartica sadrži mrežu rezultata u kojoj se prikazuje artikl ili popis artikala koji odgovaraju prethodno definiranim kriterijima pretraživanja.

Nakon što se odabere roditeljski artikl koji će služiti kao osnova za dupliciranje, u donjem dijelu automatski se popunjavaju određeni podaci: **Poduzeće**, **Odjel**, **Klasa artikla** i **Broj prototipova**.

Sve ove podatke moguće je naknadno ručno izmijeniti putem padajućih izbornika ili unosom drugog broja u polje **Broj prototipova**.

**Šifra artikla** generira se prema pravilima definiranim za odabranu klasu artikla u tablici **Klase artikala**.

Odabirom klase artikla, u mreži s desne strane prikazuju se informacije o načinu generiranja šifri za artikle te klase. U prikazanom primjeru šifra se sastoji od:
- jednog Extra Data polja koje predstavlja državu (oznaka se koristi i u šifri i u opisu);
- drugog Extra Data polja koje predstavlja boju (također se koristi i u šifri i u opisu);
- dodatnog Extra Data polja koje ponovno predstavlja državu;
- progresivnog broja duljine 3 znamenke koji kreće od vrijednosti 1;
- fiksne vrijednosti koja je u ovom primjeru slovo **F**.

Ova konfiguracija prikazana je i u samoj kartici **Artikl za dupliciranje**, gdje se unose vrijednosti za definirana polja (država, boja i ostali odabrani Extra Data atributi).

Nakon unosa podataka, polja **Šifra** i **Opis** automatski će prikazati novu šifru i opis artikla.

Nakon toga moguće je pokrenuti generiranje **Prototipa artikla** klikom na istoimeni gumb u ribbon traci.

Generirani prototip prikazuje se u sljedećoj kartici **Prototipovi artikla**.

### Parametri

U ovoj kartici mogu se odabrati parametri koji određuju način dupliciranja artikla.

Prozor sadrži niz oznaka (*flagova*) kojima se definira koje karakteristike artikla treba duplicirati identično kao kod izvornog (roditeljskog) artikla. Te se informacije kasnije po potrebi mogu ažurirati ili izmijeniti na novom (dječjem) artiklu.

Moguće je duplicirati sljedeće podatke: troškove, težine i dimenzije, lotove i serijske brojeve (S/N), nabavu, varijante, preferirane dobavljače (za nabavne artikle), kupce (za prodajne artikle), alternativne mjerne jedinice, slike, napomene, barkodove, informacije iz kartice Administracija, Extra Data podatke, pakiranje itd. Sve su to podaci koji se nalaze unutar različitih kartica artikla i detaljno su opisani u odgovarajućoj dokumentaciji (vidi [Kreiranje artikla](/docs/erp-home/registers/items/create-new-item) i povezane dokumente).

Također je moguće duplicirati i proizvodnu [Sastavnicu (BOM)](/docs/erp-home/registers/production/bill-of-materials/search-and-insert-assemblies), pripadajući [Radni ciklus](/docs/erp-home/registers/production/routes/new-route) te [MRP parametre](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) artikla.

Unutar iste kartice nalazi se i dodatna sekcija u kojoj je moguće definirati boju pozadine ćelije i boju teksta kako bi se tijekom generiranja prototipova lakše prepoznali:
- redovi koji sadrže nedostajuće podatke (npr. ako je neko od polja koje se duplicira prazno na roditeljskom artiklu, odgovarajući redak na novom artiklu bit će označen odabranom bojom);
- artikli koji su već prethodno bili kreirani, odnosno situacije kada se pokušava generirati artikl identičan već postojećem artiklu u bazi podataka.

Nakon definiranja svih parametara moguće je nastaviti s postupkom dupliciranja artikla.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte dokument [Zajedničke funkcionalnosti, gumbi i polja](/docs/guide/common).