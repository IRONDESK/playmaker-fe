import React from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

interface ButtonPropsType {
    mode: "main1" | "main2" | "basic" | "sub1" | "sub2";
    size: "large" | "medium" | "small" | "xsmall";
    type?: "button" | "submit" | "reset" | undefined;
    noFlex?: boolean;
    text: string;
    main?: boolean;
    shadow?: boolean;
    callback?: () => void;
}

const BUTTON_SIZE_STYLE: { [key: string]: { [key: string]: string } } = {
    large: { fontSize: "1rem", height: "56px", weight: "600" },
    medium: { fontSize: "0.9rem", height: "42px", weight: "600" },
    small: { fontSize: "0.8rem", height: "28px", weight: "400" },
    xsmall: { fontSize: "0.75rem", height: "28px", weight: "500" },
};

function Button({ mode, size, type, text, main = true, noFlex = false, shadow = true, callback }: ButtonPropsType) {
    const theme = useTheme();
    const BUTTON_MODE_STYLE = {
        main1: {
            background: theme.color.main,
            color: "#000",
            border: theme.color.main,
            shadow: "0 0 10px 4px rgba(0, 0, 0, 0.05)",
            radius: "8px",
        },
        main2: {
            background: theme.color.white,
            color: "#000",
            border: theme.color.main,
            shadow: "0 0 10px 4px rgba(0, 0, 0, 0.05)",
            radius: "8px",
        },
        basic: {
            background: "#fff",
            color: theme.color.gray4,
            border: "#e7e7e7",
            shadow: "0 0 10px 4px rgba(0, 0, 0, 0.05)",
            radius: "8px",
        },
        sub1: {
            background: theme.color.gray1,
            color: theme.color.gray4,
            border: "transparent",
            shadow: "none",
            radius: "4px",
        },
        sub2: {
            background: "#ececec",
            color: theme.color.gray4,
            border: "transparent",
            shadow: "none",
            radius: "8px",
        },
    };
    return (
        <Wrapper
            type={type ?? "button"}
            onClick={callback}
            modestyle={BUTTON_MODE_STYLE}
            noFlex={noFlex}
            mode={mode}
            size={size}
            main={main}
            shadow={shadow}
        >
            {text}
        </Wrapper>
    );
}

const Wrapper = styled.button<{
    mode: string;
    size: string;
    noFlex: boolean;
    modestyle: { [key: string]: { [key: string]: string } };
    main: boolean;
    shadow: boolean;
}>`
    padding: 0 16px;
    min-height: ${({ size }) => BUTTON_SIZE_STYLE[size].height};
    flex: ${({ noFlex, main }) => (noFlex ? "none" : main ? 2 : 1)};
    background-color: ${({ modestyle, mode }) => modestyle[mode].background};
    border: 1px solid ${({ modestyle, mode }) => modestyle[mode].border};
    box-shadow: ${({ modestyle, mode, shadow }) => (shadow ? modestyle[mode].shadow : "none")};
    border-radius: ${({ modestyle, mode }) => modestyle[mode].radius};
    color: ${({ modestyle, mode }) => modestyle[mode].color};
    font-size: ${({ size }) => BUTTON_SIZE_STYLE[size].fontSize};
    font-weight: ${({ size }) => BUTTON_SIZE_STYLE[size].weight};
    &:hover {
        opacity: 0.85;
    }
`;

export default Button;
