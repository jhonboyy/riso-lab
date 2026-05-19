<section class="canvas" id="myapp" style="width: 100%; height: 100%; position: relative;">
	<label for="fileInput" id="fileButton" class="custom-file-upload"> Choose your picture </label>
	<!-- svelte-ignore a11y-mouse-events-have-key-events -->
	<input
		style="display: none;"
		type="file"
		accept="image/*"
		id="fileInput"
		onchange={(e) => window.loadImageFromInput(e.target)}
	/>
</section>
