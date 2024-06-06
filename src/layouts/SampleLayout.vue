<template>
  <div>
    <!-- create basic layout -->
    <header>
      <h1>Sample Layout</h1>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
