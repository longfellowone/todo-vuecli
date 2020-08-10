<template>
  <!-- <ul v-if="result && result.todos">
    <li v-for="todo in result.todos" :key="todo.id">{{ todo.text }}</li>
  </ul> -->
  <ul>
    <li v-for="todo in todos" :key="todo.id" class="text-6xl">
      {{ todo.text }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useTodosQuery } from "./generated/graphql"
import { useResult } from "@vue/apollo-composable"

export default defineComponent({
  setup() {
    const { result } = useTodosQuery()
    const todos = useResult(result, [])

    return { todos }
    // return { result }
  }
})
</script>
