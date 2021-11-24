import React from "react";
import { Link } from "react-router-dom";
import { Container, FlexContainer } from "../../components/Shared";
import {
    SettingsIcon,
    LikeIcon,
    HistoryIcon,
    WatchLaterIcon,
    LogOutIcon,
} from "../../assets/svg";

export function Profile() {
    return (
        <FlexContainer direction="column" pt="0.5em">
            <Link to="/liked">
                <FlexContainer p="1em 2em">
                    <LikeIcon
                        color={"var(--icon-color)"}
                        className="scale-15"
                    />
                    <Container pl="1em">Liked</Container>
                </FlexContainer>
            </Link>
            <Link to="/history">
                <FlexContainer p="1em 2em">
                    <HistoryIcon
                        color={"var(--icon-color)"}
                        className="scale-15"
                    />
                    <Container pl="1em">History</Container>
                </FlexContainer>
            </Link>

            <Link to="/watchlater">
                <FlexContainer p="1em 2em">
                    <WatchLaterIcon
                        color={"var(--icon-color)"}
                        className="scale-15"
                    />
                    <Container pl="1em">Watch Later</Container>
                </FlexContainer>
            </Link>

            <Link to="/settings">
                <FlexContainer p="1em 2em">
                    <SettingsIcon
                        color={"var(--icon-color)"}
                        className="scale-15"
                    />
                    <Container pl="1em">Settings</Container>
                </FlexContainer>
            </Link>
            <FlexContainer p="1em 2em">
                <LogOutIcon color={"#DC2626"} className="scale-15" />
                <Container pl="1em" color="#DC2626">
                    Logout
                </Container>
            </FlexContainer>
        </FlexContainer>
    );
}
