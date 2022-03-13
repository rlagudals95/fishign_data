import axios, { AxiosInstance } from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export const customAxios = axios.create({
  baseURL:
    
    "http://www.khoa.go.kr/api/oceangrid/tideObsRecent/search.do?ServiceKey=U4/SimipSctGPnto/1vw==&", // 기본 서버 주소 입력
  // headers: {
  //   access_token: cookies.get('access_token'),
  // },
});
