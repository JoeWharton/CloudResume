function websiteVisits(response) {
    document.querySelector("#visits").textContent = response.value;
}


<script async src="https://api.countapi.xyz/hit/www.josephwharton.co.uk/949b04d9-cb01-4c3f-a399-c442ee1ced37?callback=websiteVisits"></script>