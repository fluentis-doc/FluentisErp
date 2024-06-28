---
title: Cjenici 
sidebar_position: 6
---

U kartici pruža mogućnost povezivanja *Cjenika prodaje* koji se odnose na kontakt kako bi se omogućila valorizacija dokumenata.

**Pretraživanje cijene prema prioritetu**: ovaj flag omogućuje stupac prioriteta u grid artikala. U slučaju kupaca, s ovom opcijom moći će se povezati s kupcem više cjenika (općih i prilagođenih) c koji će se vrednovati kaskadno od prioriteta 1 do prioriteta br;

**Izračun cjenika za najbolju cijenu**: s ovom opcijom procjenjuju se svi primjenjivi cjenici za kupce kako bi se odabrao onaj koji jamči najbolju cijenu kupcu.

**Upravljanje cijenama prema preferiranom dobavljačevom cjeniku za određeni artikl**: ovim flagom, vidljivom samo u evidencijama klijenata, omogućuje se upravljanje cijenama prema preferiranom dobavljačevom cjeniku za odabrani artikl. 

**Upravljanje prodajnim cijenama prema dobavljačevom cjeniku**: ovim flagom, vidljivom samo u evidencijama dobavljača, omogućuje se upravljanje cijenama temeljem cjenika preferiranog dobavljača.

### Cjenici 
Grid pruža mogućnost dodavanja cjenika primjenjivih na klijenta/dobavljača prema prioritetima i datumima valjanosti. 

Za klijente je dostupan izbor općih cjenika, dok za dobavljače postoji samo popis prilagođenih dobavljačkih cjenika.

*Datum valjanosti* koristit će se za identifikaciju cjenika koji imaju početni datum valjanosti veći od ovoga: budući da može postojati više cjenika iste vrste s različitim datumima valjanosti, cijena artikla bit će određena najnovijim cjenikom (čak i bez postavljanja datuma završetka valjanosti samog cjenika). Dakle, svaki put kad se kreira novi ažurirani cjenik za tog klijenta, neće biti potrebno ići ga zamijeniti i u evidenciji, jer će se, zahvaljujući datumu valjanosti, automatski koristiti najnoviji.

*Napomena*: kako biste mogli povezati cjenik s klijentom, prvo morate stvoriti opći ili prilagođeni cjenik za klijenta pomoću postupka *Stvaranje cjenika*, a zatim, nakon što ga stvorite, ući u *Šifarnik kontakta > kartica Cjenici* i odabrati cjenik unutar grid *Cjenici*.

### Popusti na cjeniku

Za svaki klijentski/dobavljački cjenik moguće je na desnoj strani dodati dodatnu strukturu popusta, specifičnu za određeni subjekt. Na primjer, klijent1 može imati opći cjenik (koji već uključuje popust od 10% na određene artikle) uz dodatni popust od 2% za gotovinsko plaćanje (koji će se primijeniti dodatno, stoga će neki artikli imati 10%+2%, a drugi samo 2%) i klijent2 s općim cjenikom + 3% (koji će imati 10%+3% i 3%).

### Prodajni cjenik s automatskim ažuriranjem iz naruđbe

Povezano s dobavljačkim katalogom postoji mogućnost povezivanja popisa prodajnih kataloga koji se automatski ažuriraju kad god se dobavljački katalog promijeni, prema kriteriju povećanja (postotak) i zaokruživanja. 

*Posebni gumbi*:
> **Obriši kataloge**: za brisanje odabranih kataloga.   
> **Obriši rabate za cjenike**: za brisanje odabranih popusta za katalog. 

Za sve što nije pojedinačno navedeno u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sljedeću poveznicu [Zajedničke funkcije, gumbe i polja](/docs/guide/common).