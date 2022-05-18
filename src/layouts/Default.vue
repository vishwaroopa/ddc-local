<template>
    <div id="app">

        <header id="topnav" class="fixed flex flex-row cc:flex-col z-50 items-center w-full bg-white">
            <nav role="navigation" class="flex flex-col items-center space-between max-w-1200 mx-auto w-full px-5 py-0 cc:py-0">

                <div class="flex items-center w-full space-between">

                    <div role="navigation" class="text-white z-30 w-full flex flex-wrap justify-end xl:flex-no-wrap">
                        <a href="/" class="mr-auto flex-auto self-start text-black logo_image">
                            <h1 class="w-full text-4xl font-semibold capitalise text-yellow1">Distributed Data Cloud</h1>
                        </a>

                        <div :class="[showDrawer ? 'bg-transparent-75' : 'hidden']" class="fixed cc:hidden inset-0 trans-bg-color" @click="toggleDrawer(false)" />
                        <ul ref="drawer" :style="{ right: showDrawer ? '0px' : '-100%' }" style="transition: right 0.25s ease;" class="fixed z-100 cc:static cc:flex items-center inset-y-0 h-screen cc:h-auto bg-black cc:bg-transparent w-full cc:w-auto m-0 mobile-menu">
                            <li class="cc:hidden flex justify-between p-2">
                                <a href="/" to="/" class="p-2 pl-4 logo_image">
                                    <img src="/images/uploads/ddc_logo.png" alt="Distributed Data Cloud" />
                                </a>
                                <div :class="{ hidden: !showDrawer }" class="p-2" @click="toggleDrawer(false)">
                                    <button id="close">X</button>
                                </div>
                            </li>

                            <li class="flex relative text-black trans-bg-color pl-0 text-base  menu-item cc:px-3 lg:px-6" @click='toggle = !toggle'>
                                <label aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <a href='/categories/' to="/categories" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2">Categories</a>
                                        <span class="nav-arrow text-black"></span>
                                    </div>
                                    <transition name="slider">
                                        <ul v-show='toggle' id="submenu" class="cc:absolute py-3 whitespace-no-wrap bg-yellow1 text-white min-w-full cc:min-w-200 rounded-sm submenu" aria-label="submenu">
                                            <li class="main-nav-link" v-for="category in $page.allCategory.edges" :key="category.id">
                                                <a v-text="category.node.title" :href="`/categories/${category.node.title}`" aria-haspopup="true" class="flex px-8 py-2 cc:px-8 w-full"> {{ category.title }} </a>
                                            </li>
                                        </ul>
                                    </transition>
                                </label>
                            </li>


                            <li v-for="(item, x) in menu" :key="x" :id="`menu-${x}`" class="flex cc:px-3 lg:px-6 relative text-black trans-bg-color pl-0 text-base hover:text-yellow1 menu-item" :class="{'cc:pl-3 lg:pl-6' : x === 0, 'cc:pl-3 lg:pl-6' : x === Object.keys(menu).length - 2, 'cc:pl-3 lg:pl-6' : x !== 0 && x !== Object.keys(menu).length - 2}"
                                @click="item.show = !item.show">
                                <a :href="item.route" v-if="item.route" :to="item.route" class="p-2 px-6 cc:px-2 cc:py-2">{{ item.label }}</a>
                                <label v-else aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <span v-text="item.label" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2" />
                                        <span class="nav-arrow text-black" />
                                    </div>
                                    <transition name="slider">
                                        <ul v-show="item.show" class="cc:absolute py-3 whitespace-no-wrap bg-yellow1 cc:mt-4 min-w-full cc:min-w-200 rounded-sm submenu" aria-label="submenu">
                                            <li v-for="(subitem, y) in item.subitems" :key="y" class="main-nav-link" :class="{'child' : subitem.indent, 'parent' : subitem.parent}">
                                                <a @click="handleEvent(subitem.route)" :to="subitem.route" aria-haspopup="true" class="flex px-8 py-2 cc:px-2 w-full">{{ subitem.label }}</a>
                                            </li>
                                        </ul>
                                    </transition>
                                </label>
                            </li>
                            <li id="search-box" class="flex list-none font-normal rfs-text-lg p-1 pl-6 cc:px-2 cc:py-1 relative">
                                <span class="inline-block cursor-pointer"><search-blog v-model="searchResults" class="text-transparent" /></span>

                            </li>
                        </ul>

                    </div>
                    <div id="mobile_search"><img @click="searchClick" src="/uploads/icons/search-icon.svg" style="transform: rotate(-45deg); width: 25px; height: 25px; margin-top: 25px; margin-left: 20px; " /><span class="inline-block cursor-pointer pb-2"><search-blog1 class="text-transparent" /></span></div>
                    <div class="cursor-pointer cc:hidden flex-1 flex items-center justify-end ml-8" @click="toggleDrawer(true)">
                        <button id="hamburger" aria-label="Show the menu">
                            <div class="line1"></div>
                            <div class="line1"></div>
                            <div class="line1"></div>
                        </button>
                    </div>

                </div>
            </nav>
        </header>
        <main class="main">
            <slot />
        </main>

        <section class="w-full py-4 text-gray-100 px-5 bg-black footer1" data-v-a1c7cc20="">
            <div class="w-full max-w-1200 mx-auto flex flex-row flex-wrap justify-between items-center" data-v-a1c7cc20="">
                <p class="flex flex-col w-full sm:w-3/4 text-sm text-left sm:text-left mb-6 sm:mb-0" data-v-a1c7cc20="">&#169; 2022 Distributed Data Cloud. All rights reserved. </p>
            </div>
        </section>
        <section>
            <div class="max-w-1200 mx-auto flex flex-row flex-wrap justify-between items-center">
                <cookie-law>
                    <div slot-scope="props" class="max-w-1200 mx-auto">

                        By continuing to use this website, you consent to the use of cookies in accordance with our  <span class="bold underline cookie_terms"><a href="/terms">Cookie Policy</a></span>.

                        <button style="margin-left:20px" class="skew button button-sm yellow mx-0 px-4 lg:px-5" @click="props.accept"><span>Accept All Cookies</span></button><button class="skew button button-sm yellow mx-0 px-4 lg:px-5" @click="props.close"><span>Ignore me</span></button>
                    </div>

                </cookie-law>
            </div>
        </section>
    </div>
</template>

<script>
    import CookieLaw from 'vue-cookie-law'
export default {
  props: {
  },
        components: {
            CookieLaw
        },
}
</script>

<style lang="scss">
    #mobile_search {
display:none;
}
    .main-nav-link a {
        text-transform: capitalize;
    }
    .post-card__title:hover, .featured-author:hover, .menu-item:hover {
        color: #17718c !important;
    }
    @media only screen and (max-width: 768px) {
        .title_post {
            padding-top: 90px !important;
        }
        .text-xl {
            font-size: inherit !important;
        }
        .logo_image h1 {
            font-size: 20px;
            font-weight: 700;
        }
        .mobile-menu span, .mobile-menu a {
            color: white;
        }
        #search-box {
    display:none; }
        .nav-arrow {
            position: absolute;
            right: 1.5rem;
            top: 54%;
            transform: translateY(-50%) rotate(180deg);
            width: 24px;
            height: 24px;
            transform-origin: center center;
            right: 20px !important;
        }
        .mobile-menu li {
           padding:10px;
        }
        .mobile-menu .nav-arrow:before, .mobile-menu .nav-arrow:after {
            background-color: #17718c!important;
        }

    
       
    }
    .line1 {
            width: 35px;
            height: 5px;
            background-color: black;
            margin: 6px 0;
        }
    .nav-arrow:after {
        transform: rotate(135deg);
        left: 1px;
        --bg-opacity: 1;
        background-color: black!important;
    }
    .nav-arrow:before {
        transform: rotate(45deg);
        left: 5px;
        --bg-opacity: 1;
        background-color: black !important;
    }
    .nav-arrow {
        position: absolute;
        right: 1.5rem;
        top: 54%;
        transform: translateY(-50%) rotate(180deg);
        width: 12px;
        height: 12px;
        transform-origin: center center;
        right: -10px;
    }
    .nav-arrow:after, .nav-arrow:before {
        content: "";
        width: 6px;
        height: 2px;
        top: 5px;
        position: absolute;
        --bg-opacity: 1;
        background-color: #17718c;
        background-color: rgba(255,205,50,var(--bg-opacity));
    }
    #submenu {
        display: none ;
    }
    .menu-item:hover > label > .submenu {
        display: block !important;
    }

    #search-site {
        border: 1px solid #c1c1c1;
    }
    #topnav {
        padding: 15px;
        border-bottom: 1px solid grey;
    }
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: var(--header-height);
        padding: 0 calc(var(--space) / 2);
        top: 0;
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
a:hover {
    cursor:pointer;
}
</style>
<script>
    import SearchBlog from '~/components/SearchBlog.vue'
    import SearchBlog1 from '~/components/SearchBlog1.vue'
    export default {
        data: () => ({
            searchResults: null,
            featuredBlog: null,
            categories: [],
            toggle: false,
            menu: [
                {
                    label: 'Our Authors',
                    route: '/our-authors/'
                },
            ],
            showDrawer: false,
            searchFocus: false,
            openNav: false,
        }),
        components: {

            SearchBlog,
            SearchBlog1
        },
        methods: {
            handleEvent(open) {
                window.location.href = open;
            },
            toggleDrawer(open) {
                this.showDrawer = open
          
            },
            searchClick() {
                var x = document.getElementById("search_div1");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            },
            clickAnywhere(e) {
            
                this.menu.forEach((item, x) => {

                    if (!document.getElementById(`menu-${x}`).contains(e.target) && item.show) { item.show = false } else { item.show = false }
                })

            },
            pressAnything(e) {
                
            }
        },
        mounted() {
            var element = document.getElementById('submenu');

            element.style.display = null;
            document.getElementById("search_div1").style.display = "none";
            document.addEventListener('click', this.clickAnywhere)
            document.addEventListener('keydown', this.pressAnything)
            document.addEventListener('scroll', this.scrollAnytime)
            if (this.$page?.featuredBlog?.edges?.length > 0) {
                this.featuredBlog = this.$page.allPost.edges[0].node;
            }
            if (this.$page?.allCategory?.edges?.length > 0) {
                this.$page.allCategory.edges.forEach((category) => {
                    this.categories.push(category.node);
                })
                this.categories.sort(function (a, b) {
                    let optA = a.title.toUpperCase();
                    let optB = b.title.toUpperCase();
                    return (optA < optB) ? -1 : (optA > optB) ? 1 : 0;
                });
            }
        }
    }
</script>
