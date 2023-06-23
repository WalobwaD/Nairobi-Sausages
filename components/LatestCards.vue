<template>
    <div class="posts">

        <div class="post" v-for="post in latestPosts" :key="post.id">
            <div class="image"><img :src="post.image"/></div>
            <div class="card-text">
                <h2>{{post.title}}</h2>
                <div class="tags">
                    <div class="tag" v-for="tag, index in post.tags" :key="index" :style="getTagColor()">
                        {{ tag }}
                    </div>
                </div>

            </div>

        </div>

    </div>

</template>

<script setup> 
const {data: latestPosts } = await useFetch('/api/latest')

const getTagColor = () =>{

    const colors = ['#FDEBDD', '#F0E4DB', '#E9DAF0', '#EFDBE0', '#FCF7DC', '#DCE6FC'];
    const randomize = Math.floor(Math.random() * colors.length);
    const tagColor = colors[randomize];
    return {
        backgroundColor: tagColor,
        border: `2px solid ${tagColor}`
    };

}


</script>

<style scoped lang="scss">
@use '~/assets/scss/latestcards.scss'

</style>