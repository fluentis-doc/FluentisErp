---
title: Upravljanje označenim retcima i Dostava iz slaganja robe
sidebar_position: 2
---

## Upravljanje označenim retcima

:::important Čemu služi
Funkcija upravljanja potvrdom preuzimanja u Fluentis WMS-u namijenjena je potvrđivanju stavki picking liste koje je operater stvarno preuzeo u skladištu. Ako je označena barem jedna stavka, postupci kreiranja otpremnice (DDT) i računa uzimaju u obzir samo označene stavke; u suprotnom se obrađuju sve stavke picking liste.

Ovakav način rada pojednostavljuje i ubrzava izradu otpremnica i računa te omogućuje i ručni unos novih stavki artikala. Osim toga, tijekom potvrđivanja stavki moguće je kreirati utovarne jedinice (UJ), grupirajući potvrđene artikle unutar jedne ili više utovarnih jedinica. Nakon odabira stavke i unosa potrebnih podataka moguće je kreirati i upravljati novim utovarnim jedinicama koje sadrže potvrđene artikle.
:::

Iz postojećeg Picking-a, imate mogućnost čitanja prisutnih artikala i grupiranja ih u UDC (Jedinice za upravljanje skladištem). Iz WPF-a je zatim moguće nastaviti s izradom Dostavnica ili fakture.

:::note NAPOMENA
U obrascu za **Upravljanje označenim retcima** prikazat će se samo Picking-i stvoreni s *vrstom Picking-a* s omogućenom *obveznom jedinicom za upravljanje skladištem* u tablici [Vrste Picking-a](/docs/configurations/tables/logistics/picking-type/).
:::

Obrazac se otvara na filtru Picking-a, gdje možete pregledati sve Picking-e u stanju *Neobrađeno* i *Djelomično obrađeno*.     
Rezultate možete filtrirati po *Vrsti Picking-a*, *Broju*, *Datumu* i *Klijentu*.    
Pomoću gumba *Otvori* možete otvoriti odabrani Picking.

Glavni obrazac sastoji se od sljedećih kartica:

- **Artikli**
Ovdje su prikazane sve stavke artikala prisutne u Picking-u.

**Posebni gumbi**
> **Detalji**: omogućuje vam pozicioniranje na karticu  **Potvrđeni artikli**;        
> **Potvrda**: nakon odabira stavke u kartici **Artikli**, otvara karticu **Potvrda** i predlaže odabrani artikl.

- **Potvrda**
Pomoću polja za **Unesite kod** (koristeći čitač barkoda) možete unijeti podatke o lotu, lokaciji, količini za preuzimanje i artiklu ako ga želite promijeniti u odnosu na onaj koji je predložen.  
Ako korisnik potvrdi stavku, za artikl koji se upravlja lotovima, a za koji nije unesen lot, pojavit će se poruka koja podsjeća da unesete lot. Također, u kartici postoji polje za *Unos jedinice za upravljanje skladištem* koje treba popuniti kako bi se potvrdili podaci.

**Posebni gumbi**
> **Detalj oznake**: omogućuje vam pozicioniranje na karticu **Označeni artikli**;          
> **Potvrda**: omogućuje potvrdu unesenih podataka i zatim učitava podatke o sljedećoj stavci;         
> **Nova transportna jedinica** (Jedinica za upravljanje skladištem): omogućuje stvaranje nove *Jedinice za upravljanje skladištem* nakon odabira vrste.        

- **Transportna jedinica**
omogućuje pregled sastava stvorenih *Jedinica za upravljanje skladištem* za trenutni Picking.        

**Posebni gumbi**
> **Otvori jedinicu za utovar**: omogućuje prikaz detalja odabrane *jedinice za upravljanje skladištem*. Također, posljednja otvorena *jedinica za upravljanje skladištem* bit će predložena kao *jedinica za upravljanje skladištem* u koju će se unijeti sljedeći artikli za potvrdu.         

- **Označeni Artikli**  
kartica **Označeni Artikli** popunjava se tek nakon odabira artikla u kartici **Artikli** u Picking-u.
Dakle, iz liste artikala Picking-a odabire se jedan artikl, a u kartici **Označeni Artikli** prikazuju se sva očitanja odabranog artikla.
Kada je stavka *Pickinga* u cijelosti izvršena, automatski se premješta na kraj popisa u kartici **Artikli** i pojavit će se svi pročitani podaci za odabrani artikl. Kada se redak Picking-a potpuno potvrdi, prelazi u redak u kartici **Artikli** i označava se crvenom bojom. Odabirom tog retka i pritiskom na gumb *Detalji oznake* otvara se kartica **Označeni Artikli** gdje se mogu vidjeti potvrđeni retci, koji se također mogu obrisati pomoću odgovarajućeg gumba *Obriši*. 
S ove kartice moguće je odabrati potvrđeni artikl i izbrisati ga.  

**Posebni gumbi**
> **Obriši**: omogućuje brisanje odabranog retka.

**Parametri utovara/istovara** trebaju se unijeti u tablicu [Parametri punjenja/pražnjenja po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

Parametri su ponovljeni jer se moraju povezati dvije različite vrste promjena, jedna za unos i druga za izlaz (bez protuvrijednosti).
                                         
Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).


## Dostava iz slaganja robe

:::important Čemu služi
Na temelju postojeće picking liste, ali bez korištenja utovarnih jedinica, koje se kreiraju putem forme [Upravljanje potvrdom preuzimanja](/docs/logistics/wms/sales/check-row-management), forma **Potvrda pickinga** omogućuje potvrđivanje pojedinačnih stavki picking liste radi premještanja artikala između skladišta ili skladišnih lokacija, uz izravno kreiranje skladišnih knjiženja prijenosa.

Nakon toga je u WPF aplikaciji moguće nastaviti s kreiranjem otpremnice (DDT) ili računa.
:::

Obrazac za **Potvrdu odabira** koristi se za potvrdu pojedinačnih linija odabira bez korištenja jedinica za upravljanje skladištem, koje se umjesto toga koriste u formi za [Provjerite upravljanje redovima](/docs/logistics/wms/sales/check-row-management).

Nakon toga, iz wpf-a, može se nastaviti s kreiranjem Dostavnice ili fakture.

:::note NAPOMENA
U obrascu za **Potvrdu Picking-a** prikazuju se samo picking-i kreirani s *vrstom picking-a* s opcijom *obavezne jedinice za upravljanje skladištem* deaktiviranom u tablici [Vrste picking-a](/docs/configurations/tables/logistics/picking-type/).
:::

Obrazac se otvara s filtrom za Picking, gdje se mogu pregledati svi Picking-i u statusu *Neobrađen* ili *Djelomično obrađen* i s *vrstom picking-a* s opcijom *obavezne jedinice za upravljanje skladištem* deaktiviranom.    
Rezultate je moguće filtrirati prema *Vrsti picking-a*, *Broj*, *Datum* i *Klijentu*.    
Pomoću gumba *Otvori* moguće je otvoriti odabrani Picking.

Glavni obrazac sastoji se od sljedećih kartica:

- **Artikli**
Na ovoj kartici prikazuju se sve linije artikala prisutne u Picking-u.

**Posebni gumbi**
> **Detalji**: omogućuje prelazak na karticu **Provjereni artikli**;        
> **Potvrda**: nakon odabira linije na kartici **Artikli**, otvara karticu **Potvrda** nudeći odabrani artikl.  

- **Potvrda**
pomoću polja za **unesite kod** (koristeći čitač barkoda) moguće je unijeti podatke o seriji, lokaciji, količini preuzimanja i artiklu ako se želi promijeniti u odnosu na predloženi. Ako korisnik potvrdi liniju za artikl koji se upravlja serijama, a serija nije unesena, prikazat će se poruka koja podsjeća na unos serije. 

**Posebni gumbi**
> **Detalji**: omogućuje prelazak na karticu **Provjereni artikli**;        
> **Potvrda**: omogućuje potvrdu unesenih podataka i naknadno učitavanje podataka o sljedećoj liniji;           
    
- **Provjereni artikli**       
kartica **Označeni artikli** popunjava se tek nakon odabira artikla na kartici **Artikli** Picking-a.
Dakle, iz liste artikala Picking-a odabire se artikl, a na kartici **Označeni artikli** pojavljuju se svi očitani podaci za odabrani artikl. 
Kada se linija *Picking-a* potpuno obrađuje, prebacuje se na kraj u kartici **Artikli** i označava crveno. Odabirom te linije i pritiskom gumba *Detalji* otvara se kartica **Označeni artikli** gdje se mogu vidjeti potvrđene linije, koje se također mogu obrisati pomoću posebnog gumba *Izbriši*. 
S ove kartice moguće je odabrati spuntani artikl i obrisati ga.

**Posebni gumbi**
> **Izbriši**: omogućuje brisanje odabrane linije.

**Parametri za ulaz/izlaz** robe trebaju se unijeti u tablicu [Parametri za ulaz/izlaz robe po korisniku](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Područje | Modul | Obrazac |
| :-- | :-- | :-- |
| WM | Fluentis.FluentisErp.Mvvm.WM.ReadWrite.Views | CheckRowManagement |

:::note NAPOMENA
Za ovaj obrazac potrebno je postaviti ispravnu vrstu prijenosa s odgovarajućim protivnim računom.
:::

:::note Napomena
Važno je napomenuti da predložak skladišnog knjiženja koji se koristi mora biti predložak izlaza robe s povezanim predloškom ulaza robe kao protustavkom.
:::

Za svaki Picking bit će stvorena samo jedna evidencija ispusta s jednim protivnim računom koji sadrži sve pokrete potvrđenih artikala. 

Za sve informacije o tome kako kodirati barkodove za čitanje u polju **kod Barkoda** pogledajte stranicu o [Barkod tokenizator](/docs/configurations/tables/general-settings/barcode-tokenizer).


