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


var clientsRange = document.getElementById('clients-range')
var clientsValue = document.getElementById('clients-value')

clientsRange.addEventListener('input', function() {
	clientsValue.innerText = this.value
})


var serverClientsTypeSteps = [
	'Limited', 'Unlimited',
]

var serverClientsTypeRange = document.getElementById('server-clients-type-range')
serverClientsTypeRange.min = 0
serverClientsTypeRange.max = serverClientsTypeSteps.length - 1

serverClientsTypeRange.addEventListener('input', function() {
	var selectedEl = document.querySelector('#server-clients-type > .selected')
	var el = document.querySelector('#server-clients-type > [data-value="' + serverClientsTypeSteps[this.value] + '"]')

	if(el != selectedEl) {
		if(selectedEl) {
			selectedEl.classList.remove('selected')
		}

		if(el) {
			el.classList.add('selected')

			if(serverClientsTypeSteps[this.value] === 'Limited') {
				serverClientsRedundancyRange.disabled = true;
				document.getElementById('server-clients-redundancy').classList.add('disabled')
			} else {
				serverClientsRedundancyRange.disabled = false;
				document.getElementById('server-clients-redundancy').classList.remove('disabled')
			}
		}
	}
})

var serverClientsTypes = document.querySelectorAll('#server-clients-type > [data-value]')
for(var type of serverClientsTypes) {
	type.addEventListener('click', function() {
		serverClientsTypeRange.value = serverClientsTypeSteps.indexOf(this.dataset.value)
		var selectedEl = document.querySelector('#server-clients-type > .selected')
		if(this != selectedEl) {
			if(selectedEl) {
				selectedEl.classList.remove('selected')
			}

			this.classList.add('selected')

			if(this.dataset.value === 'Limited') {
				serverClientsRedundancyRange.disabled = true;
				document.getElementById('server-clients-redundancy').classList.add('disabled')
			} else {
				serverClientsRedundancyRange.disabled = false;
				document.getElementById('server-clients-redundancy').classList.remove('disabled')
			}
		}
	})
}


var serverClientsRedundancySteps = [
	'Redundant', 'Multi-Redundant',
]

var serverClientsRedundancyRange = document.getElementById('server-clients-redundancy-range')
serverClientsRedundancyRange.min = 0
serverClientsRedundancyRange.max = serverClientsRedundancySteps.length - 1

serverClientsRedundancyRange.addEventListener('input', function() {
	var selectedEl = document.querySelector('#server-clients-redundancy > .selected')
	var el = document.querySelector('#server-clients-redundancy > [data-value="' + serverClientsRedundancySteps[this.value] + '"]')

	if(el != selectedEl) {
		if(selectedEl) {
			selectedEl.classList.remove('selected')
		}

		if(el) {
			el.classList.add('selected')
		}
	}
})

var serverClientsTypes = document.querySelectorAll('#server-clients-redundancy > [data-value]')
for(var type of serverClientsTypes) {
	type.addEventListener('click', function() {
		if(this.parentElement.classList.contains('disabled')) {
			return
		}

		serverClientsRedundancyRange.value = serverClientsRedundancySteps.indexOf(this.dataset.value)
		var selectedEl = document.querySelector('#server-clients-redundancy > .selected')
		if(this != selectedEl) {
			if(selectedEl) {
				selectedEl.classList.remove('selected')
			}

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
		if(selectedEl) {
			selectedEl.classList.remove('selected')
		}

		if(el) {
			el.classList.add('selected')
		}
	}
})

var functionDescs = document.querySelectorAll('#function-descs > [data-value]')
for(var desc of functionDescs) {
	desc.addEventListener('click', function() {
		functionRange.value = functionSteps.indexOf(this.dataset.value)
		var selectedEl = document.querySelector('#function-descs > .selected')
		if(this != selectedEl) {
			if(selectedEl) {
				selectedEl.classList.remove('selected')
			}

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
		if(selectedEl) {
			selectedEl.classList.remove('selected')
		}

		if(el) {
			el.classList.add('selected')
		}
	}
})

var supportDescs = document.querySelectorAll('#support-descs > [data-value]')
for(var desc of supportDescs) {
	desc.addEventListener('click', function() {
		supportRange.value = supportSteps.indexOf(this.dataset.value)
		var selectedEl = document.querySelector('#support-descs > .selected')
		if(this != selectedEl) {
			if(selectedEl) {
				selectedEl.classList.remove('selected')
			}

			this.classList.add('selected')
		}
	})
}


var termRange = document.getElementById('term-range')
var termValue = document.getElementById('term-value')

termRange.addEventListener('input', function() {
	termValue.innerText = this.value
})
