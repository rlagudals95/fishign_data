import styled from "styled-components";
import { useEffect, useState } from "react";
import { locals } from "../../../share/Data";

function Map({ latitude, longitude }) {
  const [loading, setLoading] = useState(false);
  latitude = 33.545;
  longitude = 126.589;
  //console.log("데이터들 ::", locals);

  // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
  function makeOverListener(map, marker, infowindow) {
    return function () {
      infowindow.open(map, marker);
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeOutListener(infowindow) {
    return function () {
      infowindow.close();
    };
  }

  // 인포윈도우를 닫는 클로저를 만드는 함수입니다
  function makeClickListener() {
    console.log("클릭한 것 : ", this);
  }

  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    //console.log("카카오 키 ::", process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY);
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 13, // 지도의 확대 레벨
          //center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);

        // 마커 이미지의 이미지 주소입니다
        var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

        for (var i = 0; i < locals.length; i++) {
          // 마커 이미지의 이미지 크기 입니다
          var imageSize = new window.kakao.maps.Size(24, 35);

          // 마커 이미지를 생성합니다
          var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
          locals[i].latlng = new window.kakao.maps.LatLng(
            locals[i].latitude,
            locals[i].logitude
          );
          // 마커를 생성합니다
          var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: locals[i].latlng, // 마커를 표시할 위치
            title: locals[i].name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image: markerImage, // 마커 이미지
            code: locals[i].osb_no,
          });

          // 마커에 표시할 인포윈도우를 생성합니다
          var infowindow = new kakao.maps.InfoWindow({
            content: locals[i].name, // 인포윈도우에 표시할 내용
          });

          kakao.maps.event.addListener(
            marker,
            "mouseover",
            makeOverListener(map, marker, infowindow)
          );
          kakao.maps.event.addListener(
            marker,
            "mouseout",
            makeOutListener(infowindow)
          );

          kakao.maps.event.addListener(marker, "click", function () {
            console.log(this);
          });
        }

        marker.setMap(map);
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);

    setLoading(setLoading(true));

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude, loading]);

  return <MapContainer id="map" />;
}

const MapContainer = styled.div`
  aspect-ratio: 300 / 450;
`;

export default Map;
