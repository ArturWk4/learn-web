function initMap() {
    let uluru = {
        lat: 53.9057563,
        lng: 27.4373137
    };
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map
    })
}


