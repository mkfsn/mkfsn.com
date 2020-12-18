<script>
    import Nav from "./components/Nav.svelte";
    import Tailwind from './Tailwind.svelte';
    import Card from "./components/Card.svelte";
</script>

<main class="App">
    <Nav/>
    <div class="flex items-center justify-center m-24">
        <Card/>
    </div>
</main>

<style>
    .App {
        background-color: rgba(13,110,253,.88);
        min-height: 100vh;
        background-image: url("/images/bg.jpg");
        background-size: cover;
        background-blend-mode: screen;
    }
</style>