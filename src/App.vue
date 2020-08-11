<template>
  <TodoList :todos="todos" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useTodosQuery } from '@/generated/graphql'
import { useResult } from '@vue/apollo-composable'
import TodoList from '@/components/TodoList.vue'

export default defineComponent({
  components: { TodoList },
  setup() {
    const { result } = useTodosQuery()
    const todos = useResult(result, [])

    return { todos }
    // return { result }
  },
})
</script>
