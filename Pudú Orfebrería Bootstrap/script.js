$(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});

$(document).ready(function () {
    // Inicializar Owl Carousel
    $("#hero-carousel").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: { items: 1 }
        }
    });

    // Productos
    const products = [
        {
            title: "Colgante Ballena",
            image: "img/Ballena.jpeg",
            description: "La gracia de las profundidades, capturada en cada trazo de plata."
        },
        {
            title: "Colgante de Perro San Bernardo",
            image: "img/Beto.jpeg",
            description: "Los ángeles tomaron forma canina para enseñarnos amor verdadero."
        },
        {
            title: "Colgante Araucaria Carpintero Caballito",
            image: "img/Caballito.jpeg",
            description: "Tres espíritus nativos se entrelazan en plata como promesa de conexión con la tierra y el cielo."
        },
        {
            title: "Colgante Hippocampus Ingens",
            image: "img/Caballito2.jpeg",
            description: "Monógamo por naturaleza, eterno por elección: este colgante lleva el alma del hipocampo y el sello del amor verdadero."
        },
        {
            title: "Colgante Pájaro Campana",
            image: "img/Campana.jpeg",
            description: "No se fue, solo aprendió a volar sin hacer ruido. Este pájaro campana guarda tu nombre en cada nota que suena."
        },
        {
            title: "Colgante de Gato",
            image: "img/Gato.jpeg",
            description: "Guardián silencioso de sueños y misterios, siempre cerca del corazón."
        },
        {
            title: "Colgante de León U de Chile",
            image: "img/Leon.jpeg",
            description: "Fuerza, honor y coraje: el león de la U, inmortalizado en cada línea de este colgante."
        },
        {
            title: "Colgante de Perrito",
            image: "img/Perro.jpeg",
            description: "Un lazo que no rompe el tiempo: este colgante guarda el amor por quien siempre te espera."
        },
        {
            title: "Colgante Pudú",
            image: "img/Pudu.jpeg",
            description: "La delicadeza de los bosques en cada detalle: el Pudú puda revive en plata como símbolo de identidad y conexión con la naturaleza."
        },
        {
            title: "Colgante de Puma/Pangui",
            image: "img/Puma.jpeg",
            description: "Símbolo del depredador de los Andes, calado en plata 950 con detalles únicos."
        }
    ];

    let currentIndex = 0;

    function updateModalContent() {
        const product = products[currentIndex];
        $('#catalogModalLabel').text(product.title);
        $('#modalImage').attr('src', product.image);
        $('#modalDescription').text(product.description);
    }

    const modalElement = document.getElementById('catalogModal');
    const bsModal = new bootstrap.Modal(modalElement, {
        backdrop: true,
        keyboard: true,
        focus: false // evitar problemas con aria-hidden y focus
    });

    // Manejo del clic en las tarjetas
    $('.card').on('click', function () {
        const clickedIndex = parseInt($(this).parent().data('index'));
        currentIndex = (!isNaN(clickedIndex) && clickedIndex >= 0 && clickedIndex < products.length)
            ? clickedIndex : 0;

        updateModalContent(); // Actualizar contenido antes de mostrar modal
        bsModal.show();

        // Habilitar botones de navegación
        $('#nextProduct, #prevProduct').prop('disabled', false);
    });

    // Deshabilitar botones al cerrar el modal
    $('#catalogModal').on('hidden.bs.modal', function () {
        $('#nextProduct, #prevProduct').prop('disabled', true);
    });

    // Botones siguiente y anterior
    $('#nextProduct').on('click', function () {
        currentIndex = (currentIndex + 1) % products.length;
        updateModalContent();
    });

    $('#prevProduct').on('click', function () {
        currentIndex = (currentIndex - 1 + products.length) % products.length;
        updateModalContent();
    });

    // Navegación con teclado cuando el modal está visible
    $(document).keydown(function (e) {
        if ($('#catalogModal').hasClass('show')) {
            if (e.key === 'ArrowLeft') {
                currentIndex = (currentIndex - 1 + products.length) % products.length;
                updateModalContent();
            } else if (e.key === 'ArrowRight') {
                currentIndex = (currentIndex + 1) % products.length;
                updateModalContent();
            }
        }
    });
});