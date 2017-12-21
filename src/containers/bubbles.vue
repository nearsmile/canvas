<template>
  <div>
    <canvas id="canvas" @mousemove="handle($event)"></canvas>
  </div>
</template>
<script>
export default {
  name: 'bubbles',
  data () {
    return {
      balls: [],
      cxt: null
    }
  },
  /* eslint-disable */
  mounted () {
    // var balls = [];
    // var canvas = document.getElementById("canvas");
    const { canvas, cxt, width, height } = this.initCanvas()
    // var canvass = document.getElementById('canvas')
    // var context = canvas.getContext("2d")
    this.cxt = cxt
    // canvas.width = 800;
    // canvas.height = 600;
    let balls = []
    for(let i=0; i< 50; i++){
        let aBall = {
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 50 + 20
        };
        balls[i] = aBall;
    }
    
    /* for (let i = 0; i < 50; i++) {
      let _ball = {
        x: Math.random() * width,
        h: Math.random() * height,
        r: Math.random() * 50 + 20
      }
      balls[i] = _ball
    } */
    this.balls = balls
    // this.balls = this.bubbles()
    console.log(this.balls)
    this.draw(cxt, balls);
    // canvas.addEventListener("mousemove", this.detect());
  },
  methods: {
    bubbles (canvas, cxt, width, height) {
      let balls = []

      for (let i = 0; i < 50; i++) {
        let _ball = {
          x: Math.random() * width,
          h: Math.random() * height,
          r: Math.random() * 50 + 20
        }
        balls[i] = _ball
      }
      return balls
    },
    handle(event) {
      this.detect(event, this.balls, this.cxt)
      // console.log(event)
    },
    draws(context, balls){
      for(var i=0; i<balls.length; i++){
        context.beginPath();
        context.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI *2);
        context.globalAlpha = 0.5;
        var R = Math.floor(Math.random() * 255);
        var G = Math.floor(Math.random() * 255);
        var B = Math.floor(Math.random() * 255);
        context.fillStyle = "rgb(" + R + "," + G + "," + B + ")";
        context.fill();
      } 
    },
    draw (cxt, balls) {
      for (let i = 0; i < balls.length; i++) {
        cxt.beginPath()
        cxt.globalAlpha = 0.5

        let R = Math.floor(Math.random() * 255)
        let G = Math.floor(Math.random() * 255)
        let B = Math.floor(Math.random() * 255)
        // console.log(`rgb(${R}, ${G}, ${B})`)
        cxt.fillStyle = `rgb(${R}, ${G}, ${B})`
        cxt.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2)
        cxt.fill()
      }
    },
    detect(event, balls, context){
      // console.log(canvas)
      var x = event.clientX - canvas.getBoundingClientRect().left;
      var y = event.clientY - canvas.getBoundingClientRect().top;
      for(var i=0; i<balls.length; i++){
          context.beginPath();
          context.arc(balls[i].x, balls[i].y, balls[i].r, 0, Math.PI * 2);
          if(context.isPointInPath(x,y)){
              context.fillStyle = "rgba(255,255,255,0.1)";
              context.fill();
          }
      }
    },
    initCanvas () {
      const canvas = document.querySelector('canvas')
      const width = document.documentElement.scrollWidth || document.body.scrollWidth
      const height = document.documentElement.scrollHeight || document.body.scrollHeight
      canvas.width = width
      canvas.height = height
      const cxt = canvas.getContext('2d')
      return {
        canvas,
        cxt,
        width,
        height
      }
    }
  }
}
</script>
