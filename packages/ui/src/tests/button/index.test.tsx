import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../..";

describe("<Button />", () => {
  it("render Button with dumi", () => {
    const msg = "Button";

    render(<Button color="green">Button</Button>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
