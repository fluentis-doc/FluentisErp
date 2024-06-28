---
title: Tab Înregistrare
sidebar_position: 2
---

În prima secţiune din tab-ul ‘Înregistrare', prezent doar pentru înregistrările TVA, se face referire la detaliul TVA al documentului pe care îl înregistraţi. În cazul inserării manuale a unei noi înregistrări, secţiunea poate fi completată în mai multe moduri:

- registrul client/furnizor/agent atribuit înregistrării nu are nici un analitic de contrapartidă predefinit şi nici cota TVA standard: în acest caz utilizatorul alege tipul operaţiei TVA (vezi mai jos detaliul), analiticul de referinţă al liniei şi cota TVA. În acest moment aplicația va extrage sumele din totalul documentului/înregistrării inserat în antet pentru a atribui valorile relative liniei. Utilizatorul le va putea modifica şi va putea continua cu noi inserări, care vor urma aceeaşi logică de inserare, doar că valoarea propusă va fi calculată pe baza diferenţei care lipseşte pentru a acoperi totalul înregistrării

- registrul client/furnizor/agent prevede analitic de contrapartidă predefinit şi/sau cota TVA: după inserarea tipului TVA, aplicația va propune analiticul de contrapartidă şi/sau cota TVA aşa cum a fost predefinită; valorile vor fi inserate ca în cazul precedent, extragând sumele din totalul documentului/înregistrării care apoi vor putea fi modificate manual: următoatea linie, din nou va propune analiticul/cota din registru şi valoarea obţinută din reziduu până la acoperirea totalului documentului/înregistrării

- registrul client/furnizor (nu este gestionat pentru agenţi) prevede o listă cu conturi analitice de contrapartidă, nici un analitic de contrapartidă predefinit şi cota TVA predefinită: în acest caz aplicația va propune direct în secţiunea TVA lista cu conturile analitice de contrapartidă predefinite, fiecare cu relativa cotă TVA detaliată sau cu cota predefinită din registru, iar utilizatorul va trebui să insereze manual sumele pe fiecare linie. În acest caz, adăugarea manuală a unei noi linii nu va fi urmată automat de propunerea analiticului, ci numai a cotei TVA, extragând valoarea rămasă până la acoperirea totalului documentului/înregistrării.

Lista cu tipuri TVA, un tabel fix din sistem, prevede următoarele situaţii:

**Generic**: este tipul standard, suficient în majoritatea cazurilor. Acest tip de linie este considerat în câteva proceduri TVA ca mişcare mărfuri.

**Destinat revânzării**: de utilizat pentru achiziţiile care sunt bază de calcul pentru procentele care vor fi aplicate la distribuirea TVA (de ex. pentru supermarketinguri sau farmacii: acestea nu aplică TVA articol pe articol, pentru că le este permis să facă un total unic al vânzărilor pentru sfârşitul perioadei şi să împartă sumele în proporţie cu articolele achiziţionate în perioadă).

**Rotunjiri**: este vorba de rotunjiri care nu privesc TVA, cum sunt facturile telefonice. Utilitatea acestei specificaţii este minimă, oricum analiticul relativ este inserat după logica expusă mai sus.

**Vânzări TVA 74Ter**: este vorba despre un tip de mişcare specific agenţiilor de voiaj, pentru care data competenţei TVA este cu 30 de zile după data operaţiei (vânzările sunt realizate azi, iar TVA va trebui vărsată în lichidarea din luna următoare). Pentru aceste linii este aplicată gestiunea TVA a 74Ter cu lichidare TVA periodică relativă.

**Revânzare**: este vorba despre vânzările pentru care aplicația va aplica calculul distribuției TVA.

**Operaţie neagricolă**: este vorba despre un tip de mişcare specific pentru societăţile în regim agricol.

**Serviciu**: este vorba despre un tip de mişcare specific, utilizat pentru identificarea liniei care derivă dintr-o achiziţie/vânzare de servicii, element important în anumite proceduri TVA.

Dintre câmpurile succesive, din gridul TVA, menţionăm:

**% nedeductibil**: este preluat din cota TVA inserată în linie. Nu recomandăm forţarea manuală, operaţia corectă este modificarea cotei TVA.

**TVA**: acest câmp poate fi forţat manual; se poate întâmpla ca documentul de achiziţie să aibă o rotunjire incorectă iar utilizatorul trebuie să înregistreze documentul exact cum l-a primit.

**Total valută/Total** sunt câmpuri calculate şi mememorizate la nivelul bazei de date

**De la dată competenţă/La dată competenţă**: sunt datele pentru competenţa economică, fundamentale pentru calcularea automată a rectificărilor şi integrărilor, atât la nivelul bilanţului infraanual, cât şi a celui contabil. Acest interval de date este gestionat, pentru fiecare utilizator, în 3 moduri diferite: ‘Sfârşit exerciţiu' (data iniţială este propusă pe baza datei documentului iar cea finală ca dată pentru sfârşitul exerciţiului: opţiune nerecomandată), ‘Zilnică' (cu care ambele date sunt inserate pe baza datei documentului) şi ‘Nici o dată pentru tip cont serviciu', opţiune recomandată. În acest caz, aplicația nu va propune nici o dată pentru conturile analitice economice care prevăd în tipul contului flag-ul ‘serviciu', dar va obliga utilizatorul să insereze manual întervalul de date corect (în timp ce în celelalte cazuri va propune acceaşi dată document în ambele date). În acest mod vom fi siguri că utilizatorul gestionează corect intervalul de date de competenţă, de exemplu pentru conturile analitice ale asigurărilor, ale chiriilor, ale abonamentelor.

**Perioadă**: este perioada de referinţă TVA pentru înregistrare, obţinută în concordanţă cu tipul lichidării şi data competenţei TVA. Câmpul utilizat efectiv în lichidare, oricum, este data competenţei TVA.

**Dată competenţă TVA**: câmpul este propus pe baza şablonului contabil, în mod normal identic cu data înregistrării pentru achiziţii şi data documentului pentru vânzări (dacă mişcarea este vânzare 74Ter atunci este data documentului + 30zile). Aceasta este data de bază pentru raportul Lichidare TVA periodică.

**Competenţă plafon**: această dată este propusă identică cu data documentului pentru toate cotele TVA care prevăd gestionarea plafonului TVA.

**Notă var. ani prec**.: câmpul este activ doar pentru înregistrările a căror tip document are activ flagul ‘Notă variaţie'. Indică faptul că linia pentru credit note face referire la anii precedenţi anului documentului, pentru calculul câmpului listei clienţi/furnizori.

**Dată ref. notă var**.: câmpul este activ doar pentru înregistrările a căror tip document are activ flagul ‘Notă variaţie'. Serveşte pentru indicarea datei de referinţă a notei.

**Diviziune**: câmpul este vizibil doar dacă şablonul prevede gestionarea diviziunilor. În acest caz va fi posibilă divizarea aceleiaşi înregistrări TVA pe mai multe diviziuni ale societăţii.

Note ulterioare:

- liniile TVA cu baza de impozitare 0 nu pot fi salvate, cu excepţia cazului în care şablonul contabil permite acest lucru (flag ‘Permite conturi analitice cu valore 0')

- rotunjirile TVA sunt gestionate pe fiecare linie, în timp ce normele prevăd ca acest calcul să fie efectuat pe baza de impozitare care grupează toate liniile cu aceeaşi cotă TVA: este posibil, deci, să fie o diferenţă datorată doar gestionării rotunjirilor (acest lucru este valabil pentru inserarea manuală a unei înregistrări contabile: contabilizările automate de achiziţii şi vânzări efectuează deja calculul corect) faţă de documentul din înregistrare. După relevarea diferenţei, soluţiile sunt ori să forţați manual o linie TVA ori să apăsaţi butonul pentru recalcularea TVA, situat în antet, pentru ca aplicația să alinieze automat ultima linie pentru fiecare cotă prezentă.

 

Al doilea grid din tab ‘Înregistrare' se referă la **Registrul jurnal**: fiecare  înregistrare din contabilitatea generală trebuie să aibă linii în această secţiune pentru a putea fi salvată. În cazul înregistrărilor cu TVA, această parte este calculată, pe baza tipurilor de sume și a datele încărcate în gridul TVA; în cazul înregistrărilor de plată/încasare, în schimb, sumele depind de plăţile încărcate în tab ‘Plăţi'; în alte cazuri, în schimb, liniile şi sumele vor fi gestionate, în general, de utilizator, ţinând cont că:

- șablonul poate propune o listă cu conturi analitice preinserate (ex.: şabloane retribuţii angajaţi): în acest caz, utilizatorul va trebui să intre pe fiecare rând pentru a insera sumele în secţiunea corectă. În momentul salvării, dacă şablonul nu autorizează, conturi analitice nevalorizate vor fi şterse automat.

- în cazul înregistrării simple ‘debit/credit' se poate codifica un şablon specific, care prevede deja conturile analitice de utilizat cu tipul sumei ‘Tot. doc./Înregistrare' pentru ca utilizatorul doar să scrie suma în câmpurile total din antet şi, ulterior, aplicația să le pună automat în debit/credit, pe baza şablonului.

- fiecare nouă inserare manuală a liniilor va acoperi eventualul dezechilibru prezent în înregistrare: amintim că înregistrările dezechilibrate nu pot fi salvate dacă acest lucru nu a fost abilitat în şablon.

Alte câmpuri disponibile:

**Șablonul** poate să conțină detaliile valutei (dată schimb, valoare schimb, sumă valută): suma în valută este întodeauna încărcată în valoare absolută (semnul debit/credit în deviza societăţii defineşte şi semnul său); câmpurile în valuta şi în deviza societăţii pot fi independente între ele nerecalculând sumele când procedura de modificare lansează mesajele de confirmare.

**De la/La data competenţei**: acest interval de date, cum am menţionat în secţiunea TVA, este fundamentală pentru gestionarea înregistrărilor de ajustare, atât pentru bilanţurile infranuale, cât şi pentru bilanţul contabil. Poate fi gestionat, pentru fiecare utilizator, în 3 moduri: vedeţi, vă rog, notele inserate anterior.

**Diviziune**: poate fi prezent dacă a fost setat în şablon: util pentru a subdivide aceeaşi înregistrare pe mai multe diviziuni;

**Descriere detaliu**: poate fi prezent dacă a fost setat în şablon (recomandăm setarea implicită în toate): şi acesta poate fi gestionat automat în şablon cu notele (1) – (2) … etc. Menţionăm codurile (8)-(9) relative la liniile clienţi/furnizori pentru închiderea angajamentelor contabile.

**Dată valuta banca**: utilă pentru gestionarea raportului extras de cont bancar din modulul ‘Conturi curente'. Câmpul poate fi automatizat faţă de numărul de zile setat, în fiecare registru bancă, pentru fiecare şablon contabil relativ.

**Num. linie**: utilă pentru înregistrările lungi (ex. salarii) pentru menţinerea ordinii de inserare a diverselor conturi analitice.

**Ref. manuală angajamente**: poate fi prezent dacă a fost setat în şablon: util pentru a lega manual liniile contabile fără să mai treceţi prin gestiunea angajamentelor deschise.

**Cont analitic de contrapartidă**: poate fi prezent dacă a fost setat în şablon: nu recomandăm utilizarea lui. Gestiunea automată în înregistrările TVA prevede, pentru liniile clienţi/furnizori, atribuirea analiticului de cost/venit cu valoare mai mare, în timp ce, pentru liniile de cost/venit/TVA contrapartida va fi analiticul client/furnizor.

Alte note pentru secţiune:

- utilizatorul şi din înregistrările TVA poate forţa manual liniile din registru jurnal: În mod normal recomandăm să aliniaţi datele pornind direct de la TVA. Eventuale forţări pot fi resetate apăsând butonul pentru recalcularea registrului jurnal.

- în şablonul contabil, în particular pentru toate şabloanele TVA, pentru linia cu ‘Tot. Doc./înregistrare' se inserează contul generic al clienţilor/furnizorilor, care va fi substituit cu analiticul atribuit înregistrării: această substituţie va fi efectuată doar dacă în parametrii contabili, secţiunea lista conturi clienţi/furnizori, este autorizat tipul de cont relativ.






