<template>
  <div class="template_one">
    <canvas></canvas>
    <!-- <canvas></canvas> -->
  </div>
</template>
<script>
import { drawRoundedRectangle } from '../components/Canvas'
export default {
  name: 'template-one',
  mounted () {
    const cxt = this.initCanvas()
    this.templateOne(cxt) // 实现模板A
    // this.templateTwo(cxt) // 实现模板B
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
    templateOne (cxt) {
      // const cxt = this.initCanvas()
      const bg = new Image()
      bg.src = require('../assets/A01.png')
      bg.onload = () => {
        const pattern = cxt.createPattern(bg, 'no-repeat')
        cxt.fillStyle = pattern
        cxt.fillRect(0, 0, 750, 290)

        cxt.font = '64px SourceHanSansCN-Bold'
        cxt.fillStyle = '#fff'
        cxt.textBaseline = 'hanging'
        cxt.textAlign = 'start'
        cxt.fillText('新潮数码', 97, 40)
        cxt.fillText('爆款返场', 97, 112)

        cxt.font = '24px SourceHanSansCN-Regular'
        cxt.fillText('好货限量疯抢 返单有惊喜', 90, 186)

        drawRoundedRectangle(cxt, 81, 222, 283, 32, '#1938d8')

        cxt.fillStyle = '#fff'
        cxt.font = '18px SourceHanSansCN-Regular'
        cxt.fillText('活动时间：11月8-16日', 134, 228)
        let img = new Image()
        img.src = require('../assets/commodity.png')
        img.onload = () => {
          cxt.drawImage(img, 406, 0)
        }
      }
    },
    templateTwo (cxt) {
      // const cxt = this.initCanvas()
      const bg = new Image()
      bg.src = require('../assets/A02.png')
      // bg.src = require('../assets/A03.jpg')
      // bg.src = require('../assets/A04.jpg')
      bg.onload = () => {
        const pattern = cxt.createPattern(bg, 'no-repeat')
        cxt.fillStyle = pattern
        cxt.fillRect(0, 0, 750, 290)

        cxt.font = '64px SourceHanSansCN-Bold'
        cxt.fillStyle = '#fff'
        cxt.textBaseline = 'hanging'
        cxt.textAlign = 'start'
        cxt.fillText('春风十里', 97, 40)
        cxt.fillText('不如送礼', 97, 112)

        cxt.font = '18px SourceHanSansCN-Regular'
        cxt.fillText('/新款家电全场五折/', 90, 186)

        drawRoundedRectangle(cxt, 81, 222, 283, 32, '#1938d8')

        cxt.fillStyle = '#fff'
        cxt.font = '16px SourceHanSansCN-Regular'
        cxt.fillText('活动期间全场包邮，更有精美礼品', 104, 228)
        let img = new Image()
        img.src = require('../assets/commodity.png')
        img.onload = () => {
          cxt.drawImage(img, 406, 0)
        }
      }
    }
  }
}
</script>
