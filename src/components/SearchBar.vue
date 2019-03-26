<template>
    <div>
      <label>
        Search bar
      </label>
      <input
        class="search-input"
        @input="onInput"
        placeholder="Search here..."
      />
    </div>
</template>


<script>
  export default {
    name: 'SearchBar',
    methods: {
      onInput(e) {
        this.$emit('termChange', e.target.value)
      }
    }
  }
</script>

<style>
  .search-input {
    padding: 6px;
    outline: none;
    font-size: 15px;
    border-radius: 2px;
    border: 1px solid #f5f5f5;
  }
  .search-input:hover, .search-input:focus {
   border-color: cornflowerblue;
  }
</style>
