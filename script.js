const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['02-14', '02-15', '02-16', '02-17', '02-18', '02-19', '02-20'],
    takepills: ['02-14', '02-16'],
    journal: ['02-15']
}

nlwSetup.setData(data)
nlwSetup.load()