<style scoped>
    ::placeholder {
        @apply text-base text-gray-400 font-normal;
    }
</style>
<template>
    <div id="search_div" class="w-full max-w-1200 mx-auto flex flex-row justify-end items-center search_div text-transparent" style="top:20px;">
        <input ref="input"
               id="search-site"
               v-model="q"
               type="text"
               placeholder="Search Blog"
               class="w-100 text-base text-gray-400 font-normal border border-gray-200 focus:outline-none focus:shadow focus:border-gray-400 rounded px-3 appearance-none leading-normal bg-white"
               @keydown.esc="results = null"
               @keydown.down="selectionMove(1)"
               @keydown.up="selectionMove(-1)"
               @keydown.enter="$router.push(results[selectedIndex].link)" />
        <img @click="search" id="search-icon" @keydown.esc.enter="$refs.input.blur()" style="transform: rotate(-45deg); width: 25px; height: 25px; position: absolute; margin-right: 8px; " src="/uploads/icons/search-icon.svg" class="search-icon" />

        <div v-if="results" class="bg-white md:absolute rounded shadow-1xl sm:min-w-300 md:min-w-400 lg:min-w-600 max-w-600 overflow-y-auto" style="max-height: 70vh; top: 100%;">
            <div class="rfs-py-4 rfs-px-1 results_title" style="padding:30px"
                 v-for="(result, index) in results"
                 :key="index"
                 :class="{ 'bg-gray-200': selectedIndex === index }"
                 :id="`result-${index}`"
                 @mousemove="selectedIndex = index">
                <g-link style=" padding: 10px;" class="flex" :to="result.link">
                    <div class="flex flex-col w-1/5">
                        <img v-if="result.image" :src="result.image" class="shadow rfs-m-1" />
                        <div v-else class="rfs-m-1 text-gray-100" />
                    </div>
                    <div class="flex flex-col ml-2 w-4/5">
                        <a :href="origin + result.link" class="text-blue rfs-text-sm leading-none rfs-py-2"><p v-html="result.title" style="color:black" class="font-semibold leading-tight m-0" /></a>
                        <p v-html="result.content.substring(0, 125)" class="rfs-text-sm line-limit-3 font-light mb-0 leading-tight" style="max-lines: 2; color: black" />

                    </div>
                </g-link>
            </div>
            <div v-if="results.length === 0">No results.</div>
        </div>
    </div>
</template>

<script>
    import Flexsearch from 'flexsearch'
    import slugify from '@sindresorhus/slugify'
    import unified from 'unified'
    import markdown from 'remark-parse'
    import html from 'rehype-parse'
    import toString from 'mdast-util-to-string'

    export default {
        data: () => ({
            index: null,
            q: '',
            results: null,
            selectedIndex: 0
        }),
        beforeMount() {
            this.index = new Flexsearch({
                doc: {
                    id: 'id',
                    field: ['title', 'content']
                }
            })
            this.index.add(
                this.$static.allPost.edges.map(blog => {
                    return {
                        id: blog.node.id,
                        type: 'blog',
                        image: blog.node.thumbnail_image,
                        link: blog.node.path,
                        title: blog.node.title,
                        date: blog.node.date,
                        content: toString(
                            unified()
                                .use(markdown)
                                .parse(blog.node.content)
                        )
                    }
                })
            )
        },
        computed: {
            origin() {
                return location.origin
            }
        },
        methods: {
            search() {
                if (this.index === null || this.q.length < 1) {
                    this.results = null
                } else this.results = this.index.search({ query: this.q })
            },

            selectionMove(dir) {
                const delta = dir + this.selectedIndex
                if (delta < 0) this.selectedIndex = 0
                else if (this.results && this.results.length <= delta) this.selectedIndex = this.results.length - 1
                else this.selectedIndex = delta
                document.getElementById(`result-${this.selectedIndex}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
            }
        }
    }
</script>

<static-query>
    query Post {
    allPost {
    edges {
    node {
    id
    title
    date(format: "DD MMM YYYY")
    path
    cover_image
    thumbnail_image
    content
    }
    }
    }
    }
</static-query>