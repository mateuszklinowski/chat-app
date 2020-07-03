import React from 'react'

interface YouTubeFrameProps {
    url: string | undefined
}

export const YouTubeFrame: React.FunctionComponent<YouTubeFrameProps> = ({
    url,
}) => {
    if (!url) {
        return null
    }

    return (
        <iframe
            width="400"
            height="300"
            src={url}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
    )
}
