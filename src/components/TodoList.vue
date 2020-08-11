<template>
  <!-- <ul v-if="result && result.todos">
    <Todo v-for="todo in result.todos" :key="todo.id" :todo="todo" />
  </ul> -->
  <ul>
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { Todo } from '@/generated/graphql'
import TodoItem from '@/components/TodoItem.vue'

export default defineComponent({
  components: { TodoItem },
  props: {
    todos: { type: Array as PropType<Array<Todo>>, required: true },
  },
  setup() {
    //
  },
})
</script>
