<template>
    <div>

      <div>
          <slot></slot>
      </div>
      <div>
          <slot name="subtitle"></slot>
      </div>
      <div>
          <slot name="copyright"><p>Inna Oshmarina - Inc.</p></slot>
      </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    h1 {
      text-align: center;
      margin-top: 15px;
    }
    h2, p {
          text-align: center;
    }

    h2 {
      color: green;
    }

</style>

