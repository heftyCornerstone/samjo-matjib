// 네비게이션
document.addEventListener("DOMContentLoaded", () => {
    const underLine = document.getElementById("menuUnderLine");
    const menuItems = document.querySelectorAll(".menuUl .menuLi");

    underLine.style.visibility = "hidden";

    const firstItem = menuItems[0];
    firstItem.classList.add('active');
    firstItem.style.color = 'black';

    const initialLeft = firstItem.getBoundingClientRect().left - firstItem.parentElement.getBoundingClientRect().left;
    const initialWidth = firstItem.offsetWidth;
    const initialTop = firstItem.offsetTop + firstItem.offsetHeight;
    underLine.style.visibility = "visible";
    underLine.style.width = `${initialWidth}px`;
    underLine.style.transform = `translate(${initialLeft}px, ${initialTop - 8}px)`;

    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            const left = item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left;
            const width = item.offsetWidth;
            const top = item.offsetTop + item.offsetHeight;

            underLine.style.visibility = "visible";
            underLine.style.width = `${width}px`;
            underLine.style.transform = `translate(${left}px, ${top - 8}px)`;

            menuItems.forEach(el => {
                el.classList.remove('active');
                el.style.color = '#7d7d7d';
            });

            item.classList.add('active');
            item.style.color = 'black';
        });
    });
});
// 네비게이션