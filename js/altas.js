const url = "https://sanronick.pythonanywhere.com/"
        // Capturamos el evento de envío del formulario
        document.getElementById('formulario').addEventListener('submit',
            function (event) {
                event.preventDefault() // Evitamos que se recargue la página
                // Obtenemos los valores del formulario
                var codigo = document.getElementById('codigo').value
                var descripcion = document.getElementById('descripcion').value
                var cantidad = document.getElementById('cantidad').value
                var precio = document.getElementById('precio').value
                // Creamos un objeto con los datos del producto
                var producto = {
                    codigo: codigo,
                    descripcion: descripcion,
                    cantidad: cantidad,
                    precio: precio
                    }
                console.log(producto)
                // Realizamos la solicitud POST al servidor
                fetch(URL + 'productos', {
                method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
                .then(function (response) {
                if (response.ok) {
                    return response.json() // Parseamos la respuesta JSON
                } else {
                    throw new Error('Error al agregar el producto.')
                }
                })
                .then(function (data) {
                alert('Producto agregado correctamente.')
                    document.getElementById('codigo').value = ""
                    document.getElementById('descripcion').value = ""
                    document.getElementById('cantidad').value = ""
                    document.getElementById('precio').value = ""
                })
                .catch(function (error) {
                console.log('Error:', error)
                alert('Error al agregar el producto.')
                })
            })

