<script lang="ts">
 import Swal from 'sweetalert2';
	import SocialMedia from '../../komponenty/social/SocialMedia.svelte';

function openModal(title: string, description: string) {
  Swal.fire({
    title: title,
    text: description,
    icon: 'info',
    confirmButtonText: 'Zavřít',
  });
}
</script>

<section class="bg-white">
    <div class=" items-center py-8 px-4 mx-auto max-w-screen-xl">
        <div class="font-light text-black sm:text-center sm:text-lg">
            <h2 class="text-center mb-4 text-4xl font-extrabold text-gray-900">Kuchyně</h2>
            <p class="mb-4">U Truhlářství KSDINTERIORS vám přinášíme širokou paletu moderních a funkčních kuchyní na míru. Naše nabídka zahrnuje kuchyně v různých stylech, od elegantního a minimalistického po rustikální a tradiční. Díky našemu zručnému týmu řemeslníků jsme schopni realizovat jakékoli vaše kuchyňské představy.

                Máme pro vás široký výběr materiálů, barvových kombinací a designových detailů, abyste si mohli vybrat takovou kuchyň, která bude dokonale ladit s vaším životním stylem. Naše kuchyně jsou nejen esteticky přitažlivé, ale také praktické a plně funkční, aby uspokojily vaše potřeby v kuchyni.
                
                Dejte nám vědět, jakou kuchyň máte v mysli, a my vám rádi pomůžeme ji proměnit v realitu. S Truhlářstvím KSD Interiors získáte kuchyň, která bude středem vašeho domova, ať už toužíte po moderním designu, tradičním stylu nebo něčem mezi tím.</p>
        </div>
    </div>
</section>


<section>
    <div class="px-4 py-8 max-w-screen-xl mx-auto">
      <div class="sm:flex sm:items-center sm:gap-16">
        <div class="sm:w-1/2 sm:text-center sm:mb-8">
          <h2 class="text-4xl font-extrabold text-gray-900 text-center">Co potřebujete vědět?</h2>
        </div>
  
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <!-- Buňka "Jak to u nás funguje?" -->
          <a
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/"
            on:click={(e) => {
              e.preventDefault();
              openModal('Jak to u nás funguje?', 'Jak to u nás funguje? Jednoduše a profesionálně. Na prvním místě stojíte vy a vaše potřeby. Společně probereme vaše představy a přání. Poté přichází naše týmy zručných řemeslníků a designérů, kteří pracují na vytvoření vašeho jedinečného projektu. Jsme tu, abychom vám zajistili kvalitu, pečlivost a maximální spokojenost. S námi je přeměna vašeho domova do truhlářského klenotu jednoduchá a bezstarostná.');
            }}
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
            <h2 class="mt-2 font-bold">Jak to u nás funguje?</h2>
          </a>
  
        
          <!-- Buňka "Jaká je rychlost realizace?" -->
          <a
            class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
            href="/"
            on:click={(e) => {
              e.preventDefault();
              openModal('Jaká je rychlost realizace?', 'Rychlost realizace projektu závisí na jeho konkrétních požadavcích a rozsahu práce. Naším hlavním cílem je dodat vám truhlářský výrobek nebo službu, která splní vaše očekávání. Nejsme schopni stanovit pevný termín, protože každý projekt je jedinečný. Nicméně vám zaručujeme, že budeme pracovat efektivně a s maximálním úsilím, abychom vám přinesli výsledek, který stojí za čekání.');
            }}
          >
            <span class="inline-block rounded-lg bg-gray-50 p-3">
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>
            <h2 class="mt-2 font-bold">Jaká je rychlost realizace?</h2>
          </a>
</div>
</div>
</div>
</section>

<div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/9356605f-390c-4186-a555-9d21b9df7740.jpeg?alt=media&token=bd00b02e-6efc-42c2-9837-df97c09fefd5"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/CC8BA99C-45D7-4C73-9C8D-B6519632FE2A.jpeg?alt=media&token=4fc42213-a50c-4636-a6ad-6844cfebbd8f"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/2e7d5ae3-ccf4-43b3-83fc-d757e171c713.jpeg?alt=media&token=c2247569-1f74-4c63-9ac8-8b21d00a6965"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/f049d17c-b438-442e-b4b2-d40ec67c1c5a.jpeg?alt=media&token=bfe3b8ed-f433-4d19-9b14-a00e086acfb7"
              alt=""
            />
          </div>
          </div>
          </div>
          
          <SocialMedia/>