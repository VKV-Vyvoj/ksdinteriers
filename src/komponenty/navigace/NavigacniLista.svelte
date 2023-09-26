<nav class="bg-black w-full flex items-center mx-auto px-8 h-20">
    <!-- Centered links next to each other -->
    <div class="flex w-full justify-center">
        <a class="mx-4 text-white" href="/">Domů</a>
        <a class="mx-4 text-white" href="/kuchyne">Kuchyně</a>
        <a class="mx-4 text-white" href="/skrine">Skříně</a>
        <a class="mx-4 text-white" href="/stoly">Stoly</a>
        <a class="mx-4 text-white" href="/stoly">Ostatní</a>
    </div>
</nav>

<style>
/* Media Query pro mobilní zařízení s maximální šířkou 640px */
@media (max-width: 640px) {
    /* Zde můžete upravit styly odkazů tak, aby byly viditelné a responzivní na malých obrazovkách */
    .mx-4 {
        margin: 4px; /* Nastavit vhodné odsazení pro odkazy */
    }
}

/* Styl pro aktivní odkaz */
a.active {
    text-decoration: underline; /* Podtrhne aktivní odkaz */
}
</style>
