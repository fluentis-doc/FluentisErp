---
title: Planificare generală
sidebar_position: 2
---

:::important Utilizare
Planificarea generală în Fluentis este un proces care operează pe capacitate infinită, ceea ce înseamnă că planificarea nu ține cont de limitările fizice în centrele de lucru sau în resursele disponibile. Această metodologie permite programarea operațiunilor productive cu o anumită flexibilitate.

Planificarea poate fi efectuată utilizând două proceduri distincte:*cel mai devreme* și *cel mai târziu*.  Procedura *cel mai devreme* începe operațiunile cât mai repede posibil, în timp ce procedura *cel mai târziu* planifică operațiunile cât mai târziu posibil fără a compromite termenele limită. Aceste abordări permit o analiză optimizată a cerințelor productive și gestionarea timpilor de lucru în funcție de prioritățile companiei și necesitățile operaționale.
:::

Reprezintă algoritmul de Master Scheduling, adică programatorul de producție care se ocupă de implicarea comenzilor selectate și analiza *fezabilității productive* în funcție de compoziția sa structurală. 
Acest tip de planificare, realizabil cu strategia de analiză *cel mai devreme* sau *cel mai târziu*, oferă posibilitatea de a verifica necesitatea unei capacități productive suplimentare, evidențiind supra-alocarea centrelor de lucru critice, permițând astfel operatorului să decidă dacă să crească capacitatea internă, să achiziționeze capacitate externă sau să mute sarcinile în timp, acceptând eventual întârzieri la livrare.

Din una sau mai multe comenzi selectate, în funcție de parametrii de planificare setați în tab-ul corespunzător, procedura va crea ordinele planificate ale celor trei tipuri prevăzute: producție, achiziție și sistem lohn.

Ordinele planificate create se pot vizualiza în form-ul [Caută ordine planificate](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders).

## Comenzi

*Butoane specifice*:

> **Planificare generală**: permite sistemului să programeze comenzile selectate;  
> **Deschide căutare ordine planificate**: acest buton permite deschiderea form-ului [Căutare ordine planificate](/docs/planning/ms-master-scheduling/planned-orders/search-planned-orders). Dacă, înainte de a apăsa acest buton, este selectat un rând de comandă, form-ul ordinelor planificate se va deschide deja pre-filtrat pe acea comandă;               
> **Schimbă data finală prevăzută cu data sugerată**: acest buton permite modificarea datei sugerate;  
> **Secvență comenzi**: permite accesul la secvența comenzilor, în care se vor putea vizualiza comenzile pe baza secvenței care le-a fost atribuită, inclusiv printr-un grafic.

*Filtre specifice*:

**Tip comandă**: permite selectarea tipului de comandă care se dorește să fie vizualizat, și anume: comenzi monoprodus, comenzi multiprodus sau ambele;

**Locație producție**: permite vizualizarea comenzilor în funcție de locul unde au fost produse;

**Întârziate/Expirate/Lansate/Esecutive**: aceste opțiuni permit alegerea dacă se doresc vizualizate și comenzile întârziate în raport cu data sau expirate și doar dacă în [Parametrii generali de planificare](/docs/planning/ms-master-scheduling/general-schedule) este setată opțiunea *planificare comenzi lansate sau executive*, altfel cele două câmpuri nu vor fi active; altfel, așa cum este explicat în articolul despre parametrii de planificare, în tab-ul comenzi se vor putea vedea doar în starea de neexaminată sau de programată, dar acestea asumă starea de lansate și/sau executive. Dacă această opțiune nu este setată, nu se vor putea vizualiza comenzile în cadrul acestui tab.

*Campuri specifice*

**Data sugerată**: așa cum este explicat în articolul referitor la parametrii generali de planificare, activând un anumit flag numit [Control documente întârziate cu ATP](/docs/planning/ms-master-scheduling/general-schedule), programatorul va efectua un raționament astfel încât, dacă chiar și unul dintre ordinele care sunt programate și generate se dovedește a fi întârziat în raport cu data prevăzută, sistemul va șterge toate ordinele create și va reporni de la data MS care este definită întotdeauna în parametrii și care se activează doar setând flag-ul verificare documente întârziate cu ATP și va propune noua dată pentru comenzile chiar în câmpul *Data sugerată* prezent în tabelul de rezultate.

### Procedura Planificare generală

Odată selectate comenzile care se doresc a fi programate, se va activa butonul **Planificare generală** prezent în ribbon bar-ul form-ului, iar făcând clic pe acel buton, sistemul va proceda cu planificarea comenzilor selectate.

Pentru a vizualiza toate programările efectuate și ordinele de producție corespunzătoare create pentru fiecare comandă, este suficient să se mute în tab-ul **Istoric**.

:::danger Notă    
Comenzile create manual sunt întotdeauna produse independent de disponibilitatea articolului de produs.    
:::   

## Parametrii Planificare generală

:::note Notă
Înainte de a continua cu planificarea, este important să se seteze în cadrul acestui tab parametrii care trebuie urmați pentru a efectua planificarea.
::: 

**Programare până la**: indică data până la care sistemul va lua în considerare documentele introduse; este posibil să se introducă o valoare implicită în luni în câmpul **Număr maxim de luni pentru planificare** prezent în [Parametrii MS](/docs/configurations/parameters/production/mps-parameters);       

**Materiale/Resurse**: prin aceste opțiuni se decide dacă se va programa atât materialele, cât și resursele, deci atât lista de componente, cât și ciclul de lucru; cu flag-ul *Resurse* activ, vor fi considerate, în planificare, și centrele de lucru;

**Ordini planificate de**: prin cele 3 opțiuni se indică dacă se dorește ca sistemul să genereze toate cele trei tipuri de ordine prevăzute, deci producție, achiziție și sistem lohn; în acest mod, aceste tipuri de ordine vor avea legătura directă cu comanda; (de exemplu, dacă nu se pune flag-ul pe Achiziție, dar se menține flag-ul pe Execuție MRP, sistemul va crea totuși și ordinele de achiziție, dar acestea vor fi neslegate de comandă);

**Generează doar ordine planificate pe nivele**: în acest caz se vor indica nivelurile (1-2...) pentru care se dorește generarea ordonărilor planificate;

**Ordini furnizori** sau **Cereri de achiziție** și **Ordine client**: în acest caz, dacă există documente în sistem fără dată de angajament și disponibilitate, se poate spune sistemului să considere ca dată cea care se poate indica în câmpul corespunzător, sau să spună sistemului să nu ia în considerare acest tip de documente;

**Grupare ordine planificate după**: în cazul în care se lucrează pe comandă, în acest câmp trebuie setată opțiunea *Nici o grupare*; altfel, se poate selecta prin combo-ul corespunzător tipul de grupare care se intenționează a fi aplicat, dar în acest caz legătura între ordinele planificate și comandă s-ar pierde;
**Grupare cel mai târziu** sau **Cel mai devreme**: în acest caz se poate alege dacă se va grupa ordinele cel mai târziu (deci în funcție de ultimul) sau cel mai devreme (care este cel mai recomandat) și în câmpul următor numit **Pentru o perioadă de zile** se va indica numărul de zile în care se va face gruparea;

**Consideră cantitățile în funcție de lotul economic/Consideră multiplii lotului economic**: setând primul parametru se indică că în timpul planificării se dorește să se țină cont și de lotul economic al articolului, și în consecință se va activa flag-ul care va permite să se decidă dacă se doresc a fi luate în considerare și multiplii lotului economic (ambele aceste date sunt setate în cadrul [Parametrii MRP](/docs/configurations/parameters/production/mrp-parameters/search-mrp-parameters) ai articolului);

**Compacteză/separă ordine**: în acest caz se alege dacă se dorește să se păstreze sau nu o zi de marjă între finalizarea producției ordinii de 1 nivel și cea a nivelului următor;

**Execuție MRP după planificare** și **Articole pe stoc**: în acest caz se indică că se dorește ca sistemul să analizeze totuși cu MRP toate codurile de articol care sunt gestionate pe baza cererii pentru acest produs finit. MRP rulează pe toate articolele din *Lista de componente* a acestui articol, care au o politică de gestionare diferită de cea pe comandă, deoarece pentru toate acele articole se poate dori verificarea acoperirii sau se pot genera ordinele planificate fără legătură cu comanda; în acest caz, MRP ia în considerare parametrii indicați în tab-ul *Parametrii generali* al **planificării**;      

**planificare pe zona de livrare**: setând acest flag, sistemul va verifica când comanda trebuie livrată în funcție de zona sa de livrare și va programa comanda mai întâi în raport cu ziua livrării;

**Control documente întârziate cu ATP**: dacă se activează acest flag, se va activa simultan și câmpul următor numit **Data început MS** și sistemul va efectua următorul raționament: dacă în planificarea ordonărilor pe care le generează, chiar și unul dintre acestea are o dată de început inferioară zilei de azi, adică dacă sunt întârziate cu producția acestei comenzi, activând acest flag, sistemul va șterge toate ordinele planificate pe care le-a generat și va reporni de la data care este setată de operator în câmpul **Data început MS** și va reporni să programeze cel mai devreme de la acea dată;

**Lansare automată ordine planificate**: dacă se decide activarea acestui parametru, programatorul, pe lângă generarea ordonărilor conform planificării, le va elibera automat, astfel încât ordinele planificate de producție vor deveni ordine de producție, ordinele de achiziție vor deveni RDA (cereri de achiziție) și contul de lucru va deveni ordine de sistem lohn;

**Planificare cel mai devreme** sau **Cel mai târziu:**: cu aceste opțiuni se poate stabili dacă planificarea trebuie să fie efectuată pe baza ultimei date de producție a ordonărilor care trebuie programate, deci pe baza ultimei comenzi de produs, sau cel mai devreme pe baza primei comenzi de produs;

**planificare comenzi lansate sau executive**: în mod implicit, atunci când o comandă este programată, aceasta este încă vizibilă în tab-ul comenzi și de acolo, fiind în stare programată, este posibil să fie reselectată și reprogramată de câte ori se dorește; cu toate acestea, atunci când se încep eliberarea ordonărilor planificate, comenzile își schimbă starea din programate în lansate sau executive și nu mai sunt vizibile în tab-ul comenzi; pentru a putea continua să le vezi în tab-ul comenzi și după ce au devenit lansate sau executive, este suficient să activezi acest flag pentru a le putea vedea și reprograma exact așa cum se întâmplă pentru comenzile în stare programată;

**Versiune**: programatorul va programa într-o versiune care este setată în acest câmp, dacă în comanda de producție nu găsește o versiune definită;

**Consideră disponibilitatea**: dacă acest flag este activ, indică programatorului că în procesul de planificare trebuie să țină cont de disponibilitatea provenită din magazinele indicate în tabelul de mai jos, care sunt cele definite anterior în [Parametrii MS](/docs/configurations/parameters/production/mps-parameters);  

**Magazine**: conține magazinele se activează doar dacă este setat flag-ul **Consideră disponibilitatea**; în grilă apar magazinele care au fost introduse în fereastra de [Calcul Disponibilitate](/docs/erp-home/registers/items/calculate-availability);         

**Consideră disponibilitatea la data cererii sau minimul în perioada**: aceste flag-uri se activează doar dacă este activ flag-ul **Consideră disponibilitatea**; la data cererii înseamnă că programatorul trebuie să considere disponibilitatea în momentul în care trebuie să producă comanda, în timp ce consideră minimul în perioada, programatorul va lua în considerare disponibilitatea minimă în perioada până la data setată inițial în parametrul Programare până la;

**Consideră loturi cu status nedisponibil**: și acest flag se activează doar dacă este activ flag-ul **Consideră disponibilitatea**; dacă este activ, programatorul va trebui să considere loturile în stare indisponibilă la data respectivă;      

**Consideră disponibilitatea și pentru primul nivel**: și acest flag se activează doar dacă este activ flag-ul **Consideră disponibilitatea**; dacă este activ, programatorul va trebui să considere disponibilitatea și pentru primul nivel (deci pentru articolul prezent în comanda de producție);

**Consideră și disponibilitatea negativă**: dacă este activ, programatorul va trebui să considere și disponibilitățile negative în momentul planificării pentru articolul de prim nivel; de fapt, acest flag poate fi activat doar dacă este activ flag-ul **Consideră disponibilitatea și pentru primul nivel**;      

**Consideră disponibilitatea provenind din**: aceste flag-uri devin activabile doar dacă este activ flag-ul **Consideră disponibilitatea** și permit programatorului să considere disponibilitățile provenind din achiziții, vânzări, din magazin, din sistem lohn și din producție;

**Reintegrare stoc minim articol** ți **Reintegrare punct de reordonare articol**: primul flag se activează doar dacă se setează al doilea; aceste două flag-uri indică că programatorul va trebui să prevadă reintegrarea punctului de reordonare stabilit pentru acel articol și dacă se dorește și reintegrarea stocului minim al articolului; ambele aceste date sunt introduse în momentul creării articolului în tab-ul [Aprovizionare](/docs/erp-home/registers/items/create-new-items/item-registry/procurement);

**Consideră indice de acoperire**: dacă flag-ul este activ, programatorul va trebui să țină cont de indicele de acoperire care este stabilit întotdeauna în tab-ul *Aprovizionare* al articolului;

**Consideră și alternativele materialelor**: dacă este activ, în momentul planificării comenzii, programatorul va trebui să considere și alternativele materialelor în cazul în care nu există suficientă disponibilitate pentru materialul indicat în listă; este activat doar dacă este activ flag-ul **Consideră disponibilitatea**;            

**Consideră doar materiale alternative**: se activează doar atunci când flag-ul **Consideră și alternativele materialelor** este activ; dacă este activ acest flag, se verifică mai întâi disponibilitatea componentelor alternative în funcție de prioritatea acestora, dacă nu este suficientă, se verifică apoi disponibilitatea componentei principale; este activat doar dacă este activ flag-ul **Consideră disponibilitatea**;    

:::note Notă
Materialele alternative sunt introduse în tab-ul **Alternative**, referitor la materialul principal, prezent în [Lista de componente](/docs/erp-home/registers/production/bill-of-materials/assemblies/structure-management).
:::

**Consideră etapele alternative**: dacă este activ, acest flag indică că în momentul planificării trebuie să se considere și etapele de lucru alternative; activând acest flag se va activa câmpul editabil următor numit **Toleranță pentru ocuparea C.d.L. %**, în care se va putea indica toleranța de ocupare a centrului de lucru în %, peste care programatorul va trebui să considere etapele alternative față de etapa implicită.

## Monitor

În acest tab, prin activarea sau dezactivarea flag-urilor prezente, utilizatorul are posibilitatea de a alege vizualizarea rezultatelor planificării în tab-ul **Istoric**.

Se poate decide dacă să se vizualizeze **Calendarele** luate în considerare (Calendarul de *Fabrică* și calendarul *Capacităților productive*); se poate decide ca să fie semnalat dacă în planificare au fost prezente **Articole fără** *Parametri MRP*, fără *Listă de componente* sau *Ciclul de lucru*, fără *Furnizor preferențial* (în cazul ordonărilor de achiziție), fără *Terț preferențial* (pentru ordonările de sistem lohn) și fără indicația stocului minim pentru toate acele articole care sunt gestionate pe stoc. Pentru fiecare **Comandă de producție** se poate alege să se vizualizeze în istoric, *Numărul de rânduri programate* și detaliul acestor rânduri, comenzile întârziate și comenzile expirate.

În ceea ce privește **Ordinele planificate**, se poate alege să se vizualizeze în istoric, *Numărul de ordine generate* și *Detaliul* acestora, ordinele *Întârziate* și *Expirate*, *Alternativele materialelor*; se poate alege de asemenea să se fie avertizat în cazul în care există **Ordine planificate fără** *Material*, fără *Etape de lucru*, fără *Furnizor* (pentru achiziție) și fără *Terț* (pentru sistem lohn).

**Legendă**: flag-urile active permit primirea avertizării și detaliilor referitoare la elementele selectate.

## Istoric

În tabelul acestui tab sunt vizualizate toate informațiile rezumative referitoare la planificarea comenzii.

**Progr. sched.**: vizualizează un simplu progresiv al operațiunii de planificare lansate de utilizator;

**Operator**: vizualizează utilizatorul care a lansat planificarea;

**Nr. erori**: vizualizează numărul erorilor înregistrate în timpul procedurii de planificare;

**Data început**: vizualizează data și ora de început a procesului de planificare;

**Data finală**: vizualizează data și ora de finalizare a procesului de planificare;

**Datele programate provenind de la**: vizualizează originea precisă a datelor programate;

**Previzional**: vizualizează dacă datele provin din Previziile de Vânzare sau din Planul Principal de Producție;

**Perioada**: vizualizează tipul de previziune, săptămânală sau lunară;

**Zi**: vizualizează ziua săptămânii desemnată ca zi în care trebuie să cadă data de finalizare a comenzii de producție programate direct din Definiția MPS.

Toate celelalte coloane ale grilei vizualizează setările utilizate în tab-ul **Parametri** al *Planificării generale* referitoare la rândul selectat.

**Rezultatul planificării**

În funcție de rândul selectat în grilă, în această secțiune vor apărea detaliile solicitate de utilizator în tab-ul **Monitor**.

În rezultatul planificării, se pot vedea numărul comenzii care a fost programată, numărul ordonărilor planificate care au fost generate din acea comandă și detaliul ordonărilor planificate care au fost generate.

Pentru detalii despre funcționarea comună a form-urilor, consultați linkul [Funcționalități, butoane și câmpuri comune](/docs/guide/common).