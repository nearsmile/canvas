<template>
  <div class="pattern">
    <canvas></canvas>
  </div>
</template>
<script>
export default {
  name: 'pattern',
  mounted () {
    this.drawImage()
  },
  methods: {
    initCanvas () {
      const canvas = document.querySelector('canvas')
      const scrollWidth = document.documentElement.scrollWidth || document.body.scrollWidth
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      canvas.width = scrollWidth
      canvas.height = scrollHeight
      const cxt = canvas.getContext('2d')
      return cxt
    },
    drawImage () {
      const cxt = this.initCanvas()
      const img = new Image()
      img.src = require('../assets/logo.png')
      // 使用了Image的onload事件，它的作用是对图片进行预加载处理，即在图片加载完成后才立即除非其后function的代码体。这个是必须的，如果不写的话，画布将会显示黑屏
      // 因为没有等待图片加载完成就填充纹理，导致浏览器找不到图片
      img.onload = () => {
        const pattern = cxt.createPattern(img, 'no-repeat')
        cxt.fillStyle = pattern
        cxt.fillRect(0, 0, 400, 700)
      }
    }
  }
}
</script>
