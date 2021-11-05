<template>
  <form>
    <!-- References du relevé -->
    <span>{{ t("survey name") }} : </span
    ><input type="text" name="surveyName" required />
    <span>{{ t("date") }} : </span><input type="date" name="date" required />
    <span>{{ t("covered area") }} (ha) : </span
    ><input type="number" name="covered area" required />
    <span>{{ t("total area") }} (ha) : </span
    ><input type="number" name="total area" required />
    <!-- Localisation du relevé -->
    <span>{{ t("folder") }} : </span
    ><input type="text" name="folder" required />
    <span>{{ t("forest") }} : </span
    ><input type="text" name="forest" required />
    <!-- Peuplement -->
    <span>{{ t("composition") + " : " + t("essence diversity") }} : </span
    ><input type="text" name="essence diversity" required />
    <span>{{ t("composition") + " : " + t("essence") }} 1 : </span
    ><input type="text" name="essence 1" required />
    <span>{{ t("composition") + " : " + t("essence") }} 2 : </span
    ><input type="text" name="essence 2" />
    <!-- Critères diangostic IPB -->
    <span>{{ t("IPB version") }} : </span
    ><input type="text" name="IPB version" />
    <span>{{ t("biogeographical area") }} : </span
    ><input type="text" name="biogeographical area" />
    <span>{{ t("vegetation floor") }} : </span
    ><input type="text" name="vegetation floor" />
    <span>{{ t("survey method") }} : </span
    ><input type="text" name="survey method" />
    <span>{{ t("partial survey") }} : </span
    ><input type="checkbox" name="Partial survey" />
    <span>{{ t("fertility") }} : </span
    ><input type="number" step="0.1" min="0" max="1" name="fertility" />
    <!-- Scores IPB -->
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

import { useStore } from "../../store";

export default defineComponent({
  setup() {
    const store = useStore();
    store.state.count; // typed as number
    const { t } = useI18n({
      inheritLocale: true,
      useScope: "global",
    });
    return { t, store };
  },
  props: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
