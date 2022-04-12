<style>
    html,
    body {
        width: 100%;
        margin: 0;
        padding: 0;
        position: relative;
        z-index: 0;
    }

    div.parallax-image1 {
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        top: 0;
    }

    .sticky {
        margin-top: -100vh;
        width: 100%;
        height: 100vh;
        position: -webkit-fixed; /* Safari */
        position: fixed;
        top: 0;
        background: linear-gradient(45deg, red, blue);
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9999 !important;
    }

    div.section-header {
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        z-index: 9999;
    }

    div.header-text {
        height: auto;
        width: 100%;
        color: white;
    }

    div.section {
        position: relative;
        background-color: white;
        width: 100%;
        z-index: 9999
    }

    .backgroundparallax {
        background-attachment: fixed;
    }

    .post-card__title:hover, .featured-author:hover, .menu-item:hover {
        color: #17718c !important;
    }

    #hamburger:after, #hamburger:before {
        position: absolute;
        left: 0;
        --bg-opacity: 1;
        background-color: #fff;
        background-color: rgba(255,255,255,var(--bg-opacity));
        content: "";
    }

    .scroll_to {
        padding-top: 110px;
        cursor: pointer
    }

    .brighter-teal {
        color: #17718c !important;
    }

    .postslist {
        border: 1px solid #a0aec0;
    }

    @media only screen and (max-width: 768px) {

        .learnmore_button {
            padding: 100px 0 200px 0px !important;
        }

        .banner_content {
            font-weight: 500;
            padding: 4px 0px 4px 0px !important;
            margin: 0px;
        }

        .grid_column {
            width: 100% !important;
            float: none !important;
        }

        .title {
            font-size: 30px !important;
        }

        .subtitle {
            font-size: 17px !important;
        }

        .layout_width {
            width: 100% !important;
        }

        .banner_content {
            font-size: 15px !important;
        }

        .banner_title {
            font-size: 25px !important;
        }

        .bg-container {
            height: 550px !important;
        }
    }

    .bg-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        overflow: hidden;
        transition: all 0.5s;
        z-index: -1;
    }
    /*
        .banner_content p {
            margin-bottom: 1.5rem;
        } */

    .layout_width {
        margin-left: auto;
        margin-right: auto;
    }

    .hidden_test {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .grid_column {
        width: 33.33%;
        /* border: 5px solid black; */
        display: flex;
        flex-wrap: wrap;
        float: left;
        padding: 20px;
    }



    .banner_content {
        font-size: 25px;
        font-weight: 500;
        padding: 40px 0px 40px 0px;
        margin: 0px;
    }

    .bg-container1 {
        width: 100%;
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        overflow: hidden;
        transition: all 0.5s;
        z-index: -1;
    }

    .post-card__title {
        margin-top: 20px;
    }

    body, h1, h2, h3, h4, p, span, button, a {
        font-family: "Questrial" !important;
    }

    body {
        background-color: white;
        font-weight: 400;
    }

    .text-white {
        color: white;
    }

    .text-blue-700 {
        color: #17718c;
    }

    .learn-more {
        background-color: #17718c;
        border: 1px solid #17718c;
        border-radius: 5px;
        padding: 5px 30px;
        color: white;
        font-size: 20px;
    }

        .learn-more:hover {
            opacity: 0.8;
        }

    .text.center {
        text-align: center;
    }

    .title {
        font-size: 100px;
        letter-spacing: 0px;
        font-weight: 400;
        padding-top: 5px;
    }

    .subtitle {
        font-size: 32px;
        letter-spacing: 0px;
        color: #76f5ff;
        font-weight: 400;
        margin: 0px;
    }


    .results_title {
        padding: 30px;
    }

    @media only screen and (max-width: 600px) {
        .post-card__image {
        }
    }

    .post-card__image {
    }

    .grid_section {
        padding: 30px 0px 30px 0px;
    }

    .main {
        padding: 0 !important;
    }

    .main_section {
        background-repeat: no-repeat;
        background-size: cover;
    }

    .learnmore_button {
        padding: 300px 0 1px;
    }
</style>
<template>
    <Layout>
        <div class="parallax-image1 sticky page-title" :style="{
                backgroundImage: `url(${$page.home.bannerHero.bgImage})`,
              }">
        </div>
        <div class="section-header page-title">
            <div class="p-6 text-center header-text">
                <h1 class="title" :class="$page.home.bannerHero.titleColor || 'text-yellow1'">{{ $page.home.bannerHero.title }}</h1>
                <h2 class="subtitle" :class="$page.home.bannerHero.subTitleColor || 'text-white'">
                    {{ $page.home.bannerHero.subTitle }}
                </h2>
                <div class="pt-20 learnmore_button">
                    <a href="/about">
                        <button class="learn-more py-3">
                            {{ $page.home.bannerHero.learnMore }}
                        </button>
                    </a>
                    <span><img @click="scroll_down" class="mx-auto flex text-center my-auto pt-30 scroll_to" src="/images/uploads/arrow.png" /></span>
                </div>

            </div>
        </div>
        <div class="section">

            <div class="main_section1" id="main_section1">
                <h1 class="banner_title text-center py-10 text-4xl font-semibold" :class="$page.home.bannerSection.titleColor || 'text-yellow1'">
                    {{ $page.home.bannerSection.title }}
                </h1>
                <div class="bg-container1 backgroundparallax" :style="{
                backgroundImage: `url(${$page.home.bannerSection.bnImage})`,
              }">
                    <div class="p-6 w-full h-full layout_width text-center max-w-1200">
                        <h2 class="text-white font-bold text-center banner_content" v-html="$page.home.bannerSection.body" />
                    </div>
                </div>
            </div>

            <section class="px-6 xl:px-0 pb-6 pt-20" id="current_post">
                <div class="max-w-1200 w-full mx-auto">
                    <div class="flex flex-row flex-wrap -mx-6">
                        <div v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node.post" class="flex flex-col w-full relative current-post pb-16 px-6 md:px-20">
                            <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative postslist">
                                <div :to="edge.node.path" class="w-full md:w-2/5">
                                    <div class="text-white">
                                        <g-link class="post-card__link" :to="edge.node.path"><img alt="Cover image" v-if="edge.node.thumbnail_image.src" class="post-card__image" :src="edge.node.thumbnail_image.src" /> <g-image alt="Cover image" v-else class="post-card__image" :src="edge.node.cover_image" /></g-link>
                                    </div>
                                </div>
                                <div class="w-full md:w-3/4 p-2">

                                    <div class="text-black md:pl-20 block">
                                        <template v-if="edge.node.categories">
                                            <div class="categorieslist">
                                                <a v-for="(category) in edge.node.categories" :key="category.id" v-text="category.title" :href="`/categories/${category.title}`" class="categorylist capitalize font-bold brighter-teal block mb-8 md:mr-6" />
                                            </div>
                                        </template>
                                        <g-link class="post-card__link" :to="edge.node.path">
                                            <h2 class="post-card__title text-xl capitalize font-bold text-lef" v-html="edge.node.title" />
                                            <p class="post-card__description hidden_test" v-html="edge.node.description" /></br>
                                        </g-link>
                                        <div class="flex">
                                            <div class="w-1/7 mr-6">
                                                <a :href="edge.node.author.path" :to="edge.node.author.path">
                                                    <img :src="`${edge.node.author.authorImage}`" style=" border-radius: 50%;width:60px;height:60px" class="w-16" />
                                                </a>
                                            </div>
                                            <div class="md:w-2/3 authorname">
                                                <a :href="edge.node.author.path" :to="edge.node.author.path">
                                                    <p class="featured-author font-bold mt-1" v-text="edge.node.author.name" />
                                                </a>
                                                <p v-text="edge.node.date" class="font-normal mb-0" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </Layout>
</template>
<script>
    import BaseSection from "../components/BaseSection.vue";
    import Layout from "../layouts/no.vue";
    export default {
        components: {
            BaseSection,
            Layout
        },
        methods: {
            scroll_down() {
                document.getElementById("main_section").scrollIntoView();
            }
        }

    };
</script>
<page-query>
    query Page{
    home: pages(path: "/content/pages/home") {
    bannerHero {
    title
    titleColor
    subTitle
    subTitleColor
    url
    learnMore
    bgImage
    }
    bannerSection {
    title
    titleColor
    body
    bnImage
    }
    }
    posts: allPost(filter: { published: { eq: true }},sortBy: "date", order: ASC) {
    edges {
    node {
    id
    title
    categories {
    id
    title
    }
    author {
    name
    authorImage
    id
    path
    }
    date (format: "DD MMM YYYY")
    timeToRead
    description
    cover_image
    thumbnail_image
    ...on Post {
    id
    title
    path
    categories {
    id
    title
    }
    }
    path
    }
    }
    }
    }
</page-query>