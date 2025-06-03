---
title: Inventar Cantitativ Valorizat
sidebar_position: 1
---

:::important Utilizare
Raportul "Inventar" (Inventario quantità valorizzato) din Fluentis reprezintă un instrument esențial pentru gestionarea și monitorizarea stocurilor de magazin, permițând companiilor să aibă o viziune clară și detaliată asupra propriilor stocuri. Prin acest raport, utilizatorii pot accesa informații complete nu doar despre cantitățile fizice ale articolelor prezente în magazin, ci și despre valoarea acestora, obținută prin diverse logici de evaluare, cum ar fi costul mediu, costul de ultimă achiziție, FIFO și LIFO.

Generarea raportului se face prin filtre personalizabile, care permit vizualizarea de date specifice pentru magazin, articol, categorie de produse și altele, facilitând analiza și gestionarea stocurilor. Utilizatorii pot, de asemenea, să grupeze și să ordoneze datele în funcție de parametrii semnificativi, ceea ce face ca întregul proces de control al inventarului să fie mai eficient și informat.

Acest raport nu doar că sprijină deciziile operaționale zilnice, dar este și crucial pentru a asigura conformitatea normativă și pentru a realiza analize financiare și de performanță în cadrul organizației.  
:::

Tipărirea permite utilizatorului să vizualizeze un raport ce conține informațiile referitoare la inventar.  
Form-ul se compune dintr-o parte superioară conținând o serie de filtre (magazin, cauză, articol/variantă, tip articol, categorie fiscală, categorie de produse,...) care permit vizualizarea datelor dorite.

În plus, printr-o serie de casete dedicate, este posibil:

- să grupeze datele pe articol sau pe magazin;  
- să le ordoneze pe articol, caracteristică, descriere și categorie de produse;  
- să obțină detalii pe variantă, locație, comision, lot sau client/furnizor;  
- să vizualizeze articolele cu stoc pozitiv, zero sau negativ.

Activând caseta **Cu evaluare la** (Con valorizzazione al), se va adăuga în raportul de inventar și valoarea fiecărui articol pe baza următoarelor opțiuni: 

- **Cost mediu**: dacă este activ, articolele vor fi evaluate cu costul mediu calculat pe baza mișcărilor din magazin (dacă flag-ul **Din registrul articolului (Da anagrafica articolo)** este dezactivat);  
- **Cost de ultimă achiziție**: dacă este activ, articolele vor fi evaluate cu costul de ultimă achiziție calculat pe baza mișcărilor din magazin (dacă flag-ul **Din registrul articolului (Da anagrafica articolo)** este dezactivat);  
- **FIFO anual**: dacă este activ, articolele vor fi evaluate conform logicii FIFO anual;  
- **LIFO anual**: dacă este activ, articolele vor fi evaluate conform logicii LIFO anual;  
- **Zona de gestionare**: dacă este activ, articolele vor fi evaluate pe baza zonei de gestionare specificate pentru acel magazin în tabelul [Magazine](/docs/configurations/tables/logistics/warehouses/);  
- **Din costul efectiv al loturilor**: dacă este activ, articolele vor fi evaluate cu valoarea indicată în registrul loturilor;  
- **Din registrul articolului**: dacă este activ, în combinație cu flag-urile **Cost mediu** sau **Cost de ultimă achiziție**, articolele vor fi evaluate, respectiv, la costul mediu sau ultim, dar pe baza costurilor corespunzătoare introduse în registrul articolului;  
- **Storicizarea inventarului**: dacă este activ, datele procesării vor fi salvate în [Istoricul magazinului](/docs/logistics/physical-inventory/warehouse-history);  
- **Din istoric**: dacă este activ, articolele vor fi evaluate cu valorile prezente în [Istoricul magazinului](/docs/logistics/physical-inventory/warehouse-history) cu data egală cu cea indicată în câmpul **Data costului istoric**;  
- **Data costului istoric**: se activează doar dacă flag-ul **Din istoric** este activ, permițând introducerea datei costului istoric care va fi utilizat pentru evaluare.

După introducerea parametrilor doriti, este posibil să tipăriți rapoarte standard sau personalizate (după maparea în gestionarea tipăriturilor). În cazul în care doriți să tipăriți un raport personalizat, trebuie să-l alegeți din meniu în parametrii de tipărire.

Standard sunt disponibile următoarele rapoarte:

- **Tipărire FIFO**: este un raport cu logică FIFO pentru inventare (de utilizat în combinație cu utilizarea flag-ului **FIFO anual**);  
- **Tipărire inventar**: este un raport standard pentru inventare;  
- **Tipărire LIFO**: este un raport cu logică LIFO pentru inventare (de utilizat în combinație cu utilizarea flag-ului **LIFO anual**).

**LIFO anual**

LIFO anual, efectuat fără a considera flag-urile *Din registrul articolelor* sau *Zona de gestionare*, funcționează astfel:

În anul curent, adică de la ultima dată de închidere până la data *Inventar până la* se calculează stocul și costul mediu.

Pentru calculul costului mediu ponderat se iau în considerare toate mișcările articolelor cu flag-ul de interes fiscal activ și înregistrările din magazin cu cauză care actualizează costul mediu și care au interes fiscal.

Pentru calculul stocului se iau în considerare toate mișcările articolelor cu flag-ul de interes fiscal activ și înregistrările din magazin cu cauză de interes fiscal. 

Obținut stocul la sfârșitul perioadei, se verifică stratificările LIFO în *Istoricul magazinului*, calculându-se înapoi stocurile fiecărui an, apoi pentru fiecare an стocul se multiplică cu costul mediu al anului și, adunând valorile fiecărui an din stratificare, se obține costul FIFO pentru fiecare articol.  
Dacă în *Istoricul magazinului* sunt ani cu stoc 0, căutarea stratificărilor LIFO se oprește și se valorifică de la anul stratificat următor.

:::note Notă  
Pentru toți anii anteriori ultimei închideri a magazinului se consideră stocul de la sfârșitul anului, fără a-l împărți pe magazine.  
Prin urmare, pentru tipăriturile LIFO și FIFO este posibil să se aplice filtrul de *grupare pe magazin* doar pentru anul curent, adică pentru toate înregistrările efectuate după ultima dată de închidere a magazinului.  
:::

Să luăm un exemplu:

închiderea magazinului este cu data 31/12/2023  
astăzi facem tipărirea inventarului valorificat pentru articolul A care are stoc la 23/05/2024 de 170 și costul mediu la 23/05/2024 de 3 euro  
În istoric pentru articolul A găsim:

| An | Stoc | Cost mediu |
| :-- | :-: | :-: |
| 2020 | 100 | 2 |
| 2021 |  0 | 0 |
| 2022 |  60 | 1,5 |
| 2023 | 100 | 2,5 |

Calculul se face astfel:  
170 de astăzi sunt cu siguranță 100 din 2023, din cele 100 din 2023, 60 sunt cu siguranță din 2022, nu pot fi din 2021 pentru că stocul era 0.  
Astfel, costul LIFO la 23/05/2024 este:  
((60 * 1,5) + (40 * 2,5) +(70 * 3)) /170 = 2,35

Pentru orice alte detalii neacoperite în acest document privind funcționarea comună a form-urilor de tipărire, vă rugăm să consultați următorul link [Previzualizare și tipărire](/docs/guide/common/operations-with-data/reports).