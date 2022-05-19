import './video.css'

const Video = () => {

    return (
        <div>

            <div class="video-background">

                <div class="video-foreground">
                    <iframe src="https://www.youtube.com/embed/YGAsG6_JgAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>

            <div id="vidtop-content">

                <div class="vid-info">

                    <h1>YouTube Fullscreen Background Demo</h1>
                    <p>
                        The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.

                    </p>
                    <a href="/inicio">Full article</a>
                    <h3>YouTube Fullscreen Background Demo</h3>
                    <p>
                        The International Space Station orbits the Earth every 92 minutes, with its crew seeing a sunrise 15 times a day. It exists as a scientific, educational, and engineering platform in low orbit, 330 to 435 kilometres above the Earth.

                    </p>

                    <a href="/registro">Full article</a>
                </div>
            </div>
        </div>


    )
}

export default Video

