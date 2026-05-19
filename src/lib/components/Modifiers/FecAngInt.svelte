<div class="ValuesContainer">
	<div class="item grid">
		<span id="frecuencyItem" style="cursor: help;">Frecuency</span>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="frecuencyRed"
			value="5"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'frecuencyRed')}
		/>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="frecuencyGreen"
			value="5"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'frecuencyGreen')}
		/>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="frecuencyBlue"
			value="5"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'frecuencyBlue')}
		/>
	</div>
	<div class="item grid">
		<span id="angleItem" style="cursor: help;">Angle</span>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="angleRed"
			value="45"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'angleRed')}
		/>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="angleGreen"
			value="45"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'angleGreen')}
		/>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="angleBlue"
			value="45"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'angleBlue')}
		/>
	</div>
	<div class="item grid">
		<span id="intensityItem" style="cursor: help;">Intensity</span>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="intensityRed"
			value="127"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'intensityRed')}
		/>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="intensityGreen"
			value="127"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'intensityGreen')}
		/>
	</div>
	<div class="item grid">
		<input
			type="text"
			id="intensityBlue"
			value="127"
			onblur={() => window.actualizarVariables()}
			onchange={() => window.actualizarVariables()}
			onkeydown={(event) => window.checkEnter(event, 'intensityBlue')}
		/>
	</div>
</div>
