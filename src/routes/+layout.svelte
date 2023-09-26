<!-- Layout.svelte -->
<script>
  import "../app.css";
  import { onMount } from "svelte";
  import NavigacniLista from "../komponenty/navigace/NavigacniLista.svelte";
  import Footer from "../komponenty/footer/Footer.svelte";

  let showSpinner = true;
  let showNav = false;
  let showFooter = false; // Přidáme proměnnou pro stav zobrazení footeru

  // Simulace načítání po dobu 3 sekund
  onMount(() => {
    setTimeout(() => {
      showSpinner = false;
      showNav = true;
      showFooter = true; // Po načtení obsahu zobrazíme footer
    }, 3000);
  });
</script>

<main class="bg-white min-h-screen">
  {#if showNav}
    <nav>
      <NavigacniLista />
    </nav>
  {/if}

  {#if showSpinner}
    <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div class="animate-spin rounded-full h-32 w-32 border-t-4 border-white"></div>
    </div>
  {/if}

  {#if showFooter} <!-- Zobrazíme footer, pokud showFooter je true -->
    <div class="{showSpinner || !showNav ? 'hidden' : 'block'} container mx-auto px-4 py-8">
      <slot></slot>
    </div>
    <footer>
      <Footer />
    </footer>
  {/if}
</main>
