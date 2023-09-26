<script lang="ts">
    import Swal from 'sweetalert2';
    import { ref, push } from 'firebase/database';
    import { db } from "../../firebase/Firebase";
  
    let name: string = "";
    let email: string = "";
    let message: string = "";
    let sending: boolean = false;
  
    const formsRef = ref(db, 'dotazy'); // Změněno na složku "dotazy" v databázi
  
    async function handleSubmit() {
      try {
        sending = true;
  
        // Kontrola, zda jsou všechny pole vyplněny
        if (!name || !email || !message) {
          Swal.fire({
            icon: 'error',
            title: 'Chyba',
            text: 'Všechna pole formuláře jsou povinná. Vyplňte prosím všechny informace.',
            confirmButtonText: 'OK'
          });
          return;
        }
  
        const newFormRef = push(formsRef, {
          name: name,
          email: email,
          message: message
        });
  
        Swal.fire({
          icon: 'success',
          title: 'Formulář byl úspěšně odeslán',
          text: 'Děkujeme za váš dotaz!',
          confirmButtonText: 'OK'
        });
  
        name = "";
        email = "";
        message = "";
      } catch (error) {
        console.error("Chyba při ukládání dat:", error);
        Swal.fire({
          icon: 'error',
          title: 'Chyba',
          text: 'Při odesílání formuláře došlo k chybě. Zkuste to prosím znovu.',
          confirmButtonText: 'OK'
        });
      } finally {
        sending = false;
      }
    }
  </script>
  
  <main class="bg-white min-h-screen">
    <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
      <div class="bg-black px-10 py-10 text-center text-white">
        <p class="font-serif text-2xl font-semibold tracking-wider">Máte dotaz?</p>
        <p class="text-center text-blue-100">Využijte tohoto formuláře pro vaše dotazy</p>
      </div>
  
      <div class="space-y-4 px-8 py-10">
        <label class="block" for="name">
          <p class="text-gray-600">Jméno</p>
          <input bind:value={name} class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Zadejte jméno" />
        </label>
        <label class="block" for="email">
          <p class="text-gray-600">Emailová adresa</p>
          <input bind:value={email} class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="email" placeholder="Zadejte email" />
        </label>
        <label class="block" for="message">
          <p class="text-gray-600">Dotaz</p>
          <textarea bind:value={message} class="h-32 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1" type="text" placeholder="Sem napište vlastní dotaz"></textarea>
        </label>
        <div class="text-center">
          <button on:click={handleSubmit} disabled={sending} class="rounded-full bg-black px-10 py-2 font-semibold text-white">
            {sending ? "Odesílání..." : "Odeslat"}
          </button>
        </div>
      </div>
    </div>
  </main>
  