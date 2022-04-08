<style>
    .backgroundparallax {
        background-attachment: fixed;
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

    .post-card__image {
        height:300px;
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
        padding: 300px 0 200px 0px;
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
                <h1 class="w-full text-3xl  font-black capitalize text-black" style="margin:auto;text-align:center">All</h1>
                <br />
            </div>

            <div id="current_post"></div>
        </section>
       
        <section class="px-6 xl:px-0 pb-6 pt-16" id="current_post">
            <div class="max-w-1200 w-full mx-auto">
                <div class="flex flex-row flex-wrap -mx-6">
                    <div v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node.post" class="flex flex-col w-full relative current-post pb-16 px-6 md:px-20">
                        <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative postslist">
                            <div :to="edge.node.path" class="w-full md:w-2/5">
                                <div class="text-white">
                                    <g-link class="post-card__link" :to="edge.node.path"><g-image  style="height:300px;" alt="Cover image" v-if="edge.node.cover_image" class="post-card__image" :src="edge.node.cover_image" /> </g-link>
                                </div>
                            </div>
                            <div class="w-full md:w-3/4 p-2">

                                <div class="text-black md:pl-20 block">
                                    <template v-if="edge.node.categories">
                                        <div class="categorieslist">
                                            <a v-for="(category) in edge.node.categories" :key="category.id" v-text="category.title" :href="`/categories/${category.title}`" class="categorylist capitalize font-bold brighter-teal block mb-8 md:mr-6" />
                                        </div>
                                    </template>
                                                                 <g-link :to="edge.node.path">
                                                                     <h2 class="post-card__title pb-2 text-xl font-bold text-left hover:text-sky-600" v-html="edge.node.title" />
                                                                     <p class="post-card__description hidden_test" v-html="edge.node.description" /></br>
                                                                 </g-link>
                                    <div class="flex">
                                        <div class="w-1/7 mr-6">
                                            <a :href="edge.node.author.path" :to="edge.node.author.path">
                                                <img :src="`${edge.node.author.authorImage}`" style=" border-radius: 50%;width:70px;height:70px" class="w-16" />
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
        

    </Layout>
</template>
<script>
import BaseSection from "../components/BaseSection.vue";
    export default {
        components: {
            BaseSection,
        },
        clickAnywhere(e) {
            this.menu.forEach((item, x) => {
                if (!document.getElementById(`menu-${x}`).contains(e.target) && item.show) item.show = false
            })

        },
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
    cover_image (width: 770, height: 380, blur: 10)
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
