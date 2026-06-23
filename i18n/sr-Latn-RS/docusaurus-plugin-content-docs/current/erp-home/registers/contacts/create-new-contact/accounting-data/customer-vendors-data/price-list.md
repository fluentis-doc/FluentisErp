---
title: Cenovnici
sidebar_position: 6
---

Ova kartica omogućava povezivanje *Prodajnih cenovnika* sa kontaktom kako bi se omogućila valorizacija dokumenata.

**Pretraga cene po prioritetu**: ova opcija omogućava kolonu prioriteta u tabeli artikala. Kod kupaca, aktiviranjem ove opcije moguće je povezati više cenovnika (opštih i prilagođenih) koji će se primenjivati kaskadno, od prioriteta 1 do prioriteta N;

**Obračun cenovnika po najboljoj ceni**: ovom opcijom procenjuju se svi primenljivi cenovnici za kupca kako bi se odabrao onaj koji kupcu obezbeđuje najpovoljniju cenu.

**Upravljanje cenama prema cenovniku preferiranog dobavljača za određeni artikl**: ovom opcijom, vidljivom samo u evidencijama kupaca, omogućava se upravljanje cenama prema cenovniku preferiranog dobavljača za izabrani artikl.

**Upravljanje prodajnim cenama prema cenovniku dobavljača**: ovom opcijom, vidljivom samo u evidencijama dobavljača, omogućava se upravljanje cenama na osnovu cenovnika preferiranog dobavljača.

### Cenovnici

Tabela omogućava dodavanje cenovnika koji se primenjuju na kupca/dobavljača prema prioritetima i datumima važenja.

Za kupce je dostupan izbor opštih cenovnika, dok je za dobavljače dostupan samo spisak prilagođenih dobavljačkih cenovnika.

*Datum važenja* koristi se za identifikaciju cenovnika koji imaju datum početka važenja veći od navedenog datuma: pošto može postojati više cenovnika iste vrste sa različitim datumima važenja, cena artikla određivaće se prema najnovijem cenovniku (čak i bez definisanog datuma isteka samog cenovnika). Na taj način, svaki put kada se kreira novi ažurirani cenovnik za tog kupca, neće biti potrebno menjati ga i u evidenciji, jer će se zahvaljujući datumu važenja automatski koristiti najnoviji.

*Napomena*: da biste povezali cenovnik sa kupcem, potrebno je najpre kreirati opšti ili prilagođeni cenovnik za kupca putem procedure *Kreiranje cenovnika*, a zatim ući u *Šifarnik kontakta > kartica Cenovnici* i odabrati cenovnik unutar grida *Cenovnici*.

### Rabati iz cenovnika

Za svaki cenovnik kupca/dobavljača moguće je sa desne strane dodati dodatnu strukturu rabata specifičnu za određeni subjekt.

Na primer, kupac1 može imati opšti cenovnik (koji već uključuje rabat od 10% za određene artikle) uz dodatni rabat od 2% za gotovinsko plaćanje (koji će se primenjivati dodatno, pa će neki artikli imati 10% + 2%, a drugi samo 2%), dok kupac2 može imati opšti cenovnik + 3% (što znači da će neki artikli imati 10% + 3%, a drugi samo 3%).

### Prodajni cenovnik sa automatskim ažuriranjem iz nabavke

Uz cenovnik dobavljača postoji mogućnost povezivanja liste prodajnih cenovnika koji se automatski ažuriraju prilikom promene cenovnika dobavljača, prema definisanim pravilima uvećanja (u procentima) i zaokruživanja.

*Posebna dugmad*:
> **Obriši cenovnike**: za brisanje izabranih cenovnika.   
> **Obriši rabate cenovnika**: za brisanje izabranih rabata za cenovnik.

Za sve što nije pojedinačno navedeno u ovom dokumentu o zajedničkom radu obrazaca, pogledajte sledeću poveznicu: [Zajedničke funkcije, dugmad i polja](/docs/guide/common).