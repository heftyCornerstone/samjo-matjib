// 네비게이션
document.addEventListener("DOMContentLoaded", () => {
    const underLine = document.getElementById("menuUnderLine");
    const menuItems = document.querySelectorAll(".menuUl .menuLi a");

    // 언더라인 위치 업데이트 함수
    const updateUnderLine = (item) => {
        const left = item.getBoundingClientRect().left - item.closest('ul').getBoundingClientRect().left;
        const width = item.getBoundingClientRect().width;
        const itemHeight = item.offsetHeight;

        underLine.style.width = `${width}px`;
        underLine.style.transform = `translate(${left}px, ${itemHeight - 12}px)`; // 언더라인을 텍스트 바로 아래로 이동
        underLine.style.visibility = 'visible';
    };

    // 현재 URL에 맞는 메뉴 항목을 활성화시키는 함수
    const setActiveMenu = () => {
        const currentPage = window.location.pathname;

        let foundActive = false;

        menuItems.forEach(link => {
            const menuItem = link.parentElement;  // <li> 요소

            // 현재 URL이랑 일치하는 메뉴에 active 상태 적용
            if (currentPage.endsWith(link.getAttribute("href"))) {
                link.classList.add('active');
                link.style.color = 'black';  // 활성화된 메뉴는 검정색
                updateUnderLine(link);  // 언더라인 위치 업데이트
                foundActive = true;
            } else {
                link.classList.remove('active');
                link.style.color = '#7d7d7d';  // 비활성화된 메뉴는 회색
            }
        });

        // 페이지와 일치하는 메뉴가 없을 경우, 기본으로 첫 번째 메뉴 활성화
        if (!foundActive) {
            const firstLink = menuItems[0];
            firstLink.classList.add('active');
            firstLink.style.color = 'black';  // 첫 메뉴는 검정색
            updateUnderLine(firstLink);  // 언더라인을 첫 메뉴 밑에 설정
        }
    };

    // 메뉴 클릭 시 언더라인과 색상 업데이트
    menuItems.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();  // 페이지 이동 중단

            // 모든 메뉴의 active 상태를 해제하고 색상을 초기화
            menuItems.forEach(el => {
                el.classList.remove('active');
                el.style.color = '#7d7d7d';  // 비활성화된 메뉴는 회색
            });

            // 클릭한 메뉴를 active 상태로 만들고 언더라인 이동
            link.classList.add('active');
            link.style.color = 'black';  // 클릭한 메뉴는 검정색
            updateUnderLine(link);

            // 페이지 이동
            setTimeout(() => {
                window.location.href = link.getAttribute("href");
            }, 300);  // 애니메이션 끝나고 이동
        });
    });

    // 페이지 로드 시 초기 메뉴 설정
    setActiveMenu();

    // 언더라인 애니메이션 비활성화 (초기화 방지)
    underLine.style.transition = 'none';

    // 페이지 로드 완료 후 애니메이션 활성화
    setTimeout(() => {
        underLine.style.transition = 'width 0.3s ease, transform 0.3s ease';
    }, 100);  // 로드 후 일정 시간 뒤 애니메이션 활성화

    // 브라우저 크기 변경 시 언더라인 재조정
    window.addEventListener("resize", () => {
        const activeLink = document.querySelector(".menuLi a.active");
        if (activeLink) {
            updateUnderLine(activeLink);
        }
    });
});
// 네비게이션
