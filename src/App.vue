<template>
  <div class="bg-green-500 text-white font-bold text-center text-6xl">
    {{ result.todos[0].text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api"
import { useTodosQuery } from "./generated/graphql"
// import { useQuery } from "@vue/apollo-composable"
// import gql from "graphql-tag"

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const { result, loading } = useTodosQuery()
    return { result, loading }

    // const { result } = useQuery(gql`
    //   query Todos {
    //     todos {
    //       id
    //       text
    //     }
    //   }
    // `)
    // console.log(result.value.todos)
    // const add = (num: number) => {
    //   console.log(num + 3)
    // }
    // add(2)
  }
})
</script>
