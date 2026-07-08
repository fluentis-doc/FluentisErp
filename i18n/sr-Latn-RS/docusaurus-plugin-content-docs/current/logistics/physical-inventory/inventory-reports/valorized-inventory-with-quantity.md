---
title: Procenjena vrednost inventara
sidebar_position: 1
---

:::important Čemu služi
Izveštaj **Procenjena vrednost inventara** u sistemu Fluentis predstavlja ključan alat za upravljanje i praćenje skladišnih zaliha i preduzećima omogućava jasan i detaljan pregled sopstvenih zaliha. Putem ovog izveštaja korisnici mogu pristupiti potpunim informacijama ne samo o fizičkim količinama artikala na skladištu već i o njihovoj vrednosti, izračunatoj primenom različitih metoda vrednovanja, kao što su prosečni trošak, poslednji trošak, FIFO i LIFO.

Izveštaj se generiše pomoću prilagodljivih filtera koji omogućavaju prikaz određenih podataka prema skladištu, artiklu, robnoj kategoriji i drugim kriterijumima, čime se olakšavaju analiza i upravljanje zalihama. Korisnici takođe mogu grupisati i sortirati podatke prema relevantnim parametrima, čime celokupni postupak kontrole inventara postaje efikasniji i informativniji.

Ovaj izveštaj ne služi samo kao podrška pri svakodnevnom donošenju operativnih odluka već je važan i za osiguravanje usklađenosti sa propisima i sprovođenje finansijskih analiza i analiza uspešnosti unutar organizacije.
:::

Štampa omogućava korisniku prikaz izveštaja koji sadrži informacije o inventaru.  
Forma se sastoji od gornjeg dela koji sadrži niz filtera (skladište, predložak, artikl / varijanta, vrsta artikla, poreska kategorija, robna kategorija...) pomoću kojih je moguće prikazati željene podatke.

Osim toga, putem niza posebnih opcija moguće je:

- grupisati podatke prema artiklu ili skladištu;      
- sortirati ih prema artiklu, karakteristici, opisu i robnoj kategoriji;     
- prikazati detalje prema varijanti, lokaciji, projektu, lotu ili klijentu / dobavljaču;       
- prikazati artikle sa pozitivnom, nultom ili negativnom zalihom.

Aktiviranjem opcije **Sa valorizacijom na** u izveštaju o inventaru prikazaće se i vrednost pojedinačnog artikla na osnovu sledećih oznaka:

- **Prosečni trošak**: ako je aktivna, artikli se vrednuju prema prosečnom trošku izračunatom na osnovu skladišnih knjiženja (ako je oznaka **Iz šifarnika artikala** deaktivirana);    
- **Poslednji trošak**: ako je aktivna, artikli se vrednuju prema poslednjem trošku izračunatom na osnovu skladišnih knjiženja (ako je oznaka **Iz šifarnika artikala** deaktivirana);    
- **Godišnji FIFO**: ako je aktivna, artikli se vrednuju prema metodi godišnjeg FIFO-a;        
- **Godišnji LIFO**: ako je aktivna, artikli se vrednuju prema metodi godišnjeg LIFO-a;        
- **Upravljačko područje**: ako je aktivna, artikli se vrednuju na osnovu upravljačkog područja definisanog za to skladište u tabeli [Skladišta](/docs/configurations/tables/logistics/warehouses/);          
- **Iz stvarnog troška lotova**: ako je aktivna, artikli se vrednuju prema vrednosti navedenoj u šifarniku lotova;      
- **Iz šifarnika artikala**: ako je aktivna zajedno sa oznakom **Prosečni trošak** ili **Poslednji trošak**, artikli se vrednuju prema prosečnom odnosno poslednjem trošku, ali na osnovu odgovarajućih troškova unetih u šifarniku artikala;         
- **Čuvanje stanja inventara**: ako je aktivna, podaci obrade biće sačuvani u [Istoriji skladišta](/docs/logistics/physical-inventory/warehouse-history);      
- **Iz sačuvanog stanja**: ako je aktivna, artikli se vrednuju prema vrednostima iz [Istorije skladišta](/docs/logistics/physical-inventory/warehouse-history) sa datumom koji odgovara datumu navedenom u polju **Datum istorijskog troška**;      
- **Datum istorijskog troška**: aktivira se samo ako je aktivna oznaka **Iz sačuvanog stanja** i omogućava unos datuma istorijskog troška koji će se koristiti za vrednovanje.

Nakon unosa željenih parametara moguće je odštampati standardne ili prilagođene izveštaje (nakon prethodnog mapiranja u upravljanju štampom). Ako se želi odštampati prilagođeni izveštaj, potrebno ga je izabrati na kartici **Parametri štampe**.

Standardno su dostupni sledeći izveštaji:

- **FIFO štampa**: izveštaj koji primenjuje FIFO logiku za inventare (koristi se zajedno sa aktiviranom oznakom **Godišnji FIFO**);              
- **Štampa inventara**: standardni izveštaj za inventare;       
- **LIFO štampa**: izveštaj koji primenjuje LIFO logiku za inventare (koristi se zajedno sa aktiviranom oznakom **Godišnji LIFO**).


**Godišnji LIFO**

Godišnji LIFO, kada se izračunava bez uzimanja u obzir oznaka *Iz šifarnika artikala* ili *Upravljačko područje*, funkcioniše na sledeći način:

Za tekuću godinu, odnosno za period od datuma poslednjeg zatvaranja do datuma *Inventar do*, izračunavaju se zaliha i prosečni trošak.

Za izračunavanje ponderisanog prosečnog troška uzimaju se u obzir sva kretanja artikala sa aktivnom oznakom fiskalne relevantnosti iz skladišnih knjiženja sa predloškom koji ažurira prosečni trošak i koji je fiskalno relevantan.

Za izračunavanje zalihe uzimaju se u obzir sva kretanja artikala sa aktivnom oznakom fiskalne relevantnosti iz skladišnih knjiženja sa fiskalno relevantnim predloškom.

Nakon utvrđivanja zalihe na kraju perioda proveravaju se LIFO slojevi u *Istoriji skladišta*, pri čemu se unazad izračunavaju zalihe za svaku godinu. Zatim se za svaku godinu zaliha te godine množi sa prosečnim troškom te godine, a sabiranjem vrednosti svih godina u slojevima dobija se FIFO trošak svakog artikla.

Ako u *Istoriji skladišta* postoje godine sa zalihom 0, pretraživanje LIFO slojeva se zaustavlja i vrednovanje se nastavlja od sledeće godine za koju postoji sloj.

:::note Napomena
Za sve godine koje prethode poslednjem zatvaranju skladišta uzima se u obzir zaliha na kraju godine, bez podele prema skladištu.   
Shodno tome, za LIFO i FIFO štampe filter *grupisanja prema skladištu* moguće je primeniti samo za tekuću godinu, odnosno za sva knjiženja sprovedena nakon datuma poslednjeg zatvaranja skladišta.
:::

Pogledajmo primer:

zatvaranje skladišta sprovedeno je sa datumom 31. 12. 2023.  
danas se izrađuje štampa vrednosnog inventara za artikl A, koji na dan 23. 5. 2024. ima zalihu 170 i prosečni trošak od 3 evra.

U *Istoriji skladišta* za artikl A nalaze se sledeći podaci:

| Godina | Preostala količina | Prosečni trošak |
| :-- | :-: | :-: |
| 2020. | 100 | 2 |
| 2021. | 0 | 0 |
| 2022. | 60 | 1,5 |
| 2023. | 100 | 2,5 |

Izračunavanje se sprovodi na sledeći način:

od današnjih 170 jedinica, 100 jedinica sigurno potiče iz 2023. godine. Od tih 100 jedinica iz 2023. godine, 60 jedinica sigurno potiče iz 2022. godine. Ne mogu poticati iz 2021. godine jer je zaliha te godine iznosila 0.

Stoga LIFO trošak na dan 23. 5. 2024. iznosi:

((60 * 1,5) + (40 * 2,5) + (70 * 3)) / 170 = 2,35

Za sve što u ovom dokumentu nije detaljno opisano u vezi sa zajedničkim funkcijama formi za štampu pogledajte [Pregled i štampa](/docs/guide/common/operations-with-data/reports).