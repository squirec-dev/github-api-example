import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import Search from "./Search";
import SearchAPI from "../../mocks/SearchAPI";

// TODO: "props: any" to be replaced with proper type
describe("Search Page", () => {
    const mockPage = (props?: any) => render(
		<Search
            {...props} 
        />
	);

    test("Renders a labelled search field", () => {
        mockPage();
        
        expect(
            screen.getByRole("textbox", { name: "Search" })
        ).toBeInTheDocument();
    });

    test("Renders a table of results", () => {
        mockPage({ defaultResults: SearchAPI });
        
        expect(screen.getByRole("table")).toBeInTheDocument();
    });

    test.each([
        "Repository Name",
        "Author Name",
        "Stars",
        "Actions",
    ])("Renders a table header %p", (header) => {
        mockPage({ defaultResults: SearchAPI });
        
        expect(
            screen.getByRole("columnheader", { name: header })
        ).toBeInTheDocument();
    });
});
