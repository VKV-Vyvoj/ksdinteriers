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
               <h2 class="text-center mb-4 text-4xl font-extrabold text-gray-900">Skříně</h2>
               <p class="mb-4">Naše skříně od Truhlářství KSDINTERIORS jsou synonymem elegance a praktičnosti. Nabízíme široký výběr skříní na míru, které vám pomohou optimalizovat úložný prostor ve vašem domě. Bez ohledu na to, zda hledáte prostorné šatní skříně, stylové knihovny nebo funkční úložné prostory, naše řemeslnické mistrovství vám poskytne skvělá řešení.

                Každá skříň, kterou vyrobíme, je pečlivě navržena a vyrobena s důrazem na detail. Můžete si vybrat z různých materiálů, barev a designových prvků, abyste měli skříň, která bude nejen funkční, ale také esteticky krásná. Důraz kladený na kvalitu a preciznost je naší značkou, a naši zákazníci to oceňují. Osvěžte svůj domov jedinečnými skříněmi od Truhlářství KSDINTERIORS a vychutnejte si praktický luxus, který nabízíme.</p>
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
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/40d999ce-2448-4215-a734-ee0623acd1c9.jpeg?alt=media&token=753d1908-cdc3-45cf-af42-88205c8a7884"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/D32F1C4E-516C-4B27-8CE5-24C779CB62DE.jpeg?alt=media&token=bd1dd52b-79c6-424b-b402-025b671563e9"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/06c2252c-8f7c-4518-b561-32edaa68abc0.jpeg?alt=media&token=ad024101-aa84-401c-93b0-788c3a8a63f2"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/ldodo.png?alt=media&token=4c662ba4-eb84-47a6-b425-b01e525185bc"
                 alt=""
               />
             </div>
             </div>
             </div>
             <SocialMedia/>