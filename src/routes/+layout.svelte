
<script>
    // Importovat globální CSS styl pro váš projekt
    import "../app.css";
	import Footer from "../komponenty/footer/Footer.svelte";
	import NavigacniLista from "../komponenty/navigace/NavigacniLista.svelte";
  </script>
  
  <main class="bg-white min-h-screen">
    <nav>
        <NavigacniLista/>
    </nav>
    
    <div class="container mx-auto px-4 py-8">
      <slot></slot>
    </div>
    <footer>
        <Footer/>
    </footer>
  </main>
  
  <style>
 
  </style>
  