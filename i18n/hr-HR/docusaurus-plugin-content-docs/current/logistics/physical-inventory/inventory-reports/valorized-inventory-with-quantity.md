---
title: Procjenjena vrijednost inventara
sidebar_position: 1
---

Ovaj obrazac omogućuje korisniku pregled izvještaja koji sadrži informacije o inventarizaciji. Sastoji se od gornjeg dijela s nizom filtara (skladište, uzrok, artikl/varijanta, vrsta artikla, porezna kategorija, kategorija proizvoda,...) koji omogućuju prikaz željenih podataka.

Osim toga, putem niza posvećenih okvira moguće je:

- grupirati podatke po artiklu ili skladištu;     
- sortirati ih po artiklu, karakteristici, opisu i kategoriji proizvoda;       
- imati pojedinosti o varijanti, lokaciji, narudžbi, lotu ili kupcu/dobavljaču;         
- prikazati artikle s pozitivnim, nultim ili negativnim stanjem.

Aktiviranjem okvira **S valorizacijom na**, u izvještaj o inventarizaciji bit će uključena i vrijednost pojedinog artikla na temelju sljedećih oznaka:

- **Prosječni trošak**: ako je aktivirano, artikli će biti valorizirani s prosječnom cijenom izračunatom na temelju pokreta skladišta (ako je zastava **šifarnik artikla** onemogućena);      
- **Posljednji trošak**: ako je aktivirano, artikli će biti valorizirani s posljednjom cijenom izračunatom na temelju pokreta skladišta (ako je zastava **šifarnik artikla** onemogućena);      
- **FIFO godišnji rast**: ako je aktivirano, artikli će biti valorizirani prema FIFO logici s godišnjim koracima;          
- **LIFO godišnji rast**: ako je aktivirano, artikli će biti valorizirani prema LIFO logici s godišnjim koracima;          
- **Područje upravljanja**: ako je aktivirano, artikli će biti valorizirani na temelju upravljačkog područja navedenog za to skladište u tablici [Skladišta](/docs/configurations/tables/logistics/warehouses/);            
- **Po trošku lota**: ako je aktivirano, artikli će biti valorizirani vrijednostima navedenim u anagrafskom šifarnik za lotove;        
- **Iz šifarnika artikla**: ako je aktivirano, uz zastave **Prosječni trošak** i **Posljednji trošak**, artikli će biti valorizirani po prosječnoj ili posljednjoj cijeni, ali na temelju odgovarajućih troškova unesenih u anagrafski zapis artikla;          
- **Arhiviranje inventara**: ako je aktivirano, podaci o obradi bit će spremljeni u [Arhiva skladišta](/docs/logistics/physical-inventory/warehouse-history);        
- **Iz omeđenja**: ako je aktivirano, artikli će biti valorizirani vrijednostima prisutnim u  [Arhiva skladišta](/docs/logistics/physical-inventory/warehouse-history) s datumom jednakim onome navedenom u polju **Datum troška povijesti**;        
- **Datum troška povijesti**: omogućuje se samo ako je zastava **Iz omeđenja** aktivirana, omogućujući unos datuma povijesne cijene koji će se koristiti za valorizaciju.  

Nakon unosa željenih parametara moguće je ispisati standardne ili prilagođene izvještaje (nakon prethodnog mapiranja u upravljanju ispisima). Ako se želi ispisati prilagođeni izvještaj, potrebno ga je odabrati iz tablice u parametrima ispisa.

Standardni izvještaji dostupni su kako slijedi:

- **FIFO ispis**: ovo je izvještaj s FIFO logikom za inventare (koristi se u kombinaciji s korištenjem zastave **FIFO godišnji rast**);              
- **Ispis inventara**: ovo je standardni izvještaj za inventarizaciju;       
- **Ispis LIFO**: ovo je izvještaj s LIFO logikom za inventar (koristi se u kombinaciji s korištenjem oznake **LIFO godišnji rast**).

Za sve što nije detaljno opisano u ovom dokumentu o općem funkcioniranju formi ispisa, možete se obratiti na link [Pregled i ispis](/docs/guide/operations-with-data/reports).