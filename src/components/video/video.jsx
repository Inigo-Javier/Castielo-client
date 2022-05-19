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

                    <h1>Proyecto Castielo</h1>
                    <p>
                        El proyecto castielo es una iniciativa que pretende dar a conocer los paisajes peculiares de la peninsula Ibérica.Su belleza natural y cultural incomparable dentro del marco europeo.
                    </p>
                    <p>
                        Nos encantaría que participases disfrutando de los paisajes y rincones que tenemos reservados para ti.
                    </p>
                    <a href="/inicio">Entra en tu casa</a>
                    <h3>YouTube Fullscreen Background Demo</h3>
                    <p>
                        Si quieres dar un paso mas y regalarnos tu rincón preferido a la comunidad que estamos formando, estaríamos encantados con tu aportación.
                    </p>

                    <a href="/lugares">Full article</a>

                    <p>
                        Por último, pero no menos importante, únete a la comunidad.Nos vemos pronto amigo.
                    </p>
                    <a href="/registro">Full article</a>
                </div>
            </div>
        </div>


    )
}

export default Video

