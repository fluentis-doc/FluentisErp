---
title: Profili bafera
sidebar_position: 4
---

Profil *bafera* definiše zajedničke karakteristike za više artikala sa *baferom*.  
Na taj način svaki artikl sa baferom može imati svoj profil, što olakšava i ubrzava izmenu njegovih parametara. Naime, svaka izmena u profilu automatski će biti primenjena na sve artikle povezane sa tim profilom.

Profil se definiše kombinacijom tri parametra:

1. **vrsta dela**

   - M = proizvodnja, odnosno deo proizveden u fabrici (gotov proizvod ili poluproizvod)  
   - I = poluproizvod, odnosno poluproizvod proizveden u fabrici (ova razlika u odnosu na M je opciona)  
   - P = nabavka, kupljeni deo  
   - D = distribucija, deo uskladišten u distributivnom centru (u ovom slučaju zapis ne može imati prazno polje skladišta)

2. **kategorija vremena isporuke**

   Upoređivanjem artikala iste vrste dela mogu se definisati donja i gornja vrednost vremena isporuke koje omogućavaju grupisanje artikala u tri grupe sa odgovarajućim koeficijentom između 0 i 1.

   - S = artikli sa kratkim vremenom isporuke (koeficijent između 0,61 i 1)  
   - M = artikli sa srednjim vremenom isporuke (koeficijent između 0,41 i 0,6)  
   - L = artikli sa dugim vremenom isporuke (koeficijent između 0 i 0,4)

   Vrednost koeficijenta je obrnuto proporcionalna vremenu isporuke, jer je za artikle sa dugim vremenom isporuke bolje imati više porudžbina manjih količina nego nekoliko porudžbina velikih količina, kako bi se smanjio rizik od problema sa isporukom.

3. **kategorija varijabilnosti**

   Upoređivanjem artikala iste vrste dela i analizom varijabilnosti u potražnji i snabdevanju odlučuje se da li je bafer karakterisan niskom, srednjom ili visokom varijabilnošću.

   Ovo je složenija analiza od analize vremena isporuke jer mora uzeti u obzir varijabilnost potražnje (na primer, proverom statističke disperzije vrednosti potražnje tokom značajnog vremenskog perioda), varijabilnost snabdevanja (na primer, uzimanjem u obzir statističke disperzije kašnjenja isporuke), kao i činjenicu da li su kao „deca“ ili „roditelji“ prisutni drugi baferi koji prirodno smanjuju varijabilnost.

   Razmatraju se tri nivoa varijabilnosti povezana sa koeficijentom između 0 i 1, i to:

   - L = niska varijabilnost (koeficijent između 0 i 0,4)  
   - M = srednja varijabilnost (koeficijent između 0,41 i 0,6)  
   - H = visoka varijabilnost (koeficijent između 0,61 i 1)

   Što je varijabilnost veća, to mora biti viši nivo sigurnosnih zaliha bafera (crvena zona), koji je zapravo proporcionalan koeficijentu varijabilnosti.