<template>
    <component :is="layout">
      <router-view></router-view>
    </component>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      defaultLayout: 'default'
    }
  },
  mounted () {
  },
  methods: {
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || this.defaultLayout) + '-layout'
    }
  }
}
</script>
