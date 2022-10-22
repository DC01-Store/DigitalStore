import './Banner.css'

export default function Banner(options) {
    return (

        <section className='maim-banner'>
            <div className='maim-banner-container maim-banner-text'>
                <div className='maim-banner-text'>                    
                    <h2>Melhores ofertas personalizadas</h2>
                    <h1>Queima de stoque Nike 🔥</h1>
                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do
                        do tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className='maim-banner-button'>
                        ver ofertas
                    </button>
                </div>
                <div className='maim-banner-imagem'>
                    <img src="/images/tenis_banner.png" alt="tenis_banner" />   
                </div>

            </div>
        </section>
    )
}