---
title: "Geografitest [Parte 2]: Gli strumenti"
description: "Arriva sempre un momento in cui diventa necessario definire chiaramente il tech stack da utilizzare per portare avanti concretamente un progetto. Per questo specifico lavoro mi sono affidato a strumenti di cui sono relativamente confidente, ma di cui voglio anche conoscerne le peculiarità in contesti reali."
date: '2025/03/08'
language: IT
categories: 
	- Svelte
published: true
---

Nel corso degli anni ho sperimentato diverse tecnologie per lo sviluppo sia di applicazioni mobile che per applicazioni web. La mia ricerca è in costante evoluzione, tuttavia arriva sempre un momento in cui diventa necessario definire chiaramente il tech stack da utilizzare per portare avanti concretamente un progetto. Per questo specifico lavoro mi sono affidato a strumenti di cui sono relativamente confidente, ma di cui voglio anche conoscerne le peculiarità in contesti reali. In questo articolo andrò a scomporre il progetto nelle sue tecnologie per analizzare i motivi che mi hanno portato a utilizzarle nello specifico.

**Svelte**. Per il frontend ho scelto un framework di cui sono a conoscenza anche grazie a questo stesso blog. La scelta è stata dettata principalmente dalla semplicità d'uso e dalla rapidità con cui permette di creare componenti reattivi e performanti. Svelte ha una curva di apprendimento molto meno ripida rispetto ad altri framework come React o Angular e garantisce applicazioni con ottime prestazioni grazie al suo approccio alla compilazione. Inoltre, sto investendo tempo nello sviluppo di una libreria personale di componenti riutilizzabili con l'obiettivo di rendere i progetti futuri più rapidi da avviare, più coerenti stilisticamente e allo stesso tempo sufficientemente flessibili per adattarsi a differenti esigenze progettuali.

**Tailwind**. Per quanto riguarda gli stili ho scelto di usare un framework anziché CSS vanilla o altre metodologie come SASS o SCSS. La motivazione principale risiede nella necessità di velocizzare lo sviluppo grafico senza dedicare troppo tempo ad un design personalizzato, pur mantenendo un risultato piacevole e moderno. Tailwind offre vantaggi notevoli nel contesto dei framework basati su componenti, poiché permette di gestire in modo granulare e immediato le classi stilistiche all’interno delle classi dei componenti stessi. Tuttavia, riconosco che a volte l'utilizzo intensivo delle classi può apparire simile agli stili inline, riducendo temporaneamente la leggibilità del codice, soprattutto quando si ha a che fare con pagine con pochi componenti.

**Leaflet**. Per la gestione delle mappe interattive ho scelto Leaflet, una libreria JavaScript open-source che avevo già avuto modo di utilizzare in passato. Ogni progetto che realizzo con Leaflet mi permette di approfondire nuove funzionalità, di esplorare ulteriormente le API messe a disposizione e di riconsiderare le sue potenzialità.

**Vercel**. Ho optato per un servizio di hosting per l'applicazione basandomi su parametri come la semplicità di utilizzo, la rapidità e l'affidabilità nel deploy automatico automatico con git e GitHub. Vercel è ideale per progetti frontend e si integra perfettamente con framework come Svelte, offrendo prestazioni elevate e un workflow efficiente.

**Continuous improvement**. Attualmente sto esplorando soluzioni per migliorare la robustezza e la qualità del progetto tramite l'adozione di test automatici. L'introduzione di una pipeline CI/CD per automatizzare test unitari ed end-to-end prima del deploy definitivo rappresenta una delle mie priorità future.

Con questa panoramica ho voluto approfondire i principali strumenti che ho adottato per lo sviluppo di Geografitest, cercando di fornire una visione chiara dei vantaggi e delle sfide di ciascuna tecnologia. Sebbene la struttura iniziale del progetto sia ormai definita, rimango aperto alla possibilità di integrare nuovi strumenti e metodologie che possano migliorarne le prestazioni, la sicurezza e la manutenibilità nel tempo. Il percorso di miglioramento continuo resta una parte fondamentale della mia filosofia di sviluppo, con l'obiettivo di garantire un prodotto finale sempre più solido, allineato alle mie esigenze e a quelle degli utenti finali.
