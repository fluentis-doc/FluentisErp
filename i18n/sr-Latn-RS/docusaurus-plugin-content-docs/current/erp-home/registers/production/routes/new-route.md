---
title: Novi proizvodni ciklus
sidebar_position: 2
---

Nakon što su definisane sastavnice proizvoda, potrebno je kreirati proizvodni (radni) ciklus, odnosno skup proizvodnih faza kroz koje proizvod prolazi tokom procesa proizvodnje.

Postupak kreiranja **Novog proizvodnog ciklusa** pokreće se putem:

**Proizvodnja > Proizvodni ciklusi > Proizvodni ciklusi**, klikom na dugme **Novo**

ili

**Proizvodnja > Proizvodni ciklusi > Novi proizvodni ciklus**.

Oba postupka otvaraju obrazac **Proizvodni ciklus**, koji se sastoji od zaglavlja za unos obaveznih podataka i kartica u kojima su grupisane specifične karakteristike proizvodnog ciklusa.

## Zaglavlje

U ovom dijelu unose se osnovni podaci o proizvodnom ciklusu.

#### Specifična polja

**Ciklus**: unosi se šifra i opis proizvodnog ciklusa;

**Artikal i varijanta**: odabire se artikal i, po potrebi, njegova varijanta za koju se definiše proizvodni ciklus;

**Verzija**: odabire se verzija sastavnice za koju se kreira proizvodni ciklus;

**Ciklus**: određuje da li je proizvodni ciklus **Operativni** ili **Neoperativni**;

**Vrsta ciklusa**: najčešće se koristi vrijednost **Standardni**. Ako za isti artikal postoji više proizvodnih ciklusa, moguće je odabrati vrijednost **Alternativni** i definisati broj alternativnog ciklusa koji pripada istoj verziji;

**Datum unosa / Datum izmjene**: prikazuje datum kreiranja proizvodnog ciklusa i datum njegove posljednje izmjene.

## Faze

Nakon kreiranja proizvodnog ciklusa moguće je dodavati proizvodne faze koje ga čine. Faze se prethodno definišu u tabeli [Standardne faze](/docs/configurations/tables/production/standard-phases), koja se nalazi u modulu **Proizvodnja**.

#### Specifična polja

**Šifra**: označava šifru standardne faze. Nakon odabira faze, podaci se automatski preuzimaju iz odgovarajuće tabele;

**Faza**: predstavlja redni broj faze u proizvodnom ciklusu;

**Podfaza**: predstavlja redni broj podfaze unutar iste faze;

**Opis faze/podfaze**: prikazuje opis odabrane faze ili podfaze;

**Tip**: određuje da li je faza **Interna**, pri čemu se kreira samo proizvodni nalog, ili **Eksterna**, pri čemu se uz proizvodni nalog kreira i nalog za kooperaciju;

**Radni centar**: određuje radni centar ili mašinu na kojoj će se izvršavati odabrana proizvodna faza.

**Fiksno vrijeme**: ako je opcija aktivna, vrijeme trajanja ove faze smatra se fiksnim i ne zavisi od količine proizvodnje;

**Kontrola kvaliteta**: ako je aktivirana, označava da faza podliježe kontroli kvaliteta. Na posebnoj kartici moguće je odabrati **Plan kontrole** koji će biti primijenjen nakon završetka proizvodnje;

**Proizvodna faza**: ako je aktivirana, označava da je riječ o proizvodnoj fazi za koju je moguće evidentirati proizvodne prijave. Ako opcija nije aktivna, prijava proizvodnje za tu fazu neće biti moguća;

**Faza sa dozvoljenim skladišnim kretanjem**: ako je aktivirana, prilikom evidentiranja proizvodne faze automatski će se kreirati skladišna knjiženja. To znači da će se, na osnovu proizvodne prijave, izvršiti prijem gotovog proizvoda i izdavanje sirovina utrošenih u toj fazi;

**Mašina / Grupa radnika**: u ovim poljima bira se šifra mašine na kojoj će se faza izvršavati i grupa radnika koja će biti angažovana. Vrijednosti se preuzimaju iz tabela [Grupe radnika](/docs/configurations/tables/production/labour-group) i [Mašine](/docs/configurations/tables/production/machines), koje se nalaze u modulu **Proizvodnja**;

**Jedinica mjere vremena**: određuje mjernu jedinicu za vrijeme rada, koja je najčešće izražena u minutama;

**Početak / Kraj važenja**: omogućavaju definisanje perioda važenja faze, ako se koristi samo u određenom vremenskom periodu;

**Tip preklapanja**: podrazumijevana vrijednost je **Nema**. Ako se faza može izvršavati paralelno s drugom fazom, moguće je odabrati jedan od tipova preklapanja: **Ukupno**, **Po komadu** ili **Po vremenu**;

**Vrijednost**: definiše vrijednost povezanu s odabranim tipom preklapanja i nema veze s finansijskom vrijednošću. Na primjer, kod preklapanja **Po komadu** unosi se broj komada nakon kojeg može započeti naredna faza, dok se kod preklapanja **Po vremenu** unosi vrijeme koje mora proteći prije početka naredne faze;

**Faza preklapanja / Podfaza preklapanja**: u slučaju preklapanja određuju fazu i podfazu s kojom će se odabrana faza izvršavati paralelno;

**Trošak po jedinici**: omogućava unos troška faze kada se za obračun ne koriste troškovi mašine i radne snage;

**Konto / Podkonto kooperanta**: ako je faza eksterna, u ovim poljima moguće je odabrati konto i podkonto kooperanta koji će izvršiti vanjsku fazu;

**Opis radnog centra**, **Opis mašine**, **Opis grupe radnika** i **Opis kooperanta**: prikazuju opise šifara odabranih u odgovarajućim poljima.

U trećem dijelu obrasca definišu se detaljni podaci o mašinama, radnicima i vremenskim normama:

**Broj mašina**: određuje broj mašina potrebnih za izvršavanje faze;

**Vrijeme mašine**: određuje trajanje rada mašine izraženo u mjernoj jedinici definisanoj u polju **Jedinica mjere vremena**;

**Količina faze**: predstavlja količinu proizvoda koja se planira proizvesti prilikom jednog izvršavanja faze;

**Broj radnika**: određuje broj radnika potrebnih za izvršavanje faze;

**Vrijeme rada radnika**: predstavlja vrijeme potrebno radniku za izvršavanje faze, izraženo u odabranoj mjernoj jedinici vremena;

**Vrijeme čekanja u redu**: određuje vrijeme čekanja koje se dodaje ukupnom trajanju faze nakon njenog završetka;

**Vrijeme čekanja – zauzima resurs**: ako je aktivirano, vrijeme čekanja rezerviše radni centar, što znači da nije moguće započeti novu fazu na tom radnom centru dok vrijeme čekanja ne istekne.

### Kartice

**Postavljanje**: na ovoj kartici definišu se vremena pripreme mašine za početak izvođenja faze, kao i vremena ponovne pripreme ukoliko je potrebno ponovo pripremiti radni centar između dva uzastopna izvršenja faze. Vremena pripreme su u pravilu fiksna. Takođe je moguće definisati broj radnika potrebnih za pripremu mašine. Ukoliko se priprema obavlja na drugom **Radnom centru / Mašini / Grupi radnika** od onog definisanog za samu fazu, novi podaci mogu se unijeti putem odgovarajućih polja;

**Materijali**: na ovoj kartici definišu se materijali koji se neće razduživati na završetku proizvodnje gotovog proizvoda, već po završetku određene faze proizvodnje;

**Oprema**: na ovoj kartici unosi se oprema koja će se koristiti tokom izvođenja faze. Oprema se bira iz tabele [Oprema](/docs/configurations/tables/production/equipments), koja se nalazi u modulu **Proizvodnja**. Ako je aktivirana opcija **Vremenski planirano**, planiranje će uzeti u obzir artikal definisan u poljima klase i šifre (koji mora imati **Vrstu artikla** postavljenu na **Oprema** ili **Alat**), umjesto opreme odabrane iz šifrarnika;

**Alati**: na ovoj kartici unose se alati koji će se koristiti tokom faze, odabirom iz tabele [Alati](/docs/configurations/tables/production/tools), koja se nalazi u modulu **Proizvodnja**;

**Kontrola kvaliteta**: ako je za fazu aktivirana opcija **Kontrola kvaliteta**, na ovoj kartici bira se **Plan kontrole**. Sistem će automatski predložiti planirane testove koje je potrebno izvršiti radi kontrole kvaliteta proizvoda. Za detaljan opis polja pogledajte dokumentaciju o **Planovima kontrole**;

**Crteži**: na ovoj kartici moguće je povezati tehničke crteže koji se odnose na odabranu fazu;

**Napomene**: omogućava unos tehničkih ili drugih napomena vezanih za fazu;

**Operativna uputstva**: omogućava povezivanje različitih dokumenata vezanih za fazu, koji će kasnije biti dostupni u aplikaciji **Fluentis MES**;

**Alternative**: na ovoj kartici moguće je definisati alternativne faze za odabranu fazu;

**Dodatni podaci za faze / Dodatni podaci**: na ove dvije kartice unose se dodatni podaci za pojedinačnu fazu, odnosno za proizvodni ciklus. Podaci se biraju iz prethodno definisanih **Dodatnih podataka** (*Utility > Extra Data*). Novi dodatni podatak dodaje se desnim klikom miša i izborom opcije **Dodaj novi dodatni podatak**, pri čemu je moguće odabrati da li će biti dodat na prvom nivou ili kao podređeni (*child*) već postojećem dodatnom podatku.

<details>
<summary>Sljedeće kartice koriste se isključivo u postupku [F.C.S. raspoređivanja](/docs/planning/ms-master-scheduling/fcs-scheduling)</summary>

**Alternativne mašine**: ako se operacija izvodi u radnom centru koji raspolaže s više mašina, a u fazi nije definisana konkretna mašina, planer može koristiti bilo koju mašinu tog radnog centra. Ako operaciju nije moguće izvršiti na svim mašinama radnog centra, na ovoj kartici moguće je definisati listu dozvoljenih mašina (uključujući i mašinu koja je eventualno već definisana u fazi). Za svaku mašinu moguće je posebno definisati vrijeme obrade, vrijeme pripreme te broj operatera potrebnih za pripremu i obradu;

**Resursi**: osnovni resursi kojima planer upravlja uz ograničene kapacitete su mašine i radnici. Na ovoj kartici moguće je definisati dodatne proizvodne resurse potrebne za izvršenje operacije, zajedno s njihovim potrebnim količinama. Takvi resursi takođe se planiraju uz ograničene kapacitete. Primjeri uključuju kalupe, proizvodne alate, dizalice i sličnu opremu. Ako je navedena određena mašina, resurs će biti potreban samo kada planer odabere tu mašinu. Ako polje mašine ostane prazno, resurs će biti potreban bez obzira na odabranu mašinu;

**Vrijednosti atributa pripreme**: na ovoj kartici fazama koje se izvršavaju na mašinama s dugim vremenima pripreme dodjeljuju se [atributi pripreme](/docs/configurations/tables/production/fcs-tables/setup-property) i njihove odgovarajuće vrijednosti.

</details>

*Specifična dugmad*:

> **Dodaj fazu**: omogućava dodavanje novih faza u tabelu faza;  
> **Obriši fazu**: omogućava brisanje odabrane ili više odabranih faza;  
> **Ažuriraj iz faze / Obriši podatke o pripremi**: ova dugmad se pojavljuju na *Ribbon* traci kada je otvorena kartica **Postavljanje**. Dugme **Ažuriraj iz faze** ažurira podatke o pripremi preuzimajući ih iz odabrane faze, dok dugme **Obriši podatke o pripremi** uklanja postojeće podatke o pripremi;  
> **Ažuriraj materijale iz sastavnice**: ovo dugme se pojavljuje na *Ribbon* traci kada je otvorena kartica **Materijali**. Njegovom upotrebom u karticu se automatski prenose materijali definisani u sastavnici artikla;  
> **Dodaj / Obriši opremu**: ova dugmad se pojavljuju na *Ribbon* traci kada je otvorena kartica **Oprema** i omogućavaju dodavanje ili brisanje odabrane opreme;  
> **Dodaj / Obriši alate**: ova dugmad se pojavljuju na *Ribbon* traci kada je otvorena kartica **Alati** i omogućavaju dodavanje ili brisanje odabranih alata.

Za sve funkcionalnosti koje nisu detaljno opisane u ovom dokumentu, a odnose se na zajedničko ponašanje obrazaca, pogledajte dokument [Funkcionalnosti, dugmad i zajednička polja](/docs/guide/common).