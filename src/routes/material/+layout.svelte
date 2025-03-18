<script lang="ts">
    import SubMenuBar from "$components/subMenuBar.svelte";



    // props
    let { data, children } = $props();
</script>



<SubMenuBar data={data} />
{@render children()}