---
title: Filtriranje, razvrstavanje i druge operacije sa zapisima u mrežama  
sidebar_position: 4
---

### Filtriranje zapisa

Unutar mreža možete filtrirati i/ili razvrstati zapise (pogledajte primjer na slici ispod).   

Prvi redak mreže je filtar (ikona na zaglavlju retka ima sliku lijevka ![](/img/neutral/common/filter.png)): kada otvorite obrazac, dovoljno je izvršiti pretraživanje da biste vidjeli zapise prisutne u njemu i aktivirali unos (ako je predviđen) ili upravljanje mrežom. Znak za pretraživanje unutar cijelog polja je ‘%’, dok je znak za pojedinačne znakove ‘_’.   

Filtar u tekstualnim poljima nije ‘case sensitive’ (ne razlikuje velika/mala slova). Kada počnete filtrirati zapise preko zaglavlja stupaca, na dnu obrasca pojavit će se ploča koja prikazuje kako će se filtar primijeniti: na ekstremnom desnom dijelu ove sekcije pojavit će se gumb za zatvaranje/poništavanje filtra, kao i korisni gumb ![](/img/neutral/common/pencil.png) za uređivanje filtra, gdje možete dodati složenije filtre na vođeni način.  

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image03.png)

Na zaglavlju stupca također je aktivan gumb (druga ikona slična lijevku) koja prikazuje popis s različitim pojavama zapisa prisutnih u mreži, s mogućnošću označavanja svih ili samo praznih/nepraznih zapisa ili pojedinih zapisa.  

![](/img/it-it/guide/operations-with-data/filter-sort-and-other-operations-with-records-in-grids/image04.png)


### Razvrstavanje zapisa

Na mrežama, osim prvog retka filtra, moguće je razvrstati zapise (uzlazno ili silazno) po stupcu klikom na zaglavlje stupca. Ako želite razvrstati zapise i prema drugim stupcima, potrebno je držati pritisnut ‘Shift’ i kliknuti na njih mišem.  

Također, moguće je kopirati odabrane podatke u mreži: s CTRL+C kopirate vrijednosti, dok s CTRL+SHIFT+C kopirate i zaglavlja stupaca.

Na dnu obrasca prikazan je tekst koji označava odabrani zapis i ukupan broj prisutnih zapisa, s gumbima koji omogućuju prelazak s jednog zapisa na drugi, skakanje između stranica ili odlazak na početak ili kraj. Pomicanje po mreži prikazuje trenutni broj zapisa u odnosu na ukupan broj zapisa.  

Desnim klikom na zaglavlja mreže omogućene su sljedeće operacije:

**Sortiraj uzlazno**: postavlja rastužni redoslijed za polje  

**Silazno sortiranje**: postavlja silazni redoslijed za polje 

**Ukloni sortiranje**: uklanja redoslijed.

### Druge operacije

Desnim klikom na zaglavlja mreže omogućene su sljedeće operacije:  

**Grupiranje po ovoj koloni**: zapisi u mreži će biti grupirani prema ovom polju, a pritiskom na + grupe otvorit će se njezini detalji. Moguće je imati više grupa unutar drugih.  

**Odgrupiraj**: (prisutno ako je definirano grupiranje) poništava postavljeno grupiranje.  

**Prikaži ploču grupe**: prikazuje sekciju za upravljanje grupiranjem iznad mreže. 

**Sakrij grupnu ploču**: (ako je panel za grupiranje prisutan) sakriva sekciju za upravljanje grupiranjem. 

**Pokaži izbornik stupaca**: omogućuje dodavanje kolona predviđenih za mrežu, ali koje su bile skrivene.  

**Najbolje**: prilagođava veličinu odabrane kolone prema vrijednostima u polju.  

**Najbolje prilagođeno (svi stupci)**: prilagođava veličinu svih kolona prema vrijednostima u polju.  

**Uređivač Sažetka grupe**: (samo za grupirane podatke) otvara formu za postavljanje brojača pojava po grupi, postavljajući odgovarajuću oznaku i njezin format. (Ukupni zbrojevi ne upravljaju se ovom opcijom, već postavljanjem mreže na potpuno učitavanje, a zatim kroz panel sažetka zbrojeva, kako je objašnjeno niže.)   

**Uređivač filtera**: otvara panel za ručno pisanje filtera na mreži.  

**Prikaži ploču za pretraživanje**: otvara polje za pretraživanje pojava u mreži, filtrirajući zapise.  

**Fiksni stil**: omogućuje postavljanje kolone kao fiksne s lijeve ili desne strane u mreži, dok se ostale kolone pomiču horizontalno. Za postavljanje više fiksnih kolona, držite CTRL i zatim desnim klikom dodajte sljedeće kolone.  

**Ploča sažetka**: otvara panel sažetka mreže, gdje možete vidjeti ukupan broj redaka, na primjer.  

**Ploča ukupnog sažetka**: omogućuje prikaz panela za zbrajanje prikazanih polja. Ova opcija je dostupna samo ako je mreža postavljena da učitava sve podatke (detalji niže).  

**Redak filtera**: omogućuje/isključuje početni redak filtera.  

**Kraj grupe**: prikazuje završni dio za svaku grupu, gdje je moguće vidjeti ukupne vrijednosti kolona za tu grupu (za mreže s potpunim učitavanjem, kao što je objašnjeno niže).  

**Izvezi**: omogućuje izvoz mreže u raznim formatima (csv, html, immagine, mht, pdf, rtf, testo, xls, xlsx, xps).

**Pregled ispisa**: otvara pregled ispisa tablice mreže, odakle je moguće izvesti podatke, priložiti ih e-mailu, ispisati. Postavke su one zadane za pisač.  

**Ispis**: izravno izvršava ispis tablice mreže na zadanom pisaču.