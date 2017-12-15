/**
 * 使用切点绘制圆弧
 * arcTo(x1,y1,x2,y2,radius)
 * @param {Object} cxt Context
 * @param {Number} x0 起点坐标
 * @param {Number} y0 起点坐标
 * @param {Number} x1 开始端点坐标
 * @param {Number} y1 开始端点坐标
 * @param {Number} x2 结束端点坐标
 * @param {Number} y2 结束端点坐标
 * @param {Number} r 圆弧半径
 * @param {Number} line 线宽度
 * @param {String} color 线颜色
 */
function drawArcTo (cxt, x0, y0, x1, y1, x2, y2, r, lineW, color) {
  cxt.beginPath()
  cxt.moveTo(x0, y0)
  cxt.arcTo(x1, y1, x2, y2, r)
  cxt.lineWidth = lineW
  cxt.strokeStyle = color
  cxt.stroke()
}

export {
  drawArcTo
}
