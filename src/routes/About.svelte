<script>
	import personalPhotoJpg from '$lib/images/mateo_myftaraj_photo.jpg';
	import personalPhotoWebp from '$lib/images/mateo_myftaraj_photo.webp';
</script>

<div class="container px-4 mx-auto mt-4 mb-8 sm:my-20 gap-4 grid grid-cols-1 lg:grid-cols-7 items-center">
    <div class="order-first lg:order-last lg:col-span-4 justify-self-center w-full">
        <picture>
            <source srcset="{personalPhotoWebp}" type="image/webp">
            <source srcset="{personalPhotoJpg}" type="image/jpeg">
            <img
                id="photo-image"
                class="w-full object-contain border-4"
                src={personalPhotoJpg}
                alt="Mateo Myftaraj in Termoli, Italy"
                title="Mateo Myftaraj in Termoli, Italy"
            />
        </picture>
    </div>
    <div class="order-last lg:order-first lg:col-span-3 my-0 lg:my-0">
        <h1 class="font-[900] text-4xl lg:text-6xl">Ciao, sono<br />Mateo</h1>
        <h2 class="font-[600] text-xl lg:text-2xl">Sviluppatore Web</h2>
        <p class="mt-4 mb-12">
            Sono uno sviluppatore web appassionato con una solida esperienza nella programmazione
            software, maturata grazie alla mia formazione superiore e universitaria e anche grazie alle
            mie esperienze lavorative. Con competenze che spaziano dalla progettazione
            all'implementazione, mi impegno a fornire prodotti di alta qualità che soddisfano le
            esigenze dei clienti e superano le loro aspettative.
        </p>
        <div class="flex gap-4">
            <a href="mailto:mateo@myftaraj.com" class="btn bg-mainAccent">Contattami</a>
        </div>
    </div>
</div>

<style>
	#photo-image {
		border-radius: 10px;
		box-shadow: 4px 4px var(--color-black);
		background: var(--color-black);
	}
</style>