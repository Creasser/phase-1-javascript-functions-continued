// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (thing = 'go to the office'){
    return `This Monday, I will ${thing}.`
}

function wrapAdjective(symbol = '*'){
    return function (para = 'special'){
        return `You are ${symbol}${para}${symbol}!`
    }
}