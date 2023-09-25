<section class="bg-white">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class="font-light text-black sm:text-center sm:text-lg">
            <h2 class="text-center mb-4 text-4xl font-extrabold text-gray-900">Vítejte</h2>
            <p class="mb-4">Naše mistrovské kusy spojují tradici a moderní design, aby vaše domovy zazářily. Každý výrobek nese pečlivý výběr materiálů a vášeň, kterou do naší práce vkládáme. Nezáleží na stylu – rustikálním, moderním nebo na míru – jsme zde, abychom vaše představy proměnili v realitu. Vstupte do světa dřeva a objevte krásu truhlářského řemesla.</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <!-- Pomalejší animace pro první obrázek (zde použijeme animate-pulse s delší dobou trvání) -->
            <div class="animate-pulse-slow sm:hidden">
                <img class="w-full rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/logo.png?alt=media&token=7eac34ad-d4e5-4a00-88c6-7f4062c9907d" alt="office content 1">
            </div>
            <div class="sm:block">
                <!-- Obsah pro PC (je viditelný na obrazovkách s rozlišením sm a vyšším) -->
                <img class="w-full rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/truhlarstvi-interiors.appspot.com/o/logo.png?alt=media&token=7eac34ad-d4e5-4a00-88c6-7f4062c9907d" alt="office content 1">
            </div>
        </div>
        
    </div>
</section>

<style>
    /* CSS pro pomalé animace */
    @keyframes pulse-slow {
        0%, 100% {
            opacity: 0.9;
        }
        50% {
            opacity: 0.9;
        }
    }

    @keyframes bounce-slow {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    /* Použití pomalých animací */
    .animate-pulse-slow {
        animation: pulse-slow 4s infinite;
    }

    .animate-bounce-slow {
        animation: bounce-slow 4s infinite;
    }
</style>

