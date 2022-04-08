<style scoped>
    .leading-none {
        color: #497070;
    }
    .postslist {
        border: 1px solid #a0aec0;
    }
    .brighter-teal {
        color: #00c3d7;
    }

    a:not(.button):not(.social):hover {
        --text-opacity: 1;
        color: #FFCD32;
        color: rgba(255, 205, 50, var(--text-opacity));
        background-position: -100%;
    }

    .author-twitter {
        margin-top: 10px;
    }

    .social {
        float: left;
        float: left;
        padding: 10px 20px 10px 0px;
        border-bottom: none !important;
    }

        .social:hover {
            background-image: none !important;
            background-size: 0 !important;
            transition: none !important;
        }

    @media screen and (min-width: 401px) and (max-device-width: 767px) {
        .featured_image {
            min-height: auto !important;
            max-height: 100% !important;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }

    .titlename {
        margin-bottom: 2px !important;
        padding-bottom: 0 !important;
    }

    .menu-item span, .menu-item a {
        font-weight: normal;
    }

    .main-nav-link a {
        text-transform: capitalize;
    }

    .authorname p {
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
        display: block;
    }

    @media only screen and (max-width: 880px) {
        #hamburger, #hamburger::after, #hamburger::before {
            background-color: black;
        }

        .mobile-menu span, .mobile-menu a {
            color: white;
        }

        .mobile-menu .nav-arrow:before, .mobile-menu .nav-arrow:after {
            background-color: yellow;
        }

        .mobile-menu .main-nav-link.child a, .mobile-menu .main-nav-link a {
            color: black;
        }
    }

    .categorieslist {
        display: flex;
    }

    .rfs-text-4xl {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .hidden_test {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .leading-none {
        color: #497070;
    }

    .featured_image {
        min-height: 302px;
        max-height: 307px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .rfs-text-base {
        margin-bottom: 1rem
    }

    .rfs-text-4xl {
        margin-top: 0.8rem;
        margin-bottom: 0.8rem;
    }

    .featured_image1 {
        min-height: 390px;
        object-fit: cover;
    }

    .active.pagerLink {
        background-color: #ffcd32;
        border: 1px solid black;
        font-weight: bold;
        font-size: 25px;
    }

    .nav-arrow {
        margin-right: -5px;
    }

    .pagerLink {
        font-weight: bold;
        color: black;
        font-size: 25px;
    }

    .featured-author {
        margin-bottom: 0.5rem;
    }



    .main-box {
    }

    .active.pagerLink {
        background-color: #ffcd32;
        border: 1px solid black;
        font-weight: bold;
        font-size: 25px;
    }

    .nav-arrow {
        margin-right: -5px;
    }

    .pagerLink {
        font-weight: bold;
        color: black;
        font-size: 25px;
    }

    .featured-author {
        margin-bottom: 0.5rem;
    }



    .pic {
        background-image: url(/uploads/blog/abstract1-square.jpg);
        background-size: cover;
        background-position: center;
    }



    .float-box {
        @apply absolute p-5;
        top: 50%;
        transform: translateY(-50%);
    }

    @media only screen and (max-width: 640px) {
        .main-box {
            padding-top: 0%;
        }

        .float-box {
            @apply relative p-10;
            top: 0;
            left: 0;
            transform: translateY(0%);
        }
    }

    .bg-mask {
        @apply z-0 absolute top-0 bottom-0 left-0 right-0;
        background: rgba(0, 0, 0, .85);
    }

    .featured-date,
    .currentPost-date {
        font-size: 14px;
    }
</style>

<template>
    <Layout>

       
        <section class="flex flex-col pb-2 pt-32 px-6 xl:px-0 bg-white">
        </section>
        <section class="px-6 xl:px-0 bg-white pb-20 md:pt-0" style="border-bottom: 1px solid #0000002e;">
            <div class="flex flex-col md:flex-row max-w-1200 mx-auto md:px-12">
                <div class="w-full md:w-1/1">
                    <img :src="`${$page.author.authorImage}`" style="margin: auto; max-width: 250px;" />
                    <h1 class="font-bold capitalize text-2xl pt-2 pb-2" v-html="$page.author.name" style="text-align:center" />
                    <p class="brighter-teal text-xl" v-html="$page.author.position" style="text-align: center; margin-bottom: 1.5rem; font-weight: 600;" />
                    <div class="font-normal" v-html="$page.author.authorAbout" /><br />
                    <div class="font-normal" v-html="$page.author.authorInterest" />
                </div>

            </div>
            <div id="current_post"></div>
        </section>

        <section class="px-6 xl:px-0 pb-0 py-16">

            <div class="max-w-1200 w-full mx-auto">

                <div class="flex flex-row flex-wrap -mx-6">
                    <span class="text-black rfs-text-3xl flex flex-col md:flex-row max-w-1200 mx-auto md:px-12  pb-8" v-if="searchResults && searchResults < 1">No search results..</span>

                    <div v-for="edge in searchResults ? searchResults : $page.author.belongsTo.edges" :key="edge.node.id" class="flex flex-col w-full relative current-post pb-16 px-6 md:px-20">
                        <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative border postslist">
                            <div :to="edge.node.path" class="w-full md:w-2/5">
                                <div class="text-white">
                                    <g-link class="post-card__link" :to="edge.node.path"><g-image style="height:300px;" alt="Cover image" v-if="edge.node.cover_image" class="post-card__image" :src="edge.node.cover_image" /> </g-link>

                                </div>
                            </div>
                            <div class="w-full md:w-4/5 p-2">
                                <div class="text-black md:pl-20 block">
                                    <template v-if="edge.node.categories">
                                        <div class="categorieslist">
                                            <a v-for="(category) in edge.node.categories" :key="category.id" v-text="category.title" :href="`/categories/${category.title}`" class="categorylist capitalize font-bold brighter-teal block mb-8 md:mr-6" />
                                        </div>
                                    </template>
                                    <g-link :to="edge.node.path">
                                        <h2 class="post-card__title pb-2 text-xl font-bold text-left" v-html="edge.node.title" />
                                        <p class="post-card__description hidden_test" v-html="edge.node.description" /></br>
                                    </g-link>

                                    <div class="flex">
                                        <div class="md:w-1/7  mr-6">
                                            <img :src="`${edge.node.author.authorImage}`" class="w-16" style=" border-radius: 50%;" />
                                        </div>
                                        <div class="md:w-2/3 authorname">
                                            <p class="featured-author font-bold mt-1" v-text="edge.node.author.name" />
                                            <p v-text="edge.node.date" class="font-normal  mb-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Pager v-if="!searchResults" class="flex w-full mx-auto py-8 bg-white text-3xl justify-center" :info="$page.author.belongsTo.pageInfo" linkClass="pagerLink" />



    </Layout>
</template>

<script>

  

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
        methods: {
            handleEvent(open) {
                window.location.href = open;
            },
            toggleDrawer(open) {
                this.showDrawer = open
                if (open) disableBodyScroll(this.$refs.drawer)
                else clearAllBodyScrollLocks()
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
                    if (!document.getElementById(`menu-${x}`).contains(e.target) && item.show) item.show = false
                })

            },
            pressAnything(e) {
                if (e.key === 'Escape') {
                    this.showDrawer = false
                    this.searchFocus = false
                    this.menu.forEach((item, x) => {
                        if (item.show) item.show = false
                    })
                }
            }
        },
        mounted() {
            document.addEventListener('click', this.clickAnywhere)
            document.addEventListener('keydown', this.pressAnything)
            document.addEventListener('scroll', this.scrollAnytime)
            if (this.$page?.featuredBlog?.edges?.length > 0) {
                this.featuredBlog = this.$page.featuredBlog.edges[0].node;
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

<page-query>
    query Author($id: ID!) {
    author(id: $id) {
    name
  authorAbout
    authorImage
    position
    belongsTo  {
    edges {
    node {
    ...on Post {
    id
    title
    description
    date(format: "DD MMM YYYY")
    path
    cover_image
    thumbnail_image
    author {
    name
    authorImage
    path
    position
    }
    categories {
    id
    title
    }
    }
    }
    }
    }
    }
    allCategory {
    edges {
    node {
    id
    title
    path
    }
    }
    }
    }
</page-query>
