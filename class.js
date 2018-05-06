let url = 'http://112.74.107.131/course'

const course = {
    "success": "true",
    "data": [{
            "day": 1,
            "name": "光电信息物理基础",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 1,
            "sectionend": 2,
            "teacher": "张融",
            "locale": "教2－414"
        },
        {
            "day": 2,
            "name": "应用光学(双语)",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 1,
            "sectionend": 2,
            "teacher": "赵瑞",
            "locale": "教2－516"
        },
        {
            "day": 5,
            "name": "电磁场理论与光波导技术",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 1,
            "sectionend": 2,
            "teacher": "诸波",
            "locale": "教3－410"
        },
        {
            "day": 1,
            "name": "男生网球",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 3,
            "sectionend": 4,
            "teacher": "谭洪论",
            "locale": "操场A"
        },
        {
            "day": 2,
            "name": "物理光学",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 3,
            "sectionend": 4,
            "teacher": "张雪花",
            "locale": "教3－309"
        },
        {
            "day": 3,
            "name": "光电信息物理基础",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 3,
            "sectionend": 4,
            "teacher": "张融",
            "locale": "教2－414"
        },
        {
            "day": 4,
            "name": "JAVA语言程序设计A",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 3,
            "sectionend": 4,
            "teacher": "薛景",
            "locale": "教3－102"
        },
        {
            "day": 5,
            "name": "数字电路与逻辑设计B",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 3,
            "sectionend": 4,
            "teacher": "何艳",
            "locale": "教3－102"
        },
        {
            "day": 7,
            "name": "光学与光电子基础实验（上）",
            "week": "第1-4周",
            "weekstart": 1,
            "weekend": 4,
            "weekarr": "1 2 3 4",
            "sectionstart": 1,
            "sectionend": 4,
            "teacher": "张雪花",
            "locale": ""
        },
        {
            "day": 3,
            "name": "马克思主义基本原理概论",
            "week": "第1-18周",
            "weekstart": 1,
            "weekend": 18,
            "weekarr": "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 6,
            "sectionend": 7,
            "teacher": "许和隆",
            "locale": "教2－300"
        },
        {
            "day": 5,
            "name": "物理光学",
            "week": "第1-17周|单周",
            "weekstart": 1,
            "weekend": 17,
            "weekarr": "1 3 5 7 9 11 13 15 17",
            "sectionstart": 6,
            "sectionend": 7,
            "teacher": "张雪花",
            "locale": "教2－516"
        },
        {
            "day": 5,
            "name": "应用光学(双语)",
            "week": "第2-18周|双周",
            "weekstart": 2,
            "weekend": 18,
            "weekarr": "2 4 6 8 10 12 14 16 18",
            "sectionstart": 6,
            "sectionend": 7,
            "teacher": "赵瑞",

            "locale": "教2－516"
        },
        {
            "day": 1,
            "name": "电工电子基础实验A",
            "week": "第8-18周",
            "weekstart": 8,
            "weekend": 18,
            "weekarr": "8 9 10 11 12 13 14 15 16 17 18",
            "sectionstart": 6,
            "sectionend": 9,
            "teacher": "马盛健",
            "locale": "第八实验室"
        },
        {
            "day": 2,
            "name": "JAVA语言程序设计A",
            "week": "第1-17周|单周",
            "weekstart": 1,
            "weekend": 17,
            "weekarr": "1 3 5 7 9 11 13 15 17",
            "sectionstart": 8,
            "sectionend": 9,
            "teacher": "薛景",
            "locale": "教2－201"
        },
        {
            "day": 3,
            "name": "数字电路与逻辑设计B",
            "week": "第1-17周|单周",
            "weekstart": 1,
            "weekend": 17,
            "weekarr": "1 3 5 7 9 11 13 15 17",
            "sectionstart": 8,
            "sectionend": 9,
            "teacher": "何艳",
            "locale": "教2－300"
        },
        {
            "day": 3,
            "name": "电磁场理论与光波导技术",
            "week": "第2-18周|双周",
            "weekstart": 2,
            "weekend": 18,
            "weekarr": "2 4 6 8 10 12 14 16 18",
            "sectionstart": 8,
            "sectionend": 9,
            "teacher": "诸波",
            "locale": "教2－308"
        },
        {
            "day": 5,
            "name": "物理光学",
            "week": "第12-12周",
            "weekstart": 12,
            "weekend": 12,
            "weekarr": "12",
            "sectionstart": 8,
            "sectionend": 9,
            "teacher": "张雪花",
            "locale": "教2－516"
        }
    ]
}

/* $.ajax({
    url: url,
    success: function(res){
        console.log(res);
    },
    fail: function(){
        console.log(1);
    },
    complete:function(){
        console.log(course);
    }
}) */

//课程数组
let arr = []

//按星期分课
function divideCourse() {
    for (let i = 0; i < 7; i++) {
        arr.push([])
        for (const j of course.data) {
            if (j.day === i + 1) {
                arr[i].push(j)
            }
        }
    }
    console.log(arr)
}
divideCourse()

//canvas画线
let canvas = document.getElementById("canvas")
//获取canvas权限
let ctx = canvas.getContext("2d")

function printLine() {
    ctx.strokeStyle = "#ccc"
    ctx.lineWidth = 1
    ctx.setLineDash([20, 10, 10, 10])
    for (let i = 0; i < 11; i++) {
        //起点
        ctx.moveTo(0, 100 * (i + 1))
        //终点
        ctx.lineTo(1050, 100 * (i + 1))
        //连横线
        ctx.stroke()
    }
}
printLine()

let header = document.getElementById("header")
let main = document.getElementById("main")

//显示节数
function showSections() {
    for (let i = 0; i < 12; i++) {
        let sectionDiv = document.createElement("div")
        sectionDiv.className = "sectionDiv"
        sectionDiv.style.top = i * 100 + "px"
        sectionDiv.innerHTML = i + 1
        main.appendChild(sectionDiv)
    }
}
showSections()

//显示星期
function showWeeks() {
    let weekArr = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
    for (let i = 0; i < 7; i++) {
        let weekDiv = document.createElement("div")
        weekDiv.className = "weekDiv"
        weekDiv.style.left = 50 + i * 150 + "px"
        weekDiv.innerHTML = weekArr[i]
        header.appendChild(weekDiv)
    }
}
showWeeks()

let body = document.getElementsByTagName("body")
let innerplus = document.getElementById("innerplus")
let changeWeekDiv = document.getElementById("changeWeekDiv")
let weekList = document.getElementById("weekList")
//点击加宽的判断
let isDivWider = false
//点击加高的判断
let isDivHigher = false
//当前周
let currentWeek = 1

let listBox = document.getElementById("listBox")
let numRow = document.getElementsByClassName("numRow")
let numArr = document.getElementsByClassName("weekNum")
//存放courseDiv的数组
let courseDivArr = []
//显示课程
function showCourses() {
    //将课程放在其所在的位置上
    for (let i = 0; i < arr.length; i++) {
        courseDivArr.push([])
        for (let j = 0; j < arr[i].length; j++) {
            let aDiv = document.createElement("div")
            aDiv.className = "courseDiv"
            aDiv.style.height = (arr[i][j].sectionend - arr[i][j].sectionstart + 1) * 100 + "px"
            aDiv.style.backgroundColor = "seagreen"
            aDiv.style.top = (arr[i][j].sectionstart - 1) * 100 + "px"
            aDiv.style.left = i * 150 + 50 + "px"
            aDiv.innerHTML = arr[i][j].name + "<br>" + arr[i][j].teacher + "<br>" + arr[i][j].locale + "<br>" + arr[i][j].week
            main.appendChild(aDiv)
            courseDivArr[i].push(aDiv)
        }
    }
    highlightCourse(currentWeek)
}
showCourses()

//设置num元素位置
function numRowLocate() {
    for (let i = 0; i < numRow.length; i++) {
        numRow[i].style.top = 55 + 50 * i + "px"
    }
}

function numArrLocate() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 6; j++) {
            numArr[i * 6 + j].style.left = j * 50 + "px"
        }
    }
}
numRowLocate()
numArrLocate()

//显示当前周
function showCurrentWeek() {
    changeWeekDiv.innerHTML = isDivWider ? "更改当前周 | 第" + currentWeek + "周" : ""
}

//为当前周课程设置高亮
function highlightCourse(aweek) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let newarr = arr[i][j].weekarr.split(" ")
            if (newarr.length <= 1 && aweek != newarr[0]) {
                courseDivArr[i][j].style.backgroundColor = "#ccc"
                courseDivArr[i][j].style.color = "slategray"
            } else if (aweek < newarr[0] || aweek > newarr[newarr.length - 1]) {
                courseDivArr[i][j].style.backgroundColor = "#ccc"
                courseDivArr[i][j].style.color = "slategray"
            } else if (newarr[1] - newarr[0] == 2 && aweek % 2 != newarr[1] % 2) {
                courseDivArr[i][j].style.backgroundColor = "#ccc"
                courseDivArr[i][j].style.color = "slategray"
            } else {
                courseDivArr[i][j].style.backgroundColor = "seagreen"
                courseDivArr[i][j].style.color = "white"
            }
        }
    }
}

window.onload = function () {
    innerplus.onmouseover = function () {
        if (!isDivWider) {
            innerplus.style.cursor = "pointer"
            innerplus.style.transform = "rotate(90deg)"
            innerplus.style.boxShadow = "0 0 5px dodgerblue"
            innerplus.style.transition = "transform 0.3s ease-in-out"
        } else {
            innerplus.style.backgroundColor = "rgb(57, 156, 255)"
        }
    }
    innerplus.onmouseout = function () {
        if (!isDivWider) {
            innerplus.style.transform = "rotate(-90deg)"
            innerplus.style.boxShadow = "0 0 0 white"
            innerplus.style.transition = "transform 0.3s ease-in-out"
        } else {
            innerplus.style.backgroundColor = "dodgerblue"
        }
    }
    innerplus.onclick = function () {
        if (!isDivWider) {
            innerplus.style.transform = "rotate(45deg)"
            changeWeekDiv.style.width = 380 + "px"
            changeWeekDiv.style.transition = "all 0.4s ease-in-out"
            weekList.style.width = 380 + "px"
            weekList.style.transition = "all 0.4s ease-in-out"
            changeWeekDiv.innerHTML = "更改当前周 | 第"　 + currentWeek + "周"
        } else {
            innerplus.style.transform = "rotate(-45deg)"
            weekList.style.width = 50 + "px"
            weekList.style.height = 50 + "px"
            weekList.style.transition = "all 0.4s ease-in-out"
            weekList.innerHTML = ""
            changeWeekDiv.style.width = 50 + "px"
            changeWeekDiv.style.transition = "all 0.4s ease-in-out"
            weekList.style.width = 50 + "px"
            weekList.style.transition = "all 0.4s ease-in-out"
            changeWeekDiv.innerHTML = ""
        }
        isDivWider = !isDivWider
        if (isDivHigher) {
            weekList.style.height = 50 + "px"
            listBox.style.zIndex = 20
            weekList.style.transition = "all 0.5s ease-in-out"
        }
    }
    changeWeekDiv.onmouseover = function () {
        changeWeekDiv.style.cursor = "pointer"
        changeWeekDiv.style.backgroundColor = "rgb(57, 156, 255)"
    }
    changeWeekDiv.onmouseout = function () {
        changeWeekDiv.style.backgroundColor = "dodgerblue"
    }
    changeWeekDiv.onclick = function () {
        if (!isDivHigher) {
            weekList.style.height = 225 + "px"
            setTimeout(() => {
                listBox.style.zIndex = 70
            }, 300);
            weekList.style.transition = "all 0.5s ease-in-out"
        } else {
            weekList.style.height = 50 + "px"
            listBox.style.zIndex = 20
            weekList.style.transition = "all 0.5s ease-in-out"
        }
        isDivHigher = !isDivHigher
    }
    for (let i = 0; i < 18; i++) {
        numArr[i].onclick = function () {
            currentWeek = i + 1
            showCurrentWeek()
            highlightCourse(currentWeek)
        }
    }
}