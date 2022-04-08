
<script>
    import SearchBlog from '~/components/SearchBlog.vue'
    export default {

        data: () => ({
            categories: [],
            searchResults: null,
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
        metaInfo() {
            return {
                title: this.$page.category.title,
                meta: [{
                    key: 'description',
                    name: 'description',
                    content: 'Find blogs related to this Topic.'
                }]
            }
        },
        mounted() {
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
            // temp code to remove old service workers
            self.addEventListener('install', function (e) {
                self.skipWaiting();
            });

            self.addEventListener('activate', function (e) {
                self.registration.unregister()
                    .then(function () {
                        return self.clients.matchAll();
                    })
                    .then(function (clients) {
                        clients.forEach(client => client.navigate(client.url))
                    });
            });

            document.addEventListener('click', this.clickAnywhere)
            document.addEventListener('keydown', this.pressAnything)
            document.addEventListener('scroll', this.scrollAnytime)

        },
        
        methods: {

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
                if (e.key === 'Escape') {
                    this.showDrawer = false
                    this.searchFocus = false
                    this.menu.forEach((item, x) => {
                        if (item.show) item.show = false
                    })
                }
            }
        },
    }
</script>
<style scoped>
    .brighter-teal {
        color: #17718c;
    }

    @media screen and (min-width: 401px) and (max-device-width: 767px) {
        .featured_image {
            min-height: auto !important;
            max-height: 100% !important;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }

    .accent-yellow:after {
        height: 0 !important;
    }

    .accent-yellow {
        margin-right: 1.5rem !important;
    }

    .menu-item span, .menu-item a {
        font-weight: normal;
    }
    .postslist {
        border: 1px solid #a0aec0;
    }
    .main-nav-link a {
        text-transform: capitalize;
    }

    .overline {
        border-top: 5px solid #FFCD32;
        font-weight: 600;
    }

    #topnav {
        border-bottom: 1px solid black;
    }

    .accent-yellow:hover, .accent-yellow.active {
        background-color: #FFCD32;
        color: black;
        padding: 5px 15px 5px 15px;
    }

    .titlename {
        margin-bottom: 2px !important;
        padding-bottom: 0 !important;
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

    .accent-yellow {
        background-color: black;
        color: white;
        padding: 5px 15px 5px 15px;
    }

    .main-box {
        padding: 1.334% 5px;
        &:hover

    {
        & .arrow-only

    {
        @apply text-teal;
        &:after

    {
        transform: translateX(10px);
        cursor: pointer;
        color: teal;
    }

    }
    }
    }

    .current-post {
        & .arrow-only-white

    {
        @apply flex flex-row relative items-baseline rfs-text-base font-normal text-white;
        transition: all .2s ease;
        &:after

    {
        @apply flex ml-2;
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 30'%3E%3Cpath d='M47.2 13.2L34 .7c-1-1-2.6-.9-3.6.1s-.9 2.6.1 3.6l8.6 8.1H2.5C1.1 12.5 0 13.6 0 15s1.1 2.5 2.5 2.5h36.6l-8.6 8.1c-1 1-1.1 2.6-.1 3.6.5.5 1.2.8 1.8.8.6 0 1.3-.2 1.7-.7l13.2-12.5c.5-.5.8-1.1.8-1.8.1-.7-.2-1.4-.7-1.8z' fill='%231f292e'/%3E%3C/svg%3E ");
        filter: invert(1);
        width: 16px;
        height: 10px;
        transform: translateX(0);
        transition: all .2s ease;
    }

    }

    &:hover {
        & .arrow-only-white

    {
        @apply text-teal;
        &:after

    {
        transform: translateX(10px);
        cursor: pointer;
        color: teal;
    }

    }
    }
    }

    .arrow-only {
        @apply flex flex-row relative items-baseline rfs-text-base font-normal;
        transition: all .2s ease;
        &:after

    {
        @apply flex ml-2;
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 30'%3E%3Cpath d='M47.2 13.2L34 .7c-1-1-2.6-.9-3.6.1s-.9 2.6.1 3.6l8.6 8.1H2.5C1.1 12.5 0 13.6 0 15s1.1 2.5 2.5 2.5h36.6l-8.6 8.1c-1 1-1.1 2.6-.1 3.6.5.5 1.2.8 1.8.8.6 0 1.3-.2 1.7-.7l13.2-12.5c.5-.5.8-1.1.8-1.8.1-.7-.2-1.4-.7-1.8z' fill='%231f292e'/%3E%3C/svg%3E ");
        width: 16px;
        height: 10px;
        transform: translateX(0);
        transition: all .2s ease;
    }

    &:hover {
        @apply text-teal;
        &:after

    {
        transform: translateX(10px);
        cursor: pointer;
        color: teal;
    }

    }
    }
    .accent-yellow[data-v-76ac0e45] {
        background-color: #000;
        color: #fff;
        padding: 5px 15px;
    }

    .accent-yellow[data-v-76ac0e45] {
        margin-right: 1.5rem !important;
    }

    .accent-yellow {
        position: relative;
        left: 0;
       background-color: #000;
        color: #fff;
        padding: 5px 15px;
        font-weight: 400;
        text-transform: capitalize;
        font-size: 1rem;
        display: inline-flex;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        margin: 0 2rem 0.75rem 0;
        --text-opacity: 1;
        color: white !important;
        /* margin-right: 1.5rem!important; */
        color: rgba(23,33,38,var(--text-opacity));
        cursor: pointer;
    }

        .accent-yellow.active, .accent-yellow:hover {
            background-color: #17718c;
            color: #000;
            padding: 5px 15px;
        }
</style>

<template>
    <Layout>
       
        <section class="flex flex-col pb-2 pt-16 px-6 xl:px-0 bg-white">
        </section>
        <section class="px-6 xl:px-0 bg-white pb-8 pt-20" style="border-bottom: 1px solid #0000002e; margin-top: 0px;">
            <div class="max-w-1000 w-full mx-auto">
                <h1 class="w-full text-3xl  font-black capitalize text-black" style="margin:auto;text-align:center" v-html="$page.category.title" />
                <br />
            </div>

            <div id="current_post"></div>
        </section>

        <section class="px-6 xl:px-0 pb-0 pt-16">
            <div class="max-w-1200 w-full mx-auto">
                <div class="flex flex-row flex-wrap -mx-6">
                    <span class="text-black rfs-text-3xl flex flex-col md:flex-row max-w-1200 mx-auto md:px-12  pb-8" v-if="searchResults && searchResults < 1">No search results..</span>

                    <div v-for="edge in searchResults ? searchResults : $page.category.belongsTo.edges" :key="edge.node.id" class="flex flex-col w-full relative current-post pb-16 px-6 md:px-20">
                        <div class="flex flex-col md:flex-row max-w-1200 w-full  mx-auto relative postslist border">
                            <div :to="edge.node.path" class="w-full md:w-2/5">
                                <div class="text-white">
                                    <g-link class="post-card__link" :to="edge.node.path"><g-image style="height:300px;" alt="Cover image" v-if="edge.node.cover_image" class="post-card__image" :src="edge.node.cover_image" /> </g-link>
                                </div>
                            </div>
                            <div class="w-full md:w-4/5 p-2">
                                <div class="text-black md:pl-20 block">
                                    <div class="categorieslist">
                                        <template v-if="edge.node.categories">
                                            <a v-for="(category) in edge.node.categories" :key="category.id" v-text="category.title" :href="`/categories/${category.title}`" class="categorylist capitalize font-bold brighter-teal block mb-8 md:mr-6" />
                                        </template>
                                    </div>
                                    <g-link :to="edge.node.path">
                                        <h2 class="post-card__title pb-2 text-xl font-bold text-left hover:text-sky-600" v-html="edge.node.title" />
                                        <p class="post-card__description hidden_test" v-html="edge.node.description" /></br>
                                    </g-link>

                                    <div class="flex">
                                        <div v-if="edge.node.author.authorImage" class="w-1/7 mr-6">
                                            <a :href="edge.node.author.path" :to="edge.node.author.path">
                                                <img :src="`${edge.node.author.authorImage}`" style=" border-radius: 50%" class="w-16" />
                                            </a>
                                        </div>
                                        <div class="md:w-2/3 authorname">
                                            <a :href="edge.node.author.path" :to="edge.node.author.path">
                                                <p class="featured-author font-bold mt-1" v-text="edge.node.author.name" />
                                            </a>
                                            <p class="font-normal mb-0" v-text="edge.node.date" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Pager v-if="!searchResults" class="flex w-full mx-auto py-8 bg-white text-3xl justify-center" :info="$page.category.belongsTo.pageInfo" linkClass="pagerLink" />

    </Layout>
</template>


<page-query>
    query Category($id: ID!) {
    category(id: $id) {
    title
    path
    belongsTo {
    edges {
    node {
    ...on Post {
    id
    title
    date(format: "DD MMM YYYY")
    path
    description
    cover_image
    thumbnail_image
    categories {
    id
    title
    }
    author {
    name
    authorImage
    path
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