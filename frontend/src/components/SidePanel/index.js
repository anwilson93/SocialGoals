import { useState, useEffect } from "react";
import SidePanelDetails from "../SidePanelDetails";
import "./SidePanel.css";

function SidePanel() {
    const [sideOpen, setSideOpen] = useState(true);

  return (
    <div className="outer-div">
            <div className="side-panel">
                <div className="side-panel-wrapper">
                    <div className="side-panel-button"
                         onClick={() => setSideOpen(!sideOpen)}>
                        {sideOpen ? '<' : '>'}
                    </div>
                </div>
                <SidePanelDetails visible={sideOpen} />
            </div>
        </div>
  );
}

export default SidePanel;