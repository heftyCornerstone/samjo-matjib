![image](https://github.com/user-attachments/assets/32b5b152-af6c-48fc-9be7-f7c783066bf2)# 🍳 Samjo-Matjib 🥘

## 삼조 맛집

우리 팀 '삼조 맛집'과 팀원들을 소개하는 웹 페이지로, HTML, CSS, JS를 사용하여 만들었습니다.
그리고 CRUD 기능을 구현하기 위해 firebase를 이용하였습니다.

## 구성

### 1. TEAM

- 팀 소개, 특징, 궁극적 목표, 그리고 우리 팀 약속에 대한 내용을 담고 있습니다.
- 마우스를 각각의 요소에 가져다 놓으면(hover) 색상이 부드럽게 바뀝니다.

![image](https://github.com/user-attachments/assets/e94f8796-5a64-4642-82d6-d5e45ca1243f)


![image](https://github.com/user-attachments/assets/ab99044d-cf95-42bc-a11f-b3cc43f07493)


### 2. MEMBERS

- 각각 팀 맴버들의 대표 이미지와 이름, 팀 내 역할을 card 형태로 보여줍니다.
- 각각의 맴버 카드를 클릭하여 개인의 mbti, 장점, 협업 스타일, 깃헙과 블로그 주소 등의 상세 정보를 확인할 수 있습니다.
- 각각의 맴버카드는 Join 페이지를 통해 firestore에 저장되었던 정보를 기반으로 생성됩니다.
- 각각의 맴버카드 하단에 쓰레기통 모양의 아이콘이 있습니다. 그 아이콘을 클릭하면, 해당 맴버카드를 삭제할 수 있습니다. 사용자들이 실수로 맴버카드를 삭제하는 것을 방지하기 위해 삭제 아이콘을 누르면, 삭제 재확인 문구와 함께 맴버 가입 시 설정했던 비밀번호를 입력해야만 삭제할 수 있는 기능을 추가했습니다.

![image](https://github.com/user-attachments/assets/dd085d1a-ed33-4f2e-bc0c-e23d2e8bfb30)


![image](https://github.com/user-attachments/assets/735c5e7c-afdf-481b-ad77-6e4b827fb621)


![image](https://github.com/user-attachments/assets/e86074ea-0e58-4382-8f27-0bcc3811d4d2)


### 3. JOIN

- 가입을 원하는 사용자들은 Join 페이지에서 맴버 가입을 할 수 있습니다.
- 해당 페이지에서 이름, github과 블로그 주소, MBTI, 사진 URL, 비밀번호 등 요구하는 정보를 입력해야만 가입이 성공적으로 완료됩니다.
- 사용자들이 필수 정보를 입력하지 않고 가입하는 것을 방지하기 위해, 입력창이 빈칸으로 남겨질 경우 해당 입력창의 테두리를 붉은 색으로 표시하고 '빈 칸을 채워주세요' 문구를 보여줍니다.

![image](https://github.com/user-attachments/assets/87fe22fc-fd84-423c-a98e-f23b6312e475)


![image](https://github.com/user-attachments/assets/d2c20494-f839-45e3-8b36-5fd31ea11de6)


### 4. 전체 레이아웃

- 각각의 페이지는 상단에 고정된 navigation 바와 페이지를 아래로 스크롤하면 최하단에 보이는 팀 github 주소가 포함된 footer를 가지고 있습니다.
- 페이지 상단 navigation 바에서 클릭하여 TEAM, MEMBERS, JOIN 페이지에 각각 접근할 수 있습니다. 각 페이지 이동 시, 해당 페이지에 언더라인이 자연스러운 애니메이션 처리와 함께 이동됨으로서 더욱 사용자에게 친화적인 디자인을 구현했습니다.

![image](https://github.com/user-attachments/assets/ae268cd2-740a-41b9-bce8-d3e52f1ef23a)


![image](https://github.com/user-attachments/assets/6b0f5d1a-d742-485a-adc7-7dc526c57ef9)

