<script>
    //https://blog.tihomir-selak.from.hr/svg-in-svelte-world/
    export let squares = 8;
export let  width = 400;
$: fields = [...Array(squares)];

function getEven(i, j) {
	return ((i + j) % 2) === 0;
}
	
</script>

<style>
.white {
    fill: #fff;
}
.black {
    fill: #000;
}

</style>

  <svg width="{width}px" height="{width}px" viewbox="0 0 {squares + 1} {squares + 1}">
	<rect class="board" width="100%" height="100%" fill="orange"/>
	{#each fields as item, i}
		{#each fields as item, j}
			<rect
				class={getEven(i, j) ? 'white' : 'black'}
				x={i + 0.5}
				y={j + 0.5}
				width="1"
				height="1"
			/>
		{/each}
	{/each}
</svg>