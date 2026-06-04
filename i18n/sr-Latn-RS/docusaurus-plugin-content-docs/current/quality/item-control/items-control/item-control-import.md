---
title: Uvoz artikala za provjeru
sidebar_position: 2
---

Procedura uvoza nalazi se na putanji **Kvaliteta > Kontrola artikla > Kontrola artikla > Uvoz artikala za provjeru**.      


:::important Čemu služi
Ovo upravljanje omogućuje stvaranje novih *Kontrola artikla* uvozom *Artikala* za kontrolu iz predviđenih *Vrsta dokumenata*:   
> ***Prijem robe***   
> ***Primke***   
> ***Ulazni račun***   
> ***Izjave o proizvodnji***   
> ***Faze izrada nadrudžbe***   
> ***Povrat od podizvođača***   
> ***Rukovanje teretom***   

te ih povezati s predviđenim *Kontrolnim planom* kako bi se zatim, putem vizualnih pregleda ili uz pomoć *Mjernih instrumenata*, provjerila njihova sukladnost.   
:::


Obrazac je podijeljen na:   
- područje filtra, *Vrsta dokumenta* iz koje se žele uvesti *Artikli* za kontrolu;   
- područje koje se sastoji od različitih kartica, po jedna za *Vrstu dokumenta*, od kojih svaka sadrži tablice posvećene rezultatu filtra.      

## Specifične tipke

### ![](/img/neutral/common/search.png) Pretraživanje redaka dokumenta za uvoz

Područje filtra i kartica koja sadrži tablicu rezultata mijenjaju se nakon što se odredi *Vrsta dokumenta*.   
Nakon što se postave željeni filtri, dovoljno je kliknuti na tipku **Traži** kako bi se prikazali rezultati unutar tablice rezultata.   
Od odabrane *Vrste dokumenta* prikazat će se samo retci dokumenata artikala:   
- kodirani za *Prijem robe*, *Primke*, *Ulazne račune* i *Povrate od podizvođača*;   
- s proizvedenim i/ili odbačenim količinama za *Izjave o proizvodnji*;      

za preostale *vrste dokumenata* *Faza proizvodnog naloga* i *Rukovanje teretom* prikazat će se svi retci dokumenata.   

### Potvrda redaka dokumenta za uvoz

Omogućeno je ako se odabere barem jedan redak iz tablice rezultata i *Vrsta kontrole* koju treba stvoriti.   
Nakon što se odaberu željeni reci, potrebno je kliknuti na tipku **Potvrda** kako bi se povezali *Kontrolni planovi* i stvorile *Kontrole artikla*.   
Po završetku operacije postavlja se pitanje želite li nastaviti s aktivnostima uvoza ili otvoriti upravo stvorene *Kontrole artikla*.   

import ControlPlanSearchMethod from './../../../import/procedure/control-plan-search-method.md'

<ControlPlanSearchMethod />

## Upravljanje uvozom artikla za provjeru   

### Područje filtra

Područje se sastoji od fiksnog dijela gdje se prikazuju filtri za pretraživanje vezani uz opće informacije i dijela koji za odabranu *Vrstu dokumenta*; taj dio prikazuje se ispod proširenja *Artikl*.      
Filtri za pretraživanje vezani uz opće informacije su:   
> **Vrsta dokumenta**: to je *Vrsta dokumenta* u kojoj se pretražuju informacije.   
> Pri izvršavanju upravljanja predlaže se *Vrsta dokumenta* označena kao *Zadana* na popisu *Vrsta dokumenata za uvoz* koji se nalazi na kartici *Kontrole artikla* unutar *Parametara kontrole artikla*; ako nije navedena, predlaže se *Primka*.   
> Automatski prijedlog, ili naknadna promjena od strane operatera, uzrokovat će promjenu varijabilnog dijela filtra podataka i prikazane kartice.   
>   
> **Detalj artikla**: vrsta detalja za kontrolu *Artikla* za specifičnu vrstu dokumenta.   
> To je popis unaprijed definiranih vrijednosti sustava:   
> - *Nijedan* - razmatrani redak *Artikla* neće uzeti nikakve detaljne podatke;   
> - *Lot* - razmatrani redak *Artikla* uzet će kao detalj *Lot*;   
> - *S.N.* - razmatrani redak *Artikla* uzet će kao detalj *Serijski broj*;   
> - *UDC* - razmatrani redak *Artikla* uzet će kao detalj *Jedinicu utovara*.   
>   
> Prilikom izvršavanja upravljanja predlaže se *Detalj artikla* naveden u *Detaljima artikla* na popisu *Vrste dokumenata za uvoz* koji se nalazi na kartici *Kontrole artikla* u *Parametrima kontrole artikla*.      
>
> **Tip kontrole**: šifra *Vrste kontrole* koju treba povezati s *Kontrolama artikala* koje se stvaraju.   
> Pri izvršavanju upravljanja predlaže se *Vrsta kontrole* navedena u *Vrsti kontrole* na popisu *Vrsta dokumenata za uvoz* koji se nalazi na kartici *Kontrole artikla* unutar *Parametara kontrole artikla*.   
>   
> proširenje **Detalj**   
>> **Još nije razmatrano**: označava treba li pretraživati samo retke dokumenta koji još nisu razmotreni u prethodnim uvozima.   
>> **Već razmatrano**: označava treba li pretraživati, osim onih koje još nisu razmotrene, i retke koji su već razmotreni u prethodnim uvozima (obično se koristi u slučaju da se žele provesti dodatne kontrole).    
>   
> **Barkod**: to je kod koji je omogućen za prepoznavanje: *Artikla*, *Jedinice tereta*, *Lota* i *Serijskog broja*.   
>   
> proširenje **Artikl**
>> **Učitavanje jedinice**: formatirani je kod *Jedinice tereta*.   
>> **Lot**: šifra *Lota*.   
>> **Serijski broj**: je kod *Serijskog broja*.   

### Područje rezultata   

Sadržano je u svakoj kartici, to je tablica koja sadrži rezultat *Pretraživanja* primijenjenog na području filtra.   
Informacije sadržane u popisu povezane su s odabranom *Vrstom dokumenta*.   

Za sve što nije detaljno opisano u ovom dokumentu o uobičajenom funkcioniranju obrazaca, pogledati sljedeću poveznicu [Funkcionalnosti, gumbi i polja](/docs/guide/common).