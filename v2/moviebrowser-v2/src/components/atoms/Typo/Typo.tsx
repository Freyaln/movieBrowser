import * as React from 'react';
import {FC} from 'react';

export enum TextType {
    TEXT,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
}

interface TypoPropsInterface {
    type?: TextType;
    className?: string;
    style?:  React.CSSProperties;
    children: React.ReactNode;
}

const Typo: FC<TypoPropsInterface> = ({ type, children, className, style }) => {
    switch (type) {
        case TextType.TEXT:
            return <p className={className} style={style}>{children}</p>;
        case TextType.H1:
            return <h1 className={className} style={style}>{children}</h1>;
        case TextType.H2:
            return <h2 className={className} style={style}>{children}</h2>;
        case TextType.H3:
            return <h3 className={className} style={style}>{children}</h3>;
        case TextType.H4:
            return <h4 className={className} style={style}>{children}</h4>;
        case TextType.H5:
            return <h5 className={className} style={style}>{children}</h5>;
        case TextType.H6:
            return <h6 className={className} style={style}>{children}</h6>;
        default:
            return <span className={className} style={style}>{children}</span>;
    }
};

export default Typo;
