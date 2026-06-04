---
title: Pretraga tehničkih uputstva
sidebar_position: 1
---

Filtar se nalazi na putanji **Kvaliteta > Kontrola artikala > Tehnička uputstva**.

Tehnička uputstva katalogiziraju sve one informacije koje opisuju karakteristike povezanih proizvoda kao prikladne za ugovor, funkcionalnu specifikaciju ili određenu namjenu, i mogu se prilagoditi za *Kupca*.  
Upravlja se *revizijama* i praćenjem povezanosti među različitim *Tehničkim uputstvima*.  
Standardno su dostupna izvješća: *Tehničko uputstvo* (za internu upotrebu) i *Kartica proizvoda* (za komercijalnu upotrebu).  


Filtriranje podataka omogućuje unos novih *Tehničkih uputstava* ili pretraživanje već postojećih radi njihovog pregledavanja, izmjene ili brisanja.  

### ![](/img/neutral/common/search.png) Pretraga tehničkih uputstva

Forma se sastoji od područja za filtriranje i područja za rezultate. Nakon što se postave svi željeni filteri, dovoljno je kliknuti na gumb **Pretraži** kako bi se rezultati prikazali unutar mreže rezultata.   

### ![](/img/neutral/common/new.png) Unos tehničkih uputstva

Za unos novih *Tehničkih kartica* potrebno je pritisnuti gumb **Novo**.   

### ![](/img/neutral/common/edit.png) Izmjena ili ![](/img/neutral/common/view.png) Prikaz tehničkih uputstva

Za otvaranje upravljanja u rezultirajućoj tablici potrebno je dvokliknuti na redak od interesa ili, selektirajući jedan ili više redaka, pritisnuti gumbe **Uredi** ili **Prikaži**. 

*Specifične tipke*:   

### ![](/img/neutral/common/duplicate.png) Dupliciraj karticu

Za dupliciranje postojeće *Tehničke kartice* u novu *Tehničku karticu* potrebno je kliknuti u tablici na *Tehničku karticu* koju želite duplicirati i pritisnuti gumb **Dupliciraj karticu**. Može se duplicirati samo jedna *Tehnička kartica* odjednom. Prikazuje se zahtjev za unos sljedećih podataka:   
> **Vrsta lista**: je *Tip kartice* nove *Tehničke kartice* (obavezno polje).   
> **Kupac**: je *Klijent* nove *Tehničke kartice*, predlaže se klijent iz originalne *Tehničke kartice*.   
> **Nova šifra**: je *Šifra* nove *Tehničke kartice* (obavezno polje), predlaže se prema *Metodi kodiranja* pridruženoj *Tipu tehničke kartice*.   
> **Dupliciraj sa sljedivošću**: označava želi li se zadržati odnos/praćenje, u originalnoj *Tehničkoj kartici* (tabulator *Povezane stvari* originalne *Tehničke kartice*) i u odredišnoj *Tehničkoj kartici* (u proširenju *Izvor podataka s kartica* unutar *podataka zaglavlja*).    

Nakon toga pritisnuti tipku **OK** ili tipku **Otkaži** ako se želi nastaviti s aktivnošću dupliciranja ili odustati.  
Nova *Tehnička kartica* koja se kreira imat će *Reviziju* postavljenu na *Nula*.  
Po završetku obrade, nova *Tehnička kartica* se prikazuje.  

### ![](/img/neutral/common/execute.png) Stvori novu reviziju

Da bi se kreirala nova *Revizija* postojeće *Tehničke kartice*, potrebno je kliknuti u priakzu na *Tehničku karticu* iz koje se želi kreirati nova *Revizija* i pritisnuti tipku **Stvori novu reviziju**. Može se kreirati nova *Revizija* samo za jednu *Tehničku karticu* odjednom.  
Kreira se nova *Tehnička kartica*, sa svim informacijama iz izvornog dokumenta, ali s povećanim indeksom *Revizije* i *Datumom početka važenja* postavljenim na današnji datum.  
Izvorna *Tehnička kartica* završava svoje važenje, a *Datum završetka važenja* se postavlja na današnji datum.  
Po završetku obrade, nova *Revizija* *Tehničke kartice* se prikazuje. 

### ![](/img/neutral/common/item-web.png) Izradi kontrolni plan

Iz *Tehničke kartice* moguće je kreirati *Kontrolni plan*; za to je potrebno kliknuti u prikazu na *Tehničku karticu* iz koje se želi kreirati kontrolni plan i pritisnuti tipku **Izradi kontrolni plan**. Novi *Kontrolni plan* može se kreirati samo za jednu *Tehničku karticu* odjednom.  
Kreira se novi *Kontrolni plan*, kopiraju se samo *Svojstva* izvora s indikatorom *Mjerenja koja se trebaju provesti*, dok sve ostale informacije iz *Tehničke kartice* ostaju, ali s indeksom *Revizije* postavljenim na *nula* i *Datumom početka važenja* postavljenim na današnji datum. Prikazat će se upit za:  
> **Tip kontrolnog plana**: je *Vrsta kontrolnog plana* novog *Kontrolnog plana* (obavezno polje).  
> **Broj**: je progresivni broj novog *Kontrolnog plana* (obavezno polje), predlaže se na temelju *Numeracije* povezane s *Vrsta kontrolnog plana* i današnjim datumom.  
> **Stvara održavanje sljedivosti**: označava hoće li se zadržati veza/praćenje izvornog *Tehničke kartice* u *Kontrolnom planu* odredišta (u expanderu *Izvor Kontrolnog plana* u *podacima zaglavlja*).  

Nakon toga se pritisne tipka **OK** ili tipku **Otkaži** ako se želi nastaviti s aktivnošću kreiranja ili odustati.  
Po završetku obrade, novi *Kontrolni plan* bit će prikazan.  

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).