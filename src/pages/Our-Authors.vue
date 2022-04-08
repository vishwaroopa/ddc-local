<style scoped>
    .brighter-teal {
        color: #00c3d7;
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

    .leading-none {
        color: #497070;
    }

    .menu-item span, .menu-item a {
        font-weight: normal;
    }

    .hidden_test {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .hidden_test1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .main-nav-link a {
        text-transform: capitalize;
    }

    @media only screen and (max-width: 767px) {
        .hidden_test {
            -webkit-line-clamp: 20;
            line-clamp: 20;
        }

        .authorName {
            padding-top: 20px;
        }
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

    .author-about {
        line-height: 27px;
    }

    .rfs-text-4xl {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .featured_image {
        min-height: 220px;
        min-width: 220px;
        object-fit: cover;
    }

    .featured-author {
        font-size: 1.4rem;
        font-weight: 600;
    }

    .featured_image1 {
        min-height: 220px;
        min-width: 220px;
        object-fit: cover;
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

    .main-box {
        padding-top: 25%;
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

    .pic {
        background-image: url(/uploads/blog/abstract1-square.jpg);
        background-size: cover;
        background-position: center;
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

      
        <section class="flex flex-col pb-2 pt-24 px-6 xl:px-0 bg-white">
        </section>
        <section class="px-6 xl:px-0 py-6" id="current_post">
            <div class="max-w-1200 w-full mx-auto md:px-12">
                <h1 class="justify-center text-3xl capitalize font-bold" style="text-align: center;">Our Authors</h1>
               <br>
                <p class="font-normal pb-12" style="border-bottom: 1px solid #80808047;"  id="current-post">DDC authors write compelling stories about cutting edge technologies & trends, people, products, events, and topic that is valuable to our customers, employees and partners.</p>
                <div class="flex flex-row flex-wrap pt-8 pb-8 font-semibold">
                    <span class="text-black rfs-text-3xl flex flex-col md:flex-row max-w-1200 mx-auto md:px-12  pb-8" v-if="searchResults && searchResults < 1">No search results by given author name..</span>
                    <div v-for="edge in searchResults ? searchResults : $page.allAuthor.edges" :key="edge.node.id" class="flex flex-col w-full relative current-post pb-10">
                        <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto">
                            <a :href="edge.node.path" :to="edge.node.path" class="w-full md:w-1/3 mr-12">
                                <div class="text-white">
                                    <img class="featured_image" :src="`${edge.node.authorImage}`" style="width:250px;height:250px" />
                                </div>
                            </a>
                            <div class="w-full md:w-1/1">
                                <div class="text-black">
                                    <!-- <h6 class="text-yellow2 hidden md:block">Data Warehouse Modernization</h6> -->

                                    <a :href="edge.node.path" :to="edge.node.path"><h4 class="text-2xl capitalize font-bold pt-2 pb-2 authorName" v-html="edge.node.name" /></a>
                                    <p class="featured-author brighter-teal" v-text="edge.node.position" />
                                    <div class="">
                                        <p class="rfs-text-base leading-tight hidden_test font-normal author-about" v-html="edge.node.authorAbout"></p>
                                        <p class="rfs-text-base leading-tight font-normal author-about" v-html="edge.node.authorInterest"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Pager v-if="!searchResults" class="flex w-full mx-auto py-8 bg-white text-3xl justify-center" :info="$page.allAuthor.pageInfo" linkClass="pagerLink" />

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
        setAltImg(event) {
            event.target.src = "/uploads/author.png"
        },
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
    query Author($page: Int) {
    allAuthor (perPage: 12, page: $page, sortBy: "name", order: ASC) @paginate {
    pageInfo {
    totalPages
    currentPage
    isFirst
    isLast
    }
    edges {
    node {
    name
    authorImage
    authorAbout
    path
    position
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