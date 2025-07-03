---
title: MES
sidebar_position: 5
---

:::important Utilitate
Formul principal al modulului de Execuție a Producției (MES) din Fluentis este proiectat pentru a optimiza și a simplifica procesul de declarare a activităților productive. Permite operatorilor să monitorizeze și să gestioneze în timp real resursele de producție, facilitând introducerea datelor referitoare la fazele de lucru și la cantitățile produse.

Operatorii pot gestiona cu ușurință introducerea și modificarea datelor, datorită unor funcționalități precum barcode Tokenizer și activarea unor controale specifice pentru a garanta corectitudinea înregistrărilor. În plus, sistemul suportă diferite metode de repartizare a timpului și a cantităților, permițând o analiză detaliată a performanțelor productive și asigurând o gestionare eficientă a resurselor utilizate.
:::

#### Butoane specifice

**Navigabilitate**  
> *Precedent*: permite trecerea la tabul anterior;     
> *Următor*: permite trecerea la tabul următor;     
> *Actualizează*: permite actualizarea tuturor datelor din form, de utilizat în cazul în care se fac modificări asupra resursei utilizate;      
> *Șterge selecția*: permite anularea selecției fazelor existente în Tabelul principală.     

**Confirmă semnalare**  
> *Începe*: permite crearea unei semnalări de producție de deschidere;    
> *Avansează*: permite crearea unei semnalări de producție de avansare;    
> *Întrerupe*: permite crearea unei semnalări de producție de suspendare;    
> *Reia*: permite crearea unei semnalări de producție de reluare;    
> *Închide*: permite crearea unei semnalări de producție de închidere;    
> *Anulează*: permite resetarea tuturor datelor introduse în Fluentis MES.                   

## MES

- **Cod de bare**: o mare parte dintre operațiunile care pot fi efectuate în Fluentis MES pot fi facilitate și accelerate datorită câmpului *Cod de bare*, care, dacă este configurat corespunzător, prelucrează inteligent datele achiziționate prin citirea codurilor de bare pe care le introduce automat în câmpurile corespunzătoare.    
Acest lucru oferă un mare avantaj operatorului atât în ceea ce privește viteza de introducere, cât și eficiența, deoarece va citi datele mereu în același câmp *Cod de bare* fără să fie nevoie să schimbe periodic focusul.     
Codurile de bare pot fi configurate în formul *Barcode tokenizer*, disponibil în: Tabele > Setări Generale > Barcode tokenizer.               
Prin urmare, acest câmp *Cod de bare*, în MES, poate fi utilizat de operator pentru a adăuga faze individuale sau grupuri de faze sau, de exemplu, toate fazele unui întreg ordin de producție, ori pentru a încărca loturile și/sau numerele de serie ale materialelor de descărcat prin citirea codurilor de bare corespunzătoare.

Pentru detalii despre cum să codificați codurile de bare care trebuie citite în câmpul **Cod de bare**, consultați documentația [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer).

- **Workstation**: procedura recunoaște workstation-ul pe care se lucrează și, dacă la acesta a fost asociat un centru de lucru, va încărca automat toate fazele care erau în lucru pe acel centru de lucru. În acest punct, operatorul poate decide dacă să continue cu raportarea respectivelor faze sau, de exemplu, să adauge altele. Pentru detalii consultați [Workstation](/docs/production/mes/workstation).     

- **Resursă**: este utilizat pentru a introduce orice tip de resursă de producție.     
În cazul în care este introdusă o resursă de tip *Centru de lucru*, acesta va fi înlocuit automat și în câmpul aferent *Centrului de lucru*, încărcând, în consecință, fazele aferente noului centru introdus.    
Dacă, în schimb, se introduce o resursă de tip *Angajat*, aceasta va fi utilizată drept utilizator de declarare. Introducerea unei resurse de tip Angajat este obligatorie atunci când este activat flag-ul *Operator obligatoriu* din tabul *Generale* aflat în [Resurse de producție](/docs/production/mes/production-resources).        

- **Centru de lucru**: reprezintă centrul de lucru pe care operatorul face declarația; pot fi vizualizate doar centrele de lucru legate de *Workstation*. În cazul în care *Workstation* nu a fost introdus sau nu a fost asociat niciun *Centru de lucru* la *Workstation*, va fi posibilă vizualizarea tuturor *Resurselor de producție* de tip *Centru de lucru*.    

- **Faze în lucru**: fazele pot fi adăugate în tabel cu câmpul *Cod de bare* sau folosind butonul specific *Selectează faze noi* din meniul din dreapta. Tabelul conține o serie de informații referitoare la comandă, ordinul de producție, proiect, variantă etc.  
Toate aceste informații pot fi afișate sau ascunse prin gestionarea în tabul *Layout* al [Resurse de producție](/docs/production/mes/production-resources).   
Pentru linia selectată, în partea dreaptă a tabelului, este posibil să vizualizați imaginea implicită introdusă în [Registru articol](/docs/erp-home/registers/items/create-new-item); în plus, un dublu click o va afișa pe tot ecranul.

### Producție 

Este dedicat introducerii informațiilor referitoare la timpii de producție / setup și la cantitățile produse / rebutate.

#### Butoane specifice

> *Șterge resursa*: permite ștergerea valorii introduse în câmpul *Resursă*;    
> *Selectează faze noi*: permite deschiderea unui help pentru selectarea fazelor noi care să fie adăugate la cele existente în tabelul principal;      
> *Șterge faza*: permite ștergerea fazei sau fazelor selectate în tabelul principal.    

#### Câmpuri specifice  
> **Mașină**: mașina este propusă în următorul mod:  
- dacă faza are asociată o mașină, aceasta este propusă doar dacă în tabelul [Mașini](/docs/configurations/tables/production/machines/) acea mașină are asociat același centru de lucru selectat în MES. În acest caz, utilizatorul poate modifica mașina, dar numai alegând dintre cele din tabelul mașini care au asociat acel centru de lucru. 
- în situația în care mașina din fază nu se regăsește printre cele asociate acelui centru de lucru, widgetul nu va propune nicio mașină.  
În plus, în acest caz, dacă utilizatorul încearcă să creeze o declarație, va primi un mesaj care îl obligă să introducă o mașină pentru a continua. Dacă, însă, faza nu are asociată nicio mașină, nu va exista obligația de a o introduce pentru a putea continua cu declarațiile.
Dacă sunt selectate mai multe faze simultan, mașina va fi preluată de la prima fază selectată (sau de la cea cu secvența prioritară, dacă este specificată) dintre cele cu același centru de lucru selectat în MES.          
> **Timp de lucru**: permite vizualizarea / modificarea manuală a timpului de lucru; comportamentul îi poate fi modificat prin flag-urile *Inserare manuală timp* și *Timp propus* din [Resurse de producție](/docs/production/mes/production-resources). Timpul este calculat automat ca diferență dintre momentul declarației curente și cea precedentă;                   
> **Timp de setup**: permite introducerea / modificarea manuală a timpului de lucru;         
> **Cantitate produsă**: permite introducerea cantității produse cu respectiva declarație;         
> **Cantitate alternativă**: permite introducerea cantității alternative produse cu acea declarație;      
> **Gestiune depozitare**: indică gestiunea unde se încarcă produsele obținute cu declarația;       
> **Șablon depozitare**: indică șablonul de încărcare a produselor obținute cu declarația;       
> **Locație depozitare**: indică locația de încărcare a produselor obținute cu declarația;       
> **Gestiune depozitare deșeuri**: indică gestiunea de descărcare a produselor obținute și rebutate cu declarația;       
> **Șablon depozitare deșeuri**: indică șablonul de descărcare a produselor obținute și rebutate cu declarația;       
> **Locație depozitare deșeuri**: indică locația de descărcare a produselor obținute și rebutate cu declarația;       
> **Defect**: indică defectul produselor obținute și rebutate cu declarația; poate fi activat un control dedicat cu flag-ul *Defect obligatoriu în cazul în care este declarat rebutat* din [Resurse de producție](/docs/production/mes/production-resources);            
> **Motiv întrerupere**: indică motivul folosit în declarație; în cazul în care un operator creează o întrerupere fără să indice motivul, se va utiliza automat cel indicat ca implicit în câmpul *Motiv de întrerupere propus* din form [Resurse de producție](/docs/production/mes/production-resources).       

### Control calitate

Acest tab permite gestionarea controalelor de calitate pentru articolele produse și/sau rebutate. 

#### Butoane specifice

> *Selectează articole*: permite selectarea articolelor care urmează să fie inserate în tabelul *Control calitate* dintre cele produse sau rebutate;       
> *Importă toate*: permite introducerea în tabelul *Control calitate* a tuturor articolelor produse sau rebutate;     
> *Șterge control*: permite ștergerea controlului selectat;           
> *Duplică test*: permite duplicarea testului selectat;       
> *Șterge test*: permite ștergerea testului selectat.   
       
#### Câmpuri specifice  
> *Clasă*: reprezintă clasa articolului;          
> *Cod articol*: reprezintă codul articolului;          
> *Variantă*: indică varianta articolului;    
> *Detaliu articol de luat în considerare*: indică detaliul maxim al articolului care va fi luat în considerare pentru efectuarea testelor (Nici unul, Lot, S.N., UdI). Acesta este selectat în tabul *Control de calitate* din [Resurse de producție](/docs/production/mes/production-resources);             
> *Ref. detaliu*: indică valoarea *Detaliu articol de luat în considerare*; de exemplu numărul lotului;          
> *U.M.*: indică unitatea de măsură a articolului;    
> *Cantitate*: reprezintă cantitatea articolului;    
> *Deșeu*: dacă este activ, indică faptul că respectiva cantitate este de tip *Deşeu*; dacă nu este activ, indică o cantitate produsă care nu a fost rebutată;             
> *Descriere articol*: indică descrierea articolului;          
> *Descriere variantă*: indică descrierea variantei.      

Dacă, în ordinul de producție legat de acea fază, faza este supusă controlului de calitate și a fost deja asociat un plan de control (mostenit din faza ciclului de lucru standard, dar care poate fi modificat manual atât în ordinul planificat, cât și în ordinul de producție), testele legate de planul de control indicat vor fi introduse automat în tabelul *Teste*.      

#### Teste     

> *Secvență*: indică secvența testelor care trebuie efectuate;          
> *Tip de test*: reprezintă codul testului care trebuie efectuat;         
> *Descriere tip de test*: indică descrierea testului care trebuie efectuat;           
> *Categorie instrument*: reprezintă categoria instrumentului utilizat;         
> *Tip valoare*: indică dacă valoarea este de tip *Text*, *Da/Nu* sau *Numeric*;      
> *Tip limită*: permite indicarea unui *Tip de limită*; este activ doar dacă *Tipul valorii* este *Numeric*;       
> *Valoare unitate de măsură*: indică unitatea de măsură a valorilor;           
> *Valoare nominală*: indică valoarea numerică pe care trebuie să o aibă testul;      
> *Limită minimă* / *Limită maximă*: indică limitele minime și maxime de eroare pe care le poate avea testul, în procente sau valoare absolută, în funcție de flag-ul *%*; *Limita minimă* se scade din *Valoarea nominală*, iar *Limita maximă* se adaugă;       
> *L. min (tol-/+)* / *L. Max (tol-/+)*: indică, procentual, toleranțele asupra limitelor minime și maxime care se adaugă toleranțelor precedente; poate fi prezentă, de exemplu, incertitudinea asupra unității de măsură;      
> *%*: indică dacă valorile sunt exprimate în procente sau sunt absolute;               
> *Tip control test*: indică tipul controlului testului;        
> *Frecvență*: indică frecvența controlului;       
> *Instrument de măsură*: indică instrumentul utilizat, în cazul în care există valori de constatat; este compus dintr-un Cod/Categorie;      
> *Valoare constatată*: indică valoarea măsurată;      
> *Media valorilor constatate*: indică media valorilor măsurate (se completează pe baza valorilor introduse în tabelul **Constatare multiplă valori**);      
> *Rezultat*: indică rezultatul testului și este determinat automat, în funcție de parametrii introduși;       
> *Cantitate neconformă*: indică valoarea care a fost identificată drept neconformă;        
> *Gestiune*: indică gestiunea în care se află articolele neconforme; această valoare este preluată automat în funcție de cât este indicat în *Tipul control articol*;                    
> *Șablon de gestiune pentru articole neconforme*: indică șablonul cu care vor fi descărcate articolele neconforme; această valoare este preluată automat pe baza a ceea ce este indicat în *Tip control articol*. Această mișcare de stoc se face în momentul înregistrării declarației de producție;                    
> *Note*: permite introducerea unei note libere.       

#### Constatare multiplă valori

Tabelul este utilizat în cazul în care sunt constatate mai multe valori care vor contribui la determinarea *Mediei valorilor constatate*.  
> *Secvență*: indică secvența valorilor măsurate;      
> *Poziție*: este un câmp descriptiv care permite indicarea poziției în care a fost efectuată măsurarea;       
> *Instrument de măsură*: indică instrumentul utilizat pentru acea măsurare;            
> *Valoare constatată*: indică valoarea măsurată;            
> *Note*: permite introducerea unei note libere.  
 

Mai multe detalii despre aria dedicată gestionării calității se găsesc în [Calitate](/docs/quality/quality-intro).          

### Loturi și SN

#### Butoane specifice

> *Generează*: permite generarea loturilor și a numerelor de serie;        
> *Șterge*: permite ștergerea lotului / numărului de serie selectat.       

În acest tab este posibilă vizualizarea tuturor articolelor realizate, cu menționarea cantităților produse și rebutate. De asemenea, în tabelele corespunzătoare se pot introduce/modifica informațiile referitoare la *Loturi* și *Numere de serie*.         

### Etichete

#### Butoane specifice

> *Nou*: permite crearea unei linii pentru introducerea unei noi etichete;          
> *Șterge*: permite ștergerea liniei etichetei selectate;       
> *Nouă UdI*: permite regenerarea codului UdI selectat;      
> *Tipărește selecția*: permite tipărirea doar a etichetelor selectate;       
> *Tipărește tot*: permite tipărirea tuturor etichetelor.          

#### Etichete  
În acest tab sunt create automat etichetele aferente articolelor produse.  
Cantitatea de articole pentru fiecare etichetă este determinată de informațiile introduse în registrul articolului, după cum urmează:
1. Tab *Ambalare*: consideră UdI și cantitatea introduse în linia cu flag-ul *Unitate de încărcare obligatorie* activ;       
2. Tab *Greutate/Dimensiuni*: consideră UdI și cantitatea introduse în câmpurile *Tip UDI* și *Număr articole pe UDI*;    
3. Tab *Greutate/Dimensiuni* > *Număr colete*: consideră cantitatea introdusă în *Articole existente într-un colet*; în acest caz nu va fi propusă UdI.

În plus, operatorul poate introduce manual sau prin câmpul *Cod de bare* *Loturi* și *Numere de serie*, dacă este necesar.      
Câmpul **Stare raport** poate lua valorile *Nelistat*, *Listat* sau *Retipărit* în funcție de numărul de ori în care eticheta a fost tipărită.       

### Materiale  

În tabul **Materiale** sunt redate automat materialele consumate, pe baza cantității articolului părinte care urmează să fie produs și a listei sale de materiale. Doar în cazul în care este activ flag-ul **Dichiarazione quantità materiale obbligatoria** în tab *Generale* din [Resurse de producție](/docs/production/mes/production-resources), materialul va fi propus evidențiat cu galben și cu cantitatea zero, iar operatorul va fi obligat să îl introducă manual.   
De asemenea, este posibilă indicarea cantităților rebutate pentru fiecare material în parte, inclusiv gestiunea și șablonul rebuturi; prin intermediul tabelelor corespunzătoare pot fi introduse / modificate informații referitoare la *Loturi* și *Numere de serie* aferente fiecărui material selectat.   

### Echipă 

#### Butoane specifice  
> *Intră în echipă*: permite introducerea unuia sau mai multor operatori în echipa de lucru;        
> *Ieși din echipă*: permite scoaterea unuia sau mai multor operatori din echipa de lucru;      
> *Substituie operator*: permite înlocuirea unui operator (activ) cu un altul, menținând datele/orele de intrare și ieșire din echipă;        
> *Șterge din echipă*: permite ștergerea liniei aferente operatorului selectat.        

#### Câmpuri specifice  
> **Listă operatori activi**: permite introducerea și vizualizarea operatorilor activi în declarația de producție; primul operator introdus primește automat flag-ul de *Șef de echipă* (care poate fi modificat manual);            
> **Listă operatori inactivi**: permite vizualizarea operatorilor care nu mai sunt activi (care au lucrat la această sau la aceste faze în declarațiile anterioare).
  

### Analiză

Tabul este dedicat vizualizării și consultării datelor referitoare la performanțele activității de producție; acesta este compus din trei secțiuni:
- Diagrame OEE
- Diagrame tip bară: **Analiza cantitativă** și **Analiză timp**
- Tabele: **Valori cantitate** și **Valori timp** 

**OEE**, **Overall Equipment Effectiveness** (Eficiența generală a resursei productive) este un indicator de performanță (KPI) pentru măsurarea capacității de producție a unei companii de producție.

Valoarea **OEE** este alcătuită din următorii trei factori:
- **Disponibilitate operațională (Availability)**: procentul de timp lucrat (B) raportat la timpul disponibil (A).
Se utilizează raportul dintre timpul disponibil de lucru al instalației (A) și timpul real în care instalația a produs (B).
- **Timpi de lucru (Performance) - Eficiență**: procentul dintre articolele prelucrate efectiv (D) și articolele care teoretic se pot prelucra (C).
În planificare sunt calculate articolele care se pot prelucra în regim optim (C). Orice reducere a acestor performanțe indică o scădere a productivității (D).
- **Calitate produs (Quality)**: este raportul procentual dintre articolele conforme (F) și articolele produse (E).
Astfel apar scăderi de productivitate legate de rebuturi sau prelucrări ulterioare care influențează eficiența în general.
- **Eficiența globală (OEE)**: rezultă din calculul celor trei analize anterioare și este dată de: 

OEE = Availability x Performance x Quality x 100 = B/A x D/C x F/E x 100

Indicele de **Eficiență globală (OEE)** poate fi calculat cu sau fără montaj.

În secțiunea diagramelor tip bară există diagramele **Analiza cantitativă** și **Analiză timp**, în care este posibilă vizualizarea datelor cantității și timpului estimate, precum și a celor efectiv declarate până în acel moment.      

În tabelele din ultima secțiune, este posibilă vizualizarea datelor cantității și timpului estimate, precum și a celor declarate până în momentul respectiv, dar sub formă de date tabelare.

Datele afișate în toate secțiunile tabului **Analize** se referă la fazele selectate. Dacă nu este selectată nicio fază, datele afișate vor reprezenta totalul tuturor fazelor din Tabelul *Faze în lucru*.

### Documente și Instrucțiuni operative  

Acest tab este compus din secțiunile **Documente** și **Instrucțiuni operative**.

#### Documente  

> **Documente atașate fazei selectate**: permite vizualizarea tuturor documentelor atașate la *Registru articol*, la *Ordin client*, la *Comanda de producție*, la *Ordin de producție*, în conformitate cu ceea ce este indicat în tabul *Document Management* din [Resurse de producție](/docs/production/mes/production-resources);  
> **Documente atașate semnalarii fazei selectate**: permite consultarea sau atașarea directă la declarație a documentelor noi, inclusiv prin drag & drop;       
> **Instrucțiuni operative**: permite vizualizarea tuturor documentelor atașate fazei ciclului de producție.        

### Note
         
> **Lista note (selectați o fază)**: permite consultarea și vizualizarea notelor aferente fazei selectate; notele afișate în acest tabel sunt preluate direct din fazele ciclului de lucru, mai exact din tabul *Note*;                
> **Lista note semnalare**: permite introducerea și consultarea notelor aferente declarației curente.     

### Semnalări anterioare 

Acest tab permite vizualizarea tuturor semnalărilor anterioare aferente fazei selectate.  

### ExtraData

> *Lista extra data (selectați o fază)*: permite gestionarea extra datelor aferente fazei selectate;       
> *Lista extra data semnalare*: permite gestionarea extra datelor aferente declarației care se execută.       

Funcționarea și layout-ul formului pot fi modificate în [Resurse de producție](/docs/production/mes/production-resources).