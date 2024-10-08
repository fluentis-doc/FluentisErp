---
title: Registrul Număr Seriale (Anagrafica Serial Number)
sidebar_position: 8
---

:::important La ce serve
Registrul număr seriale al Fluentis este un modul esențial pentru gestionarea detaliată a numărului serial, permițând companiilor să urmărească articole individuale printr-un cod de identificare unic. Această funcționalitate răspunde unor cerințe specifice de trasabilitate și siguranță, fiind deosebit de importantă pentru articole critice sau de mare valoare, unde este esențial să monitorizăm fiecare piesă în parte, nu doar o cantitate totală.

Utilizatorul are posibilitatea de a căuta un număr serial specific și de a-i vizualiza detaliile cu un simplu dublu clic. În această secțiune, este posibil să modificați informații cheie, cum ar fi codul clientului, codul furnizorului și starea numărului serial, care poate fi anulat, închis forțat sau rezervat. În plus, registrul oferă detalii despre documentele de încărcare și descărcare asociate numărului serial, permițând o analiză completă a utilizării sale în timp.

Abordarea sistematică a gestionării numerelor seriale nu numai că optimizează procesele interne, dar asigură și conformitatea cu reglementările în vigoare, făcând din acest registru un instrument indispensabil pentru companiile moderne care urmăresc să maximizeze eficiența operațională și calitatea serviciului.
:::

Această fereastră vizualizează detaliul lotului și este compusă din 4 secțiuni diferite: 

### Antet Număr Serial

În această secțiune sunt afișate, cu posibilitatea de a modifica unele dintre ele, datele principale referitoare la lot și în special:

**ARTICOL**: în cele 3 câmpuri corespunzătoare sunt afișate clasa, codul și descrierea articolului la care se face referire prin Numărul Serial. Este vorba cu siguranță de un articol cu indicatorul *Gestionare NS (Gestione SN)* activat în *Registru articol* > tab *Loturi/SN (Lotti/SN)*, altfel nu ar fi fost posibil să se execute încarcarea lotului pentru articolul respectiv;

**Variante**: în cele 2 câmpuri corespunzătoare sunt afișate codul și descrierea variantei articolului la care se face referire prin Numărul Serial, dacă este prezent;

**Cod lot**: în acest câmp apare codul Lotului din care face parte Numărul Serial. Articolul la care se referă Numărul Serial ar putea fi, de asemenea, gestionat pe Loturi; astfel, în acest caz, un lot de 100 de bucăți, de exemplu, ar putea consta din 100 de Numere Seriale diferite. Același Număr Serial ar putea, de asemenea, să aparțină unor loturi diferite ale aceluiași articol sau unor loturi de articole diferite;

**Tip Lot (Tipo lotto)**: indică tipul de lot utilizat;

**Tip cod lot**: indică tipul codului de lot cu care a fost generat lotul;

**Codul numărului de serie**: în acest câmp apare Codul Numărului Serial. Este un câmp editabil de către utilizator, deși în timpul operațiunilor de încărcare ar putea fi generat automat pe baza unor reguli stabilite în *Tipul numărului de serie* asociat articolului. Se introduce mai întâi un cod și o descriere a *tipului codului numărului serial*, se salvează linia și apoi se decide ce parametri se doresc utilizați pentru compunerea tipului de cod al lotului tocmai creat. Pentru fiecare parametru utilizat se poate decide din câte caractere trebuie să fie format și eventual și caracterul de umplere de utilizat. De exemplu, cu parametrul 'Număr progresiv' setând caracterul de umplere la '0' și Lungimea la '5' vor fi create Numere Seriale începând cu 00000, apoi 00001, apoi 00002 și așa mai departe. *Tipul codului Numărului Serial* trebuie apoi să fie asociat registrului articolului în câmpul corespunzător situat în tab-ul *Loturi/Număr Serial (Lotti/SerialNumber)*, astfel încât în procedurile care creează automat codul *Număr Serial* pentru articolul respectiv, Numărul Serial să fie generat conform regulilor stabilite în *tipul codului Numărului Serial* asociat articolului. Câmpul este alfanumeric și poate atinge lungimea maximă de 50 de caractere;

**Tipul numărului de serie**: indică tipul codului Numărului Serial cu care a fost generat Numărul Serial;

**Dată început**: în acest câmp apare de obicei data la care a fost încărcat Numărul Serial, editabil de utilizator. Dacă Numărul Serial a fost încărcat prin înregistrarea de magazin, această dată este propusă identică cu data la care a fost creată înregistrarea; dacă Numărul Serial a fost încărcat prin încărcarea unei DDT de achiziție sau înregistrarea unui retur de muncă, această dată este setată ca fiind identică cu data DDT de achiziție sau de muncă (cu excepția cazului în care utilizatorul nu a modificat-o manual în cadrul DDT); dacă Numărul Serial a fost încărcat prin înregistrarea unei raportări de producție, această dată este propusă ca fiind identică cu data raportării de producție;

**Dată scadenţă**: în acest câmp apare data de expirare a Numărului Serial, editabil de utilizator, care este calculată, în timpul creării lotului și astfel a înregistrării corespunzătoare mișcării de magazin, pornind de la data de început și adunând zilele de valabilitate a Numărului Serial introduse în tab-ul Loturi/SN al registrului articolului;

**Cod client**: în acest câmp apare codul *Lotului clientului*, de obicei numele pe care clientul îl atribuie lotului. Este un câmp editabil de către utilizator și nu poate fi generat automat în timpul operațiunilor de încărcare. De asemenea, poate atinge lungimea maximă de 50 de caractere și poate fi identic și pentru loturi diferite de articole diferite;

**Cod furnizor**: în acest câmp apare codul *Lotului furnizorului*, de obicei numele pe care furnizorul îl atribuie lotului. Este un câmp editabil de către utilizator și nu poate fi generat automat în timpul operațiunilor de încărcare. De asemenea, poate atinge lungimea maximă de 50 de caractere și poate fi identic și pentru loturi diferite de articole diferite;

**Furnizor**: în acest câmp se va indica contul/subcontul/descrierea furnizorului;

**Anulat**: dacă este activat, indică faptul că Numărul Serial a fost anulat;

**Închis forţat**: dacă este activat, indică faptul că Numărul Serial este închis forțat;

**Rezervat**: dacă este activat, indică faptul că Numărul Serial a fost rezervat.

### Încărcare

În această secțiune sunt afișate datele fundamentale ale documentelor care au contribuit la efectuarea încărcării Numărului Serial. De obicei apare întotdeauna detaliul *Înregistrării de magazin* care a încărcat Numărul Serial.

*Cu un dublu clic pe linia documentului, este posibil, în conformitate cu drepturile utilizatorului, să deschideți documentul corespunzător*.

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost angajată în document;

**Unităţi de Măsură**: indică unitatea de măsură care a fost utilizată în document;

**Numar colete**: indică numărul de coleți;

**Dată inserare**: indică data inserării;

**Închis forţat**: dacă este activat, indică faptul că Numărul Serial a fost închis forțat;

**Document referinţă**: în acest câmp este afișat tipul de document care a generat încărcarea Numărului Serial. Acesta poate fi o înregistrare de magazin, o DDT de achiziție sau o întoarcere de muncă;

**Înregistrare**: în aceste câmpuri apar numărul și data documentului;

**Gestiune**: în aceste câmpuri apar codul și descrierea magazinului pe care a fost încărcat Numărul Serial;

**Locaţie**: în aceste câmpuri apar codul și descrierea locului de depozitare;

**Şablon**: în aceste câmpuri apar codul și descrierea cauzei utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: în aceste câmpuri apar contul, subcontul și descrierea referitoare la client sau furnizor.

### Descărcare

În această secțiune sunt afișate datele fundamentale ale primului document, în ordine cronologică, care a angajat Numărul Serial. Aceste date sunt afișate într-o grilă în care apar următoarele coloane:

**Cantitate**: în acest câmp este afișată cantitatea lotului care a fost angajată în document;

**Unităţi de Măsură**: indică unitatea de măsură care a fost utilizată în document;

**Dată inserare**: indică data inserării;

**Document referinţă**: în acest câmp este afișat tipul de document care a angajat pentru prima dată Numărul Serial. Acesta poate fi un ordin de producție, un ordin client, o DDT de vânzare, o factură de vânzare, o listă de preluare, o DDT de livrare de muncă, un retur de muncă;

**Înregistrare**: în aceste câmpuri apar numărul și data documentului;

**Gestiune**: în aceste câmpuri apar codul și descrierea magazinului pe care a fost încărcat Numărul Serial;

**Locaţie**: în aceste câmpuri apar codul și descrierea locului de depozitare;

**Şablon**: în aceste câmpuri apar codul și descrierea cauzei utilizate pentru crearea acelei mișcări de încărcare;

**Client/Furnizor**: în aceste câmpuri apar contul, subcontul și descrierea referitoare la client sau furnizor.

*Cu un dublu clic pe linia documentului, este posibil, în conformitate cu drepturile utilizatorului, să deschideți documentul corespunzător.*