---
title: "Geografitest [Parte 1]: La visione"
description: "Così è nata l'idea di geografitest, dove ogni mappa diventa un'opportunità per migliorare le proprie conoscenze in maniera interattiva."
date: '2025/02/28'
language: IT
categories: 
	- Svelte
published: true
---

L'idea nasce dalla mia esperienza quotidiana di lavoro con Leaflet. Ho sempre apprezzato la sua flessibilità e la capacità di gestire dati GeoJSON in maniera dinamica. Un giorno, riflettendo sulle mie difficoltà personali nel riconoscere rapidamente province e nazioni su una mappa, mi sono chiesto: **"Perché non trasformare questa sfida in un gioco divertente e educativo?"**

Così è nata l'idea di **geografitest**, quiz geografico dedicato alle regioni e province italiane, dove ogni mappa diventa un'opportunità per migliorare le proprie conoscenze in maniera interattiva.

Il passo successivo è stato trovare i dati adatti. Dopo alcune ricerche, ho scoperto un repository su GitHub (<a target="_blank" href="https://github.com/openpolis/geojson-italy">openpolis/geojson</a>) ricco di dati GeoJSON riguardanti regioni, province e comuni italiani. Sebbene il dataset completo sia molto pesante, ho deciso di concentrarmi inizialmente sulle **regioni italiane**. Il target iniziale è il pubblico italiano, e partire dalle regioni mi permette di offrire un'esperienza mirata e facilmente fruibile. In futuro, avrò l'opportunità di integrare anche dati su province, comuni e, chissà, persino una mappa mondiale.

L'obiettivo finale è creare un'applicazione semplice ma coinvolgente che trasformi l'apprendimento geografico in un gioco interattivo. Ecco come immagino il funzionamento: ad ogni turno, l'utente viene invitato a individuare una specifica regione sulla mappa. Se la risposta è corretta, la regione si colora di verde. In caso di errore, vengono usate gradazioni di colore (dal giallo all'arancione, fino al rosso) per indicare il livello di imprecisione.

Oltre al classico "spot the place", prevedo di aggiungere nuove modalità di gioco, come quiz a risposta multipla, drag and drop e altre funzionalità interattive che rendano l'esperienza ancora più dinamica e stimolante.

Questo progetto è anche una sfida personale. Ho sempre avuto difficoltà nel riconoscere rapidamente alcune province e nazioni su una mappa, e ora voglio trasformare questa debolezza in un punto di forza, sia per me che per chi condivide la mia passione per la geografia. Il quiz è concepito per un pubblico ampio: da chi studia la geografia a chi, come me, ha sempre desiderato migliorare la propria conoscenza del territorio.

Anche se al momento non dispongo di un canale ufficiale per il gioco, invito chiunque sia interessato a condividere le proprie impressioni e suggerimenti via email. Il vostro feedback sarà fondamentale per migliorare e arricchire l'esperienza.

Questo blog sarà il diario di bordo del mio percorso di sviluppo: condividerò ogni passo, dalle prime scelte tecnologiche alle sfide tecniche affrontate, fino all'evoluzione del gioco in nuove direzioni. Spero che questa avventura possa non solo migliorare le conoscenze geografiche, ma anche ispirare altri a esplorare il mondo della programmazione.