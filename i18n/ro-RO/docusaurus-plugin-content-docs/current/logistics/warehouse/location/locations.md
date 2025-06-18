---
title: Locatii  
sidebar_position: 1
---


:::important Utilizare
Gestionarea locațiilor în Fluentis reprezintă un element esențial pentru optimizarea operațiunilor de gestiune a stocurilor. Acest modul le oferă utilizatorilor posibilitatea de a structura spațiile de stocare din cadrul depozitelor conform unei scheme ierarhice flexibile și ușor de adaptat. Fiecare locație poate fi definită în funcție de diferiți parametri, precum tipul locației (ex: zonă, raft, poliță, secțiune) și caracteristicile sale fizice, cum ar fi lățimea, înălțimea sau capacitatea de încărcare.

Prin utilizarea unui arbore de locații, operatorii pot adăuga noi nivele de organizare și pot vizualiza conținutul fiecărei locații, cu detalii privind articolele și cantitățile disponibile în stoc. Secțiunea dedicată atributelor locațiilor permite personalizarea acestora, oferind posibilitatea de a defini cerințe specifice pentru fiecare locație în parte.

Această abordare eficientă a gestionării locațiilor contribuie nu doar la un control mai bun al stocurilor, ci și la susținerea logisticii operaționale, asigurând o administrare mai agilă și performantă a fluxurilor interne din companie.
:::


Prin intermediul filtrelor disponibile, utilizatorii pot efectua căutări pe baza unor parametri specifici, iar rezultatele interogării sunt afișate în tabele dedicate. Acestea permit gruparea datelor pe diferiți parametri, facilitând astfel analiza și interpretarea informațiilor.

Rezultatele cautarii sunt impartite in doua sectiuni: o prima sectiune in care sunt inserate informatiile referitoare la locatiile depozitului, iar in a doua este prezentat detaliul articolelor si atributelor legate de locatia selectata.

### Informații generale locație

- **Locație**: Reprezintă locația fizică din cadrul depozitului.  
- **Cod**: Codul unic atribuit locației.  
- **Descriere**: Descrierea locației pentru o identificare mai facilă.  
- **Tip locație**: Tipul locației, cum ar fi zonă, raft sau secțiune.  
- **Descriere tip locație**: Informații suplimentare despre tipul locației.  
- **Stare locație**: Codul care indică starea actuală a locației. 
- **Descriere stare locație**: Detalii privind starea locației.  
- **Locație de grup**: Specifică dacă locația face parte dintr-un grup de locații.

### Atribute locație 

În această secțiune se pot introduce detalii tehnice și caracteristici ale fiecărei locații:

- **Lățime**: Lățimea disponibilă a locației.  
- **Înălțime**: Înălțimea maximă utilizabilă a locației.  
- **Adâncime**: Adâncimea locației.  
- **Capacitate**: Capacitatea maximă de încărcare a locației.  
- **Prioritate**: Nivelul de prioritate atribuit locației în procesul de alocare.  
- **Număr straturi**: Numărul maxim de straturi de marfă care pot fi depozitate.  
- **Tip unitate de încărcare**: Tipul unității de încărcare acceptate (ex: palet, container).  
- **Număr unități de încărcare**: Numărul maxim de unități de încărcare admise.  
- **Stoc minim**: Nivelul minim de stoc recomandat pentru această locație.  
- **Stoc maxim**: Nivelul maxim de stoc admis în locație.

### Parametri locație

- **Mono articol**: dacă este activ, înseamnă că locația este mono articol, adică nu va fi posibilă mișcarea unui articol diferit față de cel deja existent în acea locație.

- **Mono lot**: dacă este activ, înseamnă că locația este mono lot, adică nu va fi posibilă mișcarea aceluiași articol cu un lot diferit față de cel deja prezent în locație.

**Activă**: daca este activ, înseamnă ca locatia este activă;  

**Blocată**: daca este activ, înseamnă ca locatia este blocată (deci este o stocare ne-disponibila);  

**Rezervată**: daca este activ, înseamnă ca locatia este rezervata;  

**De stoc**: daca este activ, înseamnă ca locatia este de tip stoc (folosit in personalizari);  

**De dispoziție livrare**: daca este activ, înseamnă ca locatia este de tip picking (folosit in personalizari);  

**Obsoletă**: daca este activ, înseamnă ca locatia este obsoletă.

### Articole

În acest tab pot fi afișate articolele încărcate în acea locație.

### Butoane specifice

> **Caută**: permite căutarea datelor.  
> **Șterge locație**: permite ștergerea unei locații.  
> **Adaugă locație fiu**: buton disponibil în Ribbon bar după efectuarea căutării; permite introducerea unei noi locații fiu față de linia selectată.  
> **Adaugă locație părinte**: buton disponibil în Ribbon bar după efectuarea căutării; permite introducerea unei noi locații părinte față de linia selectată.  
> **Replica atribute**: buton disponibil în Ribbon bar după efectuarea căutării; permite replicarea atributelor.
