<script>
  import '$lib/styles.css';

  // For now, default to system preference
  if (typeof window !== 'undefined') {
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.add(systemDark ? 'dark' : 'light');
  }
</script>

<slot />

<style global>
  @import "bootstrap-icons/font/bootstrap-icons.css";
</style>