import React from "react";
import { useRouter } from "next/router";

export default function ProfilePage() {
    const router = useRouter();
    let { id } = router.query;

    if (Array.isArray(id)) {
        [id] = id;
    }

    return (
        <div className="main">
            <h1 className="heading">
                User profile: <b className="username">{id}</b>
            </h1>
            <style jsx>
                {`
                    .main {
                        padding: 100px;
                    }

                    .heading {
                        font: 15px Monaco;
                    }

                    .username {
                        color: blue;
                    }
                `}
            </style>
        </div>
    );
}
