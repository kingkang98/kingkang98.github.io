---
title: "Jekyll에서 Next.js까지: 내 기술 블로그 제작기"
excerpt: "단순한 정적 사이트에서 화려한 인터랙티브 블로그로. Next.js, Tailwind CSS, 그리고 Framer Motion을 도입하여 나만의 블로그를 만든 과정을 공유합니다."
date: "2025-12-27T21:40:00.000Z"
---

안녕하세요! 👋  
드디어 제 기술 블로그가 새 옷을 입었습니다.

처음에는 GitHub Pages에서 가장 보편적인 **Jekyll**로 시작했지만, 
개발자로서 욕심이 생겨 더 현대적이고 화려한 **Next.js** 기반으로 완전히 마이그레이션하게 되었습니다.

## 왜 Next.js인가?

Jekyll도 훌륭하지만, 정적 사이트 생성기(SSG)로서의 한계가 있었습니다. 저는 다음과 같은 기능을 원했습니다.

1. **화려한 인터랙션**: 페이지가 넘어갈 때 부드러운 전환 효과를 넣고 싶었습니다.
2. **React 생태계**: 제가 좋아하는 React 컴포넌트들을 자유롭게 쓰고 싶었습니다.
3. **커스텀 디자인**: 정해진 테마보다는, **Tailwind CSS**로 픽셀 하나까지 제 마음대로 제어하고 싶었습니다.

그래서 과감하게 Node.js 환경인 Next.js 14 (App Router)를 선택했습니다.

## 기술 스택 🛠️

이 블로그를 구성하는 핵심 기술들은 다음과 같습니다.

- **Framework**: `Next.js 14` + `TypeScript`
- **Styling**: `Tailwind CSS` (Glassmorphism 디자인 적용)
- **Animation**: `Framer Motion` (Hero 섹션의 3D 효과)
- **Content**: `Gray-matter` & `Remark` (Markdown 파일 파싱)
- **Deployment**: `GitHub Actions` (자동 빌드 및 배포)

## 개발 과정의 난관들

### 1. GitHub Actions와 날짜 포맷 📅
로컬에서는 잘 되던 빌드가 GitHub Actions에 올라가니 실패하는 일이 있었습니다.
알고 보니 Markdown 파일의 `date` 필드 형식이 문제였습니다.
`+0900` 같은 타임존 형식이 포함된 문자열을 자바스크립트의 `Date` 객체로 변환하고, 다시 **JSON으로 직렬화(Serialization)** 하는 과정에서 타입 오류가 발생했죠.

결국 API 유틸리티 함수에서 데이터를 가져올 때, 강제로 `toISOString()`을 해주는 로직을 추가하여 해결했습니다.

```typescript
// safe serialization
const data = JSON.parse(JSON.stringify(matterResult.data));

if (data.date) {
    const d = new Date(data.date);
    if (!isNaN(d.getTime())) {
    data.date = d.toISOString();
    }
}
```

### 2. Glassmorphism 디자인 ✨
단순한 흰 배경 대신, 반투명한 유리 질감을 내기 위해 `backdrop-blur` 속성을 적극 활용했습니다.
CSS 변수를 활용해 다크 모드에서도 색상이 자연스럽게 반전되도록 신경 썼습니다.

## 마치며

이제 이 공간에 제가 공부한 것들, 겪었던 삽질들, 그리고 재미있는 프로젝트 이야기들을 하나씩 채워나갈 예정입니다.
지켜봐 주세요! 🚀
