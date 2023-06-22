<template>
    <div class="posts">

        <div class="post" v-for="post in latestPosts" :key="post.id">
            <div class="image"><img :src="post.image"/></div>
            <h2>{{post.title}}</h2>
            <p>{{post.description}}</p>
            <button>Read More</button>
        </div>

    </div>

</template>

<script setup> 
const {data: latestPosts } = await useFetch('/api/latest')

</script>

<style scoped lang="scss">
@use '~/assets/scss/latestcards.scss'

</style>