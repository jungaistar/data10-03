// 로그인 설정 — 이 파일 한 곳만 바꾸면 된다(생성: data10-00/scripts/apply-auth-kit.mjs, 대문 문구 출처 docs/plan.json).
// 내 Supabase 로 옮길 때: url · anonKey 를 내 프로젝트 값으로, 카카오를 설정하지 않았으면 kakao: false. 안내 = docs/내_깃허브로_옮기기.md
// prefix 는 supabase/auth.sql 의 표 이름 앞부분과 같아야 한다.
window.AUTH_CONFIG = {
  "url": "https://hcmgdztsgjvzcyxyayaj.supabase.co",
  "anonKey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw",
  "prefix": "data1003",
  "kakao": true,
  "idleMinutes": 30,
  "localBypass": true,
  "site": {
    "title": "검사 기준서 작성 자동화",
    "summary": "PDF 도면의 치수 · 공차 · 기하공차 · 용접 표기를 읽어 번호 풍선을 달거나 풍선별 정보를 기준서 양식 엑셀로 뽑고, 정답과 대조해 인식 일치율을 재는 도구입니다.",
    "course": "현장 데이터 디지털화 전문가과정 · 2차수",
    "features": [
      {
        "name": "도면 열기 · 인식",
        "desc": "벡터 PDF 의 글자 · 윤곽선 글자 · 선 글꼴을 읽어 치수 · 공차 · 용접 후보를 도면 위에 표시합니다."
      },
      {
        "name": "목표 1 · 풍선 배치",
        "desc": "후보에 번호 풍선을 겹치지 않게 달고 풍선 PDF · PNG · 기준서 엑셀을 냅니다."
      },
      {
        "name": "목표 2 · 풍선 읽기",
        "desc": "풍선 번호를 지시선 끝의 표기와 이어 풍선별 Spec · 공차를 기준서 엑셀로 뽑습니다."
      },
      {
        "name": "일치율 측정",
        "desc": "정답 엑셀과 대조해 필드 · 완전 일치율, 놓친 것 · 값 다른 것을 보이고 기록합니다."
      },
      {
        "name": "치수 · 용접 기준서 구분",
        "desc": "기준서를 치수 · 용접으로 나눠 번호 · 풍선 PDF · 엑셀을 따로 냅니다."
      },
      {
        "name": "일반공차",
        "desc": "도면 주기의 ISO 13920 · 2768 을 찾아 공차 없는 치수의 MAX · MIN 을 채웁니다."
      }
    ],
    "steps": [
      "로그인 · 승인",
      "도면 PDF 열기",
      "후보 인식",
      "사람이 고치기",
      "풍선 달기 · 읽기",
      "기준서 엑셀"
    ],
    "flow": [
      {
        "step": "로그인 · 승인",
        "desc": "가입 · 사용 신청 뒤 관리자가 승인하면 도구가 열림"
      },
      {
        "step": "도면 PDF 열기",
        "desc": "브라우저 안에서 pdf.js 로 글자 · 선 · 원을 읽음"
      },
      {
        "step": "후보 인식",
        "desc": "윤곽선 · 선 글꼴 되읽기, 표제란 · 테두리 · 주기 빼기, 구분 정하기"
      },
      {
        "step": "사람이 고치기",
        "desc": "글자 눌러 추가 · 빼기 · 값 고치기 · 제외 영역"
      },
      {
        "step": "풍선 달기 · 읽기",
        "desc": "목표 1 풍선 배치 또는 목표 2 풍선 → 표기 연결"
      },
      {
        "step": "기준서 엑셀",
        "desc": "치수 · 용접 기준서 칸으로 엑셀, 풍선 PDF"
      }
    ],
    "goals": [
      "목표 1 — 풍선이 없는 도면에서 검사 대상을 찾아 번호 풍선을 단 PDF 를 냅니다.",
      "목표 2 — 풍선이 있는 도면에서 풍선마다 치수 · 공차 · 용접 정보를 이어 엑셀로 냅니다.",
      "정답과 같은 식으로 대조해 인식 일치율 85% 이상을 숫자로 확인합니다."
    ],
    "screen": "docs/img/screen.png",
    "plan": "plan.html",
    "home": true,
    "landing": {
      "company": {
        "name": "건화",
        "en": "KUNHWA"
      },
      "colors": {
        "navy": "#0d2a5c",
        "navy2": "#081d42",
        "brand": "#1a4fa0",
        "brandDark": "#123a78",
        "accent": "#ff9a8f"
      }
    }
  }
};
