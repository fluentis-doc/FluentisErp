---
title: Ispravak zelene zone  
sidebar_position: 8
---

Vrijednost zelene zone automatski izračunava postupak ažuriranja zona na temelju vrijednosti DDMRP parametara artikla.   

Putem ove tablice moguće je prisilno postaviti drugačiju vrijednost na određene datume.   

Planerski sustav uzima u obzir eventualne ispravke zona pri izračunu NFP-a, čak i ako postupak ažuriranja zona nije proveden. 

Tipično se može nametnuti drugačija vrijednost od one dobivene normalnim izračunom za ograničeno vremensko razdoblje, kako bi se promijenila veličina izdanih narudžbi.   
 
Ako se vrijednost zelene zone poveća, izdavat će se veće narudžbe i rjeđe će se naručivati; ako se smanji, događa se suprotno. 

Tipičan primjer odnosi se na proizvodne resurse s značajnim vremenima pripreme.   

Ako proizvodni ciklus artikla na skladištu uključuje obradu na resursu s nezanemarivim vremenom postavljanja i ako je taj resurs usko grlo, tj. resurs s radnim opterećenjem vrlo blizu njegovog proizvodnog kapaciteta, nastoji se smanjiti vrijeme neaktivnosti resursa zbog postavljanja povećanjem veličine proizvodnih serija. To se postiže određivanjem minimalne naručive količine u DDMRP parametrima artikla, što posljedično određuje i veličinu njegove zelene zone.   

Ako je ova potreba prisutna samo u određenom vremenskom razdoblju, umjesto postavljanja minimalne naručive količine, unosi se iznimka za zelenu zonu za to razdoblje.   

Ovo se, primjerice, događa kod proizvoda s izraženom sezonalnošću, gdje se u razdoblju prije vrhunca sezonske potražnje stvara odgovarajuća zaliha privremenim povećanjem zelene zone, čime se povećava produktivnost zasićenog resursa. Nakon toga, kada je resurs manje opterećen i više nije zasićen, odnosno kada postoji višak proizvodnog kapaciteta, provodi se češća proizvodnja manjih narudžbi, dajući prednost fleksibilnosti proizvodnog sustava.   

Dulja ukupna vremena postavljanja u tom razdoblju nisu problem jer resurs nije u potpunosti opterećen, pa postoji raspoloživo neiskorišteno vrijeme resursa. 
