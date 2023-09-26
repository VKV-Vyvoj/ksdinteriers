<script lang="ts">
    import Swal from 'sweetalert2';
   
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
                 openModal('Jak to u nás funguje?', 'Popis toho, jak to u nás funguje...');
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
     
             <!-- Buňka "Jaké jsou ceny?" -->
             <a
               class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
               href="/"
               on:click={(e) => {
                 e.preventDefault();
                 openModal('Jaké jsou ceny?', 'Popis cenové politiky...');
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
               <h2 class="mt-2 font-bold">Jaké jsou ceny?</h2>
             </a>
     
             <!-- Buňka "Jaká je rychlost realizace?" -->
             <a
               class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
               href="/"
               on:click={(e) => {
                 e.preventDefault();
                 openModal('Jaká je rychlost realizace?', 'Popis rychlosti realizace...');
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
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/N%C3%A1vrh%20bez%20n%C3%A1zvu.png?alt=media&token=397e3cc1-6dd3-412c-85bc-e7d54532cb12"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/N%C3%A1vrh%20bez%20n%C3%A1zvu.png?alt=media&token=397e3cc1-6dd3-412c-85bc-e7d54532cb12"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/N%C3%A1vrh%20bez%20n%C3%A1zvu.png?alt=media&token=397e3cc1-6dd3-412c-85bc-e7d54532cb12"
                 alt=""
               />
             </div>
             <div>
               <img
                 class="h-auto max-w-full rounded-lg"
                 src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/N%C3%A1vrh%20bez%20n%C3%A1zvu.png?alt=media&token=397e3cc1-6dd3-412c-85bc-e7d54532cb12"
                 alt=""
               />
             </div>
             </div>
             </div>
             