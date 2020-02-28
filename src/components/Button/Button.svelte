<button class="button" on:click={onClick}>
    {text}
</button>

<style type="text/scss" lang="scss">
  .button {
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: red;
    cursor: pointer;
    font-size: 15px;
    padding: 3px 10px;
    margin: 10px;

    &:hover {
      color: red
    }
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  
  export let text = '';

  const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event)
  }
</script>
