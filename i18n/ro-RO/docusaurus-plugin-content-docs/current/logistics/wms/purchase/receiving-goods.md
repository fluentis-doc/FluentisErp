---
title: Recepţia mărfurilor 
sidebar_position: 1
---

:::important Utilizare
Modulul este esențial pentru gestionarea eficientă a fluxurilor de gestiune. Permite identificarea rapidă a materialelor recepționate, garantând încărcarea precisă a mărfurilor. Procesul începe cu selectarea ordinelor furnizorilor neexecutate sau parțial executate, utilizând filtre detaliate care permit vizualizarea articolelor care urmează să fie recepționate.

După selectarea ordinelor, operatorul poate genera avizul de achiziție, introducând detalii referitoare la articolele de încărcat. Sistemul suportă de asemenea crearea unităților de încărcare (UdI) în cazul în care acestea sunt gestionate, îmbunătățind astfel organizarea și trasabilitatea mărfurilor primite. Prin introducerea datelor referitoare la loturi, cantități și alte informații relevante, modulul garantează un control complet asupra mișcărilor de gestiune.
:::

Acest form este utilizat la recepția mărfurilor, pentru identificarea articolelor, crearea și încărcarea aviz-ului de achiziție.  
După filtrarea și selectarea unuia sau mai multor ordine furniz, se pot vizualiza articolele neexecutate și parțial executate folosind butonul *Vizualizează*, iar cu butonul *Creare aviz achiziție*, se poate începe introducerea articolelor care vor fi prezente în aviz.

#### 1. Creare aviz achiziție

În acest tab, după selectarea ordinului furnizorului, folosind butonul *Creare aviz achiziție* se deschide formul omonim în care trebuie inserat numărul avizului.        
Ca [Tip aviz](/docs/configurations/tables/purchase/purchase-delivery-notes-type) utilizabil, va fi propus cel indicat în [Tip ordin furnizor](/docs/configurations/tables/purchase/purchase-orders-type/) al ordinului utilizat. Dacă nu este indicat, va fi propus primul [Tip aviz](/docs/configurations/tables/purchase/purchase-delivery-notes-type) prezent în tabel, iar utilizatorul va putea să-l modifice manual.      
Inoltre, verranno visualizzate le informazioni relative al primo articolo presente sull'ordine, oltre alle informazioni di testata dell'ordine stesso.

#### Câmpuri specifice 

> - **Gestiune**: indică gestiunea în care se vor efectua mișcările;          
> - **Şablon gestiune**: indică șablonul gestiunii cu care se vor efectua mișcările;     
> - **Tip aviz**: indică tipul de aviz cu care va fi creat documentul de transport;                
> - **Data**: indică data avizului pe care îl creați; implicit este propusă data curentă;     
> - **Ordine**: indică numărul ordinului furnizorului;           
> - **Articol**: reprezintă clasa, codul și descrierea articolului pe care urmează să-l confirmați;           
> - **Nr. linie**: indică numărul liniei articolului în ordinul furnizorului;          
> - **Cod de bare**: permite citirea codurilor de bare printr-un cititor special pentru a efectua diverse operațiuni;      
> - **Lot furnizor**: permite introducerea numărului lotului furnizorului;     
> - **LT**: permite generarea numărului lotului intern;           
> - **Dată scadenţă**: indică data expirării lotului;          
> - **Cantitate comandată**: reprezintă cantitatea comandată;    
> - **Cantitate rămasă**: reprezintă cantitatea rămasă;       
> - **Cantitate**: reprezintă cantitatea pe care doriți să o încărcați în gestiune;    
> - **Locaţie propusă**: indică locația propusă;              
> - **Locație**: permite introducerea unei locații diferite de cea propusă.
> - **Input code** (folosind un cititor de coduri de bare): permite inserarea datelor referitoare la lot, locație, cantitatea relevată și articolul, în cazul în care doriți să încărcați un altul decât cel propus, dar care este totuși prezent în ordinele selectate anterior.       
După introducerea datelor referitoare la articolul curent, este posibil să le confirmați cu butonul **Confirmă**.     
Odată ce toate liniile ordinului sunt confirmate, veți fi automat direcționat către tab-ul **Detalii aviz**, unde, folosind butonul **Închide**, este posibil să salvați aviz-ul și să efectuați mișcarea de gestiune corespunzătoare.

#### Butoane specifice
> - **Confirmă**: permite confirmarea datelor introduse pentru articolul selectat;           
> - **Conf+List**: permite confirmarea datelor introduse pentru articol și, de asemenea, deschide un pop-up care oferă posibilitatea de a imprima etichetele;       
> - **Listează**: permite imprimarea etichetelor;       
> - **Închide**: permite salvarea avizului creat și crearea mișcărilor de gestiune corespunzătoare;        
> - **Obiectul următor**: permite trecerea la următorul articol prezent în ordinul furnizorului;       
> - **Obiectul anterior**: permite trecerea la articolul anterior prezent în ordinul furnizorului.

#### 2. Detalii aviz     
În acest form sunt prezentate toate informațiile referitoare la liniile create.

#### Butoane specifice
> - **Șterge articole**: permite ștergerea liniei selectate din aviz.   

#### 3. Detalii ordine 
În acest form sunt prezentate toate informațiile referitoare la ordinul furnizorului selectat.

## Recepţie mărfuri cu unități de încărcare

În cazul în care articolul este gestionat cu unități de încărcare, în tab-ul [Ambalare](/docs/erp-home/registers/items/create-new-item) din registrul articolului trebuie să existe cel puțin o linie cu opțiunea **Unități de încărcare obligatorii** activată, prioritatea și cantitatea.     
Procedura de recepție a mărfurilor va trebui să considere linia, alegând-o pe cea cu prioritate mai mare între cele ale furnizorului/clientului (dacă este indicat, în caz contrar alegeți dintre cele fără), dar cu opțiunea *Unitate de încărcare obligatorie* activată.     

După inserarea datelor referitoare la articol, așa cum a fost descris anterior pentru cazul fără UdI, apăsați butonul **Confirmă** pentru ca procedura să deschidă un nou form dedicat creării unităților de încărcare.   
**Cantitatea rămasă** va fi inițial egală cu valoarea indicată în form-ul principal în câmpul cantitate; aceasta va fi actualizată dinamic la fiecare inserare a unei noi linii în tabel.   

> - **Număr (Numero)**: indică numărul unității de încărcare de acel tip;         
> - **Tip UdI**: indică tipul unității de încărcare;       
> - **Număr unitate de încărcare**: indică numărul unic al unității de încărcare;         
> - **Cantitate**: reprezintă cantitatea conținută în acea unitate de încărcare.

Focusul cursorului este plasat pe câmpul de referință al furnizorului, pentru a permite operatorului să introducă valoarea rapid și simplu.       
Odată ce acest valor (neobligatoriu) este introdus, este suficient să apăsați butonul **Avans** pentru a introduce linia în tabel și a actualiza valoarea cantității rămase.      
După fiecare click pe butonul **Avans**, focusul este resetat întotdeauna pe câmpul de referință al furnizorului.     
Selectând una dintre liniile tabelului și apăsând butonul de ștergere, aceasta va fi ștearsă, actualizând cantitatea rămasă.      
Operatorul poate modifica de asemenea o linie deja inserată. Selectând linia din tabel, toate datele vor fi afișate în câmpurile de mai jos, unde utilizatorul poate să le modifice, și prin butonul *Avans* le poate aplica liniei din tabel.        
După finalizarea inserării și confirmarea tuturor liniilor, cu butonul **închide** se va reveni la form-ul principal, din care, apăsând butonul **închide**, vor fi create mișcările de gestiune corespunzătoare pentru aviz-ul tocmai încărcat și pentru crearea unităților de încărcare asociate.

**Parametrii încărcare/descărcare** care trebuie inserați în tabelul [Parametrii Încărcare/Descărcare pentru utilizator](/docs/configurations/parameters/general-parameters/deliverynotes-grouping).

| Arie | Modul | Formular |
| :-- | :-- | :-- |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | ReceivingGoodsCreateDocument |
| Scm | Fluentis.FluentisErp.Mvvm.Scm.PurchaseDeliveryNotes.ReadWrite.Views | LoadingUnitCreationFromPurchaseDeliveryNoteItem |

În mod specific, acestea sunt utilizate în următorul mod:

> **ReceivingGoodsCreateDocument**: după ce a fost selectată **Recepţia mărfurilor** și s-a apăsat butonul **Creare aviz achiziție**, gestiunea și șablonul indicate în acest parametru sunt utilizate în liniile articolelor aviz-ului proaspăt creat.
> **LoadingUnitCreationFromPurchaseDeliveryNoteItem**: după ce a fost selectată **Recepţia mărfurilor** și s-a apăsat butonul **Creare aviz achiziție**, gestiunea și șablonul indicate în acest parametru sunt utilizate în crearea și încărcarea unităților de încărcare recent create. Acest parametru este necesar doar în cazul în care sunt utilizate unitățile de încărcare.

Pentru toate informațiile despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați pagina legată de [Tokenizarea codurilor de bare (Barcode tokenizer)](/docs/configurations/tables/general-settings/barcode-tokenizer).

## Recepţie mărfuri cu creare etichete

În cazul în care este necesar să creați etichete pentru articolele care se vor încărca, după ce ați introdus toate datele referitoare la articol conform descrierii anterioare, utilizați butonul **Confirmă + Listează** pentru ca procedura să deschidă un nou form dedicat creării etichetelor.       
În acest form focusul este deja plasat pe cantitatea care va fi introdusă în fiecare etichetă, care poate fi modificată.  
De asemenea, se poate decide numărul de etichete cu o anumită cantitate.     
După inserarea datelor, apăsați butonul *înainte* pentru a insera linia de etichete în tabelul central, iar **Cantitatea rămasă** va fi actualizată (inițial, va fi egală cu valoarea indicată în form-ul principal, în câmpul cantitate). Dacă apar erori, selectați linia și ștergeți-o cu butonul **Șterge**.        
După crearea tuturor etichetelor, acestea pot fi listate cu butonul corespunzător. Cu butonul de închidere, se poate reveni la form-ul principal de creare a aviz-ului, pentru a adăuga noi linii.      
Puteți apela o linie confirmată anterior și să o redeschideți cu butonul de *confirmare și listare* pentru a modifica etichetele acesteia.      
După finalizarea modificărilor, cu butonul de închidere, va fi creat avizul de achiziție cu mișcările de gestiune corespunzătoare.      

În acest caz, **Parametrii încărcare/descărcare** sunt aceiași ca și în cazurile anterioare.

## Recepţie mărfuri cu unități de măsură alternative

Gestionarea unităților de măsură alternative este activată dacă opțiunea **WMS implicit** prezent în [UM alternative din registru articol](/docs/erp-home/registers/items/create-new-item#23-um-alternativa) este activat.        
În acest caz, în form-ul de recepție vor fi vizualizate de asemenea câmpurile unității de măsură alternative și cantității, unde factorul de conversie utilizat este calculat prin împărțirea cantității de gestionare la cantitatea alternativă (dacă coincide cu cea care are opțiunea WMS implicit) prezentă în ordinul furnizorului.         
Acest factor de conversie este utilizat prin înmulțire sau împărțire (în funcție de parametrul respectiv indicat în parametrii inițiali de gestiune) pentru a obține cantitățile în unitatea de măsură alternativă în form-ul principal de creare a avizului și în cel de creare a UdI.

În acest caz, **Parametrii încărcare/descărcare** sunt aceiași ca și în cazurile anterioare.