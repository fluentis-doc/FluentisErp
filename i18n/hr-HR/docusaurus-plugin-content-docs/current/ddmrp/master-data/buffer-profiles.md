---
title: Profili buffer-a 
sidebar_position: 4
---

Profil buffer-a definira zajedničke karakteristike za mnoge artikle sa buffer-om.    
Na taj način, svaki artikl sa buffer-om može imati svoj profil, što olakšava i ubrzava izmjenu njegovih parametara. Naime, svaka izmjena u profilu automatski će se primijeniti na sve artikle povezane s tim profilom.   

Profil se definira kombinacijom tri parametra:  

1. **vrsta dijela**

   - M = proizvodnja, tj. dio proizveden u tvornici (gotov proizvod ili poluproizvod)    
   - I = poluproizvod, tj. poluproizvod proizveden u tvornici (ova distinkcija u odnosu na M je opcionalna)     
   - P =  kupnja, kupljeni dio   
   - D = distribucija, dio pohranjen u distribucijskom centru (u ovom slučaju zapis ne može imati prazno polje skladišta)   

2. **kategorija vremena isporuke**

  Upoređujući artikle s istom vrstom dijela, može se definirati niža i viša vrijednost vremena isporuke koja omogućuju grupiranje artikala u tri skupine s pripadajućim koeficijentom između 0 i 1.

   - S = artikli s kratkim vremenom isporuke (koeficijent između 0,61 i 1)  
   - M = artikli s srednjim vremenom isporuke (koeficijent između 0,41 i 0,6) 
   - L = artikli s dugim vremenom isporuke (koeficijent između 0 i 0,4)  

   Vrijednost koeficijenta je obrnuto proporcionalna vremenu isporuke, jer je za artikle s dugim vremenom isporuke bolje imati više narudžbi manjih količina nego nekoliko narudžbi velikih količina, kako bi se smanjio rizik od problema s isporukom.   

3. **kategorija varijabilnosti**

   Uspoređujući artikle s istom vrstom dijela i analizirajući varijabilnost u potražnji i opskrbi, odlučuje se je li buffer karakteriziran niskom, srednjom ili visokom varijabilnošću.    
   Ovo je složenija analiza od one za vrijeme isporuke jer mora uzeti u obzir varijabilnost potražnje (na primjer, provjerom statističke disperzije vrijednosti potražnje kroz značajan vremenski period), varijabilnost opskrbe (na primjer, uzimajući u obzir statističku disperziju kašnjenja isporuke), te uzimajući u obzir jesu li kao "djeca" ili "roditelji" prisutni drugi buffer-i koji prirodno smanjuju varijabilnost.    

   Razmatraju se tri razine varijabilnosti povezane s koeficijentom između 0 i 1, kako slijedi:    

   - L = niska varijabilnost (koeficijent između 0 i 0,4)  
   - M = srednja varijabilnost (koeficijent između 0,41 i 0,6)  
   - H = visoka varijabilnost (koeficijent između 0,61 i 1)   

   Što je varijabilnost veća, to mora biti viša razina sigurnosnih zaliha buffer-a (crvena zona), što je zapravo proporcionalno koeficijentu varijabilnosti.   
