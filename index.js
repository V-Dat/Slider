const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tabs .tab-item");
const panes = $$(".tab-content .tab-pane");
const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

hanleTransformLine(tabActive, line);

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    hanleTransformLine(this, line);

    this.classList.add("active");
    pane.classList.add("active");
  };
});

function hanleTransformLine(tab, line) {
  line.style.left = tab.offsetLeft + "px";
  line.style.width = tab.offsetWidth + "px";
}
