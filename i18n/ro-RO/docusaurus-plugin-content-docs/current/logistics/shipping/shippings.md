---
title: Expedieri
sidebar_position: 3
---

:::important Utilizare
Gestionarea **Expedierilor** în Fluentis reprezintă un progres semnificativ în managementul logistic și operațional pentru companiile care utilizează această platformă ERP. A fost concepută pentru a optimiza și simplifica procesul de expediere, oferind un control mai eficient și integrat al tuturor activităților logistice. 
Sistemul de gestionare a expedierilor din Fluentis introduce de asemenea posibilitatea de a crea grupări, un proces logistic prin care expedierile diferitelor clienți sau furnizori sunt consolidate într-o singură unitate de transport.

Această metodă de consolidare oferă diverse beneficii:

- **Reducerea costurilor**: Crearea grupărilor permite optimizarea utilizării spațiilor de încărcare și diminuarea costurilor de transport pe unitate de marfă expediată. Este deosebit de avantajoasă pentru companiile care expediază mărfuri în cantități inferioare unei încărcături complete.
- **Eficiență operațională**: Consolidarea mai multor expedieri într-o singură încărcare simplifică gestionarea operațiunilor și reducerea timpilor de tranzit, îmbunătățind eficiența generală a procesului logistic.
- **Flexibilitate și scalabilitate**: Companiile pot adapta cu ușurință strategia lor de expediere în funcție de cerere și de variațiile pieței, profitând de flexibilitatea oferită de grupări pentru a gestiona vârfurile de expediere sau a avea un control mai mare asupra timpilor de livrare.

În concluzie, această funcționalitate pentru gestionarea expedierilor din Fluentis oferă companiilor un instrument puternic pentru optimizarea logisticii, îmbunătățirea eficienței și reducerea costurilor, menținând în același timp un nivel înalt de servicii și satisfacție a clientului.
:::

Form-ul **Nouă expediere** se deschide:  
- pe calea **Logistică > Expedieri > Nouă expediere**  
sau  
- cu butonul **Nou** care se află în [Caută Expedieri](/docs/logistics/shipping/search-shippings).

În form sunt propuse automat **Data** și **Anul** curent, dar acestea pot fi modificate.

## **1. Date obligatorii**

- **Tip expediere**: indică tipul expedierii și, automat, este inserat și *numărul* expedierii. Acesta este definit în *Configurare > Tabele > Logistică > [Tipuri de expediere](/docs/configurations/tables/logistics/shipping-type)*.       
- **Stare expediere**: este predefinită în *Configurare > Tabele > Logistică > [Stări expediere](/docs/configurations/tables/logistics/shipping-states)*.        
- **Transport cu**: utilizatorul poate alege dintre următoarele opțiuni: *Expeditor*, *Destinatar* și *Transportator*.
- **Număr**: fiecărui document i se alocă un număr conform numerotării specificate de utilizator și tipului de expediere care conține numerotarea.       
- **Transportator**: permite indicarea transportatorului care va efectua expedierea.
- **Client**: permite indicarea clientului expedierii.

## **2. Antet**

- **Data început**: permite indicarea datei de început a expedierii;      
- **Data sfârșit**: permite indicarea datei de sfârșit a expedierii;    
- **Ore planificate**: indică totalul orelor necesare pentru expediere. Acesta se calculează automat pe baza datei de început și de sfârșit; 
- **Vehicul**: permite selectarea vehiculului cu care se va efectua expedierea dintre cele indicate în tabelul [Autovehicule](/docs/logistics/motorvehicles/motorvehicle);
- **Șofer atribuit**: permite selectarea șoferului care va efectua expedierea dintre cei menționați în tabelul [Șoferi](//docs/logistics/motorvehicles/motorvehicle-drivers);       
- **Volum**: permite indicarea volumului expedierii și a unității de măsură corespunzătoare;
- **Greutate netă**: permite indicarea greutății nete a expedierii și a unității de măsură corespunzătoare;
- **Greutate brută**: permite indicarea greutății brute a expedierii și a unității de măsură corespunzătoare;
- **Aspect exterior bunuri**: permite selectarea aspectului exterior al mărfii expediate dintre cele indicate în tabelul [Aspect exterior bunuri](/docs/configurations/tables/logistics/type-of-packaging/);
- **Număr tracking**: permite indicarea numărului de tracking al expedierii. Acesta va fi propus implicit pentru toate expedierile introduse în tab-ul **grupaj**;
- **Numărul total colete**: permite indicarea numărului de colete al expedierii.
- **Monedă**: secțiune ce conține datele referitoare la [Monedă](/docs/guide/common/glossary/glossary-intro#currency)
- **Data monedă**: indică [Data monedei](/docs/guide/common/glossary/glossary-intro#currency-date)  
- **Locație de producție**: permite alegerea locației de producție de unde va fi efectuată expedierea și preia automat adresa asociată cu *Contactul* (introdus în *Locație de producție*) în adresa locului de încărcare a expedierii;
- **Adresă loc de încărcare**: la deschiderea form-ului, acest câmp este populat implicit cu adresa companiei, de unde în mod normal ar trebui să plece mărfurile, dar se poate modifica manual; 
- **Adresă loc de destinație**: permite indicarea locului de destinație al expedierii.
- **Expediere**: permite indicarea datelor referitoare la [expediere](/docs/guide/common/glossary/glossary-intro#shipment);
- **Incoterm**: permite indicarea datelor referitoare la [Incoterm](/docs/guide/common/glossary/glossary-intro#carriage);
- **Ambalaj**: permite indicarea datelor referitoare la [Ambalaj](/docs/guide/common/glossary/glossary-intro#packing).  
- **Notă**: permite inserarea unei note libere;  
- **Note inițiale**: permite inserarea unei alte note libere.   
- **Stare executare**: atunci când expedirea este executată cu documentele aviz sau facturi, starea sa de executare se schimbă automat de la *Neexecutat* la *Parțial executat* sau *Executat*; utilizatorul poate forța livrarea unui ordin neexecutat complet indicând starea *Executat forțat*;  
- **Dată închidere**: indică data executării documentului.

## **3. Groupage**

În acest tab se inserează informațiile referitoare la **gruopage**.  
Acesta constă în agregarea mai multor expedieri de mărfuri care provin de la expeditori diferiți, dar destinate aceleași zone geografice, într-o singură încărcătură sau container. Astfel, se poate utiliza optim spațiul disponibil în mijloacele de transport (cum ar fi camioane, containere maritime sau aeriene) și oferi un serviciu mai ieftin comparativ cu expedierea de loturi individuale de mărfuri.

### Expedieri groupage

Cuprinde informațiile referitoare la expedierile incluse în acest **groupage**.  
Pentru a adăuga o nouă expediere, poziționați-vă pe un rând nou sau folosiți butonul **Nou** din ribbon bar.  

#### Câmpuri specifice   
- **Număr rând**: indică numărul rândului expedierii și este introdus automat;  
- **Data început**: indică data / ora început expediere;  
- **Data sfârșit**: indică data / ora sfârșit expediere;  
- **Ore planificate**: indică durata în ore a expedierii și este calculată automat pe baza datelor de început și de sfârșit;  
- **Număr tracking**: indică numărul de tracking al fiecărei expedieri; dacă este indicat în tab *Antet*, numărul de tracking este propus în toate expedierile create, dar poate fi modificat manual de utilizator.  
- **Proveniență**: indică numele / denumirea locului de încărcare;  
- **Cod poștal**: indică codul poștal al locului de încărcare;  
- **Oraș**: indică orașul locului de încărcare;  
- **Județ**: indică județul locului de încărcare;  
- **Adresă loc de încărcare**: indică adresa locului de încărcare. Acesta este completat în mod implicit cu adresa companiei, de unde în mod normal ar trebui să pornească mărfurile, menționată și în antetul documentului.  
- **Destinatie**: indică numele / denumirea locului de destinație;  
- **Cod poștal**: indică codul poștal al locului de destinație;  
- **Oraș**: indică orașul locului de destinație;  
- **Județ**: indică județul locului de destinație;  
- **Adresă loc de destinație**: indică adresa locului de destinație. Aceasta este completată automat, fiind preluată din registrul clientului, dar poate fi totuși modificată manual de utilizator.  
- **Autovehicul**: indică mijlocul de transport cu care va fi efectuată expedierea;  
- **Șofer atribuit**: indică șoferul care va efectua expedierea.

În plus, pentru fiecare rând al groupage-ului, se pot vedea detaliile corespunzătoare accesând **+**, pentru a completa și următoarele câmpuri:
- **Telefon**: permite introducerea numărului de telefon referitor la locul de încărcare;  
- **E-mail**: permite introducerea adresei de e-mail referitoare la locul de încărcare;  
- **Note**: permite introducerea unei note libere referitoare la locul de încărcare;  
și la destinație:
- **Telefon**: permite introducerea numărului de telefon referitor la destinație;  
- **E-mail**: permite introducerea adresei de e-mail referitoare la destinație;  
- **Note**: permite introducerea unei note libere referitoare la destinație.

### Articole expediere

În această secțiune sunt afișate toate articolele incluse în expedierea selectată în groupage.   

#### Procedură adăugare articol

- poziționați-vă pe un rând gol sau folosiți butonul **Nou** din ribbon bar.  
- utilizați butonul **Transfer articole**. Acesta deschide form-ul numit **Asociere ordine clienți**, în care implicit este inserat clientul expedierii în filtrul corespunzător. Apăsând butonul **Caută**, vor fi afișate în tabelul din dreapta toate articolele din ordinele neexecutate și parțial executate ale acelui client.  
În partea stângă a form-ului sunt afișate tabelele referitoare la *expedieri groupage* și la *articole expediere* cu datele introduse în form-ul principal al groupage-ului.  
Apoi, cu drag & drop, utilizatorul poate să tragă articolele de la tabelul din dreapta direct în fiecare expediere, iar acestea vor fi incluse automat în tabelul *articole expediere* referitoare la acea expediere.  
De asemenea, se pot adăuga articole care provin din ordinele altor clienți, variind pur și simplu valoarea filtrelor *Client* și apăsând din nou **Caută**.  

După adăugarea articolelor, apăsați butonul **Achiziţie** pentru a confirma toate modificările.

#### Câmpuri specifice     
- **Marcă**: afișează valoarea mărcii inserate în registrul articolelor;  
- **Cantitate**: indică cantitatea articolului;  
- **Unitate de măsură alternativă**: indică unitatea de măsură alternativă a articolului;  
- **Cantitate alternativă**: indică cantitatea alternativă a articolului;  
- **Volum**: indică volumul articolului;  
- **Greutate netă**: indică greutatea netă a articolului;  
- **Greutate brută**: indică greutatea brută a articolului;  
- **Cont ordin client**: afișează contul ordinului client din care face parte articolul;  
- **Tip ordin client**: afișează tipul de ordin client din care face parte articolul;  
- **Data ordin client**: afișează data ordinului client din care face parte articolul;  
- **Factură sau aviz**: afișează referința facturii / aviz-ului creat(ă) apăsând butoanele **Factură** sau **Aviz**. Valoarea este afișată în formatul: tip document / data document / număr document;  
- **Referință dispoziție de livrare**: afișează referința dispoziției de livrare creată apăsând butonul **Dispoziție de livrare**. Valoarea este afișată în formatul: tip document / data document / număr document.

#### Butoane specifice  
> - **Nou groupage**: permite introducerea unei noi expedieri în groupage;  
> - **Șterge groupage**: permite eliminarea expedierii selectate din groupage;  
> - **Transfer articole**: permite adăugarea articolelor la expediere luându-le direct din ordinele clienților;  
> - **Aviz**: permite crearea automată a [Avizului](/docs/sales/sales-delivery-notes/general-overview) pentru expedierile selectate din groupage;  
> - **Factură**: permite crearea automată a [Facturilor](/docs/sales/sales-invoices/general-overview) pentru expedierile selectate din groupage;  
> - **Dispoziție de livrare**: permite crearea automată a [Dispoziției de livrare](/docs/logistics/picking/picking-intro) pentru expedierile selectate din groupage.  

## **4. Rezumate**

În *Rezumate* sunt prezentate informațiile referitoare la costurile întregului document.

### Cheltuieli

În această tabel se pot insera eventuale cheltuieli, care trebuie introduse în pozitiv, eventuale reduceri în negativ.

Aceste elemente se aplică întregului document și nu sunt distribuite între rândurile articolelor. Pot include costuri suplimentare, reduceri globale sau majorări aplicate întregului document.  

Pentru a introduce o nouă cheltuială este necesar să completați următoarele date:

- **Număr rând**: indică numărul rândului cheltuielii introduse, completat automat;  
- **Tip cheltuieli / Descriere**: permite alegerea tipurilor de cheltuieli predefinite în tabelul [Tipuri cheltuieli](/docs/configurations/tables/general-settings/expenses-types/);  
- **Sumă cheltuieli**: indică valoarea cheltuielii exprimată în moneda documentului;  
- **Descriere cheltuieli**: Detaliu declarații: se introduce eventual declarația de intenție valabilă pentru client;  
- **TVA**: permite alegerea cotei TVA, predefinite în tabelul [Cote/Modalități TVA](/docs/configurations/tables/finance/vat-rates/).  
- **Note**: permite introducerea unei note libere;  
- **Sumă totală**: permite vizualizarea sumei totale a expedierii dată de suma valorilor introduse în tabelul *Cheltuieli*.