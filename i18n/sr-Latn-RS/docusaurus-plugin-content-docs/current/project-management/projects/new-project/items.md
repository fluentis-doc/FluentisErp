---
title: Artikli
sidebar_position: 3
---

Na ovoj kartici možete unijeti artikle/stavke projekta. Gumb u izborniku ![](/img/neutral/common/new.png) omogućuje unos novog reda artikla, dok gumb, dok gumb ![](/img/neutral/common/delete.png) omogućuje brisanje reda. Za izgradnju strukture projekta dostupni su specifični gumbi:
![](/img/neutral/common/new-child.png)  Nova podređena stavka: omogućuje unos pod-reda odabranog reda;   
![](/img/neutral/common/new-brother.png) Nova stavka iste razine: omogućuje unos reda projekta na istoj razini kao odabrani red;   
![](/img/neutral/common/wbs.png)  ikona Zamijeni broj WBS: omogućuje uključivanje Broja projekta u WBS redove;
za prikaz strukture projekta dostupni su gumbi: 
![](/img/neutral/common/implode.png)  Sažmi:omogućuje skrivanje redova strukture;
![](/img/neutral/common/implode.png)  Proširi: omogućuje prikaz redova.

Karakteristike artikla/stavki trebaju se unijeti u **karticu Djelatnosti** na dnu:

**Broj reda/Broj WBS-a**: sadrže brojeve reda i WBS-a i automatski se postavljaju, iako ih je moguće slobodno mijenjati;     
**Tip Čvora**: označava je li **Redak Korijena** (glavni čvor), **Čvor Aktivnosti** (vezan uz aktivnosti) ili **Čvor Radnog Paketa** (završni čvor projekta, jedini koji može sadržavati određene šifre artikla);      
**Tip Reda**: označava vrstu artikla među Kodificiranim, Ne kodificiranim, Troškovima ili Napomenama (posljednje prema zadanim postavkama);      
**Artikl**: prikazuje Klasu, Šifru i Opis odabranog artikla ako je odabran;       
**Opis**: sadrži opis Artikla/stavki prema zadanim postavkama ako je odabran, ali ga je moguće slobodno mijenjati;        
**Vrsta posla**: označava u organizacijskom smislu razinu projekta koja još nije kvantificirana (vidljiva u ponudama, kako bi se razdvojila od aktivnosti koje su dio ugovora), tako da označava novi posao koji još nije upravljao voditelj projekta, ali proizlazi iz različitih operacija projekta; 
**Artikl ponude**:        
**Količina/JM/Cijena**: sadrže eventualne podatke o odabranom artiklu;       
**Trošak materijala/Ukupni trošak**: moguće je navesti eventualne troškove;        
**Trošak resursa**: moguće je navesti eventualni trošak resursa;            
**PDV**: označava primjenjivi PDV;            
**Vrsta fakturiranja prodaje**: označava fakturiranje prodaje artikla;            
**Nevidljiva razina**: ovim se znakom označava da je razina zaključana, pa se grana projekta nizvodno ne može koristiti za dodavanje dodatnih aktivnosti;                       
**Kategorija aktivnosti**: označava eventualnu kategoriju aktivnosti postavljenu u **Tablici > Upravljanje Projektima > Kategorija Aktivnosti**.

Uneseni podaci bit će dodani u redove projekta i ažurirat će se kako se popunjavaju i druge kartice. Informacije se agregiraju na višem nivou, pa će Korijenski Čvor sadržavati sažetak svojih podčvorova.

Na kartici Artikl nalazi se i **kartica Planiranje usluge**, čiji podaci trebaju biti uneseni za odabrani redak artikla:

**Datum početka/Datum završetka**: označavaju planirane datume za aktivnost;        
**Od datuma / Datum**:               
**Završen rad(%)/Procjena**: moguće je navesti postotak završenosti rada ili pripadnu procjenu;            
**Vrsta zahtjeva za intervencijom**: moguće je navesti povezanu vrstu zahtjeva za intervencijom;             
**Glavna imovina**: moguće je povezati postrojenje koje će, primjerice, sadržavati niz informacija povezanih s održavanjem istog projekta;            
**Voditelj**: moguće je navesti resurs projekta;          
**Prisilno zatvoreno**: moguće je navesti datum prisilnog zatvaranja projekta;               
**Prisilno izvršeno**:                         
**Kriteriji naplate**: moguće je odabrati kriterij naplate projekta odabirom da se neki radovi ne fakturiraju, izvršavajući stoga kontrolu "na vrhu"; izbor je između Svi radovi ili Ugovorni radovi; odabirom ove druge opcije naplaćivat će se samo Količina aktivnosti predviđena u kartici Aktivnosti, dok dodatne aktivnosti neće biti naplaćene;              
**Naplativa aktivnost**: ako je ova zastava prisutna, označava da je aktivnost fakturabilna; automatsko aktiviranje ove zastave ovisi o umetnutom Predlošku ili Podacima o Kategoriji aktivnosti umetnutoj u karticu Aktivnosti.      

Na kartici **Resursi** moguće je dodijeliti resurse za odabrani redak artikla:

**Datum unosa**: popunjava se datumom unosa resursa u projekt;          
**Resurs**: sadrži resurs, prethodno šifriran;              
**Centar troška**: dodjeljuje se povezani poslovni centar resursu, ali ga je moguće promijeniti;              
**Jedinica mjere**: sadrži jedinicu mjere za kvantificiranje dnevnog vremena resursa;              
**Količina**: označava dnevne sate;             
**Jedinična cijena**: označava cijenu resursa po jedinici mjere;                              
**Datum početka**: sadrži datum kad će resurs biti alociran, s radnim vremenom početka;             
**Vrijeme početka pauze**: sadrži eventualni datum i vrijeme početka pauze;                 
**Datum završetka**: sadrži datum kad će resurs biti alociran, s radnim vremenom završetka;                               
**Efektivno vrijeme**: ovo je polje koje se izračunava na temelju prethodnih stupaca i mijenja i polje Količina istim iznosom;       
**Napomene**: moguće je unijeti eventualne napomene;             
**Vrsta zahtjeva za intervencijom**: moguće je unijeti eventualan [zahtjev za intervencijom] povezan s njim, s njegovim karakteristikama, kao što su Opis i Broj.         

Svaki redak ove mreže sadržavat će jedan radni dan resursa: broj radnih dana unaprijed određen je u kartici Aktivnosti artikala.

Specifični gumb u izborniku ![](/img/it-it/project-management/projects/resources-navigator.png)
 ikona Navigator resursa omogućuje provjeru dostupnosti različitih resursa i rezervaciju dana. Otvara se prozor; eventualne rezervirane datume prikazat će kartica Resursi i utjecat će na troškove projekta.

Pomoću gumba ![](/img/neutral/common/new-visit-report.png) Stvaranje Zahtjeva za intervencijom moguće je, odabirom Resursa, izravno stvoriti povezani zahtjev za intervencijom na projektu ili poništiti zahtjev za intervencijom pomoću gumba Poništi Zahtjev za intervencijom.

Na **kartici Materijali** naznačeni su materijali potrebni za napredovanje projekta, s odgovarajućim karakteristikama šifriranih artikala. Trošak tih materijala utjecat će na redak artikla Trošak materijala. S ove se stranice mogu Materijali izravno stvoriti pomoću gumbara u izborniku **Stvaranje RDA**.








