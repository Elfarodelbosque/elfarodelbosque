// Comportamiento común a todas las páginas: menú del móvil, página actual
// marcada en el menú y vídeos parados si el sistema pide reducir movimiento.
(function () {
    const boton = document.querySelector('.toggle_btn')
    const icono = boton && boton.querySelector('i')
    const menu = document.getElementById('dropdownMenu')

    function abrirMenu(abierto) {
        menu.classList.toggle('open', abierto)
        boton.setAttribute('aria-expanded', abierto)
        boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú')
        icono.className = abierto ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    }

    if (boton && menu) {
        boton.addEventListener('click', function () {
            abrirMenu(!menu.classList.contains('open'))
        })

        // Se cierra con Escape, al tocar fuera o al elegir una opción
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && menu.classList.contains('open')) {
                abrirMenu(false)
                boton.focus()
            }
        })
        document.addEventListener('click', function (e) {
            if (menu.classList.contains('open') && !menu.contains(e.target) && !boton.contains(e.target)) {
                abrirMenu(false)
            }
        })
        menu.addEventListener('click', function (e) {
            if (e.target.closest('a')) abrirMenu(false)
        })
    }

    // Marca la página actual en el menú
    const actual = decodeURIComponent(location.pathname.split('/').pop()) || 'index.html'
    document.querySelectorAll('.nav__links').forEach(function (enlace) {
        if (enlace.getAttribute('href') === actual) enlace.setAttribute('aria-current', 'page')
    })

    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)')
    const movil = window.matchMedia('(max-width: 768px)')

    // Vídeos con versión de móvil: imagen fija vertical mientras carga
    function ajustarPosters() {
        document.querySelectorAll('video[data-poster-movil]').forEach(function (video) {
            if (!video.dataset.posterAncho) video.dataset.posterAncho = video.getAttribute('poster')
            video.poster = movil.matches ? video.dataset.posterMovil : video.dataset.posterAncho
        })
    }

    // Con "reducir movimiento" los vídeos se quedan en su imagen fija
    function aplicarMovimiento() {
        document.querySelectorAll('video[muted][loop]').forEach(function (video) {
            if (reducir.matches) {
                video.autoplay = false
                video.pause()
                video.load()
            } else {
                video.autoplay = true
                video.play().catch(function () {})
            }
        })
    }

    ajustarPosters()
    aplicarMovimiento()
    reducir.addEventListener('change', aplicarMovimiento)

    // Si cambia el ancho (girar la tablet, agrandar la ventana) se vuelve a
    // elegir el vídeo adecuado; el navegador solo lo elige al cargar
    let eraMovil = movil.matches
    function revisarAncho() {
        if (movil.matches === eraMovil) return
        eraMovil = movil.matches
        ajustarPosters()
        document.querySelectorAll('video[data-poster-movil]').forEach(function (video) {
            video.load()
            if (!reducir.matches) video.play().catch(function () {})
        })
    }
    movil.addEventListener('change', revisarAncho)
    window.addEventListener('resize', revisarAncho)
})()
