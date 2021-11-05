<template>
  <form>
    <input type="text" name="statementName" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../../store";

export default defineComponent({
  setup() {
    const store = useStore();
    store.state.count; // typed as number
  },
  props: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
