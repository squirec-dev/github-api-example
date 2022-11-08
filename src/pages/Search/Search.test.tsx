import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "./Search";

// TODO: "props: any" to be replaced with proper type
describe("Search Page", () => {
    const mockPage = (props?: any) => render(
		<Search
            {...props} 
        />,
	);

    test("Renders a labelled search field", () => {
        mockPage();
        
        expect(
            screen.getByRole("textbox", { name: "Search" })
        ).toBeInTheDocument();
    });
});
