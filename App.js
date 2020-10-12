import React from "react";
import "./App.css";
import DemoStateless from "./Components/DemoStateless";
import DemoStatefull from "./Components/DemoStatefull";
import BaiTapLayout1 from "./Components/BaiTapLayoutComponent/BaiTapLayout1";
import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandlEvent/HandleEvent";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
import DemoListAndKey from "./ListAndKey/DemoListAndKey";
import DemoProps from "./Props/DemoProps";
import BaiTapGioHang from "./BaiTapGioHang";

function App() {
  return (
    <div className="App">
      //-----Buổi 1-----
      {/* <DemoStateless />
      <DemoStatefull />
      <BaiTapLayout1/>
      <Databinding/>
      <HandleEvent/> */}
      <hr></hr>
      //-----Buổi 2-----
      <DemoConditionalAndState />
      <hr></hr>
      <BaiTapChonMauXe />
      <hr></hr>
      <DemoListAndKey />
      <hr></hr>
      <DemoProps />
      <hr></hr>
      //-----Buổi 3-----
      <BaiTapGioHang />
    </div>
  );
}

export default App;
