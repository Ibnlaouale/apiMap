
function initMap() {
                // Coordonnées spécifiques que vous souhaitez utiliser
                const specificLat = 13.233113504875115;
                const specificLng = 2.276291388680668;
                // Créer une carte centrée sur les coordonnées spécifiques
                const myMap = new google.maps.Map(document.querySelector('#map'), {
                    center: { lat: specificLat, lng: specificLng },
                    zoom: 10  // Niveau de zoom, vous pouvez ajuster cela selon vos besoins
                });

                // Ajouter un marqueur pour indiquer les coordonnées spécifiques
                const marker = new google.maps.Marker({
                    position: { lat: specificLat, lng: specificLng },
                    map: myMap,
                    title: 'CodeLoccol'
                });
            }