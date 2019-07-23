import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchWrapper, SearchIcon, SearchInput } from "./Search.styles";

export default class Search extends Component {
    render() {
        return (
            <SearchWrapper>
                <SearchIcon>
                    <FaSearch />
                </SearchIcon>
                <SearchInput
                    placeholder="42 Wallaby Way, Sydney..."
                    onChange={() => console.log("It changed")}
                />
            </SearchWrapper>
        );
    }
}
