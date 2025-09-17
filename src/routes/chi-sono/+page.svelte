<script>
	import Meta from '$lib/components/Meta.svelte';
	let coverPicture = '/images/landscape-photo.jpg';
</script>

<Meta title="Chi sono" />

<div class="container">
	<article class="article-container">
		<h1>Ciao, sono Mateo.</h1>
		<p>
			Sono un ingegnere software appassionato di sviluppo web e mobile. Dal 2022 collaboro con
			<a href="https://pixxelfactory.net/" target="_blank">Pixxelfactory</a>, una web agency di
			Bolzano, dove realizzo siti e applicazioni web curando sia la parte tecnica che l’esperienza
			utente. Parallelamente, dal 2024 frequento il Master in <b>Software Engineering</b> alla Libera
			Università di Bolzano, un percorso che mi permette di approfondire le competenze accademiche mentre
			continuo a lavorare sul campo.
		</p>

		<figure class="cover-figure">
			<img src={coverPicture} alt="" />
		</figure>

		<p>
			Sono nato a Elbasan, in Albania, e cresciuto a Bolzano, città in cui la mia curiosità per
			l’informatica è sbocciata fin dai tempi dell’ITT a indirizzo informatico. Dopo la maturità ho
			proseguito con la laurea triennale in Informatica all’Università degli studi di Trento, per
			poi rientrare a Bolzano e iniziare la mia carriera professionale.
		</p>

		<p>
			Durante la triennale ho avuto modo di approfondire diversi aspetti dell'informatica e della
			programmazione. Infatti, oltre a rinforzare quello che già conoscevo come la programmazione in
			C/C++, la programmazione a oggetti con Java e un po' di programmazione web, ho anche imparato
			le basi di ambiti di cui non conoscevo l'esistenza, come lo sviluppo di web app attraverso le
			<b>API REST</b> e il <b>Machine Learning</b>.
		</p>

		<p>
			Oggi lavoro come <b>web developer</b> presso Pixxelfactory, dove mi occupo di siti e web app
			professionali. Qui programmo soprattutto in <b>PHP</b> con <b>CakePHP</b> e sviluppo progetti
			basati su
			<b>Joomla</b>, mentre continuo a rafforzare le mie competenze su frontend con
			<b>JavaScript</b>. Dal 2024 affianco al lavoro il Master in Software Engineering alla Libera
			Università di Bolzano, che mi permette di crescere sia in pratica che in teoria.
		</p>

		<p>
			Mi piace pensare al mio percorso come a un continuo “work in progress”: ogni nuovo progetto è
			un’occasione per imparare qualcosa. Fuori dal lavoro mi diverto a sperimentare – dal blogging,
			alle prime avventure con Blender, fino allo studio delle lingue straniere.
		</p>

		<p>
			Se ti va di collaborare o semplicemente di fare due chiacchiere, scrivimi: sono sempre curioso
			di conoscere nuove idee e persone.
		</p>
	</article>
</div>

<style>
	.cover-figure {
		width: 100%;
		margin: 0;
		padding: 0;
		border-radius: 2.5rem;
		overflow: hidden;
		margin: 1rem 0 2rem 0;
		grid-column: fullbleed;
	}

	.cover-figure img {
		width: 100%;
		max-height: 600px;
		object-fit: cover;
	}
</style>
