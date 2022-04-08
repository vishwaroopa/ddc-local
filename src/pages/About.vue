<style>
.main {
    margin: 0 auto;
    padding: 0 !important;
}
.post__content p {
    line-height: 28px;
    margin-bottom: 12px;
}

</style>
<template>
    <Layout>
       

        <div class="post-title">
            <div class="capitalize max-w-1200 w-full mx-auto font-bold px-6 pt-32 ">
                <h1 class="post-title__text text-2xl pb-6 font-semibold">
                    <span style="margin-top:20px">About Us</span>
                </h1>
            </div>
            <br />
            <div class="post__content max-w-1200 mx-auto mt-2 mb-10 text-l px-8">
                <p class="post-title__text text-l pb-6 ">
                    <span>
                        Distributed clouds should provide seamless access to the right data, at the right place and at the right time, with guarantees around data quality and provenance. In current ecosystem architectures, the focus is too often on the infrastructure components, such as data lakes and ETL pipelines, and not on the business problems and data that the ecosystem is there to support. Data flows from around the business into centralized data lakes and warehouses and away from the data producers and consumers in the lines of business. When detached from the lines of business owners and managed by a centralized IT organization, this data can start to lose meaning and value.
                    </span>
                    <br /><br /><span style="margin-top:20px">
    The distributed cloud model seeks to reverse this centralized management of data and leave the data where it belongs: with the producers. The producers make data available to consumers elsewhere in the business directly, through APIs and self-service means. The data becomes a first-class citizen in the distributed cloud, served up through a common infrastructure available to every business domain, and is discoverable through-out the enterprise. Automated data movement, federation, cataloging, and access policies ensure that the right data is made available to consumers in the most optimal way. Within this model, the infrastructure itself is centrally managed and secured, but each business domain manages and secures access to its own data products.The central benefit of such an approach is that the data remains with the subject matter experts in a business domain who can utilize common data management and analytics services to ingest, transform, analyze, describe, and serve up data to other business users. Infrastructure components such as data lakes and data warehouses simply become services within the distributed cloud, and the data itself becomes a first-class citizen.
</span>
    <br /><br /><span style="margin-top:20px">
    To take full advantage of the benefits that distributed clouds offer, we must rethink our approach to how data is managed in such a homogeneous, geographically separated and logically interconnected environment. Distributed clouds will provide the common foundational hardware and software infrastructure on which new applications that are federated across clouds will be deployed. In order to support these applications, the underlying data management services higher up in the stack must also be federated.
    The central benefit of such an approach is that the data remains with the subject matter experts in a business domain who can utilize common data management and analytics services to ingest, transform, analyze, describe, and serve up data to other business users. Infrastructure components such as data lakes and data warehouses simply become services within the distributed cloud, and the data itself becomes a first-class citizen.

    Consider the various components of a modern enterprise data architecture today. We can decompose an analytical ecosystem into a set of vertical services that span from the producers of data through to the consumers of data and analytics, and the common horizontal services needed to support each vertical service
</span>
</p>
            </div>
        </div>


          
</Layout>
</template>
<script>
import BaseSection from "../components/BaseSection.vue";
    export default {      
        components: {
            BaseSection,  
        },
    };
    </script>
<script>
    import SearchBlog from '~/components/SearchBlog.vue'
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
            if (this.$page?.allCategory?.edges?.length > 0) {
                this.featuredBlog = this.$page.allCategory.edges[0].node;
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
    query Category {
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

<style lang="scss">

.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>