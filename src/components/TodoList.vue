<template>
  <ul>
    <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { useTodosQuery } from '@/generated/graphql'
import TodoItem from '@/components/TodoItem.vue'
import { useResult } from '@vue/apollo-composable'

export default defineComponent({
  components: { TodoItem },
  props: {
    // todos: { type: Array as PropType<Array<Todo>>, required: true },
  },
  setup() {
    const { result } = useTodosQuery()
    const todos = useResult(result, [], (data) => data.todos)

    return { todos }
  },
})
</script>
