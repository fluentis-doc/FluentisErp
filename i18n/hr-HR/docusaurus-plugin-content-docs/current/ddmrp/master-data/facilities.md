---
title: Logistička struktura 
sidebar_position: 1
---

Fluentis DDMRP može upravljati ne samo jednom tvornicom, već i cijelim opskrbnim lancem koji se sastoji od tvornice, različitih hubova i distribucijskih centara.   

Ova tablica prikazuje logističku strukturu, odnosno opskrbni lanac, na kojem Fluentis DDMRP djeluje.    

U sustavu Fluentis svaki čvor opskrbnog lanca nazivamo "Facility", a ova tablica sadrži popis svih "Facilities".   

Razmatra se hijerarhijska struktura kako je opisano u nastavku.   

**Distribucijski centri**

To su logističke jedinice koje opskrbljuju krajnje kupce izravno iz vlastitih zaliha.   

Geografski su smješteni na strateškim lokacijama kako bi se smanjilo vrijeme transporta do krajnjih kupaca.  

Svaki distribucijski centar opskrbljuje se iz međuprostornog huba ili izravno iz tvornice.   

**Hubovi**

To su logističke jedinice koje opskrbljuju distribucijske centre.   

Geografski su smješteni na strateškim lokacijama kako bi se smanjilo vrijeme transporta do distribucijskih centara.   

Hubovi omogućuju održavanje visoke razine usluge za krajnje kupce, istovremeno smanjujući ukupnu razinu zaliha u distribucijskoj mreži. 

Hubovi se opskrbljuju iz tvornice ili, u vrlo velikim mrežama, iz drugih hubova. 

**Tvornica**

U logističkoj strukturi razmatra se samo jedna tvornica.   

Ona opskrbljuje hubove i/ili distribucijske centre.   

Između jedinica logističke strukture postoji odnos kupac-dobavljač (svaka logistička jedinica mora biti kodificirana i kao kupac i kao dobavljač).   

Distribucijski centri su kupci i nisu dobavljači unutar logističke strukture, hubovi su istovremeno kupci (tvornice ili drugih hubova) i dobavljači (distribucijskih centara ili drugih hubova), dok tvornica ima distribucijske centre ili hubove kao kupce, ali nema nijednu logističku jedinicu kao dobavljača.   

Polja koja definiraju logističku jedinicu su sljedeća:   

**Skladište**

To je kod skladišta povezan s logističkom jedinicom.   

Osim tvornice, svaka logistička jedinica jednoznačno je identificirana skladištem koje joj je dodijeljeno (ovaj odabir je napravljen kako bi se povećala kompatibilnost s vanjskim aplikacijama).   

Tvornici se, međutim, može dodijeliti više skladišta, a sustav DDMRP će uzeti u obzir samo ona skladišta koja su navedena u ovoj tablici i koja sadrže buffer artikle tvornice. Skladišta unutar tvornice koja nisu navedena u ovoj tablici ne smiju sadržavati DDMRP buffere jer bi ih sustav zanemario pri izračunu NFP-a.   

Skladišta navedena u ovoj tablici koja nisu označena kao tvornica bit će ignorirana od strane MRP postupka, budući da su to skladišta za distribuciju robe, a ne za proizvodnju. Planirat će se pojedinačno putem izračuna neto pozicije toka (NFP) iz MRP izbornika.   
 
U sustavu Fluentis DDMRP, logistička jedinica "Tvornica" bit će identificirana praznim kodom skladišta, upravo zato što je to jedina logistička jedinica kojoj se može pridružiti više skladišta, čime se gubi jednoznačna veza između skladišta i logističke jedinice.   

**Kupac**

Njegova vrijednost identificira logističku jedinicu koja će opskrbiti robu onu koja je identificirana kodom skladišta i/ili kupčevim kodom u zapisu.    

Ako je ta jedinica dobavljač druge logističke jedinice, tada mora imati i povezani dobavljačev račun.   

Isti kupčev kod stoga ne može biti povezan s više skladišta (osim tvornice), kao što isti kod skladišta ne može biti povezan s više kupčevih kodova.  

**Dobavljač**

Njegova vrijednost identificira logističku jedinicu koja će opskrbiti robu onu koja je identificirana kodom skladišta i/ili kupčevim kodom u zapisu.    

Samo za zapise povezane s tvornicom (kada je odabran flag Tvornica), ovo polje nije moguće uređivati i ostaje prazno jer tvornica ne može biti opskrbljena od strane druge logističke jedinice.   

Kao dobavljač može se odabrati samo logistička jedinica koja je već unesena u ovu tablicu (nije moguće odabrati dobavljača iz općeg popisa dobavljača).

Sustav provjerava kupčev kod povezan s dobavljačevim kodom, a zatim traži taj kupčev kod u polju kupca različitih zapisa u tablici Facilities, pa logistička jedinica dobavljač mora imati povezane i kupčev i dobavljačev kod.   

To znači da unos u ovu tablicu mora početi od najnižeg sloja, tj. od tvornice, a zatim se penjati prema eventualnim hubovima i na kraju distribucijskim centrima. Dakle, unos se vrši prema padajućem redoslijedu prioriteta.   

Nije obavezno da svi artikli prisutni u logističkoj jedinici budu opskrbljeni od strane jedinice označene kao dobavljač.   

Ta jedinica ostaje zadani dobavljač koji će se koristiti pri kreiranju **planiranih unutarnjih narudžbi** koje generira sustav planiranja i za izračun odvojenog vremena isporuke (DLT).    

U tablici DDMRP parametara za artikle mogu se definirati iznimke, odabirom druge logističke jedinice ili općeg vanjskog dobavljača izvan logističke strukture, zajedno s pripadajućim vremenom transporta. 

**Skladište dobavljača**

To je kod skladišta povezan s logističkom jedinicom dobavljača odabranog zapisa; ova vrijednost omogućuje brzo pretraživanje u ovoj tablici putem polja Skladište.    

Ako je dobavljač tvornica, ovo polje bit će prazno jer je tvornica jedina logistička jedinica kojoj se može povezati više skladišta.   

**Tvornica**

To je flag koji označava da se skladište u zapisu odnosi na tvornicu (u tom slučaju polje dobavljač ostaje prazno).   

Za tvornicu je moguće imati više zapisa, po jedan za svako skladište koje sustav planiranja mora uzeti u obzir.   

Nakon unosa prvog skladišta s aktivnom oznakom Tvornica, za sljedeća skladišta bit će provjereno je li kupčev kod isti kao u zapisima s aktivnom oznakom tvornica, jer će tvornici uvijek biti pridružen samo jedan kupčev kod (i jedan dobavljačev kod).   

**Prioritet planiranja**

To je vrijednost veća ili jednaka 0, a manja ili jednaka 100.    

Zapisi povezani s tvornicom imaju vrijednost 100 prema Fluentis konvenciji, dok ostale logističke jedinice imaju niže vrijednosti.   

Ovaj element služi za upućivanje sustava planiranja koji redoslijed slijediti u procesu izračuna; naime, prvo će biti planirane logističke jedinice s nižim vrijednostima, a zatim će se planirati one s višim vrijednostima, dok će tvornica biti planirana posljednja, poštujući lanac odnosa kupac-dobavljač između logističkih jedinica, baš kao što je slučaj s proizvodnim računima, počinjući od najviših razina i postupno prelazeći na niže razine.   

Ovaj redoslijed je nužan jer da bi se utvrdili potrebni materijali za logističku jedinicu, prvo je potrebno planirati potrebe njenih jedinica kupaca.  

Svaki zapis kupca mora imati niži prioritet od njegove dobavljačke jedinice.   

**Vrijeme isporuke (Lead time)**

To je vrijeme potrebno za transport robe od logističke jedinice dobavljača, izraženo u danima.   

**Razlog povlačenja iz dobavljačkog skladišta** 

To je razlog u skladištu koji će se koristiti za izvršenje unutarnje narudžbe, tj. za povlačenje robe iz ove logističke jedinice i slanje je u logističku jedinicu koja je zatražila robu. Razlog mora biti povezan sa skladištem kako bi mogao biti odabran u fazi unosa zapisa.   

**Razlog slaganja u skladište kupca**

To je razlog u skladištu koji će se koristiti za prihvat robe nakon unutarnje narudžbe, tj. za slaganje robe u ovoj logističkoj jedinici koja dolazi iz logističke jedinice koja je isporučila robu. Razlog mora biti povezan sa skladištem kako bi mogao biti odabran u fazi unosa zapisa. 


