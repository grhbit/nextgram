import React, { MouseEventHandler } from "react";
import Photo from "./frame";

export interface ModalProps {
    id: string;
    onDismiss: () => void;
}

export default function Modal({ id, onDismiss }: ModalProps) {
    const shim = React.useRef<HTMLDivElement>(null);
    const photoWrap = React.useRef<HTMLDivElement>(null);

    const onClick = React.useCallback<MouseEventHandler<HTMLDivElement>>(
        ({ target }) => {
            if (shim.current === target || photoWrap.current === target) {
                if (onDismiss) {
                    onDismiss();
                }
            }
        },
        [onDismiss]
    );

    return (
        <div ref={shim} className="shim" onClick={onClick}>
            <div ref={photoWrap} className="photo">
                <Photo id={id} />
            </div>
            <style jsx>
                {`
                    .shim {
                        position: fixed;
                        background: rgba(0, 0, 0, 0.65);
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                    }

                    .photo {
                        position: absolute;
                        top: 50%;
                        width: 100%;
                        margin-top: -250px;
                    }
                `}
            </style>
        </div>
    );
}
