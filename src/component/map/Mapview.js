import styled from "styled-components";
import { useEffect } from "react";

function Map({ latitude, longitude }) {
  latitude = 33.545;
  longitude = 126.589;
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&autoload=false`;
    console.log("카카오 키 ::", process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY);
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          //center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        // const markerPosition = new window.kakao.maps.LatLng(
        //   latitude,
        //   longitude
        // );
        // const marker = new window.kakao.maps.Marker({
        //   position: markerPosition,
        // });
        // marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    setTimeout(() => {
      latitude = 33.543;
    }, 2000);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return <MapContainer id="map" />;
}

const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;

export default Map;
