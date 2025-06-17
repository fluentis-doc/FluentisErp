---
title: Inventar cantitativ valoric
sidebar_position: 1
---

:::important Utilizare
Raportul reprezintă un instrument esențial pentru gestionarea și monitorizarea stocurilor de gestiune, permițând companiilor să aibă o viziune clară și detaliată asupra propriilor stocuri. Cu acest raport, utilizatorii pot accesa informații complete nu doar despre cantitățile fizice ale articolelor prezente în gestiune, ci și despre valoarea acestora, obținută prin diverse proceduri de valorizare, cum ar fi costul mediu, costul din ultima achiziție, FIFO și LIFO.

Generarea raportului se face cu ajutorul filtrelor personalizabile, care permit vizualizarea datelor specifice pentru gestiune, articol, categorie de produse și altele, facilitând analiza și gestionarea stocurilor. Utilizatorii pot, de asemenea, să grupeze și să ordoneze datele în funcție de parametrii semnificativi, ceea ce face ca întregul proces de control al inventarului să fie mai eficient și informat.
:::

Form-ul conție o serie de filtre (gestiune, șablon, articol/variantă, tip articol, categorie fiscală, categorie de produse) care permit vizualizarea datelor dorite.

În plus, o serie de secțiuni, permit:

- gruparea datelelor pe articol sau pe gestiune;  
- ordonarea pe articol, caracteristică, descriere și categorie de produse;  
- obținerea detaliilor pe variantă, locație, comision, lot sau client/furnizor;  
- vizualizarea articolelor cu stoc pozitiv, zero sau negativ.

Activând câmpul **Cu valorizare la**, în inventar va fi adăugată și valoarea fiecărui articol pe baza următoarelor opțiuni: 

- **Cost mediu**: dacă este activ, articolele vor fi valorizate la costul mediu calculat pe baza mișcărilor de gestiune (dacă flag-ul **Din registru articol** este dezactivat);  
- **Cost ultim**: dacă este activ, articolele vor fi valorizate la costul ultim calculat pe baza mișcărilor de gestiune (dacă flag-ul **Din registru articol** este dezactivat);  
- **FIFO anual**: dacă este activ, articolele vor fi valorizate conform procedurii FIFO anual;  
- **LIFO anual**: dacă este activ, articolele vor fi valorizate conform procedurii LIFO anual;  
- **Aria gestională**: dacă este activ, articolele vor fi valorizate pe baza ariei de gestionare specificate pentru acea gestiune în tabelul [Gestiuni](/docs/configurations/tables/logistics/warehouses/);  
- **Din cost efectiv loturir**: dacă este activ, articolele vor fi valorizate cu valoarea indicată în registrul loturilor;  
- **Din registru articol**: dacă este activ, în combinație cu flag-urile **Cost mediu** sau **Cost ultim**, articolele vor fi valorizate, respectiv, la costul mediu sau ultim, dar pe baza costurilor corespunzătoare introduse în registrul articolului;  
- **Arhivare inventar**: dacă este activ, datele procesării vor fi salvate în [Arhivă gestiune](/docs/logistics/physical-inventory/warehouse-history);  
- **Din arhivă**: dacă este activ, articolele vor fi valorizate cu valorile prezente în [Arhivă gestiune](/docs/logistics/physical-inventory/warehouse-history) cu data egală cu cea indicată în câmpul **Dată cost istoric**;  
- **Dată cost istoric**: se activează doar dacă flag-ul **Din arhivă** este activ, permițând introducerea datei costului istoric care va fi utilizat pentru valorizare.

După introducerea parametrilor doriti, se pot tipări rapoarte standard sau personalizate (după setarea în *Gestionare rapoarte*). În cazul în care doriți să tipăriți un raport personalizat, trebuie să-l alegeți din meniu în *parametrii raport*.

Standard sunt disponibile următoarele rapoarte:

- **Raport FIFO**: este un raport cu procedura FIFO pentru inventare (de utilizat în combinație cu opțiunea **FIFO anual**);  
- **Raport inventar**: este un raport standard pentru inventare;  
- **Raport LIFO**: este un raport cu procedura LIFO pentru inventare (de utilizat în combinație cu opțiunea **LIFO anual**).

#### LIFO anual

LIFO anual, efectuat fără a consideraopàiunile *Din registrul articole* sau *Aria de gestionare*, funcționează astfel:

În anul curent, adică de la ultima dată de închidere la data *Inventar la* se calculează stocul și costul mediu.

Pentru calculul costului mediu ponderat se iau în considerare toate mișcările articolelor cu flag-ul *relevanță fiscală* activ și înregistrările din gestiune cu șablonul care actualizează costul mediu și care au *relevanță fiscală*.

Pentru calculul stocului se iau în considerare toate mișcările articolelor cu flag-ul de *relevanță fiscală* activ și înregistrările din gestiune cu șablon de *relevanță fiscală*. 

Obținut stocul la sfârșitul perioadei, se verifică stratificările LIFO în *Arhivă gestiune*, calculându-se înapoi stocurile fiecărui an, apoi pentru fiecare an stocul se multiplică cu costul mediu al anului și, adunând valorile fiecărui an din stratificare, se obține costul FIFO pentru fiecare articol.  
Dacă în *Arhivă gestiune* sunt ani cu stoc 0, căutarea stratificărilor LIFO se oprește și se valorifică de la anul stratificat următor.

:::note Notă  
Pentru toți anii anteriori ultimei închideri a gestiunii se consideră stocul de la sfârșitul anului, fără a-l împărți pe gestiuni.  
Prin urmare, pentru rapoartele LIFO și FIFO se poate aplica filtrul de *grupare pe gestiune* doar pentru anul curent, adică pentru toate înregistrările efectuate după ultima dată de închidere a gestiunii.  
:::

*Exemplu*:

închiderea gestiunii este cu data 31/12/2023  
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

Pentru alte detalii privind funcționarea comună a rapoartelor, vă rugăm să consultați următorul link [Vizualizare și tipărire](/docs/guide/common/operations-with-data/reports).