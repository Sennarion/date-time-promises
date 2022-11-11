import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

function createPromise(position, time) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      shouldResolve ? resolve({ position, time }) : reject({ position, time });
    }, time);
  });
}

function createPromises(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, time }) =>
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${time}ms`)
      )
      .catch(({ position, time }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${time}ms`)
      );
    delay += step;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  const delay = Number(e.currentTarget.elements[0].value);
  const step = Number(e.currentTarget.elements[1].value);
  const amount = Number(e.currentTarget.elements[2].value);

  createPromises(delay, step, amount);
}

formRef.addEventListener('submit', onFormSubmit);
