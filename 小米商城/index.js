function switchImg(){
    let l = document.getElementsByClassName('l')[0]
    let r = document.getElementsByClassName('r')[0]
    let img = document.querySelector('.img img')
    let imgarrs = [
    './picture/1.png',
    './picture/2.png',
    './picture/3.png',
    './picture/4.png']
    let index = 0
    let timer

    starTimer()
    // 上一个
    l.onclick = function () {
        clearInterval(timer)
        if (index === 0) {
            index = imgarrs.length - 1
        } else {
            index--
        }
        img.src = imgarrs[index]
        //设置点击切换之后悬浮点自动跟随切换
        for(let j = 0; j < as.length; j++) {
            //清除其他
            as[j].className = ''
        }
        as[indexs[index]].className = 'spot-hover'
        starTimer()
    }

    // 下一个
    r.onclick = function () {
        clearInterval(timer)
        if (index < imgarrs.length - 1) {
            index++
        } else {
            index = 0
        }
        img.src = imgarrs[index]
        for(let j = 0; j < as.length; j++) {
            //清除其他
            as[j].className = ''
        }
        as[indexs[index]].className = 'spot-hover'
        starTimer()
    }

    function starTimer() {
        //定时切换
        timer = setInterval(function () {
            index++
            /*
            if(i < imgSrc.length){
                img.src = imgSrc[i]
            } else{
                i = 0
                img.src = imgSrc[i]
            }
            */
            index %= imgarrs.length
            img.src = imgarrs[index]
            //清除其他
            for(let j = 0; j < as.length; j++) {
                as[j].className = ''
            }
            //使用反向下标使悬浮点正确显示
            as[indexs[index]].className = 'spot-hover'
        }, 3000)
    }

    //a的顺序是反的,循环要注意
    let indexs =[3, 2, 1, 0]    //添加反向下标赋值图片列表下标
    let as = document.getElementsByClassName('spot-box')[0].getElementsByTagName('a')
    for(let i = imgarrs.length -1; i > -1; i--){
        //循环为每个悬浮点添加点击切换效果
        as[i].onclick = function(){
            clearInterval(timer)
            img.src = imgarrs[indexs[i]]
            //在单击切换之后对index进行相对应的复制，否则下次切换可能不会为此次单机后的图片，而是按index的顺序切换
            index = indexs[i]
        //点击添加悬浮点样式
            //清除其他
            for(let j = 0; j < as.length; j++) {
                as[j].className = ''
            }
            this.className = 'spot-hover'
            starTimer()
        }
    }
    //设置默认hover值
    as[3].className = 'spot-hover'
}
switchImg()