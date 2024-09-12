---
title: Parametri
sidebar_position: 3
---

În această fereastră se poate insera și se pot salva parametrii utili lansării ordinelor planificate. 

În secțiunea **Ordine de producție**, cu ajutorul flag-ului 'Generare ordine în SL pentru operații externe', se poate stabili ca în cazul în care în lista fazelor ordinului planificat de producție care se lansează este inserată o fază externă, să fie generat un ordin în sistem lohn pentru faza externă.  De obicei acest flag este lasat activ.

În secțiunea **Cereri de achiziție** se poate:

- insera, cu ajutorul combo box-ului, tipul cererii de achiziție care trebuie să fie generată de lansarea ordinelor planificate de achiziții. În această combo box este propus automat tipul cererii de achiziții deja inserat în parametri Necesar Materiale;

- activând flag-ul 'Rotunjire CdA la întreg superior', ca procedura de lansare a ordinului planificat de achiziție să rotunjească la întreg superior cantitatea care se inserează în linia cererii de achiziție care se generează din lansarea ordinelor planificate de achiziții, unde sunt prezente cantități cu zecimale;

- stabili metoda de grupare: activând flag-ul 'Grupează mai devreme', procedura de lansare efectuează o grupare a ordinelor planificate de achiziții generate pentru același articol; în câmpul 'Pentru o perioadă de zile de' se inserează numărul de zile până la care se poate efectua gruparea, considerând datele prevăzute pentru recepția articolelor, deci datele pentru sfârșitul ordinului planificat de achiziție;

- stabili, în cazul în care nu este prezent furnizorul ordinului planificat de achiziții, dacă să fie acceptate ordinele fără furnizor, să fie ignorate ordinele fără furnizor sau să fie acceptat ca furnizor cel care este inserat în câmpul următor;

În secțiunea **Ordine în sistem lohn** se poate:

- stabili, cu ajutorul combo box-ului 'Tip ordin' și câmpului 'An', dacă ordinul în SL de generat trebuie să fie de tip Deschis sau Închis și din ce an trebuie să fie;

- stabili metoda de grupare: activând flag-ul 'Grupează ordinele aceluiași terț', procedura de lansare să efectueze gruparea ordinelor planificate în sistem lohn, inserând în același ordin în SL articolele care trebuie să fie lucrate de același terț;

- stabili, în cazul în care nu este prezent terțul ordinului planificat în sistem lohn, dacă să se ignore ordinele fără terț sau să accepte ca terț cel care este inserat în câmpul următor.

În ribbon bar este prezent butonul pentru salvarea parametrilor inserați.






