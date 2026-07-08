---
title: Procijenjena vrijednost inventara
sidebar_position: 1
---

:::important Čemu služi
Izvještaj **Procijenjena vrijednost inventara** u sustavu Fluentis predstavlja ključan alat za upravljanje i praćenje skladišnih zaliha te poduzećima omogućuje jasan i detaljan pregled vlastitih zaliha. Putem ovog izvještaja korisnici mogu pristupiti potpunim informacijama ne samo o fizičkim količinama artikala na skladištu nego i o njihovoj vrijednosti, izračunatoj primjenom različitih metoda vrednovanja, kao što su prosječni trošak, posljednji trošak, FIFO i LIFO.

Izvještaj se generira pomoću prilagodljivih filtara koji omogućuju prikaz određenih podataka prema skladištu, artiklu, robnoj kategoriji i drugim kriterijima, čime se olakšavaju analiza i upravljanje zalihama. Korisnici također mogu grupirati i sortirati podatke prema relevantnim parametrima, čime cjelokupni postupak kontrole inventara postaje učinkovitiji i informativniji.

Ovaj izvještaj ne služi samo kao podrška pri svakodnevnom donošenju operativnih odluka nego je važan i za osiguravanje usklađenosti s propisima te provođenje financijskih analiza i analiza uspješnosti unutar organizacije.
:::

Ispis omogućuje korisniku prikaz izvještaja koji sadrži informacije o inventaru.  
Forma se sastoji od gornjeg dijela koji sadrži niz filtara (skladište, predložak, artikl / varijanta, vrsta artikla, porezna kategorija, robna kategorija...) pomoću kojih je moguće prikazati željene podatke.

Osim toga, putem niza posebnih opcija moguće je:

- grupirati podatke prema artiklu ili skladištu;      
- sortirati ih prema artiklu, karakteristici, opisu i robnoj kategoriji;     
- prikazati detalje prema varijanti, lokaciji, projektu, lotu ili klijentu / dobavljaču;       
- prikazati artikle s pozitivnom, nultom ili negativnom zalihom.

Aktiviranjem opcije **S valorizacijom na** u izvještaju o inventaru prikazat će se i vrijednost pojedinačnog artikla na temelju sljedećih oznaka:

- **Prosječni trošak**: ako je aktivna, artikli se vrednuju prema prosječnom trošku izračunatom na temelju skladišnih knjiženja (ako je oznaka **Iz šifarnika artikala** deaktivirana);    
- **Posljednji trošak**: ako je aktivna, artikli se vrednuju prema posljednjem trošku izračunatom na temelju skladišnih knjiženja (ako je oznaka **Iz šifarnika artikala** deaktivirana);    
- **Godišnji FIFO**: ako je aktivna, artikli se vrednuju prema metodi godišnjeg FIFO-a;        
- **Godišnji LIFO**: ako je aktivna, artikli se vrednuju prema metodi godišnjeg LIFO-a;        
- **Upravljačko područje**: ako je aktivna, artikli se vrednuju na temelju upravljačkog područja definiranog za to skladište u tablici [Skladišta](/docs/configurations/tables/logistics/warehouses/);          
- **Iz stvarnog troška lotova**: ako je aktivna, artikli se vrednuju prema vrijednosti navedenoj u šifarniku lotova;      
- **Iz šifarnika artikala**: ako je aktivna zajedno s oznakom **Prosječni trošak** ili **Posljednji trošak**, artikli se vrednuju prema prosječnom odnosno posljednjem trošku, ali na temelju odgovarajućih troškova unesenih u šifarniku artikala;         
- **Pohrana stanja inventara**: ako je aktivna, podaci obrade bit će spremljeni u [Povijest skladišta](/docs/logistics/physical-inventory/warehouse-history);      
- **Iz pohranjenog stanja**: ako je aktivna, artikli se vrednuju prema vrijednostima iz [Povijesti skladišta](/docs/logistics/physical-inventory/warehouse-history) s datumom koji odgovara datumu navedenom u polju **Datum povijesnog troška**;      
- **Datum povijesnog troška**: aktivira se samo ako je aktivna oznaka **Iz pohranjenog stanja** i omogućuje unos datuma povijesnog troška koji će se koristiti za vrednovanje.

Nakon unosa željenih parametara moguće je ispisati standardne ili prilagođene izvještaje (nakon prethodnog mapiranja u upravljanju ispisima). Ako se želi ispisati prilagođeni izvještaj, potrebno ga je odabrati na kartici u **Parametrima ispisa**.

Standardno su dostupni sljedeći izvještaji:

- **FIFO ispis**: izvještaj koji primjenjuje FIFO logiku za inventare (koristi se zajedno s aktiviranom oznakom **Godišnji FIFO**);              
- **Ispis inventara**: standardni izvještaj za inventare;       
- **LIFO ispis**: izvještaj koji primjenjuje LIFO logiku za inventare (koristi se zajedno s aktiviranom oznakom **Godišnji LIFO**).


**Godišnji LIFO**

Godišnji LIFO, kada se izračunava bez uzimanja u obzir oznaka *Iz šifarnika artikala* ili *Upravljačko područje*, funkcionira na sljedeći način:

Za tekuću godinu, odnosno za razdoblje od datuma posljednjeg zatvaranja do datuma *Inventar do*, izračunavaju se zaliha i prosječni trošak.

Za izračun ponderiranog prosječnog troška uzimaju se u obzir sva kretanja artikala s aktivnom oznakom fiskalne relevantnosti iz skladišnih knjiženja s predloškom koji ažurira prosječni trošak i koji je fiskalno relevantan.

Za izračun zalihe uzimaju se u obzir sva kretanja artikala s aktivnom oznakom fiskalne relevantnosti iz skladišnih knjiženja s fiskalno relevantnim predloškom.

Nakon utvrđivanja zalihe na kraju razdoblja provjeravaju se LIFO slojevi u *Povijesti skladišta*, pri čemu se unatrag izračunavaju zalihe za svaku godinu. Zatim se za svaku godinu zaliha te godine množi s prosječnim troškom te godine, a zbrajanjem vrijednosti svih godina u slojevima dobiva se FIFO trošak svakog artikla.

Ako u *Povijesti skladišta* postoje godine sa zalihom 0, pretraživanje LIFO slojeva zaustavlja se te se vrednovanje nastavlja od sljedeće godine za koju postoji sloj.

:::note Napomena
Za sve godine koje prethode posljednjem zatvaranju skladišta uzima se u obzir zaliha na kraju godine, bez podjele prema skladištu.   
Slijedom toga, za LIFO i FIFO ispise filtar *grupiranja prema skladištu* moguće je primijeniti samo za tekuću godinu, odnosno za sva knjiženja provedena nakon datuma posljednjeg zatvaranja skladišta.
:::

Pogledajmo primjer:

zatvaranje skladišta provedeno je s datumom 31. 12. 2023.  
danas se izrađuje ispis vrijednosnog inventara za artikl A, koji na dan 23. 5. 2024. ima zalihu 170 i prosječni trošak od 3 eura.

U *Povijesti skladišta* za artikl A nalaze se sljedeći podaci:

| Godina | Preostala količina | Prosječni trošak |
| :-- | :-: | :-: |
| 2020. | 100 | 2 |
| 2021. | 0 | 0 |
| 2022. | 60 | 1,5 |
| 2023. | 100 | 2,5 |

Izračun se provodi na sljedeći način:

od današnjih 170 jedinica, 100 jedinica sigurno potječe iz 2023. godine. Od tih 100 jedinica iz 2023. godine, 60 jedinica sigurno potječe iz 2022. godine. Ne mogu potjecati iz 2021. godine jer je zaliha te godine iznosila 0.

Stoga LIFO trošak na dan 23. 5. 2024. iznosi:

((60 * 1,5) + (40 * 2,5) + (70 * 3)) / 170 = 2,35

Za sve što u ovom dokumentu nije detaljno opisano u vezi sa zajedničkim funkcijama formi za ispis pogledajte [Pregled i ispis](/docs/guide/common/operations-with-data/reports).