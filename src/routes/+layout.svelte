<script>
  // Import files
  import "$lib/styles.css";
  import { page } from "$app/stores";

  // Returns the 'active' class if on given path
  function isActive(path) {
    if (!path) return $page.url.pathname == "/" ? "active" : "";
    return $page.url.pathname.startsWith(path) ? "active" : "";
  }

  // Temp: For now, default to system preference
  if (typeof window !== 'undefined') {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.setAttribute('data-theme', systemDark ? 'dark' : 'light');
  }
</script>

<!-- Dynamically inserted +page.svelte file -->
<slot />

<!-- Nav bar -->
<nav class="frosty">
    <a href="/" class={isActive()}>
        <i class="bi bi-house-fill"></i>
        <p>Home</p>
    </a>
    <a href="/categories" class={isActive("/categories")}>
        <i class="bi bi-tags"></i>
        <p>Categories</p>
    </a>
    <a href="/transactions" class={isActive("/transactions")}>
        <i class="bi bi-clock-history"></i>
        <p>Transactions</p>
    </a>
    <a href="/assistant" class={isActive("/assistant")}>
        <i class="bi bi-stars"></i>
        <p>Assistant</p>
    </a>
</nav>

<style global>
  @import "bootstrap-icons/font/bootstrap-icons.css";
</style>