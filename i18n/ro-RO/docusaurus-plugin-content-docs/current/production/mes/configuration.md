---
title: Instalare 
sidebar_position: 2
---

Pașii pentru instalarea Fluentis MES:  

- creați un fișier text care să conțină:

```csharp
<?xml version="1.0" encoding="utf-8" ?>
<Settings applicationStyle="Fluent"></Settings>
```

- redenumiți fișierul creat în "MobileSettings.xml";  
- copiați fișierul "MobileSettings.xml" în folderul în care se află WPF-ul Fluentis;  
- creați o nouă conexiune către executabilul Fluentis (aflat în folderul în care a fost salvat fișierul la pasul anterior);  
- intrați în proprietățile conexiunii creat și modificați calea de *destinație* adăugând la final un spațiu și următorul string: **settingsFile="MobileSettings.xml"**  
- lansați **Fluentis MES** prin intermediul conexiunii.