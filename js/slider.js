var numJSSlider=0;jQuery('.wrapper-slider').each(function(){numJSSlider++;jQuery(this).find('.js-slider').addClass('wrapper-slider-'+numJSSlider);function _getClosest(item,array,getDiff){var closest,diff;if(!Array.isArray(array)){throw new Error("Get closest expects an array as second argument")}
array.forEach(function(comparedItem,comparedItemIndex){var thisDiff=getDiff(comparedItem,item);if(thisDiff>=0&&(typeof diff=="undefined"||thisDiff<diff)){diff=thisDiff;closest=comparedItemIndex}});return closest}
function number(item,array){return _getClosest(item,array,function(comparedItem,item){return Math.abs(comparedItem-item)})}
function lerp(a,b,n){return(1-n)*a+n*b}
class Slider{constructor(options={}){this.bind()
this.opts={el:options.el||'.wrapper-slider-'+numJSSlider+'.js-slider',ease:options.ease||0.1,speed:options.speed||2,velocity:75,scroll:options.scroll||!1}
this.slider=document.querySelector('.wrapper-slider-'+numJSSlider+'.js-slider')
this.sliderInner=this.slider.querySelector('.js-slider__inner')
this.slides=[...this.slider.querySelectorAll('.js-slide')]
this.slidesNumb=this.slides.length
this.rAF=undefined
this.sliderWidth=0
this.onX=0
this.offX=0
this.currentX=0
this.lastX=0
this.min=0
this.max=0
this.centerX=window.innerWidth/2}
bind(){['setPos','run','on','off','resize'].forEach((fn)=>this[fn]=this[fn].bind(this))}
setBounds(){var bounds=this.slides[0].getBoundingClientRect()
var slideWidth=bounds.width
this.sliderWidth=this.slidesNumb*slideWidth
this.max=-(this.sliderWidth-window.innerWidth)
this.slides.forEach((slide,index)=>{slide.style.left=`${index * slideWidth}px`})}
setPos(e){if(!this.isDragging)return
this.currentX=this.offX+((e.clientX-this.onX)*this.opts.speed)
this.clamp()}
clamp(){this.currentX=Math.max(Math.min(this.currentX,this.min),this.max)}
run(){this.lastX=lerp(this.lastX,this.currentX,this.opts.ease)
this.lastX=Math.floor(this.lastX*100)/100
var sd=this.currentX-this.lastX
var acc=sd/window.innerWidth
var velo=+acc
this.sliderInner.style.transform=`translate3d(${this.lastX}px, 0, 0)`
this.requestAnimationFrame()}
on(e){this.isDragging=!0
this.onX=e.clientX
this.slider.classList.add('is-grabbing')}
off(e){this.snap()
this.isDragging=!1
this.offX=this.currentX
this.slider.classList.remove('is-grabbing')}
closest(){var numbers=[]
this.slides.forEach((slide,index)=>{var bounds=slide.getBoundingClientRect()
var diff=this.currentX-this.lastX
var center=(bounds.x+diff)+(bounds.width/2)
var fromCenter=this.centerX-center
numbers.push(fromCenter)})
var closest=number(0,numbers)
closest=numbers[closest]
return{closest}}
snap(){var{closest}=this.closest()
this.currentX=this.currentX+closest
this.clamp()}
requestAnimationFrame(){this.rAF=requestAnimationFrame(this.run)}
cancelAnimationFrame(){cancelAnimationFrame(this.rAF)}
addEvents(){this.run()
this.slider.addEventListener('mousemove',this.setPos,{passive:!0})
this.slider.addEventListener('mousedown',this.on,!1)
this.slider.addEventListener('mouseup',this.off,!1)
this.slider.addEventListener('mouseout',this.off,!1)
window.addEventListener('resize',this.resize,!1)}
removeEvents(){this.cancelAnimationFrame(this.rAF)
this.slider.removeEventListener('mousemove',this.setPos,{passive:!0})
this.slider.removeEventListener('mousedown',this.on,!1)
this.slider.removeEventListener('mouseup',this.off,!1)
this.slider.removeEventListener('mouseout',this.off,!1)}
resize(){this.setBounds()}
destroy(){this.removeEvents()
this.opts={}}
init(){this.setBounds()
this.addEvents()}}
var slider=new Slider()
slider.init()})