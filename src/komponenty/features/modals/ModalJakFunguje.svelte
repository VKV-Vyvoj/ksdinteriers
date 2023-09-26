<script lang="ts">
    let isOpen = false;


    function closeModal() {
        isOpen = false;
    }
</script>

{#if isOpen}
<div class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-white p-4 shadow-md rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Jak to u nás funguje?</h2>
        <p class="mb-4">Zde můžete vložit svůj popis toho, jak to u vás funguje. Můžete použít HTML pro formátování textu.</p>
        <button class="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300" on:click={closeModal}>Zavřít</button>
    </div>
</div>
{/if}

  