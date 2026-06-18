---
title: Faktor korekcije prosečne dnevne potrošnje
sidebar_position: 6
---

Prosečna dnevna potrošnja (ADU) bafer artikla navedena je u tabeli DDMRP parametara za svaki artikl i svaku logističku jedinicu (distributivni centar, hub ili fabriku).

Putem ove tabele moguće je definisati multiplikativni koeficijent prosečne dnevne potrošnje koji će se primenjivati na određene datume sa vrednostima većim ili jednakim nuli.

Postupak **Ažuriranja vrednosti zona bafera** artikla na tim datumima uzimaće u obzir vrednost prosečne dnevne potrošnje iz tabele DDMRP parametara, pomnoženu sa koeficijentom iz ove tabele, a zelena, žuta i crvena zona biće izračunate na osnovu tog proizvoda (postupak neće menjati ADU vrednost u DDMRP parametrima).

Ovaj parametar služi za privremeno prilagođavanje uobičajene vrednosti prosečne dnevne potrošnje, u slučaju kada je unapred poznato da će doći do značajnih, ali kratkoročnih promena u potražnji, koje ne predstavljaju trajnu i strukturnu promenu. Primeri takvih situacija su promotivne kampanje, uvođenje novih proizvoda ili povlačenje starih proizvoda.