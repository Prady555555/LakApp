import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",

  height: 1,
  margin: -1,
  padding: 0,
  overflow: "hidden",
  position: "absolute",

  whiteSpace: "nowrap",
  width: 1,
});

export const Link = styled(LinkComponent)`
  text-decoration: none;
  color: inherit;
  &:hover {
    text-decoration: none;
  }
`;
export const InputBox = styled("input")`
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  &:focus {
    outline: none;
  }
`;
