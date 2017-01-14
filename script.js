var ioSteps = []

for(var i = 500; i < 5000; i += 500) {
	ioSteps.push(i)
}

for(var i = 5000; i < 100000; i += 1000) {
	ioSteps.push(i)
}

for(var i = 100000; i < 300000; i += 25000) {
	ioSteps.push(i)
}

for(var i = 300000; i <= 1000000; i += 100000) {
	ioSteps.push(i)
}

var ioRange = document.getElementById('io-range')
ioRange.min = 0
ioRange.max = ioSteps.length - 1

var ioValue = document.getElementById('io-value')

ioRange.addEventListener('input', function() {
	ioValue.innerText = ioSteps[this.value].toString().replace(/^(.+)(\d{3})$/, '$1,$2').replace(/^(.+)(\d{3},\d{3})$/, '$1,$2')
})


var serverClientsSteps = [
	'Limited', 'Unlimited', 'Redundant', 'Multi-Redundant',
]

var serverClientsRange = document.getElementById('server-clients-range')
serverClientsRange.min = 0
serverClientsRange.max = serverClientsSteps.length - 1

serverClientsRange.addEventListener('input', function() {
	var selectedEl = document.querySelector('#server-clients-descs > .selected')
	var el = document.querySelector('#server-clients-descs > [data-value="' + serverClientsSteps[this.value] + '"]')

	if(el != selectedEl) {
		if(selectedEl)
			selectedEl.classList.remove('selected')

		if(el)
			el.classList.add('selected')
	}
})

var serverClientsDescs = document.querySelectorAll('#server-clients-descs > [data-value]')
for(var desc of serverClientsDescs) {
	desc.addEventListener('click', function() {
		serverClientsRange.value = serverClientsSteps.indexOf(this.dataset.value)
		var selectedEl = document.querySelector('#server-clients-descs > .selected')
		if(this != selectedEl) {
			if(selectedEl)
				selectedEl.classList.remove('selected')

			this.classList.add('selected')
		}
	})
}


var functionSteps = [
	'View', 'Operate', 'Manage', 'Optimize',
]

var functionRange = document.getElementById('function-range')
functionRange.min = 0
functionRange.max = functionSteps.length - 1

functionRange.addEventListener('input', function() {
	var selectedEl = document.querySelector('#function-descs > .selected')
	var el = document.querySelector('#function-descs > [data-value="' + functionSteps[this.value] + '"]')

	if(el != selectedEl) {
		if(selectedEl)
			selectedEl.classList.remove('selected')

		if(el)
			el.classList.add('selected')
	}
})

var functionDescs = document.querySelectorAll('#function-descs > [data-value]')
for(var desc of functionDescs) {
	desc.addEventListener('click', function() {
		functionRange.value = functionSteps.indexOf(this.dataset.value)
		var selectedEl = document.querySelector('#function-descs > .selected')
		if(this != selectedEl) {
			if(selectedEl)
				selectedEl.classList.remove('selected')

			this.classList.add('selected')
		}
	})
}


var supportSteps = [
	'Standard', 'Premium', 'Elite',
]

var supportRange = document.getElementById('support-range')
supportRange.min = 0
supportRange.max = supportSteps.length - 1

supportRange.addEventListener('input', function() {
	var selectedEl = document.querySelector('#support-descs > .selected')
	var el = document.querySelector('#support-descs > [data-value="' + supportSteps[this.value] + '"]')

	if(el != selectedEl) {
		if(selectedEl)
			selectedEl.classList.remove('selected')

		if(el)
			el.classList.add('selected')
	}
})

var supportDescs = document.querySelectorAll('#support-descs > [data-value]')
for(var desc of supportDescs) {
	desc.addEventListener('click', function() {
		supportRange.value = supportSteps.indexOf(this.dataset.value)
		var selectedEl = document.querySelector('#support-descs > .selected')
		if(this != selectedEl) {
			if(selectedEl)
				selectedEl.classList.remove('selected')

			this.classList.add('selected')
		}
	})
}


// linkInputs('io-range', 'io-value')
linkInputs('clients-range', 'clients-value')
linkInputs('term-range', 'term-value')

function linkInputs(rangeId, valueId) {
	document.getElementById(rangeId).addEventListener('input', function() {
		document.getElementById(valueId).value = this.value
	})

	document.getElementById(valueId).addEventListener('input', function() {
		document.getElementById(rangeId).value = this.value
	})
}
