---
title: Antet
sidebar_position: 2
---

În această fereastră sunt gestionate toate caracteristicile din antetul avizului de livrare, deci datele relative la terțul inserat, propuse automat de procedură (inserate anterior în registrul terțului), dar care pot fi modificate de utilizator.

**Adresa terțului**: aceste câmpuri nu pot fi modificate de utilizator;

**Deviza** **: este propusă automat deviza inserată în registrul terțului; poate fi modificată de utilizator;

**Schimb** **: reprezintă rata de schimb asociată devizei selectate. Dacă deviza este identică cu deviza societății, rata de schimb este 1;

**Transport** **:  este propus automat codul transportului inserat în registrul terțului; acest câmp preia datele din tabelul 'Transport' din setările generale, dar se poate modifica;

**Expediție: **este propus automat codul expediției inserat în registrul terțului; acest câmp preia datele din tabelul 'Expediție' din setările generale, dar se poate modifica;

**Ambalaj** **: este propus automat codul ambalajului inserat în registrul terțului; acest câmp preia datele din tabelul 'Ambalaje' din setările generale, dar se poate modifica;

**Utilizator** ****: în acest combo box, utilizatorul poate insera codul operatorului care a inserat avizul de livrare; acest câmp preia datele din tabelul 'Angajați' din modulul 'Personal';

**Aspect exterior bunuri** ****: în acest câmp utilizatorul poate insera codul aspectului exterior al bunurilor, preluând datele din tabelul 'Aspect exterior bunuri' din setările generale;

**Destinatar** **: este propus automat codul destinatarului inserat în registrul terțului, în tab 'Expediție', dar se poate modifica. De asemenea, se pot edita manual datele sau se pot căuta cu ajutorul helpului registrelor care se deschide cu dublu clic în câmp;

**Destinație** **: este propus automat codul destinației inserat în registrul terțului, în tab 'Expediție', dar se poate modifica. De asemenea, se pot edita manual datele sau se pot căuta cu ajutorul helpului registrelor care se deschide cu dublu clic în câmp;

**N. colete** **: în acest câmp se inserează numărul de colete pentru întregul aviz de expediție;

**Volum, Greutate netă, **Greutate brută**** **: în aceste câmpuri se inserează informațiile relative la greutăți și volume pentru întregul aviz; combo box-urile pot fi utilizate pentru inserarea unităților de măsură preluate din tabelul 'Unități de măsură'  din setările generale;

**Transport în sarcina** ****: cu aceste radio butoane, utilizatorul poate decide cum să insereze modalitatea de transport care poate fi în sarcina expeditorului, destinatarului sau a transportatorului. Dacă este 'Expeditor', atunci va fi inseraăe automat, în tabul inferior, adresa societății; dacă este 'Destinatar', atunci va fi inserată automat adresa terțului; dacă este 'Transportator', atunci  se pot insera o serie de date relative la transport;

**Stare aviz** ****: cu aceste 2 flaguri se poate identifica statusul avizului, care poate fi listat (după ce a fost lansat raportul) și descărcat (după ce a fost descărcat avizul din gestiune). Dacă avizul nu a fost listat, descărcarea sa nu este posibilă;

**Tip de plată** **: în această secțiune este un grid în care este afișată situația relativă la plăți pentru terțul documentului. Datele propuse de procedură provin din registrul terțului, din tab 'Plăți' și pot fi modificate de utilizator.

În partea infererioară sunt 3 câmpuri în care sunt calculate automat 'Baza de impozitare', 'TVA' și 'Total livrare'.

După inserarea datelor în antet și după salvarea documentului, se activează și tasta numită 'Livrări prevăzute', cu care se poate deschide o nouă fereastră numită  [Executare din ordin](/docs/production/delivery-note/insert-delivery-note/execute-from-order), în care utilizatorul poate vizualiza toate ordinele în sistem lohn care au încă linii parțial sau complet de livrat și din care este posibilă crearea avizului de livrare în sistem lohn. În această fereastră, utilizatorul poate selecta și apoi transfera liniile articolelor pe care dorește să le insereze în avizul de livrare în SL tocmai generat. În acest moment utilizatorul poate închide fereastra de executare, se poate întoarce în fereastra Nou aviz de livrare pentru a completa informațiile relative la aviz (eventuale loturi, gestiune, șablon, preț, etc.), utilizând tabul 'Livrări'.






