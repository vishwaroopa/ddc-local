<template>
    <div id="app">


        <main class="main">
            <slot />
        </main>
        <!-- Start cookieyes banner -->
        <script id="cookieyes" type="application/javascript" src="https://cdn-cookieyes.com/client_data/fa0f9f18003897d4381a8b28/script.js"></script> <!-- End cookieyes banner -->
        <section class="w-full py-4 text-gray-100 px-5 bg-black footer1" data-v-a1c7cc20="">
            <div class="w-full max-w-1200 mx-auto flex flex-row flex-wrap justify-between items-center" data-v-a1c7cc20="">
                <p class="flex flex-col w-full sm:w-3/4 text-sm text-left sm:text-left mb-6 sm:mb-0" data-v-a1c7cc20="">&#169; 2022 Distributed Data Cloud. All rights reserved. </p>
            </div>
        </section>
        <section>
            <div class="max-w-1200 mx-auto flex flex-row flex-wrap justify-between items-center">

            </div>
        </section>
    </div>
</template>

<script>

    export default {
    
        props: {
        },
        components: {
            CookieLaw: () =>
                import('vue-cookie-law'),
        },
    }
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top:0;
  z-index: 10;

  &__left,
  &__right {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1300px) {
    //Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--space) / 2);
  text-align: center;
  font-size: .8em;

  > span {
    margin: 0 .35em;
  }

  a {
    color: currentColor;
  }
}
</style>

