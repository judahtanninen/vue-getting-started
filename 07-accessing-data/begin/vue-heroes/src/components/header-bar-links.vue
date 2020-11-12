<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-chrome fa-2x" aria-hidden="true"></i>
          </a>
          <a :href="twitter" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-rebel fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      github: 'https://chucknorris.com',
      twitter: 'https://chucknorris.com',
    };
  },
};
</script>
