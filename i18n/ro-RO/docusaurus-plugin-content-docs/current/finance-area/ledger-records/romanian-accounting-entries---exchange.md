---
title: Regularizare valută
sidebar_position: 2
---

Aceasta fereastră servește pentru calcularea automata la o anumită dată a diferențelor de curs pentru conturile in valuta și la generarea angajamentelor și a înregistrărilor contabile de regularizare. Cuprinde 3 zone:

1. Zona de filtrare și selectare a conturilor de regularizat;  
2. Zona de parametri pentru execuția regularizării;  
3. Zona de restaurare a istoricului operațiilor deja efectuate.

**Zona de filtrare** conține în partea superioară filtrele pentru căutarea conturilor de regularizat, opțiunile fiind:
- Deviza: conturi într-o anumita valută;  
- Tipul de cont: conturi de disponibilități sau conturi de partener și conturi de activ sau de pasiv;  
- Cont contabil: specificarea unui anumit cont contabil.

În partea inferioară se găsește gridul rezultatelor filtrării, tabela conturilor ce satisfac condițiile filtrării și valorile ce vor fi prelucrate de procedura de regularizare (valoarea istorică, valoarea actualizată în funcție de cursul de schimb din zona parametrilor, diferența de curs).

**Zona de parametri** aici se găsesc parametrii cu care se va executa contabilizarea regularizării:
- Provizorie: opțiunea de a genera diferența de curs ca înregistrare contabilă provizorie;  
- Cursul de schimb la care se calculează valoarea actualizată, acesta este propus automat de catre program din schimburi valutare, putând fi modificat local de către utilizator;  
- Data și numarul documentului și șablonul contabil asociat înregistrării contabile de regularizare. Data specificată este de asemenea și data limita de selectare a înregistrărilor contabile;  
- Conturile de venituri și cheltuieli utilizate pentru a prelua diferențele de curs;  

**Zona de restaurare** conține în partea superioară filtrele pentru căutarea operațiilor de regularizat executate, opțiunile fiind:
- De la data , la data: perioada în care s-a efectuat operația;  
- Contul: cont asupra căruia s-au efectuat anterior regularizări.

Opțiuni disponibile:

> **Caută** - Butonul lansează căutarea conturilor de regularizat în conformitate cu valorile câmpurilor de filtrare completate.  
> **Contabilizare** - Butonul lansează operația de regularizare asupra conturilor selectate din gridul zonei de filtrare, și în conformitate cu parametrii aleși din zona de parametrii.  
> **Restaurare regularizare** - Butonul anulează operația de regularizare selectată din gridul zonei de restaurare.