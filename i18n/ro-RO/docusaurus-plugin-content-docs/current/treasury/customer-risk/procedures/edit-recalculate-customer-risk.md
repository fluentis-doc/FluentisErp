---
title: Recalculează risc client
sidebar_position: 1
---

Cele două ferestre afișează situația totală a riscului pentru un anumit client:**Recalculează risc client** este o simplă cerere a situației actuale a clientului, în timp ce fereastra pentru modificarea procedurii **Utilizare credite **permite memorizarea fiecărui calcul efectuat și afișarea istoricului său.

Detaliem, în continuare, lista cu câmpurile prezente în fereastră, care este similară celei din fereastra Expunere clienți.

În antet sunt prezenți parametrii de calcul: codul clientului, data începerii calculului (setată implicit în parametrii modulului Risc client), data finală de referință (ziua curentă), numărul de zile de întârziere pentru efecte (setate în parametrii modulului), flag-ul cu care sunt considerate angajamentele asociate înregistrărilor provizorii. După ce utilizatorul apasă butonul pentru calcul, apar următoarele valori:

**Fact. 12L**: reprezintă facturarea (din aria vânzări, facturi de vânzare) din cele 12 luni precedente datei de referință;

**Factuare an**: reprezintă facturarea (din aria vânzări, facturi de vânzare) de la începutul anului;

În secțiunea**Situație angajamente deschise  **vor fi vizibile totalurile debit/credit și soldul relativ la angajamentele deschise;

În secțiunea **Plăți din înregistrări prov**. vor fi vizibile eventualele sume de plată inserate în înregistrările provizorii;

În secțiunea **Situație sold contabil** vor fi vizibile totalurile debit/credit și soldurile din contabilitatea generală;

**Sold angajamente/contabil**: propune din nou totalurile debit/credit calculate din angajamente sau din sold, așa cum sunt afișate în secțiunile precedente;

**Facturi de contabilizat**: sunt sumele facturilor (a Tipurilor de factură asociate la credit) listate dar încă necontabilizate;

**Avize de facturat**: sunt sumele avizelor (a Tipurilor de aviz asociate la credit) listate dar încă nefactuarate;

**Ordine de executat**: sunt sumele ordinelor (a Tipurilor de ordine asociate la credit) listate, confirmate dar încă neexecutate;

**Efecte emise**: sunt sumele efectelor (din modulul portofoliu efecte) emise și contabilizate, dar încă neprezentate;

**Efecte **prezentate allo sconto-al sbf-all'incasso: sunt sumele efectelor prezentate dar care au data scadenței (plus zilele parametrilor inserați în antetul calculului) superior datei de referință;

Secțiunea **documente neîncasate**: sunt afișate documentele neîncasate necontabilizate, sau (dacă flag-ul este inserat) și cele deja contabilizate;

Din suma valorilor precedente este calculat Riscul client, care comparat cu creditul acordat, va da depășirea creditului.

Câmpul **Scadent **afișează suma angajamentelor deschide dar deja scadente, ca ulterior element de analiză a situației clientului.

RIBBON BAR: reprezinta meniul cu butoanele de executie, pentru fiecare operatie in parte aferentă fiecarei ferestre din aria in care se lucreaza. Lista functionalitatilor posibile conține:



| Functie | Functionalitate |
| --- | --- |
| Salvează | Buton, prezent în fereastra de modificare a unui credit deja calculat, permite memorarea rezultatului obținut. |
| Calculează | Buton pentru calcularea situației totale a riscului pe client. |






