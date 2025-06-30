---
title: Faktor korekcije prosječne dnevne potrošnje  
sidebar_position: 6
---
Prosječna dnevna potrošnja (ADU) buffer artikla navedena je u tablici DDMRP parametara za svaki artikl i svaku logističku jedinicu (distribucijski centar, hub ili tvornicu).   

Putem ove tablice moguće je odrediti multiplikativni koeficijent prosječne dnevne potrošnje koji će se primijeniti na određene datume s vrijednostima većim ili jednakim nuli.     

Postupak **Ažuriranja vrijednosti zona buffer** artikla na tim datumima uzimat će u obzir vrijednost prosječne dnevne potrošnje iz tablice DDMRP parametara, pomnoženu s koeficijentom iz ove tablice, a zelena, žuta i crvena zona bit će izračunate na temelju tog produkta (postupak neće mijenjati ADU vrijednost u DDMRP parametrima). 

Ovaj parametar služi za privremenu prilagodbu uobičajene vrijednosti prosječne dnevne potrošnje, u slučaju da je unaprijed poznato da će doći do značajnih, ali kratkoročnih promjena u potražnji, koje ne predstavljaju trajnu i strukturnu promjenu. Primjeri takvih situacija su promotivne kampanje, uvođenje novih proizvoda ili povlačenje starih proizvoda. 