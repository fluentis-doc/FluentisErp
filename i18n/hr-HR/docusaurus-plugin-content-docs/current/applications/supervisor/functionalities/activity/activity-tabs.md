---
title: Kartice aktivnosti 
#hide_title: true
sidebar_label: Kartice aktivnosti 
sidebar_position: 1
---

:::info BILJEŠKA 
Nakon što se otvori obrazac s detaljima aktivnosti, u gornjem dijelu nalaze se neki standardni parametri kao što su *Šifra*, *Naziv*, *Opis*, *Datum izrade*, *Datum zadnje izmjene*, *Grupa* i *Vrsta aktivnosti*. Na ove posljednje dvije morate obratiti veliku pozornost, jer one određuju kako će aktivnost biti sastavljena. 
:::

### Povezani parametri 

Sve vrste Aktivnosti imaju Povezive Parametre (kako ulazne tako i izlazne); ti parametri, za razliku od globalnih, imaju lokalnu vidljivost unutar same aktivnosti, zadatka ili događaja. Oni omogućuju definiranje svih parametara koji će biti povezani s aktivnošću kao ulaz ili izlaz.
Ova konfiguracija zatim će biti pridružena bloku dostupnom putem Zadatka, omogućujući upravljanje parametrima.

Za izradu parametra trebate navesti zadanu vrijednost (kao što je *Naziv*, *Opis*) i neke specifičnije vrijednosti *Ulaznog parametra*, *Obaveznog*, *Tipa* i *Globalnog parametra*. 

### Zapisi mapiranja  

Za vrstu *Aktivnosti* **Predloška pošte** postoji mogućnost mapiranja zapisa (imena stupaca) u zaglavlje; rezultat mapiranja bit će prikazan nakon što se skup zapisa koristi unutar dokumenta (s kartice *Predložak dokumenta*). 

### Konfiguracija aktivnosti 

Ako se umjesto toga pomaknemo na karticu *Konfiguracija aktivnosti*,  temeljna stvar koju treba imati na umu je da se mijenja ovisno o **vrsti aktivnosti** a jedina vrijednost zajednička svim *vrstama aktivnosti* je **Povratni parametar**.

Ostale vrste su: 

> *Vrsta zadatka* **Generičke skripte** ima dvije kartice,*Parametri* i *Skripta*. Ulazne i izlazne vrijednosti koje su korištene u kartici *Skripta*, moraju se deklarirati u kartici *Parametri*.

> *Vrsta aktivnosti* **Izvori podataka** nema kartice, ima samo konfiguraciju parametara  *izvora podataka* i odabir *izvora podataka*.

> *Vrsta aktivnosti* **Izvedi izvješće**  nema kartice, ima samo odabir **Business Object** **vrstu izvješća** koja se odnosi na *Business Object* i na **format izvoza**.

> Tip **Sql Query** *Activity*  dijeli isti raspored kartice kao tip  *eneric Script* Activity, s iznimkom kartice *Script* oja više neće sadržavati skriptu u C# nego u SQL-u. Za mapiranje parametara aktivnosti unutar upita morate ih uključiti u uglate zagrade, kao što možete vidjeti na slici ispod.

> *Vrsta aktivnosti* **Pohranjeni postupak** nema kartice, već samo konfiguraciju ulaznih parametara za pohranjene procedure.

> *Vrsta zadatka* **predloška pošte** ima dvije kartice, *ostavljanje generiranja dokumenta* i *Predložak dokumenta*. U prvoj kartici, u gornjem dijelu sučelja, moguće je postaviti *Glavni zapis* (tj. skup zapisa koji će popuniti predložak dokumenta), *Generirani dokument*  (varijabla koja sadrži dokument, a koja se mora mapirati iz povezanih paramaterijala karticu kao izlazni parametar kako bi se dobio rezultat kada se koristi unutar *zadatka*), *Format dokumenta* (tj .pdf, .html, .docx, .doc), *Opis* i *Pošalji kao HTML tijelo* (potonje je oznaka).
U donjem dijelu kartice nalaze se varijable dokumenta (varijable će se pojaviti u drugoj kartici, pod stavkom "varijable dokumenta" u panelu na desnoj strani sučelja). U drugoj kartici nalazi se Widget (s prikazom sličnim dokumentu u *Microsoft Wordu*) za pregled/uređivanje predloška dokumenta, korištenjem integriranih alata i varijabli dokumenta koji se mogu pronaći na ploči s desne strane sučelja.
