// 네비게이션   
document.addEventListener("DOMContentLoaded", () => {
  const underLine = document.getElementById("menuUnderLine");
  const menuItems = document.querySelectorAll(".menuUl .menuLi a");

  // 언더라인 위치 업데이트 함수
  const updateUnderLine = (item) => {
    const left =
      item.getBoundingClientRect().left -
      item.parentElement.getBoundingClientRect().left;
    const width = item.offsetWidth;
    const itemHeight = item.offsetHeight;

    underLine.style.width = `${width}px`;
    underLine.style.transform = `translate(${left}px, ${itemHeight - 2}px)`; // 언더라인을 텍스트 바로 아래로 이동
    underLine.style.visibility = "visible";
  };

  // 현재 URL에 맞는 메뉴 항목을 활성화시키는 함수
  const setActiveMenu = () => {
    const currentPage = window.location.pathname;

    menuItems.forEach((link) => {
      const menuItem = link.parentElement; // <li> 요소

      // 현재 URL이랑 일치하는 메뉴에 active 상태 적용
      if (currentPage.endsWith(link.getAttribute("href"))) {
        link.classList.add("active");
        link.style.color = "black"; // 활성화된 메뉴는 검정색
        updateUnderLine(menuItem); // 언더라인 위치 업데이트
      } else {
        link.classList.remove("active");
        link.style.color = "#7d7d7d"; // 비활성화된 메뉴는 회색
      }
    });
  };

  // 메뉴 클릭 시 언더라인과 색상 업데이트
  menuItems.forEach((link) => {
    const menuItem = link.parentElement; // <li> 요소

    link.addEventListener("click", (e) => {
      e.preventDefault(); // 페이지 이동 중단

      // 모든 메뉴의 active 상태를 해제하고 색상을 초기화
      menuItems.forEach((el) => {
        el.classList.remove("active");
        el.style.color = "#7d7d7d"; // 비활성화된 메뉴는 회색
      });

      // 클릭한 메뉴를 active 상태로 만들고 언더라인 이동
      link.classList.add("active");
      link.style.color = "black"; // 클릭한 메뉴는 검정색
      updateUnderLine(menuItem);

      // 페이지 이동
      setTimeout(() => {
        window.location.href = link.getAttribute("href");
      }, 300); // 애니메이션 끝나고 이동
    });
  });

  // 페이지 로드 시 초기 메뉴 설정
  setActiveMenu();

  // 언더라인 애니메이션 비활성화 (초기화 방지)
  underLine.style.transition = "none";

  // 페이지 로드 완료 후 애니메이션 활성화
  setTimeout(() => {
    underLine.style.transition = "width 0.3s ease, transform 0.3s ease";
  }, 100); // 로드 후 일정 시간 뒤 애니메이션 활성화

  // 브라우저 크기 변경 시 언더라인 재조정
  window.addEventListener("resize", () => {
    const activeLink = document.querySelector(".menuLi a.active");
    if (activeLink) {
      updateUnderLine(activeLink.parentElement);
    }
  });
});
// 네비게이션


// // Firebase SDK 라이브러리 가져오기
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   doc,
//   deleteDoc,
// } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// // Firebase 구성 정보 설정
// const firebaseConfig = {
//   apiKey: "AIzaSyB5lkGXDo4mwu2p0XxO1DEYVbmYJLkShcQ",
//   authDomain: "samjo-matjib.firebaseapp.com",
//   projectId: "samjo-matjib",
//   storageBucket: "samjo-matjib.appspot.com",
//   messagingSenderId: "664392711771",
//   appId: "1:664392711771:web:543cb6323357fa4797497e",
//   measurementId: "G-S6PG06CBL9",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// async function loadMembers() {
//   // firebase에서 데이터 가져오기
//   let docs = await getDocs(collection(db, "members"));

//   docs.forEach((docInfo) => {
//     let row = docInfo.data();
//     let name = row["name"];
//     let photo = row["photo"];
//     let mbti = row["mbti"];
//     let merit = row["merit"];
//     let coStyle = row["coStyle"];
//     let fav = row["favorites"];
//     let blog = row["blog"];
//     let github = row["github"];
//     const pw = row["pw"];

//     let position = name === "박산하" ? "팀장" : "팀원"; // 팀장 조건

//     // HTML 문자열 생성
//     let temp_html = `
//       <div class="col col-md-4">
//         <div class="card">
//           <img src="${photo}" class="card-img-top" alt="${name} 이미지" />
//           <div class="card-body">
//             <div class="textArea">
//               <h5 class="card-name">${name}</h5>
//               <div class="material-symbols-outlined deleteBtn">delete</div>
//             </div>
//             <h7 class="card-position">${position}</h7>
//           </div>
//         </div>
//       </div>`;

//     // temp_html 맴카드에 추가하기
//     let card = $(temp_html).appendTo("#memCard");

//     // 카드 클릭 시 팝업창에 데이터 삽입
//     card.find(".card-img-top").on("click", function () {
//       // 팝업창에 데이터 삽입
//       $(".memName").text(name);
//       $(".popUpPhoto").attr("src", photo);
//       $(".memMbti").text(mbti);
//       $(".memFavorites").text(fav);
//       $(".memGithub").text(github);
//       $(".memBlog").text(blog);
//       $(".memGithub").attr("href", github);
//       $(".memBlog").attr("href", blog);
//       $(".memMerit").text(merit);
//       $(".memStyle").text(coStyle);

//       // 팝업창 서서히 자연스럽게 보이게하기
//       $("#popUp").fadeIn();
//     });

//     // 닫기 버튼 클릭 시 자연스럽게 팝업창 닫기
//     $(".popUpCloseBtn")
//       .off("click")
//       .on("click", function () {
//         $("#popUp").fadeOut();
//       });

//     // delete 기능 구현
//     card.find(".deleteBtn").on("click", async function () {
//       // 모달을 표시
//       $("#member-delete").css("display", "flex");

//       // 삭제 확인 모달에서 삭제 버튼 클릭 시
//       $(".deleteCardBtn").on("click", async function () {
//         const enteredPassword = $("#password").val(); // 입력한 비밀번호 가져오기

//         if (enteredPassword === pw) {
//           const docId = docInfo.id;
//           try {
//             await deleteDoc(doc(db, "members", docId));

//             card.remove();

//             // 삭제 성공 모달 표시
//             $("#member-delete").css("display", "none");
//             $("#member-failed").css("display", "none");
//             $("#member-delete-successed").css("display", "flex");
//           } catch (error) {
//             console.error("에러메세지: ", error);
//             alert("카드 삭제에 실패했습니다.");
//           }
//         } else {
//           // 비밀번호가 틀린 경우 실패 모달을 띄움
//           $("#member-delete-successed").css("display", "none");
//           $("#member-delete").css("display", "none");
//           $("#member-delete-failed").css("display", "flex");
//         }
//       });

//       // 취소1 버튼을 눌렀을 때 삭제 확인 모달 닫기
//       $(".cancelBtn1").on("click", function () {
//         $("#member-delete").css("display", "none");
//       });

//       // 삭제 성공 모달에서 확인 버튼을 눌렀을 때
//       $(".okayBtn").on("click", function () {
//         $("#member-delete-successed").css("display", "none");
//       });

//       // 삭제 실패 모달에서 다시 입력 버튼을 눌렀을 때
//       $(".tryAgainBtn").on("click", function () {
//         $("#member-delete-failed").css("display", "none");
//         $("#member-delete").css("display", "flex");
//       });

//       // 실패 모달에서 취소 버튼을 눌렀을 때
//       $(".cancelBtn2").on("click", function () {
//         $("#member-delete-failed").css("display", "none");
//       });
//     });
//   });
// }

// // 비동기 함수 호출
// loadMembers().catch(console.error);
// // 호출 시 문제 생기면 에러 확실히 알기 위해 catch 사용함...
