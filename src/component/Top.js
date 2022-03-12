import { Divider, Header, Loader } from "semantic-ui-react";
import Gnb from "./Gnb";
import LocalSelect from "./LocalSelect";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/angma.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">Fish</Header>
      </div>
      <Divider />

      <LocalSelect />
      {/* <Gnb /> */}
    </div>
  );
}
