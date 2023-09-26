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
               <h2 class="text-center mb-4 text-4xl font-extrabold text-gray-900">Stoly</h2>
               <p class="mb-4">Stoly od KSDINTERIORS spojují eleganci a funkčnost dohromady. Naše široká nabídka stolů na míru vám umožní najít ten pravý stůl pro váš domov. Bez ohledu na to, zda hledáte jídelní stůl pro rodinná setkání, elegantní konferenční stůl pro váš pracovní prostor nebo designový kus do obývacího pokoje, naše řemeslnické dovednosti vám zajistí kvalitu a styl.

                Každý náš stůl je vytvořen s důrazem na detail a kvalitu. Můžete si vybrat z různých materiálů, tvarů a designových prvků, abyste měli stůl, který bude nejen funkční, ale také vizuálně oslnivý. Preciznost a péče o detail jsou naší vizitkou, a naši spokojení zákazníci to potvrzují. Obohaťte svůj domov jedinečnými stoly od KSDINTERIORS a užijte si spojení krásy a funkčnosti, které nabízíme.</p>
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
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/8ece09c6-9dd3-4cfc-9a8d-42df278026b3.jpeg?alt=media&token=d8c1a004-991f-4719-8175-a804de248da0"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/759E56B5-DC68-42BB-AE7D-5DC89806E1DE.jpeg?alt=media&token=bf249053-ffd6-4fc0-bc88-d37763ed87f6"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/94365E8D-78DC-49CA-9962-9EEBC787D017.jpeg?alt=media&token=1fd88abb-3d8b-4257-a28a-cbaa39fd90d7"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/8A11BB15-6792-4072-ACED-F3C9AE726E7F.jpeg?alt=media&token=d692f44a-72d4-41b7-9b00-25052d11e68e"
                 alt=""
               />
             </div>
             </div>
             </div>
             <SocialMedia/>