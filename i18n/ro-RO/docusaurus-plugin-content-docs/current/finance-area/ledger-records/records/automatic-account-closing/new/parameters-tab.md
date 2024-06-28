---
title: Tab parametri
sidebar_position: 2
---

La deschiderea ferestrei **Contabilitate-Închidere conturi**, în primul tab *parametri*, este necesar să inserați filtrele înregistrărilor și codurile analiticelor și șabloanelor care vor fi utilizate în înregistrările registrului jurnal.

Primele trei câmpuri (data închiderii, versiune, descriere) afișează data în care se efectuează operația, numărul progresiv al închiderii și modul în care utilizatorul definește operația (de obicei închidere conturi an…). Anul contabil al parametrilor contabili care se inserează este util operării redeschiderii înregistrărilor de ajustare, de activat în partea inferioară a ferestrei cu flagul *Transfer înregistrări de ajustare*: se referă la gestionarea, după redeschiderea conturilor, a mișcărilor pentru reatribuirea cheltuielilor/veniturilor înregistrate în avans la cheltuielile/veniturile relative.

În filtrele după data înregistrării și competenței este necesară inserarea parametrilor pentru identificarea  înregistrărilor care vor fi preluate în soldul contabil: în particular, datele de competență vor fi relative la perioada bilanțieră (1/1/….-31/12/….), în timp ce câmpul *la data înregistrării* poate să se deplaseze în exercițiul succesiv pentru a include înregistrările de rectificare: recomandăm să nu inserați filtrul pentru datele înregistrării.

Apoi se poate selecta flagul pentru gestionarea soldului închiderii și redeschiderii pe deviza mișcării: acest lucru înseamnă că programul inserează o linie pentru fiecare deviză a mișcării analiticului, menținând corect totalul în deviză al societății. Această posibilitate este necesară pentru a garanta corectitudinea soldurilor inițiale ale raportului *Extras de cont in valuta*.

După aceste date este necesar să inserați referințele la șabloanele contabile, data de înregistrare și conturile de utilizat în operațiile de închidere si de redeschidere. Aceste date (cu excepția datelor de înregistrare) sunt preluate automat dacă au fost inserate în tabelul *Parametrii contabili*, tab *Conturi*. Flagul *Virament înregistrări de ajustare* va crea automat redeschiderea costurilor/veniturilor rectificate cu procedura *Înregistrări de ajustare*.

Acum puteți salva setările cu butonul relativ pentru a le activa pe celelalte. Verificați, mai întâi, setările tabelului *Tipuri de cont*: în particular, tipurile de cont client-furnizor-agent-bănci, pe lângă flagul pentru coloanele relative, trebuie să aibă un altul în una din cele două coloane relative la activul și pasivul patrimonial. Puteți să reintrați în procedură și să apăsați butonul *preluare conturi analitice* pentru ca programul să calculeze soldul fiecărui analitic și să afișeze datele în taburile *profit și pierderi* și *patrimoniale*. Dupa ce sunteți siguri de rezultate puteți să treceți la faza succesivă a procedurii: rientrând în tab parametri, puteți să apăsați butonul *Crează înregistrarea de închidere*, care va crea înregistrările contabile relative și va selecta flagul *Contabilizată*.

Opțiuni disponibile:

> **Salvează** - Buton pentru salvarea antetului închidere conturi, activ după inserarea descrierii.  
> **Preluare valori conturi analitice** - Buton pentru calcularea soldului fiecărui analitic și pentru afișarea datelor în taburile *profit și pierderi* și *patrimoniale*.  
> **Crează înregistrarea pentru închiderea conturilor** - Buton pentru creare înregistrării pentru închiderea conturilor.  
> **Restaurează contabilizarea** - Buton pentru restaurarea contabilizării închiderii conturilor.