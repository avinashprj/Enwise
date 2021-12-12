import React from "react";
import { VideoGrid, SidePannel, SidePannelMinimal } from "../../components";
import { FlexContainer } from "../../components/Shared";
import { useReducerContext } from "../../context/ReducerContext";

export function History() {
    const { history } = useReducerContext();
    history.reverse();
    return (
        <FlexContainer>
            <SidePannel />
            <SidePannelMinimal />
            <VideoGrid videos={history} />
        </FlexContainer>
    );
}
