---
title: Registre TVA
sidebar_position: 9
---

Raportul registrelor TVA trebuie să fie făcut pentru fiecare registru: nu este permisă listarea globală a tuturor registrelor perioadei.

**Perioadă TVA**: la deschiderea ferestrei acesta poate fi luna precedentă celei actuale în cazul perioadei lunare sau trimestrul în cazul în care periodicitatea lichidării inserată în parametrii contabili este trimestrială. Următorul câmp este pentru anul de referință și apoi este registrul TVA de listat: acest câmp nu este obligatoriu dacă utilizatorul cere raportul registrului global.

**Diviziune**, în mod normal, nu se utilizează: registrul TVA se listează pe societate, deci este permisă setarea acestui filtru doar în cazul raportului provizoriu. Câmpurile succesive afișează ultimul număr de pagină listată pentru registrul inserat: această informație este preluată din tabelul registre TVA.

Flagul **Vizualizează antet** este setat implicit. Cu ajutorul său este preluat numele registrului TVA al societății și numărul/anul paginilor.

Flagul **Vizualizează tip document** va adăuga, în referințele documentelor, și tipul documentului: poate fi util în cazul în care facturile de vânzare au mai multe numerotări pentru același jurnal TVA.

Titlul registrului este preluat din numele jurnalului TVA și va fi cel preluat în raport cu opțiunea *Vizualizează antet*.

Cu opțiunea *Definitivă* aplicația va modifica perioada de referință pentru a o face să corespundă cu cea succesivă ultimei perioade listate definitiv: în plus, vor fi dezactivate filtrul după diviziune și numărul de copii de listat. Executarea previzualizării raportului definitiv nu va bloca perioada și nu va actualiza numărătorii: doar listarea efectivă va bloca perioada/registrul în contabilitate și va actualiza numărătorul de pagini al tabelului  registre TVA. În procesul de listare/previzualizare aplicația va verifica dacă sunt goluri în numerotare și dacă ordinea cronologică a fost respectată, și va bloca listarea definitivă în cazul în care, pentru jurnalul TVA, nu a fost dezactivat flagul de control. Listarea definitivă NU este necesară pentru listarea raportului Lichidare TVA periodică.

Raportul registru rezumat grupează totalurile cotelor pe fiecare registru, cu un rezumat final pentru toate achizițiile și pentru toate vânzările.

Opțiuni disponibile:
> **Vizualizează** - Buton pentru previzualizarea raportului Registru TVA.  
> **Listează** - Buton pentru listarea raportului Registru TVA.