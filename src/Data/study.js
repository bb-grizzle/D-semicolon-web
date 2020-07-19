// const initial = {
//   title: "title",
//   index: [
//     "html 개념",
//     "html 기본구조",
//     "기본 태그 - 제목, 단락, 줄바꿈, 목록",
//     "의미론적 태그 (section, article...)"
//   ],
//   file: "https://naver.com"
// }

const URL = "http://localhost:3000/download"
const HTML = 'html'
const JS = 'js'
export default [{
    group: "html/css",
    src: [{
      title: "맛보기",
      index: [
        "D; 스터디 오리엔테이션",
        "html 개념, 정의",
        "스터디 진행 방식",
        "html 맛보기",
      ],
      file: `${URL}/${HTML}/01.zip`
    }, {
      title: "기본 태그",
      index: [
        "기본 태그 - 제목, 단락, 줄바꿈, 목록",
        "의미론적 태그 (section, article...)",
      ],
      file: `${URL}/${HTML}/02.zip`
    }, {
      title: "인라인과 블록, css기본",
      index: [
        "이미지 태그, 태그의 속성",
        "앵커태그",
        "인라인과 블록",
        "태그의 중첩",
        "css의 개념 / 기본구조",
        "폰트 속성",
      ],
      file: `${URL}/${HTML}/03.zip`
    }, {
      title: "css 박스모델, 선택자",
      index: [
        "목록 타입 변경 (list-style)",
        "폰트 밑줄 변경 (font-decoration)",
        "배경 색상 변경 (background-color)",
        "박스모델의 개념 / 구조",
        "css 초기화",
        "class의 개념",
        "css의 우선순위, 선택자",
      ],
      file: `${URL}/${HTML}/04.zip`
    }, {
      title: "가사클래스, display",
      index: [
        "가상클래스",
        "display 속성",
        "float 개념",
      ],
      file: `${URL}/${HTML}/05.zip`
    }, {
      title: "블록과 인라인, position",
      index: [
        "div 태그",
        "span 태그",
        "블록과 인라인",
        "background 속성",
        "position 속성",
      ],
      file: `${URL}/${HTML}/06.zip`

    }, {
      title: "웹 카피",
      index: [
        "나이키 홈페이지 카피"
      ],
      file: `${URL}/${HTML}/07.zip`
    }]
  },




  {
    group: "javascript",
    src: [{
        title: "프로그래밍이란",
        index: [
          "프로그래밍이란?",
          "자바스크립트",
          "변수",
          "datatype & organizing",
          "웹에 활용 하기",
        ],
        file: `${URL}/${JS}/01.zip`
      }, {
        title: "함수와 DOM",
        index: [
          "함수",
          "DOM",
          "if 조건문",
          "for 반복문"
        ],
        file: `${URL}/${JS}/02.zip`
      }, {
        title: "시간 표현하기",
        index: [
          "Date를 이용한 시계 포현",
          "로컬 스토리지를 이용해 사용자이름 저장"
        ],
        file: `${URL}/${JS}/03.zip`
      }, {
        title: "todo 작성",
        index: [
          "데이터 저장",
          "데이터를 이용해 DOM 그리기",
        ],
        file: `${URL}/${JS}/04.zip`
      }, {
        title: "데이터 삭제",
        index: [
          "데이터 삭제",
        ],
        file: `${URL}/${JS}/05.zip`
      }, {
        title: "외부 API",
        index: [
          "렌덤을 이용한 배경이미지 변경",
          "날씨 데이터 받아오기"
        ],
        file: `${URL}/${JS}/06.zip`
      }


    ]
  }
]