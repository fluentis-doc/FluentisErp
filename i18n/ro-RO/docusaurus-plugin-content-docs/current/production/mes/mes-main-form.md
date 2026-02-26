---
title: MES - Manufacturing Execution System
description: Ghid complet Fluentis MES pentru declararea activităților de producție și monitorizarea OEE.
keywords:
  - MES
  - Manufacturing Execution System
  - Declarație producție
  - OEE
  - Control calitate
  - Loturi și serial number
sidebar_position: 5
schema: TechArticle
tags:
  - Producție
  - MES
  - Control calitate
  - OEE
  - Gestiune
last_update:
  author: Fluentis Documentation Team
---

# MES - Manufacturing Execution System

:::important Utilizare
Formularul principal al Modulului de Execuție a Producției (MES) din Fluentis este proiectat pentru a optimiza și simplifica procesul de declarare a activităților de producție.

Permite operatorilor să:

- Monitorizeze în timp real resursele de producție.
- Introducă și să modifice date referitoare la fazele de lucru și cantitățile produse.
- Utilizeze **Barcode Tokenizer** pentru a accelera introducerea datelor.
- Aplice controale specifice pentru a garanta corectitudinea înregistrărilor.
- Repartizeze timpii și cantitățile conform diferitelor logici de analiză.

Abordarea integrată îmbunătățește vizibilitatea operațională, optimizează fluxurile de lucru și crește productivitatea companiei.
:::

### Butoane specifice

#### Navigabilitate 
- **Precedent**: trece la tabul anterior.  
- **Succesiv**: trece la tabul următor.  
- **Actualizează**: actualizează toate datele form-ului (util după modificarea resursei).  
- **Șterge selecția**: anulează selecția fazelor din tabel principală.  

#### Confirmare semnalare  
- **Începe**: creează o semnalare de deschidere.  
- **Avansează**: creează o semnalare de avansare.  
- **Suspendă**: creează o semnalare de întrerupere.  
- **Reia**: creează o semnalare de reluare.  
- **Închide**: creează o semnalare de închidere.  
- **Anulează**: resetează datele introduse în MES.

## Form principal

Form-ul principal este compus dintr-o secțiune cu următoarele câmpuri și un tabel care conține fazele în lucru: 

- **Cod de bare**   
Majoritatea operațiunilor ce pot fi efectuate în Fluentis MES pot fi facilitate și accelerate datorită utilizării câmpului *Cod de bare*, care, dacă este configurat corespunzător, prelucrează inteligent datele obținute prin citirea codului de bare și introduce automat valorile în câmpurile corespunzătoare.    
Acest lucru aduce un mare avantaj operatorului atât ca viteză de introducere, cât și ca eficiență, deoarece va trebui să citească datele mereu în același câmp *Cod de bare* fără a avea problema schimbării focusului.  
Configurarea se face în secțiunea: Tabele > Setări generale > Barcode tokenizer.
Astfel, câmpul *Cod de bare*, în MES, poate fi folosit de operator pentru a adăuga faze individuale sau grupuri de faze, sau de exemplu chiar fazele unui întreg ordin de producție, sau pentru a încărca loturile și/sau serial number ale materialelor de descărcat, totul doar citind diferitele coduri de bare.  
Pentru informații despre cum să codificați codurile de bare de citit în câmpul **Cod de bare** consultați pagina: [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer)

- **Workstation**      
Procedura este capabilă să recunoască workstation-ul pe care se lucrează și, dacă acestuia i-a fost asociat un centru de lucru va încărca automat toate fazele care erau în lucru pe acel centru de lucru; în acel moment operatorul poate alege să continue cu semnalarea acelor faze sau, de exemplu, să adauge altele.  
Detalii: [Workstation](/docs/production/mes/workstation)

- **Resursă**      
Câmpul *Resursă* este folosit pentru a introduce orice tip de resursă de producție.     
Dacă se introduce o resursă de tip *Centru de lucru*, aceasta va fi înlocuită automat și în câmpul corespunzător *Centru de lucru*, încărcând astfel fazele aferente noului centru introdus.    
Dacă, în schimb, se introduce o resursă de tip *Angajat<!-- Dipendente -->*, aceasta va fi folosită ca utilizator de declarație. Introducerea unei resurse de tip angajat este obligatorie dacă este activ flagul *Operator obligatoriu* prezent în tabul *Generale* al [Resurselor de producție](/docs/production/mes/production-resources).        

- **Centru de lucru**
Indică centrul de lucru pe care operatorul face declarația; este posibilă vizualizarea doar a centrelor de lucru legate de *Workstation*. Dacă *Workstation* nu a fost introdus sau nu a fost asociat niciun *Centru de lucru* la *Workstation*, vor fi vizibile toate *Resursele de producție* de tip *Centru de lucru*.    

- **Faze în lucru**
Fazele pot fi adăugate în tabel în câmpul *Cod de bare*, sau folosind butonul specific *Selectează faze noi* din meniul din dreapta. Tabelul conține o serie de informații referitoare la comanda, ordinul de producție, proiect, variantă etc.  
Toate aceste informații pot fi afișate sau ascunse în tabul *Layout* al [Resurselor de producție](/docs/production/mes/production-resources).   
Pentru rândul selectat, în partea dreaptă a tabelului, este posibilă vizualizarea imaginii implicite introduse în [Registru articol](/docs/erp-home/registers/items/create-new-item); de asemenea, cu dublu click va fi afișată pe tot ecranul. 

### Producție

#### Butoane specifice  

- **Şterge resursa**: permite eliminarea valorii introduse în câmpul *Resursă*;    
- **Selectează faze noi**: permite deschiderea unui ajutor pentru a selecta faze noi de adăugat la cele prezente în tabel principală.  

În cazul unui centru multi-fază, dacă există deja faze (deja începute), se pot adăuga altele doar dacă fazele deja introduse se află în starea *Începută* sau *Suspendată*, altfel este necesar ca fazele să fie aduse mai întâi în starea de întrerupere, apoi se pot adăuga altele.  
Dacă, de exemplu, există o fază în starea *Suspendată* și utilizatorul adaugă o fază neîncepută, procedura va crea automat declarația de început și de întrerupere pentru faza nou adăugată cu aceeași dată și oră. Utilizatorul apoi, cu butonul *Reluare*, va putea continua lucrul pentru toate fazele. Dacă fazele adăugate se află într-o stare diferită de *neîncepută*, acestea vor fi aliniate la starea de *Suspendată*. La *Reluare*, noile faze adăugate vor prelua informațiile de Centru de lucru și Mașină utilizate pentru fazele inițiale.  
- **Șterge faza**: permite eliminarea fazei sau fazelor selectate din tabelul principală.

Tabul **Producție** este dedicat introducerii informațiilor referitoare la timpii de producție / setare și la cantitățile produse / respinse. Acesta este singurul care nu poate fi făcut invizibil și este compus din următoarele câmpuri.

#### Câmpuri specifice  
- **Mașină**: în acest widget, mașina este propusă astfel: dacă faza are o mașină asociată, aceasta este propusă în widget doar dacă în tabelul [Mașini](/docs/configurations/tables/production/machines/), acea mașină are asociat același centru de lucru selectat în MES. În acest caz, utilizatorul poate schimba mașina, dar doar alegând dintre cele din tabelul mașini care au asociat acel centru de lucru. Dacă mașina prezentă pe fază nu se află printre cele asociate acelui centru de lucru în widget nu va fi propusă nicio mașină.           
De asemenea, dacă utilizatorul încearcă să creeze o declarație, va primi un mesaj care îl obligă să introducă o mașină pentru a continua. Dacă fazei nu îi este asociată nicio mașină, nu va fi obligatoriu să o introducă pentru a continua cu declarațiile.        
Dacă sunt selectate mai multe faze simultan, mașina va fi preluată din prima fază selectată (sau din cea cu secvența prioritară dacă este indicată) dintre cele cu același centru de lucru selectat în MES.         
- **Timp setare**: permite introducerea / modificarea manuală a timpului de lucru;   
- **Activitate de setare**: În Declarațiile de producție și în Declarațiile M.E.S. a fost adăugat un indicator pentru *Activitatea de setare*. Flagul este activat (în Declarațiile de producție) și vizibil (Declarații M.E.S.) doar dacă faza declarată, sau prima fază dintr-un grup de faze, prevede utilizarea unei mașini. Activarea flagului pentru o activitate de setare duce la creșterea contorului duratei ca **Timp setare**, altfel creșterea va fi pe contorul **Timp lucru**.        
- **Timp lucru**: permite vizualizarea / modificarea manuală a timpului de lucru; comportamentul poate fi modificat prin flagurile *Inserare manuală timp* și *Timp propus* prezente în [Resursele de producție](/docs/production/mes/production-resources). Timpul este calculat automat ca diferență între timpul declarației actuale și cel al precedentei;                   
- **Cantitate produsă**: permite introducerea cantității produse cu acea declarație;         
- **Cantitate alternativă**: permite introducerea cantității alternative produse cu acea declarație;      
- **Gestiune transfer**: indică depozitul de încărcare a produselor realizate cu declarația;       
- **Șablon transfer**: indică șablonul de încărcare a produselor realizate cu declarația;       
- **Locație transfer**: indică locația de încărcare a produselor realizate cu declarația;       
- **Gestiune transfer rebut**: indică depozitul de descărcare a produselor realizate și respinse cu declarația;       
- **Șablon transfer rebut**: indică șablonul de descărcare a produselor realizate și respinse cu declarația;       
- **Locație transfer rebut**: indică locația de descărcare a produselor realizate și respinse cu declarația;       
- **Defect**: indică defectul pentru descărcarea produselor realizate și respinse cu declarația; se poate activa un control dedicat cu flagul *Defect obligatoriu dacă este declarat rebut* prezent în [Resurse de producție](/docs/production/mes/production-resources);           
- **Motiv întrerupere**: indică motivul de întrerupere folosit în declarație; dacă un operator creează o întrerupere fără a indica motivul suspendării, va fi folosit motivul implicit, indicat în câmpul *Motiv de întrerupere propus* prezent în form [Resurse de producție](/docs/production/mes/production-resources).   
Este posibilă modificarea funcționării și a layout-ului form-ului în [Resurse de producție](/docs/production/mes/production-resources).

### Control de calitate

Permite gestionarea controalelor de calitate asupra articolelor produse sau rebutate.

#### Butoane specifice

- **Selectează articole**: permite selectarea articolelor de inserat în tabelul *Controale de calitate* dintre cele produse sau respinse;       
- **Importă toate**: permite introducerea în tabelul *Controale de calitate* a tuturor articolelor produse sau respinse;     
- **Elimină control**: permite eliminarea controlului selectat;           
- **Duplică test**: permite duplicarea testului selectat;       
- **Elimină test**: permite eliminarea testului selectat.   

Rândurile pot fi introduse în tabelul *Control calitate* cu cele două butoane specifice.          
În acest tabel sunt raportate următoarele date:
- **Clasă**: indică clasa articolului;          
- **Cod articol**: reprezintă codul articolului;          
- **Variantă**: indică varianta articolului;    
- **Detaliu articol aplicabil**: indică cel mai detaliat nivel al articolului care va fi luat în considerare pentru teste (Niciunul, Lot, S.N., U.D.C.). Acesta se selectează în tabul *Control calitate*  [Resurse de producție](/docs/production/mes/production-resources);             
- **Ref. detaliu<!-- Rifer. dettaglio -->**: indică valoarea *Detaliu articol aplicabil*, de exemplu numărul lotului;          
- **U.M.**: indică unitatea de măsură a articolului;    
- **Cantitate**: reprezintă cantitatea articolului;    
- **Rebu**: dacă este activ, indică faptul că respectiva cantitate este de tip rebut; dacă nu este activ, se referă la cantitatea produsă și nu rebutată;             
- **Descriere articol**: indică descrierea articolului;          
- **Descriere variantă**: indică descrierea variantei.      

Dacă în ordinul de producție legat de acea fază, faza este supusă controlului de calitate și a fost deja asociat un plan de control (care este moștenit din faza ciclului de lucru standard, dar poate fi modificat manual atât în ordinul planificat cât și în cel de producție), testele legate de planul de control indicat vor fi raportate automat în tabelul *Teste*.      

**Teste**  
Tabelul conține următoarele câmpuri:       
- **Secvență**: indică secvența testelor de efectuat;          
- **Tip test**: reprezintă codul testului de efectuat;         
- **Descriere tip test**: indică descrierea testului de efectuat;           
- **Categorie instrument**: reprezintă categoria instrumentului utilizat;         
- **Tip valoare**: indică dacă valoarea este de tip *Text*, *Da/Nu* sau *Numeric*;      
- **Tip limită**: permite indicarea unui *Tip limită*; se activează doar dacă *Tip valoare* este *Numeric*;       
- **Valoare unitate de măsură**: indică unitatea de măsură a valorilor;           
- **Valoare nominală**: indică valoarea numerică care trebuie să o aibă testul;      
- **Limită minimă / Limită maximă**: indică limita minimă și maximă de eroare pe care poate avea testul, în procent sau valoare absolută în funcție de flagul *%*; *Limita minimă* se scade din *Valoarea nominală*, iar *Limita maximă* se adaugă;       
- **L. min (toleranță -/+) / L. max (toleranță -/+)**: indică toleranțele la limitele minime și maxime care se adaugă la toleranțele anterioare; poate exista, de exemplu, incertitudinea asupra unității de măsură; este o valoare procentuală;                
- **%**: indică dacă valorile sunt exprimate în procent sau sunt absolute;               
- **Tip control test**: indică tipul de control al testului;        
- **Frecvență**: indică frecvența controlului;       
- **Instrument de măsură**: indică instrumentul utilizat, dacă există valori de măsurat; este compus dintr-un Cod/Categorie;      
- **Valoare măsurată**: indică valoarea măsurată (se folosește dacă există o valoare punctuală);      
- **Media valorilor măsurate**: indică media valorilor măsurate (se completează pe baza valorilor introduse în tabelul **Măsurare valori multiple**);      
- **Rezultat**: indică rezultatul testului și este determinat automat pe baza parametrilor introduși;       
- **Cantitate neconformă**: reprezintă cantitatea care a fost identificată ca fiind neconformă;        
- **Gestiune**: indică gestiunea în care se află articolele neconforme; această valoare este preluată automat în funcție de cât este indicat în *Tipul control articol*;                   
- **Șablon de gestiune pentru articole neconforme**: indică șablonul cu care vor fi descărcate articolele neconforme; această valoare este preluată automat pe baza a ceea ce este indicat în *Tip control articol*. Această mișcare de stoc se face în momentul înregistrării declarației de producție;                       
- **Note**: permite introducerea unei note libere.       

**Măsurare valori multiple**  
Tabelul este folosit în cazul în care sunt înregistrate mai multe valori, iar acestea vor contribui la determinarea *Mediei valorilor măsurate*.
Acesta este compus din următoarele coloane:
- **Secvență**: indică secvența valorilor măsurate;      
- **Poziție**: este un câmp descriptiv ce permite indicarea poziției unde a fost efectuată măsurarea;       
- **Instrument de măsură**: indică instrumentul utilizat pentru acea măsurare;            
- **Valoare măsurată**: indică valoarea înregistrată;            
- **Note**: permite introducerea unei note libere.  


Mai multe detalii despre aria dedicată gestionării calității se găsesc în aria [Calitate](/docs/quality/quality-intro).

### Loturi și S/N

#### Butoane specifice

- **Generează**: permite generarea loturilor și a serial number-urilor;        
- **Șterge**: permite ștergerea lotului / serial number-ului selectat.       

În acest tab este posibilă vizualizarea tuturor articolelor realizate cu indicarea cantităților produse și respinse; de asemenea.De asemenea, în tabelele dedicate se pot introduce / modifica informațiile referitoare la *Loturi* și *Serial number*.

Este posibilă modificarea funcționării și a layout-ului form-ului în [Resurse de producție](/docs/production/mes/production-resources).

### Etichete  
În tabul **Etichete** sunt create automat etichetele aferente articolelor produse.  

#### Butoane specifice  
- **Nouă**: permite crearea unui rând pentru introducerea unei noi etichete;          
- **Șterge**: permite ștergerea rândului etichetei selectate;       
- **Nou UdI**: permite regenerarea codului UdI selectat;      
- **Tipărește selecția**: permite tipărirea doar a etichetelor selectate;       
- **Tipărește tot**: permite tipărirea tuturor etichetelor.          

Cantitatea de articole pentru fiecare etichetă este determinată de informațiile introduse în registrul articolului după cum urmează:
1. Tabul *Ambalare*: ia în considerare UdI și cantitatea introdusă pe rândul cu flagul *Unitate de încărcare obligatorie* activ;       
2. Tabul *Greutate/Dimensiuni*: ia în considerare UdI și cantitatea introdusă în câmpurile *Tip unitate de încărcare* și *Număr articole per unitate de încărcare*;    
3. Tabul *Greutate/Dimensiuni* - *Număr colete*: ia în considerare cantitatea introdusă în *Articole prezente într-un colet*; în acest caz nu va fi propusă UdI.

De asemenea, operatorul poate introduce manual sau în câmpul *Cod de bare* *Loturi* și *Serial number* dacă este necesar.      
Câmpul **Stare raport** poate avea valorile *Netipărit*, *Tipărit* sau *Retipărit* în funcție de numărul de ori în care eticheta a fost tipărită.

Este posibilă modificarea funcționării și a layout-ului form-ului [Resurse de producție](/docs/production/mes/production-resources).     

### Materiale

În tabul **Materiale** sunt redate automat materialele consumate, pe baza cantității articolului părinte care urmează să fie produs și a listei sale de materiale. Doar în cazul în care este activ flag-ul  **Declarație cantitate material obligatorie** prezent în tabul *Generale* în [Resurse de producție](/docs/production/mes/production-resources), materialul va fi propus evidențiat cu galben și cantitate zero, iar operatorul va fi obligat să o introducă manual.   
De asemenea, este posibilă indicarea cantităților rebutate pentru fiecare material în parte, inclusiv gestiunea și șablonul rebuturi; prin intermediul tabelelor corespunzătoare pot fi introduse / modificate informații referitoare la *Loturi* și *Numere de serie* aferente fiecărui material selectat.

### Echipă

#### Butoane specifice 

- **Intră în echipă***: permite introducerea unuia sau mai multor operatori în echipa de lucru;        
- **Ieși din echipă**: permite scoaterea unuia sau mai multor operatori din echipa de lucru;      
- **Substituie operator**: permite înlocuirea unui operator (activ) cu altul, păstrând datele/orele de intrare și ieșire din echipă;        
- **Elimină din echipă**: permite eliminarea rândului operatorului selectat.        

Tabul **Echipă** este compus din două secțiuni:  
- *Listă operatori activi*: permite introducerea și vizualizarea operatorilor activi în declarația de producție; primul operator introdus primește flagul de *Șef de echipă* (care poate fi schimbat manual);            
- *Listă operatori inactivi*: permite vizualizarea operatorilor care nu mai sunt activi (care au lucrat pe această sau aceste faze în declarațiile anterioare).


### Analiză

Tabul este dedicat vizualizării și consultării datelor referitoare la performanța activității de producție; acesta este compus din trei secțiuni:  
- Diagrame OEE
- Diagrame cu bare: **Analiză cantitate** și **Analiză timp**
- Tabele: **Valori cantitate** și **Valori timp** 

**OEE**, **Overall Equipment Effectiveness** (Eficiența generală a resursei productive) este un indicator de performanță (KPI) pentru a măsura capacitatea productivă a unei companii de producție.

Valoarea **OEE** este compusă din următorii trei factori:
- **Disponibilitate operațională (Availability)**: procentul timpului lucrat (B) față de timpul disponibil (A).
Se folosește raportul dintre timpul disponibil de lucru al instalației (A) și timpul real în care instalația a produs (B).
- **Timp de lucru (Performance) - Eficiență**: procentul dintre articolele efectiv lucrate (D) față de articolele teoretic lucrabile (C).
În planificare se calculează articolele lucrabile la regim optim (C), eventualele reduceri ale acestor performanțe indică o scădere productivă (D).
- **Calitatea produsului (Quality)**: este raportul procentual dintre articolele conforme (F) față de articolele produse (E).
Astfel se evidențiază scăderi de productivitate legate de rebuturi sau re-lucrări care afectează ineficiența generală.
- **Eficiență generală (OEE)**: rezultă din calculul celor trei analize anterioare și este dat de: 

OEE = Availability x Performance x Quality x 100 = B/A x D/C x F/E x 100

Indicatorul de **Eficiență generală** poate fi calculat cu sau fără setare.

În secțiunea diagramelor cu bare sunt prezente diagramele **Analiză cantitate** și **Analiză timp** în care pot fi vizualizate datele de cantitate și timp planificate și cele  
realizate declarate până în acel moment.      

În tabelele din ultima secțiune, pot fi vizualizate datele de cantitate și timp planificate și cele realizate declarate până în acel moment, dar sub formă de date tabelare.

Datele raportate în toate secțiunile tabului **Analiză** sunt referitoare la fazele selectate; dacă nu este selectată nicio fază, datele raportate vor reprezenta totalul tuturor fazelor prezente în tabelul *Faze în lucru*.

Este posibilă modificarea funcționării și a layout-ului form-ului în [Resurse de producție](/docs/production/mes/production-resources).  

### Documente și Instrucțiuni operative

Acest tab este compus din secțiunile **Documente** și **Instrucțiuni operative**.

Secțiunea **Documente** este la rândul ei împărțită în:
- **Documente atașate fazei selectate**: permite vizualizarea tuturor documentelor atașate la *Registru articol*, la *Ordin client*, la *Comanda de producție*, la *Ordinul de producție*, conform celor indicate în tabul *Gestionare documente* prezent în [Resurse de producție](/docs/production/mes/production-resources);       
- **Documente atașate semnalării fazei selectate**: permite consultarea sau atașarea directă la declarație a unor documente noi, inclusiv prin drag & drop;       
- **Instrucțiuni operative**: permite vizualizarea tuturor documentelor atașate fazei ciclului de producție.          

Este posibilă modificarea funcționării și a layout-ului form-ului în [Resurse de producție](/docs/production/mes/production-resources).  

### Note

Tabul este compus din două secțiuni:            
- **Listă note (selectează o fază)**: permite consultarea și vizualizarea notelor referitoare la faza selectată; notele vizualizate în acest tabel sunt preluate direct din fazele ciclului de lucru, mai exact din tabul *Anotări*;                
- **Listă note semnalare**: permite introducerea și consultarea notelor referitoare la declarația în curs.     

Este posibilă modificarea funcționării și a layout-ului form-ului în [Resurse de producție](/docs/production/mes/production-resources).  

###  Semnalări anterioare

Acest tab permite vizualizarea tuturor semnalărilor anterioare referitoare la faza selectată.

Este posibilă modificarea funcționării și a layout-ului form-ului în [Resurse de producție](/docs/production/mes/production-resources).  

###  ExtraData

Acest tab este compus din două grile:
- *Listă extra data (selectați o fază)*: permite gestionarea extra datelor referitoare la faza selectată;       
- *Listă extra data semnalare*: permite gestionarea extra datelor referitoare la declarația în curs de executare.       

Este posibilă modificarea funcționării și a layout-ului form-ului în [Resurse de producție](/docs/production/mes/production-resources).

## Rezumat și detalii suplimentare

**MES-ul Fluentis** permite gestionarea completă a declarațiilor de producție, integrând:

- Introducere timpi și cantități.
- Gestionare loturi și serial number.
- Control calitate.
- Analiză KPI prin OEE.
- Gestionare echipă și documentație.

Configurarea avansată a comportamentului form-ului este centralizată în:

- [Resurse de producție](/docs/production/mes/production-resources)
- [Workstation](/docs/production/mes/workstation)
- [Barcode tokenizer](/docs/configurations/tables/general-settings/barcode-tokenizer)
- [Calitate](/docs/quality/quality-intro)

Această integrare garantează trasabilitate, controlul performanțelor și optimizarea proceselor de producție în mediul ERP.