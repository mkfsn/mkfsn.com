<script>
    import Icon from 'svelte-awesome';
    import { twitterSquare, linkedinSquare, githubSquare, mapMarker } from 'svelte-awesome/icons';
    let this_year = (new Date()).getFullYear();
</script>

<figure class="bg-white rounded-xl p-4 card">
    <img class="rounded-full mx-auto shadow-lg -mt-16" src="/images/avatar.png" alt="" width="100" height="100">
    <figcaption>
        <div class="pt-6 space-y-4 text-center">
            <h2 class="text-3xl">
                <span class="font-medium">Pei-Ming Wu</span>
                <span class="text-xl">aka mkfsn</span>
            </h2>
            <h5>
                <a class="pl-2" target="_blank" href="https://www.google.com.tw/maps/place/%E5%8F%B0%E7%81%A3/">
                    <Icon scale="1.5" data={mapMarker}/> Taiwan
                </a>
            </h5>
        </div>
        <div class="text-center pt-5">
            <a class="pl-1" target="_blank" href="//twitter.com/mkfsn">
                <Icon scale="1.5" data={twitterSquare}/>
            </a>
            <a class="pl-1" target="_blank" href="//github.com/mkfsn">
                <Icon scale="1.5" data={githubSquare}/>
            </a>
            <a class="pl-1" target="_blank" href="//linkedin.com/in/mkfsn">
                <Icon scale="1.5" data={linkedinSquare}/>
            </a>
        </div>
    </figcaption>
    <p class="text-center mt-5 pt-12">&copy; {this_year}</p>
</figure>

<style>
    .card {
        width: 50vw;
        max-width: 600px;
        min-width: 300px;
    }
</style>