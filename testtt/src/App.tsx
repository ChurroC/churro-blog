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
                        urn={"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y2h1cnJvYy1jb29sLWJ1Y2tldC1uYW1lL1JhdGNoZXQuZjNk"}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
