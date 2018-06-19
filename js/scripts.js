
let trainedNet;

function encode(arg) {
   return arg.split('').map(x => (x.charCodeAt(0) / 255));
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
   console.log('Finished training...');
};

function execute(input) {
   let test = encode(input);
   let results = trainedNet(encode(input));
   let output;
   results.trump > results.kardashian ? output = 'Trump' : output = 'Kardashian';
   results.trump === results.kardashian ? output = 'Toss-up' : output = output; // This should basically never happen.
   return output;
};

train(trainingData);

function Submitbtnclick(userInput) {
    let result = execute(userInput)
    if (result === 'Trump'){
        hide(document.getElementById('kimKResult'));
        hide(document.getElementById('tossupResult'))
        show(document.getElementById('trumpResult'));
    }
    if (result === 'Kardashian'){
        hide(document.getElementById('tossupResult'));
        hide(document.getElementById('trumpResult'));
        show(document.getElementById('kimKResult'));
    }
    if (result === 'Toss-up'){
        hide(document.getElementById('kimKResult'));
        hide(document.getElementById('trumpResult'));
        show(document.getElementById('tossupResult'));
    }
    show(document.getElementById('resultSection'));
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').setAttribute('placeholder') = 'Try Again...';
};

let show = function (elem) {
	elem.style.display = 'block';
};
let hide = function (elem) {
	elem.style.display = 'none';
};


