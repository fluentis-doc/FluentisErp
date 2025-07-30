---
title: Pretraživanje mjernih instrumenata
sidebar_position: 1
---

Filter se nalazi na putanji **Kvaliteta > Kalibracija uređaja > Mjerni instrumenti**.   

Filter podataka omogućuje unos novih *mjernih instrumenata* ili pretraživanje već postojećih kako bi ih se prikazalo, izmijenilo ili izbrisalo.   

### ![](/img/neutral/common/search.png) Pretraživanje mjernih instrumenata

Obrazac se sastoji od područja za filtriranje i područja rezultata. Nakon što se postave svi željeni filtri, dovoljno je pritisnuti na tipku **Traži** kako bi se prikazali rezultati unutar prikaza rezultata.  

### ![](/img/neutral/common/new.png) Unos mjernih instrumenata

Za unos novih *mjernih instrumenata* potrebno je pritisnuti tipku **Novo**.   

### ![](/img/neutral/common/edit.png) Izmjena ili ![](/img/neutral/common/view.png) Pregled mjernih instrumenata

Za otvaranje upravljanja prikazom rezultata potrebno je dvaput kliknuti na željeni redak ili, odabirom jednog ili više redaka, pritisnuti tipke **Izmijeni** ili **Prikaži**.   

*Specifične tipke*: 

### Planiranje novih kalibracija

Tipka je omogućеna samo ako se iz prikaza rezultata odabere samo jedan *mjerni instrument* i taj *instrument* mora biti:    
> *Aktivan*;   
> *Podložan kalibraciji*;   
> Podložan periodičnoj i vremenski definiranoj kalibraciji (expander *Svojstva kalibracije* s *razdobljem kalibracije* različitim od *nule* i *jedinicom mjere* tipa *Dan* ili *Mjesec*).   

Kako bi se mogle planirati nove *kalibracije instrumenta* iz *mjernog instrumenta*, potrebno je kliknuti na *instrument* u pregledu za koji se želi planirati kalibracija i pritisnuti tipku **Planiranje novih kalibracija**. Može se planirati samo jedan *mjerni instrument* odjednom.    
Bit će prikazan zahtjev za:   
> **Planiranje do**: to je datum završetka razdoblja planiranja (obavezni podatak), predlaže se godina planiranja počevši od današnjeg datuma.   

Zatim treba pritisnuti tipku **OK** ili **Cancel** ako seeželi nastaviti ili odustati od planiranja.   

*Metoda korištena za planiranje*:   
Kao prvi korak, uklanjaju se sve prethodno planirane, a još neizvršene *kalibracije* za *instrument*.  
Zatim, počevši od datuma posljednje *kalibracije*, kreira se onoliko *kalibracija* koliko ih je moguće kreirati u zadanom vremenskom intervalu počevši od današnjeg datuma, frekvencijom definiranom *razdobljem kalibracije*. Ako predloženi datum pada na neradni dan naveden u *Kalendaru tvornice* predloženi datum će biti pomaknut na prvi sljedeći radni dan.   
Ako za instrument nikada nije bila planirana ili izvršena *kalibracija* ili ako posljednji datum *kalibracije* pada prije *razdoblja Kalibracije* koje se računa unatrag od današnjeg datuma, prva *kalibracija* će biti predložena za današnji datum, a sve ostale će biti planirane nakon toga.

### Nova kalibracija

Tipka je omogućena samo ako se iz pregleda rezultata odabere jedan *mjerni instrument* i *instrument* mora biti *aktivan*. 
Za kreiranje nove *kalibracije instrumenta* iz *mjernog instrumenta* potrebno je kliknuti u pregledu na *mjerni instrument* iz kojeg se želi kreirati kalibracija i pritisnuti tipka **Nova kalibracija**. *Kalibracija instrumenta* može se kreirati samo iz jednog *mjernog instrumenta* odjednom.   
Nakon završetka obrade, *nova planirana kalibracija* instrumenta bit će prikazana.    


Za sve što nije detaljno opisano u ovom dokumentu o zajedničkom funkcioniranju obrazaca, pogledajte sljedeći link [Funkcionalnosti, gumbi i zajednička polja](/docs/guide/common).