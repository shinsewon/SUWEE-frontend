// Main

// Mock Data
// 오늘의 책 API

// 한달 이내에 출간된 책 APIbestSellerBook
// export const BOOKLIST = 'http://localhost:3001/data/bookData.json';
export const BOOKLIST =
  "http://10.58.3.216:8000/books/recently?day=30&limit=20";

// 지금 서점 베스트셀러 API
export const BESTSELLER_API =
  "http://10.58.3.216:8000/books/bestseller?limit=10";
// 이번 주 취향별 추천 책 API
export const RECOMMENDEDBOOK_API =
  "http://localhost:3001/data/recommendedBookData.json";
// 커밍순 놓치기 아쉬운 책 API

// BookRoom

// export const BOOKROOM_API = 'http://localhost:3001/data/BookRoomData.json';

export const BOOKROOM_BOOKLIST_API =
  "http://localhost:3001/data/BookRoomData.json";
export const BOOKROOM_USER_API =
  "http://localhost:3001/data/BookRoomUserData.json";
export const BOOKROOM_STATISTIC_API =
  "http://localhost:3001/data/BookRoomStatisticData.json";

//Login
export const KAKAO_API =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/kakao_sign_in";
export const CERTIFY_REQUEST =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/authSMS";
export const DUBBLE_CHECK =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/sign_up";
export const SIGN_IN =
  "http://ec2-13-125-154-100.ap-northeast-2.compute.amazonaws.com:8000/user/sign_in";
export const TEST = "http://test";

export const LIBRARY_IMG = "./images/library.png";

export const CHECK_IMG = "./images.checked.png";

export const FIRST_API = "/data/data.json";

export const INFO_API = "http://192.168.200.184:8000/books";
export const REVIEW_API = "http://192.168.200.184:8000/books/24/review";
