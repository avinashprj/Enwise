import React from "react";
import { VideoProps } from "./VideoProps.types";
import { Container, FlexContainer, Image } from "../Shared";
import { VideoContainer } from "./style.video";
import { Link, useLocation } from "react-router-dom";
import { PlaylistCount } from "./components/PlaylistCount";

export function Video({ video }: VideoProps) {
    const { pathname } = useLocation();

    return (
        <VideoContainer cursor="pointer" m="0 auto">
            <Image
                w="100%"
                src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt="video thumbnail"
                br="2em"
            />
            <FlexContainer
                minH="3em"
                direction="column"
                justify="center"
                p="0.1em 0.5em 0.4em"
            >
                <Container fw={600}>{video.title}</Container>
                {pathname === "/" && (
                    <Container fs="0.9rem" color="var(--font-color-2)">
                        {video.creator}
                    </Container>
                )}
                {pathname === "/playlists" && <PlaylistCount />}
            </FlexContainer>
        </VideoContainer>
    );
}
