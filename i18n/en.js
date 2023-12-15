// 定义英文语言包对象
const en = {
    header: {
        h1_title: "px | vw | rem | unit converstion"
    },
    select_box: {
        select_placeholder: "Please select language"
    },
    vm_inputbox: {
        h2_title: "vw | unit converstion",
        first_prompt: "element size",
        second_prompt: "design draft width (px)",
        third_prompt: "result",
        first_placeholder: "Please enter the element size (px)",
        second_placeholder: "Please enter the width of the design draft (px)",
        third_placeholder: "vw computed result",
        explain: "Nowadays, mobile devices are becoming more and more compatible with VW, making it more convenient and efficient"
    },
    rem_inputbox: {
        h2_title: "rem | unit converstion",
        first_prompt: "element size",
        second_prompt: "design draft width (px)",
        third_prompt: "result",
        first_placeholder: "Please enter the element size (px)",
        second_placeholder: "Please enter the width of the design draft (px)",
        third_placeholder: "rem computed result",
        explain: "The value of rem needs to be dynamically calculated for the current ratio, which is 1 rem=100px;, Recommend using flexible.js (Click to view the JavaScript file)"
    }
}

export default en