---
title: Dimenzija
sidebar_position: 5
---

Obrazac se nalazi na putanji: **Tablice > Kontroling > Analitičko knjigovodstvo > Dimenzije**

:::tip Napomena
Ova je tablica relevantna samo za tvrtke u kojima je aktivna oznaka *Kontroling*.
:::

Dimenzija se može objasniti kao kriterij za analizu i dosljednu raspodjelu TROŠKOVA i PRIHODA unutar tvrtke.

Moguće je istodobno definirati i koristiti više dimenzija analize.

![Slika](/img/it-it/configurations/tables/controlling/analytical-accounting/dimension.png)

**PRIMJER**: Analitičko računovodstvo obično je povezano s dimenzijom *INDUSTRIJA*, u okviru koje se tvrtka dijeli na različite poslovne jedinice ili funkcije, odnosno ADMINISTRATIVNI CENTAR TVRTKE, UPRAVLJAČKI CENTAR, KOMERCIJALNI CENTAR i PROIZVODNE CENTRE.

U okviru ove dimenzije dodjeljuju se svi troškovi i prihodi tvrtke kako bi se provela analiza ukupnih troškova (*Full Costing*).

Paralelno s time postoje *PROJEKTI/NALOZI*, odnosno tvrtke koje rade prema nalozima ili projektima. Nalozi predstavljaju paralelne dimenzije kojima se dodjeljuju svi izravni prihodi naloga, dok se iz industrijske dimenzije prenose knjiženja povezana s pomoćnim i generičkim centrima (uprava, administracija itd.).

Moguće je definirati i **posebne** dimenzije kojima tvrtka želi izdvojiti određene vrijednosti iz uobičajenih pravila poslovanja kako bi zasebno pratila pojedine vrste troškova.

**PRIMJER**: Tvrtka želi pratiti različite SAJMOVE na kojima sudjeluje jer oni predstavljaju značajno ulaganje. Stoga definira dimenziju *SAJMOVI*, dodjeljuje joj centar SAJAM MILANO (primjer) te trošak sajma dodjeljuje ne samo industrijskoj dimenziji nego i dimenziji SAJMOVI, jer želi zasebno pratiti i analizirati podatke povezane s tom konkretnom aktivnošću. U ovom slučaju ne uključuje oznaku obveznog usklađenja jer želi samo dodatnu dimenziju analize.

Dimenzija se, dakle, može promatrati i kao **OZNAKA** koja se povezuje s centrima.

Pomoću pokretača troška (*Cost driver*) moguće je raspodijeliti podatke (troškove i prihode) iz jedne dimenzije u drugu.

**#### Posebna polja**

- Oznaka **OBVEZNO USKLAĐENJE** određuje mora li dimenzija biti usklađena s računovodstvom. Više se ne provjerava usklađenost financijskog računovodstva s centrom troška/profitnim centrom ili nalogom, već s pojedinom dimenzijom analize za koju je usklađenje obvezno. Provjera usklađenosti provodi se samo ako računovodstveni predložak za knjiženje također predviđa blokiranje spremanja knjiženja koja nisu usklađena na razini vrednovanja centara.

- Oznaka **PROJEKT/NALOG** znači da se redak analitičkog računovodstva prvenstveno povezuje s projektom ili nalogom na koji se izravno odnosi trošak ili prihod. Na temelju tog projekta/naloga određuje se centar troška koji treba vrednovati. To može biti generička šifra jednaka za sve projekte ili centar povezan s određenim obilježjem odabranog projekta.

- Oznaka **OGRANIČENJE KONTO/CENTAR** ograničava mogućnosti korisnika prilikom knjiženja centra ove dimenzije u računovodstvu. Budući da se u kontnom planu svakom podkontu troška i prihoda može pridružiti jedan ili više centara tvrtke, ovom se opcijom određuje da korisnik ne smije mijenjati postavke definirane u kontnom planu. Primjerice, proizvodni trošak ne može se dodijeliti upravljačkom centru. Ograničenje se može primijeniti na pojedinačni centar ili na kategorije centara.

- Oznaka **OMOGUĆI PROJEKT/NALOG** služi za povezivanje referentnog projekta ili naloga i s recima uobičajene industrijske/upravljačke dimenzije, čime se izbjegava potreba za upravljanjem dvjema različitim dimenzijama.
::: 