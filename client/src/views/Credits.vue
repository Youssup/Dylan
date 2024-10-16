<script setup lang="ts">
</script>

<template>
    <div class="slide-in-blurred-bottom p-20">
        <p class="text-white">Credits -</p>
        <br>
        <p class="text-white">None of this would be possible without my mother. My mother was a very strong single
            mother who always taught me to persevere and dream big. My mother gave me my strength and gave
            me my work ethic. Without her I wouldn't be here typing this right now. I will forever appreciate
            my mother and I thank her so much for pushing me forward when I needed it. I also have to
            credit my grandfather. Without my grandfather I wouldn't have the heart I have today. He has
            given me so many things in this life and I appreciate all of them so much. He's the one man in
            my life that I can talk to about everything and anything and know it's going to be ok. Lastly, I
            appreciate you! Yes, the person who clicked on my website and the person who watched at
            least one of my videos. Without you none of this would be possible. I thank you so much for
            being here with me on my journey. I will never stop creating for you guys and I will always put
            out my best work. So again, thank you so much for being here and supporting me.
        </p>
        <br>
        <p class="text-white"><i>Sincerely, Dylan Hannigan</i></p>
    </div>
</template>

<style scoped>
.flicker-in-1 {
    -webkit-animation: flicker-in-1 1s linear both;
    animation: flicker-in-1 1s linear both
}

@-webkit-keyframes slide-in-blurred-bottom {
    0% {
        -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(.2);
        transform: translateY(1000px) scaleY(2.5) scaleX(.2);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0
    }

    100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1
    }
}

@keyframes slide-in-blurred-bottom {
    0% {
        -webkit-transform: translateY(1000px) scaleY(2.5) scaleX(.2);
        transform: translateY(1000px) scaleY(2.5) scaleX(.2);
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
        -webkit-filter: blur(40px);
        filter: blur(40px);
        opacity: 0
    }

    100% {
        -webkit-transform: translateY(0) scaleY(1) scaleX(1);
        transform: translateY(0) scaleY(1) scaleX(1);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1
    }
}

@-webkit-keyframes flicker-in-1 {
    0% {
        opacity: 0
    }

    10% {
        opacity: 0
    }

    10.1% {
        opacity: 1
    }

    10.2% {
        opacity: 0
    }

    20% {
        opacity: 0
    }

    20.1% {
        opacity: 1
    }

    20.6% {
        opacity: 0
    }

    30% {
        opacity: 0
    }

    30.1% {
        opacity: 1
    }

    30.5% {
        opacity: 1
    }

    30.6% {
        opacity: 0
    }

    45% {
        opacity: 0
    }

    45.1% {
        opacity: 1
    }

    50% {
        opacity: 1
    }

    55% {
        opacity: 1
    }

    55.1% {
        opacity: 0
    }

    57% {
        opacity: 0
    }

    57.1% {
        opacity: 1
    }

    60% {
        opacity: 1
    }

    60.1% {
        opacity: 0
    }

    65% {
        opacity: 0
    }

    65.1% {
        opacity: 1
    }

    75% {
        opacity: 1
    }

    75.1% {
        opacity: 0
    }

    77% {
        opacity: 0
    }

    77.1% {
        opacity: 1
    }

    85% {
        opacity: 1
    }

    85.1% {
        opacity: 0
    }

    86% {
        opacity: 0
    }

    86.1% {
        opacity: 1
    }

    100% {
        opacity: 1
    }
}

@keyframes flicker-in-1 {
    0% {
        opacity: 0
    }

    10% {
        opacity: 0
    }

    10.1% {
        opacity: 1
    }

    10.2% {
        opacity: 0
    }

    20% {
        opacity: 0
    }

    20.1% {
        opacity: 1
    }

    20.6% {
        opacity: 0
    }

    30% {
        opacity: 0
    }

    30.1% {
        opacity: 1
    }

    30.5% {
        opacity: 1
    }

    30.6% {
        opacity: 0
    }

    45% {
        opacity: 0
    }

    45.1% {
        opacity: 1
    }

    50% {
        opacity: 1
    }

    55% {
        opacity: 1
    }

    55.1% {
        opacity: 0
    }

    57% {
        opacity: 0
    }

    57.1% {
        opacity: 1
    }

    60% {
        opacity: 1
    }

    60.1% {
        opacity: 0
    }

    65% {
        opacity: 0
    }

    65.1% {
        opacity: 1
    }

    75% {
        opacity: 1
    }

    75.1% {
        opacity: 0
    }

    77% {
        opacity: 0
    }

    77.1% {
        opacity: 1
    }

    85% {
        opacity: 1
    }

    85.1% {
        opacity: 0
    }

    86% {
        opacity: 0
    }

    86.1% {
        opacity: 1
    }

    100% {
        opacity: 1
    }
}
</style>