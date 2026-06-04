---
title: Dokumenti nabave i prodaje 
sidebar_position: 20
---

Unutar različitih dokumenata u poslovanju dostupna su, u osnovi, dva elementa od interesa za valorizacije u *Kontrolingu*: poveznice na *Projekte* i detalji valorizacije *Analitičke* kartice za svaki artikl koji se evidentira. 

Što se tiče *Projekata*, u zaglavlju dokumenata moguće je povezati referentni projekt, koji će se koristiti za automatsku valorizaciju svih artikala unutar istog dokumenta. Ako se promijeni referenca u zaglavlju dok su artikli već dodani, ***FluentisERP*** će tražiti potvrdu o zamjeni u svim detaljima. Omogućena je i ručna izmjena projektne reference na pojedinoj stavci artikla, s jednim dostupnim poljem za povezivanje.  

Što se tiče *Analitičke* kartice, u dijelu ispod artikala omogućava se slobodno raspoređivanje vrijednosti stavke na više centara poduzeća: ***FluentisERP*** automatski dodjeljuje podatke centrima prema prioritetnim logikama i dostupnim konfiguracijama, ali korisnik uvijek ima mogućnost ručne izmjene. Ako je u poduzeću aktiviran *Kontroling*, ova analitička kartica imat će iste značajke multidimenzionalnog i projektnog upravljanja kao analitička kartica knjigovodstvenih evidencija. Budući da su dokument i stavke artikala već potencijalno povezani s *Projektom*, analitička sekcija automatski valorizira odgovarajuću dimenziju *Projekti* centara poduzeća. 


:::tip NAPOMENA
Budući da analitička kartica predstavlja izvor podataka za valorizaciju dimenzije *Projekti* i ujedno je slobodno izmjenjiva, čak i ako je stavka artikla povezana s jednim *Projektom*, korisnik može unutar analitike podijeliti atribuciju na više *Projekata*, bez potrebe za umnožavanjem stavki artikala unutar dokumenta. 
:::
