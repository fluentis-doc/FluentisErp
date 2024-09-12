---
title: Antet şi descriere mişcări
sidebar_position: 1
---

Descriem în continuare diversele câmpuri prezente în antetul înregistrării, în ordinea încărcării lor.

**Data înregistrării**: într-o înregistrare nouă aceasta va fi propusă ca fiind data curentă care poate fi modificată ţinându-se cont de ordinea cronologică a numerotării în jurnal, de eventualele perioade listate definitiv şi de prezenţa parametrilor. Importanţa acestei date este fundamentală pentru că în aplicație nu există necesitatea *schimbării exerciţiului*: pornind de la data de înregistrare, aplicația va căuta anul parametrilor contabili de referinţă (identificând intervalul de date în care se găseşte) şi din acesta va prelua celelalte intervale de date de control (date competenţă curentă şi date perioadă curentă). Aceasta este data de bază pentru raportul registru jurnal şi pentru extrasele de cont contabile. În cazul în care, este apăsat butonul pentru crearea unei *Noi înregistrări* din cea existentă, este posibilă setarea parametrilor utilizator astfel încât acest câmp să fie propus şi în cea nouă.

**Număr înregistrare** este un numărător zilnic al înregistrărilor: univocitatea înregistrării este determinată întodeauna de combinaţia *data înregistrării + număr înregistrare*. Alegerea unui numărător zilnic a fost realizată pentru a da utilizatorului libertatea de a înregistra în mai multe date. Acest număr de înregistrare este gestionat automat de aplicație: în particular, în momentul salvării este atribuit numărul definitiv corect, recuperând eventual spaţiile din numerotare. Ştergerea unei înregistrări cu data X va crea un spaţiu în numerotarea din această dată: numărul va fi recuperat doar în cazul inserării/modificării unei înregistrări cu aceasta dată. În cazul unei înregistrări provizorii acest număr va merge în progresie negativă, începând de la numărul -1000, pentru a notifica utilizatorul că este vorba de o înregistrare cu acest status; rapoartele şi căutările contabile sunt setate pentru a filtra implicit doar înregistrările definitive.

**Data competenţei** este data de referinţă pentru bilanţul exerciţiului: în mod normal este egală cu data înregistrării, cu excepţia înregistrărilor de ajustare ale bilanţului şi relativele închideri/deschideri conturi,  care pot avea data înregistrării şi în iunie însă vor avea 31/12 – 01/01 pentru data competenţei. Atenţie: această dată NU poate fi utilizată pentru relevarea facturilor de primit pentru sfârşitul anului. Recomandăm să fie lăsată întotdeauna egală cu data înregistrării: în contabilitate sunt rapoarte care funcţionează pentru data înregistrării, altele pentru data competenţei, altele care dau posibilitatea utilizatorului să filtreze pentru ambele, evident cu rezultate diferite în funcţie de filtrele aplicate. În parametrii de gestionare utilizator puteţi să alegeţi ca această dată să fie aliniată automat faţă de data înregistrării.

**Analiticul** atribuit înregistrării: acest câmp este obligatoriu doar pentru înregistrările TVA, pentru că este legat de registrul clientului/furnizorului atribuit documentului înregistrat. Acest câmp, în mod normal, nu este completat în cazul înregistrărilor de plată/încasare, pentru că, în aceeaşi înregistrare se efectuează N plăţi/încasări pentru subiecţi diferiţi şi acesta este utilizat ca filtru pentru angajamentele deschise în tab ‘Plăţi'. În cazul în care este apăsat butonul pentru crearea unei ‘Noi înregistrări' din această fereastră se pot seta parametrii utilizatorului astfel încât acest câmp să fie propus şi în cea nouă. Şablonul contabil poate să prevadă controlul coerenţei dintre tipul contului inserat în acest punct şi cel prevăzut de şablon: înlocuirea este autorizată pe baza setărilor parametrilor contabili, secţiunea lista conturi clienţi/furnizori.

**Șablon**: este un câmp obligatoriu. Fiecare înregistrare se bazează pe un şablon de referinţă care îi reglează caracteristicile şi funcţionarea. Acest câmp nu mai poate fi modificat după salvarea înregistrării (evident că vor fi blocate alte câmpuri în cazul în care a fost listat definitiv registrul TVA sau jurnalul sau dacă a fost efectuată închiderea automată a conturilor): în cazul în care şablonul nu a fost corect, înregistrarea trebuie ştearsă şi reinserată cu codul corect. În cazul în care este apăsat butonul pentru crearea unei ‘Noi înregistrări' din această fereastră se pot seta parametrii utilizatorului astfel încât acest câmp să fie propus şi în cea nouă.

**Registrul TVA** este preluat din şablonul contabil selectat; poate fi modificat manual de utilizator, dar operaţia nu este recomandată (mai bine codificaţi un şablon nou specific pentru al doilea registru TVA).

**Nr. în jurnal V/C** este un câmp numeric care este gestionat automat de aplicație pentru fiecare registru: la deschiderea ferestrei va fi propus numărul maxim + 1 pentru registrul inserat, apoi, în momentul salvării va fi confirmat sau nu în funcţie de alte salvări efectuate pentru acel registru sau numere de recuperat în jurnal (pentru recuperarea numărului în jurnal: recuperarea se modifică dacă în şablon a fost inserată sau nu blocarea salvării cu numerotarea progresivă sau nu, pentru că cu procedura de blocare va fi recuperat un număr în jurnal liber cu aceeaşi dată de înregistrare, iar fără blocare va fi propus şi un număr invalid pentru acea dată, cu mesaje care vor avertiza utilizatorul). Câmpul pentru număr în jurnal este dezactivat în cazul înregistrării provizorii.

**Tipul documentului** este propus de aplicație pe baza valorii inserate în şabloanele din contabilitatea generală: se poate modifica, dar este vorba despre o modificare, în mod normal, inutilă (de obicei trebuie inserate documentele înregistrărilor TVA, dar acesta este deja în şablon, în timp ce toate celelalte mişcări vor avea întodeauna un document de tip ‘generic').

**Data documentului** este obligatorie sau nu, în funcţie de setările şablonului contabil (flag dată document în al doilea tab): această dată nu poate fi mai mare decât data înregistrării şi trebuie să se afle în intervalul de date relativ la perioada curentă pentru exerciţiul de referinţă al înregistrării. În cazul în care este apăsat butonul pentru crearea unei ‘Noi înregistrări' din această fereastră se pot seta parametrii utilizatorului astfel încât acest câmp să fie propus şi în cea nouă.

**Numărul documentului** este un câmp alfanumeric de 20 caractere: în funcţie de setările şablonului, este blocată inserarea aceluiaşi număr, al aceluiaşi an (luat din data documentului), al aceluiaşi tip (câmp tip  document) pentru acelaşi cod inserat în câmpul cont analitic din antetul înregistrării (această blocare este inserată implicit în ficare şablon contabil, dar poate fi dezactivată). În cazul în care este acelaşi număr/an/analitic dar tipul este diferit, utilizatorul va fi avertizat cu ajutorul unui mesaj. Mesajul este lansat şi în cazul în care aceeaşi referinţă este salvată într-o înregistrare provizorie.

**Comandă** este activă doar dacă şablonul contabil prevede gestionarea comenzilor; această comandă este de referinţă pentru toată înregistrarea, dar va fi posibilă reatribuirea valorilor în tabul ‘Comenzi'. Completarea câmpului prevede utilizarea help-ului comenzi de vânzare.

**Deviza** este propusă din registrul atribuit înregistrării şi, ca alternativă, din deviza societăţii, dar poate fi modificată. După salvarea înregistrării, câmpul nu mai poate fi modificat.

**Data valutei** este data de referinţă a schimbului, cea inserată în tabelul schimburi valutare. Aplicația va citi în acest tabel ultima dată anterior inserată acesteia. În parametrii de administrare utilizator, această dată poate fi inserată ca fiind data înregistrării (default) sau ca data documentului. Este prevăzut şi un parametru utilizator de avertizare când nu este setat schimbul la data înregistrării (deci este utilizat un schimb anterior).

**Schimb** conţine valoarea schimbului inserată în tabelul schimburi valutare: este valoarea INVERSĂ faţă de cea care se citeşte în mod normal în schimburi valutare. Această valoare poate fi forţată manual de utilizator (caz obişnuit: şabloane de plată/încasare în deviză, valoarea schimbului aplicat de bancă nu va fi niciodată cel oficial al schimburilor internaţionale).

**Total deviză/total document** sunt legate între ele prin intermediul schimbului, drept pentru care în înregistrările în euro este indiferent în ce câmp scrieţi suma. Şablonul contabil poate să prevadă ca acestea să fie actualizate automat în momentul modificării datelor inserate în gridul TVA. Salvarea înregistrării poate fi blocată dacă această sumă nu este egală cu datele TVA ale înregistrării.

**Totalul TVA** este întodeauna actualizat automat de aplicație, nu trebuie inserat manual.

În partea inferioară a înregistrării contabile, în tab înregistrare, este prezentă **descrierea înregistrării contabile**: este o notă care se poate insera în şablonul contabil cu ajutorul codurilor numerice (1) (2) … (10) (codurile (8) și (9) sunt utilizate doar în detaliile descrierilor conturilor analitice, în secţiunea registru jurnal). Cu dublu clic pe câmp, puteţi să deschideţi o fereastră de căutare în notele codificate (procedură prezentă în ‘Instrumente'- 'Utilitare'): modificarea manuală a acestei descrieri va fi eventual resetată cu confirmarea din partea utilizatorului, în momentul modificării unui câmp gestionat automat în note.

Tot în această secţiune sunt prezente alte câmpuri rezumat ale datelor TVA şi ale înregistrării: importante sunt câmpurile dedicate vizualizării dezechilibrelor din înregistrare, lucru nepremis în mod normal (dar care poate fi abilitat în setările şablonului în uz). Dezechilibru va fi propus ca valoare în liniile noi din contabilitate care vor fi inserate manual în înregistrare.

Procedura creare înregistrare contabilă este structurată în următorul mod:

> **Salvează** - Buton pentru salvarea înregistrării.  
> **Nouă înregistrare** - Buton pentru creare unei înregistrării noi.  
> **Parametri de inserare** - Deschide fereastra cu parametri înregistrării.  
> **Deschide registru** - Deschide registrul analiticului selectat, iar dacă acesta lipseşte, deschide fereastra pentru căutarea unui alt registru.

Opțiuni disponibile:
> **Document Manager** - Buton pentru deschiderea gestiunii documentelor. 
