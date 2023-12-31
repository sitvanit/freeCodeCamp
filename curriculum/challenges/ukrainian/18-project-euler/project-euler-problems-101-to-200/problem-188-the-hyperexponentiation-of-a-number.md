---
id: 5900f4291000cf542c50ff3b
title: 'Завдання 188: гіперпотенціювання числа'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

Гіперпотенціювання або тетрація числа $a$ натуральним числом $b$, позначено як $a↑↑b$ чи ${}^ba$, рекурсивно визначається ось так:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

Таким чином маємо $3↑↑2 = 3^3 = 27$, звідси $3↑↑3 = 3^{27} = 7625597484987$ та $3↑↑4$ приблизно дорівнює ${10}^{3.6383346400240996 \times {10}^{12}}$. Знайдіть останні вісім цифр числа $1777↑↑1855$.

# --hints--

`hyperexponentation()` має повернути `95962097`.

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```
