
let trainedNet;

function encode(arg) {
    return arg.split('').map(x => (x.charCodeAt(0) / 256));
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data) {
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
};

function execute(input) {
    let results = trainedNet(encode(input));
    console.log(results)
    let output;
    let certainty;
    if (results.trump > results.kardashian) {
        output = 'Donald Trump'
        certainty = Math.floor(results.trump * 100)
    } else { 
        output = 'Kim Kardashian'
        certainty = Math.floor(results.kardashian * 100)
    }
	displayResult(output, certainty);

    return "I'm " + certainty + "% sure that tweet was written by " + output;
}

function displayResult(output, certainty) {
	if (certainty <= 60) {
		displayTossUp(output, certainty);
	}
	if (output === 'Donald Trump') {
		displayTrump(output, certainty);
	}
	else {
		displayKim(output, certainty);
	}
}

function displayTossUp(output, certainty) {
	writeResult('tossUpText', output, certainty)
	show('tossUpResult');
	show('tossUpText');
}

function displayTrump(output, certainty) {
	writeResult('trumpText', output, certainty)
	show('trumpResult');
	show('trumpText');
}

function displayKim(output, certainty) {
	writeResult('kimKText', output, certainty)
	show('kimKResult');
	show('kimKText');
}

function writeResult(name, output, certainty) {
	let text = "<h5>I'm " + certainty + "% sure that tweet was written by " + output + "</h5>";
	document.getElementById(name).innerHTML = text;
}

function show(name) {
	document.getElementById(name).style.display = 'block';
}

function hideAll() {
	document.getElementById('tossUpResult').style.display = 'none';
	document.getElementById('trumpResult').style.display = 'none';
	document.getElementById('kimKResult').style.display = 'none';
}

train(trainingData);
