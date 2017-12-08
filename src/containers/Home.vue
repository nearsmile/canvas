<template>
  <div class="home">
    <ul class="home-list">
      <router-link tag="li" class="home-item ellipsis" :to="item.link" :key="index" v-for="(item, index) in routes">
        {{ item.name }}
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Home',
    computed: {
      routes () {
        const files = require.context('../containers', false, /\.vue$/)
        const result = []
        files.keys().forEach(key => {
          let name = key.replace(/(\.\/|\.vue)/g, '')
          if (name !== 'Home') {
            result.push({
              name,
              link: `/${name}`
            })
          }
        })
        return result
      }
    }
  }
</script>
<style lang="scss" scoped>

.home {
  &-list {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
  }

  &-item {
    flex: 0 1 33.3333%;
    width: 33.3333%;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: .28rem;
    border: dashed #e7e7e7;
    border-width: 0 1px 1px 0;

    &:nth-child(3n) {
      border-right: 0;
    }
  }
}

</style>
