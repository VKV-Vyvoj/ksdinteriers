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
               <h2 class="text-center mb-4 text-4xl font-extrabold text-gray-900">Ostatní truhlářské práce</h2>
               <p class="mb-4">Naše truhlářské dovednosti nejsou omezeny pouze na kuchyně, stoly a skříně. Vytváříme také různé truhlářské doplňky a další kusy nábytku, které dodají eleganci a charakter vašemu domovu. A nezapomínáme ani na exteriéry!

                Mimo interiérové práce nabízíme i truhlářské práce pro venkovní prostory. Tvorba venkovního nábytku, teras, altánků, nebo dokonce dřevěných plotů je naší vášní. Naše práce zahrnuje výrobu unikátních polic, knihovníků, komod, postelí, a také stylových dřevěných prvků pro zahradu. Jsme tu pro vás, abychom vytvořili truhlářské práce, které vám budou sloužit nejen jako užitečné prvky, ale také jako krásné a praktické detaily vašeho domova i zahrady.
                
                Důraz kladený na kvalitu, detaily a design je pro nás samozřejmostí, a naši spokojení zákazníci jsou naším nejlepším odrazovým měřítkem. Vstupte do světa truhlářského umění s KSDINTERIORS a nechte nás vytvořit pro vás jedinečné truhlářské práce, které obohatí vaše prostředí, jak uvnitř, tak i venku.</p>
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
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/4a5fa464-aca9-4725-b4b4-866cf594759e.jpeg?alt=media&token=8b4593ad-5174-4cbb-aea9-a3f0626c776e"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/CCE30BB5-1E54-4C39-983D-7675EA0F3295.jpeg?alt=media&token=4f04cad6-ad6e-4669-aac4-6f423759ed72"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/955e539b-f736-4ee7-b95c-9350371c839e.jpeg?alt=media&token=731eab51-d891-47da-8e13-fd6f6f195558 "
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/7679fa6b-5322-4d9a-a76c-0ce2ffa89824.jpeg?alt=media&token=43f29b54-2997-421e-80af-dad8ccfab980"
                 alt=""
               />
             </div>
             </div>
             </div>
             <SocialMedia/>