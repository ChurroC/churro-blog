import Viewer from "./viewer";
import "./App.css";

function App() {
    return (
        <>
            <div>
                <div
                    style={{
                        position: "relative",
                        width: "800px",
                        height: "600px"
                    }}
                >
                    <Viewer
                        runtime={{
                            accessToken:
                                "R3gUAad3z4rNZudzeVKArkqOA7kbdvE3UXeD1Gq38bDIhQQvHOo5K4GZ8GNU8GCp"
                        }}
                        urn={"<your-model-urn>"}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
