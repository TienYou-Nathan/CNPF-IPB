<template>
  <div class="data">
    <AddEntryForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "../../store";

import AddEntryForm from "./AddEntryForm.vue";

export default defineComponent({
  components: {
    AddEntryForm,
  },
  setup() {
    const store = useStore();
    store.state.count; // typed as number
    return { store };
  },
  props: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
