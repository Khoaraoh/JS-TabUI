var tabs = document.querySelectorAll('.tab-item');
var panes = document.querySelectorAll('.tab-pane');
let line = document.querySelector('.tabs .line');
let tabActive = document.querySelector('.tab-item.active');
console.log([tabActive])
line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    tab.onclick = () => {
        let activeNow = document.querySelector('.tab-item.active');
        activeNow.classList.remove('active');
        tab.classList.add('active');
        document.querySelector('.tab-pane.active').classList.remove('active');
        panes[index].classList.add('active');
        line.style.left = tab.offsetLeft + "px";
        line.style.width = tab.offsetWidth + "px";
    }
});

