<template>
    <div class="posts">

        <div class="post" v-for="post in latestPosts" :key="post.id">
            <div class="image"><img :src="post.image"/></div>
            <div class="card-text">
                <h2>{{post.title}}</h2>
                <div class="tags">
                    <div class="tag" v-for="tag in post.tags" :key="post.id">
                        {{ tag }}
                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<script setup> 
const {data: latestPosts } = await useFetch('/api/latest')

</script>

<style scoped lang="scss">
@use '~/assets/scss/latestcards.scss'

</style>