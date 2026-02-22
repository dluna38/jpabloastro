<!-- <script setup lang="ts">
import { ref } from 'vue'
import PostCard from '@/components/PostCard.vue'
import { sanity } from '@/lib/sanity'

const props = defineProps<{
  initialPosts: any[]
  limit: number
}>()

const posts = ref([...props.initialPosts])
const pending = ref(false)
const loadingMore = ref(false)
const hasMore = ref(props.initialPosts.length === props.limit)

const lastItem = props.initialPosts.at(-1)
const lastDate = ref(lastItem?.fechaPublicacion ?? null)
const lastId = ref(lastItem?._id ?? null)

const queryPosts = `
*[_type == "publicacion" && defined(slug.current) && (
  $lastDate == null || 
  fechaPublicacion < $lastDate || 
  (fechaPublicacion == $lastDate && _id < $lastId)
)]
| order(fechaPublicacion desc, _id desc)
[0...$limit]{
  _id,
  titulo,
  slug,
  fechaPublicacion,
  imagen,
  extracto
}`

const loadMore = async () => {
  if (!hasMore.value || loadingMore.value) return

  loadingMore.value = true

  const newPosts = await sanity.fetch(queryPosts, {
    lastDate: lastDate.value,
    lastId: lastId.value,
    limit: props.limit,
  })

  if (newPosts.length > 0) {
    posts.value.push(...newPosts)

    if (newPosts.length < props.limit) {
      hasMore.value = false
    } else {
      const last = newPosts.at(-1)
      lastDate.value = last.fechaPublicacion
      lastId.value = last._id
    }
  } else {
    hasMore.value = false
  }

  loadingMore.value = false
}
</script>

<template>
  <div>
    <div v-if="pending" class="loading-state">
      <p>Cargando publicaciones...</p>
    </div>

    <div v-else-if="posts.length > 0" class="posts-grid">
      <PostCard
        v-for="post in posts"
        :key="post._id"
        :post="post"
      />
    </div>

    <div v-else class="no-posts">
      <p>
        Próximamente publicaremos noticias y artículos sobre el mundo de la construcción y nuestros proyectos en el
        Oriente Antioqueño.
      </p>
    </div>

    <div
      class="pagination-controls"
      v-if="posts.length > 0 && hasMore"
    >
      <button
        @click="loadMore"
        class="btn btn-secondary load-more-btn"
        :disabled="loadingMore"
      >
        {{ loadingMore ? 'Cargando...' : 'Cargar más' }}
      </button>
    </div>
  </div>
</template> -->