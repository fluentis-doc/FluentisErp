---
title: Definicija nositelja troškova (cost driver)
sidebar_position: 2.3
---

![](/img/it-it/controlling/definition-logic.png)

Treći korak, nakon što su se definirali [***poslovni centri***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-centers) povezali s kontnim planom (ili općenitije s raznim dostupnim evidencijama), jest analizirati i definirati odnose između proizvodnih/pomoćnih centara i općih centara, određujući pritom i logički redoslijed njihove primjene u obliku kaskadnog prijenosa.
Kako bi se mogli definirati [***nositelji troškova***](/docs/controlling/controlling-parametrization/controlling-specific-settings/cost-drivers) prije svega se moraju definirati Analitička [***područja***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas)  (i pripadajući [***Tipove područja***](/docs/controlling/controlling-parametrization/controlling-specific-settings/area-types-areas))  koja će služiti u kontrolingu. Obavezno se prvo mora kreirati Tip i područje *Seta pravila* koje će sadržavati sva standardna pravila prijenosa između centara, a zatim i Tip i područje "Konačni podaci" koje će se puniti podacima na kraju razdoblja iz računovodstvenih vrijednosti ili iz količina (*radne i strojne sate*, ali i *proizvedene količine*) proizvodnje ili projekta. Također se može definirati područje "Proračun", ili bilo koje drugo alternativno područje koje bi moglo koristiti za testiranje različitih pravila prijenosa u odnosu na službena pravila definirana u području "Set pravila".


:::tip NAPOMENA
Potreba za definiranjem *nositelja troškova* usko je povezana s korištenjem upravljačkog računovodstva u kontrolingu. Istina je da pojednostavljena verzija nositelja troškova za prijenos između centara, s jednim razinom prijenosa, fiksnim godišnjim postotkom i bez povezivanja s *područjima*, postoji i za tvrtke koje nemaju aktiviran kontroling. Međutim, omogućavanje pune verzije omogućuje postizanje istog rezultata uz minimalan dodatni napor, ali s prednošću ostavljanja mogućnosti za postupno povećavanje složenosti
modela analize.
:::

Jednostavan primjer može bolje pojasniti logiku definiranja ***nositelja troškova***.
Primjerice, tvrtka je definirala dva proizvodna centra, "centar tokarenja" i "centar zavarivanja", te jedan pomoćni centar, "centar održavanja", i želi izračunati satnicu troškova za dva proizvodna centra, uključujući i raspodjelu troškova pomoćnog centra. Pomoćni centar snosi izravne troškove, poput troškova zaposlenika koji rade u njemu, ali i dio općih troškova, primjerice najma hale u kojoj se svi centri nalaze. Nadalje, satnice proizvodnih centara koriste se za valorizaciju troškova na projektima ili prodajnim nalozima u proizvodnji.


U ovom jednostavnom scenariju početna točka je trošak najma, koji će se računovodstveno knjižiti 100% na generički virtualni centar, a zatim ga povezati s nositelje troškova (s ciklusom izračuna 1) kako bi se raspodijelio na centar tokarenja, centar zavarivanja i centar održavanja, primjerice prema kvadratnim metrima koji su dodijeljeni svakom centru (prema ***evidenciji fizičkih kretanja u knjigovodstvu***).
Nakon toga, centar održavanja, koji će biti valoriziran izravnim troškovima (poput troška zaposlenika) i neizravnim troškovima
najma, bit će dalje raspoređen s drugim nositeljem (s ciklusom izračuna 2) na centar tokarenja i centar zavarivanja, primjerice na temelju radnih sati strojeva zabilježenih tijekom proizvodnje (povezujući centar s određenim strojem). 
Na kraju, za centar tokarenja ili zavarivanja, na koji su raspoređeni i izravni i neizravni troškovi, izračunat će se satnica troška za razdoblje (kao ukupni trošak podijeljen s ukupnim brojem proizvodnih sati), a taj trošak razdoblja primijenit će se, putem još jednog nositelja s ciklusom 3, na sate centra potrošene na pojedinom projektu ili prodajnom nalogu tijekom razdoblja.


Što je struktura centara složenija i što je veći broj analitičkih [***dimenzija***](/docs/controlling/controlling-parametrization/controlling-specific-settings/dimension) koje želimo pratiti, to će biti osjetljivija definicija odgovarajućih nositelja troškova i njihovih ciklusa primjene.

