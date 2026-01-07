<script>
	let isCoverVisible = true;

	function handleDownloadClick() {
		isCoverVisible = false;
	}

	function handleFileDownload() {
		isCoverVisible = true;
	}
</script>

<section class="download-section">
	<button
		on:click={handleDownloadClick}
		style="visibility: {isCoverVisible ? 'visible' : 'hidden'}"
		id="downloadCOVERButton"
	>
		Download
	</button>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<button
		on:click={() => {
			handleFileDownload();
			window.exportLayersAsZIP();
		}}
		style="visibility: {isCoverVisible ? 'hidden' : 'visible'}"
		id="downloadPDFButton"
	>
		PDF (printing)
	</button>

	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<button
		on:click={() => {
			handleFileDownload();
			window.downloadAsJPG();
		}}
		style="visibility: {isCoverVisible ? 'hidden' : 'visible'}"
		id="downloadJPGButton"
	>
		JPG (model)
	</button>
</section>
