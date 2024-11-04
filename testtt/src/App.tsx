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
                                "eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4YjJkMzNhLTFlOTYtNDYwNS1iMWE4LTgwYjRhNWE4YjNlNyIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbSIsImNsaWVudF9pZCI6Ijl2UFh3ZXMwWVNtOEpBWXdlRDZHOUNYSGVlWG1OR0k4TU9xUGtBQXNTUGFrSU5hNyIsInNjb3BlIjpbInZpZXdhYmxlczpyZWFkIiwiY29kZTphbGwiLCJidWNrZXQ6Y3JlYXRlIiwiYnVja2V0OnJlYWQiLCJidWNrZXQ6dXBkYXRlIiwiYnVja2V0OmRlbGV0ZSIsImRhdGE6cmVhZCIsImRhdGE6d3JpdGUiLCJkYXRhOmNyZWF0ZSIsImRhdGE6c2VhcmNoIiwiYWNjb3VudDpyZWFkIiwiYWNjb3VudDp3cml0ZSIsInVzZXI6cmVhZCIsInVzZXI6d3JpdGUiLCJ1c2VyLXByb2ZpbGU6cmVhZCJdLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiZXhwIjoxNzMwNzQ2NjA4LCJqdGkiOiJBVC04Zjk4NTk5OS02MTJjLTRhN2YtOGI0ZS0wY2FmOGNlMjJlMmYifQ.At046MSiFT3t8gaAQk_yM3lx8d-lX7_EKF-3ejmnnVRP7XvmL_EMnqBkBraFrjc9I_bi7rTjTeKOdVVSGk_71WLk-00EcvLomgJYpCaY68kpO_dHLLLMZWSqBAQTtCtDpu6jfM6i1prynpE1jdGqQ1aJZP4jT3TyoD9W_e9M7IsZ48B2R7sbxdtfusSqVclx0LrrOO8h0pD1kG9a9LOYxAWr8wOukKA6wKTLbcWsMuJsBz4Dn_ynRg3LYPSK-_Y_z8tSaykES_nVNZRlCKxJnxfgWueKEfM045VxBdzh9LItinqBflzYpTOKkp4PqULCsIjnBChB_2t9UshD-Pu1vw",

                            urn: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y2h1cnJvYy1jb29sLWJ1Y2tldC1uYW1lL1JhdGNoZXQuZjNk",
                            api: "derivativeV2"
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
