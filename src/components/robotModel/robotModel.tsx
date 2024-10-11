import Viewer from "./viewer";

export function RobotModel() {
    return (
        <div>
            <Viewer
                runtime={{
                    accessToken:
                        "R3gUAad3z4rNZudzeVKArkqOA7kbdvE3UXeD1Gq38bDIhQQvHOo5K4GZ8GNU8GCp"
                }}
                urn={urn}
                selectedIds={this.state.selectedIds}
                onCameraChange={({ viewer, camera }) =>
                    this.setState({ camera: camera.getWorldPosition() })
                }
                onSelectionChange={({ viewer, ids }) =>
                    this.setState({ selectedIds: ids })
                }
                ref={ref => (this.wrapper = ref)}
            />
        </div>
    );
}
