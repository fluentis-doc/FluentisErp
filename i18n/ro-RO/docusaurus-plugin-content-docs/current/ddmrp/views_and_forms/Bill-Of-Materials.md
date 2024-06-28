---
title: Listă componente DDMRP
sidebar_position: 8
---

Form-ul afișează structura unui produs și diferă de cel pentru gestionarea listelor de componente din Fluentis deoarece prezintă informații care au sens doar într-un mediu DDMRP (acest form nu permite modificarea unei liste de componente).

Articolele gestionate pe stoc DDMRP sunt evidențiate prin pictograma *coș cu trei culori* și prezintă informații specifice cum ar fi ADU, DLT, Zona roșie, Zona galbenă, Zona verde, Capital circulant.

Aceste valori sunt cele valabile astăzi, conform tabelului **Parametri DDMRP**, în timp ce pentru capitalul circulant se dorește doar evidențierea faptului că valoarea se referă la articol și nu la stocul necesar pentru a realiza produsul pentru care este vizualizată lista componentelor. Prin urmare, valoarea este determinată de necesarul tuturor articolelor care au nevoie de articolul pe stoc. Valoarea capitalului circulant afișată este cea relativă la ultimul calcul efectuat, așadar, pentru a vă asigura că este actualizată, trebuie să lansați procedura corespunzătoare de calcul.

Formul permite lansarea procedurii [**Calcul DLT (lead time disociat)**](/docs/ddmrp/procedures/DLT-calculation), procedurii [**Calcul zone**](/docs/ddmrp/procedures/zones-calculation), procedurii [**Actualizare consum mediu zilnic (ADU)**](/docs/ddmrp/procedures/ADU-update)și procedurii [**Calcul valori stocuri**](/docs/ddmrp/procedures/inventory-value).

Vizualizarea DDMRP a listei componentelor este utilă când se fac simulări pentru verificarea variațiile DLT și capitalului circulant (utilizați raportul *Capitalului circulant* pentru o analiză mai detaliată).

*Notă*:  
Pentru unele articole care nu sunt stocuri DDMRP este oricum afișat DLT-ul lor. Aceasta se întâmplă pentru acele articole care sunt evidențiate în roșu, adică cele care se află pe calea critică a unui produs finit.

Motivul este că unele dintre acestea sunt stocate în centrele de distribuție, deci pentru a calcula DLT-ul în centrele de distribuție trebuie să adunăm timpul de transport de la fabrică cu timpul necesar pentru realizarea produselor.

Pentru unele articole care nu sunt produse finite, acest lucru se datorează faptului că pentru a calcula DLT-ul unui buffer DDMRP, procedura trebuie să calculeze acest timp și pentru articolele care se află pe *calea critică* a bufferului respectiv.

Procedura pentru calcularea DLT identifică toate articolele care se află pe căile critice ale tuturor listelor de componente prezente în sistem (deci nu doar cele de articole buffer DDMRP).

La vizualizarea listelor de componente DDMRP, articolele de pe orice cale critică sunt evidențiate în roșu, deci în vizualizarea unei liste de componente pot exista mai multe ramuri evidențiate în roșu, fie pentru că produsul pentru care se vizualizează lista poate avea mai multe căi critice (a căror valori DLT sunt deci egale), fie pentru că unele ramuri sunt părți din căile critice ale altor produse.

Reducerea timpului de livrare decuplat (DLT) a produsului pentru care se vizualizează lista de componente poate fi realizată doar creând un stoc DDMRP pentru unul dintre articolele evidențiate în roșu care se află pe calea critică a acestuia (această precizare este necesară deoarece în unele cazuri pot exista mai multe ramuri roșii ale listei, unele dintre ele evidențiind căile critice ale altor produse). Deci, acest tip de vizualizare permite identificarea rapidă a articolor pe stoc care pot reduce timpul de livrare a produsului finit.

Vizualizarea capitalului circulant permite identificarea poziției stocurilor care reduc simultan timpul de livrare și de reducere a capitalului circulant implicat pentru a obține acest rezultat (vedeți raportul *Capital circulant*).

Costul unitar afișat pentru toate articolele este cel utilizat în ultimul calcul al *Capitalului circulant* mediu investit în stocurile DDMRP (mediu, ultim, standard) și ține cont doar de costurile materialelor și de prelucrările externe în sistem lohn, adică costuri atribuite doar furnizorilor externi (consultați secțiunea referitoare la acest calcul).

*Notă*:  
Pentru articolele în sistem lohn, costul unitar al prelucrărilor este dedus prin scăderea din costul articolului a costului componentelor sale din listă de componente. Înmulțindu-l cu stocul mediu (zona roșie + zona verde / 2) obținem valoarea Capitalului circulant mediu investit în stoc.

*Notă*:  
Valoarea capitalului circulant afișată în listă ar putea să nu fie corectă deoarece se referă la ultimele valori găsite. Dacă valorile zonelor bufferelor s-au modificat sau s-a schimbat valoarea costului unitar după acest calcul, ceea ce este afișat nu este actualizat.

Pentru a fi siguri că vizualizați valoarea corectă și actualizată, lansați procedura de calcul a costului capitalului circulant (calcul valori stocuri).