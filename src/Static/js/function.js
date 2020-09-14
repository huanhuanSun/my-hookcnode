function dateHanddle(date){
    let time = Date.now() - new Date(date).getTime();
     /*
        1分钟内：刚刚 60000
        1小时内：n分钟前 temp_time/6000
        1天内：n小时前 temp_time/3600000
        1周内：n天前 temp_time/3600000/24
        其他：直接返回time

    */
    if (time < 60000) {
        return '刚刚'
    }
    else if(time < 3600000) {
        return `${Math.ceil(time/60000)}分钟前`
    }
    else if (time < 60000*60*24) {
        return `${Math.ceil(time/3600000)}小时前`
    }
    else if (time<60000*60*24*7) {
        return `${Math.ceil(time/(60000*60*24))}天前`
    }
    else if (time<60000*60*24*30) {
        return `${Math.ceil(time/(60000*60*24*30))}月前`
    }
    else{
        return date.replace('T',' ').slice(0,-5)
    }

}

export {dateHanddle}