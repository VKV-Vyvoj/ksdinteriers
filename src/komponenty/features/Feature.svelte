<script>
    let currentCard = 0;
    const cards = [
      {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/A9B7151A-5A1E-4605-A404-BE9C97551D2B.jpeg?alt=media&token=1616dd7e-858c-4178-8122-c2a02a2e6fa7",
        title: "KUCHYNĚ",
        link: "/kuchyne",
      },
      {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/D32F1C4E-516C-4B27-8CE5-24C779CB62DE.jpeg?alt=media&token=bd1dd52b-79c6-424b-b402-025b671563e9",
        title: "SKŘÍNĚ",
        link: "/skrine",
      },
      {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/94365E8D-78DC-49CA-9962-9EEBC787D017.jpeg?alt=media&token=1fd88abb-3d8b-4257-a28a-cbaa39fd90d7",
        title: "Stoly",
        link: "/nabytek",
      },
      {
        imgUrl: "https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/FB9DD427-1FD2-495F-9640-B3462D6E652D.jpeg?alt=media&token=42c915e7-bc8b-4c2c-bb45-67d4306b3aa1",
        title: "Ostatní",
        link: "/ostatni",
      },
    ];
  
    function nextCard() {
      if (currentCard < cards.length - 2) {
        currentCard += 2;
      } else {
        currentCard = 0;
      }
    }
  
    function prevCard() {
      if (currentCard >= 2) {
        currentCard -= 2;
      } else {
        currentCard = cards.length - 2;
      }
    }
  </script>
  
  <div class="px-4 py-8 max-w-screen-xl mx-auto">
    <div class="sm:flex sm:items-center sm:gap-16">
      <div class="sm:w-1/2 sm:text-center sm:mb-8">
        <h2 class="text-4xl font-extrabold text-gray-900">Co děláme?</h2>
        <p class="mt-4">
          Naše truhlářské realizace jsou plné vášně a preciznosti. Vytváříme
          nejen kuchyně, ale i elegantní skříně a nábytkové kusy, které spojují
          funkci s estetikou. Každý projekt je jedinečný a pečlivě promyšlený do
          nejmenšího detailu. Vaše představy a potřeby jsou naším hlavním směrem,
          ať už se jedná o kuchyň, skříň nebo jiný nábytek. S námi získáte nejen
          praktičnost, ale i krásu do svého domova.
        </p>
      </div>
      {#each [currentCard, currentCard + 1] as i (i)}
        <div class="sm:w-1/4 mb-8 hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer">
          <a href={cards[i].link}>
            <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
              <img
                src={cards[i].imgUrl}
                class="w-full aspect-w-8 aspect-h-9 object-cover"
                alt=""
              />
              <div class="p-4">
                <p class="mb-1 text-sm text-primary-500 text-center">
                  • KSDINTERIORS •
                </p>
                <h3 class="text-xl font-medium text-gray-900 text-center">
                  {cards[i].title}
                </h3>
              </div>
            </div>
          </a>
        </div>
      {/each}
    </div>
    <div class="text-center mt-4">
      <button
        on:click={prevCard}
        class="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        Předchozí
      </button>
      <button
        on:click={nextCard}
        class="px-4 py-2 ml-4 text-sm font-medium text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300"
      >
        Další
      </button>
    </div>
  </div>
  