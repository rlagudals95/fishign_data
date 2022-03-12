import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";
import { locals } from "../../share/Data";

export default function LocalSelect() {
  console.log("데이터 : ", locals);
  function getLocalData(e) {
    let osb_no = e.target.value;
    let latitude = e.target.name;
    let logitude = e.target.id;
  }

  return (
    <div>
      {locals.map((item) => (
        <button
          key={item.osb_no}
          className="mini ui inverted primary button"
          onClick={getLocalData}
          value={item.osb_no}
          name={item.latitude}
          id={item.logitude}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}
