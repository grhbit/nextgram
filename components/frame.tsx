import React from "react";

function RandomDescription() {
    const [text, setText] = React.useState<string | null>(null);
    React.useEffect(() => {
        fetch("https://api.icndb.com/jokes/random")
            .then(res => res.json())
            .then(result => {
                setText(result.value.joke);
            });
    }, []);

    return <p>{text || "loading..."}</p>;
}

export interface FrameProps {
    id: string;
}

export default function Frame({ id }: FrameProps) {
    return (
        <div className="photo">
            <div className="image">
                <img alt={id} src={`https://giant.gfycat.com/${id}.gif`} />
            </div>

            <div className="sidebar">
                <ul className="sidebarList">
                    <h3>Description</h3>
                    <RandomDescription />
                </ul>
            </div>

            <style jsx>
                {`
                    .photo {
                        width: 800px;
                        max-height: 600px;
                        overflow: hidden;
                        display: inline-block;
                        background-color: #fff;
                    }

                    .image {
                        float: left;
                        width: 600px;
                        color: #fff;
                        text-align: center;
                        vertical-align: middle;
                        font-size: 40px;
                    }

                    .image img {
                        padding: 0;
                        margin: 0;
                        width: 600px;
                    }

                    .sidebar {
                        float: right;
                        background: #fff;
                        width: 200px;
                        height: 100%;
                        text-align: left;
                        box-sizing: border-box;
                        padding: 0 20px;
                        font-family: Monaco;
                        font-size: 11px;
                    }

                    .sidebarList {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
        </div>
    );
}
