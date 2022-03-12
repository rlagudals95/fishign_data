import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("about");
    }
  }

  return (
    <Menu inverted>
      <Menu.Item name="조류" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item name="파고" active={activeItem === "about"} onClick={goLink} />
    </Menu>
  );
}
