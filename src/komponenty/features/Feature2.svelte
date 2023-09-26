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

<section>
  <div class="px-4 py-8 max-w-screen-xl mx-auto">
    <div class="sm:flex sm:items-center sm:gap-16">
      <div class="sm:w-1/2 sm:text-center sm:mb-8">
        <h2 class="text-4xl font-extrabold text-gray-900 text-center">Najdete u nás vše!</h2>
        <p class="mb-4 mt-8">
          Vyberte si z nabídky služeb a možností, které vám dáváme. Budeme rádi, pokud se budete cítit v našich rukách co nejlépe.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <!-- Buňka "Jak to u nás funguje?" -->
        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/"
          on:click={(e) => {
            e.preventDefault();
            openModal('Jak to u nás funguje?', 'Jednoduše a profesionálně. Na prvním místě stojíte vy a vaše potřeby. Společně probereme vaše představy a přání. Poté přichází naše týmy zručných řemeslníků a designérů, kteří pracují na vytvoření vašeho jedinečného projektu. Jsme tu, abychom vám zajistili kvalitu, pečlivost a maximální spokojenost. S námi je přeměna vašeho domova do truhlářského klenotu jednoduchá a bezstarostná.');
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
            openModal('Jaké jsou ceny?', 'Ceny se liší v závislosti na konkrétním projektu a jeho rozsahu. Každý náš výrobek a služba je jedinečný, a proto vám můžeme poskytnout přesný odhad až po podrobném prozkoumání vašich potřeb a požadavků. Naše ceny jsou však vždy férové a transparentní, a naším cílem je zajistit, aby naše truhlářské práce byly cenově dostupné a zároveň kvalitní.');
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

        <!-- Buňka "Co budu vše potřebovat?" -->
        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/"
          on:click={(e) => {
            e.preventDefault();
            openModal('Co budu vše potřebovat?', 'Pro spolupráci s námi budete potřebovat jen několik jednoduchých kroků. Začneme tím, že společně probereme vaše představy a požadavky. Poté budeme potřebovat přístup k prostoru, kde budou truhlářské práce provedeny, a budeme potřebovat informace o konkrétních měřeních, pokud jde o nábytek na míru nebo interiérové úpravy. Naši řemeslníci a designéři se postarají o zbytek. Můžete si být jisti, že se postaráme o všechny detaily a zajistíme, aby výsledek byl přesně takový, jaký jste si představovali.');
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
          <h2 class="mt-2 font-bold">Co budu vše potřebovat?</h2>
        </a>

        <!-- Buňka "Nevím si rady?" -->
        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/"
          on:click={(e) => {
            e.preventDefault();
            openModal('Nevím si rady?', 'Nezoufejte! Jsme tu, abychom vám pomohli a odpověděli na všechny vaše otázky. Pokud nejste jisti, jak začít nebo máte nějaké obavy ohledně projektu, kontaktujte nás. Rádi vám poskytneme veškeré potřebné informace, poradíme vám a pomůžeme vytvořit plán, který bude odpovídat vašim potřebám a představám. Vaše spokojenost a důvěra jsou pro nás klíčové, a budeme se snažit udělat vše pro to, abyste dosáhli svých cílů a měli pozitivní truhlářskou zkušenost.');
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
          <h2 class="mt-2 font-bold">Nevím si rady?</h2>
        </a>

        <!-- Buňka "Není tu to co hledám?" -->
        <a
          class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-black hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
          href="/"
          on:click={(e) => {
            e.preventDefault();
            openModal('Není tu to co hledám?', 'Chápeme, že hledáte specifické informace nebo řešení pro svou situaci. Rádi vám pomůžeme. Pokud zde nenaleznete to, co potřebujete, neváhejte nás kontaktovat přímo. Naše tým je připraven vám poskytnout individuální podporu a odpovědi na vaše dotazy. Jsme tu pro vás a jsme připraveni vám pomoci s jakýmkoli požadavkem, který máte.');
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
          <h2 class="mt-2 font-bold">Není tu to co hledám?</h2>
        </a>
      </div>
    </div>
  </div>
</section>
