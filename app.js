const input = document.querySelector("input");
const array = []; /* errore: questa variabile sia semanticamente che logicamente deve essere un array*/

input.addEventListener("keypress", function (event) {
  if (event.code !== "Enter") return; /* errore: Corretto l'uso dell'operatore di confronto in if (event.code != 'Enter') utilizzando !== */
  if (input.value.length === 0) return; /* errore: corretto il test sulla lunghezza dell'input a if (input.value.length === 0) */

  array.push(input.value); /* errore: il metodo per inserire un elemento in un array è push e non add */

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = input.value; /* errore: l'attributo corretto di li non è text ma textContent */
  document.querySelector("ul").append(li); /* errore: non si può usare il metodo push per aggiungere un elemento html con js */

  let counter = "";
  let item = array[0];
  let max = 1; /* errore: non si può impostare max a const e poi assegnarli come valore una variabile let a riga 32 */
  const elems = [];

  for (let i = 0; i < array.length; i++) {
    let val = array[i];

    if (!elems[val]) {
      elems[val] = 1;
    } else {
      elems[val]++;
    }

    for (let j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        counter++;
        if (max < counter) max = counter;
        item = array[i];
      }
    }

    counter = 0;
  }

  const alert = document.querySelector(".alert"); /* errore: il selettore corretto è query selector e manca il punto prima della classe */

  alert.classList.remove("d-none");
  alert.classList.add("d-flex");

  alert.querySelector("span:first-child").textContent = item;
  alert.querySelector("span:last-child").textContent = max;

  console.log(`${item} trovato ${max} volte`); /* errore: c'erano gli apici normali e non i backtick */
});
