<template>
  <template v-for="item in items" :key="item.title">
    
    <!-- Dropdown / expandable -->
    <q-expansion-item
      v-if="item.children && item.children.length"
      :label="item.title"
      :icon="item.icon"
      group="nav"
    >
      <q-list padding>
        <SidebarMenu :items="item.children" />
      </q-list>
    </q-expansion-item>

    <!-- Normal link -->
    <q-item
      v-else
      clickable
      :to="isInternal(item.link) ? item.link : undefined"
      :href="!isInternal(item.link) ? item.link : undefined"
      :target="!isInternal(item.link) ? '_blank' : undefined"
      exact
    >
      <q-item-section avatar v-if="item.icon">
        <q-icon :name="item.icon" />
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ item.title }}</q-item-label>
        <q-item-label v-if="item.caption" caption>{{ item.caption }}</q-item-label>
      </q-item-section>
    </q-item>

    <!-- Optional separator -->
  </template>
</template>

<script setup>
const { items } = defineProps({
  items: {
    type: Array,
    default: () => [
      { title: 'Home', icon: 'home', link: '/home' },
    ],
  },
})

function isInternal(link) {
  return link.startsWith('/') // all router paths
}
</script>
