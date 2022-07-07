<template>
  <router-view />
</template>

<script>
import { getList } from "./mixins/helperMixins";
export default {
  async mounted() {
    await getList();
  },
};
</script>
